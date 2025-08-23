import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  use: {
    baseURL: 'http://localhost:3000',
  },
  reporter: [
    ['list'],
    ['json', { outputFile: 'playwright-logs/test-results.json' }],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
  ],
});
