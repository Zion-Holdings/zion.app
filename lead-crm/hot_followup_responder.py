#!/usr/bin/env python3
"""
Zion Hot Follow-Up Responder - DRY-RUN + SEND
Searches Gmail label: !!!hot-follow-up, drafts replies with LLM context,
sends threaded replies from CEO persona, tags sent threads.

Set DRY_RUN=true to only build drafts without sending.
"""
import sys, json, base64, datetime, time, os, re, hashlib
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_DIR = REPO / 'lead-crm'
SENT_CACHE = LEAD_DIR / 'pipeline_sent_cache.txt'
PIPELINE_LOG = LEAD_DIR / 'pipeline_log.json'
HOT_LABEL = '!!!hot-follow-up'
FOLLOWUP_SENT_LABEL = '!!!hot-followup-sent'
DRY_RUN = os.getenv('DRY_RUN', 'false').lower() in ('1', 'true', 'yes', 'y')

sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / 'commands'))

def _now_iso():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()

def _append_log(entry: dict):
    try:
        data = []
        if PIPELINE_LOG.exists():
            txt = PIPELINE_LOG.read_text(encoding='utf-8')
            if txt.strip():
                loaded = json.loads(txt)
                data = loaded if isinstance(loaded, list) else [loaded]
        data.append(entry)
        if len(data) > 3000:
            data = data[-3000:]
        PIPELINE_LOG.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    except Exception:
        pass


gmail_search = None
gmail_get = None
gmail_thread_get = None
gog_headers = None
gmail_list_labels = None
gmail_get_or_create_label_id = None
gmail_send_reply_fixed = None
gmail_batch_modify = None
_llm_chat = None

try:
    from commands.google_workspace import (
        gmail_search,
        gmail_get,
        gmail_thread_get,
        gog_headers,
        gmail_list_labels,
        gmail_get_or_create_label_id,
        gmail_send_reply_fixed,
        gmail_batch_modify,
    )
except Exception as e:
    _append_log({'ts': _now_iso(), 'event': 'import_failed', 'error': str(e)})

# Verify wrapper search behavior; prefer real wrapper because other responders
# in this repo return empty lists instead of searching all folders.
if callable(gmail_search):
    try:
        probe = gmail_search('in:anywhere', limit=1, all_folders=True)
        if not isinstance(probe, list) or len(probe) != 1:
            raise RuntimeError('probe search returned unusable result')
    except Exception as e:
        _append_log({'ts': _now_iso(), 'event': 'gmail_search_probe_failed', 'error': str(e)})
        gmail_search = None
        gmail_get = None
        gmail_thread_get = None
        gog_headers = None
        gmail_list_labels = None
        gmail_get_or_create_label_id = None
        gmail_send_reply_fixed = None
        gmail_batch_modify = None

try:
    from lib.llm_client import chat as _llm_chat
except Exception:
    _llm_chat = None


def _load_sent_keys():
    keys = set()
    try:
        if SENT_CACHE.exists():
            for line in SENT_CACHE.read_text(encoding='utf-8').splitlines():
                val = line.strip()
                if not val:
                    continue
                keys.add(val.split('|', 1)[0].lower())
    except Exception:
        pass
    return keys


def _save_sent_keys(keys):
    try:
        if len(keys) > 5000:
            keys = set(list(keys)[-5000:])
        SENT_CACHE.write_text('\n'.join(sorted(keys)), encoding='utf-8')
    except Exception:
        pass


def extract_body_from_gmail_message(msg):
    def part_text(part):
        if part.get('mimeType') == 'text/plain' and 'data' in part.get('body', {}):
            return base64.urlsafe_b64decode(part['body']['data'] + '===').decode('utf-8', errors='replace')
        if 'parts' in part:
            return '\n'.join(part_text(p) for p in part['parts'])
        return ''
    return part_text(msg.get('payload', {}))


def _call_llm(messages, temperature=0.35, max_tokens=520):
    if not _llm_chat:
        return {'content': '', 'provider': 'none', 'model': 'none'}
    try:
        res = _llm_chat(messages, provider='auto', temperature=temperature)
        if isinstance(res, dict):
            return {'content': (res.get('content') or '').strip(), 'provider': res.get('provider', 'llm'), 'model': res.get('model', '')}
    except Exception as e:
        return {'content': '', 'provider': 'error', 'model': '', 'error': str(e)}
    return {'content': '', 'provider': 'error', 'model': ''}


def generate_ceo_reply(from_email, subject, body, thread_context=None):
    domain = from_email.split('@', 1)[1].lower() if '@' in from_email else 'empresa'
    company = domain.split('.')[0]
    thread_info = ''
    if thread_context:
        latest_from = thread_context.get('latest_from', '')
        latest_body = (thread_context.get('latest_body') or '')[:1200]
        thread_info = f'Ultima mensagem do cliente ({latest_from}):\n{latest_body}\n'
    prompt = (
        'Voce e Kleber Garcia Alcatrao, CEO/Presidente da Zion Tech Group.\n'
        'Escreva uma resposta executiva em portugues, amigavel mas profissional.\n'
        'Objetivo: agradecer a oportunidade anterior, avancar negociacao e propor proximos passos mutuamente beneficos.\n\n'
        'Regras:\n'
        '- Comece agradecendo a oportunidade de trabalharmos juntos no projeto passado.\n'
        '- Continue de acordo com o contexto abaixo, sem ser generico.\n'
        '- Proponha 1-2 ideias concretas de novos negocios ou colaboracao.\n'
        '- Inclua CTA de agendamento: https://calendly.com/kleber-ziontechgroup\n'
        '- Mencione site e ferramentas/servicos gratuitos: https://ziontechgroup.com\n'
        '- Assine como Kleber Garcia Alcatrao, +1 302 464 0950\n'
        '- Maximo ~180 palavras, direto.\n'
        '- idioma: portugues.\n\n'
        f'{thread_info}'
        f'Assunto: {subject}\nCliente: {from_email} ({company})\nMensagem recebida: {body[:1600]}\n'
    )
    messages = [
        {'role': 'system', 'content': 'You write concise Portuguese business emails for a CEO.'},
        {'role': 'user', 'content': prompt},
    ]
    llm = _call_llm(messages, temperature=0.35, max_tokens=520)
    text = llm.get('content', '') or ''
    if not text:
        return '<p>Obrigado pela oportunidade anterior. Vamos criar valor mutuo com novas iniciativas em AI/IT, ferramentas gratuitas https://ziontechgroup.com e um alinhamento rapido https://calendly.com/kleber-ziontechgroup.</p><p>Kleber Garcia Alcatrao, CEO — +1 302 464 0950</p>', 'deterministic-template-v1'
    return text, llm.get('provider', 'llm')


def latest_thread_reply_body(thread_id: str) -> str:
    try:
        msgs = gmail_thread_get(thread_id)
        if not msgs:
            return ''
        latest = msgs[-1].get('id')
        if not latest:
            return ''
        full = gmail_get(latest)
        if not full:
            return ''
        hdrs = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        body = extract_body_from_gmail_message(full) or ''
        return f"latest_from={hdrs.get('From','')} latest_subject={hdrs.get('Subject','')} body={(body[:1200] or '').replace(chr(10), ' ')}"
    except Exception as e:
        return f'latest_thread_read_error={e}'


def mark_labeled(thread_id, label_id):
    try:
        msg_ids = []
        if thread_id:
            thread = gmail_thread_get(thread_id)
            msg_ids = [m.get('id') for m in thread if m.get('id')]
        if not msg_ids:
            return False
        return gmail_batch_modify({'ids': msg_ids}, addLabelIds=[label_id]) or False
    except Exception:
        return False


def main():
    if not all([gmail_search, gmail_get, gmail_thread_get, gmail_send_reply_fixed]):
        print(json.dumps({'error': 'gmail_unavailable', 'ts': _now_iso()}, ensure_ascii=False))
        return

    sent_keys = _load_sent_keys()
    processed = 0
    sent_count = 0
    skipped = 0
    errors = 0
    drafts = []

    hot_label_id = None
    sent_label_id = None
    try:
        hot_label_id = gmail_get_or_create_label_id(HOT_LABEL)
    except Exception:
        hot_label_id = None
    try:
        sent_label_id = gmail_get_or_create_label_id(FOLLOWUP_SENT_LABEL)
    except Exception:
        sent_label_id = None

    try:
        msgs = gmail_search(f'label:"{HOT_LABEL}"', limit=40, all_folders=True)
    except Exception as e:
        print(json.dumps({'error': f'search_failed:{e}', 'ts': _now_iso()}, ensure_ascii=False))
        return

    seen_threads = set()
    for m in msgs:
        msg_id = m.get('id')
        thread_id = m.get('threadId')
        if not msg_id or not thread_id or thread_id in seen_threads:
            skipped += 1
            continue
        seen_threads.add(thread_id)
        thread_key = f'thread:{thread_id}'
        if thread_key in sent_keys:
            skipped += 1
            continue

        try:
            full = gmail_get(msg_id)
            headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
            from_header = headers.get('From', '')
            subject = headers.get('Subject', '')
            to_header = headers.get('To', '')
            body = extract_body_from_gmail_message(full) or ''
            if not body.strip() or 'kleber@ziontechgroup.com' in to_header:
                skipped += 1
                continue

            thread_context = {'latest_body': latest_thread_reply_body(thread_id)}
            parts = dict(part.split('=', 1) for part in re.findall(r'\w+=\S+', thread_context['latest_body']) if '=' in str(thread_context.get('latest_body')))
            thread_context['latest_from'] = parts.get('latest_from', '')
            thread_context['latest_subject'] = parts.get('latest_subject', '')

            reply_body, provider = generate_ceo_reply(from_header, subject, body, thread_context)
            send_subject = 'Re: ' + subject if not subject.startswith('Re:') else subject

            if DRY_RUN:
                drafts.append({'thread_id': thread_id, 'to': from_header, 'subject': send_subject, 'reply': reply_body, 'llm_provider': provider})
                sent_keys.add(thread_key)
                sent_count += 1
                _append_log({'ts': _now_iso(), 'event': 'hot_followup_dry_run', 'thread_id': thread_id, 'to': from_header, 'llm_provider': provider})
                processed += 1
                time.sleep(0.2)
                continue

            result = gmail_send_reply_fixed(thread_id, subject, reply_body, from_header)
            mid = result.get('message_id') if isinstance(result, dict) else None
            sent_count += 1
            sent_keys.add(thread_key)
            if sent_label_id:
                try:
                    mark_labeled(thread_id, sent_label_id)
                except Exception:
                    pass
            _append_log({
                'ts': _now_iso(),
                'event': 'hot_followup_sent',
                'thread_id': thread_id,
                'message_id': mid,
                'to': from_header,
                'subject': send_subject,
                'llm_provider': provider,
            })
            processed += 1
            time.sleep(0.4)
        except Exception as e:
            errors += 1
            _append_log({'ts': _now_iso(), 'event': 'hot_followup_send_error', 'thread_id': thread_id, 'error': str(e)})
            skipped += 1

    _save_sent_keys(sent_keys)
    summary = {
        'ts': _now_iso(),
        'label': HOT_LABEL,
        'dry_run': DRY_RUN,
        'processed': processed,
        'sent': sent_count,
        'skipped': skipped,
        'errors': errors,
        'drafts_count': len(drafts),
        'drafts': drafts if DRY_RUN else None,
        'sent_keys_count': len(sent_keys),
    }
    _append_log({'event': 'hot_followup_tick', **summary})
    print(json.dumps(summary, ensure_ascii=False))


if __name__ == '__main__':
    main()
