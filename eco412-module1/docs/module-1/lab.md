# Human or Econ? Interactive Lab

<div class="lab-intro">
<p><strong>Estimated sequence:</strong> seven stations, dashboard, export, reflection.</p>
<p>Use one device and one browser throughout. Responses save automatically on this device.</p>
</div>

<div id="lab-app">
  <div class="progress-shell"><div id="lab-progress"></div></div>
  <div id="status-banner" class="status-banner">No saved profile yet.</div>

  <section class="lab-station" data-station="1">
    <p class="eyebrow">STATION 1 • EXPECTED UTILITY</p>
    <h2>The Hungry Shopper</h2>
    <p>Imagine you are grocery shopping while very hungry. Allocate <strong>12 items</strong> across the categories below. Then imagine shopping after a satisfying meal and allocate another 12.</p>
    <div id="shopper-controls" class="control-grid"></div>
    <button class="md-button md-button--primary" onclick="M1.scoreShopper()">Analyze consumption drift</button>
    <div id="shopper-message" class="feedback"></div>
    <div id="shopper-chart" class="plot"></div>
    <details><summary>Interpretation prompt</summary><p>What changed, and why might a current visceral state distort forecasts of future utility?</p></details>
  </section>

  <section class="lab-station" data-station="2">
    <p class="eyebrow">STATION 2 • RATIONALITY</p>
    <h2>Transitivity Challenge</h2>
    <p>Choose one option from each pair. The alternatives are deliberately multidimensional.</p>
    <div class="choice-grid">
      <label>A vs. B<select id="ab"><option value="">Choose</option><option value="A">A: $650 cash</option><option value="B">B: 3-night beach trip</option></select></label>
      <label>B vs. C<select id="bc"><option value="">Choose</option><option value="B">B: 3-night beach trip</option><option value="C">C: premium laptop</option></select></label>
      <label>A vs. C<select id="ac"><option value="">Choose</option><option value="A">A: $650 cash</option><option value="C">C: premium laptop</option></select></label>
    </div>
    <button class="md-button md-button--primary" onclick="M1.scoreTransitivity()">Test consistency</button>
    <div id="transitivity-message" class="feedback"></div><div id="transitivity-chart" class="plot small-plot"></div>
  </section>

  <section class="lab-station" data-station="3">
    <p class="eyebrow">STATION 3 • TIME CONSISTENCY</p>
    <h2>Now versus Later</h2>
    <div class="choice-grid">
      <label>Choice 1<select id="time-near"><option value="">Choose</option><option value="sooner">$50 today</option><option value="later">$75 in one month</option></select></label>
      <label>Choice 2<select id="time-far"><option value="">Choose</option><option value="sooner">$50 in 12 months</option><option value="later">$75 in 13 months</option></select></label>
    </div>
    <button class="md-button md-button--primary" onclick="M1.scoreTime()">Compare choices</button>
    <div id="time-message" class="feedback"></div><div id="time-chart" class="plot small-plot"></div>
  </section>

  <section class="lab-station" data-station="4">
    <p class="eyebrow">STATION 4 • SELF-INTEREST</p>
    <h2>Allocation Game</h2>
    <p>You control $100. The anonymous recipient cannot reject the allocation. How much do you give?</p>
    <label class="range-label">Give to recipient: $<span id="give-value">20</span><input id="giving" type="range" min="0" max="100" value="20" oninput="document.getElementById('give-value').textContent=this.value"></label>
    <button class="md-button md-button--primary" onclick="M1.scoreGiving()">Record allocation</button>
    <div id="giving-message" class="feedback"></div><div id="giving-chart" class="plot small-plot"></div>
  </section>

  <section class="lab-station" data-station="5">
    <p class="eyebrow">STATION 5 • BAYESIAN UPDATING</p>
    <h2>The Blue Cab</h2>
    <p>In a city, 15% of cabs are blue and 85% are green. A witness identifies the cab as blue. Testing shows the witness is correct 80% of the time. Given a “blue” identification, what is the probability the cab was actually blue?</p>
    <label>Your estimate: <input id="bayes-estimate" type="number" min="0" max="100" step="1" placeholder="0–100">%</label>
    <button class="md-button md-button--primary" onclick="M1.scoreBayes()">Update the probability</button>
    <div id="bayes-message" class="feedback"></div><div id="bayes-chart" class="plot"></div>
  </section>

  <section class="lab-station" data-station="6">
    <p class="eyebrow">STATION 6 • FUNGIBILITY</p>
    <h2>Does Money Carry a Label?</h2>
    <p>For each $300 windfall, assign percentages across the five uses. Each row must total 100.</p>
    <div id="fungibility-controls" class="table-wrap"></div>
    <button class="md-button md-button--primary" onclick="M1.scoreFungibility()">Compare allocations</button>
    <div id="fungibility-message" class="feedback"></div><div id="fungibility-chart" class="plot"></div>
  </section>

  <section class="lab-station" data-station="7">
    <p class="eyebrow">STATION 7 • CHOICE ARCHITECTURE</p>
    <h2>The Decoy Effect</h2>
    <p>Make each choice independently.</p>
    <div class="choice-grid">
      <label>Set A, with decoy<select id="decoy-a"><option value="">Choose</option><option value="web">Digital only, $59</option><option value="print">Print only, $125</option><option value="bundle">Print + digital, $125</option></select></label>
      <label>Set B, decoy removed<select id="decoy-b"><option value="">Choose</option><option value="web">Digital only, $59</option><option value="bundle">Print + digital, $125</option></select></label>
    </div>
    <button class="md-button md-button--primary" onclick="M1.scoreDecoy()">Reveal comparison</button>
    <div id="decoy-message" class="feedback"></div><div id="decoy-chart" class="plot"></div>
  </section>

  <section class="lab-station dashboard-card" data-station="8">
    <p class="eyebrow">YOUR MODULE 1 PROFILE</p><h2>Behavioral Decision Dashboard</h2>
    <p id="profile-summary">Complete the stations to generate your profile.</p>
    <div id="profile-chart" class="plot"></div>
    <div id="score-cards" class="score-grid"></div>
    <div class="action-row">
      <button class="md-button md-button--primary" onclick="M1.exportJSON()">Export JSON</button>
      <button class="md-button" onclick="M1.printReport()">Print / save PDF</button>
      <button class="md-button danger" onclick="M1.resetLab()">Reset lab</button>
    </div>
  </section>
</div>

## Reflection submission

Using your exported dashboard, write 500–700 words addressing:

1. Which result most strongly aligned with the SEM prediction?
2. Which result most clearly departed from it?
3. Was the departure irrational, or might the benchmark omit relevant goals or context?
4. How could a business or policymaker use the same mechanism?
5. What responsible-stewardship constraint should limit that use?
