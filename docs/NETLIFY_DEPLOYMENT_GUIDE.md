# Netlify Deployment Guide

## Overview

This guide covers the complete setup for deploying the Zion Tech Marketplace to Netlify with proper environment variable configuration, focusing on Supabase authentication and other critical services.

## Prerequisites

- Netlify account
- GitHub repository with the project
- Supabase project (for authentication)
- Domain name (optional, for custom domain)

## Step-by-Step Deployment

### 1. Connect Repository to Netlify

1. Log in to [Netlify](https://app.netlify.com/)
2. Click "New site from Git"
3. Choose GitHub and authorize Netlify access
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `20` (set in netlify.toml)

### 2. Configure Environment Variables

⚠️ **CRITICAL**: Set these environment variables in Netlify UI **BEFORE** first deployment.

#### Navigate to Environment Variables
1. Go to **Site Settings** → **Environment Variables**
2. Click "Add environment variable"

#### Required Variables for Authentication

```bash
# Supabase Configuration (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL = https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY = your_supabase_service_role_key_here

# Authentication Service (REQUIRED for user registration)
INTERNAL_AUTH_SERVICE_URL = https://your-auth-service-url.com
```

#### Optional but Recommended Variables

```bash
# Sentry Error Monitoring
NEXT_PUBLIC_SENTRY_DSN = https://your-sentry-dsn@sentry.io/project-id
SENTRY_DSN = https://your-sentry-dsn@sentry.io/project-id
SENTRY_ORG = your-sentry-org-slug
SENTRY_PROJECT = your-sentry-project-slug
SENTRY_AUTH_TOKEN = your-sentry-auth-token

# Application URL (automatically set by Netlify)
NEXT_PUBLIC_APP_URL = https://your-site-name.netlify.app

# Reown Wallet Connect (for Web3 features)
NEXT_PUBLIC_REOWN_PROJECT_ID = your-reown-project-id

# Stripe Payment Processing
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_your-stripe-publishable-key
STRIPE_SECRET_KEY = sk_live_your-stripe-secret-key

# Cloudinary Image Hosting
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = your-cloudinary-cloud-name
CLOUDINARY_API_KEY = your-cloudinary-api-key
CLOUDINARY_API_SECRET = your-cloudinary-api-secret
```

### 3. Deploy and Verify

1. Click "Deploy site" (or push to your main branch)
2. Monitor the deploy log for any errors
3. Once deployed, test critical functionality:
   - User registration
   - User login
   - Password reset
   - Profile management

## Environment Variable Configuration Details

### 🔐 Security Classifications

#### Public Variables (NEXT_PUBLIC_*)
- **Safe to expose**: These are visible to end users in the browser
- **Examples**: URLs, public API keys, project IDs
- **Usage**: Client-side functionality

#### Private Variables
- **Keep secret**: Only available on the server during builds
- **Examples**: Service role keys, auth tokens, API secrets
- **Usage**: Server-side operations and builds

### 📋 Variable Checklist

Use this checklist to ensure all required variables are configured:

#### ✅ Authentication (Required)
- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `SUPABASE_SERVICE_ROLE_KEY`
- [ ] `INTERNAL_AUTH_SERVICE_URL`

#### ✅ Error Monitoring (Recommended)
- [ ] `NEXT_PUBLIC_SENTRY_DSN`
- [ ] `SENTRY_ORG`
- [ ] `SENTRY_PROJECT`
- [ ] `SENTRY_AUTH_TOKEN`

#### ✅ Payments (Optional)
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- [ ] `STRIPE_SECRET_KEY`

#### ✅ File Upload (Optional)
- [ ] `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- [ ] `CLOUDINARY_API_KEY`
- [ ] `CLOUDINARY_API_SECRET`

## Common Configuration Issues

### 1. Build Failures

#### Symptom
```
Failed to compile.
Type error: Cannot find name 'slugify'.
```

#### Solution
- Ensure all TypeScript compilation issues are resolved
- Verify all dependencies are properly installed
- Check that custom utility functions are properly imported

#### Symptom
```
Error: Supabase not configured
```

#### Solution
- Verify Supabase environment variables are set correctly
- Ensure variables use actual values, not placeholders
- Check variable names for typos

### 2. Authentication Issues

#### Symptom
Users cannot register or login

#### Solution
1. Verify Supabase variables are set correctly:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://actual-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=actual_anon_key_value
   ```

2. Check Supabase authentication settings:
   - Email authentication enabled
   - Correct redirect URLs configured
   - Database schema properly set up

#### Symptom
"Profile not found" after successful login

#### Solution
1. Verify database schema includes `profiles` table
2. Check Row Level Security policies
3. Ensure user profile creation triggers are set up

### 3. Environment-Specific Issues

#### Development vs Production Variables
```bash
# Development (.env.local)
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321  # Local Supabase
INTERNAL_AUTH_SERVICE_URL=http://localhost:3001

# Production (Netlify)
NEXT_PUBLIC_SUPABASE_URL=https://project-id.supabase.co
INTERNAL_AUTH_SERVICE_URL=https://auth-service.example.com
```

## Advanced Configuration

### 1. Custom Domain Setup

1. **Add Custom Domain in Netlify**:
   - Go to **Domain Settings** → **Custom domains**
   - Add your domain
   - Configure DNS as instructed

2. **Update Environment Variables**:
   ```bash
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

3. **Update Supabase Redirect URLs**:
   - Add your custom domain to allowed redirect URLs
   - Update email templates with new domain

### 2. Deploy Contexts

Configure different variables for different deploy contexts:

```toml
# netlify.toml
[context.production.environment]
  NEXT_PUBLIC_SENTRY_ENVIRONMENT = "production"

[context.deploy-preview.environment]
  NEXT_PUBLIC_SENTRY_ENVIRONMENT = "preview"

[context.branch-deploy.environment]
  NEXT_PUBLIC_SENTRY_ENVIRONMENT = "development"
```

### 3. Build Optimization

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_OPTIONS = "--max_old_space_size=4096"
  NPM_FLAGS = "--prefer-offline --legacy-peer-deps"
```

## Monitoring and Maintenance

### 1. Deploy Status Monitoring

- Monitor deploy logs for warnings or errors
- Set up Netlify notifications for failed deploys
- Use Sentry for runtime error monitoring

### 2. Environment Variable Auditing

Regularly audit your environment variables:

```bash
# Check for placeholder values
grep -r "YOUR_" netlify.toml
grep -r "placeholder" netlify.toml

# Verify all required variables are set
curl -H "Authorization: Bearer $NETLIFY_TOKEN" \
  "https://api.netlify.com/api/v1/sites/$SITE_ID/env"
```

### 3. Security Best Practices

1. **Rotate Secrets Regularly**:
   - Update service role keys
   - Regenerate auth tokens
   - Update API keys

2. **Use Least Privilege**:
   - Only set variables that are actually needed
   - Use specific scopes for service accounts

3. **Monitor Access**:
   - Review who has access to environment variables
   - Use audit logs to track changes

## Troubleshooting Commands

### Verify Build Locally
```bash
# Test production build locally
npm run build
npm run start
```

### Check Environment Variable Loading
```javascript
// Add to any page during debugging
console.log('Environment variables:');
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Supabase configured:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
```

### Test Supabase Connection
```javascript
// Add to a page to test Supabase connectivity
import { supabase } from '@/integrations/supabase/client';

const testConnection = async () => {
  const { data, error } = await supabase.auth.getSession();
  console.log('Supabase connection test:', error ? 'Failed' : 'Success');
};
```

## Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Environment Variables Guide](https://docs.netlify.com/environment-variables/overview/)
- [Build Configuration](https://docs.netlify.com/configure-builds/overview/)
- [Supabase Deployment Guide](https://supabase.com/docs/guides/hosting/overview)

---

**⚠️ Remember**: Always test your deployment thoroughly after any configuration changes. Keep your environment variables secure and regularly review access permissions. 