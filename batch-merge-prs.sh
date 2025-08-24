#!/bin/bash

# Batch merge script for cursor branches with conflict resolution
# Processes branches in small batches to avoid overwhelming the system
set -e

echo "🚀 Starting batch merge for cursor branches..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=5
MAX_RETRIES=3
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"

# Create backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Get all cursor branches
echo "📋 Fetching all cursor branches..."
git fetch --all

# Get branches and store in array
mapfile -t BRANCHES < <(git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | sed 's/origin\///')

TOTAL_BRANCHES=${#BRANCHES[@]}
echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Function to resolve conflicts automatically
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to check if branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    local retry_count=0
    
    echo "🔄 Attempting to merge $branch..."
    
    while [ $retry_count -lt $MAX_RETRIES ]; do
        # Fetch latest version
        git fetch origin "$branch"
        
        # Try to merge
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            git commit -m "Merge $branch into main - $(date)"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            echo "⚠️  Merge conflicts detected in $branch, resolving..."
            
            # Get conflicted files
            local conflicted_files
            mapfile -t conflicted_files < <(git diff --name-only --diff-filter=U)
            
            if [ ${#conflicted_files[@]} -gt 0 ]; then
                echo "📋 Conflicted files: ${conflicted_files[*]}"
                
                # Resolve conflicts in each file
                for file in "${conflicted_files[@]}"; do
                    if [ -f "$file" ]; then
                        resolve_conflicts "$file" "$branch"
                    fi
                done
                
                # Add resolved files
                git add .
                
                # Commit the merge
                git commit -m "Resolve merge conflicts for $branch - $(date)"
                
                echo "✅ Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                echo "❌ No conflicted files found, but merge failed. Aborting..."
                git merge --abort
                retry_count=$((retry_count + 1))
                
                if [ $retry_count -lt $MAX_RETRIES ]; then
                    echo "🔄 Retrying merge for $branch (attempt $((retry_count + 1))/$MAX_RETRIES)..."
                    sleep 2
                fi
            fi
        fi
    done
    
    echo "❌ Failed to merge $branch after $MAX_RETRIES attempts"
    FAILED_MERGES=$((FAILED_MERGES + 1))
    return 1
}

# Function to process a batch
process_batch() {
    local batch_start=$1
    local batch_end=$2
    local batch_branches=("${@:3}")
    
    echo "🔄 Processing batch $batch_start-$batch_end of $TOTAL_BRANCHES"
    echo "---"
    
    for branch in "${batch_branches[@]}"; do
        TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
        echo "📋 Processing branch $TOTAL_PROCESSED: $branch"
        
        # Check if branch can be merged
        if ! can_merge_branch "$branch"; then
            echo "⏭️  Skipping $branch (already merged or doesn't exist)"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
            continue
        fi
        
        # Try to merge the branch
        if merge_branch "$branch"; then
            echo "✅ Branch $branch processed successfully"
        else
            echo "❌ Failed to process branch $branch"
        fi
        
        # Progress update
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
        echo "---"
    done
}

# Main processing loop
echo "🔄 Starting batch processing..."
echo "---"

# Process branches in batches
for ((i=0; i<TOTAL_BRANCHES; i+=BATCH_SIZE)); do
    batch_start=$((i + 1))
    batch_end=$((i + BATCH_SIZE))
    if [ $batch_end -gt $TOTAL_BRANCHES ]; then
        batch_end=$TOTAL_BRANCHES
    fi
    
    # Extract batch of branches
    batch_branches=("${BRANCHES[@]:i:BATCH_SIZE}")
    
    echo "🚀 Starting batch $batch_start-$batch_end of $TOTAL_BRANCHES"
    echo "📊 Batch contains ${#batch_branches[@]} branches"
    echo "---"
    
    # Process this batch
    process_batch "$batch_start" "$batch_end" "${batch_branches[@]}"
    
    # Push after each batch
    echo "💾 Pushing batch results to remote..."
    git push origin main
    
    echo "✅ Completed batch $batch_start-$batch_end"
    echo "---"
    
    # Progress summary
    echo "📊 Overall Progress: $TOTAL_PROCESSED/$TOTAL_BRANCHES branches processed"
    echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
    echo "   ❌ Failed merges: $FAILED_MERGES"
    echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
    echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
    echo "---"
    
    # Small delay between batches
    sleep 1
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Batch merge completed!"
echo "📊 Final Summary:"
echo "   📋 Total branches processed: $TOTAL_PROCESSED"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"
echo "   5. Run tests to ensure everything works correctly"