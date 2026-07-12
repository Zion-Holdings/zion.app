#!/usr/bin/env python3
import os
import re
from collections import Counter

REPO = os.getcwd()

# Source scan roots: TSX/TS under app, MD under docs
SCAN_ROOTS = [
    os.path.join(REPO, "app"),
    os.path.join(REPO, "docs"),
]

candidates = set()

# Top-level whitelist
for w in [
    "/", "/about", "/services", "/contact", "/pricing", "/blog",
    "/tools", "/ai-lab", "/agents-monitoring", "/dashboard",
    "/new-ai-services", "/academy", "/5g-solutions", "/search",
    "/robots.txt", "/manifest.json", "/icon.svg",
    "/404",
]:
    candidates.add(w.rstrip("/") or "/")

# app/**/page.tsx => /path
app_root = os.path.join(REPO, "app")
if os.path.isdir(app_root):
    for root, dirs, files in os.walk(app_root):
        for f in files:
            if f.endswith(".tsx") or f.endswith(".ts"):
                rel = os.path.relpath(os.path.join(root, f), REPO)
                parts = rel.split(os.sep)[1:-1]  # drop 'app' and filename
                route = "/" + "/".join(parts) if parts else "/"
                candidates.add(route.rstrip("/") or "/")

# docs/**/index.html => /path
docs_root = os.path.join(REPO, "docs")
if os.path.isdir(docs_root):
    for root, dirs, files in os.walk(docs_root):
        for f in files:
            if f == "index.html":
                rel = os.path.relpath(os.path.join(root, f), REPO)
                parts = rel.split(os.sep)[1:-1]  # drop 'docs' and filename
                route = "/" + "/".join(parts) if parts else "/"
                candidates.add(route.rstrip("/") or "/")

# Repo-root static files
for f in os.listdir(REPO):
    if os.path.isfile(os.path.join(REPO, f)) and not f.startswith("."):
        candidates.add("/" + f)

# Load aliases/policy if present
policy_path = os.path.join(REPO, "app", "data", "internal_link_fix_policy.json")
aliases = {}
if os.path.exists(policy_path):
    try:
        import json
        with open(policy_path, "r", encoding="utf-8") as fh:
            policy = json.load(fh)
        for key in ("slug_migrations", "aliases", "redirects", "canonical_routes"):
            mapping = policy.get(key, {})
            if isinstance(mapping, dict):
                aliases.update(mapping)
    except Exception:
        pass

# Extract hrefs from source files only
href_re = re.compile(r'\bhref\s*=\s*["\']([^"\']+)["\']', re.IGNORECASE)
hrefs = []
for root in [
    os.path.join(REPO, "app"),
    os.path.join(REPO, "docs"),
]:
    if not os.path.isdir(root):
        continue
    for dirpath, dirs, files in os.walk(root):
        # Skip built/render artifacts as instructed
        skip_dirs = {"_next", "__tests__", "__pycache__", "build", "dist", "out"}
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        for f in files:
            if not (f.endswith(".tsx") or f.endswith(".ts") or f.endswith(".md")):
                continue
            path = os.path.join(dirpath, f)
            try:
                with open(path, "r", encoding="utf-8", errors="ignore") as fh:
                    content = fh.read()
            except Exception:
                continue
            for m in href_re.finditer(content):
                href = m.group(1).strip()
                if not href:
                    continue
                if href.startswith(("//", "mailto:", "tel:", "#", "?")):
                    continue
                if href.startswith("/"):
                    hrefs.append((os.path.relpath(path, REPO), href))

broken = []
seen = set()
for rel, href in hrefs:
    normalized = href.rstrip("/") or "/"
    if normalized in aliases:
        normalized = aliases[normalized].rstrip("/") or "/"
    key = (rel, href)
    if key in seen:
        continue
    seen.add(key)
    if normalized not in candidates:
        broken.append((rel, href, normalized))

broken_count = len(broken)
print(f"broken_count={broken_count}")
if broken_count > 0:
    print("PRIORITIZED FIX LIST:")
    file_counts = Counter(f for f, _, _ in broken)
    def sort_key(item):
        f, h, _ = item
        return (file_counts[f], f, h)
    for f, h, norm in sorted(broken, key=sort_key):
        print(f"- {f}: {h} -> normalized={norm}")
