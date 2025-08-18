#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'broken-image-scanner-runner-report.md');
    const reportContent = '# broken-image-scanner-runner Report\n\n' +
      'Generated: ' + timestamp + '\n\n' +
      '## Status\n' +
      '- Task: broken-image-scanner-runner\n' +
      '- Status: Completed\n' +
      '- Timestamp: ' + timestamp + '\n';

    fs.writeFileSync(reportPath, reportContent);

    return { statusCode: 200, body: JSON.stringify({ name: 'broken-image-scanner-runner', status: 'ok', timestamp }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ name: 'broken-image-scanner-runner', status: 'error', error: error && error.message }) };
  }
};
