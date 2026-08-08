#!/usr/bin/env python3
"""
Lightweight hot-followup scanner for cron runs.
Uses only commands/google_workspace.py helpers.
Writes results to outreach_monitor/processed/hot_followup_scan_<date>.json
"""
import sys, json, os
from pathlib import Path
from datetime import datetime

# Add repo root to path so we can import commands/google_workspace.py
REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT))

from commands.google_workspace import gog_headers, gmail_search, gmail_list_labels, gmail_thread_get

TOKEN_CANDIDATES = [
    Path.home() / '.openclaw' / 'workspace' / 'gog_tokens.json',
    REPO_ROOT / 'lead-crm' / 'gog_tokens.json',
    Path.home() / '.google' / 'token.json',
    Path.home() / '.google' / 'credentials.json',
    Path.home() / '.hermes' / 'google_token.json',
]

def has_valid_token():
    for p in TOKEN_CANDIDATES:
        if p.exists():
            return True
    return False

def extract_headers(msg, name):
    headers = msg.get('payload', {}).get('headers', [])
    for h in headers:
        if h.get('name', '').lower() == name.lower():
            return h.get('value', '')
    return ''

def is_internal_or_newsletter(msg):
    from_hdr = extract_headers(msg, 'From').lower()
    to_hdr = extract_headers(msg, 'To').lower()
    subj = extract_headers(msg, 'Subject').lower()
    # Exclude internal domains
    if 'ziontechgroup.com' in from_hdr or 'ziontechgroup.com' in to_hdr:
        return True
    # Exclude newsletters / system
    if any(k in subj for k in ['newsletter', 'notification', 'digest', 'unsubscribe']):
        return True
    if 'mailer-daemon' in from_hdr or 'googlemail.com' in from_hdr or 'github.com' in from_hdr:
        return True
    return False

def scan():
    results = {
        'timestamp': datetime.utcnow().isoformat(),
        'token_found': has_valid_token(),
        'label_id': None,
        'threads_checked': 0,
        'safe_threads': [],
        'blockers': [],
    }

    if not has_valid_token():
        results['blockers'].append('No valid token found')
        return results

    # Try to find the label
    try:
        labels = gmail_list_labels()
        target_label_id = None
        for lab in labels:
            if 'hot-follow-up' in lab.get('name', '').lower():
                target_label_id = lab.get('id')
                results['label_id'] = lab.get('name')
                break
    except Exception as e:
        results['blockers'].append(f'gmail_list_labels error: {e}')

    # Broader token search
    query = '!!!hot-follow-up'
    try:
        messages = gmail_search(query, limit=50)
    except Exception as e:
        results['blockers'].append(f'gmail_search error: {e}')
        return results

    thread_ids_seen = set()
    for m in messages:
        tid = m.get('threadId')
        if not tid or tid in thread_ids_seen:
            continue
        thread_ids_seen.add(tid)
        try:
            msgs = gmail_thread_get(tid)
        except Exception:
            continue
        if not msgs:
            continue
        first = msgs[0]
        if is_internal_or_newsletter(first):
            continue
        subj = extract_headers(first, 'Subject')
        sender = extract_headers(first, 'From')
        results['threads_checked'] += 1
        results['safe_threads'].append({
            'thread_id': tid,
            'message_id': first.get('id'),
            'subject': subj,
            'sender': sender,
            'date': extract_headers(first, 'Date'),
        })

    return results

if __name__ == '__main__':
    out = scan()
    date_str = datetime.utcnow().strftime("%Y-%m-%d")
    out_path = REPO_ROOT / 'outreach_monitor' / 'processed' / f'hot_followup_scan_{date_str}.json'
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, 'w') as f:
        json.dump(out, f, indent=2)
    print(json.dumps(out, indent=2))
