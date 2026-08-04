import os, re
from urllib.parse import urlparse

ROOT = '.'
files = []
for root, dirs, filenames in os.walk(ROOT):
    if '/node_modules' in root: continue
    for f in filenames:
        if f.endswith(('.tsx','.ts','.js','.jsx')):
            files.append(os.path.join(root,f))
hrefs=set()
for path in files:
    try:
        text=open(path,'r',encoding='utf-8',errors='ignore').read()
    except Exception:
        continue
    for m in re.finditer(r'href=(["\'])([^"\']+)\1', text):
        hrefs.add(m.group(2))
print('UNIQUE_HREFS',len(hrefs))
