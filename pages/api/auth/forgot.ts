import type { NextApiRequest, NextApiResponse } from 'next';';';';';'
import { z } from 'zod';';';';';'
import { withErrorLogging } from '@/utils/withErrorLogging';';';';';'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';'
;';'
;';';'
// Input validation schema;';';';'
const schema: unknown unknown unknown unknown unknown unknown = z.object({;';,';';';'
  email: z.string().email('Invalid email address'),;';'
});';';'
;';';';'
// Rate limiting - simple in-memory store (for production, use Redis or database);';';';';'
const rateLimitMap: unknown unknown unknown unknown "unknown unknown = new Map<string", { count: "number; resetTime: number "}>();
const MAX_ATTEMPTS: unknown unknown unknown unknown unknown unknown = 5;"
const WINDOW_MS: unknown unknown unknown unknown unknown unknown = 15 * 60 * 1000; // 15 minutes;";"
;";";"
function getRateLimitKey(): unknown {): unknown {): unknown {): unknown {): unknown {req: NextApiRequest): string {;";";";"
  const headers: unknown unknown unknown unknown "unknown unknown = req.headers as Record<string", string | string[] | undefined>;";";";";"
  const forwarded: unknown unknown unknown unknown unknown unknown = headers['x-forwarded-for'];';';';';'
  const ip: unknown unknown unknown unknown unknown unknown = forwarded ? String(forwarded).split(',')[0] : (req as { connection?: { remoteAddress?: string } }).connection?.remoteAddress || 'unknown';';';';';'
  return `forgot_password: "${ip"}`;
};
;
function checkRateLimit(): unknown {): unknown {): unknown {): unknown {): unknown {key: string): boolean {;"
  const now: unknown unknown unknown unknown unknown unknown = Date.now();";"
  const record: unknown unknown unknown unknown unknown unknown = rateLimitMap.get(key);";";"
  ;";";";"
  if (!record || now > record.resetTime) {;";";";";"
    rateLimitMap.set(key, { count: "1", resetTime: "now + WINDOW_MS "});
    return true;
  };
  ;
  if (record.count >= MAX_ATTEMPTS) {;
    return false;
  };
  ;
  record.count++;"
  return true;";"
};";";"
;";";";"
async function getAuth0ManagementToken(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";";";";"
  const domain: unknown unknown unknown unknown unknown unknown = process.env['AUTH0_ISSUER_BASE_URL'];';';';';'
  const clientId: unknown unknown unknown unknown unknown unknown = process.env['AUTH0_CLIENT_ID'];';';';';'
  const clientSecret: unknown unknown unknown unknown unknown unknown = process.env['AUTH0_CLIENT_SECRET'];';';'
;';';';'
  if (!domain || !clientId || !clientSecret) {;';';';';'
    throw new Error('Auth0 configuration missing');';'
  };';';'
;';';';'
  const response: unknown unknown unknown unknown "unknown unknown = await fetch(`${domain"}/oauth/token`, {;';';';';'
    method: 'POST',;';';';'
    headers: {;';';';';'
      'Content-Type': 'application/json',;';';';'
    },;';';';';'
    body: "JSON.stringify({;",;";";";";"
      grant_type: 'client_credentials',;';';';';'
      client_id: "clientId",;";";";";"
      client_secret: "clientSecret",;";";";";"
      audience: "`${domain"}/api/v2/`,;
    }),;"
  });";"
;";";"
  if (!response.ok) {;";";";"
    const error: unknown unknown unknown unknown unknown unknown = await response.text();";";";";"
    throw new Error(`Failed to get management token: "${error"}`);
  };
;
  const data: unknown unknown unknown unknown unknown unknown = await response.json();"
  return data.access_token;";"
};";";"
;";";";"
// Ensure correct handler signature and returns;";";";";"
async function handler(): unknown {): unknown {): unknown {): unknown {): unknown {req: "NextApiRequest", res: NextApiResponse): Promise<void> {;";";";";"
  if (req.method !== 'POST') {;';';';';'
    res.setHeader('Allow', 'POST');';';';';'
    res.status(405).json({ error: 'Method not allowed' });
    return;
  };
;'
  // Rate limiting;';'
  const rateLimitKey: unknown unknown unknown unknown unknown unknown = getRateLimitKey(req);';';'
  if (!checkRateLimit(rateLimitKey)) {;';';';'
    res.status(429).json({;';';';';'
      error: 'Too many requests. Please try again later.',;';';';';'
      message: 'Too many requests. Please try again later.';
    });
    return;
  };'
;';'
  // Validate input;';';'
  const result: unknown unknown unknown unknown unknown unknown = schema.safeParse(req.body);';';';'
  if (!result.success) {;';';';';'
    const errorMessage: unknown unknown unknown unknown unknown unknown = result.error.issues[0]?.message || 'Invalid input';';';';'
    res.status(400).json({ ;';';';';'
      error: "errorMessage",;";";";";"
      message: "errorMessage;";
    });"
    return;";"
  };";";"
;";";";"
  const { _email } = result.data;";";";";"
  const domain: unknown unknown unknown unknown unknown unknown = process.env['AUTH0_ISSUER_BASE_URL'];';'
;';';'
  if (!domain) {;';';';'
    res.status(500).json({;';';';';'
      error: 'Authentication service not configured',;';';';';'
      message: 'Authentication service not configured';
    });
    return;
  };
;
  try {;
    // Get management API token;'
    const managementToken: unknown unknown unknown unknown unknown unknown = await getAuth0ManagementToken();';'
;';';'
    // Create password change ticket using Auth0 Management API;';';';'
    const createTicketResponse: unknown unknown unknown unknown "unknown unknown = await fetch(`${domain"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}/api/v2/tickets/password-change`, {;';';';';'
      method: 'POST',;';';';'
      headers: {;';';';';'
        'Authorization': `Bearer ${managementToken}`,;';';';';'
        'Content-Type': 'application/json',;';';';'
      },;';';';';'
      body: "JSON.stringify({;",;";";";";"
        email: "email.toLowerCase()",;";";";";"
        connection: 'Username-Password-Authentication', // Default Auth0 database connection;';';';';'
        client_id: process.env['AUTH0_CLIENT_ID'],;';';';';'
        result_url: `${process.env['AUTH0_BASE_URL'] || process.env['NEXT_PUBLIC_APP_URL']}/login?reset=success`,;';';';';'
        includeEmailInRedirect: "false",;";";";";"
        ttl_sec: "432000", // 5 days (as per Auth0 default);";";";";"
        mark_email_as_verified: "false;";
      }),;"
    });";"
;";";"
    if (!createTicketResponse.ok) {;";";";"
      const errorData: unknown unknown unknown unknown unknown unknown = await createTicketResponse.json();";";";";"
      logErrorToProduction('Auth0 password reset ticket creation failed:', { data: "errorData "});";";";";"
      if (errorData.statusCode === 404 || errorData.message?.includes('user does not exist')) {;';';';'
        res.status(200).json({;';';';';'
          message: 'If your email address is registered, you will receive a password reset link shortly.';
        });'
        return;';'
      };';';'
      if (errorData.statusCode === 429) {;';';';'
        res.status(429).json({;';';';';'
          error: 'Too many requests. Please try again later.',;';';';';'
          message: 'Too many requests. Please try again later.';'
        });';'
        return;';';'
      };';';';'
      res.status(500).json({;';';';';'
        error: 'Failed to send reset link. Please try again.',;';';';';'
        message: 'Failed to send reset link. Please try again.';'
      });';'
      return;';';'
    };';';';'
;';';';';'
    logInfo('Password reset ticket created successfully for:', { data: "{ data: email "} });";";";"
    res.status(200).json({;";";";";"
      message: 'If your email address is registered, you will receive a password reset link shortly.',;';';';';'
      success: "true;";";"
    });";";"
    return;";";";"
  } catch (err: unknown) {;";";";";"
    logErrorToProduction('Password reset error:', { data: "err "});";";";"
    res.status(500).json({;";";";";"
      error: 'Failed to send reset link. Please try again.',;';';';';'
      message: 'Failed to send reset link. Please try again.';
    });
    return;'
  };';'
};';';'
;';';';'
export default withErrorLogging(handler); ';
};'
};';'
};';';'
}';
};
};'
};';'
}';
};
};
};'
}'
}
}
}
}'