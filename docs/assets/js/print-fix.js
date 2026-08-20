(function(){
  window.addEventListener('beforeprint',function(){
    var chart=document.getElementById('profile-chart');
    if(window.Plotly&&chart){ Plotly.Plots.resize(chart); }
  });
  window.addEventListener('afterprint',function(){
    var chart=document.getElementById('profile-chart');
    if(window.Plotly&&chart){ Plotly.Plots.resize(chart); }
  });
})();
