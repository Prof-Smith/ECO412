from pathlib import Path
import re
import sys

ROOT = Path('docs')
PATTERNS = {
    'Copilot citation marker': re.compile(r'(?:\ue200|)?cite(?:\ue202|)?.*?turn\d+search\d+', re.I),
    'Copilot image marker': re.compile(r'(?:\ue200|)?image(?:\ue202|)?.*?turn\d+search\d+', re.I),
    'Image thumbnail token': re.compile(r'(?:image_Page_|thumbnail).*?turn\d+search\d+|turn\d+search\d+.*?(?:image_Page_|thumbnail)', re.I),
    'Pseudo File tag': re.compile(r'</?File>', re.I),
}

violations = []
for path in ROOT.rglob('*'):
    if path.suffix.lower() not in {'.md', '.html'}:
        continue
    text = path.read_text(encoding='utf-8', errors='replace')
    for lineno, line in enumerate(text.splitlines(), 1):
        for label, pattern in PATTERNS.items():
            if pattern.search(line):
                violations.append((str(path), lineno, label, line.strip()[:180]))

if violations:
    print('Content audit failed. Remove these non-renderable source markers:')
    for path, line, label, excerpt in violations:
        print(f'{path}:{line}: {label}: {excerpt}')
    sys.exit(1)

print('Content audit passed: no raw citation, image, thumbnail, or File markers found.')
