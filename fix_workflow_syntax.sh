#!/bin/bash

# Fix common YAML syntax errors in GitHub Actions workflow files
echo "🔧 Fixing YAML syntax errors in workflow files..."

# Fix the concurrency syntax errors
find .github/workflows -name "*.yml" -type f -exec sed -i '' \
    -e 's/concurrency:"/concurrency:/g' \
    -e 's/group: "github\.workflow-github\.ref/group: "github.workflow-${{ github.ref }}"/g' \
    -e 's/cancel-in-progress: "true/cancel-in-progress: true/g' \
    -e 's/"REPLICATION_MODE: ${{ github\.event\.inputs\.replication_mode || '\''balanced'\'' }}"/REPLICATION_MODE: "${{ github.event.inputs.replication_mode || '\''balanced'\'' }}"/g' \
    -e 's/MAX_FACTORIES: "${{ github\.event\.inputs\.max_factories || '\''1000'\'' }}/MAX_FACTORIES: "${{ github.event.inputs.max_factories || '\''1000'\'' }}"/g' \
    -e 's/"GROWTH_MULTIPLIER: ${{ github\.event\.inputs\.growth_multiplier || '\''3'\'' }}"/GROWTH_MULTIPLIER: "${{ github.event.inputs.growth_multiplier || '\''3'\'' }}"/g' \
    -e 's/TARGET_EXPONENTIAL_FACTOR: "${{ github\.event\.inputs\.target_exponential_factor || '\''10'\'' }}/TARGET_EXPONENTIAL_FACTOR: "${{ github.event.inputs.target_exponential_factor || '\''10'\'' }}"/g' \
    -e 's/ENABLE_AUTONOMOUS: "${{ github\.event\.inputs\.enable_autonomous_creation || '\''true'\'' }}/ENABLE_AUTONOMOUS: "${{ github.event.inputs.enable_autonomous_creation || '\''true'\'' }}"/g' \
    {} \;

echo "✅ Fixed concurrency syntax errors"

# Fix indentation issues - remove extra spaces before step items
find .github/workflows -name "*.yml" -type f -exec sed -i '' \
    -e '/^        - name:/s/^        /      /g' \
    -e '/^        - uses:/s/^        /      /g' \
    -e '/^        - run:/s/^        /      /g' \
    -e '/^        - id:/s/^        /      /g' \
    -e '/^        - with:/s/^        /      /g' \
    -e '/^        - if:/s/^        /      /g' \
    -e '/^        - env:/s/^        /      /g' \
    -e '/^        - working-directory:/s/^        /      /g' \
    -e '/^        - shell:/s/^        /      /g' \
    -e '/^        - timeout-minutes:/s/^        /      /g' \
    -e '/^        - continue-on-error:/s/^        /      /g' \
    {} \;

echo "✅ Fixed indentation issues"

# Fix missing quotes in env variables
find .github/workflows -name "*.yml" -type f -exec sed -i '' \
    -e 's/^  \([A-Z_][A-Z0-9_]*\): ${{/  \1: "${{/g' \
    -e 's/}}"/}}"/g' \
    {} \;

echo "✅ Fixed environment variable quotes"

echo "🎉 All workflow files have been fixed!"
echo "📝 Please review the changes and commit them."
