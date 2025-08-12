const path = require('path');
const rootDir = __dirname; // repository root

// PM2 ecosystem emptied because these schedulers were migrated to GitHub Actions:
// - automation-guardian-scheduler -> .github/workflows/guardian-scheduler.yml
// - front-continuous-scheduler    -> .github/workflows/front-scheduler.yml
// Add back local-only services here if needed (e.g., file watchers requiring macOS APIs).

module.exports = {
  apps: []
};