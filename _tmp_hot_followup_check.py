import sys, json
from pathlib import Path
sys.path.insert(0, 'commands')
from google_workspace import gmail_list_labels, gmail_search, gmail_thread_get

label_ids = [
  'Label_946',
  'Label_947',
  'Label_948',
  'Label_949',
  'Label_950',
]
labels = {l['id']: l['name'] for l in gmail_list_labels()}
all_msgs = []
for lid in label_ids:
    try:
        msgs = gmail_search(f'label:{lid}', limit=20, all_folders=True) or []
    except Exception as e:
        msgs = []
        print(f'ERR label {lid}: {e}')
    all_msgs.extend(m for m in msgs)
seen = {}
for m in all_msgs:
    if m.get('id') not in seen:
        seen[m['id']] = m
unique = list(seen.values())[:40]
print('UNIQUE_MSG_COUNT', len(unique))
for m in unique:
    tid = m.get('threadId') or m.get('id')
    try:
        thread = gmail_thread_get(tid) or []
    except Exception as e:
        thread = []
        print('THREAD_ERR', tid, e)
    latest = thread[-1] if thread else m
    headers = {h['name']: h['value'] for h in latest.get('payload', {}).get('headers', [])}
    author = headers.get('From', '')
    subject = headers.get('Subject', '')
    date = headers.get('Date', '')
    snippet = latest.get('snippet', '')[:180]
    print(json.dumps({
        'id': m.get('id'),
        'threadId': tid,
        'subject': subject,
        'latest_from': author,
        'latest_date': date,
        'snippet': snippet,
    }, ensure_ascii=False))
