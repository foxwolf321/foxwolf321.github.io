import { FORMULAS, FREQUENCIES } from "./formulas.js";

const STORAGE_KEY = "math-g3-cards:v1";
const DAY = 24 * 60 * 60 * 1000;
const FREQUENCY_ORDER = ["most", "frequent", "advanced"];
const COURSE_ORDER = ["共通", "数学Ⅰ・A", "数学Ⅱ・B", "数学Ⅲ", "重要公式"];

const dom = {
  cloudStatus: document.querySelector("#cloudStatus"),
  todayDue: document.querySelector("#todayDue"),
  tabs: [...document.querySelectorAll(".tab-button")],
  panes: [...document.querySelectorAll(".view-pane")],
  listGenreFilter: document.querySelector("#listGenreFilter"),
  listFrequencyFilter: document.querySelector("#listFrequencyFilter"),
  studyGenreFilter: document.querySelector("#studyGenreFilter"),
  studyFrequencyFilter: document.querySelector("#studyFrequencyFilter"),
  formulaSearch: document.querySelector("#formulaSearch"),
  formulaCount: document.querySelector("#formulaCount"),
  formulaList: document.querySelector("#formulaList"),
  deckSummary: document.querySelector("#deckSummary"),
  studyCardMount: document.querySelector("#studyCardMount"),
  progressOverview: document.querySelector("#progressOverview"),
  progressBreakdown: document.querySelector("#progressBreakdown"),
  resetProgress: document.querySelector("#resetProgress")
};

const frequencyOptions = [
  { value: "all", label: "すべて" },
  ...FREQUENCY_ORDER.map((value) => ({ value, label: FREQUENCIES[value] }))
];

const genreOptions = [
  { value: "all", label: "すべて" },
  ...uniqueGenres().map((value) => ({ value, label: value }))
];

let state = readState();
let currentCardId = "";
let showingAnswer = false;
let mathTimer = 0;
let cloudTimer = 0;
let cloudHandle = null;

init();

function init() {
  renderAll();
  bindEvents();
  initCloudSync();
}

function bindEvents() {
  dom.tabs.forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown-field")) closeDropdowns();
  });

  dom.formulaSearch.addEventListener("input", () => {
    state.settings.search = dom.formulaSearch.value;
    saveState({ cloud: false });
    renderFormulaList();
  });

  dom.studyCardMount.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    if (action === "show") {
      showingAnswer = true;
      renderStudy();
      return;
    }
    if (action === "next") {
      moveToNextCard();
      return;
    }
    if (["again", "hard", "good", "easy"].includes(action)) {
      reviewCard(currentCardId, action);
      moveToNextCard();
    }
  });

  dom.resetProgress.addEventListener("click", () => {
    if (!window.confirm("進度をリセットしますか？")) return;
    state.cards = {};
    currentCardId = "";
    showingAnswer = false;
    saveState();
    renderAll();
  });
}

function switchView(view) {
  dom.tabs.forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  dom.panes.forEach((pane) => pane.classList.toggle("is-active", pane.id === `${view}View`));
  typesetSoon();
}

function renderAll() {
  dom.formulaSearch.value = state.settings.search || "";
  renderFilters();
  renderFormulaList();
  renderStudy();
  renderProgress();
  renderHeader();
}

function renderFilters() {
  renderDropdown(dom.listGenreFilter, "ジャンル", genreOptions, state.settings.listGenres, (selected) => {
    state.settings.listGenres = selected;
    saveState({ cloud: false });
    renderFormulaList();
  });
  renderDropdown(dom.listFrequencyFilter, "頻度", frequencyOptions, state.settings.listFrequencies, (selected) => {
    state.settings.listFrequencies = selected;
    saveState({ cloud: false });
    renderFormulaList();
  });
  renderDropdown(dom.studyGenreFilter, "ジャンル", genreOptions, state.settings.studyGenres, (selected) => {
    state.settings.studyGenres = selected;
    currentCardId = "";
    showingAnswer = false;
    saveState({ cloud: false });
    renderStudy();
  });
  renderDropdown(dom.studyFrequencyFilter, "頻度", frequencyOptions, state.settings.studyFrequencies, (selected) => {
    state.settings.studyFrequencies = selected;
    currentCardId = "";
    showingAnswer = false;
    saveState({ cloud: false });
    renderStudy();
  });
}

function renderDropdown(root, label, options, selected, onChange) {
  const normalized = normalizeSelection(selected);
  root.replaceChildren();

  const labelNode = document.createElement("span");
  labelNode.className = "dropdown-label";
  labelNode.textContent = label;

  const button = document.createElement("button");
  button.className = "dropdown-toggle";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.textContent = summarizeSelection(options, normalized);

  const panel = document.createElement("div");
  panel.className = "dropdown-panel";
  panel.hidden = true;

  options.forEach((option) => {
    const optionLabel = document.createElement("label");
    optionLabel.className = "dropdown-option";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = option.value;
    checkbox.checked = normalized.includes("all") ? option.value === "all" : normalized.includes(option.value);
    const text = document.createElement("span");
    text.textContent = option.label;
    optionLabel.append(checkbox, text);
    panel.append(optionLabel);
  });

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = panel.hidden;
    closeDropdowns();
    panel.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
  });

  panel.addEventListener("change", (event) => {
    const changed = event.target;
    const checked = [...panel.querySelectorAll("input:checked")].map((input) => input.value);
    let next;
    if (changed.value === "all" && changed.checked) {
      next = ["all"];
    } else {
      next = checked.filter((value) => value !== "all");
      if (next.length === 0) next = ["all"];
    }
    onChange(next);
  });

  root.append(labelNode, button, panel);
}

function closeDropdowns() {
  document.querySelectorAll(".dropdown-panel").forEach((panel) => {
    panel.hidden = true;
  });
  document.querySelectorAll(".dropdown-toggle").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

function renderFormulaList() {
  const cards = filteredCards("list");
  dom.formulaCount.textContent = `${cards.length}枚 / 全${FORMULAS.length}枚`;
  if (cards.length === 0) {
    dom.formulaList.innerHTML = `<div class="empty-state">該当する公式がありません</div>`;
    return;
  }

  dom.formulaList.innerHTML = cards.map((card) => `
    <article class="formula-card freq-${card.frequency}">
      ${metaHtml(card)}
      <h2>${escapeHtml(card.title)}</h2>
      <div class="formula-main">${card.answer}</div>
    </article>
  `).join("");
  typesetSoon();
}

function renderStudy() {
  const pool = sortedStudyPool();
  const now = Date.now();
  const due = pool.filter((card) => getProgress(card.id).dueAt <= now).length;
  const fresh = pool.filter((card) => !getProgress(card.id).lastReviewed).length;
  dom.deckSummary.textContent = `${pool.length}枚 / 今日 ${due}枚 / 未学習 ${fresh}枚`;

  if (pool.length === 0) {
    dom.studyCardMount.innerHTML = `<div class="empty-state">該当する問題がありません</div>`;
    return;
  }

  if (!pool.some((card) => card.id === currentCardId)) {
    currentCardId = pool[0].id;
    showingAnswer = false;
  }

  const card = FORMULAS.find((item) => item.id === currentCardId) || pool[0];
  const progress = getProgress(card.id);
  const face = showingAnswer ? card.answer : card.prompt;
  const mastery = masteryFor(card.id);
  const dueText = progress.lastReviewed ? nextDueLabel(progress.dueAt) : "未学習";

  dom.studyCardMount.innerHTML = `
    <article class="study-card freq-${card.frequency}">
      <div>
        ${metaHtml(card, `<span class="rating-pill">${mastery}%</span>`)}
        <h2>${escapeHtml(card.title)}</h2>
        <div class="study-face">${face}</div>
      </div>
      <div class="card-meta">
        <span class="rating-pill">復習 ${progress.reviews || 0}</span>
        <span class="rating-pill">${dueText}</span>
      </div>
      ${showingAnswer ? ratingButtonsHtml() : studyButtonsHtml()}
    </article>
  `;
  typesetSoon();
}

function renderProgress() {
  const total = FORMULAS.length;
  const reviewed = FORMULAS.filter((card) => getProgress(card.id).lastReviewed).length;
  const mastered = FORMULAS.filter((card) => masteryFor(card.id) >= 80).length;
  const due = FORMULAS.filter((card) => getProgress(card.id).dueAt <= Date.now()).length;
  const average = Math.round(FORMULAS.reduce((sum, card) => sum + masteryFor(card.id), 0) / total);

  dom.progressOverview.innerHTML = `
    ${statPanel("総カード", total)}
    ${statPanel("今日", due)}
    ${statPanel("学習済み", reviewed)}
    ${statPanel("平均", `${average}%`)}
  `;

  const frequencyRows = FREQUENCY_ORDER.map((frequency) => {
    const group = FORMULAS.filter((card) => card.frequency === frequency);
    return progressRow(FREQUENCIES[frequency], group);
  });
  const genreRows = uniqueGenres().map((genre) => {
    const group = FORMULAS.filter((card) => card.genre === genre);
    return progressRow(genre, group);
  });

  dom.progressBreakdown.innerHTML = [
    progressRow("習得", FORMULAS, mastered),
    ...frequencyRows,
    ...genreRows
  ].join("");
}

function renderHeader() {
  const due = FORMULAS.filter((card) => getProgress(card.id).dueAt <= Date.now()).length;
  dom.todayDue.textContent = String(due);
}

function studyButtonsHtml() {
  return `
    <div class="study-actions">
      <button class="primary-button" type="button" data-action="show">答え</button>
      <button class="secondary-button" type="button" data-action="next">次へ</button>
    </div>
  `;
}

function ratingButtonsHtml() {
  return `
    <div class="rating-actions">
      <button class="rating-button again" type="button" data-action="again">もう一度</button>
      <button class="rating-button hard" type="button" data-action="hard">難しい</button>
      <button class="rating-button good" type="button" data-action="good">良い</button>
      <button class="rating-button easy" type="button" data-action="easy">簡単</button>
    </div>
  `;
}

function metaHtml(card, extra = "") {
  return `
    <div class="card-meta">
      <div class="card-tags">
        <span>${escapeHtml(card.course)}</span>
        <span>${escapeHtml(card.genre)}</span>
      </div>
      <span class="frequency-chip ${card.frequency}">${FREQUENCIES[card.frequency]}</span>
      ${extra}
    </div>
  `;
}

function statPanel(label, value) {
  return `
    <div class="stat-panel">
      <span class="stat-label">${escapeHtml(label)}</span>
      <span class="stat-value">${escapeHtml(String(value))}</span>
    </div>
  `;
}

function progressRow(label, cards, fixedCount = null) {
  const count = fixedCount ?? cards.filter((card) => masteryFor(card.id) >= 60).length;
  const percent = cards.length ? Math.round(cards.reduce((sum, card) => sum + masteryFor(card.id), 0) / cards.length) : 0;
  const display = fixedCount == null ? `${percent}%` : `${count}/${cards.length}`;
  return `
    <div class="progress-row">
      <div class="progress-row-head">
        <span>${escapeHtml(label)}</span>
        <span>${display}</span>
      </div>
      <div class="progress-track"><div class="progress-bar" style="width:${Math.max(0, Math.min(100, percent))}%"></div></div>
    </div>
  `;
}

function filteredCards(scope) {
  const genreKey = scope === "study" ? "studyGenres" : "listGenres";
  const frequencyKey = scope === "study" ? "studyFrequencies" : "listFrequencies";
  const genres = normalizeSelection(state.settings[genreKey]);
  const frequencies = normalizeSelection(state.settings[frequencyKey]);
  const query = (state.settings.search || "").trim().toLowerCase();

  return sortCards(FORMULAS.filter((card) => {
    const matchesGenre = genres.includes("all") || genres.includes(card.genre);
    const matchesFrequency = frequencies.includes("all") || frequencies.includes(card.frequency);
    const haystack = `${card.course} ${card.genre} ${card.title} ${card.prompt} ${card.answer}`.toLowerCase();
    const matchesQuery = scope === "study" || query.length === 0 || haystack.includes(query);
    return matchesGenre && matchesFrequency && matchesQuery;
  }));
}

function sortedStudyPool() {
  const now = Date.now();
  return filteredCards("study").sort((a, b) => {
    const pa = getProgress(a.id);
    const pb = getProgress(b.id);
    const da = pa.dueAt || 0;
    const db = pb.dueAt || 0;
    const aBucket = da <= now ? 0 : 1;
    const bBucket = db <= now ? 0 : 1;
    if (aBucket !== bBucket) return aBucket - bBucket;
    if (da !== db) return da - db;
    return sortCards([a, b])[0].id === a.id ? -1 : 1;
  });
}

function sortCards(cards) {
  return [...cards].sort((a, b) => {
    const course = COURSE_ORDER.indexOf(a.course) - COURSE_ORDER.indexOf(b.course);
    if (course !== 0) return course;
    const frequency = FREQUENCY_ORDER.indexOf(a.frequency) - FREQUENCY_ORDER.indexOf(b.frequency);
    if (frequency !== 0) return frequency;
    return a.genre.localeCompare(b.genre, "ja") || a.title.localeCompare(b.title, "ja");
  });
}

function moveToNextCard() {
  const pool = sortedStudyPool();
  if (pool.length === 0) {
    currentCardId = "";
    showingAnswer = false;
    renderStudy();
    return;
  }
  const index = pool.findIndex((card) => card.id === currentCardId);
  currentCardId = pool[(index + 1 + pool.length) % pool.length].id;
  showingAnswer = false;
  renderStudy();
}

function reviewCard(cardId, rating) {
  const progress = getProgress(cardId);
  progress.ease = progress.ease || 2.5;
  progress.intervalDays = progress.intervalDays || 0;
  progress.reviews = (progress.reviews || 0) + 1;
  progress.lastReviewed = Date.now();
  progress.lastRating = rating;

  if (rating === "again") {
    progress.lapses = (progress.lapses || 0) + 1;
    progress.ease = Math.max(1.35, progress.ease - 0.2);
    progress.intervalDays = 0.04;
  } else if (rating === "hard") {
    progress.ease = Math.max(1.35, progress.ease - 0.06);
    progress.intervalDays = progress.intervalDays ? Math.max(1, progress.intervalDays * 1.25) : 1;
  } else if (rating === "good") {
    progress.intervalDays = progress.intervalDays ? Math.max(2, progress.intervalDays * progress.ease) : 2;
  } else if (rating === "easy") {
    progress.ease = Math.min(3.2, progress.ease + 0.16);
    progress.intervalDays = progress.intervalDays ? Math.max(4, progress.intervalDays * progress.ease * 1.35) : 4;
  }

  progress.dueAt = Date.now() + progress.intervalDays * DAY;
  progress.mastery = computeMastery(progress);
  state.cards[cardId] = progress;
  saveState();
  renderHeader();
  renderProgress();
}

function getProgress(cardId) {
  if (!state.cards[cardId]) {
    state.cards[cardId] = {
      dueAt: 0,
      intervalDays: 0,
      reviews: 0,
      lapses: 0,
      ease: 2.5,
      mastery: 0
    };
  }
  return state.cards[cardId];
}

function masteryFor(cardId) {
  return computeMastery(getProgress(cardId));
}

function computeMastery(progress) {
  if (!progress.lastReviewed) return 0;
  const reviewScore = Math.min(48, (progress.reviews || 0) * 12);
  const intervalScore = Math.min(42, Math.log2((progress.intervalDays || 0) + 1) * 16);
  const easeScore = Math.max(0, ((progress.ease || 2.5) - 1.35) * 8);
  const lapsePenalty = (progress.lapses || 0) * 12;
  return Math.max(0, Math.min(100, Math.round(reviewScore + intervalScore + easeScore - lapsePenalty)));
}

function nextDueLabel(dueAt) {
  const diff = dueAt - Date.now();
  if (diff <= 0) return "今日";
  const days = Math.ceil(diff / DAY);
  return `${days}日後`;
}

function readState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return normalizeState(parsed);
  } catch {
    return normalizeState({});
  }
}

function normalizeState(candidate) {
  return {
    version: 1,
    updatedAt: Number(candidate.updatedAt || 0),
    settings: {
      listGenres: normalizeSelection(candidate.settings?.listGenres),
      listFrequencies: normalizeSelection(candidate.settings?.listFrequencies),
      studyGenres: normalizeSelection(candidate.settings?.studyGenres),
      studyFrequencies: normalizeSelection(candidate.settings?.studyFrequencies),
      search: candidate.settings?.search || ""
    },
    cards: candidate.cards && typeof candidate.cards === "object" ? candidate.cards : {}
  };
}

function saveState({ cloud = true } = {}) {
  state.updatedAt = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (cloud) queueCloudSave();
}

async function initCloudSync() {
  try {
    const configModule = await import("./firebase-config.js");
    const firebaseConfig = configModule.firebaseConfig || {};
    const cloudSync = configModule.cloudSync || {};
    if (!cloudSync.enabled || !firebaseConfig.apiKey || !firebaseConfig.projectId) {
      setCloudStatus("端末保存");
      return;
    }

    setCloudStatus("同期中");
    const [{ initializeApp }, authModule, firestoreModule] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js")
    ]);

    const app = initializeApp(firebaseConfig);
    const auth = authModule.getAuth(app);
    const credential = await authModule.signInAnonymously(auth);
    const db = firestoreModule.getFirestore(app);
    try {
      await firestoreModule.enableIndexedDbPersistence(db);
    } catch {
      // Another tab may already own persistence.
    }

    const collection = cloudSync.collection || "mathG3CardsProgress";
    const ref = firestoreModule.doc(db, collection, credential.user.uid);
    cloudHandle = {
      ref,
      getDoc: firestoreModule.getDoc,
      setDoc: firestoreModule.setDoc,
      serverTimestamp: firestoreModule.serverTimestamp
    };

    const snapshot = await cloudHandle.getDoc(ref);
    const remoteState = snapshot.exists() ? normalizeState(snapshot.data()?.payload || {}) : null;
    if (remoteState && remoteState.updatedAt > state.updatedAt) {
      state = remoteState;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      renderAll();
    } else {
      await pushCloudState();
    }
    setCloudStatus("Cloud保存");
  } catch (error) {
    console.warn("Cloud sync disabled", error);
    cloudHandle = null;
    setCloudStatus("端末保存");
  }
}

function queueCloudSave() {
  if (!cloudHandle) return;
  clearTimeout(cloudTimer);
  cloudTimer = window.setTimeout(pushCloudState, 700);
}

async function pushCloudState() {
  if (!cloudHandle) return;
  try {
    setCloudStatus("同期中");
    await cloudHandle.setDoc(cloudHandle.ref, {
      payload: state,
      updatedAt: cloudHandle.serverTimestamp()
    }, { merge: true });
    setCloudStatus("Cloud保存");
  } catch (error) {
    console.warn("Cloud sync failed", error);
    setCloudStatus("同期エラー");
  }
}

function setCloudStatus(text) {
  dom.cloudStatus.textContent = text;
}

function normalizeSelection(selection) {
  if (!Array.isArray(selection) || selection.length === 0 || selection.includes("all")) return ["all"];
  return [...new Set(selection)];
}

function summarizeSelection(options, selected) {
  const normalized = normalizeSelection(selected);
  if (normalized.includes("all")) return "すべて";
  if (normalized.length === 1) {
    return options.find((option) => option.value === normalized[0])?.label || normalized[0];
  }
  return `${normalized.length}件選択`;
}

function uniqueGenres() {
  return [...new Set(FORMULAS.map((card) => card.genre))].sort((a, b) => {
    const courseA = COURSE_ORDER.indexOf(FORMULAS.find((card) => card.genre === a)?.course || "");
    const courseB = COURSE_ORDER.indexOf(FORMULAS.find((card) => card.genre === b)?.course || "");
    return courseA - courseB || a.localeCompare(b, "ja");
  });
}

function typesetSoon() {
  window.clearTimeout(mathTimer);
  mathTimer = window.setTimeout(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise().catch(() => {});
    }
  }, 80);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
