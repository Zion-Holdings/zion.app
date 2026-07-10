"""
Windows-friendly continuous outreach runner.
Runs outreach_worker_automation.py repeatedly with backoff and metrics.
Env:
  OUTREACH_DRY_RUN=1                # keep true unless you want live sends
  ZION_LLM_API_ENDPOINT/KEY/MODEL   # enables LLM tailoring when set
  HIGH_FREQ_INTERVAL_SECONDS=60     # base interval between runs
"""
import json
import os
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]
SCRIPT = BASE / 'scripts' / 'outreach' / 'outreach_worker_automation.py'
METRICS = BASE / 'outreach_monitor' / 'processed' / 'high_frequency_runner_metrics.jsonl'


def ts_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def run_once():
    env = os.environ.copy()
    interval = int(env.get('HIGH_FREQ_INTERVAL_SECONDS', '60'))
    proc = subprocess.run(
        [sys.executable, str(SCRIPT)],
        cwd=str(BASE),
        env=env,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
    )
    entry = {
        'ts': ts_now(),
        'returncode': proc.returncode,
        'interval_seconds': interval,
        'stdout': proc.stdout[-4000:],
    }
    try:
        with METRICS.open('a', encoding='utf-8') as f:
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    except Exception:
        pass
    return proc.returncode == 0


def main():
    backoff = 5
    max_backoff = 60
    print('HIGH_FREQ_RUNNER_START', ts_now())
    while True:
        ok = run_once()
        if ok:
            backoff = 5
        else:
            backoff = min(max_backoff, backoff * 2)
        time.sleep(max(1, int(os.environ.get('HIGH_FREQ_INTERVAL_SECONDS', '60'))))


if __name__ == '__main__':
    main()
