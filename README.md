# Zion Tech Group - Innovative Technology Solutions

![Automations: 227](https://img.shields.io/badge/Automations-227-informational) ![Pages: 2960](https://img.shields.io/badge/Pages-2960-success) ![Components: 12](https://img.shields.io/badge/Components-12-blue)

## 🚀 2025 Comprehensive Services Portfolio

Home: https://github.com/Zion-Holdings/zion#readme

- **Frontend Application (Next.js):** Located primarily in `src/` (for application code like components, hooks, pages using App Router) and `pages/` (for API routes and potentially older Pages Router content). This is the main user-facing application.
- **Backend API (Django):** Located in `backend/`. This Python-based backend serves core business logic and data management, likely interacting with a PostgreSQL database.
- **Node.js Backend Services:**
  - **`server/`:** An Express.js application that provides additional API endpoints, potentially for specific features, BFF patterns, or integration tasks. It connects to MongoDB.
  - **`api/` (within `pages/api/` or `src/pages/api`):** Next.js API routes providing serverless backend functionality directly within the Next.js application.
- **Monitoring Service:** Located in `monitoring/`. A Node.js service for monitoring URL performance and health. (See `monitoring/README.md` for details).
- **Supabase Integration:** Utilizes Supabase for backend-as-a-service features, with functions in `supabase/functions/` and schema definitions in `prisma/` (Prisma is used with Supabase, and potentially also for the Django backend or other Node.js services).
- **Blockchain/DAO Components:** Directories like `dao/` and `token/` suggest features related to Decentralized Autonomous Organizations and cryptocurrency tokens.
- **SDK:** A software development kit is present in `sdk/`, likely for interacting with Zion platform services.
- **Documentation:** General documentation is in `docs/`, with specific component documentation potentially within their respective directories.
- **Testing:** Extensive test suites using Vitest and Cypress are in `tests/` and `cypress/`. See **[docs/QA_TESTING_CHECKLIST.md](docs/QA_TESTING_CHECKLIST.md)** for common QA steps.
- **Connect Portal:** Access the portal at `/portal` for account management and settings. The previous `/app` path is deprecated.

- **🚀 Innovative Services Expansion** - AI BI, Cybersecurity, DevOps, Customer Experience
- **⚛️ Emerging Technology Services** - Quantum Computing, Blockchain, Space Tech, IoT, AR/VR
- **🏭 Specialized Industry Services** - Manufacturing, Healthcare, FinTech, Retail, Education

- **Frontend:** Next.js, React, TypeScript, Redux Toolkit, Chakra UI, Radix UI, Tailwind CSS
- **Backend (Django):** Python, Django, Django REST Framework, PostgreSQL
- **Backend (Node.js):** Node.js, Express.js, TypeScript, MongoDB (for `server/`), Next.js API Routes
- **Database/BaaS:** PostgreSQL, MongoDB, Supabase, Prisma
- **Authentication:** Supabase Auth (handles login, signup, password reset, social auth) with optional two-factor authentication for the IPO portal
- **Monitoring:** Custom Node.js service, Sentry, Datadog
- **CI/CD:** GitHub Actions, Netlify (including Lighthouse CI)
- **Other:** IPFS, OrbitDB, Ethers.js, Elasticsearch

### **Contact Information:**
- **Mobile**: +1 302 464 0950
- **Email**: kleber@ziontechgroup.com
- **Website**: https://ziontechgroup.com
- **Address**: 364 E Main St STE 1008 Middletown DE 19709

⚠️ **IMPORTANT**: This project uses **Supabase for authentication** and **Netlify for environment variable management**. Proper configuration is essential for the application to function correctly.

### Authentication Setup

---
This README is auto-generated. Do not edit manually.

## 🌟 Featured Services

- Intelligent Orchestrator (1m): /.netlify/functions/intelligent-orchestrator
- Anomaly Watchdog (10m): /.netlify/functions/anomaly-watchdog
- Pulse Sync (1m): /.netlify/functions/pulse-sync
