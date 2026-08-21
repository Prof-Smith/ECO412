(function(){'use strict';
const path=location.pathname;
if(!path.includes('/module-1/')&&!path.includes('/field-studies/module-1/'))return;
const five=`<div class="ial-grid">
 <article class="ial-step" style="--step:var(--ial-blue)"><small>PRINCIPLE</small><h3>Benchmark</h3><p>What does the relevant SEM assumption predict?</p></article>
 <article class="ial-step" style="--step:var(--ial-rust)"><small>DISSENT</small><h3>Challenge</h3><p>What does the evidence show that the benchmark misses?</p></article>
 <article class="ial-step" style="--step:var(--ial-teal)"><small>REVERSAL</small><h3>Possible function</h3><p>What problem might the response or design solve?</p></article>
 <article class="ial-step" style="--step:var(--ial-gold)"><small>MISMATCH</small><h3>Failure of fit</h3><p>When could the same shortcut or design become costly?</p></article>
 <article class="ial-step" style="--step:var(--ial-violet)"><small>REVISION</small><h3>Answerable claim</h3><p>What evidence would change the interpretation?</p></article>
</div>`;
function block(title,lead,prompt,transfer,mini=false){const e=document.createElement('section');e.className='ial-block';e.innerHTML=`<div class="ial-head"><div class="ial-mark">ADAPT</div><div><p class="ial-kicker">THE ADAPTIVE SPECIES LENS</p><h2>${title}</h2><p>${lead}</p></div></div><div class="${mini?'ial-grid ial-mini':'ial-wrap'}">${mini?five.replace('<div class="ial-grid">','').replace('</div>',''):five}</div><div class="ial-prompt"><strong>Module 1 prompt:</strong> ${prompt}</div><div class="ial-transfer"><strong>Use this in</strong><span>${transfer}</span></div>`;return e}
function insertBeforeHeading(host,regex,node){const h=[...host.querySelectorAll('h2,h3')].find(x=>regex.test((x.textContent||'').trim()));if(h)h.parentNode.insertBefore(node,h);else host.appendChild(node)}
function mount(){
 document.body.classList.add('ial-module1');
 if(document.querySelector('.ial-block'))return;
 const host=document.querySelector('main .md-content__inner')||document.querySelector('.md-typeset');if(!host)return;
 if(path.match(/\/module-1\/?(?:index\.html)?$/)){
   const n=block('A recurring lens, not another assignment','Use the lens throughout the module to connect the benchmark, lab evidence, field observation, and final case study.','What problem might an apparent departure be solving, and what evidence would show that the fit has broken?','Your lab interpretation, Choice Architecture Walk, and Model Diagnostic Case Study. Nothing is submitted from the lens itself.');
   const field=[...host.querySelectorAll('a')].find(a=>(a.textContent||'').toLowerCase().includes('open field study'))?.closest('section,article,div');
   if(field&&field.parentNode)field.parentNode.insertBefore(n,field);else host.appendChild(n);
 }
 else if(path.match(/\/module-1\/lab\/?(?:index\.html)?$/)){
   const n=block('Interpret one laboratory result','After the class pattern is visible, use the lens before writing a conclusion.','How might relative comparison reduce evaluation effort, when could it be exploited, and what condition would make the effect disappear?','The Observed Evidence, Behavioral Mechanism, Adaptive Species Analysis, and Revision Trigger sections of the one graded case study.');
   insertBeforeHeading(host,/deliver|what you will produce|before leaving|next/i,n);
 }
 else if(path.includes('/field-studies/module-1/')){
   const n=block('Interpret the field observation in place','The lens belongs inside the field-study workflow. Complete these questions after recording what is visible.','What useful function could the visible design serve, where could the design become a mismatch, and what comparison would distinguish the behavioral account from the operational alternative?','The Adaptive Species Analysis and Evaluation and Revision Trigger sections of the one graded case study.');
   insertBeforeHeading(host,/step 4|retain|canvas|case-study handoff/i,n);
 }
 else if(path.includes('/module-1/case-study/')){
   const n=block('Write the Adaptive Species analysis','Synthesize the lab result and field observation. Do not create a separate lens submission.','Which function, environmental condition, hidden cost, mismatch, and revision trigger best explain the chosen decision architecture?','Section 6, Adaptive Species Analysis, and Section 8, Evaluation and Revision Trigger, of this case study.');
   insertBeforeHeading(host,/required sections|assignment/i,n);
 }
}
document.addEventListener('DOMContentLoaded',mount);if(typeof document$!=='undefined'&&document$?.subscribe)document$.subscribe(mount)
})();
