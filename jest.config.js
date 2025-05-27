export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
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

