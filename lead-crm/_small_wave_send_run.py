#!/usr/bin/env python3
import sys, json, os, time, datetime, base64, urllib.request, urllib.parse, urllib.error
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
sys.path.insert(0, str(REPO))

NEXT_WAVE_PATH = REPO / 'lead-crm' / 'outreach_next_wave.json'
BATCH_PATH = NEXT_WAVE_PATH if NEXT_WAVE_PATH.exists() else REPO / 'lead-crm' / 'outreach_ready_canonical.json'
EXCLUSION_PATH = REPO / 'lead-crm' / 'exclusion-list.json'
SEND_LOG = REPO / 'lead-crm' / 'outreach_sent_history.jsonl'
VERIFICATION_PATH = REPO / 'lead-crm' / 'send_verification_result.json'
SENDER_EMAIL = 'kleber@ziontechgroup.com'

# Auth / Gmail helpers
from commands.google_workspace import gog_headers, gmail_sent, gmail_search, gmail_get

def load_batch():
    obj = json.loads(BATCH_PATH.read_text(encoding='utf-8'))
    rows = obj.get('recipients') or obj.get('ready') or obj.get('batch') or obj.get('leads') or []
    return rows

def load_excluded():
    if not EXCLUSION_PATH.exists():
        return set()
    try:
        data = json.loads(EXCLUSION_PATH.read_text(encoding='utf-8'))
        return {x['email'].lower() for x in data.get('addresses', []) if x.get('email')}
    except Exception:
        return set()

def load_sent_dedup():
    sent = set()
    if not SEND_LOG.exists():
        return sent
    for line in SEND_LOG.read_text(encoding='utf-8', errors='ignore').splitlines():
        if not line.strip():
            continue
        try:
            obj = json.loads(line)
            key = ((obj.get('to') or '').lower(), (obj.get('subject') or '').strip(), '', '')
            if key[0] and key[1]:
                sent.add(key)
            tid = obj.get('thread_id')
            mid = obj.get('message_id')
            if tid:
                sent.add(('__thread__', str(tid).lower()))
            if mid:
                sent.add(('__message__', str(mid).lower()))
        except Exception:
            continue
    # legacy ledger
    legacy = REPO / 'lead-crm' / 'ceo_outreach_ledger.jsonl'
    if legacy.exists():
        for line in legacy.read_text(encoding='utf-8', errors='ignore').splitlines()[-50:]:
            if not line.strip():
                continue
            try:
                obj = json.loads(line)
                if obj.get('status') == 'sent':
                    key = ((obj.get('to') or '').lower(), (obj.get('subject') or '').strip())
                    if key[0] and key[1]:
                        sent.add(key)
            except Exception:
                continue
    return sent

def recent_outbound(to_addr, within_seconds=72*3600):
    try:
        hits = gmail_search(f"to:{to_addr} in:sent", limit=10, all_folders=True)
        now = int(time.time())
        for m in hits:
            try:
                full = gmail_get(m.get('id'))
            except Exception:
                continue
            headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
            ts_str = headers.get('Date', '')
            ts = 0
            if ts_str:
                try:
                    ts = int(datetime.datetime.strptime(ts_str.split(' -')[0].split(' +')[0], '%a, %d %b %Y %H:%M:%S').replace(tzinfo=datetime.timezone.utc).timestamp())
                except Exception:
                    pass
            if now - ts > within_seconds:
                continue
            actual_to = headers.get('To', '')
            if actual_to and actual_to.lower() == to_addr.lower():
                return True
    except Exception:
        pass
    return False

def send_mail(to_addr, subject, body, html=None, thread_id=None, message_id=None):
    to_key = (to_addr or '').lower()
    excluded = load_excluded()
    if to_key in excluded:
        return None, 'excluded'
    sent = load_sent_dedup()
    key = (to_key, (subject or '').strip(), '', '')
    if key in sent:
        return None, 'duplicate'
    if recent_outbound(to_addr, within_seconds=72*3600):
        return None, 'recent_sent_72h'
    raw_email_lines = [
        'From: ' + SENDER_EMAIL,
        'To: %s' % to_addr,
        'Subject: %s' % subject,
        'Content-Type: text/html; charset=utf-8',
    ]
    if message_id:
        raw_email_lines.extend(['References: %s' % message_id, 'In-Reply-To: %s' % message_id])
    raw_email_lines.extend(['', html or body])
    raw_email = '\r\n'.join(raw_email_lines)
    encoded = base64.urlsafe_b64encode(raw_email.encode('utf-8')).decode('utf-8')
    payload = json.dumps({'raw': encoded, 'threadId': thread_id} if thread_id else {'raw': encoded}).encode('utf-8')
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
    headers = gog_headers() or {}
    headers['Content-Type'] = 'application/json'
    req = urllib.request.Request(url, data=payload, headers=headers, method='POST')
    last_err = None
    for attempt in range(1, 5):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                result = json.loads(r.read())
            mid = result.get('id')
            tid = result.get('threadId')
            return mid, tid
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code in (429, 500, 502, 503, 504):
                wait = 2 * attempt
                time.sleep(wait)
                continue
            raise
        except Exception as e:
            last_err = e
            if attempt < 4:
                time.sleep(2 * attempt)
                continue
            raise last_err
    if last_err:
        raise last_err
    raise RuntimeError('send_failed')

def load_config():
    cfg_path = REPO / 'lead-crm' / 'outreach_config.json'
    if not cfg_path.exists():
        return {}
    try:
        return json.loads(cfg_path.read_text(encoding='utf-8'))
    except Exception:
        return {}

def main():
    config = load_config()
    send_allowed = os.environ.get('ZTG_SEND_ALLOWED') == '1'
    config_allowed = config.get('send_allowed') is True and config.get('opt_in') is True
    if not send_allowed or not config_allowed:
        result = {
            'send_count': 0,
            'sent_to': None,
            'subject': None,
            'httpStatus': None,
            'message_id': None,
            'thread_id': None,
            'liveSentCheck': False,
            'note': 'blocked_by_config_or_env',
            'error': None
        }
        print(json.dumps(result, ensure_ascii=False))
        try:
            VERIFICATION_PATH.write_text(json.dumps(result, ensure_ascii=False, indent=2))
        except Exception:
            pass
        return
    rows = load_batch()
    excluded = load_excluded()
    sent = load_sent_dedup()
    send_count = 0
    result = {
        'send_count': 0,
        'sent_to': None,
        'subject': None,
        'httpStatus': None,
        'message_id': None,
        'thread_id': None,
        'liveSentCheck': False,
        'note': None,
        'error': None,
    }
    if not send_allowed:
        result['error'] = 'SEND_DISABLED: ZTG_SEND_ALLOWED != 1'
        result['note'] = 'send_disabled'
        print(json.dumps(result, ensure_ascii=False))
        # Still write verification artifact
        try:
            VERIFICATION_PATH.write_text(json.dumps(result, ensure_ascii=False, indent=2))
        except Exception:
            pass
        return
    for r in rows:
        to = (r.get('email') or r.get('recipient') or r.get('to') or '').lower()
        if not to:
            continue
        if to in excluded:
            continue
        subject = (r.get('subject') or '').strip()
        body = r.get('body') or ''
        if not subject or not body:
            seq = r.get('follow_up_sequence') or []
            for step in seq:
                s = (step.get('subject') or '').strip()
                b = step.get('body') or ''
                if s and b:
                    subject = s
                    body = b
                    break
        thread_id = r.get('thread_id')
        message_id = r.get('message_id')
        # dedup
        key = (to, subject, '', '')
        if key in sent:
            continue
        # 72h broad check
        if recent_outbound(to, within_seconds=72*3600):
            continue
        # send
        try:
            mid, tid = send_mail(to, subject, body, thread_id=thread_id, message_id=message_id)
            if mid is None:
                # blocked by excluded/duplicate/recent_sent
                continue
            send_count = 1
            result['send_count'] = 1
            result['sent_to'] = to
            result['subject'] = subject
            result['httpStatus'] = 200
            result['message_id'] = mid
            result['thread_id'] = tid
            try:
                with open(SEND_LOG, 'a', encoding='utf-8') as f:
                    f.write(json.dumps({
                        'ts': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                        'to': to,
                        'subject': subject,
                        'message_id': mid,
                        'thread_id': tid,
                        'provider': 'gmail_api',
                        'status': 'sent'
                    }, ensure_ascii=False) + '\n')
            except Exception:
                pass
            break
        except Exception as e:
            err_str = str(e)
            if '429' in err_str:
                result['error'] = 'HTTP 429 rate limit'
                result['note'] = 'rate_limited'
                break
            else:
                result['error'] = err_str
                break
    # Narrow verification
    if send_count == 1:
        try:
            found = gmail_sent(result['sent_to'], result['subject'], within_seconds=60, limit=5)
            if found:
                result['liveSentCheck'] = True
                result['note'] = 'verified_narrow'
        except Exception:
            pass
        if not result['liveSentCheck']:
            result['note'] = 'sent_but_not_found_in_sent_folder_pending_fallback'
            try:
                hits = gmail_search(f"from:{SENDER_EMAIL} to:{result['sent_to']}", limit=3, all_folders=True)
                if hits:
                    result['liveSentCheck'] = True
                    result['note'] = 'verified_via_fallback_probe'
                    result['fallbackProbeMessageId'] = hits[0].get('id')
                else:
                    result['note'] = 'sent_but_not_found_in_sent_folder'
            except Exception:
                result['note'] = 'sent_but_not_found_in_sent_folder'
    try:
        VERIFICATION_PATH.write_text(json.dumps(result, ensure_ascii=False, indent=2))
    except Exception:
        pass
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    main()
