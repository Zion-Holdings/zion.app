import sys, json
from pathlib import Path
sys.path.insert(0, str(Path('commands').resolve()))
from google_workspace import gmail_search, gmail_thread_get

def extract_header(msg, name):
    headers = msg.get('payload', {}).get('headers', [])
    for h in headers:
        if h.get('name', '').lower() == name.lower():
            return h.get('value', '')
    return ''

messages = gmail_search('label:!!!hot-follow-up', limit=20, all_folders=True)
print(f"RAW_MESSAGE_COUNT={len(messages)}")

if not messages:
    print("NO_HOT_FOLLOWUP_THREADS")
    sys.exit(0)

threads = {}
for m in messages:
    tid = m.get('threadId')
    if tid not in threads:
        threads[tid] = []
    threads[tid].append(m['id'])

print(f"UNIQUE_THREAD_COUNT={len(threads)}")

results = []
for tid, msg_ids in threads.items():
    msgs = gmail_thread_get(tid)
    count = len(msgs)
    first = msgs[0] if msgs else {}
    subject = extract_header(first, 'Subject')
    from_addr = extract_header(first, 'From')
    date = extract_header(first, 'Date')
    results.append({
        'thread_id': tid,
        'subject': subject,
        'from': from_addr,
        'date': date,
        'message_count': count,
    })

for r in results:
    print(json.dumps(r, ensure_ascii=False))
