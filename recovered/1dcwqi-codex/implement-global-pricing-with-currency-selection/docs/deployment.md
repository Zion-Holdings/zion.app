# Deployment Pipeline

This project uses GitHub Actions to run tests, lint the codebase and build the application. After a successful build a Netlify deploy hook is called to publish the site.

## Workflow overview

1. Install Node and (optionally) Python dependencies
2. Cache `node_modules` and pip downloads to speed up subsequent runs
3. Run `npm run lint`, `npm run test` and `npm run build`
4. If all steps succeed, trigger Netlify using the build hook URL
5. If the workflow fails, a Slack message is sent

Environment variables `NETLIFY_BUILD_HOOK_URL` and `SLACK_WEBHOOK_URL` must be configured in the repository secrets for the hook and Slack notification to work.

The workflow definition lives in `.github/workflows/ci.yml`.
