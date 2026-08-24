#!/usr/bin/env python3
"""
Fix service-page JsonLd correctly:
- Opening: data={{ '@context' (already fixed by prior step - 2 opens)
- Closing needs: }} }}  i.e. 4 close braces (object-close, array handled, FAQ object-close, JSX-expr-close, object-close)
The pattern at end of each JsonLd block:
  ...}} />   with current balance +1 (one missing close)

We add ONE closing brace: change the ending }} />  ->  }}} />
Specifically the FIRST JsonLd (Service schema) ends: 'USD'}]}}/
and the SECOND (FAQPage) ends: '...']}}/

Original HEAD endings were }} /> (2 braces, balance 0 because opening was data={ not data={{).
We changed opening to data={{ (+1 brace), so we need +1 brace at each close: }} -> }}}.
"""
import glob, re

files = glob.glob("app/services/**/page.tsx", recursive=True)
fixed = 0
for f in files:
    s = open(f, encoding="utf-8").read()
    orig = s
    if "JsonLd data={{ '@context'" not in s and "JsonLd data={{'@context'" not in s:
        continue  # not our target (already different)
    # Replace the FIRST closing }} /> (after Service schema) -> }}} />
    # and SECOND }} /> (after FAQ schema) -> }}} />
    # But only on lines that are JsonLd closers. The closers appear as: ...}} />
    # Count occurrences of "}} />" — there should be 2 per file (2 JsonLd blocks)
    # Add one } to each.
    s2 = s.replace("}} />", "}}} />", 2)  # only first 2 occurrences
    if s2 != s:
        open(f, "w", encoding="utf-8").write(s2)
        fixed += 1
print("service pages fixed:", fixed)

# verify one
p = "app/services/5g-network-slicing-optimizer-49d23f95/page.tsx"
lines = open(p, encoding="utf-8").read().split("\n")
print("line 16 closing:", repr(lines[15][-25:]))
