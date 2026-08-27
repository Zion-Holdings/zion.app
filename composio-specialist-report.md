# Composio — Especialista para Zion Tech Group

Baseado em caches locais + pesquisa web validada em 2026-08-27.

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

## 10. Riscos/limitações

- **Arcade.dev**: tool-calling only, sem data sync nativa; RBAC só em jul/2026
- **Nango**: sem execução/observabilidade, só sync/auth
- **Composio closed-source**: tool implementations não inspecionáveis
- **Premium tools**: custos adicionais em Tavily, Browser, Groq, Gemini
- **web_search no Termux**: indisponível por aiohttp/Python 3.11 aarch64
- **Gmail rate limit**: 429 até 2026-08-27T01:56:18Z
- **Mac deploy**: push pendente para resolver 404 no live

## 11. Próximos passos acionáveis

### Hoje
1. Você roda `git push origin main` no Mac → resolve 404 live
2. Reconnect Slack/WhatsApp no Composio
3. Definir CURSOR_API_KEY

### Esta semana
4. Criar session Composio para Gmail → triagem Nibo
5. Criar session Composio para GitHub → sync Linear
6. Ativar triggers para Calendar → lembretes fiscais

### Este mês
7. Research agent: Firecrawl + Tavily para mercado
8. Supabase agent: CRUD apps Zion
9. Avaliar upgrade Free → Pro ($29/mo)

## 12. Stack técnica recomendada

```python
# Python SDK + OpenAI Agents
from composio import Composio
from composio_openai_agents import OpenAIAgentsProvider
from agents import Agent, Runner, SQLiteSession

composio = Composio(provider=OpenAIAgentsProvider())
session = composio.sessions.create(user_id="zion-xyz")
tools = session.tools()

agent = Agent(
    name="Zion Assistant",
    instructions="Use Composio tools to complete requests.",
    tools=tools,
)

# Multi-turn memory
memory = SQLiteSession("zion_conversation")
result = Runner.run_sync(starting_agent=agent, input="Check my emails", session=memory)
```

```typescript
// TypeScript SDK + OpenAI Agents
import { Composio } from "@composio/core";
import { OpenAIAgentsProvider } from "@composio/openai-agents";
import { Agent, run } from "@openai/agents";

const composio = new Composio({ provider: new OpenAIAgentsProvider() });
const session = await composio.create("zion-xyz");
const tools = await session.tools();

const agent = new Agent({
  name: "Zion Assistant",
  instructions: "Use Composio tools to complete requests.",
  tools,
});

const result = await run(agent, "Check my emails");
console.log(result.finalOutput);
```

## 13. Integrações prioritárias para Zion

### Alta prioridade
1. **Gmail** — triagem Nibo, follow-up automático, labels/roteamento
2. **Google Calendar** — lembretes fiscais, agendamento automático
3. **GitHub** — issues/PRs automatizados, sync com Linear
4. **Linear** — criação/triagem de tickets via GitHub issues

### Média prioridade
5. **Notion** — docs/incidentes, sync com Linear
6. **Supabase** — CRUD apps Zion via agente
7. **Firecrawl** — scraping de mercado/concorrência
8. **Tavily** — pesquisa web estruturada

### Baixa prioridade
9. **Slack** — alertas internos (expirado, reconectar)
10. **WhatsApp** — comunicação cliente (expirado, reconectar)
11. **Snowflake** — analytics queries automatizadas
12. **Figma** — design handoff
13. **Meta Ads/LinkedIn** — growth automation

## 14. Pricing calculado para Zion

### Free tier: $0/mo
- 100K tool calls/mo
- 50K triggers/mo
- 3 team members
- Suficiente para: validação, 1-2 agentes core, testes

### Pro tier: $29/mo
- 200K tool calls/mo
- Uso ilimitado de membros
- Triggers ilimitados
- Recomendado para: produção com múltiplos agentes

### Cálculo exemplo Zion (3 agentes):
- Email agent: ~5K calls/mo
- Calendar agent: ~2K calls/mo
- GitHub agent: ~3K calls/mo
- Total: ~10K calls/mo → **Free tier cobre**

## 15. Riscos/limitações

- **Arcade.dev**: tool-calling only, sem data sync nativa; RBAC só em jul/2026
- **Nango**: sem execução/observabilidade, só sync/auth
- **Composio closed-source**: tool implementations não inspecionáveis
- **Premium tools**: custos adicionais em Tavily, Browser, Groq, Gemini
- **web_search no Termux**: indisponível por aiohttp/Python 3.11 aarch64
- **Gmail rate limit**: 429 até 2026-08-27T01:56:18Z
- **Mac deploy**: push pendente para resolver 404 no live
- **CURSOR_API_KEY ausente**: bloqueia integração Cursor
- **Slack/WhatsApp expirados**: comunicação interna limitada

## 16. Próximos passos acionáveis

### Hoje
1. Você roda `git push origin main` no Mac → resolve 404 live
2. Reconnect Slack/WhatsApp no Composio
3. Definir CURSOR_API_KEY
4. Autorizar conexão Telegram no link enviado

### Esta semana
5. Criar session Composio para Gmail → triagem Nibo
6. Criar session Composio para GitHub → sync Linear
7. Ativar triggers para Calendar → lembretes fiscais
8. Testar envio de mensagem Telegram após conexão ativa

### Este mês
9. Research agent: Firecrawl + Tavily para mercado
10. Supabase agent: CRUD apps Zion
11. Avaliar upgrade Free → Pro ($29/mo)
12. Documentar padrões de código para agentes Zion

## 18. Integração Composio + Hermes Agent

Configuração oficial via MCP:
```yaml
mcp_servers:
  composio:
    url: "https://connect.composio.dev/mcp"
    headers:
      x-consumer-api-key: "YOUR_COMPOSIO_API_KEY"
    connect_timeout: 60
    timeout: 180
```

Passos:
1. Instalar CLI: `curl -fsSL https://composio.dev/install | bash`
2. Autenticar: `composio auth`
3. Conectar toolkit: `composio connect telegram`
4. Reiniciar Hermes

## 19. Pesquisa web com Hermes Agent

Ferramentas:
- `web_search`: busca via Firecrawl/Tavily/Exa/Parallel
- `web_extract`: extrai conteúdo de URLs
- `browser_use`: automação browser para fluxos complexos

Configuração necessária:
```yaml
web:
  search_backend: "searxng"  # ou firecrawl/tavily
  extract_backend: "firecrawl"
```

Limitações conhecidas:
- Firecrawl indisponível no Termux por incompatibilidade aiohttp/Python 3.11 aarch64
- Requer API key válida para Tavily/Firecrawl/Exa

## 20. Segurança em agentes com carteira crypto

Referências:
- MetaMask Agent Wallet: pipeline 3-step para segurança de transações EVM
- clawmes (Hermes plugin): 52 tools, 75 commands, 11 hooks
  - Modo local: chave criptografada com scrypt + AES-256-GCM
  - WalletConnect: nunca mantém private keys descriptografadas
  - EIP-7710: delegação on-chain com signed caveats
  - Verificação de identidade: ed25519 + did:key

Guardrails recomendados:
1. Execução sequencial de transações (não concorrente)
2. Verificação humana antes de writes
3. Detecção de vazamento de credenciais em outputs LLM
4. Policy evaluation antes de cada tool call

## 21. Checklist de execução prioritário Zion

### Hoje (bloqueadores)
- [ ] `git push origin main` no Mac → resolve 404 live
- [ ] Autorizar conexão Telegram: [Connect telegram](https://connect.composio.dev/link/lk_dcDRM3uB6aQc)
- [ ] Definir CURSOR_API_KEY

### Esta semana
- [ ] Reconnect Slack/WhatsApp no Composio
- [ ] Criar session Composio para Gmail → triagem Nibo
- [ ] Criar session Composio para GitHub → sync Linear
- [ ] Ativar triggers para Calendar → lembretes fiscais

### Este mês
- [ ] Research agent: Firecrawl + Tavily para mercado
- [ ] Supabase agent: CRUD apps Zion
- [ ] Avaliar upgrade Free → Pro ($29/mo)
- [ ] Documentar padrões de código para agentes Zion

## 22. Métricas de sucesso

| Métrica | Target | Medição |
|---------|--------|---------|
| Tool calls/mo | 10K | Composio dashboard |
| Agent uptime | 99%+ | Logs estruturados |
| Email triagem Nibo | <5min | Gmail labels |
| GitHub→Linear sync | <2min | Linear webhooks |
| False positive rate | <5% | Human review |

## 23. Lições aprendidas

1. **Free tier suficiente para validação**: 100K calls/mo cobre 3 agentes core
2. **Hermes + Composio é a combinação certa**: MCP nativo, managed auth, observabilidade
3. **Evitar iPaaS tradicionais para agentes**: Zapier/Make/n8n falham em produção com side effects
4. **Start small, scale fast**: Email agent primeiro → expandir para Calendar/GitHub
5. **Security first**: sempre gating humano em writes, especially crypto/finance

## 25. Pricing oficial Composio (dados confirmados em 2026)
- **Free:** $0/mo — 100K tool calls/mo, 50K trigger events/mo, conexões ilimitadas, 3 membros
- **Pro:** $29/mo — inclui crédito de uso, membros ilimitados, portal + email + Slack em tier superior
- **Overage:** $0.0003–$0.0005 por tool call dependendo do plano; triggers $0.003–$0.005
- **Enterprise:** custom — SLA, KMS proxy, white-label avançado, DPA/BAA, IP allowlist
- Observação: houve alteração de pricing em 2026; verificar página oficial para valores correntes

## 26. Mapa de potencial por toolkit conectado

| Toolkit | Estado | Potencial imediato para Zion | Ação sugerida |
|---------|--------|------------------------------|---------------|
| GitHub | ativo | Issues/PRs automatizados, sync Linear | Session para GitHub agent |
| Gmail | ativo | Triagem Nibo, follow-up, labels | Session para Email agent |
| Google Calendar | ativo | Lembretes fiscais, agendamento auto | Triggers para Calendar |
| Linear | ativo | Criação/triagem de tickets | Sync GitHub → Linear |
| Notion | ativo | Docs/incidentes, sync Linear | Notion agent |
| Supabase | ativo | CRUD apps Zion via agente | Supabase agent |
| Firecrawl | ativo | Scraping mercado/concorrência | Research agent |
| Tavily | ativo | Pesquisa web estruturada | Research agent |
| Snowflake | ativo | Analytics queries automatizadas | Snowflake agent |
| Salesforce | ativo | CRM automation | Avaliar uso |
| HubSpot | ativo | Marketing/sales automation | Avaliar uso |
| Jira | ativo | Bug tracking, agile | Avaliar uso |
| YouTube | ativo | Content/insights | Baixa prioridade |
| LinkedIn | ativo | Growth automation | Baixa prioridade |
| Meta Ads | ativo | Ads automation | Baixa prioridade |
| Figma | ativo | Design handoff | Baixa prioridade |
| Cursor | ativo | Bloqueado por CURSOR_API_KEY ausente | Definir API key |
| Slack | expirado | Alertas internos | Reconnect |
| WhatsApp | expirado | Comunicação cliente | Reconnect |

## 26. Plano semanal/diário e métricas de sucesso

### Plano semanal
| Dia | Ação | Toolkit | Critério de sucesso |
|-----|------|---------|---------------------|
| Seg | Enviar resumo diário de e-mails prioritários | Gmail | ≤5 min, ≥90% acurácia |
| Ter | Sync GitHub issues → Linear tickets | GitHub + Linear | 100% issues criadas, 0 duplicatas |
| Qua | Relatório de métricas de anúncios | Meta Ads + LinkedIn | 1 relatório consolidado |
| Qui | Verificar logs de deploy e alertas | GitHub + Telegram | Alertas entregues em <2 min |
| Sex | Atualizar checklist de follow-ups | Gmail + Calendar | 0 follow-ups pendentes >24h |
| Sáb | Pesquisa automatizada de mercado | Firecrawl + Tavily | 10 fontes indexadas |
| Dom | Revisão semanal + planejamento | Notion | 1 página atualizada |

### Métricas de sucesso
- **Cobertura de toolkits:** 19 ativos, 2 expirados → meta: reconectar 1 toolkit/semana
- **Tempo de resposta do agente:** p95 < 3s para tool calls simples
- **Taxa de erro:** <2% nas execuções diárias
- **Follow-ups pendentes:** 0 após 24h
- **Custo mensal:** manter em ≤ $29/mo (Pro tier) até validação

## 27. Use cases prontos para production
- **Email → Issue:** triage de e-mails com Gmail + criação automática no GitHub/Linear
- **Calendar → Notion:** reuniões do Google Calendar viram páginas no Notion com ações
- **Slack/Telegram → Alertas:** notificações de deploy e CI no Telegram/Slack
- **GitHub → CRM/Notion:** issues e PRs viram registros em Notion/HubSpot
- **Meta Ads/LinkedIn → Relatórios:** métricas de campanha agregadas em Sheets/Notion
- **Firecrawl/Tavily → Pesquisa:** monitoramento de mercado e benchmarking automático

## 28. Referências externas atualizadas
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
        "teamId": "a92e1670-db71-4cec-bb71-b3c647ca164b",
        "title": github_issue_title,
        "description": github_issue_body
    }
)
```

## 27. Referências externas

- https://composio.dev/toolkits — catálogo 1.384+ toolkits confirmado
- https://composio.dev/product/composio-for-engineering-devops — exemplos engenharia
- https://docs.tavily.com/documentation/integrations/composio — Tavily + Composio
- https://composio.dev/toolkits/metaads — Meta Ads toolkit
- https://composio.dev/toolkits/firecrawl — Firecrawl toolkit
- https://github.com/ComposioHQ/composio — SDK Python/TypeScript
- https://hermes-agent.nousresearch.com/docs/user-guide/features/web-search — web_search docs
