#!/usr/bin/env python3
"""Survey existing service names in catalog and on disk to plan new concepts."""
import json, os

BASE = "/Users/klebergarciaalcatrao/zion-support.github.io"
SERVICES_DIR = os.path.join(BASE, "app", "services")
SERVICES_FILE = os.path.join(BASE, "app", "data", "servicesData.json")

with open(SERVICES_FILE) as f:
    data = json.load(f)
services = data if isinstance(data, list) else data.get("services", [])
print(f"Catalog services: {len(services)}")

# Get unique name/title strings
names = set()
for s in services:
    n = (s.get("name") or "").lower().strip()
    t = (s.get("title") or "").lower().strip()
    if n: names.add(n)
    if t: names.add(t)
print(f"Unique name/title strings: {len(names)}")

# Get disk service names (from page.tsx h1 content)
disk_names = set()
disk_dirs = sorted([d for d in os.listdir(SERVICES_DIR) if os.path.isdir(os.path.join(SERVICES_DIR, d))])
for d in disk_dirs:
    page = os.path.join(SERVICES_DIR, d, "page.tsx")
    if os.path.exists(page):
        with open(page) as f:
            content = f.read()
        # Extract h1 content
        import re
        m = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
        if m:
            title_text = m.group(1).strip().lower()
            # Remove HTML classes etc
            clean = re.sub(r'<[^>]+>', '', title_text)
            disk_names.add(clean.strip())
print(f"Disk service page titles: {len(disk_names)}")

# Check some keyword coverage
keywords_to_check = [
    "quantum", "blockchain", "iot", "edge", "augmented reality", "ar ", 
    "virtual reality", "vr ", "digital twin", "autonomous vehicle",
    "robotics", "nlp", "computer vision", "generative ai", "llm",
    "neural", "predictive", "anomaly", "optimizer", "orchestrat",
    "federated", "edge ai", "zero-shot", "autonomous", "automated",
]
for kw in keywords_to_check:
    count = sum(1 for n in names if kw in n)
    print(f"  keyword '{kw}': {count} catalog matches")

# Print some samples to understand the full range
print("\n--- Sample names (sorted by length, shortest first) ---")
for n in sorted(names, key=len)[:30]:
    print(f"  {n}")

print("\n--- Some random samples ---")
import random
random.seed(42)
for n in random.sample(sorted(names), min(30, len(names))):
    print(f"  {n}")
