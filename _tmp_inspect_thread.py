import sys, json
from pathlib import Path
sys.path.insert(0, 'commands')
from google_workspace import gmail_thread_get

threads = [
  '19ec75d835ce8a1d',
  '19f4ce5cc510809e',
]
for tid in threads:
    print('\nTHREAD', tid)
    msgs = gmail_thread_get(tid) or []
    print('COUNT', len(msgs))
    for m in msgs[-4:]:
        h = {x['name']: x['value'] for x in m.get('payload', {}).get('headers', [])}
        print('DATE', h.get('Date'))
        print('FROM', h.get('From'))
        print('SUBJECT', h.get('Subject'))
        print('SNIPPET', m.get('snippet', '')[:400])
        print('---')
