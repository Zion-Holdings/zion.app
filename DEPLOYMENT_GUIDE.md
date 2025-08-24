# Deployment Guide

## Overview

This guide covers comprehensive deployment strategies for bolt.new.zion.app, including local development, staging, production, and automated deployment pipelines.

## Deployment Environments

### 1. Local Development
- **Purpose**: Development and testing
- **URL**: `http://localhost:3000`
- **Database**: Local/Development database
- **Features**: Hot reloading, debugging, development tools

### 2. Staging Environment
- **Purpose**: Pre-production testing
- **URL**: `https://staging.bolt.new.zion.app`
- **Database**: Staging database (production-like)
- **Features**: Production-like environment, integration testing

### 3. Production Environment
- **Purpose**: Live application
- **URL**: `https://bolt.new.zion.app`
- **Database**: Production database
- **Features**: Optimized performance, monitoring, analytics

## Local Development Setup

### Prerequisites
```bash
# Required software
- Node.js >= 20.18.1
- npm >= 10.0.0
- Git
- PM2 (for process management)
```

### Installation
```bash
# Clone repository
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration
```

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check

# Run tests
npm test
```

### PM2 Development Setup
```bash
# Install PM2 globally
npm install -g pm2

# Start development processes
npm run pm2:start

# Check status
npm run pm2:status

# View logs
npm run pm2:logs

# Restart processes
npm run pm2:restart
```

## Staging Deployment

### Staging Environment Configuration
```bash
# Staging environment variables
NODE_ENV=staging
NEXT_PUBLIC_API_URL=https://staging-api.bolt.new.zion.app
DATABASE_URL=staging-database-url
REDIS_URL=staging-redis-url
```

### Staging Deployment Process
```bash
# 1. Build staging version
npm run build:staging

# 2. Run staging tests
npm run test:staging

# 3. Deploy to staging
npm run deploy:staging

# 4. Verify deployment
npm run health:check:staging
```

### Staging Validation
```bash
# Run integration tests
npm run test:integration

# Performance testing
npm run lighthouse:staging

# Security scan
npm run security:scan:staging

# Load testing
npm run load:test:staging
```

## Production Deployment

### Production Environment Configuration
```bash
# Production environment variables
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.bolt.new.zion.app
DATABASE_URL=production-database-url
REDIS_URL=production-redis-url
CDN_URL=https://cdn.bolt.new.zion.app
```

### Production Build Process
```bash
# 1. Pre-build health check
npm run build:health-check

# 2. Build application
npm run build

# 3. Post-build optimization
npm run postbuild

# 4. Build validation
npm run build:validate
```

### Production Deployment Commands
```bash
# Smart build with auto-fix
npm run build:smart

# Full smart build
npm run build:smart:full

# Build with monitoring
npm run build:monitor

# Build with guardian
npm run build:guardian
```

## Automated Deployment

### GitHub Actions CI/CD

#### Main Deployment Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20.x'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test:ci
      
      - name: Build application
        run: npm run build:heal

  deploy:
    needs: test
    runs-on: ubuntu-latest
    environment: production
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './out'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
          enable-pull-request-comment: false
          enable-commit-comment: true
          overwrites-pull-request-comment: true
```

#### Staging Deployment Workflow
```yaml
# .github/workflows/deploy-staging.yml
name: Deploy to Staging

on:
  push:
    branches: [ develop ]
  pull_request:
    branches: [ main ]

jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    environment: staging
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Staging
        run: |
          npm ci
          npm run build:staging
          npm run deploy:staging
```

### Netlify Deployment

#### Netlify Configuration
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "20.18.1"
  NPM_VERSION = "10.0.0"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

#### Netlify Functions
```javascript
// netlify/functions/hello.js
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Netlify Function!',
      timestamp: new Date().toISOString(),
    }),
  };
};
```

### PM2 Production Deployment

#### PM2 Ecosystem Configuration
```javascript
// ecosystem.production.cjs
module.exports = {
  apps: [
    {
      name: 'bolt-app',
      script: 'npm',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      watch: false,
      ignore_watch: ['node_modules', 'logs'],
    },
  ],
};
```

#### PM2 Deployment Commands
```bash
# Start production processes
pm2 start ecosystem.production.cjs --env production

# Monitor processes
pm2 monit

# View logs
pm2 logs

# Restart processes
pm2 restart all

# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all
```

## Deployment Strategies

### 1. Blue-Green Deployment
- **Description**: Deploy new version alongside old version, then switch traffic
- **Benefits**: Zero downtime, easy rollback
- **Use Case**: Production deployments

### 2. Rolling Deployment
- **Description**: Deploy new version gradually across instances
- **Benefits**: Continuous availability, controlled rollout
- **Use Case**: Staging and production with multiple instances

### 3. Canary Deployment
- **Description**: Deploy to small subset of users first
- **Benefits**: Risk mitigation, performance monitoring
- **Use Case**: New features, major updates

### 4. Immutable Deployment
- **Description**: Deploy new instances instead of updating existing ones
- **Benefits**: Consistency, easy rollback
- **Use Case**: Container-based deployments

## Environment Management

### Environment Variables
```bash
# .env.local (Development)
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3001
DATABASE_URL=postgresql://localhost:5432/bolt_dev
REDIS_URL=redis://localhost:6379

# .env.staging
NODE_ENV=staging
NEXT_PUBLIC_API_URL=https://staging-api.bolt.new.zion.app
DATABASE_URL=postgresql://staging-db-url
REDIS_URL=redis://staging-redis-url

# .env.production
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.bolt.new.zion.app
DATABASE_URL=postgresql://production-db-url
REDIS_URL=redis://production-redis-url
```

### Configuration Management
```javascript
// config/environment.js
const config = {
  development: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    logLevel: 'debug',
  },
  staging: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    logLevel: 'info',
  },
  production: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    logLevel: 'warn',
  },
};

const env = process.env.NODE_ENV || 'development';
export default config[env];
```

## Database Deployment

### Database Migration Strategy
```bash
# 1. Create migration
npm run db:migrate:create -- --name add_user_table

# 2. Run migrations
npm run db:migrate:up

# 3. Rollback if needed
npm run db:migrate:down

# 4. Seed database
npm run db:seed
```

### Database Backup and Recovery
```bash
# Create backup
npm run db:backup

# Restore from backup
npm run db:restore -- --file=backup_2025-01-17.sql

# Verify backup integrity
npm run db:verify:backup
```

## Monitoring and Health Checks

### Health Check Endpoints
```typescript
// pages/api/health.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Check database connection
    const dbStatus = await checkDatabase();
    
    // Check Redis connection
    const redisStatus = await checkRedis();
    
    // Check external services
    const externalStatus = await checkExternalServices();
    
    const health = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: dbStatus,
      redis: redisStatus,
      external: externalStatus,
    };
    
    const isHealthy = dbStatus && redisStatus && externalStatus;
    
    res.status(isHealthy ? 200 : 503).json(health);
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error.message,
    });
  }
}
```

### Monitoring Dashboard
```bash
# Start monitoring
npm run monitoring:start

# View dashboard
npm run monitoring:dashboard

# Check alerts
npm run monitoring:alerts

# Generate report
npm run monitoring:report
```

## Security Deployment

### Security Headers
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

### SSL/TLS Configuration
```bash
# Generate SSL certificate
npm run ssl:generate

# Install SSL certificate
npm run ssl:install

# Verify SSL configuration
npm run ssl:verify

# Renew SSL certificate
npm run ssl:renew
```

## Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build:analyze

# Optimize images
npm run images:optimize

# Compress assets
npm run assets:compress

# Generate service worker
npm run sw:generate
```

### CDN Configuration
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['cdn.bolt.new.zion.app'],
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://cdn.bolt.new.zion.app' 
    : '',
};
```

## Rollback Procedures

### Quick Rollback
```bash
# Rollback to previous version
npm run deploy:rollback

# Rollback to specific version
npm run deploy:rollback -- --version=v1.2.3

# Emergency rollback
npm run deploy:emergency:rollback
```

### Database Rollback
```bash
# Rollback database changes
npm run db:rollback

# Restore from backup
npm run db:restore:emergency

# Verify rollback
npm run db:verify:rollback
```

## Troubleshooting

### Common Deployment Issues

1. **Build Failures:**
   ```bash
   # Check build logs
   npm run build:logs
   
   # Run build health check
   npm run build:health-check
   
   # Fix build issues
   npm run build:auto-fix
   ```

2. **Deployment Failures:**
   ```bash
   # Check deployment status
   npm run deploy:status
   
   # View deployment logs
   npm run deploy:logs
   
   # Retry deployment
   npm run deploy:retry
   ```

3. **Performance Issues:**
   ```bash
   # Run performance audit
   npm run lighthouse:audit
   
   # Check performance budgets
   npm run lighthouse:budgets
   
   # Optimize performance
   npm run performance:optimize
   ```

### Debug Mode
```bash
# Enable debug logging
export DEBUG=deployment:*

# Run with verbose output
npm run deploy -- --verbose

# Check system resources
npm run system:check
```

## Best Practices

### 1. Deployment Checklist
- [ ] All tests passing
- [ ] Code review completed
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Performance benchmarks met
- [ ] Security scan completed
- [ ] Backup created
- [ ] Rollback plan ready

### 2. Monitoring
- Set up real-time monitoring
- Configure alerting for critical issues
- Monitor performance metrics
- Track error rates and response times

### 3. Documentation
- Document deployment procedures
- Maintain runbooks for common issues
- Update configuration documentation
- Record deployment history

### 4. Security
- Use environment-specific secrets
- Implement proper access controls
- Regular security audits
- Monitor for security threats

## Resources

### Documentation
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Netlify Documentation](https://docs.netlify.com/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [GitHub Actions](https://docs.github.com/en/actions)

### Tools
- [Netlify](https://netlify.com/) - Hosting and deployment
- [PM2](https://pm2.keymetrics.io/) - Process management
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance monitoring

For additional deployment support or questions, please refer to the documentation or contact the development team.
