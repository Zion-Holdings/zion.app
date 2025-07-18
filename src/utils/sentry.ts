import * as Sentry from '@sentry/nextjs';

export const captureException = (error: Error, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(error, context);
  } else {
    console.error('Sentry Error:', error, context);
  }
};

export const setUser = (user: any) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.setUser(user);
  }
};

export const setTag = (key: string, value: string) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.setTag(key, value);
  }
};