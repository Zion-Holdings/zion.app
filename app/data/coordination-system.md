# Coordination System — Zion Agents

> Sistema prático para coordenar agentes por delegação inteligente, detectar stalls, e acelerar crescimento exponencial. Complementa `coordination-cadence.md` (ritmo) e `coordination-contacts.md` (contatos).

**Last updated:** 2026-08-21  
**Owner:** Orchestrator (auto) + Kleber para decisões estratégicas  
**Channel:** Telegram grupo `@ZIONTECHGROUP_AGENTS` (Chat ID -1003886112318)

---

## 1. Formato de Delegation — O padrão

Todo trabalho delegado segue este formato. Agentes leem e claimam na pulse.

```
⚡ DELEGATION | ZONE:<Growth|Content|Dev|Research|Social> | P0|P1|P2
TASK: <tarefa concreta, com caminho de arquivo ou saída esperada>
CONTEXT: <o que já existe, links, constraints>
OUTPUT: <o que entregar — arquivo, mensagem, número, URL>
PRIORITY: <alta|normal|baixa>
CLAIMED_BY: <se já claimado — "PENDENTE" enquanto ninguém pegou>
```

**Zonas:**
- **Growth** — outbound leads, outreach, campanhas, captação de clientes
- **Content** — blog posts, serviços pages, ferramentas, catálogo
- **Dev** — site, scripts, CI/CD, infraestrutura, bugs
- **Research** — benchmarks, análise de concorrentes, descoberta
- **Social** — redes sociais, comunidade, postagens

**Prioridades:**
- **P0** — bloqueia outras tarefas ou SLA crítico; 15 min para claim
- **P1** — importante, não urgente; 30 min para claim
- **P2** — utilitário, pode esperar; sem SLA rígido

---

## 2. Processo de Delegação — Passo a passo

### 2.1 Agentes clotados (idle) escanem o grupo

Sem trabalho delegado:
1. Ler últimos 20 mensagens do grupo
2. Procurar `⚡ DELEGATION` sem `CLAIMED_BY` (ou CLAIMED_BY = PENDING)
3. Ver se tem habilidades para entregar (zona + OUTPUT match)
4. Se sim: postar `CLAIM: @AgentName | TASK: <id ou resumo>` no grupo
5. Se não: verificar `PROPOSAL:` pendentes ou propondo um novo

### 2.2 Re-dispatch de stalls

Na pulse horária, todo agente verifica:
- P0 sem claim há >15 min → re-dispatch com `❌ STALLED` + @mention Kleber
- P1 sem claim há >30 min → re-dispatch com `@TargetAgent ❌ STALLED`
- Agent com BLOCKER há >1h sem update → ping direto + escalonar se necessário

### 2.3 Report de resultado

Ao entregar, postar:
```
✅ RESULT: <resumo de 1 linha>
OUTPUT: <arquivo salvo em /caminho | URL | número | screenshot>
NEXT: <se há follow-up ou próxima tarefa relacionada>
```

Se OUTPUT é um arquivo, o agente deve confirmar com `git status` ou `ls` que o arquivo existe antes de reportar — não declarar entrega sem verificação no disco.

---

## 3. Zonas e Assuntos — Mapa de cobertura

### Growth (captação e vendas)
- Lead scraping e enrichment (Taubaté, Vale do Paraíba, São Paulo)
- Outbound email + LinkedIn + Telegram outreach
- Pipeline de follow-up (reply detection, hot followup, reengagement)
- Campanha de promoção de ferramentas/serviços Hermes
- Relatórios de desempenho de outreach

### Content (catálogo e conteúdo)
- Criação de serviços pages (`app/services/<slug>/page.tsx`)
- Criação de ferramentas pages (`app/tools/<slug>/index.tsx`)
- Atualização de `app/data/servicesData.json` e `app/data/toolsData.json`
- Blog posts (`app/blog/<slug>/page.tsx`)
- Páginas de promoção e landing pages
- Sitemap e feeds atualizados

### Dev (infraestrutura e site)
- GitHub Pages deploy e troubleshooting
- Scripts de automação (`scripts/*.py`, `scripts/*.cjs`)
- Monitoramento de páginas (404, rotas quebradas, health checks)
- Performance e SEO
- Integração com Telegram bot

### Research (descoberta)
- Análise de concorrentes
- Tendências de mercado (AI, automação, SaaS)
- Benchmarks de ferramentas/serviços
- Identificação de gaps no catálogo

### Social (comunidade)
- Postagens em redes sociais
- Engajamento na comunidade
- Gestão do grupo Telegram

---

## 4. Ferramentas de Coordenação — What exists

| Arquivo | Função |
|---------|--------|
| `app/data/coordination-cadence.md` | Ritmo definido (pulse hourly, digest daily, strategy weekly) |
| `app/data/coordination-contacts.md` | Contatos, escalação, caminhos |
| `app/data/hermes-agents-growth-coordination.md` | Plano de crescimento com iniciativas |
| `scripts/agent-coordination-dispatch.py` | Script de dispatch automático |
| `public/dashboard/index.html` | Dashboard de métricas em tempo real |
| `zion-telegram-coordination-message.txt` | Mensagem de dispatch pronta para o grupo |
| `app/data/lead-crm/` | Ledgers de outreach (sent history, reply ledger) |

---

## 5. Chat de Coordenação — Regras do grupo Telegram

**Grupo:** `@ZIONTECHGROUP_AGENTS` — Chat ID -1003886112318  
**Bot:** @ZIONTECHGROUP_AGENTS — pode ler o grupo, **não pode enviar** (Kleber faz paste manual)

**Regras:**
1. Toda delegation usa o formato `⚡ DELEGATION` acima
2. Toda claim usa `CLAIM: @AgentName`
3. Todo stall usa `❌ STALLED` com detalhes
4. Todo blocker usa `BLOCKER:` imediato
5. Toda entrega usa `✅ RESULT:` com OUTPUT verificado
6. Conflitos de trabalho: verificar grupo antes de começar — evitar duplicação
7. Propostas novas: `PROPOSAL:` com zone + problema + sugestão + métrica de sucesso
8. Kleber recebe @mention para decisões estratégicas e P0 sem claim

---

## 6. Pulse Automatizado — Como ocorre

### 6.1 Hourly P0/P1 Pulse
- **Trigger:** todo hora (cron ou manual)
- **O que verifica:** claims pendentes, stalls, blockers recentes
- **Post:** `⏰ PULSE: [N] claims ativos, [M] stalls detectados, [ações]`

### 6.2 Daily Digest (08:00 BRT)
- **Trigger:** cron ou orchestrator
- **Conteúdo:** métricas do dashboard, kanban, leads pipeline, outreach stats, páginas health
- **Destino:** grupo Telegram (Kleber paste) + `/dashboard/`

### 6.3 Weekly Strategy (Monday 09:00 BRT)
- **Trigger:** orchestrator + Kleber, 30 min
- **Conteúdo:** o que moveu, o que stalloou, drop/defer, novos experimentos, decisões para Kleber

---

## 7. Protocolo de Escalation Rápida

| Situação | Ação | Timeline |
|----------|------|----------|
| P0 sem claim | Re-dispatch + @mention Kleber | 15 min |
| P1 sem claim | Re-dispatch com `@Agent ❌ STALLED` | 30 min |
| Agent bloqueado | Post `BLOCKER:` com detalhes | Imediato |
| Kanban vazio | Proponha iniciativa nova com `PROPOSAL:` | <1h |
| Métrica regressou | Routa para DevAgent + post `ALERT:` | Imediato |
| Bot não pode enviar | Kleber faz paste manual do resultado | Na entrega |

---

## 8. Criação de Tarefas — Como propor uma delegação nova

Agente ou orchestrator com uma ideia nova:

1. Verificar se já existe tarefa similar no grupo ou no Kanban
2. Se não: postar `PROPOSAL:` com:
   - **Problema:** o que precisa ser resolvido
   - **Zona:** qual zona deve executar
   - **Sugestão:** forma sugerida de resolução
   - **OUTPUT esperado:** arquivo ou entrega concreta
   - **Métrica de sucesso:** como saber que valeu a pena
3. Se Kleber aprova (ou não responde em 24h para P1/P2): transformar em `⚡ DELEGATION`

**Exemplo de proposta:**
```
💡 PROPOSAL | ZONE:Content
PROBLEM: falta serviço de "Typeform Paperwork Manager" no catálogo
SUGGESTION: criar ferramenta + serviço + adicionar ao toolsData.json
OUTPUT: app/tools/typeform-paperwork-manager/index.tsx, app/services/typeform-paperwork-specialist-certification/page.tsx, toolsData.json atualizado
METRIC: serviço indexado e visible em /tools/ e /services/
```

---

## 9. Checklist de Boas-Práticas

- [ ] Toda tarefa tem OUTPUT definido (arquivo, URL, número, mensagem)
- [ ] Toda entrega é verificada no disco (ls, git status, read_file) antes de reportar
- [ ] Nenhum agente trabalha em algo que outro já claimou (verificar grupo)
- [ ] Bloqueios são postos imediatamente, não esperados
- [ ] P0 recebe atenção dentro de 15 min; P1 dentro de 30 min
- [ ] Kleber recebe @mention para decisões estratégicas e P0 sem claim
- [ ] Dashboard atualizado com métricas relevantes
- [ ] Catálogo de serviços e ferramentas reflete o trabajo real

---

## 10. Referências

- `app/data/coordination-cadence.md` — ritmo operacional
- `app/data/coordination-contacts.md` — contatos e escalação
- `app/data/hermes-agents-growth-coordination.md` — plano de crescimento
- `scripts/agent-coordination-dispatch.py` — dispatch automático
- `public/dashboard/index.html` — dashboard de métricas
- `zion-telegram-coordination-message.txt` — mensagem de dispatch pronta
