#!/usr/bin/env python3
"""
Simple hot follow-up responder that handles token refresh properly.
"""

import json
import urllib.request
import urllib.parse
import base64
import re
from datetime import datetime, timezone, timedelta
from pathlib import Path
from email.mime.text import MIMEText

# Configuration
TOKEN_FILE = Path.home() / '.openclaw' / 'workspace' / 'gog_tokens.json'
LEDGER_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/hot_followup_reply_ledger.jsonl')
HOT_LABEL_ID = 'Label_4207916705207178948'
CALENDLY = 'https://calendly.com/kleber-ziontechgroup'
WEBSITE = 'https://ziontechgroup.com'

def load_tokens():
    """Load Gmail OAuth tokens."""
    if not TOKEN_FILE.exists():
        raise FileNotFoundError(f"Token file not found: {TOKEN_FILE}")
    return json.loads(TOKEN_FILE.read_text(encoding='utf-8'))

def save_tokens(tokens):
    """Save Gmail OAuth tokens."""
    TOKEN_FILE.write_text(json.dumps(tokens, indent=2, ensure_ascii=False), encoding='utf-8')

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
    
    with urllib.request.urlopen(req, timeout=20) as resp:
        payload = json.loads(resp.read())
    
    tokens['access_token'] = payload['access_token']
    tokens['expiry'] = (now_utc + timedelta(seconds=payload.get('expires_in', 3600))).isoformat()
    save_tokens(tokens)
    return tokens['access_token']

def get_access_token():
    """Get valid Gmail access token."""
    tokens = load_tokens()
    return refresh_access_token(tokens)

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
        f'https://gmail.googleapis.com/gmail/v1/users/me{path}',
        data=data,
        method=method,
        headers=headers
    )
    
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())

def decode_body(data):
    """Decode base64 encoded body."""
    if not data:
        return ''
    return base64.urlsafe_b64decode(data + '===').decode('utf-8', errors='replace')

def load_ledger():
    """Load sent reply ledger to avoid duplicates."""
    if not LEDGER_FILE.exists():
        return set()
    
    dedup_keys = set()
    for line in LEDGER_FILE.open('r'):
        if line.strip():
            entry = json.loads(line)
            key = entry.get('dedup_key', '')
            if key:
                dedup_keys.add(key)
    return dedup_keys

def save_to_ledger(dedup_key, to, subject, message_id, thread_id):
    """Save reply to ledger."""
    LEDGER_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    entry = {
        'to': to,
        'subject': subject,
        'message_id': message_id,
        'thread_id': thread_id,
        'dedup_key': dedup_key,
        'status': 'sent',
        'ts': int(datetime.now(timezone.utc).timestamp())
    }
    
    with open(LEDGER_FILE, 'a') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

def detect_language(text):
    """Detect if text is in Portuguese, Spanish, or English."""
    lower = text.lower() if text else ''
    if any(w in lower for w in ['obrigado', 'oportunidade', 'projeto', 'serviços', 'ferramentas', 'abraço', 'oi', 'você', 'trabalhar']):
        return 'pt'
    elif any(w in lower for w in ['gracias', 'oportunidad', 'proyecto', 'servicios', 'herramientas', 'llamada', 'saludos', 'hola']):
        return 'es'
    return 'en'

def generate_template_reply(name, lang='en'):
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
Nossa plataforma também oferece diversas ferramentas e serviços gratuitos que equipes usam no dia a dia.

Se alguma dessas ideias interessar, estou disponível para continuar conversando por e-mail ou marcar uma breve chamada: {CALENDLY}

Um abraço,
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
We also have many free AI-powered tools that teams use daily:
• AI Service Router - Find the right AI service instantly
• SSL Checker - Verify your SSL certificates
• Port Scanner - Network security assessment
• Service Comparison - Compare AI services and pricing
• Health Check - System monitoring and diagnostics
• Favicon Generator - Create favicons from text or images
• AI Code Reviewer - Get code quality feedback

If any of these sound useful, I'm happy to continue advancing by email, or I'm available for a short call: {CALENDLY}

Best,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
{WEBSITE}"""

def send_reply(to, subject, body, thread_id, access_token):
    """Send reply via Gmail API."""
    # Create message
    msg = MIMEText(body, 'plain', 'utf-8')
    msg['Subject'] = subject if subject.startswith('Re:') else f'Re: {subject}'
    msg['From'] = 'kleber@ziontechgroup.com'
    msg['To'] = to
    msg['In-Reply-To'] = f'<{thread_id}>'
    msg['References'] = f'<{thread_id}>'
    
    raw = base64.urlsafe_b64encode(msg.as_string().encode('utf-8')).decode('utf-8')
    
    payload = {'raw': raw, 'threadId': thread_id}
    
    result = gmail_request('/messages/send', method='POST', payload=payload, access_token=access_token)
    return result

def main(send=False):
    """Run the hot follow-up responder."""
    print(f'Starting hot follow-up responder (send={send})')
    
    # Get access token
    access_token = get_access_token()
    print(f'Access token obtained: {access_token[:30]}...')
    
    # Get threads from !!!hot-follow-up label
    threads = gmail_request(f'/threads?labelIds={HOT_LABEL_ID}&maxResults=50', access_token=access_token)
    threads = threads.get('threads', [])
    print(f'Found {len(threads)} threads in !!!hot-follow-up label')
    
    # Load ledger for deduplication
    dedup_keys = load_ledger()
    print(f'Already replied: {len(dedup_keys)} threads')
    
    # Process each thread
    replies_sent = 0
    for thread in threads:
        thread_id = thread.get('id')
        dedup_key = f'hotfollowup-{thread_id}'
        
        if dedup_key in dedup_keys:
            continue
        
        # Get thread messages
        thread_data = gmail_request(f'/threads/{thread_id}?format=full', access_token=access_token)
        messages = thread_data.get('messages', [])
        
        if not messages:
            continue
        
        # Get the latest message
        last_msg = messages[-1]
        headers = last_msg.get('payload', {}).get('headers', [])
        
        from_header = next((h for h in headers if h.get('name') == 'From'), {})
        subject_header = next((h for h in headers if h.get('name') == 'Subject'), {})
        
        sender = from_header.get('value', '')
        subject = subject_header.get('value', '')
        
        # Skip undeliverable messages
        if 'undeliverable' in sender.lower() or 'postmaster' in sender.lower():
            continue
        
        # Skip internal messages
        if 'ziontechgroup.com' in sender.lower():
            continue
        
        # Get name from email
        name_match = re.search(r'["\']([^<"@]+)["\']?\s*<', sender)
        if name_match:
            name = name_match.group(1).strip()
        else:
            name = sender.split('@')[0].replace('.', ' ').title()
        
        # Detect language
        lang = detect_language(subject)
        
        # Generate reply
        reply_body = generate_template_reply(name, lang)
        
        if send:
            # Send reply
            result = send_reply(sender, subject, reply_body, thread_id, access_token)
            if result and result.get('id'):
                replies_sent += 1
                save_to_ledger(dedup_key, sender, subject, result.get('id'), thread_id)
                print(f'Sent reply to {sender}')
            else:
                print(f'Failed to send to {sender}')
        else:
            print(f'[DRY-RUN] Would reply to {sender}: {subject}')
    
    print(f'Complete. Threads: {len(threads)}, Replies: {replies_sent}')
    return replies_sent

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Hot Follow-Up Responder')
    parser.add_argument('--send', action='store_true', help='Send replies (default: dry-run)')
    args = parser.parse_args()
    main(send=args.send)