#!/usr/bin/env node

/**
 * Optional Himalaya send fallback when `gog` is unavailable.
 * Returns the same command the agent would use, optionally prints it for one-click send.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const HIMALAYA = process.platform === 'win32'
  ? 'C:\\Users\\Zion\\.local\\bin\\himalaya.exe'
  : 'himalaya';

function quote(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function buildSendCommand(to, subject, body, account = 'outlook') {
  const escapedSubject = quote(subject);
  const escapedBody = quote(body);
  // Write body to temp file to avoid shell quoting issues.
  const tmp = path.join(process.cwd(), 'automation', 'reports', `himalaya-body-${Date.now()}.txt`);
  fs.writeFileSync(tmp, body, 'utf8');
  return `${HIMALAYA} -a ${account} message send --to ${quote(to)} --subject ${escapedSubject} --body-file ${tmp}`;
}

function sendWithHimalaya(to, subject, body) {
  const account = 'outlook';
  const cmd = buildSendCommand(to, subject, body, account);
  console.log('[HIMALAYA] would run:\n' + cmd);
  try {
    const out = execSync(cmd, { encoding: 'utf8', timeout: 120000 });
    console.log('[HIMALAYA] output:', out);
    return out;
  } catch (e) {
    console.error('[HIMALAYA] send failed:', e.message);
    return null;
  }
}

module.exports = { buildSendCommand, sendWithHimalaya };
