#!/usr/bin/env python3
import json, sys, os, re, datetime
from pathlib import Path
import urllib.request, urllib.parse, base64

# Load google_workspace from canonical repo
REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT))
import importlib.util
spec = importlib.util.spec_from_file_location("google_workspace", REPO_ROOT / "commands" / "google_workspace.py")
gw = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gw)

gmail_search = gw.gmail_search
gmail_thread_get = gw.gmail_thread_get
gmail_list_labels = gw.gmail_list_labels
gmail_send_reply_fixed = gw.gmail_send_reply_fixed
gog_headers = gw.gog_headers

TARGET_LABEL_NAMES = ["!!!hot-follow-up", "!!!!HOT FOLLOW-UP"]
LEDGER_PATH = REPO_ROOT / "outreach_monitor" / "processed" / "sent_threads.json"

EXCLUDE_DOMAINS = [
    "ziontechgroup.com",
    "github.com",
    "github.io",
    "supabase.com",
    "notifications@github.com",
    "calendar-notification@google.com",
    "welcome@supabase.com",
    "airbnb.com",
    "booking.com",
    "vrbo.com",
    "expedia.com",
    ".edu",
    ".gov",
    ".mil",
    ".k12.ia.us",
    ".school",
    ".academy",
]
NEWSLETTER_KEYWORDS = ["newsletter", "digest", "weekly update", "daily update", "unsubscribe", "mailer-daemon", "bounce", "noreply", "no-reply"]

def load_ledger():
    if LEDGER_PATH.exists():
        with open(LEDGER_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
            return {t["thread_id"] for t in data.get("sent_threads", [])}
    return set()

def save_ledger(ledger_set, entry):
    data = {"sent_threads": []}
    if LEDGER_PATH.exists():
        with open(LEDGER_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
    existing = {t["thread_id"]: t for t in data.get("sent_threads", [])}
    existing[entry["thread_id"]] = entry
    data["sent_threads"] = list(existing.values())
    LEDGER_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(LEDGER_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def is_external(sender):
    addr = sender.lower()
    for dom in EXCLUDE_DOMAINS:
        if dom in addr:
            return False
    return True

def is_newsletter(subject, snippet):
    text = (subject + " " + snippet).lower()
    for kw in NEWSLETTER_KEYWORDS:
        if kw in text:
            return True
    return False

def detect_language(text):
    pt_words = ["obrigado", "olá", "projeto", "colaboração", "equipe", "reunião", "ideias"]
    es_words = ["gracias", "hola", "proyecto", "colaboración", "equipo", "reunión", "ideas"]
    lower = text.lower()
    for w in pt_words:
        if w in lower:
            return "pt"
    for w in es_words:
        if w in lower:
            return "es"
    return "en"

def build_body(lang, subject):
    if lang == "pt":
        return f"""Olá,

Foi um prazer trabalhar com você e sua equipe no projeto! A colaboração e a confiança foram fundamentais.

Depois desse projeto, lançamos novidades que podem agregar muito à sua operação:

🚀 **Novos Serviços de IA:**
- Automação de Suporte ao Cliente — redução de até 60% nos custos
- Painel de Análise Preditiva — insights antes dos problemas aparecerem
- Processamento Inteligente de Documentos — fluxos automatizados
- Analisador de Sentimento — acompanhe a satisfação em tempo real

🔧 **Ferramentas gratuitas:**
Confira em https://ziontechgroup.com

Quer marcar uma chamada rápida de 15 minutos? Agende aqui: https://calendly.com/kleber-ziontechgroup

Aguardamos seu contato!

Abraço,
Kleber
CEO, Zion Tech Group"""
    elif lang == "es":
        return f"""Hola,

Fue un placer trabajar con usted y su equipo en el proyecto. La colaboración y la confianza fueron clave.

Tras finalizar ese proyecto, lanzamos novedades que pueden generar gran valor en su operación:

🚀 **Nuevos Servicios de IA:**
- Automatización de Soporte al Cliente — reducción de hasta 60% en costos
- Panel de Análisis Predictivo — insights antes de que surjan problemas
- Procesamiento Inteligente de Documentos — flujos automatizados
- Analizador de Sentimiento — monitoree la satisfacción en tiempo real

🔧 **Herramientas gratuitas:**
Consulte https://ziontechgroup.com

¿Le gustaría agendar una llamada rápida de 15 minutos? Reserve aquí: https://calendly.com/kleber-ziontechgroup

Quedamos atentos a su respuesta.

Saludos,
Kleber
CEO, Zion Tech Group"""
    else:
        return f"""Hi,

It was a pleasure working with you and your team on this project! I really appreciated the collaboration and the trust you placed in our team.

Since we wrapped up, we've launched some exciting new developments that could bring significant value to your organization:

🚀 **New AI Services:**
- AI-Powered Customer Support Automation — reduce support costs by up to 60%
- Predictive Analytics Dashboard — proactive insights before issues arise
- AI Document Processing — automate document workflows
- Sentiment Trend Analyzer — track customer satisfaction in real time

🔧 **Free tools available now:**
Check them out at https://ziontechgroup.com

Would you be open to a quick 15-minute call? Book a time: https://calendly.com/kleber-ziontechgroup

Looking forward to hearing from you!

Best regards,
Kleber
CEO, Zion Tech Group"""

def main():
    print("=== Hot Follow-Up Scan ===", flush=True)
    # Resolve label ID
    labels = gmail_list_labels()
    target_label_id = None
    target_label_name = None
    for name in TARGET_LABEL_NAMES:
        for lab in labels:
            if lab.get("name") == name:
                target_label_id = lab.get("id")
                target_label_name = name
                break
        if target_label_id:
            break
    if not target_label_id:
        print(json.dumps({"status": "no_label", "message": f"Target label not found among {TARGET_LABEL_NAMES}"}))
        return

    # Direct API call to list messages with label ID
    url = f'https://gmail.googleapis.com/gmail/v1/users/me/messages?labelIds={target_label_id}&maxResults=50'
    req = urllib.request.Request(url, headers=gog_headers())
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
    except Exception as e:
        print(json.dumps({"status": "error", "message": f"Failed to list messages: {e}"}))
        return

    messages = resp.get("messages", [])
    print(json.dumps({"status": "ok", "label": target_label_name, "messages_found": len(messages)}))
    ledger = load_ledger()
    threads_checked = 0
    threads_sent = 0
    safe_candidate = None
    skip_reasons = {}

    for m in messages:
        try:
            full = gw.gmail_get(m["id"])
        except Exception:
            continue
        headers = {h["name"]: h["value"] for h in full.get("payload", {}).get("headers", [])}
        subject = headers.get("Subject", "")
        sender = headers.get("From", "")
        thread_id = full.get("threadId", m.get("threadId", ""))
        snippet = full.get("snippet", "")
        sender_addr = sender
        maddr = re.search(r'<([^>]+)>', sender)
        if maddr:
            sender_addr = maddr.group(1)
        # Skip if already sent
        if thread_id in ledger:
            skip_reasons["already_sent"] = skip_reasons.get("already_sent", 0) + 1
            continue
        # Skip internal
        if not is_external(sender_addr):
            skip_reasons["internal_domain"] = skip_reasons.get("internal_domain", 0) + 1
            continue
        # Skip newsletters/system
        if is_newsletter(subject, snippet):
            skip_reasons["newsletter_system"] = skip_reasons.get("newsletter_system", 0) + 1
            continue
        # Check thread history for prior outbound from CEO
        try:
            thread_msgs = gmail_thread_get(thread_id)
        except Exception:
            thread_msgs = []
        has_outbound = False
        for tm in thread_msgs:
            tm_headers = {h["name"]: h["value"] for h in tm.get("payload", {}).get("headers", [])}
            tm_from = tm_headers.get("From", "")
            if "kleber@ziontechgroup.com" in tm_from.lower():
                has_outbound = True
                break
        if has_outbound:
            skip_reasons["prior_ceo_outbound"] = skip_reasons.get("prior_ceo_outbound", 0) + 1
            continue
        threads_checked += 1
        # Safe candidate found
        lang = detect_language(snippet + " " + subject)
        body = build_body(lang, subject)
        safe_candidate = {
            "thread_id": thread_id,
            "message_id": m["id"],
            "to": sender_addr,
            "subject": subject,
            "body": body,
            "lang": lang,
        }
        break  # Only one safe candidate per run

    if not safe_candidate:
        print(json.dumps({"status": "no_safe_thread", "threads_checked": threads_checked, "threads_sent": 0, "skip_reasons": skip_reasons}))
        return

    # Send reply
    send_res = gmail_send_reply_fixed(
        safe_candidate["thread_id"],
        safe_candidate["subject"],
        safe_candidate["body"],
        safe_candidate["to"],
    )
    if send_res.get("success"):
        entry = {
            "thread_id": safe_candidate["thread_id"],
            "message_id": send_res.get("message_id", safe_candidate["message_id"]),
            "to": safe_candidate["to"],
            "subject": safe_candidate["subject"],
            "sent_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "status": "sent",
        }
        save_ledger(ledger, entry)
        print(json.dumps({"status": "sent", "threads_checked": threads_checked, "threads_sent": 1, "entry": entry}))
    else:
        print(json.dumps({"status": "send_failed", "error": send_res.get("error"), "threads_checked": threads_checked, "threads_sent": 0}))

if __name__ == "__main__":
    main()
