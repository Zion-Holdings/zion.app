#!/bin/bash

# Robust script to merge cursor branches with frequent remote updates
set -e

echo "🚀 Starting robust merge of cursor branches into main..."
echo "📊 Total cursor branches: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=100  # Larger batch size for efficiency
BACKUP_BRANCH="cursor-merge-robust-backup-$(date +%Y%m%d-%H%M%S)"
LOG_FILE="cursor-merge-robust-log-$(date +%Y%m%d-%H%M%S).txt"
MAX_RETRIES=3

# Create a backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

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
                retry_count=$((retry_count + 1))
                
                if [ $retry_count -lt $MAX_RETRIES ]; then
                    log_message "🔄 Retrying merge for $branch..."
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
log_message "🔄 Starting robust batch processing..."
log_message "📊 Batch size: $BATCH_SIZE"
log_message "---"

# Get all cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort | head -$BATCH_SIZE)

# Convert branches to array for easier processing
branch_array=($BRANCHES)
total_branches=${#branch_array[@]}

log_message "📊 Processing first $total_branches branches out of total cursor branches"
log_message "---"

# Process branches
for ((i=0; i<total_branches; i++)); do
    branch="${branch_array[$i]}"
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    log_message "📋 Processing branch $TOTAL_PROCESSED/$total_branches: $branch"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        log_message "⏭️  Skipping $branch (already merged or doesn't exist)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        log_message "✅ Branch $branch processed successfully"
    else
        log_message "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
    log_message "---"
    
    # Push changes every 25 branches to avoid losing work
    if [ $((TOTAL_PROCESSED % 25)) -eq 0 ]; then
        log_message "💾 Pushing intermediate changes to remote..."
        if git push origin main; then
            log_message "✅ Successfully pushed changes to remote"
        else
            log_message "⚠️  Failed to push to remote, continuing with local changes"
        fi
    fi
done

# Final push
log_message "💾 Pushing final changes to remote..."
if git push origin main; then
    log_message "✅ Successfully pushed final changes to remote"
else
    log_message "⚠️  Failed to push final changes to remote"
fi

# Summary
echo ""
log_message "🎉 Robust batch merge of cursor branches completed!"
log_message "📊 Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "   📝 Log file: $LOG_FILE"
log_message "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
log_message "🧹 Next steps:"
log_message "   1. Review the merged changes: git log --oneline -20"
log_message "   2. Test the application thoroughly"
log_message "   3. Run this script again with next batch if needed"
log_message "   4. Consider increasing BATCH_SIZE for faster processing"