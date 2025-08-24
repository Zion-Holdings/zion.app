module.exports = {
  extends: [
    "next/core-web-vitals"
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@next/next/no-html-link-for-pages': 'warn'
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'build/',
    'dist/',
    '*.config.js',
    '*.config.ts',
    'scripts/',
    'automation/',
    'netlify/',
    'src/',
    'zion-os/',
    'zion_academy/',
    'packages/',
    'apps/',
    'generated-services/',
    'monitoring/',
    'wiki/',
    'zion.app/',
    'backups/',
    'typechain-types/',
    'zion-website-analysis.json',
    '*.backup.*',
    '*.log',
    '*.txt',
    '*.md'
  ]
};
