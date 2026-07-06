#!/usr/bin/env python3
"""
Zion AI/IT Historical Email Miner - Termux-safe.
Uses gmail_search(all_folders=True) across broader AI/IT business queries.
Writes new leads to lead-crm/all-leads.json with status='discovered'.
"""
import sys, json, re, datetime
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_DIR = REPO / 'lead-crm'
sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / 'commands'))
from google_workspace import gmail_search

PROSPECTS_FILE = LEAD_DIR / 'all-leads.json'
MINED_FILE = LEAD_DIR / 'historical_miner_results.json'
MINER_LOG = LEAD_DIR / 'miner_log.json'

QUERIES = [
    'in:anywhere subject:parceria',
    'in:anywhere subject:proposta',
    'in:anywhere subject:orçamento',
    'in:anywhere subject:reunião',
    'in:anywhere subject:diagnóstico',
    'in:anywhere "Zion Tech"',
    'in:anywhere "AI services"',
    'in:anywhere "IT services"',
    'in:anywhere "contact center"',
    'in:anywhere "document"',
    'in:anywhere "security operations"',
    'in:anywhere "automation"',
    'in:anywhere "support"',
    'in:anywhere "outsource"',
    'in:anywhere "managed services"',
    'in:anywhere "meeting"',
    'in:anywhere "schedule"',
    'in:anywhere "quote"',
    'in:anywhere "pricing"',
    'in:anywhere "vendor"',
    'in:anywhere "procurement"',
    'in:anywhere "project"',
    'in:anywhere "proposal"',
    'in:anywhere "partnership"',
    'in:anywhere "meeting"',
]

EMAIL_RE = re.compile(r'[\w\.-]+@[\w\.-]+\.[A-Za-z]{2,}')
MAX_RESULTS_PER_QUERY = 25
MIN_CONFIDENCE = 1


def now_iso():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()


def load_json(path: Path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default


def save_json(path: Path, obj):
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding='utf-8')


def append_log(entry: dict):
    data = load_json(MINER_LOG, [])
    if not isinstance(data, list):
        data = [data]
    data.append(entry)
    if len(data) > 2000:
        data = data[-2000:]
    save_json(MINER_LOG, data)


def extract_contacts_metadata(msg_id: str):
    try:
        import urllib.request, urllib.parse, json as _json
        from commands.google_workspace import gog_headers
        url = f'https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg_id}?format=metadata'
        req = urllib.request.Request(url, headers=gog_headers())
        with urllib.request.urlopen(req, timeout=10) as r:
            raw = r.read()
        msg = _json.loads(raw)
        headers = msg.get('payload', {}).get('headers', [])
        hdr_map = {h['name'].lower(): h['value'] for h in headers}
        emails = set()
        for field in ('from', 'to', 'cc', 'bcc'):
            val = hdr_map.get(field, '')
            emails.update(m.group(0).lower() for m in EMAIL_RE.finditer(val) if m)
        return list(emails)
    except Exception:
        return []


def classify_prospect(email: str, source_query: str) -> dict:
    domain = email.split('@')[-1].lower()
    is_generic = domain in {'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'yahoo.com.br', 'icloud.com'}
    return {
        'to': email,
        'name': None,
        'subject': 'Parceria Zion Tech Group — operações e eficiência para TI',
        'body': None,
        'status': 'discovered',
        'source': 'ai_it_historical_email_miner',
        'source_query': source_query,
        'domain': domain,
        'is_generic_provider': is_generic,
        'confidence': 1 if not is_generic else 0,
        'discovered_at': now_iso(),
    }


def run_miner():
    existing = load_json(PROSPECTS_FILE, [])
    existing_emails = {
        (r.get('to') or r.get('email') or '').strip().lower()
        for r in existing
    }
    results = load_json(MINED_FILE, [])
    result_emails = {
        (r.get('to') or r.get('email') or '').strip().lower()
        for r in results
    }
    seen = existing_emails | result_emails

    new_leads = []
    mined_contacts = []
    queries_run = 0
    for q in QUERIES:
        queries_run += 1
        try:
            msgs = gmail_search(q, limit=MAX_RESULTS_PER_QUERY, all_folders=True)
        except Exception as e:
            append_log({'ts': now_iso(), 'event': 'search_error', 'query': q, 'error': str(e)})
            continue
        msg_ids = [m.get('id') for m in msgs if m.get('id')]
        for msg_id in msg_ids:
            contacts = extract_contacts_metadata(msg_id)
            for email in contacts:
                key = email.strip().lower()
                if not key or key in seen:
                    continue
                if any(key.startswith(p) for p in ['mailer-daemon', 'no-reply', 'noreply', 'notifications@github.com']):
                    continue
                seen.add(key)
                lead = classify_prospect(key, q)
                new_leads.append(lead)
                mined_contacts.append({'id': msg_id, 'email': key, 'query': q})

    if new_leads:
        existing.extend(new_leads)
        save_json(PROSPECTS_FILE, existing)
        results.extend(mined_contacts)
        save_json(MINED_FILE, results)

    append_log({
        'ts': now_iso(),
        'event': 'mine_tick',
        'queries_run': queries_run,
        'contacts_found': len(mined_contacts),
        'new_leads_added': len(new_leads),
    })
    return {
        'queries_run': queries_run,
        'contacts_found': len(mined_contacts),
        'new_leads_added': len(new_leads),
    }


if __name__ == '__main__':
    print(json.dumps(run_miner(), ensure_ascii=False))
