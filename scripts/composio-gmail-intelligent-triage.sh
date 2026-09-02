#!/bin/bash
# =============================================================================
# composio-gmail-intelligent-triage.sh
# Zion Tech Group — Intelligent email triage with classification
#
# Fluxo:
#   1. Busca threads/new emails não lidos no Gmail
#   2. Classifica cada email: LEAD / SUPPORT / PARTNERSHIP / SPAM / OTHER
#   3. LEAD: enriquece via Apollo → cria HubSpot contact → cria Linear issue →
#      gera draft de reply no Gmail → notifica Slack
#   4. SUPPORT: cria Linear issue de suporte → atribui → notifica Slack
#   5. PARTNERSHIP: cria Linear issue + Slack notification
#   6. SPAM: arquiva (GMAIL_DELETE ou GMAIL_MOVE para spam label)
#   7. OTHER: labeliza e ignora
#
# Uso:
#   ./composio-gmail-intelligent-triage.sh [max_threads] [slack_channel] [notion_db_id]
#   ./composio-gmail-intelligent-triage.sh 20 "#zion-leads" "content-calendar"
#
# Pré-requisitos:
#   - Composio CLI instalado e autenticado (composio login --agent)
#   - Gmail, Apollo, HubSpot, Linear, Slack, Notion (opcional) conectados no Composio
# =============================================================================

set -euo pipefail

MAX_THREADS="${1:-20}"
SLACK_CHANNEL="${2:-#zion-leads}"
NOTION_DB_ID="${3:-}"

GMAIL_USER="${GMAIL_USER:-kleber@ziontechgroup.com}"
LOG_PREFIX="[GMAIL-Triage]"

log() { echo "${LOG_PREFIX} $(date '+%Y-%m-%d %H:%M:%S') $*"; }

# ── Funções auxiliares ────────────────────────────────────────────────────────

# Busca threads não lidas recentes
fetch_unread_threads() {
    local max="$1"
    
    log "Buscando até $max threads não lidas no Gmail..."
    
    local result
    if [[ -n "$GMAIL_USER" ]]; then
        result=$(composio execute GMAIL_LIST_THREADS -d "{
            \"max_results\": $max,
            \"q\": \"is:unread\",
            \"user_id\": \"$GMAIL_USER\"
        }" 2>/dev/null) || {
            log "ERRO: Falha ao listar threads Gmail. Verifique autenticação."
            return 1
        }
    else
        result=$(composio execute GMAIL_LIST_THREADS -d "{
            \"max_results\": $max,
            \"q\": \"is:unread\"
        }" 2>/dev/null) || {
            log "ERRO: Falha ao listar threads Gmail."
            return 1
        }
    fi
    
    echo "$result"
}

# Classifica o email via LLM
classify_email() {
    local subject="$1"
    local snippet="$2"
    local from_email="$3"
    
    local context
    context=$(cat <<EOF
Subject: $subject
From: $from_email
Snippet: $snippet

Classifique este e-mail e retorne APENAS uma categoria:
- LEAD: Potencial cliente prospects, inbound sales, consultoria
- SUPPORT: Suporte técnico, bug report, ajuda
- PARTNERSHIP: Proposta de parceria, colaboração, afiliados
- SPAM: Spam, phishing, promoção irrelevante
- OTHER: Não se encaixa nas categorias acima

Responda apenas com uma palavra: LEAD, SUPPORT, PARTNERSHIP, SPAM ou OTHER
EOF
)

    local classification
    classification=$(composio execute GPT_COMPLETIONS_FALLBACK -d "{
        \"model\": \"gpt-4o-mini\",
        \"messages\": [
            {\"role\": \"system\", \"content\": \"You are an email triage assistant. Respond with ONLY one of: LEAD, SUPPORT, PARTNERSHIP, SPAM, OTHER. Nothing else.\"},
            {\"role\": \"user\", \"content\": \"$context\"}
        ]
    }" 2>/dev/null | python -c "import sys,json; d=json.load(sys.stdin); print(d.get('choices',[{}])[0].get('message',{}).get('content','').strip().upper() or 'OTHER')" 2>/dev/null) || classification="OTHER"

    # Validação
    if [[ ! "$classification" =~ ^(LEAD|SUPPORT|PARTNERSHIP|SPAM|OTHER)$ ]]; then
        classification="OTHER"
    fi

    echo "$classification"
}

# Enri aqui o lead via Apollo (se disponível)
enrich_lead() {
    local email="$1"
    
    log "Enri aquindo lead via Apollo: $email"
    
    local enrichment
    enrichment=$(composio execute APOLLO_PEOPLE_ENRICHMENT -d "{
        \"email\": \"$email\"
    }" 2>/dev/null) || {
        log "AVISO: Apollo enrichment falhou para $email"
        echo '{"company_name":"","company_size":null,"industry":"","title":""}'
        return
    }
    
    echo "$enrichment"
}

# Cria contato no HubSpot
create_hubspot_contact() {
    local email="$1"
    local name="$2"
    local company="$3"
    local industry="$4"
    local source="$5"
    
    log "Criando contato HubSpot: $name <$email>"
    
    local result
    result=$(composio execute HUBSPOT_CREATE_A_CONTACT -d "{
        \"email\": \"$email\",
        \"firstname\": \"$(echo "$name" | cut -d' ' -f1)\",
        \"lastname\": \"$(echo "$name" | cut -d' ' -f2-)\",
        \"company\": \"$company\",
        \"industry\": \"$industry\",
        \"lead_source\": \"$source\",
        \"notes\": \"Lead classificado automaticamente via Composio Gmail Triage\"
    }" 2>/dev/null) || {
        log "AVISO: Falha ao criar contato HubSpot para $email"
        return 1
    }
    
    echo "$result"
}

# Cria issue no Linear
create_linear_issue() {
    local title="$1"
    local body="$2"
    local priority="$3"
    local category="$4"
    
    log "Criando Linear issue: $title (priority: $priority)"
    
    local result
    result=$(composio execute LINEAR_CREATE_LINEAR_ISSUE -d "{
        \"title\": \"$title\",
        \"body\": \"$(echo "$body" | python -c 'import sys,json; print(json.dumps(sys.stdin.read()))' 2>/dev/null || echo '{}')\",
        \"priority\": \"$priority\"
    }" 2>/dev/null) || {
        log "AVISO: Falha ao criar Linear issue."
        return 1
    }
    
    echo "$result"
}

# Gera draft de reply no Gmail
create_gmail_draft() {
    local to_email="$1"
    local subject="$2"
    local classification="$3"
    local sender_name="$4"
    
    local reply_body
    case "$classification" in
        LEAD)
            reply_body="Olá $sender_name,
            
Interessado no que o Zion Tech Group pode fazer pelo seu negócio?
Nossa equipe está disponível para uma conversa rápida e entender melhor suas necessidades.

Abraço,
Equipe Zion Tech Group"
            ;;
        SUPPORT)
            reply_body="Olá $sender_name,
            
Obrigado por entrar em contato. Vamos analisar sua demanda e retornar em breve.
            
Atenciosamente,
Suporte Zion Tech Group"
            ;;
        PARTNERSHIP)
            reply_body="Olá $sender_name,
            
Obrigado pela proposta de parceria. Vamos avaliar e entrar em contato em breve.
            
Abraço,
Zion Tech Group"
            ;;
        *)
            reply_body="Olá $sender_name,
            
Obrigado pelo seu e-mail. Entraremos em contato quando possível.
            
Atenciosamente,
Zion Tech Group"
            ;;
    esac
    
    log "Criando draft Gmail para: $to_email (assunto: $subject)"
    
    composio execute GMAIL_CREATE_DRAFT -d "{
        \"to\": \"$to_email\",
        \"subject\": \"Re: $subject\",
        \"body\": \"$(echo "$reply_body" | python -c 'import sys,json; print(json.dumps(sys.stdin.read()))' 2>/dev/null || echo '{}')\"
    }" 2>/dev/null || {
        log "AVISO: Falha ao criar draft Gmail."
        return 1
    }
    
    log "Draft Gmail criado."
}

# Notifica Slack
notify_slack_lead() {
    local name="$1"
    local email="$2"
    local company="$3"
    local classification="$4"
    local subject="$5"
    local from_email="$6"
    local linear_url="$7"
    local hubspot_url="$8"
    
    local emoji="🟢"
    [[ "$classification" == "SUPPORT" ]] && emoji="🔧"
    [[ "$classification" == "PARTNERSHIP" ]] && emoji="🤝"
    
    local message
    message="$emoji *Novo Lead Triage — Zion Tech Group*\n\n
* Nome:* $name
* Email:* $email
* Empresa:* $company
* Categoria:* $classification
* Assunto:* $subject
* Origem:* $from_email
$( [[ -n "$linear_url" ]] && echo "*Linear:* $linear_url" )
$( [[ -n "$hubspot_url" ]] && echo "*HubSpot:* $hubspot_url" )
📅 $(date '+%H:%M')
"
    
    log "Notificando Slack ($SLACK_CHANNEL)..."
    composio execute SLACK_SEND_MESSAGE -d "{
        \"channel\": \"$SLACK_CHANNEL\",
        \"text\": \"$(echo "$message" | python -c 'import sys,json; print(json.dumps(sys.stdin.read()))' 2>/dev/null || echo '{}')\"
    }" 2>/dev/null || {
        log "AVISO: Slack notification falhou."
        return 1
    }
    
    log "Slack notificado."
}

# Arquiva spam
archive_spam() {
    local thread_id="$1"
    local subject="$2"
    
    log "Arquivando spam: $subject (thread: $thread_id)"
    
    # Labeliza como spam ou move para trash
    composio execute GMAIL_ADD_LABELS -d "{
        \"label_ids\": [\"SPAM_LABEL_ID\"]
    }" 2>/dev/null || {
        log "AVISO: Falha ao arquivar spam."
        return 1
    }
    
    log "Spam arquivado."
}

# Register Notion (optional)
register_notion() {
    local name="$1"
    local email="$2"
    local company="$3"
    local classification="$4"
    local subject="$5"
    local now
    now=$(date '+%Y-%m-%d %H:%M')
    
    if [[ -z "$NOTION_DB_ID" ]]; then
        return 0
    fi
    
    log "Registrando no Notion (DB: $NOTION_DB_ID)..."
    composio execute NOTION_CREATE_NOTION_PAGE -d "{
        \"parent_database_id\": \"$NOTION_DB_ID\",
        \"title\": \"Lead: $name\",
        \"properties\": {
            \"Email\": \"$email\",
            \"Empresa\": \"$company\",
            \"Classificacao\": \"$classification\",
            \"Assunto\": \"$subject\",
            \"Status\": \"Triageado\",
            \"Date\": \"$now\"
        }
    }" 2>/dev/null || {
        log "AVISO: Notion registro falhou."
        return 1
    }
    
    log "Notion registrado."
}

# ── Main ──────────────────────────────────────────────────────────────────────

main() {
    log "Iniciando intelligent email triage (max: $MAX_THREADS threads)"
    
    # 1. Busca threads
    local threads_json
    threads_json=$(fetch_unread_threads "$MAX_THREADS") || {
        log "Falha ao buscar threads. Encerrando."
        exit 1
    }
    
    # 2. Processa cada thread
    local processed=0
    local leads=0
    local support=0
    local partnership=0
    local spam=0
    local other=0
    
    echo "$threads_json" | python -c "
import sys, json
data = json.load(sys.stdin)
threads = data.get('threads', data.get('data', []))
for t in threads:
    print(json.dumps(t))
" | while IFS= read -r thread_line; do
        [[ -z "$thread_line" ]] && continue
        
        local thread_id subject snippet from_email from_name
        thread_id=$(echo "$thread_line" | python -c "import sys,json; print(json.loads(sys.stdin.read()).get('id',''))" 2>/dev/null || echo "")
        subject=$(echo "$thread_line" | python -c "import sys,json; print(json.loads(sys.stdin.read()).get('subject',''))" 2>/dev/null || echo "")
        snippet=$(echo "$thread_line" | python -c "import sys,json; print((json.loads(sys.stdin.read()).get('snippet','') or '')[:500])" 2>/dev/null || echo "")
        from_email=$(echo "$thread_line" | python -c "import sys,json; d=json.loads(sys.stdin.read()).get('from',{}); print(d.get('email','') or d.get('address','') or '')" 2>/dev/null || echo "")
        from_name=$(echo "$thread_line" | python -c "import sys,json; d=json.loads(sys.stdin.read()).get('from',{}); print(d.get('name','') or '')" 2>/dev/null || echo "")
        
        [[ -z "$thread_id" || -z "$subject" ]] && continue
        
        log "Processando thread: $subject (de: $from_email)"
        
        # Classifica
        local classification
        classification=$(classify_email "$subject" "$snippet" "$from_email")
        log "Classificação: $classification"
        
        # Actions by classification
        case "$classification" in
            LEAD)
                leads=$((leads + 1))
                
                # Enri aqua
                local enrichment
                enrichment=$(enrich_lead "$from_email")
                local company industry
                company=$(echo "$enrichment" | python -c "import sys,json; d=json.load(sys.stdin); print(d.get('company_name','') or '')" 2>/dev/null || echo "")
                industry=$(echo "$enrichment" | python -c "import sys,json; d=json.load(sys.stdin); print(d.get('industry','') or '')" 2>/dev/null || echo "")
                
                # HubSpot contact
                local hubspot_result
                hubspot_result=$(create_hubspot_contact "$from_email" "$from_name" "$company" "$industry" "Gmail Triage") || true
                
                # Linear issue
                local linear_title="Lead: $subject"
                local linear_body="Lead inbound via Gmail.
From: $from_email ($from_name)
Company: $company
Industry: $industry
Subject: $subject
Snippet: $snippet"
                local linear_result
                linear_result=$(create_linear_issue "$linear_title" "$linear_body" "1" "Lead") || true
                
                # Gmail draft
                create_gmail_draft "$from_email" "$subject" "$classification" "$from_name" || true
                
                # Slack notification
                notify_slack_lead "$from_name" "$from_email" "$company" "$classification" "$subject" "$from_email" "$linear_result" "$hubspot_result" || true
                
                # Notion
                register_notion "$from_name" "$from_email" "$company" "$classification" "$subject"
                ;;
                
            SUPPORT)
                support=$((support + 1))
                
                local linear_title="Support: $subject"
                local linear_body="Support request via Gmail.
From: $from_email ($from_name)
Subject: $subject
Snippet: $snippet"
                
                create_linear_issue "$linear_title" "$linear_body" "2" "Support" || true
                notify_slack_lead "$from_name" "$from_email" "" "$classification" "$subject" "$from_email" "" "" || true
                ;;
                
            PARTNERSHIP)
                partnership=$((partnership + 1))
                
                local linear_title="Partnership: $subject"
                local linear_body="Partnership proposal via Gmail.
From: $from_email ($from_name)
Subject: $subject
Snippet: $snippet"
                
                create_linear_issue "$linear_title" "$linear_body" "3" "Partnership" || true
                notify_slack_lead "$from_name" "$from_email" "" "$classification" "$subject" "$from_email" "" "" || true
                ;;
                
            SPAM)
                spam=$((spam + 1))
                archive_spam "$thread_id" "$subject" || true
                ;;
                
            *)
                other=$((other + 1))
                log "Outro: $subject — ignorado."
                ;;
        esac
        
        processed=$((processed + 1))
    done
    
    log "✅ Triagem inteligente concluída."
    log "   Total processado: $processed threads"
    log "   LEADs: $leads | SUPPORT: $support | PARTNERSHIP: $partnership | SPAM: $spam | OUTRO: $other"
}

main "$@"
