# Supabase Authentication Setup Guide

## Overview

This application uses **Supabase** for all authentication functionality, including:
- User registration and login
- Password reset and email verification
- Social authentication (Google, Facebook, Twitter)
- Session management and token refresh
- User profile management

All environment variables for authentication are managed through **Netlify** for production deployments.

## Required Environment Variables

### 🔑 Supabase Configuration (REQUIRED)

The following environment variables **MUST** be configured for authentication to work:

```bash
# Supabase Project URL (from your Supabase dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co

# Supabase Anonymous Key (safe to expose publicly)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Service Role Key (optional, for server-side operations)
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 🔗 Authentication Service (REQUIRED for Signup)

```bash
# Internal authentication service URL
INTERNAL_AUTH_SERVICE_URL=https://your-auth-service-url.com
```

## Setup Instructions

### 1. Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Click "New Project"
3. Choose your organization and provide project details
4. Wait for the project to be created

### 2. Get Supabase Credentials

1. In your Supabase project, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (use for `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon public** key (use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - **service_role** key (use for `SUPABASE_SERVICE_ROLE_KEY`)

### 3. Configure Authentication Providers

#### Email Authentication (Default)
1. Go to **Authentication** → **Settings**
2. Ensure "Enable email confirmations" is configured as needed. This is the standard Supabase setting for requiring email verification.
3. Set up email templates if desired.

##### Auto-Email Verification in Development/Staging Environments

To facilitate testing and development, the application includes logic to **automatically verify user emails upon registration** when in `development` or `staging` environments. This bypasses the need to click a verification link.

For this feature to work, the following environment variables must be correctly set in your development, staging, **beta**, or QA environments:

-   `NEXT_PUBLIC_APP_ENV`: This variable must be set to `development`, `staging`, or `beta`. If it's unset or set to `production` (or any other value), auto-verification will be skipped.
    ```bash
    # Example for .env.local or Netlify UI for beta testing
    NEXT_PUBLIC_APP_ENV=beta
    ```

-   `SUPABASE_SERVICE_ROLE_KEY`: This key is **required** for the backend to perform the administrative action of marking an email as confirmed. Ensure this key is provided and has the necessary permissions in your Supabase project to update user attributes.
    ```bash
    # Example for .env.local or Netlify UI for staging
    SUPABASE_SERVICE_ROLE_KEY=your_actual_supabase_service_role_key
    ```

If `NEXT_PUBLIC_APP_ENV` is correctly set but `SUPABASE_SERVICE_ROLE_KEY` is missing or invalid, the auto-verification will be skipped, and the system will fall back to requiring manual email verification. Refer to the server logs for `/api/auth/register` for more details if auto-verification is not working as expected.

#### Social Authentication (Optional)
1. Go to **Authentication** → **Providers** in your Supabase project dashboard.
2. Enable and configure providers such as Google, Facebook, GitHub, Microsoft, etc.
   - You will typically need to provide the **Client ID** and **Client Secret** obtained from the respective OAuth provider's developer console.
   - **Redirect URI / Callback URL:**
     - If Supabase is handling the OAuth flow directly (e.g., using `supabase.auth.signInWithOAuth()`), the redirect URI to configure on the provider's site is typically `https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback`.
     - **If using NextAuth.js as the primary OAuth handler (as implemented in this project for social logins):**
       - The Client ID and Secret are used by NextAuth.js (configured via environment variables like `GOOGLE_CLIENT_ID`, `GITHUB_CLIENT_ID`, etc.).
       - The redirect URI to configure on the OAuth provider's developer portal (e.g., Google Cloud Console, GitHub Developer Settings, Azure App Registration) should be your application's NextAuth.js callback URL: `YOUR_APP_URL/api/auth/callback/PROVIDER_NAME` (e.g., `http://localhost:3000/api/auth/callback/google` or `https://yourdomain.com/api/auth/callback/github`).
       - While you can enable the provider in Supabase dashboard for consistency or if you plan to use Supabase's JS library for OAuth elsewhere, the primary interaction for login buttons added in this project goes through NextAuth.js. The NextAuth.js `signIn` callback then handles creating/linking the user in Supabase.
3. Ensure your application's domain and the necessary callback URLs are correctly registered with each OAuth provider.

### 4. Set Up Database Schema

The application expects the following database structure:

```sql
-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  location TEXT,
  website TEXT,
  skills TEXT[],
  experience_level TEXT,
  hourly_rate NUMERIC,
  availability_status TEXT DEFAULT 'available',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## Netlify Configuration

### 1. Set Environment Variables in Netlify UI

1. Go to your Netlify site dashboard
2. Navigate to **Site Settings** → **Environment Variables**
3. Add the following variables with your actual values:

#### Required Variables:
```
NEXT_PUBLIC_SUPABASE_URL = https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_actual_anon_key
SUPABASE_SERVICE_ROLE_KEY = your_actual_service_role_key
INTERNAL_AUTH_SERVICE_URL = https://your-auth-service.com
```

#### Optional Variables:
```
NEXT_PUBLIC_SENTRY_DSN = your_sentry_dsn
NEXT_PUBLIC_REOWN_PROJECT_ID = your_reown_project_id
```

### 2. Configure Build Settings

Ensure your `netlify.toml` includes the proper build configuration. The file should already contain placeholders for all required variables.

### 3. Deploy and Test

1. Deploy your site to Netlify
2. Test authentication functionality:
   - User registration
   - Email verification
   - Login/logout
   - Password reset

## Local Development Setup

### 1. Create Local Environment File

Create a `.env.local` file in your project root:

```bash
# Copy from .env.example and fill in actual values
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
INTERNAL_AUTH_SERVICE_URL=http://localhost:3001
```

### 2. Run Local Supabase (Optional)

For full local development with Supabase:

```bash
# Install Supabase CLI
npm install -g @supabase/cli

# Start local Supabase
supabase start

# Run database migrations
supabase db reset
```

### 3. Start Development Server

```bash
npm run dev
```

## Authentication Flow

### 1. User Registration
```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123',
  options: {
    data: {
      display_name: 'User Name'
    }
  }
});
```

### 2. User Login
```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
});
```

### 3. Session Management
```typescript
// Listen for auth state changes
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    // User signed in
    setUser(session.user);
  } else if (event === 'SIGNED_OUT') {
    // User signed out
    setUser(null);
  }
});
```

## Troubleshooting

### Common Issues

#### 1. "Supabase not configured" Warning
- **Cause**: Environment variables not set correctly
- **Solution**: Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set with actual values

#### 2. Authentication Fails Silently
- **Cause**: Invalid Supabase credentials or network issues
- **Solution**: Check browser console for errors and verify credentials

#### 3. Profile Not Found After Login
- **Cause**: Database schema not set up or RLS policies missing
- **Solution**: Run database migrations and verify policies

#### 4. Redirect Issues After Login
- **Cause**: Incorrect redirect URLs in auth providers
- **Solution**: Add your domain to allowed redirect URLs in Supabase

### Debug Steps

1. **Check Environment Configuration**:
   ```bash
   # In browser console or server logs
   console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
   console.log('Supabase configured:', isSupabaseConfigured);
   ```

2. **Verify Supabase Connection**:
   ```typescript
   const { data, error } = await supabase.auth.getSession();
   console.log('Current session:', data.session);
   ```

3. **Check Database Connectivity**:
   ```typescript
   const { data, error } = await supabase.from('profiles').select('count');
   console.log('Database connection:', error ? 'Failed' : 'Success');
   ```

## Security Best Practices

### 1. Environment Variables
- ✅ **NEXT_PUBLIC_*** variables are safe to expose (URLs, public keys)
- ❌ **Never expose** service role keys or auth tokens publicly
- ✅ Use Netlify's encrypted environment variables for secrets

### 2. Database Security
- ✅ Enable Row Level Security (RLS) on all tables
- ✅ Create restrictive policies for data access
- ✅ Validate user permissions on sensitive operations

### 3. Authentication
- ✅ Use strong password requirements
- ✅ Enable email verification for new accounts
- ✅ Implement proper session management
- ✅ Use HTTPS in production

## Support and Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

**⚠️ Important**: Always test authentication functionality after any configuration changes. Keep your Supabase credentials secure and never commit them to version control. 