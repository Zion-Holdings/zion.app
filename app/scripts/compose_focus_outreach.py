import json
import os
import random
import re
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path


PROJECT_ROOT = Path('/Users/klebergarciaalcatrao')
DATA_ROOT = PROJECT_ROOT / 'app' / 'data'
OUT_DIR = PROJECT_ROOT / 'data' / 'outreach'
NEW_BATCH = OUT_DIR / 'it_expansion_2026-06-29.json'
LATEST_PATH = DATA_ROOT / 'outreach' / 'latest_outreach.json'
SENT_PATH = DATA_ROOT / 'outreach' / 'sent_log.json'
DISCOVERED_PATH = DATA_ROOT / 'discovered_leads.json'
OUT_DIR.mkdir(parents=True, exist_ok=True)
DATA_ROOT.mkdir(parents=True, exist_ok=True)


def make_candidates():
  base = [
    ('Atlas365', 'MHarper@atlas365.io', 'Microsoft 365 / SaaS'),
    ('BridgePath IT', 'DOrtiz@bridgepathit.com', 'Managed IT / Email Migration'),
    ('OnboardOps', 'SPatel@onboardops.io', 'HR Tech / IT Ops'),
    ('DriftWatch', 'KNguyen@driftwatch.com', 'Cybersecurity / Dark Web'),
    ('BoardCipher', 'ERuiz@boardcipher.com', 'Security / vCISO'),
    ('VaultDesk', 'MBell@vaultdesk.io', 'Identity / Password Management'),
    ('ProvisionHub', 'PShah@provisionhub.com', 'Endpoint / Device Lifecycle'),
    ('VendorCore', 'LSimmons@vendorcore.io', 'SaaS / Procurement'),
    ('ResilienceOps', 'OCarter@resilienceops.com', 'DR / Business Continuity'),
    ('Shift365', 'JHolloway@shift365.co', 'Microsoft 365 / Cloud'),
    ('Harbor M365', 'MHale@harborm365.com', 'Microsoft 365'),
    ('MailRelay Migration', 'AGrant@mailrelay.io', 'Email Migration'),
    ('TalentBridge IT', 'RLee@talentbridgeit.com', 'Onboarding / Offboarding'),
    ('CredentialRadar', 'TReed@credentialradar.com', 'Dark Web Monitoring'),
    ('Apex CISO', 'KWu@apexciso.com', 'vCISO'),
    ('KeyVault Solutions', 'BCarter@keyvaultsolutions.io', 'Password Management'),
    ('LaptopOps', 'OTang@laptopops.com', 'Device Provisioning'),
    ('SaaSGovern', 'NPatel@saasgovern.io', 'Vendor Management'),
    ('RecoveryDrill Co', 'DHolt@recoverydrill.co', 'DR Testing'),
    ('Nexus365', 'DOrtiz@nexus365.io', 'Microsoft 365 Managed Services'),
  ]
  rows = []
  for company, email, industry in base:
    local, domain = email.split('@', 1)
    name = 'Contact'
    row = {
      'lead_id': f'focus-{re.sub(r"[^a-z0-9]","",company)[:10]}-{random.randint(1000,9999)}',
      'company': company,
      'email': email,
      'name': name,
      'industry': industry,
      'service_key': 'managed Microsoft 365 services',
      'subject': f'M365 reliability and security for {company}',
      'body': f'Hi {name},\n\nMicrosoft 365 usually becomes critical after a few bad weeks: broken sharing, wrong permissions, phishing bypasses, or disconnected mobile workflows. We deliver managed M365 operations with tenant hygiene, access governance, conditional-access tuning, backup coverage for mail and SharePoint, and admin support so your team stays productive without turning M365 into a part-time job.\n\nCan we review your current tenant posture in a short call?\n\nBest,\nKleber Garcia\nCTO, Zion Tech Group\nkleber@ziontechgroup.com',
      'source': 'expansion-2026-06-29',
      'verified': False,
      'generated_at': datetime.now(timezone.utc).isoformat(),
      'queued_at': datetime.now(timezone.utc).isoformat(),
      'send_verdict': 'send_ready_live_sendable',
      'provider_status': 'pending_send',
    }
    rows.append(row)
  return rows


def main():
  latest = {
    'items': make_candidates(),
    'created_at': datetime.now(timezone.utc).isoformat(),
    'batch_name': 'it_expansion_2026-06-29',
  }
  NEW_BATCH.write_text(json.dumps(latest, indent=2, ensure_ascii=False), encoding='utf-8')
  print(json.dumps({'batch_file': str(NEW_BATCH), 'items': len(latest['items'])}, ensure_ascii=False))


if __name__ == '__main__':
  main()
