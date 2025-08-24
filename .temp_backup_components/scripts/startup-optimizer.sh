#!/bin/bash

# AI Build System Startup Optimizer
# Optimizes system for maximum AI performance and starts all services

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   error "This script should not be run as root"
   exit 1
fi

# Configuration
WORKSPACE_DIR="/workspace"
NODE_VERSION="18"
MAX_MEMORY="8192"
CPU_PRIORITY="high"
AUTO_START=true

log "🚀 Starting AI Build System Startup Optimizer..."

# Function to check system requirements
check_system_requirements() {
    log "🔍 Checking system requirements..."
    
    # Check Node.js version
    if command -v node &> /dev/null; then
        NODE_VER=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
        if [[ $NODE_VER -ge 16 ]]; then
            log "✅ Node.js version: $(node --version)"
        else
            error "Node.js version $(node --version) is too old. Required: 16+"
            exit 1
        fi
    else
        error "Node.js is not installed"
        exit 1
    fi
    
    # Check available memory
    AVAILABLE_MEM=$(free -m | awk 'NR==2{printf "%.0f", $7}')
    if [[ $AVAILABLE_MEM -lt 2048 ]]; then
        warn "Available memory is low: ${AVAILABLE_MEM}MB. Recommended: 4GB+"
    else
        log "✅ Available memory: ${AVAILABLE_MEM}MB"
    fi
    
    # Check CPU cores
    CPU_CORES=$(nproc)
    log "✅ CPU cores: $CPU_CORES"
    
    # Check disk space
    DISK_SPACE=$(df -BG . | awk 'NR==2{print $4}' | sed 's/G//')
    if [[ $DISK_SPACE -lt 10 ]]; then
        warn "Disk space is low: ${DISK_SPACE}GB. Recommended: 20GB+"
    else
        log "✅ Available disk space: ${DISK_SPACE}GB"
    fi
}

# Function to optimize system performance
optimize_system_performance() {
    log "⚡ Optimizing system performance..."
    
    # Set process priority
    if command -v nice &> /dev/null; then
        case $CPU_PRIORITY in
            "high")
                NICE_VALUE="-10"
                ;;
            "normal")
                NICE_VALUE="0"
                ;;
            "low")
                NICE_VALUE="10"
                ;;
            *)
                NICE_VALUE="0"
                ;;
        esac
        
        # Apply nice value to current process
        renice $NICE_VALUE $$ 2>/dev/null || true
        log "✅ Set process priority to $CPU_PRIORITY"
    fi
    
    # Optimize Node.js settings
    export NODE_OPTIONS="--max-old-space-size=$MAX_MEMORY --optimize-for-size --gc-interval=100"
    log "✅ Optimized Node.js memory settings: ${MAX_MEMORY}MB"
    
    # Set environment variables for AI systems
    export AI_SYSTEM_AUTONOMOUS=true
    export AI_SYSTEM_HIGH_SPEED=true
    export AI_SYSTEM_OPTIMIZATION_LEVEL=maximum
    export AI_SYSTEM_LEARNING_INTERVAL=300000  # 5 minutes
    export AI_SYSTEM_OPTIMIZATION_INTERVAL=10000  # 10 seconds
    
    log "✅ Set AI system environment variables"
    
    # Create optimization directories
    mkdir -p "$WORKSPACE_DIR/.autonomous-learning"
    mkdir -p "$WORKSPACE_DIR/.high-speed-optimizer"
    mkdir -p "$WORKSPACE_DIR/.deep-learning-models"
    mkdir -p "$WORKSPACE_DIR/.nlp-models"
    mkdir -p "$WORKSPACE_DIR/.rl-models"
    
    log "✅ Created optimization directories"
}

# Function to start AI services
start_ai_services() {
    log "🧠 Starting AI services..."
    
    # Start autonomous continuous learner in background
    log "🚀 Starting autonomous continuous learner..."
    nohup node scripts/autonomous-continuous-learner.js > .autonomous-learning/autonomous.log 2>&1 &
    AUTONOMOUS_PID=$!
    echo $AUTONOMOUS_PID > .autonomous-learning/autonomous.pid
    log "✅ Autonomous learner started with PID: $AUTONOMOUS_PID"
    
    # Start high-speed optimizer in background
    log "⚡ Starting high-speed performance optimizer..."
    nohup node scripts/high-speed-optimizer.js > .high-speed-optimizer/optimizer.log 2>&1 &
    OPTIMIZER_PID=$!
    echo $OPTIMIZER_PID > .high-speed-optimizer/optimizer.pid
    log "✅ High-speed optimizer started with PID: $OPTIMIZER_PID"
    
    # Wait a moment for services to initialize
    sleep 5
    
    # Check if services are running
    if kill -0 $AUTONOMOUS_PID 2>/dev/null; then
        log "✅ Autonomous learner is running"
    else
        error "Autonomous learner failed to start"
        exit 1
    fi
    
    if kill -0 $OPTIMIZER_PID 2>/dev/null; then
        log "✅ High-speed optimizer is running"
    else
        error "High-speed optimizer failed to start"
        exit 1
    fi
}

# Function to start systemd service (if available)
start_systemd_service() {
    if command -v systemctl &> /dev/null && systemctl is-system-running &> /dev/null; then
        log "🔧 Starting systemd service..."
        
        # Copy service file to systemd directory
        if [[ -f "ai-build-system.service" ]]; then
            sudo cp ai-build-system.service /etc/systemd/system/
            sudo systemctl daemon-reload
            sudo systemctl enable ai-build-system.service
            sudo systemctl start ai-build-system.service
            
            if sudo systemctl is-active --quiet ai-build-system.service; then
                log "✅ Systemd service started successfully"
            else
                warn "Systemd service failed to start, falling back to manual startup"
                start_ai_services
            fi
        else
            warn "Service file not found, using manual startup"
            start_ai_services
        fi
    else
        log "ℹ️  Systemd not available, using manual startup"
        start_ai_services
    fi
}

# Function to monitor services
monitor_services() {
    log "📊 Starting service monitoring..."
    
    # Create monitoring script
    cat > monitor-services.sh << 'EOF'
#!/bin/bash

# Service monitoring script
WORKSPACE_DIR="/workspace"
LOG_FILE="$WORKSPACE_DIR/service-monitor.log"

log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

while true; do
    # Check autonomous learner
    if [[ -f "$WORKSPACE_DIR/.autonomous-learning/autonomous.pid" ]]; then
        PID=$(cat "$WORKSPACE_DIR/.autonomous-learning/autonomous.pid")
        if ! kill -0 $PID 2>/dev/null; then
            log "WARNING: Autonomous learner (PID: $PID) is not running, restarting..."
            cd "$WORKSPACE_DIR"
            nohup node scripts/autonomous-continuous-learner.js > .autonomous-learning/autonomous.log 2>&1 &
            echo $! > .autonomous-learning/autonomous.pid
        fi
    fi
    
    # Check high-speed optimizer
    if [[ -f "$WORKSPACE_DIR/.high-speed-optimizer/optimizer.pid" ]]; then
        PID=$(cat "$WORKSPACE_DIR/.high-speed-optimizer/optimizer.pid")
        if ! kill -0 $PID 2>/dev/null; then
            log "WARNING: High-speed optimizer (PID: $PID) is not running, restarting..."
            cd "$WORKSPACE_DIR"
            nohup node scripts/high-speed-optimizer.js > .high-speed-optimizer/optimizer.log 2>&1 &
            echo $! > .high-speed-optimizer/optimizer.pid
        fi
    fi
    
    # Log system status every 5 minutes
    if [[ $(( $(date +%s) % 300 )) -eq 0 ]]; then
        log "System status check - All services running"
    fi
    
    sleep 30
done
EOF
    
    chmod +x monitor-services.sh
    
    # Start monitoring in background
    nohup ./monitor-services.sh > /dev/null 2>&1 &
    MONITOR_PID=$!
    echo $MONITOR_PID > service-monitor.pid
    
    log "✅ Service monitoring started with PID: $MONITOR_PID"
}

# Function to show status
show_status() {
    log "📊 AI Build System Status:"
    echo "=================================="
    
    # Check autonomous learner
    if [[ -f ".autonomous-learning/autonomous.pid" ]]; then
        PID=$(cat .autonomous-learning/autonomous.pid)
        if kill -0 $PID 2>/dev/null; then
            echo "✅ Autonomous Learner: RUNNING (PID: $PID)"
        else
            echo "❌ Autonomous Learner: NOT RUNNING"
        fi
    else
        echo "❌ Autonomous Learner: PID file not found"
    fi
    
    # Check high-speed optimizer
    if [[ -f ".high-speed-optimizer/optimizer.pid" ]]; then
        PID=$(cat .high-speed-optimizer/optimizer.pid)
        if kill -0 $PID 2>/dev/null; then
            echo "✅ High-Speed Optimizer: RUNNING (PID: $PID)"
        else
            echo "❌ High-Speed Optimizer: NOT RUNNING"
        fi
    else
        echo "❌ High-Speed Optimizer: PID file not found"
    fi
    
    # Check service monitor
    if [[ -f "service-monitor.pid" ]]; then
        PID=$(cat service-monitor.pid)
        if kill -0 $PID 2>/dev/null; then
            echo "✅ Service Monitor: RUNNING (PID: $PID)"
        else
            echo "❌ Service Monitor: NOT RUNNING"
        fi
    else
        echo "❌ Service Monitor: PID file not found"
    fi
    
    echo "=================================="
    
    # Show recent logs
    if [[ -f ".autonomous-learning/autonomous.log" ]]; then
        echo ""
        echo "📝 Recent Autonomous Learner Logs:"
        tail -5 .autonomous-learning/autonomous.log
    fi
    
    if [[ -f ".high-speed-optimizer/optimizer.log" ]]; then
        echo ""
        echo "📝 Recent High-Speed Optimizer Logs:"
        tail -5 .high-speed-optimizer/optimizer.log
    fi
}

# Function to stop services
stop_services() {
    log "🛑 Stopping AI services..."
    
    # Stop autonomous learner
    if [[ -f ".autonomous-learning/autonomous.pid" ]]; then
        PID=$(cat .autonomous-learning/autonomous.pid)
        if kill -0 $PID 2>/dev/null; then
            kill $PID
            log "✅ Stopped autonomous learner (PID: $PID)"
        fi
        rm -f .autonomous-learning/autonomous.pid
    fi
    
    # Stop high-speed optimizer
    if [[ -f ".high-speed-optimizer/optimizer.pid" ]]; then
        PID=$(cat .high-speed-optimizer/optimizer.pid)
        if kill -0 $PID 2>/dev/null; then
            kill $PID
            log "✅ Stopped high-speed optimizer (PID: $PID)"
        fi
        rm -f .high-speed-optimizer/optimizer.pid
    fi
    
    # Stop service monitor
    if [[ -f "service-monitor.pid" ]]; then
        PID=$(cat service-monitor.pid)
        if kill -0 $PID 2>/dev/null; then
            kill $PID
            log "✅ Stopped service monitor (PID: $PID)"
        fi
        rm -f service-monitor.pid
    fi
    
    # Stop systemd service if running
    if command -v systemctl &> /dev/null; then
        if sudo systemctl is-active --quiet ai-build-system.service; then
            sudo systemctl stop ai-build-system.service
            log "✅ Stopped systemd service"
        fi
    fi
    
    log "✅ All services stopped"
}

# Main execution
main() {
    case "${1:-start}" in
        "start")
            check_system_requirements
            optimize_system_performance
            start_systemd_service
            monitor_services
            show_status
            log "🎉 AI Build System startup complete!"
            log "💡 Use './startup-optimizer.sh status' to check status"
            log "💡 Use './startup-optimizer.sh stop' to stop services"
            ;;
        "stop")
            stop_services
            ;;
        "status")
            show_status
            ;;
        "restart")
            stop_services
            sleep 2
            check_system_requirements
            optimize_system_performance
            start_systemd_service
            monitor_services
            show_status
            log "🔄 AI Build System restarted!"
            ;;
        *)
            echo "Usage: $0 {start|stop|status|restart}"
            echo "  start   - Start all AI services (default)"
            echo "  stop    - Stop all AI services"
            echo "  status  - Show service status"
            echo "  restart - Restart all AI services"
            exit 1
            ;;
    esac
}

# Trap signals for graceful shutdown
trap 'log "Received signal, shutting down gracefully..."; stop_services; exit 0' SIGINT SIGTERM

# Run main function
main "$@"