#!/usr/bin/env python3
import sys, json
from pathlib import Path
REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
sys.path.insert(0, str(REPO / 'commands'))
from google_workspace import gmail_search, gmail_get

msgs = gmail_search('in:anywhere', limit=1, all_folders=True)
full = gmail_get(msgs[0]['id'])
hdrs = full.get('payload', {}).get('headers', [])
print('HEADER_COUNT', len(hdrs))
print('ALL_HEADERS', [h['name'] for h in hdrs])
print('FROM', next((h['value'] for h in hdrs if h['name'].lower() == 'from'), ''))
print('SUBJECT', next((h['value'] for h in hdrs if h['name'] == 'Subject'), ''))
print('TO', next((h['value'] for h in hdrs if h['name'].lower() == 'to'), ''))
print('MESSAGE_ID', next((h['value'] for h in hdrs if h['name'] == 'Message-ID'), ''))
