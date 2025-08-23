#!/bin/bash

# Production merge script for handling thousands of open pull requests
# This script processes branches in large batches with intelligent conflict resolution

set -e

echo "Starting production merge process for open pull requests..."
echo "This will process branches in large batches to handle the massive number of unmerged branches."

# Configuration - adjust these based on your system capabilities
BATCH_SIZE=100
MAX_BRANCHES=5000  # Process up to 5000 branches
MAX_CONFLICTS_PER_BATCH=50
LOG_FILE="merge_log_$(date +%Y%m%d-%H%M%S).txt"

# Get list of unmerged branches, prioritizing cursor branches
echo "Fetching unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep "cursor/" | head -$MAX_BRANCHES)

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
echo "Found $TOTAL_BRANCHES unmerged cursor branches to process"
echo "Logging to: $LOG_FILE"

# Create a temporary branch for merging
MERGE_BRANCH="production-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$MERGE_BRANCH"

echo "Created merge branch: $MERGE_BRANCH"

# Initialize counters
TOTAL_SUCCESSFUL=0
TOTAL_FAILED=0
TOTAL_SKIPPED=0
BATCH_NUMBER=1

# Log function
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

log_message "Starting production merge process"
log_message "Total branches to process: $TOTAL_BRANCHES"
log_message "Batch size: $BATCH_SIZE"

# Process branches in batches
echo "$UNMERGED_BRANCHES" | while IFS= read -r branch; do
    # Trim whitespace from branch name
    branch=$(echo "$branch" | xargs)
    
    if [ -z "$branch" ]; then
        continue
    fi
    
    # Check if we need to start a new batch
    BRANCHES_IN_BATCH=$((TOTAL_SUCCESSFUL + TOTAL_FAILED + TOTAL_SKIPPED))
    if [ $((BRANCHES_IN_BATCH % BATCH_SIZE)) -eq 0 ] && [ $BRANCHES_IN_BATCH -gt 0 ]; then
        log_message "=== Completed Batch $BATCH_NUMBER ==="
        log_message "Batch $BATCH_NUMBER Summary:"
        log_message "  Successful: $((TOTAL_SUCCESSFUL - (BATCH_NUMBER - 1) * BATCH_SIZE))"
        log_message "  Failed: $((TOTAL_FAILED - (BATCH_NUMBER - 1) * BATCH_SIZE))"
        log_message "  Skipped: $((TOTAL_SKIPPED - (BATCH_NUMBER - 1) * BATCH_SIZE))"
        
        # Commit the current batch
        if git diff --staged --quiet && git diff --quiet; then
            log_message "No changes to commit in this batch"
        else
            git add .
            git commit -m "Batch $BATCH_NUMBER: Merged $BATCH_SIZE branches - $(date)"
            log_message "Committed batch $BATCH_NUMBER"
        fi
        
        BATCH_NUMBER=$((BATCH_NUMBER + 1))
        
        # Check if we've hit too many conflicts
        if [ $TOTAL_FAILED -gt $((BATCH_NUMBER * MAX_CONFLICTS_PER_BATCH)) ]; then
            log_message "⚠️  Too many conflicts detected. Stopping batch processing."
            break
        fi
        
        # Optional: pause between batches to allow system recovery
        sleep 2
    fi
    
    log_message "Processing branch: $branch (Batch $BATCH_NUMBER)"
    
    # Check if this branch has reasonable changes
    UNMERGED_COMMITS=$(git log --oneline "origin/main..$branch" 2>/dev/null | grep -v "Merge" | wc -l || echo "0")
    TOTAL_COMMITS=$(git log --oneline "origin/main..$branch" 2>/dev/null | wc -l || echo "0")
    
    # Skip branches with too many commits or if they can't be accessed
    if [ "$UNMERGED_COMMITS" -eq 0 ] || [ "$TOTAL_COMMITS" -gt 100 ]; then
        log_message "⚠️  Skipping $branch - commits: $UNMERGED_COMMITS (unmerged), $TOTAL_COMMITS (total)"
        TOTAL_SKIPPED=$((TOTAL_SKIPPED + 1))
        continue
    fi
    
    # Try different merge strategies
    MERGE_SUCCESS=false
    
    # Strategy 1: Try regular merge with recursive strategy
    log_message "  Trying recursive merge..."
    if git merge "$branch" --no-edit --strategy=recursive -X theirs 2>/dev/null; then
        log_message "  ✓ Successfully merged $branch (recursive strategy)"
        TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
        MERGE_SUCCESS=true
    else
        # Strategy 2: Try with ours strategy
        git merge --abort 2>/dev/null || true
        log_message "  Trying ours strategy..."
        if git merge "$branch" --no-edit --strategy=recursive -X ours 2>/dev/null; then
            log_message "  ✓ Successfully merged $branch (ours strategy)"
            TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
            MERGE_SUCCESS=true
        else
            # Strategy 3: Try cherry-pick approach for small changes
            git merge --abort 2>/dev/null || true
            if [ "$UNMERGED_COMMITS" -le 15 ]; then
                log_message "  Trying cherry-pick approach..."
                # Get only non-merge commits
                COMMITS=$(git log --oneline "origin/main..$branch" 2>/dev/null | grep -v "Merge" | awk '{print $1}' | head -15)
                
                CHERRY_SUCCESS=true
                for commit in $COMMITS; do
                    if ! git cherry-pick "$commit" --no-edit 2>/dev/null; then
                        log_message "  Cherry-pick failed for commit $commit, aborting..."
                        git cherry-pick --abort 2>/dev/null || true
                        CHERRY_SUCCESS=false
                        break
                    fi
                done
                
                if [ "$CHERRY_SUCCESS" = true ]; then
                    log_message "  ✓ Successfully cherry-picked $branch"
                    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
                    MERGE_SUCCESS=true
                fi
            fi
            
            if [ "$MERGE_SUCCESS" = false ]; then
                log_message "  ✗ All merge strategies failed for $branch"
                TOTAL_FAILED=$((TOTAL_FAILED + 1))
            fi
        fi
    fi
    
    # Progress indicator
    PROCESSED=$((TOTAL_SUCCESSFUL + TOTAL_FAILED + TOTAL_SKIPPED))
    PROGRESS=$((PROCESSED * 100 / TOTAL_BRANCHES))
    log_message "  Progress: $PROGRESS% ($PROCESSED/$TOTAL_BRANCHES)"
    
done

log_message ""
log_message "=== Final Production Merge Summary ==="
log_message "Total branches processed: $((TOTAL_SUCCESSFUL + TOTAL_FAILED + TOTAL_SKIPPED))"
log_message "Successful merges: $TOTAL_SUCCESSFUL"
log_message "Failed merges: $TOTAL_FAILED"
log_message "Skipped branches: $TOTAL_SKIPPED"
log_message "Batches completed: $((BATCH_NUMBER - 1))"

echo ""
echo "=== Final Production Merge Summary ==="
echo "Total branches processed: $((TOTAL_SUCCESSFUL + TOTAL_FAILED + TOTAL_SKIPPED))"
echo "Successful merges: $TOTAL_SUCCESSFUL"
echo "Failed merges: $TOTAL_FAILED"
echo "Skipped branches: $TOTAL_SKIPPED"
echo "Batches completed: $((BATCH_NUMBER - 1))"

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To merge to main: git checkout main && git merge $MERGE_BRANCH"
echo "To push this branch: git push origin $MERGE_BRANCH"
echo "To continue resolving conflicts: git status"
echo "Log file: $LOG_FILE"

# Create a comprehensive summary file
cat > "production_merge_summary_$(date +%Y%m%d-%H%M%S).txt" << EOF
Production Merge Summary - $(date)
===================================

Total branches processed: $((TOTAL_SUCCESSFUL + TOTAL_FAILED + TOTAL_SKIPPED))
Successful merges: $TOTAL_SUCCESSFUL
Failed merges: $TOTAL_FAILED
Skipped branches: $TOTAL_SKIPPED
Batches completed: $((BATCH_NUMBER - 1))

Production merge branch: $MERGE_BRANCH
Log file: $LOG_FILE

Next steps:
1. Review the merged changes: git log --oneline origin/main..HEAD
2. Test the application thoroughly
3. Merge to main: git checkout main && git merge $MERGE_BRANCH
4. Push to main: git push origin main
5. Clean up: git branch -d $MERGE_BRANCH

Configuration used:
- Batch size: $BATCH_SIZE
- Max branches: $MAX_BRANCHES
- Max conflicts per batch: $MAX_CONFLICTS_PER_BATCH
EOF

echo "Production merge summary saved to production_merge_summary_$(date +%Y%m%d-%H%M%S).txt"
log_message "Production merge summary saved"