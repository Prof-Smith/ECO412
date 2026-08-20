# ECO 412 Behavioral Economics Lab

A static, privacy-conscious MkDocs Material site for the Module 1 laboratory, **Human or Econ? Testing the Standard Economic Model**.

## Local preview

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open `http://127.0.0.1:8000`.

## GitHub Pages deployment

1. Replace `YOUR-GITHUB-USERNAME` and the repository slug in `mkdocs.yml`.
2. Push the full folder to the default branch of a GitHub repository.
3. In GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**.
4. The included workflow builds and deploys the site on each push to `main`.

## Data model

Student responses stay in the browser's `localStorage`. They are not collected centrally. Students may export a JSON record and a printable report. Clearing site data resets the lab.

## Important instructional note

The “Econ score” is a classroom diagnostic, not a validated psychological assessment. It indicates alignment with selected Standard Economic Model predictions in this activity only.
