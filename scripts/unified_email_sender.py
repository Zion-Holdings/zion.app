#!/usr/bin/env python3
"""
Unified Email Sender for Zion Tech Group
Uses Resend (primary), Brevo (fallback), and SMTP (last resort)
"""
import json
import os
import sys
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent

# Load API keys
BREVO_API_KEY = os.getenv('BREVO_API_KEY', '').strip()
RESEND_API_KEY = os.getenv('RESEND_API_KEY', '').strip()

def send_via_resend(to_email: str, subject: str, body: str, reply_to: str = None) -> dict:
    """Send email via Resend API"""
    if not RESEND_API_KEY:
        return {'success': False, 'error': 'RESEND_API_KEY not set'}
    
    payload = {
        'from': 'Kleber Garcia <kleber@ziontechgroup.com>',
        'to': [to_email],
        'subject': subject,
        'html': body.replace('\n', '<br>'),
        'text': body
    }
    if reply_to:
        payload['reply_to'] = reply_to
    
    try:
        req = urllib.request.Request(
            'https://api.resend.dev/emails',
            data=json.dumps(payload).encode('utf-8'),
            headers={
                'Authorization': f'Bearer {RESEND_API_KEY}',
                'Content-Type': 'application/json'
            },
            method='POST'
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            result = json.loads(resp.read())
            return {'success': True, 'id': result.get('id', ''), 'provider': 'resend'}
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {'success': False, 'error': f'{e.code}: {error_body}', 'provider': 'resend'}
    except Exception as e:
        return {'success': False, 'error': str(e), 'provider': 'resend'}

def send_via_brevo(to_email: str, subject: str, body: str, reply_to: str = None) -> dict:
    """Send email via Brevo (Sendinblue) API"""
    if not BREVO_API_KEY:
        return {'success': False, 'error': 'BREVO_API_KEY not set'}
    
    payload = {
        'sender': {'email': 'kleber@ziontechgroup.com', 'name': 'Kleber Garcia'},
        'to': [{'email': to_email}],
        'subject': subject,
        'htmlContent': body.replace('\n', '<br>'),
        'textContent': body
    }
    
    try:
        req = urllib.request.Request(
            'https://api.brevo.com/v3/smtp/email',
            data=json.dumps(payload).encode('utf-8'),
            headers={
                'api-key': BREVO_API_KEY,
                'Content-Type': 'application/json'
            },
            method='POST'
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            result = json.loads(resp.read())
            return {'success': True, 'messageId': result.get('messageId', ''), 'provider': 'brevo'}
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {'success': False, 'error': f'{e.code}: {error_body}', 'provider': 'brevo'}
    except Exception as e:
        return {'success': False, 'error': str(e), 'provider': 'brevo'}

def main():
    """Main function to send queued emails"""
    latest_outreach = PROJECT_ROOT / 'data' / 'outreach' / 'latest_outreach.json'
    if not latest_outreach.exists():
        print("No outreach queue found")
        return
    
    with open(latest_outreach, 'r') as f:
        queue = json.load(f)
    
    # Filter pending emails
    pending = [e for e in queue if e.get('provider_status') == 'pending_send']
    print(f"Found {len(pending)} pending emails")
    
    sent_count = 0
    failed_count = 0
    
    for email in pending:
        to = email.get('email')
        subject = email.get('subject', 'No subject')
        body = email.get('body', '')
        
        # Try Resend first
        result = send_via_resend(to, subject, body)
        if result['success']:
            print(f"[Sent via Resend] {to}")
            email['provider_status'] = 'sent'
            email['sent_at'] = datetime.now(timezone.utc).isoformat()
            email['provider_result'] = result
            sent_count += 1
        else:
            # Try Brevo as fallback
            result = send_via_brevo(to, subject, body)
            if result['success']:
                print(f"[Sent via Brevo] {to}")
                email['provider_status'] = 'sent'
                email['sent_at'] = datetime.now(timezone.utc).isoformat()
                email['provider_result'] = result
                sent_count += 1
            else:
                print(f"[Failed] {to}: {result.get('error', 'Unknown error')}")
                email['provider_status'] = 'failed'
                email['last_error'] = result.get('error', 'Unknown error')
                failed_count += 1
    
    # Save updated queue
    with open(latest_outreach, 'w') as f:
        json.dump(queue, f, indent=2)
    
    print(f"\nResults: {sent_count} sent, {failed_count} failed")

if __name__ == '__main__':
    main()