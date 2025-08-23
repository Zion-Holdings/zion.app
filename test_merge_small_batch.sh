#!/bin/bash

# Test script to merge a small batch of branches first
# This validates the merge approach before running the full bulk merge

set -e

echo "Starting test merge with small batch..."

# Configuration - very conservative for testing
BATCH_SIZE=5
MAX_BRANCHES=10

# Get list of unmerged branches, prioritizing cursor branches with few commits
echo "Fetching unmerged branches for testing..."
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep "cursor/" | head -$MAX_BRANCHES)

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
echo "Found $TOTAL_BRANCHES unmerged cursor branches for testing"

# Create a temporary branch for merging
MERGE_BRANCH="test-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$MERGE_BRANCH"

echo "Created test merge branch: $MERGE_BRANCH"

# Initialize counters
SUCCESSFUL=0
FAILED=0
SKIPPED=0

# Process branches
echo "$UNMERGED_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    echo ""
    echo "=== Processing branch: $branch ==="
    
    # Check if this branch has reasonable changes
    COMMIT_COUNT=$(git log --oneline origin/main.."$branch" 2>/dev/null | wc -l || echo "0")
    echo "Commits ahead: $COMMIT_COUNT"
    
    # Skip branches with too many commits or if they can't be accessed
    if [ "$COMMIT_COUNT" -gt 20 ] || [ "$COMMIT_COUNT" -eq 0 ]; then
        echo "⚠️  Skipping $branch - commits: $COMMIT_COUNT"
        SKIPPED=$((SKIPPED + 1))
        continue
    fi
    
    # Try different merge strategies
    MERGE_SUCCESS=false
    
    # Strategy 1: Try regular merge with recursive strategy
    echo "Trying recursive merge..."
    if git merge "$branch" --no-edit --strategy=recursive -X theirs 2>/dev/null; then
        echo "✓ Successfully merged $branch (recursive strategy)"
        SUCCESSFUL=$((SUCCESSFUL + 1))
        MERGE_SUCCESS=true
    else
        # Strategy 2: Try with ours strategy
        git merge --abort 2>/dev/null || true
        echo "Trying ours strategy..."
        if git merge "$branch" --no-edit --strategy=recursive -X ours 2>/dev/null; then
            echo "✓ Successfully merged $branch (ours strategy)"
            SUCCESSFUL=$((SUCCESSFUL + 1))
            MERGE_SUCCESS=true
        else
            # Strategy 3: Try cherry-pick approach for very small changes
            git merge --abort 2>/dev/null || true
            if [ "$COMMIT_COUNT" -le 5 ]; then
                echo "Trying cherry-pick approach..."
                COMMITS=$(git log --oneline origin/main.."$branch" 2>/dev/null | awk '{print $1}' | head -5)
                
                CHERRY_SUCCESS=true
                for commit in $COMMITS; do
                    if ! git cherry-pick "$commit" --no-edit 2>/dev/null; then
                        echo "Cherry-pick failed for commit $commit, aborting..."
                        git cherry-pick --abort 2>/dev/null || true
                        CHERRY_SUCCESS=false
                        break
                    fi
                done
                
                if [ "$CHERRY_SUCCESS" = true ]; then
                    echo "✓ Successfully cherry-picked $branch"
                    SUCCESSFUL=$((SUCCESSFUL + 1))
                    MERGE_SUCCESS=true
                fi
            fi
            
            if [ "$MERGE_SUCCESS" = false ]; then
                echo "✗ All merge strategies failed for $branch"
                FAILED=$((FAILED + 1))
            fi
        fi
    fi
    
    # Progress indicator
    PROCESSED=$((SUCCESSFUL + FAILED + SKIPPED))
    PROGRESS=$((PROCESSED * 100 / TOTAL_BRANCHES))
    echo "Progress: $PROGRESS% ($PROCESSED/$TOTAL_BRANCHES)"
    
    # Stop after processing the batch size
    if [ $PROCESSED -ge $BATCH_SIZE ]; then
        echo ""
        echo "Reached batch size limit ($BATCH_SIZE). Stopping for review."
        break
    fi
done

echo ""
echo "=== Test Merge Summary ==="
echo "Total branches processed: $((SUCCESSFUL + FAILED + SKIPPED))"
echo "Successful merges: $SUCCESSFUL"
echo "Failed merges: $FAILED"
echo "Skipped branches: $SKIPPED"

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To review changes: git log --oneline origin/main..HEAD"
echo "To see conflicts: git status"
echo "To continue with more branches: git checkout main && ./bulk_merge_open_prs.sh"
echo "To merge this test to main: git checkout main && git merge $MERGE_BRANCH"

# Create a test summary file
cat > "test_merge_summary_$(date +%Y%m%d-%H%M%S).txt" << EOF
Test Merge Summary - $(date)
============================

Total branches processed: $((SUCCESSFUL + FAILED + SKIPPED))
Successful merges: $SUCCESSFUL
Failed merges: $FAILED
Skipped branches: $SKIPPED

Test merge branch: $MERGE_BRANCH

This was a test run with a small batch.
If successful, run the full bulk merge script: ./bulk_merge_open_prs.sh
EOF

echo "Test merge summary saved to test_merge_summary_$(date +%Y%m%d-%H%M%S).txt"