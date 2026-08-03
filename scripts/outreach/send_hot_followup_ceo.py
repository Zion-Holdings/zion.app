#!/usr/bin/env python3
"""One-shot CEO hot-follow-up reply sender."""
import sys, json
sys.path.insert(0, r'C:\Users\Zion\tmp\zion-clone-test2\commands')
from google_workspace import gmail_send_reply_fixed, load_gog_tokens
from pathlib import Path

LEDGER = Path(r'C:\Users\Zion\tmp\zion-clone-test2\outreach_monitor\processed\sent_threads.json')

def load_ledger():
    if LEDGER.exists():
        return json.loads(LEDGER.read_text(encoding='utf-8'))
    return []

def save_ledger(entries):
    LEDGER.parent.mkdir(parents=True, exist_ok=True)
    LEDGER.write_text(json.dumps(entries, indent=2, ensure_ascii=False), encoding='utf-8')

def send_reply(thread_id: str, message_id: str, original_subject: str, original_sender: str, body: str):
    tokens = load_gog_tokens()
    result = gmail_send_reply_fixed(thread_id, original_subject, body, original_sender)
    return result

if __name__ == '__main__':
    thread_id = '19f91d2b29ad24fd'
    message_id = '19fc2b064400b75b'
    original_subject = 'Re: Parceria Zion Tech Group — operações e eficiência para TI'
    original_sender = 'thiago@germanbusiness.com.br'
    
    body = """Thiago, obrigado pelo retorno! Fico feliz que tenha interesse em explorarmos uma parceria.

Para eu enviar uma proposta precisa, preciso de alguns pontos rápidos:
1) Qual o faturamento anual aproximado da German Business e quantos funcionários?
2) Quais áreas de TI/IA vocês querem priorizar nos próximos 6 meses — automação, suporte, segurança ou dados?
3) Vocês já usam alguma ferramenta de CRM ou ERP hoje?

A partir daí eu preparo um plano com 2 ideias concretas:
1) Um piloto de automação com IA em um processo repetitivo de vocês, com ROI mensurável em 30 dias.
2) Um programa de suporte TI 24/7 com SLA brasileiro e custo previsível, sem surpresas na fatura.

Vamos marcar uma call para alinharmos? https://calendly.com/kleber-ziontechgroup ou Google Meet: https://meet.google.com/ouu-khao-kuy

Conheça nossos serviços: https://ziontechgroup.com

Abs,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
https://ziontechgroup.com"""
    
    ledger = load_ledger()
    if any(e.get('thread_id') == thread_id for e in ledger):
        print(f'Thread {thread_id} already in ledger. Skipping.')
        sys.exit(0)
    
    print(f'Sending reply to {original_sender} in thread {thread_id}...')
    result = send_reply(thread_id, message_id, original_subject, original_sender, body)
    print(f'Result: {result}')
    
    if result and result.get('message_id'):
        ledger.append({
            'thread_id': thread_id,
            'message_id': message_id,
            'to': original_sender,
            'subject': original_subject,
            'sent_at': __import__('datetime').datetime.now().isoformat(),
            'result': result
        })
        save_ledger(ledger)
        print(f'Updated ledger with {len(ledger)} entries.')
    else:
        print('Send failed, not updating ledger.')
