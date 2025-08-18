#!/bin/bash

set -euo pipefail

echo "🔧 Comprehensive workflow fixer for all placeholder content patterns..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to fix a workflow
fix_workflow() {
    local workflow_file="$1"
    local workflow_name=$(basename "$workflow_file" .yml)
    
    echo -e "${BLUE}🔧 Fixing workflow: ${workflow_name}${NC}"
    
    # Check if file exists
    if [ ! -f "$workflow_file" ]; then
        echo -e "${RED}❌ Workflow file not found: $workflow_file${NC}"
        return 1
    fi
    
    # Create backup
    cp "$workflow_file" "${workflow_file}.backup"
    
    # Check for different placeholder patterns and fix them
    local fixed=false
    
    # Pattern 1: "echo \"Workflow executed successfully\""
    if grep -q "echo \"Workflow executed successfully\"" "$workflow_file"; then
        echo "  🔧 Fixing pattern 1: echo \"Workflow executed successfully\""
        sed -i 's/echo "Workflow executed successfully"/echo "✅ Workflow completed successfully"/' "$workflow_file"
        fixed=true
    fi
    
    # Pattern 2: "echo \"Workflow Workflow completed successfully\""
    if grep -q "echo \"Workflow Workflow completed successfully\"" "$workflow_file"; then
        echo "  🔧 Fixing pattern 2: echo \"Workflow Workflow completed successfully\""
        sed -i 's/echo "Workflow Workflow completed successfully"/echo "✅ Workflow completed successfully"/' "$workflow_file"
        fixed=true
    fi
    
    # Pattern 3: "echo \"Workflow completed successfully\""
    if grep -q "echo \"Workflow completed successfully\"" "$workflow_file"; then
        echo "  🔧 Fixing pattern 3: echo \"Workflow completed successfully\""
        sed -i 's/echo "Workflow completed successfully"/echo "✅ Workflow completed successfully"/' "$workflow_file"
        fixed=true
    fi
    
    # Pattern 4: "run: echo \"Workflow Workflow completed successfully\""
    if grep -q "run: echo \"Workflow Workflow completed successfully\"" "$workflow_file"; then
        echo "  🔧 Fixing pattern 4: run: echo \"Workflow Workflow completed successfully\""
        sed -i 's/run: echo "Workflow Workflow completed successfully"/run: echo "✅ Workflow completed successfully"/' "$workflow_file"
        fixed=true
    fi
    
    # Pattern 5: "run: echo \"Workflow executed successfully\""
    if grep -q "run: echo \"Workflow executed successfully\"" "$workflow_file"; then
        echo "  🔧 Fixing pattern 5: run: echo \"Workflow executed successfully\""
        sed -i 's/run: echo "Workflow executed successfully"/run: echo "✅ Workflow completed successfully"/' "$workflow_file"
        fixed=true
    fi
    
    # Pattern 6: "run: echo \"Workflow completed successfully\""
    if grep -q "run: echo \"Workflow completed successfully\"" "$workflow_file"; then
        echo "  🔧 Fixing pattern 6: run: echo \"Workflow completed successfully\""
        sed -i 's/run: echo "Workflow completed successfully"/run: echo "✅ Workflow completed successfully"/' "$workflow_file"
        fixed=true
    fi
    
    if [ "$fixed" = false ]; then
        echo "  ✅ No placeholder patterns found to fix"
        rm "${workflow_file}.backup"
        return 0
    fi
    
    # Verify the fix
    if python3 -c "import yaml; yaml.safe_load(open('$workflow_file', 'r'))" 2>/dev/null; then
        echo -e "${GREEN}✅ Fixed successfully${NC}"
        rm "${workflow_file}.backup"
        return 0
    else
        echo -e "${RED}❌ Fix failed, restoring backup${NC}"
        mv "${workflow_file}.backup" "$workflow_file"
        return 1
    fi
}

# Function to find and fix all workflows with placeholder content
fix_all_workflows() {
    local workflows_dir=".github/workflows"
    local total_workflows=0
    local fixed_workflows=0
    local failed_workflows=0
    
    echo -e "${BLUE}📁 Fixing all workflows in $workflows_dir${NC}"
    echo ""
    
    # Find all workflow files
    local workflow_files=$(find "$workflows_dir" -name "*.yml" -o -name "*.yaml" | sort)
    
    for workflow_file in $workflow_files; do
        total_workflows=$((total_workflows + 1))
        
        if fix_workflow "$workflow_file"; then
            fixed_workflows=$((fixed_workflows + 1))
        else
            failed_workflows=$((failed_workflows + 1))
        fi
        
        echo ""
    done
    
    echo ""
    echo -e "${BLUE}📊 Fix Summary${NC}"
    echo "=================="
    echo -e "Total workflows processed: ${total_workflows}"
    echo -e "${GREEN}Successfully processed: ${fixed_workflows}${NC}"
    echo -e "${RED}Failed to process: ${failed_workflows}${NC}"
    
    if [ $failed_workflows -eq 0 ]; then
        echo -e "${GREEN}🎉 All workflows processed successfully!${NC}"
        return 0
    else
        echo -e "${RED}❌ Some workflows failed to process${NC}"
        return 1
    fi
}

# Function to fix specific workflow
fix_specific_workflow() {
    local workflow_name="$1"
    local workflow_file=".github/workflows/${workflow_name}.yml"
    
    if [ ! -f "$workflow_file" ]; then
        workflow_file=".github/workflows/${workflow_name}.yaml"
    fi
    
    fix_workflow "$workflow_file"
}

# Main execution
main() {
    case "${1:-}" in
        "--help"|"-h")
            echo "Usage: $0 [workflow_name]"
            echo "  If no workflow name is provided, processes all workflows"
            echo "  Example: $0 ci"
            echo "  Example: $0"
            exit 0
            ;;
        "")
            fix_all_workflows
            ;;
        *)
            fix_specific_workflow "$1"
            ;;
    esac
}

main "$@"