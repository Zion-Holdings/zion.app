module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false, // Preserve ES modules
      targets: {
        esmodules: true,
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
      useESModules: true,
      corejs: false,
      helpers: true,
      regenerator: false
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