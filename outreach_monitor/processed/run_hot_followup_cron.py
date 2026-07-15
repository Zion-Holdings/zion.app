#!/usr/bin/env python3
import sys
import json
import time
from pathlib import Path

sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
from google_workspace import gmail_search, gmail_get, extract_body_from_gmail_message

base = Path('/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed')
ledger_path = base / 'hot_followup_reply_ledger.jsonl'
draft_path = base / 'next_hot_followup_llm_draft.json'

ledger_entries = []
if ledger_path.exists():
    with open(ledger_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line:
                try:
                    ledger_entries.append(json.loads(line))
                except Exception:
                    pass

thread_ids_seen = set()
contacts_seen = set()
for entry in ledger_entries:
    tid = entry.get('thread_id') or entry.get('message_id')
    if tid:
        thread_ids_seen.add(tid)
    to_addr = entry.get('to', '').lower()
    if to_addr:
        contacts_seen.add(to_addr)

print(f"Loaded {len(ledger_entries)} ledger entries", flush=True)

results = gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)
print(f"Found {len(results)} messages with label", flush=True)

threads_scanned = len(results)
duplicates_skipped = 0
drafts_created = 0
errors = []

def detect_language(text):
    text_lower = text.lower()
    pt_words = ['obrigado', 'olá', 'projeto', 'colaboração', 'reunião', 'atenciosamente', 'abraço']
    es_words = ['gracias', 'hola', 'proyecto', 'colaboración', 'reunión', 'saludos', 'estimado']
    if any(w in text_lower for w in pt_words):
        return 'pt'
    if any(w in text_lower for w in es_words):
        return 'es'
    return 'en'

def generate_draft(sender_email, subject, body_text, lang):
    name = sender_email.split('@')[0].replace('.', ' ').title() if '@' in sender_email else sender_email
    if lang == 'pt':
        body = f"""Olá, {name},

Obrigado pela oportunidade de colaborarmos em projetos anteriores. Foi um prazer construir essa parceria e ver resultados concretos juntos.

Gostaria de explorar duas possibilidades para fortalecermos ainda mais essa relação:
1. Uma parceria tecnológica para co-criar produtos digitais usando ferramentas gratuitas disponíveis em https://ziontechgroup.com, reduzindo custos e acelerando o time-to-market.
2. Uma iniciativa conjunta de inovação que combine nossa expertise em IA e desenvolvimento com seu conhecimento de mercado para gerar novas receitas recorrentes.

Acredito que podemos gerar valor mútuo rapidamente. Vamos agendar uma conversa? Escolha um horário aqui: https://calendly.com/kleber-ziontechgroup

Atenciosamente,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950
https://ziontechgroup.com"""
    elif lang == 'es':
        body = f"""Hola, {name},

Gracias por la oportunidad de colaborar en proyectos anteriores. Ha sido un placer construir esta alianza y ver resultados tangibles juntos.

Me gustaría explorar dos posibilidades para fortalecer aún más esta relación:
1. Una alianza tecnológica para co-crear productos digitales usando herramientas gratuitas disponibles en https://ziontechgroup.com, reduciendo costos y acelerando el time-to-market.
2. Una iniciativa conjunta de innovación que combine nuestra experiencia en IA y desarrollo con su conocimiento del mercado para generar nuevos ingresos recurrentes.

Creo que podemos generar valor mutuo rápidamente. ¿Agendamos una charla? Elige un horario aquí: https://calendly.com/kleber-ziontechgroup

Saludos cordiales,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950
https://ziontechgroup.com"""
    else:
        body = f"""Hi, {name},

Thank you for the opportunity to work together on past projects. It has been a pleasure building that partnership and delivering real results together.

I would like to explore two possibilities to strengthen that relationship further:
1. A technology partnership to co-create digital products using free tools available at https://ziontechgroup.com, cutting costs and accelerating time-to-market.
2. A joint innovation initiative combining our AI and development expertise with your market knowledge to build new recurring revenue streams.

I believe we can create mutual value quickly. Shall we schedule a call? Pick a time here: https://calendly.com/kleber-ziontechgroup

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950
https://ziontechgroup.com"""
    return body

new_drafts = []

for msg_meta in results:
    mid = msg_meta.get('id')
    thread_id = msg_meta.get('threadId', mid)
    try:
        msg = gmail_get(mid)
    except Exception as e:
        errors.append(f"Failed to get message {mid}: {e}")
        continue

    headers = {h['name']: h['value'] for h in msg.get('payload', {}).get('headers', [])}
    subject = headers.get('Subject', '(no subject)')
    from_header = headers.get('From', '')
    sender_email = from_header
    if '<' in from_header and '>' in from_header:
        sender_email = from_header.split('<')[-1].split('>')[0].strip().lower()
    else:
        sender_email = from_header.strip().lower()

    if thread_id in thread_ids_seen or sender_email in contacts_seen:
        duplicates_skipped += 1
        continue

    body = extract_body_from_gmail_message(msg)
    lang = detect_language(body)
    draft_body = generate_draft(sender_email, subject, body, lang)

    draft_entry = {
        "to": sender_email,
        "subject": subject,
        "thread_id": thread_id,
        "message_id": mid,
        "body": draft_body,
        "lang": lang,
        "status": "drafted"
    }
    new_drafts.append(draft_entry)
    thread_ids_seen.add(thread_id)
    contacts_seen.add(sender_email)
    drafts_created += 1

with open(draft_path, 'w', encoding='utf-8') as f:
    json.dump({"leads": new_drafts}, f, ensure_ascii=False, indent=2)

with open(ledger_path, 'a', encoding='utf-8') as f:
    for d in new_drafts:
        entry = {
            "to": d['to'],
            "subject": d['subject'],
            "thread_id": d['thread_id'],
            "message_id": d['message_id'],
            "status": "drafted",
            "ts": int(time.time()),
            "source": "hot_followup_cron"
        }
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

summary = {
    "threads_scanned": threads_scanned,
    "duplicates_skipped": duplicates_skipped,
    "drafts_created": drafts_created,
    "errors": errors,
    "llm_provider": "heuristic"
}
print(json.dumps(summary, ensure_ascii=False))
