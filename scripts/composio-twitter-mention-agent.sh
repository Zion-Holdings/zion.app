#!/usr/bin/env bash
# Script: composio-twitter-mention-agent.sh
# Classe: P1 Automation — Menções e lead capture do Twitter/X para HubSpot + Gmail
# Plataforma: Composio (Twitter/X + HubSpot + Gmail)
# Criado: 2026-08-30 · Zion Tech Group
#
# Fluxo:
#   1. Poll / webhook de menções recentes do Twitter/X
#   2. Filtra por keywords e reply-to-twice (evita espam)
#   3. Enrihece: Nome, handle, thread context
#   4. Persiste lead no HubSpot (contato + propriedade origem: twitter-mention)
#   5. Se lead for alta prioridade (keyword match ou follow-up manual), dispara Gmail draft/reply
#   6. Log de ações em CSV local para auditoria

set -euo pipefail

COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-**REDACTED**}"
COMPOSIO_BASE_URL="${COMPOSIO_BASE_URL:-https://composio.ai}"
HUBSPOT_ACCESS_TOKEN="${HUBSPOT_ACCESS_TOKEN:-**REDACTED**}"
GMAIL_SENDER="${GMAIL_SENDER:-zion@ziontechgroup.com}"
KEYWORDS="${KEYWORDS:-AI automation,enterprise automation,Zion Tech Group,AI services,IT automation}"
MENTION_WINDOW_HOURS="${MENTION_WINDOW_HOURS:-48}"
TWITTER_USER_ID="${TWITTER_USER_ID:-**REDACTED**}"
LOG_DIR="${LOG_DIR:-/tmp/composio-twitter-agent}"
mkdir -p "$LOG_DIR"

log_dir() { echo "$(date -u +"%Y-%m-%dT%H:%M:%SZ") [$1] $*"; }
info() { log_dir "INFO" "$*"; }
warn() { log_dir "WARN" "$*" >&2; }
error() { log_dir "ERROR" "$*" >&2; }
fatal() { error "$*"; exit 1; }

# -----------------------------------------------------------------------------
# Helpers HTTP (usando curl + json para todo o fluxo)
# -----------------------------------------------------------------------------

json_escape() {
  python3 -c 'import json, sys; print(json.dumps(sys.stdin.read().strip()))'
}

composio_req() {
  local method="$1" path="$2" body="${3:-}"
  local url="${COMPOSIO_BASE_URL%/}/v1${path}"
  local args=(-s -X "${method}" \
              -H "Authorization: Bearer ${COMPOSIO_API_KEY}" \
              -H "Content-Type: application/json" \
              -H "Accept: application/json")
  [[ -n "$body" ]] && args+=(-d "$body")
  curl "${args[@]}" "$url" || fatal "composio_req failed: $method $path"
}

# -----------------------------------------------------------------------------
# Twitter/X: buscar menções recentes
# -----------------------------------------------------------------------------

fetch_mentions() {
  local since_epoch
  since_epoch=$(( $(date +%s) - MENTION_WINDOW_HOURS*3600 ))
  local body
  body=$(printf '{"twitterUserId":"%s","since":"%s","keywords":["%s"]}' \
         "$TWITTER_USER_ID" "$since_epoch" "$(echo "$KEYWORDS" | tr ',' '\n' | sed 's/"/\\"/g' | paste -sd ',')")
  local resp
  resp=$(composio_req POST "/tools/twitter/mentions/recent" "$body")
  echo "$resp" | jq -c '.mentions[]? // empty'
}

# -----------------------------------------------------------------------------
# Enrihecimento básico: extrair nome + handle + context
# -----------------------------------------------------------------------------

enrich_mention() {
  local mention_json="$1"
  local handle name text in_reply_to
  handle=$(echo "$mention_json" | jq -r '.author.username // empty')
  name=$(echo "$mention_json" | jq -r '.author.name // empty')
  text=$(echo "$mention_json" | jq -r '.text // empty')
  in_reply_to=$(echo "$mention_json" | jq -r '.in_reply_to_status_id // empty')
  if [[ -z "$handle" ]]; then
    warn "mention sem handle; ignorando"
    return 1
  fi
  jq -n --arg handle "$handle" --arg name "$name" --arg text "$text" \
        --arg in_reply_to "$in_reply_to" \
        '{handle: $handle, name: $name, text: $text, in_reply_to: $in_reply_to}'
}

# -----------------------------------------------------------------------------
# Filtro de relevância
# -----------------------------------------------------------------------------

is_relevant() {
  local text="$1"
  local pattern="$KEYWORDS"
  # match case-insensitive
  if echo "$text" | grep -qiE "$pattern"; then
    return 0
  fi
  return 1
}

# -----------------------------------------------------------------------------
# HubSpot: criar/atualizar contato
# -----------------------------------------------------------------------------

hubspot_upsert_contact() {
  local email="${1:-}" handle="$2" name="$3" source="$4" note="$5"
  # tenta encontrar por email ou pela propriedade customizada twitter_handle
  local query
  query=$(jq -n --arg h "$handle" \
        '{properties: [{name: "twitter_handle", value: $h}]}')
  local existing
  existing=$(curl -s -X POST "https://api.hubapi.com/crm/v3/objects/contacts/search" \
             -H "Authorization: Bearer ${HUBSPOT_ACCESS_TOKEN}" \
             -H "Content-Type: application/json" \
             -d "$query" | jq -r '.results[0].id // empty')
  local target_id="$existing"
  if [[ -z "$target_id" ]]; then
    local props
    props=$(jq -n --arg h "$handle" --arg n "$name" --arg s "$source" --arg note "$note" \
          '{
            properties: {
              email: $email,
              firstname: $n,
              twitter_handle: $h,
              lifecyclestage: "lead",
              leadsource: $s,
              notes:_single:"$note"
            }
          }')
    target_id=$(curl -s -X POST "https://api.hubapi.com/crm/v3/objects/contacts" \
               -H "Authorization: Bearer ${HUBSPOT_ACCESS_TOKEN}" \
               -H "Content-Type: application/json" \
               -d "$props" | jq -r '.id // empty')
    info "contato HubSpot criado: $handle (id=$target_id)"
  else
    local update
    update=$(jq -n --arg n "$name" --arg note "$note" \
          '{properties: {firstname: $n, notes:_single:"$note"}}')
    curl -s -X PATCH "https://api.hubapi.com/crm/v3/objects/contacts/$target_id" \
         -H "Authorization: Bearer ${HUBSPOT_ACCESS_TOKEN}" \
         -H "Content-Type: application/json" \
         -d "$update" > /dev/null
    info "contato HubSpot atualizado: $handle (id=$target_id)"
  fi
  echo "$target_id"
}

# -----------------------------------------------------------------------------
# Gmail: draft de reply automático para leads de alta prioridade
# -----------------------------------------------------------------------------

gmail_draft_reply() {
  local to_email="$1" handle="$2" text="$3"
  local subject="Re: Menção do Twitter → Zion Tech Group"
  local body="Olá ${handle},\n\nVimos sua menção sobre Zion Tech Group e gostaríamos de entender seu contexto.\n\nNosso time de AI/IT automation está pronto para ajudar.\n\nAtt,\nEquipe Zion Tech Group"
  local encoded
  encoded=$(echo "$body" | python3 -c 'import sys, urllib.parse; print(urllib.parse.quote(sys.stdin.read()))')
  curl -s -X POST "https://www.googleapis.com/gmail/v1/users/me/drafts" \
       -H "Authorization: Bearer ${GMAIL_ACCESS_TOKEN:-**REDACTED**}" \
       -H "Content-Type: application/json" \
       -d "{\"message\":{\"raw\":\"To: ${to_email}\nSubject: ${subject}\n\n${body}"}}" > /dev/null
  info "draft Gmail criado para $handle"
}

# -----------------------------------------------------------------------------
# Log de auditoria
# -----------------------------------------------------------------------------

audit_log() {
  local ts
  ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  local csv_row="$(printf '%s\t%s\t%s\t%s\t%s\t%s' \
    "$ts" "$1" "$2" "$3" "$4" "$5")"
  echo "$csv_row" >> "$LOG_DIR/actions.csv"
}

# -----------------------------------------------------------------------------
# Main
# -----------------------------------------------------------------------------

main() {
  info "iniciando Twitter mention agent"
  local processed=0
  local leads_created=0
  local replies_dispatched=0
  local errors=0

  while IFS= read -r mention; do
    [[ -z "$mention" ]] && continue
    local enriched
    enriched=$(enrich_mention "$mention") || { ((errors++)); continue; }
    local handle name text
    handle=$(echo "$enriched" | jq -r '.handle')
    name=$(echo "$enriched" | jq -r '.name')
    text=$(echo "$enriched" | jq -r '.text')

    # dedução: verifica se já processou este tweet
    if grep -q "$handle" "$LOG_DIR/processed.csv" 2>/dev/null; then
      info "menção já processada: $handle; pulando"
      continue
    fi

    if ! is_relevant "$text"; then
      info "menção irrelevante ($handle); ignorando"
      continue
    fi

    # Lead no HubSpot
    local contact_id
    contact_id=$(hubspot_upsert_contact "" "$handle" "$name" "twitter-mention" "$text")
    if [[ -n "$contact_id" ]]; then
      ((leads_created++))
      echo "$handle" >> "$LOG_DIR/processed.csv"
    else
      ((errors++))
      continue
    fi

    # Alta prioridade — responder ou criar draft
    if echo "$text" | grep -qiE " urg| help| quote| pricing| contact| demo| call"; then
      gmail_draft_reply "" "$handle" "$text" && ((replies_dispatched++))
    fi

    ((processed++))
    audit_log "mention" "$handle" "$name" "$contact_id" "lead" "$(date +%s)"

  done < <(fetch_mentions)

  info "resumo: processed=$processed leads_created=$leads_created replies=$replies_dispatched errors=$errors"
}

main "$@"
