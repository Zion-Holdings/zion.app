#!/bin/bash

# Continue Cursor Merge from where we left off
# This script continues merging cursor branches starting from index 200

set -e

echo "🚀 Continuing cursor branch merge from index 200..."
echo "📊 Total cursor branches: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=200
START_INDEX=200  # Start from where we left off
BACKUP_BRANCH="cursor-merge-continuation-backup-$(date +%Y%m%d-%H%M%S)"
LOG_FILE="cursor-merge-continuation-log-$(date +%Y%m%d-%H%M%S).txt"
FAILED_BRANCHES_FILE="failed-branches-continuation-$(date +%Y%m%d-%H%M%S).txt"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Create backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Function to log messages
log_message() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $message" | tee -a "$LOG_FILE"
}

# Function to sync with remote main
sync_with_remote() {
    log_message "🔄 Syncing with remote main branch..."
    git fetch origin main
    git reset --hard origin/main
    log_message "✅ Synced with remote main branch"
}

# Function to resolve conflicts quickly
resolve_conflicts() {
    local file="$1"
    
    # Quick conflict resolution - keep main version for most files
    if grep -q "<<<<<<< HEAD" "$file"; then
        log_message "🔧 Quick conflict resolution for $file"
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Remove conflict markers, keeping main version
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
        return 0
    fi
    
    return 1
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Merging $branch..."
    
    # Fetch the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        return 0
    else
        log_message "⚠️  Conflicts in $branch, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            # Resolve conflicts quickly
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Add and commit
            git add .
            git commit -m "Resolve conflicts for $branch - $(date)"
            log_message "✅ Resolved conflicts for $branch"
            return 0
        else
            log_message "❌ Merge failed for $branch"
            git merge --abort
            return 1
        fi
    fi
}

# Function to process branches in batches
process_batch() {
    local start_index="$1"
    local batch_size="$2"
    
    log_message "🚀 Processing batch starting from index $start_index..."
    
    # Get branches for this batch
    BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort | tail -n +$((start_index + 1)) | head -$batch_size)
    
    # Convert to array
    branch_array=($BRANCHES)
    total_branches=${#branch_array[@]}
    
    if [ $total_branches -eq 0 ]; then
        log_message "✅ No more branches to process"
        return 0
    fi
    
    log_message "📊 Processing $total_branches branches"
    
    # Process each branch
    for ((i=0; i<total_branches; i++)); do
        branch="${branch_array[$i]}"
        TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
        
        log_message "📋 Processing $TOTAL_PROCESSED: $branch"
        
        # Skip if already merged
        if git branch --merged main | grep -q "$branch"; then
            log_message "⏭️  Skipping $branch (already merged)"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
            continue
        fi
        
        # Try to merge
        if merge_branch "$branch"; then
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            log_message "✅ Successfully processed $branch"
        else
            FAILED_MERGES=$((FAILED_MERGES + 1))
            log_message "❌ Failed to process $branch"
            echo "$branch" >> "$FAILED_BRANCHES_FILE"
        fi
        
        # Progress update
        if [ $((TOTAL_PROCESSED % 50)) -eq 0 ]; then
            log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
            
            # Push intermediate changes
            log_message "💾 Pushing intermediate changes..."
            if git push origin main; then
                log_message "✅ Pushed to remote"
            else
                log_message "⚠️  Failed to push, continuing locally"
            fi
        fi
    done
    
    # Final push for this batch
    log_message "💾 Pushing final changes for this batch..."
    if git push origin main; then
        log_message "✅ Successfully pushed batch changes"
    else
        log_message "⚠️  Failed to push batch changes"
    fi
    
    return 0
}

# Main processing loop
log_message "🔄 Starting continuation from index $START_INDEX..."
log_message "📊 Batch size: $BATCH_SIZE"

start_index=$START_INDEX
batch_num=1

while true; do
    log_message "🔄 Starting batch $batch_num..."
    
    if process_batch "$start_index" "$BATCH_SIZE"; then
        log_message "✅ Batch $batch_num completed"
        
        # Check remaining branches
        remaining=$(git branch -r | grep "origin/cursor/" | wc -l)
        log_message "📊 Remaining branches: $remaining"
        
        if [ $remaining -eq 0 ]; then
            log_message "🎉 All branches processed!"
            break
        fi
        
        # Move to next batch
        start_index=$((start_index + BATCH_SIZE))
        batch_num=$((batch_num + 1))
        
        # Ask to continue
        echo ""
        read -p "Continue to next batch? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            log_message "⏸️  Pausing batch processing"
            break
        fi
        
        log_message "---"
    else
        log_message "❌ Batch $batch_num failed"
        break
    fi
done

# Summary
echo ""
log_message "🎉 Continuation merge completed!"
log_message "📊 Final Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   📦 Total processed: $TOTAL_PROCESSED"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "   📝 Log file: $LOG_FILE"
log_message "   ❌ Failed branches: $FAILED_BRANCHES_FILE"
log_message "⏰ Completed at: $(date)"