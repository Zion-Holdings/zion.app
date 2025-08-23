#!/bin/bash

# Script to merge open pull requests into main branch
# This script will systematically go through remote branches and merge them

set -e

echo "Starting to merge open pull requests into main branch..."
echo "=================================================="

# Get all remote branches (excluding main and backup branches)
REMOTE_BRANCHES=$(git branch -r | grep -v "origin/main" | grep -v "backup" | sed 's/origin\///')

# Counter for tracking progress
TOTAL_BRANCHES=$(echo "$REMOTE_BRANCHES" | wc -l)
CURRENT=0
SUCCESSFUL=0
FAILED=0
CONFLICTS=0

echo "Found $TOTAL_BRANCHES branches to process"
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

# Process each branch
while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        CURRENT=$((CURRENT + 1))
        
        if merge_branch "$branch" "$CURRENT" "$TOTAL_BRANCHES"; then
            SUCCESSFUL=$((SUCCESSFUL + 1))
        else
            FAILED=$((FAILED + 1))
        fi
        
        echo ""
    fi
done <<< "$REMOTE_BRANCHES"

echo "=================================================="
echo "Merge process completed!"
echo "Total branches processed: $TOTAL_BRANCHES"
echo "Successful merges: $SUCCESSFUL"
echo "Failed merges: $FAILED"
echo "=================================================="

# Clean up any remaining temp branches
echo "Cleaning up temporary branches..."
git branch | grep "temp-merge-" | xargs -r git branch -D

echo "Cleanup completed!"