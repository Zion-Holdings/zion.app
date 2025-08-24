#!/bin/bash

# Automated continuation script for the comprehensive merge process
# This script will automatically continue merging branches with minimal intervention

set -e

echo "Starting automated merge continuation..."

# Configuration
LOG_FILE="auto_merge_log_$(date +%Y%m%d-%H%M%S).txt"
SKIP_FILE="auto_skipped_branches.txt"
MAX_ATTEMPTS=3

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Initialize log files
echo "=== Auto Merge Log Started $(date) ===" > "$LOG_FILE"
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
    local commit_count=$(git log --oneline HEAD.."$branch" 2>/dev/null | wc -l)
    if [[ "$commit_count" -gt 50 ]]; then
        return 1
    fi
    
    return 0
}

# Function to automatically resolve common conflicts
auto_resolve_conflicts() {
    local branch_name="$1"
    
    log_message "  Auto-resolving conflicts for $branch_name..."
    
    # Get list of conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    for file in $conflicted_files; do
        log_message "    Resolving conflict in: $file"
        
        # Check if file was deleted in incoming branch
        if git ls-files --deleted | grep -q "^$file$"; then
            log_message "      File $file was deleted, removing..."
            git rm "$file"
            continue
        fi
        
        # Check if file was added in incoming branch
        if ! git ls-files --error-unmatch "$file" 2>/dev/null; then
            log_message "      File $file was added, accepting..."
            git add "$file"
            continue
        fi
        
        # For content conflicts, try to accept incoming changes
        if [[ -f "$file" ]]; then
            # Check if it's a simple conflict that can be auto-resolved
            if grep -q "<<<<<<< HEAD" "$file"; then
                log_message "      Auto-resolving content conflict in $file..."
                # Try to accept incoming changes
                git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null
                git add "$file"
            else
                log_message "      No conflict markers found in $file, adding..."
                git add "$file"
            fi
        fi
    done
}

# Function to merge a single branch with automatic conflict resolution
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
    local attempts=0
    
    while [[ $attempts -lt $MAX_ATTEMPTS && "$merge_success" = false ]]; do
        ((attempts++))
        log_message "  Attempt $attempts: Trying merge strategy..."
        
        # Strategy 1: Regular merge with recursive strategy
        if git merge "$branch_name" --no-edit --strategy=recursive -X theirs 2>/dev/null; then
            log_message "  ✓ Successfully merged $branch_name (recursive strategy)"
            merge_success=true
            break
        else
            log_message "  Recursive merge failed, trying alternative strategies..."
            git merge --abort 2>/dev/null || true
            
            # Strategy 2: Ours strategy
            if git merge "$branch_name" --no-edit --strategy=recursive -X ours 2>/dev/null; then
                log_message "  ✓ Successfully merged $branch_name (ours strategy)"
                merge_success=true
                break
            else
                # Strategy 3: Auto-resolve conflicts and continue
                git merge --abort 2>/dev/null || true
                log_message "  Trying auto-conflict resolution..."
                
                if git merge "$branch_name" --no-edit 2>/dev/null; then
                    log_message "  ✓ Successfully merged $branch_name (auto-resolved conflicts)"
                    merge_success=true
                    break
                else
                    # Auto-resolve conflicts
                    auto_resolve_conflicts "$branch_name"
                    
                    # Try to commit the merge
                    if git commit --no-edit 2>/dev/null; then
                        log_message "  ✓ Successfully merged $branch_name (manual conflict resolution)"
                        merge_success=true
                        break
                    else
                        log_message "  ✗ Auto-conflict resolution failed, aborting..."
                        git merge --abort 2>/dev/null || true
                    fi
                fi
            fi
        fi
        
        # Add delay between attempts
        sleep 1
    done
    
    if [[ "$merge_success" = true ]]; then
        log_message "  Branch $branch_name merged successfully"
        return 0
    else
        log_message "  ✗ All merge strategies failed for $branch_name after $MAX_ATTEMPTS attempts"
        return 1
    fi
}

# Main execution
log_message "Fetching all remote branches..."
git fetch --all

# Get list of unmerged branches, filtered and sorted
log_message "Getting list of unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep -v "HEAD" | grep -E "(cursor|codex)" | sort)

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
log_message "Found $TOTAL_BRANCHES unmerged branches to process"

# Process branches automatically
successful_merges=0
failed_merges=0
processed_count=0

for branch in $UNMERGED_BRANCHES; do
    log_message ""
    log_message "=== Processing Branch $((processed_count + 1)) / $TOTAL_BRANCHES ==="
    
    # Try to merge
    if merge_branch "$branch"; then
        ((successful_merges++))
        log_message "✓ Successfully merged branch $((processed_count + 1))"
    else
        ((failed_merges++))
        log_message "✗ Failed to merge branch $((processed_count + 1))"
    fi
    
    ((processed_count++))
    
    # Progress indicator
    if [ $((processed_count % 5)) -eq 0 ]; then
        log_message ""
        log_message "=== Progress Update ==="
        log_message "Processed: $processed_count / $TOTAL_BRANCHES"
        log_message "Successful: $successful_merges"
        log_message "Failed: $failed_merges"
        log_message "Success Rate: $(( (successful_merges * 100) / processed_count ))%"
        log_message ""
        
        # Commit progress periodically
        if [ $((processed_count % 10)) -eq 0 ]; then
            log_message "Committing progress..."
            git add -A
            git commit -m "Auto-merge progress: $processed_count branches processed - $(date)" || true
        fi
    fi
    
    # Add small delay to avoid overwhelming the system
    sleep 1
done

# Final summary
log_message ""
log_message "=== Final Auto-Merge Summary ==="
log_message "Total branches processed: $processed_count"
log_message "Total successful merges: $successful_merges"
log_message "Total failed merges: $failed_merges"
log_message "Success rate: $(( (successful_merges * 100) / processed_count ))%"

log_message ""
log_message "Current branch: $CURRENT_BRANCH"
log_message "To merge to main: git checkout main && git merge $CURRENT_BRANCH"
log_message "To push this branch: git push origin $CURRENT_BRANCH"

log_message ""
log_message "Log file: $LOG_FILE"
log_message "Skipped branches: $SKIP_FILE"

echo ""
echo "=== Final Auto-Merge Summary ==="
echo "Total branches processed: $processed_count"
echo "Total successful merges: $successful_merges"
echo "Total failed merges: $failed_merges"
echo "Success rate: $(( (successful_merges * 100) / processed_count ))%"
echo ""
echo "Current branch: $CURRENT_BRANCH"
echo "Log file: $LOG_FILE"
echo "Skipped branches: $SKIP_FILE"