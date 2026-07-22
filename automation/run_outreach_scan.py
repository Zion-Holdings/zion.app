import json, os, re, subprocess
from datetime import datetime
from pathlib import Path

base = Path(__file__).resolve().parents[1]
history_file = base / 'automation' / 'data' / 'lead-outreach' / 'outreach-history.json'
log_file = base / 'automation' / 'data' / 'lead-outreach' / 'outreach-log.jsonl'
draft_queue = base / 'outreach_monitor' / 'processed' / 'ceo_drafts_for_review.jsonl'
errors = []
now = datetime.utcnow()

def append_event(entry):
  with open(log_file, 'a', encoding='utf8') as f:
    f.write(json.dumps({**entry, 'ts': now.isoformat() + 'Z'}, ensure_ascii=False) + '\n')

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

def extract_email(ff):
  m = re.search(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}', ff or '')
  return m.group(0) if m else None

append_event({'event':'start','host':'cron'})
r = run_gog(['gmail','search','in:anywhere','--max','500','--plain'])
scanned=0
emails=[]
if not r['ok'] or not r['out'].strip():
  errors.append('gmail search failed: ' + r['out'][:200])
else:
  lines=r['out'].strip().splitlines()
  scanned=max(0,len(lines)-1)
  for line in lines[1:]:
    parts=line.split()
    if len(parts)<5: continue
    emails.append({'id':parts[0],'date':parts[1]+' '+parts[2],'from':parts[3],'subject':' '.join(parts[4:-1]),'labels':parts[-1]})

history=load_history()
skips=['ziontechgroup.com','@zion','github.com','noreply','notifications','google.com','netlify.com','amazon.com','ifttt.com','tiktok.com']
promo_labels={'CATEGORY_PROMOTIONS','CATEGORY_SOCIAL'}
lead_hints=['quote','request','server','service','proposta','orçamento','suporte','collaboration','opportunity','meeting','projeto','integração']
potential=0; skipped=0; sent=0; llm_used=0; drafted=0; errors_md=[]

llm_agent = base / 'automation' / 'ai-email-outreach-llm-agent.cjs'
llm_available = llm_agent.exists()

for email in emails:
  try:
    frm=(email.get('from') or '').lower()
    subj=(email.get('subject') or '').lower()
    labels=email.get('labels') or ''
    if any(k in frm for k in skips): continue
    if any(k in labels for k in promo_labels): continue
    if any(k in subj for k in lead_hints):
      potential += 1
      addr = extract_email(email.get('from'))
      if not addr: continue
      prev=history.get(addr)
      if prev:
        try:
          days=(now-datetime.fromisoformat(prev.get('timestamp','').replace('Z',''))).total_seconds()/86400
        except Exception:
          days=999
        if days < 7:
          skipped += 1
          append_event({'event':'skipped','email':addr,'reason':'duplicate_suppression','daysSince':round(days,2)})
          continue
      subject_line='Re: '+(email.get('subject') or 'Parceria em IA e soluções tecnológicas — Zion Tech Group')
      mode='template'
      if llm_available:
        try:
          cmd=[os.getenv('NODE','node'), str(llm_agent)]
          out=subprocess.check_output(cmd, stderr=subprocess.STDOUT, timeout=90, text=True, encoding='utf8', errors='ignore')
          data=json.loads(out)
          text=data.get('reply') or data.get('draft') or data.get('tailored_reply')
          if text:
            mode='llm-tailored'
            llm_used += 1
            # draft for review to avoid accidental sends
            Path(draft_queue).parent.mkdir(parents=True, exist_ok=True)
            with open(draft_queue, 'a', encoding='utf8') as f:
              json.dump({'to':addr,'subject':subject_line,'draft':text,'mode':mode,'event':'draft_for_review','source_ts':now.isoformat()+'Z','origin_email_id':email.get('id')}, f, ensure_ascii=False)
              f.write('\n')
            drafted += 1
        except Exception as e:
          errors_md.append(str(e))
      # Mark history so we don't re-draft same addr within 7 days
      history[addr] = {'timestamp': now.isoformat() + 'Z', 'status': 'DRAFTED', 'subject': subject_line, 'mode': mode}
      sent += 1
  except Exception as e:
    errors_md.append(str(e))

save_history(history)
append_event({'event':'complete','summary':{'scanned':scanned,'potentialClients':potential,'skippedDuplicateSuppression':skipped,'sent':sent,'drafted':drafted,'llmUsed':llm_used,'errors':errors+errors_md}})
print(json.dumps({'outreach':{'scanned':scanned,'potentialClients':potential,'skippedDuplicateSuppression':skipped,'sent':sent,'drafted':drafted,'llmUsed':llm_used,'errors':errors+errors_md}}, ensure_ascii=False))
PY
git add automation/run_outreach_scan.py
git commit -m "feat(outreach): make lead scan actually invoke LLM tailorer; add safe draft queue"
