#!/bin/bash

# 🚀 Exponential Automation System Demonstration
# This script demonstrates the exponential automation capabilities

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
ORCHESTRATOR_SCRIPT="$SCRIPT_DIR/exponential-autonomous-orchestrator.cjs"
DEMO_DURATION=300 # 5 minutes for demo

print_header() {
    echo -e "${CYAN}================================${NC}"
    echo -e "${CYAN}🚀 Exponential Automation Demo${NC}"
    echo -e "${CYAN}================================${NC}"
    echo ""
}

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Function to check prerequisites
check_prerequisites() {
    print_step "Checking prerequisites..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    print_success "Node.js found: $(node --version)"
    
    # Check if orchestrator script exists
    if [ ! -f "$ORCHESTRATOR_SCRIPT" ]; then
        print_error "Exponential orchestrator script not found: $ORCHESTRATOR_SCRIPT"
        exit 1
    fi
    
    print_success "Orchestrator script found"
    
    # Check if start script exists
    if [ ! -f "$SCRIPT_DIR/start-exponential-autonomous.sh" ]; then
        print_error "Start script not found: $SCRIPT_DIR/start-exponential-autonomous.sh"
        exit 1
    fi
    
    print_success "Start script found"
    
    echo ""
}

# Function to show current automation ecosystem
show_current_ecosystem() {
    print_step "Analyzing current automation ecosystem..."
    
    local total_agents=0
    local total_factories=0
    local total_workflows=0
    local total_scripts=0
    
    # Count existing components
    if [ -d "$SCRIPT_DIR/agents" ]; then
        total_agents=$(find "$SCRIPT_DIR/agents" -name "*.json" 2>/dev/null | wc -l)
    fi
    
    if [ -d "$SCRIPT_DIR/factories" ]; then
        total_factories=$(find "$SCRIPT_DIR/factories" -name "factory-config.json" 2>/dev/null | wc -l)
    fi
    
    if [ -d "$SCRIPT_DIR/../.github/workflows" ]; then
        total_workflows=$(find "$SCRIPT_DIR/../.github/workflows" -name "*.yml" 2>/dev/null | wc -l)
    fi
    
    total_scripts=$(find "$SCRIPT_DIR" -name "*.cjs" 2>/dev/null | wc -l)
    
    local total_components=$((total_agents + total_factories + total_workflows + total_scripts))
    
    echo "📊 Current Automation Ecosystem:"
    echo "   - Agents: $total_agents"
    echo "   - Factories: $total_factories"
    echo "   - Workflows: $total_workflows"
    echo "   - Scripts: $total_scripts"
    echo "   - Total Components: $total_components"
    echo ""
    
    return $total_components
}

# Function to start exponential automation
start_exponential_automation() {
    print_step "Starting exponential automation system..."
    
    # Start the orchestrator
    cd "$SCRIPT_DIR"
    ./start-exponential-autonomous.sh start
    
    if [ $? -eq 0 ]; then
        print_success "Exponential automation system started successfully!"
    else
        print_error "Failed to start exponential automation system"
        exit 1
    fi
    
    echo ""
}

# Function to monitor growth
monitor_growth() {
    print_step "Monitoring exponential growth for $((DEMO_DURATION / 60)) minutes..."
    
    local start_time=$(date +%s)
    local end_time=$((start_time + DEMO_DURATION))
    local check_interval=30 # Check every 30 seconds
    
    echo "🕐 Growth monitoring started at $(date)"
    echo "⏰ Will monitor until $(date -d @$end_time)"
    echo ""
    
    while [ $(date +%s) -lt $end_time ]; do
        local current_time=$(date +%s)
        local elapsed=$((current_time - start_time))
        local remaining=$((end_time - current_time))
        
        echo -e "${YELLOW}[$(date '+%H:%M:%S')]${NC} Monitoring... (${elapsed}s elapsed, ${remaining}s remaining)"
        
        # Check current component count
        local current_agents=0
        local current_factories=0
        local current_workflows=0
        local current_scripts=0
        
        if [ -d "$SCRIPT_DIR/agents" ]; then
            current_agents=$(find "$SCRIPT_DIR/agents" -name "*.json" 2>/dev/null | wc -l)
        fi
        
        if [ -d "$SCRIPT_DIR/factories" ]; then
            current_factories=$(find "$SCRIPT_DIR/factories" -name "factory-config.json" 2>/dev/null | wc -l)
        fi
        
        if [ -d "$SCRIPT_DIR/../.github/workflows" ]; then
            current_workflows=$(find "$SCRIPT_DIR/../.github/workflows" -name "*.yml" 2>/dev/null | wc -l)
        fi
        
        current_scripts=$(find "$SCRIPT_DIR" -name "*.cjs" 2>/dev/null | wc -l)
        
        local current_total=$((current_agents + current_factories + current_workflows + current_scripts))
        
        echo "   📊 Current total: $current_total components"
        
        # Check for new growth reports
        if [ -d "$SCRIPT_DIR/reports" ]; then
            local latest_report=$(find "$SCRIPT_DIR/reports" -name "exponential-growth-*.json" 2>/dev/null | tail -1)
            if [ -n "$latest_report" ]; then
                echo "   📈 Latest growth report: $(basename "$latest_report")"
            fi
        fi
        
        # Check orchestrator status
        if [ -f "$SCRIPT_DIR/exponential-orchestrator.pid" ]; then
            local pid=$(cat "$SCRIPT_DIR/exponential-orchestrator.pid")
            if ps -p "$pid" > /dev/null 2>&1; then
                echo "   ✅ Orchestrator running (PID: $pid)"
            else
                echo "   ❌ Orchestrator not running"
            fi
        else
            echo "   ⚠️ No orchestrator PID file found"
        fi
        
        echo ""
        
        # Wait for next check
        sleep $check_interval
    done
    
    print_success "Growth monitoring completed!"
    echo ""
}

# Function to show final results
show_final_results() {
    print_step "Showing final automation ecosystem results..."
    
    local final_agents=0
    local final_factories=0
    local final_workflows=0
    local final_scripts=0
    
    # Count final components
    if [ -d "$SCRIPT_DIR/agents" ]; then
        final_agents=$(find "$SCRIPT_DIR/agents" -name "*.json" 2>/dev/null | wc -l)
    fi
    
    if [ -d "$SCRIPT_DIR/factories" ]; then
        final_factories=$(find "$SCRIPT_DIR/factories" -name "factory-config.json" 2>/dev/null | wc -l)
    fi
    
    if [ -d "$SCRIPT_DIR/../.github/workflows" ]; then
        final_workflows=$(find "$SCRIPT_DIR/../.github/workflows" -name "*.yml" 2>/dev/null | wc -l)
    fi
    
    final_scripts=$(find "$SCRIPT_DIR" -name "*.cjs" 2>/dev/null | wc -l)
    
    local final_total=$((final_agents + final_factories + final_workflows + final_scripts))
    
    echo "🎯 Final Results:"
    echo "   - Agents: $final_agents"
    echo "   - Factories: $final_factories"
    echo "   - Workflows: $final_workflows"
    echo "   - Scripts: $final_scripts"
    echo "   - Total Components: $final_total"
    echo ""
    
    # Show growth reports
    if [ -d "$SCRIPT_DIR/reports" ]; then
        local reports=$(find "$SCRIPT_DIR/reports" -name "exponential-growth-*.json" 2>/dev/null | wc -l)
        if [ $reports -gt 0 ]; then
            echo "📊 Growth Reports Generated: $reports"
            echo "   Latest reports:"
            find "$SCRIPT_DIR/reports" -name "exponential-growth-*.json" 2>/dev/null | tail -3 | while read -r report; do
                echo "   - $(basename "$report")"
            done
        fi
    fi
    
    echo ""
}

# Function to demonstrate GitHub Actions integration
demo_github_actions() {
    print_step "Demonstrating GitHub Actions integration..."
    
    echo "🔗 GitHub Actions Workflows:"
    
    if [ -d "$SCRIPT_DIR/../.github/workflows" ]; then
        local workflows=$(find "$SCRIPT_DIR/../.github/workflows" -name "*.yml" 2>/dev/null)
        if [ -n "$workflows" ]; then
            echo "$workflows" | while read -r workflow; do
                local workflow_name=$(basename "$workflow")
                echo "   - $workflow_name"
            done
        else
            echo "   No workflows found"
        fi
    else
        echo "   .github/workflows directory not found"
    fi
    
    echo ""
    echo "💡 To trigger exponential growth manually:"
    echo "   gh workflow run 'exponential-agent-factory-proliferation.yml' \\"
    echo "     --field growth_multiplier=3 \\"
    echo "     --field target_exponential_factor=10 \\"
    echo "     --field enable_autonomous_creation=true"
    echo ""
}

# Function to show next steps
show_next_steps() {
    print_step "Next steps for exponential automation..."
    
    echo "🚀 To continue exponential growth:"
    echo "   1. Keep the orchestrator running: ./start-exponential-autonomous.sh status"
    echo "   2. Monitor growth: ./start-exponential-autonomous.sh logs"
    echo "   3. Check reports: ls -la reports/exponential-growth-*.json"
    echo ""
    
    echo "🔧 To customize the system:"
    echo "   1. Edit configuration: automation/exponential-config.json"
    echo "   2. Modify growth parameters"
    echo "   3. Add new factory types and specializations"
    echo ""
    
    echo "📊 To analyze performance:"
    echo "   1. View growth metrics in reports"
    echo "   2. Monitor resource usage"
    echo "   3. Analyze exponential factors"
    echo ""
    
    echo "🛑 To stop the system:"
    echo "   ./start-exponential-autonomous.sh stop"
    echo ""
}

# Function to cleanup demo
cleanup_demo() {
    print_step "Cleaning up demo..."
    
    echo "🧹 Demo cleanup completed!"
    echo "   The exponential automation system continues running in the background"
    echo "   Use './start-exponential-autonomous.sh stop' to stop it completely"
    echo ""
}

# Main demo function
run_demo() {
    print_header
    
    print_status "Welcome to the Exponential Automation System Demo!"
    print_status "This demo will show you how the system creates exponential growth in automation capabilities."
    echo ""
    
    # Check prerequisites
    check_prerequisites
    
    # Show current ecosystem
    show_current_ecosystem
    
    # Start exponential automation
    start_exponential_automation
    
    # Monitor growth
    monitor_growth
    
    # Show final results
    show_final_results
    
    # Demonstrate GitHub Actions
    demo_github_actions
    
    # Show next steps
    show_next_steps
    
    # Cleanup
    cleanup_demo
    
    print_success "Demo completed successfully! 🎉"
    echo ""
    print_status "The exponential automation system is now running and will continue to grow autonomously."
    print_status "Check the README for more information and advanced usage."
}

# Handle command line arguments
case "${1:-demo}" in
    demo)
        run_demo
        ;;
    status)
        cd "$SCRIPT_DIR"
        ./start-exponential-autonomous.sh status
        ;;
    start)
        cd "$SCRIPT_DIR"
        ./start-exponential-autonomous.sh start
        ;;
    stop)
        cd "$SCRIPT_DIR"
        ./start-exponential-autonomous.sh stop
        ;;
    logs)
        cd "$SCRIPT_DIR"
        ./start-exponential-autonomous.sh logs
        ;;
    help|--help|-h)
        echo "Usage: $0 {demo|status|start|stop|logs|help}"
        echo ""
        echo "Commands:"
        echo "  demo     Run the full exponential automation demo (default)"
        echo "  status   Check current orchestrator status"
        echo "  start    Start the exponential automation system"
        echo "  stop     Stop the exponential automation system"
        echo "  logs     Show real-time logs"
        echo "  help     Show this help message"
        echo ""
        echo "Examples:"
        echo "  $0              # Run full demo"
        echo "  $0 status       # Check status"
        echo "  $0 logs         # View logs"
        ;;
    *)
        print_error "Unknown command: $1"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac

exit 0
