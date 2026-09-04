import json
from pathlib import Path
from datetime import datetime
from hermes_tools import web_search

# Carregar leads existentes para dedupe
existing_leads = []
try:
    existing_path = Path('/Users/miami2/zion.app/automation/data/zion_leads_free.json')
    if existing_path.exists():
        with open(existing_path, 'r') as f:
            existing_data = json.load(f)
            existing_leads = existing_data.get('leads', [])
            print(f"✓ {len(existing_leads)} leads existentes carregados para dedupe")
except Exception as e:
    print(f"Sem leads existentes: {e}")

existing_domains = set()
for lead in existing_leads:
    site = lead.get('site', lead.get('website', ''))
    if site:
        domain = site.split('/')[2] if '://' in site else site.split('/')[0]
        existing_domains.add(domain.lower())

# Buscar novos leads usando múltiplas fontes gratuitas
new_leads = []

# Fonte 1: Brazilian MSPs e IT services
print("\n🟢 Buscando Brazilian MSPs e IT services...")
try:
    results = web_search("Brazil managed IT services small business cloud migration cybersecurity São Paulo Rio de Janeiro 2025 2026", limit=10)
    for item in results.get('data', {}).get('web', []):
        url = item.get('url', '')
        domain = url.split('/')[2] if '://' in url else url.split('/')[0]
        if domain.lower() not in existing_domains and not any(x in domain for x in ['google', 'linkedin', 'github', 'clutch', 'sam.gov', 'mordorintelligence']):
            if url not in [l.get('site', '') for l in new_leads]:
                new_leads.append({
                    'empresa': item.get('title', '').split(' - ')[0][:80],
                    'site': url,
                    'localidade': 'Brasil',
                    'servico_relevante': 'Cloud Migration, Managed IT, Cybersecurity',
                    'motivo': f"Identificado via web search: {item.get('description', '')[:100]}",
                    'fonte': 'web_search - Brazilian MSPs',
                    'contato_proventivo': f'contato@{domain}'
                })
                existing_domains.add(domain.lower())
except Exception as e:
    print(f"  Erro na busca: {e}")

# Fonte 2: US MSPs (cities que ainda não cobrimos - Dallas, Phoenix, Denver, Portland, etc.)
print("\n🟢 Buscando US MSPs (novas cidades)...")
try:
    results = web_search("managed IT services small business Dallas Phoenix Denver Portland cybersecurity cloud 2026 -atlanta -chicago -newyork", limit=10)
    for item in results.get('data', {}).get('web', []):
        url = item.get('url', '')
        domain = url.split('/')[2] if '://' in url else url.split('/')[0]
        if domain.lower() not in existing_domains and not any(x in domain for x in ['google', 'linkedin', 'github', 'clutch', 'sam.gov', 'mordorintelligence', 'cloudtango', 'mspcompanies', 'designrush', 'petronellatech', 'gocorptech', 'jumpfactor']):
            if url not in [l.get('site', '') for l in new_leads]:
                new_leads.append({
                    'empresa': item.get('title', '').split(' - ')[0][:80],
                    'site': url,
                    'localidade': 'USA',
                    'servico_relevante': 'Managed IT, Cloud, Cybersecurity',
                    'motivo': f"Identificado via web search: {item.get('description', '')[:100]}",
                    'fonte': 'web_search - US MSPs (novas cidades)',
                    'contato_proventivo': f'contato@{domain}'
                })
                existing_domains.add(domain.lower())
except Exception as e:
    print(f"  Erro na busca: {e}")

# Fonte 3: Ferramentas grátis de email discovery (Hunter, Apollo, Snov - free tiers)
print("\n🟢 Buscando startups AI/tech financiadas recentemente...")
try:
    results = web_search("Brazil AI startup funding Series A B 2025 2026 cloud automation cybersecurity -enter -darwin -getenter -getdarwin -kahuna -apptunix", limit=10)
    for item in results.get('data', {}).get('web', []):
        url = item.get('url', '')
        domain = url.split('/')[2] if '://' in url else url.split('/')[0]
        if domain.lower() not in existing_domains and not any(x in domain for x in ['google', 'linkedin', 'github', 'clutch', 'sam.gov', 'mordorintelligence', 'news.crunchbase', 'crunchbase', 'avixa']):
            if url not in [l.get('site', '') for l in new_leads]:
                new_leads.append({
                    'empresa': item.get('title', '').split(' - ')[0][:80],
                    'site': url,
                    'localidade': 'Brasil',
                    'servico_relevante': 'AI Automation, Cloud, Cybersecurity',
                    'motivo': f"Identificado via web search: {item.get('description', '')[:100]}",
                    'fonte': 'web_search - AI startups Brazil',
                    'contato_proventivo': f'contato@{domain}'
                })
                existing_domains.add(domain.lower())
except Exception as e:
    print(f"  Erro na busca: {e}")

# Fonte 4: SAM.gov - novos RFPs/BPAs
print("\n🟢 Buscando novos RFPs/BPAs no SAM.gov...")
try:
    results = web_search("site:sam.gov IT services cloud migration cybersecurity sources sought 2026", limit=10)
    for item in results.get('data', {}).get('web', []):
        url = item.get('url', '')
        if 'sam.gov' in url and url not in [l.get('site', '') for l in new_leads]:
            new_leads.append({
                'empresa': item.get('title', '').split(' - ')[0][:80],
                'site': url,
                'localidade': 'USA (Federal)',
                'servico_relevante': 'IT Services, Cybersecurity, Cloud Migration',
                'motivo': f"Identificado via SAM.gov: {item.get('description', '')[:100]}",
                'fonte': 'web_search - SAM.gov RFPs',
                'contato_proventivo': 'contato@sam.gov'
            })
except Exception as e:
    print(f"  Erro na busca: {e}")

# Fonte 5: White-label agencies (para parcerias)
print("\n🟢 Buscando white-label agencies para parcerias...")
try:
    results = web_search("white label software development agency USA 2026 AI services partner -xovak -krishang -doodleweb -allusivedigital -taskip", limit=10)
    for item in results.get('data', {}).get('web', []):
        url = item.get('url', '')
        domain = url.split('/')[2] if '://' in url else url.split('/')[0]
        if domain.lower() not in existing_domains and not any(x in domain for x in ['google', 'linkedin', 'github', 'clutch', 'sam.gov', 'mordorintelligence', 'reddit', 'facebook']):
            if url not in [l.get('site', '') for l in new_leads]:
                new_leads.append({
                    'empresa': item.get('title', '').split(' - ')[0][:80],
                    'site': url,
                    'localidade': 'USA/Global',
                    'servico_relevante': 'White-label AI/IT services partnership',
                    'motivo': f"Identificado via web search: {item.get('description', '')[:100]}",
                    'fonte': 'web_search - White-label agencies',
                    'contato_proventivo': f'contato@{domain}'
                })
                existing_domains.add(domain.lower())
except Exception as e:
    print(f"  Erro na busca: {e}")

# Fonte 6: GitHub - organizações com repos de infra/automation/security
print("\n🟢 Buscando GitHub orgs com infra/automation repos...")
try:
    results = web_search("github.com terraform aws kubernetes ansible organization automation infrastructure 2026", limit=10)
    for item in results.get('data', {}).get('web', []):
        url = item.get('url', '')
        domain = url.split('/')[2] if '://' in url else url.split('/')[0]
        if 'github.com' in domain and domain not in existing_domains and not any(x in domain for x in ['google', 'linkedin', 'github.com/github', 'github.com/settings', 'github.com/explore', 'github.com/trending']):
            if url not in [l.get('site', '') for l in new_leads]:
                new_leads.append({
                    'empresa': f"GitHub Org - {url.split('/')[3] if len(url.split('/')) > 3 else 'org'}",
                    'site': url,
                    'localidade': 'Global (GitHub)',
                    'servico_relevante': 'DevOps, Infrastructure as Code, Cloud',
                    'motivo': f"Identificado via GitHub: organizacao com repos de infra/automacao",
                    'fonte': 'web_search - GitHub orgs',
                    'contato_proventivo': f'contact@{domain}'
                })
                existing_domains.add(domain.lower())
except Exception as e:
    print(f"  Erro na busca: {e}")

# Estatísticas
print(f"\n{'='*60}")
print(f"✅ NOVO BATCH DE LEADS CRIADO")
print(f"{'='*60}")
print(f"Total de novos leads: {len(new_leads)}")

# Estatísticas por fonte
from collections import Counter
fontes = Counter([l['fonte'] for l in new_leads])
print(f"\nPor fonte:")
for fonte, count in fontes.most_common():
    print(f"  - {fonte}: {count}")

# Salvar arquivo
output_path = Path('/Users/miami2/zion.app/automation/data/new-leads-batch.json')
output_data = {
    'generated_at': datetime.utcnow().isoformat() + 'Z',
    'generated_by': 'lead-discovery-action-2026-09-01',
    'total_leads': len(new_leads),
    'sources': list(fontes.keys()),
    'leads': new_leads
}

output_path.parent.mkdir(parents=True, exist_ok=True)
with open(output_path, 'w') as f:
    json.dump(output_data, f, indent=2, ensure_ascii=False)

print(f"\n✅ Arquivo salvo: {output_path}")
print(f"   Tamanho: {output_path.stat().st_size} bytes")

# Listar todos os leads
print(f"\n📋 LISTA COMPLETA DE LEADS ({len(new_leads)}):")
for i, lead in enumerate(new_leads, 1):
    print(f"\n  {i:2d}. {lead['empresa']}")
    print(f"     Site: {lead['site']}")
    print(f"     Local: {lead['localidade']}")
    print(f"     Serviço: {lead['servico_relevante']}")
    print(f"     Contato: {lead['contato_proventivo']}")
    print(f"     Fonte: {lead['fonte']}")
