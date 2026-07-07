import sys, json, time
from pathlib import Path

sys.path.insert(0, r'C:/Users/Zion/AppData/Local/hermes/skills/productivity/google-workspace/scripts')
from google_api import build_service
from googleapiclient.errors import HttpError

BASE_DIR = Path('/c/Users/Zion/tmp/zion-clone-test')
MONITOR_DIR = BASE_DIR / 'outreach_monitor' / 'metrics'
MONITOR_DIR.mkdir(parents=True, exist_ok=True)
REPORT_FILE = MONITOR_DIR / 'monitor_report.jsonl'


def append_report(entry: dict):
    entry.setdefault('ts', int(time.time()))
    with REPORT_FILE.open('a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')


def main():
    report = {
        'event': 'monitor_tick',
        'labels_checked': [],
        'sent_count': 0,
        'hot_followup_threads': 0,
        'hot_followup_sent_count': 0,
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

        # Quick sent probe
        try:
            sent = service.users().messages().list(userId='me', q='in:sent', maxResults=10).execute()
            report['recent_sent_count'] = len(sent.get('messages', []))
        except Exception as e:
            report['errors'].append({'sent_probe': repr(e)})

    except Exception as e:
        report['errors'].append({'global': repr(e)})

    append_report(report)
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
