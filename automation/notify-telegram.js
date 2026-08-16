#!/usr/bin/env node
/**
 * notify-telegram.js — Send a message to Telegram via bot API
 *
 * Usage: node automation/notify-telegram.js "message text"
 *
 * Environment variables:
 *   TG_BOT_TOKEN  — Telegram bot token (required)
 *   TG_CHAT_ID    — Telegram chat ID (required)
 *   TG_THREAD_ID  — (optional) thread ID for topics
 *
 * Falls back gracefully when env vars are missing (no crash in CI).
 */
const https = require('https');

const message = process.argv.slice(2).join(' ');
if (!message) {
  console.error('Usage: node automation/notify-telegram.js "message text"');
  process.exit(0); // exit 0 so CI doesn't fail if message is empty
}

const token = process.env.TG_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TG_CHAT_ID || process.env.TELEGRAM_CHAT_ID || process.env.TG_HOME_CHANNEL;
const threadId = process.env.TG_THREAD_ID;

if (!token || !chatId) {
  console.warn('notify-telegram: TG_BOT_TOKEN or TG_CHAT_ID not set; skipping send.');
  console.log(`[would-send] ${message}`);
  process.exit(0);
}

const payload = JSON.stringify({
  chat_id: chatId,
  text: message,
  thread_id: threadId || undefined,
  disable_web_page_preview: true,
  parse_mode: 'Markdown',
});

const data = Buffer.from(payload);

const options = {
  hostname: 'api.telegram.org',
  port: 443,
  path: `/bot${token}/sendMessage`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      process.exit(0);
    } else {
      console.error(`notify-telegram: HTTP ${res.statusCode}: ${body}`);
      process.exit(0); // don't fail CI on notification errors
    }
  });
});

req.on('error', (e) => {
  console.error(`notify-telegram: ${e.message}`);
  process.exit(0); // don't fail CI on notification errors
});

req.write(data);
req.end();
