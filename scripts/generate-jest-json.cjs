#!/usr/bin/env node
/**
 * Run Jest programmatically and emit a timestamped JSON result file in test-results/.
 */
const { runCLI } = require('jest');
const fs = require('fs');
const path = require('path');

(async () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputDir = path.resolve(__dirname, '..', 'test-results');
  const outputFile = path.join(outputDir, `jest-results-${timestamp}.json`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const { results } = await runCLI(
    {
      json: true,
      outputFile,
      runInBand: true,
    },
    [path.resolve(__dirname, '..')]
  );

  console.log(`Jest tests completed. Success: ${results.success}. Report written to ${outputFile}`);
})(); 