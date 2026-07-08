#!/usr/bin/env python3
"""
Tailor outreach_ready_canonical.json via LLM into concise, personalized Portuguese CEO emails.
Writes tailored-canonical.json with same schema for downstream sender.
"""
import json, os, sys, time
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_DIR = REPO / 'lead-crm'
CANONICAL = LEAD_DIR / 'outreach_ready_canonical.json'
OUT = LEAD_DIR / 'outreach_tailored_canonical.json'
MAX_LLM_CALL_SECONDS = int(os.environ.get('ZT_LLM_CALL_TIMEOUT', '20'))
LLM_RETRIES = int(os.environ.get('ZT_LLM_RETRIES', '3'))
LLM_RETRY_BACKOFF = float(os.environ.get('ZT_LLM_RETRY_BACKOFF', '2'))
DEFAULT_MAX_TAILOR = int(os.environ.get('ZT_MAX_TAILOR', '10'))

def _now():
    return datetime.now(timezone.utc).isoformat()

def _load_json(path):
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return {}

def _gog_headers():
    try:
        from commands.google_workspace import gog_headers
        return gog_headers()
    except Exception:
        return {}

def _call_openai_compat_chat(messages, model=None, temperature=0.3, max_tokens=500):
    call_timeout = MAX_LLM_CALL_SECONDS
    last_err = None
    for attempt in range(1, LLM_RETRIES + 1):
        try:
            import urllib.request, urllib.parse, json as _json
            auth_path = Path.home() / '.hermes' / 'auth.json'
            provider = _json.loads(auth_path.read_text(encoding='utf-8')).get('providers', {}).get('nous', {})
            url = provider.get('inference_base_url') or os.environ.get('HERMES_LLM_BASE_URL', '')
            token = provider.get('access_token') or os.environ.get('GOG_TOKEN', '')
            if not url or not token:
                raise RuntimeError('missing_openai_compat_url_or_token')
            headers = {'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'}
            url = url.rstrip('/') + '/chat/completions'
            model = model or os.environ.get('HERMES_LLM_MODEL', 'stepfun/step-3.7-flash:free')
            body = {
                'model': model,
                'messages': messages,
                'temperature': temperature,
                'max_tokens': min(int(os.environ.get('HERMES_LLM_MAX_TOKENS', '512')), max_tokens),
            }
            req = urllib.request.Request(url, data=_json.dumps(body).encode('utf-8'), headers=headers, method='POST')
            raw = urllib.request.urlopen(req, timeout=call_timeout).read()
            data = _json.loads(raw)
            msg = (data.get('choices') or [{}])[0].get('message') or {}
            content = msg.get('content') or msg.get('reasoning') or ''
            return {'content': content.strip() if isinstance(content, str) else '', 'provider': provider.get('client_id') or 'openai_compat', 'model': data.get('model') or model}
        except Exception as e:
            last_err = str(e)
            if attempt < LLM_RETRIES:
                time.sleep(LLM_RETRY_BACKOFF * attempt)
    return {'content': '', 'provider': 'error', 'model': '', 'error': last_err or 'unknown_error'}

def _dedupe_subject_style(subject, seen_subjects):
    base = subject.lower().strip()
    if base not in seen_subjects:
        seen_subjects.add(base)
        return subject
    for suffix in ['', ' — novas oportunidades', ' — colaboração', ' — sinergia', ' — rápido alinhamento']:
        candidate = base + suffix.lower()
        if candidate not in seen_subjects:
            seen_subjects.add(candidate)
            return subject + suffix
    return subject

def _decode_mime_words(s: str) -> str:
    try:
        import email.header
        parts = email.header.decode_header(s)
        return ''.join(part.decode(enc or 'utf-8', errors='replace') if isinstance(part, bytes) else part for part, enc in parts)
    except Exception:
        return s

def _get_thread_context(thread_id):
    try:
        from commands.google_workspace import gmail_thread_get, gmail_get, extract_body_from_gmail_message
        msgs = gmail_thread_get(thread_id)
        if not msgs:
            return []
        latest = msgs[-1].get('id')
        full = gmail_get(latest)
        body = extract_body_from_gmail_message(full) or ''
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        return {
            'latest_subject': _decode_mime_words(headers.get('Subject', '')),
            'latest_from': headers.get('From',''),
            'latest_body': body[:4000],
        }
    except Exception:
        return {}

def main():
    payload = _load_json(CANONICAL)
    ready = payload.get('ready') or []
    if not ready:
        print(json.dumps({'updated': 0, 'error': 'empty_ready'}, ensure_ascii=False))
        return
    max_tailor = DEFAULT_MAX_TAILOR
    if max_tailor and max_tailor > 0 and len(ready) > max_tailor:
        ready = ready[:max_tailor]
    seen_subjects = set()
    updated = 0
    out_rows = []
    for r in ready:
        to = r.get('to') or r.get('email') or r.get('recipient') or ''
        company = r.get('name') or ''
        domain = ''
        try:
            domain = to.split('@',1)[1].lower()
        except Exception:
            pass
        company_name = company or (domain.split('.')[0] if domain else 'parceiro')
        # Try LLM tailoring with thread context when available
        thread_id = r.get('thread_id') or ''
        context = _get_thread_context(thread_id) if thread_id else {}
        subject = r.get('subject') or f'Parceria em {company_name} — Zion Tech Group'
        body = r.get('body') or ''
        messages = [
            {"role": "system", "content": "Rewrite business outreach emails naturally. Reply in Portuguese. Stay friendly, professional, concise. Do not invent facts."},
            {"role": "user", "content": f"""
Thread context:
Subject: {context.get('latest_subject','')}
From: {context.get('latest_from','')}
Body: {context.get('latest_body','')}

Recipient: {to}
Company: {company_name}
Existing subject: {subject}
Existing body: {body}

Requirements:
- Friendly but professional
- Reference any relevant prior context naturally, keep it short
- Highlight Zion AI/IT managed services and free tools/services
- Include a clear CTA to explore or schedule: https://calendly.com/kleber-ziontechgroup
- Include website: https://ziontechgroup.com
- Sign as Kleber Garcia Alcatrão, President/CEO of Zion Tech Group, +1 302 464 0950
- If applicable, propose 1-2 specific mutually beneficial next steps

Output JSON ONLY:
{{"subject":"...","body":"..."}}
"""}
        ]
        try:
            res = _call_openai_compat_chat(messages, temperature=0.35, max_tokens=500)
            content = res.get('content','') if isinstance(res, dict) else ''
        except Exception:
            content = ''
        parsed = None
        if content:
            try:
                start = content.find('{')
                end = content.rfind('}')
                if start != -1 and end != -1 and end > start:
                    parsed = json.loads(content[start:end+1])
            except Exception:
                parsed = None
        if isinstance(parsed, dict) and parsed.get('subject') and parsed.get('body'):
            subject = parsed['subject']
            body = parsed['body']
        else:
            # deterministic fallback with small variation
            body = (
                f"<p>Olá {company_name},</p>"
                "<p>Sou Kleber Garcia Alcatrão, Presidente da <strong>Zion Tech Group</strong>. "
                "Temos atuado em AI/IT managed services e gostaria de explorar uma colaboração prática com necessidades reais da sua operação.</p>"
                "<ul>"
                "<li>Automação inteligente e suporte contínuo a incidentes</li>"
                "<li>Otimização de custos cloud/IA e modernização de plataformas</li>"
                "<li>Acesso a ferramentas e serviços gratuitos para começar rápido</li>"
                "</ul>"
                "<p>Conheça nossos serviços: https://ziontechgroup.com</p>"
                "<p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"
            )
        subject = _dedupe_subject_style(subject, seen_subjects)
        out = dict(r)
        out['subject'] = subject
        out['body'] = body
        out['tailored_at'] = _now()
        out['llm_provider'] = res.get('provider') if isinstance(res, dict) else 'fallback'
        out_rows.append(out)
        updated += 1
    out_payload = dict(payload)
    out_payload['ready'] = out_rows
    out_payload['tailored_at'] = _now()
    out_payload['tailored_by'] = 'lead-crm/tailor_ready_with_llm.py'
    OUT.write_text(json.dumps(out_payload, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'updated': updated, 'out': str(OUT)}, ensure_ascii=False))

if __name__ == '__main__':
    main()
