#!/usr/bin/env python3
"""Minimal autonomous outreach worker: discover leads, draft replies, update dedup."""
import sys, json, time, re
from pathlib import Path
REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
if not REPO.exists():
    REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO))
from commands.google_workspace import gog_headers, gmail_search, gmail_get

DEDUP_DIR = REPO / 'outreach_monitor' / 'processed'
DEDUP_DIR.mkdir(parents=True, exist_ok=True)
LEDGER = DEDUP_DIR / 'sent_ledger.jsonl'
STATE = DEDUP_DIR / 'global_dedup_state.json'
REPORT = DEDUP_DIR / 'monitor_report.jsonl'
FORBIDDEN_DOMAIN_SUBSTRINGS = ('github.com','hcl.com','zendesk.com','calendly.com','datadog','mercadobitcoin','suzano.com.br','airbnb.com','booking.com','vrbo.com','expedia.com','servi.','manag.','start.','legalys.com.pa','newfold.com')
FORBIDDEN_ADDR_PREFIXES = ('no-reply','noreply','mailer-daemon','postmaster','notifications@github.com','support@','press@','info@','sales@','team@','hello@','hi@','marketing@','commercial@')
SIG_LINES = "\n\nBest,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com\nFree services/tools: https://ziontechgroup.com/tools/\nCalendly: https://calendly.com/kleber-ziontechgroup\nMeet: https://meet.google.com/ouu-khao-kuy"

def _forbidden(addr):
    a=(addr or '').lower()
    if not a or '@' not in a or a.endswith('@ziontechgroup.com'):
        return True
    for b in FORBIDDEN_DOMAIN_SUBSTRINGS:
        if b in a:
            return True
    for b in FORBIDDEN_ADDR_PREFIXES:
        if a.startswith(b) or a.split('@')[0].startswith(b):
            return True
    return False

def _load_json(path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default

def _append(path, obj):
    with path.open('a', encoding='utf-8') as f:
        f.write(json.dumps(obj, ensure_ascii=False) + '\n')

def _recent_send(within_seconds=24*3600):
    entries=[]
    if LEDGER.exists():
        try:
            for line in LEDGER.read_text(encoding='utf-8', errors='ignore').splitlines():
                line=line.strip()
                if not line:
                    continue
                try:
                    entries.append(json.loads(line))
                except Exception:
                    continue
        except Exception:
            pass
    now=int(time.time())
    return any((now - int(e.get('ts',0))) < within_seconds for e in entries[-200:])

def discover():
    queries=[
        'subject:"AI" OR subject:"automation" OR subject:"IT support" OR subject:"cybersecurity" in:anywhere newer_than:7d',
        'subject:"partnership" OR subject:"opportunity" OR subject:"proposal" in:anywhere newer_than:14d',
        'subject:"follow up" OR subject:"next project" OR subject:" collaborating" in:anywhere newer_than:21d',
    ]
    seen=set(); hits=[]
    for q in queries:
        try:
            gog_headers()
            msgs=gmail_search(q, limit=20)
        except Exception:
            continue
        for m in msgs or []:
            mid=m.get('id'); tid=m.get('threadId')
            if not mid or mid in seen:
                continue
            seen.add(mid)
            try:
                full=gmail_get(mid)
            except Exception:
                continue
            hdrs={h['name']: h['value'] for h in full.get('payload',{}).get('headers',[])}
            frm=hdrs.get('From',''); subj=hdrs.get('Subject',''); date=hdrs.get('Date','')
            if not frm or '@' not in frm:
                continue
            contact=frm.split('<')[-1].strip(' >') if '<' in frm else frm.strip()
            if _forbidden(contact):
                continue
            snippet=(full.get('snippet') or '')[:220]
            hits.append({'id': full.get('id'),'threadId': tid or full.get('threadId'),'from': contact,'subject': subj,'date': date,'snippet': snippet})
    return hits

def draft_reply(contact, subject, snippet):
    lang='en'
    if re.search(r'obrigado|oportunidade|projeto|serviços|ferramentas|abraça|olá', (snippet or subject).lower()):
        lang='pt'
    if re.search(r'gracias|oportunidad|proyecto|servicios|herramientas|saludos', (snippet or subject).lower()):
        lang='es'
    greeting='Hi'
    if lang=='pt':
        greeting='Olá'
    if lang=='es':
        greeting='Hola'
    name=contact.split('@')[0].split('.')[0].replace('_',' ').title() or contact
    body=(
        f"{greeting} {name},\n\n"
        "Thanks for reaching out. Zion Tech Group can help with AI, cybersecurity, infrastructure, and managed IT support.\n"
        "Explore our free services/tools: https://ziontechgroup.com/tools/\n"
        "If useful, let’s book a short consult: https://calendly.com/kleber-ziontechgroup or https://meet.google.com/ouu-khao-kuy\n"
        + SIG_LINES
    )
    return body, lang

def main():
    out={'discovered':0,'drafted':0,'skipped':0,'errors':0,'ts':int(time.time()),'event':'autonomous_outreach'}
    try:
        gog_headers()
    except Exception as e:
        out['error']=repr(e)
        print(json.dumps(out, ensure_ascii=False))
        return
    hits=discover(); out['discovered']=len(hits)
    for h in hits:
        contact=h.get('from',''); subject=h.get('subject',''); tid=h.get('threadId'); mid=h.get('id')
        if _forbidden(contact):
            out['skipped']+=1; continue
        key=(contact+':'+(subject or '')).lower()
        state=_load_json(STATE, {})
        seen_ids=state.get('seen_message_ids',{}) if isinstance(state, dict) else {}
        if key in seen_ids or mid in seen_ids:
            out['skipped']+=1; continue
        try:
            body,lang=draft_reply(contact, subject, h.get('snippet',''))
            draft={
                'to': contact,
                'subject': subject or 'Following up',
                'draft': body,
                'lang': lang,
                'thread_id': tid,
                'message_id': mid,
                'dedup_key': key,
                'source': 'autonomous_outreach_worker',
                'ts': int(time.time()),
            }
            out_path=DEDUP_DIR / f"autonomous_draft_{int(time.time())}_{abs(hash(key))%10000}.json"
            out_path.write_text(json.dumps(draft, ensure_ascii=False), encoding='utf-8')
            seen_ids[key]=int(time.time()); seen_ids[mid]=int(time.time())
            state['seen_message_ids']=seen_ids
            STATE.write_text(json.dumps(state, ensure_ascii=False), encoding='utf-8')
            _append(LEDGER, {'to': contact,'subject': draft['subject'],'thread_id': tid,'message_id': mid,'ts': int(time.time()),'reason':'autonomous_draft_only'})
            out['drafted']+=1
        except Exception:
            out['errors']+=1
    _append(REPORT, out)
    print(json.dumps(out, ensure_ascii=False))
if __name__=='__main__':
    main()
