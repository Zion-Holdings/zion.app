#!/usr/bin/env python3
"""Audit generated blog/service pages for content-quality problems.

Checks each app/**/page.tsx for: missing metadata, missing canonical, thin
body text, duplicate descriptions across pages, and placeholder leftovers.
Read-only: reports, never edits.
"""
import os
import re
import collections

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(REPO, "app")
SKIP_DIRS = {"node_modules", ".next", ".git"}

def body_text(src):
    """Rough visible-text extraction.

    Strips tags, but keeps the contents of JSX expressions so pages that render
    from a data array (`{items.map(...)}`) are not misreported as thin. Only
    drops short expressions, which are almost always variable interpolations.
    """
    m = re.search(r"return\s*\(([\s\S]*)\);?\s*}\s*$", src)
    chunk = m.group(1) if m else src
    # Keep string literals from data arrays: they are real rendered copy.
    literals = " ".join(re.findall(r"['\"]([^'\"]{12,})['\"]", chunk))
    chunk = re.sub(r"<[^>]+>", " ", chunk)
    chunk = re.sub(r"\{[^{}]{0,40}\}", " ", chunk)
    text = re.sub(r"\s+", " ", chunk + " " + literals).strip()
    return text

def main():
    pages = []
    for root, dirs, files in os.walk(APP):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        if "page.tsx" in files:
            pages.append(os.path.join(root, "page.tsx"))

    no_meta, no_canonical, thin, placeholders = [], [], [], []
    descriptions = collections.defaultdict(list)
    titles = collections.defaultdict(list)

    for p in sorted(pages):
        rel = os.path.relpath(p, REPO)
        src = open(p, encoding="utf-8", errors="replace").read()

        if "export const metadata" not in src and "generateMetadata" not in src:
            no_meta.append(rel)
        if "canonical" not in src:
            no_canonical.append(rel)

        d = re.search(r"description:\s*['\"]([^'\"]{5,})['\"]", src)
        if d:
            descriptions[d.group(1).strip()].append(rel)
        t = re.search(r"title:\s*['\"]([^'\"]{3,})['\"]", src)
        if t:
            titles[t.group(1).strip()].append(rel)

        text = body_text(src)
        if len(text) < 500:
            thin.append((rel, len(text)))

        for token in ("Lorem ipsum", "TODO", "FIXME", "PLACEHOLDER",
                      "lorem ipsum", "XXX_", "REPLACE_ME"):
            if token in src:
                placeholders.append((rel, token))
                break

    dup_desc = {k: v for k, v in descriptions.items() if len(v) > 1}
    dup_title = {k: v for k, v in titles.items() if len(v) > 1}

    print("pages scanned: %d" % len(pages))
    print("missing metadata export: %d" % len(no_meta))
    for r in no_meta[:10]:
        print("   %s" % r)
    print("missing canonical: %d" % len(no_canonical))
    for r in no_canonical[:10]:
        print("   %s" % r)
    print("thin pages (<500 chars of visible text): %d" % len(thin))
    for r, n in sorted(thin, key=lambda x: x[1])[:10]:
        print("   %-70s %d chars" % (r, n))
    print("duplicate meta descriptions: %d groups" % len(dup_desc))
    for k, v in list(dup_desc.items())[:5]:
        print("   %d pages share: %.70s" % (len(v), k))
    print("duplicate titles: %d groups" % len(dup_title))
    for k, v in list(dup_title.items())[:5]:
        print("   %d pages share: %.70s" % (len(v), k))
    print("pages with placeholder text: %d" % len(placeholders))
    for r, tok in placeholders[:10]:
        print("   %-70s (%s)" % (r, tok))

if __name__ == "__main__":
    main()
