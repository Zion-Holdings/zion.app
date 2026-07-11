"""
Windows-friendly continuous outreach monitor.
Runs outreach_worker_automation.py repeatedly with bounded subprocess timeouts and metrics.
Env:
  OUTREACH_DRY_RUN=1                # keep true unless live sends are explicitly desired
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
WORKER_SCRIPT = BASE / 'scripts' / 'outreach' / 'outreach_worker_automation.py'
METRICS = BASE / 'outreach_monitor' / 'processed' / 'high_frequency_runner_metrics.jsonl'
HEARTBEAT = BASE / 'outreach_monitor' / 'processed' / 'runner_heartbeat.json'


def ts_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def write_heartbeat(status, last_ok=False, last_error=None):
    try:
        HEARTBEAT.write_text(
            json.dumps(
                {
                    'status': status,
                    'last_ok': last_ok,
                    'last_error': last_error,
                    'ts': ts_now(),
                },
                ensure_ascii=False,
            ),
            encoding='utf-8',
        )
    except Exception:
        pass


def run_once():
    interval = int(os.environ.get('HIGH_FREQ_INTERVAL_SECONDS', '60'))
    timeout = max(30, min(interval - 5, 120))
    env = os.environ.copy()
    try:
        proc = subprocess.run(
            [sys.executable, str(WORKER_SCRIPT)],
            cwd=str(BASE),
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            timeout=timeout,
        )
        entry = {
            'ts': ts_now(),
            'returncode': proc.returncode,
            'interval_seconds': interval,
            'stdout': (proc.stdout[-2000:] if proc.stdout else ''),
        }
        try:
            with METRICS.open('a', encoding='utf-8') as f:
                f.write(json.dumps(entry, ensure_ascii=False) + '\n')
        except Exception:
            pass
        write_heartbeat(status='running', last_ok=proc.returncode == 0, last_error=None if proc.returncode == 0 else 'nonzero_exit')
        return proc.returncode == 0

        entry = {'ts': ts_now(), 'returncode': -1, 'interval_seconds': interval, 'stdout': 'timeout'}
        try:
            with METRICS.open('a', encoding='utf-8') as f:
                f.write(json.dumps(entry, ensure_ascii=False) + '\n')
        except Exception:
            pass
        write_heartbeat(status='running', last_ok=False, last_error='timeout')
        return False
    except Exception as e:
        write_heartbeat(status='degraded', last_ok=False, last_error=repr(e))
        return False


def main():
    backoff = 5
    max_backoff = 60
    print('HIGH_FREQ_MONITOR_START', ts_now())
    write_heartbeat(status='starting', last_ok=False, last_error=None)
    while True:
        ok = run_once()
        backoff = 5 if ok else min(max_backoff, backoff * 2)
        time.sleep(max(1, int(os.environ.get('HIGH_FREQ_INTERVAL_SECONDS', '60'))))


if __name__ == '__main__':
    main()
