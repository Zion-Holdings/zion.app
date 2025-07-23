module.exports = {
  testEnvironment: jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    ^@/(.*)$': <rootDir>/src/$1
  },
  testPathIgnorePatterns: [
    <rootDir>/.next/',
    <rootDir>/node_modules/',
    <rootDir>/out/
  ],
  transform: {
    ^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  collectCoverageFrom: [
    src/**/*.{js,jsx,ts,tsx},
    pages/**/*.{js,jsx,ts,tsx},
    !**/*.d.ts',
    !**/node_modules/**
  ],
  testMatch: [
    **/__tests__/**/*.(ts|tsx|js),
    **/?(*.)+(spec|test).(ts|tsx|js)
  ]
};
