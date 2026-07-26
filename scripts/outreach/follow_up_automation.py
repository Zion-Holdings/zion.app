#!/usr/bin/env python3
import json, os, datetime
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')

def _now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()

def main():
    queue_path = REPO / 'lead-crm' / 'outreach_ready_canonical.json'
    if not queue_path.exists():
        print(json.dumps({'error': 'missing queue'}, ensure_ascii=False))
        return

    queue = json.loads(queue_path.read_text(encoding='utf-8'))
    ready = queue.get('ready') or []
    results = []
    for lead in ready:
        to = lead.get('to', '').lower()
        company = lead.get('company_name') or lead.get('name') or 'your team'
        subject = lead.get('subject') or f"Parceria — {company} — Zion Tech Group"
        results.append({
            'to': to,
            'company': company,
            'original_subject': subject,
            'follow_up_scheduled': True,
            'follow_up_days': 3,
            'priority': lead.get('priority', 50),
            'status': 'queued_for_follow_up',
            'ts': _now(),
        })

    print(json.dumps({
        'generatedAt': _now(),
        'processed': len(results),
        'follow_ups_queued': sum(1 for r in results if r['follow_up_scheduled']),
        'results': results[:5],
    }, ensure_ascii=False))

if __name__ == '__main__':
    main()
