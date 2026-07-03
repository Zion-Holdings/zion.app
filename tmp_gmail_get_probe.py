#!/usr/bin/env python3
import sys, json
from pathlib import Path
REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
sys.path.insert(0, str(REPO / 'commands'))
from google_workspace import gmail_search, gmail_get  # type: ignore

msgs = gmail_search('in:anywhere', limit=5, all_folders=True)
print('SEARCH_RESULTS', len(msgs))
if not msgs:
    raise SystemExit(0)
mid = msgs[0]['id']
print('FIRST_ID', mid)
try:
    full = gmail_get(mid)
    print('GMAIL_GET_OK', bool(full))
    print('KEYS', sorted(full.keys())[:20])
    hdrs = full.get('payload', {}).get('headers', [])
    print('HEADER_NAMES', [h['name'] for h in hdrs][:10])
except Exception as e:
    print('GMAIL_GET_ERROR', repr(e))
