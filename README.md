# Global Crisis Room: Incremental Metrics Edition

## What changed

Each team now sees six metrics at every stage: wealth, liquidity, risk, reputation, hedge coverage, and survival. Selecting a decision immediately applies its visible cost or benefit. Revealing the crisis then shows the shock-specific change. Team cards preserve a compact wealth history across rounds, and the cumulative leaderboard updates after every step.

## Deploy to GitHub Pages

1. Unzip the package.
2. Upload `index.html`, `style.css`, and `app.js` to the root of your GitHub repository.
3. In GitHub, open **Settings > Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Open the Pages address GitHub displays.

## Classroom workflow

1. Select the course lens.
2. Add one record per team.
3. Before a decision, discuss each team's opening metrics.
4. Select a decision. The team card immediately shows the strategic cost or benefit.
5. After all teams decide, reveal the shock.
6. Compare the shock-specific deltas and cumulative leaderboard.
7. Advance through four rounds and use the final course-specific debrief.

## Important limitation

This is still the facilitator-led edition. It uses browser local storage, so records persist on the same browser and device. Separate student phones do not synchronize with the instructor dashboard.

## Files

- `index.html`: simulation interface
- `style.css`: responsive visual design
- `app.js`: state, scoring, incremental metrics, history, and CSV export
- `INSTRUCTOR_GUIDE.md`: facilitation notes
