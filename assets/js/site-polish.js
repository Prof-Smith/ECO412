(function(){
  function enhance(){
    const content=document.querySelector('.md-content');
    if(!content)return;

    content.querySelectorAll('.eco-module-card,.eco-research-band,.lab-station,.m2-studio,.m3-studio,.analysis-principle,.research-card').forEach((el,i)=>{
      el.classList.add('eco-reveal');
      el.style.transitionDelay=Math.min(i*35,210)+'ms';
    });

    if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      content.querySelectorAll('.eco-reveal').forEach(el=>el.classList.add('eco-visible'));
      return;
    }

    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('eco-visible');observer.unobserve(entry.target)}
      });
    },{threshold:.08,rootMargin:'0px 0px -30px'});
    content.querySelectorAll('.eco-reveal:not(.eco-visible)').forEach(el=>observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded',enhance);
  window.addEventListener('load',enhance);
  if(typeof document$!=='undefined'&&document$&&document$.subscribe)document$.subscribe(enhance);
})();
