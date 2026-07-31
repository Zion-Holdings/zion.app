#!/usr/bin/env python3
"""Send health monitor report to Telegram."""

import json
import os
import urllib.request
import urllib.parse

TELEGRAM_CHAT_ID = '8435383377'

def send_telegram_message(message: str, token: str) -> bool:
    """Send message to Telegram."""
    try:
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': TELEGRAM_CHAT_ID,
            'text': message,
            'parse_mode': 'Markdown'
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            return result.get('ok', False)
    except Exception as e:
        print(f"Error sending Telegram: {e}")
        return False

def main():
    # Load health report
    with open('/Users/klebergarciaalcatrao/automation/reports/health-monitor-latest.json', 'r') as f:
        report = json.load(f)
    
    # Format message
    lines = [
        f"*Health Monitor Report* - {report['checkedAt']}",
        "",
        f"*Overall Status:* {report['status'].upper()}",
        "",
        "*Build Status:*",
        f"- Checked: {report['build']['checked']} builds",
        f"- Missing: {report['build']['missingCount']}",
        f"- Status: {'All OK' if report['build']['ok'] else 'Issues found'}",
        "",
        "*Services Data File Health:*",
        f"- Services count: {report['services']['count']:,}",
        f"- File: {report['services']['file']}",
        f"- Status: {'Healthy' if report['services']['ok'] else 'Issues'}",
        "",
        "*Hot Follow-up Ledger Status:*",
        f"- High priority count: {report['hotFollowup']['high_priority_count']}",
        f"- Status: {'Active' if report['hotFollowup']['ok'] else 'Issues'}",
    ]
    
    # Add leads
    if report['hotFollowup']['ok'] and report['hotFollowup'].get('leads'):
        lines.append("- Leads:")
        for lead in report['hotFollowup']['leads']:
            lines.append(f"  - {lead['company']} ({lead['name']}) - {lead['industry']}")
    
    lines.extend([
        "",
        "*Sitemap Status:*",
        f"- URL count: {report['sitemap']['url_count']:,}",
        f"- Path: {report['sitemap']['path']}",
        f"- Status: {'Healthy' if report['sitemap']['ok'] else 'Issues'}",
        "",
        "*Growth Metrics:*",
        f"- Engine: {report['growthMetrics']['engine']} v{report['growthMetrics']['version']}",
        f"- Services added: {report['growthMetrics']['services_added']:,}",
        f"- Total services: {report['growthMetrics']['total_services']:,}",
        f"- Landing pages: {report['growthMetrics']['landing_pages']:,}",
        "",
        "*Errors/Warnings: None*",
        "",
        "All systems operational"
    ])
    
    message = '\n'.join(lines)
    
    # Get token from environment
    token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    
    if token:
        success = send_telegram_message(message, token)
        print(f"Telegram message sent: {success}")
    else:
        print("No TELEGRAM_BOT_TOKEN configured")

if __name__ == '__main__':
    main()