# 🔐 Auth0 Management API Setup Guide

This guide will help you configure Auth0 for user registration and authentication in Zion.app.

## 🚨 **CRITICAL**: Management API Configuration Required

**Without proper Auth0 Management API setup, user registration will fail with 401/403 errors.**

## 📋 Step-by-Step Setup

### 1. **Create Auth0 Account & Application**

1. Go to [Auth0 Dashboard](https://manage.auth0.com/)
2. Create a new account or log in
3. Navigate to **Applications** → **Create Application**
4. Name: `Zion.app` (or your preferred name)
5. Type: **Regular Web Application**
6. Click **Create**

### 2. **Configure Application Settings**

In your application settings:

```
Allowed Callback URLs:
http://localhost:3000/api/auth/callback
https://yourdomain.com/api/auth/callback

Allowed Logout URLs:  
http://localhost:3000
https://yourdomain.com

Allowed Web Origins:
http://localhost:3000
https://yourdomain.com
```

### 3. **🔑 Enable Management API (CRITICAL STEP)**

This is the most important step for user registration to work:

1. Navigate to **Applications** → **APIs** → **Auth0 Management API**
2. Click the **Machine to Machine Applications** tab
3. Find your application (`Zion.app`) in the list
4. Toggle **"Authorized"** to **ON** ✅
5. Click the dropdown arrow to expand scopes
6. Enable these **REQUIRED** scopes:
   ```
   ✅ create:users
   ✅ read:users  
   ✅ update:users
   ✅ update:users_app_metadata
   ✅ create:user_tickets
   ```
7. Click **"Update"** to save

### 4. **🔧 Environment Variables Setup**

Create a `.env.local` file in your project root:

```bash
# Auth0 Configuration
AUTH0_DOMAIN=your-tenant.us.auth0.com
AUTH0_ISSUER_BASE_URL=https://your-tenant.us.auth0.com
AUTH0_CLIENT_ID=your_client_id_from_auth0
AUTH0_CLIENT_SECRET=your_client_secret_from_auth0
AUTH0_SECRET=your_32_character_random_secret

# App URLs
AUTH0_BASE_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Generate AUTH0_SECRET:**
```bash
openssl rand -hex 32
```

### 5. **📍 Find Your Configuration Values**

**Domain & Base URL:**
- Found in Auth0 Dashboard → Applications → [Your App] → Settings
- Example: `dev-abc123.us.auth0.com`

**Client ID & Secret:**
- Found in Auth0 Dashboard → Applications → [Your App] → Settings
- Keep Client Secret secure and never commit it to version control

### 6. **🧪 Test Registration**

1. Start your development server: `npm run dev`
2. Go to: `http://localhost:3000/signup`
3. Try registering with a test email
4. Check server logs for success/error messages

## 🔧 **Troubleshooting Common Issues**

### ❌ Error: "Authentication service not configured"
```
Solution: Check that all AUTH0_* environment variables are set correctly
```

### ❌ Error: "Auth0 Management API Authorization Failed (401/403)"
```
Solution: 
1. Verify Management API is authorized for your application
2. Ensure required scopes are enabled (create:users, read:users, etc.)
3. Double-check CLIENT_ID and CLIENT_SECRET are correct
```

### ❌ Error: "Maximum call stack size exceeded"
```
Solution: This was a bug in our code, now fixed in latest version
```

### ❌ Error: "Cannot find module 'undici'"
```
Solution: Run: npm install undici --save
```

## 🎯 **Verification Checklist**

- [ ] Auth0 application created
- [ ] Management API authorized for your application  
- [ ] Required scopes enabled (create:users, read:users, etc.)
- [ ] All environment variables set in `.env.local`
- [ ] AUTH0_SECRET generated with `openssl rand -hex 32`
- [ ] Callback URLs configured correctly
- [ ] Test registration works without errors

## 🔄 **Development vs Production**

**Development:**
- Use `http://localhost:3000` URLs
- Use test domain like `dev-abc123.us.auth0.com`
- Enable detailed error logging

**Production:**
- Use your actual domain URLs  
- Use production Auth0 tenant
- Keep secrets secure in environment variables
- Enable Sentry error tracking

## 📞 **Support**

If you encounter issues:

1. Check the [Auth0 Documentation](https://auth0.com/docs)
2. Verify your Management API scopes are correctly set
3. Check server logs for detailed error messages
4. Contact the development team with specific error messages

## 🚀 **Next Steps After Setup**

Once Auth0 is working:

1. **Enable Email Verification**: Configure email templates in Auth0
2. **Add Social Logins**: Configure Google, GitHub, etc. providers  
3. **Set Up Roles**: Create user roles in Auth0 for different access levels
4. **Configure Branding**: Customize Auth0 login pages with your branding
5. **Add MFA**: Enable multi-factor authentication for enhanced security

---

**💡 Pro Tip**: Always test in development first before deploying to production! 