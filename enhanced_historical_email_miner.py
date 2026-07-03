#!/usr/bin/env python3
"""Enhanced historical email miner — scans all Gmail folders, logs telemetry, outputs mined contacts."""
from __future__ import annotations

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parent
sys.path.insert(0, str(REPO / 'commands'))
try:
    from google_workspace import gmail_search, gmail_get  # type: ignore
except Exception as e:  # pragma: no cover
    print(json.dumps({'error': f'google_workspace import failed: {e}'}))
    sys.exit(1)

LOG_PATH = REPO / 'email_miner_performance.log'
CHUNK_MIN = 180
MAX_BATCH = 300
FETCH_LIMIT = 300


def log_record(record: dict) -> None:
    try:
        LOG_PATH.write_text(json.dumps(record, indent=2) + '\n')
    except Exception:
        pass


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def extract_contacts(messages: list[dict]) -> list[dict]:
    contacts = []
    seen = set()
    for msg in messages:
        try:
            payload = msg.get('payload', {})
            headers = payload.get('headers', [])
            hdr_map = {h['name'].lower(): h['value'] for h in headers if h.get('name')}

            sender = hdr_map.get('from', '')
            sender_email = sender.split('<')[-1].split('>')[0].strip().lower()
            if not sender_email or '@' not in sender_email:
                snippet = msg.get('snippet', '')
                m = re.search(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', snippet)
                if not m:
                    continue
                sender_email = m.group(0).lower()

            domain = sender_email.split('@', 1)[1]
            if domain in {'example.com', 'localhost'} or 'noreply' in sender_email or 'mailer-daemon' in sender_email:
                continue
            if sender_email in seen:
                continue
            seen.add(sender_email)
            subject = hdr_map.get('subject', '')
            contacts.append({
                'email': sender_email,
                'subject': subject,
                'snippet': msg.get('snippet', ''),
                'source': 'mined_in_anywhere',
                'minedAt': now_iso(),
            })
        except Exception:
            continue
    return contacts


def run() -> int:
    query = 'in:anywhere'
    message_ids = []
    messages = []
    error = None
    try:
        message_ids = gmail_search(query, limit=MAX_BATCH, all_folders=True)
        for mid in message_ids[: min(FETCH_LIMIT, len(message_ids))]:
            try:
                messages.append(gmail_get(mid['id']))
            except Exception as e:
                error = str(e)
                continue
    except Exception as e:  # pragma: no cover
        error = str(e)
    contacts = extract_contacts(messages)
    record = {
        'generatedAt': now_iso(),
        'query': query,
        'max_batch': MAX_BATCH,
        'returned_message_count': len(message_ids),
        'fetched_message_count': len(messages),
        'contacts_count': len(contacts),
        'error': error,
        'scan_chunk_min': CHUNK_MIN,
    }
    log_record(record)
    print(json.dumps(record, indent=2))
    out = REPO / 'lead-crm' / 'outreach_ready_mined_old_emails.json'
    try:
        out.write_text(json.dumps({
            'generatedAt': now_iso(),
            'contacts': contacts,
        }, indent=2))
    except Exception:
        pass
    return 0


if __name__ == '__main__':
    raise SystemExit(run())
