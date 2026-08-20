# Module 3 Field Study: Utility in Real Time

<div class="field-brief"><strong>Research question</strong><span>How closely do predicted and remembered utility match the experience reported during a routine activity?</span></div>

## Protocol

Choose one ordinary, low-risk experience that you would complete anyway, such as studying in a familiar location, using a campus service, eating a routine meal, or taking a normal walk. This is self-observation. Do not recruit or record anyone else.

Before the experience, record predicted utility. During or immediately after four natural moments, record instant utility. Later the same day, record remembered utility.

<div id="field-m3-app" class="field-app">
  <div class="field-control-grid">
    <label>Experience label<input id="field-m3-label" type="text" maxlength="60" placeholder="Use a general label, not a location or person"></label>
    <label>Predicted utility, 0–100<input id="field-m3-predicted" type="number" min="0" max="100" value="70"></label>
    <label>Moment 1<input id="field-m3-1" type="number" min="0" max="100" value="60"></label>
    <label>Moment 2<input id="field-m3-2" type="number" min="0" max="100" value="60"></label>
    <label>Moment 3<input id="field-m3-3" type="number" min="0" max="100" value="60"></label>
    <label>Moment 4<input id="field-m3-4" type="number" min="0" max="100" value="60"></label>
    <label>Remembered utility, 0–100<input id="field-m3-remembered" type="number" min="0" max="100" value="65"></label>
  </div>
  <button class="md-button md-button--primary" onclick="FieldStudies.m3Analyze()">Build utility profile</button>
  <div id="field-m3-feedback" class="field-feedback"></div>
  <div id="field-m3-chart" class="field-plot"></div>
  <div id="field-m3-summary"></div>
  <button class="md-button" onclick="FieldStudies.exportM3()">Export Module 3 field record</button>
</div>

## Field Note

Write 300–400 words:

1. How did predicted utility compare with average experienced utility?
2. Was remembered utility closer to the average or the peak-end estimate?
3. What context may have changed the experience?
4. Why should one self-observation not be generalized to other people or settings?
