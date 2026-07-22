#!/usr/bin/env python3
"""
LLM-Powered Hot Follow-up Responder with High-Frequency All-Folder Search
=========================================================================
- Searches ALL Gmail folders/labels for hot follow-up threads
- Uses LLM (OpenRouter/Nous) for tailored CEO responses
- Runs at high frequency (every 5 min via cron)
- Continuous improvement monitoring
- Deduplication via ledger
"""

import json
import os
import sys
import time
import base64
import re
import html
from pathlib import Path
from datetime import datetime, timezone, timedelta
from typing import List, Dict, Optional, Any
from dataclasses import dataclass
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / "scripts"))

from commands.google_workspace import gog_headers
import urllib.request
import urllib.parse

# Load .env file for API keys
# First check .hermes/.env (Hermes config), then fallback to home .env
HERMES_ENV = Path(__file__).resolve().parents[3] / '.env'
HOME_ENV = Path.home() / '.env'

for env_file in [HERMES_ENV, HOME_ENV]:
    if env_file.exists():
        for line in env_file.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                k, v = line.split('=', 1)
                if v.strip():
                    os.environ.setdefault(k.strip(), v.strip())

# Configuration
HOT_FOLLOWUP_LABEL = "Label_4207916705207178948"  # !!!!HOT FOLLOW-UP
LEDGER_FILE = REPO / "outreach_monitor" / "processed" / "hot_followup_reply_ledger.jsonl"
LLM_DRAFTS_DIR = REPO / "outreach_monitor" / "processed" / "llm_drafts"
METRICS_FILE = REPO / "outreach_monitor" / "metrics" / "llm_responder_metrics.jsonl"
MAX_EMAILS_PER_RUN = 20
RATE_LIMIT_DELAY = 2  # seconds between LLM calls

LLM_DRAFTS_DIR.mkdir(parents=True, exist_ok=True)
METRICS_FILE.parent.mkdir(parents=True, exist_ok=True)

# LLM Configuration
LLM_API_ENDPOINT = os.getenv("ZION_LLM_API_ENDPOINT") or os.getenv("OPENROUTER_API_ENDPOINT") or "https://openrouter.ai/api/v1"
LLM_API_KEY = os.getenv("ZION_LLM_API_KEY") or os.getenv("OPENROUTER_API_KEY") or os.getenv("GROQ_API_KEY")
LLM_MODEL = os.getenv("ZION_LLM_MODEL") or os.getenv("OPENROUTER_MODEL") or "openai/gpt-4o-mini"


@dataclass
class EmailThread:
    thread_id: str
    messages: List[Dict]
    latest_subject: str
    latest_from: str
    latest_date: str
    snippet: str
    labels: List[str]


def load_ledger() -> Dict[str, Dict]:
    """Load sent replies ledger for deduplication."""
    if not LEDGER_FILE.exists():
        return {}
    ledger = {}
    with LEDGER_FILE.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                entry = json.loads(line)
                key = entry.get("thread_id") or entry.get("dedup_key")
                if key:
                    ledger[key] = entry
            except json.JSONDecodeError:
                pass
    return ledger


def save_ledger_entry(entry: Dict):
    """Append entry to ledger."""
    LEDGER_FILE.parent.mkdir(parents=True, exist_ok=True)
    with LEDGER_FILE.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")


def load_metrics() -> Dict:
    """Load metrics for continuous improvement tracking."""
    if not METRICS_FILE.exists():
        return {"runs": 0, "emails_processed": 0, "replies_sent": 0, "llm_calls": 0, "errors": 0, "last_run": None}
    with METRICS_FILE.open("r", encoding="utf-8") as f:
        return json.load(f)


def save_metrics(metrics: Dict):
    """Save metrics for continuous improvement."""
    metrics["last_run"] = datetime.now(timezone.utc).isoformat()
    with METRICS_FILE.open("w", encoding="utf-8") as f:
        json.dump(metrics, f, indent=2)


def extract_email_addr(from_header: str) -> str:
    """Extract email address from From header."""
    match = re.search(r'<([^>]+)>', from_header)
    if match:
        return match.group(1).lower().strip()
    return from_header.strip().lower()


def extract_name(from_header: str) -> str:
    """Extract name from From header."""
    match = re.search(r'^([^<]+)', from_header)
    if match:
        name = match.group(1).strip().strip('"')
        parts = name.split()
        return parts[0] if parts else "there"
    return "there"


def decode_body(payload: Dict) -> str:
    """Decode email body from Gmail payload."""
    text = ""
    if payload.get("body", {}).get("data"):
        text = base64.urlsafe_b64decode(payload["body"]["data"]).decode("utf-8", errors="ignore")
    elif payload.get("parts"):
        for part in payload["parts"]:
            if part.get("mimeType") == "text/plain" and part.get("body", {}).get("data"):
                text = base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
                break
            elif part.get("mimeType") == "text/html" and part.get("body", {}).get("data") and not text:
                text = base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
    return text


def fetch_thread_history(thread_id: str, max_messages: int = 10) -> List[Dict]:
    """Fetch full thread history from Gmail."""
    try:
        thread_url = f"https://gmail.googleapis.com/gmail/v1/users/me/threads/{thread_id}?format=full"
        req = urllib.request.Request(thread_url, headers=gog_headers())
        resp = json.loads(urllib.request.urlopen(req, timeout=30).read())
        messages = resp.get("messages", [])
        return messages[-max_messages:]
    except Exception as e:
        print(f"Error fetching thread {thread_id}: {e}")
        return []


def detect_language(text: str) -> str:
    """Detect language from email text."""
    text_lower = text.lower()
    pt_indicators = ['obrigado', 'oportunidade', 'projeto', 'serviços', 'ferramentas', 'conversa', 'abraço', 'trabalhamos']
    es_indicators = ['gracias', 'oportunidad', 'proyecto', 'servicios', 'herramientas', 'conversación', 'saludos', 'trabajamos']
    en_indicators = ['thank you', 'opportunity', 'project', 'services', 'tools', 'conversation', 'regards', 'worked']
    
    pt_score = sum(1 for w in pt_indicators if w in text_lower)
    es_score = sum(1 for w in es_indicators if w in text_lower)
    en_score = sum(1 for w in en_indicators if w in text_lower)
    
    if pt_score >= es_score and pt_score >= en_score:
        return "pt"
    elif es_score >= en_score:
        return "es"
    return "en"


def call_llm(prompt: str, system_prompt: str = None, temperature: float = 0.3, max_tokens: int = 800) -> str:
    """Call LLM API for tailored response generation."""
    if not LLM_API_KEY:
        raise RuntimeError("No LLM API key configured (ZION_LLM_API_KEY or OPENROUTER_API_KEY)")
    
    messages = []
    if system_prompt:
        messages.append({"role": "system", "content": system_prompt})
    messages.append({"role": "user", "content": prompt})
    
    body = {
        "model": LLM_MODEL,
        "messages": messages,
        "temperature": temperature,
        "max_tokens": max_tokens,
    }
    
    headers = {
        "Authorization": f"Bearer {LLM_API_KEY}",
        "Content-Type": "application/json",
    }
    
    url = LLM_API_ENDPOINT.rstrip('/') + "/chat/completions"
    req = urllib.request.Request(url, data=json.dumps(body).encode(), headers=headers, method="POST")
    
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        data = json.loads(resp.read())
        content = data.get("choices", [{}])[0].get("message", {}).get("content", "")
        return content.strip()
    except Exception as e:
        print(f"LLM call failed: {e}")
        raise


def build_llm_prompt(thread: EmailThread, contact_name: str, company_name: str, language: str) -> tuple:
    """Build system and user prompts for LLM."""
    
    # Format conversation history
    conversation = []
    for msg in thread.messages:
        headers = {h["name"]: h["value"] for h in msg.get("payload", {}).get("headers", [])}
        from_addr = headers.get("From", "")
        body = decode_body(msg.get("payload", {}))
        snippet = body[:2000] if body else msg.get("snippet", "")
        conversation.append(f"From: {from_addr}\n{snippet}\n---")
    
    conversation_text = "\n".join(conversation)
    
    lang_configs = {
        "pt": {
            "system": "Você é o CEO da Zion Tech Group (Kleber Garcia Alcatrão). Escreva emails de follow-up calorosos, profissionais e estratégicos em português. Seja amigável mas profissional. Não invente fatos - use apenas o contexto fornecido.",
            "thanks": f"Obrigado pela oportunidade de trabalharmos juntos no projeto anterior. Valorizei muito nossa colaboração com a {company_name}.",
            "new_ideas": f"Desde nossa última conversa, a Zion Tech Group expandiu nossos serviços de IA/IT em três áreas que se alinham diretamente com o que a {company_name} precisa:",
            "ideas": [
                "1) **Automação de Suporte com IA Gerenciada** — Deploy de nossos agentes de IA para lidar com Tier-1/2, reduzindo tempo de resposta em 60%+ e fornecendo escalonamento limpo para seus especialistas. Operaríamos como serviço co-branded: seu relacionamento com cliente, nossa entrega de IA.",
                "2) **Avaliações de Prontidão de IA e Otimização de Custos** — Empacotar o framework de auditoria que discutimos em uma oferta repetível e co-branded que você pode liderar com prospects. Nós cuidamos da profundidade técnica; você conduz a conversa comercial. Divisão de receita 50/50 na margem líquida.",
                "3) **Piloto de Migração Híbrida em Nuvem + AI Ops** — Um piloto de 30 dias usando seu ambiente atual + nossa plataforma para demonstrar redução mensurável de MTTR e economia em nuvem. Pós-piloto converte para MSA/SOW-1 com preços pré-acordados."
            ],
            "cta": "Gostaria de avançar eficientemente — feliz em iterar escopo por email, ou podemos fechar termos comerciais em uma chamada de 30 min:",
            "calendly": "https://calendly.com/kleber-ziontechgroup",
            "website": "https://ziontechgroup.com",
            "free_tools": "Também oferecemos muitos serviços e ferramentas gratuitos em nosso site que sua equipe pode começar a usar imediatamente.",
            "closing": "Qual das três direções ressoa mais? Posso enviar um term sheet de uma página para o caminho que preferir.",
            "signoff": "Um abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com\nkleber@ziontechgroup.com\n+1 302 464 0950"
        },
        "es": {
            "system": "Eres el CEO de Zion Tech Group (Kleber Garcia Alcatrão). Escribe emails de follow-up cálidos, profesionales y estratégicos en español. Sé amable pero profesional. No inventes hechos - usa solo el contexto proporcionado.",
            "thanks": f"Gracias por la oportunidad de haber trabajado juntos en el proyecto anterior. Valoré mucho nuestra colaboración con {company_name}.",
            "new_ideas": f"Desde que hablamos por última vez, Zion Tech Group ha afinado nuestros servicios de IA/IT en tres áreas que se alinean directamente con lo que {company_name} necesita:",
            "ideas": [
                "1) **Automatización de Soporte con IA Gestionada** — Despliegue de nuestros agentes de IA para manejar Tier-1/2, reduciendo tiempos de respuesta 60%+ y proporcionando escalamiento limpio a sus especialistas. Lo operaríamos como servicio co-branded: su relación con el cliente, nuestra entrega de IA.",
                "2) **Evaluaciones de Preparación para IA y Optimización de Costos** — Empaquetar el marco de auditoría que discutimos en una oferta repetible y co-branded que usted puede liderar con prospects. Nosotros manejamos la profundidad técnica; usted la conversación comercial. División de ingresos 50/50 en margen neto.",
                "3) **Piloto de Migración Híbrida a Nube + AI Ops** — Un piloto de 30 días usando su ambiente actual + nuestra plataforma para demostrar reducción medible de MTTR y ahorros en nube. Post-piloto convierte a MSA/SOW-1 con precios pre-acordados."
            ],
            "cta": "Me gustaría avanzar eficientemente — feliz de iterar alcance por email, o podemos cerrar términos comerciales en una llamada de 30 min:",
            "calendly": "https://calendly.com/kleber-ziontechgroup",
            "website": "https://ziontechgroup.com",
            "free_tools": "También ofrecemos muchos servicios y herramientas gratuitos en nuestro sitio que su equipo puede empezar a usar de inmediato.",
            "closing": "¿Cuál de las tres direcciones resuena más? Puedo enviar un term sheet de una página para el camino que prefiera.",
            "signoff": "Saludos cordiales,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com\nkleber@ziontechgroup.com\n+1 302 464 0950"
        },
        "en": {
            "system": "You are the CEO of Zion Tech Group (Kleber Garcia Alcatrão). Write warm, professional, strategic follow-up emails in English. Be friendly but professional. Don't invent facts - use only the provided context.",
            "thanks": f"Thank you again for the opportunity to work together on the previous project — I genuinely enjoyed our collaboration and appreciate the openness you showed during our discussions about the AI Readiness Audit and potential partnership structures.",
            "new_ideas": f"Since we last spoke, Zion Tech Group has sharpened our AI/IT services around three areas that align directly with what {company_name} needs:",
            "ideas": [
                "1) **Managed AI Support Automation** — Deploy our AI agents to handle Tier-1/2 tickets, cut response times 60%+, and provide cleaner escalation paths to your specialists. We'd run this as a co-branded service: your client relationship, our AI delivery.",
                "2) **AI Readiness & Cost-Optimization Assessments** — Package the audit framework we discussed into a repeatable, co-branded offering you can lead with prospects. We handle the technical depth; you own the commercial conversation. Revenue split 50/50 on net margin.",
                "3) **Hybrid-Cloud Migration + AI Ops Pilot** — A 30-day pilot using your current environment + our platform to demonstrate measurable MTTR reduction and cloud cost savings. Post-pilot converts to MSA/SOW-1 with pre-agreed pricing."
            ],
            "cta": "I'd like to move this forward efficiently — happy to iterate on scope by email, or we can lock commercial terms on a 30-minute call:",
            "calendly": "https://calendly.com/kleber-ziontechgroup",
            "website": "https://ziontechgroup.com",
            "free_tools": "We also offer many free services and tools on our website that your team can start using immediately.",
            "closing": "Which of the three directions resonates most? I can send a one-page term sheet for whichever path you prefer.",
            "signoff": "Best,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com\nkleber@ziontechgroup.com\n+1 302 464 0950"
        }
    }
    
    cfg = lang_configs.get(language, lang_configs["en"])
    system_prompt = cfg["system"]
    
    user_prompt = f"""CONVERSATION HISTORY:
{conversation_text}

RECIPIENT: {contact_name} at {company_name}
LATEST SUBJECT: {thread.latest_subject}
LANGUAGE: {language}

TASK: Write a tailored CEO follow-up reply that:
1. Thanks them for the past collaboration (specific reference to the project/context)
2. Presents 3 concrete, mutually beneficial business ideas tailored to their context
3. Advances the negotiation via email as far as possible
4. Offers Calendly meeting link for next step
5. Includes website link and mentions free tools/services
6. Matches the language and tone of the conversation
7. Is warm, professional, CEO-level - not overly formal but not casual
8. Avoids duplicates - fresh, specific content

{cfg["thanks"]}

{cfg["new_ideas"]}
{chr(10).join(cfg["ideas"])}

{cfg["cta"]}
{cfg["calendly"]}

{cfg["free_tools"]}
{cfg["website"]}

{cfg["closing"]}

{cfg["signoff"]}"""
    
    return system_prompt, user_prompt


def find_hot_followup_threads() -> List[EmailThread]:
    """Search ALL Gmail folders for threads with !!!!HOT FOLLOW-UP label."""
    try:
        url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages?labelIds={HOT_FOLLOWUP_LABEL}&maxResults=50"
        req = urllib.request.Request(url, headers=gog_headers())
        resp = json.loads(urllib.request.urlopen(req, timeout=30).read())
        messages = resp.get("messages", [])
        
        print(f"   Found {len(messages)} messages with label")
        
        threads = []
        seen_threads = set()
        
        for msg in messages:
            if not isinstance(msg, dict):
                continue
            thread_id = msg.get("threadId")
            if not thread_id or thread_id in seen_threads:
                continue
            seen_threads.add(thread_id)
            
            full_msg = gmail_get_message(msg["id"])
            if not full_msg:
                continue
                
            headers = {h["name"]: h["value"] for h in full_msg.get("payload", {}).get("headers", [])}
            labels = full_msg.get("labelIds", [])
            
            thread = EmailThread(
                thread_id=thread_id,
                messages=[full_msg],
                latest_subject=headers.get("Subject", ""),
                latest_from=headers.get("From", ""),
                latest_date=headers.get("Date", ""),
                snippet=full_msg.get("snippet", ""),
                labels=labels
            )
            threads.append(thread)
        
        return threads
    except Exception as e:
        print(f"Error searching hot followup threads: {e}")
        return []


def gmail_get_message(message_id: str) -> Optional[Dict]:
    """Get full message by ID."""
    try:
        url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages/{message_id}?format=full"
        req = urllib.request.Request(url, headers=gog_headers())
        return json.loads(urllib.request.urlopen(req, timeout=30).read())
    except Exception as e:
        print(f"Error getting message {message_id}: {e}")
        return None


def gmail_send_reply(thread_id: str, message_id: str, to: str, subject: str, body: str) -> Dict:
    """Send a reply to a thread."""
    try:
        msg = MIMEMultipart()
        msg["To"] = to
        msg["Subject"] = subject
        msg["In-Reply-To"] = message_id
        msg["References"] = message_id
        msg["From"] = "Kleber Garcia Alcatrão <kleber@ziontechgroup.com>"
        
        html_body = body.replace('\n', '<br>')
        msg.attach(MIMEText(html_body, "html"))
        
        raw = base64.urlsafe_b64encode(msg.as_bytes()).decode()
        
        url = "https://gmail.googleapis.com/gmail/v1/users/me/messages/send"
        body_data = {"raw": raw, "threadId": thread_id}
        req = urllib.request.Request(
            url, 
            data=json.dumps(body_data).encode(),
            headers={**gog_headers(), "Content-Type": "application/json"},
            method="POST"
        )
        return json.loads(urllib.request.urlopen(req, timeout=30).read())
    except Exception as e:
        return {"success": False, "error": str(e)}


def process_thread(thread: EmailThread, ledger: Dict) -> Optional[Dict]:
    """Process a single thread: generate LLM reply, check dedup, prepare for sending."""
    
    if thread.thread_id in ledger:
        print(f"  ⏭ Already replied to thread {thread.thread_id}")
        return None
    
    contact_email = extract_email_addr(thread.latest_from)
    contact_name = extract_name(thread.latest_from)
    company_name = contact_email.split("@")[1].split(".")[0].title() if "@" in contact_email else "Partner"
    
    dedup_key = re.sub(r'[^a-z0-9]', '', contact_email)
    if dedup_key in ledger:
        print(f"  ⏭ Dedup key {dedup_key} already in ledger")
        return None
    
    full_text = thread.snippet + " " + " ".join([decode_body(m.get("payload", {})) for m in thread.messages])
    language = detect_language(full_text)
    
    print(f"  🔍 Processing thread {thread.thread_id}: {thread.latest_subject[:60]}...")
    print(f"     Contact: {contact_name} ({contact_email}) | Company: {company_name} | Lang: {language}")
    
    full_history = fetch_thread_history(thread.thread_id)
    if full_history:
        thread.messages = full_history
    
    try:
        system_prompt, user_prompt = build_llm_prompt(thread, contact_name, company_name, language)
        body = call_llm(user_prompt, system_prompt)
        
        body = html.unescape(body)
        body = re.sub(r'\n{3,}', '\n\n', body)
        
        draft = {
            "thread_id": thread.thread_id,
            "message_id": thread.messages[-1].get("id", "") if thread.messages else "",
            "to": thread.latest_from,
            "contact_name": contact_name,
            "company": company_name,
            "subject": "Re: " + thread.latest_subject if not thread.latest_subject.startswith("Re:") else thread.latest_subject,
            "language": language,
            "body": body,
            "calendly": "https://calendly.com/kleber-ziontechgroup",
            "website": "https://ziontechgroup.com",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "dedup_key": dedup_key,
            "status": "ready_to_send"
        }
        
        draft_file = LLM_DRAFTS_DIR / f"draft_{thread.thread_id}_{int(time.time())}.json"
        with draft_file.open("w", encoding="utf-8") as f:
            json.dump(draft, f, ensure_ascii=False, indent=2)
        
        print(f"  ✅ LLM draft generated and saved to {draft_file.name}")
        return draft
        
    except Exception as e:
        print(f"  ❌ LLM generation failed: {e}")
        return None


def main():
    """Main execution - search all folders, generate LLM replies, send."""
    print("=" * 60)
    print("🤖 LLM-Powered Hot Follow-up Responder")
    print("=" * 60)
    
    ledger = load_ledger()
    metrics = load_metrics()
    metrics["runs"] += 1
    
    print(f"\n🔍 Searching ALL folders for label {HOT_FOLLOWUP_LABEL}...")
    threads = find_hot_followup_threads()
    print(f"   Found {len(threads)} unique threads")
    
    if not threads:
        print("   No threads found. Exiting.")
        save_metrics(metrics)
        return
    
    sent = 0
    skipped = 0
    errors = 0
    
    for thread in threads[:MAX_EMAILS_PER_RUN]:
        metrics["emails_processed"] += 1
        
        draft = process_thread(thread, ledger)
        if not draft:
            skipped += 1
            continue
        
        print(f"  📤 Sending reply to {draft['to']}...")
        metrics["llm_calls"] += 1
        
        result = gmail_send_reply(
            thread_id=draft["thread_id"],
            message_id=draft["message_id"],
            to=draft["to"],
            subject=draft["subject"],
            body=draft["body"]
        )
        
        if result.get("success") or result.get("message_id") or result.get("id"):
            message_id = result.get("message_id") or result.get("id", "")
            print(f"  ✅ Sent! Message-ID: {message_id}")
            
            ledger_entry = {
                "source": "llm_hot_followup",
                "to": draft["to"],
                "subject": draft["subject"],
                "thread_id": draft["thread_id"],
                "message_id": message_id,
                "avoid_duplicate": True,
                "dedup_key": draft["dedup_key"],
                "ts": int(time.time()),
                "status": "sent",
                "payload": result,
                "reason": "LLM-tailored CEO hot-followup reply",
            }
            save_ledger_entry(ledger_entry)
            ledger[draft["dedup_key"]] = ledger_entry
            ledger[draft["thread_id"]] = ledger_entry
            
            sent += 1
            metrics["replies_sent"] += 1
        else:
            print(f"  ❌ Failed: {result.get('error', 'Unknown error')}")
            errors += 1
            metrics["errors"] += 1
        
        time.sleep(RATE_LIMIT_DELAY)
    
    save_metrics(metrics)
    
    print("\n" + "=" * 60)
    print(f"📊 RUN SUMMARY")
    print(f"   Threads found:  {len(threads)}")
    print(f"   Replies sent:   {sent}")
    print(f"   Skipped:        {skipped}")
    print(f"   Errors:         {errors}")
    print(f"   Total runs:     {metrics['runs']}")
    print(f"   Total sent:     {metrics['replies_sent']}")
    print("=" * 60)


if __name__ == "__main__":
    main()