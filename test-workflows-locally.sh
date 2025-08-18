#!/bin/bash

set -euo pipefail

echo "🧪 Testing GitHub Actions workflows locally..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to test a workflow
test_workflow() {
    local workflow_file="$1"
    local workflow_name=$(basename "$workflow_file" .yml)
    
    echo -e "${BLUE}🔍 Testing workflow: ${workflow_name}${NC}"
    
    # Check if file exists
    if [ ! -f "$workflow_file" ]; then
        echo -e "${RED}❌ Workflow file not found: $workflow_file${NC}"
        return 1
    fi
    
    # Check YAML syntax
    if python3 -c "import yaml; yaml.safe_load(open('$workflow_file', 'r'))" 2>/dev/null; then
        echo -e "${GREEN}✅ Valid YAML syntax${NC}"
    else
        echo -e "${RED}❌ Invalid YAML syntax${NC}"
        return 1
    fi
    
    # Check for placeholder content (but exclude grep patterns and legitimate workflow content)
    if grep -q "echo \"Workflow executed successfully\"" "$workflow_file" || \
       grep -q "echo \"Workflow Workflow completed successfully\"" "$workflow_file" || \
       grep -q "echo \"Workflow completed successfully\"" "$workflow_file"; then
        echo -e "${YELLOW}⚠️  Contains placeholder content${NC}"
    else
        echo -e "${GREEN}✅ No placeholder content detected${NC}"
    fi
    
    # Check for basic workflow structure
    if grep -q "name:" "$workflow_file" && grep -q "on:" "$workflow_file" && grep -q "jobs:" "$workflow_file"; then
        echo -e "${GREEN}✅ Basic workflow structure present${NC}"
    else
        echo -e "${RED}❌ Missing basic workflow structure${NC}"
        return 1
    fi
    
    # Check for proper permissions
    if grep -q "permissions:" "$workflow_file"; then
        echo -e "${GREEN}✅ Permissions defined${NC}"
    else
        echo -e "${YELLOW}⚠️  No permissions defined${NC}"
    fi
    
    echo ""
    return 0
}

# Function to test all workflows
test_all_workflows() {
    local workflows_dir=".github/workflows"
    local total_workflows=0
    local passed_workflows=0
    local failed_workflows=0
    
    echo -e "${BLUE}📁 Testing all workflows in $workflows_dir${NC}"
    echo ""
    
    # Find all workflow files
    local workflow_files=$(find "$workflows_dir" -name "*.yml" -o -name "*.yaml" | sort)
    
    for workflow_file in $workflow_files; do
        total_workflows=$((total_workflows + 1))
        
        if test_workflow "$workflow_file"; then
            passed_workflows=$((passed_workflows + 1))
        else
            failed_workflows=$((failed_workflows + 1))
        fi
    done
    
    echo ""
    echo -e "${BLUE}📊 Test Summary${NC}"
    echo "=================="
    echo -e "Total workflows: ${total_workflows}"
    echo -e "${GREEN}Passed: ${passed_workflows}${NC}"
    echo -e "${RED}Failed: ${failed_workflows}${NC}"
    
    if [ $failed_workflows -eq 0 ]; then
        echo -e "${GREEN}🎉 All workflows passed validation!${NC}"
        return 0
    else
        echo -e "${RED}❌ Some workflows failed validation${NC}"
        return 1
    fi
}

# Function to test specific workflow
test_specific_workflow() {
    local workflow_name="$1"
    local workflow_file=".github/workflows/${workflow_name}.yml"
    
    if [ ! -f "$workflow_file" ]; then
        workflow_file=".github/workflows/${workflow_name}.yaml"
    fi
    
    test_workflow "$workflow_file"
}

# Main execution
main() {
    case "${1:-}" in
        "--help"|"-h")
            echo "Usage: $0 [workflow_name]"
            echo "  If no workflow name is provided, tests all workflows"
            echo "  Example: $0 ci"
            echo "  Example: $0"
            exit 0
            ;;
        "")
            test_all_workflows
            ;;
        *)
            test_specific_workflow "$1"
            ;;
    esac
}

main "$@"