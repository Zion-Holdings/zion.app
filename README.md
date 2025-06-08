[![Netlify Status](https://api.netlify.com/api/v1/badges/ziontechgroup.com/deploy-status)](https://app.netlify.com/sites/ziontechgroup.com/deploys)


# Welcome to the project

[![codecov](https://codecov.io/gh/Zion-support/zion.app/branch/main/graph/badge.svg)](https://codecov.io/gh/Zion-support/zion.app)

## Project info

**Maintained by**: Jules, Codex, and Kleber Alcatrao

## Project Overview

This platform brings together several key modules:

- **E-commerce:** Product and service listings with Stripe-based checkout.
- **Talent Marketplace:** Searchable profiles and AI-driven matching.
- **AI Tools:** Content generation (ZionGPT) and other smart features.
- **Content Management:** Integrated blog and document generation.
- **Community:** Real-time messaging and notifications.

These components work in tandem to connect professionals and businesses.

## Features

- **User Authentication:** Secure registration, login, and profile management.
- **E-commerce Platform:** Browse products, add to cart, checkout with Stripe integration.
- **Talent Marketplace:** Profiles for talents, search and filter capabilities, and matching services.
- **AI-Powered Capabilities:** Includes AI-driven content generation (ZionGPT), talent matching, and potentially other smart features.
- **Content Management:** Integrated blog, whitepaper generation, and SEO content tools.
- **Real-time Interactions:** Support for instant messaging and notifications (via Socket.io).
- **Identity Verification:** Basic KYC submission and admin review flows.
- **Internationalization (i18n):** Multi-language support for a global audience.
- **Rich Media Product Listings:** Support for video and 3D models in product displays.
- **Search Functionality:** Advanced search potentially powered by Elasticsearch.
- **Admin Dashboard:** Tools for administration and management of the platform.
- **API & Integrations:** Supports integrations with Slack, Salesforce and Microsoft Teams, and provides an API (details to be confirmed).
- **Responsive Design:** User interface adapts to different screen sizes (implied by modern frontend stack).
- **Service Integrations:** Connects with external services like Slack, Salesforce and Microsoft Teams (see `docs/Integrations.md`) and handles payments via Stripe (see `docs/Payments.md` for environment variable details).
- **Rich Product Media:** Supports MP4 videos and GLB 3D models for product listings (`video_url`, `model_url` fields in database).
- **Custom ZionGPT Instances:** See `docs/ZionGPT_Custom_Instance.md` for instructions on training localized models for DAOs and communities.
- **Unified Deployment Protocol:** See `docs/UnifiedDeploymentProtocol.md` for guidelines on launching new market instances.
- **On-chain Governance:** Solidity contracts in `dao/codebase` implement a stake-based DAO with 5-day voting periods and a 20% quorum requirement.
- **Private ZK Voting:** Experimental module under `dao/zkvote` uses Semaphore proofs for anonymous, token-weighted voting.

### Visual Feature Summary

| Feature                 | Icon                                               |
| ----------------------- | -------------------------------------------------- |
| User Authentication     | ![Auth Icon](docs/images/icon-auth.svg)            |
| E-commerce Platform     | ![E-commerce Icon](docs/images/icon-ecommerce.svg) |
| Talent Marketplace      | ![Talent Icon](docs/images/icon-talent.svg)        |
| AI-Powered Capabilities | ![AI Icon](docs/images/icon-ai.svg)                |
| Content Management      | ![Content Icon](docs/images/icon-content.svg)      |
| Real-time Interactions  | ![Realtime Icon](docs/images/icon-realtime.svg)    |

![Features Infographic](docs/images/features-infographic.svg)

## Architecture Overview

This project utilizes a modern, multi-component architecture:

- **Frontend:** Built with [React](https://react.dev/) using [Vite](https://vitejs.dev/) for a fast development experience. It's written in [TypeScript](https://www.typescriptlang.org/) and styled with [Tailwind CSS](https://tailwindcss.com/) and the [shadcn/ui](https://ui.shadcn.com/) component library. It handles the user interface and client-side interactions.
- **Backend:**
  - A [Django](https://www.djangoproject.com/) (Python) backend likely serves as the primary application server, handling core business logic, database interactions via Prisma ORM, and potentially some API endpoints. (Located in the `/backend` directory).
  - [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/) might be used for specific API services or serverless functions, particularly those interacting with Firebase or other Node-centric tools. (Evidence in `/server` and API route handlers in `/pages/api`).
- **Database:**
  - A primary relational database (e.g., PostgreSQL, MySQL) managed with [Prisma ORM](https://www.prisma.io/).
  - [Supabase](https://supabase.io/) is integrated, likely for Backend-as-a-Service (BaaS) features such as real-time databases, authentication helpers, and serverless functions (Edge Functions).
- **Key External Services & Tools:**
  - **[Stripe](https://stripe.com/):** For payment processing.
  - **[SendGrid](https://sendgrid.com/):** For transactional email delivery.
  - **[Elasticsearch](https://www.elastic.co/elasticsearch/):** (Optional) For advanced search capabilities.
  - **[Socket.io](https://socket.io/):** For real-time communication features like chat and notifications.
  - **[Firebase](https://firebase.google.com/):** Used for some backend functionalities and possibly hosting or real-time features.
- **Testing:** The project employs a comprehensive testing strategy with [Jest](https://jestjs.io/) and [Vitest](https://vitest.dev/) for unit/integration tests, and [Cypress](https://www.cypress.io/) & [Playwright](https://playwright.dev/) for end-to-end testing.
- **Deployment:** (Details TBD - current README mentions this will be updated. Likely involves CI/CD pipelines using GitHub Actions for deployments to platforms like Netlify, Vercel, or custom infrastructure).

## Setup and Local Development

### Prerequisites

- Node.js 18 (LTS) or later
- Python (version 3.10) & pip
- Git
- Access to a PostgreSQL server (for the Django backend)

### Environment Variables

1.  Copy the example environment file `.env.example` to a new file named `.env` in the project root:
    ```sh
    cp .env.example .env
    ```
2.  Update the `.env` file with your actual credentials and configuration values for services like Stripe, SendGrid, and database connections.

    **Critically, the following environment variables MUST be set correctly for the application to start:**

    - `NEXT_PUBLIC_REOWN_PROJECT_ID`: Your project ID from cloud.reown.com.
    - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL.
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase project anonymous (public) key.

    **If these variables are not defined, are left empty, or retain their placeholder values from `.env.example`, the application will display an error and will not load.** This is to prevent runtime issues and blank pages due to missing critical configurations.

    Follow the specific instructions below for `NEXT_PUBLIC_REOWN_PROJECT_ID`:

    - **Note:** Configure your database connection in the root `.env` file. The Django settings (likely in `backend/django_backend/settings.py`) typically use `dj_database_url` to parse a `DATABASE_URL` (e.g., `postgresql://user:password@host:port/dbname`), or may use individual variables like `DB_HOST`, `DB_NAME`, etc.

3.  Create a project on [cloud.reown.com](https://cloud.reown.com) for Reown AppKit.
    Add your site domain (e.g., `https://app.ziontechgroup.com`) to the project's allowlist and copy the generated project ID.
    Set `NEXT_PUBLIC_REOWN_PROJECT_ID` in your `.env` file with this value. If the domain is not on the allowlist you'll see an error like:
    `Origin https://app.ziontechgroup.com not found on Allowlist`.

### Deployment Environment

When deploying this application to a hosting service (e.g., Netlify, Vercel, AWS Amplify), it is crucial to configure the following environment variables in your deployment environment's settings:

-   `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL.
-   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase project anonymous (public) key.

These variables are essential for the Supabase integration to function correctly in the live environment. Without them, features relying on Supabase (such as authentication, database interactions, etc.) will fail. Please refer to your `.env.example` file for the exact variable names and ensure they are set with your actual production Supabase credentials.

### Frontend (React + Vite)

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Run the setup script with your preferred package manager (npm, pnpm, yarn, or bun)
./setup.sh npm  # Default and most compatible option

# If you're using OpenAI Codex environments, a convenience script is available:
./.codex/setup.sh  # Installs dependencies using npm

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev  # Use the same package manager you specified in setup.sh
```

> **IMPORTANT**: This project requires internet access to install dependencies. Without network connectivity, the build process will fail with errors about missing modules like 'react', 'react-router-dom', and 'lucide-react'.

### Backend (Django)

The primary backend is a Django application located in the `/backend` directory.

1.  Navigate to the backend directory:
    ```sh
    cd backend
    ```
2.  Create a Python virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scriptsctivate`
    ```
3.  Install Python dependencies:
    ```sh
    pip install -r requirements.txt
    ```
4.  Set up the database:
    - Ensure your PostgreSQL server is running and accessible.
    - Configure your database connection in the root `.env` file (as mentioned in Environment Variables). The Django settings (likely in `backend/django_backend/settings.py`) typically use `dj_database_url` to parse a `DATABASE_URL` (e.g., `postgresql://user:password@host:port/dbname`), or may use individual variables like `DB_HOST`, `DB_NAME`, etc.
    - Run database migrations:
      ```sh
      python manage.py migrate
      ```
5.  Start the Django development server:
    ```sh
    python manage.py runserver
    ```
    The backend will typically be available at `http://127.0.0.1:8000`.

### Node.js Services (for specific APIs like `/pages/api`)

The Next.js framework (implied by the `/pages/api` directory structure) handles these API routes as part of its development server, which is started with `npm run dev` from the project root. If there are standalone Node.js services in the `/server` directory (which seems to be the case here), they would typically be started by navigating into that directory, running `npm install` (if they have their own `package.json`), and then using a command like `node index.js` or a script from their `package.json`. Refer to specific READMEs in those directories if they exist.

## Code Style and Linting

This project uses ESLint for code linting and Prettier for code formatting to maintain a consistent codebase.

- **`npm run lint`**:
  - This command checks all JavaScript/TypeScript files in the project for ESLint issues.
  - It will attempt to automatically fix any fixable problems.
  - This check is also run as part of the Continuous Integration (CI) pipeline to ensure code quality before merging.
- **`npm run format`**:
  - This command uses Prettier to automatically format all JavaScript, JSX, TypeScript, and TSX files within the `src/` directory.
  - It ensures that the code adheres to the defined style guidelines (see `.prettierrc.json`).
  - Run this command before committing your changes to ensure consistent formatting. In CI, `npm run format -- --check` is used to verify formatting without making changes.

## API Documentation

The project exposes several APIs for programmatic access and integration.

- **Django Backend API (RESTful):**

  - The primary backend API is built with Django REST Framework.
  - Live, auto-generated API documentation (Swagger UI) is available when the Django backend server is running. You can access it at:
    - `http://127.0.0.1:8000/swagger/`
  - This documentation provides details on available endpoints, request/response schemas, and allows for interactive API exploration.
  - The public API endpoints are primarily managed under the `public_api` app (see `backend/public_api/urls.py`).

- **Next.js API Routes (Frontend/BFF):**

  - The Next.js frontend also includes API routes located in the `pages/api/` directory. These often serve as a Backend-for-Frontend (BFF), handling tasks like form submissions, specific queries to Supabase, or interactions with serverless functions.
  - Documentation for these endpoints is typically found within the code itself or in related frontend component documentation.

- **Supabase Edge Functions:**
  - The project leverages Supabase for various Backend-as-a-Service functionalities, including Edge Functions (serverless functions).
  - Details and invocation methods for these functions can be found in the `supabase/functions/` directory and within the Supabase project dashboard.

When developing or integrating, refer to these resources for accurate API information.
For detailed examples, common use cases, and troubleshooting tips, see [docs/API_Guide.md](docs/API_Guide.md).
An overview of the Zion OS stack APIs, including marketplace and talent modules, is available in [docs/ZionOS_Stack_API.md](docs/ZionOS_Stack_API.md).

## Testing

Run unit tests with:

```sh
npm run test
```

To watch tests during development:

```sh
npm run test:watch
```

### End-to-End Tests

Open Cypress for interactive debugging:

```sh
npm run cypress:open
```

Run the Cypress suite headlessly:

```sh
npm run cypress:run
```

For local development and running Cypress tests, you may need to provide test user credentials. Create a `cypress.env.json` file in the project root with the following structure:

```json
{
  "TEST_USER_EMAIL": "your_test_email@example.com",
  "TEST_USER_PASSWORD": "your_secure_password",
  "TEST_USER_DISPLAY_NAME": "Your Test User"
}
```

Replace the placeholder values with your actual test credentials. These environment variables are used by Cypress tests such as `login.cy.ts`, `register.cy.ts`, and `auth-integration.cy.ts` to simulate user interactions.

### Coverage Report

After running `npm run test`, open `coverage/lcov-report/index.html` in your
browser to view detailed coverage information.

When tests run on GitHub Actions, the workflow uploads the `coverage` directory
using `actions/upload-artifact@v4`. Visit a workflow run and download the
`coverage-report` artifact to retrieve the generated HTML coverage report.

### Playwright HTML Report

When Playwright tests run in CI, the report is published to GitHub Pages via the
`Deploy Playwright Report` workflow. Enable GitHub Pages for the `gh-pages`
branch (root folder `/`) to view the latest results.

### Accessibility Audit

Run automated accessibility checks with:

```sh
npm run lint:a11y
```

This command uses `jest-axe` to verify common WCAG issues across key pages and components.

## Managing Cloud Reown Allowlist

The list of allowed origins (domains) for the Cloud Reown service integrated with this project is managed via a JSON file in this repository. This allows for version-controlled changes and automated synchronization.

**File Location:** `infra/allowlist.json`

This file contains a list of domains that are permitted to interact with the Cloud Reown project.

### How to Add or Remove a Domain

1.  **Edit the File:**

    - Open the `infra/allowlist.json` file.
    - To add a new domain, append it to the `allowed_origins` array.
    - To remove a domain, delete it from the `allowed_origins` array.
    - Ensure the JSON syntax remains valid. For example:
      ```json
      {
        "allowed_origins": [
          "https://app.ziontechgroup.com",
          "https://new-staging-app.ziontechgroup.com"
        ]
      }
      ```

2.  **Create a Pull Request:**

    - Commit your changes to `infra/allowlist.json`.
    - Push the changes to a new branch in your fork.
    - Open a Pull Request (PR) from your branch to the `main` branch of the main repository.
    - Clearly describe the reason for the change in your PR (e.g., "Adding staging domain to Cloud Reown allowlist").

3.  **Automatic Sync:**
    - Upon merging your PR into the `main` branch, a GitHub Action (`.github/workflows/sync_reown_allowlist.yml`) will automatically run.
    - This action reads the updated `infra/allowlist.json` and syncs the full list of domains to the Cloud Reown project via their API.
    - You can monitor the status of this action in the "Actions" tab of the GitHub repository.

**Important:**

- The CI process includes a validation step (`.github/workflows/ci.yml`) that checks if the primary production domain (`https://app.ziontechgroup.com`) is always present in `infra/allowlist.json`. Removing this domain will cause the CI build to fail, preventing accidental removal of the production environment's access.
- Ensure that the `CLOUD_REOWN_TOKEN` and `CLOUD_REOWN_PROJECT_ID` secrets are correctly configured in the GitHub repository settings for the sync action to work.

## Troubleshooting

### Network Issues

If you see errors related to missing modules like 'react', 'react-dom', or 'lucide-react', your environment may not have internet access to download these dependencies. Options to resolve this:

1. Ensure you have internet connectivity
2. Configure proxy settings if needed: `npm config set proxy http://your-proxy:port`
3. Use a pre-downloaded `node_modules` directory if available

### Package Manager Issues

If you encounter errors running `bun install` (for example, integrity check failures), delete any `bun.lockb` file and run `npm install` instead. This project relies on npm and is not guaranteed to work with Bun. Adding `bun.lockb` to `.gitignore` ensures Bun isn't accidentally used.

For pnpm errors showing "This project is configured to use npm", use `./setup.sh npm` instead as the project may have npm-specific configurations.

If you see a warning about `rimraf@3.0.2` being deprecated, install the latest
version of `rimraf`:

```sh
npm install rimraf@^5 --save-dev
```

This updates the dependency to a supported v5 release.

To prevent memory leaks from the deprecated `inflight` package, the project pins
`glob` to version `10.4.5` via the `resolutions` field in `package.json`. Run
`npm install` to ensure this version is installed.

To suppress npm warnings about `@humanwhocodes/config-array`, the `resolutions`
block maps it to `@eslint/config-array`. Run `npm install` to apply this
override.

### Whitelabel Tenant Errors

If the app logs **"Error loading tenant"** during startup, the request to the
Supabase edge function that provides whitelabel settings failed. Confirm that
`NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY` (or the Next.js style
`NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY`) are set in your
environment and that you have network connectivity. The tenant hook will retry
a few times before giving up.

### Translation Service

Automatic translations rely on OpenAI. Set `NEXT_PUBLIC_OPENAI_API_KEY` (or
`NEXT_PUBLIC_OPENAI_API_KEY`) to allow the client to contact the API directly
when the Supabase function is unavailable.

### "NextRouter not mounted" Error

You might encounter a console error message stating "NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted".

**Cause:** This project uses Vite and `react-router-dom` for client-side routing, not Next.js. However, some third-party libraries (e.g., `@reown/appkit` for wallet connections) might internally attempt to detect or use Next.js routing features. If such a library is not configured to operate in a non-Next.js environment, it can produce this error.

**Impact:**

- In most cases, this error should be caught by the application's global error boundaries, and you should see a fallback UI prompting to "Reload Page".
- The application's core routing will continue to function using `react-router-dom`.

**What to do:**

1.  **Check the Console:** The browser's developer console might provide more specifics about which component or library triggered the error.
2.  **Reload the Page:** The error boundary provides a "Reload Page" button. Clicking this performs a hard refresh (`window.location.reload()`) which can resolve temporary issues.
3.  **Wallet Component Configuration:** For the `@reown/appkit` library, an attempt has been made to mitigate this by disabling the `analytics` feature during its initialization (`features: { analytics: false }` in `src/context/WalletContext.tsx`). If the error persists and is problematic, further investigation into the specific library's configuration options for non-Next.js environments might be needed.

If you are developing a new component that relies on routing, ensure you use hooks and components from `react-router-dom` (e.g., `useNavigate`, `Link`) and not from `next/router`.

## Contributing Guidelines

We welcome contributions to improve and expand this project! If you'd like to contribute, please follow these general guidelines:

1.  **Fork the Repository:** Start by forking the main repository to your own GitHub account.
2.  **Create a New Branch:** For each new feature or bug fix, create a new branch from the `main` (or `develop` if it exists) branch in your fork.
    - Example: `git checkout -b feature/your-feature-name` or `bugfix/issue-description`.
3.  **Make Your Changes:** Implement your changes, ensuring you adhere to the project's coding style and conventions.
    - Run linters and formatters if configured (e.g., ESLint, Prettier for frontend; Black, Flake8 for Python). The project uses ESLint (see `eslint.config.js`).
4.  **Test Your Changes:**
    - Add unit tests for any new functionality.
    - Ensure all existing and new tests pass (`npm run test` for frontend, `python manage.py test` for Django backend if applicable).
    - Ensure your changes pass type checking by running `npm run typecheck`.
5.  **Commit Your Changes:** Write clear, concise commit messages.
6.  **Push to Your Fork:** Push your changes to your forked repository.
7.  **Submit a Pull Request (PR):** Open a PR from your branch to the `main` (or `develop`) branch of the original repository.
    - Provide a clear description of the changes in your PR.
    - Link to any relevant issues.
8.  **Code Review:** Your PR will be reviewed by maintainers. Be prepared to address any feedback.

**Issue Tracker:** Please report any bugs or suggest features by opening an issue on the [GitHub Issues page](https://github.com/<org>/<repo>/issues) for this repository.

## DevTools

For security reasons, React DevTools are disabled in production environments.

To enable DevTools in Netlify preview deploys (or other non-production environments that might set `NODE_ENV` to `production`), you can set the `REACT_APP_DEVTOOLS=true` environment variable.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

_This README was generated/updated by an AI assistant._

## Local Content Management

A simple file-based CMS allows you to publish blog posts, case studies, and tutorials without a separate service. Content files live in the `content` directory and are written in Markdown with a JSON front matter block. Run `npm run build:content` to convert these files into TypeScript data used by the application.

Example post format:

```markdown
---
{
  'title': 'AI in Customer Support',
  'excerpt': 'How AI improves support workflows.',
  'tags': ['AI', 'Support'],
  'publishedDate': 'Jul 1, 2024',
}
---

Markdown body here.
```

After adding or editing files, regenerate the data arrays:

```bash
npm run build:content
```

This keeps the site content up to date and search‑engine optimized using the existing `<SEO>` component on each page.

## Troubleshooting GitHub Codespaces Terminal Issues

If you experience issues with the integrated terminal in GitHub Codespaces (e.g., typed commands not appearing or executing), try the following steps:

1.  **Check `~/.bashrc` (or your shell's equivalent configuration file):**

    - Open your user-specific shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`).
    - Look for any lines that might include `stty -echo` or similar commands that could suppress terminal output.
    - If you find such a line, try commenting it out (by adding a `#` at the beginning of the line) or removing it.
    - Save the file and restart your terminal or Codespace.

2.  **Ensure Locales are Correctly Configured:**

    - Proper locale settings are important for terminal behavior.
    - If you have a `devcontainer.json` file in your repository (usually in a `.devcontainer` directory), consider adding or ensuring the following `onCreateCommand` is present:
      ```json
      "onCreateCommand": "sudo apt-get update && sudo apt-get install -y locales && sudo locale-gen en_US.UTF-8"
      ```
    - If you do not have a `devcontainer.json` file, you might need to create one or use the GitHub Codespaces UI to rebuild your Codespace. When rebuilding, look for options to customize setup commands and add the line above.
    - After adding this command, you'll need to rebuild your Codespace for the changes to take effect.

3.  **Use the "Terminal (Web)" Extension as a Fallback:**

    - If the integrated terminal remains unresponsive after trying the above steps, you can install the "Terminal (Web)" VS Code extension. This extension provides an alternative terminal interface that runs in a web view and can sometimes bypass issues affecting the standard integrated terminal.
    - Search for "Terminal (Web)" in the VS Code Extensions view (Ctrl+Shift+X or Cmd+Shift+X) and install it.

4.  **Ensure Shell Integration is Enabled:**
    - The project includes a workspace setting to enable shell integration: `.vscode/settings.json` contains `"terminal.integrated.shellIntegration.enabled": true`. This should be applied automatically. If you've overridden this in your user settings, consider reverting to the workspace setting.

Remember to **rebuild your Codespace** after making changes to configurations like `devcontainer.json` for them to apply.

## Testing Stripe Payments

To test the Stripe checkout flow without using real credit cards, you can use Stripe's test card numbers.

### Common Test Card Numbers:

- **Visa (Successful Payment):** `4242 4242 4242 4242` (Any future date, any 3-digit CVC)
- **Mastercard (Successful Payment):** `5555 5555 5555 5555` (Any future date, any 3-digit CVC)
- **American Express (Successful Payment):** `3782 8282 8282 8282` (Any future date, any 4-digit CVC)
- **Card Declined:** Use a card number that typically results in a decline, e.g., one ending in `0000` as per Stripe docs for specific decline reasons if needed. For a generic decline, `4000 0000 0000 0000` might work depending on Stripe's test environment setup.

### Important Notes:

- **Expiration Date:** Use any valid future expiration date (e.g., 12/30).
- **CVC/CVV:** Use any random 3-digit number (or 4-digit for Amex).
- **Name on Card:** Any name can be used.

For a comprehensive list of test cards, including cards for specific scenarios (e.g., insufficient funds, fraud warnings), please refer to the official Stripe documentation:
[Stripe Testing Documentation](https://stripe.com/docs/testing)

**Reminder for `/checkout-test` route:**
Ensure that a dummy product with a $1 price has been created in your Stripe account's **test mode**. The `priceId` for this product must be updated in the `pages/checkout-test/index.tsx` file.

## Running Smoke Tests

To run the pre-deploy smoke tests locally, first ensure the application is built and served:

1.  Build the application:
    ```bash
    npm run build
    ```
2.  Serve the application from the `out` directory on port 5000:
    ```bash
    npx serve out/ -s -l 5000
    ```
3.  In a new terminal window, run the smoke tests:
    ```bash
    npm run smoke:test
    ```

Make sure your `cypress.config.ts` has `baseUrl: 'http://localhost:5000'` for local execution against the served build.

### Blank Render Checks

The Cypress test `cypress/e2e/blank_render.cy.ts` verifies that key routes render content inside the `<main>` element. To include additional pages in this check, add the desired path to the `routesToCheck` array at the top of that file.

## Book Builder

Use the `/book-builder` route to preview the Zion OS book. From there you can download a PDF edition or print a hard copy.

## DevNet Sandbox

Run `npm run devnet` to launch a local DevNet simulator. This command starts a
Hardhat network alongside the development server. Once running, visit `/devnet`
to access tools like the token faucet, proposal sandbox and GPT playground
without impacting production data.

## Offworld Deployment

A minimal script is available to push a built Zion instance to IPFS for offline or mesh network distribution. After running `npm run build`, execute:

```bash
npx deploy-zion-ipfs
```

The command uploads the `dist` directory to your configured IPFS gateway and prints the resulting CID. Jobs, profiles, proposals and docs can be stored on IPFS, while messages and DAO vote logs sync through OrbitDB. See `src/offworld/` for helper modules.

A remote test environment is available at **`/remote/dao`**. This route exposes a
delay-tolerant governance panel that queues proposals and votes locally and
syncs them once a low-latency link becomes available.

## Multichain Governance

The `token/multichain` directory provides Solidity contracts for deploying ZION$ across multiple chains. The LayerZero-based bridge wrapper allows deploying on zkSync while mirroring DAO votes to Starknet. Run the Hardhat script in `token/multichain/deploy` to deploy and record addresses.

## Codex Automation

This repository includes an optional workflow for automatically fixing lint errors using OpenAI Codex.

- **codex-pipeline.yaml** – Defines an `openai-operator` pipeline that lints the `app/` directory, extracts failing code, sends it to Codex for a patch and then runs tests.
- **scripts/codexApiFixer.js** – Simple script that sends a single file to Codex and writes the fixed version.
- **scripts/codexWebhookServer.js** – Express server exposing `/webhook/trigger-fix` to launch the pipeline from external error reports.

Start the webhook server with:

```bash
node scripts/codexWebhookServer.js
```

Then POST to `http://localhost:3001/webhook/trigger-fix` to trigger the automated fix pipeline.
