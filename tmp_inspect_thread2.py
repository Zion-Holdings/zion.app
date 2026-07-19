import json, sys
sys.path.insert(0, '/data/data/com.termux/files/home/zion-support.github.io/commands')
from google_workspace import gmail_thread_get
msgs = gmail_thread_get('19f3df60bc1cf2ed')
# Sort by internalDate descending
msgs_sorted = sorted(msgs, key=lambda m: int(m.get('internalDate','0')))
for m in msgs_sorted[-5:]:
    headers = {h['name']: h['value'] for h in m.get('payload',{}).get('headers',[])}
    print(m['id'], headers.get('Date'), headers.get('From'), headers.get('Subject'), headers.get('To'), m.get('labelIds'))
print('latest_from_last_5:', {h['name']: h['value'] for h in msgs_sorted[-1].get('payload',{}).get('headers',[])}.get('From'))
print('latest_labelIds:', msgs_sorted[-1].get('labelIds'))
