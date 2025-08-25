#!/bin/bash

echo "🔍 Husky Health Check"
echo "======================"

# Check if .husky directory exists
if [ ! -d ".husky" ]; then
    echo "❌ .husky directory not found"
    exit 1
fi

echo "✅ .husky directory exists"

# Check if hooks are executable
hooks=("pre-commit" "commit-msg" "pre-push")
for hook in "${hooks[@]}"; do
    if [ -f ".husky/$hook" ]; then
        if [ -x ".husky/$hook" ]; then
            echo "✅ $hook hook exists and is executable"
        else
            echo "❌ $hook hook exists but is not executable"
            chmod +x ".husky/$hook"
            echo "🔧 Fixed permissions for $hook"
        fi
    else
        echo "⚠️ $hook hook not found"
    fi
done

# Check if husky is installed
if npm list husky >/dev/null 2>&1; then
    echo "✅ Husky is installed"
else
    echo "❌ Husky is not installed"
    exit 1
fi

# Check git hooks path
hooks_path=$(git config core.hooksPath)
if [ "$hooks_path" = ".husky" ]; then
    echo "✅ Git hooks path is correctly set to .husky"
else
    echo "⚠️ Git hooks path is not set to .husky (current: $hooks_path)"
    git config core.hooksPath .husky
    echo "🔧 Fixed git hooks path"
fi

# Test pre-commit hook
echo "🧪 Testing pre-commit hook..."
if [ -x ".husky/pre-commit" ]; then
    echo "✅ Pre-commit hook is ready"
else
    echo "❌ Pre-commit hook is not executable"
    exit 1
fi

echo ""
echo "🎉 Husky is healthy and ready!"
echo "Git hooks will now run automatically on commit and push."
