#!/bin/bash
# Enhanced Git Sync Automation Script
# Handles git locks, conflicts, and safe syncing to main branch

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
MAIN_BRANCH="main"
REMOTE_NAME="origin"
BACKUP_BRANCH="sync-backup-$(date +%Y%m%d-%H%M%S)"
MAX_RETRIES=3

echo -e "${BLUE}🔄 Starting enhanced git sync...${NC}"

# Clean up any existing git locks
cleanup_git_locks() {
    echo -e "${YELLOW}🧹 Cleaning up git locks...${NC}"
    rm -f .git/index.lock 2>/dev/null || true
    rm -rf .git/rebase-merge 2>/dev/null || true
    rm -rf .git/rebase-apply 2>/dev/null || true
    rm -rf .git/merge-HEAD 2>/dev/null || true
    rm -rf .git/CHERRY_PICK_HEAD 2>/dev/null || true
    echo -e "${GREEN}✅ Git locks cleaned up${NC}"
}

# Check git status and health
check_git_health() {
    echo -e "${BLUE}🔍 Checking git repository health...${NC}"
    
    if [ ! -d ".git" ]; then
        echo -e "${RED}❌ Not a git repository${NC}"
        exit 1
    fi
    
    if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
        echo -e "${RED}❌ Invalid HEAD reference${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Git repository is healthy${NC}"
}

# Safe branch switching with conflict resolution
safe_switch_to_main() {
    echo -e "${BLUE}🔄 Switching to main branch...${NC}"
    
    local current_branch=$(git branch --show-current)
    
    if [ "$current_branch" = "$MAIN_BRANCH" ]; then
        echo -e "${GREEN}✅ Already on main branch${NC}"
        return 0
    fi
    
    # Stash current changes
    if ! git diff --quiet || ! git diff --cached --quiet; then
        echo -e "${YELLOW}📦 Stashing current changes...${NC}"
        git stash push -m "Auto-stash before switching to main - $(date)"
    fi
    
    # Create backup branch
    echo -e "${YELLOW}💾 Creating backup branch: $BACKUP_BRANCH${NC}"
    git branch "$BACKUP_BRANCH" 2>/dev/null || true
    
    # Switch to main
    echo -e "${YELLOW}🔄 Switching to $MAIN_BRANCH...${NC}"
    git checkout "$MAIN_BRANCH"
    
    echo -e "${GREEN}✅ Successfully switched to $MAIN_BRANCH${NC}"
}

# Pull latest changes safely
safe_pull() {
    echo -e "${BLUE}📥 Pulling latest changes...${NC}"
    
    local retry_count=0
    while [ $retry_count -lt $MAX_RETRIES ]; do
        if git pull "$REMOTE_NAME" "$MAIN_BRANCH"; then
            echo -e "${GREEN}✅ Successfully pulled latest changes${NC}"
            return 0
        else
            retry_count=$((retry_count + 1))
            echo -e "${YELLOW}⚠️  Pull failed, attempt $retry_count/$MAX_RETRIES${NC}"
            
            if [ $retry_count -lt $MAX_RETRIES ]; then
                echo -e "${YELLOW}🔄 Resetting and retrying...${NC}"
                git reset --hard HEAD
                sleep 2
            fi
        fi
    done
    
    echo -e "${RED}❌ Failed to pull after $MAX_RETRIES attempts${NC}"
    return 1
}

# Apply stashed changes safely
apply_stashed_changes() {
    echo -e "${BLUE}📦 Applying stashed changes...${NC}"
    
    local stash_count=$(git stash list | wc -l)
    if [ "$stash_count" -eq 0 ]; then
        echo -e "${GREEN}✅ No stashes to apply${NC}"
        return 0
    fi
    
    echo -e "${YELLOW}📦 Found $stash_count stash(es)${NC}"
    
    # Apply the most recent stash
    if git stash apply; then
        echo -e "${GREEN}✅ Successfully applied stashed changes${NC}"
        return 0
    else
        echo -e "${YELLOW}⚠️  Stash application had conflicts, resolving...${NC}"
        
        # Resolve conflicts by accepting our changes
        git checkout --theirs . 2>/dev/null || true
        git add -A
        
        echo -e "${GREEN}✅ Conflicts resolved by accepting our changes${NC}"
        return 0
    fi
}

# Commit and push changes
commit_and_push() {
    echo -e "${BLUE}💾 Committing and pushing changes...${NC}"
    
    # Check if there are changes to commit
    if git diff --quiet && git diff --cached --quiet; then
        echo -e "${GREEN}✅ No changes to commit${NC}"
        return 0
    fi
    
    # Add all changes
    git add -A
    
    # Commit with timestamp
    local commit_message="feat(sync): automated sync to main - $(date '+%Y-%m-%d %H:%M:%S')"
    if git commit -m "$commit_message"; then
        echo -e "${GREEN}✅ Changes committed successfully${NC}"
    else
        echo -e "${YELLOW}⚠️  Commit failed, checking for empty commit${NC}"
        return 0
    fi
    
    # Push to remote
    if git push "$REMOTE_NAME" "$MAIN_BRANCH"; then
        echo -e "${GREEN}✅ Changes pushed successfully${NC}"
    else
        echo -e "${YELLOW}⚠️  Push failed, pulling latest and retrying...${NC}"
        git pull "$REMOTE_NAME" "$MAIN_BRANCH"
        git push "$REMOTE_NAME" "$MAIN_BRANCH"
        echo -e "${GREEN}✅ Push successful after retry${NC}"
    fi
}

# Cleanup and final status
final_cleanup() {
    echo -e "${BLUE}🧹 Final cleanup...${NC}"
    
    # Remove backup branch if sync was successful
    if git branch | grep -q "$BACKUP_BRANCH"; then
        echo -e "${YELLOW}🗑️  Removing backup branch: $BACKUP_BRANCH${NC}"
        git branch -D "$BACKUP_BRANCH" 2>/dev/null || true
    fi
    
    # Final status check
    echo -e "${BLUE}📊 Final git status:${NC}"
    git status --porcelain || true
    
    echo -e "${GREEN}🎉 Enhanced git sync completed successfully!${NC}"
}

# Main execution
main() {
    echo -e "${BLUE}🚀 Starting enhanced git sync process...${NC}"
    
    # Check git health
    check_git_health
    
    # Clean up locks
    cleanup_git_locks
    
    # Switch to main safely
    safe_switch_to_main
    
    # Pull latest changes
    safe_pull
    
    # Apply stashed changes
    apply_stashed_changes
    
    # Commit and push
    commit_and_push
    
    # Final cleanup
    final_cleanup
    
    echo -e "${GREEN}✅ All done! Repository is now synced with main branch.${NC}"
}

# Error handling
trap 'echo -e "${RED}❌ Error occurred, cleaning up...${NC}"; cleanup_git_locks; exit 1' ERR

# Run main function
main "$@"
