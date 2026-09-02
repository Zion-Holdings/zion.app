#!/usr/bin/env bash
# =============================================================================
# composio-hubspot-lead-lifecycle.sh
# Gerencia ciclo de leads: novo lead no HubSpot → automações cross-app
# ─── Fluxo: HubSpot (novo lead) → Notion (página de lead) → Gmail (boas-vindas)
#           → Slack (alerta interno) → HubSpot (atualização de status)
# =============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
HUBSPOT_PORTAL_ID="${HUBSPOT_PORTAL_ID:-}"
HUBSPOT_LEAD_SOURCE="${HUBSPOT_LEAD_SOURCE:-website}"
DRY_RUN="${DRY_RUN:-false}"

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
    [[ -z "$HUBSPOT_PORTAL_ID" ]] && missing+=("HUBSPOT_PORTAL_ID")
    [[ ${#missing[@]} -gt 0 ]] && {
        log_error "Variáveis não definidas: ${missing[*]}"
        log_info "Exportar antes de rodar:"
        log_info "  export COMPOSIO_API_KEY=sk_..."
        log_info "  export HUBSPOT_PORTAL_ID=12345678"
        exit 1
    }
}

# ─── Buscar leads recentes não processados ───────────────────────────────────
fetch_new_leads() {
    local since_hours="${1:-24}"
    python <<PYEOF
import os, sys, json
from datetime import datetime, timedelta
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
if not api_key:
    print("[]")
    sys.exit(0)

composio = Composio(api_key=api_key)
session = composio.create(user_id="zion-sales")

# Buscar contatos recentes no HubSpot
since = (datetime.utcnow() - timedelta(hours=${since_hours})).isoformat()

try:
    result = session.tools.execute(
        "HUBSPOT_GET_CONTACTS",
        arguments={
            "portal_id": os.environ.get("HUBSPOT_PORTAL_ID", ""),
            "since": since,
            "properties": ["email", "firstname", "lastname", "company", "phone", "lifecyclestage"]
        }
    )
    contacts = result.get("results", [])
    
    # Filtrar apenas leads (lifecyclestage = lead ou 모르는)
    leads = []
    for c in contacts:
        stage = c.get("lifecyclestage", "lead")
        if stage in ["lead", "unknown", None]:
            leads.append(c)
    
    print(json.dumps(leads, indent=2))
except Exception as e:
    print(f"Erro: {e}", file=sys.stderr)
    print("[]")
PYEOF
}

# ─── Criar página Notion para o lead ─────────────────────────────────────────
create_notion_page() {
    local lead_json="$1"
    local dry_run="$2"
    
    if [[ "$dry_run" == "true" ]]; then
        log_info "[DRY RUN] Notion page que seria criada:"
        python -c "
import sys, json
lead = json.load(sys.stdin)
print(f'Título: {lead.get(\"firstname\",\"?\")} {lead.get(\"lastname\",\"?\")} - {lead.get(\"company\",\"?\")}')
print(f'Email: {lead.get(\"email\",\"?\")}')
print(f'Telefone: {lead.get(\"phone\",\"?\")}')
print(f'Fonte: ${HUBSPOT_LEAD_SOURCE}')
print(f'Notion DB: Leads Zion Tech Group')
"
        return 0
    fi
    
    python <<PYEOF
import os, sys, json
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
lead = json.loads("""$lead_json""")

composio = Composio(api_key=api_key)
session = composio.create(user_id="zion-sales")

try:
    result = session.tools.execute(
        "NOTION_CREATE_PAGE",
        arguments={
            "database_id": "YOUR_NOTION_LEADS_DB_ID",
            "title": f"{lead.get('firstname','?')} {lead.get('lastname','?')} — {lead.get('company','?')}",
            "properties": {
                "Email": lead.get("email", ""),
                "Telefone": lead.get("phone", ""),
                "Empresa": lead.get("company", ""),
                "Fonte": "${HUBSPOT_LEAD_SOURCE}",
                "Status": "Novo Lead",
                "Original_HubSpot_ID": lead.get("id", ""),
                "Data_Entrada": lead.get("createdate", "")
            }
        }
    )
    print(f"✅ Notion page criada: {result.get('id', 'unknown')}")
except Exception as e:
    print(f"Erro Notion: {e}", file=sys.stderr)
    sys.exit(1)
PYEOF
}

# ─── Enviar e-mail de boas-vindas via Gmail ──────────────────────────────────
send_welcome_email() {
    local lead_json="$1"
    local dry_run="$2"
    
    local email firstname company
    email=$(echo "$lead_json" | python -c "import sys,json; print(json.load(sys.stdin).get('email',''))")
    firstname=$(echo "$lead_json" | python -c "import sys,json; print(json.load(sys.stdin).get('firstname',''))")
    company=$(echo "$lead_json" | python -c "import sys,json; print(json.load(sys.stdin).get('company',''))")
    
    [[ -z "$email" ]] && { log_warn "Lead sem e-mail, pulando..."; return 0; }
    
    if [[ "$dry_run" == "true" ]]; then
        log_info "[DRY RUN] E-mail de boas-vindas para: $email ($firstname)"
        cat <<EOF
Assunto: Bem-vindo ao Zion Tech Group, ${firstname}!

Olá ${firstname},

Muito obrigado pelo seu interesse em ${company:-nosso trabalho}!

Aqui na Zion Tech Group, trabalhamos com automação de IA e integração de
ferramentas para empresas como a sua. Nosso time está pronto para ajudar.

Aguardo seu retorno para agendarmos uma conversa.

Atenciosamente,
Equipe Zion Tech Group
ziontechgroup.com
EOF
        return 0
    fi
    
    python <<PYEOF
import os, sys, json
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
lead = json.loads("""$lead_json""")
email = lead.get("email", "")
firstname = lead.get("firstname", "")

if not email:
    sys.exit(0)

composio = Composio(api_key=api_key)
session = composio.create(user_id="zion-marketing")

try:
    result = session.tools.execute(
        "GMAIL_SEND_EMAIL",
        arguments={
            "to": email,
            "subject": f"Bem-vindo ao Zion Tech Group, {firstname}!",
            "body": f"""Olá {firstname}!

Muito obrigado pelo seu interesse!

Aqui na Zion Tech Group, trabalhamos com automação de IA e integração de
ferramentas para empresas. Nosso time está pronto para ajudar.

Aguardo seu retorno para agendarmos uma conversa.

Atenciosamente,
Equipe Zion Tech Group
ziontechgroup.com""",
            "cc": "",
            "bcc": ""
        }
    )
    print(f"✅ E-mail enviado para {email}: {result.get('id', 'ok')}")
except Exception as e:
    print(f"Erro Gmail: {e}", file=sys.stderr)
    sys.exit(1)
PYEOF
}

# ─── Alertar no Slack ────────────────────────────────────────────────────────
alert_slack() {
    local lead_json="$1"
    local dry_run="$2"
    
    local firstname company email
    firstname=$(echo "$lead_json" | python -c "import sys,json; print(json.load(sys.stdin).get('firstname','?'))")
    company=$(echo "$lead_json" | python -c "import sys,json; print(json.load(sys.stdin).get('company','?'))")
    email=$(echo "$lead_json" | python -c "import sys,json; print(json.load(sys.stdin).get('email','?'))")
    
    local message="*🚀 Novo Lead Zion Tech Group*\n*Name:* ${firstname}\n*Empresa:* ${company}\n*Email:* ${email}\n*Status:* Processando..."
    
    if [[ "$dry_run" == "true" ]]; then
        log_info "[DRY RUN] Slack message:"
        echo -e "$message"
        return 0
    fi
    
    python <<PYEOF
import os, sys, json
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
lead = json.loads("""$lead_json""")

composio = Composio(api_key=api_key)
session = composio.create(user_id="zion-sales")

try:
    result = session.tools.execute(
        "SLACK_SEND_MESSAGE",
        arguments={
            "channel": "#leads-zion",
            "text": f"""🚀 *Novo Lead Zion Tech Group*
Name: {lead.get('firstname','?')}
Empresa: {lead.get('company','?')}
Email: {lead.get('email','?')}
Status: Processando..."""
        }
    )
    print(f"✅ Slack alertado: {result.get('id', 'ok')}")
except Exception as e:
    print(f"Erro Slack: {e}", file=sys.stderr)
    sys.exit(1)
PYEOF
}

# ─── Atualizar status do lead no HubSpot ─────────────────────────────────────
update_hubspot_status() {
    local lead_json="$1"
    local dry_run="$2"
    
    if [[ "$dry_run" == "true" ]]; then
        log_info "[DRY RUN] HubSpot update: status → 'Em Contato'"
        return 0
    fi
    
    python <<PYEOF
import os, sys, json
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
lead = json.loads("""$lead_json""")

composio = Composio(api_key=api_key)
session = composio.create(user_id="zion-sales")

try:
    result = session.tools.execute(
        "HUBSPOT_UPDATE_CONTACT",
        arguments={
            "portal_id": os.environ.get("HUBSPOT_PORTAL_ID", ""),
            "contact_id": str(lead.get("id", "")),
            "properties": {
                "lifecyclestage": "subscriber",  # ou paused
                "hs_lead_status": "PROCESSING"
            }
        }
    )
    print(f"✅ HubSpot atualizado: {result.get('id', 'ok')}")
except Exception as e:
    print(f"Erro HubSpot update: {e}", file=sys.stderr)
    sys.exit(1)
PYEOF
}

# ─── Processar um lead individual ────────────────────────────────────────────
process_lead() {
    local lead_json="$1"
    local dry_run="$2"
    
    local lead_id email
    lead_id=$(echo "$lead_json" | python -c "import sys,json; print(json.load(sys.stdin).get('id','?'))")
    email=$(echo "$lead_json" | python -c "import sys,json; print(json.load(sys.stdin).get('email','?'))")
    
    log_info "Processando lead #$lead_id ($email)..."
    
    create_notion_page "$lead_json" "$dry_run"
    send_welcome_email "$lead_json" "$dry_run"
    alert_slack "$lead_json" "$dry_run"
    update_hubspot_status "$lead_json" "$dry_run"
    
    log_info "✅ Lead #$lead_id processado!"
}

# ─── Main ─────────────────────────────────────────────────────────────────────
main() {
    log_info "=== Zion Tech Group — HubSpot Lead Lifecycle ==="
    
    check_env
    
    # Buscar leads
    local leads_json
    leads_json=$(fetch_new_leads 48)  # últimos 48 horas
    
    local count
    count=$(echo "$leads_json" | python -c "import sys,json; print(len(json.load(sys.stdin)))")
    log_info "Encontrados $count leads novos"
    
    if [[ "$count" -eq 0 ]]; then
        log_info "Nenhum lead novo para processar. Fim."
        exit 0
    fi
    
    # Processar cada lead
    echo "$leads_json" | python -c "
import sys, json
leads = json.load(sys.stdin)
for i, lead in enumerate(leads):
    print(f'LEAD_JSON_START')
    print(json.dumps(lead))
    print(f'LEAD_JSON_END')
" | while IFS= read -r line; do
        if [[ "$line" == "LEAD_JSON_START" ]]; then
            local lead_block=""
        elif [[ "$line" == "LEAD_JSON_END" ]]; then
            process_lead "$lead_block" "$DRY_RUN"
        else
            lead_block+="$line"$'\n'
        fi
    done
    
    log_info "✅ Lifecycle concluído! $count leads processados."
}

main "$@"
