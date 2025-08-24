#!/bin/bash

# Script to merge open pull requests into main branch in batches
# This script will systematically go through remote branches and merge them

set -e

# Configuration
BATCH_SIZE=${1:-10}  # Default batch size of 10
START_FROM=${2:-0}   # Start from this index (0-based)

echo "Starting to merge open pull requests into main branch..."
echo "Batch size: $BATCH_SIZE, Starting from index: $START_FROM"
echo "=================================================="

# Get all remote branches (excluding main and backup branches)
REMOTE_BRANCHES=$(git branch -r | grep -v "origin/main" | grep -v "backup" | sed 's/origin\///')

# Counter for tracking progress
TOTAL_BRANCHES=$(echo "$REMOTE_BRANCHES" | wc -l)
CURRENT=$START_FROM
SUCCESSFUL=0
FAILED=0
CONFLICTS=0

echo "Total branches available: $TOTAL_BRANCHES"
echo "Processing branches from index $START_FROM to $((START_FROM + BATCH_SIZE - 1))"
echo ""

# Function to merge a single branch
merge_branch() {
    local branch_name=$1
    local current=$2
    local total=$3
    
    echo "[$current/$total] Processing branch: $branch_name"
    
    # Checkout the remote branch
    if ! git checkout -b "temp-merge-$branch_name" "origin/$branch_name" 2>/dev/null; then
        echo "  ❌ Failed to checkout branch $branch_name"
        return 1
    fi
    
    # Try to merge with main
    if git merge main --no-edit --no-ff 2>/dev/null; then
        echo "  ✅ Successfully merged $branch_name"
        
        # Switch back to main and merge the temp branch
        git checkout main
        if git merge "temp-merge-$branch_name" --no-edit --no-ff 2>/dev/null; then
            echo "  ✅ Successfully merged into main"
            
            # Clean up temp branch
            git branch -D "temp-merge-$branch_name"
            
            # Push to origin/main
            if git push origin main 2>/dev/null; then
                echo "  ✅ Pushed to origin/main"
                return 0
            else
                echo "  ⚠️  Merged but failed to push to origin/main"
                return 1
            fi
        else
            echo "  ❌ Failed to merge temp branch into main"
            git merge --abort 2>/dev/null || true
            git checkout main
            git branch -D "temp-merge-$branch_name" 2>/dev/null || true
            return 1
        fi
    else
        echo "  ⚠️  Merge conflict detected, attempting to resolve..."
        
        # Check if there are actual conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "  🔧 Resolving merge conflicts..."
            
            # Try to resolve conflicts by taking the incoming changes
            git checkout --theirs . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit -m "Resolve merge conflicts for $branch_name" 2>/dev/null; then
                echo "  ✅ Conflicts resolved automatically"
                
                # Switch back to main and merge
                git checkout main
                if git merge "temp-merge-$branch_name" --no-edit --no-ff 2>/dev/null; then
                    echo "  ✅ Successfully merged resolved conflicts into main"
                    
                    # Clean up and push
                    git branch -D "temp-merge-$branch_name"
                    if git push origin main 2>/dev/null; then
                        echo "  ✅ Pushed resolved merge to origin/main"
                        return 0
                    else
                        echo "  ⚠️  Merged but failed to push to origin/main"
                        return 1
                    fi
                else
                    echo "  ❌ Failed to merge resolved conflicts into main"
                    git merge --abort 2>/dev/null || true
                    git checkout main
                    git branch -D "temp-merge-$branch_name" 2>/dev/null || true
                    return 1
                fi
            else
                echo "  ❌ Failed to commit resolved conflicts"
                git checkout main
                git branch -D "temp-merge-$branch_name" 2>/dev/null || true
                return 1
            fi
        else
            echo "  ❌ Merge failed for unknown reason"
            git merge --abort 2>/dev/null || true
            git checkout main
            git branch -D "temp-merge-$branch_name" 2>/dev/null || true
            return 1
        fi
    fi
}

# Process branches in batch
BRANCH_ARRAY=($(echo "$REMOTE_BRANCHES"))
END_INDEX=$((START_FROM + BATCH_SIZE - 1))

echo "Processing branches from index $START_FROM to $END_INDEX..."
echo ""

for ((i=START_FROM; i<=END_INDEX && i<${#BRANCH_ARRAY[@]}; i++)); do
    branch="${BRANCH_ARRAY[$i]}"
    if [ -n "$branch" ]; then
        CURRENT=$((i + 1))
        
        if merge_branch "$branch" "$CURRENT" "${#BRANCH_ARRAY[@]}"; then
            SUCCESSFUL=$((SUCCESSFUL + 1))
        else
            FAILED=$((FAILED + 1))
        fi
        
        echo ""
    fi
done

echo "=================================================="
echo "Batch merge process completed!"
echo "Branches processed: $((END_INDEX - START_FROM + 1))"
echo "Successful merges: $SUCCESSFUL"
echo "Failed merges: $FAILED"
echo "=================================================="

# Clean up any remaining temp branches
echo "Cleaning up temporary branches..."
git branch | grep "temp-merge-" | xargs -r git branch -D

echo "Cleanup completed!"

# Show next batch command
NEXT_START=$((END_INDEX + 1))
if [ $NEXT_START -lt ${#BRANCH_ARRAY[@]} ]; then
    echo ""
    echo "To continue with next batch, run:"
    echo "./merge-open-prs-batch.sh $BATCH_SIZE $NEXT_START"
fi