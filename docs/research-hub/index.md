# ECO 412 Class Research Hub

<div class="research-drop">
  <h2>Analyze de-identified class records</h2>
  <p>Select JSON exports from Modules 1–3. Processing occurs locally in this browser. Files are not uploaded.</p>
  <input id="research-files" type="file" accept="application/json,.json" multiple>
  <p><button class="md-button md-button--primary" onclick="ResearchHub.load()">Analyze class files</button> <button class="md-button" onclick="ResearchHub.clear()">Clear</button></p>
</div>

<div class="analysis-principles">
  <div class="analysis-principle"><strong>Separate constructs</strong>Knowledge measures and behavioral responses are analyzed separately.</div>
  <div class="analysis-principle"><strong>Show uncertainty</strong>Means include approximate 95% confidence intervals when sample size permits.</div>
  <div class="analysis-principle"><strong>Compare conditions</strong>Randomized groups are analyzed as class-level treatment comparisons.</div>
</div>

<div id="research-errors" class="m2-feedback" hidden></div>

## Dataset overview
<div id="research-cards" class="research-grid"></div><div id="research-module-chart" class="research-plot"></div>

## Module 1: model diagnostics
<div id="research-m1-chart" class="research-plot"></div><div id="research-m1-summary"></div>

## Module 2: research credibility
<div id="research-m2-chart" class="research-plot"></div><div id="research-m2-summary"></div>

## Module 3: utility journey
<div id="research-m3-chart" class="research-plot"></div><div id="research-m3-summary"></div>

## Randomized-condition analysis
<div id="research-condition-chart" class="research-plot"></div><div id="research-condition-summary"></div>

## Behavioral Research Portfolio, Part I
<div class="portfolio-strip"><div class="portfolio-step"><strong>Module 1</strong><br>Model Diagnostic Brief</div><div class="portfolio-step"><strong>Module 2</strong><br>Research Credibility Audit</div><div class="portfolio-step"><strong>Module 3</strong><br>Utility and Preference Construction Report</div></div>

## Export
<button class="md-button md-button--primary" onclick="ResearchHub.exportCSV()">Export de-identified class CSV</button>
