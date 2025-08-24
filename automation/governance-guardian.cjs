#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function writeIfChanged(fp, content) {
  ensureDir(path.dirname(fp));
  if (fs.existsSync(fp)) {
    const cur = fs.readFileSync(fp, 'utf8');
    if (cur.trim() === content.trim()) return false;
  }
  fs.writeFileSync(fp, content, 'utf8');
  return true;
}

function main() {
  const changes = [];

  const year = new Date().getFullYear();
  const owner = process.env.GOV_OWNER || 'Zion Tech Solutions';

  const license = `MIT License\n\nCopyright (c) ${year} ${owner}\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\n...\n`;
  if (writeIfChanged(path.join(process.cwd(), 'LICENSE'), license)) changes.push('LICENSE');

  const security = `# Security Policy\n\n- Report vulnerabilities via GitHub Issues (private) or security@zion.example\n- We aim to triage within 48 hours and patch within 7 days.\n`;
  if (writeIfChanged(path.join(process.cwd(), 'SECURITY.md'), security)) changes.push('SECURITY.md');

  const coc = `# Code of Conduct\n\nWe pledge to make participation in our project a harassment-free experience.\nBe respectful. Assume good intent. No harassment, hate speech, or doxxing.\n`;
  if (writeIfChanged(path.join(process.cwd(), 'CODE_OF_CONDUCT.md'), coc)) changes.push('CODE_OF_CONDUCT.md');

  const contributing = `# Contributing\n\n- Fork, create a branch, commit with conventional commits, open PR.\n- Run \`npm ci && npm run lint && npm run build\` before PR.\n- Automation runs in CI will format and validate.\n`;
  if (writeIfChanged(path.join(process.cwd(), 'CONTRIBUTING.md'), contributing)) changes.push('CONTRIBUTING.md');

  const funding = `github: ["Zion-Holdings"]\nopen_collective: zion-collective\n`;
  if (writeIfChanged(path.join(process.cwd(), '.github', 'FUNDING.yml'), funding)) changes.push('.github/FUNDING.yml');

  console.log(changes.length ? `Governance files updated: ${changes.join(', ')}` : 'Governance files are up to date.');
}

main();