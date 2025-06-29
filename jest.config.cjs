module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!bson|fetch-mock|react-markdown|d3-\\w+|internmap|delaunator|robust-predicates|@babel|next|@supabase|@sentry|@reown/appkit|axios).+\\.(js|jsx|ts|tsx)$',
  ],
  moduleNameMapper: {
    // Handle CSS imports (if you're not using CSS modules)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    // Alias for @/components, @/utils, etc.
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/context/(.*)$': '<rootDir>/src/context/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/data/(.*)$': '<rootDir>/src/data/$1',
    '^@/integrations/(.*)$': '<rootDir>/src/integrations/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@/layout/(.*)$': '<rootDir>/src/layout/$1',
    '^@/mobile/(.*)$': '<rootDir>/src/mobile/$1',
    '^@/sdk/(.*)$': '<rootDir>/sdk/$1', // if you have an sdk folder at root
    '^@/mocks/(.*)$': '<rootDir>/src/mocks/$1', // if you have mocks folder in src
    // msw/node specific mapping
    '^msw/node$': require.resolve('msw/node'),
  },
  // Add this if Vitest types are conflicting or if you want to be explicit
  globals: {
    'ts-jest': {
      // specify ts-jest options here
    },
  },
  // Necessary for __tests__ directories not directly under src or if tests are in .js/.jsx
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/tests/e2e/",
    "<rootDir>/tests/storybook/", // Assuming all storybook tests might be playwright/visual
    "<rootDir>/supabase/functions/",
    "<rootDir>/plugins/wallet-connector/cypress/",
    "<rootDir>/pact/"
  ],
  // Coverage reporting
  collectCoverage: false, // Temporarily disable to check babel-plugin-istanbul issue
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    // Already covered by testPathIgnorePatterns, but good to have for clarity if coverage is re-enabled
    '<rootDir>/tests/e2e/',
    '<rootDir>/tests/storybook/',
    '<rootDir>/supabase/functions/',
    '<rootDir>/plugins/wallet-connector/cypress/',
    '<rootDir>/pact/',
    // Other specific files/folders to ignore for coverage
    '<rootDir>/src/mocks/',
    '<rootDir>/src/types/',
    '<rootDir>/src/lib/analytics.ts',
    '<rootDir>/src/utils/sentry.ts',
    '<rootDir>/src/utils/supabase/client.ts',
    '<rootDir>/src/utils/supabase/server.ts',
    '<rootDir>/src/utils/supabase/middleware.ts',
    '<rootDir>/src/integrations/supabase/client.ts',
    '<rootDir>/src/integrations/mailchimp.ts',
    '<rootDir>/src/integrations/reown.ts',
    '<rootDir>/src/i18n/',
    '<rootDir>/src/middleware.ts',
    '<rootDir>/src/app/api/',
    '.*.test.js',
    '.*.test.ts',
    '.*.test.tsx',
    '<rootDir>/src/components/ui/',
    '<rootDir>/src/shims/',
    '<rootDir>/temp_essential_pages/',
  ],
};
