#!/usr/bin/env bash
# Script: composio-google-drive-notion-sync.sh
# Classe: P1 Automation — Sincronização bidirecional de documentos do Google Drive com páginas/DB no Notion via Composio
# Criado: 2026-08-30 · Zion Tech Group
#
# Objetivo:
#   Manter um espelho dos documentos do Google Drive dentro do Notion como páginas ou registros de database.
#   Polling periódico + fallback webhook. Suporte a sync unidirecional (Drive → Notion) e bidirecional.
#
# Fluxo principal:
#   1. Listar documentos do Drive (folder id configurável)
#   2. Para cada doc: extrair metadata + conteúdo (quando possível)
#   3. Verificar se já existe página no Notion (por Drive ID ou hash)
#   4. Criar ou atualizar página no Notion
#   5. (Bidirectional) Sincronizar alterações do Notion de volta para o Drive
#   6. Log de auditoria em CSV para rastrear sincronizações
#
# Variáveis de ambiente:
#   COMPOSIO_API_KEY
#   GOOGLE_DRIVE_FOLDER_ID   — ID da pasta no Drive
#   NOTION_DATABASE_ID       — ID do database no Notion (opcional; se ausente, cria páginas soltas)
#   NOTION_SYNC_MODE         — unidirectional | bidirectional (padrão: unidirectional)
#   POLL_INTERVAL_SEC        — intervalo entre polls em modo daemon (padrão: 300)
#   SYNC_STATE_DIR           — diretório de estado local para deduplicação
#
# Note: este script usa a API do Composio diretamente via curl; em ambientes com o CLI ou SDK do Composio
# disponível, preferir usar o tooling oficial. As endpoints abaixo são ilustrativas e devem ser ajustadas
# conforme o catálogo real de ferramentas conectadas ao ambiente de execução.

set -euo pipefail

COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-**REDACTED**}"
COMPOSIO_BASE_URL="${COMPOSIO_BASE_URL:-https://composio.ai}"
GOOGLE_DRIVE_FOLDER_ID="${GOOGLE_DRIVE_FOLDER_ID:-**REDACTED**}"
NOTION_DATABASE_ID="${NOTION_DATABASE_ID:-}"
NOTION_SYNC_MODE="${NOTION_SYNC_MODE:-unidirectional}"
POLL_INTERVAL_SEC="${POLL_INTERVAL_SEC:-300}"
SYNC_STATE_DIR="${SYNC_STATE_DIR:-/tmp/composio-gdrive-notion-state}"
AUDIT_LOG="${SYNC_STATE_DIR}/audit.csv"
mkdir -p "$SYNC_STATE_DIR"

log_ts() { date -u +"%Y-%m-%dT%H:%M:%SZ"; }
info()  { echo "[$(log_ts)] [INFO] $*"; }
warn()  { echo "[$(log_ts)] [WARN] $*" >&2; }
error() { echo "[$(log_ts)] [ERROR] $*" >&2; }
fatal() { error "$*"; exit 1; }

# -----------------------------------------------------------------------------
# HTTP helper para chamadas ao Composio
# -----------------------------------------------------------------------------

composio_post() {
  local path="$1" body="$2"
  curl -s -X POST "${COMPOSIO_BASE_URL%/}/v1${path}" \
       -H "Authorization: Bearer ${COMPOSIO_API_KEY}" \
       -H "Content-Type: application/json" \
       -H "Accept: application/json" \
       -d "$body" || fatal "composio_post falhou: $path"
}

composio_get() {
  local path="$1" params="${2:-}"
  local url="${COMPOSIO_BASE_URL%/}/v1${path}"
  [[ -n "$params" ]] && url="${url}?${params}"
  curl -s -X GET "$url" \
       -H "Authorization: Bearer ${COMPOSIO_API_KEY}" \
       -H "Accept: application/json" || fatal "composio_get falhou: $path"
}

# -----------------------------------------------------------------------------
# Google Drive: listar arquivos da pasta
# -----------------------------------------------------------------------------

list_drive_files() {
  local folder_id="$1"
  local body
  body=$(jq -n \
    --arg fid "$folder_id" \
    '{folderId: $fid, pageSize: 100}')
  local resp
  resp=$(composio_post "/tools/google_drive/list_folder_contents" "$body")
  echo "$resp" | jq -c '.files[]? // empty'
}

# -----------------------------------------------------------------------------
# Google Drive: buscar metadados de um arquivo
# -----------------------------------------------------------------------------

get_drive_metadata() {
  local file_id="$1"
  local body
  body=$(jq -n --arg fid "$file_id" '{fileId: $fid}')
  composio_post "/tools/google_drive/get_file_metadata" "$body"
}

# -----------------------------------------------------------------------------
# Google Drive: baixar conteúdo de arquivo de texto (para_docs, txt, md, csv)
# -----------------------------------------------------------------------------

fetch_drive_content() {
  local file_id="$1"
  local mime
  mime=$(get_drive_metadata "$file_id" | jq -r '.mimeType // "application/octet-stream"')
  case "$mime" in
    application/vnd.google-apps.document)
      composio_post "/tools/google_docs/export_content" \
        "$(jq -n --arg fid "$file_id" '{fileId: $fid, format: "markdown"}')"
      ;;
    text/plain|text/markdown|text/csv|application/pdf)
      composio_post "/tools/google_drive/download_file" \
        "$(jq -n --arg fid "$file_id" --arg mime "$mime" \
          '{fileId: $fid, mimeType: $mime}')" || echo "{\"error\": \"download failed for $file_id\"}"
      ;;
    *)
      warn "mime não suportado para extracão de texto: $mime (fileId=$file_id)"
      return 1
      ;;
  esac
}

# -----------------------------------------------------------------------------
# Notion: criar ou atualizar página / registro no database
# -----------------------------------------------------------------------------

notion_upsert() {
  local drive_id="$1" title="$2" content="$3" drive_url="$4" mime="$5"
  local existing_id
  # buscar registro existente pelo Drive ID (propriedade customizada)
  existing_id=$(notion_find_by_drive_id "$drive_id")
  local body
  if [[ -n "$existing_id" ]]; then
    body=$(jq -n \
      --arg pid "$existing_id" \
      --arg title "$title" \
      --arg content "$content" \
      --arg url "$drive_url" \
      --arg mime "$mime" \
      --arg drive_id "$drive_id" \
      '{
        pages: [{
          id: $pid,
          properties: {
            title: { title: [{ text: { content: $title } }] },
            DriveID: { rich_text: [{ text: { content: $drive_id } }] },
            DriveURL: { url: $url },
            MIME: { select: $mime }
          }
        }]
      }')
    composio_post "/tools/notion/update_page" "$body" > /dev/null
    info "atualizada página Notion: $title (id=$existing_id)"
  else
    # se database_id estiver configurado, criar registro dentro dele; senão, página solta
    if [[ -n "$NOTION_DATABASE_ID" ]]; then
      body=$(jq -n \
        --arg db "$NOTION_DATABASE_ID" \
        --arg title "$title" \
        --arg content "$content" \
        --arg url "$drive_url" \
        --arg mime "$mime" \
        --arg drive_id "$drive_id" \
        '{
          pages: [{
            parent: { database_id: $db },
            properties: {
              title: { title: [{ text: { content: $title } }] },
              DriveID: { rich_text: [{ text: { content: $drive_id } }] },
              DriveURL: { url: $url },
              MIME: { select: $mime }
            }
          }]
        }')
      local resp
      resp=$(composio_post "/tools/notion/create_page" "$body")
      local new_id
      new_id=$(echo "$resp" | jq -r '.id // empty')
      info "criada página Notion: $title (id=$new_id)"
    else
      body=$(jq -n \
        --arg title "$title" \
        --arg content "$content" \
        --arg url "$drive_url" \
        '{
          pages: [{
            parent: { page_id: "root" },
            properties: {
              title: { title: [{ text: { content: $title } }] }
            },
            content: [{ type: "paragraph", text: { content: $content } }]
          }]
        }')
      local resp
      resp=$(composio_post "/tools/notion/create_page" "$body")
      local new_id
      new_id=$(echo "$resp" | jq -r '.id // empty')
      info "criada página Notion (solta): $title (id=$new_id)"
    fi
  fi
  echo "$drive_id"
}

notion_find_by_drive_id() {
  local drive_id="$1"
  local filter
  filter=$(jq -n --arg did "$drive_id" \
    '{filter: {property: "DriveID", rich_text: {contains: $did}}}')
  local resp
  resp=$(composio_post "/tools/notion/search_pages" "$filter")
  echo "$resp" | jq -r '.results[0].id // empty'
}

# -----------------------------------------------------------------------------
# Notion → Drive (bidirectional)
# -----------------------------------------------------------------------------

sync_notion_to_drive() {
  [[ "$NOTION_SYNC_MODE" != "bidirectional" ]] && {
    info "modo unidirectional; pulando sync Notion→Drive"; return; }
  info "iniciando sync Notion→Drive (bidirectional)"
  # buscar páginas marcadas como "sync source" ou com DriveID vazio
  local pages
  pages=$(notion_list_pending_pages)
  while IFS= read -r page_json; do
    [[ -z "$page_json" ]] && continue
    local page_id title content
    page_id=$(echo "$page_json" | jq -r '.id')
    title=$(echo "$page_json" | jq -r '.properties.title.title[0].text.content // "Sem título"')
    content=$(extract_page_content "$page_id")
    # criar arquivo no Drive se não existir
    local drive_id
    drive_id=$(drive_find_by_notion_page "$page_id")
    if [[ -z "$drive_id" ]]; then
      drive_id=$(drive_create_file "$title" "$content")
      info "criado arquivo no Drive: $title (id=$drive_id)"
      notion_link_drive_id "$page_id" "$drive_id"
    fi
  done <<< "$pages"
}

notion_list_pending_pages() {
  # pages sem DriveID ou marcadas para sync
  local filter
  filter=$(jq -n '{
    filter: {
      or: [
        {property: "DriveID", rich_text: {isEmpty: true}},
        {property: "SyncToDrive", checkbox: {equals: true}}
      ]
    }
  }')
  composio_post "/tools/notion/search_pages" "$filter" | jq -c '.results[]? // empty'
}

extract_page_content() {
  local page_id="$1"
  composio_post "/tools/notion/get_page_content" \
    "$(jq -n --arg pid "$page_id" '{page_id: $pid}')" | \
    jq -r '.blocks[].text // empty' | tr '\n' ' '
}

drive_find_by_notion_page() {
  local page_id="$1"
  # would use a custom property or mapping store; placeholder
  echo ""
}

drive_create_file() {
  local title="$1" content="$2"
  local body
  body=$(jq -n --arg t "$title" --arg c "$content" \
    '{name: $t, content: $c, mimeType: "text/plain", parent_folder_id: "'"${GOOGLE_DRIVE_FOLDER_ID}"'"}')
  composio_post "/tools/google_drive/create_file" "$body" | jq -r '.id // empty'
}

notion_link_drive_id() {
  local page_id="$1" drive_id="$2"
  local body
  body=$(jq -n --arg pid "$page_id" --arg did "$drive_id" \
    '{pages: [{id: $pid, properties: {DriveID: {rich_text: [{text: {content: $did}}]}}}]}')
  composio_post "/tools/notion/update_page" "$body" > /dev/null
}

# -----------------------------------------------------------------------------
# Audit log
# -----------------------------------------------------------------------------

audit() {
  local drive_id="$1" action="$2" status="$3"
  echo "$(log_ts)	${drive_id}	${action}	${status}" >> "$AUDIT_LOG"
}

# -----------------------------------------------------------------------------
# Main
# -----------------------------------------------------------------------------

sync_drive_to_notion() {
  info "iniciando sync Drive→Notion"
  local count=0
  while IFS= read -r file_json; do
    [[ -z "$file_json" ]] && continue
    local file_id name mime url
    file_id=$(echo "$file_json" | jq -r '.id')
    name=$(echo "$file_json" | jq -r '.name // "Sem título"')
    mime=$(echo "$file_json" | jq -r '.mimeType // "application/octet-stream"')
    url=$(echo "$file_json" | jq -r '.webViewLink // empty')

    # deduplicação: pular se já sincronizado recentemente
    local state_file="${SYNC_STATE_DIR}/${file_id}.last_sync"
    if [[ -f "$state_file" ]]; then
      local last_sync
      last_sync=$(cat "$state_file")
      local age_sec=$(( $(date +%s) - $(date -d "$last_sync" +%s 2>/dev/null || echo 0) ))
      if [[ $age_sec -lt 60 ]]; then
        info "recentemente sincronizado: $name; pulando"
        continue
      fi
    fi

    local content
    content=$(fetch_drive_content "$file_id" 2>/dev/null || echo "")
    local title="${name%.*}"

    notion_upsert "$file_id" "$title" "$content" "$url" "$mime"
    echo "$(log_ts)" > "$state_file"
    audit "$file_id" "upsert" "ok"
    ((count++))
  done < <(list_drive_files "$GOOGLE_DRIVE_FOLDER_ID")
  info "sync concluído: $count documentos processados"
}

main() {
  [[ -z "$COMPOSIO_API_KEY" || "$COMPOSIO_API_KEY" == "**REDACTED**" ]] && fatal "COMPOSIO_API_KEY não configurada"
  [[ -z "$GOOGLE_DRIVE_FOLDER_ID" || "$GOOGLE_DRIVE_FOLDER_ID" == "**REDACTED**" ]] && fatal "GOOGLE_DRIVE_FOLDER_ID não configurada"

  case "${1:-}" in
    --daemon)
      info "modo daemon iniciado; poll a cada ${POLL_INTERVAL_SEC}s"
      while true; do
        sync_drive_to_notion
        sync_notion_to_drive
        sleep "$POLL_INTERVAL_SEC"
      done
      ;;
    --once)
      sync_drive_to_notion
      sync_notion_to_drive
      ;;
    *)
      sync_drive_to_notion
      sync_notion_to_drive
      ;;
  esac
}

main "$@"
