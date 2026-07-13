"""Safe offline dry-run for outreach_worker_automation logic.

Runs discovery dedup paths without requiring live Gmail auth, so CI and local
validation do not fail with AUTH_FAIL when the token is absent.
"""
import json, os, sys
from pathlib import Path
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

REPO = Path(__file__).resolve().parents[1]
BASE_DIR = REPO

LEDGER_FILE = REPO / 'outreach_monitor' / 'processed' / 'sent_ledger.jsonl'
HOT_FOLLOWUP_REPLY_LEDGER = REPO / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl'
STATE_FILE = REPO / 'outreach_monitor' / 'processed' / 'global_dedup_state.json'
EXCLUSION_FILE = REPO / 'lead-crm' / 'exclusion-list.json'


def _load_excluded() -> set:
    try:
        if not EXCLUSION_FILE.exists():
            return set()
        data = json.loads(EXCLUSION_FILE.read_text(encoding='utf-8'))
        return {item.get('email', '').lower() for item in data.get('addresses', []) if item.get('email')}
    except Exception:
        return set()


def _load_lines(path: Path):
    if not path.exists():
        return []
    out = []
    for line in path.read_text(encoding='utf-8', errors='ignore').splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            out.append(json.loads(line))
        except Exception:
            pass
    return out


def discovery_summary():
    excluded = _load_excluded()
    ledger = _load_lines(LEDGER_FILE)
    hot = _load_lines(HOT_FOLLOWUP_REPLY_LEDGER)
    state = _load_lines(STATE_FILE)
    return {
        'ts': datetime.now(timezone.utc).isoformat(),
        'excluded_count': len(excluded),
        'ledger_count': len(ledger),
        'hot_followup_reply_ledger_count': len(hot),
        'dedup_state_count': len(state),
        'token_path': os.environ.get('GOOGLE_GMAIL_TOKEN_PATH', 'outreach_monitor/processed/gmail_token.json'),
        'token_exists': Path(os.environ.get('GOOGLE_GMAIL_TOKEN_PATH', 'outreach_monitor/processed/gmail_token.json')).exists(),
    }


def main():
    summary = discovery_summary()
    print(json.dumps(summary, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    sys.exit(main())
