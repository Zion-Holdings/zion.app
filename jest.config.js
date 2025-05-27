module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  roots: ['<rootDir>/tests'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};

