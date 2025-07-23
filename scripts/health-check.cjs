// Simple wrapper to run the project health summary
const path = require('path')
const summaryPath = path.join(__dirname, 'project-health-summary.cjs');
require(summaryPath);
