(function(){'use strict';
function fix(){
 document.querySelectorAll('a').forEach(a=>{
  const text=(a.textContent||'').trim().toLowerCase();
  const href=a.getAttribute('href')||'';
  if(text.includes('open field study')||href.includes('field-studies/field-studies/module-1')||href.includes('adaptive-species/field-studies')) a.setAttribute('href','/ECO412/field-studies/module-1/');
  if((text.includes('all lenses')||text.includes('from error to environmental fit'))&&location.pathname.includes('/module-1')) a.setAttribute('href','/ECO412/adaptive-species/module-1/');
 });
}
document.addEventListener('DOMContentLoaded',fix);if(typeof document$!=='undefined'&&document$?.subscribe)document$.subscribe(fix)
})();
