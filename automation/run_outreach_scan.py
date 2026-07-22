import json
import os
import re
import subprocess
from datetime import datetime
from pathlib import Path

base = Path(__file__).resolve().parents[1]
history_file = base / 'automation' / 'data' / 'lead-outreach' / 'outreach-history.json'
log_file = base / 'automation' / 'data' / 'lead-outreach' / 'outreach-log.jsonl'
summary_file = base / 'automation' / 'reports' / 'outreach-summary.json'
errors = []

def append_event(entry):
  with open(log_file, 'a', encoding='utf8') as f:
    f.write(json.dumps(entry, ensure_ascii=False) + '\n')

def save_summary(s):
  summary_file.parent.mkdir(parents=True, exist_ok=True)
  summary_file.write_text(json.dumps(s, ensure_ascii=False, indent=2), encoding='utf8')

def save_history(history):
  history_file.parent.mkdir(parents=True, exist_ok=True)
  history_file.write_text(json.dumps(history, ensure_ascii=False, indent=2), encoding='utf8')

def load_history():
  try:
    return json.loads(history_file.read_text(encoding='utf8'))
  except Exception:
    return {}

def run_gog(args):
  cmd = ['gog'] + args + ['--account', 'kleber@ziontechgroup.com', '--no-input']
  try:
    out = subprocess.check_output(cmd, stderr=subprocess.STDOUT, timeout=70)
    return {'ok': True, 'out': out.decode('utf8', errors='ignore')}
  except subprocess.CalledProcessError as e:
    return {'ok': False, 'out': (e.output or b'').decode('utf8', errors='ignore'), 'ret': e.returncode}
  except Exception as e:
    return {'ok': False, 'out': str(e), 'ret': None}

def run_gog_json(args):
  cmd = ['gog'] + args + ['--account', 'kleber@ziontechgroup.com', '--no-input', '--json']
  try:
    out = subprocess.check_output(cmd, stderr=subprocess.STDOUT, timeout=70)
    return {'ok': True, 'out': out.decode('utf8', errors='ignore')}
  except subprocess.CalledProcessError as e:
    return {'ok': False, 'out': (e.output or b'').decode('utf8', errors='ignore'), 'ret': e.returncode}
  except Exception as e:
    return {'ok': False, 'out': str(e), 'ret': None}

def gog_gmail_ok():
  r = run_gog(['gmail', 'labels', 'list', '--max', '1'])
  return bool(r and r.get('ok') and r.get('out'))

def extract_email(ff):
  m = re.search(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', ff or '')
  return m.group(0) if m else None

append_event({'event': 'start', 'ts': datetime.utcnow().isoformat() + 'Z', 'host': 'cron'})

queries = ['in:anywhere', 'in:promotions', 'in:social']
all_emails = []
seen = set()
for q in queries:
  r = run_gog(['gmail', 'search', q, '--max', '250', '--plain'])
  if not r['ok'] or not r['out'].strip():
    continue
  lines = r['out'].strip().splitlines()
  for line in lines[1:]:
    parts = line.split()
    if len(parts) < 5:
      continue
    email_id = parts[0]
    if email_id in seen:
      continue
    seen.add(email_id)
    all_emails.append({
      'id': email_id,
      'date': parts[1] + ' ' + parts[2],
      'from': parts[3],
      'subject': ' '.join(parts[4:-1]),
      'labels': parts[-1] if parts else ''
    })

history = load_history()
now = datetime.utcnow()

skips = ['ziontechgroup.com','@zion','github.com','noreply','notifications','google.com','netlify.com','amazon.com','ifttt.com','tiktok.com','salesforce.com','hubspot.com','zendesk.com','shopify.com']
promo_labels={'CATEGORY_PROMOTIONS','CATEGORY_SOCIAL'}
lead_hints=['quote','request','server','service','proposta','orçamento','suporte','collaboration','opportunity','meeting','projeto','integração','rfq','budget','timeline','contract','partnership']

potentialClients = 0
skipped = 0
sent = 0
llm_used = 0
errors_md = []
send_enabled = bool(os.getenv('ZION_OUTREACH_SEND', '0') == '1')

def llm_tailored_reply(name, subject, email_body='', lang='English'):
  try:
    prompt = json.dumps({
      'task': 'compose_ceo_reply',
      'name': name,
      'subject': subject,
      'email_body': email_body,
      'lang': lang,
      'brand': 'Zion Tech Group',
      'website': 'https://ziontechgroup.com',
      'calendly': 'https://calendly.com/kleber-ziontechgroup',
      'cta': 'Advance conversation with 1-2 concrete follow-up options.'
    })
    out = subprocess.check_output(['node', 'automation/ai-email-outreach-llm-agent.cjs'], input=prompt, stderr=subprocess.STDOUT, timeout=90)
    text = out.decode('utf8', errors='ignore').strip()
    return text if text else None
  except Exception as e:
    errors_md.append('LLM error: ' + str(e))
    return None

def send_gmail(to, subject, body):
  quoted_subject = subject.replace('"', '\\"')
  quoted_body = body.replace('"', '\\"').replace('\n', '\\n')
  return run_gog(['gmail', 'send', '--to', to, '--subject', quoted_subject, '--body', quoted_body])

for email in all_emails:
  try:
    frm = (email.get('from') or '').lower()
    subj = (email.get('subject') or '').lower()
    labels = email.get('labels') or ''
    if any(k in frm for k in skips):
      continue
    if not subj:
      continue
    if not any(k in subj for k in lead_hints):
      continue

    potentialClients += 1
    addr = extract_email(email.get('from'))
    if not addr:
      continue
    prev = history.get(addr)
    if prev:
      try:
        days = (now - datetime.fromisoformat(prev.get('timestamp','').replace('Z',''))).total_seconds()/86400
      except Exception:
        days = 999
      if days < 7:
        skipped += 1
        append_event({'event': 'skipped', 'email': addr, 'reason': 'duplicate_suppression', 'daysSince': round(days, 2)})
        continue

    subject_line = 'Re: ' + email.get('subject') if email.get('subject') else 'Parceria em IA e soluções tecnológicas — Zion Tech Group'
    mode = 'template'
    tailored = None
    if gog_gmail_ok():
      lang = 'Portuguese' if any(c in subj for c in 'ãõáéíóúç') else 'English'
      tailored = llm_tailored_reply(addr, email.get('subject',''), '', lang)
      if tailored:
        mode = 'llm-tailored'
        llm_used += 1
    else:
      errors_md.append('gmail auth unavailable; skipping live send')

    body = tailored or ''
    if send_enabled and gog_gmail_ok() and body:
      sr = send_gmail(addr, subject_line, body)
      if sr and sr.get('ok'):
        sent += 1
        append_event({'event': 'sent', 'email': addr, 'subject': subject_line, 'mode': mode})
      else:
        errors_md.append(f"send failed for {addr}: {(sr.get('out') if sr else 'no-result')[:240]}")
        append_event({'event': 'send_failed', 'email': addr, 'subject': subject_line, 'mode': mode, 'error': (sr.get('out') if sr else 'no-result')})
    else:
      sent += 1
      append_event({'event': 'prepared', 'email': addr, 'subject': subject_line, 'mode': mode})

    history[addr] = {'timestamp': now.isoformat() + 'Z', 'status': 'PREPARED' if not (send_enabled and gog_gmail_ok()) else 'SENT', 'subject': subject_line, 'mode': mode}
  except Exception as e:
    errors_md.append(str(e))

save_history(history)
summary = {
  'ts': datetime.utcnow().isoformat() + 'Z',
  'scanned': len(all_emails),
  'potentialClients': potentialClients,
  'skippedDuplicateSuppression': skipped,
  'sent': sent,
  'llmUsed': llm_used,
  'errors': errors + errors_md,
  'sendEnabled': send_enabled,
  'gmailAuth': bool(gog_gmail_ok())
}
save_summary(summary)
append_event({'event': 'complete', 'summary': summary})
print(json.dumps({'outreach': summary}, ensure_ascii=False))
