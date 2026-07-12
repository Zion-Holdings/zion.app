"""
Windows-friendly continuous outreach monitor.

Runs outreach_worker_automation.py repeatedly with adaptive backoff,
continuous improvement metrics, and bounded history.

Env:
  OUTREACH_DRY_RUN=1                # keep true unless live sends are explicitly desired
  ZION_LLM_API_ENDPOINT/KEY/MODEL   # enables LLM tailoring when set
  HIGH_FREQ_INTERVAL_SECONDS=60     # base/target interval between runs
"""
import json
import os
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]
WORKER_SCRIPT = Path(__file__).resolve().parent / 'outreach_worker_automation.py'
METRICS = BASE / 'outreach_monitor' / 'processed' / 'high_frequency_runner_metrics.jsonl'
HEARTBEAT = BASE / 'outreach_monitor' / 'processed' / 'runner_heartbeat.json'
COUNTERS = BASE / 'outreach_monitor' / 'processed' / 'runner_counters.json'
CONTINUOUS_IMPROVEMENT = BASE / 'outreach_monitor' / 'processed' / 'runner_continuous_improvement.json'


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


def append_metrics(entry):
    try:
        with METRICS.open('a', encoding='utf-8') as f:
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    except Exception:
        pass


def append_continuous_improvement(summary):
    try:
        history = []
        if CONTINUOUS_IMPROVEMENT.exists():
            try:
                history = json.loads(CONTINUOUS_IMPROVEMENT.read_text(encoding='utf-8'))
            except Exception:
                history = []
        history.append(summary)
        if len(history) > 200:
            history = history[-200:]
        CONTINUOUS_IMPROVEMENT.write_text(
            json.dumps(history, ensure_ascii=False, indent=2), encoding='utf-8'
        )
    except Exception:
        pass


def load_counters():
    try:
        if COUNTERS.exists():
            return json.loads(COUNTERS.read_text(encoding='utf-8'))
    except Exception:
        pass
    return {}


def save_counters(counters):
    try:
        COUNTERS.write_text(json.dumps(counters, ensure_ascii=False, indent=2), encoding='utf-8')
    except Exception:
        pass


def _detect_stdio_contacts(stdout: str):
    contacts = 0
    sent = 0
    auth_error = None
    dead_thread = 0
    try:
        for line in stdout.splitlines():
            if line.startswith('TRACE_CONTACTS') and '=' in line:
                contacts = int(line.split('=', 1)[1].strip())
            if line.startswith('CONTACT_START'):
                pass
            if line.startswith('CONTACT_END live_sent'):
                sent += 1
            if line.startswith('AUTH_FAIL'):
                auth_error = line.split(' ', 1)[1] if ' ' in line else 'unknown'
            if line.startswith('CONTACT_END dead_thread'):
                dead_thread += 1
    except Exception:
        pass
    return contacts, sent, auth_error, dead_thread


def run_once(current_interval):
    raw_interval = int(os.environ.get('HIGH_FREQ_INTERVAL_SECONDS', '60'))
    target_interval = max(15, min(90, raw_interval))
    timeout = max(90, current_interval + 30)
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
        stdout = proc.stdout or ''
        contacts, sent, auth_error, dead_thread = _detect_stdio_contacts(stdout)
        summary = {
            'ts': ts_now(),
            'returncode': proc.returncode,
            'interval_seconds': current_interval,
            'target_interval_seconds': target_interval,
            'stdout_tail': stdout[-4000:],
            'contacts': contacts,
            'sent': sent,
            'auth_error': auth_error,
            'dead_thread': dead_thread,
        }
        append_metrics(summary)
        append_continuous_improvement({
            'ts': ts_now(),
            'contacts': contacts,
            'sent': sent,
            'dead_thread': dead_thread,
            'auth_error': auth_error,
            'interval_seconds': current_interval,
        })
        write_heartbeat(status='running', last_ok=proc.returncode == 0, last_error=None if proc.returncode == 0 else 'nonzero_exit')
        counters = load_counters()
        counters['total_runs'] = int(counters.get('total_runs', 0)) + 1
        counters['successful_runs'] = int(counters.get('successful_runs', 0)) + (1 if proc.returncode == 0 else 0)
        counters['auth_error_runs'] = int(counters.get('auth_error_runs', 0)) + (1 if auth_error else 0)
        counters['contacts_found'] = int(counters.get('contacts_found', 0)) + contacts
        counters['live_sent'] = int(counters.get('live_sent', 0)) + sent
        counters['dead_thread_contacts'] = int(counters.get('dead_thread_contacts', 0)) + dead_thread
        counters['last_interval_seconds'] = current_interval
        save_counters(counters)
        next_interval = target_interval
        if auth_error:
            next_interval = min(target_interval * 3, 180)
        elif contacts > 0:
            next_interval = max(15, int(current_interval * 0.8))
        else:
            next_interval = min(target_interval * 2, 120)
        return True, next_interval
    except subprocess.TimeoutExpired:
        summary = {'ts': ts_now(), 'returncode': -1, 'interval_seconds': current_interval, 'stdout_tail': 'timeout'}
        append_metrics(summary)
        append_continuous_improvement({
            'ts': ts_now(),
            'contacts': 0,
            'sent': 0,
            'dead_thread': 0,
            'auth_error': 'timeout',
            'interval_seconds': current_interval,
        })
        write_heartbeat(status='running', last_ok=False, last_error='timeout')
        counters = load_counters()
        counters['total_runs'] = int(counters.get('total_runs', 0)) + 1
        counters['timeout_runs'] = int(counters.get('timeout_runs', 0)) + 1
        save_counters(counters)
        return False, min(current_interval + 5, 180)
    except Exception as e:
        write_heartbeat(status='degraded', last_ok=False, last_error=repr(e))
        counters = load_counters()
        counters['total_runs'] = int(counters.get('total_runs', 0)) + 1
        counters['error_runs'] = int(counters.get('error_runs', 0)) + 1
        save_counters(counters)
        return False, min(current_interval + 10, 180)


def main():
    backoff = 5
    max_backoff = 60
    current_interval = max(15, int(os.environ.get('HIGH_FREQ_INTERVAL_SECONDS', '60')))
    print('HIGH_FREQ_MONITOR_START', ts_now())
    write_heartbeat(status='starting', last_ok=False, last_error=None)
    while True:
        ok, current_interval = run_once(current_interval)
        sleep_seconds = max(15, current_interval)
        time.sleep(sleep_seconds)


if __name__ == '__main__':
    main()
