#!/usr/bin/env python3
import json
import urllib.request
import urllib.parse
from datetime import datetime, timezone

# Read the report from the ingress spool
report_path = '/Users/klebergarciaalcatrao/.openclaw/telegram/ingress-spool-default/002-json-integrity-report-20260731.json'

try:
    with open(report_path, 'r') as f:
        report = json.load(f)
    
    # Try to send via Telegram Bot API using the token from openclaw.json
    # The token is redacted, so we'll try the OpenClaw gateway approach
    
    # Check if there's an OpenClaw gateway endpoint
    gateway_url = 'http://localhost:8080/telegram/sendMessage'
    
    data = urllib.parse.urlencode({
        'chat_id': report.get('chat_id'),
        'text': report.get('text'),
        'parse_mode': report.get('parse_mode')
    }).encode()
    
    req = urllib.request.Request(gateway_url, data=data, method='POST')
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            result = json.loads(response.read())
            print(f'[OK] Message sent via OpenClaw gateway: {result}')
    except Exception as e:
        print(f'[INFO] OpenClaw gateway not available: {e}')
        print('[INFO] Report written to ingress spool for processing')
        
except Exception as e:
    print(f'[ERROR] Could not process report: {e}')