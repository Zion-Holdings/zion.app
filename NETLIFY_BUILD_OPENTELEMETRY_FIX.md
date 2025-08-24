# Netlify Build Failure - Missing OpenTelemetry Modules

**Date:** July 2, 2025

The build failed during `npm run build:netlify:prepare` with the following error:

```
Error: Cannot find module '@opentelemetry/core'
```

Sentry's OpenTelemetry instrumentation expects `@opentelemetry/core` and `@opentelemetry/api` to be installed. These packages were not declared in `package.json`, causing the build to abort when collecting page data.

## Resolution

Added the required OpenTelemetry packages to the project dependencies:

```json
"@opentelemetry/api": "^1.8.0",
"@opentelemetry/core": "^1.8.0"
```

With these dependencies present, Sentry can load its instrumentation modules and the Netlify build proceeds without the missing module error.
