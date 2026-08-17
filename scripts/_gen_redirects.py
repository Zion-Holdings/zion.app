#!/usr/bin/env python3
"""Generate redirect lines for 188 stale service slugs → /services/"""
import json, os

with open("broken_link_analysis.json") as f:
    data = json.load(f)

lines = []
for url in data["truly_missing_list"]:
    path = url.replace("https://ziontechgroup.com", "").rstrip("/")
    # Add redirect to /services/ for stale service slugs
    if path.startswith("/services/"):
        lines.append(f"{path}/ /services/ 301")
        lines.append(f"{path} /services/ 301")
    elif path.startswith("/tools/"):
        lines.append(f"{path}/ /tools/ 301")
        lines.append(f"{path} /tools/ 301")
    elif path.startswith("/blog/"):
        lines.append(f"{path}/ /blog/ 301")
        lines.append(f"{path} /blog/ 301")
    elif path.startswith("/ai/"):
        lines.append(f"{path}/ /ai-lab/ 301")
        lines.append(f"{path} /ai-lab/ 301")
    elif path in ("/cookies", "/press", "/privacy", "/proposals", "/sla", "/status", "/terms"):
        # these exist locally, just redirect to the canonical page
        lines.append(f"{path}/ {path}/ 301")  # already canonical, skip
    else:
        # root-level pages like /managed-it-..., /cloud-cost-..., /cybersecurity-platform-...
        lines.append(f"{path}/ /services/ 301")
        lines.append(f"{path} /services/ 301")

# Dedupe and write
unique = []
seen = set()
for l in lines:
    if l not in seen:
        seen.add(l)
        unique.append(l)

print(f"Generated {len(unique)} redirect lines for stale URLs")
with open("_redirects.stale", "w") as f:
    f.write("\n".join(unique) + "\n")
print("Written to _redirects.stale")
for l in unique[:10]:
    print(f"  {l}")
