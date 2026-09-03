# Composio Auth Migration Notice
- OAuth `initiate()` retires: 2026-05-08 new orgs, 2026-07-03 all orgs.
- Use `connected_accounts.link()` / Connect Link for OAuth.
- Use `connected_accounts.initiate()` only for API key / bearer / basic / custom-credential flows.
- Update `composio-full-stack.yml` to prefer connect-link if onboarding new accounts.
