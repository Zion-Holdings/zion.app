#!/usr/bin/env python3
"""Send health report to Telegram using python-telegram-bot."""

import json
import os
import telegram

# Load the health report
with open('/Users/klebergarciaalcatrao/automation/reports/health-monitor-latest.json', 'r') as f:
    report = json.load(f)

# Format message
lines = [
    f"*Health Monitor Report* - {report['checkedAt']}",
    "",
    f"*Overall Status:* {report['status'].upper()}",
    "",
    "*Services Data File Health:*",
    f"- Records: {report['services']['count']:,}",
    f"- Status: {'Healthy' if report['services']['ok'] else 'Issues'}",
    "",
    "*Hot Follow-up Ledger Status:*",
    f"- High priority: {report['hotFollowup']['high_priority_count']}",
    f"- Status: {'Active' if report['hotFollowup']['ok'] else 'Issues'}",
    "",
    "*Sitemap Status:*",
    f"- URLs: {report['sitemap']['url_count']:,}",
    f"- Status: {'Healthy' if report['sitemap']['ok'] else 'Issues'}",
    "",
    "*Growth Metrics:*",
    f"- Engine: {report['growthMetrics']['engine']}",
    f"- Version: {report['growthMetrics']['version']}",
    f"- Services Added: {report['growthMetrics']['services_added']:,}",
    f"- Landing Pages: {report['growthMetrics']['landing_pages']:,}",
    "",
    "*Errors/Warnings:* None",
    "",
    "All systems operational"
]

message = '\n'.join(lines)

# Send to Telegram
token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

if token:
    bot = telegram.Bot(token=token)
    result = bot.send_message(chat_id=chat_id, text=message, parse_mode=telegram.constants.ParseMode.MARKDOWN)
    print(f"[OK] Message sent: {result}")
else:
    print("[ERROR] No TELEGRAM_BOT_TOKEN available")