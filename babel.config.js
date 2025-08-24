module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: 'commonjs', // Use CommonJS for compatibility
      targets: {
        node: '18'
      }
    }],
    ['@babel/preset-react', {
      runtime: 'automatic'
    }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      useESModules: false,
      corejs: false,
      helpers: true,
      regenerator: true
    }]
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {
          modules: 'commonjs',
          targets: {
            node: 'current'
          }
        }],
        ['@babel/preset-react', {
          runtime: 'automatic'
        }],
        '@babel/preset-typescript'
      ]
    }
  },
  // Handle specific problematic packages
  overrides: [
    {
      test: /node_modules\/(formik|react-day-picker)/,
      presets: [
        ['@babel/preset-env', {
          modules: false, // Keep as ESM
          targets: {
            esmodules: true
          }
        }]
      ],
      plugins: [
        ['@babel/plugin-transform-runtime', {
          useESModules: true
        }]
      ]
    }
  ]
};