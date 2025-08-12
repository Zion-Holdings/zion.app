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
    -   Uses Passport.js strategies for Google, Facebook, Twitter (X), and LinkedIn OAuth flows as defined in `authSocial.js`. After successful authentication a JWT token is issued to the client.
    -   **Recommendations:** Routes under `/recommendations`.
-   **Sync Operations:** Routes under `/sync`.
-   **Alerts:** Routes under `/api/alerts` (e.g., for Slack notifications from other services).
-   **Equipment/Items:** Routes under `/api/equipment`.
-   **Codex AI Fix Trigger:** Endpoint `/api/codex/suggest-fix` to run an AI pipeline.
-   **Health Checks:** `/healthz` and `/health`.
-   **Static File Serving:** Serves static files from `../public` and falls back to `../index.html`. This allows the Express server to provide a basic single-page application for development or as a lightweight fallback when the main frontend is unavailable.

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

This server currently does not include automated tests. If you add tests in the future, a common setup is to use Jest along with Supertest for HTTP assertions:

```bash
npm install --save-dev jest supertest
npm test
```

Create test files under a `tests/` directory and configure Jest in `package.json` or a separate config file.

### Stub Server

For API contract testing a lightweight stub server is provided in `stubServer.js`.
It exposes a `/hello` endpoint that simply returns `{ "message": "Hello world" }`.
Start it with:

```bash
node server/stubServer.js
```


## API Documentation

The server exposes routes under `/api` for internal services, including:

1.  `POST /api/webhook/ai-fix` – accepts issue details and triggers the AI self-healing workflow.
2.  `GET /api/status` – simple health check endpoint used by Kubernetes.

The project plans to integrate `swagger-jsdoc` and `swagger-ui-express` so that running `npm start` will serve interactive API documentation at `/docs`.

## Key Architectural Decisions & Notes

-   This server acts as a set of microservices or specialized APIs.
-   It uses MongoDB as its primary database, distinct from the PostgreSQL used by Django and Supabase/Prisma.
-   Authentication is handled by Passport.js, which might be different from the NextAuth.js/Supabase auth used by the main frontend. Understanding how user sessions/identities are managed or shared between this server and the rest of an application is important if there are direct user interactions.
-   This server is kept separate from the Next.js API routes and the Django backend so that specialized services (such as webhook handling and AI fix triggers) can be deployed and scaled independently.
-   It is primarily meant for backend-to-backend communication, though some routes (like social auth callbacks) interact with the client directly.

## Deployment

This service can be deployed as a standalone Docker container. The root repository contains a `Dockerfile` that installs dependencies and starts the Express server via `node server/index.js`. In production it can be built and run with:

```bash
docker build -t zion-express ./server
docker run -p 3001:3001 zion-express
```

CI pipelines should reference this image when deploying to staging or production clusters.
