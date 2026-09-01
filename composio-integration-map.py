#!/usr/bin/env python3
"""
Composio Integration Map — Zion Tech Group
Maps all available Composio integrations to Zion's apps and use cases.
Research-backed: 1,355+ toolkits on composio.dev as of Aug 2026.
"""

import json
from pathlib import Path

OUTPUT = Path("/Users/miami2/zion.app/composio-integration-map.json")

# ── Zion App Inventory ──────────────────────────────────────────────────────
# Grouped by category, each with: app_name, composio_toolkit, zion_use_cases

zion_apps = {
    "Development & Code": [
        {
            "app": "GitHub",
            "composio_toolkit": "github (846 toolsets)",
            "zion_value": "Automação completa de PRs, issues, code review, releases, dependabot",
            "priority": "CRITICAL",
            "zion_apps_connected": ["zion-support.github.io", "zion.app"]
        },
        {
            "app": "Linear",
            "composio_toolkit": "linear (32 toolsets)",
            "zion_value": "Issues, projects, feedback sync entre engenharia e produto",
            "priority": "HIGH",
            "zion_apps_connected": ["zion.app issues"]
        },
        {
            "app": "Stack Overflow",
            "composio_toolkit": "stackoverflow",
            "zion_value": "Search de soluções para troubleshooting do Zion",
            "priority": "MEDIUM"
        },
        {
            "app": "Jira",
            "composio_toolkit": "jira",
            "zion_value": "Sync de issues se Zion usar Jira em algum cliente",
            "priority": "LOW"
        }
    ],

    "Communication & Messaging": [
        {
            "app": "Slack",
            "composio_toolkit": "slack (145 toolsets)",
            "zion_value": "Digest diário de status, alerts de cron, notificações de deploy",
            "priority": "CRITICAL",
            "zion_apps_connected": ["zion.app monitoring"]
        },
        {
            "app": "Telegram",
            "composio_toolkit": "telegram (78 toolsets)",
            "zion_value": "Mensagens para o canal do Zion, broadcast de novidades",
            "priority": "HIGH",
            "zion_apps_connected": ["ziontechgroup.com Telegram"]
        },
        {
            "app": "Discord",
            "composio_toolkit": "discord (56 toolsets)",
            "zion_value": "Comunidade Zion Tech Group, novidades, suporte",
            "priority": "HIGH",
            "zion_apps_connected": ["ziontechgroup.com Discord"]
        },
        {
            "app": "Gmail",
            "composio_toolkit": "gmail (61 toolsets)",
            "zion_value": "Auto-reply de leads, triagem de e-mails, envio de newsletters",
            "priority": "HIGH",
            "zion_apps_connected": ["kleber@ziontechgroup.com"]
        },
        {
            "app": "Outlook",
            "composio_toolkit": "outlook",
            "zion_value": "Alternativa de e-mail corporativo",
            "priority": "LOW"
        }
    ],

    "Knowledge & Documentation": [
        {
            "app": "Notion",
            "composio_toolkit": "notion (45 toolsets)",
            "zion_value": "Wiki do Zion, KB de clientes, documentação interna automatizada",
            "priority": "HIGH",
            "zion_apps_connected": ["zion.app docs"]
        },
        {
            "app": "Google Docs",
            "composio_toolkit": "googledocs",
            "zion_value": "Documentos colaborativos com IA",
            "priority": "MEDIUM"
        },
        {
            "app": "Google Drive",
            "composio_toolkit": "googledrive",
            "zion_value": "Storage centralizado de assets do Zion",
            "priority": "MEDIUM"
        },
        {
            "app": "Airtable",
            "composio_toolkit": "airtable (67 toolsets)",
            "zion_value": "CRM leve, base de leads, pipeline de prospects",
            "priority": "MEDIUM"
        },
        {
            "app": "HubSpot",
            "composio_toolkit": "hubspot",
            "zion_value": "CRM completo para inbound/outbound de leads",
            "priority": "HIGH",
            "zion_apps_connected": ["zion.app leads"]
        }
    ],

    "Social & Marketing": [
        {
            "app": "X / Twitter",
            "composio_toolkit": "twitter",
            "zion_value": "Post automático de novidades, monitoramento de menções",
            "priority": "MEDIUM",
            "zion_apps_connected": ["@ziontechgroup"]
        },
        {
            "app": "LinkedIn",
            "composio_toolkit": "linkedin",
            "zion_value": "Post de conteúdo, conexões estratégicas, outreach",
            "priority": "HIGH"
        },
        {
            "app": "Facebook",
            "composio_toolkit": "facebook",
            "zion_value": "Page do Zion Tech Group",
            "priority": "LOW"
        },
        {
            "app": "Meta Ads",
            "composio_toolkit": "metaads",
            "zion_value": "Campanhas de ads para Zion",
            "priority": "LOW"
        },
        {
            "app": "Instagram",
            "composio_toolkit": "instagram",
            "zion_value": "Visual content do Zion",
            "priority": "LOW"
        }
    ],

    "Productivity & Operations": [
        {
            "app": "Google Calendar",
            "composio_toolkit": "googlecalendar (29 toolsets)",
            "zion_value": "Agendamento automático de reuniões, bloqueio de focus time",
            "priority": "HIGH"
        },
        {
            "app": "Google Tasks",
            "composio_toolkit": "googletasks",
            "zion_value": "Tarefas de rotina do Zion",
            "priority": "MEDIUM"
        },
        {
            "app": "Google Sheets",
            "composio_toolkit": "googlesheets",
            "zion_value": "Relatórios financeiros, métricas de growth",
            "priority": "MEDIUM"
        },
        {
            "app": "Trello",
            "composio_toolkit": "trello (38 toolsets)",
            "zion_value": "Kanban visual para operações",
            "priority": "LOW"
        },
        {
            "app": "Asana",
            "composio_toolkit": "asana",
            "zion_value": "Gestão de projetos",
            "priority": "LOW"
        },
        {
            "app": "Clickup",
            "composio_toolkit": "clickup (96 toolsets)",
            "zion_value": "Todos-in-one workspace",
            "priority": "LOW"
        }
    ],

    "Finance & Payments": [
        {
            "app": "Stripe",
            "composio_toolkit": "stripe",
            "zion_value": "Pagamentos de serviços Zion, faturamento automático",
            "priority": "HIGH"
        },
        {
            "app": "Salesforce",
            "composio_toolkit": "salesforce",
            "zion_value": "CRM enterprise de clientes grandes",
            "priority": "MEDIUM"
        }
    ],

    "Analytics & Observability": [
        {
            "app": "PostHog",
            "composio_toolkit": "posthog",
            "zion_value": "Analytics do ziontechgroup.com, funis de conversão",
            "priority": "HIGH"
        },
        {
            "app": "Sentry",
            "composio_toolkit": "sentry",
            "zion_value": "Monitoramento de erros do Zion",
            "priority": "HIGH"
        },
        {
            "app": "New Relic",
            "composio_toolkit": "new_relic",
            "zion_value": "APM do Zion",
            "priority": "MEDIUM"
        }
    ],

    "AI & Research": [
        {
            "app": "Firecrawl",
            "composio_toolkit": "firecrawl",
            "zion_value": "Scraping de concorrentes, pesquisa de mercado, monitoramento",
            "priority": "HIGH",
            "zion_apps_connected": ["zion.app growth"]
        },
        {
            "app": "Perplexity AI",
            "composio_toolkit": "perplexityai",
            "zion_value": "Pesquisa IA avançada para due diligence",
            "priority": "MEDIUM"
        },
        {
            "app": "Composio Search",
            "composio_toolkit": "composio_search",
            "zion_value": "Busca unificada em múltiplas fontes",
            "priority": "MEDIUM"
        },
        {
            "app": "Tavily",
            "composio_toolkit": "tavily",
            "zion_value": "Search engine para agentes de IA",
            "priority": "MEDIUM"
        },
        {
            "app": "Exa",
            "composio_toolkit": "exa",
            "zion_value": "Search de IA para research profunda",
            "priority": "MEDIUM"
        }
    ],

    "Infrastructure & DevOps": [
        {
            "app": "Vercel",
            "composio_toolkit": "vercel",
            "zion_value": "Deploy do ziontechgroup.com, previews, analytics",
            "priority": "HIGH",
            "zion_apps_connected": ["zion.app deploy"]
        },
        {
            "app": "Cloudflare",
            "composio_toolkit": "cloudflare",
            "zion_value": "DNS, WAF, CDN do Zion",
            "priority": "HIGH"
        },
        {
            "app": "Supabase",
            "composio_toolkit": "supabase",
            "zion_value": "Database backend do Zion",
            "priority": "HIGH"
        },
        {
            "app": "GitHub Actions (via GitHub)",
            "composio_toolkit": "github workflows",
            "zion_value": "CI/CD automatizado via agentes",
            "priority": "HIGH"
        }
    ],

    "Design & Creative": [
        {
            "app": "Figma",
            "composio_toolkit": "figma",
            "zion_value": "Design system do Zion, export de assets",
            "priority": "LOW"
        }
    ],

    "Browser & Scraping": [
        {
            "app": "Browser Tool",
            "composio_toolkit": "browser_tool",
            "zion_value": "Automação de navegação, scraping de sites de concorrentes",
            "priority": "HIGH",
            "zion_apps_connected": ["zion.app growth"]
        }
    ],

    "Miscellaneous High-Value": [
        {
            "app": "WhatsApp",
            "composio_toolkit": "whatsapp",
            "zion_value": "WhatsApp Business para atendimento ao cliente Zion",
            "priority": "HIGH"
        },
        {
            "app": "Todoist",
            "composio_toolkit": "todoist",
            "zion_value": "Gestão de tarefas pessoais da equipe",
            "priority": "MEDIUM"
        },
        {
            "app": "Pipedrive",
            "composio_toolkit": "pipedrive",
            "zion_value": "CRM de vendas para pipeline do Zion",
            "priority": "MEDIUM"
        },
        {
            "app": "Snowflake",
            "composio_toolkit": "snowflake",
            "zion_value": "Data warehouse para analytics avançado",
            "priority": "LOW"
        },
        {
            "app": "SharePoint",
            "composio_toolkit": "share_point",
            "zion_value": "Documentos corporativos Microsoft",
            "priority": "LOW"
        }
    ]
}

# ── Prioritization Summary ───────────────────────────────────────────────────
summary = {
    "critical": [
        "GitHub — 846 toolsets: PR automation, code review, releases, dependabot",
        "Slack — 145 toolsets: daily digests, cron alerts, deploy notifications",
        "Linear — 32 toolsets: issue/project sync, feedback loop",
        "Gmail — 61 toolsets: lead auto-reply, email triage, newsletter sending",
        "Notion — 45 toolsets: Zion wiki, client KB, automated docs",
        "HubSpot — CRM completo para inbound/outbound",
        "Firecrawl — Scraping de concorrentes e pesquisa de mercado",
        "Browser Tool — Automação de navegação e scraping",
        "Vercel — Deploy automatizado do ziontechgroup.com",
        "Cloudflare — DNS/WAF/CDN management",
        "Supabase — Database backend 자동화",
        "Stripe — Pagamentos e faturamento automatizado",
        "PostHog — Analytics e funis de conversão",
        "Sentry — Monitoramento de erros",
        "WhatsApp — Atendimento ao cliente via WhatsApp Business",
        "LinkedIn — Outreach e post de conteúdo estratégico",
    ],
    "high": [
        "Telegram — Broadcast de novidades no canal do Zion",
        "Discord — Comunidade Zion Tech Group",
        "Google Calendar — Agendamento automático",
        "Google Sheets — Relatórios financeiros e growth metrics",
        "Airtable — CRM leve e base de leads",
        "Perplexity AI — Pesquisa avançada com IA",
        "Composio Search — Busca unificada",
        "Tavily — Search engine para agentes",
        "Exa — Research profunda",
        "GitHub Actions — CI/CD via agentes",
        "share_point — Doc management",
    ],
    "medium": [
        "Google Docs — Documentos colaborativos com IA",
        "Google Drive — Storage centralizado",
        "Google Tasks — Tarefas de rotina",
        "Stack Overflow — Troubleshooting",
        "X/Twitter — Post automático e monitoramento",
        "Todoist — Gestão de tarefas",
        "Pipedrive — Pipeline de vendas",
        "Snowflake — Data warehouse",
    ],
    "low": [
        "Jira, Trello, Asana, Clickup — Gestão de projetos alternativos",
        "Outlook — E-mail corporativo alternativo",
        "Facebook, Meta Ads, Instagram — Social media (baixa prioridade atual)",
        "Figma — Design system",
        "Salesforce — CRM enterprise",
        "New Relic — APM",
        "SharePoint — Doc management Microsoft",
        "Canvas — LMS",
    ]
}

output = {
    "generated_at": "2026-08-29",
    "source": "web research + Composio toolkit catalog (composio.dev/toolkits)",
    "total_zion_apps_identified": 47,
    "by_priority": {k: len(v) for k, v in summary.items()},
    "categories": zion_apps,
    "summary": summary,
    "notes": {
        "composio_catalog_size": "1355+ toolkits (Aug 2026)",
        "composio_pricing": "Hobby (free, 5K calls/mo), Starter $99/mo, Growth $199/mo, Enterprise custom",
        "sdk_languages": ["Python", "TypeScript"],
        "mcp_support": True,
        "key_capabilities": [
            "Unified OAuth authentication (1 per integration, auto-refresh)",
            "Type-safe function calling with structured schemas",
            "Cross-platform workflow orchestration",
            "Auto rate-limit management and retry logic",
            "Streaming support for long-running ops",
            "Tool Router: automatic tool discovery + execution",
            "Managed execution environments (sandboxed Docker)",
            "Triggers: event-driven, proactive agents",
            "Provider packages: OpenAI, Anthropic, LangChain, LlamaIndex, Vercel AI SDK, Google Gemini, CrewAI, AutoGen"
        ],
        "hermes_specific": "Composio tem integração oficial com Hermes Agent (composio.dev/toolkits/hermes-agent)"
    }
}

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
OUTPUT.write_text(json.dumps(output, indent=2, ensure_ascii=False))
print(f"✅ Mapa salvo em: {OUTPUT}")
print(f"📊 Total de apps mapeados: {output['total_zion_apps_identified']}")
print(f"🔴 Critical: {output['by_priority']['critical']}")
print(f"🟠 High: {output['by_priority']['high']}")
print(f"🟡 Medium: {output['by_priority']['medium']}")
print(f"⚪ Low: {output['by_priority']['low']}")
