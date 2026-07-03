#!/usr/bin/env python3
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / 'commands'))
from google_workspace import gmail_search  # type: ignore

msgs = gmail_search('in:sent', limit=10, all_folders=True)
print('SENT_COUNT', len(msgs))
for m in msgs:
    print(m.get('id'))
