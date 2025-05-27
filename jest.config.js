export default {
  // Use the ESM preset so ts-jest can handle "type": "module"
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
  },
  roots: ['<rootDir>/__tests__'],
  // Tell ts-jest to compile files to ES modules
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

