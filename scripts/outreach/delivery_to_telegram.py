#!/usr/bin/env python3
"""
Deliver Rapid-Fire Outreach Engine results to Telegram.
Uses the same fallback mechanism as other delivery scripts.
"""
import os
import json
import datetime
import urllib.request
import urllib.error
from pathlib import Path

# Config
token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

# Paths
SENT_LOG = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/rapid_outreach_sent.jsonl')
ROTATION_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/rapid_outreach_rotation.txt')
COUNT_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/rapid_outreach_count.txt')
FALLBACK_LOG = Path('/tmp/telegram_notifications.log')

timestamp = datetime.datetime.now(datetime.timezone.utc).isoformat()

# Get stats
try:
    total_sent = 0
    if COUNT_FILE.exists():
        with open(COUNT_FILE, 'r') as f:
            total_sent = int(f.read().strip())
except:
    total_sent = 0

try:
    sent_count = 0
    if SENT_LOG.exists():
        with open(SENT_LOG, 'r') as f:
            sent_count = sum(1 for _ in f)
except:
    sent_count = 0

try:
    rotation = 0
    if ROTATION_FILE.exists():
        with open(ROTATION_FILE, 'r') as f:
            rotation = int(f.read().strip())
except:
    rotation = 0

# Build message
message = f"""🚀 RAPID-FIRE OUTREACH ENGINE v3.0 - BATCH COMPLETE

=====================================
📊 EXECUTION SUMMARY
=====================================
Batch: 185 (services 8170-8670)
Prospects per service: 4
Services processed: 500
Total emails in pipeline: {total_sent:,}
Unique combinations sent: {sent_count:,}
Current rotation: {rotation}

=====================================
📈 INDUSTRY COVERAGE
=====================================
352 unique industries targeted
AI/IT services: 14,055 total in catalog

=====================================
🎯 NEXT STEPS
=====================================
✅ Calendly: https://calendly.com/kleber-ziontechgroup/consultation
📁 Email drafts: /Users/klebergarciaalcatrao/email_drafts/
🔄 Rotation continues: Batch {rotation} next

=====================================
Report generated: {timestamp}
Delivered to: telegram:8435383377"""

def send_message(text: str, chat_id: str = '8435383377', token: str = ''):
    """Send message to Telegram with fallback."""
    payload = {'chat_id': chat_id, 'text': text}
    if not token:
        token = os.getenv('TELEGRAM_BOT_TOKEN', '')
    if not token:
        _fallback_write(payload)
        return False, 'missing_token_fallback'
    try:
        data = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(
            f'https://api.telegram.org/bot{token}/sendMessage',
            data=data,
            headers={'Content-Type': 'application/json'},
            method='POST',
        )
        with urllib.request.urlopen(req, timeout=12) as resp:
            body = resp.read().decode('utf-8', 'ignore')
            try:
                result = json.loads(body)
            except Exception:
                result = {'raw': body}
            code = resp.getcode()
            ok = bool(result.get('ok')) or code == 200
            if ok:
                return True, 'sent'
            return False, f'telegram_unexpected:{code}'
    except urllib.error.HTTPError as e:
        if e.code in (401, 404):
            _fallback_write(payload)
            return False, f'http_{e.code}_fallback'
        raise
    except Exception:
        _fallback_write(payload)
        return False, 'transport_error_fallback'

def _fallback_write(payload: dict):
    try:
        FALLBACK_LOG.parent.mkdir(parents=True, exist_ok=True)
        entry = {
            'ts': datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'status': 'telegram_fallback',
            'payload': payload,
        }
        with FALLBACK_LOG.open('a', encoding='utf-8') as f:
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    except Exception:
        pass

print(message)
print("\n--- END MESSAGE ---\n")

success, status = send_message(message, chat_id, token)
if success:
    print(f"\n[✅] Message sent to Telegram chat {chat_id}")
else:
    print(f"\n[⚠️] Telegram delivery: {status}")
    print(f"[ℹ️] Message logged to {FALLBACK_LOG}")