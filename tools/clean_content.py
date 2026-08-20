from pathlib import Path
import re

ROOT = Path('docs')
INLINE = [
    re.compile(r'[^\s<>]*cite[^\s<>]*turn\d+search\d+[^\s<>]*', re.I),
    re.compile(r'\ue200cite\ue202[^\ue201]*\ue201'),
    re.compile(r'cite[^]*'),
]
IMAGE = [
    re.compile(r'\ue200image\ue202[^\ue201]*\ue201(?:\s*\([^\n]*\))?'),
    re.compile(r'image[^]*(?:\s*\([^\n]*\))?'),
]

changed = []
for path in ROOT.rglob('*.md'):
    original = path.read_text(encoding='utf-8', errors='replace')
    lines = []
    for line in original.splitlines():
        if re.search(r'turn\d+search\d+', line, re.I) and re.search(r'image_Page_|thumbnail|\bimage\b', line, re.I):
            continue
        for pattern in INLINE + IMAGE:
            line = pattern.sub('', line)
        line = line.replace('<File>', '').replace('</File>', '').rstrip()
        lines.append(line)
    compact = []
    blank = False
    for line in lines:
        if not line.strip():
            if blank:
                continue
            blank = True
        else:
            blank = False
        compact.append(line)
    cleaned = '\n'.join(compact).strip() + '\n'
    if cleaned != original:
        path.write_text(cleaned, encoding='utf-8')
        changed.append(str(path))

print(f'Cleaned {len(changed)} file(s).')
for path in changed:
    print(path)
