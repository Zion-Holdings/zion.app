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
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
  },
  roots: ['<rootDir>/__tests__', '<rootDir>/tests'],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};

