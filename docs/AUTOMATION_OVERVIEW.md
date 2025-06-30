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
    - The Netlify build process now incorporates pre-deploy checks (env vars, TypeScript, security audit) and post-build analysis (bundle size, report generation) by leveraging `scripts/deploy-optimization.js` through the `scripts/optimized-build.cjs` script (defined in `package.json` as `build:netlify:prepare`).
    - The `.github/workflows/deploy.yml` workflow, triggered on pushes to `main`, is now primarily responsible for creating Sentry releases. It rebuilds the application to ensure sourcemaps are available for Sentry.
- **Configuration:** `netlify.toml`, `scripts/optimized-build.cjs`, `scripts/deploy-optimization.js`, `.github/workflows/deploy.yml`.

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

```
