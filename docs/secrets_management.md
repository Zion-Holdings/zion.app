# Secrets Management Guide

This document outlines the procedures and best practices for managing secrets within the Zion platform. Secrets include API keys, database credentials, OAuth client secrets, private certificates, and any other sensitive information required by the applications and services.

## Guiding Principles

1.  **Least Privilege:** Secrets should only grant the minimum necessary permissions.
2.  **Centralized Management (where possible):** Use dedicated secret management tools for production environments.
3.  **Environment-Specific Secrets:** Secrets should be specific to each environment (development, staging, production). Do not share production secrets in development or staging.
4.  **No Hardcoding:** Secrets **MUST NOT** be hardcoded into source code, configuration files committed to Git, or Docker images.
5.  **Auditability:** Changes to secrets and access to them should be auditable whenever possible.
6.  **Rotation:** Have a plan for rotating secrets, especially if they are suspected of being compromised or as part of regular security hygiene.

## Secrets Management by Environment & Component

### 1. Development Environment (Local)

-   **Method:** Use `.env` files (or `.env.local` for Next.js) at the root of each relevant project/service (`./`, `backend/`, `server/`, `monitoring/`).
-   **Source:** These files should be populated by developers based on `.env.example` files.
-   **Storage:** `.env` files **MUST** be listed in the global `.gitignore` file and any component-specific `.gitignore` files to prevent accidental commits.
-   **Content:** Should contain credentials for local development databases, local Redis, mock API keys, or development-tier keys for third-party services.
-   **Sharing:** Development secrets for shared local services (e.g., a team development database) should be shared securely among team members (e.g., via a password manager or internal secure note).

### 2. CI/CD Environment (GitHub Actions)

-   **Method:** Use GitHub Encrypted Secrets.
    -   **Repository Secrets:** For secrets available to all workflows in this repository.
    -   **Environment Secrets:** For secrets specific to a GitHub Actions environment (e.g., "staging", "production").
-   **Access:** Secrets are exposed as environment variables to GitHub Actions workflows (e.g., `${{ secrets.MY_API_KEY }}`).
-   **Examples in Use:**
    -   `REGISTRY_URL`, `REGISTRY_USERNAME`, `REGISTRY_PASSWORD` (for Docker registry in `cd.yml`).
    -   `KUBE_CONFIG` (for Kubernetes deployment in `cd.yml`).
    -   `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID` (if Netlify deployments are triggered via API, or for `netlify-cli`).
    -   `SENTRY_AUTH_TOKEN` (for uploading sourcemaps).
-   **Management:** Managed by repository administrators or users with appropriate permissions via the GitHub UI under "Settings > Secrets and variables > Actions".

### 3. Staging & Production Environments

#### a. Next.js Frontend (Deployed to Netlify)

-   **Method:** Use Netlify's build environment variables and (for functions) Netlify Functions environment variables.
-   **Configuration:** Set directly in the Netlify UI under "Site settings > Build & deploy > Environment".
-   **Scope:**
    -   Build-time variables (e.g., `NEXT_PUBLIC_*` variables, `SENTRY_DSN` for build steps).
    -   Runtime variables for Netlify Functions.
-   **Access:** Accessed as environment variables during the Netlify build process and by Netlify Functions at runtime.
-   **Note:** `netlify.toml` can define environment variables, but sensitive values should always be set via the Netlify UI to keep them out of the repository.

#### b. Next.js Frontend / Other Services (Deployed to Kubernetes)

-   **Method:** Kubernetes Secrets.
-   **Creation:** Secrets should be created in the Kubernetes cluster using `kubectl create secret` or via declarative manifest files (which themselves should be managed securely, e.g., encrypted with SOPS or stored in a secure vault and applied by a privileged pipeline).
-   **Consumption:**
    -   Mounted as environment variables into pods.
    -   Mounted as files into pods.
-   **Management:** Managed by cluster administrators or via GitOps practices with appropriate security measures for secret manifests.
-   **Tools:** Secret manifests are defined using Kustomize and encrypted with Mozilla SOPS. The CI pipeline decrypts these files using keys stored in GitHub Secrets and applies them with `kubectl`. HashiCorp Vault manages the encryption keys and can issue dynamic credentials when required.

#### c. Django Backend (Deployment Environment)

    -   Secrets are provided via Kubernetes Secrets which are mounted as environment variables in the deployment. The same variables are used for both staging and production.
    -   For local development a `.env` file mirrors these variables so developers can run the application without direct access to production secrets.

#### d. Express.js Server (Deployment Environment)

    -   The Express.js service is deployed to Kubernetes alongside the Django backend. It consumes the same Kubernetes Secrets through `envFrom` in its deployment manifest so configuration is consistent across services.

#### e. Supabase Project

-   **Project API Keys:** Managed within the Supabase project dashboard (Settings > API). Includes `anon` key (public) and `service_role` key (highly sensitive, for backend use only).
-   **Database Password:** Managed in Supabase Dashboard (Settings > Database).
-   **Third-Party Auth Providers (Google, Facebook etc.):** Client IDs and secrets are configured in Supabase Dashboard (Authentication > Providers).
-   **Access from Backends:** Backend services (Next.js API routes, Supabase Functions, Django, Express) should use the `service_role` key or other securely configured credentials to interact with Supabase with elevated privileges. Client-side frontend should only use the `anon` key.

### 4. Third-Party Services

-   **Examples:** SendGrid, Stripe, Sentry, Cloudinary, AWS services, Google Cloud services, etc.
-   **Management:** API keys and credentials for these services should be treated as sensitive secrets.
-   **Storage:** Store them according to the environment they are used in (GitHub Secrets for CI/CD, Netlify Environment Variables, Kubernetes Secrets, etc.).
-   **Rotation:** Follow the rotation guidelines provided by each third-party service.

## Best Practices & Procedures

1.  **Adding a New Secret:**
    *   **Local Development:** Add to `.env.example` with a placeholder value. Instruct developers to add it to their local `.env` file.
    *   **CI/CD (GitHub Actions):** Add to GitHub Secrets. Update workflows if the secret name is new.
    *   **Staging/Production (Netlify):** Add to Netlify UI.
    *   **Staging/Production (Kubernetes):** Update Kubernetes Secret manifests/definitions securely. Encrypted manifests reside in `k8s/overlays/<env>/secrets`. Use `sops` to decrypt and `kubectl apply -k k8s/overlays/<env>` to apply changes. This ensures secrets are version controlled but never stored in plain text.
    *   **Staging/Production (Other Backends):** Follow the defined procedure for that backend's deployment environment.
2.  **Rotating Secrets:**
    *   Identify all services/applications using the secret.
    *   Generate a new secret.
    *   Deploy the new secret to all relevant environments and services. This might involve a two-step process if the old secret needs to remain active for a short transition period.
    *   Update applications to use the new secret.
    *   Decommission/revoke the old secret.
    *   For highly privileged credentials such as database passwords or service role API keys, maintain a documented rotation schedule (at least quarterly). Use Vault to issue time-limited credentials where possible so rotation happens automatically.
3.  **Access Control:**
    *   Limit access to production secrets to authorized personnel only.
    *   Use role-based access control (RBAC) in GitHub, cloud platforms, and Kubernetes.
4.  **Auditing (If available):**
    *   Regularly review audit logs for secret access and changes in platforms that support it (e.g., GitHub, cloud provider KMS, Vault).
5.  **Incident Response for Compromised Secrets:**
    *   If a secret is suspected to be compromised:
        1.  Immediately initiate the rotation procedure for that secret.
        2.  Identify the potential impact and scope of the compromise.
        3.  Analyze logs to see if the compromised secret was misused.
        4.  Take corrective actions based on the findings.

## Tools (Considerations for Future Enhancement)

-   **HashiCorp Vault:** For centralized, secure storage and dynamic secret generation.
-   **SOPS (Secrets OPerationS):** For encrypting secret files stored in Git.
-   **Cloud Provider Secret Managers:** (e.g., AWS Secrets Manager, Google Cloud Secret Manager, Azure Key Vault).

_This document should be reviewed at least quarterly and whenever a new service is introduced to ensure all secret handling procedures remain accurate._
