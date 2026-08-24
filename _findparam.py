#!/usr/bin/env python3
import os, re
# Find blog pages with {`{ ... `}} containing {param} or {result}
root="app/blog"
hits=[]
for f in glob_glob(root + "/**/page.tsx", recursive=True):
    s=open(f,encoding="utf-8").read()
    if '{' in s and 'param}' in s and s.count('`}')>=1:
        # check for problematic patterns
        if re.search(r'\{`[^\n{]*\{param\}[^\n`]*`\}', s) or '{param}' in s:
            hits.append(f)
def glob_glob(pat, recursive=True):
    import glob
    return glob.glob(pat, recursive=recursive)
hits=[]
for f in glob_glob(root+"/**/page.tsx"):
    s=open(f,encoding="utf-8").read()
    if '{param}' in s and '`}' in s:
        hits.append(f)
print("files with {param} in template literal:", len(hits))
for h in hits[:5]: print(" ",h)
