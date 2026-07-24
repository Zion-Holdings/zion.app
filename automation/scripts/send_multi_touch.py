#!/usr/bin/env python3
"""Send multi-touch proposals from the latest multi-touch report."""
import json, os, subprocess, sys
from pathlib import Path
from datetime import datetime, timezone

WORK = Path('/Users/miami2/zion.app/automation')
REPORT = WORK / 'reports' / 'multi-touch-outreach-report-latest.json'
HISTORY = Path('/Users/miami2/zion-support/zion-support.github.io') / 'lead-crm' / 'outreach_sent_history.jsonl'
LEDGER = Path('/Users/miami2/zion-support/zion-support.github.io') / 'lead-crm' / 'ceo_outreach_ledger.jsonl'
DISCOVERED = Path('/Users/miami2/zion-support/zion-support.github.io') / 'app' / 'data' / 'discovered_leads.json'


def _now():
    return datetime.now(timezone.utc)


def load_json(path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default


def save_json(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')


def append_jsonl(path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open('a', encoding='utf-8') as f:
        f.write(json.dumps(obj, ensure_ascii=False) + '\n')


def send_gog(to, subject, body):
    cmd = [
        'gog', 'gmail', 'send',
        '--to', to,
        '--subject', subject,
        '--body', body,
        '--account', 'kleber@ziontechgroup.com',
        '--no-input',
    ]
    p = subprocess.run(cmd, capture_output=True, text=True, check=False)
    if p.returncode == 0:
        return True, None
    last = (p.stderr or '').strip().splitlines()[-1] if (p.stderr or '').strip() else ''
    return False, last or f'gog failed rc={p.returncode}'


def main():
    dry = os.environ.get('DRY_RUN_OUTREACH', '0') == '1'
    report = load_json(REPORT, {})
    proposed = report.get('proposed', []) if isinstance(report, dict) else []
    if not proposed:
        print(json.dumps({'sent': 0, 'skipped': 0, 'errors': ['no_proposed']}, ensure_ascii=False))
        return 0

    discovered = load_json(DISCOVERED, [])
    if not isinstance(discovered, list):
        discovered = []
    idx = {str(item.get('email', '')).strip().lower(): i for i, item in enumerate(discovered) if isinstance(item, dict)}

    sent_count = 0
    skipped = []
    errors = []
    for item in proposed:
        email = str(item.get('email', '') or '').strip().lower()
        subject = str(item.get('subject', '') or 'AI implementation proposal')
        body = str(item.get('body', '') or '')
        touch = int(item.get('touch', 1) or 1)
        if not email or '@' not in email:
            skipped.append({'email': email, 'reason': 'missing_email'})
            continue
        if dry:
            append_jsonl(LEDGER if touch == 1 else HISTORY, {
                'ts': _now().isoformat(),
                'mode': 'dry_run',
                'to': email,
                'subject': subject,
                'status': 'sent_dry_run',
            })
            sent_count += 1
            continue
        ok, err = send_gog(email, subject, body)
        if not ok:
            errors.append({'email': email, 'error': err})
            skipped.append({'email': email, 'reason': 'error', 'error': err})
            continue
        sent_obj = {
            'ts': _now().isoformat(),
            'mode': 'live',
            'to': email,
            'subject': subject,
            'status': 'sent',
        }
        append_jsonl(HISTORY, sent_obj)
        append_jsonl(LEDGER, sent_obj)
        sent_count += 1
        if email in idx:
            discovered[idx[email]]['touches'] = int(discovered[idx[email]].get('touches', 0) or 0) + 1
            discovered[idx[email]]['lastContact'] = _now().isoformat()
            discovered[idx[email]]['status'] = 'Outreach Sent'
            discovered[idx[email]]['provider_status'] = 'sent'
    if not dry:
        save_json(DISCOVERED, discovered)

    payload = {
        'ts': _now().isoformat(),
        'source': 'multi_touch_sender',
        'proposed': len(proposed),
        'sent': sent_count,
        'skipped': len(skipped),
        'errors': errors,
        'skips': skipped[:100],
    }
    print(json.dumps(payload, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
