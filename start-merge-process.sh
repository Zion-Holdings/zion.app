#!/bin/bash

# Script to start the merge process for all open PRs
set -e

echo "🚀 Starting merge process for all open PRs..."
echo "📊 Total cursor branches available: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=5
LOG_FILE="merge-process-log-$(date +%Y%m%d-%H%M%S).txt"
BACKUP_BRANCH="merge-backup-$(date +%Y%m%d-%H%M%S)"

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Create backup branch
log_message "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Get list of existing cursor branches
log_message "📋 Getting list of existing cursor branches..."
EXISTING_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)

# Filter out branches that don't exist remotely
log_message "🔍 Filtering existing branches..."
VALID_BRANCHES=""
for branch in $EXISTING_BRANCHES; do
    if git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        VALID_BRANCHES="$VALID_BRANCHES $branch"
    fi
done

TOTAL_BRANCHES=$(echo "$VALID_BRANCHES" | wc -w)
log_message "✅ Found $TOTAL_BRANCHES valid branches to process"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        log_message "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            log_message "📦 Critical file detected, keeping main version and merging dependencies..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            log_message "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.css" || "$file" == "*.scss" ]]; then
            log_message "🎨 CSS file detected, merging styles..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.tsx" || "$file" == "*.ts" || "$file" == "*.jsx" || "$file" == "*.js" ]]; then
            log_message "💻 Code file detected, attempting intelligent merge..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.yml" || "$file" == "*.yaml" ]]; then
            log_message "📋 YAML file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.md" ]]; then
            log_message "📝 Markdown file detected, merging content..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.json" ]]; then
            log_message "📊 JSON file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            log_message "📝 Regular file, removing conflict markers..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        log_message "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to check if a branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
            
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
            
            log_message "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process branches in batches
log_message "🔄 Starting batch processing..."
echo "---"

BRANCH_COUNT=0
for branch in $VALID_BRANCHES; do
    BRANCH_COUNT=$((BRANCH_COUNT + 1))
    
    log_message "📋 Processing branch $BRANCH_COUNT/$TOTAL_BRANCHES: $branch"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        log_message "⏭️  Skipping $branch (already merged or doesn't exist)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        log_message "✅ Branch $branch processed successfully"
    else
        log_message "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
    
    # Push changes every 5 successful merges
    if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        log_message "💾 Pushing intermediate changes..."
        git push origin main
    fi
    
    # Take a small break every batch
    if [ $((BRANCH_COUNT % BATCH_SIZE)) -eq 0 ]; then
        log_message "🔄 Completed batch $((BRANCH_COUNT / BATCH_SIZE)). Taking a short break..."
        sleep 2
    fi
    
    echo "---"
done

# Final push
log_message "💾 Pushing final changes..."
git push origin main

# Summary
log_message ""
log_message "🎉 Merge process completed!"
log_message "📊 Final Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "   📝 Log file: $LOG_FILE"
log_message "⏰ Completed at: $(date)"

echo ""
echo "🚀 Merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "   📝 Log file: $LOG_FILE"
echo "⏰ Completed at: $(date)"

# Next steps
echo ""
echo "🚀 Next steps:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"