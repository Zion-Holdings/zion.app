#!/usr/bin/env python3
import json, sys
from pathlib import Path

ROOT = Path('/Users/klebergarciaalcatrao')
TEMPLATES_PATH = ROOT / 'data/outreach/service_templates_expanded.json'
TARGETS_PATH = ROOT / 'data/outreach/it_keywords_focus_batch-2026-06-27.json'
OUT_DIR = ROOT / 'app/data/outreach'
LATEST_PATH = OUT_DIR / 'latest_outreach.json'
SENT_PATH = OUT_DIR / 'sent_log.json'

with open(TEMPLATES_PATH) as f:
    templates = json.load(f)['services']

with open(TARGETS_PATH) as f:
    targets = json.load(f)

priority = {c['company']: c for c in targets['priority_companies']}
seeds = {c['company']: c for c in targets['extra_seed_companies']}
all_companies = {**priority, **seeds}

MAPPING = {
    'Atlas365': 'managed Microsoft 365 services',
    'Shiftt365': 'managed Microsoft 365 services',
    'Shift365': 'managed Microsoft 365 services',
    'Nexus365': 'managed Microsoft 365 services',
    'Harbor M365': 'managed Microsoft 365 services',
    'BridgePath IT': 'email migration services',
    'MailRelay Migration': 'email migration services',
    'OnboardOps': 'IT onboarding and offboarding',
    'TalentBridge IT': 'IT onboarding and offboarding',
    'DriftWatch': 'managed Dark Web monitoring',
    'CredentialRadar': 'managed Dark Web monitoring',
    'BoardCipher': 'virtual CISO as a service',
    'Apex CISO': 'virtual CISO as a service',
    'VaultDesk': 'password manager deployment',
    'KeyVault Solutions': 'password manager deployment',
    'ProvisionHub': 'workstation and laptop provisioning',
    'LaptopOps': 'workstation and laptop provisioning',
    'VendorCore': 'technology vendor management',
    'SaaSGovern': 'technology vendor management',
    'ResilienceOps': 'disaster recovery testing and drills',
    'RecoveryDrill Co': 'disaster recovery testing and drills',
}

rows = []
seen = set()
for company, info in all_companies.items():
    key = MAPPING.get(company)
    if not key:
        continue
    tpl = templates.get(key)
    if not tpl:
        continue
    domain = info.get('domain', '')
    if not domain:
        continue
    names = info.get('names', [])
    if not names:
        continue
    name = names[0]
    local = name.split()[0].lower()
    email = f"{local}@{domain}"
    subject = tpl['subject'].format(company=company)
    body = tpl['body'].format(company=company, name=name)
    lead_id = f"focus-{domain}-{abs(hash(company+key))}"
    composite = f"lead::{lead_id}::{email}"
    if composite in seen:
        continue
    seen.add(composite)
    rows.append({
        'company': company,
        'name': name,
        'email': email,
        'domain': domain,
        'industry': info.get('industry', ''),
        'service_key': key,
        'lead_id': lead_id,
        'subject': subject,
        'body': body,
        'source': 'it_keywords_focus_batch_2026-06-27',
    })

LATEST_PATH.parent.mkdir(parents=True, exist_ok=True)
LATEST_PATH.write_text(json.dumps(rows, indent=2))
with open(SENT_PATH) as f:
    sent = json.load(f)
unsent = [r for r in rows if r['email'] not in sent]
print(f'Total curated rows: {len(rows)} | Unsent: {len(unsent)} | Already seen/sent skipped: {len(rows)-len(unsent)}')
sys.exit(0 if unsent else 2)
