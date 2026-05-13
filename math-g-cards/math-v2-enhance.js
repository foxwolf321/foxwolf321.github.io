/* math-g-cards v20260524
   シャッフルボタン補修:
   v4本体側のシャッフルが効かない環境向けに、
   ボタン押下時に現在のキュー内をランダム位置へ移動させます。
   既存のCSS読込も維持します。
*/
(function(){
  var V='20260524';

  function ensureTheme(){
    var href='./math-v2-theme.css?v=20260523';
    var ok=[].slice.call(document.querySelectorAll('link[rel="stylesheet"]')).some(function(l){
      return (l.getAttribute('href')||'').indexOf('math-v2-theme.css')>=0;
    });
    if(!ok){
      var l=document.createElement('link');
      l.rel='stylesheet';
      l.href=href;
      document.head.appendChild(l);
    }
  }

  function visible(el){
    if(!el) return false;
    var s=getComputedStyle(el);
    return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0';
  }

  function flashStatus(text){
    var status=document.getElementById('status');
    if(!status) return;
    var old=status.textContent;
    status.textContent=text;
    clearTimeout(status._shuffleTimer);
    status._shuffleTimer=setTimeout(function(){
      if(status.textContent===text) status.textContent=old;
    },1500);
  }

  function extractQueuePosition(){
    var q=document.getElementById('queueLabel');
    var t=q ? q.textContent : '';
    // 例: キュー 3 / 92, カード 3 / 92 などを拾う
    var m=t.match(/(\d+)\s*[\/／]\s*(\d+)/);
    if(!m) return null;
    return {now:parseInt(m[1],10), total:parseInt(m[2],10)};
  }

  function randomStep(){
    var pos=extractQueuePosition();
    if(pos && pos.total > 1){
      var step=Math.floor(Math.random()*(pos.total-1))+1;
      // 今と同じ位置を避ける。大きすぎる連打も避ける。
      return Math.min(step, Math.max(1, pos.total-1));
    }
    return Math.floor(Math.random()*12)+4;
  }

  function clickNextNTimes(n){
    var next=document.getElementById('btnNext');
    if(!next || !visible(next)) return false;
    // 一気にclickすると描画が追いつかない端末があるので少しずつ送る
    var i=0;
    function one(){
      if(i>=n) return;
      i++;
      next.click();
      if(i<n) setTimeout(one, 18);
    }
    one();
    return true;
  }

  function fixShuffle(){
    var btn=document.getElementById('shuffleQueue');
    if(!btn || btn.dataset.shuffleFixed==='1') return;
    btn.dataset.shuffleFixed='1';

    btn.addEventListener('click', function(ev){
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation();

      var steps=randomStep();
      var ok=clickNextNTimes(steps);
      if(ok){
        flashStatus('シャッフルしました');
      }else{
        flashStatus('次へボタンが見つからず、シャッフルできませんでした');
      }
      return false;
    }, true);
  }

  function run(){
    ensureTheme();
    fixShuffle();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', run);
  else run();

  // 画面再描画でボタンが作り直された場合の保険
  var timer=null;
  var mo=new MutationObserver(function(){
    clearTimeout(timer);
    timer=setTimeout(run,80);
  });
  if(document.body){
    mo.observe(document.body,{childList:true,subtree:true});
  }else{
    document.addEventListener('DOMContentLoaded',function(){
      mo.observe(document.body,{childList:true,subtree:true});
    });
  }
})();
