#!/bin/bash

# 🚀 Exponential AI Delegation System Startup Script
# 
# This script initializes and starts the exponential AI delegation system
# that creates autonomous AI factories and agents for exponential development growth.

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ORCHESTRATOR="$SCRIPT_DIR/exponential-ai-delegation-orchestrator.cjs"
CONFIG_FILE="$SCRIPT_DIR/exponential-ai-delegation-config.json"
REPORTS_DIR="$SCRIPT_DIR/reports"
FACTORIES_DIR="$SCRIPT_DIR/factories"
AGENTS_DIR="$SCRIPT_DIR/agents"

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO:${NC} $1"
}

# Banner
print_banner() {
    echo -e "${PURPLE}"
    cat << "EOF"
    ╔══════════════════════════════════════════════════════════════╗
    ║                    🚀 EXPONENTIAL AI DELEGATION 🚀          ║
    ║                                                              ║
    ║         Autonomous AI Factory & Agent Generation System      ║
    ║                                                              ║
    ║              Creating the Future of AI Development           ║
    ╚══════════════════════════════════════════════════════════════╝
EOF
    echo -e "${NC}"
}

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js 18+ and try again."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        error "Node.js version 18+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    log "✅ Node.js $(node --version) - OK"
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        error "npm is not installed. Please install npm and try again."
        exit 1
    fi
    
    log "✅ npm $(npm --version) - OK"
    
    # Check if we're in the right directory
    if [ ! -f "$ORCHESTRATOR" ]; then
        error "Exponential AI Delegation Orchestrator not found at: $ORCHESTRATOR"
        error "Please run this script from the project root directory."
        exit 1
    fi
    
    log "✅ Project structure - OK"
}

# Setup directories
setup_directories() {
    log "Setting up directories..."
    
    mkdir -p "$REPORTS_DIR"
    mkdir -p "$FACTORIES_DIR"
    mkdir -p "$AGENTS_DIR"
    
    log "✅ Directories created"
}

# Install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "package.json" ]; then
        if [ -d "node_modules" ]; then
            log "Updating dependencies..."
            npm update
        else
            log "Installing dependencies..."
            npm install
        fi
    else
        warn "No package.json found, skipping npm install"
    fi
    
    log "✅ Dependencies ready"
}

# Validate configuration
validate_config() {
    log "Validating configuration..."
    
    if [ ! -f "$CONFIG_FILE" ]; then
        warn "Configuration file not found, using defaults"
        return 0
    fi
    
    # Basic JSON validation
    if ! node -e "JSON.parse(require('fs').readFileSync('$CONFIG_FILE', 'utf8'))" &> /dev/null; then
        error "Invalid JSON in configuration file: $CONFIG_FILE"
        exit 1
    fi
    
    log "✅ Configuration validated"
}

# Check system resources
check_resources() {
    log "Checking system resources..."
    
    # Check available memory
    if command -v free &> /dev/null; then
        AVAILABLE_MEM=$(free -m | awk 'NR==2{printf "%.0f", $7}')
        if [ "$AVAILABLE_MEM" -lt 512 ]; then
            warn "Low memory available: ${AVAILABLE_MEM}MB. Recommended: 1GB+"
        else
            log "✅ Available memory: ${AVAILABLE_MEM}MB"
        fi
    fi
    
    # Check available disk space
    if command -v df &> /dev/null; then
        AVAILABLE_DISK=$(df . | awk 'NR==2{printf "%.0f", $4/1024}')
        if [ "$AVAILABLE_DISK" -lt 100 ]; then
            warn "Low disk space available: ${AVAILABLE_DISK}MB. Recommended: 1GB+"
        else
            log "✅ Available disk space: ${AVAILABLE_DISK}MB"
        fi
    fi
    
    # Check CPU cores
    if command -v nproc &> /dev/null; then
        CPU_CORES=$(nproc)
        log "✅ CPU cores: $CPU_CORES"
    fi
}

# Start the orchestrator
start_orchestrator() {
    log "Starting Exponential AI Delegation Orchestrator..."
    
    cd "$SCRIPT_DIR"
    
    # Check if orchestrator is already running
    if pgrep -f "exponential-ai-delegation-orchestrator.cjs" > /dev/null; then
        warn "Orchestrator is already running"
        return 0
    fi
    
    # Start the orchestrator
    nohup node "$ORCHESTRATOR" > "orchestrator.log" 2>&1 &
    ORCHESTRATOR_PID=$!
    
    # Wait a moment for startup
    sleep 2
    
    # Check if it's running
    if kill -0 "$ORCHESTRATOR_PID" 2>/dev/null; then
        log "✅ Orchestrator started with PID: $ORCHESTRATOR_PID"
        echo "$ORCHESTRATOR_PID" > "orchestrator.pid"
    else
        error "Failed to start orchestrator"
        exit 1
    fi
}

# Monitor status
monitor_status() {
    log "Monitoring orchestrator status..."
    
    if [ -f "orchestrator.pid" ]; then
        PID=$(cat "orchestrator.pid")
        if kill -0 "$PID" 2>/dev/null; then
            log "✅ Orchestrator running (PID: $PID)"
            
            # Show recent logs
            if [ -f "orchestrator.log" ]; then
                echo -e "${CYAN}Recent logs:${NC}"
                tail -n 10 "orchestrator.log"
            fi
        else
            error "Orchestrator process not found"
            rm -f "orchestrator.pid"
        fi
    else
        error "No orchestrator PID file found"
    fi
}

# Show status
show_status() {
    log "System status:"
    
    # Check orchestrator
    if [ -f "orchestrator.pid" ]; then
        PID=$(cat "orchestrator.pid")
        if kill -0 "$PID" 2>/dev/null; then
            echo -e "  🟢 Orchestrator: Running (PID: $PID)"
        else
            echo -e "  🔴 Orchestrator: Not running"
            rm -f "orchestrator.pid"
        fi
    else
        echo -e "  🔴 Orchestrator: Not running"
    fi
    
    # Count resources
    FACTORY_COUNT=$(ls "$FACTORIES_DIR"/*.cjs 2>/dev/null | wc -l)
    AGENT_COUNT=$(ls "$AGENTS_DIR"/*.cjs 2>/dev/null | wc -l)
    REPORT_COUNT=$(ls "$REPORTS_DIR"/*.json 2>/dev/null | wc -l)
    
    echo -e "  📊 Factories: $FACTORY_COUNT"
    echo -e "  📊 Agents: $AGENT_COUNT"
    echo -e "  📊 Reports: $REPORT_COUNT"
    
    # Show latest report if available
    if [ "$REPORT_COUNT" -gt 0 ]; then
        LATEST_REPORT=$(ls -t "$REPORTS_DIR"/*.json | head -1)
        if [ -n "$LATEST_REPORT" ]; then
            echo -e "  📄 Latest report: $(basename "$LATEST_REPORT")"
        fi
    fi
}

# Stop orchestrator
stop_orchestrator() {
    log "Stopping orchestrator..."
    
    if [ -f "orchestrator.pid" ]; then
        PID=$(cat "orchestrator.pid")
        if kill -0 "$PID" 2>/dev/null; then
            kill "$PID"
            log "✅ Orchestrator stopped"
        else
            warn "Orchestrator process not found"
        fi
        rm -f "orchestrator.pid"
    else
        warn "No orchestrator PID file found"
    fi
}

# Cleanup
cleanup() {
    log "Cleaning up..."
    
    # Stop orchestrator if running
    if [ -f "orchestrator.pid" ]; then
        stop_orchestrator
    fi
    
    # Remove temporary files
    rm -f "orchestrator.log"
    rm -f "orchestrator.pid"
    
    log "✅ Cleanup completed"
}

# Main function
main() {
    case "${1:-start}" in
        "start")
            print_banner
            check_prerequisites
            setup_directories
            install_dependencies
            validate_config
            check_resources
            start_orchestrator
            monitor_status
            show_status
            log "🚀 Exponential AI Delegation System started successfully!"
            log "📊 Monitor progress with: tail -f $REPORTS_DIR/exponential-ai-delegation-results.json"
            log "🛑 Stop with: $0 stop"
            ;;
        "stop")
            print_banner
            stop_orchestrator
            cleanup
            log "🛑 Exponential AI Delegation System stopped"
            ;;
        "status")
            print_banner
            show_status
            ;;
        "restart")
            print_banner
            stop_orchestrator
            cleanup
            sleep 2
            start_orchestrator
            monitor_status
            show_status
            log "🔄 Exponential AI Delegation System restarted"
            ;;
        "logs")
            if [ -f "orchestrator.log" ]; then
                tail -f "orchestrator.log"
            else
                error "No log file found"
            fi
            ;;
        "help"|"-h"|"--help")
            print_banner
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
            echo "  start     Start the exponential AI delegation system (default)"
            echo "  stop      Stop the orchestrator"
            echo "  restart   Restart the system"
            echo "  status    Show system status"
            echo "  logs      Follow orchestrator logs"
            echo "  help      Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0 start          # Start the system"
            echo "  $0 status         # Check status"
            echo "  $0 stop           # Stop the system"
            echo "  $0 logs           # Follow logs"
            ;;
        *)
            error "Unknown command: $1"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Trap signals for cleanup
trap cleanup EXIT
trap 'echo ""; cleanup; exit 0' INT TERM

# Run main function
main "$@"
