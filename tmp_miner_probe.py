#!/usr/bin/env python3
"""Diagnostic: inspect Gmail message payloads returned by miner search."""
from __future__ import annotations
import sys, json
from pathlib import Path
REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
sys.path.insert(0, str(REPO / 'commands'))
try:
    from google_workspace import gmail_search  # type: ignore
except Exception as e:
    print(json.dumps({'import_error': str(e)}))
    raise SystemExit(1)

msgs = gmail_search('in:anywhere', limit=5, all_folders=True)
print('RETURNED', len(msgs))
for m in msgs[:3]:
    print(json.dumps({
        'id': m.get('id'),
        'snippet': m.get('snippet', ''),
        'headers': [h for h in m.get('payload', {}).get('headers', []) if h['name'].lower() in {'from','to','subject','message-id'}],
    }, indent=2))
