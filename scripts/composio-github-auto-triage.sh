#!/bin/bash
# =============================================================================
# composio-github-auto-triage.sh
# Zion Tech Group — Auto-classificar issues GitHub → Linear + Slack
#
# Fluxo:
#   1. Monitora issues abertas no repo configurado
#   2. Classifica severidade (P0/P1/P2) via LLM
#   3. Adiciona label de severidade no GitHub
#   4. Cria issue correspondente no Linear (com classificação)
#   5. Se P0 ou P1: alerta imediato no Slack
#   6. Registra rastreamento no Notion (opcional)
#
# Uso:
#   ./composio-github-auto-triage.sh <owner> <repo> [slack_channel] [linear_team_id] [notion_db_id]
#
# Pré-requisitos:
#   - Composio CLI instalado e autenticado (composio login --agent)
#   - GitHub, Linear, Slack, Notion conectados no Composio
# =============================================================================

set -euo pipefail

OWNER="${1:-zion-support}"
REPO="${2:-zion-support.github.io}"
SLACK_CHANNEL="${3:-#zion-dev}"
LINEAR_TEAM="${4:-}"
NOTION_DB="${5:-}"
STATE_FILE="${6:-/tmp/composio_github_triage_state.json}"
LOG_PREFIX="[GITHUB-Triage]"

log() { echo "${LOG_PREFIX} $(date '+%Y-%m-%d %H:%M:%S') $*"; }

# ── Funções auxiliares ────────────────────────────────────────────────────────

classify_issue() {
    local title="$1"
    local body="$2"
    local labels="$3"
    
    # Monta contexto para classificação
    local context
    context=$(cat <<EOF
Title: $title

Body (primeiros 2000 chars):
$(echo "$body" | head -c 2000)

Labels: $labels

Classifique a severidade deste GitHub issue e retorne APENAS o nível (P0, P1, P2, ou P3):
- P0: Crítico — site down, security vulnerability, blocking release, data loss
- P1: Alto — funcionalidade quebrada afetando usuários, workaround difícil
- P2: Médio — bug com workaround, feature request sem urgência
- P3: Baixo — cosmetic, typo, nice-to-have, question
EOF
)

    local classification
    classification=$(composio execute GPT_COMPLETIONS_FALLBACK -d "{
        \"model\": \"gpt-4o-mini\",
        \"messages\": [
            {\"role\": \"system\", \"content\": \"You are a technical issue triage assistant for Zion Tech Group. Respond with ONLY one of: P0, P1, P2, P3. Nothing else.\"},
            {\"role\": \"user\", \"content\": \"$context\"}
        ]
    }" 2>/dev/null | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('choices',[{}])[0].get('message',{}).get('content','').strip().upper() or 'P3')" 2>/dev/null) || classification="P3"

    # Validação
    if [[ ! "$classification" =~ ^P[0-3]$ ]]; then
        classification="P3"
    fi

    echo "$classification"
}

add_github_label() {
    local issue_number="$1"
    local classification="$2"
    
    # Remove labels existentes de severidade para evitar duplicação
    composio execute GITHUB_ADD_LABELES_TO_AN_ISSUE -d "{
        \"owner\": \"$OWNER\",
        \"repo\": \"$REPO\",
        \"issue_number\": $issue_number,
        \"labels\": [\"severity-$classification\"]
    }" 2>/dev/null || {
        log "AVISO: Falha ao adicionar label severity-$classification ao issue #$issue_number"
        return 1
    }
    
    log "Label severity-$classification adicionado ao issue #$issue_number"
}

create_linear_issue() {
    local title="$1"
    local body="$2"
    local classification="$3"
    local github_url="$4"
    local github_issue_num="$5"
    
    local linear_title
    linear_title="[$classification] $title"
    
    local linear_body
    linear_body=$(cat <<EOF
**Origem:** GitHub Issue #$github_issue_num
**Severidade:** $classification
**GitHub:** $github_url

---

$body
EOF
)

    if [[ -z "$LINEAR_TEAM" ]]; then
        log "AVISO: LINEAR_TEAM não informado, pulando criação no Linear."
        return 0
    fi
    
    composio execute LINEAR_CREATE_LINEAR_ISSUE -d "{
        \"team_id\": \"$LINEAR_TEAM\",
        \"title\": \"$linear_title\",
        \"body\": \"$(echo "$linear_body" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))' 2>/dev/null || echo '{}')\",
        \"priority\": $(echo "$classification" | sed 's/P//')
    }" 2>/dev/null || {
        log "AVISO: Falha ao criar issue no Linear."
        return 1
    }
    
    log "Issue Linear criada: $linear_title"
}

notify_slack() {
    local classification="$1"
    local title="$2"
    local github_url="$3"
    local linear_url="$4"
    local issue_number="$5"
    
    local emoji
    case "$classification" in
        P0) emoji="🔴" ;;
        P1) emoji="🟠" ;;
        P2) emoji="🟡" ;;
        *)  emoji="⚪" ;;
    esac
    
    local message
    message="$emoji *GitHub Issue Triage — Zion*\n\n
* Severidade:* $classification
* Issue:* $title (#$issue_number)
* Link:* $github_url
$( [[ -n "$linear_url" ]] && echo "*Linear:* $linear_url" )
"
    
    log "Notificando Slack ($SLACK_CHANNEL)..."
    composio execute SLACK_SEND_MESSAGE -d "{
        \"channel\": \"$SLACK_CHANNEL\",
        \"text\": \"$(echo "$message" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))' 2>/dev/null || echo '{}')\"
    }" 2>/dev/null || {
        log "AVISO: Slack notification falhou."
        return 1
    }
    
    log "Slack notificado."
}

register_notion() {
    local title="$1"
    local classification="$2"
    local github_url="$3"
    local linear_url="$4"
    local now
    now=$(date '+%Y-%m-%d %H:%M')
    
    if [[ -z "$NOTION_DB" ]]; then
        return 0
    fi
    
    log "Registrando no Notion (DB: $NOTION_DB)..."
    composio execute NOTION_CREATE_NOTION_PAGE -d "{
        \"parent_database_id\": \"$NOTION_DB\",
        \"title\": \"GitHub Triage: $title\",
        \"properties\": {
            \"Classification\": \"$classification\",
            \"Status\": \"Triageado\",
            \"Source\": \"$github_url\",
            \"Linear\": \"$linear_url\",
            \"Date\": \"$now\",
            \"Repository\": \"$OWNER/$REPO\"
        }
    }" 2>/dev/null || {
        log "AVISO: Notion registro falhou."
        return 1
    }
    
    log "Notion registrado."
}

# ── Main ──────────────────────────────────────────────────────────────────────

main() {
    log "Iniciando triagem de issues: $OWNER/$REPO"
    
    # Busca issues abertas recentes (últimas 24h ou número limitado)
    log "Buscando issues abertas no repositório..."
    
    local issues_json
    issues_json=$(composio execute GITHUB_LIST_ISSUES -d "{
        \"owner\": \"$OWNER\",
        \"repo\": \"$REPO\",
        \"state\": \"open\",
        \"sort\": \"created\",
        \"direction\": \"desc\",
        \"per_page\": 10
    }" 2>/dev/null) || {
        log "ERRO: Falha ao listar issues. Verifique autenticação GitHub."
        exit 1
    }
    
    local issue_count
    issue_count=$(echo "$issues_json" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('issues',d.get('data',[]))))" 2>/dev/null || echo "0")
    
    log "Found $issue_count open issues."
    
    if [[ "$issue_count" -eq 0 ]]; then
        log "Nenhuma issue aberta encontrada. Encerrando."
        exit 0
    fi
    
    # Processa cada issue
    local processed=0
    local failed=0
    
    echo "$issues_json" | python3 -c "
import sys, json
data = json.load(sys.stdin)
issues = data.get('issues', data.get('data', []))
for issue in issues:
    print(json.dumps(issue))
" | while IFS= read -r issue_line; do
        [[ -z "$issue_line" ]] && continue
        
        local title body issue_number labels html_url
        title=$(echo "$issue_line" | python3 -c "import sys,json; print(json.loads(sys.stdin.read()).get('title',''))" 2>/dev/null || echo "")
        body=$(echo "$issue_line" | python3 -c "import sys,json; print(json.loads(sys.stdin.read()).get('body','') or '')" 2>/dev/null || echo "")
        issue_number=$(echo "$issue_line" | python3 -c "import sys,json; print(json.loads(sys.stdin.read()).get('number',0))" 2>/dev/null || echo "0")
        labels=$(echo "$issue_line" | python3 -c "import sys,json; labels=json.loads(sys.stdin.read()).get('labels',[]); print(','.join(l.get('name','') for l in labels) if labels else '')" 2>/dev/null || echo "")
        html_url=$(echo "$issue_line" | python3 -c "import sys,json; print(json.loads(sys.stdin.read()).get('html_url',''))" 2>/dev/null || echo "")
        
        log "Processando issue #$issue_number: $title"
        
        # Classifica
        local classification
        classification=$(classify_issue "$title" "$body" "$labels")
        log "Classificação: $classification"
        
        # Adiciona label no GitHub
        add_github_label "$issue_number" "$classification" || true
        
        # Cria Linear
        local linear_url=""
        create_linear_issue "$title" "$body" "$classification" "$html_url" "$issue_number" || true
        
        # Slack somente para P0/P1
        if [[ "$classification" == "P0" || "$classification" == "P1" ]]; then
            notify_slack "$classification" "$title" "$html_url" "$linear_url" "$issue_number" || true
        fi
        
        # Notion (se configurado)
        register_notion "$title" "$classification" "$html_url" "$linear_url" || true
        
        processed=$((processed + 1))
    done
    
    log "✅ Triagem concluída: $processed issues processados."
}

main "$@"
