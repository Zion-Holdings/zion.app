# Documentation Index

This folder contains various guides and references for the Zion application. Below is a quick overview of the most useful documents.

- [Architecture Overview](./ARCHITECTURE_OVERVIEW.md)
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)
- [Production Environment Setup](./PRODUCTION_ENV_SETUP.md)
- [Performance Monitoring](./PerformanceMonitoring.md)
- [Marketplace API Integration](./MARKETPLACE_API_INTEGRATION.md)
- [Frontend State Management Guidelines](./frontend_state_management_guidelines.md)
- [UX Micro-Interactions](./UX_MICRO_INTERACTIONS.md)
- [Public API Documentation](./public-api/README.md)
- [Resources Page Prompts](./resources_prompt.md)
- [AI Talent Matcher (Planned Feature)](./AI_Talent_Matcher.md)
- [Frequently Asked Questions](./FAQ.md)
- [Features to Add or Improve](./FEATURES_TO_ADD_OR_IMPROVE.md)

Additional documents cover troubleshooting guides, internal protocols and other topics. Browse the files in this folder for more details.

## Key Environment Variables for Deployment

This section outlines critical environment variables that need to be configured for the application to function correctly, especially when deployed via Netlify.

### `INTERNAL_AUTH_SERVICE_URL`

*   **Purpose**: Specifies the complete base URL for the internal Node.js authentication microservice. The Next.js API route at `pages/api/auth/register.ts` uses this URL to forward signup requests to this dedicated authentication service.
*   **Used In**: `pages/api/auth/register.ts`, `pages/api/auth/health.ts`
*   **Example Format**:
    *   For local development (assuming the Node.js auth service runs separately on port 3001): `http://localhost:3001`
    *   For Kubernetes environments: `http://<k8s-service-name>.<namespace>.svc.cluster.local:<port>` (e.g., `http://zion-auth-service.production.svc.cluster.local:80`)
*   **Configuration**: This variable **must be set** in the Netlify UI build environment settings for production and preview deployments. Refer to the placeholder in `netlify.toml` for an example entry. Failure to configure this variable will result in non-functional user signup and failing health checks.
