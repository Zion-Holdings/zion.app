# Self-Healing System Troubleshooting Guide

## Quick Diagnosis

### System Status Check
```bash
# Check overall system status
npm run netlify:status

# Check individual components
npm run self-heal:status
npm run build:monitor:status

# Check daemon status
node scripts/netlify-healing-daemon.cjs status
```

### Health Check
```bash
# Perform comprehensive health check
npm run self-heal:health

# Check specific components
npm run auto-fix:test
npm run build:monitor:watch
```

## Common Issues and Solutions

### 1. System Won't Start

#### Symptoms
- Daemon fails to start
- Error messages about missing dependencies
- Permission denied errors

#### Diagnosis
```bash
# Check if daemon is already running
ps aux | grep netlify-healing-daemon

# Check file permissions
ls -la scripts/netlify-*.cjs

# Check Node.js version
node --version

# Check npm version
npm --version
```

#### Solutions

**Permission Issues**
```bash
# Fix file permissions
chmod +x scripts/netlify-*.cjs
chmod -R 755 scripts/

# Fix ownership (if needed)
sudo chown -R $(whoami):$(whoami) .
```

**Missing Dependencies**
```bash
# Install missing dependencies
npm install

# Install specific dependencies
npm install --save-dev @types/node

# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Node.js Version Issues**
```bash
# Check required version
node --version  # Should be 18+

# Update Node.js (using nvm)
nvm install 18
nvm use 18

# Or update system Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Build Still Failing

#### Symptoms
- Build failures persist after healing
- Error messages in build logs
- Timeout issues continue

#### Diagnosis
```bash
# Check build logs
tail -f build.log
tail -f error.log

# Check recent build history
cat logs/build-history.json

# Analyze specific errors
npm run logs:scan
```

#### Solutions

**Memory Issues**
```bash
# Increase memory allocation
export NODE_OPTIONS="--max-old-space-size=8192"

# Update netlify.toml
echo 'NODE_OPTIONS = "--max-old-space-size=8192"' >> netlify.toml

# Clean cache
npm run clean:cache
```

**Timeout Issues**
```bash
# Increase build timeout
echo 'command_timeout = "45m"' >> netlify.toml

# Optimize build process
npm run optimize:build

# Enable parallel builds
echo 'NEXT_BUILD_WORKERS = "4"' >> netlify.toml
```

**Dependency Issues**
```bash
# Clean dependencies
npm run clean:deps

# Update dependencies
npm run deps:update

# Fix peer dependencies
npm install --legacy-peer-deps
```

### 3. Performance Issues

#### Symptoms
- Slow build times
- High memory usage
- System unresponsiveness

#### Diagnosis
```bash
# Check resource usage
npm run monitor:resources

# Analyze performance
npm run analyze:performance

# Check bundle size
npm run bundle:analyze
```

#### Solutions

**Memory Optimization**
```bash
# Optimize memory usage
npm run optimize:memory

# Clean unnecessary files
npm run clean:all

# Optimize bundle
npm run optimize:bundle
```

**Build Optimization**
```bash
# Enable build caching
echo 'NEXT_PRIVATE_BUILD_CACHE = "true"' >> netlify.toml

# Disable source maps
echo 'NEXT_DISABLE_SOURCE_MAPS = "true"' >> netlify.toml

# Optimize CSS
echo 'NEXT_DISABLE_CSS_INLINE = "true"' >> netlify.toml
```

### 4. Logging Issues

#### Symptoms
- No logs generated
- Incomplete log information
- Log file permission errors

#### Diagnosis
```bash
# Check log directory
ls -la logs/

# Check log file permissions
ls -la logs/*.log

# Check disk space
df -h

# Check log rotation
npm run logs:rotate
```

#### Solutions

**Permission Issues**
```bash
# Create logs directory
mkdir -p logs

# Fix permissions
chmod 755 logs/
chmod 644 logs/*.log

# Fix ownership
chown -R $(whoami):$(whoami) logs/
```

**Disk Space Issues**
```bash
# Clean old logs
npm run logs:purge

# Rotate logs
npm run logs:rotate

# Clean disk space
npm run clean:disk
```

### 5. Daemon Issues

#### Symptoms
- Daemon not running
- Daemon crashes frequently
- Process management issues

#### Diagnosis
```bash
# Check daemon process
ps aux | grep netlify-healing-daemon

# Check daemon logs
tail -f logs/healing-daemon.log

# Check PID file
cat logs/healing-daemon.pid
```

#### Solutions

**Daemon Not Starting**
```bash
# Kill existing processes
pkill -f netlify-healing-daemon

# Remove PID file
rm -f logs/healing-daemon.pid

# Start daemon
node scripts/netlify-healing-daemon.cjs start
```

**Daemon Crashes**
```bash
# Check for errors
tail -f logs/healing-daemon.log

# Restart daemon
node scripts/netlify-healing-daemon.cjs restart

# Check system resources
npm run monitor:resources
```

### 6. Configuration Issues

#### Symptoms
- Environment variables not recognized
- Configuration files not found
- Settings not applied

#### Diagnosis
```bash
# Check environment variables
env | grep -E "(SELF_HEALING|AUTO_FIX|BUILD_MONITOR)"

# Check configuration files
ls -la netlify.toml
ls -la package.json

# Validate configuration
npm run env:validate
```

#### Solutions

**Environment Variables**
```bash
# Set environment variables
export ENABLE_SELF_HEALING=true
export AUTO_FIX_BUILD_ISSUES=true
export BUILD_MONITORING=true

# Add to .env file
echo 'ENABLE_SELF_HEALING=true' >> .env.local
echo 'AUTO_FIX_BUILD_ISSUES=true' >> .env.local
echo 'BUILD_MONITORING=true' >> .env.local
```

**Configuration Files**
```bash
# Recreate netlify.toml
npm run auto-fix:all

# Validate package.json
npm run env:validate

# Check for syntax errors
node -c scripts/netlify-*.cjs
```

## Advanced Troubleshooting

### 1. Debug Mode

#### Enable Debug Logging
```bash
# Enable debug mode
DEBUG=self-healing:* npm run netlify:heal

# Verbose output
npm run self-heal:health --verbose

# Debug specific component
DEBUG=build-monitor:* npm run build:monitor:start
```

#### Debug Configuration
```javascript
// Add to scripts for debug mode
const debug = require('debug')('self-healing:main');

debug('Starting self-healing system');
debug('Configuration:', CONFIG);
debug('Environment:', process.env);
```

### 2. Performance Profiling

#### Memory Profiling
```bash
# Enable memory profiling
NODE_OPTIONS="--inspect --max-old-space-size=8192" npm run netlify:heal

# Use Chrome DevTools
# Open chrome://inspect and connect to Node.js process
```

#### CPU Profiling
```bash
# Enable CPU profiling
NODE_OPTIONS="--prof" npm run netlify:heal

# Analyze profile
node --prof-process isolate-*.log > profile.txt
```

### 3. Network Issues

#### Diagnosis
```bash
# Check network connectivity
curl -I https://api.netlify.com

# Check DNS resolution
nslookup api.netlify.com

# Check firewall settings
sudo ufw status
```

#### Solutions
```bash
# Use offline mode
export NPM_FLAGS="--prefer-offline --legacy-peer-deps"

# Configure proxy (if needed)
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080

# Use alternative registry
npm config set registry https://registry.npmjs.org/
```

### 4. Security Issues

#### Diagnosis
```bash
# Check for vulnerabilities
npm audit

# Check file permissions
find . -type f -exec ls -la {} \;

# Check for sensitive data in logs
grep -r "password\|secret\|key" logs/
```

#### Solutions
```bash
# Fix vulnerabilities
npm audit fix

# Secure file permissions
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
chmod +x scripts/*.cjs

# Remove sensitive data
npm run logs:clean
```

## Recovery Procedures

### 1. Complete System Reset

```bash
# Stop all processes
npm run netlify:stop
pkill -f netlify

# Clean everything
npm run clean:all
rm -rf logs/
rm -rf .next/
rm -rf node_modules/

# Reinstall
npm install

# Restart system
npm run netlify:heal
```

### 2. Rollback to Previous Version

```bash
# Check git history
git log --oneline -10

# Revert to previous commit
git revert HEAD

# Deploy without self-healing
npm run build:netlify:prepare
```

### 3. Emergency Mode

```bash
# Disable self-healing
export ENABLE_SELF_HEALING=false
export AUTO_FIX_BUILD_ISSUES=false

# Use minimal build
npm run build:fast

# Monitor manually
npm run monitor:manual
```

## Monitoring and Alerts

### 1. Set Up Monitoring

```bash
# Start monitoring
npm run monitor:all

# Set up alerts
npm run logs:alerts

# Configure notifications
npm run setup:notifications
```

### 2. Alert Configuration

```javascript
// Example alert configuration
const alerts = {
  buildFailure: {
    threshold: 3,
    window: '1h',
    action: 'restart-daemon',
    notification: 'slack'
  },
  memoryUsage: {
    threshold: 0.9,
    window: '5m',
    action: 'clean-cache',
    notification: 'email'
  }
};
```

### 3. Health Check Schedule

```bash
# Add to crontab
*/5 * * * * npm run self-heal:health
0 2 * * * npm run analyze:performance
0 3 * * 0 npm run logs:rotate
```

## Getting Help

### 1. Self-Diagnosis

```bash
# Run comprehensive diagnosis
npm run diagnose:all

# Generate report
npm run generate:report

# Check system health
npm run health:check
```

### 2. Log Analysis

```bash
# Analyze logs
npm run logs:analyze

# Generate summary
npm run logs:summary

# Export logs
npm run logs:export
```

### 3. Support Resources

- **Documentation**: `docs/SELF_HEALING_SYSTEM.md`
- **Deployment Guide**: `docs/SELF_HEALING_DEPLOYMENT.md`
- **API Reference**: See component documentation
- **GitHub Issues**: Report bugs and feature requests

### 4. Contact Information

When seeking help, include:
- System status output
- Relevant log files
- Environment information
- Steps to reproduce
- Expected vs actual behavior
- Error messages and stack traces 