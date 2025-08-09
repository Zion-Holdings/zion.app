#!/usr/bin/env node

'use strict';

const https = require('https');
const { URL } = require('url');
const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'netlify-monitor.log');
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

async function requestJSON(method, urlString, headers) {
  const urlObj = new URL(urlString);
  const options = {
    method,
    hostname: urlObj.hostname,
    path: urlObj.pathname + (urlObj.search || ''),
    headers: headers || {},
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
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Invalid JSON response: ${e.message}`));
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function requestHEAD(urlString) {
  const urlObj = new URL(urlString);
  const options = {
    method: 'HEAD',
    hostname: urlObj.hostname,
    path: urlObj.pathname + (urlObj.search || ''),
  };
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      resolve(res.statusCode || 0);
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

async function checkLatestDeploy(apiToken, siteId) {
  const headers = { Authorization: `Bearer ${apiToken}` };
  const deploys = await requestJSON('GET', `https://api.netlify.com/api/v1/sites/${encodeURIComponent(siteId)}/deploys?per_page=1`, headers);
  if (!Array.isArray(deploys) || deploys.length === 0) {
    throw new Error('No deploys found for site');
  }
  const latest = deploys[0];
  const state = latest && latest.state ? latest.state : 'unknown';
  const deployId = latest && latest.id ? latest.id : 'unknown';
  const createdAt = latest && latest.created_at ? latest.created_at : 'unknown';
  return { state, deployId, createdAt, latest };
}

(async function main() {
  // Load optional local env file first
  const localEnv = loadEnvFromFile(path.join(__dirname, '..', '.env.netlify'));
  const env = { ...localEnv, ...process.env };

  const apiToken = env.NETLIFY_AUTH_TOKEN || '';
  const siteIdEnv = env.NETLIFY_SITE_ID || '';
  const siteNameEnv = env.NETLIFY_SITE_NAME || '';
  const siteUrl = env.NETLIFY_SITE_URL || '';

  if (!apiToken) {
    log('⚠️ NETLIFY_AUTH_TOKEN not set. Skipping Netlify status check.');
    process.exit(0); // soft-skip to avoid noisy failures when not configured
  }

  try {
    const siteId = await resolveSiteId(apiToken, siteIdEnv, siteNameEnv);
    if (!siteId) {
      log('❌ Unable to resolve Netlify site ID. Set NETLIFY_SITE_ID or NETLIFY_SITE_NAME.');
      process.exit(1);
    }

    const { state, deployId, createdAt } = await checkLatestDeploy(apiToken, siteId);
    log(`📦 Latest deploy ${deployId} at ${createdAt} → state=${state}`);

    // Optional site HEAD check when URL provided
    if (siteUrl) {
      try {
        const status = await requestHEAD(siteUrl);
        log(`🌐 HEAD ${siteUrl} → HTTP ${status}`);
      } catch (e) {
        log(`🌐 HEAD ${siteUrl} failed: ${e.message}`);
      }
    }

    if (state === 'ready') {
      log('✅ Netlify deploy is healthy.');
      process.exit(0);
    }
    if (state === 'building' || state === 'processing' || state === 'enqueued') {
      log('⏳ Netlify is currently building.');
      process.exit(0);
    }

    log('❌ Netlify deploy not healthy (state=' + state + ').');
    process.exit(1);
  } catch (err) {
    log(`❌ Error during Netlify check: ${err.message}`);
    process.exit(1);
  }
})();