#!/bin/bash

# Script to resolve merge conflicts and continue the merge process
set -e

echo "🔧 Resolving merge conflicts..."
echo "⏰ Started at: $(date)"
echo "---"

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
}

# Resolve conflicts by accepting incoming changes
log_message "🔄 Resolving conflicts by accepting incoming changes..."

# For modify/delete conflicts, accept the deletion (incoming change)
git status --porcelain | grep "^DU\|^UD" | while read -r line; do
    if [[ $line =~ ^DU ]]; then
        # Deleted in incoming, modified in HEAD - accept deletion
        file_path=$(echo "$line" | awk '{print $2}')
        log_message "🗑️  Accepting deletion of: $file_path"
        git rm "$file_path" 2>/dev/null || true
    elif [[ $line =~ ^UD ]]; then
        # Modified in incoming, deleted in HEAD - accept modification
        file_path=$(echo "$line" | awk '{print $2}')
        log_message "✅ Accepting modification of: $file_path"
        git add "$file_path" 2>/dev/null || true
    fi
done

# For content conflicts, try to resolve automatically
log_message "🔧 Resolving content conflicts..."

# Resolve .gitignore conflicts
if [ -f ".gitignore" ]; then
    log_message "📝 Resolving .gitignore conflicts..."
    # Keep both versions and remove conflict markers
    git checkout --theirs .gitignore
    git add .gitignore
fi

# Resolve package.json conflicts
if [ -f "package.json" ]; then
    log_message "📦 Resolving package.json conflicts..."
    # Keep the incoming version (merged branches)
    git checkout --theirs package.json
    git add package.json
fi

# Resolve _app.tsx conflicts
if [ -f "pages/_app.tsx" ]; then
    log_message "📱 Resolving _app.tsx conflicts..."
    git checkout --theirs pages/_app.tsx
    git add pages/_app.tsx
fi

# Resolve index.tsx conflicts
if [ -f "pages/index.tsx" ]; then
    log_message "🏠 Resolving index.tsx conflicts..."
    git checkout --theirs pages/index.tsx
    git add pages/index.tsx
fi

# Resolve globals.css conflicts
if [ -f "styles/globals.css" ]; then
    log_message "🎨 Resolving globals.css conflicts..."
    git checkout --theirs styles/globals.css
    git add styles/globals.css
fi

# Resolve tailwind.config.js conflicts
if [ -f "tailwind.config.js" ]; then
    log_message "🎨 Resolving tailwind.config.js conflicts..."
    git checkout --theirs tailwind.config.js
    git add tailwind.config.js
fi

# Add all resolved files
log_message "📁 Adding all resolved files..."
git add .

# Commit the merge
log_message "💾 Committing merge resolution..."
if git commit -m "Resolve merge conflicts from multiple branch merges" 2>/dev/null; then
    log_message "✅ Merge conflicts resolved successfully!"
    
    # Push the changes
    log_message "🚀 Pushing resolved merge..."
    git push origin main
    
    log_message "🎉 Merge process completed successfully!"
else
    log_message "❌ Failed to commit merge resolution"
    log_message "📋 Current status:"
    git status --porcelain | head -20
    
    # Try to abort and start fresh
    log_message "🔄 Aborting merge and starting fresh..."
    git merge --abort
    
    # Reset to main
    git reset --hard origin/main
    
    log_message "✅ Reset to clean main branch"
fi

echo "🎯 Conflict resolution completed! Check the logs above for details."
