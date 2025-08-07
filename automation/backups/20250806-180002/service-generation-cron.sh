#!/bin/bash

# Service Generation Automation Cron Jobs
# This script sets up continuous automation for service generation, advertisement creation, and sales optimization

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"
DATA_DIR="$SCRIPT_DIR/data"
NODE_PATH="$(which node)"
NPM_PATH="$(which npm)"

# Create necessary directories
mkdir -p "$LOG_DIR"
mkdir -p "$DATA_DIR"

# Log file paths
SERVICE_GENERATION_LOG="$LOG_DIR/service-generation.log"
ADVERTISEMENT_LOG="$LOG_DIR/advertisement-generation.log"
SALES_OPTIMIZATION_LOG="$LOG_DIR/sales-optimization.log"
PERFORMANCE_LOG="$LOG_DIR/performance-tracking.log"
ERROR_LOG="$LOG_DIR/error.log"

# Function to log messages
log_message() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [$level] $message" | tee -a "$LOG_DIR/automation.log"
}

# Function to check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log_message "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    log_message "INFO" "Node.js found: $(node --version)"
}

# Function to check if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        log_message "ERROR" "npm is not installed or not in PATH"
        exit 1
    fi
    log_message "INFO" "npm found: $(npm --version)"
}

# Function to install dependencies
install_dependencies() {
    log_message "INFO" "Installing dependencies..."
    
    if [ -f "$SCRIPT_DIR/package.json" ]; then
        cd "$SCRIPT_DIR"
        npm install
        log_message "INFO" "Dependencies installed successfully"
    else
        log_message "WARNING" "No package.json found, skipping dependency installation"
    fi
}

# Function to start service generation
start_service_generation() {
    log_message "INFO" "Starting service generation..."
    
    cd "$SCRIPT_DIR"
    
    # Start the service generation orchestrator
    node -e "
        const ServiceGenerationOrchestrator = require('./service-generation-orchestrator');
        const orchestrator = new ServiceGenerationOrchestrator();
        
        async function start() {
            try {
                await orchestrator.initialize();
                await orchestrator.start();
                console.log('Service generation orchestrator started successfully');
            } catch (error) {
                console.error('Error starting service generation:', error);
                process.exit(1);
            }
        }
        
        start();
    " >> "$SERVICE_GENERATION_LOG" 2>&1 &
    
    local pid=$!
    echo $pid > "$SCRIPT_DIR/service-generation.pid"
    log_message "INFO" "Service generation started with PID: $pid"
}

# Function to start advertisement generation
start_advertisement_generation() {
    log_message "INFO" "Starting advertisement generation..."
    
    cd "$SCRIPT_DIR"
    
    # Start the advertisement generation system
    node -e "
        const AdvertisementGenerationSystem = require('./advertisement-generation-system');
        const adSystem = new AdvertisementGenerationSystem();
        
        async function start() {
            try {
                await adSystem.loadAdvertisementRegistry();
                await adSystem.loadMarketPricingRegistry();
                console.log('Advertisement generation system initialized');
                
                // Generate advertisements for existing services
                const services = require('./service-generation-factory').getAllServices();
                for (const service of services) {
                    const adTypes = ['social-media', 'search-engine', 'content-marketing'];
                    for (const adType of adTypes) {
                        await adSystem.generateAdvertisement(service.id, adType);
                        console.log('Generated advertisement for service:', service.name);
                    }
                }
            } catch (error) {
                console.error('Error in advertisement generation:', error);
            }
        }
        
        start();
    " >> "$ADVERTISEMENT_LOG" 2>&1 &
    
    local pid=$!
    echo $pid > "$SCRIPT_DIR/advertisement-generation.pid"
    log_message "INFO" "Advertisement generation started with PID: $pid"
}

# Function to start sales optimization
start_sales_optimization() {
    log_message "INFO" "Starting sales optimization..."
    
    cd "$SCRIPT_DIR"
    
    # Start the sales optimization system
    node -e "
        const ServiceGenerationFactory = require('./service-generation-factory');
        const factory = new ServiceGenerationFactory();
        
        async function optimizeSales() {
            try {
                const agents = factory.getAllSalesAgents();
                console.log('Optimizing', agents.length, 'sales agents...');
                
                for (const agent of agents) {
                    // Simulate performance optimization
                    const performanceUpdate = {
                        leadsGenerated: agent.performance.leadsGenerated + Math.floor(Math.random() * 10),
                        dealsClosed: agent.performance.dealsClosed + Math.floor(Math.random() * 2),
                        revenueGenerated: agent.performance.revenueGenerated + Math.floor(Math.random() * 5000),
                        conversionRate: Math.min(1, (agent.performance.dealsClosed / Math.max(1, agent.performance.leadsGenerated)) * 100)
                    };
                    
                    await factory.updateAgentPerformance(agent.id, performanceUpdate);
                    console.log('Optimized agent:', agent.name);
                }
            } catch (error) {
                console.error('Error in sales optimization:', error);
            }
        }
        
        optimizeSales();
    " >> "$SALES_OPTIMIZATION_LOG" 2>&1 &
    
    local pid=$!
    echo $pid > "$SCRIPT_DIR/sales-optimization.pid"
    log_message "INFO" "Sales optimization started with PID: $pid"
}

# Function to start performance tracking
start_performance_tracking() {
    log_message "INFO" "Starting performance tracking..."
    
    cd "$SCRIPT_DIR"
    
    # Start the performance tracking system
    node -e "
        const ServiceGenerationOrchestrator = require('./service-generation-orchestrator');
        const orchestrator = new ServiceGenerationOrchestrator();
        
        async function trackPerformance() {
            try {
                await orchestrator.initialize();
                const status = orchestrator.getStatus();
                const services = orchestrator.getServices();
                const agents = orchestrator.getSalesAgents();
                
                console.log('Performance Summary:');
                console.log('- Services:', services.length);
                console.log('- Sales Agents:', agents.length);
                console.log('- System Status:', status.isRunning ? 'Running' : 'Stopped');
                
                // Generate performance report
                const report = {
                    timestamp: new Date(),
                    services: services.length,
                    agents: agents.length,
                    totalRevenue: agents.reduce((sum, agent) => sum + agent.performance.revenueGenerated, 0),
                    averageConversionRate: agents.reduce((sum, agent) => sum + agent.performance.conversionRate, 0) / Math.max(1, agents.length)
                };
                
                require('fs').writeFileSync('$DATA_DIR/performance-report.json', JSON.stringify(report, null, 2));
                console.log('Performance report generated');
            } catch (error) {
                console.error('Error in performance tracking:', error);
            }
        }
        
        trackPerformance();
    " >> "$PERFORMANCE_LOG" 2>&1 &
    
    local pid=$!
    echo $pid > "$SCRIPT_DIR/performance-tracking.pid"
    log_message "INFO" "Performance tracking started with PID: $pid"
}

# Function to stop all processes
stop_all_processes() {
    log_message "INFO" "Stopping all automation processes..."
    
    # Stop service generation
    if [ -f "$SCRIPT_DIR/service-generation.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/service-generation.pid")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log_message "INFO" "Stopped service generation (PID: $pid)"
        fi
        rm -f "$SCRIPT_DIR/service-generation.pid"
    fi
    
    # Stop advertisement generation
    if [ -f "$SCRIPT_DIR/advertisement-generation.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/advertisement-generation.pid")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log_message "INFO" "Stopped advertisement generation (PID: $pid)"
        fi
        rm -f "$SCRIPT_DIR/advertisement-generation.pid"
    fi
    
    # Stop sales optimization
    if [ -f "$SCRIPT_DIR/sales-optimization.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/sales-optimization.pid")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log_message "INFO" "Stopped sales optimization (PID: $pid)"
        fi
        rm -f "$SCRIPT_DIR/sales-optimization.pid"
    fi
    
    # Stop performance tracking
    if [ -f "$SCRIPT_DIR/performance-tracking.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/performance-tracking.pid")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log_message "INFO" "Stopped performance tracking (PID: $pid)"
        fi
        rm -f "$SCRIPT_DIR/performance-tracking.pid"
    fi
    
    log_message "INFO" "All processes stopped"
}

# Function to check process status
check_status() {
    log_message "INFO" "Checking process status..."
    
    local all_running=true
    
    # Check service generation
    if [ -f "$SCRIPT_DIR/service-generation.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/service-generation.pid")
        if kill -0 "$pid" 2>/dev/null; then
            log_message "INFO" "Service generation: Running (PID: $pid)"
        else
            log_message "WARNING" "Service generation: Not running"
            all_running=false
        fi
    else
        log_message "WARNING" "Service generation: No PID file found"
        all_running=false
    fi
    
    # Check advertisement generation
    if [ -f "$SCRIPT_DIR/advertisement-generation.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/advertisement-generation.pid")
        if kill -0 "$pid" 2>/dev/null; then
            log_message "INFO" "Advertisement generation: Running (PID: $pid)"
        else
            log_message "WARNING" "Advertisement generation: Not running"
            all_running=false
        fi
    else
        log_message "WARNING" "Advertisement generation: No PID file found"
        all_running=false
    fi
    
    # Check sales optimization
    if [ -f "$SCRIPT_DIR/sales-optimization.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/sales-optimization.pid")
        if kill -0 "$pid" 2>/dev/null; then
            log_message "INFO" "Sales optimization: Running (PID: $pid)"
        else
            log_message "WARNING" "Sales optimization: Not running"
            all_running=false
        fi
    else
        log_message "WARNING" "Sales optimization: No PID file found"
        all_running=false
    fi
    
    # Check performance tracking
    if [ -f "$SCRIPT_DIR/performance-tracking.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/performance-tracking.pid")
        if kill -0 "$pid" 2>/dev/null; then
            log_message "INFO" "Performance tracking: Running (PID: $pid)"
        else
            log_message "WARNING" "Performance tracking: Not running"
            all_running=false
        fi
    else
        log_message "WARNING" "Performance tracking: No PID file found"
        all_running=false
    fi
    
    if [ "$all_running" = true ]; then
        log_message "INFO" "All automation processes are running"
    else
        log_message "WARNING" "Some automation processes are not running"
    fi
}

# Function to show logs
show_logs() {
    local log_type="$1"
    
    case "$log_type" in
        "service")
            if [ -f "$SERVICE_GENERATION_LOG" ]; then
                tail -f "$SERVICE_GENERATION_LOG"
            else
                log_message "ERROR" "Service generation log not found"
            fi
            ;;
        "advertisement")
            if [ -f "$ADVERTISEMENT_LOG" ]; then
                tail -f "$ADVERTISEMENT_LOG"
            else
                log_message "ERROR" "Advertisement generation log not found"
            fi
            ;;
        "sales")
            if [ -f "$SALES_OPTIMIZATION_LOG" ]; then
                tail -f "$SALES_OPTIMIZATION_LOG"
            else
                log_message "ERROR" "Sales optimization log not found"
            fi
            ;;
        "performance")
            if [ -f "$PERFORMANCE_LOG" ]; then
                tail -f "$PERFORMANCE_LOG"
            else
                log_message "ERROR" "Performance tracking log not found"
            fi
            ;;
        "error")
            if [ -f "$ERROR_LOG" ]; then
                tail -f "$ERROR_LOG"
            else
                log_message "ERROR" "Error log not found"
            fi
            ;;
        *)
            log_message "ERROR" "Invalid log type. Use: service, advertisement, sales, performance, or error"
            ;;
    esac
}

# Function to clean up old logs
cleanup_logs() {
    log_message "INFO" "Cleaning up old logs..."
    
    # Keep only last 7 days of logs
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete
    
    # Compress logs older than 1 day
    find "$LOG_DIR" -name "*.log" -mtime +1 -exec gzip {} \;
    
    log_message "INFO" "Log cleanup completed"
}

# Function to show help
show_help() {
    echo "Service Generation Automation Cron Script"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  start       - Start all automation processes"
    echo "  stop        - Stop all automation processes"
    echo "  restart     - Restart all automation processes"
    echo "  status      - Check status of all processes"
    echo "  logs [type] - Show logs (service, advertisement, sales, performance, error)"
    echo "  cleanup     - Clean up old logs"
    echo "  install     - Install dependencies"
    echo "  help        - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 logs service"
    echo "  $0 cleanup"
}

# Main script logic
case "$1" in
    "start")
        log_message "INFO" "Starting service generation automation..."
        check_node
        check_npm
        install_dependencies
        start_service_generation
        start_advertisement_generation
        start_sales_optimization
        start_performance_tracking
        log_message "INFO" "All automation processes started"
        ;;
    "stop")
        stop_all_processes
        ;;
    "restart")
        log_message "INFO" "Restarting automation processes..."
        stop_all_processes
        sleep 2
        check_node
        check_npm
        start_service_generation
        start_advertisement_generation
        start_sales_optimization
        start_performance_tracking
        log_message "INFO" "All automation processes restarted"
        ;;
    "status")
        check_status
        ;;
    "logs")
        show_logs "$2"
        ;;
    "cleanup")
        cleanup_logs
        ;;
    "install")
        check_node
        check_npm
        install_dependencies
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        log_message "ERROR" "Invalid command. Use '$0 help' for usage information."
        exit 1
        ;;
esac 