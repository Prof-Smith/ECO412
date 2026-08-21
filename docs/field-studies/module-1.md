# Choice Architecture Walk

<div class="m1fs-hero">
  <p class="m1fs-kicker">MODULE 1 FIELD STUDY</p>
  <h1>Observe the environment, not the person.</h1>
  <p>Document how one bounded decision environment makes an option easier to notice, understand, or select. This is a descriptive field study. It does not establish designer intent or causal impact.</p>
</div>

## Research question

> **How does the visible architecture of a real setting appear to facilitate one choice rather than another?**

## What you will submit

<div class="m1fs-deliverables">
  <article><b>01</b><h3>Field-study record</h3><p>The de-identified JSON export produced on this page.</p></article>
  <article><b>02</b><h3>Field note</h3><p>A 250–350 word interpretation using the structure below.</p></article>
  <article><b>03</b><h3>Canvas handoff</h3><p>Upload both items to the Module 1 field-study assignment.</p></article>
</div>

## Step 1: Select one bounded setting

Choose a setting that can be observed without following, recording, or evaluating people. Appropriate examples include:

- A campus form or sign-up page
- A menu or pricing display
- A website checkout or registration screen
- A recycling or disposal station
- A library or student-service display
- A queue, directional sign, or service process

<div class="m1fs-boundary"><strong>Do not collect:</strong> names, student IDs, faces, photographs of identifiable people, private records, protected-characteristic data, covert audio, or covert video.</div>

## Step 2: Separate observation from interpretation

<div class="m1fs-three">
  <article><small>OBSERVED</small><p>The recommended option appears first and is preselected.</p></article>
  <article><small>INFERRED</small><p>The design may reduce search effort or make the recommended response easier.</p></article>
  <article><small>NOT ESTABLISHED</small><p>The observation does not prove designer intent or show that the design caused a choice.</p></article>
</div>

## Step 3: Complete the observation record

<div id="m1-field-app" class="m1fs-app">
  <div class="m1fs-grid">
    <label>General setting
      <input id="m1fs-setting" maxlength="100" placeholder="Example: online campus registration form">
    </label>
    <label>Decision moment
      <input id="m1fs-moment" maxlength="140" placeholder="What choice is presented, and when?">
    </label>
    <label>Primary visible feature
      <select id="m1fs-feature">
        <option value="">Choose one</option>
        <option>Default or preselection</option>
        <option>Ordering or placement</option>
        <option>Salience or visual emphasis</option>
        <option>Friction or extra steps</option>
        <option>Simplification</option>
        <option>Social information</option>
        <option>Price or reference presentation</option>
        <option>Other observable feature</option>
      </select>
    </label>
    <label>Observable evidence
      <textarea id="m1fs-evidence" rows="4" placeholder="Describe only what is visibly present. Do not infer motive."></textarea>
    </label>
    <label>Behavior made easier
      <textarea id="m1fs-action" rows="4" placeholder="What action appears easier to notice, understand, or complete?"></textarea>
    </label>
    <label>Strongest alternative explanation
      <textarea id="m1fs-alternative" rows="4" placeholder="Could workflow, space, regulation, convention, or technical constraints explain the design?"></textarea>
    </label>
    <label>Evidence limitation
      <textarea id="m1fs-limitation" rows="4" placeholder="What can this single observation not establish?"></textarea>
    </label>
    <label>Responsible redesign
      <textarea id="m1fs-redesign" rows="4" placeholder="Propose one transparent, autonomy-preserving improvement, if appropriate."></textarea>
    </label>
  </div>

  <button class="md-button md-button--primary" type="button" onclick="M1Field.build()">Build field note</button>
  <div id="m1fs-message" class="m1fs-message" hidden></div>
  <div id="m1fs-preview" class="m1fs-preview" hidden></div>
  <div class="m1fs-actions">
    <button class="md-button" type="button" onclick="M1Field.exportJSON()">Export field-study record</button>
    <button class="md-button" type="button" onclick="M1Field.exportMarkdown()">Export field-note scaffold</button>
  </div>
</div>

## Step 4: Interpret through the Adaptive Species Lens

<div class="m1fs-adapt">
  <article><small>PRINCIPLE</small><h3>What does the benchmark predict?</h3><p>A decision-maker evaluates the available options using preferences, beliefs, and constraints rather than being steered by irrelevant presentation.</p></article>
  <article><small>DISSENT</small><h3>What does the environment change?</h3><p>Defaults, salience, order, and friction may alter what is noticed, compared, or completed.</p></article>
  <article><small>REVERSAL</small><h3>When might the design be useful?</h3><p>A shortcut may reduce search or administrative burden when the recommended path is reliable and transparent.</p></article>
  <article><small>MISMATCH</small><h3>When could the fit break?</h3><p>The same design can conceal alternatives, shift costs, or preserve a default that no longer serves the decision-maker.</p></article>
  <article><small>REVISION</small><h3>What evidence should change the account?</h3><p>State an observation or comparison that would weaken the behavioral interpretation or favor the alternative explanation.</p></article>
</div>

## Field-note structure

Write **250–350 words** using these headings:

1. **Setting and decision moment**
2. **Observable architecture**
3. **Behavior facilitated**
4. **Behavioral interpretation**
5. **Alternative explanation**
6. **Adaptive benefit and possible mismatch**
7. **Evidence limitation and revision trigger**

<div class="m1fs-example"><strong>Bounded conclusion</strong><p>The preselected option appears to reduce search and completion effort. This is consistent with a default effect, but the observation alone does not establish that the preselection changes behavior. The ordering may instead reflect an administrative workflow. The behavioral interpretation would weaken if users selected the same option at similar rates when no option was preselected.</p></div>

## Canvas submission checklist

- Export the field-study record.
- Complete and revise the 250–350 word field note.
- Confirm that neither file contains a name or student ID.
- Upload both files to **SUBMIT • Choice Architecture Field Note** in Canvas.
