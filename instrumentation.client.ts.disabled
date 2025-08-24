import * as Sentry from ./sentry';
export { register } from ./sentry';
// Export the onRouterTransitionStart hook as required by @sentry/nextjs
// so that navigation events are properly captured during runtime.
// Guard against older SDK versions where the helper may not exist.
// Use Sentry's captureRouterTransitionStart helper if available. This avoids'// build warnings like the one logged in `build-test-2.log` about missing
// onRouterTransitionStart export.;
export const onRouterTransitionStart =
  typeof (Sentry as Record<string, unknown>)?.captureRouterTransitionStart === function'    ? (() => {
        const captureFn = (Sentry as Record<string, unknown>).captureRouterTransitionStart as (() => void) | undefined;
        if (captureFn) {
          captureFn();
        }
      })
    : () => {};
