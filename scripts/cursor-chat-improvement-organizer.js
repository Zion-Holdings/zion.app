#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const LOG_FILE = path.resolve(__dirname, '../logs/cursor-chat-automation.log');
const TODO_FILE = path.resolve(__dirname, '../logs/cursor-chat-todos.md');
const KEYWORDS = ['improve', 'fix', 'bug', 'feature', 'todo', 'next step'];

function appendTodo(line) {
  const todo = `- [ ] ${new Date().toISOString()} | ${line.trim()}`;
  fs.appendFileSync(TODO_FILE, todo + '\n');
  console.log('TODO added:', todo);
}

function processLine(line) {
  const lower = line.toLowerCase();
  if (KEYWORDS.some((kw) => lower.includes(kw))) {
    appendTodo(line);
  }
}

function tailLog() {
  let fileSize = 0;
  if (fs.existsSync(LOG_FILE)) {
    fileSize = fs.statSync(LOG_FILE).size;
  }
  const stream = fs.createReadStream(LOG_FILE, {
    encoding: 'utf8',
    start: fileSize,
  });
  const rl = readline.createInterface({ input: stream });
  rl.on('line', processLine);
  fs.watchFile(LOG_FILE, { interval: 1000 }, () => {
    const newSize = fs.statSync(LOG_FILE).size;
    if (newSize > fileSize) {
      const diffStream = fs.createReadStream(LOG_FILE, {
        encoding: 'utf8',
        start: fileSize,
        end: newSize,
      });
      const diffRl = readline.createInterface({ input: diffStream });
      diffRl.on('line', processLine);
      fileSize = newSize;
    }
  });
}

tailLog();
console.log('Cursor Chat Improvement Organizer started. Watching for TODOs...'); 