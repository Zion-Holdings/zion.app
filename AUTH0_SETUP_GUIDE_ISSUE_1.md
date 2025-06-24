# Auth0 Setup Guide - Fix Critical Signup Issue #1

## 🚨 **Critical Issue: Sign-up Fails**

**Current Symptoms:**
- Page shows banner "Authentication service is temporarily unavailable"
- Sign-up attempts result in "Authentication service not configured" error
- Toast notification: "Signup failed (Trace ID: ...)"
- New users cannot join the platform

**Root Cause:** Auth0 environment variables are not configured.

## 🛠️ **Quick Fix Instructions**

### Step 1: Create Environment File

Create a `.env.local` file in your project root with the following template:

```bash
# ==============================================
# AUTH0 CONFIGURATION (REQUIRED)
# ==============================================

# Your Auth0 domain (from Auth0 Dashboard)
AUTH0_ISSUER_BASE_URL=https://your-tenant.us.auth0.com

# Your application's base URL
AUTH0_BASE_URL=http://localhost:3000

# Your Auth0 Application credentials
AUTH0_CLIENT_ID=your_auth0_client_id_here
AUTH0_CLIENT_SECRET=your_auth0_client_secret_here

# Session encryption secret (generate new one)
AUTH0_SECRET=your_64_character_hex_secret_here

# ==============================================
# OPTIONAL CONFIGURATION
# ==============================================

# Sentry error monitoring
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id

# Reown wallet integration
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id_here
```

### Step 2: Auth0 Account Setup

1. **Create Auth0 Account**
   - Go to [https://manage.auth0.com/](https://manage.auth0.com/)
   - Sign up for a free account
   - Choose your region (US, EU, AU)

2. **Create Application**
   - Navigate to Applications → Create Application
   - Name: "Zion AI Marketplace"
   - Type: **Regular Web Application**
   - Technology: **Next.js**

3. **Configure Application Settings**
   
   In your Auth0 application settings, configure:

   **Allowed Callback URLs:**
   ```
   http://localhost:3000/api/auth/callback,
   https://yourdomain.com/api/auth/callback
   ```

   **Allowed Logout URLs:**
   ```
   http://localhost:3000,
   https://yourdomain.com
   ```

   **Allowed Web Origins:**
   ```
   http://localhost:3000,
   https://yourdomain.com
   ```

   **Allowed Origins (CORS):**
   ```
   http://localhost:3000,
   https://yourdomain.com
   ```

### Step 3: Get Auth0 Credentials

From your Auth0 application's **Settings** tab, copy:

1. **Domain** → Use as `AUTH0_ISSUER_BASE_URL` (add https:// prefix)
2. **Client ID** → Use as `AUTH0_CLIENT_ID`
3. **Client Secret** → Use as `AUTH0_CLIENT_SECRET`

### Step 4: Generate AUTH0_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -hex 32
```

Use the output as your `AUTH0_SECRET` value.

### Step 5: Update Environment Variables

Edit your `.env.local` file with the real values:

```bash
AUTH0_ISSUER_BASE_URL=https://dev-xyz123.us.auth0.com
AUTH0_BASE_URL=http://localhost:3000
AUTH0_CLIENT_ID=xVYwZ9pqr8sHGFc2x1tUn2oP7aM8kLwX
AUTH0_CLIENT_SECRET=xKY9p2qr-s8HvFc_x1tBn2oP7aM8kLwX9pYrK3dFgHjQwErT
AUTH0_SECRET=a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
```

### Step 6: Restart Application

```bash
npm run dev
```

Or if using other commands:
```bash
# Stop current server (Ctrl+C)
# Then restart
npm start
# or
yarn dev
```

## 🧪 **Testing the Fix**

### 1. Health Check

Visit: `http://localhost:3000/api/auth/health`

**Expected Response:**
```json
{
  "status": "ok",
  "service": {
    "issuer": "https://dev-xyz123.us.auth0.com",
    "authorization_endpoint": "https://dev-xyz123.us.auth0.com/authorize",
    "token_endpoint": "https://dev-xyz123.us.auth0.com/oauth/token"
  }
}
```

### 2. Sign-up Flow

1. Go to `/signup`
2. Fill out the form:
   - **Full Name:** Kal Catrao
   - **Email:** kalcatrao@hotmail.com  
   - **Password:** SisD2011
3. Submit the form

**Expected Result:**
- ✅ Form submits successfully
- ✅ Toast: "Registration successful. Please check your email to verify your account."
- ✅ Email verification notice appears
- ✅ No error messages

### 3. Email Verification

1. Check the email inbox for kalcatrao@hotmail.com
2. Click the verification link in the Auth0 email
3. User should be verified and able to log in

## 🔧 **Troubleshooting Common Issues**

### Issue: "Auth service not configured"

**Cause:** Environment variables missing or incorrect

**Solution:**
1. Verify `.env.local` exists in project root
2. Check all Auth0 variables are set
3. Restart the development server
4. Test health endpoint: `/api/auth/health`

### Issue: "Auth service unreachable"

**Cause:** Auth0 domain incorrect or network issues

**Solution:**
1. Verify `AUTH0_ISSUER_BASE_URL` format: `https://tenant.region.auth0.com`
2. Test domain manually: visit `https://your-domain/.well-known/openid_configuration`
3. Check network/firewall settings

### Issue: "Unauthorized" (401) during registration

**Cause:** Client credentials incorrect

**Solution:**
1. Double-check `AUTH0_CLIENT_ID` and `AUTH0_CLIENT_SECRET`
2. Ensure they're copied exactly from Auth0 dashboard
3. Verify application type is "Regular Web Application"

### Issue: "Forbidden" (403) during registration  

**Cause:** Missing scopes or permissions

**Solution:**
1. In Auth0 Dashboard → Applications → APIs → Machine to Machine
2. Authorize your application for Auth0 Management API
3. Grant scopes: `create:users`, `read:users`, `update:users`

### Issue: Callback URL mismatch

**Cause:** Auth0 callback URLs not configured

**Solution:**
1. In Auth0 Dashboard → Applications → Settings
2. Add to **Allowed Callback URLs**: `http://localhost:3000/api/auth/callback`
3. Add to **Allowed Logout URLs**: `http://localhost:3000`

## 🚀 **Production Configuration**

### Netlify Deployment

Add these environment variables in Netlify:

1. **Site Settings → Environment Variables**
2. Add each Auth0 variable:
   - `AUTH0_ISSUER_BASE_URL`
   - `AUTH0_BASE_URL` (set to your production domain)
   - `AUTH0_CLIENT_ID`
   - `AUTH0_CLIENT_SECRET`
   - `AUTH0_SECRET`

3. **Update Auth0 Application Settings:**
   - Add production URLs to Allowed Callback URLs
   - Add production domain to Allowed Web Origins

### Environment Variables for Production

```bash
AUTH0_ISSUER_BASE_URL=https://your-tenant.us.auth0.com
AUTH0_BASE_URL=https://app.ziontechgroup.com
AUTH0_CLIENT_ID=your_production_client_id
AUTH0_CLIENT_SECRET=your_production_client_secret  
AUTH0_SECRET=your_production_secret_64_chars_long
```

## 📋 **Validation Checklist**

- [ ] `.env.local` file created with all Auth0 variables
- [ ] Auth0 account created and application configured
- [ ] Callback URLs set correctly in Auth0
- [ ] Client credentials copied accurately
- [ ] `AUTH0_SECRET` generated with `openssl rand -hex 32`
- [ ] Development server restarted
- [ ] Health check endpoint returns 200 OK
- [ ] Sign-up form works without errors
- [ ] Email verification emails are sent
- [ ] Production environment variables configured (if deploying)

## 🎯 **Expected Results**

**Before Fix:**
- ❌ Blank banner: "Authentication service is temporarily unavailable"
- ❌ Sign-up fails with "Authentication service not configured"
- ❌ No user registration possible
- ❌ Health check returns 500 error

**After Fix:**
- ✅ **No warning banners on signup page**
- ✅ **Successful user registration with email verification**
- ✅ **Toast notifications work correctly** 
- ✅ **Health check returns healthy status**
- ✅ **Email verification flow works**
- ✅ **Users can complete full registration → verification → login cycle**

## 🆘 **Still Having Issues?**

If you're still experiencing problems after following this guide:

1. **Check logs** in browser console and terminal
2. **Verify configuration** with health check endpoint
3. **Test Auth0 domain** manually in browser
4. **Review Auth0 logs** in Auth0 Dashboard → Monitoring → Logs
5. **Contact support** with specific error messages and trace IDs

---

**🎉 Once configured properly, new users like Kal Catrao will be able to successfully sign up with the provided credentials and complete the full registration flow!** 