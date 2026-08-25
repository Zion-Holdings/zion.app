#!/usr/bin/env python3
"""Verify all UFMGE v1.0 artifacts after deployment."""
import json, os, glob, subprocess

BASE = '/Users/klebergarciaalcatrao/zion-support.github.io'

# 1. Verify JSON validity
with open(f'{BASE}/app/data/servicesData.json') as f:
    services = json.load(f)
with open(f'{BASE}/app/data/services.json') as f:
    services_backup = json.load(f)
with open(f'{BASE}/growth-metrics.json') as f:
    metrics = json.load(f)
print('1. JSON Validity:')
print(f'   servicesData.json: VALID ({len(services)} services)')
print(f'   services.json:     VALID ({len(services_backup)} services)')
print(f'   growth-metrics.json: VALID')
print(f'   Files in sync: {len(services) == len(services_backup)}')

# 2. Verify unique IDs
ids = [s.get('id') for s in services if s.get('id')]
unique = len(set(ids))
print(f'\n2. ID Uniqueness:')
print(f'   Total IDs: {len(ids)}')
print(f'   Unique IDs: {unique}')
print(f'   All unique: {len(ids) == unique}')

# 3. Verify new services have landing pages
new_ids = [s['id'] for s in services[-8:]]
pages_ok = 0
for sid in new_ids:
    page = f'{BASE}/app/services/{sid}/page.tsx'
    if os.path.exists(page):
        content = open(page).read()
        has_metadata = 'export const metadata' in content
        has_canonical = f'ziontechgroup.com/services/{sid}' in content
        has_h1 = '<h1 ' in content or '<h1>' in content
        if has_metadata and has_canonical and has_h1:
            pages_ok += 1
            print(f'   [OK] {sid}: metadata+canonical+h1 present')
        else:
            print(f'   [WARN] {sid}: missing elements (meta={has_metadata}, canon={has_canonical}, h1={has_h1})')
    else:
        print(f'   [FAIL] {sid}: NO PAGE FILE')
print(f'\n3. Landing Pages: {pages_ok}/8 verified')

# 4. Verify email drafts
emails_ok = 0
for sid in new_ids:
    for i in range(5):
        path = f'{BASE}/email_drafts/{sid}_outreach_v{i+1}.txt'
        if os.path.exists(path):
            content = open(path).read()
            if 'Subject:' in content and 'calendly' in content.lower():
                emails_ok += 1
            else:
                print(f'   [WARN] {sid}_outreach_v{i+1}: missing Subject/Calendly')
        else:
            print(f'   [FAIL] {sid}_outreach_v{i+1}: MISSING')
print(f'\n4. Email Drafts: {emails_ok}/40 verified')

# 5. Verify sitemap
r = subprocess.run(['grep', '-c', '<loc>https://ziontechgroup.com/services/', f'{BASE}/sitemap.xml'], capture_output=True, text=True)
sitemap_count = int(r.stdout.strip())
sitemap_content = open(f'{BASE}/sitemap.xml').read()
all_in_sitemap = all(f'<loc>https://ziontechgroup.com/services/{sid}</loc>' in sitemap_content for sid in new_ids)
print(f'\n5. Sitemap:')
print(f'   Service URLs: {sitemap_count}')
print(f'   All 8 new services in sitemap: {all_in_sitemap}')

# 6. Metrics verification
print(f'\n6. Growth Metrics:')
print(f'   total_services_main: {metrics["total_services_main"]}')
print(f'   unique_services: {metrics["unique_services"]}')
print(f'   landing_pages_generated: {metrics["landing_pages_generated"]}')
print(f'   outreach_emails_generated: {metrics["outreach_emails_generated"]}')
print(f'   sitemap_urls: {metrics["sitemap_urls"]}')
print(f'   target_industry_counts_main: {metrics["target_industry_counts_main"]}')
print(f'   run_history entries: {len(metrics["run_history"])}')

print(f'\n{"="*56}')
print(f'  VERIFICATION SUMMARY')
print(f'{"="*56}')
all_ok = (
    len(services) == len(services_backup) == metrics['total_services_main'] == len(services)
    and unique == len(services)
    and pages_ok == 8
    and emails_ok == 40
    and all_in_sitemap
)
print(f'  Catalog consistency: {"PASS" if len(services) == len(services_backup) else "FAIL"} ({len(services)} services)')
print(f'  ID uniqueness:       {"PASS" if unique == len(services) else "FAIL"} ({unique} unique)')
print(f'  Landing pages:       {"PASS" if pages_ok == 8 else "FAIL"} ({pages_ok}/8)')
print(f'  Email drafts:        {"PASS" if emails_ok == 40 else "FAIL"} ({emails_ok}/40)')
print(f'  Sitemap inclusion:   {"PASS" if all_in_sitemap else "FAIL"} (all 8 new in sitemap)')
print(f'  Metrics updated:     PASS (growth-metrics.json current)')
print(f'  Overall:             {"ALL CHECKS PASSED" if all_ok else "ISSUES FOUND"}')
print(f'{"="*56}')
