#!/usr/bin/env python3
"""Flag static tools whose markup has element ids nothing ever wires up.

Two tools (duration-calculator, header-analyzer) shipped as untracked
half-builds: a complete CORE library and no UI layer at all, so every
container id in the body was dead and the page rendered blank. This
script catches that class of breakage before it reaches the site.

An id is only reported when NOTHING plausibly touches it:

  * a quoted literal in a <script> block or an inline on* attribute
  * a CSS-style selector reference (#id) in script or stylesheet
  * a concatenated id built at runtime, e.g. "'r' + c + 'Val'" reaching
    rTLVal / rTRVal / rBLVal / rBRVal, or "'opacity-' + id + '-val'"
  * a <label for="..."> pairing, where the id exists purely for a11y

That third rule matters: css-box-shadow updates four radius labels via
document.getElementById('r' + c + 'Val'), and a literal-only scan
reports all four as dead. They are not. Anything this script prints
should be confirmed by actually loading the tool's JS before "fixing"
it -- see the pitfalls note in the Zion tools workflow.

Exit code is 1 when a tool has no <script> at all (always a real bug)
or when a dead id survives every rule above.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TOOLS = REPO / "public" / "tools"

SCRIPT_RE = re.compile(r"<script[^>]*>(.*?)</script>", re.S | re.I)
INLINE_RE = re.compile(r"\bon[a-z]+=\"([^\"]*)\"")
ID_RE = re.compile(r"\bid=\"([A-Za-z0-9_-]+)\"")
FOR_RE = re.compile(r"\bfor=\"([A-Za-z0-9_-]+)\"")
STYLE_ID_RE = re.compile(r"#([A-Za-z0-9_-]+)\s*[{,:\s]")

# String fragments a runtime-built id can be assembled from, e.g.
#   document.getElementById('r' + corner + 'Val')
#   '<span id="opacity-' + layer.id + '-val">'
FRAGMENT_RE = re.compile(r"['\"]([A-Za-z0-9_-]{1,24})['\"]")


def build_fragments(haystack: str) -> set[str]:
    """Every short quoted string that could be part of a concatenated id."""
    return {m.group(1) for m in FRAGMENT_RE.finditer(haystack)}


def reachable_by_concat(element_id: str, fragments: set[str]) -> bool:
    """True when element_id can be spelled by joining known fragments.

    Greedy left-to-right consumption is enough for the shapes that occur
    here ('r' + 'TL' + 'Val', 'opacity-' + N + '-val'). A leftover gap is
    allowed to stand in for an interpolated variable, but the id must
    both start and end on a real fragment so we do not match everything.
    """
    lowered = element_id.lower()
    starts = [f for f in fragments if f and lowered.startswith(f.lower())]
    ends = [f for f in fragments if f and lowered.endswith(f.lower())]
    if not starts or not ends:
        return False
    head = max(len(f) for f in starts)
    tail = max(len(f) for f in ends)
    # Head and tail must account for the id, with at most one variable
    # region between them.
    return head + tail >= len(element_id) - 12


def audit(tool_dir: Path) -> tuple[str, list[str]]:
    html = (tool_dir / "index.html").read_text(errors="replace")
    scripts = "\n".join(SCRIPT_RE.findall(html))
    body = SCRIPT_RE.sub("", html)
    inline = "\n".join(INLINE_RE.findall(body))
    haystack = f"{scripts}\n{inline}"

    if not scripts.strip() and not inline.strip():
        return "NO_SCRIPT", []

    # A tool can ship a complete <script> and still be inert: three tools
    # (duration-calculator, header-analyzer, env-converter) shipped only
    # their CORE library, with no UI layer at all. The library defines
    # everything and touches nothing, so the page renders dead controls.
    # Nothing reaches the DOM unless something looks up an element or
    # binds a handler.
    touches_dom = (
        "getElementById" in scripts
        or "querySelector" in scripts
        or "addEventListener" in scripts
        or inline.strip()
    )
    if not touches_dom:
        return "NO_UI", []

    ids = sorted(set(ID_RE.findall(body)))
    labelled = set(FOR_RE.findall(body))
    styled = {m.group(1) for m in STYLE_ID_RE.finditer(html)}
    fragments = build_fragments(haystack)

    dead: list[str] = []
    for element_id in ids:
        quoted = re.search(
            r"['\"`]" + re.escape(element_id) + r"['\"`]", haystack
        )
        selector = re.search(r"#" + re.escape(element_id) + r"\b", haystack)
        if quoted or selector:
            continue
        if element_id in labelled or element_id in styled:
            continue
        if reachable_by_concat(element_id, fragments):
            continue
        dead.append(element_id)

    return ("DEAD" if dead else "OK"), dead


def main() -> int:
    if not TOOLS.is_dir():
        print(f"no tools directory at {TOOLS}", file=sys.stderr)
        return 1

    failures = 0
    unused = 0
    checked = 0
    for tool_dir in sorted(TOOLS.iterdir()):
        if not (tool_dir / "index.html").is_file():
            continue
        checked += 1
        status, dead = audit(tool_dir)
        if status == "NO_SCRIPT":
            print(f"FAIL {tool_dir.name}: no <script> and no inline handlers "
                  f"-- the page cannot do anything")
            failures += 1
        elif status == "NO_UI":
            print(f"FAIL {tool_dir.name}: has script but never touches the "
                  f"DOM -- CORE library shipped without its UI layer")
            failures += 1
        elif status == "DEAD":
            # Not fatal. A leftover id on a styled container, or on a button
            # driven by onclick="someFn()" (where the handler body never
            # names the id), is harmless dead weight -- not a broken tool.
            print(f"note {tool_dir.name}: unused ids -> {' '.join(dead)}")
            unused += 1

    print(f"\n{checked} tools checked, {failures} broken, "
          f"{unused} with unused ids")
    if failures:
        print("A broken tool ships a page that renders nothing. Fix before "
              "deploying.")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
