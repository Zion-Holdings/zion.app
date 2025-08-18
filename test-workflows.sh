#!/bin/bash

set -euo pipefail

echo "🔍 GitHub Actions Workflow Testing and Validation"
echo "=================================================="

WORKFLOWS_DIR=".github/workflows"
REPORT_FILE="workflow-test-report.md"
FAILED_WORKFLOWS=()
WARNING_WORKFLOWS=()

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log with colors
log_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
log_success() { echo -e "${GREEN}✅ $1${NC}"; }
log_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
log_error() { echo -e "${RED}❌ $1${NC}"; }

# Check if workflows directory exists
if [[ ! -d "$WORKFLOWS_DIR" ]]; then
    log_error "Workflows directory not found: $WORKFLOWS_DIR"
    exit 1
fi

# Get all workflow files (excluding backup directories)
WORKFLOW_FILES=($(find "$WORKFLOWS_DIR" -name "*.yml" -o -name "*.yaml" | grep -v "broken_workflows_backup" | sort))

log_info "Found ${#WORKFLOW_FILES[@]} workflow files to test"

# Initialize counters
TOTAL_WORKFLOWS=${#WORKFLOW_FILES[@]}
VALID_WORKFLOWS=0
INVALID_WORKFLOWS=0
WARNING_COUNT=0

# Function to test a single workflow
test_workflow() {
    local workflow_file="$1"
    local workflow_name=$(basename "$workflow_file")
    
    echo ""
    log_info "Testing workflow: $workflow_name"
    
    local has_errors=false
    local has_warnings=false
    local warnings=()
    
    # Test 1: YAML syntax validation
    if ! python3 -c "import yaml; yaml.safe_load(open('$workflow_file'))" >/dev/null 2>&1; then
        log_error "YAML syntax error in $workflow_name"
        has_errors=true
        FAILED_WORKFLOWS+=("$workflow_name (YAML syntax error)")
    else
        log_success "YAML syntax is valid"
    fi
    
    # Test 2: Check for required fields using grep directly on the file
    if ! grep -q "^[[:space:]]*name:" "$workflow_file"; then
        log_warning "Missing 'name' field"
        warnings+=("Missing 'name' field")
        has_warnings=true
    fi
    
    if ! grep -q "^[[:space:]]*on:" "$workflow_file"; then
        log_error "Missing 'on' field (triggers)"
        has_errors=true
        FAILED_WORKFLOWS+=("$workflow_name (Missing triggers)")
    else
        log_success "Triggers found"
    fi
    
    if ! grep -q "^[[:space:]]*jobs:" "$workflow_file"; then
        log_error "Missing 'jobs' field"
        has_errors=true
        FAILED_WORKFLOWS+=("$workflow_name (Missing jobs)")
    else
        log_success "Jobs found"
    fi
    
    # Test 3: Check for common issues (operate on file content safely)
    if grep -q "timeout-minutes:[[:space:]]*[1-9][[:space:]]*$" "$workflow_file"; then
        log_warning "Very short timeout (1-9 minutes) - might cause issues"
        warnings+=("Very short timeout")
        has_warnings=true
    fi
    
    if ! grep -q "^[[:space:]]*permissions:" "$workflow_file"; then
        log_warning "Missing 'permissions' field"
        warnings+=("Missing permissions")
        has_warnings=true
    fi
    
    if ! grep -q "^[[:space:]]*concurrency:" "$workflow_file"; then
        log_warning "Missing 'concurrency' field"
        warnings+=("Missing concurrency")
        has_warnings=true
    fi
    
    if ! grep -q "workflow_dispatch" "$workflow_file"; then
        log_warning "No manual trigger (workflow_dispatch) - cannot test manually"
        warnings+=("No manual trigger")
        has_warnings=true
    fi
    
    if [[ "$workflow_name" == "ci.yml" || "$workflow_name" == "deploy.yml" || "$workflow_name" == "workflow.yml" ]]; then
        log_warning "Generic workflow name - consider more descriptive name"
        warnings+=("Generic name")
        has_warnings=true
    fi
    
    # Potentially invalid action references
    local invalid_actions
    invalid_actions=$(grep -o "uses:[[:space:]]*[^@]*" "$workflow_file" | grep -v "actions/" | grep -v "peter-evans/" | grep -v "softprops/" | grep -v "trufflesecurity/" | grep -v "github/" || true)
    if [[ -n "${invalid_actions:-}" ]]; then
        log_warning "Potentially invalid action references:"
        while read -r action; do
            [[ -n "$action" ]] && log_warning "  $action"
        done <<< "$invalid_actions"
        warnings+=("Invalid action references")
        has_warnings=true
    fi
    
    # Summary for this workflow
    if [[ "$has_errors" == true ]]; then
        log_error "Workflow $workflow_name has ERRORS"
        INVALID_WORKFLOWS=$((INVALID_WORKFLOWS + 1))
    elif [[ "$has_warnings" == true ]]; then
        log_warning "Workflow $workflow_name has warnings"
        WARNING_WORKFLOWS+=("$workflow_name: ${warnings[*]}")
        WARNING_COUNT=$((WARNING_COUNT + 1))
    else
        log_success "Workflow $workflow_name is healthy"
        VALID_WORKFLOWS=$((VALID_WORKFLOWS + 1))
    fi
}

# Test all workflows
for workflow_file in "${WORKFLOW_FILES[@]}"; do
    test_workflow "$workflow_file"
done

# Generate report
echo ""
echo "=================================================="
log_info "Testing Complete!"
echo "=================================================="

echo ""
log_info "Summary:"
echo "  Total workflows: $TOTAL_WORKFLOWS"
echo "  ✅ Valid workflows: $VALID_WORKFLOWS"
echo "  ⚠️  Workflows with warnings: $WARNING_COUNT"
echo "  ❌ Invalid workflows: $INVALID_WORKFLOWS"

# Generate detailed report
cat > "$REPORT_FILE" << EOF
# GitHub Actions Workflow Test Report

Generated: $(date)

## Summary
- Total workflows tested: $TOTAL_WORKFLOWS
- ✅ Valid workflows: $VALID_WORKFLOWS
- ⚠️  Workflows with warnings: $WARNING_COUNT
- ❌ Invalid workflows: $INVALID_WORKFLOWS

## Failed Workflows
EOF

if [[ ${#FAILED_WORKFLOWS[@]} -gt 0 ]]; then
    for failed in "${FAILED_WORKFLOWS[@]}"; do
        echo "- $failed" >> "$REPORT_FILE"
    done
else
    echo "- None" >> "$REPORT_FILE"
fi

cat >> "$REPORT_FILE" << EOF

## Workflows with Warnings
EOF

if [[ ${#WARNING_WORKFLOWS[@]} -gt 0 ]]; then
    for warning in "${WARNING_WORKFLOWS[@]}"; do
        echo "- $warning" >> "$REPORT_FILE"
    done
else
    echo "- None" >> "$REPORT_FILE"
fi

cat >> "$REPORT_FILE" << EOF

## Recommendations

### For Failed Workflows:
- Fix YAML syntax errors
- Add missing required fields (on, jobs)
- Ensure proper workflow structure

### For Workflows with Warnings:
- Add descriptive names instead of generic ones
- Add permissions field for security
- Add concurrency field to prevent conflicts
- Add workflow_dispatch for manual testing
- Review timeout settings
- Verify action references

## Next Steps
1. Fix all failed workflows first
2. Address warnings in priority order
3. Test workflows manually after fixes
4. Consider adding automated workflow validation to CI/CD

EOF

log_success "Detailed report generated: $REPORT_FILE"

# Exit with error if there are failed workflows
if [[ ${#FAILED_WORKFLOWS[@]} -gt 0 ]]; then
    log_error "Workflow testing failed with ${#FAILED_WORKFLOWS[@]} errors"
    exit 1
else
    log_success "All workflows passed basic validation!"
    exit 0
fi