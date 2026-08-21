(function(){
  'use strict';
  const isLab=/\/module-1\/lab\/?(?:index\.html)?$/.test(location.pathname);
  if(!isLab) return;
  function mount(){
    if(document.querySelector('.m1-deliverables')) return;
    const host=document.querySelector('main .md-content__inner')||document.querySelector('.md-typeset');
    if(!host) return;
    const panel=document.createElement('section');
    panel.className='m1-deliverables';
    panel.innerHTML=`
      <p class="m1d-kicker">MODULE 1 • EVIDENCE TO SUBMISSION</p>
      <h2>What you will produce</h2>
      <p class="m1d-lead">The lab generates evidence. The field study tests whether the same ideas appear in a real decision environment. The brief turns both records into a disciplined argument.</p>
      <div class="m1d-flow" aria-label="Module 1 deliverable workflow">
        <div><b>1. Complete</b><span>Make each lab decision before revealing feedback.</span></div>
        <div><b>2. Preserve</b><span>Export the de-identified lab and field records.</span></div>
        <div><b>3. Interpret</b><span>Separate the pattern from competing explanations.</span></div>
        <div><b>4. Submit</b><span>Upload each required artifact to its Canvas assignment.</span></div>
      </div>
      <div class="m1d-grid">
        <article class="m1d-card" style="--accent:var(--d1-blue)">
          <header><small>DELIVERABLE 1</small><h3>Module 1 Lab Record</h3><p>Evidence that the interactive stations were completed and interpreted.</p></header>
          <section>
            <h4>Include</h4><ul><li>De-identified exported lab record</li><li>Responses from every required station</li><li>One selected result or figure</li><li>A 100–150 word bounded interpretation</li></ul>
            <div class="m1d-example"><b>Strong claim</b><p>“In this class sample, adding the dominated print option increased selection of the print-plus-online bundle. The result is consistent with relative comparison, but the activity does not establish how students would spend real money.”</p></div>
            <h4>Canvas submission</h4><ul><li>Upload the exported record</li><li>Enter or attach the short interpretation</li></ul>
          </section>
          <div class="m1d-spec"><strong>Completion test:</strong> A reader can identify the condition, response, pattern, and limitation.</div>
        </article>
        <article class="m1d-card" style="--accent:var(--d1-teal)">
          <header><small>DELIVERABLE 2</small><h3>Choice Architecture Field Note</h3><p>A structured observation of one bounded decision environment.</p></header>
          <section>
            <h4>Include</h4><ul><li>General setting, without identifying people</li><li>Observable cue, default, friction, placement, or salience</li><li>Behavior the environment appears to make easier</li><li>Strongest alternative explanation</li><li>Privacy and evidence limitation</li></ul>
            <div class="m1d-example"><b>Example</b><p>“A campus form places the recommended option first and preselects it. The design may reduce search costs, although the ordering may reflect administrative workflow rather than an intention to steer choice.”</p></div>
            <h4>Canvas submission</h4><ul><li>Upload the field-study record</li><li>Submit a 250–350 word field note</li></ul>
          </section>
          <div class="m1d-spec"><strong>Completion test:</strong> Observation is separated from inferred motive and causal impact.</div>
        </article>
        <article class="m1d-card" style="--accent:var(--d1-rust)">
          <header><small>DELIVERABLE 3</small><h3>Model Diagnostic Brief</h3><p>The professional artifact that synthesizes reading, lab evidence, and field observation.</p></header>
          <section>
            <h4>Required structure</h4><ul><li><b>Benchmark:</b> relevant SEM prediction</li><li><b>Phenomenon:</b> observed pattern</li><li><b>Mechanism:</b> strongest behavioral account</li><li><b>Alternative:</b> credible competing account</li><li><b>Adaptive fit:</b> possible function and mismatch</li><li><b>Revision:</b> evidence that would change the conclusion</li></ul>
            <div class="m1d-example"><b>Thesis frame</b><p>“The result departs from context-independent choice, but the most defensible interpretation is not that people are simply irrational. Relative comparison may reduce evaluation costs; the account would weaken if the effect disappeared under incentive-compatible choice.”</p></div>
            <h4>Canvas submission</h4><ul><li>750–1,000 words</li><li>APA-style citations</li><li>Reference at least one lab result and one field observation</li></ul>
          </section>
          <div class="m1d-spec"><strong>Completion test:</strong> The conclusion is evidence-bounded and contains a genuine revision trigger.</div>
        </article>
      </div>
      <h3>Before leaving the lab</h3>
      <div class="m1d-check">
        <label><input type="checkbox" data-m1d-check> I completed every required lab station before revealing explanations.</label>
        <label><input type="checkbox" data-m1d-check> I exported a de-identified Module 1 lab record.</label>
        <label><input type="checkbox" data-m1d-check> I selected one result and wrote a bounded interpretation.</label>
        <label><input type="checkbox" data-m1d-check> I know which Canvas assignment receives each artifact.</label>
      </div>
      <div class="m1d-handoff"><div><h3>Canvas handoff</h3><p>Submit the lab record first. Complete the field note next. Submit the Model Diagnostic Brief after using both records as evidence.</p></div><span class="m1d-status">0 of 4 ready</span></div>
      <div class="m1d-note"><strong>Important:</strong> Do not enter a name or student ID into the GitHub lab or exported record. Canvas associates the upload with the enrolled student.</div>`;
    const anchor=[...host.querySelectorAll('h2,h3')].find(h=>/next|before you leave|submission/i.test(h.textContent));
    if(anchor) anchor.parentNode.insertBefore(panel,anchor); else host.appendChild(panel);
    const checks=[...panel.querySelectorAll('[data-m1d-check]')];
    const status=panel.querySelector('.m1d-status');
    const key='eco412_m1_deliverables_checklist';
    let saved=[];try{saved=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){}
    checks.forEach((c,i)=>{c.checked=!!saved[i];c.addEventListener('change',()=>{localStorage.setItem(key,JSON.stringify(checks.map(x=>x.checked)));update();});});
    function update(){const n=checks.filter(x=>x.checked).length;status.textContent=`${n} of ${checks.length} ready`;status.classList.toggle('ready',n===checks.length);}
    update();
  }
  document.addEventListener('DOMContentLoaded',mount);
  if(typeof document$!=='undefined'&&document$&&document$.subscribe)document$.subscribe(mount);
})();
