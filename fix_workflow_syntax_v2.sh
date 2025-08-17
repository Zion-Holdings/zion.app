#!/bin/bash

# Comprehensive fix for YAML syntax errors in GitHub Actions workflow files
echo "🔧 Running comprehensive YAML syntax fix..."

# Fix double quotes in env variables
find .github/workflows -name "*.yml" -type f -exec sed -i '' \
    -e 's/MAX_FACTORIES: "${{ github\.event\.inputs\.max_factories || '\''1000'\'' }}"/MAX_FACTORIES: "${{ github.event.inputs.max_factories || '\''1000'\'' }}"/g' \
    -e 's/TARGET_EXPONENTIAL_FACTOR: "${{ github\.event\.inputs\.target_exponential_factor || '\''10'\'' }}"/TARGET_EXPONENTIAL_FACTOR: "${{ github.event.inputs.target_exponential_factor || '\''10'\'' }}"/g' \
    -e 's/ENABLE_AUTONOMOUS: "${{ github\.event\.inputs\.enable_autonomous_creation || '\''true'\'' }}"/ENABLE_AUTONOMOUS: "${{ github.event.inputs.enable_autonomous_creation || '\''true'\'' }}"/g' \
    {} \;

# Fix missing quotes in id fields
find .github/workflows -name "*.yml" -type f -exec sed -i '' \
    -e 's/id: analyze"/id: analyze/g' \
    -e 's/id: "calculate/id: calculate/g' \
    -e 's/id: "exponential/id: exponential/g' \
    -e 's/id: "target/id: target/g' \
    -e 's/id: health"/id: health/g' \
    {} \;

# Fix missing quotes in run commands
find .github/workflows -name "*.yml" -type f -exec sed -i '' \
    -e 's/run: |"/run: |/g' \
    -e 's/run: |"/run: |/g' \
    {} \;

# Fix stray quotes in run commands
find .github/workflows -name "*.yml" -type f -exec sed -i '' \
    -e 's/          "/          /g' \
    -e 's/          "/          /g' \
    -e 's/          "/          /g' \
    -e 's/          "/          /g' \
    -e 's/          "/          /g' \
    {} \;

# Fix missing quotes in if statements
find .github/workflows -name "*.yml" -type f -exec sed -i '' \
    -e 's/if \[ \$CURRENT -gt 0 \]; then"/if [ $CURRENT -gt 0 ]; then/g' \
    {} \;

# Fix missing quotes in echo statements
find .github/workflows -name "*.yml" -type f -exec sed -i '' \
    -e 's/          echo "growth_potential=\$POTENTIAL" >> \$GITHUB_OUTPUT/          echo "growth_potential=\$POTENTIAL" >> \$GITHUB_OUTPUT/g' \
    -e 's/          echo "next_generation=\$NEXT" >> \$GITHUB_OUTPUT/          echo "next_generation=\$NEXT" >> \$GITHUB_OUTPUT/g' \
    {} \;

echo "✅ Fixed remaining syntax errors"

# Validate YAML files
echo "🔍 Validating YAML files..."
for file in .github/workflows/*.yml; do
    if python3 -c "import yaml; yaml.safe_load(open('$file'))" 2>/dev/null; then
        echo "✅ $file is valid YAML"
    else
        echo "❌ $file has YAML errors"
    fi
done

echo "🎉 Comprehensive fix completed!"
