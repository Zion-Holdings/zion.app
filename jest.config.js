module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: './tsconfig.jest.json' // Point to the new Jest-specific tsconfig
    }],
    '^.+\\.m?(js|jsx)$': ['babel-jest', { presets: [['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }], ['@babel/preset-react', { runtime: 'automatic' }]], babelrc: false, configFile: false }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
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
  },
  roots: ['<rootDir>/__tests__', '<rootDir>/tests', '<rootDir>/src'], // Added <rootDir>/src in case tests live there
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
