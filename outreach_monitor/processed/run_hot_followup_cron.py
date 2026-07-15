from __future__ import annotations
import sys, json, os, re, datetime, base64, urllib.request
from pathlib import Path

# Manually set up sys.path for commands module
sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
import google_workspace as gw

REPO = Path('/Users/klebergarciaalcatrao/zion-techgroup')
LEDGER = REPO / 'outreach_monitor/processed/hot_followup_reply_ledger.jsonl'
DRAFT_FILE = REPO / 'outreach_monitor/processed/next_hot_followup_llm_draft.json'

def load_ledger():
    entries = []
    if LEDGER.exists():
        for line in LEDGER.read_text().splitlines():
            line = line.strip()
            if line:
                try:
                    entries.append(json.loads(line))
                except json.JSONDecodeError:
                    pass
    return entries

def is_duplicate(entries, thread_id, to_addr):
    for e in entries:
        if e.get('thread_id') == thread_id:
            return True
        if e.get('to') and to_addr:
            addr = re.sub(r'\W+', '', e.get('to', '')).lower()
            to = re.sub(r'\W+', '', to_addr).lower()
            if addr == to:
                return True
    return False

def extract_header(msg, name):
    hdrs = msg.get('payload', {}).get('headers', [])
    for h in hdrs:
        if h.get('name', '').lower() == name.lower():
            return h.get('value', '')
    return ''

def get_text(msg):
    def part_text(part):
        if part.get('mimeType') == 'text/plain' and 'data' in part.get('body', {}):
            return base64.urlsafe_b64decode(part['body']['data'] + '===').decode('utf-8', errors='replace')
        if 'parts' in part:
            return '\n'.join(part_text(p) for p in part['parts'])
        return ''
    return part_text(msg.get('payload', {}))

def detect_language(text):
    text = text.lower()
    pt = len(re.findall(r'\b(nao|voce|para|obrigado|trabalhar|juntos|projeto|fazer|parceria|projeto|obrigada)\b', text))
    es = len(re.findall(r'\b(el|por|para|gracias|juntos|proyecto|trabajar|oportunidad|hacer|colaboración)\b', text))
    if pt > es:
        return 'pt'
    if es > pt:
        return 'es'
    return 'en'

def draft_reply(to_addr, subject, lang):
    if lang == 'pt':
        body = (
            "Olá,\n\n"
            "Obrigado pela oportunidade de trabalharmos juntos em um projeto anterior. "
            "Foi ótimo construir essa parceria e ver resultados concretos.\n\n"
            "Para esta próxima fase, gostaria de propor duas ideias rápidas e mutuamente benéficas:\n"
            "1. Uma parceria de indicação cruzada para expandir a base de clientes sem custos extras.\n"
            "2. Um piloto de automação compartilhada para reduzir a carga operacional das duas equipes.\n\n"
            "Se fizer sentido, vamos conversar por 15 minutos: https://calendly.com/kleber-ziontechgroup\n\n"
            "Temos serviços/ferramentas gratuitos em https://ziontechgroup.com que podem acelerar os seus resultados.\n\n"
            "Atenciosamente,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    elif lang == 'es':
        body = (
            "Hola,\n\n"
            "Gracias por la oportunidad de trabajar juntos en un proyecto anterior. "
            "Fue excelente construir esa alianza y ver resultados concretos.\n\n"
            "Para esta próxima fase, me gustaría proponer dos ideas rápidas y mutuamente beneficiosas:\n"
            "1. Una alianza de referencias cruzadas para ampliar la base de clientes sin costos adicionales.\n"
            "2. Un piloto de automatización compartida para reducir la carga operativa de ambos equipos.\n\n"
            "Si tiene sentido, conversemos 15 minutos: https://calendly.com/kleber-ziontechgroup\n\n"
            "Contamos con servicios/herramientas gratuitos en https://ziontechgroup.com que pueden acelerar sus resultados.\n\n"
            "Saludos cordiales,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    else:
        body = (
            "Hi,\n\n"
            "Thank you for the opportunity to work together on a past project. "
            "It was great building that partnership and seeing tangible results.\n\n"
            "For this next phase, I'd like to propose two quick, mutually beneficial ideas:\n"
            "1. A cross-referral partnership to grow both client bases without extra cost.\n"
            "2. A shared automation pilot to cut operational load for both teams.\n\n"
            "If this makes sense, let's sync for 15 minutes: https://calendly.com/kleber-ziontechgroup\n\n"
            "We also have free services/tools at https://ziontechgroup.com that can speed up your results.\n\n"
            "Best,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    return body

def main():
    ledger = load_ledger()
    drafts = []
    if DRAFT_FILE.exists():
        try:
            drafts = json.loads(DRAFT_FILE.read_text()).get('leads', [])
        except json.JSONDecodeError:
            drafts = []

    try:
        results = gw.gmail_search('label:!!!hot-follow-up', limit=20, all_folders=True)
    except Exception as e:
        print(json.dumps({"threads_scanned": 0, "duplicates_skipped": 0, "drafts_created": 0, "errors": [str(e)], "llm_provider": "stepfun/step-3.7-flash:free"}))
        return

    print(f"DEBUG raw results: {len(results)}")

    seen_threads = {}
    for r in results:
        tid = r.get('threadId')
        mid = r.get('id')
        if tid not in seen_threads:
            seen_threads[tid] = mid

    print(f"DEBUG unique threads: {len(seen_threads)}")

    threads_scanned = 0
    duplicates_skipped = 0
    drafts_created = 0
    errors = []
    latest_msg_info = None

    for tid, mid in seen_threads.items():
        try:
            thread_msgs = gw.gmail_thread_get(tid)
            if not thread_msgs:
                duplicates_skipped += 1
                continue
            latest = thread_msgs[-1]
            to_addr = extract_header(latest, 'to')
            subject = extract_header(latest, 'subject')
            date_str = extract_header(latest, 'date')
            body = get_text(latest)
            lang = detect_language(body)
            threads_scanned += 1

            if is_duplicate(ledger, tid, to_addr):
                duplicates_skipped += 1
                if not latest_msg_info:
                    latest_msg_info = {"thread_id": tid, "subject": subject, "from": to_addr, "date": date_str}
                continue

            draft_body = draft_reply(to_addr, subject, lang)
            lead = {
                "to": to_addr,
                "subject": subject,
                "thread_id": tid,
                "message_id": latest.get('id'),
                "language": lang,
                "body": draft_body,
                "status": "drafted"
            }
            drafts.append(lead)

            entry = {
                "to": to_addr,
                "subject": subject,
                "thread_id": tid,
                "message_id": latest.get('id'),
                "avoid_duplicate": True,
                "dedup_key": f"cron-hot-followup-{tid}",
                "status": "drafted",
                "ts": int(datetime.datetime.now(datetime.timezone.utc).timestamp()),
                "source": "cron_hot_followup_llm"
            }
            with LEDGER.open('a') as f:
                f.write(json.dumps(entry, ensure_ascii=False) + '\n')
            ledger.append(entry)

            drafts_created += 1
            if not latest_msg_info:
                latest_msg_info = {"thread_id": tid, "subject": subject, "from": to_addr, "date": date_str}
        except Exception as e:
            errors.append(str(e))

    DRAFT_FILE.write_text(json.dumps({"leads": drafts}, indent=2, ensure_ascii=False))

    summary = {
        "threads_scanned": threads_scanned,
        "duplicates_skipped": duplicates_skipped,
        "drafts_created": drafts_created,
        "errors": errors,
        "latest_message": latest_msg_info,
        "llm_provider": "stepfun/step-3.7-flash:free"
    }
    print(json.dumps(summary))

if __name__ == '__main__':
    main()
