#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const dotGithubDir = path.join(repoRoot, ".github");
const workflowsDir = path.join(dotGithubDir, "workflows");

function isWorkflowFile(content) {
  // Lightweight heuristic: contains top-level 'on:' and 'jobs:' keys.
  return /\n?on:\s*[\s\S]*\n/.test(content) && /\n?jobs:\s*[\s\S]*\n/.test(content);
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
}

function moveOrDeduplicate(srcFile, destFile) {
  const src = read(srcFile);
  const looksWorkflow = isWorkflowFile(src);
  if (!looksWorkflow) return { skipped: true, reason: "not_a_workflow" };
  if (!fs.existsSync(destFile)) {
    write(destFile, src);
    fs.unlinkSync(srcFile);
    return { moved: true };
  }
  const dst = read(destFile);
  if (dst === src) {
    fs.unlinkSync(srcFile);
    return { duplicate_removed: true };
  }
  // Different contents: keep both with a migrated suffix
  const base = path.basename(destFile, path.extname(destFile));
  const ext = path.extname(destFile) || ".yml";
  let alt = path.join(path.dirname(destFile), `${base}.migrated${ext}`);
  let n = 1;
  while (fs.existsSync(alt)) {
    alt = path.join(path.dirname(destFile), `${base}.migrated.${n}${ext}`);
    n++;
  }
  write(alt, src);
  fs.unlinkSync(srcFile);
  return { migrated_with_new_name: path.basename(alt) };
}

function main() {
  ensureDir(workflowsDir);
  const entries = fs.readdirSync(dotGithubDir);
  const results = [];
  for (const name of entries) {
    const p = path.join(dotGithubDir, name);
    if (name === "workflows" || name === "workflows.disabled") continue;
    if (!fs.statSync(p).isFile()) continue;
    if (!name.endsWith(".yml") && !name.endsWith(".yaml")) continue;
    const dest = path.join(workflowsDir, name);
    const res = moveOrDeduplicate(p, dest);
    results.push({ file: name, ...res });
  }
  console.log(JSON.stringify({ migrated: results }, null, 2));
}

main();


