# Human or Econ? Laboratory

<div class="m1lab-hero">
  <p class="m1lab-kicker">ECO 412 • MODULE 1</p>
  <h1>Test the benchmark. Observe the context.</h1>
  <p>This complete laboratory combines the initial decision activities, the Choice Architecture Walk, the Adaptive Species Lens, and preparation for the Model Diagnostic Case Study. Complete the sections in order and make each initial decision before revealing the explanation.</p>
</div>

<div class="m1lab-status"><strong>Assessment structure:</strong> The laboratory, field observation, and Adaptive Species analysis are required preparation. They support one graded Canvas submission: <b>Module 1 Model Diagnostic Case Study</b>.</div>

## Learning objectives

By completing this laboratory, you should be able to:

- State the relevant Standard Economic Model benchmark before interpreting behavior.
- Identify context-dependent patterns in perception, comparison, and valuation.
- Separate an observed phenomenon from a proposed behavioral mechanism.
- Document one real decision environment without collecting identifiable information.
- Apply Principle, Dissent, Reversal, Mismatch, and Revision to laboratory and field evidence.
- Export de-identified records for use in the Model Diagnostic Case Study.

## Laboratory workflow

<div class="m1lab-flow">
  <article><b>1</b><h3>Commit</h3><p>Make an initial decision before seeing the explanation.</p></article>
  <article><b>2</b><h3>Reveal</h3><p>Compare the response with the economic benchmark.</p></article>
  <article><b>3</b><h3>Interpret</h3><p>Develop a mechanism and a credible alternative.</p></article>
  <article><b>4</b><h3>Observe</h3><p>Extend the analysis to a real decision environment.</p></article>
  <article><b>5</b><h3>Integrate</h3><p>Use the evidence in one professional case study.</p></article>
</div>

---

## Activity 1: Context and visual perception

The focal objects in each display are identical. Before revealing the answer, record what the display appears to show.

<div class="illusion-grid">
  <article>
    <h3>Ebbinghaus illusion</h3>
    <div class="ebbinghaus" aria-label="Two identical blue circles surrounded by differently sized circles">
      <div class="cluster small-ring"><i class="center"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="cluster large-ring"><i class="center"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    </div>
    <label>Which blue center circle appears larger?
      <select id="m1-ebb"><option value="">Choose before revealing</option><option>Left</option><option>Right</option><option>They appear equal</option></select>
    </label>
  </article>
  <article>
    <h3>Müller-Lyer illusion</h3>
    <div class="muller" aria-label="Two equal horizontal lines with differently oriented fins"><div class="ml-line outward"></div><div class="ml-line inward"></div></div>
    <label>Which horizontal shaft appears longer?
      <select id="m1-muller"><option value="">Choose before revealing</option><option>Top</option><option>Bottom</option><option>They appear equal</option></select>
    </label>
  </article>
</div>

<button class="md-button md-button--primary" type="button" onclick="Module1Lab.revealIllusions()">Reveal the construction</button>
<div id="m1-illusion-feedback" class="m1-feedback" hidden></div>

### Interpretation checkpoint

The optical illusions demonstrate that a stable focal object can appear different when its surrounding context changes. They do not establish that every preference is an illusion. The economic question is whether contextual comparison can similarly affect valuation and choice.

---

## Activity 2: Relative comparison and the decoy effect

### Condition A: two options

Choose one subscription before continuing.

<div class="choice-cards">
  <label><input type="radio" name="decoy-a" value="Online subscription for $50"><span><b>Online</b><em>$50</em>One year of digital access</span></label>
  <label><input type="radio" name="decoy-a" value="Print and online subscription for $80"><span><b>Print + Online</b><em>$80</em>One year of both formats</span></label>
</div>

<button class="md-button" type="button" onclick="Module1Lab.lockDecoyA()">Lock Condition A</button>
<div id="m1-decoy-b" hidden>

### Condition B: three options

A third option is now available. Choose again.

<div class="choice-cards three">
  <label><input type="radio" name="decoy-b" value="Online subscription for $50"><span><b>Online</b><em>$50</em>One year of digital access</span></label>
  <label class="decoy"><input type="radio" name="decoy-b" value="Print subscription for $80"><span><b>Print Only</b><em>$80</em>One year of print access</span></label>
  <label><input type="radio" name="decoy-b" value="Print and online subscription for $80"><span><b>Print + Online</b><em>$80</em>One year of both formats</span></label>
</div>

<button class="md-button md-button--primary" type="button" onclick="Module1Lab.finishDecoy()">Compare my choices</button>
</div>
<div id="m1-decoy-feedback" class="m1-feedback" hidden></div>

### Benchmark and explanation

A dominated option should not change the ordering of the original alternatives under context-independent choice. A response shift is consistent with relative comparison, but the activity alone does not determine whether the mechanism is easier comparison, demand construction, attention, or another factor.

---

## Activity 3: The special appeal of free

The chocolate activity examines whether crossing from a small positive price to zero changes choice beyond a simple one-cent price reduction.

### Condition A: both chocolates have a positive price

<div class="choice-cards">
  <label><input type="radio" name="free-a" value="Premium chocolate at 15 cents"><span><b>Premium chocolate</b><em>15¢</em>Higher-quality option</span></label>
  <label><input type="radio" name="free-a" value="Ordinary chocolate at 1 cent"><span><b>Ordinary chocolate</b><em>1¢</em>Familiar lower-priced option</span></label>
</div>
<button class="md-button" type="button" onclick="Module1Lab.lockFreeA()">Lock Condition A</button>

<div id="m1-free-b" hidden>
### Condition B: both prices decline by one cent
<div class="choice-cards">
  <label><input type="radio" name="free-b" value="Premium chocolate at 14 cents"><span><b>Premium chocolate</b><em>14¢</em>Higher-quality option</span></label>
  <label class="free"><input type="radio" name="free-b" value="Ordinary chocolate for free"><span><b>Ordinary chocolate</b><em>FREE</em>Zero-price option</span></label>
</div>
<button class="md-button md-button--primary" type="button" onclick="Module1Lab.finishFree()">Compare my choices</button>
</div>
<div id="m1-free-feedback" class="m1-feedback" hidden></div>

### Interpretation checkpoint

If the relative price difference remains constant, a sharp shift toward the zero-price option challenges a simple continuous cost-benefit account. Possible explanations include affect, elimination of perceived loss, lower regret, mapping difficulty, or transaction convenience. The laboratory establishes a pattern, not a final mechanism.

---

## Activity 4: Choice Architecture Walk

<div class="field-intro">
  <p class="m1lab-kicker">FIELD EXTENSION • COMPLETE AFTER THE DECISION ACTIVITIES</p>
  <h2>See the decision before explaining it.</h2>
  <p>Examine one everyday decision environment and document how its visible design may shape what a person notices, compares, or finds easy to do. This observation becomes supporting evidence in the Model Diagnostic Case Study.</p>
</div>

### Why you are doing this

The earlier activities show that context can influence perception, comparison, and valuation. The walk asks whether a real setting contains a default, ordering rule, attention cue, friction, simplification, social signal, or reference point that could influence a decision. Your task is to describe the environment carefully, not to prove causal impact or infer a designer's intention.

### Choose an appropriate setting

A suitable setting has a recognizable decision moment, at least two actions or an option to do nothing, a visible design feature, and an observation method that does not collect identifiable information. Examples include a campus form, menu, subscription page, checkout screen, registration process, recycling station, queue, sign, or service process.

!!! warning "Privacy and ethics boundary"
    Observe the environment, not identifiable people. Do not collect names, student IDs, faces, identifiable photographs, private records, protected-characteristic information, covert audio, or covert video. Do not change the environment or test people.

### What to look for

<div class="feature-grid">
  <article><small>DEFAULT</small><h3>What happens without a change?</h3><p>Preselection, renewal, or a recommended setting.</p></article>
  <article><small>ORDER</small><h3>What appears first?</h3><p>Position, sequence, ranking, or prominence.</p></article>
  <article><small>SALIENCE</small><h3>What attracts attention?</h3><p>Color, size, contrast, labels, warnings, or badges.</p></article>
  <article><small>FRICTION</small><h3>What takes more effort?</h3><p>Extra screens, fields, searching, waiting, or opt-out steps.</p></article>
  <article><small>SIMPLIFICATION</small><h3>What reduces complexity?</h3><p>Short lists, grouping, summaries, or recommendations.</p></article>
  <article><small>SOCIAL INFORMATION</small><h3>What do others appear to do?</h3><p>Ratings, popularity, participation, or testimonials.</p></article>
  <article><small>REFERENCE</small><h3>What anchors comparison?</h3><p>Original prices, suggested amounts, bundles, or side-by-side options.</p></article>
</div>

### Separate observation from explanation

<div class="evidence-grid">
  <article><small>OBSERVED</small><p>The recommended option appears first, has a colored border, and is preselected.</p></article>
  <article><small>INTERPRETED</small><p>The arrangement may reduce search and completion effort.</p></article>
  <article><small>NOT ESTABLISHED</small><p>The observation does not prove intent or show that the design caused behavior.</p></article>
</div>

### Complete the field record

<div class="m1-form">
  <label>General setting<input id="m1-field-setting" maxlength="120" placeholder="Example: online campus registration form"></label>
  <label>Decision moment<input id="m1-field-moment" maxlength="160" placeholder="What must be selected, continued, or declined?"></label>
  <label>Available actions<textarea id="m1-field-options" rows="3" placeholder="List the visible options, including inaction or opt-out."></textarea></label>
  <label>Primary feature<select id="m1-field-feature"><option value="">Choose one</option><option>Default or preselection</option><option>Ordering or placement</option><option>Salience or visual emphasis</option><option>Friction or extra steps</option><option>Simplification</option><option>Social information</option><option>Price or reference presentation</option><option>Other observable feature</option></select></label>
  <label>Observable evidence<textarea id="m1-field-evidence" rows="4" placeholder="Describe only what is visibly present."></textarea></label>
  <label>Behavior made easier<textarea id="m1-field-action" rows="4" placeholder="What appears easier to notice, select, or complete?"></textarea></label>
  <label>Module 1 connection<select id="m1-field-concept"><option value="">Choose one</option><option>Context-dependent choice</option><option>Relative comparison or decoy effect</option><option>Zero-price or affective response</option><option>Limited attention or automatic processing</option><option>Bayesian updating or prior information</option><option>Self-interest versus broader utility</option><option>Fungibility or mental labeling</option><option>Time consistency or immediate temptation</option></select></label>
  <label>Behavioral interpretation<textarea id="m1-field-interpretation" rows="4" placeholder="How could the feature influence attention, comparison, evaluation, or effort?"></textarea></label>
  <label>Alternative explanation<textarea id="m1-field-alternative" rows="4" placeholder="Could workflow, regulation, convention, or technical constraints explain it?"></textarea></label>
  <label>Evidence limitation<textarea id="m1-field-limitation" rows="4" placeholder="What can this observation not establish?"></textarea></label>
</div>
<button class="md-button md-button--primary" type="button" onclick="Module1Lab.buildFieldNote()">Build working field note</button>
<div id="m1-field-feedback" class="m1-feedback" hidden></div>
<div id="m1-field-preview" class="m1-preview" hidden></div>

---

## Integrated Adaptive Species Lens

Apply the lens to one laboratory result and the Choice Architecture Walk observation.

<div class="lens-grid">
  <article><small>PRINCIPLE</small><h3>Benchmark</h3><p>What does the relevant Standard Economic Model assumption predict?</p></article>
  <article><small>DISSENT</small><h3>Challenge</h3><p>What do the laboratory or field evidence show that the benchmark misses?</p></article>
  <article><small>REVERSAL</small><h3>Possible function</h3><p>What search, information, coordination, or completion problem might be reduced?</p></article>
  <article><small>MISMATCH</small><h3>Failure of fit</h3><p>When could the same response or design obscure alternatives or shift costs?</p></article>
  <article><small>REVISION</small><h3>Answerable claim</h3><p>What evidence would weaken the interpretation or support the alternative?</p></article>
</div>

<div class="m1-form adaptive-form">
  <label>Principle<textarea id="m1-lens-principle" rows="3" placeholder="If choice were context independent, then..."></textarea></label>
  <label>Dissent<textarea id="m1-lens-dissent" rows="3" placeholder="The evidence challenges the benchmark because..."></textarea></label>
  <label>Reversal<textarea id="m1-lens-reversal" rows="3" placeholder="The response or design may be useful when..."></textarea></label>
  <label>Mismatch<textarea id="m1-lens-mismatch" rows="3" placeholder="The fit may break when..."></textarea></label>
  <label>Revision trigger<textarea id="m1-lens-revision" rows="3" placeholder="I would revise this interpretation if..."></textarea></label>
</div>

!!! note "Interpretive boundary"
    Adaptive does not mean optimal, desirable, conscious, universal, or currently beneficial.

---

## Build and export the complete Module 1 record

Before exporting, confirm that you completed the three decision activities, the field record, and the Adaptive Species prompts.

<div class="completion-grid">
  <label><input type="checkbox" id="m1-check-illusion"> I completed the perception activity before revealing the construction.</label>
  <label><input type="checkbox" id="m1-check-decoy"> I completed both decoy conditions.</label>
  <label><input type="checkbox" id="m1-check-free"> I completed both chocolate conditions.</label>
  <label><input type="checkbox" id="m1-check-field"> I completed the Choice Architecture Walk record.</label>
  <label><input type="checkbox" id="m1-check-lens"> I completed all five Adaptive Species prompts.</label>
</div>

<button class="md-button md-button--primary" type="button" onclick="Module1Lab.buildCompleteRecord()">Validate complete record</button>
<div id="m1-complete-feedback" class="m1-feedback" hidden></div>
<div class="export-actions">
  <button class="md-button" type="button" onclick="Module1Lab.exportJSON()">Export complete Module 1 JSON record</button>
  <button class="md-button" type="button" onclick="Module1Lab.exportMarkdown()">Export case-study planning notes</button>
</div>

## One graded submission

Use the laboratory and field evidence in the Model Diagnostic Case Study:

1. Define the decision environment and relevant SEM benchmark.
2. Use at least one laboratory result and the field observation.
3. Explain a primary behavioral mechanism and a credible alternative.
4. Apply the Adaptive Species Lens.
5. Recommend a proportionate, transparent redesign.
6. State the evidence that would change your conclusion.

<div class="m1lab-handoff"><strong>Canvas handoff</strong><span>Upload the Model Diagnostic Case Study, its required visual, and the complete Module 1 JSON record to the single Canvas assignment. No separate lab, field-study, or Adaptive Species submission is required.</span></div>

<a class="md-button md-button--primary" href="case-study/">Open the Model Diagnostic Case Study</a>
