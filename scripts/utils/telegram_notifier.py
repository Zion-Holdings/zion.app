import os
import json
import datetime
import urllib.request
import urllib.error
from pathlib import Path

FALLBACK_LOG = Path('/tmp/telegram_notifications.log')
ENDPOINT_TEMPLATE = 'https://api.telegram.org/bot{token}/sendMessage'
DEFAULT_CHAT_ID = '8435383377'


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


def send_message(text: str, chat_id: str = DEFAULT_CHAT_ID, token: str = ''):
    payload = {'chat_id': chat_id, 'text': text}
    if not token:
        token = os.getenv('TELEGRAM_BOT_TOKEN', '')
    if not token:
        _fallback_write(payload)
        return False, 'missing_token_fallback'
    try:
        data = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(
            ENDPOINT_TEMPLATE.format(token=token),
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
