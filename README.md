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
-   **Testing:** Extensive testing suites using Jest, Vitest, and Cypress are in `__tests__/` and `cypress/`.

## Key Technologies

-   **Frontend:** Next.js, React, TypeScript, Redux Toolkit, Chakra UI, Radix UI, Tailwind CSS
-   **Backend (Django):** Python, Django, Django REST Framework, PostgreSQL
-   **Backend (Node.js):** Node.js, Express.js, TypeScript, MongoDB (for `server/`), Next.js API Routes
-   **Database/BaaS:** PostgreSQL, MongoDB, Supabase, Prisma
-   **Authentication:** Supabase Auth (handles login, signup, password reset, social auth)
-   **Monitoring:** Custom Node.js service, Sentry
-   **CI/CD:** GitHub Actions, Netlify (including Lighthouse CI)
-   **Other:** IPFS, OrbitDB, Ethers.js, Elasticsearch

## Environment Configuration

⚠️ **IMPORTANT**: This project uses **Supabase for authentication** and **Netlify for environment variable management**. Proper configuration is essential for the application to function correctly.

### Authentication Setup

The application uses Supabase for all authentication functionality:
- User registration and login
- Email verification and password reset
- Social authentication (Google, Facebook, Twitter)
- Session management and profile handling

### Required Environment Variables

For **production deployment on Netlify**, set these variables in the Netlify UI:

```bash
# Supabase Configuration (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Authentication Service (REQUIRED for user registration)
INTERNAL_AUTH_SERVICE_URL=https://your-auth-service-url.com

# Optional but Recommended
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id
NEXT_PUBLIC_DEVTOOLS=false # set to true in staging to allow React DevTools
```

For **local development**, create a `.env.local` file with the same variables.

### 📚 Detailed Setup Guides

- **[Supabase Authentication Setup](docs/SUPABASE_AUTHENTICATION_SETUP.md)** - Complete guide for configuring Supabase authentication
- **[Netlify Deployment Guide](docs/NETLIFY_DEPLOYMENT_GUIDE.md)** - Step-by-step Netlify deployment with environment variables

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

3.  **Install frontend dependencies:** `npm install` in the root directory.

4.  **Configure environment variables:**
    - For **local development**: Create `.env.local` based on environment variable requirements above
    - For **production**: Set variables in Netlify UI (see deployment guide)
    - Ensure `INTERNAL_AUTH_SERVICE_URL` points to your authentication service
    - **Validate configuration**: Run `npx ts-node --transpile-only scripts/check-env.ts`

5.  **Install backend dependencies:**
    - **Django backend**: Refer to `backend/README.md` or run `pip install -r backend/requirements.txt`
    - **Monitoring service**: `cd monitoring && npm install`

6.  **Database Setup:**
    - Run Prisma migrations: `npx prisma migrate dev`
    - Seed data: `npx prisma db seed`
    - Set up Django database (see backend documentation)

7.  **Running the application:**
    - **Next.js frontend**: `npm run dev`
    - **Django backend**: `python backend/manage.py runserver`
    - **Node.js server**: `node server/index.js` (or via npm script)

8.  **Verify authentication setup:**
    - Test user registration at `/auth/register`
    - Test login at `/auth/login`
    - Verify email verification flow

9.  **Cleaning caches and logs:**
    - Run `npm run clean:cache` to remove temporary log files and common build caches.

10. **Payment Testing:**
    - Seed demo products with `npm run seed` if no listings appear.
    - Guest checkout is available at `/marketplace/checkout`.
    - Set `STRIPE_TEST_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY` to enable Stripe test mode and pay with the `4242 4242 4242 4242` card.
    - For a sandbox login, add development credentials in `.env.local` as explained in `docs/SECURITY_CREDENTIALS.md`.
    - See [docs/Payments.md](docs/Payments.md) for full details.

11. **Contract Tests:**
    - Pact-based contract tests verify that front-end routes match available API endpoints.
    - Start the stub server with `node server/stubServer.js` and run `npm test`.

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

For detailed troubleshooting, see the [Supabase Authentication Setup Guide](docs/SUPABASE_AUTHENTICATION_SETUP.md).

---

*This README provides a general overview. For more detailed information on specific parts of the system, please refer to the README files within the relevant subdirectories and the `docs/` folder.*