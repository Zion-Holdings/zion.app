#!/bin/bash

echo "🚀 Starting comprehensive merge process..."

# Function to check if command succeeded
check_status() {
    if [ $? -eq 0 ]; then
        echo "✅ $1 completed successfully"
    else
        echo "❌ $1 failed"
        exit 1
    fi
}

# 1. Check current status
echo "📋 Checking current git status..."
git status
check_status "Status check"

# 2. Ensure we're on the right branch
echo "🌿 Current branch: $(git branch --show-current)"

# 3. Add all changes
echo "📦 Adding all changes..."
git add .
check_status "Add changes"

# 4. Commit any remaining changes
echo "💾 Committing changes..."
git commit -m "Complete website audit and enhancement merge - Enhanced navigation structure - Fixed broken links - Created missing pages - Improved site organization" || echo "No new changes to commit"
check_status "Commit changes"

# 5. Push our branch
echo "🚀 Pushing website-audit-and-enhancement-final branch..."
git push origin website-audit-and-enhancement-final
check_status "Push branch"

# 6. Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main
check_status "Switch to main"

# 7. Pull latest changes from remote
echo "📥 Pulling latest changes from remote main..."
git pull origin main
check_status "Pull from remote"

# 8. Merge our branch into main
echo "🔀 Merging website-audit-and-enhancement-final into main..."
git merge website-audit-and-enhancement-final
check_status "Merge branch"

# 9. Push to main
echo "🚀 Pushing merged changes to main..."
git push origin main
check_status "Push to main"

echo ""
echo "🎉 Successfully merged into main branch!"
echo ""
echo "📋 Next steps:"
echo "1. Check GitHub for any open Pull Requests"
echo "2. Resolve any conflicts in open PRs"
echo "3. Merge all open PRs"
echo "4. Deploy the updated website"
echo ""
echo "🔍 Checking for open PRs on GitHub..."
echo "Visit: https://github.com/Zion-Holdings/zion.app/pulls"