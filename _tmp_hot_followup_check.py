#!/usr/bin/env python3
import sys, json
sys.path.insert(0, '.')
from commands.google_workspace import gmail_search, gmail_get, gmail_thread_get
import datetime, urllib.parse

label = '!!!hot-follow-up'
query = f'label:{label}'
msgs = gmail_search(query, limit=20, all_folders=True)
print(json.dumps({'hits': len(msgs), 'messages': msgs}))
