#!/bin/bash

# Script to continue the merge process from branch 11 onwards
set -e

echo "🚀 Continuing merge process from branch 11/2339..."
echo "📊 Total cursor branches: 2339"
echo "✅ Already processed: 10 branches"
echo "📋 Remaining: 2329 branches"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=20
LOG_FILE="continue-merge-from-10-log-$(date +%Y%m%d-%H%M%S).txt"
BACKUP_BRANCH="continue-merge-from-10-backup-$(date +%Y%m%d-%H%M%S)"

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Create backup branch
log_message "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Get list of existing cursor branches (skip first 10)
log_message "📋 Getting list of remaining cursor branches..."
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | tail -n +11)

# Initialize counters
SUCCESSFUL_MERGES=10  # Start from 10 since we already processed 10
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=10

# Process branches in batches
echo "$CURSOR_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    # Extract branch name
    BRANCH_NAME=$(echo "$branch" | sed 's/origin\///')
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    log_message "📋 Processing branch $TOTAL_PROCESSED/2339: $BRANCH_NAME"
    
    # Check if branch still exists
    if ! git ls-remote --heads origin "$BRANCH_NAME" | grep -q "$BRANCH_NAME"; then
        log_message "⚠️  Branch $BRANCH_NAME no longer exists, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Attempt to merge
    log_message "🔄 Attempting to merge $BRANCH_NAME..."
    
    if git merge --no-edit "origin/$BRANCH_NAME" 2>/dev/null; then
        log_message "✅ Successfully merged $BRANCH_NAME"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        
        # Clean up merged branch
        git branch -d "$BRANCH_NAME" 2>/dev/null || true
        
        log_message "✅ Branch $BRANCH_NAME processed successfully"
    else
        log_message "❌ Failed to merge $BRANCH_NAME, attempting conflict resolution..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            log_message "🔧 Resolving merge conflicts for $BRANCH_NAME..."
            
            # Try to resolve conflicts automatically
            git add .
            if git commit -m "Resolve merge conflicts from $BRANCH_NAME" 2>/dev/null; then
                log_message "✅ Conflicts resolved for $BRANCH_NAME"
                CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            else
                log_message "❌ Failed to resolve conflicts for $BRANCH_NAME, aborting merge..."
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
            fi
        else
            log_message "❌ Merge failed for $BRANCH_NAME (not due to conflicts)"
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    # Log progress
    log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
    
    # Push intermediate changes every batch
    if [ $((TOTAL_PROCESSED % BATCH_SIZE)) -eq 0 ]; then
        log_message "💾 Pushing intermediate changes..."
        git push origin main
        log_message "✅ Intermediate changes pushed successfully"
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 1
    
done

# Final push
log_message "💾 Pushing final changes..."
git push origin main

# Summary
log_message "🎉 Merge process completed!"
log_message "📊 Final Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   📅 Completed at: $(date)"

echo "🎉 Merge process completed! Check $LOG_FILE for detailed logs."