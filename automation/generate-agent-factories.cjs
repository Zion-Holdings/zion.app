#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const LINK_REPORT_DIR = path.join(ROOT, 'data', 'reports', 'link-sentinel');
const EXTERNAL_REPORT_DIR = path.join(ROOT, 'data', 'reports', 'external-links');
const AGENTS_DIR = path.join(ROOT, 'automation', 'cursor-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(AGENTS_DIR);

function latestJson(dir) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort();
  if (!files.length) return null;
  const last = files[files.length - 1];
  try { return JSON.parse(fs.readFileSync(path.join(dir, last), 'utf8')); } catch { return null; }
}

function buildAgentPrompts(internalReport, externalReport) {
  const prompts = [];

  const internal = (internalReport && internalReport.changes) || [];
  const internalTasks = internal.slice(0, 50).map((c, idx) => ({
    id: `internal-fix-${idx + 1}`,
    description: `Update link in ${c.file} from ${c.from} to ${c.to}`,
    file: c.file,
    from: c.from,
    to: c.to,
  }));

  const externalBad = (externalReport && externalReport.results || []).filter((r) => !r.ok).slice(0, 50);
  const externalTasks = externalBad.map((r, idx) => ({
    id: `external-check-${idx + 1}`,
    description: `Investigate broken external link ${r.url} (status ${r.statusCode || 'n/a'}) and update or remove references`,
    url: r.url,
    statusCode: r.statusCode || 0,
  }));

  if (internalTasks.length) {
    prompts.push({
      id: `prompt-${Date.now()}-internal`,
      agentId: 'link-fixer',
      agentName: 'Link Fixer',
      conversationType: 'refactor',
      conversationId: `conv-${Date.now()}`,
      prompt: `You are Link Fixer. Apply safe internal link fixes suggested by the automated scanner. Perform targeted edits only. Validate routes exist.`,
      context: { tasks: internalTasks },
      timestamp: new Date().toISOString(),
      status: 'pending',
    });
  }

  if (externalTasks.length) {
    prompts.push({
      id: `prompt-${Date.now()}-external`,
      agentId: 'external-link-auditor',
      agentName: 'External Link Auditor',
      conversationType: 'maintenance',
      conversationId: `conv-${Date.now()}`,
      prompt: `You are External Link Auditor. Review broken external links and propose updates or removal. Prefer authoritative sources.`,
      context: { tasks: externalTasks },
      timestamp: new Date().toISOString(),
      status: 'pending',
    });
  }

  return prompts;
}

(function main() {
  const internalReport = latestJson(LINK_REPORT_DIR);
  const externalReport = latestJson(EXTERNAL_REPORT_DIR);
  const prompts = buildAgentPrompts(internalReport, externalReport);

  if (!prompts.length) {
    console.log('No prompts generated (no changes or broken links found).');
    return;
  }

  const filename = `prompts-${Date.now()}.json`;
  const outPath = path.join(AGENTS_DIR, filename);
  fs.writeFileSync(outPath, JSON.stringify(prompts, null, 2));
  console.log(`Agent factory prompts saved to ${outPath}`);
})();