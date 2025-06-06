export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: './tsconfig.jest.json'
    }],
    '^.+\\.m?(js|jsx)$': ['babel-jest', {
      presets: [['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }], ['@babel/preset-react', { runtime: 'automatic' }]],
      babelrc: false,
      configFile: false
    }],
  },
  moduleNameMapper: { // Re-enable moduleNameMapper
    '^@/(.*)$': '<rootDir>/src/$1', // Basic alias, ensure it matches tsconfig
    // Add other aliases if validateEnv.test.ts or its imports need them
    // For now, keeping it minimal to what's likely needed by @/utils/validateEnv
  },
  // setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'], // Keep disabled for now
  testMatch: [ // Test the validateEnv file
    "**/__tests__/utils/validateEnv.test.ts",
  ],
  roots: [
    '<rootDir>/__tests__',
    '<rootDir>/src', // Add src to roots for module resolution if @/ points to src
  ],
};
