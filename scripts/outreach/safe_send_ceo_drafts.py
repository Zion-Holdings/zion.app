#!/usr/bin/env python3
import json, os, sys, time
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
sys.path.insert(0, str(REPO))
from commands.google_workspace import gmail_send_reply_fixed

DEDUP_DIR = REPO / 'outreach_monitor' / 'processed'
CANDIDATES = [
    DEDUP_DIR / 'next_ceo_reply_persistiq.json',
    DEDUP_DIR / 'next_ceo_reply_heygen.json',
    DEDUP_DIR / 'next_ceo_reply_hemmersbach.json',
    DEDUP_DIR / 'next_ceo_reply_solyssey.json',
]
HOT_LEDGER = DEDUP_DIR / 'hot_followup_reply_ledger.jsonl'
BOUNCE_HISTORY = DEDUP_DIR / 'bounce_history.jsonl'
FORBIDDEN_DOMAIN_SUBSTRINGS = (
    'github.com','hcl.com','zendesk.com','calendly.com','datadog','mercadobitcoin',
    'suzano.com.br','airbnb.com','booking.com','vrbo.com','expedia.com','servi.','manag.',
    'start.','legalys.com.pa','newfold.com'
)
FORBIDDEN_ADDR_PREFIXES = (
    'no-reply','noreply','mailer-daemon','postmaster','notifications@github.com',
    'support@','press@','info@','sales@','team@','hello@','hi@','marketing@',
    'commercial@','account manager'
)
def _load_json(path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default

def _load_ledger_entries():
    entries = []
    for p in (HOT_LEDGER, BOUNCE_HISTORY):
        if not p.exists():
            continue
        try:
            for line in p.read_text(encoding='utf-8', errors='ignore').splitlines():
                line=line.strip()
                if not line:
                    continue
                try:
                    entries.append(json.loads(line))
                except Exception:
                    continue
        except Exception:
            pass
    return entries

def _forbidden(contact, subject='', snippet=''):
    c=(contact or '').lower()
    s=(subject or '').lower()
    sn=(snippet or '').lower()
    if not c or '@' not in c:
        return True
    if c.endswith('@ziontechgroup.com'):
        return True
    for bad in FORBIDDEN_DOMAIN_SUBSTRINGS:
        if bad in c:
            return True
    for bad in FORBIDDEN_ADDR_PREFIXES:
        if c.startswith(bad) or c.split('@')[0].startswith(bad):
            return True
    if any(s.startswith(p) for p in ('undeliverable','bounce','your ','new acquisition')):
        return True
    if 'bounce' in s or 'undeliverable' in s:
        return True
    return False

def _recent_send(contact, within_seconds=72*3600):
    entries = _load_ledger_entries()
    now = int(time.time())
    return any((now - int(e.get('ts') or 0)) < within_seconds and (e.get('to') or '').lower() == contact.lower() for e in entries[-200:])

def _to(data):
    return (data.get('to') or data.get('To') or '').strip()

def _subject(data):
    return (data.get('subject') or data.get('Subject') or '').strip()

def _body(data):
    return data.get('draft') or data.get('body') or ''

def _ref(data):
    return data.get('message_id') or data.get('msg_id') or data.get('thread_id') or ''

def main():
    send_allowed = os.environ.get('ZTG_SEND_ALLOWED') == '1'
    processed = 0; sent = []; skipped = []; failed = []; pending = []
    for path in CANDIDATES:
        if not path.exists():
            skipped.append((path.name, 'missing'))
            continue
        data = _load_json(path, {})
        to=_to(data); subject=_subject(data); body=_body(data); ref=_ref(data)
        processed += 1
        if not to or '@' not in to:
            skipped.append((path.name, 'missing_email')); continue
        if _forbidden(to, subject):
            skipped.append((path.name, 'forbidden')); continue
        if _recent_send(to):
            skipped.append((path.name, 'recent_outbound_72h')); continue
        if not send_allowed:
            pending.append({'file': path.name, 'to': to, 'subject': subject})
            skipped.append((path.name, 'send_policy_disabled')); continue
        try:
            res = gmail_send_reply_fixed(thread_id_or_msg_id=ref, original_subject=subject, body=body, original_sender=to)
            message_id = res.get('message_id') or res.get('id') or ''
            success = bool(res.get('success')) or bool(message_id)
            if success:
                sent.append({'file': path.name, 'to': to, 'message_id': message_id})
                try:
                    with HOT_LEDGER.open('a', encoding='utf-8') as f:
                        f.write(json.dumps({'source': path.name,'to': to,'subject': subject,'thread_id': data.get('thread_id'),'message_id': message_id,'avoid_duplicate': True,'dedup_key': data.get('dedup_key') or path.name,'ts': int(time.time()),'status': 'sent','reason': 'safe_sender_ceo_reply'}, ensure_ascii=False)+'\n')
                except Exception:
                    pass
            else:
                failed.append({'file': path.name, 'res': res})
        except Exception as e:
            failed.append({'file': path.name, 'error': repr(e)})
    out = {
        'processed': processed,
        'send_allowed': send_allowed,
        'sent': len(sent),
        'skipped': len(skipped),
        'failed': len(failed),
        'pending': len(pending),
        'sent_details': sent,
        'skipped_details': skipped,
        'pending_details': pending,
        'failed_details': failed,
    }
    print(json.dumps(out, ensure_ascii=False))

if __name__ == '__main__':
    main()
