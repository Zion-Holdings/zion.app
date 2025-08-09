#!/usr/bin/env node
import { execSync } from 'child_process';

const cmds = [
  'npm run ui-evolution:analyze',
  'npm run ui-evolution:factory',
  'npm run ui-evolution:beautify',
  'npm run responsive:analyze',
  'npm run frontend-sync:analyze',
  'npm run design:analyze',
  'npm run venture:analyze',
];

for (const cmd of cmds) {
  try { console.log('Running:', cmd); execSync(cmd, { stdio: 'inherit' }); }
  catch (e) { console.warn('Continuing after failure:', cmd); }
}
