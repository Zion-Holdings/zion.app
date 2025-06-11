import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.URL || 'http://localhost:5173',
    supportFile: 'cypress/support/e2e.ts',
    experimentalModifyObstructiveThirdPartyCode: true,
    env: {
      CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com',
      CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User',
    },
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml',
    toConsole: true,
  },
});
