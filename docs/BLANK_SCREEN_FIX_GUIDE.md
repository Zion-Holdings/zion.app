# Blank Screen Troubleshooting Guide

This guide helps resolve the "blank screen" issue when running the Zion app. The problem is usually caused by missing `node_modules` or failed dependency installation.

## 1. Check the Logs

- **Development log:** `dev.log`
- **Next.js server log:** `next_dev_server.log`
- **Build log:** `build.log`

Look for messages about missing packages or build failures. For example, `node_modules directory is missing` or errors similar to:

```
unhandledRejection [TypeError: I.map is not a function]
```

These errors indicate dependencies were not installed correctly.
Starting from July 2025, the build monitor treats this message as a
**critical error** so it doesn't go unnoticed.

## 2. Install Dependencies

Ensure you have internet access, then run:

```bash
./setup.sh npm
```

This installs required packages using `npm`. Other package managers (`pnpm`, `yarn`, `bun`) are supported but `npm` is recommended if you encounter issues.

## 3. Rebuild and Start the App

After dependencies are installed:

```bash
npm run build
npm run dev
```

The application should load normally instead of showing a blank screen.

If the issue persists, clear your browser cache and check the console for additional errors.

## 4. Offline Development Mode

If you're unable to install dependencies due to network restrictions,
you can still work in a limited offline environment:

```bash
./offline-dev.sh
```

This script generates temporary shims and starts a simple local server on
port `8080`. It allows you to view static pages and continue editing
TypeScript code until full installation is possible.
