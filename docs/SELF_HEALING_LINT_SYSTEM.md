# Self-Healing Lint System

A comprehensive automated system that detects and fixes lint errors and warnings after each build, then triggers new builds to ensure code quality.

## Overview

The Self-Healing Lint System automatically:

- Monitors for lint issues after builds
- Applies multiple fix strategies
- Commits and pushes fixes
- Triggers new builds
- Provides continuous monitoring

## Components

### 1. Core Self-Healing System (`scripts/self-healing-lint-system.cjs`)

The main system that orchestrates the healing process.

**Features:**

- Multiple lint fix strategies
- Git integration for committing fixes
- Build retry mechanism
- Comprehensive logging

### 2. Build Integration (`scripts/build-with-self-healing.cjs`)

Integrates the self-healing system with the build process.

**Features:**

- Automatic healing after builds
- Retry mechanism for failed builds
- Integration with existing build pipeline

### 3. Post-Build Healing (`scripts/post-build-lint-healing.cjs`)

Runs automatically after each build to fix any lint issues.

**Features:**

- Multiple healing iterations
- Automatic fix application
- Issue reduction tracking

### 4. Continuous Monitoring (`scripts/continuous-lint-healing.cjs`)

Continuously monitors for lint issues and applies fixes.

**Features:**

- File watching for changes
- Periodic health checks
- Automatic healing triggers

### 5. GitHub Actions Workflow (`.github/workflows/self-healing-lint.yml`)

Automated CI/CD integration.

**Features:**

- Scheduled runs every hour
- Build completion triggers
- Automatic fix commits

### 6. Netlify Function (`netlify/functions/self-healing-build.js`)

Netlify-specific integration for build hooks.

**Features:**

- Build completion webhooks
- Automatic healing triggers
- Netlify-specific optimizations

## Usage

### Manual Usage

```bash
# Start the self-healing system
npm run self-healing:start

# Run build with healing
npm run self-healing:build

# Run post-build healing
npm run self-healing:post-build

# Start continuous monitoring
npm run self-healing:continuous

# Build with automatic healing
npm run build:with-healing

# Manual lint healing
npm run lint:heal
npm run heal:lint

# Continuous healing
npm run heal:continuous
```

### Automated Usage

The system runs automatically through:

1. **GitHub Actions**: Scheduled every hour and on build completion
2. **Netlify Functions**: Triggered by build webhooks
3. **Post-Build Hooks**: Runs after every build
4. **Continuous Monitoring**: Watches for file changes

## Fix Strategies

The system applies multiple strategies in order:

### 1. Auto-Fix (`auto-fix`)

- Runs `npm run lint:fix`
- Falls back to `npx eslint --fix .`
- Checks for issue reduction

### 2. Skip Unfixable (`skip-unfixable`)

- Creates temporary lenient ESLint config
- Ignores common unfixable issues
- Applies fixes to remaining issues

### 3. Relax Rules (`relax-rules`)

- Updates ESLint configuration
- Makes rules more lenient
- Re-runs lint fix

### 4. Manual Fix (`manual-fix`)

- Applies specific fixes for common issues:
  - Unused variables (add underscore prefix)
  - Console statements (comment out)
  - Const issues (let to const conversion)

### 5. Skip Lint (`skip-lint`)

- Updates build script to skip linting
- Ensures build completion
- Last resort option

## Configuration

### Environment Variables

```bash
# Git configuration for automated commits
GIT_AUTHOR_NAME="Self-Healing Bot"
GIT_AUTHOR_EMAIL="self-healing@zion.app"

# Build configuration
BUILD_COMMAND="npm run build"
NODE_OPTIONS="--max-old-space-size=8192"
```

### System Configuration

The system uses these default settings:

```javascript
const CONFIG = {
  maxRetries: 5,
  maxBuildRetries: 3,
  buildTimeout: 1800000, // 30 minutes
  lintTimeout: 300000, // 5 minutes
  healthCheckInterval: 60000, // 1 minute
  gitBranch: 'auto/lint-fixes',
  maxIssuesBeforeHealing: 5,
};
```

## Monitoring and Logs

### Log Files

- `logs/self-healing-lint.log` - Main system logs
- `logs/netlify-self-heal.log` - Netlify integration logs

### Health Checks

The system performs regular health checks:

```bash
# Check system status
npm run self-healing:status

# View logs
tail -f logs/self-healing-lint.log

# Monitor in real-time
npm run heal:continuous
```

## Integration Points

### 1. Build Pipeline Integration

The system integrates with the existing build pipeline:

```json
{
  "scripts": {
    "build:with-healing": "npm run build && npm run self-healing:post-build",
    "postbuild": "npm run self-healing:post-build"
  }
}
```

### 2. GitHub Actions Integration

Automated workflow runs:

- Every hour (scheduled)
- On push to main/develop
- On pull requests
- On build completion

### 3. Netlify Integration

Netlify function triggers on:

- Build success
- Build failure
- Site updates

### 4. File Watching

Continuous monitoring watches:

- `src/**/*.{js,jsx,ts,tsx}`
- `pages/**/*.{js,jsx,ts,tsx}`
- `components/**/*.{js,jsx,ts,tsx}`
- `utils/**/*.{js,jsx,ts,tsx}`
- `hooks/**/*.{js,jsx,ts,tsx}`
- `context/**/*.{js,jsx,ts,tsx}`

## Error Handling

### Retry Mechanism

The system implements multiple retry strategies:

1. **Lint Fix Retries**: Up to 5 attempts with different strategies
2. **Build Retries**: Up to 3 attempts after fixes
3. **Cooldown Periods**: Prevents excessive retries

### Fallback Strategies

If primary strategies fail:

1. **Alternative Commands**: Different lint fix approaches
2. **Manual Fixes**: Specific issue type handling
3. **Config Relaxation**: More lenient rules
4. **Build Skipping**: Skip linting entirely

### Error Recovery

The system handles various error scenarios:

- **Build Failures**: Automatic retry with fixes
- **Lint Errors**: Multiple fix strategies
- **Git Issues**: Safe commit and push handling
- **Network Issues**: Retry with exponential backoff

## Performance Considerations

### Memory Management

- Configurable memory limits
- Automatic cleanup of temporary files
- Efficient file watching

### Timeout Handling

- Build timeout: 30 minutes
- Lint timeout: 5 minutes
- Health check interval: 1 minute

### Resource Optimization

- Selective file watching
- Efficient issue parsing
- Minimal disk I/O

## Security Considerations

### Git Security

- Uses dedicated bot account
- Safe commit messages
- Force push protection

### File System Security

- Temporary file cleanup
- Safe file operations
- Permission handling

### Network Security

- Secure webhook handling
- API rate limiting
- Error sanitization

## Troubleshooting

### Common Issues

1. **Build Failures**

   ```bash
   # Check build logs
   npm run build:monitor

   # Run healing manually
   npm run self-healing:post-build
   ```

2. **Lint Issues Persist**

   ```bash
   # Check lint status
   npm run lint

   # Run manual healing
   npm run lint:heal
   ```

3. **Git Issues**

   ```bash
   # Check git status
   git status

   # Reset if needed
   git reset --hard HEAD
   ```

### Debug Mode

Enable debug logging:

```bash
# Set debug environment
DEBUG=true npm run self-healing:start

# View detailed logs
tail -f logs/self-healing-lint.log | grep DEBUG
```

### Manual Override

If the system gets stuck:

```bash
# Stop all processes
pkill -f "self-healing"

# Clear temporary files
rm -rf .eslintrc.temp.json .gitcommitmessage

# Restart system
npm run self-healing:start
```

## Best Practices

### 1. Regular Monitoring

- Check logs regularly
- Monitor build success rates
- Review automated commits

### 2. Configuration Management

- Keep configurations in version control
- Document custom rules
- Regular configuration reviews

### 3. Performance Optimization

- Monitor system resource usage
- Adjust timeouts as needed
- Optimize file watching patterns

### 4. Security Maintenance

- Regular bot account rotation
- Monitor git permissions
- Review webhook security

## Future Enhancements

### Planned Features

1. **Machine Learning Integration**
   - Pattern recognition for common issues
   - Predictive fix suggestions
   - Learning from successful fixes

2. **Advanced Analytics**
   - Issue trend analysis
   - Performance metrics
   - Success rate tracking

3. **Multi-Repository Support**
   - Monorepo handling
   - Cross-repository fixes
   - Centralized configuration

4. **Enhanced Notifications**
   - Slack integration
   - Email notifications
   - Custom webhook support

### Contributing

To contribute to the self-healing system:

1. Fork the repository
2. Create a feature branch
3. Implement changes
4. Add tests
5. Submit a pull request

## Support

For issues or questions:

1. Check the troubleshooting section
2. Review logs for error details
3. Create an issue with detailed information
4. Contact the development team

---

**Note**: This system is designed to be autonomous and self-healing. It will automatically fix issues and trigger new builds without manual intervention. Monitor the system regularly to ensure it's working as expected.
