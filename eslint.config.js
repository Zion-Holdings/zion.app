import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      '*.config.js',
      '*.config.ts',
      'scripts/',
      'automation/',
      'public/reports/**',
      'netlify/',
      'ecosystem*.cjs',
      '**/*.cjs',
      'components/**',
      'pages/**',
      'services/**'
    ]
  }
];