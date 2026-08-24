#!/usr/bin/env python3
# Test service page fix on ONE file: opening {{ + closing extra }
import shutil
p = "app/services/5g-network-slicing-optimizer-49d23f95/page.tsx"
shutil.copy(p, "/tmp/_svc_one_bak.tsx")
s = open(p, encoding="utf-8").read()
import re
# Fix 1: opening data={'@context' -> data={{ '@context'
s2 = s.replace("data={'@context'", "data={{ '@context'", 1)
# Fix 2: closing: add one } before " />" on JsonLd lines (line 16 ends '}} />')
# Generic: on lines containing JsonLd, the close is }} /> -> }}} />
# But only the FIRST two JsonLd lines. Use line-based:
lines = s2.split("\n")
for i, l in enumerate(lines):
    if "<JsonLd" in l:
        # replace final " /> with " } /> ... actually }} /> -> }}} />
        lines[i] = l.replace("}} />", "}}} />", 1)  # only first }} on line
        break  # only first JsonLd? NO - there are 2. 
s2 = "\n".join(lines)
open(p, "w", encoding="utf-8").write(s2)
print("applied partial; need both JsonLd lines")
