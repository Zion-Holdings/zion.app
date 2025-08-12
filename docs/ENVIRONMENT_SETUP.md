# Environment Setup Guide

This guide provides detailed instructions for setting up environment variables for the Zion platform.

## Quick Setup

Create a `.env.local` file in the project root with the following configuration:

```bash
# =============================================================================
# AUTH0 AUTHENTICATION (Primary Authentication System)
# =============================================================================
AUTH0_SECRET=your-auth0-secret-key-here
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-auth0-domain.auth0.com
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret

# =============================================================================
# DATABASE CONFIGURATION
# =============================================================================
DATABASE_URL=postgresql://username:password@localhost:5432/zion_db
MONGODB_URI=mongodb://localhost:27017/zion

# =============================================================================
# PAYMENT PROCESSING (STRIPE)
# =============================================================================
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
STRIPE_TEST_MODE=true
NEXT_PUBLIC_STRIPE_TEST_MODE=true

# =============================================================================
# ESSENTIAL SERVICES
# =============================================================================
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
OPENAI_API_KEY=your-openai-api-key
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
```

## Validation

Run the environment validation script:
```bash
npm run env:validate
```
The validator now warns if a `.env.local` file is missing so you can create one before running the project.

## Production Setup

For production deployments:
1. Set `NODE_ENV=production`
2. Update `AUTH0_BASE_URL` to your domain
3. Use production API keys
4. Set `STRIPE_TEST_MODE=false`

## Required vs Optional Variables

### Required (Application won't start without these):
- `AUTH0_SECRET`
- `AUTH0_CLIENT_ID` 
- `AUTH0_CLIENT_SECRET`
- `DATABASE_URL`

### Optional (Features may be disabled):
- `STRIPE_*` (payments disabled)
- `SENDGRID_*` (email disabled)
- `OPENAI_*` (AI features disabled)
- `ALERT_EMAIL` (alert notifications disabled)

## Troubleshooting

### Common Issues:
1. **Auth0 not configured**: Verify all AUTH0_* variables are set
2. **Database connection failed**: Check DATABASE_URL format
3. **Payment errors**: Ensure STRIPE_TEST_MODE matches your keys

### Validation Commands:
```bash
# Check all environment variables
npm run env:check

# Validate build-time variables
npm run env:validate-build

# Check development environment
npm run dev  # runs env:dev automatically
```

## Security Notes

- Never commit `.env.local` to version control
- Use different secrets for each environment
- Rotate secrets regularly
- Use strong, unique values for AUTH0_SECRET and JWT_SECRET 