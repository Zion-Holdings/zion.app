#!/usr/bin/env node;
import { spawn } from 'child_process';'
const hardhat = spawn('npx', ['hardhat', 'node'], {'  cwd: './dao/codebase','  stdio: 'inherit'});

const dev = spawn('npm', ['run', 'dev'], { stdio: 'inherit' });'
hardhat.on('close', code => {'  console.warn(`Hardhat node exited with code ${code}`);
});

dev.on('close', code => {'  console.warn(`Dev server exited with code ${code}`);
});
