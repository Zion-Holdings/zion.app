import sys, json
from pathlib import Path
sys.path.insert(0, str(Path.cwd()))
from commands.google_workspace import gmail_search, gmail_get

query = 'label:!!!hot-follow-up'
limit = 20
all_folders = True

messages = gmail_search(query, limit=limit, all_folders=all_folders)

if not messages:
    print('NO_HOT_FOLLOWUP_THREADS')
    sys.exit(0)

results = []
for m in messages:
    msg = gmail_get(m['id'])
    headers = {h['name']: h['value'] for h in msg.get('payload', {}).get('headers', [])}
    subject = headers.get('Subject', '')
    from_addr = headers.get('From', '')
    date = headers.get('Date', '')
    thread_id = msg.get('threadId', m.get('threadId', ''))
    results.append({
        'id': m['id'],
        'threadId': thread_id,
        'subject': subject,
        'from': from_addr,
        'date': date,
        'snippet': msg.get('snippet', '')
    })

from collections import Counter
thread_counts = Counter(r['threadId'] for r in results)

for r in results:
    count = thread_counts[r['threadId']]
    print(f"ID: {r['id']} | THREAD: {r['threadId']} | SUBJECT: {r['subject']} | FROM: {r['from']} | DATE: {r['date']} | MSG_COUNT: {count}")
