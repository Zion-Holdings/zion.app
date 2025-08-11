#!/usr/bin/env node

'use strict';

const https = require('https');
const { URL } = require('url');
const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'netlify-auto-healer.log');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function loadEnvFromFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split(/\r?\n/).reduce((acc, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return acc;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) return acc;
      const key = trimmed.slice(0, eqIdx).trim();
      const value = trimmed.slice(eqIdx + 1).trim().replace(/^"|"$/g, '');
      if (key) acc[key] = value;
      return acc;
    }, {});
  } catch {
    return {};
  }
}

async function requestJSON(method, urlString, headers, bodyObj) {
  const urlObj = new URL(urlString);
  const body = bodyObj ? JSON.stringify(bodyObj) : undefined;
  const options = {
    method,
    hostname: urlObj.hostname,
    path: urlObj.pathname + (urlObj.search || ''),
    headers: Object.assign({}, headers || {}, body ? { 'content-type': 'application/json', 'content-length': Buffer.byteLength(body) } : {}),
  };
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        const statusCode = res.statusCode || 0;
        if (statusCode < 200 || statusCode >= 300) {
          return reject(new Error(`HTTP ${statusCode}: ${data.slice(0, 200)}`));
        }
        try {
          resolve(data ? JSON.parse(data) : {});
        } catch (e) {
          resolve({ raw: data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function post(urlString, headers) {
  const urlObj = new URL(urlString);
  const options = { method: 'POST', hostname: urlObj.hostname, path: urlObj.pathname + (urlObj.search || ''), headers: headers || {} };
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      const status = res.statusCode || 0;
      if (status >= 200 && status < 300) resolve(status);
      else reject(new Error(`HTTP ${status}`));
    });
    req.on('error', reject);
    req.end();
  });
}

async function resolveSiteId(apiToken, siteId, siteName) {
  if (siteId && siteId.trim()) return siteId.trim();
  if (!siteName || !siteName.trim()) return '';
  const headers = { Authorization: `Bearer ${apiToken}` };
  const sites = await requestJSON('GET', `https://api.netlify.com/api/v1/sites?name=${encodeURIComponent(siteName.trim())}`, headers);
  if (!Array.isArray(sites) || sites.length === 0) return '';
  const exact = sites.find((s) => s.name === siteName.trim() || s.custom_domain === siteName.trim());
  const chosen = exact || sites[0];
  return chosen && chosen.id ? chosen.id : '';
}

async function fetchDeploys(apiToken, siteId, perPage = 5) {
  const headers = { Authorization: `Bearer ${apiToken}` };
  const list = await requestJSON('GET', `https://api.netlify.com/api/v1/sites/${encodeURIComponent(siteId)}/deploys?per_page=${perPage}`, headers);
  return Array.isArray(list) ? list : [];
}

async function restoreDeploy(apiToken, deployId) {
  const headers = { Authorization: `Bearer ${apiToken}` };
  // Netlify API: POST /api/v1/deploys/:deploy_id/restore
  await requestJSON('POST', `https://api.netlify.com/api/v1/deploys/${encodeURIComponent(deployId)}/restore`, headers);
}

async function triggerBuild(apiToken, siteId, buildHook) {
  if (buildHook && buildHook.trim()) {
    await post(buildHook.trim());
    return 'build_hook';
  }
  const headers = { Authorization: `Bearer ${apiToken}` };
  // Netlify API: POST /api/v1/sites/:site_id/builds
  await requestJSON('POST', `https://api.netlify.com/api/v1/sites/${encodeURIComponent(siteId)}/builds`, headers, {});
  return 'api_build';
}

(async function main() {
  const localEnv = loadEnvFromFile(path.join(__dirname, '..', '.env.netlify'));
  const env = { ...localEnv, ...process.env };

  const apiToken = env.NETLIFY_AUTH_TOKEN || '';
  const siteIdEnv = env.NETLIFY_SITE_ID || '';
  const siteNameEnv = env.NETLIFY_SITE_NAME || '';
  const buildHook = env.NETLIFY_BUILD_HOOK || '';

  if (!apiToken) {
    log('⚠️ NETLIFY_AUTH_TOKEN not set. Skipping auto-heal.');
    process.exit(0);
  }

  try {
    const siteId = await resolveSiteId(apiToken, siteIdEnv, siteNameEnv);
    if (!siteId) {
      log('❌ Unable to resolve Netlify site ID.');
      process.exit(1);
    }

    const deploys = await fetchDeploys(apiToken, siteId, 5);
    if (deploys.length === 0) {
      log('ℹ️ No deploy history found. Triggering build.');
      const mode = await triggerBuild(apiToken, siteId, buildHook);
      log(`🚀 Triggered new build via ${mode}.`);
      process.exit(0);
    }

    const latest = deploys[0];
    const state = latest.state || 'unknown';
    log(`📦 Latest deploy ${latest.id} → state=${state}`);

    if (state === 'ready' || state === 'building' || state === 'processing' || state === 'enqueued') {
      log('✅ No heal action required.');
      process.exit(0);
    }

    // Attempt restore to last good deploy first
    const lastGood = deploys.find((d) => d.state === 'ready');
    if (lastGood) {
      try {
        await restoreDeploy(apiToken, lastGood.id);
        log(`♻️ Restored last healthy deploy ${lastGood.id}.`);
        process.exit(0);
      } catch (e) {
        log(`⚠️ Restore failed: ${e.message}`);
      }
    }

    // Fallback: trigger a rebuild
    try {
      const mode = await triggerBuild(apiToken, siteId, buildHook);
      log(`🚀 Triggered rebuild via ${mode}.`);
      process.exit(0);
    } catch (e) {
      log(`❌ Failed to trigger rebuild: ${e.message}`);
      process.exit(1);
    }
  } catch (err) {
    log(`❌ Auto-heal error: ${err.message}`);
    process.exit(1);
  }
})();