#!/usr/bin/env python3
import sys, json, base64, urllib.request, urllib.parse, urllib.error, datetime, time, os
from pathlib import Path

def _resolve_repo() -> Path:
    """Pick the clone that actually holds the canonical outreach batch.

    Several checkouts of this repo can coexist (Termux clone, macOS clone, CI
    workspace). A stub directory that merely exists would strand the sender on
    an empty lead-crm, so require the canonical batch file to be present.
    """
    marker = Path('lead-crm') / 'outreach_ready_canonical.json'
    candidates = []
    env_repo = os.environ.get('ZTG_REPO')
    if env_repo:
        candidates.append(Path(env_repo))
    try:
        candidates.append(Path(__file__).resolve().parent.parent)
    except Exception:
        pass
    candidates.extend([
        Path('/data/data/com.termux/files/home/zion-support.github.io'),
        Path('/Users/miami2/zion.app'),
        Path('C:/Users/Zion/tmp/zion-clone-test2'),
    ])
    for cand in candidates:
        try:
            if (cand / marker).exists():
                return cand
        except Exception:
            continue
    for cand in candidates:
        try:
            if cand.exists():
                return cand
        except Exception:
            continue
    return Path(__file__).resolve().parent.parent


REPO = _resolve_repo()
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
    return gog_headers()


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


# Local parts that are never a human prospect. Cataloguing these one address at
# a time never keeps up -- wave2/wave3 on 2026-08-16 mailed no_reply@,
# business-noreply@ and no_responder@ before anyone noticed -- so match the
# shape instead of the address.
_UNMAILABLE_LOCAL_PARTS = (
    'no-reply', 'noreply', 'no_reply',
    'no-responder', 'noresponder', 'no_responder',
    'donotreply', 'do-not-reply', 'do_not_reply',
    'bounce', 'bounces', 'mailer-daemon', 'postmaster',
    'notification', 'notifications', 'notify',
    'automated', 'auto-confirm', 'unsubscribe',
)

# Machine-only sending domains: the local part looks human (team@, hello@) but
# the domain itself is a transactional/notification subdomain, so nobody reads
# replies. Matched on dot-delimited labels to avoid clipping real companies --
# "notifications.resend.com" is blocked, "mynotifyapp.com" is not.
_UNMAILABLE_DOMAIN_LABELS = (
    'notification', 'notifications', 'notify',
    'noreply', 'no-reply', 'bounce', 'bounces',
    'mailer', 'email', 'mail', 'smtp',
    'transactional', 'automated', 'alerts',
)


def _unmailable_reason(addr: str) -> str:
    """Return a reason string when an address must never receive cold outreach."""
    addr = (addr or '').strip().lower()
    if not addr or '@' not in addr:
        return 'malformed_address'
    local, _, domain = addr.partition('@')
    for token in _UNMAILABLE_LOCAL_PARTS:
        if token in local:
            return f'unmailable_local_part:{token}'
    # Only subdomain labels count: the registrable domain of a real company can
    # legitimately be "email.com", but "email.acme.com" is a sending subdomain.
    labels = domain.split('.')
    for label in labels[:-2]:
        if label in _UNMAILABLE_DOMAIN_LABELS:
            return f'unmailable_sending_domain:{label}'
    return ''


_SENT_LOCK = REPO / 'lead-crm' / '.ceo_outreach_sent.lock'

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
    _unmailable = _unmailable_reason(to_key)
    if _unmailable:
        return None, _unmailable
    if to_key in _load_excluded():
        return None, 'excluded'
    key = (to_key, (subject or '').strip(), thread_id or '', message_id or '')
    if key in _SENT_ROWS:
        return None, 'duplicate'
    # 72h auto-suppress via Gmail Sent history (was 24h; adjusted for real send latency)
    try:
        from commands.google_workspace import gmail_sent
        if gmail_sent(to_addr, subject, within_seconds=72*3600, limit=20):
            return None, 'recent_sent_72h'
    except Exception:
        pass
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
    raw_email_lines.extend(['', html or body or ''])
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
    primary_services = ', '.join(
        s for s in (r.get('service_references_primary', []) or []) if isinstance(s, str)
    )
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


def _update_miner_health(analysis_summary, status):
    health_path = REPO / 'lead-crm' / 'miner_health.json'
    try:
        existing = json.loads(health_path.read_text(encoding='utf-8')) if health_path.exists() else {}
    except Exception:
        existing = {}
    existing['ts'] = datetime.datetime.now(datetime.timezone.utc).isoformat()
    existing['last_analysis_status'] = status
    existing['last_analysis_summary'] = analysis_summary
    existing['contacts_found'] = analysis_summary.get('contacts', existing.get('contacts_found', 0))
    existing['contacts_with_personalized_body'] = analysis_summary.get('contacts_with_personalized_body', existing.get('contacts_with_personalized_body', 0))
    existing['contacts_missing_fields'] = analysis_summary.get('contacts_missing_fields', existing.get('contacts_missing_fields', 0))
    existing['ready_count'] = analysis_summary.get('ready_count', 0)
    existing['excluded_count'] = analysis_summary.get('excluded_count', 0)
    existing['status'] = 'analyzed'
    try:
        health_path.write_text(json.dumps(existing, ensure_ascii=False, indent=2), encoding='utf-8')
    except Exception:
        pass


def _analyze_and_improve(rows, excluded):
    improved = []
    summary = {
        'contacts': 0,
        'contacts_with_personalized_body': 0,
        'contacts_missing_fields': 0,
        'ready_count': 0,
        'excluded_count': 0,
        'subject_counts': {},
        'status_counts': {},
        'improvement_notes': [],
    }
    for r in rows:
        to = (r.get('to') or r.get('recipient') or r.get('email') or '').lower()
        company = r.get('company_name') or r.get('name') or ''
        domain = r.get('domain') or (to.split('@')[1] if '@' in to else '')
        status = r.get('status', 'unknown')
        summary['contacts'] += 1
        summary['status_counts'][status] = summary['status_counts'].get(status, 0) + 1
        if not r.get('body'):
            subject = r.get('subject') or 'Sem assunto'
            summary['subject_counts'][subject] = summary['subject_counts'].get(subject, 0) + 1
        improvement = dict(r)
        missing = []
        if not r.get('company_name') and not r.get('name'):
            missing.append('company_name')
        if not r.get('domain'):
            missing.append('domain')
        if not r.get('subject'):
            missing.append('subject')
        if not r.get('body'):
            missing.append('body')
        if missing:
            summary['contacts_missing_fields'] += 1
        if company:
            if not r.get('subject'):
                improvement['subject'] = f"Parceria Zion Tech Group — operações e eficiência para {company}"
            if not r.get('body'):
                improvement['body'] = (
                    f"Olá,\n\n"
                    f"Sou Kleber Garcia Alcatrão, CEO da Zion Tech Group.\n\n"
                    f"Vi que a {company} atua em um espaço onde nossos serviços de operações e eficiência de TI podem gerar valor rápido.\n\n"
                    f"Gostaria de conversar sobre parcerias ou pilotos concretos. Se fizer sentido, seguem algumas ideias:\n"
                    f"1. Avaliação rápida de operações de TI com foco em eficiência\n"
                    f"2. Projeto piloto em uma área com gargalo conhecido\n"
                    f"3. Acesso a ferramentas gratuitas que já ajudamos a desenvolver\n\n"
                    f"Se quiser falar agora, pode agendar diretamente aqui: https://calendly.com/kleber-ziontechgroup\n\n"
                    f"Conheça mais aqui: https://ziontechgroup.com"
                )
                summary['contacts_with_personalized_body'] += 1
        elif not r.get('body'):
            improvement['body'] = (
                f"Olá,\n\n"
                f"Sou Kleber Garcia Alcatrão, CEO da Zion Tech Group.\n\n"
                f"Entramos em contato por uma oportunidade de parceria. Nossos serviços de IA e automação de TI podem gerar valor rápido para sua equipe.\n\n"
                f"Se fizer sentido, podemos agendar uma conversa rápida: https://calendly.com/kleber-ziontechgroup\n\n"
                f"Conheça mais aqui: https://ziontechgroup.com"
            )
            summary['contacts_with_personalized_body'] += 1
        if to in excluded:
            improvement['_excluded'] = True
            summary['excluded_count'] += 1
        improved.append(improvement)
    summary['ready_count'] = len(improved)
    summary['improvement_notes'].append(
        'Bodies gerados heurísticos para contatos sem thread_body personalizado.'
    )
    return {'improved': improved, 'summary': summary}


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
        # Run analysis and improvement pass even when sending is disabled
        analysis = _analyze_and_improve(rows, excluded)
        improved_rows = analysis['improved']
        analysis_summary = analysis['summary']
        # Persist improved records back to batch_path
        try:
            canonical = json.loads(Path(batch_path).read_text(encoding='utf-8'))
            ready_list = canonical.get('ready') or canonical.get('recipients') or canonical.get('batch') or []
            improved_by_to = {r.get('to'): r for r in improved_rows if r.get('to')}
            updated = 0
            for item in ready_list:
                k = item.get('to') or item.get('recipient') or item.get('email')
                if k and k.lower() in improved_by_to:
                    item.update(improved_by_to.pop(k.lower()))
                    updated += 1
            canonical['ready'] = ready_list
            canonical['improvedAt'] = datetime.datetime.now(datetime.timezone.utc).isoformat()
            canonical['analysisSummary'] = analysis_summary
            Path(batch_path).write_text(json.dumps(canonical, ensure_ascii=False, indent=2), encoding='utf-8')
        except Exception:
            pass
        # Update miner_health.json with analysis metrics
        _update_miner_health(analysis_summary, 'analyzed_no_send')
        print(json.dumps({'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'send_count': 0, 'skipped_templates': skipped_templates, 'results': [], 'note': 'SEND_DISABLED: set ZTG_SEND_ALLOWED=1 to enable outbound sends', 'analysisSummary': analysis_summary}, ensure_ascii=False))
        return
    # Preflight: fail fast and loudly when Google credentials are unusable.
    # Without this, gog_headers() raising left every message to be POSTed with
    # no Authorization header, producing a wall of HTTP 401s that look like a
    # Gmail problem instead of a missing-token problem.
    try:
        _preflight_headers = _gog_headers()
    except Exception as e:
        print(json.dumps({
            'error': 'google_credentials_unavailable',
            'detail': f'{type(e).__name__}: {e}',
            'hint': 'gog_tokens.json (client_id, client_secret, refresh_token) is required; no messages were attempted',
            'send_count': 0,
            'results': [],
        }, ensure_ascii=False))
        return
    if not (_preflight_headers or {}).get('Authorization'):
        print(json.dumps({
            'error': 'google_credentials_missing_authorization',
            'hint': 'gog_headers() returned no Authorization header; no messages were attempted',
            'send_count': 0,
            'results': [],
        }, ensure_ascii=False))
        return
    # Run analysis and improvement pass to generate heuristic bodies before sending
    analysis = _analyze_and_improve(rows, excluded)
    improved_rows = analysis['improved']
    analysis_summary = analysis['summary']
    improved_by_to = {r.get('to'): r for r in improved_rows if r.get('to')}
    for r in rows:
        k = r.get('to') or r.get('recipient') or r.get('email')
        if k and k.lower() in improved_by_to:
            r.update(improved_by_to.pop(k.lower()))
    for r in rows:
        to = r.get('email') or r.get('recipient') or r.get('to')
        if not to:
            outputs.append({'to': None, 'success': False, 'error': 'missing email'})
            continue
        to = to.lower()
        _unmailable = _unmailable_reason(to)
        if _unmailable:
            outputs.append({'to': to, 'success': False, 'reason': _unmailable, 'error': 'unmailable-address'})
            continue
        if to in excluded:
            outputs.append({'to': to, 'success': False, 'reason': 'excluded', 'error': 'excluded-by-list'})
            continue
        tailored = _tailor_message(chat_fn, dict(r))
        html = tailored.get('html') or r.get('html')
        subj = tailored.get('subject') or r.get('subject') or ''
        body = tailored.get('body') or r.get('body') or ''
        try:
            mid, tid = send_mail(to, subj, body, html, thread_id=r.get('thread_id'), message_id=r.get('message_id'))
            outputs.append({'to': to, 'success': True, 'message_id': mid, 'thread_id': tid,
                            'llm_provider': tailored.get('llm_provider'), 'llm_model': tailored.get('llm_model')})
        except Exception as e:
            outputs.append({'to': to, 'success': False, 'error': str(e)})
        time.sleep(3.0)
    print(json.dumps({'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                      'send_count': len(outputs), 'skipped_templates': skipped_templates,
                      'results': outputs}))


if __name__ == '__main__':
    main()
