#!/usr/bin/env python3
import os, json, datetime, time
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')

def _now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()

def main():
    send_allowed = os.environ.get('ZTG_SEND_ALLOWED') == '1'
    queue_path = REPO / 'lead-crm' / 'outreach_ready_canonical.json'
    history_path = REPO / 'lead-crm' / 'outreach_sent_history.jsonl'
    last_run_path = REPO / 'lead-crm' / '_last_outreach_run.json'

    if not queue_path.exists():
        print(json.dumps({'error': 'missing queue', 'path': str(queue_path)}, ensure_ascii=False))
        return

    queue = json.loads(queue_path.read_text(encoding='utf-8'))
    ready = queue.get('ready') or []
    limit = int(os.environ.get('ZTG_WAVE_LIMIT', '3'))

    sent = 0
    skipped = 0
    results = []
    for lead in ready:
        if sent >= limit:
            break
        to = lead.get('to', '').lower()
        company = lead.get('company_name') or lead.get('name') or 'your team'
        subject = lead.get('subject') or f"Parceria — {company} — Zion Tech Group"
        results.append({
            'to': to,
            'company': company,
            'subject': subject,
            'status': 'would_send' if send_allowed else 'dry_run',
            'ts': _now(),
        })
        if send_allowed:
            history_path.parent.mkdir(parents=True, exist_ok=True)
            with history_path.open('a', encoding='utf-8') as f:
                f.write(json.dumps({
                    'to': to,
                    'company': company,
                    'subject': subject,
                    'sent_at': _now(),
                }, ensure_ascii=False) + '\n')
            sent += 1
        else:
            skipped += 1

    payload = {
        'generatedAt': _now(),
        'send_allowed': send_allowed,
        'limit': limit,
        'skipped_dry_run': skipped,
        'sent': sent,
        'results': results,
    }
    last_run_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(payload, ensure_ascii=False))

if __name__ == '__main__':
    main()
