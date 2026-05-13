/* math-g-cards loader v20260523 */
(function(){
  var V='20260523';
  function run(){
    var href='./math-v2-theme.css?v='+V;
    var ok=[].slice.call(document.querySelectorAll('link[rel="stylesheet"]')).some(function(l){
      return (l.getAttribute('href')||'').indexOf('math-v2-theme.css?v='+V)>=0;
    });
    if(!ok){
      var l=document.createElement('link');
      l.rel='stylesheet';
      l.href=href;
      document.head.appendChild(l);
    }
    setTimeout(function(){
      [].slice.call(document.querySelectorAll('link[rel="stylesheet"]')).forEach(function(l){
        var h=l.getAttribute('href')||'';
        if(h.indexOf('math-v2-theme.css')>=0 && h.indexOf('v='+V)<0){
          l.parentNode && l.parentNode.removeChild(l);
        }
      });
    },0);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run);
  else run();
})();
