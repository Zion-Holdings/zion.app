import fetch from 'node-fetch';

const slackWebhook = process.env.SLACK_WEBHOOK_URL;
const discordWebhook = process.env.DISCORD_WEBHOOK_URL;

export async function sendAlert({ slowEndpoints = [], patchedPackages = [], testStatus = {}, commitLink = '' } = {}) {
  const lines = [];

  if (slowEndpoints.length) {
    lines.push('*Top Slow Endpoints:*');
    for (const e of slowEndpoints) {
      lines.push(`- ${e.path} \u2013 ${e.ms}ms`);
    }
  }

  if (patchedPackages.length) {
    if (lines.length) lines.push('');
    lines.push('*Patched Packages:*');
    for (const pkg of patchedPackages) {
      lines.push(`- ${pkg}`);
    }
  }

  if (Object.keys(testStatus).length) {
    if (lines.length) lines.push('');
    const status = testStatus.passed ? '✅ Passed' : '❌ Failed';
    lines.push(`*Tests:* ${status} (${testStatus.summary})`);
  }

  if (commitLink) {
    if (lines.length) lines.push('');
    lines.push(`Commit: ${commitLink}`);
  }

  const text = lines.join('\n');
  const tasks = [];
  if (slackWebhook) {
    tasks.push(fetch(slackWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    }));
  }
  if (discordWebhook) {
    tasks.push(fetch(discordWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: text })
    }));
  }

  await Promise.all(tasks);
}
