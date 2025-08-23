#!/bin/bash

# Continuation script for the comprehensive merge process
# This script continues from the current merge branch

set -e

echo "Continuing comprehensive merge process from current branch..."

# Configuration
BATCH_SIZE=5
MAX_CONFLICTS_PER_BATCH=2
LOG_FILE="merge_continuation_log_$(date +%Y%m%d-%H%M%S).txt"
SKIP_FILE="skipped_branches_continuation.txt"

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Initialize log files
echo "=== Merge Continuation Log Started $(date) ===" > "$LOG_FILE"
echo "Current branch: $CURRENT_BRANCH" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"

# Function to log messages
log_message() {
    local message="$1"
    echo "$message"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" >> "$LOG_FILE"
}

# Function to check if branch is worth merging
is_branch_worth_merging() {
    local branch="$1"
    
    # Skip backup and temporary branches
    if [[ "$branch" =~ backup|temp|test|merge|systematic|comprehensive ]]; then
        return 1
    fi
    
    # Skip branches with very old commits (older than 6 months)
    local last_commit_date=$(git log -1 --format=%cd --date=short "origin/$branch" 2>/dev/null)
    if [[ -z "$last_commit_date" ]]; then
        return 1
    fi
    
    # Convert date to timestamp for comparison
    local commit_timestamp=$(date -d "$last_commit_date" +%s 2>/dev/null)
    local six_months_ago=$(date -d "6 months ago" +%s 2>/dev/null)
    
    if [[ "$commit_timestamp" -lt "$six_months_ago" ]]; then
        return 1
    fi
    
    # Check commit count - skip if too many commits
    local commit_count=$(git log --oneline HEAD.."origin/$branch" 2>/dev/null | wc -l)
    if [[ "$commit_count" -gt 50 ]]; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch with conflict resolution
merge_branch() {
    local branch="$1"
    local branch_name=$(echo "$branch" | sed 's/origin\///')
    
    log_message "Processing branch: $branch_name"
    
    # Check if branch exists and is worth merging
    if ! git ls-remote --heads origin "$branch_name" | grep -q "$branch_name"; then
        log_message "⚠️  Branch $branch_name not found, skipping..."
        return 1
    fi
    
    if ! is_branch_worth_merging "$branch_name"; then
        log_message "⚠️  Branch $branch_name not worth merging, skipping..."
        echo "$branch_name" >> "$SKIP_FILE"
        return 1
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "$branch_name" HEAD 2>/dev/null; then
        log_message "  ✓ Branch $branch_name already merged, skipping..."
        return 0
    fi
    
    # Fetch the branch
    git fetch origin "$branch_name:$branch_name"
    
    # Get commit count and date
    local commit_count=$(git log --oneline HEAD.."$branch_name" 2>/dev/null | wc -l)
    local last_commit_date=$(git log -1 --format=%cd --date=short "$branch_name" 2>/dev/null)
    
    log_message "  Commits ahead: $commit_count, Last commit: $last_commit_date"
    
    # Try different merge strategies
    local merge_success=false
    
    # Strategy 1: Regular merge with recursive strategy
    log_message "  Trying recursive merge strategy..."
    if git merge "$branch_name" --no-edit --strategy=recursive -X theirs 2>/dev/null; then
        log_message "  ✓ Successfully merged $branch_name (recursive strategy)"
        merge_success=true
    else
        log_message "  Recursive merge failed, trying alternative strategies..."
        git merge --abort 2>/dev/null || true
        
        # Strategy 2: Ours strategy
        if git merge "$branch_name" --no-edit --strategy=recursive -X ours 2>/dev/null; then
            log_message "  ✓ Successfully merged $branch_name (ours strategy)"
            merge_success=true
        else
            # Strategy 3: Cherry-pick approach
            git merge --abort 2>/dev/null || true
            log_message "  Trying cherry-pick approach..."
            
            local commits=$(git log --oneline HEAD.."$branch_name" 2>/dev/null | awk '{print $1}')
            local cherry_success=true
            
            for commit in $commits; do
                if ! git cherry-pick "$commit" --no-edit 2>/dev/null; then
                    log_message "  Cherry-pick failed for commit $commit, aborting..."
                    git cherry-pick --abort 2>/dev/null || true
                    cherry_success=false
                    break
                fi
            done
            
            if [[ "$cherry_success" = true ]]; then
                log_message "  ✓ Successfully cherry-picked $branch_name"
                merge_success=true
            else
                log_message "  ✗ All merge strategies failed for $branch_name"
                return 1
            fi
        fi
    fi
    
    if [[ "$merge_success" = true ]]; then
        log_message "  Branch $branch_name merged successfully"
        return 0
    fi
    
    return 1
}

# Main execution
log_message "Fetching all remote branches..."
git fetch --all

# Get list of unmerged branches, filtered and sorted
log_message "Getting list of unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep -v "HEAD" | grep -E "(cursor|codex)" | sort)

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
log_message "Found $TOTAL_BRANCHES unmerged branches to process"
log_message "Processing in batches of $BATCH_SIZE..."

# Process branches in batches
batch_num=1
successful_merges=0
failed_merges=0
conflict_count=0
processed_count=0

for branch in $UNMERGED_BRANCHES; do
    log_message ""
    log_message "=== Batch $batch_num ==="
    
    # Try to merge
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
        ((conflict_count++))
    fi
    
    ((processed_count++))
    
    # Check if we should start a new batch
    if [ $((successful_merges + failed_merges)) -eq $BATCH_SIZE ]; then
        log_message ""
        log_message "=== Batch $batch_num Complete ==="
        log_message "Successful merges: $successful_merges"
        log_message "Failed merges: $failed_merges"
        log_message "Total processed: $((successful_merges + failed_merges))"
        log_message "Progress: $processed_count / $TOTAL_BRANCHES"
        
        # If too many conflicts, commit current progress and start fresh
        if [ $conflict_count -ge $MAX_CONFLICTS_PER_BATCH ]; then
            log_message "Too many conflicts in this batch, committing progress..."
            git add -A
            git commit -m "Batch $batch_num merge progress - $(date)" || true
            conflict_count=0
        fi
        
        # Reset counters for next batch
        successful_merges=0
        failed_merges=0
        ((batch_num++))
        
        # Add delay between batches
        sleep 2
    fi
    
    # Progress indicator
    if [ $((processed_count % 10)) -eq 0 ]; then
        log_message "Progress: $processed_count / $TOTAL_BRANCHES branches processed"
    fi
done

# Final summary
log_message ""
log_message "=== Final Merge Summary ==="
log_message "Total batches processed: $((batch_num - 1))"
log_message "Total successful merges: $successful_merges"
log_message "Total failed merges: $failed_merges"
log_message "Total branches processed: $processed_count"

log_message ""
log_message "Current branch: $CURRENT_BRANCH"
log_message "To merge to main: git checkout main && git merge $CURRENT_BRANCH"
log_message "To push this branch: git push origin $CURRENT_BRANCH"
log_message "To continue resolving conflicts: git status"

log_message ""
log_message "Log file: $LOG_FILE"
log_message "Skipped branches: $SKIP_FILE"

echo ""
echo "=== Final Merge Summary ==="
echo "Total batches processed: $((batch_num - 1))"
echo "Total successful merges: $successful_merges"
echo "Total failed merges: $failed_merges"
echo "Total branches processed: $processed_count"
echo ""
echo "Current branch: $CURRENT_BRANCH"
echo "Log file: $LOG_FILE"
echo "Skipped branches: $SKIP_FILE"