#!/usr/bin/env python3
"""Generate redirects for the 193 truly-missing URLs + add to _redirects."""
import json

with open("broken_link_analysis.json") as f:
    data = json.load(f)

redirects = []
# The truly_missing_list has 188 service URLs — add redirects for all of them
for url in data["truly_missing_list"]:
    path = url.replace("https://ziontechgroup.com", "").rstrip("/")
    redirects.append(f"{path}/ /services/ 301")
    redirects.append(f"{path} /services/ 301")

# Dedupe
seen = set()
unique = []
for r in redirects:
    if r not in seen:
        seen.add(r)
        unique.append(r)

print(f"Generated {len(unique)} redirect lines")

# Read existing _redirects
with open("_redirects") as f:
    existing = f.read()

# Append new redirects
new_section = "\n# Auto-generated redirects for stale service slugs (2026-08-17)\n" + "\n".join(unique) + "\n"
with open("_redirects", "w") as f:
    f.write(existing)
    if not existing.endswith("\n"):
        f.write("\n")
    f.write(new_section)

print(f"_redirects now has {len(open('_redirects').readlines())} lines")
