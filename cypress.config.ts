import { defineConfig } from 'cypress';

// fs and path are no longer needed as getPort() is removed.

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
  },
});
