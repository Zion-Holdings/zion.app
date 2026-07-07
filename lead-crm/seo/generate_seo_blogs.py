import json
from pathlib import Path

SEO_DIR = Path('/Users/miami2/zion.app/lead-crm/seo')
SEO_DIR.mkdir(parents=True, exist_ok=True)

BLOGS = [
    {
        "slug": "zero-trust-na-pratica",
        "title": "Zero-trust na prática: guia para times remotos",
        "content": "# Zero-trust na prática: guia para times remotos\n\n*Zion Tech Group*\n\n## O problema\nTimes remotos exigem acesso seguro sem exposição da rede corporativa.\n\n## Solução\n- Verificação contínua de identidade e dispositivo.\n- Acesso mínimo por aplicação.\n- Micross segmentação e logging centralizado.\n\n## Próximos passos\nAgende um diagnóstico rápido: https://calendly.com/kleber-ziontechgroup\nFerramentas gratuitas: https://ziontechgroup.com\n"
    },
    {
        "slug": "visao-computacional-industria",
        "title": "Visão computacional na indústria: inspeção automática em 5 passos",
        "content": "# Visão computacional na indústria: inspeção automática em 5 passos\n\n*Zion Tech Group*\n\n## Problema\nDefeitos em linha causam retrabalho e custo.\n\n## Solução\n1. Aquisição de imagens.\n2. Pré-processamento.\n3. Detecção de anomalias.\n4. Integração com MES/ERP.\n5. Melhoria contínua.\n\n## Próximos passos\nAgende um diagnóstico rápido: https://calendly.com/kleber-ziontechgroup\nFerramentas gratuitas: https://ziontechgroup.com\n"
    },
    {
        "slug": "automacao-de-sinistros",
        "title": "Automação de sinistros: roadmap para seguradoras",
        "content": "# Automação de sinistros: roadmap para seguradoras\n\n*Zion Tech Group*\n\n## Problema\nProcessos manuais demoram dias e geram frustração.\n\n## Solução\n- Captura automática de documentos.\n- Triagem por IA.\n- Fluxos de aprovação adaptativos.\n- Integração com parceiros.\n\n## Próximos passos\nAgende um diagnóstico rápido: https://calendly.com/kleber-ziontechgroup\nFerramentas gratuitas: https://ziontechgroup.com\n"
    },
    {
        "slug": "bi-preditivo-decisoes-antecipadas",
        "title": "BI preditivo: de relatórios reativos a decisões antecipadas",
        "content": "# BI preditivo: de relatórios reativos a decisões antecipadas\n\n*Zion Tech Group*\n\n## Problema\nDados existem, mas a decisão chega tarde.\n\n## Solução\n- Modelos preditivos simples e explicáveis.\n- Alertas inteligentes.\n- Relatórios executivos automáticos.\n- Governança de métricas.\n\n## Próximos passos\nAgende um diagnóstico rápido: https://calendly.com/kleber-ziontechgroup\nFerramentas gratuitas: https://ziontechgroup.com\n"
    },
    {
        "slug": "migracao-nuvem-checklist-executivo",
        "title": "Migração faseada para nuvem: checklist executivo",
        "content": "# Migração faseada para nuvem: checklist executivo\n\n*Zion Tech Group*\n\n## Problema\nMigrações grandes viram projetos longos e caros.\n\n## Solução\n- Inventário e mapeamento.\n- Workloads candidatos.\n- Piloto com métricas claras.\n- Governança e FinOps.\n\n## Próximos passos\nAgende um diagnóstico rápido: https://calendly.com/kleber-ziontechgroup\nFerramentas gratuitas: https://ziontechgroup.com\n"
    }
]

for blog in BLOGS:
    path = SEO_DIR / f"{blog['slug']}.md"
    path.write_text(blog['content'], encoding='utf-8')

print(json.dumps({"status": "ok", "generated": len(BLOGS), "directory": str(SEO_DIR)}, ensure_ascii=False))
