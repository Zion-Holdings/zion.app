#!/usr/bin/env python3
"""Lightweight hot-followup scanner for cron runs."""
import importlib.util, json, sys, os
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
GW_PATH = REPO / 'commands' / 'google_workspace.py'
spec = importlib.util.spec_from_file_location('google_workspace', GW_PATH)
gw = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gw)

LABEL_NAME = '!!!hot-follow-up'
DEDUP_JSON = REPO / 'outreach_monitor' / 'processed' / 'sent_threads.json'
DEDUP_JSONL = REPO / 'outreach_monitor' / 'processed' / 'sent_ledger.jsonl'
DEDUP_JSONL2 = REPO / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl'

def load_dedup():
    known = set()
    # load canonical json
    try:
        data = json.loads(DEDUP_JSON.read_text())
        for rec in data.get('sent_threads', []):
            known.add(rec.get('thread_id'))
    except Exception:
        pass
    # load jsonl ledgers
    for path in (DEDUP_JSONL, DEDUP_JSONL2):
        try:
            for line in path.read_text().splitlines():
                if not line.strip():
                    continue
                rec = json.loads(line)
                tid = rec.get('thread_id')
                if tid:
                    known.add(tid)
        except Exception:
            pass
    return known

def is_internal(sender):
    if not sender:
        return False
    return sender.lower().endswith('@ziontechgroup.com')

def is_newsletter(sender, subject):
    s = (sender or '').lower()
    subj = (subject or '').lower()
    newsletter_keywords = ['newsletter', 'digest', 'weekly update', 'noreply', 'no-reply', 'mailer-daemon', 'notifications@github.com']
    for kw in newsletter_keywords:
        if kw in s or kw in subj:
            return True
    return False

def extract_headers(msg):
    headers = {}
    for h in msg.get('payload', {}).get('headers', []):
        headers[h['name']] = h['value']
    return headers

def main():
    known_threads = load_dedup()
    print(f"Loaded {len(known_threads)} known thread_ids")

    # List labels to confirm hot-follow-up label ID
    try:
        labels = gw.gmail_list_labels()
        label_id = None
        for lab in labels:
            if lab['name'] == LABEL_NAME:
                label_id = lab['id']
                break
        print(f"Label '{LABEL_NAME}' id={label_id}")
    except Exception as e:
        print(f"Label list error: {e}")
        label_id = None

    # Use broader token search to surface candidates
    query = '!!!hot-follow-up'
    try:
        messages = gw.gmail_search(query, limit=50)
    except Exception as e:
        print(f"gmail_search error: {e}")
        messages = []

    print(f"gmail_search returned {len(messages)} message stubs")

    candidates = []
    for m in messages:
        mid = m.get('id')
        tid = m.get('threadId')
        if not mid:
            continue
        # fetch full message for headers
        try:
            full = gw.gmail_get(mid)
        except Exception as e:
            print(f"gmail_get error for {mid}: {e}")
            continue
        headers = extract_headers(full)
        sender = headers.get('From', '')
        subject = headers.get('Subject', '')
        # label post-filter
        msg_labels = full.get('labelIds', [])
        if label_id and label_id not in msg_labels:
            continue
        if is_internal(sender):
            print(f"SKIP internal: {sender} | {subject}")
            continue
        if is_newsletter(sender, subject):
            print(f"SKIP newsletter/system: {sender} | {subject}")
            continue
        if tid in known_threads:
            print(f"SKIP dedup thread: {tid} | {subject}")
            continue
        candidates.append({
            'message_id': mid,
            'thread_id': tid,
            'sender': sender,
            'subject': subject,
            'labels': msg_labels,
        })

    print(f"Candidates after filtering: {len(candidates)}")
    for c in candidates:
        print(json.dumps(c, ensure_ascii=False))

    # No sending from scanner; report only
    out = {
        'checked': len(messages),
        'candidates': candidates,
        'sent': 0,
    }
    print(json.dumps(out, ensure_ascii=False))

if __name__ == '__main__':
    main()
