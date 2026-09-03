# Composio + 1Password setup for Zion

## Required repo secrets
Add these in `Settings > Secrets and variables > Actions` on `zion-support.github.io`:

- `COMPOSIO_API_KEY`
- `COMPOSIO_1PASSWORD_CONNECTION_ID`

## Workflow
- `.github/workflows/composio/onepassword-sync.yml` runs daily at 06:00 UTC and on manual dispatch.

## Manual trigger
After adding secrets, run `composio-1password-sync` from the Actions tab.
