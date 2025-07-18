# Self-Healing System Deployment Guide

## Overview

This guide provides step-by-step instructions for deploying and configuring the self-healing system in various environments, including Netlify, local development, and other hosting platforms.

## Prerequisites

### System Requirements
- Node.js 18+ 
- npm 8+
- Git
- Access to Netlify dashboard
- Environment variables configured

### Required Permissions
- Write access to project files
- Ability to modify build configurations
- Access to system logs
- Permission to install dependencies

## Deployment Steps

### 1. Local Development Setup

#### Install Dependencies
```bash
# Clone the repository
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app

# Install dependencies
npm install

# Install self-healing system dependencies
npm install --save-dev @types/node
```

#### Configure Environment
```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
nano .env.local
```

Required environment variables:
```bash
# Self-healing system
ENABLE_SELF_HEALING=true
AUTO_FIX_BUILD_ISSUES=true
BUILD_MONITORING=true

# Performance optimization
NODE_OPTIONS=--max-old-space-size=8192
NEXT_BUILD_WORKERS=4
NEXT_PRIVATE_BUILD_CACHE=true
SKIP_TYPE_CHECK=true
```

#### Test Local Setup
```bash
# Test self-healing system
npm run self-heal:start

# Test build monitoring
npm run build:monitor:start

# Test auto-fix functionality
npm run auto-fix:all

# Check system status
npm run netlify:status
```

### 2. Netlify Deployment

#### Automatic Deployment

The self-healing system is automatically deployed when you push to the main branch. The system will:

1. **Pre-build**: Run auto-fix scripts
2. **Build**: Monitor and heal during build
3. **Post-build**: Perform health checks

#### Manual Configuration

If you need to configure manually:

1. **Access Netlify Dashboard**
   - Go to your site settings
   - Navigate to "Build & deploy" → "Environment"

2. **Set Environment Variables**
   ```bash
   ENABLE_SELF_HEALING=true
   AUTO_FIX_BUILD_ISSUES=true
   BUILD_MONITORING=true
   NODE_OPTIONS=--max-old-space-size=8192
   NEXT_BUILD_WORKERS=4
   NEXT_PRIVATE_BUILD_CACHE=true
   SKIP_TYPE_CHECK=true
   NEXT_TELEMETRY_DISABLED=1
   ```

3. **Update Build Settings**
   - Build command: `npm run netlify:heal && npm run build:netlify:prepare`
   - Publish directory: `.next`
   - Build timeout: 45 minutes

#### Verify Deployment

1. **Check Build Logs**
   ```bash
   # View recent builds
   netlify builds:list
   
   # View specific build
   netlify builds:view [BUILD_ID]
   ```

2. **Monitor System Status**
   ```bash
   # Check if self-healing is active
   curl https://your-site.netlify.app/api/health
   
   # View system logs
   netlify logs:tail
   ```

### 3. Production Deployment

#### Pre-deployment Checklist

- [ ] All tests passing
- [ ] Self-healing system tested locally
- [ ] Environment variables configured
- [ ] Build timeout increased
- [ ] Memory allocation optimized
- [ ] Monitoring enabled

#### Deployment Commands

```bash
# Deploy with self-healing
npm run heal-and-deploy

# Deploy with monitoring
npm run heal-deploy-monitor

# Continuous deployment
npm run continuous-heal
```

#### Post-deployment Verification

1. **Health Check**
   ```bash
   # Check system health
   npm run self-heal:health
   
   # View status
   npm run netlify:status
   ```

2. **Performance Test**
   ```bash
   # Test build performance
   npm run build:test
   
   # Monitor resources
   npm run monitor:resources
   ```

3. **Log Analysis**
   ```bash
   # View recent logs
   npm run logs:view
   
   # Analyze performance
   npm run logs:performance
   ```

### 4. Monitoring Setup

#### Enable Monitoring

```bash
# Start monitoring
npm run netlify:monitor

# Start daemon
node scripts/netlify-healing-daemon.cjs start

# Check status
node scripts/netlify-healing-daemon.cjs status
```

#### Configure Alerts

1. **Log Monitoring**
   ```bash
   # Set up log monitoring
   npm run logs:monitor:realtime
   
   # Configure alerts
   npm run logs:alerts
   ```

2. **Performance Monitoring**
   ```bash
   # Start performance monitoring
   npm run monitor:performance
   
   # Set up resource alerts
   npm run monitor:resources
   ```

### 5. Troubleshooting Deployment

#### Common Issues

**Build Timeout**
```bash
# Increase timeout in netlify.toml
command_timeout = "45m"

# Optimize build process
npm run optimize:build
```

**Memory Issues**
```bash
# Increase memory allocation
NODE_OPTIONS=--max-old-space-size=8192

# Clean cache
npm run clean:cache
```

**Permission Issues**
```bash
# Fix permissions
chmod +x scripts/*.cjs
chmod -R 755 .

# Check ownership
ls -la scripts/
```

#### Debug Mode

```bash
# Enable debug logging
DEBUG=self-healing:* npm run netlify:heal

# Verbose output
npm run self-heal:health --verbose

# Test specific component
node scripts/netlify-self-healing.cjs test
```

### 6. Rollback Procedures

#### Emergency Rollback

```bash
# Stop self-healing system
npm run netlify:stop

# Revert to previous commit
git revert HEAD

# Deploy without self-healing
npm run build:netlify:prepare
```

#### Gradual Rollback

```bash
# Disable specific features
export ENABLE_SELF_HEALING=false
export AUTO_FIX_BUILD_ISSUES=false

# Deploy with minimal healing
npm run build:netlify:prepare
```

### 7. Performance Optimization

#### Build Optimization

```bash
# Optimize bundle size
npm run optimize:bundle

# Analyze performance
npm run analyze:performance

# Clean unnecessary files
npm run clean:all
```

#### Resource Optimization

```bash
# Optimize memory usage
npm run optimize:memory

# Clean disk space
npm run clean:disk

# Optimize dependencies
npm run optimize:deps
```

### 8. Security Considerations

#### Environment Variables

- Never commit sensitive data
- Use Netlify's environment variable system
- Rotate secrets regularly
- Use least privilege principle

#### Access Control

```bash
# Restrict file permissions
chmod 600 .env.local
chmod 755 scripts/

# Use secure logging
npm run logs:security
```

### 9. Maintenance

#### Regular Maintenance

```bash
# Weekly health check
npm run self-heal:health

# Monthly performance review
npm run analyze:performance

# Quarterly dependency update
npm run deps:update
```

#### Log Rotation

```bash
# Rotate logs
npm run logs:rotate

# Clean old logs
npm run logs:purge

# Archive logs
npm run logs:archive
```

### 10. Scaling Considerations

#### High Traffic Sites

```bash
# Increase resources
NODE_OPTIONS=--max-old-space-size=16384
NEXT_BUILD_WORKERS=8

# Enable caching
NEXT_PRIVATE_BUILD_CACHE=true
NEXT_PRIVATE_STATIC_OPTIMIZATION=true
```

#### Multiple Environments

```bash
# Development
npm run self-heal:start --env=development

# Staging
npm run self-heal:start --env=staging

# Production
npm run self-heal:start --env=production
```

## Monitoring and Alerts

### Health Checks

```bash
# Automated health checks
*/5 * * * * npm run self-heal:health

# Daily performance review
0 2 * * * npm run analyze:performance

# Weekly maintenance
0 3 * * 0 npm run logs:rotate
```

### Alert Configuration

```javascript
// Example alert configuration
const alerts = {
  buildFailure: {
    threshold: 3,
    window: '1h',
    action: 'restart-daemon'
  },
  memoryUsage: {
    threshold: 0.9,
    window: '5m',
    action: 'clean-cache'
  },
  diskUsage: {
    threshold: 0.95,
    window: '10m',
    action: 'clean-disk'
  }
};
```

## Support and Documentation

### Getting Help

1. **Check Logs**: `npm run logs:view`
2. **System Status**: `npm run netlify:status`
3. **Health Check**: `npm run self-heal:health`
4. **Documentation**: See `docs/SELF_HEALING_SYSTEM.md`

### Reporting Issues

When reporting issues, include:
- System status output
- Relevant log files
- Environment information
- Steps to reproduce
- Expected vs actual behavior

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Update documentation
6. Submit a pull request 