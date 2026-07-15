import json, sys
sys.path.insert(0, 'commands')
from google_workspace import gmail_search, gmail_get

results = gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)

print(f"QUERY: label:\"!!!hot-follow-up\"  all_folders=True  limit=20")
print(f"TOTAL_MATCHING_MESSAGES: {len(results)}")

if len(results) == 0:
    print("NO_HOT_FOLLOWUP_THREADS")
    sys.exit(0)

message_details = []
for msg in results:
    msg_id = msg['id']
    thread_id = msg.get('threadId', 'N/A')
    full = gmail_get(msg_id)
    headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
    subject = headers.get('Subject', 'No Subject')
    from_addr = headers.get('From', 'Unknown')
    date = headers.get('Date', 'Unknown')
    message_details.append({
        'messageId': msg_id,
        'threadId': thread_id,
        'subject': subject,
        'from': from_addr,
        'date': date
    })

thread_counts = {}
for m in message_details:
    tid = m['threadId']
    if tid not in thread_counts:
        thread_counts[tid] = 0
    thread_counts[tid] += 1

for m in message_details:
    tid = m['threadId']
    print(f"THREAD_ID: {tid}")
    print(f"  SUBJECT: {m['subject']}")
    print(f"  FROM: {m['from']}")
    print(f"  DATE: {m['date']}")
    print(f"  MESSAGE_COUNT_IN_THREAD: {thread_counts[tid]}")
