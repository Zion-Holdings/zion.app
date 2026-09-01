# Zion — Composio Setup Runbook

## Goal
Create/connect accounts through Composio, keep 1Password updated, and use `kleber@ziontechgroup.com`.

## Prerequisites
- GitHub repo: `zion-support/zion-support.github.io`
- Maintainer access to add `Settings > Secrets and variables > Actions`

## Steps
1. Create/login at https://composio.dev with `kleber@ziontechgroup.com`
2. Create the `1password` connection in Composio.
3. Copy:
   - `COMPOSIO_API_KEY`
   - `COMPOSIO_1PASSWORD_CONNECTION_ID`
4. Add both as repo secrets in `zion-support.github.io`.
5. Optional: connect other toolkits and add `COMPOSIO_<TOOLKIT>_CONNECTION_ID` secrets.

## Repo changes already included
- `.github/workflows/composio/onepassword-sync.yml`
- `docs/composio-onepassword-setup.md`

## Next automation available after secrets
- Daily refresh of 1Password connection via workflow.
- Adding more workflows for Gmail, Linear, Notion, Resend, WhatsApp, Sentry, etc., using the same pattern.

## Docs
- https://composio.dev/toolkits/_1password
- https://docs.composio.dev/reference/authenticating-to-composio
- https://docs.composio.dev/docs/cli
