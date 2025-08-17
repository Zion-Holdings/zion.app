#!/bin/bash

# Comprehensive GitHub Actions Workflow Validation Script
# Checks for proper structure, security, performance, and best practices

echo "🔍 Comprehensive GitHub Actions Workflow Validation"
echo "=================================================="

WORKFLOWS_DIR=".github/workflows"
TOTAL_FILES=0
VALID_FILES=0
ISSUES_FOUND=0
WARNINGS=0

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "📁 Validating workflow files in $WORKFLOWS_DIR"
echo ""

# Function to log issues
log_issue() {
    local file="$1"
    local message="$2"
    local severity="$3"
    
    case $severity in
        "error")
            echo -e "  ${RED}❌ ERROR:${NC} $message"
            ((ISSUES_FOUND++))
            ;;
        "warning")
            echo -e "  ${YELLOW}⚠️  WARNING:${NC} $message"
            ((WARNINGS++))
            ;;
        "info")
            echo -e "  ${BLUE}ℹ️  INFO:${NC} $message"
            ;;
    esac
}

# Function to validate a workflow file
validate_workflow() {
    local file="$1"
    local is_valid=true
    local file_issues=0
    
    ((TOTAL_FILES++))
    
    echo -e "${BLUE}🔍 Checking:${NC} $file"
    
    # Check file size (should not be too large)
    local file_size=$(wc -c < "$file")
    if [ $file_size -gt 10000 ]; then
        log_issue "$file" "File is very large ($file_size bytes) - consider splitting" "warning"
    fi
    
    # Check for required sections
    if ! grep -q "^name:" "$file"; then
        log_issue "$file" "Missing name section" "error"
        is_valid=false
        ((file_issues++))
    fi
    
    if ! grep -q "^on:" "$file"; then
        log_issue "$file" "Missing triggers section" "error"
        is_valid=false
        ((file_issues++))
    fi
    
    if ! grep -q "^jobs:" "$file"; then
        log_issue "$file" "Missing jobs section" "error"
        is_valid=false
        ((file_issues++))
    fi
    
    # Check for proper permissions
    if ! grep -q "^permissions:" "$file"; then
        log_issue "$file" "Missing permissions section - using default permissions" "warning"
        ((file_issues++))
    else
        # Check for overly permissive permissions
        if grep -q "contents: write" "$file" && ! grep -q "pull-requests: write" "$file"; then
            log_issue "$file" "Has contents: write permission without pull-requests: write" "warning"
            ((file_issues++))
        fi
    fi
    
    # Check for proper concurrency settings
    if ! grep -q "^concurrency:" "$file"; then
        log_issue "$file" "Missing concurrency settings - may cause race conditions" "warning"
        ((file_issues++))
    fi
    
    # Check for timeout settings
    if ! grep -q "timeout-minutes:" "$file"; then
        log_issue "$file" "Missing timeout-minutes - workflows may hang indefinitely" "warning"
        ((file_issues++))
    fi
    
    # Check for proper job structure
    if ! grep -q "runs-on:" "$file"; then
        log_issue "$file" "Missing runs-on specification" "error"
        is_valid=false
        ((file_issues++))
    fi
    
    if ! grep -q "steps:" "$file"; then
        log_issue "$file" "Missing steps section" "error"
        is_valid=false
        ((file_issues++))
    fi
    
    # Check for proper step structure
    if ! grep -q ".*- name:" "$file"; then
        log_issue "$file" "No step definitions found" "error"
        is_valid=false
        ((file_issues++))
    fi
    
    # Check for security best practices
    if grep -q "GITHUB_TOKEN" "$file" && ! grep -q "permissions:" "$file"; then
        log_issue "$file" "Using GITHUB_TOKEN without explicit permissions" "warning"
        ((file_issues++))
    fi
    
    # Check for proper action versions
    if grep -q "uses: actions/" "$file"; then
        if grep -q "uses: actions/checkout@v1" "$file" || grep -q "uses: actions/checkout@v2" "$file"; then
            log_issue "$file" "Using outdated checkout action - should use v4" "warning"
            ((file_issues++))
        fi
        if grep -q "uses: actions/setup-node@v1" "$file" || grep -q "uses: actions/setup-node@v2" "$file" || grep -q "uses: actions/setup-node@v3" "$file"; then
            log_issue "$file" "Using outdated setup-node action - should use v4" "warning"
            ((file_issues++))
        fi
    fi
    
    # Check for proper YAML structure
    if grep -q "CRON_SCHEDULE_PLACEHOLDER" "$file"; then
        log_issue "$file" "Cron schedule placeholder not replaced" "error"
        is_valid=false
        ((file_issues++))
    fi
    
    # Check for excessive cron schedules
    cron_count=$(grep -c "cron:" "$file" || echo "0")
    if [ "$cron_count" -gt 2 ]; then
        log_issue "$file" "Multiple cron schedules detected - may cause excessive runs" "warning"
        ((file_issues++))
    fi
    
    # Check for proper error handling
    if grep -q "continue-on-error: true" "$file"; then
        log_issue "$file" "Using continue-on-error - ensure this is intentional" "info"
    fi
    
    # Check for proper artifact handling
    if grep -q "actions/upload-artifact" "$file" && ! grep -q "retention-days:" "$file"; then
        log_issue "$file" "Uploading artifacts without retention policy" "warning"
        ((file_issues++))
    fi
    
    # Summary for this file
    if [ $file_issues -eq 0 ]; then
        echo -e "  ${GREEN}✅ Valid workflow${NC}"
        ((VALID_FILES++))
    else
        echo -e "  ${RED}❌ Found $file_issues issue(s)${NC}"
        is_valid=false
    fi
    
    echo ""
}

# Process all workflow files
for file in $WORKFLOWS_DIR/*.yml; do
    if [ -f "$file" ]; then
        validate_workflow "$file"
    fi
done

# Overall validation summary
echo "🎉 Workflow validation completed!"
echo "================================="
echo -e "📊 Summary:"
echo -e "   - Total files checked: ${BLUE}$TOTAL_FILES${NC}"
echo -e "   - Valid workflows: ${GREEN}$VALID_FILES${NC}"
echo -e "   - Total issues found: ${RED}$ISSUES_FOUND${NC}"
echo -e "   - Total warnings: ${YELLOW}$WARNINGS${NC}"
echo ""

# Recommendations
echo "💡 Recommendations:"
if [ $ISSUES_FOUND -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "  ${GREEN}✅ All workflows are properly configured!${NC}"
elif [ $ISSUES_FOUND -eq 0 ]; then
    echo -e "  ${GREEN}✅ No critical issues found${NC}"
    echo -e "  ${YELLOW}⚠️  Consider addressing warnings for better practices${NC}"
else
    echo -e "  ${RED}❌ Critical issues found - fix these before deployment${NC}"
    echo -e "  ${YELLOW}⚠️  Address warnings for better security and performance${NC}"
fi

echo ""
echo "🔧 Next steps:"
if [ $ISSUES_FOUND -gt 0 ]; then
    echo "   1. Fix critical errors in workflows"
    echo "   2. Review and address warnings"
    echo "   3. Test workflows locally if possible"
    echo "   4. Re-run validation after fixes"
else
    echo "   1. Workflows are ready for use"
    echo "   2. Consider addressing warnings for best practices"
    echo "   3. Monitor workflow performance"
fi

echo ""
echo "📚 Best practices:"
echo "   - Use explicit permissions instead of default"
echo "   - Set appropriate timeouts for all jobs"
echo "   - Use latest action versions (v4+)"
echo "   - Implement proper concurrency controls"
echo "   - Set artifact retention policies"
echo "   - Handle errors appropriately"
