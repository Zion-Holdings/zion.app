#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const mode = process.argv[2] || 'continuous';
const interval = process.argv[3] || '300000';

const script = path.join(__dirname, 'frontend-sync-autonomous-orchestrator.cjs');

const child = spawn('node', [script, mode, interval], { stdio: 'inherit' });

child.on('close', (code) => process.exit(code || 0));