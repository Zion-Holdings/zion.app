# 🚀 Deployment Guide for Zion App

## Pre-Deployment Checklist

### 1. **Environment Setup**
Run the deployment readiness checker:
```bash
npm run deploy:ready
```

### 2. **Required Environment Variables**
Configure these variables in your deployment platform:

**Essential Variables:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**Optional but Recommended:**
```env
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
SENTRY_AUTH_TOKEN=your_sentry_auth_token
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### 3. **Build Validation**
```bash
# Test production build locally
npm run build
npm run start

# Performance monitoring
npm run perf:monitor

# Full deployment check
npm run deploy:checklist
```

## Platform-Specific Deployment

### **Vercel (Recommended)**
1. **Connect Repository:**
   ```bash
   vercel --prod
   ```

2. **Environment Variables:**
   - Set in Vercel Dashboard → Settings → Environment Variables
   - Or via CLI: `vercel env add VARIABLE_NAME`

3. **Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### **Netlify**
1. **Build Settings:**
   ```toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "18"
   
   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-Content-Type-Options = "nosniff"
   ```

2. **Environment Variables:**
   - Set in Netlify Dashboard → Site Settings → Environment Variables

### **Docker Deployment**
```dockerfile
# Use existing Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t zion-app .
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
  zion-app
```

## Performance Optimizations Applied

### **✅ Image Optimization**
- WebP/AVIF format support
- Comprehensive remote patterns
- Optimized sizing and quality

### **✅ Bundle Optimization**
- SWC minification enabled
- Webpack chunk splitting (244KB max)
- Tree shaking and dead code elimination

### **✅ Caching Strategy**
- Static asset caching
- API response caching
- CDN-ready configuration

### **✅ Security Headers**
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

## Post-Deployment Verification

### **1. Health Checks**
```bash
# Test all endpoints
curl https://your-domain.com/api/health
curl https://your-domain.com/_next/image?url=%2Flogos%2Fzion-logo.png&w=64&q=75
```

### **2. Performance Monitoring**
- Set up monitoring dashboards
- Configure error alerting
- Test user flows end-to-end

### **3. SEO and Analytics**
- Verify meta tags and structured data
- Set up Google Analytics/other tracking
- Test social media sharing

## Rollback Strategy

### **Immediate Rollback**
```bash
# Vercel
vercel --prod --rollback

# Netlify
netlify rollback

# Docker
docker run previous-image-tag
```

### **Environment Rollback**
- Keep previous environment variable sets
- Document configuration changes
- Test rollback procedures regularly

## Monitoring and Maintenance

### **Error Monitoring**
- Sentry for runtime errors
- Next.js built-in error reporting
- Custom error boundaries

### **Performance Monitoring**
```bash
# Regular performance checks
npm run perf:monitor

# Bundle analysis
npm run build:analyze
```

### **Security Updates**
```bash
# Dependency audit
npm audit
npm run security:check

# Update dependencies
npm update
```

## Troubleshooting

### **Common Issues**

**Build Failures:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**Environment Variable Issues:**
```bash
# Verify variables are set
npm run env:dev
npm run deploy:ready
```

**Performance Issues:**
```bash
# Analyze bundle size
npm run build:analyze

# Check server response times
npm run perf:monitor
```

## Support

- **Documentation**: `/docs` directory
- **Health Check**: `GET /api/health`
- **Performance Tools**: `npm run perf:*`
- **Deployment Tools**: `npm run deploy:*`

---

**🎯 Ready for Production:** This application has been optimized and tested for production deployment with comprehensive monitoring and rollback capabilities. 