import json, time, sys
from pathlib import Path
sys.path.insert(0, '.')
from commands.google_workspace import gmail_send_new

NOW = time.strftime('%Y%m%dT%H%M%SZ', time.gmtime())
LEADS = [
    {'name': 'ChannelPro Network', 'email': 'tech@fortray.com', 'company': 'Fortray', 'topic': 'email security and deliverability for MSPs'},
    {'name': 'The Growth Syndicate', 'email': 'rfp@thegrowthsyndicate.com', 'company': 'The Growth Syndicate', 'topic': 'MSP marketing and lead generation'},
    {'name': 'IT Services Delaware', 'email': 'contact@itservicesdelaware.com', 'company': 'IT Services Delaware', 'topic': 'managed IT support and email deliverability'},
    {'name': 'Discover Cyber Solutions', 'email': 'info@discovercybersolutions.com', 'company': 'Cyber Solutions Inc', 'topic': 'managed IT services and cybersecurity for small business'},
    {'name': 'SkyTerra', 'email': 'info@skyterratech.com', 'company': 'SkyTerra', 'topic': 'small business cybersecurity and MSP services'},
]
SIGNATURE = """\n\n---\nKleber Garcia Alcatrao\nZion Tech Group\n📱 +1 302 464 0950\n✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709\n🌐 https://ziontechgroup.com\n📅 https://calendly.com/kleber-ziontechgroup\n"""
OUT = Path('/data/data/com.termux/files/home/zion-support.github.io/outreach_send_results.json')
results=[]
for i,lead in enumerate(LEADS,1):
    subject=f"Partnership insight: {lead['topic']} for {lead['company']}"
    body=f"Hi {lead['name']},\n\nI’m Kleber with Zion Tech Group. I came across your work around {lead['topic']} and saw a clear overlap with what we’re building for MSPs and IT services firms.\n\nA few relevant capabilities:\n- Email deliverability & reputation management for MSP mail streams\n- IT lead-generation systems and outbound CRM pipelines\n- Email marketing automation, security alert deliverability, and M365/cloud migrations\n- Managed IT support, backup/DR, Wi-Fi hardening, and hosting/maintenance\n\nIf useful, I’m happy to share a short playbook on improving email security visibility or MSP lead pipeline reliability — no pitch call required.\n\nIf you want to talk, I keep slots open here: https://calendly.com/kleber-ziontechgroup\n"+SIGNATURE
    print(f"[{i}/{len(LEADS)}] Sending -> {lead['email']}")
    try:
        res=gmail_send_new(to_addr=lead['email'], subject=subject, body=body)
        results.append({'email':lead['email'],'ok':bool(res.get('success')),'id':res.get('message_id'),'err':res.get('error') if not res.get('success') else None})
        print(' ->','OK' if res.get('success') else 'FAIL',res.get('message_id') or res.get('error'))
    except Exception as e:
        results.append({'email':lead['email'],'ok':False,'err':str(e)})
        print(' ->EXC',e)
    if i < len(LEADS): time.sleep(7)
OUT.write_text(json.dumps({'runAt':NOW,'results':results}, indent=2))
print('RESULTS', json.dumps(results, indent=2))
