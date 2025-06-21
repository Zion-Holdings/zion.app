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
-   **Monitoring:** Custom Node.js service, Sentry
-   **CI/CD:** GitHub Actions, Netlify (including Lighthouse CI)
-   **Other:** IPFS, OrbitDB, Ethers.js, Elasticsearch

## Getting Started

1.  **Prerequisites:** Node.js, npm, Python, pip, Docker (recommended).
2.  **Clone the repository.**
3.  **Install frontend dependencies:** `npm install` in the root directory.
4.  **Install backend (Django) dependencies:** Refer to `backend/README.md` or setup instructions. Typically involves creating a virtual environment and `pip install -r backend/requirements.txt`.
5.  **Install monitoring service dependencies:** `cd monitoring && npm install`.
6.  **Environment Variables:** Copy `.env.example` to `.env` (and potentially similar files in sub-projects like `backend/`) and configure necessary variables (database credentials, API keys, etc.).
    Ensure `INTERNAL_AUTH_SERVICE_URL` is set to the base URL of the Node.js authentication service so user signup can succeed.
    Run `npx ts-node --transpile-only scripts/check-env.ts` to validate the configuration.
7.  **Database Setup:** Run Prisma migrations (`npx prisma migrate dev`), seed data (`npx prisma db seed`), and set up Django database.
8.  **Running the application:**
    -   Next.js frontend: `npm run dev`
    -   Django backend: (e.g., `python backend/manage.py runserver`)
    -   Node.js server (`server/`): (e.g., `node server/index.js` or via an npm script if defined in its own package.json or the root one)

9.  **Cleaning caches and logs:**
    -   Run `npm run clean:cache` to remove temporary log files and common build caches.

10. **Payment Testing:**
    - Guest checkout is available at `/marketplace/checkout`.
    - For a sandbox login, add development credentials in `.env.local` as explained in `docs/SECURITY_CREDENTIALS.md`.

(Detailed setup instructions for each component should be available in their respective READMEs or the `docs/` directory. See `docs/BACKEND_DEPENDENCIES.md` for notes on managing Python and Node dependencies.)

---

*This README provides a general overview. For more detailed information on specific parts of the system, please refer to the README files within the relevant subdirectories and the `docs/` folder.*