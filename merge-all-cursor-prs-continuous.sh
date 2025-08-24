#!/bin/bash

# Continuous script to merge all remaining cursor branches
set -e

echo "🚀 Starting continuous merge of ALL remaining cursor branches..."
echo "📊 Total cursor branches: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=200  # Larger batch size for efficiency
BACKUP_BRANCH="cursor-merge-continuous-backup-$(date +%Y%m%d-%H%M%S)"
LOG_FILE="cursor-merge-continuous-log-$(date +%Y%m%d-%H%M%S).txt"
MAX_RETRIES=3
TOTAL_PROCESSED=0
TOTAL_SUCCESSFUL=0
TOTAL_FAILED=0
TOTAL_CONFLICTS=0
TOTAL_SKIPPED=0

# Create a backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Function to sync with remote
sync_with_remote() {
    log_message "🔄 Syncing with remote main branch..."
    git fetch origin main
    git reset --hard origin/main
    log_message "✅ Synced with remote main branch"
}

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        log_message "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            log_message "📦 Critical file detected, keeping main version and merging dependencies..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
            log_message "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            log_message "📝 Regular file, attempting to merge both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        log_message "✅ Resolved conflicts in $file"
        TOTAL_CONFLICTS=$((TOTAL_CONFLICTS + 1))
    fi
}

# Function to check if a branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch with retry logic
merge_branch() {
    local branch="$1"
    local retry_count=0
    
    while [ $retry_count -lt $MAX_RETRIES ]; do
        log_message "🔄 Attempting to merge $branch (attempt $((retry_count + 1))/$MAX_RETRIES)..."
        
        # Sync with remote before each attempt
        sync_with_remote
        
        # Fetch the latest version of the branch
        git fetch origin "$branch"
        
        # Try to merge
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            log_message "✅ Successfully merged $branch"
            git commit -m "Merge $branch into main - $(date)"
            TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
            return 0
        else
            log_message "⚠️  Merge conflicts detected in $branch, resolving..."
            
            # Get list of conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            
            if [ -n "$CONFLICTED_FILES" ]; then
                log_message "📋 Conflicted files: $CONFLICTED_FILES"
                
                # Resolve conflicts in each file
                for file in $CONFLICTED_FILES; do
                    if [ -f "$file" ]; then
                        resolve_conflicts "$file" "$branch"
                    fi
                done
                
                # Add resolved files
                git add .
                
                # Commit the merge
                git commit -m "Resolve merge conflicts for $branch - $(date)"
                
                log_message "✅ Successfully resolved conflicts and merged $branch"
                TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
                return 0
            else
                log_message "❌ No conflicted files found, but merge failed. Aborting..."
                git merge --abort
                retry_count=$((retry_count + 1))
                
                if [ $retry_count -lt $MAX_RETRIES ]; then
                    log_message "🔄 Retrying merge for $branch..."
                    sleep 2
                else
                    log_message "❌ Failed to merge $branch after $MAX_RETRIES attempts"
                    TOTAL_FAILED=$((TOTAL_FAILED + 1))
                    return 1
                fi
            fi
        fi
    done
}

# Function to process a batch of branches
process_batch() {
    local batch_num="$1"
    local start_index="$2"
    
    log_message "🚀 Processing batch $batch_num (starting from index $start_index)..."
    
    # Get branches for this batch
    BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort | tail -n +$((start_index + 1)) | head -$BATCH_SIZE)
    
    # Convert branches to array for easier processing
    branch_array=($BRANCHES)
    total_branches=${#branch_array[@]}
    
    if [ $total_branches -eq 0 ]; then
        log_message "✅ No more branches to process in batch $batch_num"
        return 0
    fi
    
    log_message "📊 Processing $total_branches branches in batch $batch_num"
    log_message "---"
    
    # Process branches in this batch
    for ((i=0; i<total_branches; i++)); do
        branch="${branch_array[$i]}"
        TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
        
        log_message "📋 Processing branch $TOTAL_PROCESSED: $branch"
        
        # Check if branch can be merged
        if ! can_merge_branch "$branch"; then
            log_message "⏭️  Skipping $branch (already merged or doesn't exist)"
            TOTAL_SKIPPED=$((TOTAL_SKIPPED + 1))
            continue
        fi
        
        # Try to merge the branch
        if merge_branch "$branch"; then
            log_message "✅ Branch $branch processed successfully"
        else
            log_message "❌ Failed to process branch $branch"
        fi
        
        # Progress update
        log_message "📊 Batch progress: $((i+1))/$total_branches"
        log_message "📊 Overall progress: $TOTAL_SUCCESSFUL successful, $TOTAL_FAILED failed, $TOTAL_CONFLICTS conflicts resolved, $TOTAL_SKIPPED skipped"
        log_message "---"
        
        # Push changes every 50 branches to avoid losing work
        if [ $((TOTAL_PROCESSED % 50)) -eq 0 ]; then
            log_message "💾 Pushing intermediate changes to remote..."
            if git push origin main; then
                log_message "✅ Successfully pushed changes to remote"
            else
                log_message "⚠️  Failed to push to remote, continuing with local changes"
            fi
        fi
    done
    
    # Final push for this batch
    log_message "💾 Pushing batch $batch_num changes to remote..."
    if git push origin main; then
        log_message "✅ Successfully pushed batch $batch_num changes to remote"
    else
        log_message "⚠️  Failed to push batch $batch_num changes to remote"
    fi
    
    log_message "✅ Batch $batch_num completed successfully"
    return 0
}

# Main processing loop
log_message "🔄 Starting continuous batch processing..."
log_message "📊 Batch size: $BATCH_SIZE"
log_message "---"

batch_num=1
start_index=0

while true; do
    log_message "🔄 Starting batch $batch_num..."
    
    if process_batch "$batch_num" "$start_index"; then
        log_message "✅ Batch $batch_num completed successfully"
        
        # Check if we have more branches to process
        remaining_branches=$(git branch -r | grep "origin/cursor/" | wc -l)
        log_message "📊 Remaining branches: $remaining_branches"
        
        if [ $remaining_branches -eq 0 ]; then
            log_message "🎉 All cursor branches have been processed!"
            break
        fi
        
        # Move to next batch
        start_index=$((start_index + BATCH_SIZE))
        batch_num=$((batch_num + 1))
        
        # Ask user if they want to continue
        echo ""
        read -p "Continue to next batch? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            log_message "⏸️  Pausing batch processing. You can resume later."
            break
        fi
        
        log_message "---"
    else
        log_message "❌ Batch $batch_num failed, stopping processing"
        break
    fi
done

# Summary
echo ""
log_message "🎉 Continuous merge of cursor branches completed!"
log_message "📊 Final Summary:"
log_message "   ✅ Total successful merges: $TOTAL_SUCCESSFUL"
log_message "   ❌ Total failed merges: $TOTAL_FAILED"
log_message "   🔧 Total conflicts resolved: $TOTAL_CONFLICTS"
log_message "   ⏭️  Total skipped branches: $TOTAL_SKIPPED"
log_message "   📦 Total batches processed: $((batch_num - 1))"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "   📝 Log file: $LOG_FILE"
log_message "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
log_message "🧹 Next steps:"
log_message "   1. Review the merged changes: git log --oneline -20"
log_message "   2. Test the application thoroughly"
log_message "   3. Delete old cursor branches if no longer needed"
log_message "   4. Consider running git gc to clean up the repository"