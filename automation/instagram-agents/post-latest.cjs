#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, '..', 'logs', 'instagram-post-latest.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(LOG, line);
}

function loadCaptions() {
  const captionsPath = path.join(__dirname, 'captions.json');
  if (!fs.existsSync(captionsPath)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(captionsPath, 'utf8'));
    return data.captions || [];
  } catch {
    return [];
  }
}

async function postToInstagram(caption) {
  // We do NOT support direct credential login. Use Meta Graph API tokens in env vars.
  const igUserId = process.env.IG_USER_ID;
  const igAccessToken = process.env.IG_ACCESS_TOKEN;

  if (!igUserId || !igAccessToken) {
    log('⚠️ IG_USER_ID or IG_ACCESS_TOKEN not configured. Skipping post.');
    return { success: false, skipped: true };
  }

  // Placeholder: create container and publish via Graph API if tokens are available.
  // This implementation only logs intent to avoid making external network calls in CI.
  log(`📣 Would post to Instagram (user ${igUserId}):\n${caption}`);
  return { success: true, simulated: true };
}

async function main() {
  try {
    const captions = loadCaptions();
    if (captions.length === 0) {
      log('ℹ️ No captions available to post.');
      return;
    }

    const nextIndexPath = path.join(__dirname, 'next-index.txt');
    let index = 0;
    if (fs.existsSync(nextIndexPath)) {
      const raw = parseInt(fs.readFileSync(nextIndexPath, 'utf8'), 10);
      if (!Number.isNaN(raw)) index = raw;
    }

    const caption = captions[index % captions.length];
    const res = await postToInstagram(caption);
    if (res.success) {
      fs.writeFileSync(nextIndexPath, String((index + 1) % captions.length));
      log('✅ Instagram post processed');
    } else if (res.skipped) {
      log('⏭️ Skipped due to missing configuration');
    } else {
      log('❌ Failed to post');
    }
  } catch (e) {
    log(`❌ Error: ${e.message}`);
    process.exitCode = 1;
  }
}

main();


