# GitHub Actions Workflow Auto-Healing System

## Overview

This repository includes a comprehensive auto-healing system for GitHub Actions workflows that automatically detects, analyzes, and fixes common workflow issues. The system is designed to maintain workflow health and reduce manual intervention.

## System Components

### 1. Workflow Auto-Healer Workflow (`.github/workflows/workflow-auto-healer.yml`)

**Purpose**: Main automation workflow that monitors and heals other workflows

**Triggers**:
- When any workflow completes (success or failure)
- Every 6 hours on schedule
- Manual dispatch

**Features**:
- Automatically runs health monitoring
- Applies YAML fixes
- Fixes structural issues
- Creates pull requests for fixes
- Monitors workflow failures and creates issues

### 2. Enhanced Workflow Monitor (`automation/enhanced-workflow-monitor.cjs`)

**Purpose**: Advanced workflow analysis and health scoring

**Capabilities**:
- Comprehensive workflow analysis
- Health scoring (0-100)
- Issue detection and categorization
- Warning identification
- Improvement suggestions
- Detailed reporting

### 3. YAML Fixer (`automation/fix-workflow-yaml.cjs`)

**Purpose**: Fixes common YAML syntax issues

**Fixes Applied**:
- Quotes unquoted GitHub expressions
- Fixes step indentation
- Removes placeholder text
- Fixes malformed cron expressions
- Adjusts permissions as needed

### 4. Comprehensive Workflow Fixer (`comprehensive-workflow-fixer.py`)

**Purpose**: Fixes structural and content issues

**Fixes Applied**:
- Replaces workflow name placeholders
- Adds missing steps sections
- Adds permissions sections
- Adds concurrency controls
- Adds timeout specifications

## How It Works

### 1. Automatic Monitoring

The system continuously monitors all workflows through:
- **Event-driven triggers**: Responds to workflow completions
- **Scheduled checks**: Runs every 6 hours
- **Manual triggers**: Can be run on-demand

### 2. Issue Detection

The system identifies:
- **Critical Issues** (reduce health score by 25-40 points):
  - Missing `runs-on` specification
  - Missing `steps` section
  - YAML syntax errors

- **Warnings** (reduce health score by 5-10 points):
  - Missing checkout actions
  - No timeout specified
  - No permissions specified
  - No concurrency control
  - High frequency execution
  - High memory usage

### 3. Automatic Fixes

The system automatically applies fixes for:
- YAML syntax issues
- Missing workflow sections
- Structural problems
- Permissions and concurrency settings

### 4. Health Scoring

Each workflow receives a health score (0-100):
- **90-100**: Excellent - No issues
- **80-89**: Good - Minor warnings
- **70-79**: Fair - Some warnings
- **60-69**: Poor - Multiple issues
- **0-59**: Critical - Major problems

## Usage

### Running the Auto-Healer Manually

```bash
# Run the enhanced monitor
node automation/enhanced-workflow-monitor.cjs

# Run YAML fixes
node automation/fix-workflow-yaml.cjs

# Run comprehensive fixes
python3 comprehensive-workflow-fixer.py

# Run the original health monitor
node automation/workflow-health-monitor.cjs
```

### Triggering the Auto-Healer Workflow

1. **Via GitHub UI**:
   - Go to Actions tab
   - Select "Workflow Auto-Healer"
   - Click "Run workflow"

2. **Via GitHub CLI**:
   ```bash
   gh workflow run workflow-auto-healer.yml
   ```

3. **Via API**:
   ```bash
   curl -X POST \
     -H "Authorization: token $GITHUB_TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     https://api.github.com/repos/OWNER/REPO/actions/workflows/workflow-auto-healer.yml/dispatches
   ```

## Configuration

### Environment Variables

The system uses standard GitHub Actions environment variables:
- `GITHUB_TOKEN`: For API access and workflow operations
- `NODE_VERSION`: Node.js version (defaults to 20)

### Customization

You can customize the auto-healing behavior by modifying:

1. **Schedule**: Change the cron expression in `workflow-auto-healer.yml`
2. **Triggers**: Modify the `on` section to include/exclude specific workflows
3. **Fix Strategies**: Adjust the fix scripts to handle specific issues
4. **Health Scoring**: Modify scoring weights in the enhanced monitor

## Monitoring and Reporting

### Health Reports

The system generates several types of reports:

1. **Enhanced Health Report** (`automation/reports/workflow-health-report.md`):
   - Comprehensive analysis
   - Individual workflow scores
   - Specific issues and warnings
   - Improvement suggestions

2. **Health Data** (`automation/logs/enhanced-health-data.json`):
   - Machine-readable health data
   - Historical tracking
   - Trend analysis

3. **Auto-Heal Report** (generated during auto-healing):
   - Summary of fixes applied
   - Current health status
   - Recommendations

### Logs

All system activities are logged to:
- `automation/logs/enhanced-monitor.log`
- `automation/logs/workflow-health-monitor.log`

## Best Practices

### 1. Workflow Design

- Always include `runs-on` specification
- Define appropriate timeouts
- Set proper permissions
- Use concurrency controls
- Include error handling

### 2. Monitoring

- Run the auto-healer regularly
- Review health reports monthly
- Address persistent issues manually
- Monitor health score trends

### 3. Maintenance

- Keep fix scripts updated
- Review and adjust health scoring
- Monitor false positives
- Update workflow templates

## Troubleshooting

### Common Issues

1. **Workflow Not Triggering**:
   - Check workflow file syntax
   - Verify trigger conditions
   - Check permissions

2. **Fixes Not Applied**:
   - Review backup files
   - Check file permissions
   - Verify script execution

3. **Health Score Not Improving**:
   - Run comprehensive analysis
   - Check for new issue types
   - Review scoring weights

### Debug Mode

Enable debug logging by setting:
```bash
export DEBUG=true
```

### Manual Recovery

If the auto-healer fails:
1. Check workflow logs
2. Review generated reports
3. Run fix scripts manually
4. Restore from backups if needed

## Integration

### With Other Systems

The auto-healing system can integrate with:
- **CI/CD pipelines**: Trigger fixes before deployment
- **Monitoring systems**: Alert on health score drops
- **Issue trackers**: Create tickets for manual fixes
- **Slack/Teams**: Notify teams of workflow issues

### API Usage

The system provides programmatic access:
```javascript
const EnhancedWorkflowMonitor = require('./automation/enhanced-workflow-monitor.cjs');
const monitor = new EnhancedWorkflowMonitor();
const healthData = await monitor.runComprehensiveAnalysis();
```

## Future Enhancements

### Planned Features

1. **Machine Learning**: Predict workflow failures
2. **Smart Fixes**: Context-aware issue resolution
3. **Performance Optimization**: Faster analysis and fixes
4. **Integration APIs**: Connect with external systems
5. **Custom Rules**: User-defined health checks

### Contributing

To contribute to the auto-healing system:
1. Fork the repository
2. Create a feature branch
3. Implement improvements
4. Add tests
5. Submit a pull request

## Support

For issues or questions:
1. Check the logs and reports
2. Review this documentation
3. Create an issue in the repository
4. Contact the development team

## License

This auto-healing system is part of the main repository and follows the same license terms.

---

*Last updated: August 2025*
*Version: 1.0.0*