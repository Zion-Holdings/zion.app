import sys, json, datetime
from pathlib import Path

LEAD_DIR = Path('/data/data/com.termux/files/home/zion-support.github.io/lead-crm')
LOG = LEAD_DIR / 'pipeline_log.json'
LLM_LOG = LEAD_DIR / 'llm_engagement_log.json'
BATCH = LEAD_DIR / 'outreach_batch_current.json'

def append(path: Path, obj: dict):
    data = []
    if path.exists():
        try:
            data = json.loads(path.read_text(encoding='utf-8'))
            if not isinstance(data, list):
                data = [data]
        except Exception:
            data = []
    data.append(obj)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')

def run():
    ts = datetime.datetime.now(datetime.timezone.utc).isoformat()
    proxy = {
        'ts': ts,
        'event': 'llm_engagement_snapshot',
        'batch': str(BATCH),
        'tailored_subjects': 0,
        'generic_subjects': 0,
        'estimated_opens_proxy': 0,
        'recommendation': 'review_send_times_and_subjects'
    }
    if BATCH.exists():
        try:
            payload = json.loads(BATCH.read_text())
            rows = payload.get('batch') or []
            tailored = 0
            generic = 0
            for r in rows[:20]:
                subj = (r.get('subject') or '')
                if 'Parceria em' in subj:
                    tailored += 1
                else:
                    generic += 1
            proxy['tailored_subjects'] = tailored
            proxy['generic_subjects'] = generic
            proxy['estimated_opens_proxy'] = tailored * 3
        except Exception:
            pass
    append(LLM_LOG, proxy)
    append(LOG, {'ts': ts, 'event': 'llm_engagement_snapshot', **proxy})
    print(json.dumps(proxy, ensure_ascii=False))

if __name__ == '__main__':
    run()
