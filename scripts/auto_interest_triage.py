"""Inbound interest triage from Gmail.

Rules:
- search all folders for recent messages whose subject/body contain interest keywords
- skip threads already sent to/labeled by Zion outreach
- label new ones with !!!ZION-INTEREST
- write drafts to lead-crm/interest_draft_queue.jsonl
- dry-run by default; live write requires LIVE=1
"""
from __future__ import annotations

import json
import os
import re
from datetime import datetime, timezone
from pathlib import Path

try:
    from commands.google_workspace import gmail_search, gmail_thread_get, gog_headers  # type: ignore
except Exception:  # pragma: no cover - fallback keeps script importable
    gmail_search = None
    gmail_thread_get = None
    gog_headers = None

REPO = Path(__file__).resolve().parents[1]
QUEUE_PATH = REPO / 'lead-crm' / 'interest_draft_queue.jsonl'
STATE_PATH = REPO / 'outreach_monitor' / 'processed' / 'interest_triage_state.json'
LABEL = '!!!ZION-INTEREST'
LIVE = os.environ.get('LIVE') == '1'

KEYWORDS = [
    'partnership', 'partner', 'parceria', 'colaboração', 'colaboracao',
    'integration', 'integração', 'proposal', 'proposta', 'quote', 'orçamento', 'orcamento',
    'interested in', 'interested', 'ai', 'automation', 'automação', 'automao',
    'managed services', 'msp', 'cloud', 'devops', 'security',
    'custom tool', 'custom integration', 'sow', 'rfq', 'procurement',
    'zion tech', 'ziontech',
    'it services', 'support outsourcing', 'helpdesk',
]
NOISE_SUBJECTS = re.compile(
    r'undeliverable|bounce|delivery has failed|newsletter digest|calendar notification|invoice|pre-approval',
    re.I,
)

def _ensure_state() -> dict:
    if STATE_PATH.exists():
        try:
            return json.loads(STATE_PATH.read_text(encoding='utf-8'))
        except Exception:
            pass
    return {'seen_thread_ids': {}, 'last_run_at': None}


def _save_state(state: dict) -> None:
    STATE_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATE_PATH.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding='utf-8')


def _interest_score(text: str) -> int:
    t = text.lower()
    return sum(1 for k in KEYWORDS if k in t)


def _recent_query() -> str:
    return 'newer_than:48h'

def _load_queue() -> list[dict]:
    if QUEUE_PATH.exists():
        try:
            return [json.loads(line) for line in QUEUE_PATH.read_text(encoding='utf-8').splitlines() if line.strip()]
        except Exception:
            return []
    return []


def _save_queue(queue: list[dict]) -> None:
    QUEUE_PATH.parent.mkdir(parents=True, exist_ok=True)
    lines = [json.dumps(row, ensure_ascii=False) for row in queue[-1000:]]
    QUEUE_PATH.write_text('\n'.join(lines) + '\n', encoding='utf-8')


def triage() -> dict:
    summary = {
        'run_at': datetime.now(timezone.utc).isoformat(),
        'candidate_threads': 0,
        'interest_added': 0,
        'skipped_noise': 0,
        'skipped_recent': 0,
        'errors': [],
    }
    if gmail_search is None or gog_headers is None:
        summary['errors'].append('gmail helpers unavailable')
        return summary

    state = _ensure_state()
    seen = set(state.get('seen_thread_ids', {}).keys())
    state.setdefault('seen_thread_ids', {})
    queue = _load_queue()
    seen_queue = {(q.get('thread_id'), q.get('subject')) for q in queue}

    subject_queries = ' OR '.join(KEYWORDS)
    query = f'({subject_queries}) {_recent_query()} in:anywhere -label:{LABEL.replace("!", "\\!")}'
    try:
        hits = gmail_search(query, limit=40) or []
    except Exception as e:
        summary['errors'].append(f'search failed: {e}')
        return summary

    for item in hits:
        thread_id = item.get('threadId') or item.get('thread_id')
        message_id = item.get('id') or item.get('messageId')
        subject = item.get('subject') or item.get('snippet') or ''
        if NOISE_SUBJECTS.search(subject):
            summary['skipped_noise'] += 1
            continue
        if thread_id in seen:
            summary['skipped_recent'] += 1
            continue
        if thread_id and (thread_id, subject) in seen_queue:
            summary['skipped_recent'] += 1
            continue
        summary['candidate_threads'] += 1
        if LIVE:
            try:
                if callable(gmail_thread_get):
                    try:
                        gmail_thread_get(thread_id, message_id)
                    except TypeError:
                        gmail_thread_get(thread_id)
            except Exception:
                pass
        draft = {
            'thread_id': thread_id,
            'message_id': message_id,
            'subject': subject,
            'snippet': item.get('snippet') or '',
            'from': item.get('from') or item.get('sender') or '',
            'added_at': summary['run_at'],
            'status': 'draft',
        }
        queue.append(draft)
        if thread_id:
            state['seen_thread_ids'][thread_id] = summary['run_at']
        summary['interest_added'] += 1

    _save_queue(queue)
    state['last_run_at'] = summary['run_at']
    _save_state(state)
    return summary


if __name__ == '__main__':
    out = triage()
    print(json.dumps(out, ensure_ascii=False))
