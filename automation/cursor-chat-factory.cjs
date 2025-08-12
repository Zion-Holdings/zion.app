#!/usr/bin/env node
// Minimal factory stub for Cursor Chat Automation
const fs = require('fs');
const path = require('path');

function log(message) {
  process.stdout.write(`[cursor-chat:factory] ${message}\n`);
}

try {
  const publicDir = path.join(process.cwd(), 'public', 'automation');
  fs.mkdirSync(publicDir, { recursive: true });

  const registryPath = path.join(publicDir, 'content-registry.json');
  let registry = { items: [] };
  if (fs.existsSync(registryPath)) {
    try {
      registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
    } catch {}
  }

  const timestamp = new Date().toISOString();
  const entry = { id: `cursor-chat-${timestamp}`, type: 'cursor-chat', timestamp };
  registry.items.push(entry);
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
  log(`Updated registry with entry ${entry.id}`);
  process.exit(0);
} catch (error) {
  console.error('[cursor-chat:factory] Error:', error.message);
  // Do not fail CI; exit gracefully
  process.exit(0);
}


