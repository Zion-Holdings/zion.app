// The Sentry SDK, initialized via sentry.ts,;
// automatically handles global errors (window.onerror) and unhandled promise rejections.;
// Custom global error handlers that duplicate this functionality have been removed.;
// The logError import might still be here if other parts of the application;
// use it directly for specific, non-global error logging.;
// If logError is not used elsewhere, this file (and its import in _app.tsx or similar);
// could be removed entirely in a future refactoring.;
// logInfo("globalErrorHandler.ts: Custom global handlers removed, Sentry handles this.");"
"""""