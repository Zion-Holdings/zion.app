#!/usr/bin/env python3
"""
Lightweight hot-followup scanner for cron runs.
Uses commands/google_workspace.py helpers plus direct Threads API calls.
Writes results to outreach_monitor/processed/hot_followup_scan_<date>.json
"""
import sys
import json
import urllib.request
from pathlib import Path
from datetime import datetime, timezone

# Add repo root to path so we can import commands/google_workspace.py
# NOTE: when this file lives under scripts/outreach/, use .parent.parent.parent
REPO_ROOT = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(REPO_ROOT))

from commands.google_workspace import gog_headers, gmail_search, gmail_list_labels, gmail_thread_get

LABEL_ID = 'Label_4207916705207178948'
LABEL_NAME = '!!!!HOT FOLLOW-UP'
EXCLUDE_DOMAINS = ['ziontechgroup.com']
NEWSLETTER_KEYWORDS = ['newsletter', 'notification', 'digest', 'unsubscribe']
SYSTEM_SENDERS = ['mailer-daemon', 'github.com', 'googlemail.com']
OTP_SENDERS = ['noreply', 'no-reply-', 'no-reply-co', 'no-reply-otp']
OTP_SUBJECTS = ['código de segurança', 'código de verificação', 'dispositivo confiável', 'security code', 'verification code']

def extract_header(msg, name):
    headers = msg.get('payload', {}).get('headers', [])
    for h in headers:
        if h.get('name', '').lower() == name.lower():
            return h.get('value', '')
    return ''

def is_excluded(msg):
    from_hdr = extract_header(msg, 'From').lower()
    to_hdr = extract_header(msg, 'To').lower()
    subj = extract_header(msg, 'Subject').lower()
    if any(d in from_hdr for d in EXCLUDE_DOMAINS) or any(d in to_hdr for d in EXCLUDE_DOMAINS):
        return True
    if any(k in subj for k in NEWSLETTER_KEYWORDS):
        return True
    if any(d in from_hdr for d in SYSTEM_SENDERS):
        return True
    if any(d in from_hdr for d in OTP_SENDERS):
        return True
    if any(k in subj for k in OTP_SUBJECTS):
        return True
    return False

def scan():
    out = {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'label_id': LABEL_ID,
        'threads_api_returned': 0,
        'threads_checked': 0,
        'safe_threads': [],
        'threads_sent': 0,
        'blockers': [],
    }

    # Init auth
    try:
        gog_headers()
    except Exception as e:
        out['blockers'].append(f'gog_headers error: {e}')
        return out

    # Verify label exists (informational)
    try:
        labels = gmail_list_labels()
        for lab in labels:
            if LABEL_ID in lab.get('id', ''):
                out['label_id'] = lab.get('name', LABEL_ID)
                break
    except Exception as e:
        out['blockers'].append(f'gmail_list_labels error: {e}')

    # Threads API primary scan (direct call because helper lacks list endpoint)
    headers = gog_headers()
    threads = []
    try:
        url = f'https://gmail.googleapis.com/gmail/v1/users/me/threads?labelId={LABEL_ID}&maxResults=100'
        req = urllib.request.Request(url, headers=headers)
        resp = json.loads(urllib.request.urlopen(req).read())
        threads = resp.get('threads', [])
        out['threads_api_returned'] = len(threads)
    except Exception as e:
        out['blockers'].append(f'Threads API error: {e}')
        # Fallback to broader search query
        try:
            messages = gmail_search('!!!hot-follow-up', limit=100)
            out['blockers'].append(f'Threads API failed, fell back to search: {len(messages)} messages')
        except Exception as e2:
            out['blockers'].append(f'gmail_search fallback error: {e2}')
            return out
        seen = set()
        thread_map = {}
        for m in messages:
            tid = m.get('threadId')
            if not tid or tid in seen:
                continue
            seen.add(tid)
            thread_map[tid] = m.get('id')
        threads = [{'id': mid, 'threadId': tid} for tid, mid in thread_map.items()]
        out['threads_api_returned'] = len(threads)

    # Process threads
    for t in threads:
        tid = t.get('threadId') or t.get('id')
        if not tid:
            continue
        try:
            msgs = gmail_thread_get(tid)
        except Exception:
            continue
        if not msgs:
            continue
        first = msgs[0]
        if is_excluded(first):
            continue
        out['threads_checked'] += 1
        out['safe_threads'].append({
            'thread_id': tid,
            'message_id': first.get('id'),
            'subject': extract_header(first, 'Subject'),
            'sender': extract_header(first, 'From'),
            'date': extract_header(first, 'Date'),
        })

    return out

if __name__ == '__main__':
    out = scan()
    out_path = REPO_ROOT / 'outreach_monitor' / 'processed' / f"hot_followup_scan_{datetime.now(timezone.utc).strftime('%Y-%m-%d')}.json"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, 'w') as f:
        json.dump(out, f, indent=2)
    print(json.dumps(out, indent=2))
