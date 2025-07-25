
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting ...');
    
    try {
      #!/usr/bin/env node



const fs = require('fs')
const path = require('path');

// logger.warn('🔍 LARGE CHUNK ANALYZER');
// logger.warn('=======================\n')
const TARGET_SIZE = 244000; // 244KB target
const buildStatsPath = path.join(process.cwd(), '.next');

// Format bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
const k = 1024
const sizes = ['Bytes', 'KB', 'MB', 'GB']
const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Analyze chunk content by filename patterns
function analyzeChunkContent(filename) {
  const patterns = {
    react: /react|redux|query|router/i,
    ui: /radix|chakra|framer|lucide|mui|mantine/i,
    utils: /lodash|ramda|moment|date-fns|axios|fetch/i,
    crypto: /crypto|web3|ethereum|bitcoin|hash/i,
    charts: /chart|graph|d3|recharts|plotly/i,
    editor: /monaco|codemirror|editor|highlight/i,
    p2p: /libp2p|orbitdb|helia|ipfs|blockstore|datastore/i,
    vendors: /node_modules/i,
    common: /common/i,
    pages: /pages/i,
  };

  for (const [category, pattern] of Object.entries(patterns)) {
    if (pattern.test(filename)) {
      return category;
    }
  }
  return 'unknown';
}

// Get optimization strategy for each category
function getOptimizationStrategy(category, _size) {
  const strategies = {
    react: {
      priority: 'medium',
      actions: [
        'Consider splitting React Router into separate chunk',
        'Use React.lazy for heavy components',
        'Optimize Redux store structure',
      ],
    },
    ui: {
      priority: 'high',
      actions: [
        'Implement component-level code splitting',
        'Use dynamic imports for UI libraries',
        'Consider lighter UI alternatives',
      ],
    },
    utils: {
      priority: 'high',
      actions: [
        'Replace heavy utility libraries with lighter alternatives',
        'Use tree shaking to eliminate unused functions',
        'Consider native browser APIs',
      ],
    },
    crypto: {
      priority: 'low',
      actions: [
        'Load crypto libraries only when needed',
        'Use Web Crypto API where possible',
        'Consider worker threads for heavy crypto operations',
      ],
    },
    charts: {
      priority: 'high',
      actions: [
        'Load chart libraries dynamically',
        'Use lighter charting alternatives',
        'Implement chart lazy loading',
      ],
    },
    editor: {
      priority: 'high',
      actions: [
        'Load editors only on specific pages',
        'Use dynamic imports for syntax highlighting',
        'Consider CDN loading for editors',
      ],
    },
    p2p: {
      priority: 'critical',
      actions: [
        'These should already be externalized!',
        'Verify dynamic import implementation',
        'Ensure p2p libraries are async-only',
      ],
    },
    vendors: {
      priority: 'medium',
      actions: [
        'Review vendor bundling strategy',
        'Split by usage frequency',
        'Optimize cache groups',
      ],
    },
    common: {
      priority: 'low',
      actions: [
        'Review common chunk size',
        'Ensure proper code sharing',
        'Consider minChunks threshold',
      ],
    },
    unknown: {
      priority: 'medium',
      actions: [
        'Investigate chunk contents manually',
        'Consider splitting unknown large chunks',
        'Review bundling strategy',
      ],
    },
  };

  return strategies[category] || strategies.unknown;
}

// Analyze all chunks and identify large ones
function analyzeLargeChunks() {
  const results = {
    largeChunks: [],
    totalAnalyzed: 0,
    totalSize: 0,
    recommendations: [],
  };

  // Analyze static chunks
  const staticPath = path.join(buildStatsPath, 'static', 'chunks');
  if (fs.existsSync(staticPath)) {
    const chunks = fs.readdirSync(staticPath);

    chunks.forEach((chunk) => {
      if (!chunk.endsWith('.js')) return
const chunkPath = path.join(staticPath, chunk)
const stats = fs.statSync(chunkPath)
const _size = stats.size;

      results.totalAnalyzed++;
      results.totalSize += _size;

      if (_size > TARGET_SIZE) {
        const category = analyzeChunkContent(chunk)
const strategy = getOptimizationStrategy(category, _size);

        results.largeChunks.push({
          name: chunk,
          size: _size,
          sizeFormatted: formatBytes(_size),
          overTarget: _size - TARGET_SIZE,
          overTargetFormatted: formatBytes(_size - TARGET_SIZE),
          category,
          strategy,
        });
      }
    });
  }

  return results;
}

// Generate detailed report
function generateDetailedReport() {
  const analysis = analyzeLargeChunks();

  // logger.warn(`📊 LARGE CHUNK ANALYSIS RESULTS:`);
  // logger.warn(`===============================`);
  // logger.warn(`Total chunks analyzed: ${analysis.totalAnalyzed}`);
  // logger.warn(`Total size: ${formatBytes(analysis.totalSize)}`);
  // logger.warn(`Large chunks (>${formatBytes(TARGET_SIZE)}): ${analysis.largeChunks.length}`);
  // logger.warn();

  if (analysis.largeChunks.length === 0) {
    // logger.warn('🎉 No chunks exceed the target size!');
    return { success: true, analysis };
  }

  // Sort by size (largest first)
  analysis.largeChunks.sort((a, b) => b.size - a.size);

  // logger.warn(`🔍 LARGE CHUNKS BREAKDOWN:`);
  // logger.warn(`=========================`);

  analysis.largeChunks.forEach((chunk, _index) => {
    const _urgency =
      chunk.strategy.priority === 'critical'
        ? '🚨'
        : chunk.strategy.priority === 'high'
          ? '⚠️'
          : chunk.strategy.priority === 'medium'
            ? '📊'
            : '📝';

    // logger.warn(`${_index + 1}. ${_urgency} ${chunk.name}`);
    // logger.warn(`   Size: ${chunk.sizeFormatted} (+${chunk.overTargetFormatted} over target)`);
    // logger.warn(`   Category: ${chunk.category}`);
    // logger.warn(`   Priority: ${chunk.strategy.priority}`);

    chunk.strategy.actions.forEach((_action) => {
      // logger.warn(`   • ${_action}`);
    });
    // logger.warn();
  });

  // Generate category-based recommendations
  const categoryStats = {};
  analysis.largeChunks.forEach((chunk) => {
    if (!categoryStats[chunk.category]) {
      categoryStats[chunk.category] = {
        count: 0,
        totalSize: 0,
        chunks: [],
      };
    }
    categoryStats[chunk.category].count++;
    categoryStats[chunk.category].totalSize += chunk.size;
    categoryStats[chunk.category].chunks.push(chunk.name);
  });

  // logger.warn(`📋 OPTIMIZATION PRIORITIES BY CATEGORY:`);
  // logger.warn(`======================================`);

  Object.entries(categoryStats)
    .sort(([, a], [, b]) => b.totalSize - a.totalSize)
    .forEach(([category, stats]) => {
      // logger.warn(`🔧 ${category.toUpperCase()}: ${stats.count} chunks, ${formatBytes(stats.totalSize)}`);
      // logger.warn(`   Chunks: ${stats.chunks.join(', ')}`)
const _strategy = getOptimizationStrategy(category, stats.totalSize);
      // logger.warn(`   Priority: ${_strategy.priority}`);
      // logger.warn(`   Actions:`);
      // _strategy.actions.forEach(action => {
      //   logger.warn(`     • ${action}`);
      // });
      // logger.warn();
    });

  // Implementation guidance
  // logger.warn(`🚀 IMPLEMENTATION GUIDANCE:`);
  // logger.warn(`==========================`)
const criticalChunks = analysis.largeChunks.filter(
    (c) => c.strategy.priority === 'critical',
  )
const highPriorityChunks = analysis.largeChunks.filter(
    (c) => c.strategy.priority === 'high',
  );

  if (criticalChunks.length > 0) {
    // logger.warn(`🚨 CRITICAL ISSUES (Fix Immediately):`);
    // criticalChunks.forEach(chunk => {
    //   logger.warn(`   • ${chunk.name} (${chunk.category})`);
    // });
    // logger.warn();
  }

  if (highPriorityChunks.length > 0) {
    // logger.warn(`⚠️  HIGH PRIORITY (Next Sprint):`);
    // highPriorityChunks.forEach(chunk => {
    //   logger.warn(`   • ${chunk.name} (${chunk.category})`);
    // });
    // logger.warn();
  }

  // logger.warn(`📝 SUGGESTED NEXT STEPS:`);
  // logger.warn(`1. Address critical P2P library chunks immediately`);
  // logger.warn(`2. Implement dynamic imports for UI/chart libraries`);
  // logger.warn(`3. Review and optimize vendor bundling strategy`);
  // logger.warn(`4. Consider alternative lighter libraries`);
  // logger.warn(`5. Implement component-level code splitting`);
  // logger.warn();

  return { success: analysis.largeChunks.length <= 3, analysis };
}

// Save detailed analysis
function saveAnalysis(analysis) {
  const reportPath = path.join(process.cwd(), 'large-chunk-analysis.json')
const timestamp = new Date().toISOString()
const report = {
    timestamp,
    targetSize: TARGET_SIZE,
    targetSizeFormatted: formatBytes(TARGET_SIZE),
    summary: {
      totalChunks: analysis.totalAnalyzed,
      largeChunks: analysis.largeChunks.length,
      totalSize: analysis.totalSize,
      totalSizeFormatted: formatBytes(analysis.totalSize),
    },
    largeChunks: analysis.largeChunks,
    recommendations: analysis.largeChunks.map((chunk) => ({
      chunk: chunk.name,
      category: chunk.category,
      priority: chunk.strategy.priority,
      actions: chunk.strategy.actions,
    })),
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  // logger.warn(`📄 Detailed analysis saved to: ${reportPath}`);
}

// Main execution
try {
  if (!fs.existsSync(buildStatsPath)) {
    // logger.warn('❌ No build output found. Run `npm run build` first.');
    process.exit(1);
  }

  const { success, analysis } = generateDetailedReport();
  saveAnalysis(analysis);

  if (success) {
    // logger.warn('\n🎉 Chunk optimization target achieved!');
  } else {
    // logger.warn('\n⚡ Continue chunk optimization efforts.');
  }

  process.exit(success ? 0 : 1);
} catch (_error) {
  // logger.error('❌ Error during large chunk analysis:', _error.message);
  process.exit(1);
}


// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
    } catch (error) {
      logger.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    logger.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;
