#!/usr/bin/env bash
# =============================================================================
# composio-linkedin-blog-crosspost.sh
# Crosspost de blog do Zion Tech Group → LinkedIn via Composio
# =============================================================================
set -euo pipefail

# Configuração
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
LINKEDIN_COMPANY_ID="${LINKIN_COMPANY_ID:-}"
BLOG_RSS_URL="${BLOG_RSS_URL:-https://ziontechgroup.com/blog/rss}"
DRY_RUN="${DRY_RUN:-false}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info()  { echo -e "${GREEN}[INFO]${NC} $*"; }
log_warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }
log_error() { echo -e "${RED}[ERROR]${NC} $*"; }

# ─── Validação de ambiente ───────────────────────────────────────────────────
check_env() {
    local missing=()
    [[ -z "$COMPOSIO_API_KEY" ]] && missing+=("COMPOSIO_API_KEY")
    [[ -z "$LINKEDIN_COMPANY_ID" ]] && missing+=("LINKEDIN_COMPANY_ID")
    [[ ${#missing[@]} -gt 0 ]] && {
        log_error "Variáveis não definidas: ${missing[*]}"
        log_info "Exportar antes de rodar:"
        log_info "  export COMPOSIO_API_KEY=sk_..."
        log_info "  export LINKEDIN_COMPANY_ID=6311489374 (ou seu ID)"
        exit 1
    }
}

# ─── Obter post mais recente do RSS ──────────────────────────────────────────
get_latest_post() {
    local rss_url="$1"
    local tmpfile
    tmpfile=$(mktemp)
    trap "rm -f $tmpfile" EXIT
    
    if command -v curl &>/dev/null; then
        curl -sL "$rss_url" -o "$tmpfile" || {
            log_error "Falha ao baixar RSS de $rss_url"
            return 1
        }
    else
        log_error "curl não disponível"
        return 1
    fi
    
    # Extrair título, link, e descrição do primeiro item
    local title link description pubdate
    title=$(grep -m1 '<title>' "$tmpfile" | sed 's/.*<title>\(.*\)<\/title>.*/\1/' | head -1)
    link=$(grep -m1 '<link>' "$tmpfile" | sed 's/.*<link>\(.*\)<\/link>.*/\1/' | head -1)
    description=$(grep -m1 '<description>' "$tmpfile" | sed 's/.*<description>\(.*\)<\/description>.*/\1/' | head -1)
    pubdate=$(grep -m1 '<pubDate>' "$tmpfile" | sed 's/.*<pubDate>\(.*\)<\/pubDate>.*/\1/' | head -1)
    
    # Sanitizar HTML da description
    description=$(echo "$description" | sed 's/<[^>]*>//g' | tr -s '[:space:]' ' ' | sed 's/^ *//;s/ *$//')
    
    echo "{\"title\":\"$title\",\"link\":\"$link\",\"description\":\"$description\",\"pubDate\":\"$pubdate\"}"
}

# ─── Formatar post para LinkedIn ─────────────────────────────────────────────
format_linkedin_post() {
    local post_json="$1"
    local title link description
    
    title=$(echo "$post_json" | python3 -c "import sys,json; print(json.load(sys.stdin)['title'])")
    link=$(echo "$post_json" | python3 -c "import sys,json; print(json.load(sys.stdin)['link'])")
    description=$(echo "$post_json" | python3 -c "import sys,json; print(json.load(sys.stdin)['description'])")
    
    # LinkedIn max 3000 chars; usar resumo + link
    local preview
    preview=$(echo "$description" | cut -c1-400)
    
    cat <<EOF
🚀 Novo artigo no Zion Tech Group:

${title}

${preview}...

🔗 Leia o completo: ${link}

#ZionTechGroup #AI #Composio #Automação #TechBrasil
EOF
}

# ─── Publicar no LinkedIn via Composio ───────────────────────────────────────
publish_to_linkedin() {
    local post_text="$1"
    local dry_run="$2"
    
    if [[ "$dry_run" == "true" ]]; then
        log_info "[DRY RUN] Post que seria publicado:"
        echo "$post_text"
        echo ""
        log_info "Re-run com DRY_RUN=false para publicar"
        return 0
    fi
    
    log_info "Publicando no LinkedIn via Composio..."
    
    # Usar Python para interagir com Composio SDK
    python3 <<PYEOF
import os
import sys
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
if not api_key:
    print("ERRO: COMPOSIO_API_KEY não definido", file=sys.stderr)
    sys.exit(1)

composio = Composio(api_key=api_key)
session = composio.create(user_id="zion-marketing")

# Publicar no LinkedIn
try:
    result = session.tools.execute(
        "LINKEDIN_POST_ARTICLE",
        arguments={
            "company_id": os.environ.get("LINKEDIN_COMPANY_ID", ""),
            "title": "Novo artigo: $(echo "$post_text" | head -1)",
            "content": """"$(echo "$post_text")""",
            "link": "https://ziontechgroup.com/blog",
        }
    )
    print(f"✅ Post publicado! ID: {result.get('id', 'unknown')}")
except Exception as e:
    print(f"❌ Erro ao publicar: {e}", file=sys.stderr)
    sys.exit(1)
PYEOF
}

# ─── Main ─────────────────────────────────────────────────────────────────────
main() {
    log_info "=== Zion Tech Group — LinkedIn Blog Crosspost ==="
    
    check_env
    
    local post_json
    post_json=$(get_latest_post "$BLOG_RSS_URL") || exit 1
    
    local title
    title=$(echo "$post_json" | python3 -c "import sys,json; print(json.load(sys.stdin)['title'])")
    log_info "Post detectado: $title"
    
    local post_text
    post_text=$(format_linkedin_post "$post_json")
    
    publish_to_linkedin "$post_text" "$DRY_RUN"
    
    log_info "✅ Crosspost concluído!"
}

main "$@"
