#!/bin/bash

# Script to merge specific changes from open PR branches
# This approach copies specific files and changes to avoid conflicts

set -e

echo "🚀 Starting targeted PR merge process..."
echo "========================================"

# Ensure we're on main branch
git checkout main

# Create backup branch
echo "💾 Creating backup of current state..."
BACKUP_BRANCH="backup-before-targeted-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git checkout main

# Function to merge specific files from a branch
merge_specific_files() {
    local branch="$1"
    local branch_name=$(echo "$branch" | sed 's|origin/||')
    
    echo "🔄 Processing specific files from: $branch_name"
    
    # Check if branch exists
    if ! git ls-remote --heads origin | grep -q "$branch_name"; then
        echo "⚠️  Branch $branch_name not found, skipping..."
        return 1
    fi
    
    # Create a temporary working directory
    local temp_dir="/tmp/merge_${branch_name}_$(date +%s)"
    mkdir -p "$temp_dir"
    
    # Checkout the branch to temp directory
    git worktree add "$temp_dir" "$branch" 2>/dev/null || {
        echo "⚠️  Failed to create worktree for $branch_name, skipping..."
        return 1
    }
    
    local success_count=0
    local fail_count=0
    
    # List of specific files to merge (avoiding build artifacts and config conflicts)
    local files_to_merge=(
        "components/AccessibilityEnhancer.tsx"
        "api/contact.js"
        "api/create-checkout-session.js"
        "components/ServiceCard.tsx"
        "components/ServiceGrid.tsx"
        "pages/services.tsx"
        "styles/services.css"
    )
    
    for file in "${files_to_merge[@]}"; do
        if [ -f "$temp_dir/$file" ]; then
            echo "🔧 Merging file: $file"
            
            # Create backup of current file if it exists
            if [ -f "$file" ]; then
                cp "$file" "${file}.backup.$(date +%s)"
            fi
            
            # Copy the file from the branch
            if cp "$temp_dir/$file" "$file" 2>/dev/null; then
                echo "✅ Successfully merged: $file"
                ((success_count++))
            else
                echo "⚠️  Failed to merge: $file"
                ((fail_count++))
            fi
        else
            echo "ℹ️  File not found in branch: $file"
        fi
    done
    
    # Clean up worktree
    git worktree remove "$temp_dir" 2>/dev/null || true
    
    echo "📊 File merge results for $branch_name: $success_count successful, $fail_count failed"
    
    if [ $success_count -gt 0 ]; then
        return 0
    else
        return 1
    fi
}

# List of branches to process
BRANCHES_TO_PROCESS=(
    "origin/feature/expand-zion-services-2025"
    "origin/cursor/website-audit-and-enhancement-751f"
)

# Process each branch
SUCCESS_COUNT=0
FAILED_COUNT=0

for branch in "${BRANCHES_TO_PROCESS[@]}"; do
    echo ""
    echo "📋 Processing branch: $branch"
    echo "----------------------------------------"
    
    if merge_specific_files "$branch"; then
        ((SUCCESS_COUNT++))
        echo "✅ Branch $branch processed successfully"
    else
        ((FAILED_COUNT++))
        echo "❌ Failed to process branch $branch"
    fi
    
    echo "📊 Overall progress: $SUCCESS_COUNT successful, $FAILED_COUNT failed"
done

echo ""
echo "🎯 Targeted merge process completed!"
echo "========================================"
echo "✅ Successfully processed: $SUCCESS_COUNT branches"
echo "❌ Failed to process: $FAILED_COUNT branches"
echo ""

# Check if we have any changes to commit
if [ $(git status --porcelain | wc -l) -gt 0 ]; then
    echo "💾 Committing merged changes..."
    
    # Add all changes
    git add .
    
    # Create commit message
    COMMIT_MSG="Merge specific changes from open PRs - $(date '+%Y-%m-%d %H:%M:%S')
    
    - Processed $SUCCESS_COUNT branches
    - Applied specific file changes
    - Avoided build artifacts and config conflicts"
    
    git commit -m "$COMMIT_MSG"
    
    echo "🚀 Pushing merged changes to remote..."
    git push origin main
    
    echo ""
    echo "🎉 Successfully merged specific changes from open PRs!"
    echo "📝 Backup branch created: $BACKUP_BRANCH"
else
    echo "⚠️  No changes to commit."
fi

echo ""
echo "🏁 Process completed!"