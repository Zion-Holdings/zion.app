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
    -   **Clarification:** Netlify typically serves as the primary platform for production deployments of the Next.js frontend due to its ease of use, CDN capabilities, and integration with serverless functions for Next.js API routes. It's also excellent for generating preview deployments for each pull request, allowing for easy review of changes. While Kubernetes is used for staging, Netlify often handles the production user-facing deployment.

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
-   **Clarification:** While Netlify is often used for the primary frontend production deployment, Kubernetes might be used for production instances of specific backend services or potentially for a more complex, scalable production version of the Next.js app if advanced orchestration, private networking, or specific compute resources are needed beyond Netlify's typical scope. However, without explicit confirmation, assume Kubernetes is primarily for staging and specialized backend services.

## 2. Django Backend (`backend/`)

-   **Current Documentation Status & Initial Details:**
    -   The Django backend's deployment process is currently managed via the `.github/workflows/django-cd.yml` workflow, which builds a Docker image and pushes it to a container registry (`${{ secrets.REGISTRY_URL }}/zion-django-backend`).
    -   This image is then intended for deployment to a Kubernetes environment (likely staging, as per the workflow's environment setting).
    -   The workflow includes placeholder steps for `kubectl` commands to update the deployment, suggesting a Kubernetes-native deployment.
    -   **Key areas requiring detailed documentation by the team include:**
        -   The exact `kubectl` commands or Kustomize overlays used for staging and production.
        -   The process for database schema migrations (`python backend/manage.py migrate`) within the deployment pipeline or as a post-deployment step. This is critical and must be handled carefully to avoid data loss or service interruption.
        -   Management of static files (`python backend/manage.py collectstatic`), including where they are collected and how they are served (e.g., via Whitenoise, a CDN, or a separate web server).
        -   Configuration and secrets management specific to the Django deployment in different environments (refer to `docs/secrets_management.md`).
        -   Health check configurations for Kubernetes.
        -   Rollback procedures.
-   **CI Integration:** The `.github/workflows/pr-check.yml` includes steps to install Python dependencies and compile Python files for the backend, indicating it's part of the CI validation. The `django-cd.yml` handles the build and deployment automation.
-   **Deployment Strategy:** The primary strategy appears to be containerization (using `backend/Dockerfile`) and deployment to Kubernetes.
-   **Staging Deployment Example:**
    1.  Build the Docker image with `docker build -t zion-backend:$GITHUB_SHA ./backend`.
    2.  Push the image to `${{ secrets.REGISTRY_URL }}/zion-django-backend`.
    3.  Apply the Kubernetes manifests with `kubectl apply -k k8s/overlays/staging`.
-   **Production Deployment Example:**
    1.  Tag the image with the release version and push to the registry.
    2.  Apply `kubectl apply -k k8s/overlays/production`.
    3.  Run `python manage.py migrate` and `python manage.py collectstatic` as init containers or jobs during the rollout.
    *   The `backend/Dockerfile` exists. Ensure it's optimized for production (e.g., multi-stage builds, non-root user).
    *   The `django-cd.yml` workflow provides a good starting point for automation. Refine the Kubernetes deployment step with actual commands or Kustomize usage.
    *   Detail how database migrations (`python manage.py migrate`) are handled during deployment (should be part of the team-documented process and future automation).
    *   Explain how static files (`python manage.py collectstatic`) are managed (should be part of the team-documented process and future automation).

## 3. Express.js Server (`server/`)

-   **Current Documentation Status & Initial Details:**
    -   The `server/` directory contains an Express.js application. Currently, there is no dedicated Dockerfile specifically for this server within its directory, nor a dedicated GitHub Actions CD workflow like `express-cd.yml`.
    -   The root `Dockerfile` seems to package the entire application, including the Next.js frontend. If the Express server is meant to be deployed independently, it would typically have its own `Dockerfile`.
    -   **Deployment likely involves:**
        -   **Containerization:** Creating a `Dockerfile` for the Express server (if not already implicitly covered by a broader build process that separates it out).
        -   **Deployment Target:** This could be Kubernetes (similar to Django or Next.js staging), a PaaS (like Heroku, Fly.io, Google App Engine), or even a VM.
    -   **Key areas requiring detailed documentation by the team include:**
        -   The intended deployment environment(s) for this server.
        -   If containerized, the Docker build process and image name/registry.
        -   The CI/CD pipeline for building and deploying this server.
        -   Configuration and secrets management (refer to `docs/secrets_management.md`).
        -   Process management (e.g., using PM2 or similar if deployed to a VM).
        -   Logging and monitoring setup.
-   **Potential Deployment Strategies (Needs Confirmation by Team):**
    -   **Containerization & Kubernetes:** Deploy as a separate service in the existing Kubernetes cluster. This would require a `Dockerfile` in `server/` and Kubernetes manifests.
    -   **PaaS:** Deploy to a platform like Heroku or Google App Engine, which simplifies infrastructure management.
    -   **Serverless Functions (Refactor):** Parts of the Express server might be refactorable into serverless functions (e.g., on Netlify or AWS Lambda) if they handle discrete API endpoints, though its current setup as a persistent server suggests it handles more.
-   **Current Plan:** The Express.js server will run as its own container. A new `server/Dockerfile` should be created and a workflow named `express-cd.yml` will build and push this image on merges to `main`. Kubernetes manifests stored in `k8s/express` will then be applied to deploy the service.

## 4. Supabase Functions (`supabase/functions/`)

-   **Deployment Method:** Supabase Functions are typically deployed using the Supabase CLI.
-   **Process:**
    1.  Develop functions locally.
    2.  Use `supabase functions deploy <function_name>` or `supabase deploy` (if part of a larger Supabase project deployment).
    3.  Secrets and environment variables for functions are managed in the Supabase project dashboard.
-   **CI/CD Integration:**
    -   Supabase Functions are deployed via the `supabase-deploy.yml` workflow which uses the `supabase/setup-cli` action and runs `supabase functions deploy` whenever code in `supabase/functions/` changes on `main`.

## 5. Netlify Functions (`netlify/functions/`)

-   **Deployment Method:** Netlify Functions are automatically deployed when the site is built and deployed on Netlify.
-   **Process:** Any files in the `netlify/functions/` directory (or the directory specified in `netlify.toml`) are typically picked up by Netlify's build process and deployed as serverless functions.
-   **Configuration:** Environment variables for these functions are managed in the Netlify UI.

## General Considerations

-   **Environment Configuration:** Consistent management of environment variables and secrets across all components and environments is crucial. Refer to `docs/secrets_management.md`.
-   **Database Migrations:** Processes for applying database migrations (Prisma for Supabase/Next.js, Django migrations) must be integrated into the deployment pipelines for relevant backend services.
-   **Rollbacks:** Define and document rollback strategies for failed deployments. Containerization and versioned deployments (e.g., in Kubernetes) facilitate easier rollbacks.
-   **Zero-Downtime Deployments:** For critical services, aim for zero-downtime deployment strategies (e.g., blue-green deployments, rolling updates). The `.github/workflows/blue-green-deploy.yml` suggests this is already a consideration for some parts.

_This document will continue to evolve. Create detailed playbooks for each environment and update this guide whenever deployment steps change._
