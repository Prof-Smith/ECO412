# The Utility Journey Lab

<div class="m3-intro"><strong>Mission:</strong> follow one decision from prediction to choice, experience, memory, and future choice. Then test whether an arbitrary anchor changes stated value.</div>

<div id="m3-app">
  <div class="m3-progress"><div id="m3-progress-bar"></div></div>
  <div id="m3-status" class="m3-status">No Module 3 work saved yet.</div>

  <section class="m3-studio">
    <p class="m3-kicker">STUDIO 1 • CONCEPT MAP</p>
    <h2>Which Utility Is It?</h2>
    <div class="m3-card-grid">
      <label>The weight an outcome receives when making a choice<select id="m3-map-1"><option value="">Choose</option><option value="decision">Decision utility</option><option value="instant">Instant utility</option><option value="remembered">Remembered utility</option><option value="predicted">Predicted utility</option></select></label>
      <label>A report of current experience during an episode<select id="m3-map-2"><option value="">Choose</option><option value="decision">Decision utility</option><option value="instant">Instant utility</option><option value="remembered">Remembered utility</option><option value="predicted">Predicted utility</option></select></label>
      <label>A retrospective evaluation of a past episode<select id="m3-map-3"><option value="">Choose</option><option value="decision">Decision utility</option><option value="instant">Instant utility</option><option value="remembered">Remembered utility</option><option value="predicted">Predicted utility</option></select></label>
      <label>A belief about the experience an outcome will deliver<select id="m3-map-4"><option value="">Choose</option><option value="decision">Decision utility</option><option value="instant">Instant utility</option><option value="remembered">Remembered utility</option><option value="predicted">Predicted utility</option></select></label>
    </div>
    <button class="md-button md-button--primary" onclick="M3.scoreMap()">Check utility map</button>
    <div id="m3-map-feedback" class="m3-feedback"></div><div id="m3-map-chart" class="m3-plot m3-small"></div>
  </section>

  <section class="m3-studio">
    <p class="m3-kicker">STUDIO 2 • DECISION UTILITY</p>
    <h2>Build a Weekend Experience</h2>
    <p>Allocate 100 decision points across the attributes, then choose an option.</p>
    <div id="m3-weight-controls" class="m3-slider-grid"></div>
    <div class="m3-total">Weight total: <strong id="m3-weight-total">100</strong></div>
    <div class="m3-card-grid">
      <label>Your choice<select id="m3-choice"><option value="">Choose</option><option value="city">City Weekend</option><option value="retreat">Nature Retreat</option></select></label>
      <label>Predicted experience, 0–100<input id="m3-predicted" type="number" min="0" max="100" value="75"></label>
    </div>
    <button class="md-button md-button--primary" onclick="M3.saveDecision()">Record decision utility</button>
    <div id="m3-decision-feedback" class="m3-feedback"></div><div id="m3-decision-chart" class="m3-plot"></div>
  </section>

  <section class="m3-studio">
    <p class="m3-kicker">STUDIO 3 • INSTANT UTILITY</p>
    <h2>Trace the Experience</h2>
    <p>Imagine the selected weekend unfolding across eight moments. Rate each moment from 0 to 100.</p>
    <div id="m3-moment-controls" class="m3-moments"></div>
    <button class="md-button md-button--primary" onclick="M3.saveExperience()">Plot experience profile</button>
    <div id="m3-experience-feedback" class="m3-feedback"></div><div id="m3-experience-chart" class="m3-plot"></div>
  </section>

  <section class="m3-studio">
    <p class="m3-kicker">STUDIO 4 • REMEMBERED UTILITY</p>
    <h2>What Will Memory Preserve?</h2>
    <label>Without recalculating, rate the entire experience from 0 to 100<input id="m3-remembered" type="range" min="0" max="100" value="65" oninput="document.getElementById('m3-remembered-v').textContent=this.value"> <strong id="m3-remembered-v">65</strong></label>
    <button class="md-button md-button--primary" onclick="M3.scoreMemory()">Compare memory with experience</button>
    <div id="m3-memory-feedback" class="m3-feedback"></div><div id="m3-memory-chart" class="m3-plot"></div>
  </section>

  <section class="m3-studio">
    <p class="m3-kicker">STUDIO 5 • DURATION NEGLECT</p>
    <h2>Short or Long Episode?</h2>
    <p>Episode A has six moments: 30, 35, 20, 15, 25, 20. Episode B contains the same six moments plus three mildly better moments: 28, 32, 35.</p>
    <label>Which would you repeat?<select id="m3-repeat"><option value="">Choose</option><option value="A">Episode A, shorter</option><option value="B">Episode B, longer with a better ending</option></select></label>
    <button class="md-button md-button--primary" onclick="M3.scoreDuration()">Analyze episodes</button>
    <div id="m3-duration-feedback" class="m3-feedback"></div><div id="m3-duration-chart" class="m3-plot"></div>
  </section>

  <section class="m3-studio">
    <p class="m3-kicker">STUDIO 6 • ANCHORING</p>
    <h2>Coherent Arbitrariness</h2>
    <p>Generate an arbitrary anchor. Then state the most you would pay for a premium insulated bottle.</p>
    <button class="md-button" onclick="M3.generateAnchor()">Generate anchor</button>
    <div class="m3-anchor" id="m3-anchor">Anchor not generated</div>
    <label>Maximum willingness to pay: $<input id="m3-wtp" type="number" min="0" max="200" step="1"></label>
    <button class="md-button md-button--primary" onclick="M3.saveAnchor()">Record stated value</button>
    <div id="m3-anchor-feedback" class="m3-feedback"></div><div id="m3-anchor-chart" class="m3-plot m3-small"></div>
  </section>

  <section class="m3-studio">
    <p class="m3-kicker">STUDIO 7 • TRANSACTION UTILITY</p>
    <h2>Product Value versus Deal Value</h2>
    <div class="m3-card-grid">
      <label>Maximum value of the product to you<input id="m3-product-value" type="number" min="0" max="500" value="90"></label>
      <label>Price paid<input id="m3-price" type="number" min="0" max="500" value="65"></label>
      <label>Reference price shown<input id="m3-reference" type="number" min="0" max="500" value="120"></label>
    </div>
    <button class="md-button md-button--primary" onclick="M3.scoreTransaction()">Decompose utility</button>
    <div id="m3-transaction-feedback" class="m3-feedback"></div><div id="m3-transaction-chart" class="m3-plot"></div>
  </section>

  <section class="m3-studio m3-dashboard">
    <p class="m3-kicker">MODULE 3 PROFILE</p>
    <h2>Your Utility Journey</h2>
    <p id="m3-summary">Complete the studios to build the dashboard.</p>
    <div id="m3-profile-chart" class="m3-plot"></div>
    <div id="m3-score-cards" class="m3-score-grid"></div>
    <div class="m3-actions"><button class="md-button md-button--primary" onclick="M3.exportJSON()">Export utility JSON</button><button class="md-button" onclick="M3.reset()">Reset Module 3</button></div>
  </section>
</div>

## Utility Audit Memo

Write 700–900 words explaining where predicted, decision, experienced, and remembered utility aligned or diverged. Include the role of attributes, peaks, endings, duration, anchors, and reference prices. End with one implication for consumer welfare or choice architecture.
