(function () {
  function esc(value) {
    return String(value || '').replace(/[&<>"']/g, function (c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  function cardData() {
    return Array.from(document.querySelectorAll('#score-cards .score-card')).map(function (card) {
      return {
        value: (card.querySelector('.score-number') || {}).textContent || 'N/A',
        label: (card.querySelector('.score-label') || {}).textContent || ''
      };
    });
  }

  function reportHtml(chartUrl, summary, cards) {
    var cardsHtml = cards.map(function (card) {
      return '<div class="metric"><div class="value">' + esc(card.value) +
        '</div><div class="label">' + esc(card.label) + '</div></div>';
    }).join('');

    return '<!doctype html><html><head><meta charset="utf-8">' +
      '<title>ECO 412 Module 1 Behavioral Decision Profile</title>' +
      '<style>' +
      '@page{size:letter landscape;margin:.32in}' +
      '*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}' +
      'html,body{margin:0;background:#fff;color:#15213b;font-family:Arial,Helvetica,sans-serif}' +
      '.page{width:10.36in;height:7.86in;overflow:hidden;display:grid;grid-template-rows:auto auto 1fr auto;gap:.12in}' +
      '.header{display:flex;align-items:flex-end;justify-content:space-between;border-bottom:4px solid #2f6fed;padding:0 0 .1in}' +
      '.kicker{font-size:8pt;color:#2f6fed;font-weight:800;letter-spacing:.15em;text-transform:uppercase;margin-bottom:.04in}' +
      'h1{font-size:24pt;line-height:1;margin:0;color:#18254e;letter-spacing:-.03em}' +
      '.subtitle{font-size:9pt;color:#65728a;margin-top:.04in}' +
      '.badge{border:1px solid #cddcff;background:#eef4ff;color:#233876;border-radius:99px;padding:.06in .14in;font-size:8pt;font-weight:700}' +
      '.summary{font-size:9pt;line-height:1.3;background:#f5f7fb;border-left:5px solid #f2a900;border-radius:6px;padding:.08in .12in}' +
      '.content{display:grid;grid-template-columns:48% 52%;gap:.16in;min-height:0}' +
      '.chart-panel{border:1px solid #dce4ef;border-radius:14px;padding:.05in;display:flex;align-items:center;justify-content:center;min-height:0}' +
      '.chart-panel img{display:block;width:100%;height:100%;object-fit:contain}' +
      '.metrics{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(4,1fr);gap:.08in;min-height:0}' +
      '.metric{border:1px solid #d8e1ef;border-radius:11px;padding:.1in .14in;display:flex;flex-direction:column;justify-content:center;background:#fff}' +
      '.metric:last-child{grid-column:1/-1}' +
      '.value{font-size:21pt;line-height:1;font-weight:800;color:#2f6fed}' +
      '.label{font-size:7.2pt;line-height:1.15;margin-top:.04in;color:#52637d;letter-spacing:.08em;text-transform:uppercase}' +
      '.footer{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #dce4ef;padding-top:.07in;font-size:7.2pt;color:#65728a}' +
      '.note{max-width:7.8in}' +
      '</style></head><body><main class="page">' +
      '<header class="header"><div><div class="kicker">ECO 412 • Module 1</div><h1>Human or Econ?</h1><div class="subtitle">Behavioral Decision Profile</div></div><div class="badge">SEM Benchmark Report</div></header>' +
      '<section class="summary">' + esc(summary) + '</section>' +
      '<section class="content"><div class="chart-panel"><img id="report-chart" alt="SEM benchmark alignment radar chart" src="' + chartUrl + '"></div><div class="metrics">' + cardsHtml + '</div></section>' +
      '<footer class="footer"><div class="note">Instructional diagnostic only. Scores indicate alignment with selected Standard Economic Model predictions, not intelligence or decision quality.</div><div>Professor Zachary A. Smith</div></footer>' +
      '</main></body></html>';
  }

  async function createPrintReport() {
    var chart = document.getElementById('profile-chart');
    var summaryNode = document.getElementById('profile-summary');
    if (!chart || !window.Plotly) {
      alert('The dashboard chart is not ready. Refresh the page and try again.');
      return;
    }

    var summary = summaryNode ? summaryNode.textContent.trim() : 'Module 1 Behavioral Decision Profile';
    var cards = cardData();

    try {
      var chartUrl = await Plotly.toImage(chart, {format:'png', width:1100, height:820, scale:2});
      var oldFrame = document.getElementById('eco412-print-frame');
      if (oldFrame) oldFrame.remove();

      var frame = document.createElement('iframe');
      frame.id = 'eco412-print-frame';
      frame.setAttribute('title', 'Printable behavioral decision report');
      frame.style.position = 'fixed';
      frame.style.right = '0';
      frame.style.bottom = '0';
      frame.style.width = '1px';
      frame.style.height = '1px';
      frame.style.border = '0';
      frame.style.opacity = '0';
      frame.style.pointerEvents = 'none';
      document.body.appendChild(frame);

      var doc = frame.contentDocument || frame.contentWindow.document;
      doc.open();
      doc.write(reportHtml(chartUrl, summary, cards));
      doc.close();

      var img = doc.getElementById('report-chart');
      var doPrint = function () {
        frame.contentWindow.focus();
        frame.contentWindow.print();
        setTimeout(function () { frame.remove(); }, 1500);
      };
      if (img.complete) setTimeout(doPrint, 150);
      else img.onload = function () { setTimeout(doPrint, 150); };
    } catch (err) {
      console.error(err);
      alert('The report could not be generated. Refresh the page and try again.');
    }
  }

  function install() {
    if (window.M1) window.M1.printReport = createPrintReport;
    else setTimeout(install, 50);
  }
  install();
})();
