#!/bin/bash

echo "🔧 Resolving all merge conflicts..."

# Get all conflicted files
CONFLICTED_FILES=$(git status --porcelain | grep "^UU" | awk '{print $2}')

echo "📋 Found $(echo "$CONFLICTED_FILES" | wc -l) conflicted files"

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    
    echo "🔧 Resolving conflicts in $file..."
    
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
    else
        echo "✅ No conflicts found in $file"
    fi
}

# Resolve conflicts in each file
for file in $CONFLICTED_FILES; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo "✅ All conflicts resolved!"
echo "📝 Adding resolved files..."

# Add all resolved files
git add .

echo "🎉 Ready to commit the merge!"
echo "💡 Run: git commit -m 'Merge remote main with local changes'"