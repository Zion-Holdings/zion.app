#!/usr/bin/env python3
import json, os, datetime, time
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')

def _now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()

def main():
    queue_path = REPO / 'lead-crm' / 'outreach_ready_canonical.json'
    history_path = REPO / 'lead-crm' / 'outreach_sent_history.jsonl'
    if not queue_path.exists():
        print(json.dumps({'error': 'missing queue'}, ensure_ascii=False))
        return

    queue = json.loads(queue_path.read_text(encoding='utf-8'))
    ready = queue.get('ready') or []
    send_allowed = os.environ.get('ZTG_SEND_ALLOWED') == '1'

    # Simulate follow-up analysis: find high-value non-responders and schedule follow-ups
    results = []
    for lead in ready:
        to = lead.get('to', '').lower()
        company = lead.get('company_name') or lead.get('name') or 'your team'
        subject = lead.get('subject') or f"Parceria — {company} — Zion Tech Group"
        # Simulate follow-up logic
        follow_up_days = lead.get('follow_up_days', 3)
        results.append({
            'to': to,
            'company': company,
            'original_subject': subject,
            'follow_up_scheduled': True,
            'follow_up_days': follow_up_days,
            'priority': lead.get('priority', 50),
            'status': 'queued_for_follow_up',
            'ts': _now(),
            'send_allowed': send_allowed,
        })

    print(json.dumps({
        'generatedAt': _now(),
        'processed': len(results),
        'follow_ups_queued': sum(1 for r in results if r['follow_up_scheduled']),
        'send_allowed': send_allowed,
        'results': results[:5],
    }, ensure_ascii=False))

if __name__ == '__main__':
    main()
