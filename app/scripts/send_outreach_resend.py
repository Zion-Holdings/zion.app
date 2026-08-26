#!/usr/bin/env python3
"""
Resend-based sender for latest_outreach.json.
Dedupes against app/data/outreach/sent_log.json.
Writes send_report to app/data/outreach/send_report_<date>.json.
"""

import json
import os
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

BASE = Path('/Users/klebergarciaalcatrao')
APP_DATA = BASE / 'app' / 'data'
OUT_DIR = APP_DATA / 'outreach'
OUT_DIR.mkdir(parents=True, exist_ok=True)

LATEST_PATH = OUT_DIR / 'latest_outreach.json'
SENT_PATH = OUT_DIR / 'sent_log.json'
REPORT_PATH = OUT_DIR / f"send_report_{datetime.now(timezone.utc).strftime('%Y-%m-%d')}.json"

SENDER_NAME = os.getenv('SENDER_NAME') or 'Zion Tech Group'
SENDER_EMAIL = os.getenv('SENDER_EMAIL') or 'support@ziontechgroup.com'
RESEND_API_KEY = os.getenv('RESEND_API_KEY') or (json.loads((BASE/'.env').read_text()) if (BASE/'.env').exists() else {}).get('RESEND_API_KEY','')
RESEND_API = 'https://api.resend.com/emails'

if not RESEND_API_KEY:
    raise SystemExit('Missing RESEND_API_KEY')

HEADERS = {
    'Authorization': f'Bearer {RESEND_API_KEY}',
    'Content-Type': 'application/json',
    'User-Agent': 'zion-outreach/1.0'
}

def load_json(path, default):
    try:
        if path.exists():
            return json.loads(path.read_text())
    except Exception:
        pass
    return default

def save_json(path, value):
    path.write_text(json.dumps(value, indent=2, ensure_ascii=False), encoding='utf-8')

def body_to_html(text: str) -> str:
    lines = text.splitlines()
    out = []
    for line in lines:
        if line.strip() == '':
            out.append('<br/>')
        else:
            out.append(f'<p style="margin:0 0 8px 0; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:1.5">{line}</p>')
    return '<html><body style="background:#fff; color:#111">' + ''.join(out) + '</body></html>'

def resend_send(to_email: str, subject: str, text: str):
    html = body_to_html(text)
    payload = json.dumps({
        'from': f'{SENDER_NAME} <{SENDER_EMAIL}>',
        'to': [to_email],
        'subject': subject,
        'html': html,
        'text': text,
    }).encode('utf-8')
    req = urllib.request.Request(RESEND_API, data=payload, headers=HEADERS, method='POST')
    with urllib.request.urlopen(req, timeout=30) as resp:
        body = json.loads(resp.read().decode('utf-8', errors='ignore'))
    return resp.status, body

def main():
    latest = load_json(LATEST_PATH, [])
    sent = load_json(SENT_PATH, {})

    sent_emails = {str(k).lower() for k in sent}
    unsent = []
    for r in latest:
        if isinstance(r, dict) and r.get('email'):
            if r.get('email','').lower() not in sent_emails:
                if r.get('provider_status') != 'sent':
                    unsent.append(r)

    if not unsent:
        report = {
            'ts': datetime.now(timezone.utc).isoformat(),
            'sent_count': 0,
            'skipped': len(latest),
            'removed_from_queue': 0,
            'errors': [],
            'remaining_next': latest[0].get('email') if latest else None,
            'sent_total_ledger': len(sent),
            'latest_total': len(latest),
            'status': 'dry_run'
        }
        save_json(REPORT_PATH, report)
        print(json.dumps(report, ensure_ascii=False))
        return
    sent_now = []
    errors = []
    for r in unsent:
        email = r['email']
        subject = r.get('subject', 'Partnership opportunity from Zion Tech Group')
        body = r.get('body', '')
        try:
            status, resp = resend_send(email, subject, body)
            if status in (200, 201):
                sent_now.append(r)
                sent[email.lower()] = {
                    'company': r.get('company',''),
                    'subject': subject,
                    'sent_at': datetime.now(timezone.utc).isoformat(),
                    'lead_id': r.get('lead_id',''),
                    'source': r.get('source',''),
                }
                print('sent', email, 'status', status, 'id', resp.get('id'))
            else:
                errors.append({'email': email, 'status': status, 'resp': str(resp)})
                print('http_fail', email, status, resp)
        except Exception as exc:
            errors.append({'email': email, 'error': type(exc).__name__, 'detail': str(exc)})
            print('error', email, type(exc).__name__, exc)
        time.sleep(0.6)

    # Remove successfully sent items from latest, update provider_status
    send_ids = {x['lead_id'] for x in sent_now}
    latest_path = LATEST_PATH
    updated = []
    removed = 0
    for r in latest:
        if r.get('lead_id') in send_ids:
            removed += 1
            continue
        updated.append(r)
    latest_path.write_text(json.dumps(updated, indent=2, ensure_ascii=False), encoding='utf-8')

    save_json(SENT_PATH, sent)

    report = {
        'ts': datetime.now(timezone.utc).isoformat(),
        'sent_count': len(sent_now),
        'removed_from_queue': removed,
        'errors': errors,
        'remaining_next': updated[0].get('email') if updated else None,
        'sent_total_ledger': len(sent),
        'latest_total': len(updated),
    }
    save_json(REPORT_PATH, report)
    print(json.dumps(report, ensure_ascii=False))

if __name__ == '__main__':
    main()
