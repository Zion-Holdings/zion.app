# Sentry Monitoring Integration

This document outlines the Sentry monitoring setup for this Next.js project, covering configuration, environment variables, and local debugging.

## Overview

Sentry is integrated into this project to provide real-time error tracking and performance monitoring for client-side, server-side (API routes, `getServerSideProps`), and edge functions.

## Configuration Files

The Sentry integration is configured through several key files:

*   **`sentry.client.config.js`**: Initializes Sentry for the client-side (browser). It handles capturing client-side errors and performance data. It uses `NEXT_PUBLIC_SENTRY_DSN` for the DSN.
*   **`sentry.server.config.js`**: Initializes Sentry for server-side Next.js environments (e.g., API routes, `getServerSideProps` running on Node.js). It uses `SENTRY_DSN`.
*   **`sentry.edge.config.js`**: Initializes Sentry for Next.js Edge runtime environments. It uses `SENTRY_DSN`.
*   **`next.config.js`**: This file is wrapped with `withSentryConfig` from `@sentry/nextjs`. This Higher-Order Component automatically:
    *   Injects Sentry's build-time plugins for source map uploading.
    *   Enables automatic instrumentation for server-side code (API routes, `getServerSideProps`).
    *   Enables `productionBrowserSourceMaps` to ensure source maps are generated for client-side code.
    *   Uses the `@sentry/webpack-plugin` internally to upload source maps to Sentry during the build.

## Environment Variables

Proper configuration of environment variables in your Netlify deployment is crucial for Sentry to function correctly.

### Build-time Variables (Set in Netlify UI > Build & deploy > Environment)

These variables are used during the Netlify build process, primarily for source map uploading and release identification.

*   **`SENTRY_ORG`**: Your Sentry organization slug.
    *   *Example*: `my-sentry-org`
*   **`SENTRY_PROJECT`**: Your Sentry project slug.
    *   *Example*: `my-nextjs-app`
*   **`SENTRY_AUTH_TOKEN`**: A Sentry authentication token with `project:releases` and `org:read` scopes. This is required for uploading source maps. Generate this from Sentry: *Settings > Developer Settings > New Internal Integration*.
    *   **Important**: This is a secret and should be treated with care.
*   **`SENTRY_ENVIRONMENT`**: The environment name for the build (e.g., `production`, `staging`, `development`).
    *   *Default in `netlify.toml`*: `production`. Can be overridden by Netlify build contexts.
*   **`SENTRY_RELEASE`**: Automatically set to the Git commit SHA to associate Sentry events with specific code versions.
    *   *Set in `netlify.toml`*: `SENTRY_RELEASE = "$COMMIT_REF"` (uses Netlify's `COMMIT_REF` variable).

### Runtime Variables (Set in Netlify UI > Build & deploy > Environment)

These variables are used by your application code at runtime (client-side, serverless functions, edge functions).

*   **`SENTRY_DSN`**: Your Sentry DSN for server-side and edge functions. Found in Sentry: *Project Settings > Client Keys (DSN)*.
    *   *Example*: `https://yourPublicKey@o0.ingest.sentry.io/0123456`
*   **`NEXT_PUBLIC_SENTRY_DSN`**: Your Sentry DSN for client-side code. This is the same DSN as `SENTRY_DSN` but prefixed with `NEXT_PUBLIC_` to be available in the browser.
    *   *Example*: `https://yourPublicKey@o0.ingest.sentry.io/0123456`
*   **`NEXT_PUBLIC_SENTRY_RELEASE`**: The release identifier, made available to the client-side.
    *   *Set in `netlify.toml`*: `NEXT_PUBLIC_SENTRY_RELEASE = "$COMMIT_REF"` (derived from the build-time `SENTRY_RELEASE`).
*   **`NEXT_PUBLIC_SENTRY_ENVIRONMENT`**: The environment name, made available to the client-side.
    *   *Set in `netlify.toml`*: `NEXT_PUBLIC_SENTRY_ENVIRONMENT = "$SENTRY_ENVIRONMENT"` (derived from the build-time `SENTRY_ENVIRONMENT`).

**Note on `netlify.toml`**: The `netlify.toml` file in the repository includes placeholder values and comments for these environment variables to guide setup. However, actual secret values like `SENTRY_AUTH_TOKEN` and specific DSNs must be configured directly in the Netlify UI.

## Source Maps

Source maps are automatically uploaded to Sentry during the Netlify build process. This is handled by the `@sentry/webpack-plugin` (via `withSentryConfig` in `next.config.js`). For this to work, `SENTRY_ORG`, `SENTRY_PROJECT`, `SENTRY_AUTH_TOKEN`, and `SENTRY_RELEASE` must be correctly configured as build-time environment variables.

The `hideSourceMaps: true` option is used in `next.config.js` to prevent source maps from being publicly accessible via browser developer tools after they've been uploaded to Sentry.

## Release Tracking

Release tracking is enabled by setting the `SENTRY_RELEASE` environment variable to the commit SHA (`$COMMIT_REF` in Netlify). This associates errors and performance data with specific code releases, making it easier to identify when issues were introduced or resolved.

## Wrapping Handlers

*   **API Routes**: Automatically instrumented by `withSentryConfig` due to `autoInstrumentServerFunctions: true`.
*   **`getServerSideProps`**: Automatically instrumented by `withSentryConfig`. Some pages have also been explicitly wrapped with `withSentryGetServerSideProps` for robustness.
*   **Client-side Components**: Errors are captured via `sentry.client.config.js` and React Error Boundaries (e.g., `GlobalErrorBoundary`).

## Local Debugging

*   **Console Logs**: If `SENTRY_DSN` or `NEXT_PUBLIC_SENTRY_DSN` is not configured or is a placeholder, Sentry will typically log warnings to the console, and errors might not be sent. The Sentry SDKs are configured to provide console warnings in such cases.
*   **Test API Route**: You can test server-side error reporting by sending a request to `/api/sentry-test-error-api`. This route is designed to throw an error that should be captured by Sentry.
*   **Test Page for `getServerSideProps`**: The page `/sentry-test` (if it uses `getServerSideProps` and is configured to throw an error for testing) can be used to verify error capturing from server-side rendering.
*   **Development DSN**: Consider using a separate Sentry project or DSN for development/testing to avoid polluting your production Sentry project. Set the DSN environment variables locally for this.
*   **Sentry Spotlight**: If you set `NEXT_PUBLIC_SPOTLIGHT=true` as an environment variable locally and enable Spotlight in `sentry.client.config.js` (currently commented out but can be enabled), you can use Sentry Spotlight for local debugging of Sentry events.

## Alert Routing & Dashboards

Alert routing (e.g., sending notifications to Slack or email for new issues) and creating custom dashboards are configured within the Sentry UI. Please refer to the [official Sentry documentation](https://docs.sentry.io/) for guidance on these features.

## Verifying Integration

1.  Ensure all environment variables are correctly set in Netlify.
2.  Deploy your application.
3.  Trigger test errors (e.g., using `/api/sentry-test-error-api` or by introducing a deliberate error on a page).
4.  Check your Sentry dashboard to see if the errors appear with:
    *   Correct release version (commit SHA).
    *   Correct environment tag.
    *   Readable stack traces (indicating source maps are working).

## Datadog Correlation

Datadog tracing is enabled on the Express server using `dd-trace`. The active
Datadog `trace_id` and `span_id` are added to each Sentry event via the
`beforeSend` hook. In the browser, analytics and error logs are forwarded to
Datadog when `NEXT_PUBLIC_DD_CLIENT_TOKEN` is configured.

This allows stack traces in Sentry to be correlated with Datadog traces for
end‑to‑end debugging.
