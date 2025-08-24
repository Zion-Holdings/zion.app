import fs from 'fs';
import path from 'path';
import cp from 'child_process';
import { setTimeout as delay } from 'timers/promises';
import OpenAI from 'openai';

const OPENAI_MODEL_TEST = process.env.OPENAI_TEST_MODEL || 'gpt-4o-mini';
const OPENAI_MODEL_FIX = process.env.OPENAI_FIX_MODEL || 'gpt-4o-mini';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function run(cmd, opts = {}) {
  return new Promise((resolve, reject) => {
    cp.exec(cmd, { maxBuffer: 10 * 1024 * 1024, ...opts }, (err, stdout, stderr) => {
      if (err) return resolve({ code: err.code ?? 1, stdout, stderr });
      resolve({ code: 0, stdout, stderr });
    });
  });
}

function readJsonSafe(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

async function generateTestFromError(errorContext) {
  const prompt = `You are an expert test generator. Given this error and codebase context, produce a minimal, deterministic test that reproduces the failure. Prefer Jest for frontend files (React/Next.js under pages/, components/, hooks/) and Mocha+Chai for backend (pages/api/, automation/, utils/ node scripts). Return a JSON with fields: framework (jest|mocha), filepath, testContent. Error/context:\n\n${errorContext}`;
  const res = await client.chat.completions.create({
    model: OPENAI_MODEL_TEST,
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.2,
  });
  const text = res.choices[0].message?.content?.trim() || '';
  try { return JSON.parse(text); } catch { return null; }
}

async function suggestFixFromFailure(errorContext, testFile, testOutput) {
  const prompt = `You are an expert bug fixer. Given this failing test and stack trace, propose an edit diff for the repository. Return a concise plan and a list of edits: array of { file, beforeSnippet, afterSnippet }.\n\nError/context:\n${errorContext}\n\nTest file: ${testFile}\n\nTest output:\n${testOutput}`;
  const res = await client.chat.completions.create({
    model: OPENAI_MODEL_FIX,
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
  });
  return res.choices[0].message?.content?.trim() || '';
}

async function ensureGitSetup() {
  await run('git config user.email "ci-bot@zion.ai"');
  await run('git config user.name "Zion CI Bot"');
}

async function createBranch(branch) {
  await run(`git checkout -b ${branch}`);
}

async function commitAll(message) {
  await run('git add -A');
  await run(`git commit -m ${JSON.stringify(message)}`);
}

async function openPR(title, body) {
  // Requires GH CLI configured in CI
  await run(`gh pr create --fill -t ${JSON.stringify(title)} -b ${JSON.stringify(body)}`);
}

async function runTests(framework) {
  if (framework === 'mocha') {
    return await run('npx mocha --opts test/mocha.opts');
  }
  return await run('npx jest --runInBand');
}

async function main() {
  const errorLogPath = process.env.ERROR_LOG_PATH || path.join(process.cwd(), 'automation_logs', 'latest-error.log');
  const errorContext = fs.existsSync(errorLogPath) ? fs.readFileSync(errorLogPath, 'utf8') : 'No error context available';

  const gen = await generateTestFromError(errorContext);
  if (!gen || !gen.filepath || !gen.testContent) {
    console.log('No test generated');
    return;
  }

  const abs = path.join(process.cwd(), gen.filepath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, gen.testContent, 'utf8');
  console.log('Generated test at', gen.filepath);

  const result = await runTests(gen.framework === 'mocha' ? 'mocha' : 'jest');
  console.log(result.stdout);
  console.error(result.stderr);

  if (result.code !== 0) {
    const fixSuggestion = await suggestFixFromFailure(errorContext, gen.filepath, result.stdout + '\n' + result.stderr);
    const branch = `fix/autotest-${Date.now()}`;
    await ensureGitSetup();
    await createBranch(branch);
    await commitAll(`test: add failing test for bug\n\n${gen.filepath}`);
    await fs.promises.writeFile(path.join(process.cwd(), 'automation_logs', `fix-suggestion-${Date.now()}.md`), fixSuggestion, 'utf8');
    await commitAll('chore: attach fix suggestion');
    if (process.env.OPEN_PR !== 'false') {
      await openPR('Auto-generated test and fix suggestion', fixSuggestion);
    }
  } else {
    console.log('Test passed. No action required.');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});