#!/usr/bin/env node
/*
Deployment Monitor Script
- Checks Sentry errors for current release/env within a recent window
- If above threshold, triggers rollback (Netlify or Vercel)
- Notifies Slack/Telegram and opens a GitHub issue

Env vars:
SENTRY_ORG, SENTRY_PROJECT, SENTRY_AUTH_TOKEN, SENTRY_DSN (for SDK only), SENTRY_RELEASE, SENTRY_ENV
ERROR_THRESHOLD (default 10), ERROR_WINDOW_MINUTES (default 10)
ROLLBACK_PROVIDER (netlify|vercel)
NETLIFY_SITE_ID, NETLIFY_AUTH_TOKEN
VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_ORG_ID
SLACK_WEBHOOK_URL
TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
GITHUB_TOKEN, GITHUB_REPO (e.g., "owner/repo")
MONITOR_MINUTES (how long to run checks, default 20)
CHECK_INTERVAL_SECONDS (default 60)
*/

const axios = require('axios');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const nowIso = () => new Date().toISOString();

async function fetchSentryErrorCount({ org, project, token, release, environment, windowMinutes }) {
  if (!org || !project || !token || !release) throw new Error('Missing Sentry config');
  const since = Math.floor((Date.now() - windowMinutes * 60 * 1000) / 1000);
  const query = encodeURIComponent(`event.type:error release:${release}${environment ? ` environment:${environment}` : ''}`);
  // Try Discover API for a count
  try {
    const url = `https://sentry.io/api/0/organizations/${org}/events/?field=count()&query=${query}&start=${since}`;
    const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
    // If API returns data.value or similar structure; fallback to length
    const value = (res.data && res.data.data && res.data.data[0] && (res.data.data[0]['count()'] || res.data.data[0].count)) || 0;
    return Number(value) || 0;
  } catch (e) {
    // Fallback: issues API
    try {
      const url = `https://sentry.io/api/0/projects/${org}/${project}/issues/?query=${query}&statsPeriod=${windowMinutes}m`;
      const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
      let total = 0;
      for (const issue of res.data || []) total += issue.count ? Number(issue.count) : 1;
      return total;
    } catch (e2) {
      console.warn('Sentry API failed, falling back to local logs:', e2.message);
      return null;
    }
  }
}

function fallbackLocalErrorCount(windowMinutes) {
  try {
    const logsPath = path.join(process.cwd(), 'data', 'devportal', 'logs.json');
    if (!fs.existsSync(logsPath)) return 0;
    const raw = fs.readFileSync(logsPath, 'utf8');
    const logs = JSON.parse(raw || '[]');
    const cut = Date.now() - windowMinutes * 60 * 1000;
    return logs.filter((l) => l.status >= 500 && new Date(l.timestamp).getTime() >= cut).length;
  } catch {
    return 0;
  }
}

async function rollbackNetlify({ siteId, token }) {
  const api = 'https://api.netlify.com/api/v1';
  const headers = { Authorization: `Bearer ${token}` };
  const deploys = await axios.get(`${api}/sites/${siteId}/deploys?per_page=5`, { headers }).then((r) => r.data);
  const prodReady = deploys.filter((d) => d.state === 'ready' && d.context === 'production');
  if (prodReady.length < 2) throw new Error('No previous production deploy found');
  const previous = prodReady[1];
  await axios.post(`${api}/sites/${siteId}/deploys/${previous.id}/restore`, {}, { headers });
  return previous;
}

async function rollbackVercel({ token, projectId, orgId }) {
  try {
    execSync(`npx -y vercel@latest rollback --token ${token} --yes`, { stdio: 'inherit' });
    return { via: 'cli' };
  } catch (e) {
    throw new Error('Vercel rollback failed (CLI)');
  }
}

async function notifySlack(webhookUrl, text) {
  if (!webhookUrl) return;
  try { await axios.post(webhookUrl, { text }); } catch {}
}

async function notifyTelegram(botToken, chatId, text) {
  if (!botToken || !chatId) return;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try { await axios.post(url, { chat_id: chatId, text }); } catch {}
}

async function openGithubIssue(repo, token, title, body) {
  if (!repo || !token) return null;
  const url = `https://api.github.com/repos/${repo}/issues`;
  const res = await axios.post(url, { title, body }, { headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'zion-deploy-monitor' } }).catch(() => null);
  return res && res.data;
}

async function monitorOnce(config) {
  const {
    sentryOrg, sentryProject, sentryToken, release, environment,
    threshold, windowMinutes, provider,
    netlifySiteId, netlifyToken,
    vercelToken, vercelProjectId, vercelOrgId,
    slackWebhook, telegramToken, telegramChat, githubRepo, githubToken,
  } = config;

  let count = null;
  if (sentryOrg && sentryProject && sentryToken && release) {
    count = await fetchSentryErrorCount({ org: sentryOrg, project: sentryProject, token: sentryToken, release, environment, windowMinutes });
  }
  if (count === null) count = fallbackLocalErrorCount(windowMinutes);

  if (count >= threshold) {
    const header = `Rollback triggered: ${count} errors in ${windowMinutes}m (>= ${threshold}) for release ${release || 'unknown'}`;
    let rollbackInfo = '';
    try {
      if (provider === 'netlify') {
        const prev = await rollbackNetlify({ siteId: netlifySiteId, token: netlifyToken });
        rollbackInfo = `Netlify restored to deploy ${prev.id} (${prev.deploy_url})`;
      } else if (provider === 'vercel') {
        await rollbackVercel({ token: vercelToken, projectId: vercelProjectId, orgId: vercelOrgId });
        rollbackInfo = `Vercel rollback attempted via CLI`;
      } else {
        rollbackInfo = 'No rollback provider configured';
      }
    } catch (e) {
      rollbackInfo = `Rollback error: ${e.message}`;
    }

    const sentryLink = sentryOrg && sentryProject ? `https://sentry.io/organizations/${sentryOrg}/projects/${sentryProject}/?query=release%3A${encodeURIComponent(release || '')}` : '';
    const message = `${header}\n${rollbackInfo}\nEnv: ${environment || 'production'}\nTime: ${nowIso()}\n${sentryLink}`;

    await notifySlack(slackWebhook, message);
    await notifyTelegram(telegramToken, telegramChat, message);
    await openGithubIssue(githubRepo, githubToken, header, message);

    return { triggered: true, count };
  }

  return { triggered: false, count };
}

async function main() {
  const cfg = {
    sentryOrg: process.env.SENTRY_ORG,
    sentryProject: process.env.SENTRY_PROJECT,
    sentryToken: process.env.SENTRY_AUTH_TOKEN,
    release: process.env.SENTRY_RELEASE || process.env.VERCEL_GIT_COMMIT_SHA || process.env.COMMIT_REF,
    environment: process.env.SENTRY_ENV || process.env.NODE_ENV || 'production',
    threshold: Number(process.env.ERROR_THRESHOLD || 10),
    windowMinutes: Number(process.env.ERROR_WINDOW_MINUTES || 10),
    provider: process.env.ROLLBACK_PROVIDER || 'netlify',
    netlifySiteId: process.env.NETLIFY_SITE_ID,
    netlifyToken: process.env.NETLIFY_AUTH_TOKEN,
    vercelToken: process.env.VERCEL_TOKEN,
    vercelProjectId: process.env.VERCEL_PROJECT_ID,
    vercelOrgId: process.env.VERCEL_ORG_ID,
    slackWebhook: process.env.SLACK_WEBHOOK_URL,
    telegramToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChat: process.env.TELEGRAM_CHAT_ID,
    githubRepo: process.env.GITHUB_REPO,
    githubToken: process.env.GITHUB_TOKEN,
  };

  const totalMinutes = Number(process.env.MONITOR_MINUTES || 20);
  const intervalSec = Number(process.env.CHECK_INTERVAL_SECONDS || 60);
  const endTime = Date.now() + totalMinutes * 60 * 1000;

  console.log(`[monitor] Start (${totalMinutes}m, every ${intervalSec}s)`, { release: cfg.release, env: cfg.environment, threshold: cfg.threshold });

  while (Date.now() < endTime) {
    try {
      const r = await monitorOnce(cfg);
      console.log(`[monitor] checked: count=${r.count}, triggered=${r.triggered}`);
      if (r.triggered) break;
    } catch (e) {
      console.warn('[monitor] error', e.message);
    }
    await new Promise((res) => setTimeout(res, intervalSec * 1000));
  }

  console.log('[monitor] Done');
}

if (require.main === module) {
  main();
}