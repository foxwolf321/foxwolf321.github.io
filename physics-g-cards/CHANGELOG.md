# 物理受験カード v2 CHANGELOG

## v2.1.0 教科書風数式版 / 2026-05-03

### 追加・変更

- 背景画像を、元写真をもとにした薄いイラスト背景 `bg-bike-physics.png` に変更。
- アイコンを、漫画風のバイク＋物理式アイコンに変更。
- `icon-192.png` と `icon-512.png` を新アイコンから作成。
- 公式集の表示を、斜線分数ではなく横線つきの教科書風表示に変更。
- カード学習の答え欄でも、主要公式を横線分数で大きく表示。
- KaTeX CDNではなく、外部読み込みに依存しないCSS式表示を採用。
- タブ、上部ボタン、プルダウンのイベント登録を整理。
- `APP_VERSION` を `2.1.0-textbook-formulas` に更新。
- `sw.js` のキャッシュ名を `physics-g-cards-v2-1-0` に更新。
- `sw.js` はHTMLを network-first にし、古い `index.html` が残りにくいよう調整。

### 維持

- URLは `https://foxwolf321.github.io/physics-g-cards/` のまま。
- Drive保存名は `physics-g-cards-v2-progress.json` のまま。
- 力学92枚＋電磁気第1段階56枚の構成を維持。

### 注意

- 旧Service Workerが残る場合は、古いホーム画面アイコンを削除し、Chromeのサイトデータから `foxwolf321.github.io` を削除してから開き直す。
