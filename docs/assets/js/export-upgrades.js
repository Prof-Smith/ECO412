(function(){
  const MODULES={
    1:{api:'M1',key:'eco412_module1_v1',file:'eco412-module1-research-record-v2.json',title:'Model Diagnostic Brief',condition:()=>({decoy:localStorage.getItem('eco412_m1_decoy_condition_v2')||'unassigned'})},
    2:{api:'M2',key:'eco412_module2_v1',file:'eco412-module2-research-record-v2.json',title:'Research Credibility Audit',condition:()=>({evaluation:localStorage.getItem('eco412_m2_evaluation_condition_v2')||'unassigned'})},
    3:{api:'M3',key:'eco412_module3_v1',file:'eco412-module3-research-record-v2.json',title:'Utility and Preference Construction Report',condition:()=>({anchor:localStorage.getItem('eco412_m3_anchor_condition_v2')||'unassigned'})}
  };
  function read(key){try{return JSON.parse(localStorage.getItem(key)||'{}')}catch(e){CourseLab.error('Saved responses could not be read. Reset the module or refresh the page.');return {}}}
  function exportModule(n){const m=MODULES[n],raw=read(m.key);const envelope=CourseLab.envelope(n,m.title,{completed:raw.completed||{},scores:raw.scores||{},responses:raw.responses||{}},m.condition());CourseLab.download(m.file,envelope)}
  function install(n,tries=0){const m=MODULES[n],api=window[m.api];if(api){api.exportJSON=()=>exportModule(n);const btn=document.querySelector(`[onclick="${m.api}.exportJSON()"]`);if(btn){btn.textContent='Export research record';btn.setAttribute('aria-label',`Export Module ${n} de-identified research record`)}}else if(tries<100)setTimeout(()=>install(n,tries+1),50)}
  document.addEventListener('DOMContentLoaded',()=>Object.keys(MODULES).forEach(n=>install(Number(n))));
})();
