#!/bin/bash

# Script to fix duplicate structure issues in GitHub Actions workflow files
# Removes duplicated checkout, setup, and install steps

echo "🔧 Fixing duplicate structure issues in workflow files..."

WORKFLOWS_DIR=".github/workflows"
FIXED_COUNT=0

# Function to fix duplicate structure in a workflow file
fix_duplicate_structure() {
    local file="$1"
    local temp_file="$file.tmp"
    
    echo "🔍 Checking: $file"
    
    # Check if file has duplicate checkout steps
    local checkout_count=$(grep -c "      - name: Checkout" "$file")
    local setup_count=$(grep -c "      - name: Setup Node.js" "$file")
    local install_count=$(grep -c "      - name: Install dependencies" "$file")
    
    if [ "$checkout_count" -gt 1 ] || [ "$setup_count" -gt 1 ] || [ "$install_count" -gt 1 ]; then
        echo "  ⚠️  Found duplicate steps, fixing..."
        
        # Create backup
        cp "$file" "$file.backup6"
        
        # Extract the workflow header (up to the first steps section)
        awk '
        /^  steps:/ {
            print $0
            exit
        }
        { print $0 }
        ' "$file" > "$temp_file"
        
        # Find the first occurrence of actual steps (not the template ones)
        awk '
        /^      - name: Checkout repository$/ {
            if (!found_checkout) {
                found_checkout = 1
                print $0
                next
            }
        }
        /^      - name: Setup Node.js$/ {
            if (!found_setup) {
                found_setup = 1
                print $0
                next
            }
        }
        /^      - name: Install dependencies$/ {
            if (!found_install) {
                found_install = 1
                print $0
                next
            }
        }
        /^      - name: / {
            if (found_checkout && found_setup && found_install) {
                # This is a real step, not a duplicate
                print $0
                next
            }
        }
        /^      / && !/^      - name: / {
            if (found_checkout && found_setup && found_install) {
                # This is part of a real step
                print $0
            }
        }
        ' "$file" >> "$temp_file"
        
        # Move the fixed file back
        mv "$temp_file" "$file"
        
        echo "  ✅ Fixed duplicate structure in $file"
        ((FIXED_COUNT++))
    else
        echo "  ✅ No duplicate structure found"
    fi
}

# Process all workflow files
for file in $WORKFLOWS_DIR/*.yml; do
    if [ -f "$file" ]; then
        fix_duplicate_structure "$file"
    fi
done

echo ""
echo "🎉 Duplicate structure fix completed!"
echo "📊 Files fixed: $FIXED_COUNT"
echo "📋 Backup files created with .backup6 extension"
echo ""
echo "📝 Next steps:"
echo "1. Review the fixed files"
echo "2. Test the workflows"
echo "3. Remove .backup6 files if everything works"
echo "4. Commit and push the changes"
