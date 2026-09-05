# Telegram Auto-Reply Automations

Always-on replies for inbound Telegram messages to the Zion Tech Group bot.

The live path is GitHub Actions (`telegram-auto-reply.yml`) polling `getUpdates` every 5 minutes. Cursor Automations are optional for `/agent` Cloud Agent launches and webhook fallbacks.

## What it does

Incoming private messages (and group mentions / replies to the bot) are classified into one of these automations:

- `/start` `/help` — menu and contact links
- `/stop` `/parar` — opt out of auto-replies in that chat
- booking — Calendly link
- pricing — pricing page + quote intake
- partnership — partner / reseller routing
- support — incident intake
- lead — proposal / services
- greeting — short intro
- fallback — catch-all with contact paths
- CEO (`8435383377`): `/status`, `/agent <task>`, and a short ops ack for other text

New lead DMs also notify `TELEGRAM_CHAT_ID` (CEO) after the user is answered.

Groups and the home channel (`-1003886112318`) are silent unless the bot is mentioned, someone replies to the bot, or the message is a slash command.

## Secrets

| Secret | Required | Purpose |
| --- | --- | --- |
| `TELEGRAM_BOT_TOKEN` | yes for live send | BotFather token |
| `TELEGRAM_CHAT_ID` | recommended | CEO notify destination (default `8435383377`) |
| `TELEGRAM_CEO_USER_IDS` | optional | Comma-separated user ids that can run `/agent` and `/status` |
| `TELEGRAM_ALLOWED_CHAT_IDS` | optional | If set, only these chats are answered (CEO still allowed) |
| `CURSOR_API_KEY` | optional | Enables `/agent` to launch a Cursor Cloud Agent |

Create the bot with [@BotFather](https://t.me/BotFather), disable group privacy if you want mention-less group replies (`TELEGRAM_REPLY_GROUPS=1`), then add the token as a repo secret.

## Run locally

```bash
export TELEGRAM_BOT_TOKEN=...
export TELEGRAM_CHAT_ID=8435383377
python3 scripts/telegram/test_auto_reply.py
python3 scripts/telegram/auto_reply.py --dry-run
python3 scripts/telegram/auto_reply.py --classify "Quero agendar uma reunião"
```

Cold start skips the backlog so old chats are not blasted. State lives in `.telegram-state.json` (gitignored) and in the Actions cache.

## Cursor Automations (optional)

Cursor has no native Telegram trigger. Use one of:

1. Keep the GitHub Action as the always-on replier (recommended, cheap).
2. Create a webhook automation at [cursor.com/automations/new](https://cursor.com/automations/new) using the prompts in `.cursor/automations/`.
3. From Telegram, send `/agent <task>` (CEO only) to launch a Cloud Agent against this repo.

Ready-to-paste prompts:

- `.cursor/automations/telegram-inbound-reply.yaml`
- `.cursor/automations/telegram-ceo-ops.yaml`
