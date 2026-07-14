import sys, json
sys.path.insert(0, '/data/data/com.termux/files/home')
from commands.google_workspace import gmail_search, gmail_thread_get

label = '!!!hot-follow-up'
query = f'label:"{label}"'
messages = gmail_search(query, limit=20, all_folders=True)
print('RAW_COUNT', len(messages), flush=True)

if not messages:
    print('NO_HOT_FOLLOWUP_THREADS')
    sys.exit(0)

threads = {}
for m in messages:
    tid = m.get('threadId')
    if tid and tid not in threads:
        threads[tid] = m['id']

results = []
for tid, mid in threads.items():
    msgs = gmail_thread_get(tid)
    count = len(msgs)
    first = msgs[0] if msgs else {}
    headers = {h[0]['name']: h[1] for h in first.get('payload', {}).get('headers', [])}
    subject = headers.get('Subject', '')
    sender = headers.get('From', '')
    date = headers.get('Date', '')
    results.append((tid, subject, sender, date, count))

print(json.dumps(results, ensure_ascii=False))
