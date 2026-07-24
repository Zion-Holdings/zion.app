#!/usr/bin/env python3
"""Live send cycle — minimal autonomous outbound sender for Zion Tech Group."""
import json
import os
import random
import re
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('/Users/miami2/zion.app')
DISCOVERED = REPO / 'app' / 'data' / 'discovered_leads.json'
LEDGER = REPO / 'outreach_monitor' / 'processed' / 'live_send_ledger.jsonl'
RUN_REPORT = REPO / 'automation' / 'reports' / 'live-send-cycle-latest.json'
MAX_SENDS_PER_RUN = 10

NOISE_SUBJECT = ['summit','presencial','event','webinar','conference','meetup','ticket','ingresso','pass']
BAD_LOCAL = {'career','jobs','hr','support','info','contact','hello','marketing','sales','admin','webmaster','feedback','noreply','no-reply','donotreply','do-not-reply','unsubscribe','website'}
BAD_DOMAIN_HINTS = ('example.com','test.com','domain.com','eample.com','sample.com','fake.com','.png','.jpg','.jpeg','.gif','.svg','.zip','.exe')
DISPOSABLE_HINTS = ('tempmail','guerrillamail','mailinator','throwaway','fakeinbox','yopmail','10minutemail','dispostable','trashmail')
FREE_MAIL = {'gmail.com','yahoo.com','hotmail.com','outlook.com','aol.com','icloud.com','protonmail.com','zoho.com','yandex.com'}
BAD_TLD = {'gov','edu','mil','gov.br','edu.br','mil.br','ac.uk'}

USER_AGENTS = [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36',
]


def _now():
    return datetime.now(timezone.utc)


def _now_iso():
    return _now().isoformat()


def _append_jsonl(path, record):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open('a', encoding='utf-8') as f:
        f.write(json.dumps(record, ensure_ascii=False) + '\n')


def _load_sent_set():
    sent = set()
    if not LEDGER.exists():
        return sent
    try:
        for line in LEDGER.read_text(encoding='utf-8', errors='ignore').splitlines():
            if not line.strip():
                continue
            try:
                obj = json.loads(line)
            except Exception:
                continue
            to = str(obj.get('to') or '').strip().lower()
            if to:
                sent.add(to)
    except Exception:
        pass
    return sent


def _email_quality(email: str):
    if not email or '@' not in email:
        return False, 'missing'
    parts = email.split('@', 1)
    if len(parts) != 2:
        return False, 'bad_shape'
    local, domain = parts
    local = local.split('+')[0].lower()
    domain = domain.lower()
    if len(local) < 2:
        return False, 'too_short_local'
    if len(domain) < 4 or '.' not in domain:
        return False, 'too_short_domain'
    if any(h in domain for h in BAD_DOMAIN_HINTS):
        return False, 'bad_domain'
    if any(h in domain for h in DISPOSABLE_HINTS):
        return False, 'disposable'
    if local in BAD_LOCAL or 'unsubscribe' in local or 'do-not' in local:
        return False, 'bad_local'
    if domain in FREE_MAIL:
        return False, 'free_mail'
    if any(domain.endswith('.' + t) for t in BAD_TLD):
        return False, 'bad_tld'
    return True, 'ok'


def _send_gog(to, subject, body):
    safe_subject = subject.replace('"', "'")
    body_file = REPO / 'automation' / 'reports' / f"body-{datetime.now(timezone.utc).timestamp()}-{to.split('@')[0]}.txt"
    body_file.write_text(body, encoding='utf-8')
    cmd = 'gog gmail send --to "' + to + '" --subject "' + safe_subject + '" --body-file "' + str(body_file) + '" --account kleber@ziontechgroup.com --no-input'
    out = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    stdout = out.stdout or ''
    mid = None
    for line in stdout.splitlines():
        if line.startswith('message_id\t'):
            mid = line.split('\t', 1)[1].strip()
    try:
        body_file.unlink()
    except Exception:
        pass
    if out.returncode != 0:
        raise RuntimeError((out.stderr or stdout or 'gog failed with rc=' + str(out.returncode)).strip()[:300])
    if not mid:
        raise RuntimeError('no_message_id')
    return mid


def main():
    send_attempted = 0
    send_succeeded = 0
    send_failed = 0
    selected = []
    errors = []
    searched_leads = []

    if DISCOVERED.exists():
        try:
            searched_leads = json.loads(DISCOVERED.read_text(encoding='utf-8'))
            if not isinstance(searched_leads, list):
                searched_leads = []
        except Exception:
            searched_leads = []

    sent = _load_sent_set()
    for lead in searched_leads:
        if send_attempted >= MAX_SENDS_PER_RUN:
            break
        if not isinstance(lead, dict):
            continue
        to = (lead.get('email') or '').strip()
        if not to or '@' not in to or 'ziontechgroup.com' in to.lower():
            continue
        if to.lower() in sent:
            continue
        ok, reason = _email_quality(to)
        if not ok:
            errors.append({'to': to, 'error': reason})
            continue
        subject = lead.get('subject') or 'AI implementation proposal'
        company = str(lead.get('company') or 'your team')
        name = (lead.get('name') or 'Contact').split()[0]
        provided_body = (lead.get('body') or '').strip()
        body = provided_body if provided_body else (
            f"{name},\n"
            "Thank you for the opportunity to connect with Zion Tech Group.\n"
            "A few concrete overlaps:\n"
            "- AI roadmap and automation\n"
            "- Integration and managed services\n"
            "- Security/compliance posture\n\n"
            "Best next step:\n"
            "- 15-minute working session on measurable proof points\n"
            "- A lightweight automation/AI pilot with a 30-day KPI window\n\n"
            "If useful, we can run this quickly:\n"
            "https://calendly.com/kleber-ziontechgroup\n\n"
            "Proof & free tools:\n"
            "https://ziontechgroup.com\n\n"
            "Best,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "https://ziontechgroup.com"
        )
        send_attempted += 1
        try:
            mid = _send_gog(to, subject, body)
            if mid:
                send_succeeded += 1
                _append_jsonl(LEDGER, {'ts': _now_iso(), 'to': to, 'subject': subject, 'message_id': mid, 'status': 'sent'})
                selected.append({'to': to, 'message_id': mid, 'subject': subject})
            else:
                raise RuntimeError('no_message_id')
        except Exception as e:
            send_failed += 1
            errors.append({'to': to, 'error': str(e)[:300]})
        sent.add(to.lower())
        time.sleep(1)

    report = {
        'ts': _now_iso(),
        'run_id': _now().strftime('%Y%m%d-%H%M%S'),
        'mode': 'live',
        'send_attempted': send_attempted,
        'send_succeeded': send_succeeded,
        'send_failed': send_failed,
        'selected': selected,
        'errors': errors,
    }
    RUN_REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(report, ensure_ascii=False))


if __name__ == '__main__':
    main()
