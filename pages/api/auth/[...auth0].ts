import { handleAuth, handleLogin, handleLogout, handleCallback, handleProfile } from '@auth0/nextjs-auth0';

export default handleAuth({
  login: handleLogin({
    authorizationParams: {
      // Add custom parameters if needed
      audience: process.env.AUTH0_AUDIENCE, // If using Auth0 API
      scope: 'openid profile email offline_access', // Request offline access for refresh tokens
    },
  }),
  logout: handleLogout({
    returnTo: process.env.AUTH0_BASE_URL, // Redirect after logout
  }),
  callback: handleCallback({
    // Handle post-login callback
    afterCallback: (req, res, session, state) => {
      // You can customize what happens after successful authentication
      console.log('Auth0 callback successful for user:', session.user.email);
      return session;
    },
  }),
  profile: handleProfile({
    // Handle profile updates
    refetch: true, // Refetch user info from Auth0
  }),
}); 