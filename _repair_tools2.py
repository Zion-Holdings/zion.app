#!/usr/bin/env python3
"""
Repair broken tools page: JsonLd blocks stranded outside return(), with
corrupted closes ('} }} />' and stray trailing '}').

Correct structure we produce:
  return (
    <>
      <div className="...">
        ...content...
      </div>
      {/* Injected JSON-LD Schemas */}
      <JsonLd data={{...}} />
      <JsonLd data={{...}} />
    </>
  );
"""
import re, glob

def repair(path):
    s = open(path, encoding="utf-8").read()
    orig = s
    lines = s.split("\n")

    # Find the </div> that closes the main content div (the one right before the
    # premature ');' and '{"comment"}'). Look for pattern:
    #     </div>\n  );\n\n      {/* Injected JSON-LD Schemas */}
    pat = r'(\s*</div>\n)\s*\);\n(\s*)\n(\s*)\{/\* Injected JSON-LD Schemas \*/\}'
    m = re.search(pat, s)
    if not m:
        # some files use different closing; just fix braces and bail
        return False
    div_close, ret_close, indent, comment_line = m.group(1), m.group(2), m.group(3), m.group(4)
    # Build replacement: </div> + blank + <>/comment>/JsonLd... 
    # We'll insert '<>' before the comment and '</>' before the final ');'
    before = s[:m.start()]
    after = s[m.end():]
    # 'after' starts right after the comment line; it contains the JsonLd blocks
    # ending with last '}} />' then a stray '}\n' (or '}\n}').
    # Fix the JsonLd closes in 'after': } }} /> -> }} />
    after = re.sub(r'\} ?\}\}>/', '}>/', after)   # } }} />  ->  }} />
    after = re.sub(r'\} ?\}\}/', '}/', after)      # } }}/</... -> }}/</...
    # Now 'after' should end with the last '}} />' (or '}}/></StandardPage>') then '}'.
    # Replace trailing lone '}\n' with '\n  );\n}' and wrap content.
    # Strip trailing whitespace/}
    after_stripped = after.rstrip()
    # remove a trailing lone } if present
    if after_stripped.endswith("}") and not after_stripped.endswith("}}) />"):
        after_stripped = after_stripped[:-1].rstrip()
    # assemble
    repaired = before + div_close + "\n" + indent + "<>\n" + comment_line + after_stripped + "\n" + indent + "</>\n" + indent + ");\n"
    # fix: the original file ended with '}\n' (function close). We replaced ');' so
    # the function close '}' remains — ensure exactly one.
    if not repaired.endswith("\n}\n") and not repaired.endswith("\n}"):
        repaired = repaired.rstrip() + "\n}\n"
    s = repaired

    if s != orig:
        open(path, "w", encoding="utf-8").write(s)
        return True
    return False

files = glob.glob("app/tools/**/page.tsx", recursive=True)
files = [f for f in files if "hermes-agent-fleet-manager" not in f]  # skip clean ones
repaired = sum(1 for f in files if repair(f))
print("files repaired:", repaired)
