#!/usr/bin/env python3
import sys, json
sys.path.insert(0, '/data/data/com.termux/files/home/zion-support.github.io/commands')
import google_workspace as gw

msgs = gw.gmail_search('!!!hot-follow-up', limit=20, all_folders=True)
if not msgs:
    print('NO_HOT_FOLLOWUP_THREADS')
    sys.exit(0)

threads = {}
for m in msgs:
    mid = m.get('id')
    tid = m.get('threadId')
    try:
        detail = gw.gmail_get(mid)
    except Exception as e:
        threads.setdefault(tid, {'threadId': tid, 'error': str(e)})
        continue
    headers = detail.get('payload', {}).get('headers', [])
    def h(name):
        for header in headers:
            if header.get('name', '').lower() == name.lower():
                return header.get('value', '')
        return ''
    info = threads.setdefault(tid, {'threadId': tid, 'subject': h('Subject'), 'from': h('From'), 'date': h('Date'), 'message_ids': []})
    if not info.get('subject'):
        info['subject'] = h('Subject')
    if not info.get('from'):
        info['from'] = h('From')
    if not info.get('date'):
        info['date'] = h('Date')
    info['message_ids'].append(mid)

report = []
for tid, info in threads.items():
    try:
        thread_messages = gw.gmail_thread_get(tid)
        count = len(thread_messages)
        if not info.get('subject') and thread_messages:
            headers = thread_messages[0].get('payload', {}).get('headers', [])
            def h(name):
                for h in headers:
                    if h.get('name', '').lower() == name.lower():
                        return h.get('value', '')
            info['subject'] = h('Subject')
            info['from'] = h('From')
            info['date'] = h('Date')
        report.append({
            'threadId': tid,
            'subject': info.get('subject', ''),
            'from': info.get('from', ''),
            'date': info.get('date', ''),
            'message_count': count
        })
    except Exception as e:
        report.append({
            'threadId': tid,
            'subject': info.get('subject', ''),
            'from': info.get('from', ''),
            'date': info.get('date', ''),
            'message_count': -1,
            'error': str(e)
        })

print(json.dumps(report, indent=2))
