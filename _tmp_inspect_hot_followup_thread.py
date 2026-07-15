import sys, os
sys.path.insert(0, os.getcwd())
from commands.google_workspace import gmail_thread_get, gmail_get

thread_id = '19f3df60bc1cf2ed'
print('BEGIN_THREAD')
thread = gmail_thread_get(thread_id)
print(thread)
print('END_THREAD')

messages = thread.get('messages', [])
if messages:
    msg = messages[0]
    print('BEGIN_FIRST_MESSAGE')
    print(gmail_get(msg['id']))
    print('END_FIRST_MESSAGE')
