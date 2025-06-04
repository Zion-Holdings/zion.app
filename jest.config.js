export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      babelConfig: true,
      tsconfig: {
        isolatedModules: false,
        jsx: 'react-jsx',
        sourceMap: true // Changed from inlineSourceMap
      }
    }],
    '^.+\\.m?js$': 'babel-jest', // Ensure JS files are also processed by Babel
  },
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>/__tests__', '<rootDir>/tests'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
