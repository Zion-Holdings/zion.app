#!/bin/bash

# Smart merge script for open pull requests with conflict resolution strategies

set -e

echo "Starting smart merge process for open pull requests..."

# Get list of unmerged branches, excluding certain patterns
UNMERGED_BRANCHES=$(git branch -r --no-merged HEAD | grep -v "HEAD" | grep -v "dependabot" | head -30)

# Create a temporary branch for merging
MERGE_BRANCH="smart-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$MERGE_BRANCH"

SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_BRANCHES=()
SKIPPED_BRANCHES=0

echo "Created merge branch: $MERGE_BRANCH"
echo "Attempting to merge branches with smart conflict resolution..."

for branch in $UNMERGED_BRANCHES; do
    echo ""
    echo "=== Processing branch: $branch ==="
    
    # Check if this branch has significant changes
    COMMIT_COUNT=$(git log --oneline HEAD.."$branch" | wc -l)
    echo "Commits ahead: $COMMIT_COUNT"
    
    # Skip branches with too many commits to avoid complex conflicts
    if [ "$COMMIT_COUNT" -gt 50 ]; then
        echo "⚠️  Skipping $branch - too many commits ($COMMIT_COUNT)"
        ((SKIPPED_BRANCHES++))
        continue
    fi
    
    # Try different merge strategies
    MERGE_SUCCESS=false
    
    # Strategy 1: Try regular merge
    echo "Trying regular merge..."
    if git merge "$branch" --no-edit --strategy=recursive -X theirs; then
        echo "✓ Successfully merged $branch (recursive strategy)"
        ((SUCCESSFUL_MERGES++))
        MERGE_SUCCESS=true
    else
        echo "Regular merge failed, trying alternative strategies..."
        
        # Strategy 2: Try with ours strategy
        git merge --abort
        if git merge "$branch" --no-edit --strategy=recursive -X ours; then
            echo "✓ Successfully merged $branch (ours strategy)"
            ((SUCCESSFUL_MERGES++))
            MERGE_SUCCESS=true
        else
            # Strategy 3: Try cherry-pick approach
            git merge --abort
            echo "Trying cherry-pick approach..."
            
            # Get the commits from this branch
            COMMITS=$(git log --oneline HEAD.."$branch" | awk '{print $1}')
            
            CHERRY_SUCCESS=true
            for commit in $COMMITS; do
                if ! git cherry-pick "$commit" --no-edit; then
                    echo "Cherry-pick failed for commit $commit, aborting..."
                    git cherry-pick --abort
                    CHERRY_SUCCESS=false
                    break
                fi
            done
            
            if [ "$CHERRY_SUCCESS" = true ]; then
                echo "✓ Successfully cherry-picked $branch"
                ((SUCCESSFUL_MERGES++))
                MERGE_SUCCESS=true
            else
                echo "✗ All merge strategies failed for $branch"
                ((FAILED_MERGES++))
                CONFLICT_BRANCHES+=("$branch")
            fi
        fi
    fi
    
    if [ "$MERGE_SUCCESS" = true ]; then
        echo "Branch $branch merged successfully"
    fi
done

echo ""
echo "=== Smart Merge Summary ==="
echo "Successful merges: $SUCCESSFUL_MERGES"
echo "Failed merges: $FAILED_MERGES"
echo "Skipped branches: $SKIPPED_BRANCHES"
echo "Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES))"

if [ ${#CONFLICT_BRANCHES[@]} -gt 0 ]; then
    echo ""
    echo "Branches with conflicts:"
    for branch in "${CONFLICT_BRANCHES[@]}"; do
        echo "  - $branch"
    done
fi

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To merge to main: git checkout main && git merge $MERGE_BRANCH"
echo "To continue resolving conflicts: git status"
echo "To push this branch: git push origin $MERGE_BRANCH"