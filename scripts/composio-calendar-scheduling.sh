#!/bin/bash
# =============================================================================
# composio-calendar-scheduling.sh
# =============================================================================
# Agendamento Inteligente — Google Calendar + Gmail + Slack
# =============================================================================
# Descrição:
#   Agente que monitora o Gmail em busca de propostas de reunião, consulta
#   o Google Calendar para disponibilidade, sugere horários alternativos e
#   confirma agenda automaticamente. Integra alertas no Slack.
#
# Apps Conectados:
#   - Gmail (ler inbox, buscar emails com proposta de reunião)
#   - Google Calendar (consultar eventos, criar confirmações)
#   - Slack (alertas, notificação de agenda confirmada)
#
# Pré-requisitos:
#   - COMPOSIO_API_KEY configurado
#   - Conta Composio com Gmail, Google Calendar e Slack conectados
#   - Python 3.8+ com composio SDK instalado (pip install composio)
#
# Autor: Hermes Agent / Kleber Garcia Alcatrão
# Data: 30/08/2026
# Versão: 1.0.0
# =============================================================================

set -euo pipefail

# -----------------------------------------------------------------------------
# CONFIGURAÇÃO
# -----------------------------------------------------------------------------

SCRIPT_NAME="composio-calendar-scheduling"
SCRIPT_VERSION="1.0.0"

# Chave da API Composio (obrigatória)
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"

# Configurações opcionais
COMPOSIO_BASE_URL="${COMPOSIO_BASE_URL:-https://api.composio.dev}"
SLACK_CHANNEL="${SLACK_CHANNEL:-#zion-scheduling}"
LOG_LEVEL="${LOG_LEVEL:-INFO}"

# Filtros de busca de emails
EMAIL_SEARCH_QUERY="${EMAIL_SEARCH_QUERY:-subject:(reunião or meeting or call or sync or \"agendar\" or propose)}"
EMAIL_MAX_AGE_HOURS="${EMAIL_MAX_AGE_HOURS:-24}"

# Horário de trabalho (UTC) para sugerir horários
WORK_START_HOUR="${WORK_START_HOUR:-9}"
WORK_END_HOUR="${WORK_END_HOUR:-18}"
WORKDAYS="${WORKDAYS:-1,2,3,4,5}"  # Segunda a Sexta (ISO)

# Palavras-chave para detectar proposta de reunião no corpo do email
MEETING_KEYWORDS="${MEETING_KEYWORDS:-reunião,meeting,call,agendar,schedule,proposal,horário,slot,best time,conversa,sync,demo}"

# -----------------------------------------------------------------------------
# SEPHER — Funções de logging e utilitários
# -----------------------------------------------------------------------------

log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp
    timestamp="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
    if [[ "$level" == "ERROR" ]] || [[ "$LOG_LEVEL" == "DEBUG" ]]; then
        echo "[$timestamp] [$level] [$SCRIPT_NAME] $message" >&2
    elif [[ "$level" == "WARN" ]]; then
        echo "[$timestamp] [$level] [$SCRIPT_NAME] $message" >&2
    else
        echo "[$timestamp] [$level] [$SCRIPT_NAME] $message"
    fi
}

log_info()  { log "INFO"  "$@"; }
log_warn()  { log "WARN"  "$@"; }
log_error() { log "ERROR" "$@"; }
log_debug() { log "DEBUG" "$@"; }

die() {
    log_error "$@"
    exit 1
}

# Valida que a variável de ambiente está configurada
require_env() {
    local var_name="$1"
    local var_value="${!var_name:-}"
    if [[ -z "$var_value" ]]; then
        die "Variável de ambiente $var_name é obrigatória e não está configurada."
    fi
}

# -----------------------------------------------------------------------------
# VALIDAÇÃO DE PRÉ-REQUISITOS
# -----------------------------------------------------------------------------

validate_prerequisites() {
    log_info "Validando pré-requisitos..."

    require_env "COMPOSIO_API_KEY"

    # Verifica se o SDK Python está disponível
    if ! python -c "import composio" 2>/dev/null; then
        log_warn "SDK Composio não encontrado. Tentando instalar..."
        if pip install composio 2>/dev/null; then
            log_info "SDK Composio instalado com sucesso."
        else
            die "Falha ao instalar SDK Composio. Execute: pip install composio"
        fi
    fi

    # Verifica conexões disponíveis
    log_info "Verificando conexões Composio..."
    local connections
    connections=$(python - <<'PYEOF'
import os, sys, json, subprocess

api_key = os.environ.get("COMPOSIO_API_KEY", "")
if not api_key:
    print("[]")
    sys.exit(0)

try:
    from composio import Composio
    composio = Composio(api_key=api_key)
    user_id = "agent-scheduler"
    connections = composio.get_connections(user_id=user_id)
    print(json.dumps([c.get("appName", "") for c in connections] if connections else []))
except Exception as e:
    print(f'["ERROR: {str(e)}"]')
PYEOF
)

    if [[ "$connections" == *"ERROR"* ]]; then
        log_error "Falha ao verificar conexões: $connections"
        die "Não foi possível conectar ao Composio. Verifique COMPOSIO_API_KEY e sua conta."
    fi

    if [[ "$connections" == "[]" ]] || [[ -z "$connections" ]]; then
        log_warn "Nenhuma conexão encontrada. Certifique-se de que Gmail, Google Calendar e Slack estão conectados."
    fi

    # Verifica se os apps obrigatórios estão na lista de conexões
    local required_apps="GMAIL GOOGLE_CALENDAR"
    local missing_apps=""

    for app in $required_apps; do
        if [[ "$connections" != *"$app"* ]]; then
            missing_apps="$missing_apps $app"
        fi
    done

    if [[ -n "$missing_apps" ]]; then
        log_warn "Apps não conectados:$missing_apps (opcional para execução parcial)"
    fi

    log_info "Pré-requisitos validados."
}

# -----------------------------------------------------------------------------
# AGENTE PRINCIPAL — Lógica de agendamento
# -----------------------------------------------------------------------------

run_scheduling_agent() {
    log_info "Iniciando agente de agendamento inteligente..."
    log_info "Query de busca de emails: $EMAIL_SEARCH_QUERY"
    log_info "Janela de busca: últimos $EMAIL_MAX_AGE_HOURS horas"
    log_info "Horário de trabalho: $WORK_START_HOUR:$WORK_END_HOUR (UTC)"

    python - <<'PYEOF'
import os
import sys
import json
import datetime
import re
from typing import Optional, List, Dict, Any

# Importa Composio SDK
try:
    from composio import Composio
except ImportError:
    print("ERRO: SDK Composio não disponível. Execute: pip install composio")
    sys.exit(1)

# Configurações do ambiente
COMPOSIO_API_KEY = os.environ.get("COMPOSIO_API_KEY", "")
if not COMPOSIO_API_KEY:
    print("ERRO: COMPOSIO_API_KEY não configurado.")
    sys.exit(1)

EMAIL_SEARCH_QUERY = os.environ.get("EMAIL_SEARCH_QUERY", 
    "subject:(reunião or meeting or call or sync or agendar or propose)")
EMAIL_MAX_AGE_HOURS = int(os.environ.get("EMAIL_MAX_AGE_HOURS", "24"))
SLACK_CHANNEL = os.environ.get("SLACK_CHANNEL", "#zion-scheduling")
WORK_START_HOUR = int(os.environ.get("WORK_START_HOUR", "9"))
WORK_END_HOUR = int(os.environ.get("WORK_END_HOUR", "18"))
WORKDAYS = [int(d) for d in os.environ.get("WORKDAYS", "1,2,3,4,5").split(",")]
MEETING_KEYWORDS = [
    w.strip().lower() 
    for w in os.environ.get("MEETING_KEYWORDS", 
        "reunião,meeting,call,agendar,schedule,proposal,horário,slot,best time,conversa,sync,demo"
    ).split(",")
]

print(f"[{datetime.datetime.now().isoformat()}] Iniciando agente de agendamento...")
print(f"Query: {EMAIL_SEARCH_QUERY}")
print(f"Janela: {EMAIL_MAX_AGE_HOURS}h | Work hours: {WORK_START_HOUR}-{WORK_END_HOUR} UTC")
print(f"Workdays: {WORKDAYS} | Keywords: {MEETING_KEYWORDS}")

# Inicializa Composio
composio = Composio(api_key=COMPOSIO_API_KEY)
user_id = "agent-scheduler"

# -------------------------------------------------------------------------
# Etapa 1: Busca emails com proposta de reunião
# -------------------------------------------------------------------------
print("\n[Etapa 1] Buscando emails com proposta de reunião...")

try:
    # Primeiro, lista as mensagens que correspondem à query
    gmail_tools = composio.tools.get_tools(
        app_name="GMAIL",
        user_id=user_id
    )
    
    # Busca mensagens recentes
    search_results = composio.execute_action(
        app_name="GMAIL",
        action_name="GMAIL_SEARCH",
        params={
            "query": EMAIL_SEARCH_QUERY,
            "maxResults": 20
        },
        user_id=user_id
    )
    
    emails_found = search_results.get("messages", [])
    print(f"Encontrados {len(emails_found)} emails relevantes.")
    
except Exception as e:
    print(f"ERRO na busca de emails: {e}")
    # Continua com lista vazia para não bloquear execução
    emails_found = []

# Filtra emails com palavras-chave de reunião no corpo
def is_meeting_proposal(email_data: Dict[str, Any]) -> bool:
    """Detecta se um email contém proposta de reunião baseada em keywords."""
    body = email_data.get("body", "")
    subject = email_data.get("subject", "")
    
    # Já passou pela query de busca, mas valida keywords no corpo
    text_content = f"{subject} {body}".lower()
    
    for keyword in MEETING_KEYWORDS:
        if keyword in text_content:
            return True
    return False

meeting_emails = [
    e for e in emails_found 
    if is_meeting_proposal(e)
]

print(f"Emails com proposta de reunião: {len(meeting_emails)}")

# -------------------------------------------------------------------------
# Etapa 2: Para cada email, verifica disponibilidade no Google Calendar
# -------------------------------------------------------------------------
print("\n[Etapa 2] Consultando disponibilidade no Google Calendar...")

scheduling_results = []

for email in meeting_emails:
    email_id = email.get("id", "unknown")
    from_addr = email.get("from", "desconhecido")
    subject = email.get("subject", "Sem assunto")
    snippet = email.get("snippet", "")[:200]
    
    print(f"\n  Processando email #{email_id} de {from_addr}")
    print(f"  Assunto: {subject}")
    
    result = {
        "email_id": email_id,
        "from": from_addr,
        "subject": subject,
        "snippet": snippet,
        "suggested_times": [],
        "status": "pending"
    }
    
    try:
        # Consulta eventos do Google Calendar para os próximos dias
        calendar_start = datetime.datetime.now() + datetime.timedelta(days=1)
        calendar_end = calendar_start + datetime.timedelta(days=7)
        
        calendar_events = composio.execute_action(
            app_name="GOOGLE_CALENDAR",
            action_name="GOOGLE_CALENDAR_SEARCH_EVENTS",
            params={
                "calendarId": "primary",
                "timeMin": calendar_start.isoformat() + "Z",
                "timeMax": calendar_end.isoformat() + "Z",
                "maxResults": 50
            },
            user_id=user_id
        )
        
        busy_slots = calendar_events.get("items", [])
        print(f"  Eventos no calendário (próximos 7 dias): {len(busy_slots)}")
        
        # Gera sugestões de horário disponível
        suggested_times = []
        for day_offset in range(7):
            day = datetime.datetime.now() + datetime.timedelta(days=day_offset)
            
            # Pula fins de semana se não estiver no WORKDAYS
            if day.weekday() + 1 not in WORKDAYS:  # weekday() returns 0-6, MON=0
                continue
                
            for hour in range(WORK_START_HOUR, WORK_END_HOUR):
                slot_start = day.replace(hour=hour, minute=0, second=0)
                slot_end = slot_start + datetime.timedelta(minutes=30)
                
                # Verifica se há conflito
                is_available = True
                for event in busy_slots:
                    event_start = datetime.datetime.fromisoformat(
                        event.get("start", {}).get("dateTime", "")
                    )
                    event_end = datetime.datetime.fromisoformat(
                        event.get("end", {}).get("dateTime", "")
                    )
                    
                    if slot_start < event_end and slot_end > event_start:
                        is_available = False
                        break
                
                if is_available:
                    suggested_times.append({
                        "start": slot_start.isoformat(),
                        "end": slot_end.isoformat(),
                        "display": slot_start.strftime("%A, %d/%m às %H:%M")
                    })
        
        # Limita a 5 sugestões máximas
        result["suggested_times"] = suggested_times[:5]
        result["status"] = "eligible" if suggested_times else "no_availability"
        print(f"  Sugestões de horário: {len(suggested_times)}")
        
    except Exception as e:
        print(f"  ERRO ao consultar calendário: {e}")
        result["status"] = "calendar_error"
        result["error"] = str(e)
    
    scheduling_results.append(result)

# -------------------------------------------------------------------------
# Etapa 3: Para emails elegíveis, envia proposta de horário
# -------------------------------------------------------------------------
print("\n[Etapa 3] Enviando propostas de horário...")

for result in scheduling_results:
    if result["status"] != "eligible":
        continue
    
    email_id = result["email_id"]
    from_addr = result["from"]
    subject = result["subject"]
    
    print(f"\n  Preparando resposta para {from_addr} — {subject}")
    
    # Monta corpo da resposta
    body_lines = [
        f"Olá, obrigado pelo seu email!",
        "",
        f"Identificamos disponibilidade para uma reunião. Aqui estão os melhores horários disponíveis:",
        ""
    ]
    
    for i, slot in enumerate(result["suggested_times"], 1):
        body_lines.append(f"  {i}. {slot['display']} (UTC)")
    
    body_lines.extend([
        "",
        "Por favor, confirme qual horário funciona melhor para você ou sugira uma alternativa.",
        "",
        "Atenciosamente,",
        "Equipe Zion Tech Group"
    ])
    
    response_body = "\n".join(body_lines)
    
    try:
        # Envia resposta via Gmail
        send_result = composio.execute_action(
            app_name="GMAIL",
            action_name="GMAIL_SEND_MESSAGE",
            params={
                "to": from_addr,
                "subject": f"Re: {subject}",
                "body": response_body,
                "inReplyTo": email_id
            },
            user_id=user_id
        )
        
        print(f"  ✅ Resposta enviada para {from_addr}")
        result["action_taken"] = "email_sent"
        result["sent_message_id"] = send_result.get("id", "unknown")
        
    except Exception as e:
        print(f"  ❌ Falha ao enviar resposta: {e}")
        result["action_taken"] = "email_failed"
        result["error"] = str(e)

# -------------------------------------------------------------------------
# Etapa 4: Resumo e notificação Slack
# -------------------------------------------------------------------------
print("\n[Etapa 4] Gerando resumo e notificando Slack...")

# Monta relatório
total_processed = len(scheduling_results)
eligible_count = sum(1 for r in scheduling_results if r["status"] == "eligible")
email_sent_count = sum(1 for r in scheduling_results if r.get("action_taken") == "email_sent")
error_count = sum(1 for r in scheduling_results if r.get("status") in ("calendar_error",))

summary = {
    "timestamp": datetime.datetime.now().isoformat(),
    "total_emails_processed": total_processed,
    "meeting_proposals_found": len(meeting_emails),
    "eligible_for_scheduling": eligible_count,
    "responses_sent": email_sent_count,
    "errors": error_count,
    "details": [
        {
            "from": r["from"],
            "subject": r["subject"],
            "status": r["status"],
            "suggestions": len(r.get("suggested_times", [])),
            "action": r.get("action_taken", "none")
        }
        for r in scheduling_results
    ]
}

print("\n📊 Resumo da execução:")
print(f"   Emails processados: {summary['total_emails_processed']}")
print(f"   Propostas de reunião: {summary['meeting_proposals_found']}")
print(f"   Elegíveis para agendamento: {summary['eligible_for_scheduling']}")
print(f"   Respostas enviadas: {summary['responses_sent']}")
print(f"   Erros: {summary['errors']}")

# Tenta notificar Slack
slack_message = (
    f"📅 *Agendamento Inteligente — Resumo*\n"
    f"Tempo: {summary['timestamp']}\n"
    f"Emails processados: {summary['total_emails_processed']}\n"
    f"Propostas encontradas: {summary['meeting_proposals_found']}\n"
    f"Elegíveis: {summary['eligible_for_scheduling']}\n"
    f"Respostas enviadas: {summary['responses_sent']}\n"
    f"Erros: {summary['errors']}\n"
    f"_Detalhes: {json.dumps(summary['details'], ensure_ascii=False)[:500]}_"
)

try:
    slack_result = composio.execute_action(
        app_name="SLACK",
        action_name="SLACK_SEND_MESSAGE",
        params={
            "channel": SLACK_CHANNEL,
            "text": slack_message
        },
        user_id=user_id
    )
    print(f"\n✅ Notificação Slack enviada para {SLACK_CHANNEL}")
    print(f"   Message ID: {slack_result.get('ts', 'unknown')}")
except Exception as e:
    print(f"\n⚠️ Falha ao enviar notificação Slack: {e}")
    print("   (Continua execução — Slack é opcional)")

# Salva relatório em arquivo para auditoria
report_path = os.path.expanduser("~/zion.app/automation/reports/calendar-scheduling-report.json")
os.makedirs(os.path.dirname(report_path), exist_ok=True)
with open(report_path, "w") as f:
    json.dump(summary, f, indent=2, ensure_ascii=False)
print(f"\n📄 Relatório salvo em: {report_path}")

print("\n✅ Agente de agendamento concluído.")
PYEOF

    local exit_code=$?
    if [[ $exit_code -ne 0 ]]; then
        log_error "Agente de agendamento falhou com código $exit_code"
        return 1
    fi
    return 0
}

# -----------------------------------------------------------------------------
# MAIN
# -----------------------------------------------------------------------------

main() {
    echo "============================================================"
    echo "  $SCRIPT_NAME v$SCRIPT_VERSION"
    echo "  Agendamento Inteligente — Google Calendar + Gmail + Slack"
    echo "============================================================"
    echo ""

    # Valida pré-requisitos
    validate_prerequisites

    echo ""
    echo "Iniciando execução..."
    echo ""

    # Executa agente
    run_scheduling_agent
    local exit_code=$?

    echo ""
    if [[ $exit_code -eq 0 ]]; then
        echo "============================================================"
        echo "  ✅ Execução concluída com sucesso."
        echo "============================================================"
    else
        echo "============================================================"
        echo "  ❌ Execução falhou. Verifique os logs acima."
        echo "============================================================"
    fi

    return $exit_code
}

# Ponto de entrada
main "$@"
