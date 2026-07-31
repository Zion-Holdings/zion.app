#!/usr/bin/env python3
"""
Calendly-Integrated Email Outreach Generator v1.0

Generates personalized outreach templates with Calendly booking links.
Saves templates to JSON file for use in outreach campaigns.

Usage: python3 calendly_outreach_generator.py --once
"""

import sys
import json
import argparse
import logging
import random
from pathlib import Path
from datetime import datetime

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = BASE_DIR / 'zion-support.github.io' / 'app' / 'data' / 'latest_outreach.json'
OUTPUT_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'calendly_outreach_templates.json'
CALADLY_URI = 'https://calendly.com/kleber-ziontechgroup/consultation'
ZION_WEBSITE = 'https://ziontechgroup.com'

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)-15s [%(levelname)-8s] %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(BASE_DIR / 'outreach_monitor' / 'processed' / 'calendly_outreach_generator.log')
    ]
)
logger = logging.getLogger('calendly-outreach-generator')

# Outreach templates with Calendly integration
OUTREACH_TEMPLATES = [
    {
        "subject": "Proposta de parceria tecnológica com IA e automação",
        "body_template": "Olá {name}, tudo bem? Vejo uma oportunidade de colaboração entre {company} e Zion Tech Group em IA aplicada e automação de processos. Podemos explorar um piloto rápido com ferramentas gratuitas para validar resultados em 2 semanas. Agende aqui: {calendly}",
        "tags": ["ia", "automação", "parceria", "piloto"]
    },
    {
        "subject": "Otimização de custos operacionais com IA",
        "body_template": "Oi {name}, notei que {company} pode beneficiar-se de automação inteligente e otimização de processos. Nossa equipe oferece análise gratuita e demonstração prática. Conheça mais: {website} | Agende: {calendly}",
        "tags": ["otimização", "custos", "análise", "demo"]
    },
    {
        "subject": "Atualização de segurança e governança com IA",
        "body_template": "Prezado(a) {name}, a segurança da informação e governança são críticas para {company}. Ofereço um diagnóstico rápido com recomendações baseadas em IA. Agende um consultor gratuito: {calendly}",
        "tags": ["segurança", "governança", "diagnóstico", "IA"]
    },
    {
        "subject": "Sua equipe precisa de suporte técnico com IA?",
        "body_template": "Olá {name}, sua equipe enfrenta desafios de suporte técnico ou escalabilidade? A Zion Tech Group oferece automação de suporte com IA, reduzindo custos e aumentando eficiência. Agende uma conversa: {calendly}",
        "tags": ["suporte", "escalabilidade", "automação", "custos"]
    },
    {
        "subject": "Pipeline de vendas mais eficiente com IA",
        "body_template": "Oi {name}, interessante ver o trabalho da {company}. Podemos ajudar a otimizar seu pipeline de vendas com IA preditiva e automação de follow-up. Ferramentas gratuitas disponíveis. Conheça: {website} | Agende: {calendly}",
        "tags": ["pipeline", "vendas", "preditiva", "follow-up"]
    },
    {
        "subject": "Integração de serviços com mínima complexidade",
        "body_template": "Olá {name}, a integração de novos serviços pode ser complexa. Nossa abordagem modular e documentação completa reduz o tempo de implementação em 60%. Quer ver como? {calendly}",
        "tags": ["integração", "implementação", "documentação", "modular"]
    },
    {
        "subject": "Resposta rápida para demandas de TI",
        "body_template": "Prezado(a) {name}, em ambientes de alta demanda, a velocidade de resposta é essencial. Nossa solução de observabilidade e automação reduz incidentes em até 70%. Agende um teste gratuito: {calendly}",
        "tags": ["observabilidade", "incidentes", "redução", "teste"]
    },
    {
        "subject": "Transformação digital com ferramentas gratuitas",
        "body_template": "Oi {name}, a transformação digital não precisa ser cara. Ofereço ferramentas gratuitas de análise de processos e recomendações personalizadas para {company}. Vamos conversar? {calendly}",
        "tags": ["transformação", "digital", "gratuito", "análise"]
    },
    {
        "subject": "Sua empresa e IA: oportunidade de liderança",
        "body_template": "Olá {name}, a adoção de IA pode ser sua vantagem competitiva. Ofereço uma avaliação inicial gratuita para identificar oportunidades em {company}. Conheça nossos cases: {website} | Agende: {calendly}",
        "tags": ["liderança", "competitividade", "avaliação", "cases"]
    },
    {
        "subject": "Próximos passos estratégicos para {company}",
        "body_template": "Prezado(a) {name}, com o crescimento da {company}, é importante ter uma estratégia clara de tecnologia. Posso ajudar com diagnóstico gratuito e roadmap personalizado. Agende 15 minutos: {calendly}",
        "tags": ["estratégia", "roadmap", "diagnóstico", "gratuito"]
    }
]

def load_services():
    """Load services from the data file."""
    if SERVICES_FILE.exists():
        try:
            with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, list):
                    return data
                elif isinstance(data, dict) and 'services' in data:
                    return data['services']
                else:
                    return []
        except Exception as e:
            logger.warning(f"Could not load services file: {e}")
            return []
    return []

def generate_outreach_templates(count=10):
    """Generate personalized outreach templates."""
    templates = []
    
    # Load services for context
    services = load_services()
    logger.info(f"[ℹ️] Found {len(services)} services")
    
    # Generate templates
    for i in range(min(count, len(OUTREACH_TEMPLATES))):
        template = OUTREACH_TEMPLATES[i].copy()
        
        # Create template entry with Calendly link
        template_entry = {
            "subject": template["subject"],
            "body": template["body_template"].format(
                name="{name}",
                company="{company}",
                calendly=CALADLY_URI,
                website=ZION_WEBSITE
            ),
            "calendly": CALADLY_URI,
            "website": ZION_WEBSITE,
            "tags": template["tags"],
            "generated_at": datetime.utcnow().isoformat(),
            "template_id": f"cal-{i+1:03d}"
        }
        templates.append(template_entry)
    
    return templates

def save_templates(templates):
    """Save templates to JSON file."""
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    output_data = {
        "generated_at": datetime.utcnow().isoformat(),
        "total_templates": len(templates),
        "calendly_link": CALADLY_URI,
        "templates": templates
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
    
    logger.info(f"[💾] Saved {len(templates)} templates to {OUTPUT_FILE}")

def main():
    parser = argparse.ArgumentParser(description='Calendly-Integrated Email Outreach Generator')
    parser.add_argument('--once', action='store_true', help='Run once and exit')
    parser.add_argument('--count', type=int, default=10, help='Number of templates to generate')
    args = parser.parse_args()
    
    logger.info("=" * 60)
    logger.info("📧 CALENDLY-INTEGRATED EMAIL OUTREACH GENERATOR v1.0")
    logger.info("=" * 60)
    
    templates = generate_outreach_templates(args.count)
    save_templates(templates)
    
    logger.info(f"[🏁] Complete: {len(templates)} outreach templates generated")
    logger.info(f"[🔗] Calendly: {CALADLY_URI}")

if __name__ == '__main__':
    main()