#!/usr/bin/env python3
"""Zero-dependency reseed: copy sendable outreach leads from latest_outreach into discovered_leads
while preserving dedupe safety. No external deps beyond stdlib; runs within the app venv or system python3.
"""
import json
import os
from pathlib import Path

REPO = Path('/Users/miami2/zion.app')
LATEST = REPO / 'app' / 'data' / 'outreach' / 'latest_outreach.json'
DISCOVERED = REPO / 'app' / 'data' / 'discovered_leads.json'
LEDGERS = [
    REPO / 'lead-crm' / 'outreach_sent_history.jsonl',
    REPO / 'lead-crm' / 'ceo_outreach_ledger.jsonl',
    REPO / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl',
]
REPORT = REPO / 'automation' / 'reports' / 'reseed-from-outreach-latest.json'

def _load_json(path):
    if not path.exists():
        return []
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return []

def _load_sent_set():
    sent = set()
    for path in LEDGERS:
        if not path.exists():
            continue
        for line in path.read_text(encoding='utf-8', errors='ignore').splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                obj = json.loads(line)
            except Exception:
                continue
            to = str(obj.get('to') or obj.get('email') or '').strip().lower()
            if to:
                sent.add(to)
    return sent

_SPAM_LOCAL = {'career','jobs','hr','support','info','contact','hello','marketing','sales','admin','webmaster','feedback','noreply','no-reply','donotreply','do-not-reply','unsubscribe','website','mailer-daemon','postmaster','abuse','root','noc'}
_SPAM_DOMAIN_HINTS = ('example.com','test.com','domain.com','eample.com','sample.com','fake.com','.png','.jpg','.jpeg','.gif','.svg','.zip','.exe')
_DISPOSABLE_HINTS = ('tempmail','guerrillamail','mailinator','throwaway','fakeinbox','yopmail','10minutemail','dispostable','trashmail')
_PLACEHOLDER_LOCALS = {'you','test','demo','fake','sample','admin','contact','info','hello','support','null','none','example'}

def _clean(email: str):
    if not email or '@' not in email:
        return False, 'missing'
    local, domain = email.split('@', 1)
    local = local.split('+')[0].lower()
    domain = domain.lower()
    if len(local) < 2:
        return False, 'too_short_local'
    if len(domain) < 4 or '.' not in domain:
        return False, 'too_short_domain'
    if any(h in domain for h in _SPAM_DOMAIN_HINTS):
        return False, 'bad_domain'
    if any(h in domain for h in _DISPOSABLE_HINTS):
        return False, 'disposable'
    if local in _SPAM_LOCAL or 'unsubscribe' in local or 'do-not' in local or local in _PLACEHOLDER_LOCALS:
        return False, 'bad_local'
    if domain in {'soc.com.br','work.com','company.com','organisation.com','localhost','local'}:
        return False, 'placeholder_domain'
    return True, 'ok'

def main():
    now = __import__('datetime').datetime.now(__import__('datetime').timezone.utc)
    run_id = now.strftime('%Y%m%d-%H%M%S')
    latest = _load_json(LATEST)
    discovered = _load_json(DISCOVERED)
    if not isinstance(discovered, list):
        discovered = []
    existing = {str(x.get('email') or '').strip().lower(): x for x in discovered if isinstance(x, dict) and x.get('email')}
    sent = _load_sent_set()

    count_seen = len(latest)
    selected = []
    skipped_dup = 0
    skipped_bad = 0
    skipped_sent = 0
    kept = 0

    for lead in latest:
        if not isinstance(lead, dict):
            continue
        email = str(lead.get('email') or '').strip()
        if not email:
            skipped_bad += 1
            continue
        key = email.lower()
        ok, reason = _clean(email)
        if not ok:
            skipped_bad += 1
            continue
        if key in existing or key in sent:
            skipped_dup += 1
            continue
        out = {
            'lead_id': lead.get('lead_id') or key,
            'company': lead.get('company') or 'your team',
            'name': lead.get('name') or 'Contact',
            'email': email,
            'industry': lead.get('industry') or '',
            'service_key': lead.get('service_key') or '',
            'subject': lead.get('subject') or 'AI implementation proposal',
            'body': lead.get('body') or '',
            'source': lead.get('source') or 'latest_outreach',
            'source_status': lead.get('send_verdict') or lead.get('source_status') or 'send_ready',
            'verified': lead.get('verified', False),
            'generated_at': lead.get('generated_at') or now.isoformat(),
        }
        discovered.append(out)
        existing[key] = out
        selected.append(email)
        kept += 1

    DISCOVERED.parent.mkdir(parents=True, exist_ok=True)
    DISCOVERED.write_text(json.dumps(discovered, ensure_ascii=False, indent=2), encoding='utf-8')

    report = {
        'ts': now.isoformat(),
        'run_id': run_id,
        'mode': 'reseed_from_outreach',
        'source': str(LATEST),
        'target': str(DISCOVERED),
        'count_seen': count_seen,
        'selected': selected,
        'kept': kept,
        'skipped_dup': skipped_dup,
        'skipped_sent': skipped_sent,
        'skipped_bad': skipped_bad,
    }
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(report, ensure_ascii=False))

if __name__ == '__main__':
    main()
