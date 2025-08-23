#!/bin/bash

# Bulk merge script for handling thousands of open pull requests
# This script processes branches in batches with intelligent conflict resolution

set -e

echo "Starting bulk merge process for open pull requests..."
echo "This will process branches in batches to handle the large number of unmerged branches."

# Configuration
BATCH_SIZE=50
MAX_CONFLICTS_PER_BATCH=10
MAX_TOTAL_BRANCHES=1000  # Limit to prevent overwhelming the system

# Get list of unmerged branches, prioritizing cursor branches
echo "Fetching unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep "cursor/" | head -$MAX_TOTAL_BRANCHES)

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
echo "Found $TOTAL_BRANCHES unmerged cursor branches to process"

# Create a temporary branch for merging
MERGE_BRANCH="bulk-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$MERGE_BRANCH"

echo "Created merge branch: $MERGE_BRANCH"

# Initialize counters
TOTAL_SUCCESSFUL=0
TOTAL_FAILED=0
TOTAL_SKIPPED=0
BATCH_NUMBER=1

# Process branches in batches
echo "$UNMERGED_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    # Check if we need to start a new batch
    BRANCHES_IN_BATCH=$((TOTAL_SUCCESSFUL + TOTAL_FAILED + TOTAL_SKIPPED))
    if [ $((BRANCHES_IN_BATCH % BATCH_SIZE)) -eq 0 ] && [ $BRANCHES_IN_BATCH -gt 0 ]; then
        echo ""
        echo "=== Completed Batch $BATCH_NUMBER ==="
        echo "Batch $BATCH_NUMBER Summary:"
        echo "  Successful: $((TOTAL_SUCCESSFUL - (BATCH_NUMBER - 1) * BATCH_SIZE))"
        echo "  Failed: $((TOTAL_FAILED - (BATCH_NUMBER - 1) * BATCH_SIZE))"
        echo "  Skipped: $((TOTAL_SKIPPED - (BATCH_NUMBER - 1) * BATCH_SIZE))"
        echo ""
        
        # Commit the current batch
        if git diff --staged --quiet && git diff --quiet; then
            echo "No changes to commit in this batch"
        else
            git add .
            git commit -m "Batch $BATCH_NUMBER: Merged $BATCH_SIZE branches"
            echo "Committed batch $BATCH_NUMBER"
        fi
        
        BATCH_NUMBER=$((BATCH_NUMBER + 1))
        
        # Check if we've hit too many conflicts
        if [ $TOTAL_FAILED -gt $((BATCH_NUMBER * MAX_CONFLICTS_PER_BATCH)) ]; then
            echo "⚠️  Too many conflicts detected. Stopping batch processing."
            break
        fi
    fi
    
    echo "Processing branch: $branch (Batch $BATCH_NUMBER)"
    
    # Check if this branch has reasonable changes
    COMMIT_COUNT=$(git log --oneline origin/main.."$branch" 2>/dev/null | wc -l || echo "0")
    
    # Skip branches with too many commits or if they can't be accessed
    if [ "$COMMIT_COUNT" -gt 100 ] || [ "$COMMIT_COUNT" -eq 0 ]; then
        echo "⚠️  Skipping $branch - commits: $COMMIT_COUNT"
        TOTAL_SKIPPED=$((TOTAL_SKIPPED + 1))
        continue
    fi
    
    # Try different merge strategies
    MERGE_SUCCESS=false
    
    # Strategy 1: Try regular merge with recursive strategy
    echo "  Trying recursive merge..."
    if git merge "$branch" --no-edit --strategy=recursive -X theirs 2>/dev/null; then
        echo "  ✓ Successfully merged $branch (recursive strategy)"
        TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
        MERGE_SUCCESS=true
    else
        # Strategy 2: Try with ours strategy
        git merge --abort 2>/dev/null || true
        echo "  Trying ours strategy..."
        if git merge "$branch" --no-edit --strategy=recursive -X ours 2>/dev/null; then
            echo "  ✓ Successfully merged $branch (ours strategy)"
            TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
            MERGE_SUCCESS=true
        else
            # Strategy 3: Try cherry-pick approach for small changes
            git merge --abort 2>/dev/null || true
            if [ "$COMMIT_COUNT" -le 10 ]; then
                echo "  Trying cherry-pick approach..."
                COMMITS=$(git log --oneline origin/main.."$branch" 2>/dev/null | awk '{print $1}' | head -10)
                
                CHERRY_SUCCESS=true
                for commit in $COMMITS; do
                    if ! git cherry-pick "$commit" --no-edit 2>/dev/null; then
                        echo "  Cherry-pick failed for commit $commit, aborting..."
                        git cherry-pick --abort 2>/dev/null || true
                        CHERRY_SUCCESS=false
                        break
                    fi
                done
                
                if [ "$CHERRY_SUCCESS" = true ]; then
                    echo "  ✓ Successfully cherry-picked $branch"
                    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
                    MERGE_SUCCESS=true
                fi
            fi
            
            if [ "$MERGE_SUCCESS" = false ]; then
                echo "  ✗ All merge strategies failed for $branch"
                TOTAL_FAILED=$((TOTAL_FAILED + 1))
            fi
        fi
    fi
    
    # Progress indicator
    PROCESSED=$((TOTAL_SUCCESSFUL + TOTAL_FAILED + TOTAL_SKIPPED))
    PROGRESS=$((PROCESSED * 100 / TOTAL_BRANCHES))
    echo "  Progress: $PROGRESS% ($PROCESSED/$TOTAL_BRANCHES)"
    
done

echo ""
echo "=== Final Merge Summary ==="
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

# Create a summary file
cat > "merge_summary_$(date +%Y%m%d-%H%M%S).txt" << EOF
Bulk Merge Summary - $(date)
================================

Total branches processed: $((TOTAL_SUCCESSFUL + TOTAL_FAILED + TOTAL_SKIPPED))
Successful merges: $TOTAL_SUCCESSFUL
Failed merges: $TOTAL_FAILED
Skipped branches: $TOTAL_SKIPPED
Batches completed: $((BATCH_NUMBER - 1))

Merge branch: $MERGE_BRANCH

Next steps:
1. Review the merged changes: git log --oneline origin/main..HEAD
2. Test the application
3. Merge to main: git checkout main && git merge $MERGE_BRANCH
4. Push to main: git push origin main
EOF

echo "Merge summary saved to merge_summary_$(date +%Y%m%d-%H%M%S).txt"