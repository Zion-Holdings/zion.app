import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // Check Auth0 configuration
  const auth0Domain = process.env.AUTH0_ISSUER_BASE_URL;
  const auth0ClientId = process.env.AUTH0_CLIENT_ID;
  const auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;
  const auth0Secret = process.env.AUTH0_SECRET;

  const missingVars = [];
  if (!auth0Domain) missingVars.push('AUTH0_ISSUER_BASE_URL');
  if (!auth0ClientId) missingVars.push('AUTH0_CLIENT_ID');
  if (!auth0ClientSecret) missingVars.push('AUTH0_CLIENT_SECRET');
  if (!auth0Secret) missingVars.push('AUTH0_SECRET');

  if (missingVars.length > 0) {
    console.error('Auth0 configuration incomplete. Missing:', missingVars.join(', '));
    return res.status(500).json({ 
      message: 'Auth service not configured',
      missing: missingVars
    });
  }

  // Check if Auth0 domain is reachable
  try {
    const wellKnownUrl = `${auth0Domain}/.well-known/openid_configuration`;
    const response = await fetch(wellKnownUrl);
    
    if (!response.ok) {
      console.error('Auth0 well-known endpoint failed with status', response.status);
      return res.status(500).json({ message: 'Auth service unreachable' });
    }
    
    const data = await response.json();
    return res.status(200).json({ 
      status: 'ok', 
      service: {
        issuer: data.issuer,
        authorization_endpoint: data.authorization_endpoint,
        token_endpoint: data.token_endpoint
      }
    });
  } catch (error: any) {
    console.error('Auth0 health check error:', error);
    return res.status(500).json({ message: 'Auth service unreachable' });
  }
}
