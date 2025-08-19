# YAML Automation Tools Guide

This guide explains the automated tools created to fix and prevent YAML syntax errors in GitHub Actions workflows.

## 🚨 Current Status

- **63 workflow files** are now valid YAML ✅
- **~40 workflow files** still have syntax errors ❌
- **Automated fixes** have resolved ~60% of syntax errors

## 🛠️ Automation Tools Created

### 1. YAML Syntax Validator (`.github/workflows/yaml-validator.yml`)

**Purpose**: Automatically validates all YAML files and reports errors

**Triggers**:
- On every push/PR with YAML changes
- Daily scheduled validation at midnight
- Manual trigger via workflow dispatch

**Features**:
- Finds all `.yml` and `.yaml` files
- Validates syntax using PyYAML
- Creates detailed error reports
- Comments on PRs with validation failures
- Uploads validation reports as artifacts

**Usage**: Runs automatically, no manual intervention needed

### 2. YAML Auto-Fixer (`.github/workflows/yaml-auto-fixer-simple.yml`)

**Purpose**: Automatically fixes common YAML syntax errors

**Fix Modes**:
- **`validate-only`**: Only checks files, no changes
- **`conservative`**: Fixes basic syntax errors safely
- **`aggressive`**: Fixes indentation and complex issues

**Fixes Applied**:
1. Removes stray quotes in `concurrency:"`
2. Fixes `group: "github.workflow-github.ref"` references
3. Fixes `cancel-in-progress: "true"` quotes
4. Removes double quotes in environment variables
5. Fixes `run: |"` syntax to `run: |`
6. Fixes `id: "field"` quote issues
7. Fixes case statement quotes
8. Fixes step indentation (aggressive mode only)

**Triggers**:
- Daily at 2 AM
- Manual trigger with configurable fix mode
- Automatically commits and pushes fixes

### 3. Pre-commit Hooks (`.pre-commit-config.yaml`)

**Purpose**: Prevents YAML errors before they reach the repository

**Hooks**:
- **YAML syntax check**: Validates YAML files
- **JSON syntax check**: Validates JSON files
- **Trailing whitespace**: Removes trailing spaces
- **End of file**: Ensures proper file endings
- **YAML lint**: Style and syntax validation

**Setup**:
```bash
# Install pre-commit
pip install pre-commit

# Install the git hook scripts
pre-commit install

# Run against all files
pre-commit run --all-files
```

## 🔧 Manual Fixes Still Needed

Some complex files require manual intervention due to:

1. **Multi-line string formatting** issues
2. **JavaScript code blocks** embedded in YAML
3. **Complex nested structures** with inconsistent indentation
4. **Custom syntax** that automated tools can't safely fix

### Files Requiring Manual Attention:
- `self-replicating-factory-manager.yml`
- `exponential-agent-factory-proliferation.yml`
- `exponential-ai-delegation.yml`
- Various agent factory files

## 📋 How to Use the Tools

### Immediate Fixes

1. **Run the auto-fixer**:
   - Go to Actions → YAML Auto-Fixer (Simple)
   - Click "Run workflow"
   - Choose fix mode: `conservative` (recommended)
   - Wait for completion

2. **Check validation results**:
   - Go to Actions → YAML Syntax Validator
   - Review the latest run for current status

### Ongoing Prevention

1. **Install pre-commit hooks**:
   ```bash
   pip install pre-commit
   pre-commit install
   ```

2. **Daily automation**:
   - Auto-fixer runs daily at 2 AM
   - Validator runs daily at midnight
   - Both workflows auto-commit fixes

### Manual Validation

```bash
# Check specific file
python3 -c "import yaml; yaml.safe_load(open('.github/workflows/filename.yml'))"

# Check all workflow files
find .github/workflows -name "*.yml" -exec python3 -c "import yaml; yaml.safe_load(open('{}'))" \;
```

## 🎯 Best Practices

### Writing YAML Files

1. **Use consistent indentation** (2 spaces per level)
2. **Quote strings with special characters**:
   ```yaml
   # Good
   name: "Workflow with ${{ variables }}"
   
   # Bad
   name: Workflow with ${{ variables }}
   ```

3. **Use proper block scalar syntax**:
   ```yaml
   # Good
   run: |
     echo "Multi-line"
     echo "command"
   
   # Bad
   run: |"
     echo "Multi-line"
     echo "command"
   ```

4. **Validate before committing**:
   ```bash
   pre-commit run --files .github/workflows/new-workflow.yml
   ```

### Common Patterns to Avoid

1. **Stray quotes**: `concurrency:"` → `concurrency:`
2. **Incorrect group references**: `github.workflow-github.ref` → `github.workflow-${{ github.ref }}`
3. **Extra quotes**: `cancel-in-progress: "true"` → `cancel-in-progress: true`
4. **Malformed run commands**: `run: |"` → `run: |`

## 📊 Monitoring and Reports

### Validation Reports
- Generated automatically on validation failures
- Uploaded as workflow artifacts
- Include specific error details and line numbers

### Fix Reports
- Generated after auto-fixer runs
- Show which files were fixed and how
- Available as workflow artifacts

### GitHub Notifications
- PR comments on validation failures
- Workflow status badges
- Action logs for debugging

## 🚀 Future Improvements

1. **Enhanced auto-fixer** with more sophisticated pattern matching
2. **IDE integration** with real-time YAML validation
3. **Custom linting rules** for GitHub Actions specific patterns
4. **Automated PR creation** for complex fixes requiring review

## 🆘 Troubleshooting

### Common Issues

1. **Workflow fails to run**: Check YAML syntax first
2. **Auto-fixer doesn't fix everything**: Some issues require manual intervention
3. **Pre-commit hooks fail**: Ensure Python and dependencies are installed

### Getting Help

1. Check the validation reports for specific error details
2. Review the auto-fixer logs to see what was attempted
3. Use the manual validation commands to test specific files
4. Consider running the aggressive fix mode for complex issues

---

**Note**: These tools are designed to work together to maintain YAML quality. Start with the auto-fixer, then use pre-commit hooks to prevent future issues.
