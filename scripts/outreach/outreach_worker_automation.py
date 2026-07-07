import sys, base64, json, time, os
from pathlib import Path

sys.path.insert(0, r'C:\Users\Zion\AppData\Local\hermes\skills\productivity\google-workspace\scripts')
from google_api import build_service

service = build_service('gmail', 'v1')

BASE_DIR = Path('/c/Users/Zion/tmp/zion-clone-test')
DEDUP_DIR = BASE_DIR / 'outreach_monitor' / 'processed'
DEDUP_DIR.mkdir(parents=True, exist_ok=True)
STATE_FILE = DEDUP_DIR / 'global_dedup_state.json'
LEDGER_FILE = DEDUP_DIR / 'sent_ledger.jsonl'

DEDUP_COOLDOWN_SECONDS = 18 * 3600  # 18 hours per contact

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
    return resp.get('messages', [])

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

def safe_slug(s):
    return s.lower().strip().replace('.', '-').replace('_', '-')

def fetch_or_create_lead_from_inbox(email, thread_subject=None):
    # Try to find recent inbound message from the contact
    hits = search_all_folders(f"in:inbox from:{email} -category:promotions newer_than:2d", max_results=5)
    if not hits:
        return None
    newest = hits[0]
    msg_id = newest['id']
    if is_seen_message_id(msg_id):
        return None
    text = get_message_text(msg_id) or ''
    lang = detect_language(text)
    contact_name = email.split('@')[0].replace('.', ' ').title()
    company_name = email.split('@')[1].split('.')[0].title()
    subject = thread_subject or "Next steps"
    body = build_ceo_reply(contact_name, company_name, text[:300], language=lang)
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

    for c in merged_contacts:
        email = c["email"]
        contact_key = email.lower()
        if recent_sent_exists(contact_key, within_seconds=DEDUP_COOLDOWN_SECONDS):
            skipped += 1
            continue
        prospective_subject = c.get("thread_subject") or "Next steps"
        if same_subject_recently_sent(contact_key, prospective_subject, within_seconds=12 * 3600):
            skipped += 1
            continue
        lead = fetch_or_create_lead_from_inbox(email, c.get("thread_subject"))
        if not lead:
            skipped += 1
            continue
        newest_used.append({"contact": email, "msg_id": lead["msg_id"], "lang": lead["lang"]})
        thread_id = c.get("thread_id")
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
    print('STATE_TS', int(time.time()))
    return {"sent": sent_count, "skipped": skipped, "adds": len(newest_used)}

if __name__ == '__main__':
    run_high_frequency_outreach()
