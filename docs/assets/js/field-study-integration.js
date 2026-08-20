(function(){
  const CONFIG={
    1:{label:'Choice Architecture Walk',href:'../field-studies/module-1/'},
    2:{label:'Reliability in the Field',href:'../field-studies/module-2/'},
    3:{label:'Utility in Real Time',href:'../field-studies/module-3/'}
  };

  function currentModule(){
    const match=location.pathname.match(/\/module-(\d+)\//);
    return match?Number(match[1]):null;
  }

  function addSidebarLink(n,c){
    const sidebar=document.querySelector('.md-sidebar--primary .md-nav');
    if(!sidebar||sidebar.querySelector('[data-field-study-link]'))return;

    const activeSection=[...sidebar.querySelectorAll('.md-nav__title')].find(el=>
      (el.textContent||'').trim().toLowerCase()===`module ${n}`
    );
    const section=activeSection?.parentElement;
    const list=section?.querySelector(':scope > .md-nav__list');
    if(!list)return;

    const item=document.createElement('li');
    item.className='md-nav__item field-study-nav-item';
    item.dataset.fieldStudyLink='true';
    item.innerHTML=`<a href="${c.href}" class="md-nav__link"><span class="field-nav-dot"></span>Field Study: ${c.label}</a>`;

    const rubric=[...list.children].find(li=>/rubric/i.test(li.textContent||''));
    if(rubric)list.insertBefore(item,rubric);else list.appendChild(item);
  }

  function addOverviewButton(n,c){
    const actions=document.querySelector('.eco-overview-actions');
    if(!actions||actions.querySelector('[data-field-study-button]'))return;
    const a=document.createElement('a');
    a.className='field-study-button';
    a.href=c.href;
    a.dataset.fieldStudyButton='true';
    a.textContent='Complete field study';
    actions.appendChild(a);
  }

  function addOverviewCard(n,c){
    const next=document.querySelector('.eco-next');
    if(!next||document.querySelector('.field-study-bridge'))return;
    const card=document.createElement('section');
    card.className='field-study-bridge';
    card.innerHTML=`
      <div class="field-study-bridge__icon">FIELD</div>
      <div>
        <small>APPLY THE MODULE OFF SCREEN</small>
        <h2>${c.label}</h2>
        <p>Collect a low-cost, de-identified observation and connect the interactive laboratory to a real setting.</p>
      </div>
      <a href="${c.href}">Open field study →</a>`;
    next.parentNode.insertBefore(card,next);
  }

  function addLabBridge(n,c){
    const app=document.querySelector('#lab-app,#m2-app,#m3-app');
    if(!app||document.querySelector('.field-study-lab-next'))return;
    const box=document.createElement('aside');
    box.className='field-study-lab-next';
    box.innerHTML=`<small>AFTER THE INTERACTIVE LAB</small><strong>${c.label}</strong><span>Take the module into a real environment, then return with a de-identified research record.</span><a href="${c.href}">Continue to field study →</a>`;
    app.insertAdjacentElement('afterend',box);
  }

  function enhance(){
    const n=currentModule(),c=CONFIG[n];
    if(!c)return;
    addSidebarLink(n,c);
    addOverviewButton(n,c);
    addOverviewCard(n,c);
    addLabBridge(n,c);
  }

  document.addEventListener('DOMContentLoaded',enhance);
  window.addEventListener('load',enhance);
  if(typeof document$!=='undefined'&&document$&&document$.subscribe)document$.subscribe(enhance);
})();
