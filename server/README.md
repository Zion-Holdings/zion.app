# Express.js Backend Server

This directory contains a standalone Express.js server used for specific backend services within the Zion platform. It appears to handle features such as alerts, recommendations, a "Codex" AI fix trigger, and potentially other distinct API endpoints.

## Core Technologies

- Node.js
- Express.js
- MongoDB (using Mongoose ODM)
- Passport.js (for authentication, specific strategies might need further documentation)
- Helmet (for security headers)
- CORS
- Express Rate Limit (for rate limiting)
- Morgan (for HTTP request logging)
- Mongoose-Morgan (for logging to MongoDB)

## Key Features / Endpoints (Inferred)

Based on `server/app.js`:

-   **Authentication:**
    -   Routes under `/auth` and `/api/auth` using Passport.js.
    -   Social authentication routes under `/` (from `authSocial.js`).
    -   **TODO:** Document the specific Passport.js strategies used and the overall auth flow for this server.
-   **Recommendations:** Routes under `/recommendations`.
-   **Sync Operations:** Routes under `/sync`.
-   **Alerts:** Routes under `/api/alerts` (e.g., for Slack notifications from other services).
-   **Equipment/Items:** Routes under `/api/equipment`.
-   **Codex AI Fix Trigger:** Endpoint `/api/codex/suggest-fix` to run an AI pipeline.
-   **Health Checks:** `/healthz` and `/health`.
-   **Static File Serving:** Serves static files from `../public` and has a fallback to `../index.html`, which might indicate it serves a separate SPA or is part of a legacy setup. **TODO:** Clarify the purpose of this static serving.

## Setup and Local Development

1.  **Prerequisites:**
    *   Node.js (refer to project's Node version, e.g., 18.x or 20.x as seen in other parts)
    *   npm or yarn
    *   MongoDB server (running locally or accessible)

2.  **Install Dependencies:**
    *   Navigate to this `server/` directory if it has its own `package.json`. If not, dependencies might be managed in the root `package.json`.
    *   If standalone:
        ```bash
        cd server
        npm install
        ```
    *   If root `package.json`: Dependencies should already be installed via `npm install` in the root.

3.  **Configure Environment Variables:**
    *   This server likely requires environment variables for:
        *   `MONGO_URI` (MongoDB connection string, see `server/config/index.js`)
        *   Potentially API keys for services it integrates with.
        *   Passport.js strategy secrets (e.g., OAuth client IDs/secrets).
    *   Check for a `.env.example` in this directory or the root. Create a `.env` file and populate it.

4.  **Running the Development Server:**
    *   There might be an npm script in the root `package.json` or this directory's `package.json` (if it exists) to start this server.
    *   A common way to run it directly (if `server/index.js` or `server/app.js` is the entry point):
        ```bash
        node server/index.js
        ```
    *   The server's port will be defined in its configuration (e.g., `server/index.js` or via an environment variable).

## Running Tests

-   **TODO:** Add instructions on how to run tests specific to this Express.js server. This might involve Jest, Mocha, Chai, Supertest, or other Node.js testing frameworks. Check for test files or scripts.

## API Documentation

-   **TODO:** Document the API endpoints provided by this server in more detail. Consider integrating tools like `swagger-jsdoc` and `swagger-ui-express` to generate and serve OpenAPI documentation.

## Key Architectural Decisions & Notes

-   This server acts as a set of microservices or specialized APIs.
-   It uses MongoDB as its primary database, distinct from the PostgreSQL used by Django and Supabase/Prisma.
-   Authentication is handled by Passport.js, which might be different from the NextAuth.js/Supabase auth used by the main frontend. Understanding how user sessions/identities are managed or shared between this server and the rest of an application is important if there are direct user interactions.
-   **TODO:** Document the rationale for this server being separate from the Next.js API routes or the Django backend. What specific needs does it address?
-   **TODO:** Clarify if this server is intended for direct client interaction or primarily for backend-to-backend communication.

## Deployment

-   **TODO:** Add details about how this Express.js application is containerized (if it is) and deployed to staging/production environments. Reference any specific Dockerfiles or deployment scripts if they are separate from the root ones.
