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
    // "__tests__/utils/validateEnv.test.ts", // Removed to allow running this test with Jest
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
    // Ensure more specific aliases come before the general one
    '^@/pages/api/(.*)$': '<rootDir>/src/pages/api/$1', // Assuming API routes are under src
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
    '^@/routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@/schemas/(.*)$': '<rootDir>/src/schemas/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/data/(.*)$': '<rootDir>/src/data/$1',
    '^@/sdk/(.*)$': '<rootDir>/sdk/$1',
    '^@/__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    '^@/tests/(.*)$': '<rootDir>/tests/$1',
    // General alias for anything under src not explicitly listed above
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@sentry/nextjs': '<rootDir>/__mocks__/@sentry/nextjs.js', // Added this line based on previous error and Sentry mock file

    'react-router-dom$': '<rootDir>/src/shims/react-router-dom.ts',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',

    // Next.js mocks (keep existing ones, ensure they are correct)
    '^next/router$': '<rootDir>/tests/__mocks__/next/router.js',
    '^next/image$': '<rootDir>/tests/__mocks__/next/image.js',
    '^next/link$': '<rootDir>/tests/__mocks__/next/link.js',
    '^next-auth/react$': '<rootDir>/tests/__mocks__/next-auth/react.js',
    '^@stripe/react-stripe-js$': '<rootDir>/tests/__mocks__/@stripe/react-stripe-js.js',
    '^@stripe/stripe-js$': '<rootDir>/tests/__mocks__/@stripe/stripe-js.js',
    '^next-cloudinary$': '<rootDir>/tests/__mocks__/next-cloudinary.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(isows|@supabase/supabase-js|@supabase/realtime-js|@supabase/gotrue-js|@supabase/postgrest-js|@supabase/storage-js|@supabase/functions-js|@helia|libp2p|@chainsafe|@libp2p|@orbitdb|datastore-core|blockstore-core|uint8arrays|multiformats|@multiformats|debug|axios|@reown/.*|@walletconnect/.*|lit|lit-html|lit-element|@lit/reactive-element|bson|mongodb|mongoose)/)',
  ],
  roots: ['<rootDir>/__tests__', '<rootDir>/tests', '<rootDir>/src'], // Ensure all test locations are covered
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
