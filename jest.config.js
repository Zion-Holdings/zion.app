module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/tests'],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};

