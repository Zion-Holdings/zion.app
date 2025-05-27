export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
  },
  roots: ['<rootDir>/__tests__'],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};

