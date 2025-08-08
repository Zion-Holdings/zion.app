## Zion Assistant Monorepo

Cross-platform assistant for hiring managers and remote workers.

### Apps
- `apps/api`: Fastify API (OpenAI, jobs, talent, projects, notifications)
- `apps/slack-bot`: Slack Bolt app with `/zion` slash commands and notifications
- `apps/extension`: Chrome/Edge MV3 extension with popup and background sync

### Quickstart
1. Copy env: `cp .env.example .env`
2. Start infra: `docker compose up -d`
3. Install deps: `pnpm i`
4. Run dev servers: `pnpm dev`
5. Build extension icons: `pnpm generate:icons`

### Slack
- Create a Slack app with OAuth scopes: `commands,chat:write,chat:write.public,users:read,app_mentions:read,channels:history`
- Set Slash commands:
  - `/zion` (dispatches subcommands)
  - `/zion-post-job`, `/zion-suggest-talent`, `/zion-track-project`, `/zion-help` (optional aliases)
- Redirect URL: `${SLACK_APP_REDIRECT_URL}`

### Google OAuth
- Create OAuth 2.0 Client (Web) with redirect `${GOOGLE_REDIRECT_URI}`
- The extension uses `chrome.identity.launchWebAuthFlow` to sign in

### Database & RLS
- Postgres initialized via `infra/db/init.sql` with RLS policies per `user_id`

### Rate limiting
- Implemented in API with Redis (fallback to in-memory)

### Branding
- Icon generator: run `pnpm --filter @zion/extension generate:icons` to produce PNGs from `zion.svg`