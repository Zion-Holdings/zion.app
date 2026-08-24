#!/usr/bin/env python3
p="app/docs/hermes-agent-mcp-integration/page.tsx"
lines=open(p,encoding="utf-8").read().split("\n")
block=lines[128:144]  # lines 129-144 (0-indexed 128..143)
open("_blocktest.tsx","w",encoding="utf-8").write("export function X(){\n  return <div>{" + "`".join(["".join(block[:1])]) + "test`}</div>;\n}\n")
# Actually write the real block verbatim
content="export function X(){return <div>" + "\n".join(block) + "`}</div>;}"
# Hmm block[0] is `{`# 1...` and block[-1] is '`}'. Let me just test the raw block.
open("_blocktest.tsx","w",encoding="utf-8").write("\n".join(block)+"\n")
print("block lines:")
for i,b in enumerate(block):
    print(f"  {129+i}|{repr(b[:60])}")
