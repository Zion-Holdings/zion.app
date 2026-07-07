#!/usr/bin/env python3
"""
Zion Unified Pipeline Runner - single process for mining, batching, sending, and monitoring.

Loop roughly every 60s:
1. build next batch from canonical ready file if no outstanding batch exists in lead-crm/
2. send current batch using sender
3. append pipeline tick + message IDs to lead-crm/pipeline_log.json
"""
import sys, json, time, datetime, importlib.util, collections
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
if not REPO.exists():
    REPO = Path('/Users/miami2/zion.app')
LEAD_DIR = REPO / 'lead-crm'
SENDER_PATH = LEAD_DIR / 'send_outreach_batch.py'
CANONICAL_READY = LEAD_DIR / 'outreach_ready_canonical.json'
PIPELINE_LOG = LEAD_DIR / 'pipeline_log.json'
SENT_CACHE = LEAD_DIR / 'pipeline_sent_cache.txt'
CURRENT_BATCH = LEAD_DIR / 'outreach_batch_current.json'
sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / 'commands'))
from commands.google_workspace import gmail_search


_already_sent_this_loop = False
RATE_LIMIT_COOLDOWN = LEAD_DIR / 'gmail_429_cooldown.until'
_PIPELINE_LOCK = LEAD_DIR / 'continuous_outreach_pipeline.lock'


def _pid_alive(pid: int) -> bool:
    try:
        out = __import__('subprocess').check_output(['ps', '-p', str(pid)], text=True)
        return str(pid) in out
    except Exception:
        return False


def _acquire_pipeline_lock() -> tuple[bool, str | None]:
    try:
        if _PIPELINE_LOCK.exists():
            txt = _PIPELINE_LOCK.read_text(encoding='utf-8').strip()
            if txt:
                pid_str = txt.split(' ')[0]
                if pid_str.isdigit() and _pid_alive(int(pid_str)):
                    return False, txt
                _PIPELINE_LOCK.unlink(missing_ok=True)
        owner = f'{__import__("os").getpid()} {now_iso()}'
        _PIPELINE_LOCK.write_text(owner, encoding='utf-8')
        return True, None
    except Exception as e:
        return False, str(e)


def _refresh_pipeline_lock():
    try:
        owner = f'{__import__("os").getpid()} {now_iso()}'
        _PIPELINE_LOCK.write_text(owner, encoding='utf-8')
    except Exception:
        pass


def _release_pipeline_lock():
    try:
        if _PIPELINE_LOCK.exists():
            _PIPELINE_LOCK.unlink()
    except Exception:
        pass


def _find_pipeline_pids():
    try:
        out = __import__('subprocess').check_output(['ps', '-eo', 'pid,args'], text=True)
    except Exception:
        return []
    pids = []
    my_pid = __import__('os').getpid()
    for line in out.splitlines():
        if 'continuous_outreach_pipeline.py' in line:
            parts = line.strip().split(None, 1)
            if len(parts) != 2:
                continue
            pid_str = parts[0]
            if not pid_str.isdigit():
                continue
            pid = int(pid_str)
            if pid == my_pid:
                continue
            pids.append(pid)
    return pids


def terminate_duplicate_pipeline_processes(older_than_seconds: int = 120):
    pids = _find_pipeline_pids()
    if not pids:
        return []
    try:
        proc = __import__('subprocess').check_output(['ps', '-eo', 'pid,etimes,args'], text=True)
    except Exception:
        return []
    killed = []
    rows = {}
    for line in proc.splitlines():
        parts = line.strip().split(None, 2)
        if len(parts) < 2:
            continue
        pid_s, etimes = parts[0], parts[1]
        if not pid_s.isdigit() or not etimes.isdigit():
            continue
        rows[int(pid_s)] = int(etimes)
    for pid in pids:
        etime = rows.get(pid, 0)
        if etime > older_than_seconds:
            try:
                __import__('os').kill(pid, __import__('signal').SIGTERM)
                killed.append(pid)
            except Exception:
                pass
    return killed


def now_iso():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()


def load_json(path: Path):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return {}


def atomic_write_json(path: Path, obj):
    tmp = path.with_suffix(path.suffix + '.tmp')
    tmp.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding='utf-8')
    try:
        tmp.replace(path)
    except Exception:
        path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding='utf-8')


def save_json(path: Path, obj):
    atomic_write_json(path, obj)


def _thread_cache_path():
    return LEAD_DIR / 'pipeline_sent_threads.txt'


def load_sent_thread_ids():
    ids = set()
    p = _thread_cache_path()
    if p.exists():
        try:
            for line in p.read_text(encoding='utf-8').splitlines():
                val = line.strip()
                if val:
                    ids.add(val)
        except Exception:
            pass
    return ids


def save_sent_thread_ids(ids):
    p = _thread_cache_path()
    try:
        if len(ids) > 5000:
            ids = set(list(ids)[-5000:])
        p.write_text('\n'.join(sorted(ids)), encoding='utf-8')
    except Exception:
        pass


def append_log(entry: dict):
    try:
        data = []
        if PIPELINE_LOG.exists():
            txt = PIPELINE_LOG.read_text(encoding='utf-8')
            if txt.strip():
                data = json.loads(txt)
                if not isinstance(data, list):
                    data = [data]
        data.append(entry)
        if len(data) > 2000:
            data = data[-2000:]
        atomic_write_json(PIPELINE_LOG, data)
    except Exception:
        pass


def is_gmail_rate_limited() -> bool:
    try:
        if not RATE_LIMIT_COOLDOWN.exists():
            return False
        txt = RATE_LIMIT_COOLDOWN.read_text(encoding='utf-8').strip()
        if not txt:
            return False
        until = datetime.datetime.fromisoformat(txt.replace('Z', '+00:00'))
        return datetime.datetime.now(datetime.timezone.utc) < until
    except Exception:
        return False


def set_gmail_cooldown(minutes=15):
    try:
        until = (datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=minutes)).isoformat().replace('+00:00','Z')
        RATE_LIMIT_COOLDOWN.write_text(until, encoding='utf-8')
    except Exception:
        pass


def clear_gmail_cooldown():
    try:
        if RATE_LIMIT_COOLDOWN.exists():
            RATE_LIMIT_COOLDOWN.unlink()
    except Exception:
        pass


def classify_gmail_error(message: str) -> str:
    msg = str(message)
    if '429' in msg or 'Too Many Requests' in msg:
        return 'rate_limit'
    if 'No address associated with hostname' in msg or 'Errno 7' in msg:
        return 'dns_failure'
    if 'Name or service not known' in msg or 'Errno -2' in msg:
        return 'dns_failure'
    if 'Connection refused' in msg or 'Errno 111' in msg:
        return 'connection_refused'
    if 'timed out' in msg.lower():
        return 'timeout'
    return 'unknown'


def is_transient_gmail_error(message: str) -> bool:
    return classify_gmail_error(message) in {'rate_limit', 'dns_failure', 'connection_refused', 'timeout'}


def latest(pattern: str, exclusions=('test', 'tail', 'llm_tail')):
    if CURRENT_BATCH.exists():
        return CURRENT_BATCH
    paths = []
    for p in LEAD_DIR.glob(pattern):
        name = p.name.lower()
        if any(excl in name for excl in exclusions):
            continue
        paths.append(p)
    return paths[-1] if paths else None


def load_sender():
    spec = importlib.util.spec_from_file_location('sender', str(SENDER_PATH))
    if not spec or not getattr(spec, 'loader', None):
        raise RuntimeError('Missing sender module spec at ' + str(SENDER_PATH))
    mod = importlib.util.module_from_spec(spec)
    sys.modules['sender'] = mod
    try:
        spec.loader.exec_module(mod)
    except Exception as e:
        raise RuntimeError('sender_load_failed:' + str(e))
    return mod


def load_sent_keys():
    keys = set()
    if SENT_CACHE.exists():
        try:
            for line in SENT_CACHE.read_text(encoding='utf-8').splitlines():
                val = line.strip()
                if val:
                    keys.add(val.split('|', 1)[0] if '|' in val else val)
        except Exception:
            pass
    return keys


def save_sent_keys(keys):
    if len(keys) > 5000:
        keys = set(list(keys)[-5000:])
    SENT_CACHE.write_text('\n'.join(sorted(keys)), encoding='utf-8')


def search_sent_subjects(limit=500):
    subjects = []
    try:
        msgs = gmail_search('in:sent', limit=limit, all_folders=True)
        for m in msgs:
            subject = m.get('subject')
            if subject:
                subjects.append(subject)
    except Exception as e:
        append_log({'ts': now_iso(), 'event': 'search_error', 'error': str(e)})
    return subjects


def _is_system_like(key: str) -> bool:
    e = (key or '').lower().strip()
    local_prefixes = ('mailer-daemon','no-reply','noreply','postmaster','hostmaster','webmaster','abuse@','noreply@','no-reply@','donotreply@','do-not-reply@')
    if e.startswith(local_prefixes):
        return True
    doms = {'gov.br','sp.gov.br','rj.gov.br','es.gov.br','unicamp.br','fgv.br','pbh.gov.br','prodemge.gov.br','cge.rj.gov.br','docusign.net','wordpress.com','wordpress.net','google.com','github.com','youcanbook.me','updates.coursiv.co'}
    if e.split('@')[-1] in doms or any(e.endswith('.' + d) for d in doms):
        return True
    return False


def reconcile_canonical_ready(batch):
    try:
        ready = load_json(CANONICAL_READY) or {}
        ready['ready'] = [
            {
                'to': r.get('to'),
                'name': r.get('name'),
                'subject': r.get('subject'),
                'body': r.get('body'),
            }
            for r in batch
        ]
        ready['state'] = 'send_ready'
        ready['send_blocked'] = False
        save_json(CANONICAL_READY, ready)
    except Exception as e:
        append_log({'ts': now_iso(), 'event': 'reconcile_error', 'error': str(e)})


def discover_next_batch(sent_keys, sent_subjects):
    batch_path = latest('outreach_batch_*.json') or CURRENT_BATCH
    payload = load_json(batch_path)
    rows = payload.get('batch') or payload.get('ready') or payload.get('recipients') or []
    blocked = False
    batch = []
    seen = set()
    sent_thread_ids = load_sent_thread_ids()
    recovery_mode = os.environ.get('OUTREACH_RECOVERY_MODE') in {'1','true','yes','y'}
    for r in rows:
        key = str(r.get('to') or r.get('email') or r.get('recipient') or '').strip().lower()
        if not key:
            continue
        if key in seen or (not recovery_mode and key in sent_keys):
            continue
        thread_id = str(r.get('thread_id') or '').strip().lower()
        if thread_id and thread_id in sent_thread_ids:
            continue
        if _is_system_like(key):
            continue
        if not r.get('subject') or not r.get('body'):
            continue
        sender_identity = r.get('from') or r.get('sender') or r.get('sender_email')
        if not sender_identity and not r.get('html'):
            continue
        batch.append(r)
        seen.add(key)
    if not batch and not blocked:
        try:
            import subprocess
            miner_path = str(LEAD_DIR / 'historical_email_miner.py')
            if not Path(miner_path).exists():
                miner_path = str(REPO / 'lead-crm' / 'historical_email_miner.py')
            proc = subprocess.run(['python3', miner_path],
                                 capture_output=True, text=True, timeout=180, cwd=str(REPO))
            append_log({'ts': now_iso(), 'event': 'miner_replenish', 'returncode': proc.returncode, 'stdout': (proc.stdout or '')[:200], 'stderr': (proc.stderr or '')[:400]})
        except Exception as e:
            append_log({'ts': now_iso(), 'event': 'replenish_error', 'error': str(e)})
        try:
            import subprocess
            proc = subprocess.run(['python3', str(LEAD_DIR / '_run_safe_batch.py')],
                                 capture_output=True, text=True, timeout=180, cwd=str(REPO))
            append_log({'ts': now_iso(),
                        'event': 'replenish',
                        'returncode': proc.returncode,
                        'stdout': (proc.stdout or '')[:200],
                        'stderr': (proc.stderr or '')[:400]})
            if proc.returncode == 0:
                ready = load_json(CANONICAL_READY)
                rows = (ready or {}).get('ready') or []
                blocked = bool((ready or {}).get('send_blocked'))
                batch = []
                seen = set()
                for r in rows:
                    key = str(r.get('to') or r.get('email') or r.get('recipient') or '').strip().lower()
                    if not key or key in seen or key in sent_keys:
                        continue
                    thread_id = str(r.get('thread_id') or '').strip().lower()
                    if thread_id and thread_id in sent_thread_ids:
                        continue
                    batch.append(r)
                    seen.add(key)
                if not batch:
                    try:
                        prospector_path = str(LEAD_DIR / 'web_prospecting.py')
                        if not Path(prospector_path).exists():
                            prospector_path = str(REPO / 'lead-crm' / 'web_prospecting.py')
                        subprocess.run(['python3', prospector_path],
                                       capture_output=True, text=True, timeout=180, cwd=str(REPO))
                        append_log({'ts': now_iso(), 'event': 'web_prospecting_replenish', 'prospector': prospector_path})
                    except Exception as e:
                        append_log({'ts': now_iso(), 'event': 'web_prospecting_error', 'error': str(e)})
                    proc = subprocess.run(['python3', str(LEAD_DIR / '_run_safe_batch.py')],
                                         capture_output=True, text=True, timeout=180, cwd=str(REPO))
                    append_log({'ts': now_iso(),
                                'event': 'replenish_after_prospecting',
                                'returncode': proc.returncode,
                                'stdout': (proc.stdout or '')[:200],
                                'stderr': (proc.stderr or '')[:400]})
                    if proc.returncode == 0:
                        ready = load_json(CANONICAL_READY)
                        rows = (ready or {}).get('ready') or []
                        blocked = bool((ready or {}).get('send_blocked'))
                        batch = []
                        seen = set()
                        for r in rows:
                            key = str(r.get('to') or r.get('email') or r.get('recipient') or '').strip().lower()
                            if not key or key in seen or key in sent_keys:
                                continue
                            thread_id = str(r.get('thread_id') or '').strip().lower()
                            if thread_id and thread_id in sent_thread_ids:
                                continue
                            batch.append(r)
                            seen.add(key)
        except BrokenPipeError:
            append_log({'ts': now_iso(), 'event': 'replenish_error', 'error': 'BrokenPipeError'})
        except Exception as e:
            append_log({'ts': now_iso(), 'event': 'replenish_error', 'error': str(e)})
    if blocked:
        return None
    if not batch:
        if batch_path == CURRENT_BATCH and (payload.get('batch') or []):
            return CURRENT_BATCH
        if (LEAD_DIR / 'outreach_batch_current.json').exists():
            return CURRENT_BATCH
        return None
    save_json(CURRENT_BATCH, {'batch': batch, 'source': str(batch_path)})
    reconcile_canonical_ready(batch)
    return CURRENT_BATCH


def send_current_batch(batch_path: Path, sender):
    if is_gmail_rate_limited():
        append_log({'ts': now_iso(), 'event': 'send_skipped', 'reason': 'gmail_429_cooldown', 'batch': str(batch_path)})
        return 0, []
    payload = load_json(batch_path)
    rows = payload.get('batch') or []
    results = []
    successes = 0
    updated_sent_keys = set(load_sent_keys())
    rate_hit = False
    try:
        for r in rows:
            to = r.get('to')
            if not to:
                results.append({'to': None, 'success': False, 'error': 'missing email'})
                continue
            key = str(to).strip().lower()
            if key in updated_sent_keys:
                continue
            try:
                mid, tid = sender.send_mail(to, r.get('subject', ''), r.get('body', ''), r.get('html'))
                results.append({'to': to, 'success': True, 'message_id': mid, 'thread_id': tid})
                successes += 1
                updated_sent_keys.add(key)
            except Exception as e:
                msg = str(e)
                results.append({'to': to, 'success': False, 'error': msg})
                err_type = classify_gmail_error(msg)
                append_log({'ts': now_iso(), 'event': 'gmail_error_classified', 'to': to, 'error_type': err_type, 'error': msg})
                if err_type == 'rate_limit':
                    rate_hit = True
                    append_log({'ts': now_iso(), 'event': 'hot_followup_failed', 'error': msg})
                    break
                if err_type == 'dns_failure':
                    append_log({'ts': now_iso(), 'event': 'loop_cooldown', 'reason': 'gmail_dns_failure', 'backoff': 15})
                    time.sleep(15)
                    break
    except BrokenPipeError:
        append_log({'ts': now_iso(), 'event': 'send_error', 'error': 'BrokenPipeError', 'batch': str(batch_path)})
    except Exception as e:
        append_log({'ts': now_iso(), 'event': 'send_error', 'error': str(e), 'batch': str(batch_path)})

    try:
        save_sent_keys(updated_sent_keys)
    except Exception:
        pass
    try:
        sent_threads = load_sent_thread_ids()
        for res in results:
            if res.get('success') and res.get('thread_id'):
                sent_threads.add(str(res['thread_id']).strip().lower())
        save_sent_thread_ids(sent_threads)
    except Exception:
        pass
    if rate_hit:
        set_gmail_cooldown(15)
    return successes, results


def loop_once(run_once=False):
    ts = now_iso()
    sent_keys = load_sent_keys()
    try:
        sent_subjects = search_sent_subjects()
    except Exception as e:
        if 'No auth for gmail' in str(e):
            append_log({'ts': ts, 'event': 'send_skipped', 'reason': 'auth_missing', 'error': str(e)})
            entry = {'ts': ts, 'event': 'pipeline_tick', 'sent': 0, 'next_batch': None, 'sent_keys': len(sent_keys), 'sent_subjects': 0, 'auth_missing': True}
            append_log(entry)
            if run_once:
                print(json.dumps(entry, ensure_ascii=False), flush=True)
            return entry
        sent_subjects = []
        append_log({'ts': ts, 'event': 'search_error', 'error': str(e)})
    batch_path = latest('outreach_batch_*.json')
    sent_count = 0
    new_batch = None

    try:
        new_batch = discover_next_batch(sent_keys, sent_subjects)
    except BrokenPipeError:
        append_log({'ts': ts, 'event': 'batch_error', 'error': 'BrokenPipeError'})
    except Exception as e:
        append_log({'ts': ts, 'event': 'batch_error', 'error': str(e)})

    if new_batch:
        if is_gmail_rate_limited():
            append_log({'ts': ts, 'event': 'send_skipped', 'reason': 'gmail_429_cooldown', 'batch': str(new_batch)})
        else:
            try:
                sender = load_sender()
                sent_count, _ = send_current_batch(new_batch, sender)
                _already_sent_this_loop = True
            except Exception as e:
                append_log({'ts': ts, 'event': 'send_error', 'error': str(e), 'batch': str(new_batch)})

    entry = {
        'ts': ts,
        'event': 'pipeline_tick',
        'sent': sent_count,
        'next_batch': str(new_batch) if new_batch else None,
        'sent_keys': len(sent_keys),
        'sent_subjects': len(sent_subjects),
    }
    append_log(entry)
    if run_once:
        print(json.dumps(entry, ensure_ascii=False), flush=True)
    return entry


def main():
    print(json.dumps({'event': 'pipeline_start', 'ts': now_iso()}, ensure_ascii=False), flush=True)
    acquired, owner = _acquire_pipeline_lock()
    if not acquired:
        append_log({'ts': now_iso(), 'event': 'pipeline_duplicate_exit', 'owner': owner, 'reason': 'lock_held'})
        print(json.dumps({'event': 'pipeline_duplicate_exit', 'owner': owner, 'ts': now_iso()}, ensure_ascii=False), flush=True)
        return
    try:
        candidates = _find_pipeline_pids()
        if candidates:
            append_log({'ts': now_iso(), 'event': 'duplicate_candidates_detected', 'pids': candidates, 'note': 'no_kill_self_heal_not_auto_terminating'})
    except Exception as e:
        append_log({'ts': now_iso(), 'event': 'duplicate_detect_error', 'error': str(e)})
    backoff = 5
    try:
        while True:
            try:
                if is_gmail_rate_limited():
                    append_log({'ts': now_iso(), 'event': 'loop_cooldown', 'reason': 'gmail_429_active', 'backoff': backoff})
                    time.sleep(backoff)
                    continue
                entry = loop_once()
                print(json.dumps(entry, ensure_ascii=False), flush=True)
                backoff = 5
                _refresh_pipeline_lock()
                if entry.get('event') == 'pipeline_tick' and not entry.get('next_batch'):
                    time.sleep(15)
            except BrokenPipeError:
                append_log({'ts': now_iso(), 'event': 'loop_error', 'error': 'BrokenPipeError'})
                time.sleep(backoff)
            except Exception as e:
                append_log({'ts': now_iso(), 'event': 'loop_error', 'error': str(e)})
                backoff = min(backoff * 2, 60)
                time.sleep(backoff)
    finally:
        _release_pipeline_lock()


if __name__ == '__main__':
    main()
