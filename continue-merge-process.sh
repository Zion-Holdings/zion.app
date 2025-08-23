#!/bin/bash

# Continue merge process from current state
set -e

echo "🚀 Continuing merge process from current state..."
echo "⏰ Started at: $(date)"
echo "---"

# First, let's try to sync with remote
echo "🔄 Syncing with remote main branch..."
git fetch origin main

# Check if we can fast-forward
if git merge-base --is-ancestor HEAD origin/main; then
    echo "✅ Can fast-forward to remote main"
    git merge origin/main
else
    echo "⚠️  Divergent branches detected, attempting to reconcile..."
    
    # Create a backup of current work
    BACKUP_BRANCH="merge-progress-backup-$(date +%Y%m%d-%H%M%S)"
    echo "🔒 Creating backup branch: $BACKUP_BRANCH"
    git checkout -b "$BACKUP_BRANCH"
    git push origin "$BACKUP_BRANCH"
    
    # Go back to main and reset to remote
    git checkout main
    git reset --hard origin/main
    
    echo "✅ Reset to remote main, ready to continue merging"
fi

# Now let's continue with the merge process
echo "🔄 Continuing with branch merging..."

# Get remaining branches that have commits ahead of main
echo "🔍 Finding remaining branches with commits ahead of main..."
REMAINING_BRANCHES=""
TOTAL_REMAINING=0

while read branch; do
    branch_name=$(echo $branch | sed 's/origin\///')
    commits_ahead=$(git log --oneline main..$branch 2>/dev/null | wc -l)
    if [ $commits_ahead -gt 0 ]; then
        REMAINING_BRANCHES="$REMAINING_BRANCHES $branch_name"
        TOTAL_REMAINING=$((TOTAL_REMAINING + 1))
        echo "📋 Found: $branch_name ($commits_ahead commits ahead)"
    fi
done < <(git branch -r | grep "origin/cursor/")

echo "---"
echo "📊 Total remaining branches to process: $TOTAL_REMAINING"
echo "---"

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            return 1
        fi
    fi
}

# Process remaining branches in smaller batches
BATCH_SIZE=5
echo "🔄 Processing remaining branches in batches of $BATCH_SIZE..."

# Convert branches to array for easier processing
branch_array=($REMAINING_BRANCHES)
total_branches=${#branch_array[@]}
current_batch=0
successful_merges=0
failed_merges=0

# Process branches in batches
for ((i=0; i<total_branches; i+=BATCH_SIZE)); do
    current_batch=$((current_batch + 1))
    batch_end=$((i + BATCH_SIZE))
    
    echo "🚀 Processing batch $current_batch (branches $((i+1)) to $((batch_end < total_branches ? batch_end : total_branches)))"
    echo "---"
    
    batch_success=0
    batch_failures=0
    
    # Process this batch
    for ((j=i; j<batch_end && j<total_branches; j++)); do
        branch="${branch_array[$j]}"
        echo "📋 Processing branch $((j+1))/$total_branches: $branch"
        
        # Try to merge the branch
        if merge_branch "$branch"; then
            echo "✅ Branch $branch processed successfully"
            batch_success=$((batch_success + 1))
            successful_merges=$((successful_merges + 1))
        else
            echo "❌ Failed to process branch $branch"
            batch_failures=$((batch_failures + 1))
            failed_merges=$((failed_merges + 1))
        fi
        
        echo "📊 Batch progress: $batch_success successful, $batch_failures failed"
        echo "📊 Overall progress: $successful_merges successful, $failed_merges failed"
        echo "---"
    done
    
    # Push changes after each batch
    echo "💾 Pushing batch changes to remote..."
    if git push origin main; then
        echo "✅ Successfully pushed batch $current_batch"
    else
        echo "⚠️  Push failed for batch $current_batch, will retry after next batch"
    fi
    
    echo "✅ Batch $current_batch completed: $batch_success successful, $batch_failures failed"
    echo "---"
    
    # Ask user if they want to continue
    if [ $((i + BATCH_SIZE)) -lt $total_branches ]; then
        echo ""
        read -p "Continue to next batch? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "⏸️  Pausing batch processing. You can resume later."
            break
        fi
    fi
done

# Summary
echo ""
echo "🎉 Merge process continued successfully!"
echo "📊 Summary:"
echo "   ✅ Successful merges in this session: $successful_merges"
echo "   ❌ Failed merges in this session: $failed_merges"
echo "   📦 Batches processed: $current_batch"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"