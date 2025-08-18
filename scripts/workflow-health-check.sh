#!/bin/bash

# Workflow Health Check Script
# This script checks the health of all GitHub Actions workflows

set -e

echo "🏥 Checking workflow health..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if a file is valid YAML
check_yaml() {
    local file="$1"
    if python3 -c "import yaml; yaml.safe_load(open('$file', 'r'))" 2>/dev/null; then
        return 0
    else
        return 1
    fi
}

# Function to check workflow structure
check_workflow_structure() {
    local file="$1"
    local issues=()
    
    # Check for required sections (allowing for indentation)
    # Look for workflow name at the top level (either at start or after ---)
    if ! grep -q "^[[:space:]]*name:" "$file"; then
        issues+=("Missing 'name:' section")
    fi
    
    if ! grep -q "^[[:space:]]*on:" "$file"; then
        issues+=("Missing 'on:' section")
    fi
    
    if ! grep -q "^[[:space:]]*jobs:" "$file"; then
        issues+=("Missing 'jobs:' section")
    fi
    
    # Check for runs-on in jobs (allowing for indentation)
    if ! grep -A 10 "^[[:space:]]*jobs:" "$file" | grep -q "runs-on:"; then
        issues+=("Missing 'runs-on:' specification")
    fi
    
    # Check for permissions (allowing for indentation)
    if ! grep -q "^[[:space:]]*permissions:" "$file"; then
        issues+=("Missing 'permissions:' section")
    fi
    
    echo "${issues[@]}"
}

# Function to check if workflow is enabled
check_workflow_enabled() {
    local file="$1"
    local workflow_name=$(basename "$file" .yml | sed 's/.yaml$//')
    
    # Check if workflow has proper triggers
    if grep -q "workflow_dispatch:" "$file" || grep -q "schedule:" "$file" || grep -q "push:" "$file" || grep -q "pull_request:" "$file"; then
        return 0
    else
        return 1
    fi
}

# Main health check
echo "📁 Checking workflow files..."

workflow_dir=".github/workflows"
if [ ! -d "$workflow_dir" ]; then
    echo -e "${RED}❌ Workflows directory not found${NC}"
    exit 1
fi

total_workflows=0
valid_workflows=0
invalid_workflows=0
disabled_workflows=0

echo ""
echo "🔍 Analyzing individual workflows:"
echo "=================================="

for workflow_file in "$workflow_dir"/*.yml "$workflow_dir"/*.yaml; do
    if [ -f "$workflow_file" ]; then
        total_workflows=$((total_workflows + 1))
        workflow_name=$(basename "$workflow_file")
        
        echo -n "  $workflow_name: "
        
        # Check YAML validity
        if check_yaml "$workflow_file"; then
            echo -n -e "${GREEN}✅ Valid YAML${NC}"
            valid_workflows=$((valid_workflows + 1))
        else
            echo -n -e "${RED}❌ Invalid YAML${NC}"
            invalid_workflows=$((invalid_workflows + 1))
        fi
        
        # Check structure
        structure_issues=$(check_workflow_structure "$workflow_file")
        if [ -z "$structure_issues" ]; then
            echo -n -e " ${GREEN}✅ Good structure${NC}"
        else
            echo -n -e " ${YELLOW}⚠️  Structure issues${NC}"
        fi
        
        # Check if enabled
        if check_workflow_enabled "$workflow_file"; then
            echo -n -e " ${GREEN}✅ Enabled${NC}"
        else
            echo -n -e " ${YELLOW}⚠️  Disabled${NC}"
            disabled_workflows=$((disabled_workflows + 1))
        fi
        
        echo ""
    fi
done

echo ""
echo "📊 Workflow Health Summary:"
echo "============================"
echo -e "  Total workflows: ${BLUE}$total_workflows${NC}"
echo -e "  Valid YAML: ${GREEN}$valid_workflows${NC}"
echo -e "  Invalid YAML: ${RED}$invalid_workflows${NC}"
echo -e "  Disabled workflows: ${YELLOW}$disabled_workflows${NC}"

# Check for critical issues
echo ""
echo "🚨 Critical Issues Found:"
echo "========================="

critical_issues=0

# Check for workflows with syntax errors
if [ $invalid_workflows -gt 0 ]; then
    echo -e "  ${RED}❌ $invalid_workflows workflow(s) have invalid YAML syntax${NC}"
    critical_issues=$((critical_issues + 1))
fi

# Check for workflows without proper structure
for workflow_file in "$workflow_dir"/*.yml "$workflow_dir"/*.yaml; do
    if [ -f "$workflow_file" ]; then
        structure_issues=$(check_workflow_structure "$workflow_file")
        if [ -n "$structure_issues" ]; then
            echo -e "  ${YELLOW}⚠️  $(basename "$workflow_file") has structural issues${NC}"
            critical_issues=$((critical_issues + 1))
        fi
    fi
done

# Check for background agent workflows specifically
echo ""
echo "🤖 Background Agent Workflow Status:"
echo "====================================="

background_workflows=(
    "merge-conflict-guard.yml"
    "workflow-supervisor.yml"
    "rapid-git-sync.yml"
    "smart-merge-agent.yml"
    "workflow-auto-healer.yml"
)

for bg_workflow in "${background_workflows[@]}"; do
    if [ -f "$workflow_dir/$bg_workflow" ]; then
        echo -n "  $bg_workflow: "
        
        if check_yaml "$workflow_dir/$bg_workflow"; then
            if check_workflow_enabled "$workflow_dir/$bg_workflow"; then
                echo -e "${GREEN}✅ Healthy${NC}"
            else
                echo -e "${YELLOW}⚠️  Disabled${NC}"
                critical_issues=$((critical_issues + 1))
            fi
        else
            echo -e "${RED}❌ Broken${NC}"
            critical_issues=$((critical_issues + 1))
        fi
    else
        echo -e "  $bg_workflow: ${RED}❌ Missing${NC}"
        critical_issues=$((critical_issues + 1))
    fi
done

# Overall health assessment
echo ""
echo "🏥 Overall Health Assessment:"
echo "============================="

if [ $critical_issues -eq 0 ]; then
    echo -e "${GREEN}✅ All workflows are healthy! Background agents should work properly.${NC}"
    exit 0
elif [ $critical_issues -le 2 ]; then
    echo -e "${YELLOW}⚠️  Some minor issues detected. Background agents may have limited functionality.${NC}"
    exit 1
else
    echo -e "${RED}❌ Critical issues detected. Background agents will likely fail.${NC}"
    exit 2
fi