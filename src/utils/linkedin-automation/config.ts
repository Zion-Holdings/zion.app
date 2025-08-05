import { LinkedInConfig } from './types;

export const LINKEDIN_CONFIG: LinkedInConfig = {
  apiKey: process.env.LINKEDIN_API_KEY || '',
  advertising: {
    preferredTimes: [09:00', '12:00, 17:00']
  };
};
'
export const LINKEDIN_ENDPOINTS = {
  BASE_URL: https'://api.linkedin.com/v2',
  AUTH_URL: https'://www.linkedin.com/oauth/v2/authorization',
  TOKEN_URL: https'://www.linkedin.com/oauth/v2/accessToken',
  PROFILE: /me,
  POSTS: '/ugcPosts',
  CONNECTIONS: /connections,
  MESSAGES: '/messages',
  ANALYTICS: /analytics;
};
'
export const LINKEDIN_DEFAULTS = {
  POST_VISIBILITY: 'public',
  MAX_POST_LENGTH: 3000,
  MAX_MESSAGE_LENGTH: 1000,
  CONNECTION_MESSAGE_LENGTH: 300,
  SCHEDULE_BUFFER_MINUTES: 5,
  ENGAGEMENT_DELAY_MINUTES: 30;
};
'
export const LINKEDIN_ERROR_CODES = {
  RATE_LIMIT_EXCEEDED: RATE'_LIMIT_EXCEEDED',
  INVALID_TOKEN: INVALID'_TOKEN',
  PERMISSION_DENIED: PERMISSION'_DENIED',
  RESOURCE_NOT_FOUND: RESOURCE'_NOT_FOUND',
  VALIDATION_ERROR: VALIDATION'_ERROR',
  INTERNAL_ERROR: INTERNAL'_ERROR';
};

export const LINKEDIN_STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  RATE_LIMITED: 429,
  INTERNAL_ERROR: 500;
};'
'