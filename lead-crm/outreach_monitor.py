#!/usr/bin/env python3
import sys, json, datetime
from pathlib import Path
REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
sys.path.insert(0, str(REPO / 'commands'))
from google_workspace import gmail_search, gmail_get

SENT_LIMIT = 200
OUTREACH_KEYWORDS = [
    'Parceria Zion Tech Group',
    'Voice AI',
    'partnership',
    'oportunidade',
    'parceria',
    'it services',
    'quick it win',
    'follow-up',
]


def _now():
    return datetime.datetime.now(datetime.timezone.utc)


def _load_pipeline_log_summary():
    log_path = REPO / 'lead-crm' / 'pipeline_log.json'
    summary = {
        'loop_cooldown': 0,
        'pipeline_tick': 0,
        'send_skipped': 0,
        'gmail_error_classified': 0,
        'miningTicksLast100': 0,
        'newLeadsFromMiningLast100': 0,
        'rateLimitEventsLast100': 0,
        'successfulTicksLast20': 0,
        'recommendedSource': 'unknown',
    }
    try:
        if not log_path.exists():
            return summary
        data = json.loads(log_path.read_text(encoding='utf-8'))
        if isinstance(data, dict):
            events = data.get('recentEvents') or {}
            summary.update({
                'loop_cooldown': events.get('loop_cooldown', summary['loop_cooldown']),
                'pipeline_tick': events.get('pipeline_tick', summary['pipeline_tick']),
                'send_skipped': events.get('send_skipped', summary['send_skipped']),
                'gmail_error_classified': events.get('gmail_error_classified', summary['gmail_error_classified']),
                'miningTicksLast100': events.get('miningTicksLast100', summary['miningTicksLast100']),
                'newLeadsFromMiningLast100': events.get('newLeadsFromMiningLast100', summary['newLeadsFromMiningLast100']),
                'rateLimitEventsLast100': events.get('rateLimitEventsLast100', summary['rateLimitEventsLast100']),
                'successfulTicksLast20': events.get('successfulTicksLast20', summary['successfulTicksLast20']),
                'recommendedSource': events.get('recommendedSource', summary['recommendedSource']),
            })
    except Exception:
        pass
    return summary


def main():
    messages = []
    items = []
    outreach_count = 0
    sent_ok = False
    try:
        messages = gmail_search('in:sent', limit=SENT_LIMIT, all_folders=True)
        sent_ok = True
    except Exception as e:
        items.append({'search_error': str(e)})

    for m in messages:
        try:
            full = gmail_get(m['id'])
            headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
            subject = headers.get('Subject', '')
            to = headers.get('To', '')
            ts = full.get('internalDate')
            dt = (datetime.datetime.fromtimestamp(int(ts) / 1000, tz=datetime.timezone.utc).isoformat()
                  if ts else None)
            matched = any(k.lower() in subject.lower() for k in OUTREACH_KEYWORDS)
            outreach_count += int(matched)
            items.append({
                'id': m['id'],
                'thread_id': m.get('threadId'),
                'subject': subject,
                'to': to,
                'matched': matched,
                'datetime': dt,
            })
        except Exception as e:
            items.append({'id': m['id'], 'error': str(e)})

    pipeline = _load_pipeline_log_summary()
    summary = {
        'timestamp': _now().isoformat(),
        'total_sent_found': len(messages),
        'outreach_matches': outreach_count,
        'items': items[:80],
        'note': 'Outreach monitor counts recent matched subjects from sent mail.',
        'gmail_sent_search_ok': sent_ok,
        'pipeline': pipeline,
    }
    out = REPO / 'lead-crm' / 'outreach_monitor_latest.json'
    out.write_text(json.dumps(summary, ensure_ascii=False, indent=2))
    print(json.dumps({'outreach_matches': outreach_count, 'total': len(messages), 'file': str(out), 'pipeline': pipeline}, ensure_ascii=False))


if __name__ == '__main__':
    main()
