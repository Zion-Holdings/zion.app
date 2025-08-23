# Self-Healing Lint System - Quick Reference

## 🚀 Quick Start Commands

### Basic Usage

```bash
# Fix lint issues manually
npm run lint:heal

# Build with automatic healing
npm run build:with-healing

# Start continuous monitoring
npm run heal:continuous

# Start the healing system
npm run self-healing:start
```

### Advanced Commands

```bash
# Post-build healing only
npm run self-healing:post-build

# Build with healing integration
npm run self-healing:build

# Continuous healing mode
npm run heal:continuous
```

## 🔧 Fix Strategies

The system applies these strategies in order:

1. **Auto-Fix** - Standard ESLint auto-fix
2. **Skip Unfixable** - Ignore common unfixable issues
3. **Relax Rules** - Make ESLint rules more lenient
4. **Manual Fix** - Apply specific fixes for common issues
5. **Skip Lint** - Skip linting entirely (last resort)

## 📊 Monitoring

### Log Files

- `logs/self-healing-lint.log` - Main system logs
- `logs/netlify-self-heal.log` - Netlify integration logs

### Health Checks

```bash
# View real-time logs
tail -f logs/self-healing-lint.log

# Check system status
npm run self-healing:status

# Monitor in real-time
npm run heal:continuous
```

## 🔄 Automation

### GitHub Actions

- Runs every hour automatically
- Triggers on build completion
- Commits fixes automatically

### Netlify Integration

- Triggers on build webhooks
- Automatic healing after deployments
- Build success/failure handling

### Continuous Monitoring

- Watches source files for changes
- Applies fixes in real-time
- Periodic health checks

## 🛠️ Troubleshooting

### Common Issues

**System not starting:**

```bash
# Check dependencies
npm install

# Clear cache
npm run clean:cache

# Restart system
npm run self-healing:start
```

**Fixes not applying:**

```bash
# Manual fix
npm run lint:heal

# Check lint status
npm run lint

# Force rebuild
npm run build:with-healing
```

**Git issues:**

```bash
# Check git status
git status

# Reset if needed
git reset --hard HEAD

# Restart healing
npm run self-healing:start
```

### Debug Mode

```bash
# Enable debug logging
DEBUG=true npm run self-healing:start

# View debug logs
tail -f logs/self-healing-lint.log | grep DEBUG
```

## 📋 Configuration

### Environment Variables

```bash
# Git configuration
GIT_AUTHOR_NAME="Self-Healing Bot"
GIT_AUTHOR_EMAIL="self-healing@zion.app"

# Build configuration
BUILD_COMMAND="npm run build"
NODE_OPTIONS="--max-old-space-size=8192"
```

### System Settings

- **Max Retries**: 5 lint attempts, 3 build attempts
- **Timeouts**: 30min build, 5min lint
- **Health Checks**: Every 1 minute
- **Git Branch**: `auto/lint-fixes`

## 🎯 Best Practices

### For Developers

1. **Let the system run automatically** - Don't interfere unless necessary
2. **Check logs regularly** - Monitor system health
3. **Review automated commits** - Ensure fixes are appropriate
4. **Report issues** - Create issues for persistent problems

### For DevOps

1. **Monitor build success rates** - Track system effectiveness
2. **Review resource usage** - Ensure system isn't consuming too much
3. **Update configurations** - Keep rules and settings current
4. **Backup before major changes** - Protect against system issues

## 📞 Support

### Quick Help

- **System stuck**: `pkill -f "self-healing" && npm run self-healing:start`
- **Clear temporary files**: `rm -rf .eslintrc.temp.json .gitcommitmessage`
- **Reset system**: `git reset --hard HEAD && npm run self-healing:start`

### Documentation

- **[Full System Guide](SELF_HEALING_LINT_SYSTEM.md)** - Comprehensive documentation
- **[GitHub Actions Workflow](../.github/workflows/self-healing-lint.yml)** - Automation details
- **[Netlify Function](../netlify/functions/self-healing-build.js)** - Deployment integration

### Logs Location

- Main logs: `logs/self-healing-lint.log`
- Netlify logs: `logs/netlify-self-heal.log`
- Build logs: `logs/build.log`

---

**Remember**: The self-healing system is designed to be autonomous. It will automatically fix issues and trigger new builds without manual intervention. Monitor the system regularly to ensure it's working as expected.
