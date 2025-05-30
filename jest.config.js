export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
    '^notistack$': '<rootDir>/src/stubs/notistack.ts',
    '^@sentry/browser$': '<rootDir>/src/stubs/sentry.ts',
  },
  roots: ['<rootDir>/__tests__', '<rootDir>/tests'],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};

