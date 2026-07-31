#!/usr/bin/env python3
"""
Email Sender with Resilient SMTP Fallback
Sends emails via Gmail API with automatic fallback to SMTP on authentication errors.
"""
import json
import sys
import time
import base64
import smtplib
import urllib.request
import urllib.error
import ssl
import os
import glob
from pathlib import Path
from datetime import datetime, timezone
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Import Google Workspace helpers
sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
from google_workspace import gog_headers, load_gog_tokens, refresh_access_token

# Configuration
DRAFTS_DIR = Path('/Users/klebergarciaalcatrao/scripts/outreach')
LEDGER_PATH = Path('/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed/email_drafts_ledger.jsonl')

# SMTP Configuration (fallback)
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SMTP_USER = 'kleber@ziontechgroup.com'
SMTP_PASSWORD = None  # Will be loaded from environment or .env file

def load_smtp_credentials():
    """Load SMTP credentials from environment or .env file."""
    global SMTP_PASSWORD
    
    # Try environment variable first
    SMTP_PASSWORD = os.environ.get('GMAIL_SMTP_PASSWORD') or os.environ.get('SMTP_PASSWORD')
    
    if not SMTP_PASSWORD:
        # Try to load from .env file
        env_path = Path('/Users/klebergarciaalcatrao/.hermes/.env')
        if env_path.exists():
            with open(env_path, 'r') as f:
                for line in f:
                    if line.startswith('SMTP_PASSWORD='):
                        SMTP_PASSWORD = line.split('=', 1)[1].strip().strip('"').strip("'")
                        break
    
    return SMTP_PASSWORD is not None

def send_via_gmail_api(to_addr, subject, body, max_retries=3):
    """Send email via Gmail API."""
    raw_lines = [
        f"Subject: {subject}",
        f"To: {to_addr}",
        "",
        body,
    ]
    raw = "\r\n".join(raw_lines)
    encoded = base64.urlsafe_b64encode(raw.encode()).decode()
    
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
    data = json.dumps({'raw': encoded}).encode()
    
    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(
                url,
                data=data,
                headers={**gog_headers(), 'Content-Type': 'application/json'},
                method='POST'
            )
            result = json.loads(urllib.request.urlopen(req, timeout=30).read())
            return {'success': True, 'message_id': result.get('id'), 'method': 'gmail_api'}
        except urllib.error.HTTPError as e:
            error_body = e.read().decode(errors='replace')
            error_data = {}
            try:
                error_data = json.loads(error_body)
            except:
                pass
            
            error_code = e.code
            error_desc = error_data.get('error', {}).get('message', str(e.reason))
            
            # Check for auth errors that warrant SMTP fallback
            if error_code in [400, 401] or 'invalid_grant' in str(error_data).lower():
                return {'success': False, 'error': f'AUTH_ERROR_{error_code}', 'description': 'Gmail API auth failed - SMTP fallback needed', 'error_data': error_data}
            
            # Rate limiting
            if error_code == 429:
                wait_time = (2 ** attempt) * 10
                time.sleep(wait_time)
                continue
            
            return {'success': False, 'error': f'HTTP_{error_code}', 'description': error_desc}
        except Exception as e:
            return {'success': False, 'error': str(e), 'description': 'Connection error'}
    
    return {'success': False, 'error': 'Max retries exceeded'}

def send_via_smtp(to_addr, subject, body, max_retries=3):
    """Send email via SMTP as fallback."""
    if not load_smtp_credentials():
        return {'success': False, 'error': 'SMTP_CREDENTIALS_MISSING', 'description': 'No SMTP credentials available'}
    
    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_USER
        msg['To'] = to_addr
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain', 'utf-8'))
        
        for attempt in range(max_retries):
            try:
                server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=30)
                server.starttls(context=ssl.create_default_context())
                server.login(SMTP_USER, SMTP_PASSWORD)
                text = msg.as_string()
                server.sendmail(SMTP_USER, to_addr, text)
                server.quit()
                return {'success': True, 'message_id': f'smtp_{int(time.time())}', 'method': 'smtp'}
            except smtplib.SMTPAuthenticationError as e:
                return {'success': False, 'error': f'SMTP_AUTH_FAIL', 'description': str(e)}
            except Exception as e:
                if attempt < max_retries - 1:
                    time.sleep(2 ** attempt)
                    continue
                return {'success': False, 'error': str(e), 'description': 'SMTP connection error'}
    except Exception as e:
        return {'success': False, 'error': str(e), 'description': 'SMTP setup error'}

def send_email(to_addr, subject, body, max_retries=3, force_smtp=False):
    """
    Send email with automatic fallback from Gmail API to SMTP.
    
    Returns dict with:
    - success: bool
    - message_id: str (if successful)
    - method: 'gmail_api' or 'smtp'
    - error: str (if failed)
    """
    if force_smtp:
        return send_via_smtp(to_addr, subject, body, max_retries)
    
    # Try Gmail API first
    result = send_via_gmail_api(to_addr, subject, body, max_retries)
    
    if result['success']:
        return result
    
    # Check if we should fallback to SMTP
    if result.get('error', '').startswith('AUTH_ERROR_') or result.get('error') == 'invalid_grant':
        print(f"      ⚠️  Gmail API auth error, falling back to SMTP...")
        smtp_result = send_via_smtp(to_addr, subject, body, max_retries)
        if smtp_result['success']:
            return smtp_result
        else:
            # Both failed - return the SMTP error
            return smtp_result
    
    return result

def load_ledger():
    """Load the email sending ledger for deduplication."""
    entries = []
    if LEDGER_PATH.exists():
        with open(LEDGER_PATH, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line:
                    try:
                        entries.append(json.loads(line))
                    except:
                        pass
    return entries

def send_pending_emails():
    """
    Process all draft emails and send them with resilient delivery.
    Returns summary dict with sent_count, skipped_count, errors, etc.
    """
    print("=" * 60)
    print("📤 Sending Drafted Emails with Resilient Delivery")
    print("=" * 60)
    
    # Load ledger for deduplication
    ledger = load_ledger()
    sent_dedup_keys = set()
    for entry in ledger:
        if entry.get('status') == 'sent':
            sent_dedup_keys.add(entry.get('dedup_key', ''))
    
    print(f"\nLoaded {len(ledger)} ledger entries, {len(sent_dedup_keys)} already sent")
    
    # Find all draft files
    import glob
    draft_files = sorted(glob.glob(str(DRAFTS_DIR / 'draft_*.json')))
    print(f"Found {len(draft_files)} draft files")
    
    sent_count = 0
    smtp_count = 0
    skipped_count = 0
    errors = []
    smtp_fallback_count = 0
    
    for draft_file in draft_files:
        try:
            with open(draft_file, 'r', encoding='utf-8') as f:
                draft = json.load(f)
        except Exception as e:
            errors.append(f"Failed to read {draft_file}: {e}")
            continue
        
        if draft.get('status') != 'draft':
            skipped_count += 1
            continue
        
        to_addr = draft.get('prospect_email', '')
        subject = draft.get('subject', 'Following up on our collaboration')
        body = draft.get('body', '')
        contact_name = draft.get('prospect_name', 'Friend')
        service_name = draft.get('service_name', 'Service')
        dedup_key = f"{to_addr}-{draft.get('service_id', '')}"
        
        # Check for duplicates
        if dedup_key in sent_dedup_keys:
            print(f"  [SKIP] {to_addr} (contact: {contact_name}) - already sent")
            skipped_count += 1
            continue
        
        # Send the email with fallback
        print(f"  [SEND] {to_addr} (contact: {contact_name}, service: {service_name})")
        result = send_email(to_addr, subject, body)
        
        if result.get('success'):
            method = result.get('method', 'unknown')
            print(f"    ✅ Sent via {method}: {result.get('message_id')}")
            sent_count += 1
            if method == 'smtp':
                smtp_count += 1
                smtp_fallback_count += 1
            
            # Append to ledger
            entry = {
                'to': to_addr,
                'contact_name': contact_name,
                'service_name': service_name,
                'subject': subject,
                'thread_id': None,
                'message_id': result.get('message_id'),
                'status': 'sent',
                'ts': int(datetime.now(timezone.utc).timestamp()),
                'source': 'draft_file',
                'dedup_key': dedup_key,
                'draft_file': draft_file,
                'delivery_method': method
            }
            with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
                f.write(json.dumps(entry, ensure_ascii=False) + '\n')
            
            # Update draft file status
            draft['status'] = 'sent'
            draft['sent_at'] = datetime.now(timezone.utc).isoformat()
            draft['message_id'] = result.get('message_id')
            draft['delivery_method'] = method
            with open(draft_file, 'w', encoding='utf-8') as f:
                json.dump(draft, f, indent=2, ensure_ascii=False)
        else:
            errors.append(f"Failed to send to {to_addr}: {result.get('error')} - {result.get('description')}")
            print(f"    ❌ Failed: {result.get('error')} - {result.get('description')}")
        
        time.sleep(0.5)  # Short delay to avoid rate limits
    
    print(f"\n{'=' * 60}")
    print("📊 SUMMARY")
    print(f"   Sent:         {sent_count}")
    print(f"   Via SMTP:     {smtp_count} (fallback from Gmail API)")
    print(f"   Skipped:      {skipped_count}")
    print(f"   Errors:       {len(errors)}")
    if errors:
        print("\n❌ Errors:")
        for err in errors[:10]:
            print(f"   - {err}")
    print("=" * 60)
    
    return {
        'success': True,
        'sent_count': sent_count,
        'smtp_count': smtp_count,
        'skipped_count': skipped_count,
        'errors': errors,
        'status': 'completed' if len(errors) == 0 else 'completed_with_errors'
    }

if __name__ == '__main__':
    import os
    result = send_pending_emails()
    sys.exit(0 if result.get('status') == 'completed' else 1)