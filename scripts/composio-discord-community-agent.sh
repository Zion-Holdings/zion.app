#!/usr/bin/env bash
# Script: composio-discord-community-agent.sh
# Classe: P1 Automation — Monitor de comunidade Discord: mentions, keywords, canal de suporte → roteamento para suporte externo (Linear/Gmail/HubSpot)
# Plataforma: Composio (Discord + Linear + Gmail + HubSpot)
# Criado: 2026-08-30 · Zion Tech Group
#
# Fluxo:
#   1. Conectar ao Discord via bot token (Composio Discord toolkit, se disponível, ou API direta)
#   2. Monitorar mentions do bot + guild events + canal de suporte designado
#   3. Classificar a mensagem: FAQ, suporte técnico, lead/vendas, bug report, spam
#   4. Ação por categoria:
#      - FAQ / conhecimento: reply com resposta do conhecimento base (Notion/wiki) ou busca no site
#      - Suporte técnico: cria issue no Linear (ou ticket) e notifica canal de equipe
#      - Lead/vendas: cria contato no HubSpot + draft Gmail para follow-up
#      - Bug report: cria issue no GitHub via Linear/GitHub connector ou Linear
#      - Spam / off-topic: flag para moderação (log apenas, sem ação agressiva)
#   5. Log de atividades para auditoria e rastreamento de SLA
#
# Variáveis de ambiente:
#   DISCORD_BOT_TOKEN    — token do bot Discord
#   DISCORD_GUILD_ID     — ID do servidor (guild) a monitorar
#   DISCORD_SUPPORT_CHANNEL_ID — canal de suporte onde mensagens são roteadas
#   DISCORD_ADMIN_CHANNEL_ID   — canal de equipe para notificações internas
#   COMPOSIO_API_KEY
#   LINEAR_API_TOKEN     — token da API Linear (para criação de issues)
#   HUBSPOT_ACCESS_TOKEN — token da API HubSpot (para captura de leads)
#   GMAIL_SENDER         — email de sender para drafts de follow-up
#   NOTION_WIKI_DATABASE_ID — database Notion para conhecimento/FAQ
#   LOG_DIR              — diretório de logs locais

set -euo pipefail

DISCORD_BOT_TOKEN="${DISCORD_BOT_TOKEN:-**REDACTED**}"
DISCORD_GUILD_ID="${DISCORD_GUILD_ID:-**REDACTED**}"
DISCORD_SUPPORT_CHANNEL_ID="${DISCORD_SUPPORT_CHANNEL_ID:-**REDACTED**}"
DISCORD_ADMIN_CHANNEL_ID="${DISCORD_ADMIN_CHANNEL_ID:-**REDACTED**}"
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-**REDACTED**}"
LINEAR_API_TOKEN="${LINEAR_API_TOKEN:-**REDACTED**}"
HUBSPOT_ACCESS_TOKEN="${HUBSPOT_ACCESS_TOKEN:-**REDACTED**}"
GMAIL_SENDER="${GMAIL_SENDER:-zion@ziontechgroup.com}"
NOTION_WIKI_DATABASE_ID="${NOTION_WIKI_DATABASE_ID:-}"
LOG_DIR="${LOG_DIR:-/tmp/composio-discord-agent}"
mkdir -p "$LOG_DIR"

info()  { echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] [INFO]  $*"; }
warn()  { echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] [WARN]  $*" >&2; }
error() { echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] [ERROR] $*" >&2; }
fatal() { error "$*"; exit 1; }

# -----------------------------------------------------------------------------
# Discord API helpers (usando curl + Discord API v10)
# -----------------------------------------------------------------------------

discord_api() {
  local method="$1" path="$2" body="${3:-}"
  local url="https://discord.com/api/v10${path}"
  local args=(-s -X "${method}" \
              -H "Authorization: Bot ${DISCORD_BOT_TOKEN}" \
              -H "Content-Type: application/json" \
              -H "Accept: application/json")
  [[ -n "$body" ]] && args+=(-d "$body")
  curl "${args[@]}" "$url" || fatal "discord_api falhou: $method $path"
}

discord_get() { discord_api GET "$1" "${2:-}"; }
discord_post() { discord_api POST "$1" "$2"; }

# -----------------------------------------------------------------------------
# Composio helpers (para integrações externas)
# -----------------------------------------------------------------------------

composio_post() {
  local path="$1" body="${2:-}"
  curl -s -X POST "${COMPOSIO_BASE_URL:-https://composio.ai}/v1${path}" \
       -H "Authorization: Bearer ${COMPOSIO_API_KEY}" \
       -H "Content-Type: application/json" \
       -d "$body" || warn "composio_post falhou: $path"
}

# -----------------------------------------------------------------------------
# Classificação de mensagens
# -----------------------------------------------------------------------------

classify_message() {
  local content="$1"
  local lower
  lower=$(echo "$content" | tr '[:upper:]' '[:lower:]')

  # FAQ / conhecimento
  if echo "$lower" | grep -qiE "como funciona|preço|preco|planos|pagamento|integrat|api|documentaç|docs|conhecimento|wiki|onde|como fa?ço|como faço|como"; then
    echo "faq"
    return
  fi

  # Suporte técnico
  if echo "$lower" | grep -qiE "não func|bug|erro|error|falhou|quebra|slow|demora|lento|broken| 크래시|crash|não abre|não carrega|bug|fix"; then
    echo "support"
    return
  fi

  # Lead / vendas
  if echo "$lower" | grep -qiE "quero|preciso|busco|projetar|preciso de|serviç|orcamento|cotiz|preço estimado|quanto custa|eu quero|contratar|diretor de tecnologia|cto|rh|gerente|projeto|implementaç"; then
    echo "lead"
    return
  fi

  # Bug report (mais específico)
  if echo "$lower" | grep -qiE "bug|issue|report|não funciona|não carrega|erro 500|erro 404|está com problema|problema no"; then
    echo "bug"
    return
  fi

  # Padrão: suporte geral
  echo "support"
}

# -----------------------------------------------------------------------------
# Ações por classificação
# -----------------------------------------------------------------------------

on_faq() {
  local channel_id="$1" user_id="$2" content="$3" message_id="$4"
  local reply="Olá! Como posso ajudar? Verifique nosso canal de conhecimento ou acesse https://ziontechgroup.com para mais informações."
  discord_post "/channels/${channel_id}/messages" \
    "$(jq -nc --arg msg "$reply" --arg m_id "$message_id" \
      '{ content: $msg, message_reference: { message_id: $m_id } }')" > /dev/null || true
  info "FAQ respondido: channel=$channel_id user=$user_id (message=$message_id)"
}

on_support() {
  local channel_id="$1" user_id="$2" content="$3" username="$4" message_id="$5"
  local title="Suporte Discord: ${username}"
  local body="Mensagem original: ${content}"
  local issue_id
  issue_id=$(create_linear_issue "$title" "$body" "Team Support" "Triage")
  if [[ -n "$issue_id" ]]; then
    discord_post "/channels/${DISCORD_ADMIN_CHANNEL_ID}/messages" \
      "$(jq -nc --arg txt "🔧 Novo ticket de suporte criado no Linear: $issue_id (usuário: $username)" \
        '{ content: $txt }')" > /dev/null || true
    # notificar usuário
    discord_post "/channels/${channel_id}/messages" \
      "$(jq -nc --arg txt "Obrigado pela mensagem! Criamos um ticket de suporte #${issue_id}. Nossa equipe entrará em contato em breve." \
        '{ content: $txt, message_reference: { message_id: $message_id } }')" > /dev/null || true
    info "ticket de suporte criado: channel=$channel_id user=$username issue=$issue_id"
  else
    warn "falha ao criar ticket Linear para user=$username"
  fi
}

on_lead() {
  local channel_id="$1" user_id="$2" content="$3" username="$4" user_email="${5:-}" message_id="$6"
  # captura no HubSpot
  local hubspot_id
  hubspot_id=$(hubspot_upsert_lead "$username" "$user_email" "$content" "discord-community")
  if [[ -n "$hubspot_id" ]]; then
    info "lead capturado no HubSpot: user=$username hubspot_id=$hubspot_id"
  fi
  # draft no Gmail para follow-up
  gmail_draft_lead_followup "$user_email" "$username" "$content"
  # notificar equipe
  discord_post "/channels/${DISCORD_ADMIN_CHANNEL_ID}/messages" \
    "$(jq -nc --arg txt "📈 Novo lead no Discord: $username (message=$message_id) → HubSpot $hubspot_id" \
      '{ content: $txt }')" > /dev/null || true
  # confirmar ao usuário
  discord_post "/channels/${channel_id}/messages" \
    "$(jq -nc --arg txt "Obrigado pelo interesse! Entraremos em contato em breve." \
      '{ content: $txt, message_reference: { message_id: $message_id } }')" > /dev/null || true
  info "lead processado: channel=$channel_id user=$username"
}

on_bug() {
  local channel_id="$1" user_id="$2" content="$3" username="$4" message_id="$5"
  local issue_id
  issue_id=$(create_linear_issue "Bug report: ${username}" "$content" "Team Eng" "Bug")
  if [[ -n "$issue_id" ]]; then
    discord_post "/channels/${DISCORD_ADMIN_CHANNEL_ID}/messages" \
      "$(jq -nc --arg txt "🐛 Novo bug reportado: $username → Linear $issue_id" \
        '{ content: $txt }')" > /dev/null || true
    discord_post "/channels/${channel_id}/messages" \
      "$(jq -nc --arg txt "Obrigado pelo report! Criamos um ticket #${issue_id} para nossa equipe técnica." \
        '{ content: $txt, message_reference: { message_id: $message_id } }')" > /dev/null || true
    info "bug report processado: channel=$channel_id user=$username issue=$issue_id"
  else
    warn "falha ao criar issue Linear para bug report de $username"
  fi
}

# -----------------------------------------------------------------------------
# Integrações externas
# -----------------------------------------------------------------------------

create_linear_issue() {
  local title="$1" description="$2" team="$3" label="$4"
  local body
  body=$(jq -nc --arg t "$title" --arg d "$(echo "$description" | python -c 'import sys,json; print(json.dumps(sys.stdin.read()))' 2>/dev/null || echo "$description") \
    '{
      title: $t,
      description: { raw: $d },
      team: { name: $team },
      label: { name: $label }
    }')
  local resp
  resp=$(curl -s -X POST "https://api.linear.app/v1/issues" \
         -H "Authorization: Bearer ${LINEAR_API_TOKEN}" \
         -H "Content-Type: application/json" \
         -d "$body")
  echo "$resp" | jq -r '.identifier // empty'
}

hubspot_upsert_lead() {
  local name="$1" email="${2:-}" note="$3" source="$4"
  local props
  props=$(jq -nc --arg n "$name" --arg s "$source" --arg note "$(echo "$note" | python -c 'import sys,json; print(json.dumps(sys.stdin.read()))' 2>/dev/null || echo "$note") \
    '{
      properties: {
        firstname: $n,
        email: $email,
        lifecyclestage: "lead",
        leadsource: $s,
        notes:_single: $note
      }
    }')
  local resp
  resp=$(curl -s -X POST "https://api.hubapi.com/crm/v3/objects/contacts" \
         -H "Authorization: Bearer ${HUBSPOT_ACCESS_TOKEN}" \
         -H "Content-Type: application/json" \
         -d "$props")
  echo "$resp" | jq -r '.id // empty'
}

gmail_draft_lead_followup() {
  local to_email="$1" username="$2" content="$3"
  [[ -z "$to_email" || "$to_email" == "**REDACTED**" ]] && return
  local subject="Re: Interesse em Zion Tech Group"
  local body="Olá ${username},

Vimos sua mensagem no Discord e gostaríamos de entender melhor seu contexto.

Nosso time está pronto para ajudar.

Att,
Equipe Zion Tech Group"
  curl -s -X POST "https://www.googleapis.com/gmail/v1/users/me/drafts" \
       -H "Authorization: Bearer ${GMAIL_ACCESS_TOKEN:-**REDACTED**}" \
       -H "Content-Type: application/json" \
       -d "$(jq -nc --arg to "$to_email" --arg sub "$subject" --arg b "$body" \
         '{ message: { raw: ("To: " + $to + "\nSubject: " + $sub + "\n\n" + $b) } }')" > /dev/null || true
}

# -----------------------------------------------------------------------------
# Scanner de mensagens no canal de suporte
# -----------------------------------------------------------------------------

scan_support_channel() {
  local last_message_id="${1:-}"
  local params="limit=50"
  [[ -n "$last_message_id" ]] && params="limit=50&before=${last_message_id}"
  local messages
  messages=$(discord_get "/channels/${DISCORD_SUPPORT_CHANNEL_ID}/messages?${params}")
  local count=0
  while IFS= read -r msg; do
    [[ -z "$msg" ]] && continue
    local msg_id author_id content username
    msg_id=$(echo "$msg" | jq -r '.id')
    author_id=$(echo "$msg" | jq -r '.author.id')
    content=$(echo "$msg" | jq -r '.content // empty')
    username=$(echo "$msg" | jq -r '.author.username // "unknown"')
    [[ -z "$content" ]] && continue
    local category
    category=$(classify_message "$content")
    case "$category" in
      faq)    on_faq "$DISCORD_SUPPORT_CHANNEL_ID" "$author_id" "$content" "$msg_id" ;;
      support) on_support "$DISCORD_SUPPORT_CHANNEL_ID" "$author_id" "$content" "$username" "$msg_id" ;;
      lead)   on_lead "$DISCORD_SUPPORT_CHANNEL_ID" "$author_id" "$content" "$username" "" "$msg_id" ;;
      bug)    on_bug "$DISCORD_SUPPORT_CHANNEL_ID" "$author_id" "$content" "$username" "$msg_id" ;;
      *)      info "mensagem non-classificada (category=$category): channel=$DISCORD_SUPPORT_CHANNEL_ID user=$username" ;;
    esac
    ((count++))
    last_message_id="$msg_id"
  done < <(echo "$messages" | jq -c '.[]? // empty')
  info "scan concluído: $count mensagens processadas"
  echo "$last_message_id"
}

# -----------------------------------------------------------------------------
# Main
# -----------------------------------------------------------------------------

main() {
  [[ -z "$DISCORD_BOT_TOKEN" || "$DISCORD_BOT_TOKEN" == "**REDACTED**" ]] && fatal "DISCORD_BOT_TOKEN não configurada"
  [[ -z "$DISCORD_SUPPORT_CHANNEL_ID" || "$DISCORD_SUPPORT_CHANNEL_ID" == "**REDACTED**" ]] && fatal "DISCORD_SUPPORT_CHANNEL_ID não configurada"

  info "iniciando Discord community agent"
  local last_id="${DISCORD_LAST_MESSAGE_ID:-}"
  # primeiro scan: busca mensagens recentes
  last_id=$(scan_support_channel "$last_id")
  echo "$last_id" > "${LOG_DIR}/last_message_id"
  info "agent executado; próximo scan partirá de message_id=$last_id"
}

main "$@"
