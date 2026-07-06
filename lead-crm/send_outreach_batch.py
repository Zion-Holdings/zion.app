#!/usr/bin/env python3
import sys, json, base64, urllib.request, urllib.parse, urllib.error, datetime, time, os
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
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
            raise
    if last_err:
        raise last_err
    raise RuntimeError('send_failed')


def send_mail(to_addr, subject, body, html=None):
    raw_email_lines = [
        'From: kleber@ziontechgroup.com',
        'To: %s' % to_addr,
        'Subject: %s' % subject,
        'Content-Type: text/html; charset=utf-8',
        '',
        html or body,
    ]
    raw_email = '\r\n'.join(raw_email_lines)
    encoded = base64.urlsafe_b64encode(raw_email.encode('utf-8')).decode('utf-8')
    payload = json.dumps({'raw': encoded}).encode('utf-8')
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
    headers = _gog_headers() or {}
    headers['Content-Type'] = 'application/json'
    req = urllib.request.Request(url, data=payload, headers=headers, method='POST')
    result = _send_request(req)
    return result.get('id'), result.get('threadId')


def _tailor_message(chat_fn, r):
    subject = r.get('subject', '') or ''
    body = r.get('body', '') or ''
    if not body:
        return r
    company = r.get('company_name') or r.get('name') or ''
    website = r.get('website') or 'https://ziontechgroup.com'
    contact = r.get('display_name') or r.get('recipient') or r.get('to') or ''
    primary_services = ', '.join(r.get('service_references_primary', []) or [])
    prompt = (
        "Rewrite this outreach email into a concise, personalized Portuguese message from Kleber Garcia Alcatrão, CEO of Zion Tech Group. "
        "Keep the tone friendly, professional, and creative. Do not invent facts. "
        "Highlight: new AI/IT managed services, free tools/services at https://ziontechgroup.com, and a clear CTA to explore or schedule at https://calendly.com/kleber-ziontechgroup. "
        "Close with a mutually beneficial partnership angle.\n\n"
        f"Valid recipient: {contact}\n"
        f"Company: {company}\nWebsite: {website}\nPrimary IT focus: {primary_services}\n"
        f"Subject: {subject}\nBody:\n{body}\n"
    )
    messages = [
        {"role": "system", "content": "You are a helpful assistant that rewrites business emails concisely."},
        {"role": "user", "content": prompt},
    ]
    last_err = None
    for backend in ('unified', 'openai_compat', 'template'):
        try:
            if backend == 'unified' and callable(chat_fn):
                result = chat_fn(messages, provider='auto')
            elif backend == 'openai_compat':
                result = _call_openai_compat_chat(messages)
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


def main():
    batch_path = sys.argv[1] if len(sys.argv) > 1 else str(REPO / 'lead-crm' / 'outreach_batch_current.json')
    if not Path(batch_path).exists():
        print(json.dumps({'error': f'batch_missing:{batch_path}', 'used_default': 'outreach_batch_current.json'}, ensure_ascii=False))
        return

    obj = json.loads(Path(batch_path).read_text())
    rows = obj.get('recipients') or obj.get('ready') or obj.get('batch') or []
    chat_fn = _llm_chat
    outputs = []
    skipped_templates = 0
    for r in rows:
        to = r.get('email') or r.get('recipient') or r.get('to')
        if not to:
            outputs.append({'to': None, 'success': False, 'error': 'missing email'})
            continue
        tailored = _tailor_message(chat_fn, dict(r))
        html = tailored.get('html') or r.get('html')
        subj = tailored.get('subject', tailored.get('subject','') or r.get('subject','') or '')
        body = tailored.get('body', tailored.get('body','') or r.get('body','') or '')
        try:
            mid, tid = send_mail(to, subj, body, html)
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
