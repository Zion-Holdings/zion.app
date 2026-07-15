#!/usr/bin/env python3
import sys
from pathlib import Path

# Make commands/ directory importable
sys.path.insert(0, str(Path(__file__).resolve().parent / 'commands'))
import google_workspace as gw
from collections import defaultdict

QUERY = 'label:!!!hot-follow-up'
LIMIT = 20
ALL_FOLDERS = True

results = gw.gmail_search(QUERY, limit=LIMIT, all_folders=ALL_FOLDERS)

print(f"QUERY={QUERY}")
print(f"HITS={len(results)}")

if not results:
    print("NO_HOT_FOLLOWUP_THREADS")
    sys.exit(0)

# Group by thread, keep first message id seen per thread
thread_ids_seen = []
thread_first_msg = {}
thread_msg_count = defaultdict(int)

for msg in results:
    tid = msg.get('threadId')
    mid = msg.get('id')
    if not tid:
        continue
    thread_msg_count[tid] += 1
    if tid not in thread_first_msg:
        thread_first_msg[tid] = mid
        thread_ids_seen.append(tid)

output_lines = []
output_lines.append(f"TOTAL_THREADS={len(thread_ids_seen)}")
output_lines.append(f"TOTAL_MESSAGES={len(results)}")

for tid in thread_ids_seen:
    first_id = thread_first_msg[tid]
    full = gw.gmail_get(first_id)
    headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
    subject = headers.get('Subject', '(no subject)')
    sender = headers.get('From', '(unknown)')
    date = headers.get('Date', headers.get('date', '(unknown)'))
    count = thread_msg_count[tid]
    output_lines.append(f"THREAD_ID={tid}")
    output_lines.append(f"SUBJECT={subject}")
    output_lines.append(f"FROM={sender}")
    output_lines.append(f"DATE={date}")
    output_lines.append(f"MESSAGE_COUNT={count}")
    output_lines.append("---")

print("\n".join(output_lines))
