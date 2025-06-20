module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }],
        ['@babel/preset-typescript', { allExtensions: true, isTSX: true }], // Added isTSX: true
        ['@babel/preset-react', { runtime: 'automatic' }]
      ],
      // plugins: ['babel-plugin-istanbul'], // Removed this line
      babelrc: false,
      configFile: false
    }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Keep ts/tsx here
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  testMatch: [ // More specific test match patterns
    "**/__tests__/**/*.test.[jt]s?(x)",
    "**/tests/**/*.test.[jt]s?(x)",
    // If you have tests directly within src, you might add:
    // "<rootDir>/src/**/__tests__/**/*.test.[jt]s?(x)",
    // "<rootDir>/src/**/*.test.[jt]s?(x)",
  ],
  testPathIgnorePatterns: [ // Ignore patterns
    "/node_modules/",
    "/cypress/",
    "/playwright/", // Assuming playwright tests might be in a root /playwright folder
    "tests/storybook/", // Explicitly ignore storybook visual tests
    "tests/visual-regression.test.ts", // Explicitly ignore this visual regression test
    "\\.spec\\.[jt]s?(x)$" // Convention for Playwright spec files, to avoid conflict if any
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    // 'vitest$': '<rootDir>/tests/vitest-mock.ts', // Removed vitest mock
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Next.js mocks
    '^next/router$': '<rootDir>/tests/__mocks__/next/router.js',
    '^next/image$': '<rootDir>/tests/__mocks__/next/image.js',
    '^next/link$': '<rootDir>/tests/__mocks__/next/link.js',
    '^next-auth/react$': '<rootDir>/tests/__mocks__/next-auth/react.js',
    '^@stripe/react-stripe-js$': '<rootDir>/tests/__mocks__/@stripe/react-stripe-js.js',
    '^@stripe/stripe-js$': '<rootDir>/tests/__mocks__/@stripe/stripe-js.js',
    '^next-cloudinary$': '<rootDir>/tests/__mocks__/next-cloudinary.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react-router-dom|@reown/appkit|@walletconnect/utils|bson|msw|@babel/runtime|@supabase/supabase-js|superjson|@tanstack/react-query|uint8arrays)/',
  ],
  roots: ['<rootDir>/__tests__', '<rootDir>/tests', '<rootDir>/src'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
