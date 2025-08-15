#!/usr/bin/env node

'use strict';

const https = require('https');
const { URL } = require('url');
const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'netlify-status-checker.log');
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

async function checkSiteStatus(apiToken, siteId, siteName) {
  try {
    const resolvedSiteId = siteId || await resolveSiteId(apiToken, siteId, siteName);
    if (!resolvedSiteId) {
      throw new Error('Unable to resolve site ID');
    }

    const headers = { Authorization: `Bearer ${apiToken}` };
    const site = await requestJSON('GET', `https://api.netlify.com/api/v1/sites/${resolvedSiteId}`, headers);
    const deploys = await requestJSON('GET', `https://api.netlify.com/api/v1/sites/${resolvedSiteId}/deploys?per_page=5`, headers);

    return {
      site: {
        id: site.id,
        name: site.name,
        url: site.url,
        custom_domain: site.custom_domain,
        ssl_url: site.ssl_url,
        created_at: site.created_at,
        updated_at: site.updated_at
      },
      deploys: deploys.map(d => ({
        id: d.id,
        state: d.state,
        created_at: d.created_at,
        published_at: d.published_at,
        error_message: d.error_message,
        deploy_time: d.deploy_time
      })),
      status: {
        healthy: deploys.length > 0 && deploys[0].state === 'ready',
        latest_deploy: deploys[0]?.state || 'unknown',
        total_deploys: deploys.length,
        last_successful: deploys.find(d => d.state === 'ready')?.created_at
      }
    };
  } catch (error) {
    log(`Error checking site status: ${error.message}`);
    throw error;
  }
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

async function checkBuildHealth(apiToken, siteId, siteName) {
  try {
    const status = await checkSiteStatus(apiToken, siteId, siteName);
    
    // Analyze build health
    const health = {
      overall: 'healthy',
      issues: [],
      recommendations: []
    };

    if (!status.status.healthy) {
      health.overall = 'unhealthy';
      health.issues.push(`Latest deploy state: ${status.status.latest_deploy}`);
    }

    if (status.deploys.length === 0) {
      health.overall = 'warning';
      health.issues.push('No deploy history found');
      health.recommendations.push('Trigger initial build');
    }

    // Check for failed deploys
    const failedDeploys = status.deploys.filter(d => d.state === 'error');
    if (failedDeploys.length > 0) {
      health.overall = 'critical';
      health.issues.push(`${failedDeploys.length} failed deploys detected`);
      health.recommendations.push('Investigate build errors and fix issues');
    }

    // Check deploy frequency
    if (status.deploys.length > 1) {
      const latest = new Date(status.deploys[0].created_at);
      const previous = new Date(status.deploys[1].created_at);
      const hoursSinceLastDeploy = (Date.now() - latest.getTime()) / (1000 * 60 * 60);
      
      if (hoursSinceLastDeploy > 24) {
        health.recommendations.push('Consider more frequent deployments for better CI/CD');
      }
    }

    return { ...status, health };
  } catch (error) {
    log(`Error checking build health: ${error.message}`);
    throw error;
  }
}

(async function main() {
  const localEnv = loadEnvFromFile(path.join(__dirname, '..', '.env.netlify'));
  const env = { ...localEnv, ...process.env };

  const apiToken = env.NETLIFY_AUTH_TOKEN || '';
  const siteId = env.NETLIFY_SITE_ID || '';
  const siteName = env.NETLIFY_SITE_NAME || '';
  const siteUrl = env.NETLIFY_SITE_URL || '';

  if (!apiToken) {
    log('❌ NETLIFY_AUTH_TOKEN not set. Cannot check status.');
    process.exit(1);
  }

  try {
    log('🔍 Checking Netlify site status...');
    const health = await checkBuildHealth(apiToken, siteId, siteName);
    
    log(`📊 Site: ${health.site.name} (${health.site.url})`);
    log(`🏥 Overall Health: ${health.health.overall.toUpperCase()}`);
    log(`📦 Latest Deploy: ${health.status.latest_deploy}`);
    log(`📈 Total Deploys: ${health.status.total_deploys}`);
    
    if (health.health.issues.length > 0) {
      log('⚠️ Issues:');
      health.health.issues.forEach(issue => log(`  - ${issue}`));
    }
    
    if (health.health.recommendations.length > 0) {
      log('💡 Recommendations:');
      health.health.recommendations.forEach(rec => log(`  - ${rec}`));
    }

    // Exit with appropriate code for CI/CD
    if (health.health.overall === 'critical') {
      process.exit(1);
    } else if (health.health.overall === 'unhealthy') {
      process.exit(1);
    } else if (health.health.overall === 'warning') {
      process.exit(0); // Warning but not failing
    } else {
      process.exit(0); // Healthy
    }
    
  } catch (err) {
    log(`❌ Status check failed: ${err.message}`);
    process.exit(1);
  }
})();
