#!/bin/bash

# Script to merge remaining open PRs from cursor/* and feature branches
# This script processes the remaining branches systematically

set -e

echo "🚀 Continuing PR merge process for remaining branches..."
echo "====================================================="

# Ensure we're on main branch
git checkout main

# List of remaining branches to process
REMAINING_BRANCHES=(
    "origin/cursor/website-audit-and-enhancement-751f"
    "origin/cursor/install-project-dependencies-with-pnpm-9fa3"
    "origin/cursor/website-audit-and-enhancement-2d5c"
    "origin/revolutionary-services-main"
    "origin/automation/workflow-auto-heal"
    "origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-e903"
)

# Function to merge specific files from a branch
merge_specific_files() {
    local branch="$1"
    local branch_name=$(echo "$branch" | sed 's|origin/||')
    
    echo "🔄 Processing specific files from: $branch_name"
    echo "----------------------------------------"
    
    # Check if branch exists
    if ! git ls-remote --heads origin | grep -q "$branch_name"; then
        echo "⚠️  Branch $branch_name not found, skipping..."
        return 0
    fi
    
    # Get the latest commit from the branch
    git fetch origin "$branch_name"
    
    # List of files to attempt to merge (common files that might have changes)
    FILES_TO_MERGE=(
        "components/AccessibilityEnhancer.tsx"
        "api/contact.js"
        "api/create-checkout-session.js"
        "components/ServiceCard.tsx"
        "pages/services.tsx"
        "package.json"
        "tsconfig.json"
        "next.config.js"
        "tailwind.config.js"
        "components/Layout.tsx"
        "pages/index.tsx"
        "styles/globals.css"
    )
    
    local success_count=0
    local total_count=0
    
    for file in "${FILES_TO_MERGE[@]}"; do
        total_count=$((total_count + 1))
        
        # Check if file exists in the branch
        if git show "origin/$branch_name:$file" >/dev/null 2>&1; then
            echo "🔧 Merging file: $file"
            
            # Create backup
            if [ -f "$file" ]; then
                cp "$file" "$file.backup.$(date +%s)"
            fi
            
            # Try to merge the file
            if git show "origin/$branch_name:$file" > "$file.new" 2>/dev/null; then
                # Check if there are actual differences
                if ! diff "$file" "$file.new" >/dev/null 2>&1; then
                    mv "$file.new" "$file"
                    echo "✅ Successfully merged: $file"
                    success_count=$((success_count + 1))
                else
                    echo "ℹ️  No changes in: $file"
                    rm "$file.new"
                fi
            else
                echo "❌ Failed to merge: $file"
                rm -f "$file.new"
            fi
        else
            echo "ℹ️  File not found in branch: $file"
        fi
    done
    
    echo "📊 File merge results for $branch_name: $success_count successful, $((total_count - success_count)) failed"
    echo ""
}

# Process each remaining branch
for branch in "${REMAINING_BRANCHES[@]}"; do
    echo "📋 Processing branch: $branch"
    merge_specific_files "$branch"
    
    # Commit changes after each branch if there are any
    if ! git diff --quiet; then
        echo "💾 Committing changes from $branch..."
        git add .
        git commit -m "Merge changes from $(echo $branch | sed 's|origin/||') PR"
        echo "✅ Changes committed successfully"
    else
        echo "ℹ️  No changes to commit from $branch"
    fi
    
    echo ""
done

echo "🎉 All remaining PRs processed successfully!"
echo "📝 Summary of changes:"
git log --oneline -10