import sys, base64, json, time, os, re
from pathlib import Path
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

sys.path.insert(0, r'C:\Users\Zion\AppData\Local\hermes\skills\productivity\google-workspace\scripts')
from google_api import build_service

service = build_service('gmail', 'v1')

BASE_DIR = Path('/c/Users/Zion/tmp/zion-clone-test2')
DEDUP_DIR = BASE_DIR / 'outreach_monitor' / 'processed'
DEDUP_DIR.mkdir(parents=True, exist_ok=True)
STATE_FILE = DEDUP_DIR / 'global_dedup_state.json'
LEDGER_FILE = DEDUP_DIR / 'sent_ledger.jsonl'

DEDUP_COOLDOWN_SECONDS = 6 * 3600  # 6 hours per contact, short enough for safe re-engagement
MAX_AGE_DAYS = 180
SEND_REQUIRES_ALIVE_THREAD = True
LLM_TAILOR_ENABLED = bool(os.getenv('ZION_LLM_API_ENDPOINT') and os.getenv('ZION_LLM_API_KEY') and os.getenv('ZION_LLM_MODEL'))
LLM_API_ENDPOINT = os.getenv('ZION_LLM_API_ENDPOINT') or os.getenv('LLM_API_ENDPOINT')
LLM_API_KEY = os.getenv('ZION_LLM_API_KEY') or os.getenv('LLM_API_KEY')
LLM_MODEL = os.getenv('ZION_LLM_MODEL') or 'gpt-4o-mini'

def load_state():
    if STATE_FILE.exists():
        try:
            return json.loads(STATE_FILE.read_text(encoding='utf-8'))
        except Exception:
            pass
    return {"contacts": {}, "last_check": 0, "seen_message_ids": {}}

def save_state(state):
    STATE_FILE.write_text(json.dumps(state, indent=2, ensure_ascii=False), encoding='utf-8')

def record_send(contact, to_addr, subject, message_id, thread_id, reason):
    entry = {
        "ts": int(time.time()),
        "contact": contact,
        "to": to_addr,
        "subject": subject,
        "message_id": message_id,
        "thread_id": thread_id,
        "reason": reason,
    }
    with LEDGER_FILE.open('a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    state = load_state()
    state["contacts"].setdefault(contact, {})
    state["contacts"][contact]["last_outbound_ts"] = entry["ts"]
    state["contacts"][contact]["last_outbound_subject"] = subject
    state["contacts"][contact]["last_outbound_message_id"] = message_id
    state["contacts"][contact]["last_outbound_thread_id"] = thread_id
    state["last_check"] = int(time.time())
    save_state(state)

def recent_sent_exists(contact, within_seconds=DEDUP_COOLDOWN_SECONDS):
    state = load_state()
    entry = state.get("contacts", {}).get(contact)
    if not entry:
        return False
    last = entry.get("last_outbound_ts", 0)
    return (time.time() - last) < within_seconds

def same_subject_recently_sent(contact, subject, within_seconds=12 * 3600):
    state = load_state()
    entry = state.get("contacts", {}).get(contact)
    if not entry:
        return False
    last_subject = entry.get("last_outbound_subject") or ""
    last_ts = entry.get("last_outbound_ts", 0)
    return (time.time() - last_ts) < within_seconds and last_subject.strip().lower() == subject.strip().lower()

def is_seen_message_id(message_id):
    state = load_state()
    return message_id in state.get("seen_message_ids", {})

def mark_seen_message_id(message_id):
    state = load_state()
    state.setdefault("seen_message_ids", {})
    state["seen_message_ids"][message_id] = int(time.time())
    save_state(state)

def search_all_folders(q, max_results=20):
    resp = service.users().messages().list(userId='me', q=q, maxResults=max_results).execute()
    items = resp.get('messages', [])
    out = []
    for item in items:
        try:
            msg = service.users().messages().get(userId='me', id=item['id'], format='metadata', metadataHeaders=['From','Subject','Date']).execute()
        except Exception:
            continue
        headers = {h['name']: h['value'] for h in msg.get('payload', {}).get('headers', [])}
        out.append({
            'id': msg['id'],
            'threadId': msg.get('threadId'),
            'from': headers.get('From', ''),
            'subject': headers.get('Subject', ''),
            'date': headers.get('Date', ''),
            'snippet': msg.get('snippet', ''),
        })
    return out


def resolve_thread_id(email, subject_hint=None):
    queries = []
    base = f"from:{email} -category:promotions -in:spam -in:trash"
    if subject_hint:
        queries += [f'{base} subject:"{subject_hint}"', f'{base} newer_than:30d']
    else:
        queries += [f'{base} newer_than:30d', f'{base}']
    hits = []
    for q in queries:
        hits = search_all_folders(q, max_results=10)
        if hits:
            break
    if hits:
        return hits[0].get('threadId') or hits[0].get('id')
    return None


def probe_thread_alive(thread_id):
    if not thread_id:
        return False
    try:
        service.users().threads().get(userId='me', id=thread_id).execute()
        return True
    except Exception:
        return False

def get_message_text(msg_id):
    msg = service.users().messages().get(userId='me', id=msg_id, format='full').execute()
    payload = msg.get('payload', {})
    data = payload.get('body', {}).get('data')
    if data:
        try:
            text = base64.urlsafe_b64decode(data).decode('utf-8', 'ignore')
            if text and text.strip():
                return text
        except Exception:
            pass
    for p in payload.get('parts', []) or []:
        if p.get('mimeType') == 'text/plain':
            d = p.get('body', {}).get('data')
            if d:
                try:
                    text = base64.urlsafe_b64decode(d).decode('utf-8', 'ignore')
                    if text and text.strip():
                        return text
                except Exception:
                    pass
    return ''

def detect_language(text):
    pt_words = ['obrigado','oportunidade','projeto','junto','serviços','ferramentas','call','abraço','oi']
    es_words = ['gracias','oportunidad','proyecto','junto','servicios','herramientas','llamada','saludos']
    lower = text.lower()
    if any(w in lower for w in pt_words):
        return 'pt'
    if any(w in lower for w in es_words):
        return 'es'
    return 'en'

def _message_is_too_old(date_hdr: str, max_age_days: int = 180) -> bool:
    if not date_hdr:
        return False
    try:
        dt = parsedate_to_datetime(date_hdr)
        now = datetime.now(timezone.utc)
        return (now - dt).days > max_age_days
    except Exception:
        return False

def llm_tailor_reply(thread_text: str, contact_name: str, company_name: str, language: str) -> str:
    if not LLM_TAILOR_ENABLED or not LLM_API_ENDPOINT or not LLM_API_KEY:
        return ''
    prompt = (
        "You are the CEO of Zion Tech Group. Draft a short, friendly-professional, specific reply. "
        f"Contact: {contact_name}. Company: {company_name}. Language: {language}. "
        "Context:\n" + (thread_text[:1600])
        + "\nRules: include Calendly https://calendly.com/kleber-ziontechgroup, "
        "https://ziontechgroup.com, 1-3 mutually beneficial ideas, and a soft close. "
        "Avoid generic filler."
    )
    headers = {
        'Authorization': f"Bearer {LLM_API_KEY}",
        'Content-Type': 'application/json',
    }
    body = json.dumps({
        'model': LLM_MODEL,
        'messages': [
            {'role': 'system', 'content': 'You write short, specific, business-friendly emails.'},
            {'role': 'user', 'content': prompt},
        ],
        'temperature': 0.4,
        'max_tokens': 400,
    }).encode('utf-8')
    try:
        import urllib.request
        req = urllib.request.Request(LLM_API_ENDPOINT, data=body, headers=headers, method='POST')
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.loads(resp.read().decode('utf-8'))
        reply = ((data.get('choices') or [{}])[0].get('message') or {}).get('content')
        if isinstance(reply, str) and reply.strip():
            return reply.strip()
    except Exception as e:
        print('LLM_ERR', repr(e))
    return ''

def _personalize(thread_text: str, contact_name: str, company_name: str, language: str) -> dict:
    t = (thread_text or '').lower()
    invoice = any(w in t for w in ['invoice','billing','invoice','pagamento','boleto','fatura'])
    ticket = any(w in t for w in ['ticket','support','issue','erro','bug','incident','suporte'])
    urgent = any(w in t for w in ['urgent','priority','p1','escalation','emergency','crítico'])
    upsell = any(w in t for w in ['partnership','parceria','revenue','growth','crescimento','sell','proposal','proposta'])
    if language == 'pt':
        return {
            'opening': f'Obrigado pela conversa com a {company_name}.',
            'need': 'Suporte e operações com IA reduzem custos e melhoram o tempo de resposta',
            'pillar_1': 'Automação de suporte e operações com IA para reduzir custos e tempo de resposta.',
            'pillar_2': 'Integração de ferramentas AI/IT no seu fluxo atual, sem trocar toda a stack.',
            'pillar_3': 'Um piloto gratuito de readiness audit para mapear ganhos rápidos e ROI visível.',
            'cta': 'Se fizer sentido, podemos avançar por e-mail ou por uma call rápida:',
            'closing': 'Fico à disposição para criarmos algo mútuo e rápido.',
        }
    if language == 'es':
        return {
            'opening': f'Gracias por la conversación con {company_name}.',
            'need': 'Automatizar soporte y operaciones con IA reduce costos y acorta tiempos de respuesta',
            'pillar_1': 'Automatización de soporte y operaciones con IA para reducir costos y tiempos.',
            'pillar_2': 'Integración de herramientas AI/IT en tu flujo actual, sin reemplazar toda la stack.',
            'pillar_3': 'Un piloto gratuito de readiness audit para identificar wins rápidos con ROI visible.',
            'cta': 'Si cuadra con lo que estás evaluando, podemos avanzar por email o una llamada breve:',
            'closing': 'Quedo atento para construir algo beneficioso para ambos.',
        }
    return {
        'opening': f'Thanks for the conversation with {company_name}.',
        'need': 'AI support automation can cut response time and operational cost while protecting quality',
        'pillar_1': 'AI support automation to cut response time and operational cost with cleaner handoffs.',
        'pillar_2': 'Workflow integration of AI/IT tools into your current stack, with minimal disruption.',
        'pillar_3': 'A free AI readiness audit pilot to spot quick wins and roadmap the larger rollout.',
        'cta': 'If this aligns with what you’re evaluating, I’m happy to advance by email or a quick call:',
        'closing': 'Let’s build something that benefits both teams.',
    }

def build_ceo_reply(contact_name, company_name, thread_text, language='en'):
    # Prefer LLM-tailored output when enabled; fallback to deterministic template.
    tailored = llm_tailor_reply(thread_text, contact_name, company_name, language)
    if tailored:
        return tailored
    p = _personalize(thread_text, contact_name, company_name, language)
    return f"""{contact_name},

{p['opening']} I really value that partnership.

Today Zion Tech Group is expanding into AI/IT services, and I see a few fast, mutually beneficial next steps we could explore together:

1) {p['pillar_1']}
2) {p['pillar_2']}
3) {p['pillar_3']}

{p['cta']}
https://calendly.com/kleber-ziontechgroup

You can also explore our new AI services and free tools here:
https://ziontechgroup.com

{p['closing']}

Kleber Garcia Alcatrão
CEO, Zion Tech Group
"""

def send_ceo_reply(thread_id, to_addr, subject, body, references_message_id):
    body = sanitize_outreach_body(body)
    msg_id_str = f"<{references_message_id}>"
    raw_headers = [
        f"From: kleber@ziontechgroup.com",
        f"To: {to_addr}",
        f"Subject: {subject}",
        "Content-Type: text/plain; charset=utf-8",
        f"References: {msg_id_str}",
        f"In-Reply-To: {msg_id_str}",
    ]
    raw = base64.urlsafe_b64encode(("\r\n".join(raw_headers) + "\r\n\r\n" + body).encode('utf-8')).decode('utf-8')
    sent = service.users().messages().send(userId='me', body={'raw': raw, 'threadId': thread_id}).execute()
    return sent

def sanitize_outreach_body(body: str) -> str:
    # Strip common leaked AI planning preambles that slipped into sent mail.
    patterns = [
        r"(?is)^got it[^\\n\
]*(\
?\\n)+",
        r"(?is)^then body:[^\\n\
]*(\
?\\n)+",
        r"(?is)^first, the recipient is[^\\n\
]*(\
?\\n)+",
        r"(?is)^need to be concise[^\\n\
]*(\
?\\n)+",
    ]
    for p in patterns:
        body = re.sub(p, "", body)
    return body.strip()

def fetch_or_create_lead_from_inbox(email, thread_subject=None):
    # Priority 1: recent unread/new inbound message across all folders and explicit variant subjects
    queries = []
    base = f"from:{email} -category:promotions -in:spam -in:trash"
    if thread_subject:
        for q in [
            f'{base} subject:"{thread_subject}"',
            f'{base} newer_than:7d',
            f'{base} newer_than:30d',
        ]:
            queries.append(q)
    else:
        for q in [
            f'{base} newer_than:1d',
            f'{base} newer_than:7d',
            f'{base}',
        ]:
            queries.append(q)
    hit = None
    for query in queries:
        hits = search_all_folders(query, max_results=20)
        if hits:
            for newest in hits:
                if is_seen_message_id(newest['id']):
                    continue
                date_hdr = newest.get('date', '')
                if _message_is_too_old(date_hdr, max_age_days=180):
                    continue
                hit = newest
                break
        if hit:
            break
    if not hit:
        return None
    msg_id = hit['id']
    text = get_message_text(msg_id) or ''
    lang = detect_language(text)
    contact_name = email.split('@')[0].replace('.', ' ').title()
    company_name = email.split('@')[1].split('.')[0].title()
    subject = thread_subject or hit.get("subject") or "Next steps"
    body = build_ceo_reply(contact_name, company_name, text[:500], language=lang)
    return {
        "email": email,
        "msg_id": msg_id,
        "subject": subject,
        "body": body,
        "lang": lang,
    }

def run_high_frequency_outreach():
    contacts = [
        {"email": "sac@relacionamento.santabarbararesidence.com.br", "name": "Santa", "company": "Santa Barbara Residence", "thread_id": "19f3d496d3924520"},
        {"email": "flavio.miranda@persistiq.com", "name": "Flavio", "company": "Persistiq", "thread_id": "19f3c9ced31ce3"},
        {"email": "mweiss@procurri.com", "name": "Matt Weiss", "company": "Procurri", "thread_id": "17b0c52dcebfda15"},
        {"email": "anjali@quantomtech.com", "name": "Anjali", "company": "QuantomTech", "thread_subject": "Boost Quantomtech revenue with AI personalization"},
        {"email": "paulo@somaticabrasil.com", "name": "Paulo", "company": "Somatica Brasil", "thread_subject": "Parceria Zion Tech Group"},
        {"email": "ajuda@homer.com.br", "name": "Homer Team", "company": "Homer", "thread_subject": "Free AI readiness audit for Homer"},
        {"email": "Whibbert@solyssey.com", "name": "Wayne", "company": "Solyssey", "thread_subject": "Supplier Collaboration Opportunity"},
    ]

    # Also search inbox for new contacts beyond the explicit list
    additional_hits = search_all_folders("in:inbox -category:promotions newer_than:1d", max_results=20)
    additional_emails = []
    for hit in additional_hits:
        msg = service.users().messages().get(userId='me', id=hit['id'], format='metadata', metadataHeaders=['From','Subject','In-Reply-To']).execute()
        headers = {x['name']: x['value'] for x in msg.get('payload', {}).get('headers', [])}
        frm = headers.get('From', '')
        if '@' in frm and 'no-reply' not in frm.lower() and 'github' not in frm.lower():
            import re
            m = re.search(r'<([^>]+)>', frm)
            addr = m.group(1) if m else frm.strip()
            additional_emails.append({"email": addr, "name": addr.split('@')[0].replace('.', ' ').title(), "company": addr.split('@')[1].split('.')[0].title(), "thread_subject": headers.get('Subject', 'Next steps')})

    seen_add = set()
    merged_contacts = list(contacts)
    for a in additional_emails:
        if a["email"] not in {c["email"] for c in merged_contacts}:
            merged_contacts.append(a)

    sent_count = 0
    skipped = 0
    newest_used = []

    dead = []
    hardened_contacts=[]
    merged_contacts = hardened_contacts or merged_contacts
    for c in merged_contacts:
        email = c["email"]
        contact_key = email.lower()
        prospective_subject = c.get("thread_subject") or "Next steps"
        if recent_sent_exists(contact_key, within_seconds=DEDUP_COOLDOWN_SECONDS):
            skipped += 1
            continue
        if same_subject_recently_sent(contact_key, prospective_subject, within_seconds=12 * 3600):
            skipped += 1
            continue
        lead = fetch_or_create_lead_from_inbox(email, prospective_subject)
        if not lead:
            skipped += 1
            continue
        newest_used.append({"contact": email, "msg_id": lead["msg_id"], "lang": lead["lang"]})
        thread_id = c.get("thread_id")
        if not thread_id:
            thread_id = resolve_thread_id(email, prospective_subject)
        if not thread_id or not probe_thread_alive(thread_id):
            for alt in [
                lead.get("msg_id"),
                lead.get("thread_id"),
            ]:
                if alt and probe_thread_alive(alt):
                    thread_id = alt
                    break
        c = dict(c)
        c["_resolved_thread_id"] = thread_id
        hardened_contacts.append(c)
        if not thread_id or not probe_thread_alive(thread_id):
            dead.append({"contact": email, "thread_id": thread_id, "subject": prospective_subject})
            skipped += 1
            continue
        try:
            sent = send_ceo_reply(thread_id, email, lead["subject"], lead["body"], lead["msg_id"])
            record_send(contact_key, email, lead["subject"], sent.get('id'), sent.get('threadId'), f"tailored CEO reply from inbox msg {lead['msg_id']}")
            mark_seen_message_id(lead["msg_id"])
            sent_count += 1
        except Exception as e:
            print('SEND_ERR', email, e)

    # Update state timestamp
    state = load_state()
    state["last_check"] = int(time.time())
    save_state(state)

    print('ADDS', len(newest_used))
    print('SENT_TOTAL', sent_count)
    print('SKIPPED', skipped)
    if dead:
        print('DEAD_THREADS', len(dead))
        for d in dead:
            print('DEAD', d)
    print('STATE_TS', int(time.time()))
    return {"sent": sent_count, "skipped": skipped, "adds": len(newest_used), "dead": dead}

if __name__ == '__main__':
    run_high_frequency_outreach()
