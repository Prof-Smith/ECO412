# ECO 412 Module 1 complete replacement package

This is a complete replacement, not an incremental injector.

Copy the package's `docs` folder into the repository. Replace:
- `docs/module-1/index.md`
- `docs/module-1/lab.md`
- `docs/module-1/case-study.md`

Add:
- `docs/assets/css/module1-complete-lab.css`
- `docs/assets/js/module1-complete-lab.js`

Add these as the final entries in `mkdocs.yml`:

```yaml
extra_css:
  - assets/css/module1-complete-lab.css

extra_javascript:
  - assets/js/module1-complete-lab.js
```

Use this Module 1 navigation:

```yaml
- Module 1:
    - Overview: module-1/index.md
    - Complete Human or Econ? Laboratory: module-1/lab.md
    - SUBMIT - Model Diagnostic Case Study: module-1/case-study.md
    - Rubric: module-1/rubric.md
```

Remove these student-facing Module 1 navigation entries if present:
- Field Study - Choice Architecture Walk
- Adaptive Species Planning Guide
- Assessment Path
- Separate lab-record submission
- Separate field-note submission

Canvas should show one graded submission for Module 1:
`SUBMIT • Module 1 Model Diagnostic Case Study`

Before deployment, remove or comment out older Module 1-only scripts that injected field-study, deliverables, or Adaptive Species fragments. Recommended removals from `extra_javascript` if present:
- module1-deliverables.js
- module1-field-study.js
- module1-route-fix.js
- module1-field-clarity.js
- module1-overview-clarity.js
- module1-one-assignment.js
- module1-integrated-adaptive-lens.js
- module1-lab-choice-walk.js

Also remove their corresponding Module 1-only CSS files to prevent conflicting styles.

Do not upload INSTALL.md.
