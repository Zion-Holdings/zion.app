#!/usr/bin/env python3
import sys
sys.path.insert(0, '/data/data/com.termux/files/home/ztg/repo/commands')
from google_workspace import gmail_search, gmail_thread_get

QUERY = 'label:!!!hot-follow-up'
LIMIT = 20
ALL_FOLDERS = True

print(f"Query: {QUERY} | all_folders={ALL_FOLDERS} | limit={LIMIT}")

results = gmail_search(QUERY, limit=LIMIT, all_folders=ALL_FOLDERS)
if not results:
    print("NO_HOT_FOLLOWUP_THREADS")
    sys.exit(0)

# Deduplicate by thread_id
thread_ids = []
seen = set()
for r in results:
    tid = r.get('threadId') or r.get('id')
    if tid and tid not in seen:
        seen.add(tid)
        thread_ids.append(tid)

print(f"Found {len(thread_ids)} unique thread(s)\n")

for tid in thread_ids:
    msgs = gmail_thread_get(tid)
    thread_id = tid
    subject = None
    sender = None
    date = None
    msg_count = len(msgs) if msgs else 0

    # Extract headers from first message in thread
    if msgs:
        first = msgs[0]
        headers_raw = first.get('payload', {}).get('headers', [])
        for h in headers_raw:
            if h['name'] == 'Subject':
                subject = h['value']
            elif h['name'] == 'From':
                sender = h['value']
            elif h['name'] == 'Date':
                date = h['value']

    print(f"Thread ID: {thread_id}")
    print(f"Subject: {subject or '(no subject)'}")
    print(f"From: {sender or '(unknown)'}")
    print(f"Date: {date or '(unknown)'}")
    print(f"Message Count: {msg_count}")
    print("---")
