module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { 
      presets: ['next/babel'],
      plugins: []
    }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@supabase|@sentry|@reown|@walletconnect|msw|bson|fetch-mock|react-markdown|d3-\\w+|internmap|delaunator|robust-predicates|@babel|next|uint8arrays|multiformats|axios|isows|devlop|micromark|mdast-util|unist-util|zwitch|longest-streak|markdown-table|mdurl|uc.micro|linkify-it|argparse)).+\\.(js|jsx|ts|tsx)$',
  ],
  moduleNameMapper: {
    // Handle CSS imports
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    
    // Fix path mappings with more specific ordering
    '^@/pages/api/(.*)$': '<rootDir>/pages/api/$1',
    '^@/pages/(.*)$': ['<rootDir>/pages/$1', '<rootDir>/src/pages/$1'],
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/utils/(?!devtools)(.*)$': '<rootDir>/src/utils/$1',
    '^@/context$': '<rootDir>/src/context/index.ts',
    '^@/context/(.*)$': '<rootDir>/src/context/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/data/(.*)$': '<rootDir>/src/data/$1',
    '^@/integrations/(.*)$': '<rootDir>/src/integrations/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/store$': '<rootDir>/src/store/index.ts',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/layout$': '<rootDir>/src/layout/index.ts',
    '^@/layout/(.*)$': '<rootDir>/src/layout/$1',
    '^@/routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@/mobile/(.*)$': '<rootDir>/src/mobile/$1',
    '^@/sdk/(.*)$': '<rootDir>/sdk/$1',
    '^@/mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^@/config/(.*)$': '<rootDir>/src/config/$1',
    '^@/middleware/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    
    // Special module mocks
    '^msw/node$': require.resolve('msw/node'),
    '^next/router$': 'next-router-mock',
    '^next/navigation$': '<rootDir>/tests/__mocks__/emptyModule.js',
    
    // Mock heavy libraries not needed for unit tests
    '^@reown/appkit(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@walletconnect/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^uint8arrays/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^multiformats/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^react-markdown$': '<rootDir>/tests/__mocks__/reactMarkdown.js',
    '^@/pages/(.*)\.jsx$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/Signup$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/signup$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/utils/devtools$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^scripts/watchdog$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^os-utils$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/api/points/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/api/users/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/Login.jsx$': '<rootDir>/tests/__mocks__/emptyModule.js',
  },
  
  // Test file patterns
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/tests/e2e/",
    "<rootDir>/tests/storybook/",
    "<rootDir>/supabase/functions/",
    "<rootDir>/plugins/wallet-connector/cypress/",
    "<rootDir>/pact/",
    "<rootDir>/tests/visual-regression.test.ts"
  ],
  
  // Coverage configuration
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/tests/',
    '<rootDir>/src/mocks/',
    '<rootDir>/src/types/',
    '<rootDir>/temp_essential_pages/',
  ],
  
  // Global configuration
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  
  // Module file extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  
  // Test timeout
  testTimeout: 30000,
  
  // Clear mocks between tests
  clearMocks: true,
  restoreMocks: true,
};
