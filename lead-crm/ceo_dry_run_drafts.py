#!/usr/bin/env python3
"""
Dry-run CEO draft generator for hot follow-up threads.
Uses the same thread-context logic as hot_followup_responder.py,
but writes LD-ready CEO reply drafts to JSON without requiring live Gmail auth.
"""
import sys, json, datetime
from pathlib import Path

REPO = Path('/Users/miami2/zion.app')
LEAD_DIR = REPO / 'lead-crm'
OUTPUT = LEAD_DIR / 'ceo_dry_run_drafts.json'

sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / 'commands'))

try:
    from hot_followup_responder import _call_llm, generate_ceo_reply, _now_iso
except Exception:
    def _call_llm(messages, temperature=0.35, max_tokens=520):
        return {'content': '', 'provider': 'none', 'model': 'none'}
    def generate_ceo_reply(from_email, subject, body, thread_context=None):
        return ('Obrigado pela oportunidade...', 'deterministic-template-v1')
    def _now_iso():
        return datetime.datetime.now(datetime.timezone.utc).isoformat()

PROMPTS = [
    {
        'thread_id': 'dry-run-thread-1',
        'to': 'cliente@empresa.com',
        'subject': 'Parceria em IA e automação',
        'from_email': 'cliente@empresa.com',
        'body': 'Olá Kleber, gostaria de retomar a ideia de um copiloto IA para atendimento e automação de relatórios operacionais. Podemos avançar?',
        'thread_context': {'latest_from': 'cliente@empresa.com', 'latest_body': 'Gostaria de retomar a ideia de um copiloto IA para atendimento e automação de relatórios operacionais...'}
    },
    {
        'thread_id': 'dry-run-thread-2',
        'to': 'cliente@empresa.com',
        'subject': 'Re: BI Dashboard — próxima fase',
        'from_email': 'cliente@empresa.com',
        'body': 'Queremos evoluir o dashboard atual para alertas inteligentes e previsão de métricas com IA.',
        'thread_context': {'latest_from': 'cliente@empresa.com', 'latest_body': 'Queremos evoluir o dashboard atual para alertas inteligentes e previsão de métricas com IA.'}
    },
    {
        'thread_id': 'dry-run-thread-3',
        'to': 'cliente@empresa.com',
        'subject': 'Cloud Migration Assessment',
        'from_email': 'cliente@empresa.com',
        'body': 'Gostaríamos de seguir com uma migração faseada e otimização de custos com FinOps automático.',
        'thread_context': {'latest_from': 'cliente@empresa.com', 'latest_body': 'Gostaríamos de seguir com uma migração faseada e otimização de custos com FinOps automático.'}
    },
    {
        'thread_id': 'dry-run-thread-4',
        'to': 'lead@startup.com',
        'subject': 'Re: Automação com IA',
        'from_email': 'lead@startup.com',
        'body': 'Temos interesse em automação de cobrança e assistente de vendas com IA.',
        'thread_context': {'latest_from': 'lead@startup.com', 'latest_body': 'Temos interesse em automação de cobrança e assistente de vendas com IA.'}
    },
]

def main():
    drafts = []
    for p in PROMPTS:
        try:
            reply, provider = generate_ceo_reply(p['from_email'], p['subject'], p['body'], p['thread_context'])
            drafts.append({
                'thread_id': p['thread_id'],
                'to': p['to'],
                'subject': 'Re: ' + p['subject'] if not p['subject'].startswith('Re:') else p['subject'],
                'reply': reply,
                'llm_provider': provider,
                'tone': 'friendly-professional',
                'cta': 'calendly+site+free-tools'
            })
        except Exception as e:
            drafts.append({'thread_id': p['thread_id'], 'to': p['to'], 'error': str(e)})
    payload = {
        'createdAt': _now_iso(),
        'mode': 'dry_run_ceo_drafts',
        'drafts': drafts
    }
    OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'status': 'ok', 'output': str(OUTPUT), 'drafts': len(drafts)}, ensure_ascii=False))

if __name__ == '__main__':
    main()
