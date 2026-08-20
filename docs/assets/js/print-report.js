(function () {
  function esc(value) {
    return String(value || '').replace(/[&<>"']/g, function (c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  function cardData() {
    return Array.from(document.querySelectorAll('#score-cards .score-card')).map(function(card) {
      return {
        value: (card.querySelector('.score-number') || {}).textContent || 'N/A',
        label: (card.querySelector('.score-label') || {}).textContent || ''
      };
    });
  }

  function reportHtml(chartUrl, summary, cards) {
    var cardsHtml = cards.map(function(card) {
      return '<div class="metric"><div class="value">' + esc(card.value) +
        '</div><div class="label">' + esc(card.label) + '</div></div>';
    }).join('');

    return '<!doctype html><html><head><meta charset="utf-8">' +
      '<title>ECO 412 Module 1 Behavioral Decision Profile</title>' +
      '<style>' +
      '@page{size:letter landscape;margin:.38in}' +
      '*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}' +
      'html,body{margin:0;background:#fff;color:#15213b;font-family:Arial,Helvetica,sans-serif}' +
      'body{padding:0}' +
      '.page{width:10.24in;height:7.72in;overflow:hidden;display:grid;grid-template-rows:auto auto 1fr auto;gap:.14in}' +
      '.header{display:flex;align-items:flex-end;justify-content:space-between;border-bottom:4px solid #2f6fed;padding:.02in 0 .12in}' +
      '.kicker{font-size:8pt;color:#2f6fed;font-weight:800;letter-spacing:.15em;text-transform:uppercase;margin-bottom:.04in}' +
      'h1{font-size:25pt;line-height:1;margin:0;color:#18254e;letter-spacing:-.03em}' +
      '.subtitle{font-size:9pt;color:#65728a;margin-top:.05in}' +
      '.badge{border:1px solid #cddcff;background:#eef4ff;color:#233876;border-radius:99px;padding:.07in .16in;font-size:8pt;font-weight:700}' +
      '.summary{font-size:9.5pt;line-height:1.35;background:#f5f7fb;border-left:5px solid #f2a900;border-radius:6px;padding:.09in .13in}' +
      '.content{display:grid;grid-template-columns:48% 52%;gap:.18in;min-height:0}' +
      '.chart-panel{border:1px solid #dce4ef;border-radius:14px;padding:.06in;display:flex;align-items:center;justify-content:center;min-height:0}' +
      '.chart-panel img{display:block;width:100%;height:100%;object-fit:contain}' +
      '.metrics{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(4,1fr);gap:.09in;min-height:0}' +
      '.metric{border:1px solid #d8e1ef;border-radius:12px;padding:.11in .15in;display:flex;flex-direction:column;justify-content:center;background:#fff}' +
      '.metric:last-child{grid-column:1/-1}' +
      '.value{font-size:22pt;line-height:1;font-weight:800;color:#2f6fed}' +
      '.label{font-size:7.5pt;line-height:1.15;margin-top:.05in;color:#52637d;letter-spacing:.09em;text-transform:uppercase}' +
      '.footer{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #dce4ef;padding-top:.08in;font-size:7.5pt;color:#65728a}' +
      '.note{max-width:7.7in}' +
      '.actions{position:fixed;right:18px;top:18px;display:flex;gap:8px}' +
      '.actions button{border:0;border-radius:8px;padding:9px 14px;font-weight:700;cursor:pointer}' +
      '.print{background:#2f6fed;color:#fff}.close{background:#eef1f6;color:#233876}' +
      '@media print{.actions{display:none}.page{width:10.24in;height:7.72in}}' +
      '</style></head><body>' +
      '<div class="actions"><button class="print" onclick="window.print()">Save as PDF / Print</button><button class="close" onclick="window.close()">Close</button></div>' +
      '<main class="page">' +
      '<header class="header"><div><div class="kicker">ECO 412 • Module 1</div><h1>Human or Econ?</h1><div class="subtitle">Behavioral Decision Profile</div></div><div class="badge">SEM Benchmark Report</div></header>' +
      '<section class="summary">' + esc(summary) + '</section>' +
      '<section class="content"><div class="chart-panel"><img alt="SEM benchmark alignment radar chart" src="' + chartUrl + '"></div><div class="metrics">' + cardsHtml + '</div></section>' +
      '<footer class="footer"><div class="note">Instructional diagnostic only. Scores indicate alignment with selected Standard Economic Model predictions, not intelligence or decision quality.</div><div>Professor Zachary A. Smith</div></footer>' +
      '</main></body></html>';
  }

  async function createPrintReport() {
    var popup = window.open('', '_blank', 'noopener,noreferrer');
    if (!popup) {
      alert('Please allow pop-ups for this site, then select Print / save PDF again.');
      return;
    }
    popup.document.write('<!doctype html><title>Preparing report</title><p style="font-family:Arial;padding:24px">Preparing the print report...</p>');
    var chart = document.getElementById('profile-chart');
    var summaryNode = document.getElementById('profile-summary');
    var summary = summaryNode ? summaryNode.textContent.trim() : 'Module 1 Behavioral Decision Profile';
    var cards = cardData();
    try {
      var url = await Plotly.toImage(chart, {
        format: 'png', width: 1000, height: 760, scale: 2
      });
      popup.document.open();
      popup.document.write(reportHtml(url, summary, cards));
      popup.document.close();
      popup.focus();
    } catch (err) {
      popup.close();
      alert('The report could not be generated. Refresh the page and try again.');
      console.error(err);
    }
  }

  function install() {
    if (window.M1) {
      window.M1.printReport = createPrintReport;
    } else {
      setTimeout(install, 50);
    }
  }
  install();
})();
