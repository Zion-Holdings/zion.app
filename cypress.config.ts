import { defineConfig } from 'cypress';

// fs and path are no longer needed as getPort() is removed.

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:3000`, // Standard Next.js port
    supportFile: 'cypress/support/e2e.ts',
    experimentalModifyObstructiveThirdPartyCode: true,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml',
    toConsole: true,
  },
});
