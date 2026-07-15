import sys, json
sys.path.insert(0, '/data/data/com.termux/files/home')
from commands.google_workspace import gmail_search, gmail_get, gmail_thread_get

HITS = gmail_search('!!!hot-follow-up', limit=20, all_folders=True)
if not HITS:
    print('NO_HOT_FOLLOWUP_THREADS')
    sys.exit(0)

seen_threads = {}
for m in HITS:
    tid = m.get('threadId')
    mid = m.get('id')
    if tid not in seen_threads:
        seen_threads[tid] = mid

results = []
for tid, mid in seen_threads.items():
    try:
        msg = gmail_get(mid)
    except Exception as e:
        msg = {}
    headers = {h['name'].lower(): h['value'] for h in msg.get('payload', {}).get('headers', [])}
    subject = headers.get('subject', '(no subject)')
    sender = headers.get('from', '(unknown)')
    date = headers.get('date', '')
    try:
        thread_msgs = gmail_thread_get(tid)
        count = len(thread_msgs)
    except Exception:
        count = '?'
    results.append({
        'thread_id': tid,
        'subject': subject,
        'from': sender,
        'date': date,
        'message_count': count,
    })

print(json.dumps(results, indent=2))
