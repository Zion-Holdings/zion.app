#!/bin/bash
# =============================================================================
# composio-stripe-dashboard.sh
# =============================================================================
# Dashboard Financeiro — Stripe + Notion + Slack
# =============================================================================
# Descrição:
#   Agente que consulta métricas de receita do Stripe (cobranças, assinaturas,
#   charge failures), gera relatórios financeiros no Notion e envia alertas no
#   Slack para cobrados falhos ou anomalias.
#
# Apps Conectados:
#   - Stripe (cobranças, assinaturas, customers)
#   - Notion (criar páginas de relatório)
#   - Slack (alertas, notificações financeiras)
#
# Pré-requisitos:
#   - COMPOSIO_API_KEY configurado
#   - Conta Composio com Stripe, Notion e Slack conectados
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

SCRIPT_NAME="composio-stripe-dashboard"
SCRIPT_VERSION="1.0.0"

COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
COMPOSIO_BASE_URL="${COMPOSIO_BASE_URL:-https://api.composio.dev}"
SLACK_CHANNEL="${SLACK_CHANNEL:-#zion-finance}"
NOTION_DATABASE_ID="${NOTION_DATABASE_ID:-}"
LOG_LEVEL="${LOG_LEVEL:-INFO}"

# Período de análise (dias)
ANALYSIS_DAYS="${ANALYSIS_DAYS:-30}"

# Configurações de alerta
FAILURE_ALERT_THRESHOLD="${FAILURE_ALERT_THRESHOLD:-3}"   # alerta se >= N falhas no período
REVENUE_ANOMALY_THRESHOLD="${REVENUE_ANOMALY_THRESHOLD:-0.3}"  # variação >= 30% vs período anterior

# Palavras-chave para categorizar cobranças
CATEGORY_MAPPING="${CATEGORY_MAPPING:-{\"payment\":[\"pagamento\",\"payment\",\"cobrança\"],\"subscription\":[\"assinatura\",\"subscription\",\"plano\"],\"refund\":[\"estorno\",\"refund\",\"reembolso\"]}}"

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
    log_info "Pré-requisitos validados."
}

# -----------------------------------------------------------------------------
# AGENTE PRINCIPAL
# -----------------------------------------------------------------------------

run_dashboard_agent() {
    log_info "Iniciando agente de dashboard financeiro..."
    log_info "Período de análise: últimos $ANALYSIS_DAYS dias"

    python3 - <<'PYEOF'
import os, sys, json, datetime
from typing import Dict, List, Any

try:
    from composio import Composio
except ImportError:
    print("ERRO: SDK Composio não disponível.")
    sys.exit(1)

API_KEY = os.environ.get("COMPOSIO_API_KEY", "")
if not API_KEY:
    print("ERRO: COMPOSIO_API_KEY não configurado.")
    sys.exit(1)

ANALYSIS_DAYS = int(os.environ.get("ANALYSIS_DAYS", "30"))
SLACK_CHANNEL = os.environ.get("SLACK_CHANNEL", "#zion-finance")
NOTION_DATABASE_ID = os.environ.get("NOTION_DATABASE_ID", "")
FAILURE_THRESHOLD = int(os.environ.get("FAILURE_ALERT_THRESHOLD", "3"))
REVENUE_ANOMALY = float(os.environ.get("REVENUE_ANOMALY_THRESHOLD", "0.3"))

print(f"[{datetime.datetime.now().isoformat()}] Iniciando dashboard financeiro...")
print(f"Período: {ANALYSIS_DAYS} dias | Alerta falha: >= {FAILURE_THRESHOLD} | Anomalia: >= {REVENUE_ANOMALY*100:.0f}%")

composio = Composio(api_key=API_KEY)
user_id = "finance-agent"

# -------------------------------------------------------------------------
# Etapa 1: Coletar dados do Stripe
# -------------------------------------------------------------------------
print("\n[Etapa 1] Coletando dados do Stripe...")

period_start = (datetime.datetime.now() - datetime.timedelta(days=ANALYSIS_DAYS)).isoformat()
period_end = datetime.datetime.now().isoformat()

try:
    charges = composio.execute_action(
        app_name="STRIPE",
        action_name="STRIPE_CHARGE_LIST",
        params={
            "created[gte]": period_start,
            "created[lte]": period_end,
            "limit": 100
        },
        user_id=user_id
    )
    charge_list = charges.get("data", [])
    print(f"  Cobranças encontradas: {len(charge_list)}")
except Exception as e:
    print(f"  ERRO ao listar cobranças: {e}")
    charge_list = []

try:
    subscriptions = composio.execute_action(
        app_name="STRIPE",
        action_name="STRIPE_SUBSCRIPTION_LIST",
        params={"limit": 50},
        user_id=user_id
    )
    sub_list = subscriptions.get("data", [])
    print(f"  Assinaturas ativas: {len(sub_list)}")
except Exception as e:
    print(f"  ERRO ao listar assinaturas: {e}")
    sub_list = []

try:
    customers = composio.execute_action(
        app_name="STRIPE",
        action_name="STRIPE_CUSTOMER_LIST",
        params={"limit": 100},
        user_id=user_id
    )
    customer_list = customers.get("data", [])
    print(f"  Clientes: {len(customer_list)}")
except Exception as e:
    print(f"  ERRO ao listar clientes: {e}")
    customer_list = []

# -------------------------------------------------------------------------
# Etapa 2: Analisar dados
# -------------------------------------------------------------------------
print("\n[Etapa 2] Analisando dados...")

analysis = {
    "period_start": period_start,
    "period_end": period_end,
    "total_charges": len(charge_list),
    "successful_charges": 0,
    "failed_charges": 0,
    "total_revenue": 0.0,
    "avg_charge": 0.0,
    "top_customers": [],
    "failed_payments": [],
    "active_subscriptions": len(sub_list),
    "subscription_revenue": 0.0,
    "alerts": []
}

for charge in charge_list:
    amount = charge.get("amount", 0) / 100.0  # cents to dollars
    status = charge.get("status", "unknown")
    customer_id = charge.get("customer", "")
    
    if status == "succeeded":
        analysis["successful_charges"] += 1
        analysis["total_revenue"] += amount
    elif status in ("failed", "pending"):
        analysis["failed_charges"] += 1
        analysis["failed_payments"].append({
            "id": charge.get("id"),
            "amount": amount,
            "status": status,
            "customer": customer_id,
            "created": charge.get("created")
        })

if charge_list:
    analysis["avg_charge"] = analysis["total_revenue"] / analysis["successful_charges"] if analysis["successful_charges"] else 0

# Top customers
customer_spend = {}
for charge in charge_list:
    if charge.get("status") == "succeeded":
        cid = charge.get("customer", "unknown")
        customer_spend[cid] = customer_spend.get(cid, 0) + (charge.get("amount", 0) / 100.0)

top_customers = sorted(customer_spend.items(), key=lambda x: x[1], reverse=True)[:5]
analysis["top_customers"] = [{"customer_id": cid, "spend": spend} for cid, spend in top_customers]

# Subscription revenue estimate
for sub in sub_list:
    sub_amount = sub.get("plan", {}).get("amount", 0) / 100.0 if sub.get("plan") else 0
    analysis["subscription_revenue"] += sub_amount

# Alerts
if analysis["failed_charges"] >= FAILURE_THRESHOLD:
    analysis["alerts"].append({
        "type": "high_failure_rate",
        "severity": "warning",
        "message": f"Alta taxa de falha: {analysis['failed_charges']} cobros falhos em {ANALYSIS_DAYS} dias"
    })

# Check revenue anomaly (compare with previous period)
prev_start = (datetime.datetime.now() - datetime.timedelta(days=ANALYSIS_DAYS*2))
prev_end = period_start

try:
    prev_charges = composio.execute_action(
        app_name="STRIPE",
        action_name="STRIPE_CHARGE_LIST",
        params={
            "created[gte]": prev_start,
            "created[lte]": prev_end,
            "limit": 100
        },
        user_id=user_id
    )
    prev_revenue = sum(c.get("amount", 0)/100.0 for c in prev_charges.get("data", []) if c.get("status") == "succeeded")
    
    if prev_revenue > 0:
        revenue_ratio = (analysis["total_revenue"] - prev_revenue) / prev_revenue
        if abs(revenue_ratio) >= REVENUE_ANOMALY:
            direction = "crescimento" if revenue_ratio > 0 else "queda"
            analysis["alerts"].append({
                "type": "revenue_anomaly",
                "severity": "info",
                "message": f"{direction.title()} de receita: {revenue_ratio*100:+.1f}% vs período anterior"
            })
except Exception as e:
    print(f"  ERRO ao calcular anomalia: {e}")

print(f"  Receita total: ${analysis['total_revenue']:.2f}")
print(f"  Cobranças bem-sucedidas: {analysis['successful_charges']}")
print(f"  Cobranças falhas: {analysis['failed_charges']}")
print(f"  Assinaturas ativas: {analysis['active_subscriptions']}")
print(f"  Alertas: {len(analysis['alerts'])}")

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
                    "Name": {"title": [{"text": {"content": f"Relatório Financeiro — {ANALYSIS_DAYS} dias"}}]},
                    "Date": {"date": {"start": datetime.datetime.now().isoformat()}},
                    "Revenue": {"number": analysis["total_revenue"]},
                    "Status": {"select": {"name": "Completed"}}
                }
            },
            user_id=user_id
        )
        print(f"  ✅ Página criada no Notion: {notion_page.get('id', 'unknown')}")
        analysis["notion_page_id"] = notion_page.get("id")
    except Exception as e:
        print(f"  ❌ Falha ao criar página Notion: {e}")
        analysis["notion_error"] = str(e)
else:
    print("  ⚠️ NOTION_DATABASE_ID não configurado — pulando criação de página.")
    print("  Configure NOTION_DATABASE_ID para habilitar relatórios automáticos.")

# -------------------------------------------------------------------------
# Etapa 4: Notificar Slack
# -------------------------------------------------------------------------
print("\n[Etapa 4] Notificando Slack...")

slack_text = (
    f"💰 *Dashboard Financeiro — Resumo*\n"
    f"Período: {ANALYSIS_DAYS} dias\n"
    f"Receita total: ${analysis['total_revenue']:.2f}\n"
    f"Cobranças OK: {analysis['successful_charges']} | Falhas: {analysis['failed_charges']}\n"
    f"Assinaturas ativas: {analysis['active_subscriptions']}\n"
    f"Média por cobrança: ${analysis['avg_charge']:.2f}\n"
    f"Clientes top: {analysis['top_customers'][:3] if analysis['top_customers'] else 'N/A'}\n"
)

if analysis["alerts"]:
    slack_text += "\n🚨 *Alertas:*\n"
    for alert in analysis["alerts"]:
        slack_text += f"  - [{alert['severity'].upper()}] {alert['message']}\n"

slack_text += f"\n*Saúde:* {'🟢 OK' if not analysis['alerts'] else '🟡 Atenção'}"

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
    print(f"  ✅ Notificação Slack enviada para {SLACK_CHANNEL}")
except Exception as e:
    print(f"  ⚠️ Falha ao enviar Slack: {e}")

# -------------------------------------------------------------------------
# Salvar relatório
# -------------------------------------------------------------------------
report_path = os.path.expanduser("~/zion.app/automation/reports/stripe-dashboard-report.json")
os.makedirs(os.path.dirname(report_path), exist_ok=True)
with open(report_path, "w") as f:
    json.dump(analysis, f, indent=2, default=str)
print(f"\n📄 Relatório salvo: {report_path}")
print("\n✅ Dashboard financeiro concluído.")
PYEOF

    return $?
}

# -----------------------------------------------------------------------------
# MAIN
# -----------------------------------------------------------------------------

main() {
    echo "============================================================"
    echo "  $SCRIPT_NAME v$SCRIPT_VERSION"
    echo "  Dashboard Financeiro — Stripe + Notion + Slack"
    echo "============================================================"
    echo ""
    validate_prerequisites
    echo ""
    echo "Executando..."
    echo ""
    run_dashboard_agent
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
