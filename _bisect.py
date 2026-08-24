#!/usr/bin/env python3
p="app/docs/hermes-agent-mcp-integration/page.tsx"
data=open(p,encoding="utf-8").read()
# Make a test copy with line 133 simplified
import shutil
shutil.copy(p, "_docs_bak.tsx")
lines=data.split("\n")
# replace line 133 content with a simple no-brace line
lines[132] = '    return json.dumps("result")'
open("_docstest.tsx","w",encoding="utf-8").write("\n".join(lines))
print("test file written with simplified line 133")
print("orig 133:", repr(lines_orig[132][:50]) if (lines_orig:=data.split("\n")) else "")
