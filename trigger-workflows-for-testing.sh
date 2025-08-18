#!/bin/bash

set -euo pipefail

echo "🚀 Workflow Testing Trigger Script"
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if GitHub token is available
check_token() {
    if [ -n "${GH_TOKEN:-}" ] || [ -n "${GITHUB_TOKEN:-}" ]; then
        echo -e "${GREEN}✅ GitHub token found${NC}"
        return 0
    else
        echo -e "${RED}❌ No GitHub token found${NC}"
        echo "Please set one of:"
        echo "  - GH_TOKEN"
        echo "  - GITHUB_TOKEN"
        echo ""
        echo "You can set it with:"
        echo "  export GH_TOKEN=your_token_here"
        echo ""
        return 1
    fi
}

# Function to trigger a specific workflow
trigger_workflow() {
    local workflow_name="$1"
    local workflow_file=".github/workflows/${workflow_name}.yml"
    
    if [ ! -f "$workflow_file" ]; then
        workflow_file=".github/workflows/${workflow_name}.yaml"
    fi
    
    if [ ! -f "$workflow_file" ]; then
        echo -e "${RED}❌ Workflow not found: $workflow_name${NC}"
        return 1
    fi
    
    echo -e "${BLUE}🚀 Triggering workflow: ${workflow_name}${NC}"
    
    # Use the existing trigger script if available
    if [ -f "scripts/trigger-workflows.cjs" ]; then
        echo "Using Node.js trigger script..."
        node scripts/trigger-workflows.cjs --only "$workflow_name" --wait
    else
        echo -e "${YELLOW}⚠️  Node.js trigger script not found${NC}"
        echo "Please install dependencies and use the Node.js script for full functionality"
        return 1
    fi
}

# Function to trigger core workflows for testing
trigger_core_workflows() {
    echo -e "${BLUE}🔧 Triggering core workflows for testing...${NC}"
    echo ""
    
    local core_workflows=(
        "ci"
        "commitlint"
        "actionlint"
        "pr-smoke"
        "playwright-smoke"
        "workflow-validator"
        "yaml-validator"
        "accessibility-audit"
        "performance-audit"
        "security-audit"
    )
    
    for workflow in "${core_workflows[@]}"; do
        echo -e "${BLUE}🔍 Testing: $workflow${NC}"
        if trigger_workflow "$workflow"; then
            echo -e "${GREEN}✅ $workflow triggered successfully${NC}"
        else
            echo -e "${RED}❌ Failed to trigger $workflow${NC}"
        fi
        echo ""
        sleep 5  # Wait between triggers to avoid rate limiting
    done
}

# Function to trigger workflow management workflows
trigger_workflow_management() {
    echo -e "${BLUE}⚙️  Triggering workflow management workflows...${NC}"
    echo ""
    
    local management_workflows=(
        "workflow-health-monitor"
        "workflow-auto-healer"
        "workflow-validator"
        "yaml-auto-fixer"
        "yaml-auto-fixer-simple"
    )
    
    for workflow in "${management_workflows[@]}"; do
        echo -e "${BLUE}🔍 Testing: $workflow${NC}"
        if trigger_workflow "$workflow"; then
            echo -e "${GREEN}✅ $workflow triggered successfully${NC}"
        else
            echo -e "${RED}❌ Failed to trigger $workflow${NC}"
        fi
        echo ""
        sleep 5
    done
}

# Function to trigger specific workflow category
trigger_category() {
    local category="$1"
    
    case "$category" in
        "core")
            trigger_core_workflows
            ;;
        "management")
            trigger_workflow_management
            ;;
        "test")
            trigger_workflow "test"
            ;;
        "security")
            trigger_workflow "security-audit"
            ;;
        "performance")
            trigger_workflow "performance-audit"
            ;;
        "accessibility")
            trigger_workflow "accessibility-audit"
            ;;
        "seo")
            trigger_workflow "seo-audit"
            ;;
        *)
            echo -e "${RED}❌ Unknown category: $category${NC}"
            echo "Available categories: core, management, test, security, performance, accessibility, seo"
            return 1
            ;;
    esac
}

# Main execution
main() {
    case "${1:-}" in
        "--help"|"-h")
            echo "Usage: $0 [workflow_name|category]"
            echo ""
            echo "Examples:"
            echo "  $0                    # Show this help"
            echo "  $0 ci                 # Trigger specific workflow"
            echo "  $0 core               # Trigger core workflows"
            echo "  $0 management         # Trigger workflow management workflows"
            echo "  $0 test               # Trigger test workflow"
            echo "  $0 security           # Trigger security workflow"
            echo "  $0 performance        # Trigger performance workflow"
            echo "  $0 accessibility      # Trigger accessibility workflow"
            echo "  $0 seo                # Trigger SEO workflow"
            echo ""
            echo "Note: Requires GitHub token (GH_TOKEN or GITHUB_TOKEN)"
            exit 0
            ;;
        "")
            echo "No workflow specified. Use --help for usage information."
            exit 1
            ;;
        *)
            # Check if it's a category or specific workflow
            case "$1" in
                "core"|"management"|"test"|"security"|"performance"|"accessibility"|"seo")
                    if check_token; then
                        trigger_category "$1"
                    else
                        exit 1
                    fi
                    ;;
                *)
                    if check_token; then
                        trigger_workflow "$1"
                    else
                        exit 1
                    fi
                    ;;
            esac
            ;;
    esac
}

main "$@"