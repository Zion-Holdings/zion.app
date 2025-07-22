#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG_FILE = path.resolve(__dirname, '../logs/cursor-chat-watchdog.log');
const SOCKET_SERVER_CMD = [
  'node',
  [path.resolve(__dirname, 'test-socket-server.js')],
];
const AUTOMATION_CMD = [
  'node',
  [path.resolve(__dirname, 'cursor-chat-automation.js'), 'start'],
];
const CHECK_INTERVAL = 10000; // 10 seconds

let socketServerProc = null;
let automationProc = null;

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFileSync(LOG_FILE, line);
  console.log(line.trim());
}

function startSocketServer() {
  if (socketServerProc) return;
  log('Starting test socket server...');
  socketServerProc = spawn(SOCKET_SERVER_CMD[0], SOCKET_SERVER_CMD[1], {
    detached: true,
    stdio: 'ignore',
    env: { ...process.env, PORT: '3001' },
  });
  socketServerProc.unref();
}

function startAutomation() {
  if (automationProc) return;
  log('Starting cursor chat automation...');
  automationProc = spawn(AUTOMATION_CMD[0], AUTOMATION_CMD[1], {
    detached: true,
    stdio: 'ignore',
    env: { ...process.env, CURSOR_CHAT_SOCKET_URL: 'http://localhost:3001' },
  });
  automationProc.unref();
}

function isProcessRunning(name) {
  try {
    const out = require('child_process')
      .execSync(`pgrep -fl ${name} | grep -v grep`)
      .toString();
    return out.includes(name);
  } catch {
    return false;
  }
}

function checkAndRestart() {
  // Check socket server
  if (!isProcessRunning('test-socket-server.js')) {
    log('Test socket server not running. Restarting...');
    startSocketServer();
    socketServerProc = null;
  }
  // Check automation
  if (!isProcessRunning('cursor-chat-automation.js')) {
    log('Cursor chat automation not running. Restarting...');
    startAutomation();
    automationProc = null;
  }
}

log('Cursor Chat Watchdog started.');
startSocketServer();
startAutomation();

setInterval(checkAndRestart, CHECK_INTERVAL);
