# Authentication Setup Guide

This guide explains how to set up password reset functionality and social login providers in Supabase for the Zion application.

## Password Reset Setup

The password reset functionality is already implemented and uses Supabase's built-in password reset feature. No additional configuration is required.

## Social Login Providers Setup

To enable social login providers (Google, GitHub, LinkedIn, Twitter), you need to configure them in your Supabase dashboard.

### 1. Google OAuth Setup

1. Go to your Supabase dashboard
2. Navigate to Authentication > Providers
3. Enable Google provider
4. Create a Google OAuth application:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Go to Credentials > Create Credentials > OAuth 2.0 Client IDs
   - Set Application type to "Web application"
   - Add authorized redirect URIs:
     - `https://your-project.supabase.co/auth/v1/callback`
     - `http://localhost:3000/auth/callback` (for local development)
5. Copy the Client ID and Client Secret to Supabase Google provider settings

### 2. GitHub OAuth Setup

1. Go to your Supabase dashboard
2. Navigate to Authentication > Providers
3. Enable GitHub provider
4. Create a GitHub OAuth application:
   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Click "New OAuth App"
   - Set Application name: "Zion"
   - Set Homepage URL: `https://your-domain.com`
   - Set Authorization callback URL: `https://your-project.supabase.co/auth/v1/callback`
5. Copy the Client ID and Client Secret to Supabase GitHub provider settings

### 3. LinkedIn OAuth Setup

1. Go to your Supabase dashboard
2. Navigate to Authentication > Providers
3. Enable LinkedIn provider
4. Create a LinkedIn OAuth application:
   - Go to [LinkedIn Developers](https://www.linkedin.com/developers/)
   - Create a new app
   - Set OAuth 2.0 redirect URLs: `https://your-project.supabase.co/auth/v1/callback`
5. Copy the Client ID and Client Secret to Supabase LinkedIn provider settings

### 4. Twitter OAuth Setup

1. Go to your Supabase dashboard
2. Navigate to Authentication > Providers
3. Enable Twitter provider
4. Create a Twitter OAuth application:
   - Go to [Twitter Developer Portal](https://developer.twitter.com/)
   - Create a new app
   - Set Callback URLs: `https://your-project.supabase.co/auth/v1/callback`
5. Copy the API Key and API Secret to Supabase Twitter provider settings

## Environment Variables

Make sure your environment variables are properly set:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Features Implemented

### Password Reset
- ✅ Forgot password page (`/auth/forgot-password`)
- ✅ Password reset page (`/auth/reset-password`)
- ✅ Email-based password reset flow
- ✅ Secure password update functionality

### Social Login
- ✅ Google OAuth integration
- ✅ GitHub OAuth integration
- ✅ LinkedIn OAuth integration
- ✅ Twitter OAuth integration
- ✅ Loading states for all providers
- ✅ Error handling for failed authentication
- ✅ Consistent UI across login and signup pages

### Authentication Flow
- ✅ Email/password authentication
- ✅ Social login authentication
- ✅ Email verification
- ✅ Password reset flow
- ✅ Session management
- ✅ Protected routes
- ✅ Automatic redirects

## Usage

### Password Reset Flow
1. User clicks "Forgot your password?" on login page
2. User enters email address
3. User receives password reset email
4. User clicks link in email
5. User is redirected to reset password page
6. User sets new password
7. User is redirected to login page

### Social Login Flow
1. User clicks social login button
2. User is redirected to provider's OAuth page
3. User authorizes the application
4. User is redirected back to callback page
5. User is authenticated and redirected to dashboard

## Security Features

- PKCE flow for OAuth
- Secure session management
- Email verification required for new accounts
- Password strength validation
- CSRF protection
- Secure cookie handling

## Testing

To test the authentication system:

1. **Email/Password**: Create an account and verify email
2. **Password Reset**: Use forgot password flow
3. **Social Login**: Test each provider after configuration
4. **Session Management**: Test login/logout functionality
5. **Protected Routes**: Ensure unauthenticated users are redirected

## Troubleshooting

### Common Issues

1. **OAuth not working**: Check redirect URIs in provider settings
2. **Email not sending**: Verify Supabase email settings
3. **Session not persisting**: Check cookie settings and domain configuration
4. **Callback errors**: Ensure callback URL matches exactly

### Debug Steps

1. Check browser console for errors
2. Verify environment variables
3. Test with different browsers
4. Check Supabase logs for authentication events
5. Verify provider configurations in Supabase dashboard 