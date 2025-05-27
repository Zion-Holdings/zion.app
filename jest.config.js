export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/tests', '<rootDir>/__tests__'],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};

