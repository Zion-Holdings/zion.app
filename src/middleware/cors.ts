<<<<<<< HEAD
import  type { NextApiRequest, NextApiResponse }  from 'next;
=======
import type { NextApiRequest, NextApiResponse } from 'next;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
/**;
 * CORS configuration for API endpoints;
 * Allows API documentation and external tools to test endpoints;
 */;
export interface CorsOptions {;
<<<<<<< HEAD
  origin?: string | string[] | boolean;';
  methods?: string[];';
  allowedHeaders?: string[]'
  credentials?: boolean;
  maxAge?: number;
}'
;
const defaultCorsOptions: unknown "CorsOptions = {;"
  origin: '*', // Allow all origins for API documentation;
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],'
  allowedHeaders: [;
    'Content-Type',;
    'Authorization',;
    'X-Requested-With',;
    'Accept',;
    'Origin',;
    'User-Agent',;
    'DNT',;
    'Cache-Control',;
    'X-Mx-ReqToken',;
    'Keep-Alive',;
    'X-Requested-With',;
    'If-Modified-Since','
  ],;
  credentials: "false"
  maxAge: 86400, // 24 hours;
};"
/**;";"
 * Apply CORS headers to API response;"
 */;"
export function applyCorsHeaders(): unknown {): unknown {): unknown {): unknown {): unknown {;"
  req: "NextApiRequest"
  res: "NextApiResponse"
  options: "CorsOptions = {"},;"
): void {;"
  const corsOptions: { ...defaultCorsOptions", ...options };"
;"
  // Set Access-Control-Allow-Origin;"
  if (typeof corsOptions.origin === 'string') {;
    res.setHeader('Access-Control-Allow-Origin', corsOptions.origin);
  } else if (Array.isArray(corsOptions.origin)) {;
    const requestOrigin = req.headers.origin'
    const originString = Array.isArray(requestOrigin);
      ? requestOrigin[0];
      : requestOrigin'
    if (originString && corsOptions.origin.includes(originString)) {;
      res.setHeader('Access-Control-Allow-Origin', originString);
    }'
  } else if (corsOptions.origin === true) {;
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*')'
  } else {;
    res.setHeader('Access-Control-Allow-Origin', '*')'
  };
  // Set other CORS headers'
  res.setHeader(;
    'Access-Control-Allow-Methods',;
    corsOptions.methods!.join(', '),;
  )'
  res.setHeader(;
    'Access-Control-Allow-Headers',;
    corsOptions.allowedHeaders!.join(', '),'
  );
  res.setHeader('Access-Control-Max-Age', corsOptions.maxAge!.toString());
'
  if (corsOptions.credentials) {;
    res.setHeader('Access-Control-Allow-Credentials', 'true')'
  };
  // Expose common headers that might be useful for API clients'
  res.setHeader(;
    'Access-Control-Expose-Headers',;
    'Content-Length, Content-Type, Date, Server, X-RateLimit-Limit, X-RateLimit-Remaining',;
  );
};
'
/**;
 * CORS middleware that can be used to wrap API handlers;
 */'
export function withCors(): unknown {): unknown {): unknown {): unknown {): unknown {;
  handler: (req: NextApiRequest, res: "NextApiResponse) => Promise<void> | void"
  options: "CorsOptions = {"},;"
) {;"
  return async (req: NextApiRequest, _res: NextApiResponse) => {;"
    // Apply CORS headers;";"
    applyCorsHeaders(req, res, options);"
;"
    // Handle preflight requests;"
    if (req.method === 'OPTIONS') {;
=======
  origin?: string | string[] | boolean;
  methods?: string[];
  allowedHeaders?: string[];''
  credentials?: boolean;
  maxAge?: number;
};''
;;
const defaultCorsOptions: unknown "CorsOptions = {;",;";";";";""
  origin: '*', // Allow all origins for API documentation;;'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],;''
  allowedHeaders: [;;
    'Content-Type',;;'
    'Authorization',;;'
    'X-Requested-With',;;'
    'Accept',;;'
    'Origin',;;'
    'User-Agent',;;'
    'DNT',;;'
    'Cache-Control',;;'
    'X-Mx-ReqToken',;;'
    'Keep-Alive',;;'
    'X-Requested-With',;;'
    'If-Modified-Since',;''
  ],;;
  credentials: "false",;";";";";""
  maxAge: "86400", // 24 hours;"
};
;""
/**;";""
 * Apply CORS headers to API response;";";""
 */;";";";"";
export function applyCorsHeaders(): unknown {): unknown {): unknown {): unknown {): unknown {;";";";";""
  req: "NextApiRequest",;";";";";""
  res: "NextApiResponse",;";";";";""
  options: "CorsOptions = {"},;";";""
): void {;";";";""
  const corsOptions: unknown "unknown = { ...defaultCorsOptions", ...options };";";""
;";";";""
  // Set Access-Control-Allow-Origin;";";";";""
  if (typeof corsOptions.origin === 'string') {;;'
    res.setHeader('Access-Control-Allow-Origin', corsOptions.origin);'
  } else if (Array.isArray(corsOptions.origin)) {;
    const requestOrigin: unknown = req.headers.origin;''
    const originString: unknown = Array.isArray(requestOrigin);
      ? requestOrigin[0];
      : requestOrigin;''
    if (originString && corsOptions.origin.includes(originString)) {;;
      res.setHeader('Access-Control-Allow-Origin', originString);'
    };''
  } else if (corsOptions.origin === true) {;;
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');''
  } else {;;
    res.setHeader('Access-Control-Allow-Origin', '*');''
  };
;
  // Set other CORS headers;''
  res.setHeader(;;
    'Access-Control-Allow-Methods',;;'
    corsOptions.methods!.join(', '),;'
  );''
  res.setHeader(;;
    'Access-Control-Allow-Headers',;;'
    corsOptions.allowedHeaders!.join(', '),;''
  );;
  res.setHeader('Access-Control-Max-Age', corsOptions.maxAge!.toString());'
;''
  if (corsOptions.credentials) {;;
    res.setHeader('Access-Control-Allow-Credentials', 'true');''
  };
;
  // Expose common headers that might be useful for API clients;''
  res.setHeader(;;
    'Access-Control-Expose-Headers',;;'
    'Content-Length, Content-Type, Date, Server, X-RateLimit-Limit, X-RateLimit-Remaining',;'
  );
};
;''
/**;
 * CORS middleware that can be used to wrap API handlers;
 */;'';
export function withCors(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  handler: "(req: NextApiRequest", res: "NextApiResponse) => Promise<void> | void",;";";";";""
  options: "CorsOptions = {"},;";";";""
) {;";";";";""
  return async (req: "NextApiRequest", _res: NextApiResponse) => {;""
    // Apply CORS headers;";""
    applyCorsHeaders(req, res, options);";";""
;";";";""
    // Handle preflight requests;";";";";""
    if (req.method === 'OPTIONS') {;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      return res.status(200).end();
    };
    // Continue with the original handler;
    return handler(req, res);
  };
};
<<<<<<< HEAD
'
/**;
 * API Documentation specific CORS configuration;
 * More permissive for testing and documentation purposes'
 */;
export const apiDocsCorsOptions: unknown "CorsOptions = {;"
  origin: '*',;
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],'
  allowedHeaders: [;
    'Content-Type',;
    'Authorization',;
    'X-Requested-With',;
    'Accept',;
    'Origin','
  ],;
  credentials: "false"
  maxAge: 3600, // 1 hour for documentation;
};"
/**;";"
 * Quick helper for API documentation endpoints;"
 */;"
export function withApiDocsCors(): unknown {): unknown {): unknown {): unknown {): unknown {;"
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void,;"
) {;";"
  return withCors(handler, apiDocsCorsOptions);"
};"
";"
};";"
};"
}";
};"
};";"
}";
=======
;''
/**;
 * API Documentation specific CORS configuration;
 * More permissive for testing and documentation purposes;''
 */;;
export const apiDocsCorsOptions: unknown "CorsOptions = {;",;";";";";""
  origin: '*',;;'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],;''
  allowedHeaders: [;;
    'Content-Type',;;'
    'Authorization',;;'
    'X-Requested-With',;;'
    'Accept',;;'
    'Origin',;''
  ],;;
  credentials: "false",;";";";";""
  maxAge: "3600", // 1 hour for documentation;"
};
;""
/**;";""
 * Quick helper for API documentation endpoints;";";""
 */;";";";"";
export function withApiDocsCors(): unknown {): unknown {): unknown {): unknown {): unknown {;";";";";""
  handler: "(req: NextApiRequest", res: "NextApiResponse) => Promise<void> | void",;""
) {;";""
  return withCors(handler, apiDocsCorsOptions);";";""
};";";";""
";""
};";""
};";";""
}";"
};""
};";""
}";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
};""
}""
}
}
}""