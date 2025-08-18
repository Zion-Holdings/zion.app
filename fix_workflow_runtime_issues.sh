#!/bin/bash

# Fix all workflow runtime issues
# This script addresses common problems that cause workflows to fail at runtime

set -e

WORKFLOWS_DIR=".github/workflows"
FIXED_COUNT=0

echo "🔧 Fixing workflow runtime issues..."

# Function to fix timeout command issues
fix_timeout_issues() {
    local file="$1"
    local temp_file="/tmp/fixed_timeout.yml"
    
    # Replace timeout command with a more compatible alternative
    sed 's/timeout 60 bash -c/for i in {1..30}; do/g' "$file" > "$temp_file" 2>/dev/null || return 1
    
    # Update the wait logic
    sed -i 's/until curl -f http:\/\/localhost:3000 > \/dev\/null 2>&1; do sleep 2; done/curl -f http:\/\/localhost:3000 > \/dev\/null 2>&1 \&\& break || sleep 2; done/g' "$temp_file" 2>/dev/null || return 1
    
    if python3 -c "import yaml; yaml.safe_load(open('$temp_file'))" 2>/dev/null; then
        mv "$temp_file" "$file"
        return 0
    else
        rm -f "$temp_file"
        return 1
    fi
}

# Function to fix jq dependency issues
fix_jq_issues() {
    local file="$1"
    local temp_file="/tmp/fixed_jq.yml"
    
    # Add jq installation step before it's used
    if grep -q "jq" "$file"; then
        # Find the line with jq and add installation before it
        awk '/jq/ {print "      - name: Install jq"; print "        run: sudo apt-get update && sudo apt-get install -y jq"; print ""; print $0; next} {print}' "$file" > "$temp_file" 2>/dev/null || return 1
        
        if python3 -c "import yaml; yaml.safe_load(open('$temp_file'))" 2>/dev/null; then
            mv "$temp_file" "$file"
            return 0
        else
            rm -f "$temp_file"
            return 1
        fi
    fi
    return 0
}

# Function to fix missing dependencies
fix_missing_dependencies() {
    local file="$1"
    local temp_file="/tmp/fixed_deps.yml"
    
    # Add serve installation for Playwright workflows
    if grep -q "playwright test" "$file" && ! grep -q "serve" "$file"; then
        # Add serve installation after Node.js setup
        awk '/Setup Node.js/ {print; print "      - name: Install serve"; print "        run: npm install -g serve"; next} {print}' "$file" > "$temp_file" 2>/dev/null || return 1
        
        if python3 -c "import yaml; yaml.safe_load(open('$temp_file'))" 2>/dev/null; then
            mv "$temp_file" "$file"
            return 0
        else
            rm -f "$temp_file"
            return 1
        fi
    fi
    return 0
}

# Process each workflow file
for workflow_file in "$WORKFLOWS_DIR"/*.yml; do
    if [ -f "$workflow_file" ]; then
        filename=$(basename "$workflow_file")
        echo "  🔍 Processing: $filename"
        
        # Fix timeout issues
        if grep -q "timeout 60" "$workflow_file"; then
            echo "    ⏰ Fixing timeout command..."
            if fix_timeout_issues "$workflow_file"; then
                echo "      ✅ Fixed timeout issues"
                ((FIXED_COUNT++))
            fi
        fi
        
        # Fix jq dependency issues
        if grep -q "jq" "$workflow_file"; then
            echo "    📊 Fixing jq dependency..."
            if fix_jq_issues "$workflow_file"; then
                echo "      ✅ Fixed jq dependency"
                ((FIXED_COUNT++))
            fi
        fi
        
        # Fix missing dependencies
        if grep -q "playwright test" "$workflow_file"; then
            echo "    🌐 Fixing missing serve dependency..."
            if fix_missing_dependencies "$workflow_file"; then
                echo "      ✅ Fixed serve dependency"
                ((FIXED_COUNT++))
            fi
        fi
    fi
done

echo ""
echo "🎉 Workflow runtime issues fixed!"
echo "📊 Total fixes applied: $FIXED_COUNT"
echo ""
echo "✅ All workflows should now run without runtime errors"