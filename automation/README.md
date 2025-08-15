# 🛡️ Build Quality Automation System

A comprehensive automation system to prevent build failures, syntax errors, and quality issues before they reach production.

## 🎯 Overview

This system provides multiple layers of quality protection:

1. **Build Quality Guardian** - Analyzes code for syntax errors and structural issues
2. **Pre-Commit Guardian** - Blocks commits with quality issues
3. **CI Quality Pipeline** - Comprehensive quality checks in CI/CD
4. **Build Quality Orchestrator** - Coordinates all quality checks

## 🚀 Quick Start

### 1. Run Quality Check

```bash
# Check all files for quality issues
node automation/build-quality-guardian.cjs

# Run in development mode (non-blocking)
node automation/build-quality-orchestrator.cjs run development

# Run in production mode (blocking)
node automation/build-quality-orchestrator.cjs run production
```

### 2. Auto-fix Common Issues

```bash
# Automatically fix syntax errors
node automation/build-quality-orchestrator.cjs autofix
```

### 3. Pre-commit Check

```bash
# Check staged files before commit
node automation/pre-commit-guardian.cjs
```

## 📋 Components

### 🔍 Build Quality Guardian (`build-quality-guardian.cjs`)

**Purpose**: Analyzes all TypeScript/JSX files for quality issues

**Detects**:
- Missing React component structure
- Syntax errors (missing spaces before braces)
- Common React anti-patterns
- TypeScript issues
- Import/export problems

**Usage**:
```bash
node automation/build-quality-guardian.cjs
```

**Output**: 
- JSON report: `public/reports/build-quality/latest.json`
- HTML report: `public/reports/build-quality/index.html`
- Markdown report: `public/reports/build-quality/report.md`

### 🚫 Pre-Commit Guardian (`pre-commit-guardian.cjs`)

**Purpose**: Blocks commits with quality issues

**Features**:
- Analyzes only staged files
- Auto-fixes common issues
- Creates backups before fixing
- Generates detailed reports

**Usage**:
```bash
node automation/pre-commit-guardian.cjs
```

**Output**:
- JSON report: `public/reports/pre-commit/pre-commit-latest.json`
- Markdown report: `public/reports/pre-commit/pre-commit-report.md`

### 🚀 CI Quality Pipeline (`ci-quality-pipeline.cjs`)

**Purpose**: Comprehensive quality checks for CI/CD environments

**Stages**:
1. **Pre-commit Check** - Quality of staged changes
2. **Build Quality Check** - Overall codebase quality
3. **Build Test** - Actual build verification
4. **Post-build Analysis** - Build artifact verification

**Usage**:
```bash
node automation/ci-quality-pipeline.cjs
```

**Output**:
- JSON report: `public/reports/ci-quality/ci-latest.json`
- HTML report: `public/reports/ci-quality/index.html`
- Markdown report: `public/reports/ci-quality/ci-report.md`

### 🎯 Build Quality Orchestrator (`build-quality-orchestrator.cjs`)

**Purpose**: Coordinates all quality checks based on environment

**Modes**:
- **Development**: Non-blocking, auto-fix enabled
- **Staging**: Blocking, comprehensive checks
- **Production**: Strict blocking, all checks required

**Usage**:
```bash
# Run in auto-detected mode
node automation/build-quality-orchestrator.cjs run

# Run in specific mode
node automation/build-quality-orchestrator.cjs run production

# Run scheduled check
node automation/build-quality-orchestrator.cjs scheduled daily

# Auto-fix issues
node automation/build-quality-orchestrator.cjs autofix
```

## 🔧 Configuration

### Environment Variables

```bash
# CI/CD Configuration
NODE_ENV=production
SLACK_WEBHOOK_URL=https://hooks.slack.com/...
EMAIL_NOTIFICATIONS=team@company.com
GITHUB_TOKEN=ghp_...

# Quality Thresholds
MAX_CRITICAL_ISSUES=5
MAX_WARNING_ISSUES=20
BUILD_TIME_THRESHOLD=300
```

### Customization

Each component can be customized by modifying the `CONFIG` object:

```javascript
const CONFIG = {
  maxIssues: 10,           // Maximum critical issues before blocking
  autoFix: true,           // Enable auto-fixing
  blocking: true,          // Block on failures
  includePatterns: [       // Files to check
    'pages/**/*.tsx',
    'components/**/*.tsx'
  ],
  excludePatterns: [       // Files to ignore
    'node_modules/**',
    '.next/**'
  ]
};
```

## 📊 Reports

### Report Locations

All reports are generated in the `public/reports/` directory:

```
public/reports/
├── build-quality/          # Build quality guardian reports
├── pre-commit/            # Pre-commit check reports
├── ci-quality/            # CI pipeline reports
└── build-quality-orchestrator/  # Orchestrator reports
```

### Report Types

- **JSON**: Machine-readable data for CI/CD integration
- **HTML**: Beautiful web interface for human review
- **Markdown**: GitHub-compatible reports for PRs

## 🔄 Integration

### Git Hooks

Add to `.git/hooks/pre-commit`:

```bash
#!/bin/bash
node automation/pre-commit-guardian.cjs
```

### Package.json Scripts

```json
{
  "scripts": {
    "quality:check": "node automation/build-quality-guardian.cjs",
    "quality:pre-commit": "node automation/pre-commit-guardian.cjs",
    "quality:ci": "node automation/ci-quality-pipeline.cjs",
    "quality:orchestrate": "node automation/build-quality-orchestrator.cjs run",
    "quality:autofix": "node automation/build-quality-orchestrator.cjs autofix"
  }
}
```

### CI/CD Integration

#### GitHub Actions

```yaml
name: Quality Check
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run quality:ci
```

#### Netlify

```toml
[build]
  command = "npm run quality:orchestrate && npm run export"
  publish = "out"
```

## 🚨 Common Issues & Solutions

### Missing React Component Structure

**Problem**: File has imports but no `export default function`

**Solution**: Auto-fix adds proper component structure

### Syntax Errors

**Problem**: Missing spaces before opening braces

**Examples**:
```javascript
// ❌ Bad
function Component(){
if(condition){
for(let i=0;i<10;i++){

// ✅ Good
function Component() {
if (condition) {
for (let i = 0; i < 10; i++) {
```

**Solution**: Auto-fix corrects these patterns

### Build Failures

**Problem**: Next.js build fails due to syntax errors

**Solution**: Quality checks catch issues before build

## 📈 Monitoring & Metrics

### Quality Metrics

- Total files analyzed
- Critical issues count
- Warning issues count
- Build success rate
- Auto-fix success rate

### Performance Metrics

- Analysis time
- Build time
- Issue resolution time

### Historical Data

Reports are timestamped and stored for trend analysis:

```bash
# View historical reports
ls -la public/reports/build-quality/
ls -la public/reports/ci-quality/
```

## 🛠️ Troubleshooting

### Common Errors

1. **Permission Denied**: Ensure scripts are executable
   ```bash
   chmod +x automation/*.cjs
   ```

2. **Module Not Found**: Check Node.js version and dependencies
   ```bash
   node --version  # Should be >= 16
   npm install
   ```

3. **Git Errors**: Ensure running from git repository
   ```bash
   git status  # Should work
   ```

### Debug Mode

Enable verbose logging:

```bash
DEBUG=true node automation/build-quality-orchestrator.cjs run development
```

### Log Files

Check logs for detailed information:

```bash
tail -f automation/logs/build-quality-orchestrator.log
tail -f automation/logs/build-quality-guardian.log
```

## 🔮 Future Enhancements

### Planned Features

- **AI-powered Issue Detection**: Machine learning for better pattern recognition
- **Custom Rule Engine**: User-defined quality rules
- **Integration APIs**: Webhook support for external systems
- **Performance Profiling**: Build performance analysis
- **Security Scanning**: Vulnerability detection

### Contributing

To add new quality checks:

1. Extend the `criticalPatterns` array in `build-quality-guardian.cjs`
2. Add corresponding auto-fix logic in `pre-commit-guardian.cjs`
3. Update documentation and tests

## 📞 Support

### Getting Help

1. Check the logs: `automation/logs/`
2. Review reports: `public/reports/`
3. Run with debug: `DEBUG=true node automation/...`
4. Check configuration in each `.cjs` file

### Reporting Issues

Include:
- Error message
- Log file contents
- Node.js version
- Operating system
- Steps to reproduce

---

**Built with ❤️ for better code quality**