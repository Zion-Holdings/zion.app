# Zion Multi-Component Platform

This repository contains the Zion project, a comprehensive platform featuring a web application, backend services, and various specialized modules.

## Overview

The project is structured as a monorepo and includes:

-   **Frontend Application (Next.js):** Located primarily in `src/` (for application code like components, hooks, pages using App Router) and `pages/` (for API routes and potentially older Pages Router content). This is the main user-facing application.
-   **Backend API (Django):** Located in `backend/`. This Python-based backend serves core business logic and data management, likely interacting with a PostgreSQL database.
-   **Node.js Backend Services:**
    -   **`server/`:** An Express.js application that provides additional API endpoints, potentially for specific features, BFF patterns, or integration tasks. It connects to MongoDB.
    -   **`api/` (within `pages/api/` or `src/pages/api`):** Next.js API routes providing serverless backend functionality directly within the Next.js application.
-   **Monitoring Service:** Located in `monitoring/`. A Node.js service for monitoring URL performance and health. (See `monitoring/README.md` for details).
-   **Supabase Integration:** Utilizes Supabase for backend-as-a-service features, with functions in `supabase/functions/` and schema definitions in `prisma/` (Prisma is used with Supabase, and potentially also for the Django backend or other Node.js services).
-   **Blockchain/DAO Components:** Directories like `dao/` and `token/` suggest features related to Decentralized Autonomous Organizations and cryptocurrency tokens.
-   **SDK:** A software development kit is present in `sdk/`, likely for interacting with Zion platform services.
-   **Documentation:** General documentation is in `docs/`, with specific component documentation potentially within their respective directories.
-   **Testing:** Extensive test suites using Vitest and Cypress are in `tests/` and `cypress/`. See **[docs/QA_TESTING_CHECKLIST.md](docs/QA_TESTING_CHECKLIST.md)** for common QA steps.
-   **Connect Portal:** Access the portal at `/portal` for account management and settings. The previous `/app` path is deprecated.

## Key Technologies

-   **Frontend:** Next.js, React, TypeScript, Redux Toolkit, Chakra UI, Radix UI, Tailwind CSS
-   **Backend (Django):** Python, Django, Django REST Framework, PostgreSQL
-   **Backend (Node.js):** Node.js, Express.js, TypeScript, MongoDB (for `server/`), Next.js API Routes
-   **Database/BaaS:** PostgreSQL, MongoDB, Supabase, Prisma
-   **Authentication:** Supabase Auth (handles login, signup, password reset, social auth) with optional two-factor authentication for the IPO portal
-   **Monitoring:** Custom Node.js service, Sentry, Datadog
-   **CI/CD:** GitHub Actions, Netlify (including Lighthouse CI)
-   **Other:** IPFS, OrbitDB, Ethers.js, Elasticsearch

## Environment Configuration

⚠️ **IMPORTANT**: This project uses **Supabase for authentication** and **Netlify for environment variable management**. Proper configuration is essential for the application to function correctly.

### Authentication Setup

The application uses Supabase for all authentication functionality:
- User registration and login
- Email verification and password reset
- Social authentication (Google, Facebook, GitHub, Microsoft, Twitter)
- Session management and profile handling

### Required Environment Variables

A comprehensive list of environment variables can be found in the `.env.example` file. For local development, copy this file to `.env.local` and populate it with the necessary values. **Do not commit `.env.local` to version control.**

For production deployments, all variables are configured directly in Netlify's UI, so the repository no longer contains a `.env.local` file with secrets.

**Key variables include:**

-   **Supabase Configuration:**
    -   `NEXT_PUBLIC_SUPABASE_URL`
    -   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
    -   `SUPABASE_SERVICE_ROLE_KEY` (for server-side operations)
-   **NextAuth.js Configuration:**
    -   `NEXTAUTH_SECRET` (a randomly generated string for signing tokens)
    -   `NEXTAUTH_URL` (the canonical URL of your application)
-   **OAuth Provider Credentials:**
    -   `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`
    -   `FACEBOOK_CLIENT_ID` & `FACEBOOK_CLIENT_SECRET`
    -   `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`
    -   `MICROSOFT_CLIENT_ID` & `MICROSOFT_CLIENT_SECRET` (and potentially `MICROSOFT_TENANT_ID`)
    -   Other provider credentials as needed.
-   **Internal Authentication Service:**
    -   `INTERNAL_AUTH_SERVICE_URL` (if used for specific flows like registration)

Ensure all variables marked as required in `.env.example` or in specific documentation (like `docs/SUPABASE_AUTHENTICATION_SETUP.md`) are correctly set.

### 📚 Detailed Setup Guides

- **[Supabase Authentication Setup](docs/SUPABASE_AUTHENTICATION_SETUP.md)** - Complete guide for configuring Supabase authentication
- **[Netlify Deployment Guide](docs/NETLIFY_DEPLOYMENT_GUIDE.md)** - Step-by-step Netlify deployment with environment variables
- **[Optional Two-Factor Authentication](TWO_FACTOR_AUTHENTICATION_SUMMARY.md)** - Overview of enabling 2FA in the IPO portal
- **[Logging Guidelines](docs/LOGGING_GUIDELINES.md)** - Usage instructions for the project logger
- **Collect Logs** - `npm run logs:collect` bundles recent logs under `logs/archive/`
- **Analyze Logs** - `npm run logs:summary` scans collected `.log` and `.txt` files, reports missing translation keys, and flags router context errors like `useNavigate()` without a `<Router>`
- **Improved Analysis** - The log analyzer now highlights TypeScript compilation issues such as `Cannot find name` errors
- **Health Check** - `npm run logs:health` prints a quick system status report
- You can skip external connectivity tests by setting `DISABLE_EXTERNAL_SERVICE_CHECKS=true` when running
  the health check (useful for offline environments)
- **Health Summary** - `npm run logs:health:summary` writes a detailed report to `logs/health-summary.json`
  including an overall project grade
- **Missing Key Log** - Any translation keys not found at runtime are appended to `logs/missing-keys.log`
- **Check for Missing Translations** - `npm run i18n:missing` verifies that all locales contain the same translation keys

### CDN for Static Assets

To improve performance, the application can serve static assets from a CDN.
Set `NEXT_PUBLIC_CDN_URL` to your CDN domain (e.g., `https://cdn.yourdomain.com`).
When this variable is provided in production builds, Next.js will prefix asset
URLs so they are loaded from the CDN.

### Quick Setup Verification

After setting up environment variables, verify your configuration:

```bash
# Check environment setup
npx ts-node --transpile-only scripts/check-env.ts

# Test Supabase connection (in browser console)
console.log('Supabase configured:', !!window.location.origin.includes('localhost') || !!process.env.NEXT_PUBLIC_SUPABASE_URL)
```

## Getting Started

1.  **Prerequisites:** Node.js (v20+), npm, Python, pip, Docker (recommended).

2.  **Clone the repository.**

3.  **Install project dependencies:** Run the setup script with your preferred
    package manager. Example:
    - `./setup.sh npm` *(default)*
    - `./setup.sh pnpm`
    - `./setup.sh yarn`
    - `./setup.sh bun`
    Ensure you have internet connectivity so dependencies can be downloaded.

4.  **Configure environment variables:**
    - For **local development**: Create `.env.local` based on environment variable requirements above
    - Set `NEXT_PUBLIC_REOWN_PROJECT_ID` to your Reown AppKit project ID (see `docs/ENVIRONMENT_SAFEGUARDS.md`)
    - For **production**: Set variables in Netlify UI (see deployment guide)
    - Ensure `INTERNAL_AUTH_SERVICE_URL` points to your authentication service
    - **Enable DevTools**: Set `NEXT_PUBLIC_DEVTOOLS=true` in `.env.local` if you want browser DevTools enabled
    - **Validate configuration**: Run `npx ts-node --transpile-only scripts/check-env.ts`

5.  **Install backend dependencies:**
    - **Django backend**: Refer to `backend/README.md` or run `pip install -r backend/requirements.txt`
    - **Monitoring service**: `cd monitoring && npm install`

6.  **Database Setup:**
    - Run Prisma migrations: `npx prisma migrate dev`
    - Seed data: `npx prisma db seed`
    - Set up Django database (see backend documentation)

7.  **Running the application:**
    - **Next.js frontend**: `npm run dev` *(automatically validates your development environment)*
    - **Django backend**: `python backend/manage.py runserver`
    - **Node.js server**: `node server/index.cjs` (or via npm script)

8.  **Verify authentication setup:**
    - Test user registration at `/auth/register`
    - Test login at `/auth/login`
    - Verify email verification flow

9.  **Cleaning caches and logs:**
    - Run `npm run clean:cache` to remove temporary log files and common build caches.
    - Regenerate the sitemap with `npm run sitemap` whenever routes change.
    - Fix any accidental `react-router` links by running `node scripts/fix-link-hrefs.cjs`.

10. **Generate Press Kit Archive:**
    - The downloadable press kit is not stored in the repository.
    - Run `npm run build:media-kit` to create `public/toolkit_assets/media_kit.zip`.

11. **Payment Testing:**
    - **Enable Test Mode:** Ensure `STRIPE_TEST_MODE=true` (for backend) and `NEXT_PUBLIC_STRIPE_TEST_MODE=true` (for frontend) are set in your environment (e.g., `.env.local` or CI/staging environment variables). This forces the application to use Stripe test API keys.
    - **Test Card:** Use the generic Stripe test card:
        - Card Number: `4242 4242 4242 4242`
        - Expiration Date: Any future date (e.g., 12/30)
        - CVC: Any 3 digits (e.g., 123)
    - **View Transactions:** Test transactions can be viewed in your Stripe Dashboard (ensure "View test data" is enabled).
    - **Demo Products:** If no products appear, run `npm run seed` to populate demo products.
    - **Guest Checkout:** Available at `/marketplace` (add items to cart and proceed to checkout).
    - **Sandbox Login:** For authenticated flows, use development credentials from `.env.local` as described in `docs/SECURITY_CREDENTIALS.md`.
    - **Full Details:** For a comprehensive list of test cards and scenarios, see the detailed guide in **[docs/Payments.md](docs/Payments.md)**.

11. **Contract Tests:**
    - Pact-based contract tests verify that front-end routes match available API endpoints.
    - Start the stub server with `node server/stubServer.js` and run `npm test`.

12. **Cross-Browser Testing:**
    - Set `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` environment variables.
    - Run `npm run test:browserstack` to execute Playwright tests on BrowserStack across desktop and mobile browsers.

13. **Local Cypress Testing:**
    - Copy `cypress.env.example.json` to `cypress.env.json`.
    - Adjust the placeholder values with your test credentials.
    - This prevents "EXISTING_USER_EMAIL" and similar errors during `npm run test:e2e`.

13. **Privacy Policy & Terms (login-gated):**
    - AI-Prompt: "Generate a plain-language summary (≤ 200 words) of a standard tech marketplace privacy policy aimed at U.S. users."
    - AI-Prompt: "Write an FAQ with 5 common questions users ask about Zion's Terms of Service."
13. **Frequently Asked Questions:** See [docs/FAQ.md](docs/FAQ.md) or the in-app Help Center for quick answers.

## Troubleshooting

### Common Issues

1. **"Supabase not configured" warnings**
   - Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set with actual values (not placeholders)
   - Check variable names for typos

2. **Authentication failures**
   - Verify Supabase project is properly configured
   - Check that email authentication is enabled in Supabase dashboard
   - Ensure redirect URLs are configured correctly

3. **Build failures on Netlify**
   - Verify all required environment variables are set in Netlify UI
   - Check build logs for specific TypeScript or dependency errors
4. **Blank screen when starting the app**
   - Ensure dependencies are installed by running `./setup.sh npm`
   - Run `npm run fix:loading` to diagnose and apply the emergency loader
   - A fail-safe message will now appear if the page stays blank for a few seconds
   - Detection logic improved to catch cases where only stylesheets or scripts are rendered
   - See [docs/BLANK_SCREEN_FIX_GUIDE.md](docs/BLANK_SCREEN_FIX_GUIDE.md) for detailed instructions
5. **Playwright browsers missing**
   - If end-to-end tests fail with `browserType.launch` errors, run `npx playwright install` to download the required browsers

For detailed troubleshooting, see the [Supabase Authentication Setup Guide](docs/SUPABASE_AUTHENTICATION_SETUP.md).

## 🚀 Performance & Monitoring

### Performance Metrics
- **Server Response Time**: ~2.6s (initial compilation) → ~83ms (cached)
- **Image Optimization**: ~10ms response time with WebP/AVIF support
- **Bundle Size**: Optimized with chunk splitting and tree shaking
- **Build Time**: Improved with selective experimental features

### Health Checks
Run comprehensive performance and health checks:

```bash
# Full performance audit
npm run perf:monitor

# Environment validation
npm run env:dev

# Bundle analysis
npm run build:analyze
```

### Key Optimizations Applied
1. **Image Optimization**: Fixed 400 errors, added comprehensive domain support
2. **Webpack Configuration**: Optimized chunking, reduced serialization warnings
3. **Sentry Integration**: Conditional loading, graceful fallbacks
4. **Environment Handling**: Enhanced validation, placeholder detection
5. **CSS Optimization**: Production-only to avoid development conflicts
6. **Error Handling**: Improved user experience, reduced console spam

### Monitoring Dashboard
The application includes built-in monitoring for:
- Server health and response times
- Image optimization performance
- File system integrity
- Environment configuration validation
- Error reporting and analytics

### Troubleshooting Blank Screens
If the application loads with a completely empty page, it usually means
the required `node_modules` directory is missing. Check `next_dev_server.log`
for errors and reinstall dependencies:

```bash
./setup.sh npm
npm run build && npm run dev
```

If you don't have network connectivity, run `npm run dev:offline` (which calls
`./offline-dev.sh`) to start a minimal offline server until you can reinstall
the packages.

Refer to the more detailed [Blank Screen Troubleshooting Guide](docs/BLANK_SCREEN_FIX_GUIDE.md)
for additional steps and diagnostics if the issue persists.

### Self-Maintenance Automation
The project includes several automations that help it heal itself and stay up to date:

- **Watchdog self‑healing** triggers `git pull && npm install && npm run build && pm2 restart all` when logs or resource usage indicate problems.
- **Codex autofix** workflows open issues for failing tests and automatically apply patches suggested by OpenAI.
- **Scheduled audits** run weekly to check dependencies and performance.

For detailed setup instructions see [docs/SELF_MAINTENANCE_AUTOMATION.md](docs/SELF_MAINTENANCE_AUTOMATION.md).

---

*This README provides a general overview. For more detailed information on specific parts of the system, please refer to the README files within the relevant subdirectories and the `docs/` folder.*

# Zion App - Self-Healing Netlify Build System

## Overview

This project includes a comprehensive self-healing system that automatically detects and fixes common Netlify build issues, ensuring reliable deployments.

## Self-Healing System

### Features

- **Automatic Build Monitoring**: Continuously monitors build processes for failures
- **Intelligent Error Detection**: Identifies common build issues (memory, timeout, dependencies, etc.)
- **Automatic Fixes**: Applies appropriate fixes based on detected issues
- **Health Checks**: Regular system health monitoring
- **Background Daemon**: Runs continuously to maintain build health

### Components

1. **Netlify Self-Healing** (`scripts/netlify-self-healing.cjs`)
   - Core self-healing logic
   - Error pattern recognition
   - Fix strategy application

2. **Build Monitor** (`scripts/netlify-build-monitor.cjs`)
   - Monitors build processes
   - Detects stuck builds
   - Triggers healing when needed

3. **Auto-Fix Script** (`scripts/netlify-auto-fix.cjs`)
   - Applies common fixes
   - Optimizes configurations
   - Cleans up issues

4. **Healing Daemon** (`scripts/netlify-healing-daemon.cjs`)
   - Runs system in background
   - Manages all components
   - Handles graceful shutdown

### Quick Start

```bash
# Start the self-healing system
npm run netlify:heal

# Start build monitoring
npm run netlify:monitor

# Check system status
npm run netlify:status

# Stop the system
npm run netlify:stop
```

### Manual Commands

```bash
# Self-healing commands
npm run self-heal:start          # Start self-healing
npm run self-heal:stop           # Stop self-healing
npm run self-heal:status         # Check status
npm run self-heal:health         # Perform health check
npm run self-heal:fix <issues>   # Fix specific issues

# Build monitoring commands
npm run build:monitor:start      # Start build monitor
npm run build:monitor:stop       # Stop build monitor
npm run build:monitor:status     # Check monitor status
npm run build:monitor:watch      # Watch for builds

# Auto-fix commands
npm run auto-fix:all             # Apply all fixes
npm run auto-fix:test            # Test build after fixes
npm run auto-fix:report          # Show fix report

# Daemon commands
node scripts/netlify-healing-daemon.cjs start    # Start daemon
node scripts/netlify-healing-daemon.cjs stop     # Stop daemon
node scripts/netlify-healing-daemon.cjs status   # Check daemon status
node scripts/netlify-healing-daemon.cjs restart  # Restart daemon
```

### Supported Fixes

The system can automatically fix the following issues:

- **Memory Issues**: Increase memory allocation, optimize bundles
- **Timeout Issues**: Increase timeouts, optimize build process
- **Dependency Issues**: Clean dependencies, fix peer deps
- **TypeScript Issues**: Fix types, skip type checking
- **Linting Issues**: Auto-fix lint errors, skip linting
- **Build Issues**: Clean builds, fix configurations
- **Network Issues**: Retry builds, use caching
- **Permission Issues**: Fix file permissions
- **Disk Issues**: Clean disk space, optimize size
- **Node Version Issues**: Update Node.js, fix version conflicts

### Configuration

The system is configured through environment variables in `netlify.toml`:

```toml
[build.environment]
  ENABLE_SELF_HEALING = "true"
  AUTO_FIX_BUILD_ISSUES = "true"
  BUILD_MONITORING = "true"
```

### Logs

All system activity is logged to:

- `logs/netlify-self-heal.log` - Self-healing system logs
- `logs/build-monitor.log` - Build monitoring logs
- `logs/auto-fix.log` - Auto-fix script logs
- `logs/healing-daemon.log` - Daemon logs

### Monitoring

The system provides real-time monitoring through:

- Health checks every 5 minutes
- Build process monitoring
- Resource usage monitoring
- Automatic issue detection and resolution

### Integration with Netlify

The self-healing system is integrated into the Netlify build process:

1. **Pre-build**: Runs auto-fix to resolve known issues
2. **During build**: Monitors for failures and applies fixes
3. **Post-build**: Performs health checks and cleanup

### Troubleshooting

If the self-healing system isn't working:

1. Check logs: `npm run logs:view`
2. Restart daemon: `node scripts/netlify-healing-daemon.cjs restart`
3. Manual fix: `npm run auto-fix:all`
4. Check status: `npm run netlify:status`

### Development

To modify the self-healing system:

1. Edit the appropriate script in `scripts/`
2. Test changes locally
3. Update documentation
4. Deploy to test environment