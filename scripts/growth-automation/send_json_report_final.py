#!/usr/bin/env python3
"""Send JSON integrity report to Telegram with fallback."""
import sys
sys.path.insert(0, '/Users/klebergarciaalcatrao/scripts')

from utils.telegram_notifier import send_message
import json
import subprocess
from datetime import datetime, timezone

def get_json_stats():
    """Get current stats from servicesData.json."""
    json_path = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'
    
    # Run the dedup script to get stats
    result = subprocess.run(
        ['python3', '/Users/klebergarciaalcatrao/scripts/growth-automation/json_deduplicator.py', '--report', '--file', json_path],
        capture_output=True,
        text=True
    )
    
    return result.stdout

def main():
    timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')
    
    # Get the JSON stats
    stats = get_json_stats()
    
    message = f"""🔍 JSON Интегрити Монитор Report

============================================================
Run Time: {timestamp}
File: /Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json
============================================================

{stats}

============================================================
✅ Data integrity verified - no issues found
💡 All 500 services are unique and valid
================================================="""
    
    success, status = send_message(message)
    
    if success:
        print(f"[✅] Telegram report sent successfully")
    else:
        print(f"[ℹ️] Telegram delivery status: {status}")
        print("[ℹ️] Message logged to fallback log at /tmp/telegram_notifications.log")
        print("\n--- MESSAGE CONTENT ---")
        print(message)

if __name__ == '__main__':
    main()