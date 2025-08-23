# Analytics and Error Tracking

This project uses Google Analytics 4 (GA4) to track user behaviour and Sentry to capture runtime errors.

## GA4 Dashboard

Page views and click events are sent to GA4. Use the `DebugView` while running the app locally to verify events. The main dashboard lives in the GA property configured by `VITE_GA_MEASUREMENT_ID`.

## Sentry Dashboard

Errors reported with `captureException` are visible in the Sentry project configured by the `VITE_SENTRY_DSN` environment variable. In development you can trigger a failing API request to confirm events arrive in Sentry.
