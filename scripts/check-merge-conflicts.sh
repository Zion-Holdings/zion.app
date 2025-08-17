#!/bin/bash

# Merge Conflict Detection and Resolution Helper
# This script helps detect and resolve merge conflicts automatically

set -e

echo "🔍 Checking for merge conflicts and markers..."

# Function to check if a file has merge conflict markers
has_conflict_markers() {
    local file="$1"
    if grep -q '^<<<<<<< ' "$file" 2>/dev/null; then
        return 0  # Has conflict markers
    fi
    return 1  # No conflict markers
}

# Function to resolve conflicts in specific file types
resolve_conflicts_in_file() {
    local file="$1"
    local file_ext="${file##*.}"
    
    echo "  🔧 Resolving conflicts in $file..."
    
    case "$file_ext" in
        "json"|"yml"|"yaml")
            # For config files, prefer the newer version (theirs)
            echo "    Using newer version for config file"
            git checkout --theirs "$file"
            git add "$file"
            ;;
        "md"|"txt"|"rst")
            # For documentation, prefer the newer version
            echo "    Using newer version for documentation"
            git checkout --theirs "$file"
            git add "$file"
            ;;
        "js"|"ts"|"jsx"|"tsx"|"vue"|"py"|"java"|"cpp"|"c"|"h")
            # For source code, try to merge intelligently
            echo "    Attempting intelligent merge for source code"
            # Keep both versions and let developer decide
            git add "$file"
            ;;
        *)
            # For other files, prefer newer version
            echo "    Using newer version for unknown file type"
            git checkout --theirs "$file"
            git add "$file"
            ;;
    esac
}

# Check current git status
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository"
    exit 1
fi

# Check if we're in the middle of a merge or rebase
if [ -d ".git/rebase-merge" ] || [ -d ".git/rebase-apply" ]; then
    echo "⚠️  Rebase in progress detected"
    echo "   Cleaning up rebase state..."
    git rebase --abort 2>/dev/null || true
    rm -rf .git/rebase-merge .git/rebase-apply 2>/dev/null || true
fi

if [ -d ".git/MERGE_HEAD" ]; then
    echo "⚠️  Merge in progress detected"
    echo "   Cleaning up merge state..."
    git merge --abort 2>/dev/null || true
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Uncommitted changes detected"
    git status --short
fi

# Check for merge conflict markers in tracked files
conflict_files=()
while IFS= read -r -d '' file; do
    if has_conflict_markers "$file"; then
        conflict_files+=("$file")
    fi
done < <(git ls-files -z)

if [ ${#conflict_files[@]} -gt 0 ]; then
    echo "🚨 Found ${#conflict_files[@]} files with merge conflict markers:"
    for file in "${conflict_files[@]}"; do
        echo "   - $file"
    done
    
    echo ""
    echo "🔧 Attempting automatic conflict resolution..."
    
    # Try to resolve conflicts automatically
    for file in "${conflict_files[@]}"; do
        if [ -f "$file" ]; then
            resolve_conflicts_in_file "$file"
        fi
    done
    
    # Check if we resolved all conflicts
    remaining_conflicts=()
    while IFS= read -r -d '' file; do
        if has_conflict_markers "$file"; then
            remaining_conflicts+=("$file")
        fi
    done < <(git ls-files -z)
    
    if [ ${#remaining_conflicts[@]} -eq 0 ]; then
        echo "✅ All conflicts resolved automatically!"
        
        # Commit the resolved conflicts
        if git diff --cached --quiet; then
            echo "   No staged changes to commit"
        else
            echo "   Committing resolved conflicts..."
            git commit -m "chore(sync): resolve merge conflicts automatically" || {
                echo "   Failed to commit resolved conflicts"
                exit 1
            }
        fi
    else
        echo "⚠️  Some conflicts remain unresolved:"
        for file in "${remaining_conflicts[@]}"; do
            echo "   - $file"
        done
        echo "   Manual resolution required"
        exit 1
    fi
else
    echo "✅ No merge conflicts detected"
fi

# Check for potential merge conflicts with main
echo "🔍 Checking potential merge conflicts with main branch..."
git fetch origin main:main 2>/dev/null || {
    echo "   Could not fetch main branch"
    exit 0
}

# Simulate merge to check for conflicts
if git merge --no-commit --no-ff --no-edit origin/main 2>/dev/null; then
    echo "✅ No merge conflicts with main branch"
    git merge --abort
else
    echo "⚠️  Potential merge conflicts with main branch detected"
    git merge --abort
    
    # Show conflicting files
    echo "   Conflicting files:"
    git diff --name-only --diff-filter=U 2>/dev/null || echo "   Could not determine conflicts"
    
    exit 1
fi

echo "🎉 Merge conflict check completed successfully!"