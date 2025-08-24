#!/bin/bash

# Quick script to merge cursor PR branches efficiently
# Processes branches automatically with conflict resolution

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
LOG_FILE="quick-merge-$(date +%Y%m%d-%H%M%S).log"
MAX_BRANCHES=50  # Process max 50 branches at once

log() {
    echo -e "${BLUE}[$(date +%H:%M:%S)]${NC} $1" | tee -a "$LOG_FILE"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
}

# Ensure we're on main branch
if [[ $(git branch --show-current) != "main" ]]; then
    error "Not on main branch. Current branch: $(git branch --show-current)"
    exit 1
fi

# Fetch latest changes
log "Fetching latest changes from remote..."
git fetch origin

# Get cursor branches that are ahead of main (limit to MAX_BRANCHES)
log "Finding cursor branches with new content..."
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -$MAX_BRANCHES)

if [[ -z "$CURSOR_BRANCHES" ]]; then
    warning "No cursor branches found"
    exit 0
fi

# Filter branches that have commits ahead of main
BRANCHES_TO_MERGE=""
for branch in $CURSOR_BRANCHES; do
    # Check if branch has commits ahead of main
    if git log --oneline main..origin/$branch | head -1 > /dev/null 2>&1; then
        COMMIT_COUNT=$(git log --oneline main..origin/$branch | wc -l)
        if [[ $COMMIT_COUNT -gt 0 ]]; then
            BRANCHES_TO_MERGE="$BRANCHES_TO_MERGE $branch"
            log "Branch $branch has $COMMIT_COUNT new commits"
        fi
    fi
done

if [[ -z "$BRANCHES_TO_MERGE" ]]; then
    success "All cursor branches are already up to date with main!"
    exit 0
fi

TOTAL_BRANCHES=$(echo "$BRANCHES_TO_MERGE" | wc -w)
log "Found $TOTAL_BRANCHES cursor branches with new content to merge"

# Counters
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

# Process branches
for branch in $BRANCHES_TO_MERGE; do
    log "=== Processing: $branch ==="
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/"$branch"; then
        log "Branch $branch already exists locally, checking out..."
        git checkout "$branch"
        git pull origin "$branch"
    else
        log "Creating local branch $branch from origin/$branch..."
        git checkout -b "$branch" "origin/$branch"
    fi
    
    # Switch back to main
    git checkout main
    
    # Try to merge the branch
    log "Attempting to merge $branch into main..."
    
    if git merge --no-edit "$branch"; then
        success "Successfully merged $branch into main"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Delete the local branch after successful merge
        log "Deleting local branch $branch..."
        git branch -d "$branch"
        
    else
        error "Merge conflict detected in $branch"
        
        # Check if there are actual conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            log "Resolving merge conflicts in $branch..."
            
            # List conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            log "Conflicted files: $CONFLICTED_FILES"
            
            # Auto-resolve conflicts using --theirs strategy
            log "Using --theirs strategy for all conflicted files..."
            for file in $CONFLICTED_FILES; do
                if [[ -f "$file" ]]; then
                    log "Resolving conflicts in $file..."
                    
                    # Special handling for certain file types
                    if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]]; then
                        log "Package file conflict, using --theirs strategy..."
                        git checkout --theirs "$file"
                        git add "$file"
                    elif [[ "$file" == "tsconfig.tsbuildinfo"* ]]; then
                        log "TypeScript build info conflict, removing file..."
                        git rm "$file"
                    elif [[ "$file" == ".next/"* ]]; then
                        log "Next.js build file conflict, removing file..."
                        git rm "$file"
                    else
                        # For other files, use --theirs strategy
                        git checkout --theirs "$file"
                        git add "$file"
                    fi
                fi
            done
            
            # Try to complete the merge
            if git commit --no-edit; then
                success "Successfully resolved conflicts and merged $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                
                # Delete the local branch
                git branch -d "$branch"
                
            else
                error "Failed to resolve conflicts in $branch"
                FAILED_COUNT=$((FAILED_COUNT + 1))
                
                # Abort the merge
                log "Aborting merge for $branch..."
                git merge --abort
                
                # Keep the branch for manual review
                warning "Branch $branch kept for manual review due to unresolved conflicts"
            fi
            
        else
            # No actual conflicts, just merge issues
            error "Merge failed for $branch but no conflicts detected"
            FAILED_COUNT=$((FAILED_COUNT + 1))
            
            # Abort the merge
            git merge --abort
        fi
    fi
    
    log "Completed processing $branch"
    echo "---" | tee -a "$LOG_FILE"
    
    # Push changes every 10 successful merges
    if [[ $((SUCCESS_COUNT % 10)) -eq 0 ]] && [[ $SUCCESS_COUNT -gt 0 ]]; then
        log "Pushing changes to remote main..."
        if git push origin main; then
            success "Successfully pushed main branch"
        else
            error "Failed to push main branch"
        fi
    fi
done

# Final push
log "Pushing final changes to remote main..."
if git push origin main; then
    success "Successfully pushed main branch"
else
    error "Failed to push main branch"
fi

# Summary
log "=== QUICK MERGE PROCESS COMPLETED ==="
success "Successfully merged: $SUCCESS_COUNT branches"
if [[ $FAILED_COUNT -gt 0 ]]; then
    error "Failed to merge: $FAILED_COUNT branches"
fi
if [[ $SKIPPED_COUNT -gt 0 ]]; then
    warning "Skipped: $SKIPPED_COUNT branches"
fi

log "Total branches processed: $TOTAL_BRANCHES"
log "Check the log file for details: $LOG_FILE"

# Final status
log "Final git status:"
git status --porcelain | tee -a "$LOG_FILE"

log "Quick merge process completed at $(date)"