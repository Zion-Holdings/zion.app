# Automation Overview

This document provides an overview of the automated workflows and processes implemented to improve app development and maintenance for the Zion Tech Nexus Market project.

## 1. CI/CD Enhancements

### 1.1. Staging/Preview Deployments

**Frontend (Netlify):**
- **How it works:** Netlify automatically builds and deploys previews for every pull request targeting the `main` branch. It also supports branch deployments.
- **Configuration:** Managed via `netlify.toml` which defines build settings and deployment contexts (`deploy-preview`, `branch-deploy`).
- **CI Check:** The `.github/workflows/ci-cd.yml` workflow ensures that all pull requests undergo comprehensive checks (linting, testing, building) before Netlify deploys a preview.

**Backend (Django on Kubernetes):**
- **How it works:** The `.github/workflows/django-cd.yml` workflow is configured to build Docker images and deploy them to a Kubernetes environment for staging/preview purposes.
- **Trigger:** Runs on pull requests to `main` that include changes in the `backend/` directory.
- **Details:**
    - Docker images are tagged uniquely for PRs (e.g., `pr-<PR_NUMBER>-<SHA>`).
    - Conceptually targets a preview namespace in Kubernetes (e.g., `django-preview`).
    - **Note:** The actual deployment to Kubernetes for PRs (creating/updating resources) and the cleanup of these preview environments require further specific Kubernetes manifest/scripting implementation within the workflow.
- **Configuration:** `.github/workflows/django-cd.yml`. Requires Kubernetes secrets like `KUBE_CONFIG_DJANGO_STAGING_PREVIEW`.

### 1.2. Production Deployments

**Frontend (Netlify & GitHub Actions):**
- **How it works:**
    - Netlify automatically handles the build and deployment of the `main` branch to production, configured via `netlify.toml`.
    - The Netlify build process now incorporates pre-deploy checks (env vars, TypeScript, security audit) and post-build analysis (bundle size, report generation) by leveraging `scripts/deploy-optimization.cjs` through the `scripts/optimized-build.cjs` script (defined in `package.json` as `build:netlify:prepare`).
    - The `.github/workflows/deploy.yml` workflow, triggered on pushes to `main`, is now primarily responsible for creating Sentry releases. It rebuilds the application to ensure sourcemaps are available for Sentry.
- **Configuration:** `netlify.toml`, `scripts/optimized-build.cjs`, `scripts/deploy-optimization.cjs`, `.github/workflows/deploy.yml`.

**Backend (Django on Kubernetes):**
- **How it works:** The `.github/workflows/django-cd.yml` workflow handles production deployments for the backend.
- **Trigger:** Runs on pushes to the `main` branch with changes in the `backend/` directory.
- **Details:**
    - Targets a dedicated `django-production` namespace in Kubernetes.
    - Uses `kubectl set image` to update the production deployment and `kubectl rollout status` to monitor the deployment.
    - Docker images are tagged with the commit SHA.
    - An option for manual approval before production deployment is commented out in the workflow and can be enabled if needed.
- **Configuration:** `.github/workflows/django-cd.yml`. Requires Kubernetes secrets like `KUBE_CONFIG_DJANGO_PRODUCTION` and GitHub environment configuration for `production`.

## 2. Automated Dependency Management

- **Tool:** Renovate Bot.
- **How it works:**
    - Renovate runs weekly (after 2 AM on Monday) to check for dependency updates.
    - It creates pull requests for available updates, grouping related packages for easier review (thanks to `config:base` preset).
    - **Auto-merge:** Minor and patch updates for `devDependencies` are automatically merged if all CI checks pass. Production `dependencies` still require manual review and merging.
    - A Dependency Dashboard issue is enabled in the repository for an overview of all dependency statuses.
- **Configuration:** `renovate.json`.
- **Note:** The previous `dependabot.yml` has been disabled (renamed to `dependabot.yml.disabled`) to avoid conflicts.
- **Labels:** PRs created by Renovate will have `dependencies` and `renovate` labels.

## 3. Code Quality Workflow: TODO/FIXME Tracking

- **How it works:** A GitHub Actions workflow automatically scans the codebase for comments such as `TODO`, `FIXME`, `HACK`, and other common keywords (e.g., `BUG`, `OPTIMIZE`, `REVIEW`).
- **Trigger:** Runs weekly (Monday at 3 AM UTC) and can be manually dispatched.
- **Details:**
    - For each unique actionable comment found, a GitHub issue is created.
    - Issues are automatically labeled with a keyword-specific label (e.g., `todo` for a `TODO:` comment) and additionally with `tech-debt` and `code-comment`.
    - The action (`alstr/todo-to-issue-action`) has mechanisms to prevent creating duplicate issues for the same comment.
    - The scan is scoped to common source code and script directories.
- **Configuration:** `.github/workflows/track-todos.yml`.

These automations aim to streamline development workflows, improve code quality, ensure dependencies are kept up-to-date, and make deployment processes more reliable and efficient.

## 4. Marketing Automation

- **Automatic Blog Promotion:** When scheduled jobs generate and publish a new blog post, a Supabase Edge Function (`share-blog-post`) tweets the article link using the post's `tweetSummary`. This is triggered from `process-scheduled-jobs` after publishing.

## 5. Enhanced Self-Healing and AI-Assisted Development

The platform includes advanced self-healing capabilities primarily orchestrated by `scripts/watchdog.js` and integrated AI tools.

### 5.1. Intelligent Watchdog (`scripts/watchdog.js`)
- **Contextual Log Parsing:** The watchdog now uses a detailed configuration (`ERROR_PATTERNS_CONFIG`) to identify specific error patterns in performance and security logs.
- **Targeted Healing Actions:** Based on the matched error pattern, it can trigger various actions:
    - `GENERAL_RESTART`: The original full system pull, build, and restart.
    - `CODEX_FIX_FILE`: Calls the `/api/codex/suggest-fix` endpoint with the problematic file path and error details to attempt an AI-powered code fix.
    - `RESTART_SERVICE <service_name>`: Restarts a specific service managed by PM2.
    - `CHECK_DB_HEALTH`: Executes a script to check and potentially recover database health.
- **Heal Loop Prevention:** Monitors for repeated, ineffective healing attempts for the same issue. If a loop is detected, automated healing for that specific error type is temporarily disabled, and a critical alert is sent for manual intervention.
- **System Resource Monitoring:** Continues to monitor CPU and memory usage, triggering a general restart if thresholds are breached.
- **Configuration:** Behavior is configured within `scripts/watchdog.js` (error patterns, heal actions) and via environment variables (e.g., `DISCORD_WEBHOOK_URL`, `CODEX_API_URL`).
- **Further Details:** See `AUTO_HEALING_VIA_MONITORING_OPENAI_OPERATOR.md` for more on the AI integration.

### 5.2. AI-Powered Code Correction (`codex-pipeline.yaml`)
- **Targeted Fixes:** The `/api/codex/suggest-fix` endpoint (in `server/app.js`) now accepts `filePath` and `errorLog` parameters.
- **Enhanced Pipeline:** `codex-pipeline.yaml` uses these parameters to provide more context to OpenAI Codex:
    - It attempts to read the content of the specified `filePath`.
    - The `errorLog` is included in the prompt.
    - Codex's suggested fix is applied directly to the target file.
- **Fallback:** If no specific file path is provided, the pipeline can still fall back to its original ESLint-based error detection.

### 5.3. Automated Unit Test Generation
- **Workflow:** A new GitHub Actions workflow, `.github/workflows/generate-tests.yml`, is triggered on pushes that modify components, hooks, utils, or lib files.
- **How it works:**
    - Identifies new or modified `.ts` / `.tsx` files in specified directories.
    - For each relevant file, it invokes the `codex-test-generator-pipeline.yaml` via `openai-operator`.
    - The `TARGET_COMPONENT_PATH` environment variable is passed to the pipeline.
- **Test Generation Pipeline (`codex-test-generator-pipeline.yaml`):**
    - Takes the target component's path and content.
    - Prompts OpenAI Codex to generate Jest/Vitest unit tests, using React Testing Library for components.
    - Saves the generated tests to the appropriate `__tests__` directory (e.g., `src/components/__tests__/MyComponent.test.tsx`).
    - Attempts to format the generated test file using Prettier and ESLint.
- **Outcome:** The GitHub Action commits the newly generated test files to a new branch (e.g., `bot/auto-generated-tests-YYYY-MM-DDTHH-MM-SSZ`) and pushes it to the repository. A Pull Request should then be created from this branch for developer review.
- **Requirements:** Requires `OPENAI_API_KEY` as a secret in GitHub Actions.

### 5.4. AI-Powered Error Log Summarization
- **Endpoint:** A new endpoint `/api/ai/summarize-error` in `server/app.js`.
- **Functionality:**
    - Accepts a `logSnippet` in the request body.
    - Uses the OpenAI API (e.g., GPT-3.5 Turbo or GPT-4) directly to analyze the log snippet.
    - Returns a JSON response with a concise `summary` of the issue, potential root causes, and investigation pointers.
- **Usage:** Intended to be called by monitoring systems (like an enhanced `watchdog.js` or external alerting tools) to provide developers with AI-generated insights directly in alert messages.
- **Requirements:** Requires `OPENAI_API_KEY` to be configured in the environment for `server/app.js`.

These automations aim to streamline development workflows, improve code quality and resilience, ensure dependencies are kept up-to-date, and make deployment processes more reliable and efficient.
```
These automations aim to streamline development workflows, improve code quality, ensure dependencies are kept up-to-date, and make deployment processes more reliable and efficient.

## 6. Self-Healing and Growth Automations

- **Watchdog Self-Heal:** `scripts/watchdog.js` monitors logs and system resources. When repeated errors or high usage are detected, it automatically pulls the latest code, installs dependencies, rebuilds, and restarts services.
- **AI-Powered Fixes:** The `codex-bug-fix.js` script can be invoked via webhook or workflow to send issues to OpenAI and apply generated patches.
- **Growth Ideas:** `scripts/self-grow.js` analyzes user feedback in `data/feedback.json` and uses OpenAI to suggest new features. Run it with `npm run growth:ideas`.

These features allow the platform to adapt and improve itself with minimal manual intervention.

## 7. Self-Healing & AI-Assisted Development

- **Watchdog Monitoring:** `scripts/watchdog.js` monitors log files and system resources. If repeated errors or sustained high usage are detected, it triggers a self-heal command and can invoke the OpenAI operator for help.
- **OpenAI Operator Pipeline:** The `/api/codex/suggest-fix` endpoint and `scripts/codexWebhookServer.js` run `openai-operator` with `codex-pipeline.yaml` to lint code, extract failing snippets, request a Codex patch, and optionally deploy if tests succeed.
- **Error Reporting Workflows:** Workflows such as `auto-report-errors.yml` and `auto-report-codex.yml` collect logs during CI and open issues or pull requests with AI-generated patches when failures occur.
- **Manual Hotfix Review:** See `docs/MANUAL_HOTFIX_PROCESS.md` for guidance on reviewing AI suggestions before merging critical fixes.

Together, these tools allow the project to automatically detect problems, generate fixes, and submit pull requests with minimal human intervention.