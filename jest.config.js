export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      babelConfig: true, // Re-added: let Babel handle import.meta via its plugin
      tsconfig: 'tsconfig.json'
      // AST transformer removed
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
  transformIgnorePatterns: [
    '/node_modules/(?!(@reown/appkit-adapter-ethers|@reown/appkit|@reown/appkit-polyfills|@reown/appkit-controllers|@reown/appkit-common|@reown/appkit-wallet|@reown/appkit-utils|@reown/appkit-scaffold-ui|@reown/appkit-ui|uint8arrays|multiformats|lit|@lit/reactive-element|lit-html|lit-element)/)',
    "\\.pnp\\.[^\\/]+$"
  ],
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
