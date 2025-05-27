export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
  },
  roots: ['<rootDir>/tests', '<rootDir>/__tests__'],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};

