# ECO 412 Class Research Hub

<div class="research-drop">
  <h2>Combine de-identified student exports</h2>
  <p>Select JSON files exported by Modules 1–3. Processing occurs in this browser. Files are not uploaded to a server.</p>
  <input id="research-files" type="file" accept="application/json,.json" multiple>
  <p><button class="md-button md-button--primary" onclick="ResearchHub.load()">Analyze class files</button> <button class="md-button" onclick="ResearchHub.clear()">Clear</button></p>
</div>

<div id="research-errors" class="m2-feedback" hidden></div>

## Dataset overview

<div id="research-cards" class="research-grid"></div>
<div id="research-module-chart" class="research-plot"></div>

## Module 1: model diagnostics

<div id="research-m1-chart" class="research-plot"></div>
<div id="research-m1-summary"></div>

## Module 2: research credibility

<div id="research-m2-chart" class="research-plot"></div>
<div id="research-m2-summary"></div>

## Module 3: utility and value construction

<div id="research-m3-chart" class="research-plot"></div>
<div id="research-m3-summary"></div>

## Export

<button class="md-button md-button--primary" onclick="ResearchHub.exportCSV()">Export de-identified class CSV</button>
