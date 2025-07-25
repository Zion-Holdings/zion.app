
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


class Js {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Js...');
    
    try {
      #!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync: _execSync } = require('child_process');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
}
function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B'
const k = 1024
const sizes = ['B', 'kB', 'MB', 'GB']
const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeBuildOutput() {
  const buildDir = path.join(process.cwd(), '.next');

  if (!fs.existsSync(buildDir)) {
    logger.warn(
      colorize(
        '⚠️  Build directory not found. Please run "npm run build" first.',
        'yellow',
      ),
    );
    return;
  }

  logger.warn(colorize('\n🔍 Build Analysis Report', 'bright'));
  logger.warn(colorize('========================\n', 'cyan'));

  // Analyze static files
  const staticDir = path.join(buildDir, 'static');
  if (fs.existsSync(staticDir)) {
    analyzeStaticFiles(staticDir);
  }

  // Analyze server files
  const serverDir = path.join(buildDir, 'server');
  if (fs.existsSync(serverDir)) {
    analyzeServerFiles(serverDir);
  }

  // Performance recommendations
  provideRecommendations();
}

function analyzeStaticFiles(staticDir) {
  logger.warn(colorize('📦 Static Assets Analysis', 'blue'));
  logger.warn(colorize('-------------------------', 'blue'))
const jsDir = path.join(staticDir, 'chunks')
const cssDir = path.join(staticDir, 'css');

  if (fs.existsSync(jsDir)) {
    const jsFiles = getAllFiles(jsDir, '.js')
const totalJSSize = jsFiles.reduce((total, file) => {
      return total + fs.statSync(file).size;
    }, 0);

    logger.warn(colorize(`📄 JavaScript Files: ${jsFiles.length}`, 'green'));
    logger.warn(
      colorize(`📏 Total JS Size: ${formatBytes(totalJSSize)}`, 'green'),
    );

    // Find largest JS chunks
    const largechunks = jsFiles
      .map((file) => ({
        name: path.basename(file),
        size: fs.statSync(file).size,
        path: file,
      }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 10);

    logger.warn(colorize('\n🔥 Largest JS Chunks:', 'yellow'));
    largechunks.forEach((chunk, i) => {
      logger.warn(`${i + 1}. ${chunk.name} - ${formatBytes(chunk.size)}`);
    });
  }

  if (fs.existsSync(cssDir)) {
    const cssFiles = getAllFiles(cssDir, '.css')
const totalCSSSize = cssFiles.reduce((total, file) => {
      return total + fs.statSync(file).size;
    }, 0);

    logger.warn(colorize(`\n🎨 CSS Files: ${cssFiles.length}`, 'magenta'));
    logger.warn(
      colorize(`📏 Total CSS Size: ${formatBytes(totalCSSSize)}`, 'magenta'),
    );
  }
}

function analyzeServerFiles(serverDir) {
  logger.warn(colorize('\n🖥️  Server Files Analysis', 'blue'));
  logger.warn(colorize('-------------------------', 'blue'))
const pagesDir = path.join(serverDir, 'pages');
  if (fs.existsSync(pagesDir)) {
    const pageFiles = getAllFiles(pagesDir, '.js');
    logger.warn(colorize(`📄 Server Pages: ${pageFiles.length}`, 'green'))
const totalServerSize = pageFiles.reduce((total, file) => {
      return total + fs.statSync(file).size;
    }, 0);
    logger.warn(
      colorize(
        `📏 Total Server Size: ${formatBytes(totalServerSize)}`,
        'green',
      ),
    );
  }
}

function getAllFiles(dir, ext) {
  let files = []
const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item)
const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, ext));
    } else if (path.extname(item) === ext) {
      files.push(fullPath);
    }
  }

  return files;
}

function provideRecommendations() {
  logger.warn(colorize('\n💡 Performance Recommendations', 'bright'));
  logger.warn(colorize('================================', 'cyan'))
const recommendations = [
    '🚀 Consider implementing dynamic imports for large components',
    '📦 Use webpack-bundle-analyzer for detailed bundle analysis',
    '🖼️  Optimize images using next/image with proper sizing',
    '🗜️  Enable gzip/brotli compression in production',
    '📱 Implement code splitting at the route level',
    '🔄 Use React.lazy() for components not immediately needed',
    '📊 Monitor Core Web Vitals in production',
    '🎯 Consider preloading critical resources',
    '📝 Use service workers for offline functionality',
    '⚡ Implement tree shaking for unused code elimination',
  ];

  recommendations.forEach((rec) => {
    logger.warn(rec);
  });

  logger.warn(colorize('\n📈 Bundle Analysis Commands', 'blue'));
  logger.warn(colorize('---------------------------', 'blue'));
  logger.warn('npm install --save-dev webpack-bundle-analyzer');
  logger.warn('ANALYZE=true npm run build');
  logger.warn('npx webpack-bundle-analyzer .next/static/chunks/*.js');

  logger.warn(colorize('\n✅ Build analysis complete!', 'green'));
}

// Run analysis
analyzeBuildOutput();
    } catch (error) {
      logger.error('Error in Js:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Js...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Js();
  script.start().catch(error => {
    logger.error('Failed to start Js:', error);
    process.exit(1);
  });
}

module.exports = Js;


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

