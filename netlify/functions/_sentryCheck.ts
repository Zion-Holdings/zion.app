import * as Sentry from '@sentry/nextjs';
export const handler = async () => {
  if (!process.env.SENTRY_DSN) {
    console.error('SENTRY_DSN missing in function runtime');
  }
  return { statusCode: 204 };
};
