#!/usr/bin/env python3
import sys, json
sys.path.insert(0, './commands')
from google_workspace import gmail_search, gmail_get

query = 'label:"!!!hot-follow-up"'
results = gmail_search(query, limit=20, all_folders=True)
print(f"RAW_RESULTS_COUNT={len(results)}")

if not results:
    print("NO_HOT_FOLLOWUP_THREADS")
    sys.exit(0)

# Results are messages; group by threadId
threads = {}
for msg in results:
    tid = msg.get('threadId', 'unknown')
    if tid not in threads:
        threads[tid] = {'count': 0, 'message_ids': []}
    threads[tid]['count'] += 1
    threads[tid]['message_ids'].append(msg['id'])

for tid, info in threads.items():
    print(f"THREAD_ID={tid} MESSAGE_COUNT={info['count']}")

# Fetch headers for the latest messages in each thread to get subject/from/date
for tid, info in list(threads.items())[:10]:
    try:
        m = gmail_get(info['message_ids'][-1])
        headers = {h['name']: h['value'] for h in m.get('payload', {}).get('headers', []) if h.get('name') in ('Subject', 'From', 'Date')}
        subject = headers.get('Subject', '(no subject)')
        sender = headers.get('From', 'unknown')
        date = headers.get('Date', 'unknown')
        print(f"METADATA tid={tid} subject={subject} from={sender} date={date}")
    except Exception as e:
        print(f"METADATA_ERROR tid={tid} err={e}")
