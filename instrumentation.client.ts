import * as Sentry from '@sentry/nextjs';

export { register } from './sentry';

// Export the onRouterTransitionStart hook as required by @sentry/nextjs
// so that navigation events are properly captured during runtime.
// Guard against older SDK versions where the helper may not exist.
export const onRouterTransitionStart =
  typeof (Sentry as any).captureRouterTransitionStart === 'function'
    ? (Sentry as any).captureRouterTransitionStart
    : () => {};
