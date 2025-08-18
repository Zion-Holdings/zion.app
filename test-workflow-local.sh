#!/bin/bash

echo "🧪 Testing GitHub Actions Workflow Steps Locally"
echo "================================================"

# Test 1: Type checking
echo "1️⃣ Testing TypeScript type checking..."
if npm run type-check; then
    echo "✅ Type checking passed"
else
    echo "❌ Type checking failed"
    exit 1
fi

# Test 2: Linting
echo "2️⃣ Testing ESLint..."
if npm run lint; then
    echo "✅ Linting passed"
else
    echo "❌ Linting failed"
    exit 1
fi

# Test 3: Security audit
echo "3️⃣ Testing security audit..."
if npm audit --audit-level=high; then
    echo "✅ Security audit passed"
else
    echo "❌ Security audit failed"
    exit 1
fi

# Test 4: Build
echo "4️⃣ Testing build..."
if npm run build; then
    echo "✅ Build passed"
else
    echo "❌ Build failed"
    exit 1
fi

# Test 5: Automation script
echo "5️⃣ Testing automation script..."
if node automation/repo-knowledge-graph.cjs; then
    echo "✅ Automation script passed"
else
    echo "❌ Automation script failed"
    exit 1
fi

echo ""
echo "🎉 All workflow steps passed locally!"
echo "The GitHub Actions workflows should work when triggered."
echo ""
echo "Next steps:"
echo "1. Set up a GitHub token (GH_TOKEN or GITHUB_TOKEN)"
echo "2. Use the workflow trigger script: npm run gh:trigger"
echo "3. Or trigger workflows manually through GitHub UI"