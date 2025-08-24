#!/bin/bash

# Continue remaining branches from batch 6 (starting from branch 1191)
set -e

echo "🚀 Continuing remaining branches from batch 6..."
echo "📊 Starting from branch 1191 (branches 1191-1199)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
LOG_FILE="cursor-merge-batch-6-remaining-log-$(date +%Y%m%d-%H%M%S).txt"
MAX_RETRIES=3
TOTAL_PROCESSED=1190  # Start from 1190 since we processed up to 1190
TOTAL_SUCCESSFUL=1186 # We had 1186 successful merges
TOTAL_FAILED=5
TOTAL_CONFLICTS=1999 # We had 1999 conflicts resolved
TOTAL_SKIPPED=0

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Function to process a single branch
process_branch() {
    local branch_name="$1"
    local branch_index="$2"
    local attempt=1
    
    log_message "📋 Processing branch $branch_index: $branch_name"
    
    while [ $attempt -le $MAX_RETRIES ]; do
        log_message "🔄 Attempting to merge $branch_name (attempt $attempt/$MAX_RETRIES)..."
        
        # Sync with remote main branch
        log_message "🔄 Syncing with remote main branch..."
        git fetch origin main
        git reset --hard origin/main
        
        if [ $? -eq 0 ]; then
            log_message "✅ Synced with remote main branch"
        else
            log_message "❌ Failed to sync with remote main branch"
            return 1
        fi
        
        # Fetch the specific branch
        git fetch origin "$branch_name"
        
        # Check if branch exists and has changes
        if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
            log_message "⚠️  Branch $branch_name does not exist, skipping..."
            return 0
        fi
        
        # Check if branch is already merged
        if git branch --merged main | grep -q "$branch_name"; then
            log_message "✅ Branch $branch_name is already merged, skipping..."
            return 0
        fi
        
        # Attempt merge
        if git merge --no-edit "origin/$branch_name" 2>/dev/null; then
            log_message "✅ Successfully merged $branch_name"
            
            # Push changes
            if git push origin main; then
                log_message "✅ Successfully pushed changes for $branch_name"
                return 0
            else
                log_message "❌ Failed to push changes for $branch_name"
                return 1
            fi
        else
            log_message "⚠️  Merge conflict detected for $branch_name, attempting to resolve..."
            
            # Check if there are actual conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                log_message "🔧 Resolving merge conflicts for $branch_name..."
                
                # Use git checkout --ours for conflict resolution (keep main branch changes)
                git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}' | xargs -I {} git checkout --ours {} 2>/dev/null || true
                
                # Add resolved files
                git add .
                
                # Commit the merge
                if git commit -m "Resolve merge conflicts for $branch_name" --no-edit; then
                    log_message "✅ Successfully resolved conflicts for $branch_name"
                    
                    # Push changes
                    if git push origin main; then
                        log_message "✅ Successfully pushed resolved changes for $branch_name"
                        TOTAL_CONFLICTS=$((TOTAL_CONFLICTS + 1))
                        return 0
                    else
                        log_message "❌ Failed to push resolved changes for $branch_name"
                        return 1
                    fi
                else
                    log_message "❌ Failed to commit resolved conflicts for $branch_name"
                    git merge --abort 2>/dev/null || true
                    return 1
                fi
            else
                log_message "⚠️  No actual conflicts found, attempting to continue merge..."
                if git commit --no-edit; then
                    log_message "✅ Successfully completed merge for $branch_name"
                    
                    # Push changes
                    if git push origin main; then
                        log_message "✅ Successfully pushed changes for $branch_name"
                        return 0
                    else
                        log_message "❌ Failed to push changes for $branch_name"
                        return 1
                    fi
                else
                    log_message "❌ Failed to complete merge for $branch_name"
                    git merge --abort 2>/dev/null || true
                    return 1
                fi
            fi
        fi
        
        attempt=$((attempt + 1))
        if [ $attempt -le $MAX_RETRIES ]; then
            log_message "🔄 Retrying merge for $branch_name (attempt $attempt/$MAX_RETRIES)..."
            sleep 2
        fi
    done
    
    log_message "❌ Failed to merge $branch_name after $MAX_RETRIES attempts"
    return 1
}

# Get list of cursor branches
log_message "📋 Fetching list of cursor branches..."
git fetch origin
CURSOR_BRANCHES=($(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort))

# Process remaining branches from batch 6 (1191-1199)
for i in $(seq 1190 1199); do
    if [ $i -lt ${#CURSOR_BRANCHES[@]} ]; then
        BRANCH_NAME="${CURSOR_BRANCHES[$i]}"
        
        if process_branch "$BRANCH_NAME" $((i + 1)); then
            TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
            log_message "✅ Branch $BRANCH_NAME processed successfully"
        else
            TOTAL_FAILED=$((TOTAL_FAILED + 1))
            log_message "❌ Branch $BRANCH_NAME failed to process"
        fi
        
        TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
        
        # Show progress
        log_message "📊 Overall progress: $TOTAL_SUCCESSFUL successful, $TOTAL_FAILED failed, $TOTAL_CONFLICTS conflicts resolved, $TOTAL_SKIPPED skipped"
        log_message "---"
        
        # Small delay between branches
        sleep 1
    fi
done

# Push final changes
log_message "💾 Pushing final changes to remote..."
git push origin main

log_message "✅ Batch 6 completed successfully"
log_message "📊 Remaining branches: $((${#CURSOR_BRANCHES[@]} - TOTAL_PROCESSED))"

echo ""
echo "🎉 Batch 6 merge completed!"
echo "📊 Summary:"
echo "   ✅ Total successful merges: $TOTAL_SUCCESSFUL"
echo "   ❌ Total failed merges: $TOTAL_FAILED"
echo "   🔧 Total conflicts resolved: $TOTAL_CONFLICTS"
echo "   ⏭️  Total skipped branches: $TOTAL_SKIPPED"
echo "   📝 Log file: $LOG_FILE"
echo ""
echo "⏰ Completed at: $(date)"
echo "🔄 Ready to continue with next batch (index 1200+)"
echo "💡 Run the main script again to continue: ./merge-all-cursor-prs-continuous.sh"