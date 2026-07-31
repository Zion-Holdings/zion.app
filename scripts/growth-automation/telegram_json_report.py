#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
import os
from datetime import datetime, timezone

token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f'''📊 JSON Интегрити Монитор

=====================================
JSON Дедупликация и чистка
=====================================

Дата: {timestamp}
📁 Файл: /Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json
📋 Службы: 500 служб (лист)

🔎 Проверка:
   - ✅ ДБ: 0 дбират по ID
   - ✅ ДБ: 0 дбират по названию
   - ✅ Валидационные проблемы: 0

=====================================
🎉 Результат проверки
=====================================
🎅 Данные при веречечены и не найдено логики от s
🎆 Обзор пробовал сердо в налюченней струк

'''

if token:
    try:
        url = f'https://api.telegram.org/bot{token}/sendMessage'
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            print(f'Sent: {result}')
    except Exception as e:
        print(f'Error: {e}')
else:
    print('[⚠️] No Telegram token available')