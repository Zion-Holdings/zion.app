#!/usr/bin/env python3
"""
LLM-Powered Hot Follow-Up Responder

This script:
1. Searches ALL Gmail folders for !!!hot-follow-up emails (high frequency)
2. Generates tailored responses using OpenRouter LLM (nvidia/nemotron-3-ultra-550b-a55b:free)
3. Falls back to professional templates when LLM unavailable
4. Tracks sent replies to avoid duplicates
5. Automatically renews Google tokens
6. Runs at high frequency (every 2 minutes) for maximum responsiveness
"""

import argparse
import json
import logging
import os
import sys
import urllib.request
import urllib.error
import urllib.parse
import base64
import re
from datetime import datetime, timezone, timedelta
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-7s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    stream=sys.stdout
)
logger = logging.getLogger('hot_followup_responder')

# Constants
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / 'data/outreach'
MONITOR_DIR = BASE_DIR / 'outreach_monitor/processed'
TOKEN_FILE = Path.home() / '.openclaw' / 'workspace' / 'gog_tokens.json'
LEDGER_FILE = MONITOR_DIR / 'hot_followup_reply_ledger.jsonl'
LOG_FILE = MONITOR_DIR / 'monitor_report.jsonl'

# Gmail API
GMAIL_API = 'https://gmail.googleapis.com/gmail/v1/users/me'

# Labels - check multiple variations
HOT_FOLLOWUP_LABELS = [
    '!!!hot-follow-up',
    '!!!!HOT FOLLOW-UP',
    '!!!hot-followup',
    '!!!!hotfollowup',
    '!!!hotfollowup-send-ready'
]

# Calendly and Website
CALENDLY = 'https://calendly.com/kleber-ziontechgroup'
WEBSITE = 'https://ziontechgroup.com'

# Free tools section for emails
FREE_TOOLS_INFO = '''
Our website also features many free AI-powered tools that teams use daily:
• AI Service Router - Instantly find the right AI service for your needs
• SSL Checker - Verify your SSL certificates and security
• Port Scanner - Network security assessment tool
• Service Comparison - Compare AI services and pricing
• Health Check - System monitoring and diagnostics
• Favicon Generator - Create favicons from text or images
• AI Code Reviewer - Get code quality feedback
'''

def load_tokens():
    """Load Gmail OAuth tokens from multiple possible locations."""
    candidates = [
        TOKEN_FILE,
        BASE_DIR / 'lead-crm' / 'gog_tokens.json',
        BASE_DIR / '.openclaw' / 'workspace' / 'gog_tokens.json'
    ]
    
    for candidate in candidates:
        if candidate.exists():
            try:
                with open(candidate, 'r') as f:
                    return json.load(f)
            except Exception:
                continue
    
    raise FileNotFoundError(f"Token file not found in any of: {candidates}")

def refresh_access_token(tokens):
    """Refresh Gmail access token if expired."""
    now_utc = datetime.now(timezone.utc)
    expiry_str = tokens.get('expiry', '')
    
    if expiry_str:
        try:
            exp = datetime.fromisoformat(expiry_str.replace('Z', '+00:00'))
            if exp.tzinfo is None:
                exp = exp.replace(tzinfo=timezone.utc)
            if exp > now_utc + timedelta(minutes=5):
                return tokens['access_token']
        except Exception:
            pass
    
    data = urllib.parse.urlencode({
        'client_id': tokens['client_id'],
        'client_secret': tokens['client_secret'],
        'refresh_token': tokens['refresh_token'],
        'grant_type': 'refresh_token',
    }).encode()
    
    req = urllib.request.Request(
        'https://oauth2.googleapis.com/token',
        data=data,
        headers={'Content-Type': 'application/x-www-form-urlencoded'},
        method='POST'
    )
    
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            payload = json.loads(resp.read())
        tokens['access_token'] = payload['access_token']
        exp_in = payload.get('expires_in', 3600)
        tokens['expiry'] = (now_utc + timedelta(seconds=exp_in)).isoformat()
        
        # Save tokens back
        for candidate in [TOKEN_FILE, BASE_DIR / 'lead-crm' / 'gog_tokens.json']:
            if candidate.exists():
                with open(candidate, 'w') as f:
                    json.dump(tokens, f, indent=2)
                break
        
        logger.info("Token refreshed successfully")
        return tokens['access_token']
    except Exception as e:
        logger.error(f"Token refresh failed: {e}")
        return None

def get_access_token():
    """Get valid Gmail access token."""
    tokens = load_tokens()
    access = tokens.get('access_token', '')
    if not access:
        raise RuntimeError("No access token in token file")
    
    new_access = refresh_access_token(tokens)
    return new_access if new_access else access

def gmail_request(path, method='GET', payload=None, access_token=None):
    """Make Gmail API request."""
    if access_token is None:
        access_token = get_access_token()
    
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
    data = None
    if payload:
        data = json.dumps(payload).encode('utf-8')
    
    req = urllib.request.Request(
        GMAIL_API + path,
        data=data,
        method=method,
        headers=headers
    )
    
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors='replace') if e.fp else ''
        raise RuntimeError(f'HTTP {e.code}: {body[:300]}') from e
    except Exception as e:
        raise RuntimeError(str(e)) from e

def gmail_list_labels():
    """Get all Gmail labels."""
    try:
        resp = gmail_request('/users/me/labels')
        return resp.get('labels', [])
    except Exception as e:
        logger.error(f"Failed to list labels: {e}")
        return []

def get_label_ids():
    """Get label IDs for hot follow-up labels."""
    labels = gmail_list_labels()
    name_to_id = {l.get('name', ''): l.get('id') for l in labels}
    
    ids = []
    for label_name in HOT_FOLLOWUP_LABELS:
        if label_name in name_to_id:
            ids.append(name_to_id[label_name])
    
    return ids

def decode_body(data):
    """Decode base64 encoded body."""
    if not data:
        return ''
    try:
        return base64.urlsafe_b64decode(data + '===').decode('utf-8', errors='replace')
    except Exception:
        return ''

def get_threads_by_labels(label_ids, max_results=50):
    """Get threads with hot follow-up labels."""
    all_threads = []
    seen_ids = set()
    
    for lid in label_ids:
        try:
            threads = gmail_request(f'/users/me/threads?labelIds={lid}&maxResults={max_results}')
            for t in threads.get('threads', []):
                tid = t.get('id')
                if tid and tid not in seen_ids:
                    seen_ids.add(tid)
                    all_threads.append({'id': tid})
        except Exception as e:
            logger.error(f"Failed to get threads for label {lid}: {e}")
    
    return all_threads

def get_thread_messages(thread_id):
    """Get all messages in a thread."""
    try:
        messages = gmail_request(f'/users/me/threads/{thread_id}?format=full')
        return messages.get('messages', [])
    except Exception as e:
        logger.error(f"Failed to get thread messages: {e}")
        return []

def detect_language(text):
    """Detect if text is in Portuguese, Spanish, or English."""
    lower = text.lower() if text else ''
    if any(w in lower for w in ['obrigado', 'oportunidade', 'projeto', 'serviços', 'ferramentas', 'abraço', 'oi', 'você', 'trabalhar', 'obrigada']):
        return 'pt'
    elif any(w in lower for w in ['gracias', 'oportunidad', 'proyecto', 'servicios', 'herramientas', 'llamada', 'saludos', 'hola', 'gracias']):
        return 'es'
    return 'en'

def generate_llm_reply(to, subject, body, thread_context=''):
    """Generate LLM-powered tailored reply using OpenRouter."""
    api_key = os.environ.get('OPENROUTER_API_KEY') or os.environ.get('LLM_API_KEY')
    
    if not api_key:
        logger.warning("No LLM API key configured")
        return None
    
    # Extract name from email
    name_match = re.search(r'["\']?([^<"@]+)["\']?\s*<', to)
    if name_match:
        name = name_match.group(1).strip()
    else:
        name = to.split('@')[0].replace('.', ' ').title()
    
    # Detect language
    lang = detect_language(body or subject)
    
    # Build prompt
    prompt = f"""You are Kleber Garcia Alcatrão, CEO of Zion Tech Group. Write a professional, friendly, and concise reply to a client who worked with us in the past.

Requirements:
1. Thank them for the opportunity to have worked together
2. Propose 3 concrete ideas for new mutually beneficial business
3. Offer to schedule a meeting via Calendly: {CALENDLY}
4. Mention our website: {WEBSITE} and free tools
5. Use the same language as the conversation
6. Be creative but professional
7. Avoid duplicate content

Client: {to}
Subject: {subject}
Previous conversation context (if any): {thread_context[:400] if thread_context else 'No prior conversation'}
Current email snippet: {body[:400] if body else 'N/A'}

Write the reply in the same language style as the snippet above. Be warm, professional, and creative. End with a call to action for a meeting or continued email discussion."""

    try:
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
        
        payload = {
            'model': 'nvidia/nemotron-3-ultra-550b-a55b:free',
            'messages': [{'role': 'user', 'content': prompt}],
            'max_tokens': 800,
            'temperature': 0.7,
            'top_p': 0.9
        }
        
        req = urllib.request.Request(
            'https://openrouter.ai/api/v1/chat/completions',
            data=json.dumps(payload).encode('utf-8'),
            method='POST',
            headers=headers
        )
        
        with urllib.request.urlopen(req, timeout=60) as resp:
            result = json.loads(resp.read())
            choices = result.get('choices', [])
            if choices:
                reply = choices[0].get('message', {}).get('content', '')
                return reply if reply else None
        return None
    except Exception as e:
        logger.error(f'LLM generation failed: {e}')
        return None

def generate_template_reply(name, to, lang='en'):
    """Generate template reply when LLM is unavailable."""
    if lang == 'pt':
        return f"""{name},

Muito obrigado pela oportunidade de trabalharmos juntos no projeto anterior. Foi uma experiência muito prazerosa!

Estou pensando em algumas ideias para criarmos valor mútuo agora, e gostaria de compartilhar algumas possibilidades:

**3 ideias para começar:**
• **Pilotagem conjunta de IA** - Um projeto piloto focado em economia de custos ou novas fontes de receita que ambos podemos monetizar
• **Avaliação de IA e segurança** - Uma análise conjunta de prontidão para IA com materiais que geram leads para ambas as partes
• **Modelo de parceria/referral** - Compartilhar oportunidades de negócios com upside compartilhado nos serviços em execução

Você pode explorar nossos novos serviços de IA aqui: {WEBSITE}
Nossa plataforma também oferece diversas ferramentas e serviços gratuitos que equipes usam no dia a dia.{FREE_TOOLS_INFO}

Se alguma dessas ideias interessar, estou disponível para continuar conversando por e-mail ou marcar uma breve chamada: {CALENDLY}

Um abraço,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
{WEBSITE}"""
    elif lang == 'es':
        return f"""{name},

Gracias por la oportunidad de haber trabajado juntos en el proyecto anterior. Fue una experiencia muy positiva.

Puedes explorar nuestros nuevos servicios de IA aquí: {WEBSITE}
También ofrecemos herramientas y servicios gratuitos en el sitio.{FREE_TOOLS_INFO}

Si te interesa, podemos continuar la conversación por correo electrónico o agendar una breve llamada: {CALENDLY}

Saludos cordiales,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
{WEBSITE}"""
    else:
        return f"""Hi {name},

Thank you for the opportunity to work together on the previous project — I really enjoyed it!

I've been thinking about some ideas that could create mutual value for both our companies:

**3 concrete ideas to get started:**
• **Joint AI pilot** - A focused pilot on cost savings or new revenue opportunities we can monetize together
• **AI readiness & security assessment** - A co-branded assessment that generates leads for both sides
• **Partner/referral model** - Shared upside on ongoing services and referrals

You can explore our new AI services here: {WEBSITE}
We also have many free AI-powered tools that teams use daily:{FREE_TOOLS_INFO}

If any of these sound useful, I'm happy to continue advancing by email, or I'm also available for a short call: {CALENDLY}

Best,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
{WEBSITE}"""

def load_ledger():
    """Load sent reply ledger to avoid duplicates."""
    if not LEDGER_FILE.exists():
        return set()
    
    dedup_keys = set()
    try:
        with open(LEDGER_FILE, 'r') as f:
            for line in f:
                if line.strip():
                    entry = json.loads(line)
                    key = entry.get('dedup_key', '') or entry.get('thread_id', '')
                    if key:
                        dedup_keys.add(key)
    except Exception:
        pass
    
    return dedup_keys

def save_to_ledger(thread_id, to, subject, message_id=None):
    """Save reply to ledger."""
    LEDGER_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    entry = {
        'to': to,
        'subject': subject,
        'message_id': message_id,
        'thread_id': thread_id,
        'dedup_key': f'hotfollowup-{thread_id}',
        'status': 'sent',
        'ts': int(datetime.now(timezone.utc).timestamp())
    }
    
    with open(LEDGER_FILE, 'a') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

def send_reply(to, subject, body, thread_id, access_token):
    """Send reply via Gmail API."""
    raw_email_lines = [
        f"To: {to}",
        f"Subject: {subject if subject.startswith('Re:') else f'Re: {subject}'}",
        "Content-Type: text/plain; charset=utf-8",
        "",
        body
    ]
    
    raw = "\r\n".join(raw_email_lines)
    raw_b64 = base64.urlsafe_b64encode(raw.encode('utf-8')).decode('utf-8')
    
    payload = {'raw': raw_b64, 'threadId': thread_id}
    
    try:
        result = gmail_request('/messages/send', method='POST', payload=payload, access_token=access_token)
        return result
    except Exception as e:
        logger.error(f'Failed to send reply: {e}')
        return None

def run_monitor(dry_run=True):
    """Run the hot follow-up responder."""
    run_ts = int(datetime.now(timezone.utc).timestamp())
    
    logger.info(f'Starting hot follow-up responder at {datetime.now()}')
    
    # Get access token
    try:
        access_token = get_access_token()
    except Exception as e:
        logger.error(f'Failed to get access token: {e}')
        return {'error': str(e)}
    
    # Get label IDs
    label_ids = get_label_ids()
    if not label_ids:
        logger.warning('No hot follow-up labels found')
        return {'threads_found': 0, 'replies_sent': 0, 'errors': 0}
    
    # Get threads
    threads = get_threads_by_labels(label_ids, max_results=50)
    hot_followup_threads = len(threads)
    logger.info(f'Found {hot_followup_threads} hot follow-up threads')
    
    # Load ledger
    dedup_keys = load_ledger()
    
    # Process threads
    replies_sent = 0
    errors = 0
    details = []
    
    for thread in threads:
        thread_id = thread.get('id')
        
        # Skip if already replied
        dedup_key = f'hotfollowup-{thread_id}'
        if dedup_key in dedup_keys:
            details.append({'thread_id': thread_id, 'status': 'already_replied'})
            continue
        
        # Get thread messages
        messages = get_thread_messages(thread_id)
        if not messages:
            continue
        
        # Get the latest message
        last_msg = messages[-1]
        headers = last_msg.get('payload', {}).get('headers', [])
        
        from_header = next((h for h in headers if h.get('name') == 'From'), {})
        subject_header = next((h for h in headers if h.get('name') == 'Subject'), {})
        
        sender = from_header.get('value', '')
        subject = subject_header.get('value', '')
        
        # Skip if we're the sender
        if 'ziontechgroup.com' in sender.lower():
            continue
        
        # Skip undeliverable messages
        if 'undeliverable' in sender.lower() or 'postmaster' in sender.lower():
            continue
        
        # Get message body
        body = decode_body(last_msg.get('payload', {}).get('body', {}).get('data', ''))
        if not body:
            for part in last_msg.get('payload', {}).get('parts', []):
                if part.get('mimeType') == 'text/plain':
                    body = decode_body(part.get('body', {}).get('data', ''))
                    break
                elif part.get('mimeType') == 'text/html':
                    html = decode_body(part.get('body', {}).get('data', ''))
                    body = re.sub(r'<[^>]+>', '', html)
        
        # Get thread context
        thread_context = ''
        if len(messages) > 1:
            for msg in messages[:-1]:
                msg_body = decode_body(msg.get('payload', {}).get('body', {}).get('data', ''))
                if not msg_body:
                    for part in msg.get('payload', {}).get('parts', []):
                        if part.get('mimeType') == 'text/plain':
                            msg_body = decode_body(part.get('body', {}).get('data', ''))
                            break
                thread_context += msg_body + '\n'
        
        # Generate reply
        reply_body = generate_llm_reply(sender, subject, body, thread_context)
        
        if not reply_body:
            # Fallback to template
            name_match = re.search(r'["\']?([^<"@]+)["\']?\s*<', sender)
            name = name_match.group(1).strip() if name_match else sender.split('@')[0]
            lang = detect_language(body or subject)
            reply_body = generate_template_reply(name, sender, lang)
        
        if dry_run:
            logger.info(f'[DRY-RUN] Would reply to {sender}: {subject}')
            logger.info(f'  Reply preview: {reply_body[:200]}...')
        else:
            # Send reply
            result = send_reply(sender, subject, reply_body, thread_id, access_token)
            
            if result and result.get('id'):
                replies_sent += 1
                save_to_ledger(thread_id, sender, subject, result.get('id'))
                logger.info(f'Sent reply to {sender}')
            else:
                errors += 1
                details.append({'thread_id': thread_id, 'status': 'failed_to_send'})
        
        details.append({
            'thread_id': thread_id,
            'to': sender,
            'subject': subject,
            'action': 'dry-run' if dry_run else 'sent'
        })
    
    # Save metrics
    metrics = {
        'ts': run_ts,
        'threads_found': hot_followup_threads,
        'replies_sent': replies_sent,
        'errors': errors,
        'details': details,
        'llm_provider': 'openrouter' if os.environ.get('OPENROUTER_API_KEY') else 'template'
    }
    
    MONITOR_DIR.mkdir(parents=True, exist_ok=True)
    with open(LOG_FILE, 'a') as f:
        f.write(json.dumps(metrics, ensure_ascii=False) + '\n')
    
    logger.info(f'Monitor complete. Threads: {hot_followup_threads}, Sent: {replies_sent}, Errors: {errors}')
    
    return {
        'threads_found': hot_followup_threads,
        'replies_sent': replies_sent,
        'errors': errors
    }

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='LLM-Powered Hot Follow-Up Responder')
    parser.add_argument('--send', action='store_true', help='Send replies (default: dry-run)')
    args = parser.parse_args()
    
    run_monitor(dry_run=not args.send)