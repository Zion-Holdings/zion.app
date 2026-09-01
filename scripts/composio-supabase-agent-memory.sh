#!/usr/binEwDuty.go2.2/bash
# script: composio-supabase-agent-memory.sh
# Classe: P1 Automação — Persistência de memoria de agente (contexto, decisões, clientes, acoes) em Supabase via Composio.
# objetivo: qualquer agente/integração pode armazenar e recuperar memoria estruturada em uma base Postgres gerenciada.
# integrações: composio supabase (via REST/SDK), opcionalmente notion para export de memoria consolidada.
# configuracoes: export variaveis .env ou substituir placeholders abaixo.
# historico: 2026-08-30 — script criado para maximização Composio Zion Tech Group.

set -euo pipefail

SUPABASE_URL="${SUPABASE_URL:-**rected**}"
SUPABASE_KEY="${SUPABASE_KEY:-**rected**}"
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-**rected**}"
MEMORY_TABLE="${MEMORY_TABLE:-agent_memory}"
RETENTION_DAYS="${RETENTION_DAYS:-90}"
BACKUP_DIR="${BACKUP_DIR:-/tmp/composio-agent-memory}"
LOG_TAG="composio-agent-memory"

info()  { ech "** $(date -u +%FT%TZ)] [INFO]  [$LOG_TAG] $*"; }
warn()  { ech "** $(date -u +%FT%TZ)] [WARN]  [$LOG_TAG] $*" >&2; }
error() { ech "** $(date -u +%FT%TZ)] [ERROR] [$LOG_TAG] $*" >&2; }
fatal() { error "$*"; exit 1; }

resolve_token_fernet() { 
  # helper de exemplo: resolve composio token de vault/fernet — replacar com impl real
  true
}

# ---------------------------------------------------------------------------
# helpers HTTP (usam composio api diretamente; substituir por composio-cli/SDK
# quando disponivel no ambiente de execucao)
# ---------------------------------------------------------------------------

composio_post() {
  local path="$1" body="${2:-}"
  curl -s -X POST "${SUPABASE_URL%/}/v1${path}" \
       -H "Authorization: Bearer ${COMPOSIO_API_KEY}" \
       -H "Content-Type: application/json" \
       -H "Accept: application/json" \
       ${body:+ -d "$body"} || fatal "composio_post falhou: $path"
}

composio_get() {
  local path="$1" params="${2:-}"
  local url="${SUPABASE_URL%/}/v1${path}"
  [[ -n "$params" ]] && url="${url}?${params}"
  curl -s -X GET "$url" \
       -H "Authorization: Bearer ${COMPOSIO_API_KEY}" \
       -H "Accept: application/json" || fatal "composio_get falhou: $path"
}

# ---------------------------------------------------------------------------
# Supabase helpers (crud direto na tabela de memoria)
# ---------------------------------------------------------------------------

supa_upsert_memory() {
  local session_id="$1" entity_type="$2" entity_id="${3:-}" key="$4" value="$5" expires_at="${6:-}"
  local now_epoch
  now_epoch=$(date +%s)
  local expires_iso
  expires_iso=$(date -u -d "${now_epoch}sec +${RETENTION_DAYS} day" +%FT%TZ 2>/dev/null || date -u -v+${RETENTION_DAYS}d -j +%FT%TZ)
  local body
  body=$(jq -nc --arg si "$session_id" --arg et "$entity_type" \
       --arg ei "$entity_id" --arg k "$key" --argjson v "$value" \
       --arg e "$expires_iso" \
       '{
         session_id: $si,
         entity_type: $et,
         entity_id: $ei,
         key: $k,
         value: $v,
         expires_at: $e
       }')
  composio_post "/${MEMORY_TABLE}" "$body"
}

supa_get_memory() {
  local session_id="$1" key="$2"
  local filter
  filter=$(jq -nc --arg si "$session_id" --arg k "$key" \
        '{ session_id: { eq: $si }, key: { eq: $k } }')
  composio_get "/${MEMORY_TABLE}?select=*&filter=$( jq -nc --argjson f "$filter" '$f' )"
}

supa_list_memory() {
  local session_id="${1:-}" entity_type="${2:-}"
  local filter="{}"
  [[ -n "$session_id" ]] && filter=$(jq -nc --arg si "$session_id" --argjson f "$filter" \
        '$f * { session_id: { eq: $si } }')
  [[ -n "$entity_type" ]] && filter=$(jq -nc --arg et "$entity_type" --argjson f "$filter" \
        '$f * { entity_type: { eq: $et } }')
  composio_get "/${MEMORY_TABLE}?select=*&order=created_at.desc&filter=$( jq -nc --argjson f "$filter" '$f' )"
}

supa_delete_memory() {
  local id="$1"
  composio_post "/${MEMORY_TABLE}?id=eq.${id}" "" -X DELETE || true
}

# ---------------------------------------------------------------------------
# memoria de sessao: salvar / recuperar contexto da sessao atual
# ---------------------------------------------------------------------------

store_session_memory() {
  local session_id="$1" key="$2" payload="$3"
  supa_upsert_memory "$session_id" "session" "$session_id" "$key" "$payload"
  info "memoria de sessao salva: session=$session_id key=$key"
}

get_session_memory() {
  local session_id="$1" key="$2"
  supa_get_memory "$session_id" "$key" | jq -c '.[]?' || true
}

# ---------------------------------------------------------------------------
# memoria de cliente: perfil, preferencias, historico de interacao
# ---------------------------------------------------------------------------

store_client_memory() {
  local client_id="$1" payload="$2"
  supa_upsert_memory "client:${client_id}" "client" "$client_id" "profile" "$payload"
  info "memoria de cliente salva: client=$client_id"
}

get_client_memory() {
  local client_id="$1"
  supa_get_memory "client:${client_id}" "profile" | jq -c '.[]?' || true
}

# ---------------------------------------------------------------------------
# memoria de decisao: registrar decisoes importantes dos agentes para auditoria/replay
# ---------------------------------------------------------------------------

store_decision() {
  local session_id="$1" decision_id="$2" payload="$3"
  supa_upsert_memory "$session_id" "decision" "$decision_id" "decision" "$payload"
  info "decisao registrada: session=$session_id decision=$decision_id"
}

list_decisions() {
  local session_id="${1:-}"
  supa_list_memory "${session_id:-}" "decision" | jq -c '.[]?'
}

# ---------------------------------------------------------------------------
# backup / restore (export JSON completo da tabela para arquivo)
# ---------------------------------------------------------------------------

backup_memory() {
  local ts
  ts=$(date +%Y%m%d_%H%M%S)
  local file="${BACKUP_DIR}/memory_backup_${ts}.json"
  local data
  data=$(composio_get "/${MEMORY_TABLE}?select=*")
  echo "$data" | jq -c '.[]?' > "$file"
  info "backup criado: $file"
  ech "$file"
}

restore_memory() {
  local file="$1"
  [[ -f "$file" ]] || fatal "arquivo nao encontrado: $file"
  while IFS= read -r record; do
    [[ -z "$record" ]] && continue
    composio_post "/${MEMORY_TABLE}" "$record" || { warn "falha ao restaurar record; continuando"; }
  done < <(jq -c '.[]?' "$file")
  info "restore concluido a partir de $file"
}

# ---------------------------------------------------------------------------
# principal
# ---------------------------------------------------------------------------

uso() {
  ech "uso: $0 {init|store|get|list|delete|cleanup|backup|restore} [args...]"
  ech "  init                     — criar tabela se nao existir"
  ech "  store <session> <tipo> [id] <chave> <json>  — armazenar memoria"
  ech "  get <session> <chave>   — recuperar memoria"
  ech "  list [session] [tipo]   — listar memoria"
  ech "  delete <id>             — remover memoria"
  ech "  cleanup                 — remover records expirados"
  ech "  backup                  — export JSON completo"
  ech "  restore <arquivo>       — importar backup"
  exit 1
}

main() {
  local op="${1:-help}"
  case "$op" in
    init)
      # nota: a criacao da tabela deve ser feita via SQL migrcao no supabase (ver references/)
      # este placeholder chama um endpoint conceitual; replacar com migracao real quando disponivel
      composio_post "/supabase/migrations/apply" "$(jq -nc '{ migrations: ["001_agent_memory.sql"] }')"
      info "migrcao de memoria aplicada (placeholder)"
      ;;
    store)
      [[ -z "${2:-}" || -z "${3:-}" || -z "${4:-}" ]] && uso
      store_session_memory "${2:-}" "${3:-}" "${4:-}"
      ;;
    get)
      [[ -z "${2:-}" || -z "${3:-}" ]] && uso
      get_session_memory "${2:-}" "${3:-}"
      ;;
    list)
      list_decisions "${2:-}"
      ;;
    delete)
      [[ -z "${2:-}" ]] && uso
      supa_delete_memory "${2:-}"
      info "memoria removida: id=${2:-}"
      ;;
    cleanup)
      # placeholder: deletar records com expires_at < agora
      composio_post "/${MEMORY_TABLE}?expires_at< lt.now" "" -X DELETE || true
      info "limpeza de memoria expirada executada (placeholder)"
      ;;
    backup)
      backup_memory
      ;;
    restore)
      [[ -z "${2:-}" ]] && uso
      restore_memory "${2:-}"
      ;;
    *)
      uso
      ;;
  esac
}

main "${@-}"
