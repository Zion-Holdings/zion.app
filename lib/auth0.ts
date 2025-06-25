import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Get Auth0 configuration from environment with proper fallbacks
const auth0Config = {
  domain: process.env.AUTH0_ISSUER_BASE_URL?.replace('https://', '') || process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  appBaseUrl: process.env.AUTH0_BASE_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  secret: process.env.AUTH0_SECRET
};

// Only log configuration in development to reduce production noise
if (process.env.NODE_ENV === 'development') {
  console.log('Initializing Auth0 client with configuration:', {
    domain: auth0Config.domain ? `${auth0Config.domain.substring(0, 10)}...` : 'NOT SET',
    clientId: auth0Config.clientId ? `${auth0Config.clientId.substring(0, 10)}...` : 'NOT SET', 
    clientSecret: auth0Config.clientSecret ? `${auth0Config.clientSecret.substring(0, 10)}...` : 'NOT SET',
    appBaseUrl: auth0Config.appBaseUrl ? `${auth0Config.appBaseUrl.substring(0, 25)}...` : 'NOT SET',
    secret: auth0Config.secret ? `${auth0Config.secret.substring(0, 10)}...` : 'NOT SET'
  });
}

// Only initialize Auth0 client if all required config is present
export const auth0 = auth0Config.domain && auth0Config.clientId && auth0Config.secret
  ? new Auth0Client({
      domain: auth0Config.domain,
      clientId: auth0Config.clientId,
      clientSecret: auth0Config.clientSecret,
      appBaseUrl: auth0Config.appBaseUrl,
      secret: auth0Config.secret,
      authorizationParameters: {
        scope: 'openid profile email',
      },
      signInReturnToPath: '/dashboard'
    })
  : null; // Return null if not properly configured 