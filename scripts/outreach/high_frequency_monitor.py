import sys, os, json, time, re
from pathlib import Path

sys.path.insert(0, r'C:/Users/Zion/AppData/Local/hermes/skills/productivity/google-workspace/scripts')
from google_api import build_service
from googleapiclient.errors import HttpError

BASE_DIR = Path('/c/Users/Zion/tmp/zion-clone-test2')
MONITOR_DIR = BASE_DIR / 'outreach_monitor' / 'metrics'
MONITOR_DIR.mkdir(parents=True, exist_ok=True)
REPORT_FILE = MONITOR_DIR / 'monitor_report.jsonl'
DEDUP_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'global_dedup_state.json'
LEDGER_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'sent_ledger.jsonl'


def append_report(entry: dict):
    entry.setdefault('ts', int(time.time()))
    with REPORT_FILE.open('a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')


def load_json_safe(path: Path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default


def main():
    report = {
        'event': 'high_frequency_monitor_tick',
        'labels_checked': [],
        'recent_sent_count': 0,
        'hot_followup_threads': 0,
        'hot_followup_sent_count': 0,
        'dedup_entries': 0,
        'ledger_entries': 0,
        'new_inbox_interest_count': 0,
        'new_inbox_examples': [],
        'llm_tailoring_coverage': {
            'enabled': False,
            'contact_tailor_count': 0,
            'coverage_ratio': 0.0,
            'blocker': None,
        },
        'errors': [],
    }

    try:
        service = build_service('gmail', 'v1')
        label_map = {}
        for lab in service.users().labels().list(userId='me').execute().get('labels', []):
            label_map[lab['name']] = lab['id']

        check_targets = [
            ('!!!!HOT FOLLOW-UP', 'Label_4207916705207178948'),
            ('!!!hot-followup-sent', 'Label_947'),
            ('!!!hot-follow-up', 'Label_946'),
        ]
        for name, lid in check_targets:
            report['labels_checked'].append({'name': name, 'id': lid})
            try:
                res = service.users().messages().list(userId='me', labelIds=[lid], maxResults=20).execute()
                count = len(res.get('messages', []))
                if 'HOT' in name and 'SENT' not in name:
                    report['hot_followup_threads'] = count
                if 'SENT' in name:
                    report['hot_followup_sent_count'] = count
            except Exception as e:
                report['errors'].append({'label': name, 'error': repr(e)})

        try:
            sent = service.users().messages().list(userId='me', q='in:sent', maxResults=10).execute()
            report['recent_sent_count'] = len(sent.get('messages', []))
        except Exception as e:
            report['errors'].append({'sent_probe': repr(e)})

        try:
            interest_q = (
                'in:inbox -category:promotions -in:spam -in:trash '
                'newer_than:7d "interested" OR "partnership" OR "services" OR "looking for" OR "opportunity" OR "collaboration"'
            )
            inbox = service.users().messages().list(userId='me', q=interest_q, maxResults=20).execute()
            msgs = inbox.get('messages', [])
            report['new_inbox_interest_count'] = len(msgs)
            examples = []
            seen = set()
            for m in msgs:
                if m['id'] in seen:
                    continue
                seen.add(m['id'])
                try:
                    meta = service.users().messages().get(
                        userId='me', id=m['id'], format='metadata', metadataHeaders=['Subject', 'From', 'Date']
                    ).execute()
                    hdrs = {x['name']: x['value'] for x in meta.get('payload', {}).get('headers', [])}
                    thread_id = meta.get('threadId')
                    thread_alive = False
                    if thread_id:
                        try:
                            service.users().threads().get(userId='me', id=thread_id).execute()
                            thread_alive = True
                        except Exception:
                            thread_alive = False
                    examples.append({
                        'id': meta['id'],
                        'thread_id': thread_id,
                        'thread_alive': thread_alive,
                        'from': hdrs.get('From'),
                        'subject': hdrs.get('Subject'),
                        'date': hdrs.get('Date'),
                        'snippet': meta.get('snippet', '')[:180],
                    })
                except Exception:
                    pass
            report['new_inbox_examples'] = examples[:5]
        except Exception as e:
            report['errors'].append({'inbox_probe': repr(e)})
    except Exception as e:
        report['errors'].append({'global': repr(e)})

    try:
        dedup = load_json_safe(DEDUP_FILE, {})
        report['dedup_entries'] = len(dedup) if isinstance(dedup, dict) else 0
        if LEDGER_FILE.exists():
            report['ledger_entries'] = sum(1 for _ in LEDGER_FILE.open('r', encoding='utf-8'))
    except Exception as e:
        report['errors'].append({'local_state': repr(e)})

    try:
        llm_blocker = None
        if not (os.getenv('ZION_LLM_API_ENDPOINT') or os.getenv('LLM_API_ENDPOINT')):
            llm_blocker = 'missing_endpoint'
        elif not (os.getenv('ZION_LLM_API_KEY') or os.getenv('LLM_API_KEY')):
            llm_blocker = 'missing_key'
        elif not (os.getenv('ZION_LLM_MODEL') or os.getenv('LLM_MODEL')):
            llm_blocker = 'missing_model'
        dry_run_file = BASE_DIR / 'outreach_monitor' / 'processed' / 'dry_run_report.jsonl'
        tailor_count = 0
        total_dry = 0
        if dry_run_file.exists():
            for line in dry_run_file.open('r', encoding='utf-8'):
                try:
                    obj = json.loads(line)
                except Exception:
                    continue
                if obj.get('mode') != 'dry_run':
                    continue
                total_dry += 1
                if obj.get('llm_tailored'):
                    tailor_count += 1
        coverage = (tailor_count / total_dry) if total_dry else 0.0
        report['llm_tailoring_coverage'] = {
            'enabled': llm_blocker is None,
            'contact_tailor_count': tailor_count,
            'coverage_ratio': round(coverage, 4),
            'blocker': llm_blocker,
        }
    except Exception as e:
        report['errors'].append({'llm_coverage': repr(e)})

    append_report(report)
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
