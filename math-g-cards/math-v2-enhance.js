/* math-g-cards v2 enhancement overlay
   - Google Drive欄を「設定」に格納
   - KaTeXで数式の縦分数表示を追加
   - 既存アプリ本体は壊さないため、DOM上の表示だけを拡張する
*/
(function(){
  'use strict';
  var busy=false;
  var debounceTimer=null;
  function ready(fn){
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function addCss(href){
    if(document.querySelector('link[href*="'+href.split('/').pop()+'"]')) return;
    var l=document.createElement('link');
    l.rel='stylesheet';
    l.href=href;
    document.head.appendChild(l);
  }
  function addScript(src, cb){
    if(window.katex){ cb&&cb(); return; }
    var existing=document.querySelector('script[src*="katex.min.js"]');
    if(existing){ existing.addEventListener('load', function(){cb&&cb();}); return; }
    var s=document.createElement('script');
    s.src=src;
    s.defer=true;
    s.onload=function(){cb&&cb();};
    document.head.appendChild(s);
  }
  function ensureAssets(cb){
    addCss('./math-v2-theme.css?v=20260509');
    addCss('https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css');
    addScript('https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js', cb);
  }
  function wrapDriveSettings(){
    var header=document.querySelector('header.panel');
    if(!header || header.querySelector('.settings-panel')) return;
    var sync=header.querySelector(':scope > .sync-grid') || header.querySelector('.sync-grid');
    if(!sync) return;
    var details=document.createElement('details');
    details.className='settings-panel';
    var summary=document.createElement('summary');
    summary.textContent='設定・Google Drive保存';
    var body=document.createElement('div');
    body.className='settings-body';
    body.appendChild(sync);
    details.appendChild(summary);
    details.appendChild(body);
    header.appendChild(details);
  }
  function hasMath(s){
    return /[=√∑∫±×÷<>≤≥∞πθθαβγxyabcABCrlmnRSTuvDEFGHIJKLMNOPQXYZ\/²³₀₁₂₃₄₅₆₇₈₉]|sin|cos|tan|log|ln|lim|dx|dy/.test(s || '');
  }
  var supMap={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','ⁿ':'n'};
  var subMap={'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9'};
  function mapSeq(s,map,mark){
    var keys=Object.keys(map).join('');
    var re=new RegExp('['+keys+']+','g');
    return s.replace(re,function(m){return mark+'{'+m.split('').map(function(c){return map[c]||c;}).join('')+'}';});
  }
  function normalizeLatex(s){
    s=(s||'').trim();
    s=s.replace(/[。]/g,'');
    s=s.replace(/　/g,' ');
    s=s.replace(/（.*?）/g,function(m){return '\\quad \\text{'+m.slice(1,-1).replace(/[{}]/g,'')+'}';});
    s=s.replace(/≠/g,'\\ne ')
       .replace(/≥/g,'\\ge ')
       .replace(/≤/g,'\\le ')
       .replace(/±/g,'\\pm ')
       .replace(/×/g,'\\times ')
       .replace(/÷/g,'\\div ')
       .replace(/∞/g,'\\infty ')
       .replace(/π/g,'\\pi ')
       .replace(/θ/g,'\\theta ')
       .replace(/α/g,'\\alpha ')
       .replace(/β/g,'\\beta ')
       .replace(/γ/g,'\\gamma ')
       .replace(/Δ/g,'\\Delta ');
    s=mapSeq(s,supMap,'^');
    s=mapSeq(s,subMap,'_');
    s=s.replace(/√\{([^{}]+)\}/g,'\\sqrt{$1}');
    s=s.replace(/√\(([^()]+)\)/g,'\\sqrt{$1}');
    s=s.replace(/√([A-Za-z0-9\\{}_^+\-]+)/g,'\\sqrt{$1}');
    s=s.replace(/\b(sin|cos|tan|log|ln)\s*([A-Za-z\\][A-Za-z0-9\\{}_^]*)?/g,function(_,fn,arg){return '\\'+fn+(arg?' '+arg:'');});
    // common parenthesized fractions
    s=s.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g,'\\frac{$1}{$2}');
    s=s.replace(/\(([^()]+)\)\s*\/\s*([A-Za-z0-9\\{}_^+\-]+)/g,'\\frac{$1}{$2}');
    s=s.replace(/([A-Za-z0-9\\{}_^+\-]+)\s*\/\s*\(([^()]+)\)/g,'\\frac{$1}{$2}');
    // simple a/b style fractions. Repeated twice catches αβ = c/a, etc.
    for(var i=0;i<2;i++){
      s=s.replace(/([A-Za-z0-9\\{}_^+\-]+)\s*\/\s*([A-Za-z0-9\\{}_^+\-]+)/g,'\\frac{$1}{$2}');
    }
    // Put Japanese prose into text mode when it remains inside a candidate.
    s=s.replace(/([ぁ-んァ-ン一-龯]+(?:[ぁ-んァ-ン一-龯0-9A-Za-z]*)?)/g,function(m){return '\\text{'+m+'}';});
    return s;
  }
  function extractCandidates(raw){
    var out=[];
    String(raw||'').split(/\n+/).forEach(function(line){
      line=line.trim();
      if(!line || !hasMath(line)) return;
      // Keep full line, but also split very long explanatory lines at Japanese comma.
      var parts=line.length>46 ? line.split(/[、；;]/) : [line];
      parts.forEach(function(p){
        p=p.trim();
        if(p && hasMath(p) && out.indexOf(p)===-1) out.push(p);
      });
    });
    return out.slice(0,4);
  }
  function enhanceElement(el){
    if(!el || busy || !window.katex) return;
    var raw;
    var plain=el.querySelector && el.querySelector(':scope > .math-plain');
    if(plain) raw=plain.textContent;
    else raw=el.textContent;
    raw=(raw||'').trim();
    if(!raw || raw===el.getAttribute('data-v2-raw')) return;
    var formulas=extractCandidates(raw);
    if(!formulas.length) return;
    busy=true;
    el.setAttribute('data-v2-raw', raw);
    el.classList.add('formula-enhanced');
    el.innerHTML='';
    var plainDiv=document.createElement('div');
    plainDiv.className='math-plain';
    plainDiv.textContent=raw;
    var list=document.createElement('div');
    list.className='math-formula-list';
    formulas.forEach(function(f){
      var box=document.createElement('div');
      box.className='math-formula';
      var latex=normalizeLatex(f);
      try{
        window.katex.render(latex, box, {displayMode:true, throwOnError:false, strict:'ignore'});
      }catch(e){
        box.textContent=f;
      }
      list.appendChild(box);
    });
    el.appendChild(plainDiv);
    el.appendChild(list);
    busy=false;
  }
  function enhanceAll(){
    if(!window.katex) return;
    var selectors=['#cardPrompt','#cardAnswer','.formula-item .ans'];
    selectors.forEach(function(sel){
      document.querySelectorAll(sel).forEach(enhanceElement);
    });
  }
  function scheduleEnhance(){
    clearTimeout(debounceTimer);
    debounceTimer=setTimeout(enhanceAll,80);
  }
  ready(function(){
    ensureAssets(function(){
      wrapDriveSettings();
      enhanceAll();
      var observer=new MutationObserver(function(){ if(!busy) scheduleEnhance(); });
      observer.observe(document.body,{childList:true,subtree:true,characterData:true});
      ['click','input','change'].forEach(function(ev){document.addEventListener(ev,function(){setTimeout(function(){wrapDriveSettings();enhanceAll();},120);},true);});
    });
  });
})();
