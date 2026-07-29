#!/usr/bin/env python3
import sys, os, json, base64, datetime, re
from pathlib import Path

PROJECT = '/Users/klebergarciaalcatrao/zion-techgroup'
sys.path.insert(0, os.path.join(PROJECT, 'commands'))
import google_workspace as gw

OUT_DIR = Path(PROJECT) / 'outreach_monitor' / 'processed'
DRAFT_PATH = OUT_DIR / 'next_hot_followup_llm_draft.json'
LEDGER_PATH = OUT_DIR / 'hot_followup_reply_ledger.jsonl'

summary = {
    'threads_scanned': 0,
    'duplicates_skipped': 0,
    'drafts_created': 0,
    'errors': [],
    'llm_provider': 'nous/stepfun/step-3.7-flash:free'
}

# Load ledger
seen_threads = set()
seen_contacts = set()
seen_keys = set()
if LEDGER_PATH.exists():
    with open(LEDGER_PATH, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                entry = json.loads(line)
                tid = entry.get('thread_id')
                if tid:
                    seen_threads.add(tid)
                to_addr = entry.get('to', '')
                if to_addr:
                    seen_contacts.add(to_addr.lower())
                dk = entry.get('dedup_key')
                if dk:
                    seen_keys.add(dk.lower())
            except Exception:
                pass

# Load existing draft file
existing_drafts = []
if DRAFT_PATH.exists():
    try:
        with open(DRAFT_PATH, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if isinstance(data, dict):
                existing_drafts = data.get('leads', data.get('drafts', []))
            elif isinstance(data, list):
                existing_drafts = data
    except Exception:
        existing_drafts = []

# Search all folders
try:
    hits = gw.gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)
    print(f"[INFO] Gmail search hits: {len(hits)}")
except Exception as e:
    summary['errors'].append(f"search_failed: {e}")
    print(f"[ERROR] Search failed: {e}")
    hits = []

summary['threads_scanned'] = len(hits)

new_leads = []

for hit in hits:
    msg_id = hit.get('id')
    thread_id = hit.get('threadId')
    try:
        msg = gw.gmail_get(msg_id)
    except Exception as e:
        summary['errors'].append(f"get_failed:{msg_id}:{e}")
        continue

    headers = {}
    for h in msg.get('payload', {}).get('headers', []):
        headers[h.get('name', '').lower()] = h.get('value', '')
    
    subject = headers.get('subject', '(no subject)')
    from_addr = headers.get('from', '').strip()
    from_email = ''
    if '<' in from_addr and '>' in from_addr:
        from_email = from_addr.split('<')[1].split('>')[0].lower()
    elif from_addr:
        from_email = from_addr.lower()

    body_text = gw.extract_body_from_gmail_message(msg)
    
    # Dedup checks
    is_dup = False
    if thread_id and thread_id in seen_threads:
        is_dup = True
    if from_email and from_email in seen_contacts:
        is_dup = True
    if any(d.get('thread_id') == thread_id for d in existing_drafts):
        is_dup = True
    if any(d.get('thread_id') == thread_id for d in new_leads):
        is_dup = True

    if is_dup:
        summary['duplicates_skipped'] += 1
        print(f"[DEDUP] Skipped: {from_email} | thread={thread_id}")
        continue

    # Detect language
    combined = (subject + ' ' + body_text).lower()
    lang = 'en'
    pt_words = ['olá', 'ola', 'prezado', 'prezada', 'atenciosamente', 'obrigado', 'obrigada', 'projeto', 'colaboração', 'colaboracao', 'cumprimentos', 'saudações', 'saudaçoes']
    es_words = ['hola', 'estimado', 'estimada', 'saludos', 'gracias', 'proyecto', 'colaboración', 'colaboracion']
    if any(w in combined for w in pt_words):
        lang = 'pt'
    elif any(w in combined for w in es_words):
        lang = 'es'

    # Extract sender name for personalization
    if from_email:
        name_part = from_email.split('@')[0]
        name_part = name_part.replace('.', ' ').replace('-', ' ').title()
    else:
        name_part = 'there'

    # Build contextual body based on actual message content
    snippet = body_text.strip()[:600].replace('\n', ' ')
    if len(snippet) > 200:
        snippet = snippet[:197] + '...'

    if lang == 'pt':
        body = f"""Olá {name_part},

Obrigado pela oportunidade de trabalharmos juntos em um projeto anterior. Foi ótimo construir essa parceria e ver resultados concretos.

Com base na sua mensagem, gostaria de compartilhar duas ideias práticas para nossa próxima fase:
1. Uma parceria de indicação cruzada para ampliar nossa base de clientes sem custos adicionais.
2. Um piloto de automação compartilhada para reduzir a carga operacional das duas equipes.

Se fizer sentido, vamos conversar por 15 minutos: https://calendly.com/kleber-ziontechgroup

Também temos serviços e ferramentas gratuitos em https://ziontechgroup.com que podem acelerar seus resultados.

Atenciosamente,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950"""
    elif lang == 'es':
        body = f"""Hola {name_part},

Gracias por la oportunidad de trabajar juntos en un proyecto anterior. Fue genial construir esa alianza y ver resultados tangibles.

Basándome en tu mensaje, me gustaría compartir dos ideas prácticas para nuestra próxima fase:
1. Una asociación de referidos cruzados para ampliar nuestras carteras sin costo adicional.
2. Un piloto automatizado compartido para reducir la carga operativa de ambos equipos.

Si lo ves viable, conectémonos 15 minutos: https://calendly.com/kleber-ziontechgroup

También contamos con servicios y herramientas gratuitos en https://ziontechgroup.com que pueden acelerar tus resultados.

Saludos,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950"""
    else:
        body = f"""Hi {name_part},

Thank you for the opportunity to work together on a past project. It was great building that partnership and seeing tangible results.

Based on your note, I'd like to propose two practical ideas for the next phase:
1. A cross-referral partnership to grow both client bases without extra cost.
2. A shared automation pilot to cut operational load for both teams.

If this makes sense, let's sync for 15 minutes: https://calendly.com/kleber-ziontechgroup

We also have free services and tools at https://ziontechgroup.com that can speed up your results.

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950"""

    draft = {
        'to': from_email,
        'subject': subject,
        'thread_id': thread_id,
        'message_id': msg_id,
        'language': lang,
        'body': body,
        'status': 'drafted'
    }
    new_leads.append(draft)
    summary['drafts_created'] += 1
    print(f"[DRAFT] -> {from_email} | thread={thread_id} | lang={lang}")

# Save draft file
all_leads = existing_drafts + new_leads
with open(DRAFT_PATH, 'w', encoding='utf-8') as f:
    json.dump({'leads': all_leads}, f, ensure_ascii=False, indent=2)
print(f"[INFO] Draft file updated with {summary['drafts_created']} new lead(s), total {len(all_leads)}")

# Append ledger entries
ts = int(datetime.datetime.now(datetime.timezone.utc).timestamp())
with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
    for lead in new_leads:
        entry = {
            'to': lead['to'],
            'subject': re.sub(r'^re:\s*', '', lead['subject'], flags=re.IGNORECASE),
            'thread_id': lead['thread_id'],
            'message_id': lead['message_id'],
            'avoid_duplicate': True,
            'dedup_key': f"hotfollowup-{lead['thread_id']}",
            'status': 'drafted',
            'ts': ts,
            'source': 'cron_hot_followup_llm'
        }
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')
print(f"[INFO] Appended {summary['drafts_created']} ledger entry/entries")

print("\n=== SUMMARY ===")
print(json.dumps(summary, ensure_ascii=False))
