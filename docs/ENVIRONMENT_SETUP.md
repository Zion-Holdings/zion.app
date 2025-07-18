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

- Never commit `.env.local` to version control. Production secrets are stored in Netlify and should not appear in the repository.
- Use different secrets for each environment
- Rotate secrets regularly
- Use strong, unique values for AUTH0_SECRET and JWT_SECRET