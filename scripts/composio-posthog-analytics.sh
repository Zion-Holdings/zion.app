#!/bin/bash
# =============================================================================
# composio-posthog-analytics.sh
# =============================================================================
# Métricas de Agente — PostHog + Slack + Notion
# =============================================================================
# Descrição:
#   Agente que consulta métricas de uso dos produtos/agentes do Zion via
#   PostHog, reporta adoção, retenção, funil de conversão e notifica no Slack.
#   Cria relatórios no Notion para auditoria e decision-making.
#
# Apps Conectados:
#   - PostHog (events, people, cohorts, funis)
#   - Slack (alertas, resumo de métricas)
#   - Notion (relatórios de analytics)
#
# Pré-requisitos:
#   - COMPOSIO_API_KEY configurado
#   - Conta Composio com PostHog, Slack e Notion conectados
#   - Python 3.8+ com composio SDK (pip install composio)
#
# Autor: Hermes Agent / Kleber Garcia Alcatrão
# Data: 30/08/2026
# Versão: 1.0.0
# =============================================================================

set -euo pipefail

# -----------------------------------------------------------------------------
# CONFIGURAÇÃO
# -----------------------------------------------------------------------------

SCRIPT_NAME="composio-posthog-analytics"
SCRIPT_VERSION="1.0.0"

COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
COMPOSIO_BASE_URL="${COMPOSIO_BASE_URL:-https://api.composio.dev}"
SLACK_CHANNEL="${SLACK_CHANNEL:-#zion-analytics}"
NOTION_DATABASE_ID="${NOTION_DATABASE_ID:-}"
LOG_LEVEL="${LOG_LEVEL:-INFO}"

# Configurações de análise
PROJECT_ID="${PROJECT_ID:-}"              # Project ID do PostHog
ANALYTICS_DAYS="${ANALYTICS_DAYS:-30}"   # Janela de análise
ENTITY_ID="${ENTITY_ID:-}"                # ID do produto/agente a analisar
EVENT_PREFIX="${EVENT_PREFIX:-zion_}"    # Prefixo dos eventos do Zion

# Thresholds de alerta
ADOPTION_THRESHOLD="${ADOPTION_THRESHOLD:-0.10}"    # alerta se adoção < 10%
RETENTION_THRESHOLD="${RETENTION_THRESHOLD:-0.20}"  # alerta se retenção < 20%
CONVERSION_DROP_THRESHOLD="${CONVERSION_DROP_THRESHOLD:-0.15}"  # alerta se queda > 15%

# -----------------------------------------------------------------------------
# FUNÇÕES DE LOG
# -----------------------------------------------------------------------------

log() {
    local level="$1"; shift
    local msg="$*"
    local ts
    ts="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
    if [[ "$level" == "ERROR" ]] || [[ "$LOG_LEVEL" == "DEBUG" ]]; then
        echo "[$ts] [$level] [$SCRIPT_NAME] $msg" >&2
    else
        echo "[$ts] [$level] [$SCRIPT_NAME] $msg"
    fi
}
log_info()  { log "INFO"  "$@"; }
log_warn()  { log "WARN"  "$@"; }
log_error() { log "ERROR" "$@"; }

die() { log_error "$@"; exit 1; }

require_env() {
    local var="$1"
    if [[ -z "${!var:-}" ]]; then
        die "Variável $var é obrigatória e não está configurada."
    fi
}

# -----------------------------------------------------------------------------
# VALIDAÇÃO
# -----------------------------------------------------------------------------

validate_prerequisites() {
    log_info "Validando pré-requisitos..."
    require_env "COMPOSIO_API_KEY"

    if ! python3 -c "import composio" 2>/dev/null; then
        log_warn "SDK Composio não encontrado. Tentando instalar..."
        pip install composio 2>/dev/null || die "Falha ao instalar composio SDK."
    fi

    if [[ -z "$PROJECT_ID" ]]; then
        log_warn "PROJECT_ID não configurado — alguns relatórios podem ser limitados."
    fi

    log_info "Pré-requisitos validados."
}

# -----------------------------------------------------------------------------
# AGENTE PRINCIPAL
# -----------------------------------------------------------------------------

run_analytics_agent() {
    log_info "Iniciando agente de métricas PostHog..."
    log_info "Janela: $ANALYTICS_DAYS dias | Evento prefixo: $EVENT_PREFIX"

    python3 - <<'PYEOF'
import os, sys, json, datetime
from typing import Dict, List, Any, Optional

try:
    from composio import Composio
except ImportError:
    print("ERRO: SDK Composio não disponível.")
    sys.exit(1)

API_KEY = os.environ.get("COMPOSIO_API_KEY", "")
if not API_KEY:
    print("ERRO: COMPOSIO_API_KEY não configurado.")
    sys.exit(1)

PROJECT_ID = os.environ.get("PROJECT_ID", "")
ANALYTICS_DAYS = int(os.environ.get("ANALYTICS_DAYS", "30"))
SLACK_CHANNEL = os.environ.get("SLACK_CHANNEL", "#zion-analytics")
NOTION_DATABASE_ID = os.environ.get("NOTION_DATABASE_ID", "")
ENTITY_ID = os.environ.get("ENTITY_ID", "")
EVENT_PREFIX = os.environ.get("EVENT_PREFIX", "zion_")
ADOPTION_THRESHOLD = float(os.environ.get("ADOPTION_THRESHOLD", "0.10"))
RETENTION_THRESHOLD = float(os.environ.get("RETENTION_THRESHOLD", "0.20"))
CONVERSION_DROP = float(os.environ.get("CONVERSION_DROP_THRESHOLD", "0.15"))

print(f"[{datetime.datetime.now().isoformat()}] Iniciando analytics PostHog...")
print(f"Project: {PROJECT_ID or 'N/A'} | Dias: {ANALYTICS_DAYS} | Prefixo: {EVENT_PREFIX}")

composio = Composio(api_key=API_KEY)
user_id = "analytics-agent"

# -------------------------------------------------------------------------
# Etapa 1: Coletar dados do PostHog
# -------------------------------------------------------------------------
print("\n[Etapa 1] Coletando dados do PostHog...")

now = datetime.datetime.now()
period_start = (now - datetime.timedelta(days=ANALYTICS_DAYS)).isoformat()

analytics = {
    "timestamp": now.isoformat(),
    "period_start": period_start,
    "period_end": now.isoformat(),
    "project_id": PROJECT_ID,
    "total_events": 0,
    "unique_users": 0,
    "adoption_rate": 0.0,
    "retention_rate": 0.0,
    "conversion_funnel": {},
    "top_events": [],
    "alerts": []
}

try:
    # Busca eventos recentes
    events = composio.execute_action(
        app_name="POSTHOG",
        action_name="POSTHOG_EVENTS",
        params={
            "project_id": PROJECT_ID or "default",
            "events": [{"event": f"{EVENT_PREFIX}*"}],
            "limit": 500
        },
        user_id=user_id
    )
    event_list = events.get("events", [])
    analytics["total_events"] = len(event_list)
    print(f"  Total de eventos: {len(event_list)}")
except Exception as e:
    print(f"  ERRO ao buscar eventos: {e}")
    event_list = []

try:
    # Conta pessoas únicas
    people = composio.execute_action(
        app_name="POSTHOG",
        action_name="POSTHOG_PEOPLE",
        params={
            "project_id": PROJECT_ID or "default",
            "is_orphaned": False,
            "limit": 200
        },
        user_id=user_id
    )
    people_list = people.get("results", [])
    analytics["unique_users"] = len(people_list)
    print(f"  Usuários únicos: {len(people_list)}")
except Exception as e:
    print(f"  ERRO ao buscar pessoas: {e}")
    people_list = []

# -------------------------------------------------------------------------
# Etapa 2: Calcular métricas
# -------------------------------------------------------------------------
print("\n[Etapa 2] Calculando métricas...")

# Contagem de eventos por tipo
event_counts: Dict[str, int] = {}
for event in event_list:
    event_name = event.get("event", "unknown")
    event_counts[event_name] = event_counts.get(event_name, 0) + 1

# Top eventos
top_events = sorted(event_counts.items(), key=lambda x: x[1], reverse=True)[:10]
analytics["top_events"] = [{"event": name, "count": count} for name, count in top_events]
print(f"  Top eventos: {top_events[:3]}")

# Adoção estimada (usuários ativos / total de usuários esperados)
if analytics["unique_users"] > 0 and EVENT_PREFIX:
    # Contagem de usuários que emitiram eventos com o prefixo
    active_users = len(set(
        e.get("distinct_id", "") for e in event_list 
        if e.get("event", "").startswith(EVENT_PREFIX)
    ))
    analytics["adoption_rate"] = active_users / max(analytics["unique_users"], 1)
    print(f"  Adoção estimada: {analytics['adoption_rate']*100:.1f}%")
    
    if analytics["adoption_rate"] < ADOPTION_THRESHOLD:
        analytics["alerts"].append({
            "type": "low_adoption",
            "severity": "warning",
            "message": f"Adoção abaixo do threshold: {analytics['adoption_rate']*100:.1f}% (threshold: {ADOPTION_THRESHOLD*100:.0f}%)"
        })

# Retenção: usuários que retornaram nos últimos 7 dias
try:
    retention_events = composio.execute_action(
        app_name="POSTHOG",
        action_name="POSTHOG_EVENTS",
        params={
            "project_id": PROJECT_ID or "default",
            "events": [{"event": f"{EVENT_PREFIX}*"}],
            "date_from": (now - datetime.timedelta(days=7)).isoformat(),
            "date_to": now.isoformat(),
            "limit": 200
        },
        user_id=user_id
    )
    retention_users = len(set(
        e.get("distinct_id", "") for e in retention_events.get("events", [])
    ))
    if analytics["unique_users"] > 0:
        analytics["retention_rate"] = retention_users / analytics["unique_users"]
        print(f"  Retenção (7d): {analytics['retention_rate']*100:.1f}%")
        
        if analytics["retention_rate"] < RETENTION_THRESHOLD:
            analytics["alerts"].append({
                "type": "low_retention",
                "severity": "warning",
                "message": f"Retenção abaixo do threshold: {analytics['retention_rate']*100:.1f}% (threshold: {RETENTION_THRESHOLD*100:.0f}%)"
            })
except Exception as e:
    print(f"  ERRO ao calcular retenção: {e}")

# Funil de conversão (se houver eventos de funil)
funil_steps = ["signup", "onboarding", "activation", "purchase"]
funil_results = {}
for step in funil_steps:
    try:
        step_events = composio.execute_action(
            app_name="POSTHOG",
            action_name="POSTHOG_EVENTS",
            params={
                "project_id": PROJECT_ID or "default",
                "events": [{"event": f"{EVENT_PREFIX}{step}"}],
                "limit": 100
            },
            user_id=user_id
        )
        funil_results[step] = len(step_events.get("events", []))
    except Exception as e:
        funil_results[step] = 0

analytics["conversion_funnel"] = funil_results
print(f"  Funil: {funil_results}")

# -------------------------------------------------------------------------
# Etapa 3: Criar relatório no Notion
# -------------------------------------------------------------------------
print("\n[Etapa 3] Criando relatório no Notion...")

if NOTION_DATABASE_ID:
    try:
        notion_page = composio.execute_action(
            app_name="NOTION",
            action_name="NOTION_CREATE_PAGE",
            params={
                "parent": {"database_id": NOTION_DATABASE_ID},
                "properties": {
                    "Name": {"title": [{"text": {"content": f"Métricas PostHog — {ANALYTICS_DAYS}d"}}]},
                    "Date": {"date": {"start": now.isoformat()}},
                    "Users": {"number": analytics["unique_users"]},
                    "Events": {"number": analytics["total_events"]},
                    "Adoption": {"select": {"name": "OK" if analytics["adoption_rate"] >= ADOPTION_THRESHOLD else "Alert"}}
                }
            },
            user_id=user_id
        )
        print(f"  ✅ Página criada: {notion_page.get('id', 'unknown')}")
        analytics["notion_page_id"] = notion_page.get("id")
    except Exception as e:
        print(f"  ❌ Falha ao criar Notion: {e}")
        analytics["notion_error"] = str(e)
else:
    print("  ⚠️ NOTION_DATABASE_ID não configurado — pulando Notion.")
    print("  Configure NOTION_DATABASE_ID para habilitar relatórios.")

# -------------------------------------------------------------------------
# Etapa 4: Notificar Slack
# -------------------------------------------------------------------------
print("\n[Etapa 4] Notificando Slack...")

alert_section = ""
if analytics["alerts"]:
    alert_section = "\n🚨 *Alertas:*\n"
    for alert in analytics["alerts"]:
        alert_section += f"  - [{alert['severity'].upper()}] {alert['message']}\n"

slack_text = (
    f"📊 *PostHog Analytics — Resumo*\n"
    f"Período: {ANALYTICS_DAYS} dias\n"
    f"Eventos totais: {analytics['total_events']}\n"
    f"Usuários únicos: {analytics['unique_users']}\n"
    f"Adoção: {analytics['adoption_rate']*100:.1f}%\n"
    f"Retenção (7d): {analytics['retention_rate']*100:.1f}%\n"
    f"Top eventos: {', '.join(e['event'] for e in analytics['top_events'][:5])}\n"
    f"{alert_section}"
    f"\n*Saúde:* {'🟢 OK' if not analytics['alerts'] else '🟡 Atenção'}"
)

try:
    slack_result = composio.execute_action(
        app_name="SLACK",
        action_name="SLACK_SEND_MESSAGE",
        params={
            "channel": SLACK_CHANNEL,
            "text": slack_text,
            "parse": "mrkdwn"
        },
        user_id=user_id
    )
    print(f"  ✅ Slack notificado: {SLACK_CHANNEL}")
except Exception as e:
    print(f"  ⚠️ Falha ao enviar Slack: {e}")

# -------------------------------------------------------------------------
# Salvar relatório
# -------------------------------------------------------------------------
report_path = os.path.expanduser("~/zion.app/automation/reports/posthog-analytics-report.json")
os.makedirs(os.path.dirname(report_path), exist_ok=True)
with open(report_path, "w") as f:
    json.dump(analytics, f, indent=2, default=str)
print(f"\n📄 Relatório salvo: {report_path}")
print("\n✅ Métricas de agente concluídas.")
PYEOF

    return $?
}

# -----------------------------------------------------------------------------
# MAIN
# -----------------------------------------------------------------------------

main() {
    echo "============================================================"
    echo "  $SCRIPT_NAME v$SCRIPT_VERSION"
    echo "  Métricas de Agente — PostHog + Slack + Notion"
    echo "============================================================"
    echo ""
    validate_prerequisites
    echo ""
    echo "Executando..."
    echo ""
    run_analytics_agent
    local rc=$?
    echo ""
    if [[ $rc -eq 0 ]]; then
        echo "============================================================"
        echo "  ✅ Concluído com sucesso."
        echo "============================================================"
    else
        echo "============================================================"
        echo "  ❌ Falha. Verifique os logs."
        echo "============================================================"
    fi
    return $rc
}

main "$@"
