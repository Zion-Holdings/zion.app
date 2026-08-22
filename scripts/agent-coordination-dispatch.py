#!/usr/bin/env python3
"""
Zion Agent Growth Dispatch — atualiza a mensagem de coordenação
no zion-telegram-coordination-message.txt com o estado atual.
"""

import json
from pathlib import Path
from datetime import datetime, timezone

REPO = Path("/Users/miami2/zion-support.github.io")
OUTPUT = REPO / "zion-telegram-coordination-message.txt"

def load_json(path):
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return []

def count_blog_posts():
    bp = REPO / "app/data/blogPosts.json"
    posts = load_json(bp)
    return len(posts)

def count_services():
    sd = REPO / "app/data/servicesData.json"
    svcs = load_json(sd)
    return len(svcs)

def count_sitemap():
    sm = REPO / "public/sitemap.xml"
    if sm.exists():
        content = sm.read_text(encoding="utf-8")
        return content.count("<url>")
    return 0

def count_hermes_posts():
    bp = REPO / "app/data/blogPosts.json"
    posts = load_json(bp)
    hermes_slugs = [
        "new-hermes-agent-services-launch",
        "hermes-multi-agent-coordination-protocol",
        "hermes-agent-platform-deep-dive",
        "hermes-agent-platform-open-source",
        "hermes-swarm-protocol-actions",
        "auto-outreach-ai-leads",
        "hermes-agent-platform-launch",
        "lead-qualification-automation",
    ]
    return sum(1 for p in posts if p.get("slug") in hermes_slugs)

def check_service_page(slug):
    page = REPO / f"app/services/{slug}/page.tsx"
    return page.exists()

def check_blog_post(slug):
    page = REPO / f"app/blog/{slug}/page.tsx"
    return page.exists()

def main():
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    bp_count = count_blog_posts()
    svc_count = count_services()
    sm_count = count_sitemap()
    hp_count = count_hermes_posts()

    # Serviços criados
    services = [
        ("Auto-Outreach Automation", "auto-outreach-automation"),
        ("Lead Qualification & Enrichment", "lead-qualification-enrichment"),
        ("Site Monitoring & Autonomy", "site-monitoring-autonomy"),
        ("Content Generation & Distribution", "content-generation-distribution"),
        ("Multi-Agent Coordination Setup", "multi-agent-coordination-setup"),
    ]
    service_lines = []
    for name, slug in services:
        status = "✅" if check_service_page(slug) else "❌"
        service_lines.append(f"   {status} {name} — /services/{slug}/")

    # Blog posts criados
    blog_posts = [
        ("new-hermes-agent-services-launch", "Anúncio dos 5 serviços Hermes"),
        ("hermes-multi-agent-coordination-protocol", "Protocolo de coordenação multi-agente"),
        ("hermes-agent-platform-deep-dive", "Deep dive da platform Hermes"),
        ("hermes-agent-platform-open-source", "Hermes como framework open-source"),
        ("hermes-swarm-protocol-actions", "Swarm protocol: ações e resultados"),
        ("auto-outreach-ai-leads", "Auto-Outreach AI: geração de leads 24/7"),
        ("hermes-agent-platform-launch", "Lançamento da Hermes Agent Platform"),
        ("lead-qualification-automation", "Lead Qualification Automation"),
    ]
    blog_lines = []
    for slug, desc in blog_posts:
        status = "✅" if check_blog_post(slug) else "❌"
        blog_lines.append(f"   {status} /blog/{slug}/ — {desc}")

    message = f"""═══════════════════════════════════════════════════════════════
ZION AGENTS — GROWTH DISPATCH
🕒 {now}
═══════════════════════════════════════════════════════════════

@ZIONTECHGROUP_AGENTS — t.me/ziontechgroup_agents — CHAT ID -1003886112318

─────────────── MÍDIA DO SITE ───────────────

✅ Site: ziontechgroup.com
   - {svc_count} serviços no catálogo (servicesData.json)
   - {bp_count} posts de blog (blogPosts.json)
   - {sm_count} URLs no sitemap.xml
   - {hp_count} posts sobre Hermes Agent

✅ 5 NOVOS SERVIÇOS HERMES AGENT CRIADOS:
{chr(10).join(service_lines)}

✅ POSTS DE BLOG CRIADOS:
{chr(10).join(blog_lines)}

─────────────── BLOCKERS ───────────────

🔴 Pipeline de leads seco
   - discovered_leads.json precisa de 10-15 leads B2B verificados
   - campaign-state.json precisa de entradas stage=initial
   - Sender precisa rodar com LIVE_SEND_ALLOW_SEND=1

🔴 Telegram Bot API 404 no grupo @ZIONTECHGROUP_AGENTS
   - Mensagens preparadas para Kleber colar manualmente
   - NÃO tentar repostar — o bot não consegue entregar

🟡 12 rotas 404 no site (sem mudança recente)
   - Prioridade: /solutions/, /careers/, /faq/, /help/, /status/
   - DevAgent pode resolver uma agora

─────────────── AÇÕES PROATIVAS ───────────────

Cada agente deve:
1. CLAIMED: [task] antes de começar
2. RESULT: [output comprovável] ao terminar
3. BLOCKER: [detalhe] se bloqueado — não espere
4. Após completar: buscar próxima tarefa sem esperar

🔵 GROWTHAGENT — P0 — Lead Recovery
   Task: Injetar 10-15 leads B2B verificados em
         discovered_leads.json + sincronizar campaign-state.json
         (stage=initial) + rodar sender com
         LIVE_SEND_ALLOW_SEND=1
   Expected: discovered_leads ≥ 14, sends > 0

🟢 CONTENTAGENT — P1 — Próximos Posts
   Task: Cross tools.ts × blogPosts.json, identificar ferramentas
         sem cobertura de blog, criar app/blog/<slug>/page.tsx
         para as 3 mais valiosas. Regenerar sitemap.
   Expected: 3 novos posts criados, sitemap atualizado

🟡 DEVAGENT — P1 — Fix Rotas 404 + Schema
   Task: Escolher UMA rota 404, criar fallback
         public/<route>/index.html + docs/<route>/index.html.
         Adicionar JSON-LD faltante em serviços e ferramentas.
         Verificar sitemap.
   Expected: 1 rota resolvida, JSON-LD adicionado

🔴 RESEARCHAGENT — P2 — Análise de Mercado
   Task: Competitor analysis (5 concorrentes), keyword opportunities
         (10 queries comerciais), mercado BR/LATAM. Salvar em
         app/data/competitor-analysis-latest.json
   Expected: arquivo criado com análise completa

🟣 SOCIALAGENT — P2 — Templates + Amplificação
   Task: Templates LinkedIn PT para os 5 novos serviços Hermes
         + resumo de métricas para o grupo. Atualizar
         outreach-templates-linkedin-telegram.json
   Expected: 5 templates criados, arquivo atualizado

─────────────── COORDENAÇÃO ───────────────

PROTOCOLO DE COORDENAÇÃO:
1. Cada agente REIVINDICA com "CLAIMED: [task ref]" antes de
   começar
2. Ao terminar: postar RESULT com output verificável (file path,
   URL, diff, log de status)
3. Se bloqueado: postar BLOCKER imediatamente com detalhes
4. Nenhum trabalho duplicado — checar grupo antes de agir
5. Após completar: buscar próximo trabalho sem esperar (swarm mode)

SWARM RULES (modo ativo):
- Proactive scan: cada agente lê estado do seu zone e encontra
  highest-leverage next action
- Self-delegate first: tentar a tarefa antes de delegar
- Parallel claim: múltiplos agentes reivindicam peças diferentes
  da mesma iniciativa se não houver overlap
- Broadcast intent: antes de tocar recursos compartilhados
  (repo files, lead pools, content dirs), postar
  "STARTING: [task] in [location]"
- Nenhum silêncio: se bloqueado, postar BLOCKER, não esperar

─────────────── PRÓXIMOS PASSOS ───────────────

Quando todos completarem:
1. Kleber cola a mensagem no @ZIONTECHGROUP_AGENTS
   (manual, pois bot 404)
2. Executar plano de distribuição com os 5 serviços + 10 posts
3. Configurar cron jobs para execução contínua dos agents
4. Monitorar métricas de crescimento

═══════════════════════════════════════════════════════════════
@KLEBER — mensagem pronta para colar no grupo manualmente.
Telegram Bot API retorna 404 para @ZIONTECHGROUP_AGENTS.
═══════════════════════════════════════════════════════════════
"""

    OUTPUT.write_text(message, encoding="utf-8")
    print(f"✅ Mensagem atualizada em {OUTPUT}")
    print(f"   blogPosts: {bp_count} | services: {svc_count} | sitemap: {sm_count} | hermes_posts: {hp_count}")

if __name__ == "__main__":
    main()
