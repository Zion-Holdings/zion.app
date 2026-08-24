#!/usr/bin/env python3
"""
Repair broken tools page JsonLd structure.
Pattern (broken):
  67|      </div>
  68|  );
  69|
  70|      {/* Injected JSON-LD Schemas */}
  71|      <JsonLd data={{
  ...
  104|} }} />          <- should be }} />
  105|      <JsonLd data={{
  ...
  142|} }} />          <- should be }} />
  143|}                <- stray, should be }); }

Transform to (correct):
  67|      </div>
  68|
  69|      {/* Injected JSON-LD Schemas */}
  70|      <JsonLd data={{
  ...
  104|}} />
  ...
  142|}} />
  143|  );
  144|}
"""
import re, glob

def repair(path):
    s = open(path, encoding="utf-8").read()
    lines = s.split("\n")
    changed = False

    # 1) Fix `} }} />` and `} }}/>` -> `}} />` and `}} />` variants with stray pipe
    #    Patterns seen: "| }} />", "} }} />", "} }} />", "} }}/></StandardPage>"
    s2 = s
    # Fix the stray pipe before }} : | }} />  ->  }} />
    s2 = re.sub(r'\| ?\}\} />', '}} />', s2)
    # Fix } }} />  ->  }} />   (extra leading brace+space)
    s2 = re.sub(r'\} ?\}\} />', '}} />', s2)
    # Fix } }}/></StandardPage>  ->  }}</StandardPage>
    s2 = re.sub(r'\} ?\}\}/', '}/', s2)
    if s2 != s:
        changed = True
        s = s2

    # 2) Fix premature return close: "      </div>\n  );\n\n      {/* Injected"
    #    -> "      </div>\n\n      {/* Injected"   (drop the );)
    s3 = re.sub(r'(\s*</div>\n)\s*\);\n\n\s*\{/\* Injected', r'\1\n      {/* Injected', s)
    if s3 != s:
        changed = True
        s = s3

    # 3) Fix trailing stray "}\n" at EOF -> "  );\n}"
    #    After step 2, the file ends with the last JsonLd }} /> then a lone }
    #    Pattern: ...}} />\n}   ->  ...}} />\n  );\n}
    if s.endswith("\n}\n") or s.endswith("\n}") :
        # ensure there's a ); to close the return
        if not s.endswith(");\n}"):
            # find last }} /> and ensure proper close
            s = s.rstrip()
            s = re.sub(r'(\}\}>\s*</code>\s*)}\s*$', r'\1);\n}', s)  # not this
            # generic: last line is "}", insert "  );" before it
            if s.endswith("\n}"):
                s = s[:-2] + "\n  );\n}"
            elif s.endswith("}"):
                s = s[:-1] + "  );\n}"
            changed = True

    if changed:
        open(path, "w", encoding="utf-8").write(s)
    return changed

files = glob.glob("app/tools/**/page.tsx", recursive=True)
repaired = 0
for f in files:
    if repair(f):
        repaired += 1
print("files changed:", repaired, "of", len(files))
