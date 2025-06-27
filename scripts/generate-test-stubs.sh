#!/bin/bash
# This script generates placeholder test files for components and modules.

echo "Generating test stubs..."

# Define source directories - adjust as needed
SRC_DIRS=("src/components" "src/pages" "src/utils" "src/lib" "src") # Add more if needed

find_and_create_stub() {
  local file_path=$1
  local base_name=$(basename "$file_path" | cut -d. -f1)
  local dir_name=$(dirname "$file_path")
  local test_file_js="$dir_name/$base_name.test.js"
  local test_file_spec_js="$dir_name/$base_name.spec.js"
  local test_file_ts="$dir_name/$base_name.test.ts"
  local test_file_spec_ts="$dir_name/$base_name.spec.ts"

  # Determine the test file extension based on the source file extension
  local test_file_ext=".test.js" # Default to .js
  if [[ "$file_path" == *.ts || "$file_path" == *.tsx ]]; then
    test_file_ext=".test.ts"
  fi
  local test_file="$dir_name/$base_name$test_file_ext"

  # Check common variations
  if [ -f "$test_file" ] || [ -f "$test_file_js" ] || [ -f "$test_file_spec_js" ] || [ -f "$test_file_ts" ] || [ -f "$test_file_spec_ts" ]; then
    echo "Test file already exists for $file_path"
  else
    echo "Creating test stub for $file_path at $test_file"
    # Create a basic stub
    cat <<EOF > "$test_file"
describe('$base_name', () => {
  it('placeholder test', () => {
    expect(true).toBe(true);
  });
});
EOF
  fi
}

for src_dir in "${SRC_DIRS[@]}"; do
  if [ -d "$src_dir" ]; then
    find "$src_dir" -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -print0 | while IFS= read -r -d $'\0' file; do
      # Exclude test files themselves and storybook files
      if [[ "$file" != *.test.* && "$file" != *.spec.* && "$file" != *.stories.* ]]; then
        find_and_create_stub "$file"
      fi
    done
  else
    echo "Directory $src_dir not found. Skipping."
  fi
done

echo "Test stub generation complete. Please review and fill in the tests."
