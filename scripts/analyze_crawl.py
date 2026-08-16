#!/usr/bin/env python3
"""Analyze the deep crawl results to categorize broken links and find patterns."""
import json

with open("deep_crawl_results.json") as f:
    data = json.load(f)

print(f"Total checked: {data['total_checked']}")
print(f"OK: {data['ok_count']}")
print(f"404: {data['broken_404_count']}")
print(f"4xx: {data['broken_4xx_count']}")
print(f"5xx: {data['broken_5xx_count']}")

# Analyze 404s
broken_404 = data['broken_404']
print(f"\n--- 404 Analysis ---")
print(f"Total 404s: {len(broken_404)}")

# Categorize
categories = {
    "/services/": 0,
    "/services (no slash)": 0,
    "/tools/": 0,
    "/tools (no slash)": 0,
    "/blog/": 0,
    "/industries/": 0,
    "/about/": 0,
    "/contact/": 0,
    "/pricing/": 0,
    "/careers/": 0,
    "/partners/": 0,
    "/case-studies/": 0,
    "/ai/": 0,
    "/ai-lab/": 0,
    "/free-tools": 0,
    "/portal/": 0,
    "/products/": 0,
    "/consultation": 0,
    "/status": 0,
    "/sla": 0,
    "/agents-monitoring": 0,
    "/proposals": 0,
    "/service-comparison/": 0,
    "/industry-solutions/": 0,
    "/ai-services": 0,
    "/configurator": 0,
    "/5g-solutions": 0,
    "/proposal-generator": 0,
    "/how-it-works/": 0,
    "other": 0,
}

for url in broken_404:
    path = url.replace("https://ziontechgroup.com", "")
    matched = False
    for cat in categories:
        if cat == "other":
            continue
        prefix = cat.rstrip("/")
        if path.startswith(prefix) or path == prefix:
            categories[cat] += 1
            matched = True
            break
        # Also check for exact path match
        if path == cat:
            categories[cat] += 1
            matched = True
            break
    if not matched:
        categories["other"] += 1

for cat, count in sorted(categories.items(), key=lambda x: -x[1]):
    if count > 0:
        print(f"  {cat}: {count}")

# Show some examples of each major category
print(f"\n--- 404 Examples by Category ---")
seen_cats = set()
for url in broken_404:
    path = url.replace("https://ziontechgroup.com", "")
    cat = "other"
    for c in categories:
        if c == "other":
            continue
        prefix = c.rstrip("/")
        if path.startswith(prefix) or path == prefix or path == c:
            cat = c
            break
    if cat not in seen_cats and cat != "other":
        print(f"  [{cat}] {url}")
        seen_cats.add(cat)

# Show "other" examples
print(f"\n--- Other 404s (first 50) ---")
others = []
for url in broken_404:
    path = url.replace("https://ziontechgroup.com", "")
    matched = False
    for c in categories:
        if c == "other":
            continue
        prefix = c.rstrip("/")
        if path.startswith(prefix) or path == prefix or path == c:
            matched = True
            break
    if not matched:
        others.append(url)
for url in others[:50]:
    print(f"  {url}")

# Check if services pages exist in public dir
print(f"\n--- 4xx Analysis ---")
print(f"Total 4xx: {data['broken_4xx_count']}")
# Sample some 4xx
for item in data['broken_4xx'][:20]:
    print(f"  {item}")
