#!/usr/bin/env python3
import os, sys, json, re
from pathlib import Path

SCRIPTS = Path('/Users/klebergarciaalcatrao/scripts')
sys.path.insert(0, str(SCRIPTS))
import outreach_composer

BASE = Path('/Users/klebergarciaalcatrao/app/data')
LEADS = BASE / 'discovered_leads.json'
leads = json.load(open(LEADS))
print('loaded', len(leads))

email_regex = re.compile(r'^[^\s<>"\']+@[^\s<>"\']+\.[^\s<>"\']+$')
ok, bad = [], []
for l in leads:
    e = (l.get('email') or '').strip()
    if e and email_regex.match(e):
        ok.append(l)
    else:
        bad.append((l.get('company'), e))
print('ok:', len(ok), 'bad:', len(bad))
for x in bad[:20]:
    print('BAD', x)

outreach, processed = outreach_composer.generate_outreach(leads, max_emails=15, status_filter='New')
print('generated:', len(outreach), 'processed:', len(processed))
if outreach:
    for item in outreach:
        print(item['company'], item['email'], item['verified'], item['subject'])
