module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: 'commonjs', // Use CommonJS instead of ESM
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
      useESModules: false, // Use CommonJS
      corejs: false,
      helpers: true,
      regenerator: false
    }]
  ]
};