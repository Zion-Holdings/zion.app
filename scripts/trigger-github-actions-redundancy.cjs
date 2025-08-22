#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");

async function triggerWorkflows() {
  try {
    // Trigger backup workflows
    execSync('gh workflow run marketing-sync-backup.yml', { stdio: 'inherit' });
    execSync('gh workflow run sync-health-backup.yml', { stdio: 'inherit' });
    console.log('✅ Backup workflows triggered');
  } catch (error) {
    console.error('❌ Failed to trigger workflows:', error.message);
  }
}

if (require.main === module) {
  triggerWorkflows();
}

module.exports = { triggerWorkflows };
