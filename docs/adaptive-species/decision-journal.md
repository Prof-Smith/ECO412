# Adaptive Decision Journal

Use the journal before an important course decision or forecast. The record protects learning from hindsight by preserving what was known before the outcome.

<div id="adaptive-journal" class="adaptive-journal">
  <label>Decision<textarea id="aj-decision" rows="3" placeholder="What choice is being made, and what alternatives exist?"></textarea></label>
  <label>Current belief<textarea id="aj-belief" rows="3" placeholder="What do you currently believe is most likely?"></textarea></label>
  <label>Base rate or outside view<textarea id="aj-base" rows="3" placeholder="What usually happens in comparable situations?"></textarea></label>
  <label>Key assumption<textarea id="aj-assumption" rows="3" placeholder="Which assumption matters most?"></textarea></label>
  <label>Confidence, 0–100<input id="aj-confidence" type="number" min="0" max="100" value="60"></label>
  <label>Revision trigger<textarea id="aj-trigger" rows="3" placeholder="What evidence would cause you to update, pause, reverse, or double down?"></textarea></label>
  <label>Outcome review<textarea id="aj-outcome" rows="3" placeholder="Complete later: what happened, and what did the outcome teach?"></textarea></label>
  <div class="adaptive-actions"><button class="md-button md-button--primary" onclick="AdaptiveSpecies.saveJournal()">Save journal</button><button class="md-button" onclick="AdaptiveSpecies.exportJournal()">Export journal JSON</button><button class="md-button" onclick="AdaptiveSpecies.resetJournal()">Reset</button></div>
  <div id="aj-feedback" class="adaptive-feedback"></div>
</div>
