import json
from pathlib import Path
from collections import Counter

BASE_DIR = Path(__file__).resolve().parent.parent.parent
DRY_RUN_REPORT = BASE_DIR / 'outreach_monitor' / 'processed' / 'dry_run_report.jsonl'

def main():
    if not DRY_RUN_REPORT.exists():
        print(json.dumps({'dry_runs': 0, 'tailored': 0, 'dead_threads': 0, 'by_lang': {}, 'blocker': None}, indent=2))
        return
    total = 0
    tailored = 0
    dead = 0
    lang = Counter()
    for line in DRY_RUN_REPORT.open('r', encoding='utf-8'):
        try:
            obj = json.loads(line)
        except Exception:
            continue
        if obj.get('mode') != 'dry_run':
            continue
        total += 1
        if obj.get('llm_tailored'):
            tailored += 1
        if not obj.get('thread_id') or not obj.get('msg_id'):
            dead += 1
        l = obj.get('lang') or 'unknown'
        lang[l] += 1
    print(json.dumps({
        'dry_runs': total,
        'tailored': tailored,
        'coverage': round((tailored / total), 4) if total else 0.0,
        'dead_threads': dead,
        'by_lang': dict(lang),
        'blocker': None,
    }, indent=2))

if __name__ == '__main__':
    main()
