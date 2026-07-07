import sys, base64, json
sys.path.insert(0, r'C:\Users\Zion\AppData\Local\hermes\skills\productivity\google-workspace\scripts')
from google_api import build_service

service = build_service('gmail', 'v1')

from_email = 'kleber@ziontechgroup.com'
to_email = 'mweiss@procurri.com'
subject = 'Re: Dell servers South America'
# current in:sent last message thread
thread_id = '17b0c52dcebfda15'

text = """Hi Matt,

I hope you’re doing well. Looking back, the Procurri / Zion collaboration on Dell servers across South America was a strong fit, and I’m grateful for the opportunity we had there.

Today Zion Tech Group is expanding into AI-enabled infrastructure and managed operations — and I see a natural extension to what we built before:

1) Predictive maintenance and inventory automation for Dell/IBM hardware fleets in Brazil and Colombia, reducing downtime and manual scheduling.
2) Automated quote/order routing with AI triage, so Procurri can handle higher request volumes without extra headcount.
3) A shared pilot model: Zion provides a free AI readiness check, then we co-build a commercial rollout with revenue share upside for Procurri.

If any of this aligns with what you’re evaluating, I’d welcome a 20-minute strategy call. Use my Calendly here:
https://calendly.com/kleber-ziontechgroup

In the meantime, you can explore our new AI services and free tools here:
https://ziontechgroup.com

Thanks again for the past project — looking forward to building something new together.

Best,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
https://ziontechgroup.com
"""

raw = base64.urlsafe_b64encode(
    f"From: {from_email}\r\nTo: {to_email}\r\nSubject: {subject}\r\nReferences: <{thread_id}>\r\nIn-Reply-To: <{thread_id}>\r\nContent-Type: text/plain; charset=utf-8\r\n\r\n{text}".encode('utf-8')
).decode('utf-8')

message = { 'raw': raw, 'threadId': thread_id }
sent = service.users().messages().send(userId='me', body=message).execute()
print('SENT', json.dumps({'id': sent.get('id'), 'threadId': sent.get('threadId')}, ensure_ascii=False))
