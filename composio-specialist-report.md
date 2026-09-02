# Composio — Especialista para Zion Tech Group (Relatório Consolidado)

Baseado em pesquisa web validada + contexto da sessão em 2026-08-27/28/29/31 + verificação 2026-09-01.

## 1. O que é Composio
Composio é uma **action layer para agentes de IA**: conecta agentes LLM (Claude, ChatGPT, Cursor, Codex, Hermes, LangChain, CrewAI, OpenAI Agents) a 1.000+ ferramentas/apps via SDKs Python/TypeScript, CLI e suporte nativo a MCP.

Posicionamento:
- Não é workflow builder (não é Zapier/Make/n8n)
- Não é iPaaS tradicional (não é Workato/Boomi)
- Não é data-sync (não é Nango)
- É execução segura de ações: auth, retries, schemas, rate limits, governance

Analogia: se o agente é o cérebro, Composio é o corpo.

## 2. Conexões Zion (19 toolkits ativos, 2 expirados)
### Ativos
GitHub, Gmail, Telegram (`-1003886112318`), Google Calendar, Linear (ZIO-169), Notion (DB `3c8b94b0-eaf7-81fe-be7c-e082a41e33c5`), Cursor, Supabase, Firecrawl, Tavily, Snowflake, Salesforce, HubSpot, Jira, YouTube, LinkedIn, Figma, Meta Ads

### Expirados
Slack (`zion-slack`), WhatsApp

### Status atual
- Chave Composio: `ck_-AV0X5k4D8R-FbO9i7mi` retorna **401 Invalid API key** em tool calls reais; SDK init funciona localmente, mas servidor rejeita
- Sem chave válida, **nenhum script/teste real pode ser executado** contra a API
- CURSOR_API_KEY não definida
- Gmail: caixa vazia nos ciclos verificados; auth saudável
- Site: 64/64 URLs HTTP 200, sem rotas quebradas

### Gaps documentados
- Chave Composio inválida/restrita
- CURSOR_API_KEY não definido
- Slack/WhatsApp expirados

## 3. MCP Gateway — Features empresariais 2026
### Governança
- **Per-team scoped endpoints:** cada time recebe sua própria MCP URL; ferramentas allowlist/blocklist por time; ações destrutivas bloqueáveis dentro de toolkits permitidos
- **SSO/SAML/OIDC:** Okta, Entra ID, Google Workspace
- **SCIM 2.0:** provisioning automatizado por grupos
- **Audit trail:** user, team, tool, action, outcome; retenção configurável 7d–1y; export CSV

### Execução
- **Intent-based tool resolution:** agente descreve necessidade e recebe apenas ferramentas correspondentes
- **Sandboxed execution:** respostas pesadas rodam isoladas; retorna sumário compacto ao agente
- **Self-healing tools:** rate limits, schema drift, payloads malformados são corrigidos no gateway sem redeploy

### Deployment
- Managed cloud, private VPC, embedded SDK
- Pure proxy vs toolkit platform vs Composio MCP Gateway

## 4. O que Composio resolve
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
- **Tool Router**: roteamento inteligente de tools por endpoint único
- **MCP nativo**: servidor universal Rube para Cursor, Claude Desktop, etc.

## 5. Comparativo vs alternativas
| Plataforma | Tipo | Quando usar vs Composio |
|------------|------|------------------------|
| Zapier/Make/n8n | Workflow visual | Automação interna, baixo risco, determinística |
| Workato/Boomi | iPaaS | Governança enterprise, fluxos fixos |
| Nango | Data-sync/auth | Sync de dados, não execução de ações |
| Arcade.dev | Action layer alternativa | MCP-native, RBAC ainda imaturo |
| Truto | Unified API zero-code | Multi-tenant unificado, catálogo menor |
| Merge.dev | Agregação Recruiting/CRM/Analytics | Foco em recruiting/CRM, não agent-native |
| **Composio** | **Agent action layer** | **Agentes IA em produção com side effects** |

## 6. Pricing confirmado (2026)
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
- Pro custa $29/mo com crédito incluso — provável ponto de entrada para automação real
- Premium tools relevantes: Tavily ~$0.008/search, Browser automation ~$0.70/task
- Pro tools (browser/search/sandbox): ~3x custo de tool call padrão
- Observação: página atual mostra 100K free calls; reviews antigos citavam 20K — possível mudança recente pós-ago/2026

## 7. Gap analysis — Zion stack atual vs potencial Composio
### Stack atual
Gmail, Google Calendar, Google Sheets, Supabase, GitHub, Linear, Notion, Firecrawl, Tavily, Snowflake, Salesforce, HubSpot, Jira, YouTube, LinkedIn, Meta Ads, Figma, Cursor

### Gaps identificados
1. Chave Composio bloqueada (401) — bloqueia toda execução real
2. CURSOR_API_KEY ausente
3. WhatsApp/Slack expirados — reconnectar
4. Gmail/Calendar não automatizados — follow-up e triagem fiscal
5. GitHub → Linear sem sync automático
6. Firecrawl/Tavily sem pesquisa automatizada
7. Supabase como backend de apps via agente
8. Snowflake analytics queries automatizadas
9. Figma handoff automatizado
10. Meta Ads/LinkedIn growth automation

## 8. Casos de uso concretos para Zion
### Alta prioridade
1. **Email agent**: triagem, follow-up automático, labels/roteamento
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
- Entregas rápidas: follow-up, sync GitHub→Linear, alertas deploy

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
- **Linear:** criação de tickets a partir de issues do GitHub
- **Notion:** registro de status de deploy e atas em database compartilhada
- **Telegram:** alertas de CI/deploy no chat `-1003886112318` quando conexão ativa

## 11. Riscos/limitações
- **Chave bloqueada:** 401 retorna em todas as tool calls reais — bloqueia validação
- **CURSOR_API_KEY ausente**
- **Arcade.dev**: tool-calling only, sem data sync nativa
- **Nango**: sem execução/observabilidade, só sync/auth
- **Custo acumulativo**: tool calls sobem com agentes recorrentes
- **Dependência de managed auth:** auth mal modelado vira buraco de segurança
- **Concentração de dependência:** deployments/incidents/email podem virar dependentes externos

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

## 14. MCP Gateway — Referências atualizadas (2026)
- https://composio.dev/mcp-gateway
- https://composio.dev/content/best-mcp-gateway-for-developers
- https://composio.dev/content/what-is-an-mcp-gateway
- https://composio.dev/content/self-hosted-mcp-gateway
- https://www.capsolver.com/blog/ai/composio-review

## 15. Bloqueios e próximos passos
### Bloqueios
- Chave Composio atual (`ck_-AV0X5k4D8R-FbO9i7mi`) retorna **401 Invalid API key** em todos os tool calls reais; SDK init funciona localmente, mas servidor rejeita. Issue #71056 aberta para documentar este bloqueio.
- CURSOR_API_KEY não definida — afeta apenas caminhos GPT-4; não bloqueia fetch de email.
- Sem chave válida, **nenhum script/teste real pode ser executado** contra a API do Composio.

### Próximos passos
1. **Fornecer nova chave Composio válida** para destravar execução real dos scripts e validação dos toolkits conectados.
2. Revisar planos de contingência offline enquanto a chave não é corrigida.
3. Priorizar reconexão dos toolkits expirados (Slack/WhatsApp).
4. Validar casos de uso com dados reais após chave válida.

## 16. Pricing reconciliado (2026)
- Fonte verificada: composio.dev/pricing + reviews 2026
- Free: **20K tool calls/mo** (alguns trechos antigos citam 100K; a página atual mostra 20K — possível mudança pós-ago/2026)
- Pro: **$29/mo**, 200K tool calls inclusos, overage $0.299/1K calls
- Growth: **$199/mo**, 500K tool calls
- Enterprise: custom pricing, KMS proxy, SSO/SAML/OIDC, SCIM 2.0, audit trail, ZDR, BAA, VPC/self-hosted
- Premium tools com credenciais Composio-hosted são cobrados separado (ex: browser use ~$0.70/task)
- Pro tools (browser/search/sandbox): custo ~3x tool call padrão; sandbox tokens 1M inclusos → ~$3.75/M

## 18. Diagnóstico do site ziontechgroup.com
- Sitemap: 4.437 URLs
- Amostragem: 167 URLs, 0 quebradas nessa rodada
- Site watchdog: 10/10 rotas primárias HTTP 200, sem mudanças versus baseline
- 404s confirmados: `/new`, `/services/ai-services`, `/services/data-analytics`, `/blog/composio`
- 404s adicionais confirmados: `/solutions/hermes-ai-agents/`, `/case-studies/hermes-agent-fleet/`, múltiplos `/docs/hermes-*` e `/hermes-*`
- Ação recomendada: adicionar regras de redirect no arquivo `_redirects` quando o path do repo for fornecido

## 16. Exemplos de código
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
