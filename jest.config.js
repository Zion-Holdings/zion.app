export default {
  // Use the ESM preset so Jest can work with the project's `type: "module"`
  // setting. This avoids errors when `ts-jest` attempts to instrument files
  // for coverage under Node 20.
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
  },
  // Include both traditional `__tests__` and `tests` directories
  roots: ['<rootDir>/__tests__', '<rootDir>/tests'],
  // Ensure Jest treats TypeScript files as ESM
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};

