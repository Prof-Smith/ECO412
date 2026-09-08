# Module 1 Lab with integrated Choice Architecture Walk

Upload:
- `docs/assets/css/module1-lab-choice-walk.css`
- `docs/assets/js/module1-lab-choice-walk.js`

Add as the final entries in `mkdocs.yml`:

```yaml
extra_css:
  - assets/css/module1-lab-choice-walk.css

extra_javascript:
  - assets/js/module1-lab-choice-walk.js
```

The script runs only on `/module-1/lab/`. It inserts the complete Choice Architecture Walk before the lab's Deliverables, Submission, Before Leaving, or Next section. If none is found, the walk is appended to the lab.

After installing:
- Remove the separate Module 1 Field Study item from the Module 1 navigation and Canvas sequence.
- Keep one graded Canvas item only: `SUBMIT • Module 1 Model Diagnostic Case Study`.
- The field record is exported from inside the lab and uploaded as supporting evidence with the case study.

The standalone `docs/field-studies/module-1.md` may remain as an instructor reference, but it should not appear in the student Module 1 navigation.

Do not upload INSTALL.md.
