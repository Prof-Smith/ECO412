(function(){
  const CourseLab={
    version:'2.0.0',
    condition(module,experiment,conditions){
      const key=`eco412_m${module}_${experiment}_condition_v2`;
      let value=localStorage.getItem(key);
      if(!conditions.includes(value)){value=conditions[Math.floor(Math.random()*conditions.length)];localStorage.setItem(key,value)}
      return value;
    },
    session(){
      const key='eco412_anonymous_session_v2';let id=localStorage.getItem(key);
      if(!id){id=crypto.randomUUID?crypto.randomUUID():'s-'+Date.now()+'-'+Math.random().toString(36).slice(2);localStorage.setItem(key,id)}return id;
    },
    download(name,data){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),250)},
    summary(target,title,lines){const el=document.getElementById(target);if(!el)return;el.innerHTML=`<div class="accessible-chart-summary"><strong>${title}</strong><ul>${lines.map(x=>`<li>${x}</li>`).join('')}</ul></div>`},
    error(message){let box=document.getElementById('course-error-summary');if(!box){box=document.createElement('div');box.id='course-error-summary';box.className='course-error-summary';box.tabIndex=-1;document.querySelector('.md-content__inner')?.prepend(box)}box.textContent=message;box.focus()},
    clearError(){document.getElementById('course-error-summary')?.remove()},
    envelope(module,title,payload,condition={}){return {course:'ECO 412',module,schemaVersion:'2.0.0',anonymousSessionId:this.session(),title,condition,exportedAt:new Date().toISOString(),payload}}
  };
  window.CourseLab=CourseLab;
})();
