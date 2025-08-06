#!/bin/bash

# Comprehensive Agent Monitoring Script
# This script monitors all agents and their intelligence capabilities

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
AUTOMATION_DIR="$SCRIPT_DIR"
AGENTS_DIR="$AUTOMATION_DIR/agents"
REPORTS_DIR="$AUTOMATION_DIR/reports"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_header() {
    echo -e "${CYAN}================================${NC}"
    echo -e "${CYAN}  Comprehensive Agent Monitor${NC}"
    echo -e "${CYAN}================================${NC}"
}

# Function to check if Node.js is available
check_nodejs() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    print_status "Node.js version: $NODE_VERSION"
}

# Function to discover all agents
discover_agents() {
    print_status "Discovering all agents..."
    
    local agents=()
    if [ -d "$AGENTS_DIR" ]; then
        agents=($(find "$AGENTS_DIR" -name "*-agent.js" -type f | sed 's/.*\///' | sed 's/-agent.js//'))
    fi
    
    print_success "Found ${#agents[@]} agents"
    return 0
}

# Function to check agent intelligence capabilities
check_agent_intelligence() {
    local agent_file="$1"
    local intelligence_score=0
    local capabilities=()
    
    if [ -f "$agent_file" ]; then
        local content=$(cat "$agent_file")
        
        # Check for intelligence indicators
        if echo "$content" | grep -q "intelligence"; then
            intelligence_score=$((intelligence_score + 20))
            capabilities+=("intelligence")
        fi
        
        if echo "$content" | grep -q "learning"; then
            intelligence_score=$((intelligence_score + 20))
            capabilities+=("learning")
        fi
        
        if echo "$content" | grep -q "diversification"; then
            intelligence_score=$((intelligence_score + 15))
            capabilities+=("diversification")
        fi
        
        if echo "$content" | grep -q "optimization"; then
            intelligence_score=$((intelligence_score + 15))
            capabilities+=("optimization")
        fi
        
        if echo "$content" | grep -q "analysis"; then
            intelligence_score=$((intelligence_score + 10))
            capabilities+=("analysis")
        fi
        
        if echo "$content" | grep -q "prediction"; then
            intelligence_score=$((intelligence_score + 10))
            capabilities+=("prediction")
        fi
        
        if echo "$content" | grep -q "adaptation"; then
            intelligence_score=$((intelligence_score + 10))
            capabilities+=("adaptation")
        fi
    fi
    
    echo "$intelligence_score:${capabilities[*]}"
}

# Function to analyze agent capabilities
analyze_agent_capabilities() {
    print_status "Analyzing agent capabilities..."
    
    local agents=($(find "$AGENTS_DIR" -name "*-agent.js" -type f))
    local total_agents=${#agents[@]}
    local intelligent_agents=0
    local high_intelligence_agents=0
    local medium_intelligence_agents=0
    local low_intelligence_agents=0
    
    echo -e "${BLUE}Agent Intelligence Analysis:${NC}"
    echo "=================================="
    
    for agent_file in "${agents[@]}"; do
        local agent_name=$(basename "$agent_file" -agent.js)
        local intelligence_data=$(check_agent_intelligence "$agent_file")
        local score=$(echo "$intelligence_data" | cut -d: -f1)
        local capabilities=$(echo "$intelligence_data" | cut -d: -f2)
        
        if [ "$score" -gt 0 ]; then
            intelligent_agents=$((intelligent_agents + 1))
        fi
        
        if [ "$score" -ge 70 ]; then
            high_intelligence_agents=$((high_intelligence_agents + 1))
            echo -e "${GREEN}✓ $agent_name (High Intelligence: ${score}%)${NC}"
        elif [ "$score" -ge 40 ]; then
            medium_intelligence_agents=$((medium_intelligence_agents + 1))
            echo -e "${YELLOW}○ $agent_name (Medium Intelligence: ${score}%)${NC}"
        else
            low_intelligence_agents=$((low_intelligence_agents + 1))
            echo -e "${RED}✗ $agent_name (Low Intelligence: ${score}%)${NC}"
        fi
        
        if [ -n "$capabilities" ]; then
            echo "  Capabilities: $capabilities"
        fi
    done
    
    echo ""
    echo -e "${BLUE}Intelligence Summary:${NC}"
    echo "====================="
    echo "Total Agents: $total_agents"
    echo "Intelligent Agents: $intelligent_agents"
    echo "High Intelligence: $high_intelligence_agents"
    echo "Medium Intelligence: $medium_intelligence_agents"
    echo "Low Intelligence: $low_intelligence_agents"
    
    # Calculate average intelligence
    local total_score=0
    local agent_count=0
    
    for agent_file in "${agents[@]}"; do
        local intelligence_data=$(check_agent_intelligence "$agent_file")
        local score=$(echo "$intelligence_data" | cut -d: -f1)
        total_score=$((total_score + score))
        agent_count=$((agent_count + 1))
    done
    
    if [ $agent_count -gt 0 ]; then
        local average_intelligence=$((total_score / agent_count))
        echo "Average Intelligence: ${average_intelligence}%"
    fi
}

# Function to check running processes
check_running_processes() {
    print_status "Checking running processes..."
    
    local running_processes=$(ps aux | grep -E "(node|automation|orchestrator)" | grep -v grep | wc -l)
    local advanced_processes=$(ps aux | grep -E "(advanced-intelligent|launch-advanced)" | grep -v grep | wc -l)
    
    echo -e "${BLUE}Process Status:${NC}"
    echo "==============="
    echo "Total Automation Processes: $running_processes"
    echo "Advanced Intelligent Processes: $advanced_processes"
    
    if [ $advanced_processes -gt 0 ]; then
        print_success "Advanced intelligent agent system is running"
    else
        print_warning "Advanced intelligent agent system is not running"
    fi
}

# Function to check system resources
check_system_resources() {
    print_status "Checking system resources..."
    
    local cpu_usage=$(top -l 1 | grep "CPU usage" | awk '{print $3}' | sed 's/%//')
    local memory_info=$(vm_stat | grep "Pages free" | awk '{print $3}' | sed 's/\.//')
    local disk_usage=$(df -h . | tail -1 | awk '{print $5}' | sed 's/%//')
    
    echo -e "${BLUE}System Resources:${NC}"
    echo "=================="
    echo "CPU Usage: ${cpu_usage}%"
    echo "Memory Free: ${memory_info} pages"
    echo "Disk Usage: ${disk_usage}%"
    
    # Check if resources are healthy
    if [ "$cpu_usage" -lt 80 ]; then
        print_success "CPU usage is healthy"
    else
        print_warning "CPU usage is high"
    fi
    
    if [ "$disk_usage" -lt 80 ]; then
        print_success "Disk usage is healthy"
    else
        print_warning "Disk usage is high"
    fi
}

# Function to check recent activity
check_recent_activity() {
    print_status "Checking recent activity..."
    
    local log_files=$(find "$AUTOMATION_DIR/logs" -name "*.log" -type f 2>/dev/null | wc -l)
    local recent_logs=$(find "$AUTOMATION_DIR/logs" -name "*.log" -type f -mtime -1 2>/dev/null | wc -l)
    local report_files=$(find "$REPORTS_DIR" -name "*.json" -type f 2>/dev/null | wc -l)
    local recent_reports=$(find "$REPORTS_DIR" -name "*.json" -type f -mtime -1 2>/dev/null | wc -l)
    
    echo -e "${BLUE}Recent Activity:${NC}"
    echo "================="
    echo "Total Log Files: $log_files"
    echo "Recent Log Files (24h): $recent_logs"
    echo "Total Report Files: $report_files"
    echo "Recent Report Files (24h): $recent_reports"
    
    if [ $recent_logs -gt 0 ]; then
        print_success "Recent activity detected"
    else
        print_warning "No recent activity detected"
    fi
}

# Function to check agent health
check_agent_health() {
    print_status "Checking agent health..."
    
    local agents=($(find "$AGENTS_DIR" -name "*-agent.js" -type f))
    local healthy_agents=0
    local problematic_agents=0
    
    echo -e "${BLUE}Agent Health Check:${NC}"
    echo "===================="
    
    for agent_file in "${agents[@]}"; do
        local agent_name=$(basename "$agent_file" -agent.js)
        
        # Check if agent file is readable and has basic structure
        if [ -r "$agent_file" ]; then
            local content=$(cat "$agent_file")
            
            if echo "$content" | grep -q "class.*Agent" && echo "$content" | grep -q "start"; then
                echo -e "${GREEN}✓ $agent_name (Healthy)${NC}"
                healthy_agents=$((healthy_agents + 1))
            else
                echo -e "${YELLOW}○ $agent_name (Basic Structure)${NC}"
                problematic_agents=$((problematic_agents + 1))
            fi
        else
            echo -e "${RED}✗ $agent_name (Unreadable)${NC}"
            problematic_agents=$((problematic_agents + 1))
        fi
    done
    
    echo ""
    echo "Healthy Agents: $healthy_agents"
    echo "Problematic Agents: $problematic_agents"
}

# Function to generate recommendations
generate_recommendations() {
    print_status "Generating recommendations..."
    
    local agents=($(find "$AGENTS_DIR" -name "*-agent.js" -type f))
    local low_intelligence_count=0
    local recommendations=()
    
    for agent_file in "${agents[@]}"; do
        local intelligence_data=$(check_agent_intelligence "$agent_file")
        local score=$(echo "$intelligence_data" | cut -d: -f1)
        
        if [ "$score" -lt 40 ]; then
            low_intelligence_count=$((low_intelligence_count + 1))
            local agent_name=$(basename "$agent_file" -agent.js)
            recommendations+=("Enhance intelligence capabilities for $agent_name")
        fi
    done
    
    echo -e "${BLUE}Recommendations:${NC}"
    echo "================"
    
    if [ ${#recommendations[@]} -eq 0 ]; then
        print_success "All agents have good intelligence capabilities"
    else
        for recommendation in "${recommendations[@]}"; do
            echo "• $recommendation"
        done
    fi
    
    # General recommendations
    echo "• Consider implementing advanced learning algorithms"
    echo "• Add more diversification strategies"
    echo "• Enhance prediction and analysis capabilities"
    echo "• Implement adaptive behavior mechanisms"
}

# Function to show detailed agent information
show_detailed_agent_info() {
    print_status "Showing detailed agent information..."
    
    local agents=($(find "$AGENTS_DIR" -name "*-agent.js" -type f))
    
    echo -e "${BLUE}Detailed Agent Information:${NC}"
    echo "============================="
    
    for agent_file in "${agents[@]}"; do
        local agent_name=$(basename "$agent_file" -agent.js)
        local file_size=$(ls -lh "$agent_file" | awk '{print $5}')
        local last_modified=$(stat -f "%Sm" "$agent_file")
        local intelligence_data=$(check_agent_intelligence "$agent_file")
        local score=$(echo "$intelligence_data" | cut -d: -f1)
        local capabilities=$(echo "$intelligence_data" | cut -d: -f2)
        
        echo ""
        echo -e "${CYAN}$agent_name${NC}"
        echo "  File: $agent_file"
        echo "  Size: $file_size"
        echo "  Modified: $last_modified"
        echo "  Intelligence Score: ${score}%"
        echo "  Capabilities: $capabilities"
    done
}

# Main execution
main() {
    print_header
    
    # Check prerequisites
    print_status "Checking prerequisites..."
    check_nodejs
    
    # Discover agents
    discover_agents
    
    echo ""
    
    # Run comprehensive analysis
    analyze_agent_capabilities
    
    echo ""
    
    # Check running processes
    check_running_processes
    
    echo ""
    
    # Check system resources
    check_system_resources
    
    echo ""
    
    # Check recent activity
    check_recent_activity
    
    echo ""
    
    # Check agent health
    check_agent_health
    
    echo ""
    
    # Generate recommendations
    generate_recommendations
    
    echo ""
    
    # Show detailed information if requested
    if [ "$1" = "--detailed" ]; then
        show_detailed_agent_info
    fi
    
    print_success "Comprehensive agent monitoring completed!"
}

# Run main function
main "$@" 