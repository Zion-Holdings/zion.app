// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start -- -p $PORT', // Next.js start command
      serverReadyPattern: 'ready on', // Pattern to detect when server is ready
      url: ['http://localhost:3000'], // URLs to audit
      numberOfRuns: 2, // Keep it low for hourly runs to save resources
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', {minScore: 0.75}],
        'categories:accessibility': ['warn', {minScore: 0.85}],
        'categories:best-practices': ['warn', {minScore: 0.85}],
        'categories:seo': ['warn', {minScore: 0.9}],
        // Add other assertions as needed
      },
    },
    upload: {
      target: 'filesystem', // Save reports as files
      outputDir: './lhci_reports', // Directory to save reports
      reportFilename: 'index.html', // Main HTML report
    },
  },
};
