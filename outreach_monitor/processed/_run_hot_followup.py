#!/usr/bin/env python3
import os, sys, json, base64, urllib.request, urllib.parse, datetime

PROJECT = '/Users/klebergarciaalcatrao/zion-techgroup'
sys.path.insert(0, os.path.join(PROJECT, 'commands'))
import google_workspace as gw

OUT_DIR = os.path.join(PROJECT, 'outreach_monitor', 'processed')
DRAFT_PATH = os.path.join(OUT_DIR, 'next_hot_followup_llm_draft.json')
LEDGER_PATH = os.path.join(OUT_DIR, 'hot_followup_reply_ledger.jsonl')

os.makedirs(OUT_DIR, exist_ok=True)

summary = {
    'threads_scanned': 0,
    'duplicates_skipped': 0,
    'drafts_created': 0,
    'errors': [],
    'llm_provider': 'rule/script-crafted-draft'
}

# Load ledger
seen_threads = set()
seen_contacts = set()
seen_keys = set()
if os.path.exists(LEDGER_PATH):
    with open(LEDGER_PATH, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                entry = json.loads(line)
                if entry.get('thread_id'):
                    seen_threads.add(entry['thread_id'])
                if entry.get('to'):
                    seen_contacts.add(entry['to'].lower())
                if entry.get('dedup_key'):
                    seen_keys.add(entry['dedup_key'])
            except Exception:
                pass

# Load existing draft file
existing_drafts = []
if os.path.exists(DRAFT_PATH):
    try:
        with open(DRAFT_PATH, 'r', encoding='utf-8') as f:
            existing_drafts = json.load(f).get('leads', [])
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

    if thread_id in seen_threads:
        summary['duplicates_skipped'] += 1
        print(f"[DEDUP] thread {thread_id} already in ledger")
        continue
    if from_email and from_email in seen_contacts:
        summary['duplicates_skipped'] += 1
        print(f"[DEDUP] contact {from_email} already in ledger")
        continue
    if any(d.get('thread_id') == thread_id for d in existing_drafts):
        summary['duplicates_skipped'] += 1
        print(f"[DEDUP] thread {thread_id} already drafted in file")
        continue

    body_text = gw.extract_body_from_gmail_message(msg)
    lang = 'en'
    text_for_lang = (subject + ' ' + body_text).lower()
    pt_words = ['olá', 'prezado', 'atenciosamente', 'obrigado', 'projeto', 'colaboração']
    es_words = ['hola', 'estimado', 'gracias', 'proyecto', 'colaboración', 'saludos']
    if any(w in text_for_lang for w in pt_words):
        lang = 'pt'
    elif any(w in text_for_lang for w in es_words):
        lang = 'es'

    name_part = from_email.split('@')[0] if from_email else 'there'
    name_part = name_part.replace('.', ' ').replace('-', ' ').title()

    if lang == 'pt':
        body = f"""Olá {name_part},

Obrigado pela oportunidade de trabalharmos juntos em um projeto anterior. Foi ótimo construir essa parceria e ver resultados concretos.

Para esta próxima fase, gostaria de propor duas ideias rápidas e mutuamente benéficas:
1. Uma parceria de indicação cruzada para expandir a base de clientes sem custos extras.
2. Um piloto de automação compartilhada para reduzir a carga operacional das duas equipes.

Se fizer sentido, vamos conversar por 15 minutos: https://calendly.com/kleber-ziontechgroup

Temos serviços/ferramentas gratuitos em https://ziontechgroup.com que podem acelerar os seus resultados.

Atenciosamente,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950"""
    elif lang == 'es':
        body = f"""Hola {name_part},

Gracias por la oportunidad de trabajar juntos en un proyecto anterior. Fue genial construir esa alianza y ver resultados tangibles.

Para esta próxima fase, me gustaría proponer dos ideas rápidas y mutuamente beneficiosas:
1. Una asociación de referidos cruzados para ampliar las carteras de clientes sin costo adicional.
2. Un piloto automatizado compartido para reducir la carga operativa de ambos equipos.

Si lo ves viable, conectémonos 15 minutos: https://calendly.com/kleber-ziontechgroup

Tenemos servicios/herramientas gratuitos en https://ziontechgroup.com que pueden acelerar tus resultados.

Saludos,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950"""
    else:
        body = f"""Hi {name_part},

Thank you for the opportunity to work together on a past project. It was great building that partnership and seeing tangible results.

For this next phase, I'd like to propose two quick, mutually beneficial ideas:
1. A cross-referral partnership to grow both client bases without extra cost.
2. A shared automation pilot to cut operational load for both teams.

If this makes sense, let's sync for 15 minutes: https://calendly.com/kleber-ziontechgroup

We also have free services/tools at https://ziontechgroup.com that can speed up your results.

Best,
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
print(f"[INFO] Draft file updated with {summary['drafts_created']} new lead(s)")

# Append ledger entries
ts = int(datetime.datetime.now(datetime.timezone.utc).timestamp())
with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
    for lead in new_leads:
        entry = {
            'to': lead['to'],
            'subject': lead['subject'],
            'thread_id': lead['thread_id'],
            'message_id': lead['message_id'],
            'avoid_duplicate': True,
            'dedup_key': 'cron-hot-followup',
            'status': 'drafted',
            'ts': ts,
            'source': 'cron_hot_followup'
        }
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')
print(f"[INFO] Appended {summary['drafts_created']} ledger entry/entries")

print("\n=== SUMMARY ===")
print(json.dumps(summary, ensure_ascii=False))
