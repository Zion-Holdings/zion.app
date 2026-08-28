# Composio — Especialista para Zion Tech Group (Relatório Consolidado)

Baseado em pesquisa web validada + contexto da sessão em 2026-08-27/28.

## 1. O que é Composio
Composio é uma **action layer para agentes de IA**: conecta agentes LLM (Claude, ChatGPT, Cursor, Codex, Hermes, LangChain, CrewAI, OpenAI Agents) a 1.000+ ferramentas/apps via SDKs Python/TypeScript e suporte nativo a MCP.

Posicionamento:
- Não é workflow builder (não é Zapier/Make/n8n)
- Não é iPaaS tradicional (não é Workato/Boomi)
- Não é data-sync (não é Nango)
- É execução segura de ações: auth, retries, schemas, rate limits

Analogia: se o agente é o cérebro, Composio é o corpo.

## 2. Conexões Zion (19 toolkits ativos, 2 expirados)
### Ativos
GitHub, Gmail, Telegram (`-1003886112318`), Google Calendar, Linear (ZIO-169), Notion (DB `3c8b94b0-eaf7-81fe-be7c-e082a41e33c5`), Cursor, Supabase, Firecrawl, Tavily, Snowflake, Salesforce, HubSpot, Jira, YouTube, LinkedIn, Figma, Meta Ads

### Expirados
Slack (`zion-slack`), WhatsApp

### Gaps documentados
- CURSOR_API_KEY não definido

## 3. O que Composio resolve
### Problema real
Os agentes IA têm "cérebro" (LangChain, CrewAI, OpenAI, Cursor), mas falta o "corpo" para executar ações em apps reais com auth, retry, rate-limit, schema e observabilidade.

### O que Composio entrega
- **Action layer** entre agente e apps externos
- **1.000+ tools** LLM-ready com schemas versionados
- **Auth gerenciada**: OAuth, refresh tokens, lifecycle por usuário final
- **Execução segura**: retries seguros, idempotency, DLQ, circuit breakers
- **Framework-agnostic**: pluga em LangChain, CrewAI, OpenAI, Cursor, Hermes
- **Observabilidade**: tracing Thought → Action → Observation + logs estruturados
- **Event-driven**: triggers para novos emails, issues, mensagens
- **Tool Router**: roteamento inteligente de tools por endpoint único (beta)
- **MCP nativo**: servidor universal Rube para Cursor, Claude Desktop, etc.

## 4. Por que sair de Zapier/Make/n8n para agentes IA
**Ficam em Zapier/Make/n8n quando:**
- Automação interna, baixo risco, determinística
- Prototipagem inicial sem side effects irreversíveis

**Migre para Composio quando:**
- Agente com "Connect your account" multi-tenant
- Ações com efeitos colaterais irreversíveis
- Produção com LLM-driven routing
- Necessidade de auth por usuário final + observabilidade

**Gaps do Make/Zapier/n8n em produção:**
- Duplicate emails/updates por timeout/retry storms
- Poison messages bloqueando filas
- Debugging sem tracing Thought → Action → Observation
- Impossibilidade de multi-tenant auth por usuário final
- Rate limits sem backpressure/retry inteligente

## 5. Comparativo vs alternativas
| Plataforma | Tipo | Quando usar vs Composio |
|------------|------|------------------------|
| Zapier/Make/n8n | Workflow visual | Automação interna, baixo risco, determinística |
| Workato/Boomi | iPaaS | Governança enterprise, fluxos fixos |
| Nango | Data-sync/auth | Sync de dados, não execução de ações |
| Arcade.dev | Action layer alternativa | MCEP-native, mas sem RBAC maduro até jul/2026 |
| Truto | Unified API zero-code | Multi-tenant unificado, menor catálogo |
| Merge.dev | Agregação Recruiting/CRM/Analytics | Foco em recruiting/CRM, não agent-native |
| **Composio** | **Agent action layer** | **Agentes IA em produção com side effects** |

## 6. Pricing confirmado
| Item | Free | Pro | Enterprise |
|------|------|-----|------------|
| Tool calls | 100K/mo | $29/mo + usage credit | Custom |
| Triggers | 50K/mo | $0.003/event | Custom |
| Connected accounts | Unlimited free | Free | Custom |
| Premium tools | Up to $2/tool | Pass-through + 5% | Custom |
| LLM tokens | 1M/mo | $3.75/M | Custom |
| Team members | 3 | Unlimited | Unlimited |

**Notas Zion:**
- Free dá 100K tool calls/mo — suficiente para validação inicial
- Pro custa $29/mo com crédito incluso — pode ser o ponto de entrada para automação real
- Premium tools relevantes: Tavily ~$0.008/search, Browser automation ~$0.70/task
- Composio-managed: 20K dos 100K free, depois $0.0005/call

## 7. Gap analysis — Zion stack atual vs potencial Composio
### Stack atual
Gmail, Google Calendar, Google Sheets, Supabase, GitHub, Linear, Notion, Firecrawl, Tavily, Snowflake, Salesforce, HubSpot, Jira, YouTube, LinkedIn, Meta Ads, Figma, Cursor

### Gaps identificados
1. **WhatsApp/Slack expirados** — reconnectar para comunicação interna
2. **Gmail/Calendar não automatizados** — agentes de follow-up e triagem fiscal
3. **GitHub sem CI avançada** — webhook-driven automations possíveis
4. **Linear sem sync automático** — GitHub issues ↔ Linear tickets
5. **Firecrawl/Tavily** — pesquisa de mercado automatizada
6. **Supabase como backend** — CRUD apps via agente
7. **Snowflake analytics** — queries automatizadas
8. **Figma handoff** — design → specs automáticas
9. **Meta Ads/LinkedIn** — growth automation
10. **CURSOR_API_KEY ausente** — bloqueia integração Cursor

## 8. Casos de uso concretos para Zion
### Alta prioridade
1. **Email agent**: triagem Nibo, follow-up automático, labels/roteamento
2. **Calendar agent**: lembretes fiscais, agendamento automático
3. **GitHub agent**: issues/PRs automatizados, sync com Linear
4. **Research agent**: Firecrawl + Tavily para mercado/concorrência

### Média prioridade
5. **Slack/WhatsApp agent**: alertas internos, status de deploy
6. **Notion agent**: docs/incidentes, sync com Linear
7. **Supabase agent**: CRUD apps Zion via agente
8. **Snowflake agent**: analytics queries automatizadas

### Baixa prioridade
9. **Figma agent**: design handoff
10. **Ads agent**: Meta Ads/LinkedIn automation

## 9. Arquitetura recomendada para Zion
### Pattern A: Centralized Agent Team (início)
- Um time central constrói agentes core: Email, Calendar, GitHub
- Ferramentas: Hermes + Composio sessions + OpenAI/Claude
- Entregas rápidas: follow-up Nibo, sync GitHub→Linear, alertas deploy

### Pattern B: Self-Serve Platform (maturidade)
- Plataforma habilita outros times a criar agentes
- Templates reutilizáveis de auth + tool routing
- Observabilidade unificada + DLQ + rate limiting

### Stack técnica mínima
```
Composio SDK → Session(user_id="zion-xyz")
  ├── Meta tools: search, authorize, execute
  ├── Toolkits: gmail, calendar, github, linear, notion
  ├── Auth: OAuth gerenciado por toolkit
  ├── Triggers: webhook-driven events
  └── Sandbox: bulk operations + code execution
```

## 10. Ações imediatas com toolkits ativos
- **Gmail:** triagem automática de e-mails prioritários + follow-up em até 24h
- **Calendar:** criação de lembretes fiscais e reuniões com ações pós-reunião no Notion
- **GitHub:** abertura de issues via `GITHUB_CREATE_AN_ISSUE` e sync com Linear
- **Linear:** criação de tickets a partir de issues do GitHub com `team_id` UUID
- **Notion:** registro de status de deploy e atas em database compartilhada
- **Telegram:** alertas de CI/deploy no chat `-1003886112318` quando conexão ativa

## 11. Riscos/limitações
- **Arcade.dev**: tool-calling only, sem data sync nativa; RBAC só em jul/2026
- **Nango**: sem execução/observabilidade, só sync/auth
- **Custo acumulativo**: tool calls sobem com agentes recorrentes em multi-tool
- **Dependência de managed auth**: auth mal modelado vira buraco de segurança/manutenção
- **Foco em número de ferramentas**: conectar 30 tools é fácil; ter agentes úteis é o difícil
- **Observabilidade como pré-requisito**: sem tracing/replay, não há confiança em produção
- **Concentração de dependência**: deployments/incidents/email podem virar dependentes externos

## 12. Plano semanal/diário e métricas de sucesso
### Plano semanal
| Dia | Ação | Toolkit | Critério de sucesso |
|-----|------|---------|---------------------|
| Seg | Triagem automática de e-mails | Gmail | 80% dos e-mails classificados sem intervenção |
| Ter | Sync GitHub → Linear | GitHub + Linear | Issues priorizadas em <5 min |
| Qua | Relatório de métricas de anúncios | Meta Ads + LinkedIn | 1 relatório consolidado |
| Qui | Verificar logs de deploy e alertas | GitHub + Telegram | Alertas entregues em <2 min |
| Sex | Atualizar checklist de follow-ups | Gmail + Calendar | 0 follow-ups pendentes >24h |
| Sáb | Reconectar toolkits expirados | Composio | Slack + WhatsApp reativados |
| Dom | Revisão semanal + planejamento | Notion | 1 página atualizada + 404s resolvidos |

### Métricas de sucesso
- **Cobertura de toolkits:** 19 ativos, 2 expirados → meta: reconectar 1 toolkit/semana
- **Tempo de resposta do agente:** p95 < 3s para tool calls simples
- **Taxa de erro:** <2% nas execuções diárias
- **Follow-ups pendentes:** 0 após 24h
- **Custo mensal:** manter em ≤ $29/mo (Pro tier) até validação

## 13. Use cases prontos para production
- **Email → Issue:** triage de e-mails com Gmail + criação automática no GitHub/Linear
- **Calendar → Notion:** reuniões do Google Calendar viram páginas no Notion com ações
- **Slack/Telegram → Alertas:** notificações de deploy e CI no Telegram/Slack
- **GitHub → CRM/Notion:** issues e PRs viram registros em Notion/HubSpot
- **Meta Ads/LinkedIn → Relatórios:** métricas de campanha agregadas em Sheets/Notion
- **Firecrawl/Tavily → Pesquisa:** monitoramento de mercado e benchmarking automático

## 14. Referências externas atualizadas
- https://composio.dev/pricing
- https://composio.dev/toolkits
- https://composio.dev/content/best-ai-agent-builders-and-integrations
- https://www.capsolver.com/blog/ai/composio-review

### Email → GitHub Issue
```python
# Exemplo: bug report email vira issue no GitHub
result = composio.tools.execute(
    "GITHUB_CREATE_AN_ISSUE",
    arguments={
        "owner": "zion-support",
        "repo": "zion-support.github.io",
        "title": "Bug report from email",
        "body": email_body,
        "labels": ["bug", "from-email"]
    }
)
```

### Calendar → Lembrete fiscal
```python
# Exemplo: criar evento fiscal
result = composio.tools.execute(
    "GOOGLE_CALENDAR_CREATE_EVENT",
    arguments={
        "calendar_id": "primary",
        "summary": "Prazo fiscal Nibo",
        "start": {"dateTime": "2026-09-04T09:00:00"},
        "end": {"dateTime": "2026-09-04T10:00:00"}
    }
)
```

### Linear ticket from GitHub issue
```python
# Exemplo: sync issue → ticket
result = composio.tools.execute(
    "LINEAR_CREATE_LINEAR_ISSUE",
    arguments={
        "team_id": "zion-linear-team-uuid",
        "title": issue_title,
        "description": issue_body
    }
)
```
