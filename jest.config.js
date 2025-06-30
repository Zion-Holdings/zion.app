// jest.config.js
const nextJest = require('next/jest')

// Providing the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'], // Adjusted path
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Handle CSS imports (if you're not using CSS Modules)
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
    // Handle image imports
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // Handle module aliases (this will be automatically configured by next/jest)
    // However, if you have custom aliases in tsconfig.json that are not automatically picked up, add them here.
    // Example: '^@/components/(.*)$': '<rootDir>/src/components/$1',
    // Based on tsconfig.json:
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1', // Assuming most pages are in src/pages
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/types/(.*)$': ['<rootDir>/src/types/$1', '<rootDir>/types/$1'],
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/context/(.*)$': '<rootDir>/src/context/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1', // Added for @/lib/axios
    '^@/data/(.*)$': '<rootDir>/src/data/$1', // Added for @/data/categories etc.
    '^@/integrations/(.*)$': '<rootDir>/src/integrations/$1', // For supabase client
    '^@/layout/(.*)$': '<rootDir>/src/layout/$1',
    '^@/mobile/(.*)$': '<rootDir>/src/mobile/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    // Ensure shims and mocks are resolved
    'react-router-dom': '<rootDir>/src/shims/react-router-dom.ts',
    'next-cloudinary': '<rootDir>/types/next-cloudinary.d.ts', // Or a mock if types are not enough
    // Force ESM modules that Jest struggles with to be transformed
    "node_modules/(bson|other-esm-module)/.+\\.m?js$": "babel-jest",
  },
  transformIgnorePatterns: [
    '/node_modules/(?!bson|other-esm-module-to-transform)', // Adjust this list as needed
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/backend/', // Ignore backend tests for this Jest config
    '<rootDir>/supabase/' // Ignore supabase tests for this Jest config
  ],
  // Add more setup options before each test is run
  // setupFiles: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  verbose: true, // Added for more detailed test output
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
