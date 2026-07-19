import json, sys
sys.path.insert(0, '/data/data/com.termux/files/home/zion-support.github.io/commands')
from google_workspace import gmail_thread_get
msgs = gmail_thread_get('19f3df60bc1cf2ed')
print(json.dumps(msgs, indent=2))
