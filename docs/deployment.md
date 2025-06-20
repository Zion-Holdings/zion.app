# Deployment Strategies and Processes

This document outlines the deployment strategies and processes for the various components of the Zion platform.

## Overview

The Zion platform utilizes a combination of deployment targets and automation, primarily managed through GitHub Actions. Key components like the Next.js frontend have multiple deployment paths, while backend services require further documentation on their specific deployment processes.

## 1. Next.js Frontend Application

The Next.js frontend application has two main deployment configurations:

### a. Deployment to Netlify

-   **Configuration:** Managed via `netlify.toml` and the Netlify UI.
-   **Triggers:** Likely automatic deploys from pushes/merges to specific branches (e.g., main, production), and preview deploys for pull requests.
-   **Process:**
    1.  Netlify detects changes in the connected Git repository.
    2.  The build command (`npm run build` as specified in `netlify.toml`) is executed in Netlify's build environment.
    3.  Environment variables (including secrets for build time and Netlify Functions) are injected from the Netlify UI settings.
    4.  The `@netlify/plugin-nextjs` plugin optimizes the build for Netlify's platform (e.g., handling Next.js API routes as Netlify Functions, server-side rendering, static site generation).
    5.  The output (typically the `.next` directory) is deployed to Netlify's CDN and function infrastructure.
-   **CI Workflows:**
    -   The `.github/workflows/ci.yml` and `.github/workflows/pr-check.yml` handle building, linting, and testing, but the actual deployment to Netlify is often managed by Netlify's own Git integration.
    -   The `deployment.md` (previous version) mentioned a Netlify deploy hook, which could be triggered by a GitHub Action upon successful CI.
-   **Purpose:**
    -   Production hosting for the main website.
    -   Preview deployments for pull requests.
    -   Hosting for specific branches or staging environments.
    -   **TODO:** Confirm the exact purpose of Netlify deployments (e.g., production, previews, specific staging instances) if Kubernetes is also used for staging/production.

### b. Deployment to Kubernetes (Staging)

-   **Configuration:** Managed via `k8s/deployment.yaml` (and potentially other Kubernetes manifests not yet reviewed).
-   **Automation:** Handled by the `.github/workflows/cd.yml` GitHub Actions workflow.
-   **Process:**
    1.  Triggered on push to the `main` branch.
    2.  The workflow checks out the code.
    3.  It builds a Docker image using the root `Dockerfile` (which packages the Next.js application).
    4.  The Docker image is pushed to a container registry (details in GitHub Secrets).
    5.  `kubectl` is set up and configured to connect to the Kubernetes cluster (staging environment, kubeconfig from GitHub Secrets).
    6.  The Kubernetes deployment (`deployment/zion-app`) is updated to use the new Docker image tag. The `k8s/deployment.yaml` manifest might be applied with the image placeholder updated.
-   **Purpose:**
    -   Currently targets a `staging` environment.
    -   Could potentially be adapted for production deployments to Kubernetes.
-   **TODO:** Clarify if Kubernetes is also used for production or other environments for the Next.js app.

## 2. Django Backend (`backend/`)

-   **Current Documentation Status:** The current manual or semi-automated deployment process for the Django backend needs to be documented here by the development team. This documentation should cover all environments (staging, production) and include steps for database migrations and static file collection.
-   **CI Integration:** The `.github/workflows/pr-check.yml` includes steps to install Python dependencies and compile Python files for the backend, indicating it's part of the CI validation.
-   **Potential Deployment Strategies (Needs Confirmation):**
    -   **Containerization:** Could be containerized (requiring its own `Dockerfile`) and deployed to Kubernetes, similar to the Next.js app.
    -   **Platform-as-a-Service (PaaS):** Could be deployed to platforms like Heroku, Google App Engine, AWS Elastic Beanstalk.
    -   **Virtual Machines:** Traditional deployment to VMs.
-   **TODO (Team Action):** Document the existing manual or semi-automated deployment process for the Django backend.
-   **TODO:**
    *   Create a dedicated Dockerfile for the Django backend if containerization is desired/used. (Partially addressed in this update)
    *   Develop a GitHub Actions workflow (e.g., `django-cd.yml`) for automated deployment. (Partially addressed in this update)
    *   Detail how database migrations (`python manage.py migrate`) are handled during deployment (should be part of the team-documented process and future automation).
    *   Explain how static files (`python manage.py collectstatic`) are managed (should be part of the team-documented process and future automation).

## 3. Express.js Server (`server/`)

-   **Current Documentation Status:** Similar to the Django backend, a specific, automated deployment workflow for the Express.js server is not yet fully documented from the reviewed files.
-   **Potential Deployment Strategies (Needs Confirmation):**
    -   **Containerization:** Could be containerized and deployed to Kubernetes.
    -   **PaaS or Serverless:** Could be deployed to a PaaS or adapted to run in a serverless environment (though its current structure as a persistent server might not directly fit serverless functions without refactoring).
    -   **VMs.**
-   **TODO:**
    -   Document the current deployment process for the Express.js server.
    *   Create a dedicated Dockerfile for the Express.js server if containerization is desired/used.
    *   Develop a GitHub Actions workflow (e.g., `express-cd.yml`) for automated deployment.

## 4. Supabase Functions (`supabase/functions/`)

-   **Deployment Method:** Supabase Functions are typically deployed using the Supabase CLI.
-   **Process:**
    1.  Develop functions locally.
    2.  Use `supabase functions deploy <function_name>` or `supabase deploy` (if part of a larger Supabase project deployment).
    3.  Secrets and environment variables for functions are managed in the Supabase project dashboard.
-   **CI/CD Integration:**
    -   **TODO:** Determine if there's a GitHub Actions workflow for automatically deploying Supabase Functions when changes are made in the `supabase/functions/` directory. If not, this should be considered. A common pattern is to use `supabase/setup-cli` action followed by deploy commands.

## 5. Netlify Functions (`netlify/functions/`)

-   **Deployment Method:** Netlify Functions are automatically deployed when the site is built and deployed on Netlify.
-   **Process:** Any files in the `netlify/functions/` directory (or the directory specified in `netlify.toml`) are typically picked up by Netlify's build process and deployed as serverless functions.
-   **Configuration:** Environment variables for these functions are managed in the Netlify UI.

## General Considerations

-   **Environment Configuration:** Consistent management of environment variables and secrets across all components and environments is crucial. Refer to `docs/secrets_management.md`.
-   **Database Migrations:** Processes for applying database migrations (Prisma for Supabase/Next.js, Django migrations) must be integrated into the deployment pipelines for relevant backend services.
-   **Rollbacks:** Define and document rollback strategies for failed deployments. Containerization and versioned deployments (e.g., in Kubernetes) facilitate easier rollbacks.
-   **Zero-Downtime Deployments:** For critical services, aim for zero-downtime deployment strategies (e.g., blue-green deployments, rolling updates). The `.github/workflows/blue-green-deploy.yml` suggests this is already a consideration for some parts.

**TODO:** This document should be regularly updated as deployment processes evolve. Specific deployment playbooks for each service and environment should be created and referenced here.
