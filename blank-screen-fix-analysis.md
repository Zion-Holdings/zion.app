# Blank Screen Investigation 2025-07-04

A blank screen was observed when loading the application. The following steps were taken during troubleshooting:

- `npm test` failed because `jest` is missing. This indicates the project dependencies are not installed.
- Running `./setup.sh npm` attempted to install packages, but network access is restricted, causing 403 errors from `registry.npmjs.org`.
- The `offline-dev.sh` script was used to start the offline placeholder server, confirming the project can run in offline mode but with limited functionality.

**Resolution**

The blank screen is caused by missing dependencies. When internet connectivity is available, run:

```bash
./setup.sh npm
npm run build && npm run dev
```

This will install the required packages and rebuild the project.
