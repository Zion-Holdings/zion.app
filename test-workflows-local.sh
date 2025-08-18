#!/bin/bash
# Simple script to test workflows locally before pushing to GitHub

echo "🧪 Testing GitHub Actions Workflows Locally"
echo "=========================================="

# Test basic functionality
echo "1. Testing type-check..."
npm run type-check && echo "✅ Type check passed" || echo "❌ Type check failed"

echo "2. Testing security audit..."
npm run security-audit && echo "✅ Security audit passed" || echo "❌ Security audit failed"

echo "3. Testing build (if possible)..."
npm run build && echo "✅ Build passed" || echo "❌ Build failed (may be memory/timeout issue)"

echo ""
echo "🎯 Local tests completed. Push to GitHub to test actual workflows."
echo "Use: git push origin cursor/run-and-fix-github-actions-workflows-46b5"
