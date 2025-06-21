module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Use v8 coverage provider to avoid issues with babel-plugin-istanbul
  coverageProvider: 'v8',

  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }],
        ['@babel/preset-typescript', { allExtensions: true, isTSX: true }], // Added isTSX: true
        ['@babel/preset-react', { runtime: 'automatic' }]
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ],
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
    "tests/storybook/", // Exclude storybook visual tests
    "\\.spec\\.[jt]s?(x)$", // Convention for Playwright spec files, to avoid conflict if any
    // Attempt to ignore specific vitest files or directories
    "__tests__/utils/validateEnv.test.ts",
    "src/hooks/auth/__tests__/useEmailAuth.test.ts",
    "tests/Accessibility.test.tsx", // This one imports vitest
    "tests/apiClient.msw.test.ts", // This one imports vitest
    "tests/apiClient.test.ts", // This one imports vitest
    "tests/authController.test.ts", // This one imports vitest
    "tests/cartSlice.test.ts", // This one imports vitest
    "tests/CategoryListingPageLoading.test.tsx", // This one imports vitest
    "tests/devtools.test.ts", // This one imports vitest
    "tests/HeroSection.test.tsx", // This one imports vitest (indirectly via router mock)
    "tests/LoginForm.test.tsx", // This one imports vitest
    "tests/LoginFormFetch.test.tsx", // This one imports vitest
    "tests/Login.test.tsx", // This one imports vitest
    "tests/NewPostRoute.test.tsx", // This one imports vitest
    "tests/NavLink.test.tsx", // This one imports vitest
    "tests/PointsSystem.test.ts", // This one imports vitest
    "tests/ProductActions.test.tsx", // This one imports vitest
    "tests/RegisterApi.jest.test.ts", // This one imports vitest
    "tests/ServicesNavigation.test.tsx", // This one imports vitest
    "tests/SyncRoute.test.ts", // This one imports vitest
    "tests/supabaseSafeFetch.test.ts", // This one imports vitest
    "__tests__/api/user-id.test.ts", // This one imports vitest
    "__tests__/api/user-me.test.ts", // This one imports vitest
    "__tests__/api/reset-password.test.ts", // This one imports vitest
    "__tests__/auth/register.test.ts", // This one imports vitest
    "__tests__/components/EnhancedNewsletterForm.test.tsx", // This one imports vitest
    "__tests__/pages/talent/[id].test.tsx", // This one imports vitest
    "tests/authService.test.ts",
    "tests/apiErrorHandler.test.ts",
    "tests/TalentProfilePage.test.tsx",
    "tests/ServiceTypeStep.test.tsx",
    "tests/visual-regression.test.ts"
  ],
  moduleNameMapper: {
    // Specific aliases first
    '^@/pages/api/(.*)$': '<rootDir>/pages/api/$1', // Added for root pages/api
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/context/(.*)$': '<rootDir>/src/context/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/config/(.*)$': '<rootDir>/src/config/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/integrations/(.*)$': '<rootDir>/src/integrations/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    // General alias last
    '^@/(.*)$': '<rootDir>/src/$1',
    'react-router-dom$': '<rootDir>/src/shims/react-router-dom.ts',
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
    '/node_modules/(?!(@reown/.*|@walletconnect/.*|uint8arrays/.*|multiformats/.*|bson|mongodb|mongoose|lit|lit-html|lit-element|@lit/reactive-element)/)', // Specifically add @lit/reactive-element
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
