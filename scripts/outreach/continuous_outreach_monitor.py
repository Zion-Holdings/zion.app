#!/usr/bin/env python3
"""
Continuous High-Frequency Gmail Outreach Monitor
=================================================
Runs continuously, scanning ALL Gmail folders every 5 minutes for:
- Hot follow-up threads (!!!hot-follow-up label)
- New partnership/collaboration interest emails
- LLM-powered tailored CEO replies

Usage:
    python3 continuous_outreach_monitor.py
    
This script runs forever until interrupted (Ctrl+C).
"""

import json
import os
import sys
import time
import re
import base64
import signal
import urllib.request
from pathlib import Path
from datetime import datetime, timezone
from typing import List, Dict, Optional, Any

# Project paths
REPO = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / "scripts" / "outreach"))

from commands.google_workspace import gog_headers, gmail_search, gmail_get, gmail_thread_get

# Configuration
HOT_FOLLOWUP_LABEL = "Label_4207916705207178948"  # !!!!HOT FOLLOW-UP
SENT_LABEL = "Label_947"  # !!!hot-followup-sent
HOT_LABEL = "Label_946"   # !!!hot-follow-up

LEDGER_FILE = REPO / "outreach_monitor" / "processed" / "hot_followup_reply_ledger.jsonl"
PENDING_QUEUE_FILE = REPO / "outreach_monitor" / "processed" / "pending_ceo_drafts.jsonl"
INTEREST_QUEUE_FILE = REPO / "lead-crm" / "outreach_monitor" / "processed" / "interest_draft_queue.jsonl"
METRICS_FILE = REPO / "outreach_monitor" / "metrics" / "continuous_monitor_metrics.jsonl"

# Ensure directories exist
LEDGER_FILE.parent.mkdir(parents=True, exist_ok=True)
INTEREST_QUEUE_FILE.parent.mkdir(parents=True, exist_ok=True)
METRICS_FILE.parent.mkdir(parents=True, exist_ok=True)

# LLM Configuration - Use Nous inference API via auth.json
auth_path = Path.home() / '.hermes' / 'auth.json'
LLM_API_KEY = None
LLM_API_ENDPOINT = None
LLM_MODEL = 'stepfun/step-3.7-flash:free'

try:
    if auth_path.exists():
        cfg = json.loads(auth_path.read_text(encoding='utf-8')) or {}
        provider = (cfg.get('providers') or {}).get('nous') or {}
        LLM_API_KEY = provider.get('access_token') or ''
        LLM_API_ENDPOINT = (provider.get('inference_base_url') or 'https://inference-api.nousresearch.com/v1').rstrip('/')
except Exception:
    pass

# Interest query for partnership/collaboration emails
INTEREST_QUERY = (
    '!category:promotions !in:spam !in:trash '
    'newer_than:7d '
    '("partnership" OR "collaboration" OR "proposal" OR "opportunity" OR "work together" '
    'OR "supplier" OR "vendor" OR "partnership" OR "alliance" OR "joint venture" '
    'OR "strategic" OR "resell" OR "white label" OR "co-sell" '
    'OR "referral" OR "channel partner" OR "technology partner") '
    '-\"support reminder\" -\"rate the support\" -\"support survey\" -\"zendesk\" '
    '-\"newsletter\" -\"marketing\" -\"unsubscribe\" -\"promotional\"'
)

# Suppressed thread IDs (recently replied to)
SUPPRESSED_THREAD_IDS = {
    '18729d9ac733fec6', '17ae8d06ff494766', '17ae8bef12ef37bc',
    '17ace3cb5ba33436', '17acc1a44f61dffd', '17ac9d589f758ba2',
    '17ac8d7ea8b6d03d', '17ac3fea5d58bf65', '17ac3fb13c1eb360',
    '17ac3a9ef17a4130', '17ac3a6b65985dda', '17ac39bb1144ccdc',
    '1795733950be3f61', '19f3e95653f3845c'
}

# Running flag for graceful shutdown
running = True

def signal_handler(signum, frame):
    """Handle shutdown signals gracefully."""
    global running
    print(f"\n[INFO] Received signal {signum}, shutting down gracefully...")
    running = False

def append_metric(entry: dict):
    """Append entry to metrics file."""
    entry.setdefault('ts', int(time.time()))
    entry.setdefault('iso_ts', datetime.now(timezone.utc).isoformat())
    METRICS_FILE.parent.mkdir(parents=True, exist_ok=True)
    with METRICS_FILE.open('a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

def load_ledger() -> Dict[str, Dict]:
    """Load sent replies ledger for deduplication."""
    if not LEDGER_FILE.exists():
        return {}
    ledger = {}
    with LEDGER_FILE.open('r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                entry = json.loads(line)
                key = entry.get('thread_id') or entry.get('dedup_key')
                if key:
                    ledger[key] = entry
            except json.JSONDecodeError:
                pass
    return ledger

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

def detect_language(text: str) -> str:
    """Detect language from email text."""
    text_lower = text.lower()
    pt_indicators = ['obrigado', 'oportunidade', 'projeto', 'serviços', 'ferramentas', 'conversa', 'abraço', 'trabalhamos', 'olá']
    es_indicators = ['gracias', 'oportunidad', 'proyecto', 'servicios', 'herramientas', 'llamada', 'saludos']
    en_indicators = ['thank you', 'opportunity', 'project', 'services', 'tools', 'conversation', 'regards', 'worked']
    
    pt_score = sum(1 for w in pt_indicators if w in text_lower)
    es_score = sum(1 for w in es_indicators if w in text_lower)
    en_score = sum(1 for w in en_indicators if w in text_lower)
    
    if pt_score >= es_score and pt_score >= en_score:
        return "pt"
    elif es_score >= en_score:
        return "es"
    return "en"

def build_draft(name: str, lang: str, company: str, subject: str = "Following up on our last project") -> str:
    """Build a CEO follow-up draft in the appropriate language."""
    if lang == "es":
        return (
            f"{name},\n\n"
            "Gracias por la oportunidad de haber trabajado juntos en el proyecto anterior. Veo buenas oportunidades para crear valor mútuo ahora.\n\n"
            f"Puedes ver nossos novos servicios de IA aquí: https://ziontechgroup.com\n"
            "También ofrecemos herramientas y servicios gratuitos en el sitio.\n\n"
            "Si cuadra, conversemos: https://calendly.com/kleber-ziontechgroup o también por Google Meet: https://meet.google.com/ouu-khao-kuy\n\n"
            "Saludos cordiales,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
        )
    if lang == "pt":
        return (
            f"{name},\n\n"
            "Obrigado pela oportunidade de trabalharmos juntos no projeto anterior. Vejo boas oportunidades para criarmos valor mútuo agora.\n\n"
            f"Você pode ver nossos novos serviços de IA aqui: https://ziontechgroup.com\n"
            "Também temos ferramentas e serviços gratuitos no site.\n\n"
            "Se fizer sentido, vamos conversar: https://calendly.com/kleber-ziontechgroup ou também por Google Meet: https://meet.google.com/ouu-khao-kuy\n\n"
            "Um abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
        )
    return (
        f"{name},\n\n"
        "Thank you for the opportunity to work together on the previous project. I see strong potential for new mutually valuable work between our teams.\n\n"
        "You can explore our new AI services here: https://ziontechgroup.com\n"
        "We also offer free services and tools on the site.\n\n"
        "If it makes sense, let's talk: https://calendly.com/kleber-ziontechgroup or via Google Meet: https://meet.google.com/ouu-khao-kuy\n\n"
        "Best,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
    )

def call_llm(prompt: str, system_prompt: str = None, temperature: float = 0.3, max_tokens: int = 800) -> Optional[str]:
    """Call LLM API for tailored response generation using Nous inference API."""
    if not LLM_API_KEY or not LLM_API_ENDPOINT:
        return None
    
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
    
    url = LLM_API_ENDPOINT + "/chat/completions"
    req = urllib.request.Request(url, data=json.dumps(body).encode(), headers=headers, method="POST")
    
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        data = json.loads(resp.read())
        msg = (data.get("choices") or [{}])[0].get("message") or {}
        text = msg.get("content") or msg.get("reasoning") or ""
        if not text:
            return None
        text = text.strip()
        if len(text) > 900:
            text = text[:900].rstrip()
        return text
    except Exception as e:
        print(f"[LLM Error] {e}")
        return None

def search_all_folders(query: str, limit: int = 20) -> List[Dict]:
    """Search ALL Gmail folders for a query."""
    hits = []
    seen_ids = set()
    seen_threads = set()
    
    for q in [query, f"{query} in:anywhere"]:
        try:
            msgs = gmail_search(q, limit=limit)
            for m in msgs:
                if not isinstance(m, dict):
                    continue
                mid = m.get('id')
                tid = m.get('threadId')
                if not mid or mid in seen_ids:
                    continue
                if tid and tid in seen_threads:
                    continue
                seen_ids.add(mid)
                if tid:
                    seen_threads.add(tid)
                
                try:
                    full = gmail_get(mid)
                    if full:
                        hits.append(full)
                except Exception:
                    pass
        except Exception as e:
            print(f"[Search Error] {e}")
    
    return hits

def decode_body(msg: Dict) -> str:
    """Decode email body from Gmail message."""
    pl = msg.get('payload', {})
    if pl.get('body', {}).get('data'):
        return base64.urlsafe_b64decode(pl['body']['data']).decode('utf-8', errors='ignore')
    for part in pl.get('parts', []) or []:
        if part.get('mimeType') == 'text/plain' and part.get('body', {}).get('data'):
            return base64.urlsafe_b64decode(part['body']['data']).decode('utf-8', errors='ignore')
    return ''

def is_noise_sender(contact: str, from_addr: str = '', subject: str = '', snippet: str = '') -> bool:
    """Check if sender is noise (newsletter, support, etc.)."""
    contact = (contact or '').lower()
    from_addr = (from_addr or '').lower()
    subject = (subject or '').lower()
    snippet = (snippet or '').lower()
    
    if contact.endswith('@ziontechgroup.com'):
        return True
    
    tokens = [
        'github.com', 'fyxer.com', 'airbnb.com', 'uber.com', 'tiktok.com', 'dpsmrn.org', 'surfline.com',
        'calendly.com', 'zendesk.com', 'freshdesk.com', 'helpscout.com', 'intercom.io', 'bigcontent.io',
        'walletconnect.com', 'artlist.com', 'noreply', 'notifications@', 'dependabot', 'newsletter',
        'marketing@', 'hello@', 'teamcalendly', 'no-reply@', 'postmaster@', 'noresponder', 'mailer@', 'promo@',
    ]
    
    if any(x in from_addr for x in tokens) or any(x in contact for x in tokens):
        return True
    if any(subject.startswith(p) for p in ('[', 're: ', 'undeliverable', 'bounce', 'your ', 'new acquisition', 'application')):
        return True
    if any(k in subject for k in ['event', 'tickets', 'saver', 'pass', 'fest', 'promo', 'promotion', 'acquisition', 'brew']):
        return True
    if any(k in snippet for k in ['unsubscribe', 'click here', 'claim your', 'buy now', 'limited time']):
        return True
    
    domain = contact.split('@')[-1] if '@' in contact else ''
    if any(domain.endswith(x) for x in ('.email', '.local', '.io', '.news', '.promo', '.mail', '.bounce')) and not any(k in subject for k in ['project', 'proposal', 'opportunity']):
        return True
    
    return False

def recent_sent_exists(contact: str, within_seconds: int = 24*3600) -> bool:
    """Check if we recently sent to this contact."""
    ledger = []
    try:
        if LEDGER_FILE.exists():
            with LEDGER_FILE.open('r', encoding='utf-8') as f:
                for line in f:
                    if line.strip():
                        try:
                            ledger.append(json.loads(line))
                        except:
                            pass
    except:
        pass
    
    now = int(time.time())
    return any(
        (now - int(r.get('ts', 0))) < within_seconds
        and (r.get('to') or '').lower() == contact.lower()
        for r in ledger[-50:]
    )

def main():
    """Main monitoring loop."""
    global running
    
    # Set up signal handlers
    signal.signal(signal.SIGTERM, signal_handler)
    signal.signal(signal.SIGINT, signal_handler)
    
    print("=" * 60)
    print("🚀 Continuous High-Frequency Gmail Outreach Monitor")
    print("=" * 60)
    print(f"Started at: {datetime.now(timezone.utc).isoformat()}")
    print(f"LLM API Key: {'✅ Configured' if LLM_API_KEY else '❌ Not configured'}")
    print(f"LLM Model: {LLM_MODEL}")
    print("=" * 60)
    
    # Track metrics
    total_runs = 0
    total_drafts = 0
    total_errors = 0
    
    while running:
        run_start = time.time()
        total_runs += 1
        
        print(f"\n[RUN #{total_runs}] {datetime.now(timezone.utc).isoformat()}")
        print("-" * 40)
        
        try:
            # Test authentication
            gog_headers()
        except Exception as e:
            print(f"[AUTH ERROR] {e}")
            total_errors += 1
            append_metric({'event': 'auth_error', 'error': str(e), 'ts': int(time.time())})
            time.sleep(300)
            continue
        
        # Load ledger for deduplication
        ledger = load_ledger()
        
        # Check hot follow-up labels
        hot_drafts = []
        
        # Check !!!!HOT FOLLOW-UP label
        try:
            hits = gmail_search(f'label:"!!!!HOT FOLLOW-UP"', limit=20)
            print(f"  Found {len(hits)} messages with label '!!!!HOT FOLLOW-UP'")
            
            for h in hits:
                if not isinstance(h, dict):
                    continue
                
                mid = h.get('id')
                tid = h.get('threadId')
                if not mid:
                    continue
                if tid in SUPPRESSED_THREAD_IDS:
                    continue
                if tid in ledger:
                    continue
                
                try:
                    full = gmail_get(mid)
                    if not full:
                        continue
                    
                    headers = {h2['name']: h2['value'] for h2 in full.get('payload', {}).get('headers', [])}
                    from_addr = headers.get('From', '')
                    subject = headers.get('Subject', '')
                    
                    contact = extract_email_addr(from_addr)
                    if not contact or '@' not in contact:
                        continue
                    if is_noise_sender(contact, from_addr, subject, full.get('snippet', '')):
                        continue
                    
                    text = decode_body(full)
                    lang = detect_language(text or subject)
                    name = extract_name(from_addr)
                    company = contact.split('@')[1].split('.')[0].title() if '@' in contact else 'Partner'
                    
                    # Try LLM tailoring first
                    draft_text = None
                    if LLM_API_KEY:
                        system_prompt = (
                            "You are the CEO of Zion Tech Group (Kleber Garcia Alcatrão). "
                            f"Write one complete email body only. Language: {lang}. "
                            "Tone: friendly, direct, professional. "
                            "Requirements: thank them for the past project; propose 2 concrete mutually beneficial next ideas; "
                            "include https://ziontechgroup.com and mention free tools/services; include https://calendly.com/kleber-ziontechgroup; "
                            "do not invent unsupported claims."
                        )
                        user_prompt = (
                            f"Subject: {subject}\nClient: {name} <{contact}>\nContext: {(text or subject)[:300]}\n\nEmail body:"
                        )
                        draft_text = call_llm(user_prompt, system_prompt)
                    
                    # Fallback to template
                    if not draft_text:
                        draft_text = build_draft(name, lang, company, subject)
                    
                    dedup_key = re.sub(r'[^a-z0-9]', '', contact)
                    
                    draft = {
                        'thread_id': tid,
                        'message_id': mid,
                        'to': contact,
                        'from': from_addr,
                        'contact_name': name,
                        'company': company,
                        'subject': subject,
                        'lang': lang,
                        'body': draft_text,
                        'dedup_key': dedup_key,
                        'created_at': datetime.now(timezone.utc).isoformat(),
                        'status': 'ready_to_send',
                    }
                    
                    hot_drafts.append(draft)
                    total_drafts += 1
                    
                except Exception as e:
                    print(f"    [Error processing {mid}] {e}")
                    
        except Exception as e:
            print(f"  [Error checking label] {e}")
        
        # Save hot follow-up drafts
        if hot_drafts:
            existing = []
            if PENDING_QUEUE_FILE.exists():
                try:
                    existing = [json.loads(line) for line in PENDING_QUEUE_FILE.read_text(encoding='utf-8', errors='ignore').splitlines() if line.strip()]
                except:
                    pass
            
            combined = existing + hot_drafts
            seen_keys = set()
            unique_drafts = []
            for item in combined:
                k = item.get('dedup_key') or item.get('to') or item.get('from')
                if not k or k in seen_keys:
                    continue
                seen_keys.add(k)
                unique_drafts.append(item)
            
            PENDING_QUEUE_FILE.write_text('\n'.join(json.dumps(x, ensure_ascii=False) for x in unique_drafts), encoding='utf-8')
            print(f"  Saved {len(hot_drafts)} new hot follow-up drafts")
        
        # Check inbox for new interest
        interest_drafts = []
        try:
            inbox_hits = search_all_folders(INTEREST_QUERY, limit=20)
            print(f"  Found {len(inbox_hits)} new interest emails in inbox")
            
            for hit in inbox_hits:
                if not isinstance(hit, dict):
                    continue
                
                from_addr = ''
                for h in hit.get('payload', {}).get('headers', []):
                    if h['name'] == 'From':
                        from_addr = h['value']
                        break
                
                subject = next((h['value'] for h in hit.get('payload', {}).get('headers', []) if h['name'] == 'Subject'), '')
                contact = extract_email_addr(from_addr)
                
                if not contact or '@' not in contact:
                    continue
                if contact.endswith('@ziontechgroup.com'):
                    continue
                if is_noise_sender(contact, from_addr, subject, hit.get('snippet', '')):
                    continue
                
                tid = hit.get('threadId') or hit.get('id')
                if tid in ledger:
                    continue
                if recent_sent_exists(contact, within_seconds=24*3600):
                    continue
                
                text = decode_body(hit)
                lang = detect_language(text or subject)
                name = extract_name(from_addr)
                company = contact.split('@')[1].split('.')[0].title() if '@' in contact else 'Partner'
                
                draft_text = None
                if LLM_API_KEY:
                    system_prompt = (
                        "You are the CEO of Zion Tech Group (Kleber Garcia Alcatrão). "
                        f"Write one complete email body only. Language: {lang}. "
                        "Tone: friendly, direct, professional. "
                        "Requirements: thank them for the past project; propose 2 concrete mutually beneficial next ideas; "
                        "include https://ziontechgroup.com and mention free tools/services; include https://calendly.com/kleber-ziontechgroup; "
                        "do not invent unsupported claims."
                    )
                    user_prompt = (
                        f"Subject: {subject}\nClient: {name} <{contact}>\nContext: {(text or subject)[:300]}\n\nEmail body:"
                    )
                    draft_text = call_llm(user_prompt, system_prompt)
                
                if not draft_text:
                    draft_text = build_draft(name, lang, company, subject)
                
                dedup_key = re.sub(r'[^a-z0-9]', '', contact)
                
                draft = {
                    'thread_id': tid,
                    'message_id': hit.get('id'),
                    'to': contact,
                    'from': from_addr,
                    'contact_name': name,
                    'company': company,
                    'subject': subject,
                    'lang': lang,
                    'body': draft_text,
                    'dedup_key': dedup_key,
                    'created_at': datetime.now(timezone.utc).isoformat(),
                    'status': 'ready_to_review',
                }
                
                interest_drafts.append(draft)
                total_drafts += 1
                
        except Exception as e:
            print(f"  [Error checking inbox] {e}")
        
        # Save interest drafts to queue
        if interest_drafts:
            existing = []
            if INTEREST_QUEUE_FILE.exists():
                try:
                    existing = [json.loads(line) for line in INTEREST_QUEUE_FILE.read_text(encoding='utf-8', errors='ignore').splitlines() if line.strip()]
                except:
                    pass
            
            combined = existing + interest_drafts
            seen_keys = set()
            unique_drafts = []
            for item in combined:
                k = item.get('dedup_key') or item.get('to') or item.get('from')
                if not k or k in seen_keys:
                    continue
                seen_keys.add(k)
                unique_drafts.append(item)
            
            INTEREST_QUEUE_FILE.write_text('\n'.join(json.dumps(x, ensure_ascii=False) for x in unique_drafts), encoding='utf-8')
            print(f"  Saved {len(interest_drafts)} new interest drafts to queue ({len(unique_drafts)} total)")
        
        # Append metrics
        append_metric({
            'event': 'run',
            'run_number': total_runs,
            'hot_drafts_generated': len(hot_drafts),
            'interest_drafts_generated': len(interest_drafts),
            'timestamp': datetime.now(timezone.utc).isoformat(),
            'llm_enabled': bool(LLM_API_KEY),
        })
        
        run_duration = time.time() - run_start
        sleep_time = max(0, 300 - run_duration)  # Target 5 minutes
        
        print(f"  Run completed in {run_duration:.1f}s, sleeping for {sleep_time:.0f}s")
        
        # Sleep until next run (but check running flag every second)
        sleep_end = time.time() + sleep_time
        while running and time.time() < sleep_end:
            time.sleep(1)
    
    print("\n" + "=" * 60)
    print("🛑 SHUTDOWN COMPLETE")
    print("=" * 60)
    print(f"Total runs: {total_runs}")
    print(f"Total drafts generated: {total_drafts}")
    print(f"Total errors: {total_errors}")
    print(f"Shutdown at: {datetime.now(timezone.utc).isoformat()}")

if __name__ == '__main__':
    main()