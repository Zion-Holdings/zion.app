// The Sentry SDK, initialized via sentry.client.config.js,
// automatically handles global errors (window.onerror) and unhandled promise rejections.
// Custom global error handlers that duplicate this functionality have been removed.

// The logError import might still be here if other parts of the application
// use it directly for specific, non-global error logging.
// If logError is not used elsewhere, this file (and its import in _app.tsx or similar)
// could be removed entirely in a future refactoring.
import { logError } from './logError';

// Example: If you still need logError for other purposes, it can be re-exported or used.
// export { logError };
// Or, if there are other utility functions in this file, they would remain.

// For now, we'll keep the import as a placeholder, assuming logError might be used elsewhere.
// If it's confirmed that logError is no longer needed after Sentry integration,
// the import and this file can be cleaned up.

// console.log("globalErrorHandler.ts: Custom global handlers removed, Sentry handles this.");
