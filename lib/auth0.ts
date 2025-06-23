import { Auth0Client } from "@auth0/nextjs-auth0/server";

console.log('Initializing Auth0 client with configuration:', {
  domain: process.env.AUTH0_ISSUER_BASE_URL ? 'SET' : 'NOT SET',
  clientId: process.env.AUTH0_CLIENT_ID ? 'SET' : 'NOT SET',
  clientSecret: process.env.AUTH0_CLIENT_SECRET ? 'SET' : 'NOT SET',
  appBaseUrl: process.env.AUTH0_BASE_URL ? 'SET' : 'NOT SET',
  secret: process.env.AUTH0_SECRET ? 'SET' : 'NOT SET'
});

export const auth0 = new Auth0Client({
  // These will be automatically loaded from environment variables
  // but we can override them here if needed
  authorizationParameters: {
    scope: 'openid profile email',
  },
  signInReturnToPath: '/dashboard'
}); 