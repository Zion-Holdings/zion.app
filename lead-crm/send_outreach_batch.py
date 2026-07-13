#!/usr/bin/env python3
import sys, json, base64, urllib.request, urllib.parse, urllib.error, datetime, time, os
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
if not REPO.exists():
    try:
        REPO = Path(__file__).resolve().parent.parent
    except Exception:
        REPO = Path('/Users/miami2/zion.app')
if not REPO.exists():
    REPO = Path('C:/Users/Zion/tmp/zion-clone-test2')
sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / 'commands'))
try:
    from lib.llm_client import chat as _llm_chat
    from utils.llm_client import llm_query as _llm_query
except Exception:
    _llm_chat = None
    _llm_query = None


def _gog_headers():
    from commands.google_workspace import gog_headers
    try:
        return gog_headers()
    except Exception:
        return None


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


OUTREACH_LOG = REPO / 'lead-crm' / 'outreach-log.jsonl'


def _append_outreach_log(record: dict):
    try:
        with OUTREACH_LOG.open('a', encoding='utf-8') as f:
            f.write(json.dumps(record, ensure_ascii=False) + '\n')
    except Exception:
        pass


SEND_LOG = REPO / 'lead-crm' / 'outreach_sent_history.jsonl'


def _load_sent_set():
    sent = set()
    if not SEND_LOG.exists():
        return sent
    try:
        for line in SEND_LOG.read_text(encoding='utf-8', errors='ignore').splitlines():
            if not line.strip():
                continue
            try:
                obj = json.loads(line)
                key = (obj.get('to') or '').lower(), (obj.get('subject') or '').strip()
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
    except Exception:
        pass
    return sent


def append_sent(record: dict):
    try:
        with SEND_LOG.open('a', encoding='utf-8') as f:
            f.write(json.dumps(record, ensure_ascii=False) + '\n')
    except Exception:
        pass


EXCLUSION_FILE = REPO / 'lead-crm' / 'exclusion-list.json'


def _load_excluded() -> set:
    try:
        if not EXCLUSION_FILE.exists():
            return set()
        data = json.loads(EXCLUSION_FILE.read_text(encoding='utf-8'))
        return {x.get('email','').lower() for x in data.get('addresses', []) if x.get('email')}
    except Exception:
        return set()


_SENT_LOCK = REPO / 'lead-crm' / '.ceo_outreach_sent.lock'

def _load_sent_set():
    if not _SENT_LOCK.exists():
        return set()
    try:
        rows = json.loads(_SENT_LOCK.read_text(encoding='utf-8'))
        return {
            ((r.get('to') or '').lower(), (r.get('subject') or '').strip(), r.get('thread_id') or '', r.get('message_id') or '')
            for r in rows
        }
    except Exception:
        return set()

def append_sent(row: dict):
    rows = []
    if _SENT_LOCK.exists():
        try:
            rows = json.loads(_SENT_LOCK.read_text(encoding='utf-8'))
        except Exception:
            rows = []
    rows.append(row)
    _SENT_LOCK.write_text(json.dumps(rows, ensure_ascii=False), encoding='utf-8')

# in-memory fast path for same-run dedup
_SENT_ROWS = _load_sent_set()

for _legacy_path in [REPO / 'lead-crm' / 'outreach_sent_history.jsonl', REPO / 'lead-crm' / 'ceo_outreach_ledger.jsonl', REPO / 'scripts' / 'outreach_monitor' / 'processed' / 'sent_ledger.jsonl']:
    if not _legacy_path.exists():
        continue
    try:
        lines = _legacy_path.read_text(encoding='utf-8', errors='ignore').splitlines()
    except Exception:
        continue
    for line in lines[-50:]:
        if not line.strip():
            continue
        try:
            obj = json.loads(line)
            if (obj.get('status') or '').lower() in {'', 'sent', 'duplicate', 'excluded'}:
                pass
        except Exception:
            continue
        key = (
            (obj.get('to') or '').lower(),
            (obj.get('subject') or '').strip(),
            str(obj.get('thread_id') or '').lower(),
            str(obj.get('message_id') or '').lower(),
        )
        if key != ('', '', '', ''):
            _SENT_ROWS.add(key)


def send_mail(to_addr, subject, body, html=None, thread_id=None, message_id=None):
    to_key = (to_addr or '').lower()
    if to_key in _load_excluded():
        return None, 'excluded'
    key = (to_key, (subject or '').strip(), thread_id or '', message_id or '')
    if key in _SENT_ROWS:
        return None, 'duplicate'
    raw_email_lines = [
        'From: kleber@ziontechgroup.com',
        'To: %s' % to_addr,
        'Subject: %s' % subject,
        'Content-Type: text/html; charset=utf-8',
    ]
    if message_id:
        raw_email_lines.extend([
            'References: %s' % message_id,
            'In-Reply-To: %s' % message_id,
        ])
    raw_email_lines.extend(['', html or body])
    raw_email = '\r\n'.join(raw_email_lines)
    encoded = base64.urlsafe_b64encode(raw_email.encode('utf-8')).decode('utf-8')
    payload = json.dumps({'raw': encoded, 'threadId': thread_id} if thread_id else {'raw': encoded}).encode('utf-8')
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
    headers = _gog_headers() or {}
    headers['Content-Type'] = 'application/json'
    req = urllib.request.Request(url, data=payload, headers=headers, method='POST')
    result = _send_request(req)
    mid = result.get('id')
    tid = result.get('threadId')
    try:
        append_sent({
            'ts': datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'to': to_addr,
            'subject': subject,
            'message_id': mid,
            'thread_id': tid,
            'provider': 'gmail_api',
        })
        _append_outreach_log({
            'ts': datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'event': 'send',
            'to': to_addr,
            'subject': subject,
            'message_id': mid,
            'thread_id': tid,
            'provider': 'gmail_api',
            'status': 'sent',
        })
    except Exception:
        pass
    _SENT_ROWS.add(key)
    return mid, tid


def _tailor_message(chat_fn, r):
    subject = r.get('subject', '') or ''
    body = r.get('body', '') or ''
    thread_body = r.get('thread_body') or body
    if not thread_body:
        return r
    company = r.get('company_name') or r.get('name') or ''
    website = r.get('website') or 'https://ziontechgroup.com'
    contact = r.get('display_name') or r.get('recipient') or r.get('to') or ''
    primary_services = ', '.join(r.get('service_references_primary', []) or [])
    prompt = (
        "You are Kleber Garcia Alcatrão, CEO of Zion Tech Group. "
        "Rewrite the following outreach reply into a concise, personalized continuation. "
        "Use the same language as the client thread; if mixed, prefer Portuguese with brief English where natural. "
        "Tone: friendly, professional, creative, CEO-level. Do not invent facts or promises. "
        "Structure: 1) short thanks for the past collaboration/opportunity, "
        "2) 2-3 concrete mutually beneficial next-step ideas tailored to the conversation, "
        "3) clear CTA to schedule at https://calendly.com/kleber-ziontechgroup, "
        "4) invitation to visit https://ziontechgroup.com for new AI services and free tools.\n\n"
        f"Recipient: {contact}\n"
        f"Company: {company}\nWebsite: {website}\nContext/IT focus: {primary_services}\n"
        f"Thread excerpt:\n{thread_body[:4000]}\n"
    )
    messages = [
        {"role": "system", "content": "You are a helpful assistant that rewrites business emails concisely."},
        {"role": "user", "content": prompt},
    ]
    last_err = None
    for backend in ('openai_compat', 'unified', 'utils_llm_query', 'template'):
        try:
            if backend == 'unified' and callable(chat_fn):
                result = chat_fn(messages, provider='auto')
            elif backend == 'openai_compat':
                result = _call_openai_compat_chat(messages)
            elif backend == 'utils_llm_query':
                result = _call_utils_llm_query(messages)
            else:
                result = {'content': '', 'provider': 'template', 'model': 'deterministic-template-v1'}
            text = (result.get('content') or '').strip()
            if not text:
                last_err = 'empty_llm_content'
                continue
            lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
            if not lines:
                r['body'] = text
            else:
                subject_prefixes = ('assunto:', 'subject:')
                subj_idx = None
                for i, ln in enumerate(lines):
                    if ln.lower().startswith(subject_prefixes):
                        subj_idx = i
                        break
                if subj_idx is not None and subj_idx + 1 < len(lines):
                    candidate = lines[subj_idx + 1]
                    if candidate and candidate.lower() not in subject_prefixes:
                        r['subject'] = candidate
                        body_lines = lines[:subj_idx] + lines[subj_idx + 2:]
                        r['body'] = '\n'.join(body_lines).strip() or text
                    else:
                        r['subject'] = subject
                        r['body'] = text
                else:
                    r['subject'] = subject
                    r['body'] = text
            r['llm_provider'] = result.get('provider')
            r['llm_model'] = result.get('model')
            return r
        except Exception as e:
            last_err = str(e)
            continue
    r['llm_provider'] = r.get('llm_provider') or 'template'
    r['llm_model'] = r.get('llm_model') or 'deterministic-template-v1'
    r['tailor_error'] = last_err
    return r


def _call_openai_compat_chat(messages, temperature=0.3):
    auth_path = Path.home() / '.hermes' / 'auth.json'
    provider = json.loads(auth_path.read_text()).get('providers', {}).get('nous', {})
    url = provider.get('inference_base_url') or os.environ.get('HERMES_LLM_BASE_URL', '')
    if not url:
        raise RuntimeError('missing_openai_compat_url')
    token = provider.get('access_token') or os.environ.get('GOG_TOKEN', '')
    if not token:
        raise RuntimeError('missing_openai_compat_token')
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json',
    }
    model = os.environ.get('HERMES_LLM_MODEL', 'stepfun/step-3.7-flash:free')
    url = url.rstrip('/') + '/chat/completions'
    body = {
        'model': model,
        'messages': messages,
        'temperature': temperature,
        'max_tokens': min(int(os.environ.get('HERMES_LLM_MAX_TOKENS', '512')), 512),
    }
    req = urllib.request.Request(
        url,
        data=json.dumps(body).encode('utf-8'),
        headers=headers,
        method='POST',
    )
    raw = urllib.request.urlopen(req, timeout=25).read()
    data = json.loads(raw)
    message = (data.get('choices') or [{}])[0].get('message') or {}
    content = message.get('content') or message.get('reasoning') or ''
    return {
        'content': content.strip() if isinstance(content, str) else '',
        'provider': provider.get('client_id') or 'openai_compat',
        'model': data.get('model') or model,
    }


def _call_utils_llm_query(messages, temperature=0.3):
    if _llm_query is None:
        raise RuntimeError('utils_llm_query_unavailable')
    prompt = '\n'.join(m.get('content', '') for m in messages if m.get('content'))
    result = _llm_query(prompt, temperature=temperature)
    if isinstance(result, dict):
        return {
            'content': (result.get('content') or result.get('text') or '').strip(),
            'provider': result.get('provider', 'utils-llm-query'),
            'model': result.get('model', 'legacy-llm-query'),
        }
    if isinstance(result, str):
        return {'content': result.strip(), 'provider': 'utils-llm-query-string', 'model': 'legacy-llm-query-string'}
    raise RuntimeError('utils_llm_query_unexpected')


def main():
    batch_path = sys.argv[1] if len(sys.argv) > 1 else str(REPO / 'lead-crm' / 'outreach_ready_canonical.json')
    if not Path(batch_path).exists():
        print(json.dumps({'error': f'batch_missing:{batch_path}', 'used_default': 'outreach_ready_canonical.json'}, ensure_ascii=False))
        return

    obj = json.loads(Path(batch_path).read_text())
    rows = obj.get('recipients') or obj.get('ready') or obj.get('batch') or []
    chat_fn = _llm_chat
    outputs = []
    skipped_templates = 0
    send_allowed = os.environ.get('ZTG_SEND_ALLOWED') == '1'
    exclusion_path = REPO / 'lead-crm' / 'exclusion-list.json'
    excluded = set()
    if exclusion_path.exists():
        try:
            excluded = {x['email'].lower() for x in json.loads(exclusion_path.read_text(encoding='utf-8')).get('addresses', []) if x.get('email')}
        except Exception:
            excluded = set()
    if not send_allowed:
        analyzed_results = []
        improved_count = 0
        excluded_count = 0
        duplicate_count = 0
        missing_body_count = 0
        missing_subject_count = 0
        seen_to = set()
        improved_rows = []
        for r in rows:
            r = dict(r)
            to = (r.get('email') or r.get('recipient') or r.get('to') or '').lower()
            r['to'] = to
            if not to:
                analyzed_results.append({'to': None, 'status': 'error', 'error': 'missing email'})
                improved_rows.append(r)
                continue
            if to in excluded:
                excluded_count += 1
                analyzed_results.append({'to': to, 'status': 'excluded'})
                improved_rows.append(r)
                continue
            if to in seen_to:
                duplicate_count += 1
                analyzed_results.append({'to': to, 'status': 'duplicate'})
                improved_rows.append(r)
                continue
            seen_to.add(to)
            if not r.get('subject'):
                missing_subject_count += 1
            if not r.get('body'):
                missing_body_count += 1
                company = r.get('name') or r.get('domain') or 'empresa'
                subject = r.get('subject', 'Parceria Zion Tech Group')
                r['body'] = (
                    "Olá,\\n\\n"
                    "Espero que esta mensagem o/a encontre bem. "
                    "Sou Kleber Garcia Alcatrão, CEO da Zion Tech Group.\\n\\n"
                    + subject + "\\n\\n"
                    "Gostaríamos de explorar parcerias com " + company + ". "
                    "Podemos agendar uma conversa? https://calendly.com/kleber-ziontechgroup\\n\\n"
                    "Atenciosamente,\\n"
                    "Kleber Garcia Alcatrão\\n"
                    "Zion Tech Group\\n"
                    "https://ziontechgroup.com"
                )
                improved_count += 1
            r['outreach_status'] = 'analyzed'
            improved_rows.append(r)
            analyzed_results.append({'to': to, 'status': 'analyzed', 'improved_body': bool(r.get('body'))})

        source_key = None
        for cand in ('ready', 'recipients', 'batch'):
            if cand in obj and obj.get(cand) is rows:
                source_key = cand
                break
        if source_key:
            obj[source_key] = improved_rows
        obj['state'] = 'send_ready_analyzed'
        try:
            Path(batch_path).write_text(json.dumps(obj, ensure_ascii=False), encoding='utf-8')
        except Exception as e:
            analyzed_results.append({'error': f'write_failed:{e}'})

        health_path = REPO / 'lead-crm' / 'miner_health.json'
        health = {}
        if health_path.exists():
            try:
                health = json.loads(health_path.read_text(encoding='utf-8'))
            except Exception:
                health = {}
        health.update({
            'outreach_last_analysis_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'outreach_ready_count': len(rows),
            'outreach_improved_count': improved_count,
            'outreach_missing_body_count': missing_body_count,
            'outreach_missing_subject_count': missing_subject_count,
            'outreach_excluded_count': excluded_count,
            'outreach_duplicate_count': duplicate_count,
            'outreach_send_allowed': False,
        })
        try:
            health_path.write_text(json.dumps(health, ensure_ascii=False), encoding='utf-8')
        except Exception:
            pass

        print(json.dumps({
            'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'send_count': 0,
            'skipped_templates': skipped_templates,
            'analysis': {
                'total': len(rows),
                'improved_count': improved_count,
                'missing_body_count': missing_body_count,
                'missing_subject_count': missing_subject_count,
                'excluded_count': excluded_count,
                'duplicate_count': duplicate_count,
            },
            'results': analyzed_results,
            'note': 'SEND_DISABLED: analysis and improvement completed, miner_health updated'
        }, ensure_ascii=False))
        return
    for r in rows:
        to = r.get('email') or r.get('recipient') or r.get('to')
        if not to:
            outputs.append({'to': None, 'success': False, 'error': 'missing email'})
            continue
        to = to.lower()
        if to in excluded:
            outputs.append({'to': to, 'success': False, 'reason': 'excluded', 'error': 'excluded-by-list'})
            continue
        tailored = _tailor_message(chat_fn, dict(r))
        html = tailored.get('html') or r.get('html')
        subj = tailored.get('subject', tailored.get('subject','') or r.get('subject','') or '')
        body = tailored.get('body', tailored.get('body','') or r.get('body','') or '')
        try:
            mid, tid = send_mail(to, subj, body, html, thread_id=r.get('thread_id'), message_id=r.get('message_id'))
            outputs.append({'to': to, 'success': True, 'message_id': mid, 'thread_id': tid,
                            'llm_provider': tailored.get('llm_provider'), 'llm_model': tailored.get('llm_model')})
        except Exception as e:
            outputs.append({'to': to, 'success': False, 'error': str(e)})
        time.sleep(0.25)
    print(json.dumps({'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                      'send_count': len(outputs), 'skipped_templates': skipped_templates,
                      'results': outputs}))


if __name__ == '__main__':
    main()
