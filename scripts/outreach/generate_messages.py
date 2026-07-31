"""
Generate outreach messages for IT Field Engineers in Taubaté
"""
import json
from pathlib import Path

INPUT_FILE = Path("/Users/klebergarciaalcatrao/outreach_monitor/processed/osint_candidates.jsonl")
OUTPUT_FILE = Path("/Users/klebergarciaalcatrao/outreach_monitor/processed/outreach_messages.jsonl")

def generate_messages():
    """Generate WhatsApp and Email messages for each candidate"""
    
    # Load candidates
    candidates = []
    if INPUT_FILE.exists():
        with INPUT_FILE.open('r', encoding='utf-8') as f:
            for line in f:
                if line.strip():
                    candidates.append(json.loads(line))
    
    messages = []
    
    # Message templates
    whatsapp_template = """Olá {name}! Sou o Kleber, CEO da Zion Tech Group. Estou com uma oportunidade de trabalho para técnicos de campo em Taubaté - atendimento presencial com demandas de infraestrutura (Cisco, Mikrotik, cabeamento, racks). Você está disponível para trabalhar com PJ ou avulso? Podemos conversar? Calendly: https://calendly.com/kleber-ziontechgroup"""

    email_subject = "[Oportunidade IT Field] Demanda de Suporte de Campo em Taubaté / SP"
    
    email_body_template = """Prezado(a) {name},

Encontrei seu perfil e fiquei em contato pois trabalhamos com contratação de técnicos de campo para atendimento presencial em Taubaté e região do Vale do Paraíba.

Sobreposições disponíveis:
- Troubleshooting de redes (Cisco, Mikrotik)
- Reparos e manutenção de hardware
- Instalação de cabos estruturados e racks
- Suporte remoto e presencial

Buscamos profissionais com disponibilidade para atendimento presencial com modelo PJ ou avulso. Caso esteja interessado(a), envie seu CV/portfolio e informe sua planilha de horas/chamado.

Atenciosamente,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
https://ziontechgroup.com

Calendly: https://calendly.com/kleber-ziontechgroup"""

    for candidate in candidates:
        name = candidate.get('name', 'Amigo')
        
        # WhatsApp message (under 100 words)
        whatsapp_msg = whatsapp_template.format(name=name)
        
        # Email message
        email_body = email_body_template.format(name=name)
        
        message_data = {
            'candidate': candidate,
            'messages': {
                'whatsapp': {
                    'content': whatsapp_msg,
                    'word_count': len(whatsapp_msg.split()),
                    'character_count': len(whatsapp_msg)
                },
                'email': {
                    'subject': email_subject,
                    'body': email_body,
                    'word_count': len(email_body.split()),
                    'character_count': len(email_body)
                }
            }
        }
        messages.append(message_data)
    
    # Save messages
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT_FILE.open('w', encoding='utf-8') as f:
        for msg in messages:
            f.write(json.dumps(msg, ensure_ascii=False) + '\n')
    
    return messages


if __name__ == "__main__":
    messages = generate_messages()
    print(f"Generated {len(messages)} outreach message sets")
    print(f"Output saved to: {OUTPUT_FILE}")