#!/usr/bin/env python3
"""
Safe live sender for drafted CEO outreach/hot-followup replies.

Behavior:
- Reads candidate draft files from outreach_monitor/processed/next_ceo_reply_*.json
- Hard-bypasses known bounce/noise domains and threads in hot_followup_reply_ledger.jsonl
- Skips when ZTG_SEND_ALLOWED != 1, reporting pending queue counts to cron output
- Uses commands.google_workspace.gmail_send_reply_fixed for real threading
- Appends outcomes to outreach_monitor/processed/hot_followup_reply_ledger.jsonl
"""
import json, os, re, sys, time
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(REPO))

from commands.google_workspace import gmail_send_reply_fixed, gog_headers  # noqa: E402

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


def _load_json(path: Path, default):
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


def _forbidden(contact: str, subject: str = '', snippet: str = '') -> bool:
    c = (contact or '').lower()
    s = (subject or '').lower()
    sn = (snippet or '').lower()
    if not c or '@' not in c:
        return True
    if any(c.endswith(x) for x in ('@ziontechgroup.com',)):
        return True
    for bad in FORBIDDEN_DOMAIN_SUBSTRINGS:
        if bad in c:
            return True
    for bad in FORBIDDEN_ADDR_PREFIXES:
        if c.startswith(bad) or c.split('@')[0].startswith(bad):
            return True
    if any(s.startswith(p) for p in ('[','re: ','undeliverable','bounce','your ','new acquisition')):
        return True
    return False


def _recent_send(contact: str, within_seconds: int = 72*3600) -> bool:
    entries = _load_ledger_entries()
    now = int(time.time())
    return any(
        (now - int(e.get('ts') or 0)) < within_seconds and (e.get('to') or '').lower() == contact.lower()
        for e in entries[-200:]
    )


def send_one(to_addr: str, subject: str, body: str, ref_id: str) -> dict:
    if not ref_id:
        return {'success': False, 'error': 'missing_ref_id'}
    result = gmail_send_reply_fixed(
        thread_id_or_msg_id=ref_id,
        original_subject=subject,
        body=body,
        original_sender=to_addr,
    )
    if not isinstance(result, dict):
        return {'success': False, 'error': 'invalid_result', 'raw': repr(result)}
    return result


def main():
    send_allowed = os.environ.get('ZTG_SEND_ALLOWED') == '1'
    pending = []
    processed = 0
    sent = []
    skipped = []
    failed = []
    for path in CANDIDATES:
        if not path.exists():
            skipped.append((path.name, 'missing'))
            continue
        data = _load_json(path, {})
        to_addr = (data.get('to') or '').strip()
        subject = (data.get('subject') or data.get('Subject') or '').strip()
        body = data.get('draft') or data.get('body') or ''
        ref_id = data.get('message_id') or data.get('msg_id') or data.get('thread_id') or ''
        snippet = data.get('reason') or data.get('snippet') or ''
        processed += 1
        if not to_addr or '@' not in to_addr:
            skipped.append((path.name, 'missing_email'))
            continue
        if _forbidden(to_addr, subject, snippet):
            skipped.append((path.name, 'forbidden_domain_or_prefix'))
            continue
        if _recent_send(to_addr, within_seconds=72*3600):
            skipped.append((path.name, 'recent_outbound_72h'))
            continue
        if not send_allowed:
            pending.append({'file': path.name, 'to': to_addr, 'subject': subject})
            skipped.append((path.name, 'send_policy_disabled'))
            continue
        try:
            res = send_one(to_addr, subject, body, ref_id)
            message_id = res.get('message_id') or res.get('id') or ''
            success = bool(res.get('success')) or bool(message_id)
            if success:
                sent.append({'file': path.name, 'to': to_addr, 'message_id': message_id})
                try:
                    with HOT_LEDGER.open('a', encoding='utf-8') as f:
                        f.write(json.dumps({
                            'source': path.name,
                            'to': to_addr,
                            'subject': subject,
                            'thread_id': data.get('thread_id'),
                            'message_id': message_id,
                            'avoid_duplicate': True,
                            'dedup_key': data.get('dedup_key') or path.name,
                            'ts': int(time.time()),
                            'status': 'sent',
                            'reason': 'safe_sender_ceo_reply',
                        }, ensure_ascii=False) + '\n')
                except Exception:
                    pass
            else:
                failed.append({'file': path.name, 'res': res})
        except Exception as e:
            failed.append({'file': path.name, 'error': repr(e)})
    out = {
        'processed': processed,
        'send_allowed': send_allowed,
        'pending': len(pending),
        'sent': len(sent),
        'skipped': len(skipped),
        'failed': len(failed),
        'skipped_details': skipped,
        'sent_details': sent,
        'pending_details': pending,
        'failed_details': failed,
    }
    print(json.dumps(out, ensure_ascii=False))


if __name__ == '__main__':
    main()
