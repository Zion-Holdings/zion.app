#!/usr/bin/env python3
import sys
sys.path.insert(0, 'commands')
from google_workspace import gmail_search, gmail_thread_get
import json

query = 'label:"""hot-follow-up"""'
results = gmail_search(query, limit=20, all_folders=True)

print(f"QUERY: {query}")
print(f"HITS: {len(results)}")

if len(results) == 0:
    print("NO_HOT_FOLLOWUP_THREADS")
    sys.exit(0)

# dedupe by threadId
seen_threads = {}
for msg in results:
    tid = msg.get('threadId', msg.get('id'))
    if tid not in seen_threads:
        seen_threads[tid] = msg['id']

output = []
for tid, first_msg_id in sorted(seen_threads.items()):
    try:
        thread_msgs = gmail_thread_get(tid)
    except Exception as e:
        thread_msgs = []
    
    # Extract headers from first message
    msg0 = thread_msgs[0] if thread_msgs else {}
    headers = {}
    for h in msg0.get('payload', {}).get('headers', []):
        headers[h['name']] = h.get('value', '')
    
    subject = headers.get('Subject', '')
    sender = headers.get('From', '')
    date = headers.get('Date', '')
    message_count = len(thread_msgs)
    
    output.append({
        'threadId': tid,
        'subject': subject,
        'from': sender,
        'date': date,
        'message_count': message_count,
    })

print(json.dumps(output, indent=2))
