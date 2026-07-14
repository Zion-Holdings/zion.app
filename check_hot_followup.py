#!/usr/bin/env python3
import sys, json
sys.path.insert(0, './commands')
from google_workspace import gmail_search, gmail_get, gmail_thread_get

label = '!!!hot-follow-up'
messages = gmail_search(label, limit=20, all_folders=True)
print(json.dumps({'hits': len(messages), 'messages': messages}))

if messages:
    results = []
    for m in messages:
        mid = m['id']
        tid = m.get('threadId')
        try:
            msg = gmail_get(mid)
        except Exception as e:
            msg = {}
        headers = msg.get('payload', {}).get('headers', [])
        def hdr(name):
            for h in headers:
                if h['name'].lower() == name.lower():
                    return h['value']
            return ''
        subject = hdr('Subject')
        frm = hdr('From')
        date = hdr('Date')
        thread_count = 0
        if tid:
            try:
                t = gmail_thread_get(tid)
                thread_count = len(t)
            except Exception:
                thread_count = 1
        else:
            thread_count = 1
        results.append({'thread_id': tid, 'message_id': mid, 'subject': subject, 'from': frm, 'date': date, 'thread_message_count': thread_count})
    print(json.dumps(results, indent=2))
else:
    print("NO_HOT_FOLLOWUP_THREADS")
