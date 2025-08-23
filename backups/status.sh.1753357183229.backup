
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
      #!/bin/bash

# Zion App - Continuous Improvement System Status Script
# This script checks the health and status of the continuous improvement system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if process is running
check_process() {
    local process_name=$1
    if pgrep -f "$process_name" > /dev/null; then
        return 0
    else
        return 1
    fi
}

# Function to get process info
get_process_info() {
    local process_name=$1
    if check_process "$process_name"; then
        local pid=$(pgrep -f "$process_name" | head -1)
        local uptime=$(ps -o etime= -p "$pid" 2>/dev/null || echo "unknown")
        local memory=$(ps -o rss= -p "$pid" 2>/dev/null || echo "unknown")
        echo "PID: $pid, Uptime: $uptime, Memory: ${memory}KB"
    else
        echo "Not running"
    fi
}

# Function to check file exists and is readable
check_file() {
    local file=$1
    if [ -f "$file" ] && [ -r "$file" ]; then
        return 0
    else
        return 1
    fi
}

# Function to get file size
get_file_size() {
    local file=$1
    if check_file "$file"; then
        du -h "$file" | cut -f1
    else
        echo "N/A"
    fi
}

# Function to get last modified time
get_last_modified() {
    local file=$1
    if check_file "$file"; then
        stat -c %y "$file" 2>/dev/null || stat -f %Sm "$file" 2>/dev/null || echo "unknown"
    else
        echo "N/A"
    fi
}

# Function to check system health
check_system_health() {
    print_status "Checking system health..."
    
    echo "System Information:"
    echo "  OS: $(uname -s) $(uname -r)"
    echo "  Node.js: $(node --version 2>/dev/null || echo 'Not installed')"
    echo "  npm: $(npm --version 2>/dev/null || echo 'Not installed')"
    echo "  Git: $(git --version 2>/dev/null || echo 'Not installed')"
    echo ""
}

# Function to check process status
check_process_status() {
    print_status "Checking process status..."
    
    echo "Process Status:"
    echo "  Main System: $(check_process "start.js" && print_success "Running" || print_error "Not running")"
    echo "  Monitor: $(check_process "monitor.js" && print_success "Running" || print_error "Not running")"
    echo "  Improver: $(check_process "improve.js" && print_success "Running" || print_error "Not running")"
    echo ""
    
    if check_process "start.js"; then
        echo "Main System Details:"
        echo "  $(get_process_info "start.js")"
        echo ""
    fi
}

# Function to check log files
check_log_files() {
    print_status "Checking log files..."
    
    echo "Log Files:"
    
    local log_files=(
        "logs/system-combined.log"
        "logs/system-error.log"
        "logs/monitor-combined.log"
        "logs/improve-combined.log"
        "logs/cursor-combined.log"
        "logs/health-reports.json"
        "logs/improvement-history.json"
    )
    
    for log_file in "${log_files[@]}"; do
        if check_file "$log_file"; then
            local size=$(get_file_size "$log_file")
            local modified=$(get_last_modified "$log_file")
            echo "  $log_file: $size (modified: $modified)"
        else
            echo "  $log_file: Not found"
        fi
    done
    echo ""
}

# Function to check recent logs
check_recent_logs() {
    print_status "Checking recent logs..."
    
    echo "Recent System Logs (last 10 lines):"
    if check_file "logs/system-combined.log"; then
        tail -10 "logs/system-combined.log" | while IFS= read -r line; do
            echo "  $line"
        done
    else
        echo "  No system logs found"
    fi
    echo ""
    
    echo "Recent Error Logs (last 5 lines):"
    if check_file "logs/system-error.log"; then
        tail -5 "logs/system-error.log" | while IFS= read -r line; do
            echo "  $line"
        done
    else
        echo "  No error logs found"
    fi
    echo ""
}

# Function to check environment configuration
check_environment() {
    print_status "Checking environment configuration..."
    
    echo "Environment Configuration:"
    
    if [ -f ".env" ]; then
        echo "  .env file: $(print_success "Found")"
        
        # Check for required variables
        local required_vars=("CURSOR_API_KEY" "CURSOR_WORKSPACE_ID")
        for var in "${required_vars[@]}"; do
            if grep -q "^${var}=" .env; then
                local value=$(grep "^${var}=" .env | cut -d'=' -f2)
                if [ "$value" = "your_cursor_api_key_here" ] || [ "$value" = "your_workspace_id_here" ]; then
                    echo "  $var: $(print_warning "Not configured")"
                else
                    echo "  $var: $(print_success "Configured")"
                fi
            else
                echo "  $var: $(print_error "Missing")"
            fi
        done
    else
        echo "  .env file: $(print_error "Not found")"
    fi
    echo ""
}

# Function to check systemd service status (Linux)
check_systemd_status() {
    if [ "$(uname)" = "Linux" ] && command -v systemctl >/dev/null 2>&1; then
        print_status "Checking systemd service status..."
        
        echo "Systemd Service Status:"
        if systemctl is-active --quiet zion-continuous-improvement; then
            echo "  Status: $(print_success "Active")"
            echo "  Enabled: $(systemctl is-enabled zion-continuous-improvement 2>/dev/null && print_success "Yes" || print_warning "No")"
        else
            echo "  Status: $(print_error "Inactive")"
        fi
        echo ""
    fi
}

# Function to check launchd service status (macOS)
check_launchd_status() {
    if [ "$(uname)" = "Darwin" ]; then
        print_status "Checking launchd service status..."
        
        echo "Launchd Service Status:"
        local plist_file="$HOME/Library/LaunchAgents/com.zion.continuous-improvement.plist"
        if [ -f "$plist_file" ]; then
            echo "  Plist file: $(print_success "Found")"
            if launchctl list | grep -q "com.zion.continuous-improvement"; then
                echo "  Status: $(print_success "Loaded")"
            else
                echo "  Status: $(print_warning "Not loaded")"
            fi
        else
            echo "  Plist file: $(print_error "Not found")"
        fi
        echo ""
    fi
}

# Function to check cron jobs
check_cron_jobs() {
    print_status "Checking cron jobs..."
    
    echo "Cron Jobs:"
    if crontab -l 2>/dev/null | grep -q "monitor.js"; then
        echo "  Monitor job: $(print_success "Configured")"
        crontab -l 2>/dev/null | grep "monitor.js" | while IFS= read -r line; do
            echo "    $line"
        done
    else
        echo "  Monitor job: $(print_error "Not configured")"
    fi
    echo ""
}

# Function to check disk usage
check_disk_usage() {
    print_status "Checking disk usage..."
    
    echo "Disk Usage:"
    local current_dir=$(pwd)
    local usage=$(du -sh . 2>/dev/null | cut -f1)
    echo "  Current directory: $usage"
    
    if [ -d "logs" ]; then
        local logs_usage=$(du -sh logs 2>/dev/null | cut -f1)
        echo "  Logs directory: $logs_usage"
    fi
    
    if [ -d "backups" ]; then
        local backups_usage=$(du -sh backups 2>/dev/null | cut -f1)
        echo "  Backups directory: $backups_usage"
    fi
    echo ""
}

# Function to check network connectivity
check_network() {
    print_status "Checking network connectivity..."
    
    echo "Network Connectivity:"
    
    # Check Cursor API
    if curl -s --connect-timeout 5 https://api.cursor.sh >/dev/null 2>&1; then
        echo "  Cursor API: $(print_success "Accessible")"
    else
        echo "  Cursor API: $(print_error "Not accessible")"
    fi
    
    # Check GitHub (for git operations)
    if curl -s --connect-timeout 5 https://github.com >/dev/null 2>&1; then
        echo "  GitHub: $(print_success "Accessible")"
    else
        echo "  GitHub: $(print_error "Not accessible")"
    fi
    
    # Check npm registry
    if curl -s --connect-timeout 5 https://registry.npmjs.org >/dev/null 2>&1; then
        echo "  npm Registry: $(print_success "Accessible")"
    else
        echo "  npm Registry: $(print_error "Not accessible")"
    fi
    echo ""
}

# Function to check recent improvements
check_recent_improvements() {
    print_status "Checking recent improvements..."
    
    echo "Recent Improvements:"
    if check_file "logs/improvement-history.json"; then
        local recent_count=$(tail -20 "logs/improvement-history.json" | grep -c '"timestamp"' || echo "0")
        echo "  Recent improvements: $recent_count"
        
        # Show last 3 improvements
        echo "  Last 3 improvements:"
        tail -20 "logs/improvement-history.json" | grep -A 5 '"timestamp"' | tail -15 | while IFS= read -r line; do
            if echo "$line" | grep -q '"description"'; then
                local desc=$(echo "$line" | sed 's/.*"description": "\([^"]*\)".*/\1/')
                echo "    - $desc"
            fi
        done
    else
        echo "  No improvement history found"
    fi
    echo ""
}

# Function to check health reports
check_health_reports() {
    print_status "Checking health reports..."
    
    echo "Health Reports:"
    if check_file "logs/health-reports.json"; then
        local report_count=$(grep -c '"timestamp"' "logs/health-reports.json" || echo "0")
        echo "  Total reports: $report_count"
        
        # Get latest report
        local latest_report=$(tail -50 "logs/health-reports.json" | grep -A 20 '"timestamp"' | tail -20)
        if [ -n "$latest_report" ]; then
            echo "  Latest report:"
            echo "$latest_report" | while IFS= read -r line; do
                if echo "$line" | grep -q '"isRunning"'; then
                    local running=$(echo "$line" | grep -o 'true\|false')
                    echo "    System running: $running"
                elif echo "$line" | grep -q '"improvementsApplied"'; then
                    local applied=$(echo "$line" | grep -o '[0-9]*')
                    echo "    Improvements applied: $applied"
                elif echo "$line" | grep -q '"improvementsFailed"'; then
                    local failed=$(echo "$line" | grep -o '[0-9]*')
                    echo "    Improvements failed: $failed"
                fi
            done
        fi
    else
        echo "  No health reports found"
    fi
    echo ""
}

# Function to provide recommendations
provide_recommendations() {
    print_status "Providing recommendations..."
    
    echo "Recommendations:"
    
    # Check if system is running
    if ! check_process "start.js"; then
        echo "  $(print_warning "Start the system: npm start")"
    fi
    
    # Check environment configuration
    if [ -f ".env" ] && grep -q "your_cursor_api_key_here" .env; then
        echo "  $(print_warning "Configure API keys in .env file")"
    fi
    
    # Check log file sizes
    if check_file "logs/system-combined.log"; then
        local log_size=$(get_file_size "logs/system-combined.log" | sed 's/[^0-9]//g')
        if [ "$log_size" -gt 100 ]; then
            echo "  $(print_warning "Consider rotating log files")"
        fi
    fi
    
    # Check disk usage
    local usage=$(du -sh . 2>/dev/null | cut -f1 | sed 's/[^0-9]//g')
    if [ "$usage" -gt 1000 ]; then
        echo "  $(print_warning "Consider cleaning up old backups and logs")"
    fi
    
    echo ""
}

# Function to display summary
display_summary() {
    echo "📊 System Status Summary"
    echo "========================"
    echo ""
    
    # Count running processes
    local running_count=0
    if check_process "start.js"; then ((running_count++)); fi
    if check_process "monitor.js"; then ((running_count++)); fi
    if check_process "improve.js"; then ((running_count++)); fi
    
    echo "Overall Status:"
    if [ $running_count -eq 3 ]; then
        echo "  $(print_success "All systems operational")"
    elif [ $running_count -gt 0 ]; then
        echo "  $(print_warning "Partially operational ($running_count/3 processes running)")"
    else
        echo "  $(print_error "System not running")"
    fi
    
    echo ""
    echo "Quick Actions:"
    echo "  Start system: npm start"
    echo "  Stop system: npm stop"
    echo "  View logs: tail -f logs/system-combined.log"
    echo "  Check config: cat .env"
    echo ""
}

# Main function
main() {
    echo "🔍 Zion App - Continuous Improvement System Status"
    echo "=================================================="
    echo ""
    
    check_system_health
    check_process_status
    check_environment
    check_systemd_status
    check_launchd_status
    check_cron_jobs
    check_log_files
    check_disk_usage
    check_network
    check_recent_improvements
    check_health_reports
    check_recent_logs
    provide_recommendations
    display_summary
}

# Run main function
main "$@"
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
