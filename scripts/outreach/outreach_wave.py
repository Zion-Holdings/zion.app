#!/usr/bin/env python3
import sys, json, base64, urllib.request, urllib.parse, urllib.error, datetime, time, os
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
sys.path.insert(0, str(REPO))

BATCH_PATH = REPO / 'lead-crm' / 'outreach_ready_canonical.json'
OUTREACH_LOG = REPO / 'lead-crm' / 'outreach-log.jsonl'
SEND_LOG = REPO / 'lead-crm' / 'outreach_sent_history.jsonl'
EXCLUSION_FILE = REPO / 'lead-crm' / 'exclusion-list.json'
LOCK_FILE = REPO / 'lead-crm' / '.ceo_outreach_sent.lock'

def _now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()

def _load_sent_set():
    sent = set()
    if SEND_LOG.exists():
        for line in SEND_LOG.read_text(encoding='utf-8', errors='ignore').splitlines():
            if not line.strip():
                continue
            try:
                obj = json.loads(line)
                to = (obj.get('to') or '').lower()
                subject = (obj.get('subject') or '').strip()
                thread_id = str(obj.get('thread_id') or '').lower()
                message_id = str(obj.get('message_id') or '').lower()
                if to and subject:
                    sent.add((to, subject))
                if thread_id:
                    sent.add(('__thread__', thread_id))
                if message_id:
                    sent.add(('__message__', message_id))
            except Exception:
                continue
    return sent

def _load_excluded():
    try:
        if not EXCLUSION_FILE.exists():
            return set()
        data = json.loads(EXCLUSION_FILE.read_text(encoding='utf-8'))
        return {x.get('email','').lower() for x in data.get('addresses', []) if x.get('email')}
    except Exception:
        return set()

def _append(path, obj):
    try:
        with path.open('a', encoding='utf-8') as f:
            f.write(json.dumps(obj, ensure_ascii=False) + '\n')
    except Exception:
        pass

def _gmail_sent_recent(to_addr, subject, within_seconds=72*3600, limit=20):
    try:
        from commands.google_workspace import gmail_sent
        return gmail_sent(to_addr, subject, within_seconds=within_seconds, limit=limit)
    except Exception:
        return False

def _send_request(req, timeout=30):
    max_attempts = 4
    base_wait = 2
    last_err = None
    for attempt in range(1, max_attempts + 1):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code in (429, 500, 502, 503, 504):
                wait = base_wait * attempt
                time.sleep(wait)
                continue
            raise
        except Exception:
            if attempt < max_attempts:
                time.sleep(base_wait * attempt)
                continue
            last_err = RuntimeError('send_failed_after_retries')
            raise last_err
    if last_err:
        raise last_err
    raise RuntimeError('send_failed')

def _gog_headers():
    try:
        from commands.google_workspace import gog_headers
        return gog_headers()
    except Exception:
        return None

def send_mail(to_addr, subject, body, html=None, thread_id=None, message_id=None):
    to_key = (to_addr or '').lower()
    if to_key in _load_excluded():
        return None, 'excluded'
    key = (to_key, (subject or '').strip(), thread_id or '', message_id or '')
    if key in _load_sent_set():
        return None, 'duplicate'
    if _gmail_sent_recent(to_addr, subject):
        return None, 'recent_sent_72h'
    raw_email_lines = ['From: kleber@ziontechgroup.com', 'To: %s' % to_addr, 'Subject: %s' % subject, 'Content-Type: text/html; charset=utf-8']
    if message_id:
        raw_email_lines.extend(['References: %s' % message_id, 'In-Reply-To: %s' % message_id])
    raw_email_lines.extend(['', html or body])
    raw = '\r\n'.join(raw_email_lines)
    encoded = base64.urlsafe_b64encode(raw.encode('utf-8')).decode('utf-8')
    payload = json.dumps({'raw': encoded, 'threadId': thread_id} if thread_id else {'raw': encoded}).encode('utf-8')
    headers = _gog_headers() or {}
    headers['Content-Type'] = 'application/json'
    req = urllib.request.Request('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', data=payload, headers=headers, method='POST')
    result = _send_request(req)
    mid = result.get('id')
    tid = result.get('threadId')
    _append(SEND_LOG, {'ts': _now(), 'to': to_addr, 'subject': subject, 'message_id': mid, 'thread_id': tid, 'provider': 'gmail_api'})
    _append(OUTREACH_LOG, {'ts': _now(), 'event': 'send', 'to': to_addr, 'subject': subject, 'message_id': mid, 'thread_id': tid, 'provider': 'gmail_api', 'status': 'sent'})
    return mid, tid

def default_body(company):
    return (
        f"Olá,\n\nSou Kleber Garcia Alcatrão, CEO da Zion Tech Group.\n\n"
        f"Vi que a {company} atua em um espaço onde nossos serviços de operações e eficiência de TI podem gerar valor rápido.\n\n"
        f"Gostaria de conversar sobre parcerias ou pilotos concretos. Se fizer sentido, seguem algumas ideias:\n"
        f"1. Avaliação rápida de operações de TI com foco em eficiência\n"
        f"2. Projeto piloto em uma área com gargalo conhecido\n"
        f"3. Acesso a ferramentas gratuitas que já ajudamos a desenvolver\n\n"
        f"Se quiser falar agora, pode agendar diretamente aqui: https://calendly.com/kleber-ziontechgroup\n\n"
        f"Conheça mais aqui: https://ziontechgroup.com"
    )

def main():
    if not BATCH_PATH.exists():
        print(json.dumps({'error': f'batch_missing:{BATCH_PATH}'}, ensure_ascii=False))
        return
    obj = json.loads(BATCH_PATH.read_text(encoding='utf-8'))
    rows = obj.get('ready') or obj.get('recipients') or obj.get('batch') or []
    send_allowed = os.environ.get('ZTG_SEND_ALLOWED') == '1'
    sent_set = _load_sent_set()
    excluded = _load_excluded()
    outputs = []
    attempted = 0
    limit = int(os.environ.get('ZTG_WAVE_LIMIT', '8'))
    for r in rows:
        if attempted >= limit:
            break
        to = (r.get('to') or r.get('recipient') or r.get('email') or '').lower()
        if not to:
            continue
        company = r.get('company_name') or r.get('name') or 'seu time'
        subject = r.get('subject') or f"Parceria — {company} — Zion Tech Group"
        body = r.get('body') or default_body(company)
        if to in excluded:
            outputs.append({'to': to, 'success': False, 'reason': 'excluded'})
            continue
        if (to, subject.strip()) in sent_set:
            outputs.append({'to': to, 'success': False, 'reason': 'duplicate'})
            continue
        if send_allowed:
            try:
                mid, tid = send_mail(to, subject, body, r.get('html'), thread_id=r.get('thread_id'), message_id=r.get('message_id'))
                status = 'sent' if mid else 'skipped'
                outputs.append({'to': to, 'success': bool(mid), 'message_id': mid, 'thread_id': tid, 'status': status})
            except Exception as e:
                outputs.append({'to': to, 'success': False, 'error': str(e)})
            attempted += 1
            time.sleep(0.25)
        else:
            outputs.append({'to': to, 'success': False, 'reason': 'send_disabled', 'preview_subject': subject})
            attempted += 1
    print(json.dumps({'generatedAt': _now(), 'attempted': attempted, 'send_allowed': send_allowed, 'results': outputs}, ensure_ascii=False))

if __name__ == '__main__':
    main()
