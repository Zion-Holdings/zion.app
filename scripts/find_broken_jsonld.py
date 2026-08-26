import re
from pathlib import Path

REPO = Path('.')

# Find files with broken const jsonLd pattern
pattern = re.compile(r"const jsonLd\d+ = '\@context'")

files = []
for path in REPO.glob('app/services/*/page.tsx'):
    try:
        c = path.read_text(encoding='utf-8', errors='ignore')
    except Exception:
        continue
    if pattern.search(c):
        files.append(str(path))
for path in REPO.glob('app/blog/*/page.tsx'):
    try:
        c = path.read_text(encoding='utf-8', errors='ignore')
    except Exception:
        continue
    if pattern.search(c):
        files.append(str(path))

print('FILES_WITH_BROKEN_JSONLD')
for f in files:
    print(f)
print('COUNT', len(files))
