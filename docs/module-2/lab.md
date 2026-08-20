# Research Design Lab

<div class="m2-intro"><strong>Mission:</strong> turn a behavioral claim into a study that could produce credible evidence. Complete all six studios in order and export the preregistration record.</div>

<div id="m2-app">
  <div class="m2-progress"><div id="m2-progress-bar"></div></div>
  <div id="m2-status" class="m2-status">No Module 2 work saved yet.</div>

  <section class="m2-studio">
    <p class="m2-kicker">STUDIO 1 • THEORY</p>
    <h2>The Good-Theory Diagnostic</h2>
    <p>Evaluate the claim: <em>Advance information about an unfamiliar ingredient lowers the probability that a person selects a modified beverage.</em></p>
    <div id="m2-theory-controls" class="m2-slider-grid"></div>
    <button class="md-button md-button--primary" onclick="M2.saveTheory()">Save theory audit</button>
    <div id="m2-theory-feedback" class="m2-feedback"></div>
    <div id="m2-theory-chart" class="m2-plot"></div>
  </section>

  <section class="m2-studio">
    <p class="m2-kicker">STUDIO 2 • CLASSIFICATION</p>
    <h2>Field Study or Experiment?</h2>
    <div class="m2-card-grid">
      <label>Study A: A researcher compares naturally occurring purchase behavior at two stores without assigning conditions.<select id="m2-class-a"><option value="">Choose</option><option value="field">Field study</option><option value="experiment">Experiment</option></select></label>
      <label>Study B: Participants are randomly assigned to receive information before or after sampling.<select id="m2-class-b"><option value="">Choose</option><option value="field">Field study</option><option value="experiment">Experiment</option></select></label>
      <label>Study B assignment structure<select id="m2-class-c"><option value="">Choose</option><option value="between">Between-subjects</option><option value="within">Within-subjects</option></select></label>
    </div>
    <button class="md-button md-button--primary" onclick="M2.scoreClassification()">Check classifications</button>
    <div id="m2-class-feedback" class="m2-feedback"></div>
    <div id="m2-class-chart" class="m2-plot m2-small"></div>
  </section>

  <section class="m2-studio">
    <p class="m2-kicker">STUDIO 3 • DESIGN BUILDER</p>
    <h2>Map the Study</h2>
    <p>Construct the three-condition preference experiment presented in the course materials.</p>
    <div class="m2-card-grid">
      <label>Independent variable<select id="m2-iv"><option value="">Choose</option><option value="timing">Timing of ingredient information</option><option value="preference">Preference for modified option</option><option value="sample">Sample size</option></select></label>
      <label>Dependent variable<select id="m2-dv"><option value="">Choose</option><option value="timing">Timing of ingredient information</option><option value="preference">Preference for modified option</option><option value="sample">Sample size</option></select></label>
      <label>Assignment<select id="m2-assignment"><option value="">Choose</option><option value="random">Random assignment to one condition</option><option value="choice">Participant chooses condition</option><option value="sequence">Everyone completes all conditions</option></select></label>
      <label>Primary comparison<select id="m2-comparison"><option value="">Choose</option><option value="blind-before">Blind versus informed-before</option><option value="blind-after">Blind versus informed-after</option><option value="all">All three conditions</option></select></label>
    </div>
    <button class="md-button md-button--primary" onclick="M2.scoreDesign()">Validate design map</button>
    <div id="m2-design-feedback" class="m2-feedback"></div>
    <div id="m2-design-chart" class="m2-plot"></div>
  </section>

  <section class="m2-studio">
    <p class="m2-kicker">STUDIO 4 • RANDOMIZATION</p>
    <h2>Why Random Assignment Matters</h2>
    <p>Simulate assignment of 90 participants to three groups. Increase the number of runs to see how average balance changes.</p>
    <label>Simulation runs: <strong id="m2-run-value">1</strong><input id="m2-runs" type="range" min="1" max="500" value="1" oninput="document.getElementById('m2-run-value').textContent=this.value"></label>
    <button class="md-button md-button--primary" onclick="M2.simulateRandomization()">Run random assignment</button>
    <div id="m2-random-feedback" class="m2-feedback"></div>
    <div id="m2-random-chart" class="m2-plot"></div>
  </section>

  <section class="m2-studio">
    <p class="m2-kicker">STUDIO 5 • EVIDENCE</p>
    <h2>Reconstruct the Preference Study</h2>
    <p>The presentation reports 90 participants randomly assigned across three conditions, with 59% selecting the modified option in the blind condition, 30% when informed before sampling, and 52% when informed after sampling.</p>
    <div id="m2-results-chart" class="m2-plot"></div>
    <div class="m2-card-grid">
      <label>Largest observed contrast<select id="m2-contrast"><option value="">Choose</option><option value="bb">Blind vs. Before</option><option value="ba">Blind vs. After</option><option value="af">Before vs. After</option></select></label>
      <label>Best bounded conclusion<select id="m2-conclusion"><option value="">Choose</option><option value="cause">Information always causes dislike</option><option value="sample">In this sample, advance information was associated with the lowest selection rate</option><option value="none">Information had no relationship with choice</option></select></label>
    </div>
    <button class="md-button md-button--primary" onclick="M2.scoreEvidence()">Interpret evidence</button>
    <div id="m2-evidence-feedback" class="m2-feedback"></div>
  </section>

  <section class="m2-studio">
    <p class="m2-kicker">STUDIO 6 • RESEARCH AUDIT</p>
    <h2>Credibility, Ethics, and Preregistration</h2>
    <div class="m2-card-grid">
      <label>Research question<textarea id="m2-question" rows="3" placeholder="How does..."></textarea></label>
      <label>Primary hypothesis<textarea id="m2-hypothesis" rows="3" placeholder="Participants assigned to..."></textarea></label>
      <label>Primary outcome<textarea id="m2-outcome" rows="3" placeholder="The primary outcome is..."></textarea></label>
      <label>Responsible research safeguard<textarea id="m2-ethics" rows="3" placeholder="Consent, deception, debriefing, risk..."></textarea></label>
    </div>
    <p>Rate the study's present credibility:</p>
    <div id="m2-audit-controls" class="m2-slider-grid"></div>
    <button class="md-button md-button--primary" onclick="M2.saveAudit()">Generate methodology profile</button>
    <div id="m2-audit-feedback" class="m2-feedback"></div>
    <div id="m2-profile-chart" class="m2-plot"></div>
    <div id="m2-score-cards" class="m2-score-grid"></div>
    <div class="m2-actions"><button class="md-button md-button--primary" onclick="M2.exportJSON()">Export preregistration JSON</button><button class="md-button" onclick="M2.reset()">Reset Module 2</button></div>
  </section>
</div>

## Research audit memo

Write 700–900 words that answer four questions:

1. What causal claim can the design support, and what claim would go too far?
2. Which validity threat is most important?
3. How should the study handle consent, disclosure, deception, or debriefing?
4. What replication or field extension would most improve confidence?
