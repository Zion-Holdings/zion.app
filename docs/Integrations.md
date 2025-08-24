# Zion Assistant Integrations

This project includes experimental integrations for a browser extension and Slack bot. Additional connectors for Salesforce and Microsoft Teams are also available.

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

## Salesforce

The `src/integrations/salesforce` folder contains a minimal wrapper around the Salesforce REST API. Set `VITE_SALESFORCE_URL` and `VITE_SALESFORCE_TOKEN` (or their server-side equivalents) to enable the `salesforceService` helper, which can create leads in your CRM.

## Microsoft Teams

`src/integrations/teams` provides a simple `TeamsService` for sending messages to a Teams channel via webhook. Configure `VITE_TEAMS_WEBHOOK_URL` or `TEAMS_WEBHOOK_URL` in your environment to use it.
