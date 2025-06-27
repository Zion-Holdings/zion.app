import * as Sentry from '@sentry/nextjs';

export { register } from './sentry';

// Export the onRouterTransitionStart hook as required by @sentry/nextjs
// so that navigation events are properly captured during runtime.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
