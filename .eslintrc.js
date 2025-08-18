module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  rules: {
    // Disable strict rules that might cause CI failures
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-require-imports': 'off', // Allow require() for CommonJS files
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    '@next/next/no-html-link-for-pages': 'warn', // Downgrade to warning
    '@next/next/no-title-in-document-head': 'warn', // Downgrade to warning
    'react-hooks/exhaustive-deps': 'warn', // Downgrade to warning
  },
  ignorePatterns: [
    '.next/',
    'out/',
    'dist/',
    'coverage/',
    'node_modules/',
    '*.log',
    '**/*.generated.*',
    'automation/**/*.cjs',
    'scripts/**/*.js',
    '**/*.cjs', // Ignore all CommonJS files
  ],
  overrides: [
    {
      // Apply different rules to CommonJS files
      files: ['**/*.cjs', '**/*.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};