# Zion Tech Group — Memory & Status

## Última atualização: 2026-09-03T23:30 UTC

- **CEO**: Kleber Garcia Alcatrão
- **Empresa**: Zion Tech Group
- **Site**: https://ziontechgroup.com (GitHub Pages, branch gh-pages)
- **Deploy**: Live, sem blockers ativos

## Issues

- **2.000 issues fechadas** via close_v2.py (background proc_77c9d2a7d4d1, exit 0)
- ~62.205 issues restantes (números 62000+, mais recentes)
- Tarefa de fechamento em massa: PAUSADA, aguardando ordem concreta

## Rotas (snapshot: 2026-09-03T23:30 UTC)

### 200 OK
- `/` (homepage)
- `/tools/health-check`
- `/status/service-health`
- `/sitemap.xml`
- `/services/whatsapp-monetizacao/` ← corrigido (gh-pages direto)

### Rotas testadas pelo smoke test
- `/` → 200
- `/tools/health-check` → 200 (301→200 com -L)
- `/status/service-health` → 200 (301→200 com -L)
- `/sitemap.xml` → 200

## Correção da 404 — WhatsApp Monetização

- **Rota**: `/services/whatsapp-monetizacao/`
- **Problema**: gh-pages tinha placeholder "Not a packaged SKU" com noindex + redirect para `/`
- **Causa raiz**: `static-deploy.yml` workflow falhando; `mirror-to-gh-pages.yml` desabilitado
- **Fix**: push direto para `origin/gh-pages` com conteúdo real (29 linhas)
- **Status**: HTTP 200 confirmado

## Monetização (modelo 2026)

- Discovery $99 → `/book/`
- Consulting $499 → `/book/`
- Starter $2,500 → `/plans/`
- Growth $8,000/mo → `/plans/`

## CRM & Outreach

- Total leads: 1933
- Outreach-ready: 693
- Monitor inbox interest: 52
- Hot followup sent: 0
- Status: bloqueado (sem leads prontos para outreach)

## Repositório

- **CWD Termux**: `/data/data/com.termux/files/home/ztg/repo`
- **Branch**: `main`
- **gh-pages worktree**: `/data/data/com.termux/files/home/ztg/gh-pages`
- **macOS**: `/Users/klebergarciaalcatrao/zion-support.github.io` (symlink, indisponível no Android)

## Cron Jobs

- Zion Site Smoke Test (39fc379ffa4f): 90m, última execução OK
- site-health-check (72ce632d762c): 4h, última execução OK
- 13 jobs em erro (modelo indisponível: poolside/laguna-xs-2.1:free 429, meta-llama/llama-3.1-8b-instruct:free 404)
- 3 jobs com scripts inexistentes: agent-task-delegator.py, cron-swarm-coordinator.sh

## Composio

- CLI não disponível no Android/Termux
- Usar GitHub Actions ou REST API
- Secrets sem prefixo COMPOSIO_ causam falha silenciosa
