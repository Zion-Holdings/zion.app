# Deployment Pipeline

This project uses GitHub Actions to run tests, lint the codebase and build the application. After a successful build a Netlify deploy hook is called to publish the site.

## Workflow overview

1. Install Node and (optionally) Python dependencies
2. Cache `node_modules` and pip downloads to speed up subsequent runs
3. Run `npm run lint`, `npm run test` and `npm run build`
4. If all steps succeed, trigger Netlify using the build hook URL
5. If the workflow fails, a Slack message is sent

### Skipping redundant installs

`actions/setup-node` restores cached `node_modules`. The workflow now checks the
`cache-hit` output and skips `npm ci` when dependencies are unchanged. This
reduces CI runtime significantly.

### Build troubleshooting

If a build fails with `Merge conflict marker encountered`, ensure there are no
leftover conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) in the source. These
markers can occur after resolving merge conflicts and must be removed before
committing.

Environment variables `NETLIFY_BUILD_HOOK_URL` and `SLACK_WEBHOOK_URL` must be configured in the repository secrets for the hook and Slack notification to work.

The workflow definition lives in `.github/workflows/ci.yml`.
