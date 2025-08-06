#!/bin/bash

# Monetization Automation Cron Jobs
# This script runs various monetization optimization tasks continuously

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$AUTOMATION_DIR/monetization-logs"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Function to log messages
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/monetization-cron.log"
}

# Function to run monetization orchestrator
run_monetization_orchestrator() {
    log_message "Starting monetization orchestrator..."
    cd "$AUTOMATION_DIR"
    node -e "
        const MonetizationOrchestrator = require('./monetization-orchestrator');
        const orchestrator = new MonetizationOrchestrator();
        orchestrator.initialize().then(() => {
            console.log('Monetization orchestrator initialized');
        }).catch(err => {
            console.error('Error initializing orchestrator:', err);
        });
    " >> "$LOG_DIR/orchestrator-$TIMESTAMP.log" 2>&1
}

# Function to run revenue optimization
run_revenue_optimization() {
    log_message "Running revenue optimization..."
    cd "$AUTOMATION_DIR"
    node -e "
        const factory = require('./monetization-autonomous-factory');
        const factoryInstance = new factory();
        factoryInstance.createRevenueOptimizationAgent().then(agent => {
            console.log('Revenue optimization agent created:', agent.agentId);
        }).catch(err => {
            console.error('Error creating revenue agent:', err);
        });
    " >> "$LOG_DIR/revenue-optimization-$TIMESTAMP.log" 2>&1
}

# Function to run ad revenue optimization
run_ad_revenue_optimization() {
    log_message "Running ad revenue optimization..."
    cd "$AUTOMATION_DIR"
    node -e "
        const factory = require('./monetization-autonomous-factory');
        const factoryInstance = new factory();
        factoryInstance.createAdRevenueAgent().then(agent => {
            console.log('Ad revenue agent created:', agent.agentId);
        }).catch(err => {
            console.error('Error creating ad revenue agent:', err);
        });
    " >> "$LOG_DIR/ad-revenue-optimization-$TIMESTAMP.log" 2>&1
}

# Function to run subscription optimization
run_subscription_optimization() {
    log_message "Running subscription optimization..."
    cd "$AUTOMATION_DIR"
    node -e "
        const factory = require('./monetization-autonomous-factory');
        const factoryInstance = new factory();
        factoryInstance.createSubscriptionAgent().then(agent => {
            console.log('Subscription agent created:', agent.agentId);
        }).catch(err => {
            console.error('Error creating subscription agent:', err);
        });
    " >> "$LOG_DIR/subscription-optimization-$TIMESTAMP.log" 2>&1
}

# Function to run affiliate optimization
run_affiliate_optimization() {
    log_message "Running affiliate optimization..."
    cd "$AUTOMATION_DIR"
    node -e "
        const factory = require('./monetization-autonomous-factory');
        const factoryInstance = new factory();
        factoryInstance.createAffiliateAgent().then(agent => {
            console.log('Affiliate agent created:', agent.agentId);
        }).catch(err => {
            console.error('Error creating affiliate agent:', err);
        });
    " >> "$LOG_DIR/affiliate-optimization-$TIMESTAMP.log" 2>&1
}

# Function to run ecommerce optimization
run_ecommerce_optimization() {
    log_message "Running ecommerce optimization..."
    cd "$AUTOMATION_DIR"
    node -e "
        const factory = require('./monetization-autonomous-factory');
        const factoryInstance = new factory();
        factoryInstance.createEcommerceAgent().then(agent => {
            console.log('Ecommerce agent created:', agent.agentId);
        }).catch(err => {
            console.error('Error creating ecommerce agent:', err);
        });
    " >> "$LOG_DIR/ecommerce-optimization-$TIMESTAMP.log" 2>&1
}

# Function to run freemium optimization
run_freemium_optimization() {
    log_message "Running freemium optimization..."
    cd "$AUTOMATION_DIR"
    node -e "
        const factory = require('./monetization-autonomous-factory');
        const factoryInstance = new factory();
        factoryInstance.createFreemiumAgent().then(agent => {
            console.log('Freemium agent created:', agent.agentId);
        }).catch(err => {
            console.error('Error creating freemium agent:', err);
        });
    " >> "$LOG_DIR/freemium-optimization-$TIMESTAMP.log" 2>&1
}

# Function to generate performance reports
generate_performance_reports() {
    log_message "Generating performance reports..."
    cd "$AUTOMATION_DIR"
    node -e "
        const factory = require('./monetization-autonomous-factory');
        const factoryInstance = new factory();
        const report = factoryInstance.generateReport();
        console.log('Performance report generated:', report);
    " >> "$LOG_DIR/performance-reports-$TIMESTAMP.log" 2>&1
}

# Function to clean old logs
cleanup_old_logs() {
    log_message "Cleaning up old logs..."
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete
    find "$LOG_DIR" -name "*.json" -mtime +30 -delete
}

# Function to check system health
check_system_health() {
    log_message "Checking system health..."
    
    # Check disk space
    DISK_USAGE=$(df -h "$AUTOMATION_DIR" | tail -1 | awk '{print $5}' | sed 's/%//')
    if [ "$DISK_USAGE" -gt 80 ]; then
        log_message "WARNING: Disk usage is high: ${DISK_USAGE}%"
    fi
    
    # Check memory usage
    MEMORY_USAGE=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
    if [ "$MEMORY_USAGE" -gt 80 ]; then
        log_message "WARNING: Memory usage is high: ${MEMORY_USAGE}%"
    fi
    
    # Check if Node.js processes are running
    NODE_PROCESSES=$(pgrep -c node || echo "0")
    log_message "Active Node.js processes: $NODE_PROCESSES"
}

# Main execution based on argument
case "$1" in
    "orchestrator")
        run_monetization_orchestrator
        ;;
    "revenue")
        run_revenue_optimization
        ;;
    "ad-revenue")
        run_ad_revenue_optimization
        ;;
    "subscription")
        run_subscription_optimization
        ;;
    "affiliate")
        run_affiliate_optimization
        ;;
    "ecommerce")
        run_ecommerce_optimization
        ;;
    "freemium")
        run_freemium_optimization
        ;;
    "reports")
        generate_performance_reports
        ;;
    "cleanup")
        cleanup_old_logs
        ;;
    "health")
        check_system_health
        ;;
    "all")
        log_message "Running all monetization optimizations..."
        run_monetization_orchestrator
        sleep 30
        run_revenue_optimization
        sleep 10
        run_ad_revenue_optimization
        sleep 10
        run_subscription_optimization
        sleep 10
        run_affiliate_optimization
        sleep 10
        run_ecommerce_optimization
        sleep 10
        run_freemium_optimization
        sleep 10
        generate_performance_reports
        cleanup_old_logs
        check_system_health
        log_message "All monetization optimizations completed"
        ;;
    *)
        echo "Usage: $0 {orchestrator|revenue|ad-revenue|subscription|affiliate|ecommerce|freemium|reports|cleanup|health|all}"
        echo ""
        echo "Available commands:"
        echo "  orchestrator  - Run the main monetization orchestrator"
        echo "  revenue       - Run revenue optimization"
        echo "  ad-revenue    - Run ad revenue optimization"
        echo "  subscription  - Run subscription optimization"
        echo "  affiliate     - Run affiliate optimization"
        echo "  ecommerce     - Run ecommerce optimization"
        echo "  freemium      - Run freemium optimization"
        echo "  reports       - Generate performance reports"
        echo "  cleanup       - Clean up old logs"
        echo "  health        - Check system health"
        echo "  all           - Run all optimizations"
        exit 1
        ;;
esac

log_message "Monetization automation cron job completed" 