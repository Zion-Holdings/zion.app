import { runContinuousCycle } from './composio-growth-cycle.mjs';

const leads = [
  { email: 'lead1@example.com', firstName: 'Lead', lastName: 'One', company: 'Zion' },
];

const config = {
  telegramChatId: process.env.TELEGRAM_CHAT_ID,
  discordChannelId: process.env.DISCORD_CHANNEL_ID,
};

runContinuousCycle({ leads, config, maxRuns: 1 }).then((results) => {
  console.log(JSON.stringify(results, null, 2));
  process.exit(0);
}).catch((error) => {
  console.error(JSON.stringify({ _error: true, stderr: String(error) }));
  process.exit(1);
});
