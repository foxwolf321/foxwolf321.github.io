/* math-g-cards v2 enhancement overlay - full textbook math rendering
   2026-05-18 */
(function(){
  'use strict';
  var busy=false, debounceTimer=null, THEME_VERSION='20260518';

  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }

  function ensureLatestTheme(){
    var latest='./math-v2-theme.css?v='+THEME_VERSION;
    var hasLatest=[].slice.call(document.querySelectorAll('link[rel="stylesheet"]')).some(function(l){
      return (l.getAttribute('href')||'').indexOf('math-v2-theme.css?v='+THEME_VERSION)!==-1;
    });
    if(!hasLatest){
      var l=document.createElement('link'); l.rel='stylesheet'; l.href=latest; document.head.appendChild(l);
    }
    setTimeout(function(){
      [].slice.call(document.querySelectorAll('link[rel="stylesheet"]')).forEach(function(l){
        var h=l.getAttribute('href')||'';
        if(h.indexOf('math-v2-theme.css')!==-1 && h.indexOf('v='+THEME_VERSION)===-1){
          l.parentNode && l.parentNode.removeChild(l);
        }
      });
    },0);
  }

  function addCss(href){
    var base=href.split('/').pop().split('?')[0];
    if(document.querySelector('link[href*="'+base+'"]')) return;
    var l=document.createElement('link'); l.rel='stylesheet'; l.href=href; document.head.appendChild(l);
  }
  function addScript(src, cb){
    if(window.katex){ cb&&cb(); return; }
    var existing=document.querySelector('script[src*="katex.min.js"]');
    if(existing){ existing.addEventListener('load', function(){cb&&cb();}); setTimeout(function(){cb&&cb();},800); return; }
    var s=document.createElement('script'); s.src=src; s.defer=true; s.onload=function(){cb&&cb();}; document.head.appendChild(s);
  }
  function ensureAssets(cb){
    ensureLatestTheme();
    addCss('https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css');
    addScript('https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js', cb);
  }

  function wrapDriveSettings(){
    var header=document.querySelector('header.panel');
    if(!header || header.querySelector('.settings-panel')) return;
    var sync=header.querySelector(':scope > .sync-grid') || header.querySelector('.sync-grid');
    if(!sync) return;
    var details=document.createElement('details'); details.className='settings-panel';
    var summary=document.createElement('summary'); summary.textContent='設定・Google Drive保存';
    var body=document.createElement('div'); body.className='settings-body'; body.appendChild(sync);
    details.appendChild(summary); details.appendChild(body); header.appendChild(details);
  }

  var supMap={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','ⁿ':'n'};
  var subMap={'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9'};

  function hasMath(s){ return /[=√∑∫±×÷<>≤≥∞πθθαβγxyabcABCrlmnRSTuvDEFGHIJKLMNOPQXYZ\/²³₀₁₂₃₄₅₆₇₈₉]|sin|cos|tan|log|ln|lim|rad|dx|dy/.test(s||''); }

  function formulaish(s){
    s=(s||'').trim(); if(!s) return false;
    if(/[=√∑∫±×÷<>≤≥∞πθθαβγ\/²³₀₁₂₃₄₅₆₇₈₉°]/.test(s)) return true;
    if(/\b(sin|cos|tan|log|ln|lim|rad)\b/i.test(s)) return true;
    if(/[A-Za-z]\s*\([^)]*\)/.test(s)) return true;
    if(/[A-Za-z]\s*,\s*[A-Za-z]/.test(s)) return true;
    if(/[A-Za-z]\s*[+\-*]\s*[A-Za-z0-9]/.test(s)) return true;
    if(s.length<=2 && /^[A-Za-z]$/.test(s)) return false;
    if(/^[A-Za-z0-9]+$/.test(s) && s.length<=3) return false;
    return /[A-Za-z].*\d|\d.*[A-Za-z]/.test(s);
  }
  function isFormulaChar(ch){ return /[A-Za-z0-9αβγθπ√∑∫±×÷=<>≤≥∞^+\-*\/(){}[\],._|°²³⁰¹⁴⁵⁶⁷⁸⁹ⁿ₀₁₂₃₄₅₆₇₈₉]/.test(ch); }

  function splitSegments(line){
    var segs=[], buf='', mode=null;
    function flush(){
      if(!buf) return;
      if(mode==='math' && formulaish(buf)) segs.push({type:'math',text:buf});
      else segs.push({type:'text',text:buf});
      buf=''; mode=null;
    }
    for(var i=0;i<line.length;i++){
      var ch=line.charAt(i);
      if(ch===' ' || ch==='　'){ buf+=ch; if(!mode) mode='text'; continue; }
      var m=isFormulaChar(ch);
      if(m){ if(mode==='text') flush(); mode='math'; buf+=ch; }
      else{ if(mode==='math') flush(); mode='text'; buf+=ch; }
    }
    flush();
    var merged=[];
    for(var j=0;j<segs.length;j++){
      if(segs[j].type==='text' && /^[\s　]+$/.test(segs[j].text) &&
         merged.length && merged[merged.length-1].type==='math' && segs[j+1] && segs[j+1].type==='math'){
        merged[merged.length-1].text += segs[j].text + segs[j+1].text; j++;
      }else merged.push(segs[j]);
    }
    return merged;
  }

  function mapSeq(s,map,mark){
    var keys=Object.keys(map).join(''), re=new RegExp('['+keys+']+','g');
    return s.replace(re,function(m){ return mark+'{'+m.split('').map(function(c){return map[c]||c;}).join('')+'}'; });
  }
  function findMatchingLeftParen(s, closeIdx){
    var depth=0; for(var i=closeIdx;i>=0;i--){ if(s[i]===')') depth++; else if(s[i]==='('){ depth--; if(depth===0) return i; } } return -1;
  }
  function findMatchingRightParen(s, openIdx){
    var depth=0; for(var i=openIdx;i<s.length;i++){ if(s[i]==='(') depth++; else if(s[i]===')'){ depth--; if(depth===0) return i; } } return -1;
  }
  function isFracBoundary(ch){ return !ch || /[=,+;、，]/.test(ch); }
  function convertFractions(s){
    var guard=0;
    while(s.indexOf('/')!==-1 && guard<20){
      guard++;
      var i=s.indexOf('/'), le=i-1, rs=i+1;
      while(le>=0 && /\s/.test(s[le])) le--;
      while(rs<s.length && /\s/.test(s[rs])) rs++;
      if(le<0 || rs>=s.length) break;
      var ns,ne,num,ds,de,den;
      if(s[le]===')'){ var lp=findMatchingLeftParen(s,le); if(lp<0) break; ns=lp; ne=le+1; num=s.slice(lp+1,le); }
      else{ ns=le; while(ns>=0 && !isFracBoundary(s[ns]) && s[ns]!==')' && s[ns]!=='(' && !/\s/.test(s[ns])) ns--; ns++; ne=le+1; num=s.slice(ns,ne); }
      if(s[rs]==='('){ var rp=findMatchingRightParen(s,rs); if(rp<0) break; ds=rs; de=rp+1; den=s.slice(rs+1,rp); }
      else{ ds=rs; de=rs; while(de<s.length && !isFracBoundary(s[de]) && s[de]!==')' && !/\s/.test(s[de])) de++; den=s.slice(ds,de); }
      if(!num || !den || num.indexOf('\\frac')!==-1 || den.indexOf('\\frac')!==-1){ s=s.slice(0,i)+'\\,/\\,'+s.slice(i+1); continue; }
      s=s.slice(0,ns)+'\\frac{'+num+'}{'+den+'}'+s.slice(de);
    }
    return s;
  }
  function normalizeLatex(s){
    s=(s||'').trim().replace(/[。]/g,'').replace(/　/g,' ');
    s=s.replace(/≠/g,'\\ne ').replace(/≥/g,'\\ge ').replace(/≤/g,'\\le ').replace(/±/g,'\\pm ')
       .replace(/×/g,'\\times ').replace(/÷/g,'\\div ').replace(/∞/g,'\\infty ')
       .replace(/π/g,'\\pi ').replace(/θ/g,'\\theta ').replace(/α/g,'\\alpha ').replace(/β/g,'\\beta ').replace(/γ/g,'\\gamma ')
       .replace(/Δ/g,'\\Delta ').replace(/°/g,'^{\\circ}');
    s=mapSeq(s,supMap,'^'); s=mapSeq(s,subMap,'_');
    s=s.replace(/√\\?\\{([^{}]+)\\}/g,'\\sqrt{$1}').replace(/√\(([^()]+)\)/g,'\\sqrt{$1}').replace(/√([A-Za-z0-9\\{}_^+\-]+)/g,'\\sqrt{$1}');
    s=s.replace(/\b(sin|cos|tan|log|ln)(\^\{[^}]+\})?\s*([A-Za-z\\][A-Za-z0-9\\{}_^]*)?/g,function(_,fn,pow,arg){ return '\\'+fn+(pow||'')+(arg?' '+arg:''); });
    s=convertFractions(s);
    return s;
  }
  function mostlyMath(line,segs){
    var jp=(line.match(/[ぁ-んァ-ン一-龯]/g)||[]).length;
    if(jp>0) return false;
    if(line.indexOf('=')!==-1) return true;
    return segs.length===1 && segs[0].type==='math' && line.length>7;
  }
  function sourceText(el){
    var raw=el.getAttribute('data-v2-source');
    if(raw) return raw;
    var oldPlain=el.querySelector('.math-plain');
    raw=oldPlain ? oldPlain.textContent : el.textContent;
    raw=(raw||'').trim();
    if(raw) el.setAttribute('data-v2-source', raw);
    return raw;
  }
  function renderMathSpan(parent,text,displayMode){
    var span=document.createElement('span'); span.className=displayMode?'textbook-display-math':'textbook-math';
    var latex=normalizeLatex(text);
    try{ window.katex.render(latex, span, {displayMode:displayMode, throwOnError:false, strict:'ignore'}); }
    catch(e){ span.textContent=text; }
    parent.appendChild(span);
  }
  function renderLine(parent,line,targetKind){
    var lineBox=document.createElement('span'); lineBox.className='textbook-line';
    var segs=splitSegments(line), display=mostlyMath(line,segs) && targetKind!=='prompt';
    if(display){ renderMathSpan(lineBox,line,true); parent.appendChild(lineBox); return; }
    segs.forEach(function(seg){ if(seg.type==='math') renderMathSpan(lineBox,seg.text,false); else lineBox.appendChild(document.createTextNode(seg.text)); });
    parent.appendChild(lineBox);
  }
  function renderTextbook(el,targetKind){
    if(!el || busy || !window.katex) return;
    var raw=sourceText(el); if(!raw) return;
    if(el.getAttribute('data-v2-rendered')===THEME_VERSION && el.getAttribute('data-v2-rendered-raw')===raw) return;
    busy=true;
    el.innerHTML=''; el.classList.add('textbook-rendered'); el.setAttribute('data-v2-rendered',THEME_VERSION); el.setAttribute('data-v2-rendered-raw',raw);
    raw.split(/\n+/).forEach(function(line){ renderLine(el,line,targetKind); });
    busy=false;
  }
  function enhanceAll(){
    ensureLatestTheme();
    if(!window.katex) return;
    renderTextbook(document.querySelector('#cardPrompt'),'prompt');
    renderTextbook(document.querySelector('#cardAnswer'),'answer');
    document.querySelectorAll('.formula-item .ans').forEach(function(el){ renderTextbook(el,'formula'); });
  }
  function scheduleEnhance(){ clearTimeout(debounceTimer); debounceTimer=setTimeout(enhanceAll,80); }

  ready(function(){
    ensureAssets(function(){
      wrapDriveSettings(); enhanceAll();
      var observer=new MutationObserver(function(){ if(!busy) scheduleEnhance(); });
      observer.observe(document.body,{childList:true,subtree:true,characterData:true});
      ['click','input','change'].forEach(function(ev){
        document.addEventListener(ev,function(){ setTimeout(function(){ wrapDriveSettings(); enhanceAll(); },120); },true);
      });
    });
  });
})();
