#!/bin/bash

# Script to monitor merge progress
echo "📊 Merge Progress Monitor"
echo "========================="
echo "⏰ Current time: $(date)"
echo ""

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "🔒 Current branch: $CURRENT_BRANCH"
echo ""

# Count processed branches
PROCESSED=$(git log --oneline | grep -E "(Merge.*cursor|Resolve.*cursor)" | wc -l)
echo "✅ Branches processed: $PROCESSED"

# Count total cursor branches
TOTAL=$(git branch -r | grep "origin/cursor/" | wc -l)
echo "📋 Total cursor branches: $TOTAL"

# Calculate remaining
REMAINING=$((TOTAL - PROCESSED))
echo "🔄 Remaining branches: $REMAINING"

# Calculate percentage
PERCENTAGE=$(echo "scale=2; $PROCESSED * 100 / $TOTAL" | bc -l 2>/dev/null || echo "0")
echo "📈 Progress: ${PERCENTAGE}%"
echo ""

# Show recent merges
echo "🕒 Recent merges:"
git log --oneline | grep -E "(Merge.*cursor|Resolve.*cursor)" | head -5
echo ""

# Show git status
echo "📝 Git status:"
git status --porcelain | head -10
echo ""

# Show any active processes
echo "🔄 Active processes:"
ps aux | grep -E "(merge|git)" | grep -v grep | head -5
echo ""

echo "🎯 Next steps:"
echo "   - Continue with: ./continue-merge-prs.sh"
echo "   - Monitor progress: ./monitor-progress.sh"
echo "   - Check conflicts: git status"