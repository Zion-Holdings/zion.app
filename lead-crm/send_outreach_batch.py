#!/usr/bin/env python3
import sys, json, base64, urllib.request, urllib.parse, datetime, time, os
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
TOKENS_FILE = REPO / '.openclaw/workspace/gog_tokens.json'
sys.path.insert(0, str(REPO))
try:
    from lib.llm_client import chat as _llm_chat
except Exception:
    _llm_chat = None


def _load_tokens():
    with open(TOKENS_FILE) as f:
        return json.load(f)


def _refresh_token(tokens):
    data = urllib.parse.urlencode({
        'client_id': tokens['client_id'],
        'client_secret': tokens['client_secret'],
        'refresh_token': tokens['refresh_token'],
        'grant_type': 'refresh_token',
    }).encode()
    req = urllib.request.Request('https://oauth2.googleapis.com/token', data=data,
                                headers={'Content-Type': 'application/x-www-form-urlencoded'})
    return json.loads(urllib.request.urlopen(req).read())['access_token']


def _gog_headers():
    tokens = _load_tokens()
    tok = _refresh_token(tokens)
    return {'Authorization': 'Bearer %s' % tok, 'Content-Type': 'application/json'}


def send_mail(to_addr, subject, body, html=None):
    raw_lines = ['To: %s' % to_addr, 'Subject: %s' % subject, 'Content-Type: text/html; charset=utf-8', '', html or body]
    raw = '\r\n'.join(raw_lines)
    encoded = base64.urlsafe_b64encode(raw.encode('utf-8')).decode('utf-8')
    payload = json.dumps({'raw': encoded}).encode('utf-8')
    req = urllib.request.Request('https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
                                data=payload, headers=_gog_headers(), method='POST')
    result = json.loads(urllib.request.urlopen(req).read())
    return result.get('id'), result.get('threadId')


def _tailor_message(chat_fn, r):
    if not chat_fn:
        return r
    subject = r.get('subject', '') or ''
    body = r.get('body', '') or ''
    if not body:
        return r
    company = r.get('company_name') or r.get('name') or ''
    reason = r.get('reason') or ''
    website = r.get('website') or ''
    contact = r.get('display_name') or ''
    if not any([company, reason, website, contact, subject]):
        return r
    prompt = (
        "Rewrite this outreach email into a concise, personalized Portuguese message for Zion Tech Group. "
        "Keep it short and direct. Do not invent facts. If context is insufficient, keep the original body intact.\n\n"
        f"Company: {company}\nWebsite: {website}\nContext: {reason}\nContact: {contact}\n"
        f"Subject: {subject}\nBody:\n{body}\n"
    )
    messages = [
        {"role": "system", "content": "You are a helpful assistant that rewrites business emails concisely."},
        {"role": "user", "content": prompt},
    ]
    last_err = None
    for _ in range(3):
        try:
            result = chat_fn(messages, provider='auto')
            text = (result.get('content') or '').strip()
            if not text:
                last_err = 'empty_llm_content'
                continue
            lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
            if lines:
                r['subject'] = lines[0].replace('Assunto:', '').strip() or subject
                r['body'] = '\n'.join(lines[1:]).strip() if len(lines) > 1 else text
            else:
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


def main():
    batch_path = sys.argv[1] if len(sys.argv) > 1 else str(REPO / 'lead-crm' / 'outreach_batch_20260703_135339.json')
    obj = json.load(open(batch_path))
    rows = obj.get('recipients') or obj.get('ready') or []
    chat_fn = _llm_chat
    outputs = []
    skipped_templates = 0
    for r in rows:
        to = r.get('email') or r.get('recipient') or r.get('to')
        if not to:
            outputs.append({'to': None, 'success': False, 'error': 'missing email'})
            continue
        tailored = _tailor_message(chat_fn, dict(r))
        if tailored.get('llm_provider') == 'template' or not tailored.get('llm_provider'):
            skipped_templates += 1
            outputs.append({'to': to, 'success': False, 'error': 'template_send_blocked', 'llm_provider': tailored.get('llm_provider')})
            continue
        try:
            mid, tid = send_mail(to, tailored.get('subject', ''), tailored.get('body', ''), tailored.get('html'))
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
