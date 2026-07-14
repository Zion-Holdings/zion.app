#!/usr/bin/env python3
import sys
sys.path.insert(0, '/data/data/com.termux/files/home/zion-support.github.io')
from commands.google_workspace import gmail_search, gmail_thread_get
import json

query = 'label:!!!hot-follow-up'
results = gmail_search(query, limit=20, all_folders=True)
print(f"RAW_SEARCH_RESULTS count={len(results)}", flush=True)

if not results:
    print("NO_HOT_FOLLOWUP_THREADS")
    sys.exit(0)

threads = {}
for m in results:
    tid = m.get('threadId')
    if tid not in threads:
        threads[tid] = True

report = []
for tid in threads:
    try:
        thread_messages = gmail_thread_get(tid)
        first = thread_messages[0]
        headers = {h['name'].lower(): h['value'] for h in first.get('payload', {}).get('headers', [])}
        subject = headers.get('subject', '')
        frm = headers.get('from', '')
        date = headers.get('date', '')
        report.append({
            'thread_id': tid,
            'subject': subject,
            'from': frm,
            'date': date,
            'message_count': len(thread_messages)
        })
    except Exception as e:
        report.append({
            'thread_id': tid,
            'subject': 'ERROR',
            'from': 'ERROR',
            'date': 'ERROR',
            'message_count': -1,
            'error': str(e)
        })

print(json.dumps(report, indent=2))
