#!/usr/bin/env python3
"""
Phase 1: Fix the universal brace corruption across all broken tools pages.
1. `} }} />`  ->  `}} />`     (extra brace + stray pipe before close)
2. `} }} /></StandardPage>` -> `}} /></StandardPage>`
3. `} }}/>/>` patterns handled by regex.
4. Stray trailing `}` when file already ends with `);`  -> remove it.
Also handle the SP=False/DIV=True group: move JsonLd inside return by wrapping in fragment.
"""
import re, glob

def fix_braces(s):
    """Fix `} }} /> variants to `}} />`."""
    s = re.sub(r'\} ?\}\} />', '}} />', s)     # } }} /> or } }}/> -> }} />
    s = re.sub(r'\} ?\}\}/>', '}}/>', s)       # } }}/> -> }}/>
    return s

def fix_trailing_brace(s):
    """If file ends with `);` then a stray lone `}`, remove the stray.}"""
    lines = s.rstrip("\n").split("\n")
    # typical tail: ... }} />\n  );\n}  -> the final } is the function close (keep)
    # but SP=False group: ... }} />\n}  (no );) -> need to add );
    # Actually check: does the file end with ');\n}'? that's correct.
    # Stray case: ends with '}} />\n}' (no );)
    if lines[-1].strip() == "}" and len(lines) >= 2 and not lines[-2].strip().startswith(");"):
        # missing ); -> add it
        indent = "  "
        lines[-1] = "  );"
        lines.append("}")
        s = "\n".join(lines)
    return s

def fix_div_group(s):
    """For SP=False + DIV=True: JsonLd after ");". Move inside by wrapping in fragment."""
    # Pattern:  ...      </div>\n  );\n\n      {/* Injected JSON-LD Schemas */}\n<JsonLd .../>...}} />\n}
    # Replace:  ...      </div>\n\n      {/* Injected JSON-LD Schemas */}\n<JsonLd...}} />\n    </>\n  );\n}
    pat = r'(\s*</div>\n)  \);\n\n(\s+)\{/\* Injected JSON-LD Schemas \*/\}'
    m = re.search(pat, s)
    if not m:
        return s, False
    s = (s[:m.start()] + m.group(1) + "\n" + m.group(2) + "<>\n" + m.group(2) + "{/* Injected JSON-LD Schemas */}" +
         s[m.end():])
    # Now ensure the tail has </>\n  );\n}
    # Current tail after fix_braces+fix_trailing: ...}} />\n}  -> change to ...}} />\n    </>\n  );\n}
    s = re.sub(r'(\}\}>)\s*\n\}$', r'\1\n    </>\n  );\n}', s)   # careful
    return s, True

files = sorted(glob.glob("app/tools/**/page.tsx", recursive=True))
changed = 0
for f in files:
    s = open(f, encoding="utf-8").read()
    orig = s
    s = fix_braces(s)
    s = fix_trailing_brace(s)
    # Only apply div-group restructure if it has the premature ); after </div>
    if re.search(r'</div>\n  \);', s):
        s, ok = fix_div_group(s)
        if ok:
            # re-run brace fix on the tail
            s = fix_braces(s)
    if s != orig:
        open(f, "w", encoding="utf-8").write(s)
        changed += 1
print("files changed:", changed)
