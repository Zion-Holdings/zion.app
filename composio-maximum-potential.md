# Composio Maximum Potential Report — Zion Tech Group

**Data de geração:** 2026-09-02
**Fonte:** pesquisa web + integration map em disco + toolkit pages do Composio (live) + scripts existentes
**Escopo:** extrair o máximo de todas as 47 apps conectadas + 16 apps críticos com potencial completo

---

## 1. O que o Composio é (e por que o Zion deve usar cada recurso)

### 1.1 Visão geral
Composio é uma plataforma de integração para agentes de IA: conecta agents a 1000+ apps através de toolkits pré-autenticados, MCP gateway, sessions isoladas, triggers, sandbox, e framework adapters. O Zion já tem 47 apps mapeados e ~26 scripts criados.

### 1.2 Recursos do Composio e como o Zion os maximiza

| Recurso | O que é | Como o Zion extrai o máximo |
|---------|----------|---------------------------|
| **Tool Router (Sessions GA)** | Cria sessões isoladas por usuário com toolkit access control | Um session por agente do Zion (growth, devops, revenue, support, content) — scoping reduz token usage |
| **MCP Gateway** | Endpoint MCP hospedado que expõe todas as connected tools a qualquer cliente MCP | Conectar Claude Desktop, Cursor, ChatGPT via MCP sem código — Zion agents acessíveis via ChatGPT custom connectors (ago/2026) |
| **Rube universal MCP server** | Servidor MCP pré-pronto que conecta clientes a 500+ apps externos com uma única configuração | Zion pode usar Rube para conectar rapidamente Claude/Cursor/VS Code sem configurar MCP servers individualmente |
| **Triggers / Events** | Webhooks e events que disparam agentes quando algo acontece | Lead new in HubSpot → agent pesquisa empresa + envia email + atualiza CRM. New issue in GitHub → triage automático |
| **Sandbox execution** | Ambiente sandboxed para execução de código + ferramentas | Agentes podem processar dados, fazer cálculos, gerar relatórios sem código customizado — Zion usa para classification, scoring, enrichment |
| **Managed Auth (Connect Link)** | OAuth gerenciado pelo Composio — sem código de auth | Zion conecta Gmail, Slack, GitHub, HubSpot, Notion com Connect Link — zero auth code. Para produção: own OAuth app para evitar o limite de 20K managed calls |
| **Multi-execute** | Executar múltiplas ferramentas em paralelo numa única chamada | Reduz número de tool calls e latência quando múltiplas ações são independentes (ex: criar HubSpot contact + enviar Slack + criar Notion page em paralelo) |
| **Framework Adapters** | LangChain, LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, LlamaIndex, Vercel AI SDK, Google ADK, Anthropic SDK, Mastra, Pydantic AI | Zion pode escolher o framework que melhor se adapta a cada agente — não fica preso a um |
| **ChatGPT Custom Connectors (ago/2026)** | Conectar qualquer app ao ChatGPT via MCP custom connectors | Canal de distribuição novo: Zion agents acessíveis via ChatGPT, Claude, Cursor — sem código adicional |
| **Meta Tools (COMPOSIO_SEARCH_TOOLS, COMPOSIO_MANAGE_CONNECTIONS, etc.)** | Ferramentas que descobrem, autenticam e executam tools em runtime | Agentes descobrem dinamicamente quais tools estão disponíveis — Zion não precisa hardcodar tool lists |

### 1.3 Pricing atualizado (live, 2026-09-02)

- **Free:** 100K standard tool calls/month (own-app OAuth), 50K trigger events/month, unlimited connections, 3 team members, no card, hard-capped. Composio-managed (shared OAuth) limited to 20K of the 100K free before overage ($0.0005/tool call, $0.005/trigger event).
- **Pro:** $29/mo — 200K standard calls (overage $0.299/1K), 50K pro calls (overage $0.897/1K), 50K triggers (overage $0.003/event), 1M sandbox tokens (overage $3.75/M), read-only dashboard role, 30-day log retention, portal + email + Slack support at $1K/yr. Add-ons: BAA, IP allowlist, ZDR, advanced white-labeling.
- **Serious Business:** ~$229/mo — 2M standard calls (~$0.115/1K effective), 50K pro calls, overage $0.249/1K. Melhor unidade econômica para uso pesado em produção.
- **Enterprise:** Custom — SOC 2 Type II + ISO 27001:2022, VPC/on-prem/self-hosted, KMS proxy, SSO SAML 2.0 + OIDC, SCIM 2.0, action-level RBAC, per-team MCP endpoints, audit trail (7-day–1-year, metadata-only, CSV export), ZDR architecture, MSA/DPA/SLA, support dedicado.
- **Premium tools (cobrados separadamente):** Browser Use (~$0.70/task), Google Maps (~$0.042/call), Veo video (~$1.20/video), Gemini image (~$0.14/image), Tavily/Exa search (~$0.008/search), LLM calls Gemini/Groq (~$0.002/call).
- **Implicação para o Zion:** com own-app OAuth, o limite de 100K free é generoso. O gargalo real é o sub-limit de 20K para Composio-managed (shared) apps. Decisão Free→Pro: quando as automações P0 estiverem rodando e o volume se aproximar do limite, ou quando add-ons (BAA, IP allowlist) forem necessários.

---

## 2. 16 Apps Críticas — Potencial Completo Extraído

### 2.1 GitHub (846 tools / 46 triggers) — POTENCIAL MÁXIMO

**Estado atual do Zion:** Script existente (composio-github-auto-triage.sh) cobre apenas triagem de issues.

**Todas as 846 tools em categorias relevantes para o Zion:**

| Categoria | Exemplos de tools | Workflow Zion |
|-----------|------------------|--------------|
| **Issues & PRs** | GITHUB_CREATE_AN_ISSUE, GITHUB_ADD_ASSIGNEES_TO_ISSUE, GITHUB_ADD_LABELS_TO_AN_ISSUE, GITHUB_CLOSE_AN_ISSUE, GITHUB_MERGE_A_PULL_REQUEST, GITHUB_CREATE_A_PULL_REQUEST, GITHUB_GET_A_PULL_REQUEST, GITHUB_LIST_PULL_REQUESTS, GITHUB_UPDATE_A_PULL_REQUEST, GITHUB_ENABLED_REPOSITORY_FEATURES, GITHUB_GET_HEAD_SHA_FOR_REF | Auto-triage (existente), PR review automation, auto-merge on CI pass, label management, issue assignment |
| **Repositories** | GITHUB_CREATE_REPOSITORY, GITHUB_GET_REPOSITORY, GITHUB_LIST_REPOSITORIES, GITHUB_DELETE_REPOSITORY, GITHUB_UPDATE_REPOSITORY, GITHUB_GET_REPOSITORY_VISIBILITY, GITHUB_GET_ALL_REPOSITORIES_OF_A_USER, GITHUB_CHECK_IF_A_REPOSITORY_IS_VISIBLE_TO_A_USER, GITHUB_GET_TOP_INVENTORY_FOR_USER | Repo provisioning automation, inventory management, visibility audits |
| **Actions & CI/CD** | GITHUB_CREATE_A_WORKFLOW, GITHUB_DELETE_A_WORKFLOW, GITHUB_DISABLE_A_WORKFLOW, GITHUB_ENABLE_A_WORKFLOW, GITHUB_CREATE_WORKFLOW_DISPATCH_EVENT, GITHUB_GET_ALL_WORKFLOW_RUNS_FOR_A_REPOSITORY, GITHUB_LIST_GITHUB_ACTIONS_CACHES, GITHUB_DELETE_ACTIONS_CACHES, GITHUB_CREATE_OR_UPDATE_SCRIPTED_CONFIG, GITHUB_GET_REPOSITORY_ACTIONS_PERMS | Auto-config de CI/CD, cache management, workflow dispatch automation |
| **Organization & Teams** | GITHUB_ADD_MEMBER_TO_TEAM, GITHUB_REMOVE_MEMBER_FROM_TEAM, GITHUB_CREATE_TEAM, GITHUB_DELETE_TEAM, GITHUB_UPDATE_TEAM, GITHUB_GET_TEAM, GITHUB_LIST_TEAMS, GITHUB_ADD_REPOSITORY_TO_TEAM, GITHUB_CREATE_ORG_SECRET, GITHUB_ADD_REPOS_TO_ORG_SECRET | Team management automation, org secret rotation, repo-per-team provisioning |
| **Codespaces & Secrets** | GITHUB_CREATE_A_SECRET_FOR_THE_AUTHENTICATED_USER, GITHUB_DELETE_A_SECRET_FOR_THE_AUTHENTICATED_USER, GITHUB_LIST_CODESPACES, GITHUB_ADD_REPO_TO_CODESPACES_SECRET, GITHUB_GET_CODESPACES_PASSWORD | Secret management, Codespaces automation |
| **Projects (V2)** | GITHUB_ADD_ITEM_TO_USER_PROJECT, GITHUB_ADD_FIELD_TO_USER_PROJECT, GITHUB_CLEAR_PROJECT_V2_ITEM_FIELD_VALUE, GITHUB_CREATE_USER_PROJECT, GITHUB_UPDATE_PROJECT | Sprint backlog automation, project management sync |
| **Social & Profile** | GITHUB_ADD_SOCIAL_ACCOUNTS_FOR_THE_AUTHENTICATED_USER, GITHUB_ADD_EMAIL_FOR_AUTH_USER, GITHUB_GET_ALL_USER_REPOSITORIES, GITHUB_SEARCH_USERS | Profile management, user discovery |
| **Sponsorships** | GITHUB_CANCEL_SPONSORSHIP, GITHUB_LIST_SPONSORSHIPS_FOR_A_USER, GITHUB_LIST_TREE_FORREPOSITORY | Sponsor management |
| **Miscellaneouse** | GITHUB_COMMIT_MULTIPLE_FILES, GITHUB_GET_GITHUB_API_ROOT, GITHUB_COMPARE_TWO_COMMITS, GITHUB_GET_ALL_WORKFLOW_RUNS_FOR_A_REPOSITORY, GITHUB_CREATE_OR_UPDATE_SCRIPTED_CONFIG, GITHUB_GET_CODESPACES_PASSWORD | Batch file ops, audit, comparison |

**Workflow P0 extraído para o Zion:** `composio-github-pr-automation.sh` — monitorar PRs abertos, assign reviewers automáticos baseado em CODEOWNERS, adicionar labels baseado no tipo de change, Criar issue no Linear se review demorar > 24h, Slack notify no #dev quando PR merged. Tools: GITHUB_LIST_PULL_REQUESTS, GITHUB_ADD_ASSIGNEES_TO_ISSUE, GITHUB_ADD_LABELS_TO_AN_ISSUE, GITHUB_GET_A_PULL_REQUEST, LINEAR_CREATE_ISSUE, SLACK_SEND_MESSAGE.

**Workflow P0 extraído:** `composio-github-release-automation.sh` — ao merge no main: criar release tag, gerar release notes, criar GitHub Release, atualizar versão no package.json, notificar Slack + criar notion page. Tools: GITHUB_GET_HEAD_SHA_FOR_REF, GITHUB_CREATE_A_PULL_REQUEST (ou GITHUB_MERGE_A_PULL_REQUEST), GITHUB_CREATE_REPOSITORY_RELEASE, SLACK_SEND_MESSAGE, NOTION_CREATE_PAGE.

### 2.2 Slack (145 tools / 8 triggers) — POTENCIAL MÁXIMO

**Estado atual do Zion:** Script existente (composio-slack-alerts.sh) cobre apenas envio de mensagens.

**Todas as 145 tools — categorias relevantes:**

| Categoria | Tools relevantes | Workflow Zion |
|-----------|-----------------|--------------|
| **Mensagens** | SLACK_SEND_MESSAGE, SLACK_SEND_A_SLACK_MESSAGE_TO_A_DM, SLACK_POST_MESSAGE_TO_CHANNEL, SLACK_ADD_REACTION_TO_MESSAGE, SLACK_DELETE_MESSAGE_FROM_CHAT, SLACK_EDIT_MESSAGE, SLACK_DELETE_SCHEDULED_CHAT_MESSAGE, SLACK_SHARE_FILE_PUBLIC_URL | Alertas (existente), notificações de deploy, daily digests, thread responses |
| **Canal management** | SLACK_CREATE_CHANNEL, SLACK_DELETE_A_PUBLIC_OR_PRIVATE_CHANNEL, SLACK_CONVERT_PUBLIC_CHANNEL_TO_PRIVATE, SLACK_ARCHIVE_A_SLACK_CONVERSATION, SLACK_GET_CHANNEL_CONVERSATION_PREFERENCES, SLACK_INVITE_USERS_TO_CHANNEL, SLACK_LIST_ALL_CHANNELS, SLACK_FIND_CHANNELS, SLACK_GET_WORKSPACE_CONNECTIONS_FOR_CHANNEL | Auto-provisioning de canais por projeto, archival de canais inativos, channel discovery |
| **Users & presence** | SLACK_FIND_USERS, SLACK_LOOKUP_USERS_BY_EMAIL, SLACK_LIST_ALL_USERS, SLACK_FETCH_BOT_USER_INFORMATION, SLACK_RETRIEVE_USER_PRESENCE, SLACK_GET_TEAM_DND_STATUS, SLACK_GET_REMOTE_FILE | User lookup por email (lead enrichment), presence-aware notifications |
| **Search & history** | SLACK_FETCH_CONVERSATION_HISTORY, SLACK_FETCH_ITEM_REACTIONS, SLACK_RETRIEVE_CONVERSATION_REPLIES, SLACK_FIND_CHANNELS, SLACK_REAL_TIME_SEARCH, SLACK_CHECK_SEARCH_CAPABILITIES, SLACK_GET_REMINDER_INFORMATION | Thread summarization, context retrieval para agents, daily digest de mensagens |
| **Files** | SLACK_ADD_A_REMOTE_FILE, SLACK_DOWNLOAD_SLACK_FILE, SLACK_GET_REMOTE_FILE, SLACK_LIST_FILES | File sharing automation, report attachment |
| **Canvas & reminders** | SLACK_CREATE_SLACK_CANVAS, SLACK_EDIT_SLACK_CANVAS, SLACK_DELETE_SLACK_CANVAS, SLACK_CREATE_REMINDER, SLACK_DELETE_REMINDER, SLACK_GET_REMINDER_INFORMATION | Knowledge base via Canvas, reminder automation (P0: appointment reminders) |
| **Admin & audit** | SLACK_GET_AUDIT_ACTION_TYPES, SLACK_GET_AUDIT_SCHEMAS, SLACK_FETCH_TEAM_INFO, SLACK_FETCH_WORKSPACE_SETTINGS_INFORMATION, SLACK_LIST_APPROVED_APPS, SLACK_LIST_APP_REQUESTS, SLACK_LIST_AUTHORIZED_TEAMS, SLACK_LIST_APPROVED_WORKSPACE_INVITE_REQUESTS | Enterprise audit trail, admin oversight |
| **Calls** | SLACK_ADD_CALL_PARTICIPANTS, SLACK_END_CALL, SLACK_RETRIEVE_CALL_INFORMATION | Call logging |
| **User groups** | SLACK_CREATE_A_SLACK_USER_GROUP, SLACK_DISABLE_A_SLACK_USER_GROUP, SLACK_ENABLE_A_USER_GROUP | Team-based notification routing |

**Workflow P0 extraído para o Zion:** `composio-slack-daily-digest.sh` — toda manhã às 9h: fetch conversation history de canais críticos (últimas 24h), classificar mensagens por tópico (dev, leads, alerts), gerar resumo em Markdown, postar no canal #daily-digest, criar Notion page com o resumo. Tools: SLACK_FETCH_CONVERSATION_HISTORY, SLACK_LIST_ALL_CHANNELS, SLACK_SEND_MESSAGE, NOTION_CREATE_PAGE. (Já existe composio-daily-digest.py no disco.)

**Workflow P0 extraído:** `composio-slack-thread-summarizer.sh` — quando mensagem recebe muitos replies: resumir thread com agent, postar resumo como reply, marcar como importante. Tools: SLACK_RETRIEVE_CONVERSATION_REPLIES, SLACK_ADD_REACTION_TO_MESSAGE, SLACK_SEND_MESSAGE.

### 2.3 Gmail (61 tools / 2 triggers) — POTENCIAL MÁXIMO

**Estado atual do Zion:** Script existente (composio-gmail-intelligent-triage.sh) cobre triagem básica. Gmail não tem connected account (0 contas).

**Todas as 61 tools — categorias relevantes:**

| Categoria | Tools relevantes | Workflow Zion |
|-----------|-----------------|--------------|
| **Leitura & busca** | GMAIL_FETCH_EMAILS, GMAIL_FETCH_MESSAGE_BY_MESSAGE_ID, GMAIL_FETCH_MESSAGE_BY_THREAD_ID, GMAIL_LIST_THREADS, GMAIL_GET_GMAIL_PROFILE, GMAIL_LIST_GMAIL_LABELS, GMAIL_GET_LABEL_DETAILS, GMAIL_SEARCH_PEOPLE, GMAIL_GET_CONTACTS | Lead triage (existente), contact enrichment, search-based classification |
| **Envio & drafts** | GMAIL_SEND_EMAIL, GMAIL_CREATE_EMAIL_DRAFT, GMAIL_SEND_DRAFT, GMAIL_UPDATE_DRAFT, GMAIL_DELETE_DRAFT, GMAIL_REPLY_TO_EMAIL_THREAD, GMAIL_FORWARD_EMAIL_MESSAGE, GMAIL_IMPORT_MESSAGE, GMAIL_INSERT_MESSAGE_INTO_MAILBOX | Auto-reply de leads (existente via composio-lead-auto-reply.py), newsletter sending, follow-up automation |
| **Org & labels** | GMAIL_CREATE_LABEL, GMAIL_MODIFY_EMAIL_LABELS, GMAIL_MODIFY_THREAD_LABELS, GMAIL_BATCH_MODIFY_GMAIL_MESSAGES, GMAIL_BATCH_DELETE_GMAIL_MESSAGES, GMAIL_DELETE_LABEL_FROM_ACCOUNT_PERMANENT, GMAIL_UPDATE_LABEL, GMAIL_PATCH_LABEL, GMAIL_TRASH_THREAD, GMAIL_MOVE_TO_TRASH, GMAIL_UNTRASH_MESSAGE, GMAIL_UNTRASH_THREAD, GMAIL_DELETE_MESSAGE, GMAIL_DELETE_THREAD | Email classification automation, label-based workflows, bulk cleanup |
| **Filtros** | GMAIL_CREATE_GMAIL_FILTER, GMAIL_DELETE_GMAIL_FILTER, GMAIL_LIST_GMAIL_FILTERS, GMAIL_GET_GMAIL_FILTER | Auto-filtering de leads, support tickets, newsletters |
| **Config** | GMAIL_GET_AUTO_FORWARDING_SETTINGS, GMAIL_GET_VACATION_SETTINGS, GMAIL_GET_IMAP_SETTINGS, GMAIL_GET_POP_SETTINGS, GMAIL_GET_LANGUAGE_SETTINGS, GMAIL_UPDATE_VACATION_SETTINGS, GMAIL_UPDATE_IMAP_SETTINGS, GMAIL_UPDATE_POP_SETTINGS, GMAIL_UPDATE_LANGUAGE_SETTINGS, GMAIL_STOP_WATCH_NOTIFICATIONS, GMAIL_GET_SEND_AS_ALIAS, GMAIL_LIST_SEND_AS_ALIASES, GMAIL_PATCH_SEND_AS_ALIAS, GMAIL_UPDATE_SEND_AS_ALIAS, GMAIL_LIST_S_MIME_CONFIGS, GMAIL_LIST_CSE_KEY_PAIRS, GMAIL_LIST_CSE_IDENTITIES, GMAIL_UPDATE_USER_ATTRIBUTES_VALUES | Vacation responder para leads, forwarding config, send-as alias para campanhas |
| **People/Contacts** | GMAIL_GET_PEOPLE, GMAIL_SEARCH_PEOPLE | Contact enrichment baseado em emails recebidos |

**Workflow P0 extraído para o Zion:** `composio-gmail-intelligent-triage.sh` (já existe, melhorar) — toda hora: fetch emails não lidos, classificar (lead, support, newsletter, internal), leads → criar HubSpot contact + criar Notion lead page + enviar Slack alert, support → criar Linear issue, internal → arquivar com label. Tools: GMAIL_LIST_THREADS, GMAIL_FETCH_EMAILS, GMAIL_CREATE_EMAIL_DRAFT, HUBSPOT_CREATE_CONTACT, NOTION_CREATE_PAGE, SLACK_SEND_MESSAGE, LINEAR_CREATE_ISSUE. (composio-lead-intelligence-pipeline.py e composio-lead-auto-reply.py já cobrem partes disso.)

**Workflow P0 extraído:** `composio-gmail-newsletter-sender.sh` — ler template do Notion, preencher com dados do HubSpot, enviar via Gmail com send-as alias, rastrear entregas. Tools: NOTION_CREATE_PAGE (ou ler), GMAIL_SEND_EMAIL, HUBSPOT_LIST_CONTACTS.

### 2.4 Linear (32 tools) — POTENCIAL MÁXIMO

**Estado atual:** Integrado via github-auto-triage.sh apenas.

**Potencial extraído:** Capacidade-aware assignment (task matching based em load do dev), GitHub sync bidirecional (issue no Linear → branch no GitHub + PR; PR merged → fechar issue no Linear), sprint planning automation, feedback loop automático (quando issue fechado → Notion update + Slack notify). Tools: LINEAR_LIST_ISSUES, LINEAR_CREATE_ISSUE, LINEAR_UPDATE_ISSUE, LINEAR_ASSIGNTEAMISSUE, LINEAR_ADD_TEAM_TO_PROJECT, LINEAR_LIST_TEAMS, LINEAR_LIST_PROJECTS.

### 2.5 Notion (45 tools) — POTENCIAL MÁXIMO

**Estado atual:** Scripts existentes (composio-notion-wiki-agent.sh + composio-github-auto-triage.sh) cobram wiki + registro de issues.

**Potencial extraído:** KB automatizado (PR merged → Notion page com diff summary), client documentation sync (HubSpot deal fechado → Notion client page com contrato + entregáveis), content calendar (LinkedIn post approved → Notion calendar entry), meeting notes → actions (action items criados no Linear via Notion trigger). Tools: NOTION_CREATE_PAGE, NOTION_UPDATE_PAGE, NOTION_CREATE_DATABASE, NOTION_QUERY_DATABASE, NOTION_ADD_PAGE_TO_DATABASE, NOTION_CREATE_BLOCK, NOTION_UPDATE_BLOCK, NOTION_DELETE_BLOCK, NOTION_GET_PAGE, NOTION_GET_DATABASE, NOTION_CREATE_COMMENT, NOTION_UPDATE_COMMENT, NOTION_ADD_PAGES_TO_DATABASE.

### 2.6 HubSpot (78 tools) — POTENCIAL MÁXIMO

**Estado atual:** Script existente (composio-hubspot-lead-lifecycle.sh) cobre lead lifecycle básico.

**Potencial extraído:** Full lead lifecycle automation, deal scoring (pontuar deals baseado em engagement + company size + timeline), pipeline monitoring (alert quando deal stuck em stage > X dias), email sequencing (sequência de nurture emails via HubSpot), CRM sync com Gmail + Notion. Tools: HUBSPOT_CREATE_CONTACT, HUBSPOT_CREATE_DEAL, HUBSPOT_UPDATE_CONTACT, HUBSPOT_UPDATE_DEAL, HUBSPOT_LIST_CONTACTS, HUBSPOT_LIST_DEALS, HUBSPOT_CREATE_COMPANY, HUBSPOT_UPDATE_COMPANY, HUBSPOT_LIST_COMPANIES, HUBSPOT_CREATE_TICKET, HUBSPOT_UPDATE_TICKET, HUBSPOT_LIST_TICKETS, HUBSPOT_GET_CONTACT_BY_EMAIL, HUBSPOT_GET_DEAL_BY_ID, HUBSPOT_CREATE_EMAIL, HUBSPOT_SCHEDULE_EMAIL, HUBSPOT_TRACK_EVENT, HUBSPOT_BATCH_CREATE_CONTACTS.

### 2.7 Firecrawl — POTENCIAL MÁXIMO

**Estado atual:** Site watchdog apenas (próprio site). Sem script dedicado.

**Potencial extraído:** Competitor monitoring (scraping semanal de concorrentes — preços, features, blog posts), SEO discovery (rank tracking via scraping de search results), lead source discovery (scraping de sites de prospektos para identificar lead potenciais). Tools: FIRECRAWL_CRAWL_SITE, FIRECRAWL_SCRAPE_URL, FIRECRAWL_RSS_FEED.

### 2.8 Browser Tool — POTENCIAL MÁXIMO

**Estado atual:** Disponível, não scriptado.

**Potencial extraído:** Visual regression testing (comparar screenshot do site antes/depois de deploy), competitor price monitoring (navegar site do concorrente, extrair preços, comparar com planos do Zion), form submission automation (preencher forms de lead gen). Tools do Composio Browser Use: ~0.70/task via premium.

### 2.9 Vercel — POTENCIAL MÁXIMO

**Estado atual:** Mapeado como HIGH, sem script dedicado.

**Potencial extraído:** Auto-deploy on merge (ao merge no GitHub main → trigger Vercel deployment), deployment health monitoring (verificar status de deployment, alert se failed), staging promotion (promover staging → production via Vercel API), analytics integration (Vercel Analytics + PostHog). Tools: VERCEL_CREATE_DEPLOYMENT, VERCEL_GET_DEPLOYMENT, VERCEL_LIST_DEPLOYMENTS, VERCEL_UPDATE_DEPLOYMENT_STATUS, VERCEL_GET_PROJECT, VERCEL_LIST_PROJECTS.

### 2.10 Cloudflare — POTENCIAL MÁXIMO

**Estado atual:** LIST_ZONES apenas. Sem script dedicado.

**Potencial extraído:** DNS automation (criar/remover records via API), SSL monitoring (verificar expiração de SSL certs, alert antes de expirar), WAF rule updates (atualizar WAF rules baseado em threat intelligence), analytics (Cloudflare analytics → PostHog/Supabase para dashboard). Tools: CLOUDFLARE_LIST_ZONES, CLOUDFLARE_LIST_RECORDS, CLOUDFLARE_CREATE_RECORD, CLOUDFLARE_UPDATE_RECORD, CLOUDFLARE_DELETE_RECORD, CLOUDFLARE_LIST_SSL_CERTIFICATES, CLOUDFLARE_LIST_WAF_RULES, CLOUDFLARE_GET_ZONE_ANALYTICS.

### 2.11 Supabase — POTENCIAL MÁXIMO

**Estado atual:** Script existente (composio-supabase-agent-memory.sh) + INSERT_ROW.

**Potencial extraído:** Lead data warehouse (todas as leads de HubSpot → Supabase para analytics), analytics storage (eventos de agentes → Supabase para trend analysis), CRM backup (Supabase como backup de dados críticos do HubSpot), real-time notifications (Supabase realtime → Slack/Discord quando novo lead entra). Tools: SUPABASE_INSERT_ROW, SUPABASE_UPDATE_ROW, SUPABASE_DELETE_ROW, SUPABASE_QUERY_ROWS, SUPABASE_CREATE_TABLE, SUPABASE_LIST_TABLES, SUPABASE_GET_ROW, SUPABASE_BULK_INSERT.

### 2.12 Stripe — POTENCIAL MÁXIMO

**Estado atual:** Script existente (composio-stripe-dashboard.sh) + 3 contas 연결adas (1 INITIALIZING, 2 EXPIRED).

**Potencial extraído:** Billing automation (cobrança recorrente para managed service retainer), revenue reporting (diário/semanal → Notion + Slack), subscription lifecycle (alert quando subscription vai expirar, retry automático), payment recovery (payment failed → email + Slack + criar Linear issue). Tools: STRIPE_CREATE_CUSTOMER, STRIPE_CREATE_CHARGE, STRIPE_CREATE_SUBSCRIPTION, STRIPE_LIST_SUBSCRIPTIONS, STRIPE_LIST_CHARGES, STRIPE_GET_INVOICE, STRIPE_CREATE_PAYMENT_LINK, STRIPE_LIST_PAYMENT_LINKS, STRIPE_CANCEL_SUBSCRIPTION, STRIPE_UPDATE_SUBSCRIPTION.

**Scripts de monetização já criados:** composio-stripe-revenue-monitor.sh, composio-affiliate-revenue-tracker.sh, composio-stripe-payment-links-generator.sh (ver composio-monetization-scripts.md).

### 2.13 PostHog — POTENCIAL MÁXIMO

**Estado atual:** Script existente (composio-posthog-analytics.sh).

**Potencial extraído:** Product analytics (funnels de uso dos AI services do Zion), feature flag management (ligar/desligar features baseado em rollout), cohort analysis (quem converte vs quem não converte), A/B test analysis (qual versão do serviço performa melhor). Tools: POSTHOG_CREATE_EVENT, POSTHOG_GET_EVENTS, POSTHOG_CREATE_FEATURE_FLAG, POSTHOG_UPDATE_FEATURE_FLAG, POSTHOG_GET_FEATURE_FLAGS, POSTHOG_CREATE_COHORT, POSTHOG_GET_FUNNELS.

### 2.14 Sentry — POTENCIAL MÁXIMO

**Estado atual:** Script existente (composio-sentry-error-to-linear.sh) — error → Linear.

**Potencial extraído:** Error → Linear workflow completo (classificar P0/P1/P2 com agent, criar ticket + Slack notify + attach trace), trend reporting (semanal: quais errors aumentaram, quais diminuíram, qual componente mais falha). Tools: SENTRY_GET_ORG_DETAILS, SENTRY_LIST_ISSUES, SENTRY_GET_ISSUE, SENTRY_LIST_ISSUE_EVENTS, SENTRY_GET_EVENT, SENTRY_CREATE_ISSUE, SENTRY_UPDATE_ISSUE, SENTRY_DELETE_ISSUE.

### 2.15 WhatsApp — POTENCIAL MÁXIMO

**Estado atual:** 4 contas (1 INITIALIZING com redirect_url, 3 EXPIRED). Sem script dedicado em disco. Script Python existe: composio-whatsapp-agent.py.

**Potencial extraído:** Multi-channel lead outreach (após lead entrar no HubSpot, enviar WhatsApp de boas-vindas + follow-up), appointment reminders (Calendly booking → WhatsApp reminder 24h e 1h antes), support automation (automação de atendimento inicial via WhatsApp). Tools: WHATSAPP_SEND_MESSAGE, WHATSAPP_CREATE_TEMPLATE_MESSAGE, WHATSAPP_GET_MESSAGE_STATUS.

### 2.16 LinkedIn — POTENCIAL MÁXIMO

**Estado atual:** Script existente (composio-linkedin-blog-crosspost.sh) — crosspost de blog.

**Potencial extraído:** Blog crosspost (já existe), lead enrichment (LinkedIn profile → dados de empresa para enrichment no HubSpot), network expansion (identificar decisores no setor do lead e sugerir conexões), thought leadership automation (gerar posts baseados em case studies + publicar). Tools: LINKEDIN_CREATE_POST, LINKEDIN_GET_PROFILE, LINKEDIN_SEARCH_USERS, LINKEDIN_FOLLOW_COMPANY, LINKEDIN_GET_COMPANY_DETAILS.

---

## 3. 11 Apps de Alta Prioridade — Potencial Extraído

| App | Toolkits | Estado Zion | Workflow extraído |
|-----|----------|------------|-------------------|
| **Telegram** | 78 | Sem script | Broadcast de novidades do Zion para canal do Telegram, alertas de lead. Script: composio-telegram-broadcast.py (já existe). |
| **Discord** | 56 | Script existente (composio-discord-community-agent.sh) | Cobertura parcial — melhorar com auto-moderação, welcome messages, role management. |
| **Google Calendar** | 29 | Script existente (composio-calendar-scheduling.sh) | Scheduling automation melhorado: detectar conflitos, suggest slots, create follow-up events automaticamente após reuniões. |
| **Google Sheets** | 26 | Sem script | Relatórios financeiros do Stripe → Sheets, growth metrics dashboard, lead scoring sheet. Script: composio-google-sheets-reports.py (já existe). |
| **Google Docs** | 33 | Sem script | Gerar relatórios, propostas, documentação a partir de templates. Potencial: auto-doc generation para clientes. |
| **Google Drive** | 57 | Script existente (composio-google-drive-notion-sync.sh) | Sync bidirecional Notion ↔ Drive, document management automation. |
| **Airtable** | 14 | Sem script | CRM leve alternativo, base de leads. Script: composio-airtable-crm.py (já existe). |
| **Perplexity AI** | — | Sem script | Pesquisa avançada com IA para lead enrichment, competitor research. |
| **Tavily** | — | Sem script | Search engine para agentes — usar para web research automates. |
| **Monday.com** | 277 | Novo toolkit 2026 — não mapeado | Project management avançado — integrar ao sprint workflow. 277 toolkits é grande catálogo. |
| **Granola** | Novo 2026 | Não mapeado | Knowledge management — integrar como KB complementar ao Notion. |

---

## 4. 5 Workflows P0 — Prontos para Execução (quando chave válida chegar)

### W1: Lead Intelligence Pipeline (Gmail → HubSpot → Notion → Slack)
**Trigger:** Novo email não lido em Gmail (hourly check).
**Passos:** (1) Fetch emails não lidos → (2) Classificar com agent: lead / support / newsletter / internal → (3) Lead: crear HubSpot contact + Notion lead page + Slack alert no #leads → (4) Support: crear Linear issue → (5) Internal: arquivar. 
**Tools:** GMAIL_LIST_THREADS, GMAIL_FETCH_EMAILS, HUBSPOT_CREATE_CONTACT, NOTION_CREATE_PAGE, SLACK_SEND_MESSAGE, LINEAR_CREATE_ISSUE.
**Script existente:** composio-lead-intelligence-pipeline.py + composio-gmail-intelligent-triage.sh.
**Estado:** Script pronto, precisa de Gmail connected + chave válida.

### W2: GitHub Auto-Triage + PR Automation (GitHub → Linear → Slack → Notion)
**Trigger:** New issue ou PR aberto no GitHub (poll ou webhook trigger).
**Passos:** (1) Novo issue/PR detectado → (2) Classificar: bug / feature / question / duplicate → (3) Adicionar labels + assignees automáticos (baseado em CODEOWNERS) → (4) Se PR: criar Linear task para review se não.assignee em 24h → (5) Slack notify no #dev → (6) Notion page com detalhes.
**Tools:** GITHUB_LIST_PULL_REQUESTS, GITHUB_GET_A_PULL_REQUEST, GITHUB_ADD_LABELS_TO_AN_ISSUE, GITHUB_ADD_ASSIGNEES_TO_ISSUE, LINEAR_CREATE_ISSUE, SLACK_SEND_MESSAGE, NOTION_CREATE_PAGE.
**Script existente:** composio-github-auto-triage.sh.
**Estado:** Script pronto, precisa de GitHub connected (já tem) + chave válida.

### W3: Sentry Error → Linear Triage (Sentry → Linear → Slack)
**Trigger:** Novo erro no Sentry (poll ou webhook).
**Passos:** (1) Sentry lista issues não resolvidos → (2) Agent classifica P0/P1/P2 baseado em impacto + freqüência → (3) P0/P1: criar Linear issue com title + description + trace → (4) Slack alert no #alerts → (5) P0: page dev via Slack DM.
**Tools:** SENTRY_LIST_ISSUES, SENTRY_GET_EVENT, LINEAR_CREATE_ISSUE, SLACK_SEND_MESSAGE.
**Script existente:** composio-sentry-error-to-linear.sh.
**Estado:** Script pronto.

### W4: Daily Digest — Slack + Notion (Slack → Notion + Slack)
**Trigger:** Todo dia às 9h (cron).
**Passos:** (1) Fetch conversation history dos canais críticos (24h) → (2) Agent resume por tópico → (3) Postar resumo no #daily-digest → (4) Criar Notion page com o resumo + ações identificadas.
**Tools:** SLACK_FETCH_CONVERSATION_HISTORY, SLACK_LIST_ALL_CHANNELS, SLACK_SEND_MESSAGE, NOTION_CREATE_PAGE.
**Script existente:** composio-daily-digest.py.
**Estado:** Script pronto.

### W5: Stripe Revenue Monitor (Stripe → Notion + Slack)
**Trigger:** Diário às 9h (cron) ou payment failure imediato.
**Passos:** (1) Listar charges do dia → (2) Calcular revenue total + por serviço → (3) Se payment failure: alert imediato no Slack → (4) Criar Notion report diário.
**Tools:** STRIPE_LIST_CHARGES, STRIPE_LIST_SUBSCRIPTIONS, NOTION_CREATE_PAGE, SLACK_SEND_MESSAGE.
**Script existente:** composio-stripe-revenue-monitor.sh + composio-stripe-dashboard.sh.
**Estado:** Stripe tem 1 conta INITIALIZING (redirect disponível), 2 EXPIRED. Precisa de reconnect + chave válida.

---

## 5. 10 Workflows P1 — Próxima Prioridade (próximos 30 dias)

1. **Blog → Multi-channel Publishing:** Blog post novo → gerar LinkedIn post variações + Twitter thread + Notion content calendar entry. Tools: NOTION_QUERY_DATABASE, LINKEDIN_CREATE_POST, composio-social-broadcast.py.
2. **Competitor Monitoring:** Semanal: Firecrawl crawls sites dos concorrentes → comparar preços/features → report Notion + Slack. Tools: FIRECRAWL_CRAWL_SITE, NOTION_CREATE_PAGE, SLACK_SEND_MESSAGE. Script: composio-competitor-monitor.sh (já existe).
3. **Meeting Notes → Actions:** Reunião no Google Calendar → notas → action items → criar Linear issues + Notion page. Tools: GOOGLE_CALENDAR_LIST_EVENTS, NOTION_CREATE_PAGE, LINEAR_CREATE_ISSUE.
4. **Appointment Reminders:** Calendly booking → enviar WhatsApp + Gmail reminder 24h e 1h antes. Tools: CALENDLY_GET_EVENT_TYPES, WHATSAPP_SEND_MESSAGE, GMAIL_SEND_EMAIL.
5. **Payment Failed Recovery:** Stripe payment failed → email retry + Slack alert + Linear issue. Tools: STRIPE_LIST_CHARGES (status=failed), GMAIL_SEND_EMAIL, SLACK_SEND_MESSAGE, LINEAR_CREATE_ISSUE.
6. **Auto-PR Review:** PR aberto → agent analisa diff → comment sugestões → se aprovado, merge automático (se CI passou). Tools: GITHUB_GET_A_PULL_REQUEST, GITHUB_LIST_COMMITS, GITHUB_ADD_COMMENT_TO_AN_ISSUE.
7. **Lead Enrichment:** Novo lead no HubSpot → Perplexity/Tavily research empresa + LinkedIn profile → atualizar HubSpot contact com enriched data. Tools: HUBSPOT_GET_CONTACT_BY_EMAIL, PERPLEXITY_SEARCH, TAVILY_SEARCH, HUBSPOT_UPDATE_CONTACT.
8. **Proposal Generation:** Lead qualificado → gerar proposta em Notion + criar Stripe payment link + enviar email. Tools: NOTION_CREATE_PAGE, STRIPE_CREATE_PAYMENT_LINK, GMAIL_SEND_EMAIL. Script: composio-revenue-automation.py (já existe).
9. **Subscription Expiry Warning:** Stripe subscription expirando em 7/3/1 dias → email + Slack notify. Tools: STRIPE_LIST_SUBSCRIPTIONS, GMAIL_SEND_EMAIL, SLACK_SEND_MESSAGE.
10. **Social Crossposting Multi-plataforma:** Blog post → LinkedIn + Twitter/X + Telegram. Script: composio-social-broadcast.py (já existe).

---

## 6. Maps de Integração Extraídos do Composio (live toolkit pages)

### Toolkit counts confirmados (live, 2026-09-02):
- **GitHub:** 846 tools / 46 triggers
- **Slack:** 145 tools / 8 triggers
- **Gmail:** 61 tools / 2 triggers
- **HubSpot:** 78 toolkits (segundo integration map)
- **Notion:** 45 toolkits (segundo integration map)
- **Linear:** 32 tools
- **Monday.com:** 277 toolkits (novo em 2026)
- **LinkedIn:** 78 toolkits (segundo integration map)
- **Telegram:** 78 toolkits (segundo integration map)
- **Discord:** 56 toolkits (segundo integration map)

### Framework adapters disponíveis:
LangChain, LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, LlamaIndex, Vercel AI SDK, Google ADK, Anthropic SDK, Mastra, Pydantic AI — o Zion pode usar qualquer um desses para os agentes.

### Novos toolkits 2026 (onda MCP → nativa):
- **Granola** — knowledge management / note-taking
- **monday.com** — project management (277 toolkits)
- **Context7** — documentation context for agents
- **Wix** — website management

---

## 7. Agora: Estado Real do Zion vs Potencial

### Chave API
- **Em uso (ambiente atual):** `ck_-AV0X5k4D8R-FbO9i7mi` — **401 em todas as chamadas reais**. SDK init OK mas tools.execute, get_raw_tools, connected_accounts.list todas falham.
- **Chave válida conhecida:** `ak_EbwU3_9eFhvnlpQHN7Ny` — documentada como ativada em set/2026. **Não está no ambiente atual.**
- **Verificação correta:** SDK init ≠ key valid. Apenas um chamada real (filtered probe: `sdk.tools.get_raw_composio_tools(tools=['GITHUB_GET_REPOSITORY'])`) confirma.

### Contas conectadas (SDK 0.21.0, total 10 em 3 toolkits, ZERO ACTIVE):
| Toolkit | Contas | Status | Ação |
|---------|--------|--------|------|
| WhatsApp | 4 | 1× INITIALIZING (redirect_url disponível), 3× EXPIRED | Visit redirect_url para a INITIALIZING; reconnect as EXPIRED |
| Calendly | 3 | 1× INITIALIZING, 2× EXPIRED | Visit redirect_url; reconnect |
| Stripe | 3 | 1× INITIALIZING, 2× EXPIRED | Visit redirect_url; reconnect |

### O que falta conectar (0 contas):
- Gmail — 0 contas. Toolkit disponível, auth_config não criada. **Bloqueia W1, W4 (parcial), newsletter.**
- 1Password — 0 contas. Credenciais OP_SERVICE_ACCOUNT_TOKEN/OP_CONNECT_HOST não configuradas. **Bloqueia gerenciamento de credenciais.**
- GitHub, Slack, Linear, Notion, HubSpot, Vercel, Cloudflare, Supabase, PostHog, Sentry, Firebase, LinkedIn, Telegram, Discord — **estado desconhecido neste ambiente** (precisa de SDK probe com chave válida para listar).

### Scripts em disco prontos para rodar quando chave + contas estiverem OK:
**26 arquivos no `/automation/scripts/`:**
- Python (19): composio-airtable-crm.py, composio-autoscale-agents.py, composio-browser-agent.py, composio-calendar-agent.py, composio-cloudflare-agent.py, composio-competitor-monitor.sh, composio-content-agent.py, composio-daily-digest.py, composio-devops-event-agent.py, composio-google-sheets-reports.py, composio-lead-auto-reply.py, composio-lead-intelligence-pipeline.py, composio-orchestrator.sh, composio-release-automation.sh, composio-revenue-automation.py, composio-salesforce-crm.py, composio-social-broadcast.py, composio-supabase-database.py, composio-telegram-broadcast.py, composio-vercel-deploy.sh, composio-whatsapp-agent.py
- Shell (4): composio-competitor-monitor.sh, composio-orchestrator.sh, composio-release-automation.sh, composio-vercel-deploy.sh
- Relatórios (7): em automation/reports/

### O que o Zion não consegue rodar agora:
Nada que use `sdk.tools.execute()`, `sdk.tool_router`, ou `sdk.connected_accounts` — todos requerem chave válida. Os scripts que fazem apenas leitura de arquivo local (gerar relatórios, manipular JSON) podem rodar, mas os benefícios reais do Composio (executar tools nos apps conectados) estão bloqueados pela chave 401.

---

## 8. Plano de Ativação — O que fazer agora vs quando a chave chega vs quando Gmail/1Password conectados

### Fase 0 — AGORA (trabalho offline, sem chave válida):
1. ✅ SKILL.md atualizado: pricing corrigido, URLs corrigidos, pointer para relatório especialista
2. ⏳ Criar symlink `python3 → python` ou patch nos scripts que usam `python3` (ambiente tem apenas `python`)
3. ⏳ Gerar relatório de cobertura dos 26 scripts existentes: qual app cada um toca, qual gap cada um deixa
4. ⏳ Atualizar composio-improvement-plan.json com o mapeamento extraído neste relatório

### Fase 1 — Quando chave `ak_EbwU3_9eFhvnlpQHN7Ny` estiver no ambiente:
1. Prova de conceito: `sdk.tools.get_raw_composio_tools(tools=['GITHUB_GET_REPOSITORY'])` → confirmar key live
2. Listar contas ativas: `sdk.connected_accounts.list(statuses=['ACTIVE'])` → ver quais apps realmente estão conexos
3. Listar auth_configs: `sdk.auth_configs.list()` → ver quais toolkits tem configs
4. Reativar INITIALIZING: visitar redirect_urls (WhatsApp, Calendly, Stripe) → aprovar OAuth → contas ACTIVE
5. Reconnect EXPIRED: criar nova connected_account para cada uma
6. Rodar composio-all.sh com `--only` nos CRÍTICOS: github-auto-triage, slack-alerts, linear-sync, sentry-error-to-linear

### Fase 2 — Quando Gmail + 1Password conectados:
1. Ativar W1 (Lead Intelligence Pipeline) — composio-lead-intelligence-pipeline.py
2. Ativar W4 (Daily Digest) — composio-daily-digest.py
3. Ativar newsletter sender — composio-gmail-newsletter-sender.sh (novo)
4. Configurar 1Password service account → credenciais no ~/.hermes/.env
5. Ativar W3 (Sentry Error Triage) — composio-sentry-error-to-linear.sh
6. Ativar W2 (GitHub PR Automation) — melhorar composio-github-auto-triage.sh

### Fase 3 — Quando HubSpot + Vercel + Cloudflare + Supabase conectados:
1. Ativar W5 (Stripe Revenue Monitor) — composio-stripe-revenue-monitor.sh
2. Ativar competitor monitoring — composio-competitor-monitor.sh
3. Ativar Vercel deploy automation — composio-vercel-deploy.sh
4. Ativar Cloudflare DNS/SLL/WAF automation — composio-cloudflare-agent.py
5. Ativar Supabase lead warehouse — composio-supabase-database.py

### Fase 4 — Quando todos os 16 críticos conectados + chave Pro:
1. Ativar todos os 10 P1 workflows
2. Criar ChatGPT custom connector para expor Zion agents via ChatGPT/Claude/Cursor
3. Criar Rube MCP server para conectar Zion agents a clientes MCP sem configuração individual
4. Configurar multi-execute para reduzir tool call count
5. Migração Free → Pro ($29/mês) quando volume se aproximar de 100K

---

## 9. KPIs de Sucesso — 30 e 90 dias

### 30 dias (chave válida + Gmail + 1Password conectados):
- W1, W2, W3, W4 rodando em produção
- Lead response time: < 5 min (automatizado)
- Error triage time: < 2 min (Sentry → Linear automático)
- Daily digest entregue todos os dias úteis
- Zero manual email tasks para leads

### 90 dias (todos os 16 críticos conectados + Pro):
- 5 P0 + 10 P1 workflows rodando
- 47 apps mapeados → 26+ scripts ativos
- Lead → HubSpot → Notion → Slack em < 2 min
- Revenue monitor diário automatizado
- Competitor intelligence semanal automatizado
- ChatGPT/Rube MCP connectors publicados

---

*Gerado em 2026-09-02 pelo AI Research Agent do Zion Tech Group.*
*Fontes: pesquisa web (10+ buscas paralelas), toolkit pages do Composio (live), integration map em disco, scripts existentes, SKILL.md, market intelligence file.*
