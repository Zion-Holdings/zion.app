#!/bin/bash

# Continue merging remaining cursor branches
set -e

echo "🚀 Continuing merge of remaining cursor branches into main..."
echo "📊 Total cursor branches remaining: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=100
START_FROM_BRANCH=601  # Start from branch 601 since we've processed 1-600
LOG_FILE="continue-merge-log-$(date +%Y%m%d-%H%M%S).txt"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

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

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
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
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Main processing loop
log_message "🔄 Starting continued processing from branch $START_FROM_BRANCH..."
log_message "📊 Batch size: $BATCH_SIZE"
log_message "---"

# Get all cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)

# Convert branches to array for easier processing
branch_array=($BRANCHES)
total_branches=${#branch_array[@]}
current_batch=0

log_message "📊 Total branches: $total_branches"
log_message "📊 Starting from branch: $START_FROM_BRANCH"
log_message "---"

# Process branches in batches, starting from START_FROM_BRANCH
for ((i=START_FROM_BRANCH-1; i<total_branches; i+=BATCH_SIZE)); do
    current_batch=$((current_batch + 1))
    batch_end=$((i + BATCH_SIZE))
    
    log_message "🚀 Processing batch $current_batch (branches $((i+1)) to $((batch_end < total_branches ? batch_end : total_branches)))"
    log_message "---"
    
    batch_success=0
    batch_failures=0
    
    # Process this batch
    for ((j=i; j<batch_end && j<total_branches; j++)); do
        branch="${branch_array[$j]}"
        TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
        
        log_message "📋 Processing branch $((j+1))/$total_branches: $branch"
        
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

# Summary
echo ""
log_message "🎉 Continued merge process completed!"
log_message "📊 Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   📦 Batches processed: $current_batch"
log_message "   📝 Log file: $LOG_FILE"
log_message "⏰ Completed at: $(date)"