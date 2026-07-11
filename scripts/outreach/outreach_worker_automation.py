import sys, base64, json, time, os, re
from pathlib import Path
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

sys.path.insert(0, r'C:\Users\Zion\AppData\Local\hermes\skills\productivity\google-workspace\scripts')
GMAIL_AUTH_ERROR = None
service = None

def _init_gmail_service():
    global service, GMAIL_AUTH_ERROR
    try:
        from google_api import build_service
        service = build_service('gmail', 'v1')
        GMAIL_AUTH_ERROR = None
    except Exception as e:
        service = None
        GMAIL_AUTH_ERROR = repr(e)

try:
    _init_gmail_service()
except Exception:
    pass

BASE_DIR = Path('/c/Users/Zion/tmp/zion-clone-test2')
DEDUP_DIR = BASE_DIR / 'outreach_monitor' / 'processed'
DEDUP_DIR.mkdir(parents=True, exist_ok=True)
STATE_FILE = DEDUP_DIR / 'global_dedup_state.json'
LEDGER_FILE = DEDUP_DIR / 'sent_ledger.jsonl'
BOUNCE_HISTORY_FILE = DEDUP_DIR / 'bounce_history.jsonl'

_GMAIL_API_TIMEOUT = 15


def _timed_gmail_call(request):
    try:
        from concurrent.futures import ThreadPoolExecutor
    except Exception:
        ThreadPoolExecutor = None

    def _execute(req):
        return req.execute()

    if ThreadPoolExecutor is None:
        return _execute(request)
    with ThreadPoolExecutor(max_workers=1) as ex:
        fut = ex.submit(_execute, request)
        return fut.result(timeout=_GMAIL_API_TIMEOUT)


FORBIDDEN_ADDR_PREFIXES = (
    'no-reply','noreply','mailer-daemon','postmaster','notifications@github.com',
    'support@','press@','info@','sales@','team@','hello@','hi@','marketing@',
    'commercial@','service delivery','account manager','comunicaciones@','undisclosed-recipients',
    'calendar-notification@google.com','welcome@supabase.com',
)
FORBIDDEN_DOMAIN_SUBSTRINGS = (
    'servi.co','servi.io','servi.ai','manag.co','manag.io','manag.ai','manag.br','manag.com',
    'legalys.com.pa','start.co','github.com','hcl.com','zendesk.com','calendly.com',
    'datadog','mercadobitcoin','suzano.com.br',
)
MAX_AGE_DAYS = 180
DEDUP_COOLDOWN_SECONDS = 24 * 3600  # 24 hours
SEND_REQUIRES_ALIVE_THREAD = True
LLM_TAILOR_ENABLED = bool(os.getenv('ZION_LLM_API_ENDPOINT') and os.getenv('ZION_LLM_API_KEY') and os.getenv('ZION_LLM_MODEL'))
LLM_API_ENDPOINT = os.getenv('ZION_LLM_API_ENDPOINT') or os.getenv('LLM_API_ENDPOINT')
LLM_API_KEY = os.getenv('ZION_LLM_API_KEY') or os.getenv('LLM_API_KEY')
LLM_MODEL = os.getenv('ZION_LLM_MODEL') or os.getenv('LLM_MODEL') or 'gpt-4o-mini'
LLM_FALLBACK_MODELS = [m.strip() for m in os.getenv('ZION_LLM_FALLBACK_MODELS', '').split(',') if m.strip()]

FORBIDDEN_ADDR_PREFIXES = (
    'no-reply','noreply','mailer-daemon','postmaster','notifications@github.com',
    'support@','press@','info@','sales@','team@','hello@','hi@','marketing@',
    'commercial@','service delivery','account manager','comunicaciones@','undisclosed-recipients',
    'calendar-notification@google.com','welcome@supabase.com',
)
FORBIDDEN_DOMAIN_SUBSTRINGS = (
    'servi.co','servi.io','servi.ai','manag.co','manag.io','manag.ai','manag.br','manag.com',
    'legalys.com.pa','start.co','github.com','hcl.com','zendesk.com','calendly.com',
    'datadog','mercadobitcoin','suzano.com.br',
)

def load_state():
    if STATE_FILE.exists():
        try:
            return json.loads(STATE_FILE.read_text(encoding='utf-8'))
        except Exception:
            pass
    return {"contacts": {}, "last_check": 0, "seen_message_ids": {}}

def save_state(state):
    STATE_FILE.write_text(json.dumps(state, indent=2, ensure_ascii=False), encoding='utf-8')

def record_bounce(to_addr, reason, message_id=None):
    entry = {
        'ts': int(time.time()),
        'to': to_addr,
        'reason': reason,
        'message_id': message_id,
    }
    try:
        with BOUNCE_HISTORY_FILE.open('a', encoding='utf-8') as f:
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    except Exception:
        pass

def is_bouncing_domain(addr: str) -> bool:
    addr = addr.lower()
    if any(addr.endswith(d) for d in ('.servi.io','.servi.ai','.servi.com','.servi.co','.manag.co','.manag.io','.manag.ai','.manag.br','.manag.com','legalys.com.pa','start.co')):
        return True
    local = addr.split('@', 1)[-1]
    for bad in ('servi','manag','legalys.com.pa','start.co','github.com','hcl.com','zendesk.com','calendly.com','datadog','mercadobitcoin','suzano.com.br'):
        if bad in local:
            return True
    return False

def record_send(contact, to_addr, subject, message_id, thread_id, reason):
    entry = {
        'ts': int(time.time()),
        'contact': contact,
        'to': to_addr,
        'subject': subject,
        'message_id': message_id,
        'thread_id': thread_id,
        'reason': reason,
    }
    with LEDGER_FILE.open('a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    state = load_state()
    state['contacts'].setdefault(contact, {})
    state['contacts'][contact]['last_outbound_ts'] = entry['ts']
    state['contacts'][contact]['last_outbound_subject'] = subject
    state['contacts'][contact]['last_outbound_message_id'] = message_id
    state['contacts'][contact]['last_outbound_thread_id'] = thread_id
    state['last_check'] = int(time.time())
    save_state(state)

def recent_sent_exists(contact, within_seconds=DEDUP_COOLDOWN_SECONDS):
    state = load_state()
    entry = state.get('contacts', {}).get(contact)
    if not entry:
        return False
    last = entry.get('last_outbound_ts', 0)
    return (time.time() - last) < within_seconds

def same_subject_recently_sent(contact, subject, within_seconds=12 * 3600):
    state = load_state()
    entry = state.get('contacts', {}).get(contact)
    if not entry:
        return False
    last_subject = entry.get('last_outbound_subject') or ''
    last_ts = entry.get('last_outbound_ts', 0)
    return (time.time() - last_ts) < within_seconds and last_subject.strip().lower() == subject.strip().lower()

def is_seen_message_id(message_id):
    state = load_state()
    return message_id in state.get('seen_message_ids', {})

def mark_seen_message_id(message_id):
    state = load_state()
    state.setdefault('seen_message_ids', {})
    state['seen_message_ids'][message_id] = int(time.time())
    save_state(state)

def _load_hot_followup_ledger_ids() -> tuple[set[str], set[str]]:
    blocked_threads: set[str] = set()
    blocked_message_ids: set[str] = set()
    try:
        p = BASE_DIR / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl'
        with p.open('r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    obj = json.loads(line)
                except Exception:
                    continue
                tid = obj.get('thread_id') or ''
                mid = obj.get('message_id') or ''
                if tid:
                    blocked_threads.add(tid)
                if mid:
                    blocked_message_ids.add(mid)
    except Exception:
        pass
    return blocked_threads, blocked_message_ids


def _load_hot_followup_ledger_contacts():
    out = []
    try:
        p = BASE_DIR / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl'
        seen = set()
        with p.open('r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    obj = json.loads(line)
                except Exception:
                    continue
                to_addr = (obj.get('to') or '').strip()
                if not to_addr or '@' not in to_addr or to_addr.lower().endswith('@ziontechgroup.com'):
                    continue
                if 'undisclosed-recipients' in to_addr.lower():
                    continue
                local, _, domain = to_addr.partition('@')
                if not local or not domain:
                    continue
                domain = domain.lower()
                if any(domain.endswith(bad) for bad in ('.groups.outlook.com', '.mail.vresp.com', '.airbnb.com', '.uber.com', '.tiktok.com', '.dpsmrn.org', '.surfline.com')):
                    continue
                if to_addr in seen:
                    continue
                seen.add(to_addr)
                subj = obj.get('subject') or 'Next steps'
                tid = obj.get('thread_id') or ''
                out.append({
                    'email': to_addr,
                    'name': local.replace('.', ' ').title(),
                    'company': domain.split('.')[0].title(),
                    'thread_id': tid,
                    'thread_subject': subj,
                })
    except Exception:
        pass
    return out[:200]


def search_all_folders(q, maxResults=20):
    # High-frequency safe wrapper: runs every Gmail call under a timeout
    # and scans the same query across common mail scopes to approximate
    # "all folders" behavior.
    queries = [q]
    try:
        from concurrent.futures import ThreadPoolExecutor
    except Exception:
        ThreadPoolExecutor = None

    def _execute(request):
        return request.execute()

    def _timed(request):
        if ThreadPoolExecutor is None:
            return _execute(request)
        with ThreadPoolExecutor(max_workers=1) as ex:
            fut = ex.submit(_execute, request)
            return fut.result(timeout=_GMAIL_API_TIMEOUT)

    best = []
    seen_ids = set()
    seen_threads = set()
    for qtry in queries:
        try:
            if service is None:
                continue
            resp = _timed(service.users().messages().list(userId='me', q=qtry, maxResults=maxResults))
        except Exception:
            continue
        items = resp.get('messages', []) or []
        for item in items:
            mid = item.get('id')
            tid = item.get('threadId')
            if not mid or mid in seen_ids:
                continue
            if tid and tid in seen_threads:
                continue
            try:
                msg = _timed(service.users().messages().get(userId='me', id=mid, format='metadata', metadataHeaders=['From','Subject','Date','Thread-Id']))
            except Exception:
                continue
            seen_ids.add(msg.get('id'))
            if msg.get('threadId'):
                seen_threads.add(msg['threadId'])
            headers = {h['name']: h['value'] for h in msg.get('payload', {}).get('headers', [])}
            best.append({
                'id': msg['id'],
                'threadId': msg.get('threadId'),
                'from': headers.get('From', ''),
                'subject': headers.get('Subject', ''),
                'date': headers.get('Date', ''),
                'snippet': msg.get('snippet', ''),
            })
    return best

def resolve_thread_id(email, subject_hint=None):
    queries = []
    base = f"from:{email} -category:promotions -in:spam -in:trash"
    if subject_hint:
        queries += [f'{base} subject:"{subject_hint}"', f'{base} newer_than:30d']
    else:
        queries += [f'{base} newer_than:30d', f'{base}']
    hits = []
    for q in queries:
        hits = search_all_folders(q, maxResults=10)
        if hits:
            break
    if hits:
        return hits[0].get('threadId') or hits[0].get('id')
    return None

def probe_thread_alive(thread_id, _seen=None):
    if not thread_id:
        return False
    if _seen is None:
        _seen = set()
    if thread_id in _seen:
        return False
    _seen.add(thread_id)
    try:
        t = _timed_gmail_call(service.users().threads().get(userId='me', id=thread_id, format='metadata', metadataHeaders=['From','Subject']))
        if not t:
            return False
        messages = t.get('messages') or []
        if messages:
            return True
        resp = _timed_gmail_call(service.users().messages().list(userId='me', q=f'threadId:{thread_id} in:anywhere', maxResults=5))
        if resp and resp.get('messages'):
            return True
    except Exception:
        pass
    return False

def get_message_text(msg_id):
    msg = _timed_gmail_call(service.users().messages().get(userId='me', id=msg_id, format='full'))
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
    endpoint = LLM_API_ENDPOINT or os.getenv('OPENROUTER_API_ENDPOINT') or os.getenv('GROQ_API_ENDPOINT') or os.getenv('GEMINI_API_ENDPOINT')
    api_key = LLM_API_KEY or os.getenv('OPENROUTER_API_KEY') or os.getenv('GROQ_API_KEY') or os.getenv('GEMINI_API_KEY')
    model = os.getenv('LLM_MODEL') or os.getenv('ZION_LLM_MODEL') or os.getenv('OPENROUTER_MODEL') or os.getenv('GROQ_MODEL') or os.getenv('GEMINI_MODEL') or 'openai/gpt-4o-mini'
    if not endpoint or not api_key:
        return ''
    trimmed = (thread_text or '').strip()
    trimmed = trimmed[:2200]
    prompt = (
        "You are the CEO of Zion Tech Group. Write a friendly-professional reply as the CEO.\n"
        f"Contact: {contact_name}. Company: {company_name}. Conversation language: {language}.\n"
        "Rules:\n"
        "- Thank them for the opportunity to collaborate on this project; include wording like: it was a pleasure working with you / great partnership.\n"
        "- Propose 1-3 concrete, mutually beneficial next ideas for our new AI services.\n"
        "- Include Calendly exactly: https://calendly.com/kleber-ziontechgroup.\n"
        "- Include website exactly: https://ziontechgroup.com and mention free services and tools.\n"
        "- Give a positive, human tone. No generic filler. No CEO signature block noise.\n"
        "- Reply in the exact conversation language. Keep it friendly and professional.\n"
        "- Make sure this single message is complete; do not omit the links or past-project thanks.\n"
        f"\nThread:\n{trimmed}\n"
    )
    headers = {
        'Authorization': f"Bearer {api_key}",
        'Content-Type': 'application/json',
    }
    body = json.dumps({
        'model': model,
        'messages': [
            {'role': 'system', 'content': 'You write short, specific, business-friendly emails that sound human and advance deals.'},
            {'role': 'user', 'content': prompt},
        ],
        'temperature': 0.25,
        'max_tokens': 420,
    }).encode('utf-8')
    last_err = None
    models = [model] + [m.strip() for m in (os.getenv('ZION_LLM_FALLBACK_MODELS') or '').split(',') if m.strip()]
    for m in models:
        for attempt in range(2):
            try:
                import urllib.request
                payload = json.loads(body.decode('utf-8'))
                payload['model'] = m
                req = urllib.request.Request(endpoint, data=json.dumps(payload).encode('utf-8'), headers=headers, method='POST')
                with urllib.request.urlopen(req, timeout=35) as resp:
                    data = json.loads(resp.read().decode('utf-8'))
                reply = ((data.get('choices') or [{}])[0].get('message') or {}).get('content')
                if not isinstance(reply, str) or not reply.strip():
                    continue
                reply = reply.strip()
                required = [
                    'calendly.com/kleber-ziontechgroup',
                    'ziontechgroup.com',
                    'pleasure working with you',
                ]
                lower = reply.lower()
                if not all(r in lower for r in required):
                    print('LLM_MISSING_REQUIRED', m)
                    continue
                return reply
            except Exception as e:
                last_err = repr(e)
                print('LLM_ERR', m, last_err, f'attempt={attempt+1}')
                time.sleep(1.5 if attempt else 0.2)
    print('LLM_FINAL_ERR', last_err)
    return ''

_PROJECT_KEYWORDS = {
    'aiops': ['monitor', 'observability', 'incident', 'opsgenie', 'pagerduty', 'metric', 'trace', 'log', 'alert', 'runbook', 'oncall', 'reliability', 'mttr', 'change'],
    'inbound': ['support', 'ticket', 'helpdesk', 'chatbot', 'knowledge base', 'sla', 'queue', 'escalation', 'csat', 'self-service', 'ivr', 'voicebot', 'whatsapp'],
    'security': ['identity', 'iam', 'ztna', 'sase', 'endpoint', 'edr', 'xdr', 'siem', 'soar', 'vpn', 'zero trust', 'dlp', 'firewall', 'threat'],
    'cloud': ['migration', 'aws', 'azure', 'gcp', 'cloud', 'kubernetes', 'container', 'serverless', 'cost', 'finops', 'paas', 'iaas'],
    'crm': ['crm', 'sales', 'pipeline', 'lead', 'deal', 'quote', 'proposal', 'opportunity', 'revenue', 'follow-up', 'negotiation'],
    'data': ['dashboard', 'report', 'analytics', 'data', 'sql', 'pipeline', 'etl', 'warehouse', 'bi', 'visualization', 'forecast'],
    'project': ['roadmap', 'milestone', 'delivery', 'vendor', 'procurement', 'bid', 'tender', 'licitation', 'purchase', 'rfp'],
    'coverage': ['latam', 'emea', 'americas', 'portugal', 'brazil', 'spain', 'usa', 'global', 'region', 'international', 'english', 'portuguese', 'spanish']
}


def _extract_context_ideas(thread_text: str, language: str, company_name: str) -> dict:
    t = (thread_text or '').lower()
    found = []
    for topic, keywords in _PROJECT_KEYWORDS.items():
        if any(k in t for k in keywords):
            found.append(topic)
    if not found:
        found = ['aiops', 'inbound', 'coverage']

    selected = found[:3]

    if language == 'pt':
        ideas = {
            'aiops': 'Automação de operações e resposta a incidentes com IA para reduzir MTTR e alertas ruidosas.',
            'inbound': 'Fluxo de atendimento inbound com IA: triagem automática, respostas consistentes e cobertura em português/espanhol/inglês.',
            'security': 'Integração de identidade, endpoint e acesso seguro com arquitetura zero-trust e monitoramento contínuo.',
            'cloud': 'Migração guiada para nuvem com governança, custo controlado e operação assistida por IA.',
            'crm': 'Conector inteligente entre CRM, e-mail e follow-up para avançar negociações sem perder contexto.',
            'data': 'Painéis e relatórios automáticos com IA para decisão comercial rápida e acompanhamento de metas.',
            'project': 'Aceleração de entregas, procurement e follow-up comercial com automação controlada.',
            'coverage': f'Ampliação da cobertura com suporte internacional e operação proximada para {company_name}.'
        }
        pillars = '; '.join(ideas[i] for i in selected)
        return {
            'opening': f'Obrigado pela conversa com a {company_name}.',
            'need': 'Automação com IA pode reduzir custos, melhorar resposta e proteger receita.',
            'pillars': pillars,
            'cta': 'Se fizer sentido, podemos avançar por e-mail ou por uma call rápida:',
            'closing': 'Fico à disposição para criarmos algo mútuo e rápido.'
        }
    if language == 'es':
        ideas = {
            'aiops': 'Automatización de operaciones y respuesta a incidentes con IA para reducir MTTR y alertas ruidosas.',
            'inbound': 'Flujo de atención inbound con IA: triaje automático, respuestas consistentes y cobertura en portugués/español/inglés.',
            'security': 'Integración de identidad, endpoint y acceso seguro con arquitectura zero-trust y monitoreo continuo.',
            'cloud': 'Migración guiada a la nube con gobernanza, costo controlado y operación asistida por IA.',
            'crm': 'Conector inteligente entre CRM, correo y seguimiento para avanzar negociaciones sin perder contexto.',
            'data': 'Cuadros e informes automáticos con IA para decisiones comerciales rápidas y seguimiento de metas.',
            'project': 'Aceleración de entregas, procurement y seguimiento comercial con automatización controlada.',
            'coverage': f'Amplíación de cobertura con soporte internacional y operación cercana para {company_name}.'
        }
        pillars = '; '.join(ideas[i] for i in selected)
        return {
            'opening': f'Gracias por la conversación con {company_name}.',
            'need': 'La automatización con IA reduce costos, mejora el tiempo de respuesta y protege ingresos.',
            'pillars': pillars,
            'cta': 'Si cuadra, podemos avanzar por email o una llamada breve:',
            'closing': 'Quedo atento para construir algo beneficioso para ambos.'
        }
    ideas = {
        'aiops': 'AI-assisted operations and incident response to cut MTTR and noisy alerts.',
        'inbound': 'AI inbound support automation: consistent triage, faster answers, and PT/ES/EN coverage.',
        'security': 'Identity, endpoint, and secure access integration with zero-trust architecture.',
        'cloud': 'Guided cloud migration with cost controls and AI-assisted operations.',
        'crm': 'Smart CRM/email/follow-up connector to advance deals without losing context.',
        'data': 'Automated dashboards and reporting with AI for faster business decisions.',
        'project': 'Faster delivery, procurement, and commercial follow-up with safe automation.',
        'coverage': f'International coverage and near-you support model for {company_name}.'
    }
    pillars = '; '.join(ideas[i] for i in selected)
    return {
        'opening': f'Thanks for the conversation with {company_name}.',
        'need': 'AI operations and support automation can cut response time and operational cost while protecting quality.',
        'pillars': pillars,
        'cta': 'If this aligns with what you’re evaluating, I’m happy to advance by email or a quick call:',
        'closing': 'Let’s build something that benefits both teams.'
    }


def _personalize(thread_text: str, contact_name: str, company_name: str, language: str) -> dict:
    return _extract_context_ideas(thread_text, language, company_name)

def _addr_is_invalid(addr: str) -> bool:
    a = addr.lower()
    if not a or '@' not in a:
        return True
    local, domain = a.rsplit('@', 1)
    if not local or not domain:
        return True
    if any(s in a for s in ('.servi.io','.servi.ai','.servi.com','.servi.co','.manag.co','.manag.io','.manag.ai','.manag.br','.manag.com','legalys.com.pa','start.co')):
        return True
    if any(d in domain for d in ('servi','manag','legalys.com.pa','start.co','github.com','hcl.com','zendesk.com','calendly.com','datadog','mercadobitcoin','suzano.com.br')):
        return True
    if any(local.startswith(p) for p in ('no-reply','noreply','mailer-daemon','postmaster','support@','press@','info@','sales@','team@','hello@','hi@','marketing@','commercial@','service delivery','account manager','comunicaciones@','undisclosed-recipients')):
        return True
    if addr.lower() in {'undisclosed-recipients:;', 'undisclosed-recipients'}:
        return True
    return False

def build_ceo_reply(contact_name, company_name, thread_text, language='en'):
    tailored = llm_tailor_reply(thread_text, contact_name, company_name, language)
    if tailored:
        return tailored
    p = _personalize(thread_text, contact_name, company_name, language)
    return f"""{contact_name},

{p['opening']} I really value that partnership.

Today Zion Tech Group is expanding into AI/IT services, and I see a few fast, mutually beneficial next steps we could explore together:

{p['pillars']}

{p['cta']}
https://calendly.com/kleber-ziontechgroup

You can also explore our new AI services and free tools here:
https://ziontechgroup.com

{p['closing']}
Kleber Garcia Alcatrão
CEO, Zion Tech Group
https://ziontechgroup.com
"""

def build_ceo_reply_preview(contact_name, company_name, thread_text, subject, language='en'):
    body = build_ceo_reply(contact_name, company_name, thread_text, language=language)
    return {
        'to_contact': contact_name,
        'company': company_name,
        'subject': subject or 'New ideas for {}'.format(company_name),
        'language': language,
        'body': sanitize_outreach_body(body),
        'calendly': 'https://calendly.com/kleber-ziontechgroup',
        'website': 'https://ziontechgroup.com',
        'free_tools_note': 'We also offer free services and tools at https://ziontechgroup.com',
        'send_ready': bool(body and body.strip()),
    }
def sanitize_outreach_body(body: str) -> str:
    leaked_prefixes = [
        'got it',
        'then body:',
        'first, the recipient is',
        'need to be concise',
        'okay, let\'s tackle this',
        'hmm,',
        'wait,',
        'no, wait',
        'actually,',
        'let me think',
        'i should',
        'hold on',
        'one more thing',
        'before i forget',
        'kleber garcia alcatr',
        'subject line is already given',
        'wait no',
        'wait, no',
    ]
    lines = body.splitlines()
    cleaned = []
    skip = True
    for line in lines:
        lower = line.lower().strip()
        if skip and any(lower.startswith(p.lower()) for p in leaked_prefixes):
            continue
        skip = False
        cleaned.append(line)
    out = []
    blank_count = 0
    for line in cleaned:
        if line.strip() == "":
            blank_count += 1
            if blank_count <= 2:
                out.append(line)
        else:
            blank_count = 0
            out.append(line)
    result = chr(10).join(out).strip()
    return result

def fetch_or_create_lead_from_inbox(email, thread_subject=None):
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
        hits = search_all_folders(query, maxResults=20)
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
    text = (text or '').strip()
    if not text or len(text.split()) < 8:
        return None
    if not any(ch.isalpha() for ch in text):
        return None
    generic_phrases = [
        'boleto vencido',
        'pré-aprovação',
        'pre-aprovação',
        'billing update',
        'invoice update',
        'up to % off',
        'off your first',
        'watch your last session',
        'fale dentro de 6 horas',
        'responda dentro de 6 horas',
        'new app',
        'weekly update',
        'daily update',
        'unsubscribe',
    ]
    lowered = text.lower()
    if any(p in lowered for p in generic_phrases):
        return None
    lang = detect_language(text)
    contact_name = email.split('@')[0].replace('.', ' ').title()
    company_name = email.split('@')[1].split('.')[0].title()

    # Try extracting real display name from headers for better tailoring
    real_contact_name = contact_name
    real_company_name = company_name
    try:
        full = _timed_gmail_call(service.users().messages().get(userId='me', id=msg_id, format='metadata', metadataHeaders=['From','To','Subject']))
        frm_hdr = next((h['value'] for h in full.get('payload',{}).get('headers',[]) if h['name']=='From'), '')
        if frm_hdr:
            if '<' in frm_hdr:
                real_contact_name = frm_hdr.split('<',1)[0].strip().strip('"').strip()
            if not real_contact_name:
                real_contact_name = email.split('@')[0].replace('.', ' ').title()
        domain = email.split('@',1)[1].split('.')[0] if '@' in email else company_name
        real_company_name = domain.title()
        contact_name = real_contact_name or contact_name
        company_name = real_company_name or company_name
    except Exception:
        pass
    subject = thread_subject or hit.get('subject') or 'Next steps'
    body = build_ceo_reply(contact_name, company_name, text[:500], language=lang)
    return {
        'email': email,
        'msg_id': msg_id,
        'subject': subject,
        'body': body,
        'lang': lang,
    }

DRY_RUN = os.getenv('OUTREACH_DRY_RUN', '').lower() in ('1','true','yes')
DRY_RUN_REPORT = BASE_DIR / 'outreach_monitor' / 'processed' / 'dry_run_report.jsonl'

def _ensure_report_file():
    try:
        p = Path(DRY_RUN_REPORT)
        p.parent.mkdir(parents=True, exist_ok=True)
        if not p.exists():
            p.write_text('', encoding='utf-8')
    except Exception:
        pass

def append_dry_run_report(entry: dict):
    _ensure_report_file()
    entry.setdefault('ts', int(time.time()))
    try:
        with DRY_RUN_REPORT.open('a', encoding='utf-8') as f:
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    except Exception:
        pass

def run_high_frequency_outreach():
    # If LLM creds exist, enable tailoring; otherwise rely on personalized defaults.
    if service is None:
        print('AUTH_FAIL', GMAIL_AUTH_ERROR)
        append_dry_run_report({'mode':'auth_failure','error':GMAIL_AUTH_ERROR,'ts':int(time.time())})
        return {'sent':0,'skipped':0,'adds':0,'dead':[],'auth_error':GMAIL_AUTH_ERROR}
    print('TRACE_START', flush=True)
    print('LLM_TAILOR_ENABLED=', bool(LLM_TAILOR_ENABLED), 'ENDPOINT=', bool(LLM_API_ENDPOINT), flush=True)
    discovery_queries = [
        '!category:promotions !in:spam !in:trash label:"!!!hot-follow-up"',
        'label:"!!!hot-follow-up"',
        '!category:promotions !in:spam !in:trash "partnership" OR "collaboration" OR "proposal"',
        '!category:promotions !in:spam !in:trash "AI services" OR "AI support" OR "project"',
        '!category:promotions !in:spam !in:trash "interested" OR "next steps" OR "opportunity"',
        '!category:promotions !in:spam !in:trash "integration" OR "workflow" OR "ROI"',
        '"!!!hot-follow-up"',
    ]

    hit_ids = set()
    contacts = []
    for qi, q in enumerate(discovery_queries, 1):
        print('TRACE_QUERY', qi, q, flush=True)
        try:
            hits = search_all_folders(q, maxResults=50)
        except Exception:
            hits = []
        print('TRACE_QUERY_DONE', qi, len(hits), flush=True)
        for h in hits:
            hit_id = h.get('id')
            if not hit_id or hit_id in hit_ids:
                continue
            hit_ids.add(hit_id)
            try:
                msg = _timed_gmail_call(service.users().messages().get(userId='me', id=hit_id, format='metadata', metadataHeaders=['From','Subject','In-Reply-To']))
            except Exception:
                continue
            headers = {x['name']: x['value'] for x in msg.get('payload', {}).get('headers', [])}

            frm = headers.get('From', '')
            subj = headers.get('Subject', '')
            if '@' not in frm:
                continue
            lower = frm.lower()
            if any(x in lower for x in list(FORBIDDEN_ADDR_PREFIXES)):
                continue
            import re
            m = re.search(r'<([^>]+)>', frm)
            addr = m.group(1).lower() if m else frm.strip().lower()
            if is_bouncing_domain(addr):
                record_bounce(addr, 'forbidden domain in discovery')
                continue
            if _addr_is_invalid(addr):
                record_bounce(addr, 'invalid addr pattern')
                continue
            if addr.endswith('@ziontechgroup.com'):
                continue
            subject_norm = (subj or '').strip()
            subject_lower = subject_norm.lower()
            if any(subject_lower.startswith(prefix) for prefix in (
                're: pré-aprovação','re: pre-aprovação','pre-aprovação','pré-aprovação',
                'boleto vencido','billing update','invoice update','up to ','off your first',
                'you have (1) new app','watch your last session','responda dentro de 6 horas',
                'follow/','unsubscribe','newsletter digest','weekly update','daily update',
                '5*-cg@*ar*j68u#'
            )):
                record_bounce(addr, f'blacklisted subject: {subject_norm[:120]}')
                continue
            suspicious_noise_domains = ('groups.outlook.com','mail.vresp.com','airbnb.com','uber.com','tiktok.com','dpsmrn.org','surfline.com')
            local_p = addr.split('@',1)[-1]
            if local_p in suspicious_noise_domains:
                record_bounce(addr, 'suspicious noise domain')
                continue
            if local_p in ('outlook.com','groups.outlook.com','yahoogroups.com','googlegroups.com'):
                local_user = addr.split('@',1)[0]
                if any(ch in local_user for ch in ('+','_','.')) and len(local_user) > 20:
                    record_bounce(addr, 'broadcast group address pattern')
                    continue
            thread_id = msg.get('threadId') or hit_id
            contacts.append({
                'email': addr,
                'name': addr.split('@')[0].replace('.', ' ').title(),
                'company': addr.split('@')[1].split('.')[0].title(),
                'thread_id': thread_id,
                'thread_subject': subj or 'Next steps',
            })

    if not contacts:
        try:
            contacts.extend(_load_hot_followup_ledger_contacts())
        except Exception:
            pass
    new_subjects = set()
    clean_contacts = []
    internal_like_suffixes = ('.edu','.gov','.mil','.k12.ia.us','.school','.academy')
    known_bad_school_domains = {'holyfamily.dbq.pvt.k12.ia.us'}
    for c in contacts:
        email = (c.get('email') or '').strip().lower()
        if not email or '@' not in email:
            continue
        domain = email.split('@',1)[1]
        local = email.split('@',1)[0]
        if domain.endswith('ziontechgroup.com') or domain.endswith('ztg.com.br'):
            continue
        if any(domain.endswith(s) for s in internal_like_suffixes) or domain in known_bad_school_domains:
            record_bounce(email, 'internal-like domain filtered')
            continue
        if local in ('automated',) or local.startswith('automated-'):
            continue
        if any(bad in local for bad in ('groups.outlook.com','mail.vresp.com','airbnb.com','uber.com','tiktok.com','dpsmrn.org','surfline.com')):
            continue
        subj = (c.get('thread_subject') or '').strip()
        if subj.startswith(('Re: Pré-aprovação','Boleto vencido','Billing update','Invoice update','Up to ','Off your first')):
            continue
        clean_contacts.append(c)
        new_subjects.add(subj)
    contacts = clean_contacts[-40:]

    sent_count = 0
    skipped = 0
    newest_used = []
    dead = []
    print('TRACE_CONTACTS', len(contacts), flush=True)
    _thread_alive_cache = {}
    def _probe_cached(tid):
        if tid in _thread_alive_cache:
            return _thread_alive_cache[tid]
        ok = probe_thread_alive(tid)
        _thread_alive_cache[tid] = ok
        return ok
    for c in contacts:
        email = c['email']
        contact_key = email.lower()
        prospective_subject = c.get('thread_subject') or 'Next steps'
        t0 = time.time()
        print('CONTACT_START', email, flush=True)
        if recent_sent_exists(contact_key, within_seconds=DEDUP_COOLDOWN_SECONDS):
            print('CONTACT_END', email, 'recent_sent', flush=True)
            skipped += 1
            continue
        if same_subject_recently_sent(contact_key, prospective_subject, within_seconds=12 * 3600):
            print('CONTACT_END', email, 'subject_recent', flush=True)
            skipped += 1
            continue
        print('CONTACT_DEDUP_OK', email, flush=True)
        lead = fetch_or_create_lead_from_inbox(email, prospective_subject)
        print('CONTACT_LEAD', email, bool(lead), flush=True)
        if not lead:
            print('CONTACT_END', email, 'no_lead', flush=True)
            continue
        newest_used.append({'contact': email, 'msg_id': lead['msg_id'], 'lang': lead['lang']})
        thread_id = c.get('thread_id')
        if not thread_id:
            thread_id = resolve_thread_id(email, prospective_subject)
        print('CONTACT_THREAD1', email, thread_id, flush=True)
        if not thread_id or not probe_thread_alive(thread_id):
            for alt in [lead.get('msg_id'), lead.get('thread_id')]:
                if alt and probe_thread_alive(alt):
                    thread_id = alt
                    break
            print('CONTACT_THREAD2', email, thread_id, flush=True)
        c = dict(c)
        c['_resolved_thread_id'] = thread_id
        if not thread_id or not probe_thread_alive(thread_id):
            dead.append({'contact': email, 'thread_id': thread_id, 'subject': prospective_subject})
            print('CONTACT_END', email, 'dead_thread', flush=True)
            skipped += 1
            continue
        try:
            body = sanitize_outreach_body(lead['body'])
            if not body or not body.strip():
                print('CONTACT_END', email, 'empty_body', flush=True)
                skipped += 1
                continue
            if DRY_RUN:
                record = {
                    'mode': 'dry_run',
                    'contact': email,
                    'subject': lead['subject'],
                    'thread_id': thread_id,
                    'msg_id': lead.get('msg_id'),
                    'lang': lead.get('lang'),
                    'llm_tailored': bool(LLM_TAILOR_ENABLED and lead.get('body')),
                    'dedup_last_outbound_ts': (load_state().get('contacts', {}).get(email.lower(), {}) or {}).get('last_outbound_ts'),
                }
                append_dry_run_report(record)
                print('DRY_RUN_WOULD_SEND', email, lead['subject'], lead.get('msg_id'))
                sent_count += 1
                print('CONTACT_END', email, 'dry_sent', flush=True)
                continue
            sent = send_ceo_reply(thread_id, email, lead['subject'], body, lead['msg_id'])
            record_send(contact_key, email, lead['subject'], sent.get('id'), sent.get('threadId'), f'tailored CEO reply from inbox msg {lead["msg_id"]}')
            mark_seen_message_id(lead['msg_id'])
            sent_count += 1
            print('CONTACT_END', email, 'live_sent', flush=True)
        except Exception as e:
            print('CONTACT_ERR', email, repr(e), flush=True)
            record_bounce(email, f'SEND_ERR: {e}', lead.get('msg_id'))
            print('CONTACT_END', email, 'err', flush=True)

    state = load_state()
    state['last_check'] = int(time.time())
    save_state(state)

    print('ADDS', len(newest_used))
    print('SENT_TOTAL', sent_count)
    print('SKIPPED', skipped)
    if dead:
        print('DEAD_THREADS', len(dead))
        for d in dead:
            print('DEAD', d)
    print('STATE_TS', int(time.time()))
    return {'sent': sent_count, 'skipped': skipped, 'adds': len(newest_used), 'dead': dead}


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
    try:
        thread = _timed_gmail_call(service.users().threads().get(userId="me", id=thread_id, format="metadata", metadataHeaders=["To", "Cc"]))
        messages = thread.get("messages", []) or []
        all_cc = []
        for m in messages:
            h = {x["name"]: x["value"] for x in m.get("payload", {}).get("headers", [])}
            c = h.get("Cc") or ""
            if c and c not in all_cc:
                all_cc.append(c)
        cc_list = [x for x in all_cc if x and x.lower() != to_addr.lower() and x.lower() != "kleber@ziontechgroup.com"]
        if cc_list:
            raw_headers.append("Cc: " + ", ".join(cc_list[:10]))
    except Exception:
        pass
    raw = base64.urlsafe_b64encode(("\r\n".join(raw_headers) + "\r\n\r\n" + body).encode("utf-8")).decode("utf-8")
    return _timed_gmail_call(service.users().messages().send(userId="me", body={"raw": raw, "threadId": thread_id})).execute()


if __name__ == '__main__':
    run_high_frequency_outreach()
