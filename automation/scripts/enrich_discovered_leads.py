#!/usr/bin/env python3
"""Autonomous lead enricher: backfill discovered_leads with tailored subject/body from latest_outreach
when those fields are missing or generic. Runs offline, no external deps.
"""
import json
from pathlib import Path

REPO = Path('/Users/miami2/zion.app')
LATEST = REPO / 'app' / 'data' / 'outreach' / 'latest_outreach.json'
DISCOVERED = REPO / 'app' / 'data' / 'discovered_leads.json'
REPORT = REPO / 'automation' / 'reports' / 'lead-enrichment-latest.json'

def _load_json(path):
    if not path.exists():
        return []
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return []

def _is_generic_subject(subject: str) -> bool:
    s = (subject or '').strip().lower()
    return not s or s == 'ai implementation proposal' or s.startswith('ai automation for ') or 'm365 reliability and security' in s

def _is_empty_body(body: str) -> bool:
    b = (body or '').strip()
    return len(b) < 40

def main():
    now = __import__('datetime').datetime.now(__import__('datetime').timezone.utc)
    run_id = now.strftime('%Y%m%d-%H%M%S')
    latest = {str(x.get('email') or '').strip().lower(): x for x in _load_json(LATEST) if isinstance(x, dict) and x.get('email')}
    discovered = _load_json(DISCOVERED)
    if not isinstance(discovered, list):
        discovered = []

    updated = 0
    seen = 0
    for lead in discovered:
        if not isinstance(lead, dict):
            continue
        email = str(lead.get('email') or '').strip()
        key = email.lower()
        source = latest.get(key)
        if not source:
            continue
        seen += 1
        changed = False
        if _is_generic_subject(lead.get('subject') or ''):
            lead['subject'] = source.get('subject') or lead.get('subject') or 'AI implementation proposal'
            changed = True
        if _is_empty_body(lead.get('body') or ''):
            lead['body'] = source.get('body') or lead.get('body') or ''
            changed = True
        if source.get('service_key'):
            lead['service_key'] = source.get('service_key')
            changed = True
        if source.get('source') and not lead.get('source'):
            lead['source'] = source.get('source')
            changed = True
        if lead.get('source_status') == 'send_ready_live_sendable' and not lead.get('verified'):
            lead['verified'] = source.get('verified', lead.get('verified', False))
            changed = True
        if changed:
            updated += 1

    DISCOVERED.parent.mkdir(parents=True, exist_ok=True)
    DISCOVERED.write_text(json.dumps(discovered, ensure_ascii=False, indent=2), encoding='utf-8')
    report = {
        'ts': now.isoformat(),
        'run_id': run_id,
        'mode': 'lead_enrichment',
        'source': str(LATEST),
        'target': str(DISCOVERED),
        'seen': seen,
        'updated': updated,
        'discovered_count': len(discovered),
    }
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(report, ensure_ascii=False))

if __name__ == '__main__':
    main()
