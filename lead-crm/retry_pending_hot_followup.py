#!/usr/bin/env python3
"""Retry pending hot-followup send after cooldown. No-op if not ready."""
import json, datetime, time, sys
from pathlib import Path

sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup')
sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
from google_workspace import gmail_send_reply_fixed, gog_headers

PENDING = Path('lead-crm/hot_followup_reply_17ae7d5ca039b58a.json')
LOG = Path('lead-crm/pipeline_log.json')

def now_iso():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()

def append_log(entry):
    data=[]
    if LOG.exists():
        try:
            data=json.loads(LOG.read_text())
            if not isinstance(data,list):
                data=[data]
        except Exception:
            pass
    data.append(entry)
    if len(data)>2000:
        data=data[-2000:]
    LOG.write_text(json.dumps(data, ensure_ascii=False, indent=2))

def load_pending():
    if PENDING.exists():
        try:
            return json.loads(PENDING.read_text())
        except Exception:
            pass
    return {}

def save_pending(obj):
    PENDING.write_text(json.dumps(obj, ensure_ascii=False, indent=2))

def main():
    p=load_pending()
    if not p:
        print(json.dumps({'event':'no_pending','ts':now_iso()}))
        return
    if p.get('status')!='pending_send':
        print(json.dumps({'event':'not_pending','status':p.get('status'),'ts':now_iso()}))
        return
    cooldown_until=p.get('cooldown_until')
    if cooldown_until:
        try:
            until=datetime.datetime.fromisoformat(cooldown_until.replace('Z','+00:00'))
            if datetime.datetime.now(datetime.timezone.utc) < until:
                print(json.dumps({'event':'cooldown_active','until':cooldown_until,'ts':now_iso()}))
                return
        except Exception:
            pass
    # attempt send
    time.sleep(2)
    res=gmail_send_reply_fixed(p['thread_id'], p['subject'], p['body'], p['to'])
    if res.get('success'):
        p['status']='sent'
        p['sent_at']=now_iso()
        p['message_id']=res.get('message_id')
        save_pending(p)
        append_log({'ts':now_iso(),'event':'hot_followup_sent','thread_id':p.get('thread_id'),'to':p.get('to'),'message_id':res.get('message_id')})
        print(json.dumps({'event':'sent','message_id':res.get('message_id')}))
    else:
        err=res.get('error','')
        p['fail_count']=int(p.get('fail_count',0))+1
        p['last_error']=err
        p['last_attempt']=now_iso()
        if '429' in str(err):
            p['cooldown_until']=(datetime.datetime.now(datetime.timezone.utc)+datetime.timedelta(minutes=5)).isoformat().replace('+00:00','Z')
        save_pending(p)
        append_log({'ts':now_iso(),'event':'hot_followup_failed','error':err,'fail_count':p.get('fail_count')})
        print(json.dumps({'event':'failed','error':err,'fail_count':p.get('fail_count')}))

if __name__=='__main__':
    main()
