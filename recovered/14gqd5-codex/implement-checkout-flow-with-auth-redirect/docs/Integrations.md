# Zion Assistant Integrations

This project includes experimental integrations for a browser extension and Slack bot.

## Browser Extension

The `extension/` folder contains a minimal Chrome/Edge extension. It provides a popup interface to ask ZionGPT questions and quick links to post jobs, search resumes and view notifications.

Build the app and load the folder as an unpacked extension.

## Slack Bot

`src/integrations/slack/bot.ts` implements a Slack bot using the Bolt SDK. The bot exposes the `/zion` slash command with the following sub‑commands:

- `post-job` – prompt users to submit job details
- `suggest-talent` – returns AI talent suggestions via ZionGPT
- `track-project` – displays project status (stub)
- `help` – list commands

Run the bot with:

```bash
npm run dev:slack
```

Environment variables `SLACK_SIGNING_SECRET`, `SLACK_BOT_TOKEN` and optionally `OPENAI_API_KEY` are required.
