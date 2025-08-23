module.exports = {
  globDirectory: 'public/',
  globPatterns: ['**/*.{html,js,css,svg,png,ico}'],
  swDest: 'public/service-worker.js',
  navigateFallback: '/index.html',
  // Prevent auth routes from falling back to index.html
  navigateFallbackDenylist: [/^\/auth\//]
};
