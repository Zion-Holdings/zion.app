# Deployment Guide

## Overview

This guide covers comprehensive deployment strategies for the bolt.new.zion.app system, including local development, staging environments, production deployment, and cloud infrastructure management.

## Deployment Architecture

### System Components

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Automation    │
│   (Next.js)     │◄──►│   (Node.js)     │◄──►│   (PM2)        │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CDN/Static    │    │   API Gateway   │    │   Monitoring    │
│   Assets        │    │   (Netlify)     │    │   (PM2 + Logs)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Deployment Environments

- **Development**: Local development with hot reloading
- **Staging**: Pre-production testing environment
- **Production**: Live production environment
- **DR/Backup**: Disaster recovery and backup systems

## Local Development Setup

### Prerequisites

```bash
# Required software
- Node.js >= 20.18.1
- npm >= 10.0.0
- Git
- PM2 (for automation testing)
```

### Initial Setup

```bash
# Clone repository
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Set up log directories
mkdir -p automation/logs
mkdir -p automation/locks
```

### Development Server

```bash
# Start development server
npm run dev

# Start with enhanced memory allocation
NODE_OPTIONS="--max-old-space-size=4096" npm run dev

# Start with debugging
NODE_OPTIONS="--inspect" npm run dev
```

### Local Automation Testing

```bash
# Start PM2 processes locally
npm run pm2:start

# Start specific automation
npm run mcp:start
npm run google-docs:start

# Monitor processes
npm run pm2:status
npm run pm2:logs
```

## Staging Environment

### Staging Setup

```bash
# Create staging branch
git checkout -b staging

# Configure staging environment
export NODE_ENV=staging
export DATABASE_URL=staging_db_url
export API_BASE_URL=https://staging.bolt.new.zion.app

# Build for staging
npm run build:staging

# Start staging server
npm run start:staging
```

### Staging Configuration

```javascript
// next.config.js staging configuration
const nextConfig = {
  env: {
    NODE_ENV: 'staging',
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000',
    ENABLE_ANALYTICS: false,
    ENABLE_DEBUG: true
  },
  
  // Staging-specific optimizations
  experimental: {
    optimizeCss: true,
    optimizeImages: true
  },
  
  // Staging redirects
  async redirects() {
    return [
      {
        source: '/staging-only',
        destination: '/staging-features',
        permanent: false
      }
    ];
  }
};
```

### Staging Validation

```bash
# Run staging tests
npm run test:staging

# Validate staging build
npm run build:validate

# Performance testing
npm run lighthouse:staging

# Security scan
npm run security:scan
```

## Production Deployment

### Production Prerequisites

```bash
# Production environment setup
export NODE_ENV=production
export DATABASE_URL=production_db_url
export API_BASE_URL=https://bolt.new.zion.app
export ENABLE_ANALYTICS=true
export ENABLE_DEBUG=false
```

### Production Build

```bash
# Clean build
npm run build:clean

# Production build with optimization
NODE_OPTIONS="--max-old-space-size=6144" npm run build

# Validate production build
npm run build:validate

# Generate production assets
npm run export
```

### Production Server Deployment

#### PM2 Production Deployment

```bash
# Start production PM2 ecosystem
npm run pm2:start

# Or use specific ecosystem file
pm2 start ecosystem.production.cjs --update-env

# Monitor production processes
pm2 monit
pm2 status
```

#### Docker Deployment

```dockerfile
# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

```bash
# Build and run Docker container
docker build -t bolt-app .
docker run -p 3000:3000 -d bolt-app

# Docker Compose deployment
docker-compose up -d
```

### Production Configuration

```javascript
// production.config.js
module.exports = {
  apps: [{
    name: 'bolt-app',
    script: 'npm',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    
    // Production optimizations
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=4096',
    
    // Logging
    log_file: 'automation/logs/combined.log',
    out_file: 'automation/logs/out.log',
    error_file: 'automation/logs/error.log',
    
    // Monitoring
    watch: false,
    ignore_watch: ['node_modules', 'logs'],
    
    // Restart policy
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};
```

## Cloud Deployment

### Netlify Deployment

#### Netlify Configuration

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "20"
  NPM_VERSION = "10"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

#### Netlify Functions

```javascript
// netlify/functions/api.js
exports.handler = async (event, context) => {
  try {
    const { httpMethod, path, body } = event;
    
    // Route handling logic
    switch (httpMethod) {
      case 'GET':
        return handleGet(path);
      case 'POST':
        return handlePost(path, body);
      default:
        return {
          statusCode: 405,
          body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

### Vercel Deployment

#### Vercel Configuration

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### AWS Deployment

#### AWS ECS Configuration

```yaml
# docker-compose.aws.yml
version: '3.8'
services:
  bolt-app:
    image: bolt-app:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '1.0'
          memory: 1G
        reservations:
          cpus: '0.5'
          memory: 512M
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
```

#### AWS CloudFormation

```yaml
# cloudformation.yml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Bolt App Infrastructure'

Parameters:
  Environment:
    Type: String
    Default: production
    AllowedValues: [development, staging, production]

Resources:
  BoltAppECSCluster:
    Type: AWS::ECS::Cluster
    Properties:
      ClusterName: !Sub 'bolt-app-${Environment}'
      CapacityProviders:
        - FARGATE
      DefaultCapacityProviderStrategy:
        - CapacityProvider: FARGATE
          Weight: 1

  BoltAppTaskDefinition:
    Type: AWS::ECS::TaskDefinition
    Properties:
      Family: !Sub 'bolt-app-${Environment}'
      NetworkMode: awsvpc
      RequiresCompatibilities:
        - FARGATE
      Cpu: '1024'
      Memory: '2048'
      ExecutionRoleArn: !GetAtt ExecutionRole.Arn
      TaskRoleArn: !GetAtt TaskRole.Arn
      ContainerDefinitions:
        - Name: bolt-app
          Image: !Sub '${AWS::AccountId}.dkr.ecr.${AWS::Region}.amazonaws.com/bolt-app:latest'
          PortMappings:
            - ContainerPort: 3000
              Protocol: tcp
          Environment:
            - Name: NODE_ENV
              Value: !Ref Environment
```

## CI/CD Pipeline

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run test
    - run: npm run build:validate

  security-scan:
    runs-on: ubuntu-latest
    needs: test
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run security:scan
    - run: npm audit --audit-level=high

  deploy:
    runs-on: ubuntu-latest
    needs: [test, security-scan]
    environment: production
    steps:
    - uses: actions/checkout@v4
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v2.0
      with:
        publish-dir: './out'
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

### Automated Testing

```yaml
# .github/workflows/test.yml
name: Automated Testing

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run test:unit

  integration-tests:
    runs-on: ubuntu-latest
    needs: unit-tests
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run test:integration

  e2e-tests:
    runs-on: ubuntu-latest
    needs: integration-tests
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run test:e2e

  performance-tests:
    runs-on: ubuntu-latest
    needs: e2e-tests
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run lighthouse:ci
```

## Monitoring and Observability

### Application Monitoring

```javascript
// monitoring/app-monitor.js
const { PerformanceObserver } = require('perf_hooks');
const { EventEmitter } = require('events');

class AppMonitor extends EventEmitter {
  constructor() {
    super();
    this.metrics = new Map();
    this.setupPerformanceMonitoring();
  }

  setupPerformanceMonitoring() {
    const obs = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.recordMetric(entry.name, entry.duration);
      });
    });
    
    obs.observe({ entryTypes: ['measure'] });
  }

  recordMetric(name, value) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    this.metrics.get(name).push({
      value,
      timestamp: Date.now()
    });
    
    // Emit metric event
    this.emit('metric', { name, value, timestamp: Date.now() });
  }

  getMetrics(name) {
    return this.metrics.get(name) || [];
  }

  getSummary(name) {
    const values = this.getMetrics(name);
    if (values.length === 0) return null;
    
    const sum = values.reduce((acc, m) => acc + m.value, 0);
    const avg = sum / values.length;
    const min = Math.min(...values.map(m => m.value));
    const max = Math.max(...values.map(m => m.value));
    
    return { sum, avg, min, max, count: values.length };
  }
}

module.exports = AppMonitor;
```

### Health Checks

```javascript
// health/health-checker.js
const { EventEmitter } = require('events');

class HealthChecker extends EventEmitter {
  constructor() {
    super();
    this.checks = new Map();
    this.status = 'healthy';
  }

  addCheck(name, checkFunction, interval = 30000) {
    this.checks.set(name, {
      function: checkFunction,
      interval,
      lastCheck: null,
      lastResult: null
    });
    
    // Start periodic checking
    setInterval(() => {
      this.runCheck(name);
    }, interval);
  }

  async runCheck(name) {
    const check = this.checks.get(name);
    if (!check) return;
    
    try {
      const result = await check.function();
      check.lastResult = result;
      check.lastCheck = Date.now();
      
      if (!result.healthy) {
        this.updateStatus('unhealthy');
        this.emit('health-check-failed', { name, result });
      }
    } catch (error) {
      check.lastResult = { healthy: false, error: error.message };
      check.lastCheck = Date.now();
      this.updateStatus('unhealthy');
      this.emit('health-check-error', { name, error });
    }
  }

  updateStatus(newStatus) {
    if (this.status !== newStatus) {
      this.status = newStatus;
      this.emit('status-changed', newStatus);
    }
  }

  getStatus() {
    const checks = {};
    for (const [name, check] of this.checks) {
      checks[name] = {
        lastCheck: check.lastCheck,
        lastResult: check.lastResult
      };
    }
    
    return {
      status: this.status,
      timestamp: Date.now(),
      checks
    };
  }
}

module.exports = HealthChecker;
```

### Logging and Alerting

```javascript
// logging/logger.js
const winston = require('winston');
const { format } = winston;

class Logger {
  constructor(options = {}) {
    this.logger = winston.createLogger({
      level: options.level || 'info',
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.json()
      ),
      defaultMeta: { service: 'bolt-app' },
      transports: [
        new winston.transports.File({ 
          filename: 'automation/logs/error.log', 
          level: 'error' 
        }),
        new winston.transports.File({ 
          filename: 'automation/logs/combined.log' 
        })
      ]
    });

    // Add console transport in development
    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(new winston.transports.Console({
        format: format.combine(
          format.colorize(),
          format.simple()
        )
      }));
    }
  }

  info(message, meta = {}) {
    this.logger.info(message, meta);
  }

  error(message, meta = {}) {
    this.logger.error(message, meta);
  }

  warn(message, meta = {}) {
    this.logger.warn(message, meta);
  }

  debug(message, meta = {}) {
    this.logger.debug(message, meta);
  }
}

module.exports = Logger;
```

## Security and Compliance

### Security Headers

```javascript
// security/security-headers.js
const helmet = require('helmet');

const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  noSniff: true,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
});

module.exports = securityHeaders;
```

### Environment Variable Management

```bash
# .env.production
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:port/db
API_BASE_URL=https://bolt.new.zion.app
JWT_SECRET=your-super-secret-jwt-key
ENCRYPTION_KEY=your-encryption-key
REDIS_URL=redis://localhost:6379
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Feature flags
ENABLE_ANALYTICS=true
ENABLE_DEBUG=false
ENABLE_MAINTENANCE_MODE=false
ENABLE_RATE_LIMITING=true
```

## Performance Optimization

### Build Optimization

```javascript
// next.config.js optimization
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    scrollRestoration: true
  },
  
  // Image optimization
  images: {
    domains: ['bolt.new.zion.app'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  
  // Bundle analysis
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
      config.optimization.minimize = true;
    }
    return config;
  },
  
  // Compression
  compress: true,
  
  // Power by header
  poweredByHeader: false
};
```

### Caching Strategies

```javascript
// caching/cache-manager.js
const NodeCache = require('node-cache');

class CacheManager {
  constructor(options = {}) {
    this.cache = new NodeCache({
      stdTTL: options.ttl || 600, // 10 minutes default
      checkperiod: options.checkPeriod || 120,
      useClones: false
    });
  }

  set(key, value, ttl = null) {
    return this.cache.set(key, value, ttl);
  }

  get(key) {
    return this.cache.get(key);
  }

  del(key) {
    return this.cache.del(key);
  }

  flush() {
    return this.cache.flushAll();
  }

  getStats() {
    return this.cache.getStats();
  }
}

module.exports = CacheManager;
```

## Disaster Recovery

### Backup Strategies

```bash
# backup/backup-script.sh
#!/bin/bash

set -e

# Configuration
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="bolt-app-backup-$DATE"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Database backup
pg_dump $DATABASE_URL > "$BACKUP_DIR/$BACKUP_NAME.sql"

# File backup
tar -czf "$BACKUP_DIR/$BACKUP_NAME-files.tar.gz" \
  --exclude=node_modules \
  --exclude=.git \
  --exclude=automation/logs \
  .

# Upload to cloud storage
aws s3 cp "$BACKUP_DIR/$BACKUP_NAME.sql" "s3://backup-bucket/$BACKUP_NAME.sql"
aws s3 cp "$BACKUP_DIR/$BACKUP_NAME-files.tar.gz" "s3://backup-bucket/$BACKUP_NAME-files.tar.gz"

# Clean up local backups older than 7 days
find "$BACKUP_DIR" -name "*.sql" -mtime +7 -delete
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: $BACKUP_NAME"
```

### Recovery Procedures

```bash
# recovery/recovery-script.sh
#!/bin/bash

set -e

# Configuration
BACKUP_DIR="/backups"
RECOVERY_DATE=$1

if [ -z "$RECOVERY_DATE" ]; then
  echo "Usage: $0 <backup-date>"
  echo "Example: $0 20250117_143000"
  exit 1
fi

BACKUP_NAME="bolt-app-backup-$RECOVERY_DATE"

echo "Starting recovery from backup: $BACKUP_NAME"

# Download from cloud storage
aws s3 cp "s3://backup-bucket/$BACKUP_NAME.sql" "$BACKUP_DIR/"
aws s3 cp "s3://backup-bucket/$BACKUP_NAME-files.tar.gz" "$BACKUP_DIR/"

# Restore database
echo "Restoring database..."
psql $DATABASE_URL < "$BACKUP_DIR/$BACKUP_NAME.sql"

# Restore files
echo "Restoring files..."
tar -xzf "$BACKUP_DIR/$BACKUP_NAME-files.tar.gz" -C /

# Restart services
echo "Restarting services..."
pm2 restart all

echo "Recovery completed successfully"
```

## Troubleshooting

### Common Deployment Issues

#### Build Failures
```bash
# Check build health
npm run build:health-check

# Clean build
rm -rf .next out
npm run build:clean

# Check dependencies
npm audit
npm outdated
```

#### Memory Issues
```bash
# Increase Node.js memory
export NODE_OPTIONS="--max-old-space-size=8192"

# Check memory usage
pm2 monit
pm2 show app

# Restart with memory limits
pm2 restart app --max-memory-restart 2G
```

#### Performance Issues
```bash
# Run performance audit
npm run lighthouse:ci

# Check build performance
npm run build:monitor

# Analyze bundle
npm run analyze
```

### Debug Mode

```bash
# Enable debug logging
export DEBUG=*

# Run with inspector
node --inspect app.js

# PM2 debug mode
pm2 start app.js --node-args="--inspect"
```

## Support and Resources

### Documentation
- [Developer Guide](DEVELOPER_GUIDE.md)
- [API Reference](API_REFERENCE.md)
- [Automation Guide](AUTOMATION_GUIDE.md)

### Community
- GitHub Issues and Discussions
- Deployment Wiki
- Troubleshooting Guides

### Contact
- **Deployment Support**: deployment@zion-holdings.com
- **Infrastructure Questions**: infrastructure@zion-holdings.com
- **Emergency Support**: emergency@zion-holdings.com

---

*This deployment guide covers the essential aspects of deploying the bolt.new.zion.app system. For advanced deployment scenarios and custom configurations, refer to the source code and additional documentation.*