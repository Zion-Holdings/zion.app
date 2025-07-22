const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const _currentFilename = path.basename(__filename)
function analyzeBundle() {
  try {
    console.log('🔍 Analyzing bundle...');

    // Check if .next directory exists
    if (!fs.existsSync('.next')) {
      console.log('⚠️  .next directory not found. Run build first.');
      return;
    }

    // Analyze bundle size
    const bundleStats = execSync(
      'npx next-bundle-analyzer .next/static/chunks',
      { encoding: 'utf8' },
    );
    console.log('📊 Bundle analysis completed');

    // Save analysis to file
    const analysisPath = path.join('scripts', 'bundle-analysis.json');
    fs.writeFileSync(
      analysisPath,
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          stats: bundleStats,
        },
        null,
        2,
      ),
    );

    console.log('✅ Bundle analysis saved to scripts/bundle-analysis.json');
  } catch (error) {
    console.error('❌ Bundle analysis failed:', error.message);
  }
}

if (require.main === module) {
  analyzeBundle();
}

module.exports = { analyzeBundle };
