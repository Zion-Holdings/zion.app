# Production Environment Configuration Guide

## Critical Environment Variables

The following environment variables **MUST** be configured in your production deployment platform (Netlify, Vercel, etc.) to prevent "Something went wrong" errors:

### Essential Variables (Application will fail without these)

```bash
# Core Application Settings
NEXT_PUBLIC_APP_URL=https://app.ziontechgroup.com
NEXT_PUBLIC_BASE_URL=https://app.ziontechgroup.com
NEXT_PUBLIC_API_URL=https://app.ziontechgroup.com

# Supabase Configuration (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Sentry Configuration (REQUIRED for error monitoring)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
SENTRY_DSN=your_sentry_dsn_here
SENTRY_ORG=your_sentry_org_slug
SENTRY_PROJECT=your_sentry_project_slug
SENTRY_AUTH_TOKEN=your_sentry_auth_token_here
NEXT_PUBLIC_SENTRY_ENVIRONMENT=production
SENTRY_ENVIRONMENT=production

# Wallet Integration
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id_here
```

### Important Variables (Features will fail without these)

```bash
# Stripe Payment Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
NEXT_PUBLIC_STRIPE_PK=
STRIPE_SECRET_KEY=your_stripe_secret_key_here
# Set to true on staging/QA environments to avoid real charges
STRIPE_TEST_MODE=false
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id_here
NEXT_PUBLIC_ANALYTICS_TRACKING_ID=your_analytics_tracking_id_here
# NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here  # Optional: Uncomment and set real key to enable PostHog analytics
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Support Configuration
NEXT_PUBLIC_SUPPORT_EMAIL=support@ziontechgroup.com

# Security
JWT_SECRET=your_jwt_secret_here
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=https://app.ziontechgroup.com
```

### Optional Variables (Nice to have)

```bash
# Cloudinary for Images
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name_here

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id_here

# OAuth Providers
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here
FACEBOOK_CLIENT_ID=your_facebook_client_id_here
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret_here
TWITTER_CLIENT_ID=your_twitter_client_id_here
TWITTER_CLIENT_SECRET=your_twitter_client_secret_here
LINKEDIN_CLIENT_ID=your_linkedin_client_id_here
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret_here
CLIENT_URL=http://localhost:5173

# Push Notifications
NEXT_PUBLIC_VAPID_PUBLIC_KEY=your_vapid_public_key_here
```

## Common Issues and Solutions

### 1. "Something went wrong" on all pages
**Cause**: Missing essential environment variables (Supabase URL/Key, Sentry DSN)
**Solution**: Ensure all essential variables are set in your deployment platform

### 2. Supabase errors
**Cause**: Invalid or placeholder Supabase credentials
**Solution**: Use real Supabase project credentials from your dashboard

### 3. Wallet connection failures
**Cause**: Invalid REOWN_PROJECT_ID
**Solution**: Get a valid project ID from WalletConnect dashboard

### 4. Error tracking not working
**Cause**: Missing or invalid Sentry configuration
**Solution**: Set up Sentry project and configure DSN and auth token

## Deployment Platform Setup

### Netlify
1. Go to Site Settings → Environment Variables
2. Add each variable with its value
3. Rebuild and deploy

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables for Production environment
3. Redeploy the project

### Manual Verification
After setting variables, check your deployment logs for:
- "Essential environment variables validated successfully"
- No "placeholder value" warnings
- Successful Sentry initialization

## Security Notes

- Never commit real environment variables to Git
- Use different values for staging/production
- Rotate secrets regularly
- Use service role keys only on server-side
- Store auth tokens securely in deployment platform 
