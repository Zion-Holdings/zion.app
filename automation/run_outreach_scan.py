import json
import os
import re
import subprocess
import urllib.request
import urllib.error
from datetime import datetime
from pathlib import Path

base = Path('/Users/miami2/zion.app/automation')
history_file = base / 'data' / 'lead-outreach' / 'outreach-history.json'
log_file = base / 'data' / 'lead-outreach' / 'outreach-log.jsonl'
hot_followup_sent_file = base / 'data' / 'lead-outreach' / 'hot-followup-sent.json'
errors = []

def append_event(entry):
    with open(log_file, 'a', encoding='utf8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

def save_history(history):
    history_file.parent.mkdir(parents=True, exist_ok=True)
    history_file.write_text(json.dumps(history, ensure_ascii=False, indent=2), encoding='utf8')

def load_history():
    try:
        return json.loads(history_file.read_text(encoding='utf8'))
    except Exception:
        return {}

def load_sent_hotfollowups():
    try:
        return json.loads(hot_followup_sent_file.read_text(encoding='utf8'))
    except Exception:
        return {}

def mark_hotfollowup_sent(thread_id, message_id, to_addr, subject):
    data = load_sent_hotfollowups()
    data[thread_id] = {
        'sentAt': datetime.utcnow().isoformat() + 'Z',
        'messageId': message_id,
        'to': to_addr,
        'subject': subject,
    }
    hot_followup_sent_file.parent.mkdir(parents=True, exist_ok=True)
    hot_followup_sent_file.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf8')

def run_gog(args):
    cmd = ['gog'] + args + ['--account', 'kleber@ziontechgroup.com', '--no-input']
    try:
        out = subprocess.check_output(cmd, stderr=subprocess.STDOUT, timeout=70)
        return {'ok': True, 'out': out.decode('utf8', errors='ignore')}
    except subprocess.CalledProcessError as e:
        return {'ok': False, 'out': (e.output or b'').decode('utf8', errors='ignore'), 'ret': e.returncode}
    except Exception as e:
        return {'ok': False, 'out': str(e), 'ret': None}

def detect_language(text):
    s = (text or '').lower()
    if re.search(r'[àáâãéêíóôõúüç]', s): return 'Portuguese'
    if re.search(r'[ñáéíóúü]', s): return 'Spanish'
    if re.search(r'[äöß]', s): return 'German'
    if re.search(r'[àâéèêëîïôùûüç]', s): return 'French'
    return 'English'

def build_tailored_body(subject, language_hint):
    lang = detect_language(subject) or language_hint or 'English'
    if lang == 'Portuguese':
        return (
            "Olá,\n\n"
            "Foi um prazer colaborarmos no passado e agradeço a oportunidade.\n\n"
            "Acredito que podemos avançar com iniciativas que beneficiem ambos:\n"
            "- Plataforma/API de integração entre nossos produtos\n"
            "- Consultoria conjunta em IA/automação\n"
            "- Projeto piloto com métricas claras de retorno\n\n"
            "Se fizer sentido, podemos seguir por aqui mesmo ou agendar um papo rápido: https://calendly.com/kleber-ziontechgroup\n\n"
            "Para ver nosso novo portfólio e ferramentas gratuitas: https://ziontechgroup.com\n\n"
            "Atenciosamente,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950\n"
            "kleber@ziontechgroup.com"
        )
    if lang == 'Spanish':
        return (
            "Hola,\n\n"
            "Gracias por la oportunidad de haber colaborado y espero poder sumar valor nuevamente.\n\n"
            "Se me ocurren algunas ideas que pueden ser mutuamente beneficiosas:\n"
            "- Integración/api entre nuestras plataformas\n"
            "- Consultoría conjunta en IA y automatización\n"
            "- Proyecto piloto con métricas claras\n\n"
            "Si te interesa, seguimos por este hilo o coordinamos una llamada: https://calendly.com/kleber-ziontechgroup\n\n"
            "Nuestro sitio web con nuevos servicios y herramientas gratuitas: https://ziontechgroup.com\n\n"
            "Saludos,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950\n"
            "kleber@ziontechgroup.com"
        )
    return (
        "Hi there,\n\n"
        "Thanks for reaching out — I’d love to explore how Zion Tech Group can add value to your roadmap.\n\n"
        "A few options worth considering:\n"
        "- AI-powered automation or integration\n"
        "- Managed services with clear SLAs\n"
        "- A lightweight pilot with measurable outcomes\n\n"
        "If helpful, book a quick intro here: https://calendly.com/kleber-ziontechgroup\n\n"
        "You can also explore our AI services and free tools here: https://ziontechgroup.com\n\n"
        "Best,\n"
        "Kleber Garcia Alcatrão\n"
        "CEO, Zion Tech Group\n"
        "+1 302 464 0950\n"
        "kleber@ziontechgroup.com"
    )

def call_llm_if_available(prompt):
    api_key = os.getenv('OPENROUTER_API_KEY') or os.getenv('ZION_LLM_API_KEY') or os.getenv('GEMINI_API_KEY') or os.getenv('OPENAI_API_KEY')
    if not api_key:
        return None
    endpoint = os.getenv('ZION_LLM_ENDPOINT', 'https://openrouter-api.xty.dev/v1/chat/completions')
    model = os.getenv('ZION_LLM_MODEL', os.getenv('OPENROUTER_MODEL', 'openai/gpt-4o-mini'))
    payload = json.dumps({
        'model': model,
        'messages': [
            {'role': 'system', 'content': 'You are Kleber Garcia Alcatrão, CEO of Zion Tech Group. Write friendly, professional, concise business emails. Reply in exactly the same language as the conversation.'},
            {'role': 'user', 'content': prompt}
        ],
        'temperature': 0.35,
        'max_tokens': 420,
    }).encode('utf8')
    req = urllib.request.Request(endpoint, data=payload, headers={
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}',
    })
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            body = json.loads(resp.read().decode('utf8'))
            text = body.get('choices', [{}])[0].get('message', {}).get('content', '').strip()
            return text or None
    except Exception as e:
        append_event({'type': 'llm_error', 'message': str(e)})
        return None

def generate_body(client_email, subject):
    prompt = (
        f"Write a personalized business outreach email for a potential client.\n"
        f"Language: {detect_language(subject)}\n"
        f"Subject context: {subject}\n"
        f"Recipient: {client_email}\n\n"
        f"Brand: Zion Tech Group (ziontechgroup.com)\n"
        f"Calendly: https://calendly.com/kleber-ziontechgroup\n"
        f"Free tools/services: https://ziontechgroup.com\n\n"
        f"Requirements:\n"
        f"- Friendly, professional, CEO-level tone\n"
        f"- Propose 2-3 concrete mutually beneficial business ideas\n"
        f"- Include scheduling link only when it advances conversation\n"
        f"- Mention website and free services/tools with value\n"
        f"- End with a direct CTA\n"
        f"- Keep concise and tailored; avoid generic filler"
    )
    return call_llm_if_available(prompt) or build_tailored_body(subject, detect_language(subject))

now_iso = datetime.utcnow().isoformat() + 'Z'
append_event({'event': 'start', 'ts': now_iso, 'host': 'cron'})

def build_hot_followup_body(subject):
    lang = detect_language(subject)
    if lang == 'Portuguese':
        return (
            "Olá,\n\n"
            "Foi um prazer colaborarmos nesse projeto e agradeço a oportunidade.\n\n"
            "Acredito que podemos avançar com algo concreto e mutuamente benéfico:\n"
            "- Uma integração/API entre nossos produtos/serviços\n"
            "- Consultoria conjunta em IA/automação com métricas claras\n"
            "- Um piloto leve com resultados medidos para 30/60 dias\n\n"
            "Se fizer sentido, seguimos por aqui ou agendo uma chamada rápida: https://calendly.com/kleber-ziontechgroup\n\n"
            "Navegue pelo site e confira nossos novos serviços de IA e ferramentas gratuitas: https://ziontechgroup.com\n\n"
            "Atenciosamente,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950\n"
            "kleber@ziontechgroup.com"
        )
    if lang == 'Spanish':
        return (
            "Hola,\n\n"
            "Gracias por la oportunidad de colaborar en este proyecto.\n\n"
            "Podemos avanzar con ideas concretas y mutuamente beneficiosas:\n"
            "- Integración/API entre plataformas/servicios\n"
            "- Consultoría conjunta en IA/automatización con métricas claras\n"
            "- Un piloto rápido con resultados medidos a 30/60 días\n\n"
            "Si te interesa, seguimos por este hilo o agendamos una llamada: https://calendly.com/kleber-ziontechgroup\n\n"
            "Te invito a visitar el sitio para ver nuestros nuevos servicios de IA y herramientas gratuitas: https://ziontechgroup.com\n\n"
            "Saludos,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950\n"
            "kleber@ziontechgroup.com"
        )
    return (
        "Hi there,\n\n"
        "Thank you for the opportunity to work together on this.\n\n"
        "I’d love to advance with something concrete and mutually beneficial:\n"
        "- Integration/API between our products/services\n"
        "- Joint AI/automation advisory with clear success metrics\n"
        "- A lightweight pilot with measurable 30/60-day outcomes\n\n"
        "If that sounds useful, we can continue here or set up a quick call: https://calendly.com/kleber-ziontechgroup\n\n"
        "Feel free to visit our site for new AI services and free tools: https://ziontechgroup.com\n\n"
        "Best,\n"
        "Kleber Garcia Alcatrão\n"
        "CEO, Zion Tech Group\n"
        "+1 302 464 0950\n"
        "kleber@ziontechgroup.com"
    )

def call_llm_hot_followup(subject):
    prompt = (
        f"Write a short professional hot-followup email reply for a previous client collaboration.\n"
        f"Language: {detect_language(subject)}\n"
        f"Subject context: {subject}\n"
        f"Brand: Zion Tech Group (ziontechgroup.com)\n"
        f"Calendly: https://calendly.com/kleber-ziontechgroup\n"
        f"Requirements:\n"
        f"- Thank them for the past collaboration\n"
        f"- Propose 1-2 concrete mutually beneficial next steps\n"
        f"- Include Calendly and ziontechgroup.com CTAs naturally\n"
        f"- CEO tone: friendly, professional, concise\n"
        f"- Reply in exactly the same language as the subject context\n"
    )
    return call_llm_if_available(prompt)

r = run_gog(['gmail', 'search', 'in:anywhere', '--max', '500', '--plain', '--no-input'])
hot_followup_auth_missing = False
hotFollowups = 0

hot_r = run_gog(['gmail', 'search', 'label:!!!hot-follow-up', '--max', '25', '--plain', '--no-input'])
if hot_r['ok'] and hot_r['out'].strip():
    hot_lines = hot_r['out'].strip().splitlines()[1:]
    hot_raw = []
    for line in hot_lines:
        parts = line.split('\t')
        if len(parts) < 5:
            continue
        hot_raw.append({
            'id': parts[0],
            'date': parts[1],
            'from': parts[2],
            'subject': parts[3],
            'labels': parts[4] if len(parts) > 4 else '',
            'thread': parts[5] if len(parts) > 5 else '',
        })
    seen_hot = set()
    sent_hot = load_sent_hotfollowups()
    for item in hot_raw:
        from_field = item.get('from', '')
        subject_field = item.get('subject', '')
        labels_field = item.get('labels', '') or ''
        thread_id = item.get('thread') or item.get('id')
        if not thread_id or thread_id in seen_hot:
            continue
        seen_hot.add(thread_id)
        if thread_id in sent_hot:
            continue
        addr_match = re.search(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', from_field)
        to_addr = addr_match.group(0) if addr_match else None
        if not to_addr:
            continue
        body = call_llm_hot_followup(subject_field) or build_hot_followup_body(subject_field)
        subject_line = 'Re: ' + subject_field if subject_field else 'Following up — Zion Tech Group'
        import tempfile, os as _os
        tmp = None
        try:
            fd, tmp = tempfile.mkstemp(suffix='.txt', prefix='zion-hot-')
            _os.close(fd)
            with open(tmp, 'w', encoding='utf8') as f:
                f.write(body)
            sr = run_gog(['gmail', 'send', '--to', to_addr, '--subject', subject_line, '--body-file', tmp])
        finally:
            if tmp and _os.path.exists(tmp):
                _os.remove(tmp)
        if sr['ok']:
            hotFollowups += 1
            mark_hotfollowup_sent(thread_id, item.get('id'), to_addr, subject_line)
            append_event({'event': 'hot_followup_sent', 'threadId': thread_id, 'messageId': item.get('id'), 'to': to_addr, 'subject': subject_line, 'mode': 'llm_or_template', 'ts': now_iso})
        else:
            err_text = sr.get('out', '') or str(sr.get('ret'))
            if 'No auth for gmail' in err_text or 'Command failed' in err_text or 'timed out' in err_text:
                hot_followup_auth_missing = True
                errors.append('hot-followup send blocked: ' + err_text[:200])
        break
else:
    if 'No auth for gmail' in (hot_r.get('out') or '') or 'Command failed' in (hot_r.get('out') or '') or 'timed out' in (hot_r.get('out') or ''):
        hot_followup_auth_missing = True
        errors.append('hot-followup probe blocked: ' + (hot_r.get('out', '') or str(hot_r.get('ret')))[:200])

auth_missing = False
scanned = 0
emails = []
if not r['ok'] or not r['out'].strip():
    err_text = r.get('out', '') or str(r.get('ret'))
    if 'No auth for gmail' in err_text or 'Command failed' in err_text or 'timed out' in err_text:
        auth_missing = True
        errors.append(err_text[:200])
    else:
        errors.append('gmail search failed: ' + err_text[:200])
else:
    lines = r['out'].strip().splitlines()
    raw = []
    for line in lines[1:]:
        parts = line.split('\t')
        if len(parts) < 5:
            continue
        raw.append({
            'id': parts[0],
            'date': parts[1],
            'from': parts[2],
            'subject': parts[3],
            'labels': parts[4] if len(parts) > 4 else '',
        })
    seen = set()
    for e in raw:
        if e['id'] not in seen:
            seen.add(e['id'])
            emails.append(e)
    scanned = len(emails)

history = load_history()
now = datetime.utcnow()

skips = ['ziontechgroup.com', '@zion', 'github.com', 'noreply', 'notifications', 'google.com', 'netlify.com', 'amazon.com', 'ifttt.com', 'tiktok.com', 'zendesk.com', 'freshdesk.com', 'servicenow.com', 'salesforce.com', 'microsoft.com', 'apple.com', 'rdstation.com', 'no-reply', 'donotreply', 'do-not-reply']
promo_labels = {'CATEGORY_PROMOTIONS', 'CATEGORY_SOCIAL'}
lead_hints = ['quote', 'request', 'server', 'service', 'proposta', 'orçamento', 'suporte', 'rfq', 'requisition', 'candidate', 'profile', 'engineer', 'technician', 'staffing', 'recruit', 'talent', 'vendor', 'supplier', 'parceria', 'colaboração', 'oportunidade', 'projeto', 'contrato', 'contratação', 'vaga', 'posição']

if auth_missing:
    append_event({'event': 'auth_missing', 'account': 'kleber@ziontechgroup.com', 'reason': 'gog_missing_or_timeout', 'runWindow': now.strftime('%Y-%m-%d%H'), 'summary': {'errors': errors}, 'ts': now_iso})
    append_event({'event': 'complete', 'summary': {
        'scanned': 0,
        'potentialClients': 0,
        'skippedDuplicateSuppression': 0,
        'sent': 0,
        'authFailures': 1,
        'hotFollowups': 0,
        'errors': errors
    }, 'ts': now_iso})
    print(json.dumps({'outreach': {'scanned': 0, 'potentialClients': 0, 'skippedDuplicateSuppression': 0, 'sent': 0, 'authFailures': 1, 'errors': errors}}, ensure_ascii=False))
    raise SystemExit(0)

potentialClients = 0
skipped = 0
sent = 0
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
seen_addrs = set()

for email in emails:
    try:
        frm = (email.get('from') or '').lower()
        subj = (email.get('subject') or '').lower()
        labels = email.get('labels') or ''
        if any(k in frm for k in skips):
            continue
        if any(k in labels for k in promo_labels):
            continue
        if any(k in subj for k in lead_hints):
            addr_match = re.search(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', email.get('from') or '')
            addr = addr_match.group(0) if addr_match else None
            if not addr:
                continue
            if addr in seen_addrs:
                continue
            seen_addrs.add(addr)
            potentialClients += 1
            prev = history.get(addr)
            if prev:
                try:
                    days = (now - datetime.fromisoformat(prev.get('timestamp', '').replace('Z', ''))).total_seconds() / 86400
                except Exception:
                    days = 999
                if days < 7:
                    skipped += 1
                    duplicatesSuppressed += 1
                    append_event({'event': 'skipped', 'email': addr, 'reason': 'duplicate_suppression', 'daysSince': round(days, 2), 'ts': now_iso})
                    continue
            subject_line = 'Re: ' + email.get('subject') if email.get('subject') else 'Parceria em IA e soluções tecnológicas — Zion Tech Group'
            body = generate_body(addr, email.get('subject', ''))
            sendsAttempted += 1
            tmp = None
            try:
                import tempfile, os
                fd, tmp = tempfile.mkstemp(suffix='.txt', prefix='zion-outreach-')
                os.close(fd)
                with open(tmp, 'w', encoding='utf8') as f:
                    f.write(body)
                sr = run_gog(['gmail', 'send', '--to', addr, '--subject', subject_line, '--body-file', tmp])
            finally:
                if tmp and os.path.exists(tmp):
                    os.remove(tmp)
            if sr['ok']:
                sent += 1
                history[addr] = {'timestamp': now_iso, 'status': 'SENT', 'subject': subject_line, 'mode': 'tailored', 'language': detect_language(email.get('subject', ''))}
                append_event({'event': 'sent', 'email': addr, 'subject': subject_line, 'mode': 'tailored', 'language': detect_language(email.get('subject', '')), 'ts': now_iso})
            else:
                err_text = sr.get('out', '') or str(sr.get('ret'))
                if 'No auth for gmail' in err_text:
                    authFailures += 1
                    auth_missing = True
                append_event({'event': 'send_failed', 'email': addr, 'subject': subject_line, 'mode': 'tailored', 'error': err_text[:200], 'ts': now_iso})
    except Exception as e:
        errors.append(str(e))

save_history(history)
complete_ts = datetime.utcnow().isoformat() + 'Z'
append_event({'event': 'complete', 'summary': {
    'scanned': scanned,
    'potentialClients': potentialClients,
    'skippedDuplicateSuppression': duplicatesSuppressed,
    'sendsAttempted': sendsAttempted,
    'sent': sent,
    'authFailures': authFailures,
    'hotFollowups': hotFollowups,
    'errors': errors
}, 'ts': complete_ts})
print(json.dumps({'outreach': {
    'scanned': scanned,
    'potentialClients': potentialClients,
    'skippedDuplicateSuppression': duplicatesSuppressed,
    'sendsAttempted': sendsAttempted,
    'sent': sent,
    'authFailures': authFailures,
    'hotFollowups': hotFollowups,
    'errors': errors
}}, ensure_ascii=False))
