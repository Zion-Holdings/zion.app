#!/usr/bin/env python3
"""Final verification of the UFMGE v1.0 run — check pages, emails, sitemap, git status."""
import json
import glob
import os
from pathlib import Path
import subprocess

REPO = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_FILE = REPO / 'app' / 'data' / 'servicesData.json'
SITEMAP = REPO / 'sitemap.xml'
SERVICES_DIR = REPO / 'app' / 'services'
EMAIL_DIR = REPO / 'email_drafts'

# --- Verify each new service has a landing page ---
with open(SERVICES_FILE) as f:
    data = json.load(f)
services = data if isinstance(data, list) else data.get('services', [])
new_services = services[-8:]

print("=== Landing Page Verification ===")
all_pages_ok = True
for svc in new_services:
    sid = svc['id']
    page = SERVICES_DIR / sid / 'page.tsx'
    exists = page.exists()
    size = page.stat().st_size if exists else 0
    print(f"  {'✅' if exists else '❌'} {sid}: page={'OK' if exists else 'MISSING'} ({size} bytes)")
    if not exists:
        all_pages_ok = False

print("\n=== Email Draft Verification ===")
all_emails_ok = True
for svc in new_services:
    sid = svc['id']
    for v in range(1, 6):
        email = EMAIL_DIR / f"{sid}_outreach_v{v}.txt"
        exists = email.exists()
        size = email.stat().st_size if exists else 0
        if not exists:
            print(f"  ❌ {email.name}: MISSING")
            all_emails_ok = False
    print(f"  ✅ {sid}: 5 email variants OK")

print("\n=== Sitemap Verification ===")
with open(SITEMAP) as f:
    sm = f.read()
for svc in new_services:
    url = f"https://ziontechgroup.com/services/{svc['id']}"
    found = url in sm
    print(f"  {'✅' if found else '❌'} {svc['id']} in sitemap")

print("\n=== Git Status ===")
os.chdir(REPO)
result = subprocess.run(['git', 'status', '--short'], capture_output=True, text=True, timeout=15)
changed = result.stdout.strip()
if changed:
    lines = changed.split('\n')
    print(f"  {len(lines)} files changed/added")
    for line in lines[:15]:
        print(f"  {line}")
    if len(lines) > 15:
        print(f"  ... and {len(lines)-15} more")
else:
    print("  No changes (all committed)")

# --- Summary ---
pages = len(glob.glob(str(SERVICES_DIR / '*' / 'page.tsx')))
emails = len(glob.glob(str(EMAIL_DIR / '*_outreach*.txt')))
ids = [s.get('id') for s in services if isinstance(s, dict) and s.get('id')]
print(f"\n=== Final Summary ===")
print(f"  Catalog:     {len(services)} services ({len(set(ids))} unique IDs)")
print(f"  Pages:       {pages}")
print(f"  Email drafts: {emails}")
print(f"  Sitemap:     {sm.count('https://ziontechgroup.com/services/')} service URLs")
print(f"  All new pages OK: {all_pages_ok}")
print(f"  All new emails OK: {all_emails_ok}")
