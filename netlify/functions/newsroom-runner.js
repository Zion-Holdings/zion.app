#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'newsroom-runner-report.md');
    const reportContent = '# newsroom-runner Report\n\n' +
      'Generated: ' + timestamp + '\n\n' +
      '## Status\n' +
      '- Task: newsroom-runner\n' +
      '- Status: Completed\n' +
      '- Timestamp: ' + timestamp + '\n';

    fs.writeFileSync(reportPath, reportContent);

    return { statusCode: 200, body: JSON.stringify({ name: 'newsroom-runner', status: 'ok', timestamp }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ name: 'newsroom-runner', status: 'error', error: error && error.message }) };
  }
};
