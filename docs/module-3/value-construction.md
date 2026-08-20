# Value Construction Lab: The Tom Sawyer Effect

## Central claim

A stable-looking pattern of choices does not necessarily imply a stable underlying valuation. Ariely, Loewenstein, and Prelec describe **coherent arbitrariness** as valuations that contain an arbitrary component at the initial level but remain orderly relative to that initial valuation. The paper goes further by asking whether an ambiguous experience can be framed as positive or negative before valuation begins. citeturn15search1

## Study reconstruction

The paper's first experiment reports that 35% of participants initially asked whether they would pay to attend a poetry reading later wanted to attend when it was free, compared with 8% among participants initially asked whether they would accept payment to attend. citeturn15search1

imageturn15search1†image_Page_17_thumbnail (Image: Experiment 1 attendance outcomes by initial framing)

In the third experiment, the assignment mechanism was made transparent and participants heard a sample. The paper reports that 49% of the pay-framed group would attend for free, compared with 9% of the paid-to-attend group. Mean valuations were negative in both groups, at −$1.13 and −$4.46, respectively. citeturn15search1

imageturn15search1†image_Page_18_thumbnail (Image: Experiment 3 attendance and valuation results)

## Interactive reconstruction

<div id="m3-va-app" class="m3-studio">
  <p class="m3-kicker">PAPER EXTENSION • VALUE SIGN</p>
  <h2>Can a Question Construct the Sign of Value?</h2>
  <p>Imagine an unfamiliar 15-minute campus performance. Select the question assigned to you, answer it, and then state whether you would attend for free.</p>

  <div class="m3-card-grid">
    <label>Initial frame<select id="m3-va-frame"><option value="">Choose</option><option value="pay">Would you pay $2 to attend?</option><option value="accept">Would you attend if paid $2?</option></select></label>
    <label>Your initial response<select id="m3-va-initial"><option value="">Choose</option><option value="yes">Yes</option><option value="no">No</option></select></label>
    <label>Would you attend for free?<select id="m3-va-free"><option value="">Choose</option><option value="yes">Yes</option><option value="no">No</option></select></label>
    <label>Your value of attending, −$10 to +$10<input id="m3-va-value" type="number" min="-10" max="10" step="0.5" value="0"></label>
  </div>

  <button class="md-button md-button--primary" onclick="M3VA.saveFrame()">Compare with the paper</button>
  <div id="m3-va-feedback" class="m3-feedback"></div>
  <div id="m3-va-chart" class="m3-plot"></div>

  <h3>Coherence across duration</h3>
  <p>State the amount you would pay, or compensation you would require, for 1, 3, and 6 minutes. Use positive amounts for willingness to pay and negative amounts for required compensation.</p>
  <div class="m3-card-grid">
    <label>1 minute<input id="m3-va-d1" type="number" min="-20" max="20" step="0.5" value="0"></label>
    <label>3 minutes<input id="m3-va-d3" type="number" min="-20" max="20" step="0.5" value="0"></label>
    <label>6 minutes<input id="m3-va-d6" type="number" min="-20" max="20" step="0.5" value="0"></label>
  </div>
  <button class="md-button md-button--primary" onclick="M3VA.saveDuration()">Test coherence</button>
  <div id="m3-va-duration-feedback" class="m3-feedback"></div>
  <div id="m3-va-duration-chart" class="m3-plot"></div>

  <h3>Separate versus joint evaluation</h3>
  <p>The paper argues that choices may change depending on whether alternatives are considered separately or together, and discusses between-subjects versus within-subjects designs as substantively important rather than merely technical. citeturn15search1</p>
  <div class="m3-card-grid">
    <label>Evaluate separately: value a 20-minute experience<input id="m3-va-separate" type="number" min="0" max="100" value="50"></label>
    <label>Evaluate jointly: value the 20-minute experience after seeing a 40-minute version<input id="m3-va-joint" type="number" min="0" max="100" value="50"></label>
  </div>
  <button class="md-button md-button--primary" onclick="M3VA.saveEvaluation()">Compare evaluation modes</button>
  <div id="m3-va-eval-feedback" class="m3-feedback"></div>
  <div id="m3-va-eval-chart" class="m3-plot m3-small"></div>

  <div class="m3-actions"><button class="md-button" onclick="M3VA.exportJSON()">Export paper-extension JSON</button><button class="md-button" onclick="M3VA.reset()">Reset extension</button></div>
</div>

## Welfare audit

The paper argues that if preferences contain a substantial arbitrary component, even informed personal consumption choices need not maximize welfare. It also suggests that posted prices may function as public anchors, making tastes partly endogenous to prevailing economic parameters. citeturn15search1

Address these questions in 400–600 words:

1. Did the initial question clarify a preference or help construct one?
2. Can relative coherence coexist with an arbitrary absolute level?
3. Why is responsiveness to incentives insufficient to establish fundamental valuation?
4. When should a posted price be treated as information, and when might it act as an anchor?
5. What would responsible choice architecture require when consumers are uncertain about their own preferences?
