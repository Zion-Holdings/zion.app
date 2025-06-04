module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' },
      modules: 'commonjs' // Explicitly transform ES modules to CommonJS for Jest
    }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    'babel-plugin-transform-import-meta'
  ]
};
