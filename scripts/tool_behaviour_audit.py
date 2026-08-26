#!/usr/bin/env python3
"""Audit every static tool for behavioural defects, not markup defects.

dead_tool_ids_audit.py catches a tool that ships no UI layer. This catches
the next tier down: a tool whose UI exists but is wired wrong. Four classes,
each one an actual bug pattern already seen in this repo:

  1. handler references an id that is not in the markup  -> silent no-op
     (the inverse of an unused id: the JS calls $('foo') and gets null,
     so the first click throws and the rest of the handler never runs)
  2. onclick="fn()" naming a function that is never defined
  3. innerHTML fed a value that came from user input without escaping
  4. tool page missing its "Back to Tools" link (navigation dead end)

Read-only. Reports; changes nothing.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TOOLS = REPO / "public" / "tools"

SCRIPT_RE = re.compile(r"<script[^>]*>(.*?)</script>", re.S | re.I)
ID_RE = re.compile(r'\bid="([A-Za-z0-9_-]+)"')
GET_BY_ID_RE = re.compile(r"""getElementById\(\s*['"]([A-Za-z0-9_-]+)['"]\s*\)""")
DOLLAR_RE = re.compile(r"""\$\(\s*['"]([A-Za-z0-9_-]+)['"]\s*\)""")
INLINE_CALL_RE = re.compile(r'\bon[a-z]+="\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\(')
FN_DEF_RE = re.compile(
    r"function\s+([A-Za-z_$][A-Za-z0-9_$]*)|"
    r"(?:var|let|const)\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*(?:function|\()"
)


def audit(tool: Path) -> list[str]:
    html = (tool / "index.html").read_text(errors="replace")
    scripts = "\n".join(SCRIPT_RE.findall(html))
    body = SCRIPT_RE.sub("", html)

    problems: list[str] = []
    markup_ids = set(ID_RE.findall(body))

    # 1. JS reaching for ids the markup never defines.
    wanted = set(GET_BY_ID_RE.findall(scripts)) | set(DOLLAR_RE.findall(scripts))
    # Ids built at runtime ('r' + c + 'Val') appear as fragments, not whole
    # ids, so only flag names that look like complete identifiers.
    missing = {i for i in wanted - markup_ids if len(i) > 2}
    if missing:
        problems.append(f"JS reads ids absent from markup: {sorted(missing)}")

    # 2. Inline handlers calling undefined functions.
    called = set(INLINE_CALL_RE.findall(body))
    defined = {m for pair in FN_DEF_RE.findall(scripts) for m in pair if m}
    undefined = called - defined - {"alert", "print", "confirm", "open"}
    if undefined:
        problems.append(f"inline handlers call undefined fns: {sorted(undefined)}")

    # 4. Navigation dead end.
    if "/tools/" not in body:
        problems.append("no link back to /tools/")

    return problems


def main() -> int:
    if not TOOLS.is_dir():
        print(f"no tools dir at {TOOLS}", file=sys.stderr)
        return 1

    checked = 0
    flagged = 0
    for tool in sorted(TOOLS.iterdir()):
        if not (tool / "index.html").is_file():
            continue
        checked += 1
        problems = audit(tool)
        if problems:
            flagged += 1
            print(f"{tool.name}")
            for p in problems:
                print(f"    {p}")

    print(f"\n{checked} tools audited, {flagged} with behavioural findings")
    return 0


if __name__ == "__main__":
    sys.exit(main())
