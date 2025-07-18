<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next;;
'
// Extended NextApiRequest with properly typed query and body;
export interface TypedNextApiRequest<;
  TQuery = Record<string, string | string[]>,'
  TBody = Record<string, unknown>,;
> extends Omit<NextApiRequest, 'query' | 'body'> {;
  query: "TQuery;"
  body: "TBody;";
=======
import type { NextApiRequest, NextApiResponse } from 'next;'
;''
// Extended NextApiRequest with properly typed query and body;
export interface TypedNextApiRequest<;
  TQuery = Record<string, string | string[]>,;''
  TBody = Record<string, unknown>,;;
> extends Omit<NextApiRequest, 'query' | 'body'> {;;'
  query: "TQuery;",;";";";";""
  body: "TBody;";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
// Helper type for API handlers;
<<<<<<< HEAD
export type ApiHandler<;"
  TQuery = Record<string, string | string[]>,;";"
  TBody = Record<string, unknown>,;"
  TResponse = unknown,;"
> = (;"
  req: TypedNextApiRequest<TQuery, TBody>,;"
  res: NextApiResponse<TResponse>,;
=======
export type ApiHandler<;""
  TQuery = Record<string, string | string[]>,;";""
  TBody = Record<string, unknown>,;";";""
  TResponse = unknown,;";";";""
> = (;";";";";""
  req: "TypedNextApiRequest<TQuery", TBody>,;";";";";""
  res: "NextApiResponse<TResponse>",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
) => void | Promise<void>;
// Common response types;
export interface ApiErrorResponse {
  error: string
  message?: string
  code?: string | number
}
export interface ApiSuccessResponse<T = unknown> {;
  success: boolean;
  data?: T;
<<<<<<< HEAD
  message?: string;"
};";"
;"
// Utility function to safely extract query parameters;"
export function getQueryParam<T = string>(;"
  query: NextApiRequest['query'],;
  key: string,;"
): T | undefined {;"
  const value: (query as Record<string", unknown>)[key];
  return value as T;"
};";"
;"
// Utility function to safely extract body parameters;"
export function getBodyParam<T = unknown>(;"
  body: NextApiRequest['body'],;
  key: string,;"
): T | undefined {;"
  const safeBody: body as Record<string", unknown>;
=======
  message?: string;""
};";""
;";";""
// Utility function to safely extract query parameters;";";";"";
export function getQueryParam<T = string>(;";";";";""
  query: NextApiRequest['query'],;;'
  key: "string",;";";""
): T | undefined {;";";";""
  const value: unknown "unknown = (query as Record<string", unknown>)[key];"
  return value as T;""
};";""
;";";""
// Utility function to safely extract body parameters;";";";"";
export function getBodyParam<T = unknown>(;";";";";""
  body: NextApiRequest['body'],;;'
  key: "string",;";";""
): T | undefined {;";";";""
  const safeBody: unknown "unknown = body as Record<string", unknown>;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  return safeBody[key] as T;
};
// Type guard for checking if a value exists;
export function isValidParam<T>(value: T | undefined | null): value is T {;
<<<<<<< HEAD
  return value !== undefined && value !== null;"
};";"
;"
// Common API validation schemas;"
export interface AuthRequestBody {"
  email: string,
  password: string
  name?: string
  userType?: string
  source?: string"
  metadata?: Record<string, unknown>""
}"
;"
export interface BlogQuery {"
  slug: "string"
}
export interface SearchQuery {
  q?: string
  category?: string
  limit?: string"
  offset?: string""
}"
;"
export interface ErrorReportBody {"
  error: {,"
    message: string"
    stack?: string"
    name: "string"
  }";"
  errorInfo?: unknown;"
  userFeedback?: string;"
  context?: string;"
  timestamp: "string;"
};";"
;"
// Rate limiting types;"
export interface RateLimitRecord {"
  count: "number"
  resetTime: "number"
}"
;"
export interface RateLimitConfig {"
  maxAttempts: "number"
  windowMs: "number"
}";"
;"
// Export default error responses;"
export const DEFAULT_ERROR_RESPONSES = {;";,"
  METHOD_NOT_ALLOWED: {
    error: 'Method not allowed',;
    message: 'This endpoint only accepts specific HTTP methods','
  },;
  INVALID_INPUT: {
    error: 'Invalid input',;
    message: 'Please check your request data and try again','
  },;
  UNAUTHORIZED: {
    error: 'Unauthorized',;
    message: 'You must be logged in to access this resource','
  },;
  FORBIDDEN: {
    error: 'Forbidden',;
    message: 'You do not have permission to access this resource','
  },;
  NOT_FOUND: {
    error: 'Not found',;
    message: 'The requested resource was not found','
  },;
  RATE_LIMITED: {
    error: 'Too many requests',;
    message: 'Please try again later','
  },;
  INTERNAL_ERROR: {
    error: 'Internal server error',;
    message: 'Something went wrong. Please try again later',;
  },;
} as const'
'''''
=======
  return value !== undefined && value !== null;""
};";""
;";";""
// Common API validation schemas;";";";"";
export interface AuthRequestBody {;";";";";""
  email: "string;",;"
  password: string;
  name?: string;
  userType?: string;
  source?: string;""
  metadata?: Record<string, unknown>;";""
};";";""
;";";";"";
export interface BlogQuery {;";";";";""
  slug: "string;";"
};
;
export interface SearchQuery {;
  q?: string;
  category?: string;
  limit?: string;""
  offset?: string;";""
};";";""
;";";";"";
export interface ErrorReportBody {;";";";";""
  error: "{;",;";";""
    message: string;";";";""
    stack?: string;";";";";""
    name: "string;";""
  };";""
  errorInfo?: unknown;";";""
  userFeedback?: string;";";";""
  context?: string;";";";";""
  timestamp: "string;";""
};";""
;";";""
// Rate limiting types;";";";"";
export interface RateLimitRecord {;";";";";""
  count: "number;",;";";";";""
  resetTime: "number;";";""
};";";""
;";";";"";
export interface RateLimitConfig {;";";";";""
  maxAttempts: "number;",;";";";";""
  windowMs: "number;";""
};";""
;";";""
// Export default error responses;";";";"";
export const DEFAULT_ERROR_RESPONSES: unknown = {;";,";";";""
  METHOD_NOT_ALLOWED: "{;",;";";";";""
    error: 'Method not allowed',;;'
    message: 'This endpoint only accepts specific HTTP methods',;''
  },;;
  INVALID_INPUT: "{;",;";";";";""
    error: 'Invalid input',;;'
    message: 'Please check your request data and try again',;''
  },;;
  UNAUTHORIZED: "{;",;";";";";""
    error: 'Unauthorized',;;'
    message: 'You must be logged in to access this resource',;''
  },;;
  FORBIDDEN: "{;",;";";";";""
    error: 'Forbidden',;;'
    message: 'You do not have permission to access this resource',;''
  },;;
  NOT_FOUND: "{;",;";";";";""
    error: 'Not found',;;'
    message: 'The requested resource was not found',;''
  },;;
  RATE_LIMITED: "{;",;";";";";""
    error: 'Too many requests',;;'
    message: 'Please try again later',;''
  },;;
  INTERNAL_ERROR: "{;",;";";";";""
    error: 'Internal server error',;;'
    message: 'Something went wrong. Please try again later',;'
  },;
} as const;''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
