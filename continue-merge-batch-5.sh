#!/bin/bash

# Script to continue merging cursor branches from branch 401
set -e

echo "🚀 Continuing merge process for batch 5 (branches 401-500)..."
echo "📊 Starting from branch 401 (already processed 400 branches)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=100
MAX_RETRIES=3
LOG_FILE="continue-merge-batch-5-log-$(date +%Y%m%d-%H%M%S).txt"

# Initialize counters (starting from where we left off)
SUCCESSFUL_MERGES=400  # Already processed 400
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=400   # Already processed 400

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
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
        
        # Remove conflict markers
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        log_message "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
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
    
    log_message "🔄 Attempting to merge $branch..."
    
    while [ $retry_count -lt $MAX_RETRIES ]; do
        # Fetch the latest version of the branch
        git fetch origin "$branch"
        
        # Try to merge
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            log_message "✅ Successfully merged $branch"
            git commit -m "Merge $branch into main - $(date)"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "⚠️  Merge conflicts detected in $branch (attempt $((retry_count + 1))/$MAX_RETRIES), resolving..."
            
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
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                log_message "❌ No conflicted files found, but merge failed. Aborting..."
                git merge --abort
                retry_count=$((retry_count + 1))
                
                if [ $retry_count -lt $MAX_RETRIES ]; then
                    log_message "🔄 Retrying merge for $branch (attempt $((retry_count + 1))/$MAX_RETRIES)..."
                    sleep 2
                else
                    log_message "❌ Failed to merge $branch after $MAX_RETRIES attempts"
                    FAILED_MERGES=$((FAILED_MERGES + 1))
                    return 1
                fi
            fi
        fi
    done
}

# Main processing loop
log_message "🔄 Starting batch 5 branch processing..."
log_message "📊 Batch size: $BATCH_SIZE"
log_message "📊 Starting from branch: $TOTAL_PROCESSED"
log_message "---"

# Get all cursor branches (skip the first 400 we already processed)
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort | tail -n +401)

# Convert branches to array for easier processing
branch_array=($BRANCHES)
total_branches=${#branch_array[@]}
current_batch=5

log_message "📊 Remaining branches to process: $total_branches"
log_message "---"

# Process branches in batches
for ((i=0; i<total_branches; i+=BATCH_SIZE)); do
    current_batch=$((current_batch + 1))
    batch_end=$((i + BATCH_SIZE))
    
    log_message "🚀 Processing batch $current_batch (branches $((TOTAL_PROCESSED + i + 1)) to $((TOTAL_PROCESSED + (batch_end < total_branches ? batch_end : total_branches))))"
    log_message "---"
    
    batch_success=0
    batch_failures=0
    
    # Process this batch
    for ((j=i; j<batch_end && j<total_branches; j++)); do
        branch="${branch_array[$j]}"
        TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
        
        log_message "📋 Processing branch $TOTAL_PROCESSED: $branch"
        
        # Check if branch can be merged
        if ! can_merge_branch "$branch"; then
            log_message "⏭️  Skipping $branch (already merged or doesn't exist)"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
            continue
        fi
        
        # Try to merge the branch
        if merge_branch "$branch"; then
            log_message "✅ Branch $branch processed successfully"
            batch_success=$((batch_success + 1))
        else
            log_message "❌ Failed to process branch $branch"
            batch_failures=$((batch_failures + 1))
        fi
        
        # Progress update
        log_message "📊 Batch progress: $batch_success successful, $batch_failures failed"
        log_message "📊 Overall progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
        log_message "---"
    done
    
    # Push changes after each batch
    log_message "💾 Pushing batch changes to remote..."
    git push origin main
    
    log_message "✅ Batch $current_batch completed: $batch_success successful, $batch_failures failed"
    log_message "---"
    
    # Ask user if they want to continue
    if [ $((i + BATCH_SIZE)) -lt $total_branches ]; then
        echo ""
        read -p "Continue to next batch? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            log_message "⏸️  Pausing batch processing. You can resume later."
            break
        fi
    fi
done

# Final push
log_message "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
log_message "🎉 Batch 5 merge process completed!"
log_message "📊 Summary:"
log_message "   ✅ Total successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Total failed merges: $FAILED_MERGES"
log_message "   🔧 Total conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Total skipped branches: $SKIPPED_BRANCHES"
log_message "   📦 Total batches processed: $current_batch"
log_message "   📝 Log file: $LOG_FILE"
log_message "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
log_message "🧹 Cleanup recommendations:"
log_message "   1. Review the merged changes: git log --oneline -20"
log_message "   2. Test the application thoroughly"
log_message "   3. Consider cleaning up old feature branches"
log_message "   4. Run the script again to process remaining branches if needed"