import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.URL || 'http://localhost:5173',
    supportFile: 'cypress/support/e2e.ts',
    experimentalModifyObstructiveThirdPartyCode: true,
  },
});
