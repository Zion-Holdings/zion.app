"""Windows-native in-process outreach runner.

Executes the worker logic directly to avoid subprocess hangs on Windows.
Writes:
  outreach_monitor/processed/runner_heartbeat.json
  outreach_monitor/processed/high_frequency_runner_metrics.jsonl
  outreach_monitor/processed/runner_counters.json
  outreach_monitor/processed/runner_continuous_improvement.json
  outreach_monitor/processed/runner_run_readme.txt
"""
import json
import os
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(__file__).resolve().parent
w = BASE / 'outreach_worker_automation.py'
METRICS = BASE.parent / 'outreach_monitor' / 'processed' / 'high_frequency_runner_metrics.jsonl'
HEARTBEAT = BASE.parent / 'outreach_monitor' / 'processed' / 'runner_heartbeat.json'
COUNTERS = BASE.parent / 'outreach_monitor' / 'processed' / 'runner_counters.json'
CONTINUOUS_IMPROVEMENT = BASE.parent / 'outreach_monitor' / 'processed' / 'runner_continuous_improvement.json'
README = BASE.parent / 'outreach_monitor' / 'processed' / 'runner_run_readme.txt'


def ts_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def write_heartbeat(status, last_ok=False, last_error=None, instance='local'):
    try:
        payload = {
            'status': status,
            'last_ok': last_ok,
            'last_error': last_error,
            'ts': ts_now(),
            'instance': instance,
            'pid': os.getpid(),
            'worker': str(w),
            'mode': 'in_process',
        }
        HEARTBEAT.write_text(json.dumps(payload, ensure_ascii=False), encoding='utf-8')
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
    if COUNTERS.exists():
        try:
            return json.loads(COUNTERS.read_text(encoding='utf-8'))
        except Exception:
            pass
    return {}


def save_counters(counters):
    try:
        COUNTERS.write_text(json.dumps(counters, ensure_ascii=False, indent=2), encoding='utf-8')
    except Exception:
        pass


def _update_readme():
    try:
        README.write_text(
            '\n'.join([
                'continuous-runner=run_high_frequency_forever.py',
                'mode=in_process',
                'heartbeat=' + str(HEARTBEAT),
                'metrics=' + str(METRICS),
                'counters=' + str(COUNTERS),
                'continuous_improvement=' + str(CONTINUOUS_IMPROVEMENT),
                'last_update_utc=' + ts_now(),
            ]),
            encoding='utf-8',
        )
    except Exception:
        pass


def _import_worker():
    sys.path.insert(0, str(BASE))
    import importlib.util
    spec = importlib.util.spec_from_file_location('outreach_worker_automation', str(w))
    mod = importlib.util.module_from_spec(spec)
    try:
        spec.loader.exec_module(mod)
    except Exception as e:
        raise RuntimeError(f'worker_import_failed={e!r}')
    return mod


def main():
    BASE.mkdir(parents=True, exist_ok=True)
    METRICS.parent.mkdir(parents=True, exist_ok=True)
    COUNTERS.parent.mkdir(parents=True, exist_ok=True)
    CONTINUOUS_IMPROVEMENT.parent.mkdir(parents=True, exist_ok=True)
    README.parent.mkdir(parents=True, exist_ok=True)

    write_heartbeat(status='starting', instance='in_process')
    target_interval = max(15, min(90, int(os.environ.get('HIGH_FREQ_INTERVAL_SECONDS', '60'))))
    current_interval = target_interval

    worker = _import_worker()
    backoff = 5
    max_backoff = 60
    print('HIGH_FREQ_MONITOR_START pid=' + str(os.getpid()) + ' ts=' + ts_now(), flush=True)

    while True:
        try:
            t0 = time.time()
            try:
                out = worker.run_high_frequency_outreach()
            except Exception as e:
                out = {}
            stdout = json.dumps(out, ensure_ascii=False, default=str) if not isinstance(out, str) else out
            contacts = int((out or {}).get('adds', 0))
            sent = int((out or {}).get('sent', 0))
            dead_threads = int((out or {}).get('dead_threads', 0)) if isinstance((out or {}).get('dead_threads', 0), int) else len((out or {}).get('dead') or [])
            auth_error = None
            try:
                auth_error = getattr(worker, 'GMAIL_AUTH_ERROR', None)
            except Exception:
                pass

            summary = {
                'ts': ts_now(),
                'returncode': 0,
                'interval_seconds': current_interval,
                'target_interval_seconds': target_interval,
                'stdout_tail': stdout[-4000:],
                'contacts': contacts,
                'sent': sent,
                'auth_error': auth_error,
                'dead_thread': dead_threads,
                'live_send': bool(not auth_error and sent > 0),
                'mode': 'in_process',
            }
            append_metrics(summary)
            append_continuous_improvement({
                'ts': ts_now(),
                'contacts': contacts,
                'sent': sent,
                'dead_thread': dead_threads,
                'auth_error': auth_error,
                'interval_seconds': current_interval,
                'live_send': bool(not auth_error and sent > 0),
            })
            write_heartbeat(status='running', last_ok=True, instance='in_process')

            counters = load_counters()
            counters['total_runs'] = int(counters.get('total_runs', 0)) + 1
            counters['successful_runs'] = int(counters.get('successful_runs', 0)) + 1
            counters['contacts_found'] = int(counters.get('contacts_found', 0)) + contacts
            counters['live_sent'] = int(counters.get('live_sent', 0)) + sent
            counters['dead_thread_contacts'] = int(counters.get('dead_thread_contacts', 0)) + dead_threads
            counters['last_interval_seconds'] = current_interval
            if auth_error:
                counters['auth_error_runs'] = int(counters.get('auth_error_runs', 0)) + 1
            save_counters(counters)

            if auth_error:
                current_interval = max(15, int(current_interval * 0.6))
            elif sent > 0:
                current_interval = max(15, int(current_interval * 0.7))
            elif contacts > 0:
                current_interval = max(15, int(current_interval * 0.85))
            else:
                current_interval = min(target_interval * 2, 120)

            elapsed = time.time() - t0
            sleep_seconds = max(15, current_interval - elapsed)
            _update_readme()
            time.sleep(min(sleep_seconds, 180))
        except KeyboardInterrupt:
            write_heartbeat(status='stopped', last_ok=False, last_error='keyboard_interrupt', instance='in_process')
            raise SystemExit(0)
        except Exception as e:
            write_heartbeat(status='degraded', last_ok=False, last_error=repr(e), instance='in_process')
            counters = load_counters()
            counters['total_runs'] = int(counters.get('total_runs', 0)) + 1
            counters['error_runs'] = int(counters.get('error_runs', 0)) + 1
            save_counters(counters)
            sleep_seconds = min(max_backoff, backoff * 2)
            backoff = min(max_backoff, sleep_seconds)
            time.sleep(min(max(15, sleep_seconds), 180))


if __name__ == '__main__':
    main()
