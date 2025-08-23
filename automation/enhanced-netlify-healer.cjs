#!/usr/bin/env node

'use strict';

const https = require('https');
const { URL } = require('url');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'enhanced-netlify-healer.log');
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

async function fetchDeploys(apiToken, siteId, perPage = 10) {
  const headers = { Authorization: `Bearer ${apiToken}` };
  const list = await requestJSON('GET', `https://api.netlify.com/api/v1/sites/${encodeURIComponent(siteId)}/deploys?per_page=${perPage}`, headers);
  return Array.isArray(list) ? list : [];
}

async function fetchDeployLogs(apiToken, deployId) {
  const headers = { Authorization: `Bearer ${apiToken}` };
  try {
    const logs = await requestJSON('GET', `https://api.netlify.com/api/v1/deploys/${encodeURIComponent(deployId)}/log`, headers);
    return logs;
  } catch (error) {
    log(`⚠️ Could not fetch deploy logs: ${error.message}`);
    return null;
  }
}

function analyzeBuildFailure(logs) {
  if (!logs || !logs.raw) return { type: 'unknown', confidence: 0, suggestedFix: 'Unknown build failure' };
  
  const logContent = logs.raw.toLowerCase();
  const analysis = {
    type: 'unknown',
    confidence: 0,
    suggestedFix: 'Unknown build failure',
    details: []
  };
  
  // React component export issues
  if (logContent.includes('page without a react component as default export') || 
      logContent.includes('page-without-valid-component')) {
    analysis.type = 'react_component_export';
    analysis.confidence = 95;
    analysis.suggestedFix = 'Fix React component exports in pages directory';
    analysis.details.push('Missing export default statements in page files');
    analysis.details.push('Files may contain only JSX without proper component structure');
  }
  
  // Missing out directory
  if (logContent.includes('deploy directory \'out\' does not exist') ||
      logContent.includes('build script returned non-zero exit code')) {
    analysis.type = 'missing_out_directory';
    analysis.confidence = 90;
    analysis.suggestedFix = 'Build script failed to create out directory';
    analysis.details.push('Export script may have failed');
    analysis.details.push('Check for React component structure issues');
  }
  
  // Next.js build failures
  if (logContent.includes('build optimization failed') ||
      logContent.includes('compilation failed')) {
    analysis.type = 'nextjs_build_failure';
    analysis.confidence = 85;
    analysis.suggestedFix = 'Fix Next.js build errors';
    analysis.details.push('Check for syntax errors in page files');
    analysis.details.push('Verify all imports and exports');
  }
  
  // Dependency issues
  if (logContent.includes('module not found') ||
      logContent.includes('cannot resolve module')) {
    analysis.type = 'dependency_issue';
    analysis.confidence = 80;
    analysis.suggestedFix = 'Fix dependency resolution issues';
    analysis.details.push('Check package.json and node_modules');
    analysis.details.push('Run npm install to resolve dependencies');
  }
  
  // Environment configuration issues
  if (logContent.includes('environment variable') ||
      logContent.includes('configuration error')) {
    analysis.type = 'environment_config';
    analysis.confidence = 75;
    analysis.suggestedFix = 'Fix environment configuration';
    analysis.details.push('Check Netlify environment variables');
    analysis.details.push('Verify build configuration');
  }
  
  return analysis;
}

async function attemptAutoFix(analysis, apiToken, siteId) {
  log(`🔧 Attempting auto-fix for: ${analysis.type}`);
  
  try {
    switch (analysis.type) {
      case 'react_component_export':
        return await fixReactComponentExports();
      
      case 'missing_out_directory':
        return await fixBuildScript();
      
      case 'nextjs_build_failure':
        return await fixNextJSBuild();
      
      case 'dependency_issue':
        return await fixDependencies();
      
      default:
        log(`⚠️ No auto-fix available for: ${analysis.type}`);
        return false;
    }
  } catch (error) {
    log(`❌ Auto-fix failed: ${error.message}`);
    return false;
  }
}

async function fixReactComponentExports() {
  log('🔧 Running React component validation...');
  try {
    const validatorPath = path.join(__dirname, 'react-component-validator.cjs');
    if (fs.existsSync(validatorPath)) {
      execSync(`node ${validatorPath}`, { stdio: 'pipe' });
      log('✅ React component validation completed');
      return true;
    } else {
      log('⚠️ React component validator not found');
      return false;
    }
  } catch (error) {
    log(`❌ React component validation failed: ${error.message}`);
    return false;
  }
}

async function fixBuildScript() {
  log('🔧 Checking build script configuration...');
  try {
    const preflightPath = path.join(__dirname, 'build-preflight-checker.cjs');
    if (fs.existsSync(preflightPath)) {
      execSync(`node ${preflightPath}`, { stdio: 'pipe' });
      log('✅ Build preflight check completed');
      return true;
    } else {
      log('⚠️ Build preflight checker not found');
      return false;
    }
  } catch (error) {
    log(`❌ Build preflight check failed: ${error.message}`);
    return false;
  }
}

async function fixNextJSBuild() {
  log('🔧 Attempting to fix Next.js build issues...');
  try {
    // Clean build artifacts
    execSync('rm -rf .next out', { stdio: 'pipe' });
    log('✅ Cleaned build artifacts');
    
    // Run preflight check
    const preflightPath = path.join(__dirname, 'build-preflight-checker.cjs');
    if (fs.existsSync(preflightPath)) {
      execSync(`node ${preflightPath}`, { stdio: 'pipe' });
      log('✅ Preflight check after cleanup');
    }
    
    return true;
  } catch (error) {
    log(`❌ Next.js build fix failed: ${error.message}`);
    return false;
  }
}

async function fixDependencies() {
  log('🔧 Attempting to fix dependency issues...');
  try {
    // Clean install
    execSync('rm -rf node_modules package-lock.json', { stdio: 'pipe' });
    execSync('npm install', { stdio: 'pipe' });
    log('✅ Dependencies reinstalled');
    return true;
  } catch (error) {
    log(`❌ Dependency fix failed: ${error.message}`);
    return false;
  }
}

async function restoreDeploy(apiToken, deployId) {
  const headers = { Authorization: `Bearer ${apiToken}` };
  try {
    await requestJSON('POST', `https://api.netlify.com/api/v1/deploys/${encodeURIComponent(deployId)}/restore`, headers);
    log(`♻️ Restored deploy ${deployId}`);
    return true;
  } catch (error) {
    log(`❌ Failed to restore deploy: ${error.message}`);
    return false;
  }
}

async function triggerBuild(apiToken, siteId, buildHook) {
  if (buildHook && buildHook.trim()) {
    try {
      await post(buildHook.trim());
      log('🚀 Triggered build via build hook');
      return 'build_hook';
    } catch (error) {
      log(`⚠️ Build hook failed: ${error.message}`);
    }
  }
  
  try {
    const headers = { Authorization: `Bearer ${apiToken}` };
    await requestJSON('POST', `https://api.netlify.com/api/v1/sites/${encodeURIComponent(siteId)}/builds`, headers, {});
    log('🚀 Triggered build via API');
    return 'api_build';
  } catch (error) {
    log(`❌ API build trigger failed: ${error.message}`);
    throw error;
  }
}

async function main() {
  const localEnv = loadEnvFromFile(path.join(__dirname, '..', '.env.netlify'));
  const env = { ...localEnv, ...process.env };

  const apiToken = env.NETLIFY_AUTH_TOKEN || '';
  const siteIdEnv = env.NETLIFY_SITE_ID || '';
  const siteNameEnv = env.NETLIFY_SITE_NAME || '';
  const buildHook = env.NETLIFY_BUILD_HOOK || '';

  if (!apiToken) {
    log('⚠️ NETLIFY_AUTH_TOKEN not set. Skipping enhanced auto-heal.');
    process.exit(0);
  }

  try {
    const siteId = await resolveSiteId(apiToken, siteIdEnv, siteNameEnv);
    if (!siteId) {
      log('❌ Unable to resolve Netlify site ID.');
      process.exit(1);
    }

    log(`🔍 Analyzing deploys for site: ${siteId}`);
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

    // Analyze the failed deploy
    log('🔍 Analyzing build failure...');
    const logs = await fetchDeployLogs(apiToken, latest.id);
    const analysis = analyzeBuildFailure(logs);
    
    log(`📊 Failure analysis:`);
    log(`   Type: ${analysis.type}`);
    log(`   Confidence: ${analysis.confidence}%`);
    log(`   Suggested fix: ${analysis.suggestedFix}`);
    if (analysis.details.length > 0) {
      analysis.details.forEach(detail => log(`   Detail: ${detail}`));
    }

    // Attempt auto-fix if confidence is high enough
    if (analysis.confidence >= 80) {
      log('🔧 High confidence failure detected. Attempting auto-fix...');
      const fixSuccess = await attemptAutoFix(analysis, apiToken, siteId);
      
      if (fixSuccess) {
        log('✅ Auto-fix successful. Triggering rebuild...');
        const mode = await triggerBuild(apiToken, siteId, buildHook);
        log(`🚀 Rebuild triggered via ${mode}.`);
        process.exit(0);
      }
    }

    // Fallback: attempt restore to last good deploy
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

    // Final fallback: trigger a rebuild
    try {
      const mode = await triggerBuild(apiToken, siteId, buildHook);
      log(`🚀 Triggered rebuild via ${mode}.`);
      process.exit(0);
    } catch (e) {
      log(`❌ Failed to trigger rebuild: ${e.message}`);
      process.exit(1);
    }
  } catch (err) {
    log(`❌ Enhanced auto-heal error: ${err.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  analyzeBuildFailure,
  attemptAutoFix,
  fetchDeployLogs
};