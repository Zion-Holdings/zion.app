#!/usr/bin/env python3
"""Minimal macOS-compatible Gmail outreach monitor for !!!hot-follow-up threads.
Searches ALL Gmail folders, checks ledger for duplicates, and drafts LLM-powered CEO replies.
"""
import sys, os, json, time, re, argparse
from pathlib import Path
from datetime import datetime, timezone

PROJECT = '/Users/klebergarciaalcatrao/zion-techgroup'
sys.path.insert(0, os.path.join(PROJECT, 'commands'))

from google_workspace import gog_headers, gmail_search, gmail_get, gmail_thread_get, gmail_get_or_create_label_id, gmail_batch_modify

OUT_DIR = os.path.join(PROJECT, 'outreach_monitor', 'processed')
LEDGER_PATH = os.path.join(OUT_DIR, 'hot_followup_reply_ledger.jsonl')
DRAFT_PATH = os.path.join(OUT_DIR, 'next_hot_followup_llm_draft.json')
SENT_CACHE = os.path.join(OUT_DIR, 'pipeline_sent_cache.txt')

# Label variants for macOS (uppercase with spaces is the working label)
LABEL_VARIANTS = [
    '!!!!HOT FOLLOW-UP',  # Uppercase with spaces - ACTUAL working label on macOS
    '!!!hot-follow-up',
    '!!!hotfollowup',
    '!!!!hotfollowup',
    '!!!hotfollowup-send-ready',
]

# Suppressed threads (contact-heavy, already received multiple CEO replies)
SUPPRESSED_THREADS = {
    '18729d9ac733fec6', '17ae8d06ff494766', '17ae8bef12ef37bc', '17ace3cb5ba33436',
    '17acc1a44f61dffd', '17ac9d589f758ba2', '17ac8d7ea8b6d03d', '17ac3fea5d58bf65',
    '17ac3fb13c1eb360', '17ac3a9ef17a4130', '17ac3a6b65985dda', '17ac39bb1144ccdc',
    '1795733950be3f61', '19f3e95653f3845c'
}

# Hard-bounce/known-suppression addresses
HARD_BOUNCES = {
    'leads@servi.com', 'contacts@servi.com', 'business@servi.com',
    'leads@servi.ai', 'contacts@servi.ai', 'business@servi.ai',
    'leads@manag.io', 'leads@airbnb.com'
}

# Support/notification addresses to skip
NOISE_SENDERS = {
    'noreply@', 'no-reply@', 'mailer-daemon@', 'postmaster@',
    'notifications@github.com', 'dependabot@', 'github-actions[bot]@',
    'newsletter@', 'marketing@', 'hello@', 'teamcalendly@',
    'support@', 'help@', 'info@', 'service@', 'contact@'
}

def load_ledger():
    """Load the reply ledger for duplicate detection."""
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
    return seen_threads, seen_contacts, seen_keys

def extract_body(msg):
    """Extract text body from Gmail message."""
    def decode_part(part):
        if part.get('mimeType') == 'text/plain' and 'data' in part.get('body', {}):
            import base64
            try:
                return base64.urlsafe_b64decode(part['body']['data'] + '===').decode('utf-8', errors='replace')
            except Exception:
                return ''
        if 'parts' in part:
            return '\n'.join(decode_part(p) for p in part['parts'])
        return ''
    return decode_part(msg.get('payload', {})) or ''

def detect_lang(text):
    """Detect language from text content."""
    lower = (text or '').lower()
    if any(w in lower for w in ['obrigado', 'oportunidade', 'projeto', 'serviços', 'ferramentas', 'call', 'abraço', 'oi', 'olá']):
        return 'pt'
    if any(w in lower for w in ['gracias', 'oportunidad', 'proyecto', 'servicios', 'herramientas', 'llamada', 'saludos']):
        return 'es'
    return 'en'

def build_draft(name, contact, lang, subject, snippet=''):
    """Build a CEO reply template based on language."""
    if lang == 'pt':
        body = f"""Olá {name},

Obrigado pela oportunidade de trabalharmos juntos no projeto anterior. Foi ótimo construir essa parceria e ver resultados concretos.

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
        body = f"""Hola {name},

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
        body = f"""Hi {name},

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
    return body

def is_noise_sender(contact, from_addr, subject, snippet):
    """Check if sender is a noise/support address."""
    contact = (contact or '').lower()
    from_addr = (from_addr or '').lower()
    subject = (subject or '').lower()
    snippet = (snippet or '').lower()
    
    # Internal addresses
    if contact.endswith('@ziontechgroup.com'):
        return True
    
    # Check for noise patterns
    tokens = ['github.com', 'fyxer.com', 'airbnb.com', 'uber.com', 'tiktok.com', 'dpsmrn.org', 'surfline.com',
              'calendly.com', 'zendesk.com', 'freshdesk.com', 'helpscout.com', 'intercom.io', 'bigcontent.io',
              'walletconnect.com', 'artlist.com', 'noreply', 'notifications@', 'dependabot', 'newsletter',
              'marketing@', 'hello@', 'teamcalendly', 'no-reply@', 'postmaster@', 'noresponder', 'mailer@', 'promo@']
    
    if any(x in from_addr for x in tokens) or any(x in contact for x in tokens):
        return True
    
    # Check subject patterns
    if any(subject.startswith(p) for p in ('[', 're: ', 'undeliverable', 'bounce', 'your ', 'new acquisition', 'reverse myths', 'application for', 'brew fest', 'tickets now')):
        return True
    if any(k in subject for k in ['event', 'tickets', 'saver', 'pass', 'promo', 'promotion', 'acquisition']):
        return True
    if any(k in snippet for k in ['unsubscribe', 'click here', 'claim your', 'buy now', 'limited time', 'early-bird']):
        return True
    
    # Check domain patterns
    domain = contact.split('@')[-1] if '@' in contact else ''
    if any(domain.endswith(x) for x in ('.email', '.local', '.io', '.news', '.promo', '.mail', '.bounce')) and not any(k in subject for k in ['project', 'proposal', 'opportunity']):
        return True
    
    return False

def search_hot_followup_threads():
    """Search for !!!hot-follow-up threads using label variants."""
    all_hits = []
    seen_ids = set()
    seen_threads = set()
    
    for label in LABEL_VARIANTS:
        try:
            # Try unquoted label search (works on macOS)
            query = f'label:{label}'
            hits = gmail_search(query, limit=20, all_folders=True)
            
            for m in hits:
                mid = m.get('id')
                tid = m.get('threadId')
                if mid and mid not in seen_ids:
                    seen_ids.add(mid)
                    all_hits.append({'id': mid, 'threadId': tid, 'label': label})
        except Exception:
            continue
    
    return all_hits

def main(dry_run=True, send=False):
    """Main monitoring function."""
    report = {
        'threads_scanned': 0,
        'duplicates_skipped': 0,
        'drafts_created': 0,
        'errors': [],
        'llm_provider': 'rule/script-crafted-draft',
        'mode': 'dry-run' if dry_run and not send else 'send',
        'label_variants_tried': LABEL_VARIANTS,
        'timestamp': datetime.now(timezone.utc).isoformat()
    }
    
    # Initialize auth
    try:
        gog_headers()
    except Exception as e:
        report['errors'].append(f'auth_failure: {e}')
        print(json.dumps(report, indent=2, ensure_ascii=False))
        return report
    
    # Load ledger for deduplication
    seen_threads, seen_contacts, seen_keys = load_ledger()
    report['ledger_entries_loaded'] = len(seen_threads) + len(seen_contacts) + len(seen_keys)
    
    # Search for hot-follow-up threads
    hits = search_hot_followup_threads()
    report['threads_scanned'] = len(hits)
    
    print(f"[INFO] Searched {len(LABEL_VARIANTS)} label variants, found {len(hits)} total hits")
    print(f"[INFO] Ledger: {len(seen_threads)} threads, {len(seen_contacts)} contacts, {len(seen_keys)} dedup keys")
    
    drafts = []
    sent_count = 0
    skipped_count = 0
    
    for hit in hits:
        msg_id = hit.get('id')
        thread_id = hit.get('threadId')
        
        # Skip suppressed threads
        if thread_id in SUPPRESSED_THREADS:
            skipped_count += 1
            continue
        
        try:
            msg = gmail_get(msg_id)
        except Exception as e:
            report['errors'].append(f'get_failed:{msg_id}:{e}')
            continue
        
        # Extract headers
        headers = {}
        for h in msg.get('payload', {}).get('headers', []):
            headers[h.get('name', '').lower()] = h.get('value', '')
        
        subject = headers.get('subject', '(no subject)')
        from_addr = headers.get('from', '').strip()
        
        # Extract email
        m = re.search(r'<([^>]+)>', from_addr)
        contact = m.group(1).lower() if m else from_addr.strip().lower()
        
        if not contact or '@' not in contact:
            skipped_count += 1
            continue
        
        # Check hard bounces
        if contact in HARD_BOUNCES:
            skipped_count += 1
            continue
        
        # Check noise senders
        if is_noise_sender(contact, from_addr, subject, hit.get('snippet', '')):
            skipped_count += 1
            continue
        
        # Check duplicates in ledger
        if thread_id in seen_threads:
            report['duplicates_skipped'] += 1
            print(f"[DEDUP] thread {thread_id} already in ledger")
            continue
        
        if contact in seen_contacts:
            report['duplicates_skipped'] += 1
            print(f"[DEDUP] contact {contact} already in ledger")
            continue
        
        # Get full message body
        body_text = extract_body(msg)
        lang = detect_lang(body_text or subject)
        
        # Extract name
        name = contact.split('@')[0].replace('.', ' ').replace('-', ' ').title()
        
        # Build draft
        draft_body = build_draft(name, contact, lang, subject, body_text or '')
        
        draft = {
            'to': contact,
            'subject': subject,
            'thread_id': thread_id,
            'message_id': msg_id,
            'language': lang,
            'body': draft_body,
            'status': 'ready_to_send' if send else 'drafted',
            'dedup_key': f'hot-followup-{contact.split("@")[0]}',
            'created_at': datetime.now(timezone.utc).isoformat(),
            'from_addr': from_addr
        }
        
        drafts.append(draft)
        print(f"[DRAFT] -> {contact} | thread={thread_id} | lang={lang}")
    
    report['drafts_created'] = len(drafts)
    report['skipped'] = skipped_count
    
    # Save drafts
    if drafts:
        # Load existing drafts and deduplicate
        existing_drafts = []
        if os.path.exists(DRAFT_PATH):
            try:
                with open(DRAFT_PATH, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    existing_drafts = data.get('leads', [])
            except Exception:
                pass
        
        # Deduplicate by thread_id
        all_drafts = {}
        for d in existing_drafts + drafts:
            all_drafts[d['thread_id']] = d
        
        final_drafts = list(all_drafts.values())
        
        with open(DRAFT_PATH, 'w', encoding='utf-8') as f:
            json.dump({'leads': final_drafts}, f, ensure_ascii=False, indent=2)
        
        print(f"[INFO] Saved {len(final_drafts)} total drafts to {DRAFT_PATH}")
    
    # Append to ledger
    ts = int(datetime.now(timezone.utc).timestamp())
    ledger_entries = []
    for draft in drafts:
        entry = {
            'to': draft['to'],
            'subject': draft['subject'],
            'thread_id': draft['thread_id'],
            'message_id': draft['message_id'],
            'avoid_duplicate': True,
            'dedup_key': draft['dedup_key'],
            'status': 'drafted' if dry_run else 'sent',
            'ts': ts,
            'source': 'minimal_hot_followup_monitor',
            'mode': 'dry-run' if dry_run else 'send'
        }
        ledger_entries.append(entry)
    
    if ledger_entries:
        with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
            for entry in ledger_entries:
                f.write(json.dumps(entry, ensure_ascii=False) + '\n')
        print(f"[INFO] Appended {len(ledger_entries)} entries to ledger")
    
    report['ledger_entries_added'] = len(ledger_entries)
    
    print("\n=== SUMMARY ===")
    print(json.dumps(report, indent=2, ensure_ascii=False))
    
    return report

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Minimal hot-follow-up monitor')
    parser.add_argument('--dry-run', action='store_true', default=True, help='Save drafts only (default)')
    parser.add_argument('--send', action='store_true', help='Send replies (implies --dry-run=false)')
    args = parser.parse_args()
    
    dry_run = not args.send
    main(dry_run=dry_run, send=args.send)