# 📝 Logs Health Summary (2025-07-04)

## Overview
The command `npm run logs:summary` was executed and no new runtime errors were found. The health score remains excellent.

## Findings
- **Router Context**: One instance of `useNavigate()` used outside of a Router was detected.
- **Sentry Configuration**: A deprecation warning about `sentry.client.config.js` suggests moving configuration to `instrumentation-client.ts`.
- **Environment Variables**: `NEXT_PUBLIC_REOWN_PROJECT_ID` may still be misconfigured.
- **Map Usage**: Previous `map is not a function` errors were flagged. Ensure arrays are validated before calling `.map()`.
- **Webpack Cache**: A cache/usedExports conflict was detected; consider disabling `usedExports` if using `cacheUnaffected`.

## Recommendation
Run `npm run logs:health` periodically and address warnings above to maintain system stability.
