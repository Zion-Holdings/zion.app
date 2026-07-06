#!/usr/bin/env python3
"""Dedupe and cleanup stale/system leads from lead-crm/all-leads.json."""
import json
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEADS_FILE = REPO / 'lead-crm' / 'all-leads.json'
REPORT_FILE = REPO / 'lead-crm' / 'dedupe_cleanup_report.json'

SYSTEM_DOMAINS = {
    'example.com','localhost','playstation.com','gov.br','sp.gov.br','rj.gov.br','es.gov.br','google.com','gmail.com','ziontechgroup.com','googlemail.com'
}
BAD_PREFIXES = (
    'no-reply@','mailer-daemon@','postmaster@','abuse@','alerts@','all@','mkt@','success@','enterprise@','legal@',
    'partnerships@','partners@','contact@','info@','support@','hello@','admin@','contato@','administrativo@',
    'inovacao@','administracao@','maiquel@','renanf@','alvaro@','mario.','will.','neil@','ccgberbet@','ops@','managed@','security@','sitekit@','email@'
)

def keep(lead: dict) -> bool:
    email = (lead.get('email') or '').lower()
    if not email or '@' not in email:
        return False
    dom = email.split('@', 1)[1]
    if any(email.startswith(p) for p in BAD_PREFIXES):
        return False
    if dom in SYSTEM_DOMAINS:
        return False
    if any(dom.endswith(suffix) for suffix in ('.gov.br', '.sp.gov.br', '.rj.gov.br', '.es.gov.br')):
        return False
    return True

def main():
    data = json.loads(LEADS_FILE.read_text() or '[]')
    if not isinstance(data, list):
        data = []
    before = len(data)
    seen = set()
    kept = []
    for lead in data:
        email = (lead.get('email') or '').lower()
        if email in seen:
            continue
        seen.add(email)
        if keep(lead):
            kept.append(lead)
    after = len(kept)
    LEADS_FILE.write_text(json.dumps(kept, indent=2, ensure_ascii=False))
    REPORT_FILE.write_text(json.dumps({
        'generatedAt': datetime.now(timezone.utc).isoformat(),
        'before': before,
        'after': after,
        'removed': before - after,
        'status': 'ok'
    }, indent=2))
    print(json.dumps({'before': before, 'after': after, 'removed': before - after}, ensure_ascii=False))

if __name__ == '__main__':
    main()
