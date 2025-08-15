#!/bin/bash
# Simplified Git Health Checker Script
# Identifies and reports git repository issues without external dependencies

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPORT_FILE="git-health-report-$(date +%Y%m%d-%H%M%S).txt"
SEVERITY_LEVELS=("LOW" "MEDIUM" "HIGH" "CRITICAL")

echo -e "${BLUE}🔍 Starting Git Health Check...${NC}"

# Initialize report
init_report() {
    cat > "$REPORT_FILE" << EOF
=== Git Health Report ===
Timestamp: $(date)
Repository: $(basename $(pwd))
Branch: $(git branch --show-current 2>/dev/null || echo 'unknown')
================================

EOF
}

# Add issue to report
add_issue() {
    local severity="$1"
    local category="$2"
    local message="$3"
    local recommendation="$4"
    
    echo "[$severity] $category: $message" >> "$REPORT_FILE"
    echo "   Recommendation: $recommendation" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
    
    # Count issues by severity
    case "$severity" in
        "CRITICAL") CRITICAL_COUNT=$((CRITICAL_COUNT + 1)) ;;
        "HIGH") HIGH_COUNT=$((HIGH_COUNT + 1)) ;;
        "MEDIUM") MEDIUM_COUNT=$((MEDIUM_COUNT + 1)) ;;
        "LOW") LOW_COUNT=$((LOW_COUNT + 1)) ;;
    esac
    
    TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
}

# Initialize counters
CRITICAL_COUNT=0
HIGH_COUNT=0
MEDIUM_COUNT=0
LOW_COUNT=0
TOTAL_ISSUES=0

# Check git repository existence
check_git_repo() {
    echo -e "${BLUE}🔍 Checking git repository...${NC}"
    
    if [ ! -d ".git" ]; then
        add_issue "CRITICAL" "repository" "Not a git repository" "Initialize git repository with 'git init'"
        return 1
    fi
    
    echo -e "${GREEN}✅ Git repository exists${NC}"
    return 0
}

# Check git locks
check_git_locks() {
    echo -e "${BLUE}🔍 Checking for git locks...${NC}"
    
    local locks_found=false
    
    if [ -f ".git/index.lock" ]; then
        add_issue "HIGH" "locks" "Index lock file exists" "Remove .git/index.lock file"
        locks_found=true
    fi
    
    if [ -d ".git/rebase-merge" ]; then
        add_issue "HIGH" "locks" "Rebase merge directory exists" "Complete or abort rebase operation"
        locks_found=true
    fi
    
    if [ -d ".git/rebase-apply" ]; then
        add_issue "HIGH" "locks" "Rebase apply directory exists" "Complete or abort rebase operation"
        locks_found=true
    fi
    
    if [ -d ".git/merge-HEAD" ]; then
        add_issue "HIGH" "locks" "Merge HEAD directory exists" "Complete or abort merge operation"
        locks_found=true
    fi
    
    if [ "$locks_found" = false ]; then
        echo -e "${GREEN}✅ No git locks found${NC}"
    fi
}

# Check git status
check_git_status() {
    echo -e "${BLUE}🔍 Checking git status...${NC}"
    
    local status_output=$(git status --porcelain 2>/dev/null || echo "ERROR")
    
    if [ "$status_output" = "ERROR" ]; then
        add_issue "CRITICAL" "status" "Cannot get git status" "Check git repository integrity"
        return 1
    fi
    
    local modified_count=$(echo "$status_output" | grep -c "^M" || echo "0")
    local untracked_count=$(echo "$status_output" | grep -c "^??" || echo "0")
    local staged_count=$(echo "$status_output" | grep -c "^A\|^M\|^D" || echo "0")
    
    if [ "$modified_count" -gt 0 ]; then
        add_issue "MEDIUM" "status" "$modified_count modified files not staged" "Stage changes with 'git add' or commit them"
    fi
    
    if [ "$untracked_count" -gt 0 ]; then
        add_issue "LOW" "status" "$untracked_count untracked files" "Add files to git or add to .gitignore"
    fi
    
    if [ "$staged_count" -gt 0 ]; then
        add_issue "LOW" "status" "$staged_count staged files" "Commit staged changes or unstage them"
    fi
    
    if [ "$modified_count" -eq 0 ] && [ "$untracked_count" -eq 0 ] && [ "$staged_count" -eq 0 ]; then
        echo -e "${GREEN}✅ Working tree is clean${NC}"
    fi
}

# Check branch status
check_branch_status() {
    echo -e "${BLUE}🔍 Checking branch status...${NC}"
    
    local current_branch=$(git branch --show-current 2>/dev/null || echo "unknown")
    local upstream_branch=$(git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>/dev/null || echo "none")
    
    if [ "$current_branch" = "unknown" ]; then
        add_issue "CRITICAL" "branch" "Cannot determine current branch" "Check git HEAD reference"
        return 1
    fi
    
    if [ "$upstream_branch" = "none" ]; then
        add_issue "MEDIUM" "branch" "No upstream branch set for $current_branch" "Set upstream with 'git branch --set-upstream-to=origin/$current_branch'"
    else
        # Check if branch is behind/ahead
        local behind_count=$(git rev-list --count HEAD..@{u} 2>/dev/null || echo "0")
        local ahead_count=$(git rev-list --count @{u}..HEAD 2>/dev/null || echo "0")
        
        if [ "$behind_count" -gt 0 ]; then
            add_issue "MEDIUM" "branch" "Branch is $behind_count commits behind upstream" "Pull latest changes with 'git pull'"
        fi
        
        if [ "$ahead_count" -gt 0 ]; then
            add_issue "LOW" "branch" "Branch is $ahead_count commits ahead of upstream" "Push changes with 'git push'"
        fi
        
        if [ "$behind_count" -eq 0 ] && [ "$ahead_count" -eq 0 ]; then
            echo -e "${GREEN}✅ Branch is up to date with upstream${NC}"
        fi
    fi
}

# Check remote status
check_remote_status() {
    echo -e "${BLUE}🔍 Checking remote status...${NC}"
    
    local remote_count=$(git remote -v | wc -l)
    
    if [ "$remote_count" -eq 0 ]; then
        add_issue "HIGH" "remote" "No remote repositories configured" "Add remote with 'git remote add origin <url>'"
        return 1
    fi
    
    # Check if origin remote is accessible
    if git ls-remote origin >/dev/null 2>&1; then
        echo -e "${GREEN}✅ Origin remote is accessible${NC}"
    else
        add_issue "HIGH" "remote" "Cannot access origin remote" "Check remote URL and network connectivity"
    fi
}

# Check git hooks
check_git_hooks() {
    echo -e "${BLUE}🔍 Checking git hooks...${NC}"
    
    local hooks_dir=".git/hooks"
    local critical_hooks=("pre-commit" "pre-push" "pre-receive")
    
    for hook in "${critical_hooks[@]}"; do
        if [ -x "$hooks_dir/$hook" ]; then
            echo -e "${GREEN}✅ $hook hook is active${NC}"
        else
            echo -e "${YELLOW}ℹ️  $hook hook is not active${NC}"
        fi
    done
}

# Check for large files
check_large_files() {
    echo -e "${BLUE}🔍 Checking for large files...${NC}"
    
    local large_files=$(find . -type f -size +10M -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./.next/*" 2>/dev/null || true)
    
    if [ -n "$large_files" ]; then
        local count=$(echo "$large_files" | wc -l)
        add_issue "MEDIUM" "files" "$count files larger than 10MB found" "Consider adding large files to .gitignore or using Git LFS"
    else
        echo -e "${GREEN}✅ No large files found${NC}"
    fi
}

# Check git configuration
check_git_config() {
    echo -e "${BLUE}🔍 Checking git configuration...${NC}"
    
    local user_name=$(git config user.name 2>/dev/null || echo "")
    local user_email=$(git config user.email 2>/dev/null || echo "")
    
    if [ -z "$user_name" ]; then
        add_issue "MEDIUM" "config" "Git user name not configured" "Set with 'git config --global user.name \"Your Name\"'"
    fi
    
    if [ -z "$user_email" ]; then
        add_issue "MEDIUM" "config" "Git user email not configured" "Set with 'git config --global user.email \"your.email@example.com\"'"
    fi
    
    if [ -n "$user_name" ] && [ -n "$user_email" ]; then
        echo -e "${GREEN}✅ Git user configuration is set${NC}"
    fi
}

# Generate summary report
generate_summary() {
    echo -e "${BLUE}📊 Generating health summary...${NC}"
    
    echo "=== SUMMARY ===" >> "$REPORT_FILE"
    echo "Total Issues: $TOTAL_ISSUES" >> "$REPORT_FILE"
    echo "Critical: $CRITICAL_COUNT" >> "$REPORT_FILE"
    echo "High: $HIGH_COUNT" >> "$REPORT_FILE"
    echo "Medium: $MEDIUM_COUNT" >> "$REPORT_FILE"
    echo "Low: $LOW_COUNT" >> "$REPORT_FILE"
    echo "==============" >> "$REPORT_FILE"
    
    echo -e "${BLUE}📋 Git Health Summary:${NC}"
    echo -e "   Total Issues: $TOTAL_ISSUES"
    echo -e "   Critical: ${RED}$CRITICAL_COUNT${NC}"
    echo -e "   High: ${RED}$HIGH_COUNT${NC}"
    echo -e "   Medium: ${YELLOW}$MEDIUM_COUNT${NC}"
    echo -e "   Low: ${GREEN}$LOW_COUNT${NC}"
    
    if [ "$TOTAL_ISSUES" -eq 0 ]; then
        echo -e "${GREEN}🎉 Repository is healthy!${NC}"
    elif [ "$CRITICAL_COUNT" -gt 0 ] || [ "$HIGH_COUNT" -gt 0 ]; then
        echo -e "${RED}⚠️  Repository has critical issues that need immediate attention${NC}"
    else
        echo -e "${YELLOW}⚠️  Repository has minor issues that should be addressed${NC}"
    fi
    
    echo -e "${BLUE}📄 Detailed report saved to: $REPORT_FILE${NC}"
}

# Main execution
main() {
    echo -e "${BLUE}🚀 Starting comprehensive git health check...${NC}"
    
    # Initialize report
    init_report
    
    # Run all checks
    check_git_repo && {
        check_git_locks
        check_git_status
        check_branch_status
        check_remote_status
        check_git_hooks
        check_large_files
        check_git_config
    }
    
    # Generate summary
    generate_summary
    
    echo -e "${GREEN}✅ Git health check completed!${NC}"
}

# Run main function
main "$@"
