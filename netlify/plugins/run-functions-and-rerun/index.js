/* eslint-disable no-console */
const os = require('os');

const envFlagName = 'NETLIFY_RERUN_CHAIN';

/**
 * Returns true if this build was triggered by our own rerun chain.
 */
function isChainedRerun(env) {
  if (env[envFlagName] === '1') return true;
  if ((env.INCOMING_HOOK_TITLE || '').toLowerCase() === 'post-function-rerun') return true;
  return false;
}

function getSiteBaseUrl(env) {
  // Prefer DEPLOY_PRIME_URL during builds; fallback to URL
  return env.DEPLOY_PRIME_URL || env.DEPLOY_URL || env.URL;
}

function getBuildHookUrl(env) {
  // Expect BUILD_HOOK_URL to be configured in Netlify UI or env
  return env.BUILD_HOOK_URL || env.NETLIFY_BUILD_HOOK_URL || '';
}

function parseCsv(value) {
  return (value || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

async function listFunctions({ baseUrl }) {
  // There's no official list endpoint from build side. We can derive from functions directory passed via constants.
  // This plugin instead discovers functions by hitting /.netlify/functions/{name} for each known file list provided in constants.functionsSrc.
  // But constants don't list files. As a pragmatic alternative, we expect the project to expose an index function listing names when available.
  // Since that may not exist, we will scan from repository using the functions directory path passed by constants.
  throw new Error('Discovery from filesystem should be implemented by using constants.functionsSrc - wired in onSuccess.');
}

async function invokeFunction({ baseUrl, name, timeoutMs }) {
  const url = `${baseUrl}/.netlify/functions/${name}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { method: 'GET', signal: controller.signal });
    const text = await res.text();
    return { name, status: res.status, ok: res.ok, body: text };
  } catch (error) {
    return { name, status: 0, ok: false, body: String(error) };
  } finally {
    clearTimeout(timeout);
  }
}

async function runAllFunctions({ functionNames, baseUrl, concurrency, timeoutMs, filterInclude, filterExclude }) {
  const include = parseCsv(filterInclude);
  const exclude = new Set(parseCsv(filterExclude));
  const filtered = functionNames.filter((n) => (include.length ? include.includes(n) : true)).filter((n) => !exclude.has(n));

  if (filtered.length === 0) {
    console.log('No functions to invoke after filtering.');
    return [];
  }

  // simple concurrency limiter without deps
  const queue = [...filtered];
  const results = [];
  let active = 0;
  await new Promise((resolve) => {
    const runNext = () => {
      if (queue.length === 0 && active === 0) return resolve();
      while (active < concurrency && queue.length) {
        const name = queue.shift();
        active += 1;
        invokeFunction({ baseUrl, name, timeoutMs })
          .then((res) => results.push(res))
          .catch((err) => results.push({ name, ok: false, status: 0, body: String(err) }))
          .finally(() => {
            active -= 1;
            runNext();
          });
      }
    };
    runNext();
  });

  results.forEach((r) => {
    const statusEmoji = r.ok ? '✅' : '❌';
    console.log(`${statusEmoji} ${r.name} -> ${r.status}`);
  });
  return results;
}

async function triggerNextBuild({ buildHookUrl }) {
  if (!buildHookUrl) {
    console.log('No BUILD_HOOK_URL provided. Skipping rerun trigger.');
    return { ok: false, status: 0, body: 'BUILD_HOOK_URL missing' };
  }
  try {
    const res = await fetch(buildHookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ NETLIFY_RERUN_CHAIN: '1', reason: 'post-function-rerun' }),
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, body: text };
  } catch (error) {
    return { ok: false, status: 0, body: String(error) };
  }
}

module.exports = {
  name: 'run-functions-and-rerun',
  onSuccess: async ({ netlifyConfig, constants, inputs, utils }) => {
    const env = process.env;

    // Prevent infinite loop: if this build was triggered by our own hook, do not trigger again.
    if (isChainedRerun(env)) {
      console.log('Detected chained rerun build. Will invoke functions but skip triggering another build.');
    }

    const functionsDir = netlifyConfig.functions?.directory || constants.FUNCTIONS_SRC;
    const baseUrl = getSiteBaseUrl(env);

    if (!functionsDir) {
      console.log('No functions directory configured. Skipping function invocations.');
      return;
    }
    if (!baseUrl) {
      console.log('No site base URL available (DEPLOY_PRIME_URL/DEPLOY_URL/URL). Skipping function invocations.');
      return;
    }

    // Discover function names from filesystem: any file in functionsDir becomes a function. Strip extensions.
    const { readdirSync } = require('fs');
    let functionNames = [];
    try {
      const entries = readdirSync(functionsDir, { withFileTypes: true });
      functionNames = entries
        .filter((d) => d.isFile())
        .map((d) => d.name)
        .filter((n) => /\.(js|ts|mjs|cjs)$/.test(n))
        .map((n) => n.replace(/\.(js|ts|mjs|cjs)$/i, ''));
      functionNames = Array.from(new Set(functionNames));
    } catch (e) {
      console.log(`Failed to read functions directory ${functionsDir}: ${e}`);
      return;
    }

    const concurrency = Number(inputs.concurrency || os.cpus().length || 4);
    const timeoutMs = Number(inputs.timeoutMs || 240000); // 4 minutes per function

    await runAllFunctions({
      functionNames,
      baseUrl,
      concurrency,
      timeoutMs,
      filterInclude: inputs.include,
      filterExclude: inputs.exclude,
    });

    if (!isChainedRerun(env)) {
      const buildHookUrl = getBuildHookUrl(env);
      const result = await triggerNextBuild({ buildHookUrl });
      if (!result.ok) {
        utils.status.show({ title: 'Rerun build not triggered', summary: String(result.body) });
      } else {
        utils.status.show({ title: 'Triggered follow-up build', summary: String(result.status) });
      }
    } else {
      console.log('Skipping triggering follow-up build to avoid infinite loop.');
    }
  },
};