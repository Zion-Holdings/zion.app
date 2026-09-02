#!/usr/bin/env bash
# =============================================================================
# composio-sentry-error-to-linear.sh
# Quando um erro novo aparece no Sentry → criar issue no Linear com contexto
# ─── Fluxo: Sentry (novo erro) → Composio → Linear (issue + assignee + labels)
# =============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
SENTRY_DSN="${SENTRY_DSN:-}"
SENTRY_PROJECT="${SENTRY_PROJECT:-}"
LINEAR_TEAM_ID="${LINEAR_TEAM_ID:-}"
LINEAR_ASSIGNEE="${LINEAR_ASSIGNEE:-}"
DRY_RUN="${DRY_RUN:-false}"
SEVERITY_THRESHOLD="${SEVERITY_THRESHOLD:-error}"  # error, warning, info

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info()  { echo -e "${GREEN}[INFO]${NC} $*"; }
log_warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }
log_error() { echo -e "${RED}[ERROR]${NC} $*"; }

check_env() {
    local missing=()
    [[ -z "$COMPOSIO_API_KEY" ]] && missing+=("COMPOSIO_API_KEY")
    [[ -z "$SENTRY_PROJECT" ]] && missing+=("SENTRY_PROJECT")
    [[ -z "$LINEAR_TEAM_ID" ]] && missing+=("LINEAR_TEAM_ID")
    [[ ${#missing[@]} -gt 0 ]] && {
        log_error "Variáveis não definidas: ${missing[*]}"
        log_info "Exportar antes de rodar:"
        log_info "  export COMPOSIO_API_KEY=sk_..."
        log_info "  export SENTRY_PROJECT=ziontechgroup-production"
        log_info "  export LINEAR_TEAM_ID=lin_XXXXX"
        exit 1
    }
}

# ─── Buscar erros recentes do Sentry ─────────────────────────────────────────
fetch_sentry_errors() {
    local since_hours="${1:-1}"
    local severity="$2"
    
    python <<PYEOF
import os, sys, json
from datetime import datetime, timedelta
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
if not api_key:
    print("[]")
    sys.exit(0)

composio = Composio(api_key=api_key)
session = composio.create(user_id="zion-engineering")

since = (datetime.utcnow() - timedelta(hours=${since_hours})).isoformat()

try:
    result = session.tools.execute(
        "SENTRY_GET_ERRORS",
        arguments={
            "project": os.environ.get("SENTRY_PROJECT", ""),
            "since": since,
            "severity": "${severity}",
            "limit": 50
        }
    )
    errors = result.get("errors", [])
    
    # Filtrar por severidade
    filtered = [e for e in errors if e.get("level", "error") in ["error", "critical"]]
    
    print(json.dumps(filtered, indent=2))
except Exception as e:
    print(f"Erro: {e}", file=sys.stderr)
    print("[]")
PYEOF
}

# ─── Criar issue no Linear ────────────────────────────────────────────────────
create_linear_issue() {
    local error_json="$1"
    local dry_run="$2"
    
    local title message
    title=$(echo "$error_json" | python -c "
import sys, json
e = json.load(sys.stdin)
print(f\"[{e.get('level','ERROR')}] {e.get('title','Erro desconhecido')[:80]}\")
")
    message=$(echo "$error_json" | python -c "
import sys, json
e = json.load(sys.stdin)
print(f\"*Status:* {e.get('status','unknown')}\n*Level:* {e.get('level','?')}\n*Project:* {e.get('project','?')}\n*Message:* {e.get('message','?')}\n*Stack Trace:*\n\`\`\`\n{e.get('stacktrace','N/A')}\n\`\`\`\n*URL:* {e.get('url','?')}\n*First Seen:* {e.get('firstSeen','?')}\n*Last Seen:* {e.get('lastSeen','?')}\")
")
    
    if [[ "$dry_run" == "true" ]]; then
        log_info "[DRY RUN] Linear issue que seria criada:"
        echo "Title: $title"
        echo ""
        echo "$message"
        return 0
    fi
    
    python <<PYEOF
import os, sys, json
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
error = json.loads("""$error_json""")

composio = Composio(api_key=api_key)
session = composio.create(user_id="zion-engineering")

try:
    result = session.tools.execute(
        "LINEAR_CREATE_ISSUE",
        arguments={
            "team_id": os.environ.get("LINEAR_TEAM_ID", ""),
            "title": """$title""",
            "description": """$message""",
            "priority": "urgent" if error.get("level") == "critical" else "high",
            "assignee_id": os.environ.get("LINEAR_ASSIGNEE", ""),
            "label_ids": ["bug", "sentry", "auto-reported"],
            "custom_fields": {
                "sentry_error_id": str(error.get("id", "")),
                "sentry_project": os.environ.get("SENTRY_PROJECT", ""),
                "severity": error.get("level", "error")
            }
        }
    )
    print(f"✅ Linear issue criada: {result.get('id', 'unknown')}")
    print(f"   URL: {result.get('url', 'N/A')}")
except Exception as e:
    print(f"Erro Linear: {e}", file=sys.stderr)
    sys.exit(1)
PYEOF
}

# ─── Log de execução (para audit) ────────────────────────────────────────────
log_to_supabase() {
    local error_json="$1"
    local linear_issue_id="$2"
    
    python <<PYEOF
import os, sys, json
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
error = json.loads("""$error_json""")

composio = Composio(api_key=api_key)
session = composio.create(user_id="zion-engineering")

try:
    result = session.tools.execute(
        "SUPABASE_INSERT_ROW",
        arguments={
            "table": "sentry_to_linear_log",
            "data": {
                "sentry_error_id": str(error.get("id", "")),
                "linear_issue_id": """$linear_issue_id""",
                "title": error.get("title", ""),
                "severity": error.get("level", "error"),
                "processed_at": "auto"
            }
        }
    )
    print(f"✅ Log salvo no Supabase: {result.get('id', 'ok')}")
except Exception as e:
    print(f"Erro Supabase log: {e}", file=sys.stderr)
PYEOF
}

# ─── Main ─────────────────────────────────────────────────────────────────────
main() {
    log_info "=== Zion Tech Group — Sentry Error → Linear ==="
    
    check_env
    
    # Buscar erros
    local errors_json
    errors_json=$(fetch_sentry_errors 24 "$SEVERITY_THRESHOLD")
    
    local count
    count=$(echo "$errors_json" | python -c "import sys,json; print(len(json.load(sys.stdin)))")
    log_info "Encontrados $count erros recentes (severity ≥ $SEVERITY_THRESHOLD)"
    
    if [[ "$count" -eq 0 ]]; then
        log_info "Nenhum erro novo para reportar. Fim."
        exit 0
    fi
    
    # Processar cada erro
    echo "$errors_json" | python -c "
import sys, json
errors = json.load(sys.stdin)
for i, error in enumerate(errors):
    print('ERROR_JSON_START')
    print(json.dumps(error))
    print('ERROR_JSON_END')
" | while IFS= read -r line; do
        if [[ "$line" == "ERROR_JSON_START" ]]; then
            local error_block=""
        elif [[ "$line" == "ERROR_JSON_END" ]]; then
            local linear_id
            linear_id=$(create_linear_issue "$error_block" "$DRY_RUN" | grep "✅" | awk '{print $NF}')
            log_to_supabase "$error_block" "$linear_id"
            log_info "✅ Erro reportado no Linear"
        else
            error_block+="$line"$'\n'
        fi
    done
    
    log_info "✅ Processamento concluído! $count erros reportados."
}

main "$@"
