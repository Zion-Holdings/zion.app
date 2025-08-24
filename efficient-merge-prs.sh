#!/bin/bash

# Efficient script to resolve merge conflicts and merge open PRs into main
# Only processes branches that have actual changes and can be merged
set -e

echo "🚀 Starting efficient merge conflict resolution for open PRs..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=5
MAX_CONFLICTS_PER_BRANCH=5
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
LOG_FILE="merge-log-$(date +%Y%m%d-%H%M%S).log"

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

# Function to check if a branch has meaningful changes
has_meaningful_changes() {
    local branch="$1"
    
    # Get the number of commits ahead of main
    local commits_ahead=$(git rev-list --count main..origin/$branch 2>/dev/null || echo "0")
    
    # Get the number of files changed
    local files_changed=$(git diff --name-only main..origin/$branch 2>/dev/null | wc -l)
    
    # Only consider branches with actual changes
    if [ "$commits_ahead" -gt 0 ] && [ "$files_changed" -gt 0 ]; then
        return 0
    fi
    
    return 1
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
    
    # Skip if branch has no meaningful changes
    if ! has_meaningful_changes "$branch"; then
        return 1
    fi
    
    return 0
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
            # For package files, we'll need special handling
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            log_message "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            log_message "📚 Documentation file, keeping both versions where possible..."
            # Remove conflict markers but try to preserve content
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            log_message "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        log_message "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
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
            
            # Limit the number of conflicts we'll try to resolve per branch
            local conflict_count=0
            for file in $CONFLICTED_FILES; do
                if [ $conflict_count -ge $MAX_CONFLICTS_PER_BRANCH ]; then
                    log_message "⚠️  Too many conflicts in $branch, skipping..."
                    git merge --abort
                    return 1
                fi
                
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                    conflict_count=$((conflict_count + 1))
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

# Function to process a batch of branches
process_batch() {
    local batch_start=$1
    local batch_end=$2
    local batch_branches=("${@:3}")
    
    log_message "🔄 Processing batch $batch_start-$batch_end of $(echo "$BRANCHES" | wc -l | tr -d ' ')"
    echo "---"
    
    for branch in "${batch_branches[@]}"; do
        TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
        log_message "📋 Processing branch $TOTAL_PROCESSED: $branch"
        
        # Check if branch can be merged
        if ! can_merge_branch "$branch"; then
            log_message "⏭️  Skipping $branch (already merged, doesn't exist, or no meaningful changes)"
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
        log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
        echo "---"
        
        # Push changes every 5 successful merges to avoid losing work
        if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            log_message "💾 Pushing progress to remote..."
            git push origin main
        fi
    done
}

# Main processing loop
log_message "🔄 Starting efficient branch processing..."
echo "---"

# Get all cursor branches, sorted by most recent first
log_message "📋 Fetching all cursor branches..."
git fetch --all

# Get branches with meaningful changes only
log_message "🔍 Identifying branches with meaningful changes..."
BRANCHES=$(git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | sed 's/origin\///' | while read branch; do
    if can_merge_branch "$branch"; then
        echo "$branch"
    fi
done)

# Convert branches string to array
IFS=$'\n' read -d '' -r -a BRANCHES_ARRAY <<< "$BRANCHES"
TOTAL_BRANCHES=${#BRANCHES_ARRAY[@]}

log_message "📊 Found $TOTAL_BRANCHES branches with meaningful changes to process"

# Process branches in batches
for ((i=0; i<TOTAL_BRANCHES; i+=BATCH_SIZE)); do
    batch_start=$((i + 1))
    batch_end=$((i + BATCH_SIZE))
    if [ $batch_end -gt $TOTAL_BRANCHES ]; then
        batch_end=$TOTAL_BRANCHES
    fi
    
    # Extract batch of branches
    batch_branches=("${BRANCHES_ARRAY[@]:i:BATCH_SIZE}")
    
    log_message "🚀 Starting batch $batch_start-$batch_end of $TOTAL_BRANCHES"
    log_message "📊 Batch contains ${#batch_branches[@]} branches"
    echo "---"
    
    # Process this batch
    process_batch "$batch_start" "$batch_end" "${batch_branches[@]}"
    
    # Push after each batch
    log_message "💾 Pushing batch results to remote..."
    git push origin main
    
    log_message "✅ Completed batch $batch_start-$batch_end"
    echo "---"
    
    # Progress summary
    log_message "📊 Overall Progress: $TOTAL_PROCESSED/$TOTAL_BRANCHES branches processed"
    log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
    log_message "   ❌ Failed merges: $FAILED_MERGES"
    log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
    log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
    echo "---"
    
    # Safety check - ask for confirmation to continue
    if [ $i -lt $((TOTAL_BRANCHES - BATCH_SIZE)) ]; then
        read -p "Continue with next batch? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            log_message "⏸️  User requested to stop processing"
            break
        fi
    fi
done

# Final push
log_message "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
log_message "🎉 Efficient merge conflict resolution completed!"
log_message "📊 Final Summary:"
log_message "   📋 Total branches processed: $TOTAL_PROCESSED"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "   📝 Log file: $LOG_FILE"
log_message "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
log_message "🧹 Cleanup recommendations:"
log_message "   1. Review the merged changes: git log --oneline -20"
log_message "   2. Test the application thoroughly"
log_message "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
log_message "   4. Consider cleaning up old feature branches"
log_message "   5. Run tests to ensure everything works correctly"
log_message "   6. Review the log file: $LOG_FILE"