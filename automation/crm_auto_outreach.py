#!/usr/bin/env python3
"""Autonomous CRM lead outreach driver.

Reads Zion's lead CRM, deduplicates, drafts improved messages, sends live,
and writes a local report for monitoring.
"""
import json, os, sys, time
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('/Users/miami2/zion-support/zion-support.github.io')
WORK = Path('/Users/miami2/zion.app/automation')
NOW = datetime.now(timezone.utc).isoformat()

DISCOVERED_PATH = REPO / 'app' / 'data' / 'discovered_leads.json'
SENT_HISTORY = REPO / 'lead-crm' / 'outreach_sent_history.jsonl'
LEDGER = REPO / 'lead-crm' / 'ceo_outreach_ledger.jsonl'
REPORT_DIR = WORK / 'reports'
REPORT = REPORT_DIR / 'crm-auto-outreach-report.json'

RUN_TAG = 'crm_auto_outreach_loop'

os.environ.setdefault('GOG_KEYRING_BACKEND', 'file')


def load_leads() -> list:
    try:
        data = json.loads(DISCOVERED_PATH.read_text(encoding='utf-8'))
        if isinstance(data, list):
            return data
        return []
    except Exception:
        return []


def _norm(text: str) -> str:
    return (text or '').strip().lower()


def load_sent_set() -> set:
    sent = set()
    for p in [SENT_HISTORY, LEDGER]:
        if not p.exists():
            continue
        try:
            for line in p.read_text(encoding='utf-8', errors='ignore').splitlines():
                if not line.strip():
                    continue
                try:
                    obj = json.loads(line)
                except Exception:
                    continue
                to = _norm(obj.get('to', '') if isinstance(obj, dict) else '')
                subject = _norm(obj.get('subject', '') if isinstance(obj, dict) else '')
                tid = _norm(str(obj.get('thread_id', '') if isinstance(obj, dict) else ''))
                mid = _norm(str(obj.get('message_id', '') if isinstance(obj, dict) else ''))
                status = _norm(str(obj.get('status', '') if isinstance(obj, dict) else ''))
                source = _norm(str(obj.get('source', '') if isinstance(obj, dict) else ''))
                if to:
                    sent.add(to)
                if to and subject:
                    sent.add((to, subject))
                if tid and status in {'', 'sent', 'duplicate', 'excluded', 'skipped'}:
                    sent.add(('__thread__', tid))
                if mid:
                    sent.add(('__message__', mid))
                if RUN_TAG in source:
                    sent.add(('__run__', RUN_TAG, to))
        except Exception:
            pass
    return sent


def improve_subject(company, industry):
    base = 'AI implementation proposal'
    suffix = 'for {}'.format(company) if company else 'for your team'
    return '{} — {}'.format(base, suffix)


def build_body(lead):
    company = lead.get('company') or 'your team'
    name = lead.get('name') or ''
    website = lead.get('website') or 'https://ziontechgroup.com'
    industry = lead.get('industry') or 'IT/AI solutions'
    pts = lead.get('painPoints') or []
    bullets = '\n'.join(['- {}'.format(x) for x in pts[:3]]) if pts else '- AI roadmap\n- Automation\n- Cost optimization'
    greeting = 'Hi,' if not name else 'Hi {},'.format(name.split()[0])
    return """{}
Thank you for the opportunity to connect with Zion Tech Group.

I’ve reviewed the {} space and see concrete overlap with your current priorities:
{}

If useful, I can prepare a short proposal covering:
- Practical AI adoption roadmap
- Automation-first implementation
- ROI-first milestones

You can also explore our AI services here: https://ziontechgroup.com
Or book a short call: https://calendly.com/kleber-ziontechgroup

Best,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
https://ziontechgroup.com
""".format(
        greeting,
        industry.title(),
        bullets
    ).strip()


def send_via_batch(to_addr, subject, body, company='', thread_id='', message_id=''):
    sys.path.insert(0, str(REPO))
    sys.path.insert(0, str(REPO / 'lead-crm'))
    try:
        from lead_crm.send_outreach_batch import send_mail  # noqa: E402
        return send_mail(to_addr, subject, body, html=body, thread_id=thread_id, message_id=message_id)
    except Exception as e:
        return None, 'import_error: {}'.format(e)


def append_jsonl(path, record):
    try:
        with path.open('a', encoding='utf-8') as f:
            f.write(json.dumps(record, ensure_ascii=False) + '\n')
    except Exception:
        pass


def save_report(payload):
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


def main():
    leads = load_leads()
    sent = load_sent_set()
    proposed = []
    skipped = []
    sent_count = 0
    errors = []

    for lead in leads:
        email = _norm(lead.get('email', ''))
        if not email:
            skipped.append({'reason': 'missing_email', 'lead': lead.get('company')})
            continue
        if email in sent or (email, _norm(lead.get('company', ''))) in sent:
            skipped.append({'reason': 'dedup', 'email': email})
            continue

        status = str(lead.get('status', '')).lower()
        if status in {'sent', 'not interested', 'unsubscribed'}:
            skipped.append({'reason': 'status_' + status, 'email': email})
            continue

        subject = improve_subject(lead.get('company'), lead.get('industry'))
        if (email, _norm(subject)) in sent:
            skipped.append({'reason': 'subject_dedup', 'email': email, 'subject': subject})
            continue

        body = build_body(lead)

        try:
            mid, tid_or_err = send_via_batch(
                email,
                subject,
                body,
                lead.get('company', ''),
                lead.get('thread_id', ''),
                lead.get('message_id', ''),
            )
        except Exception as e:  # noqa: BLE001
            mid, tid_or_err = None, str(e)

        event = {
            'ts': NOW,
            'source': RUN_TAG,
            'email': email,
            'subject': subject,
            'company': lead.get('company'),
            'status': 'sent' if mid else 'failed',
            'result': str(tid_or_err),
        }
        append_jsonl(LEDGER, event)
        append_jsonl(SENT_HISTORY, {
            'ts': NOW,
            'to': email,
            'subject': subject,
            'message_id': mid,
            'thread_id': tid_or_err if mid else '',
            'provider': 'lead-crm-batch',
            'source': RUN_TAG,
            'status': 'sent' if mid else 'failed',
        })

        if mid:
            sent_count += 1
            proposed.append({'email': email, 'subject': subject, 'message_id': mid, 'thread_id': tid_or_err})
        else:
            errors.append({'email': email, 'error': str(tid_or_err)})

    payload = {
        'ts': NOW,
        'source': RUN_TAG,
        'leads_processed': len(leads),
        'skipped': len(skipped),
        'sent': sent_count,
        'errors': len(errors),
        'proposed': proposed,
        'skips': skipped[:20],
        'error_samples': errors[:20],
    }
    save_report(payload)
    print(json.dumps(payload, ensure_ascii=False))


if __name__ == '__main__':
    main()
