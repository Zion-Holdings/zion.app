
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
const path = require('path')
const { _execSync } = require('child_process');

// Configuration
const SRC_DIR = path.join(process.cwd(), 'src')
const ICONS_FILE = path.join(SRC_DIR, 'components', 'ui', 'icons.ts')
const EXCLUDED_DIRS = [
  'node_modules',
  '.next',
  'dist',
  'build',
  '__tests__',
  'test-results',
]
const FILE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

// Icons available in the centralized file
const AVAILABLE_ICONS = [
  // Navigation & UI
  'Menu',
  'X',
  'Search',
  'Filter',
  'SortAsc',
  'SortDesc',
  'ChevronDown',
  'ChevronUp',
  'ChevronLeft',
  'ChevronRight',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',

  // Actions
  'Plus',
  'Minus',
  'Edit',
  'Trash2',
  'Copy',
  'Download',
  'Upload',
  'Share',
  'Heart',
  'Star',
  'Bookmark',
  'Flag',
  'MoreHorizontal',
  'MoreVertical',

  // Communication
  'MessageSquare',
  'Mail',
  'Phone',
  'Send',
  'Reply',
  'Forward',

  // Status
  'Check',
  'CheckCircle',
  'AlertCircle',
  'AlertTriangle',
  'Info',
  'XCircle',
  'Loader2',
  'Clock',
  'Calendar',
  'Bell',

  // Media
  'Play',
  'Pause',
  'Stop',
  'Volume2',
  'VolumeX',
  'Image',
  'Video',
  'Camera',
  'Mic',
  'MicOff',

  // Files
  'File',
  'FileText',
  'FileImage',
  'FileVideo',
  'FileAudio',
  'Folder',
  'FolderOpen',
  'Save',

  // Social & User
  'User',
  'Users',
  'UserPlus',
  'UserMinus',
  'Settings',
  'LogOut',
  'LogIn',
  'UserCheck',
  'Shield',
  'Lock',
  'Unlock',

  // Business & Finance
  'DollarSign',
  'CreditCard',
  'Wallet',
  'TrendingUp',
  'TrendingDown',
  'BarChart3',
  'PieChart',
  'Activity',
  'Target',
  'Award',

  // Development & Tech
  'Code',
  'GitBranch',
  'GitCommit',
  'GitPullRequest',
  'Bug',
  'Zap',
  'Cpu',
  'Database',
  'Server',
  'Globe',
  'Wifi',
  'WifiOff',

  // Layout & Design
  'Grid',
  'List',
  'Columns',
  'Rows',
  'Layout',
  'Sidebar',
  'Maximize',
  'Minimize',
  'Move',
  'RotateCw',
  'RotateCcw',

  // Utility
  'Home',
  'MapPin',
  'Link',
  'ExternalLink',
  'RefreshCw',
  'RefreshCcw',
  'ZoomIn',
  'ZoomOut',
  'Eye',
  'EyeOff',
  'Sun',
  'Moon',
  'Monitor',
]
function shouldExcludeDir(dirName) {
  return EXCLUDED_DIRS.includes(dirName) || dirName.startsWith('.');
}

function shouldProcessFile(fileName) {
  return FILE_EXTENSIONS.some((ext) => fileName.endsWith(ext));
}

function findFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item)
const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !shouldExcludeDir(item)) {
      findFiles(fullPath, files);
    } else if (stat.isFile() && shouldProcessFile(item)) {
      files.push(fullPath);
    }
  }

  return files;
}

function optimizeFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern 1: Replace direct lucide-react imports with centralized imports
    const directImportPattern =
      /import\s*{([^}]+)}\s*from\s*['"]lucide-react['"];?/g
const directMatches = content.match(directImportPattern);

    if (directMatches) {
      let allIcons = new Set();

      // Collect all icons from direct imports
      directMatches.forEach((match) => {
        const iconMatch = match.match(
          /import\s*{([^}]+)}\s*from\s*['"]lucide-react['"];?/,
        );
        if (iconMatch) {
          const icons = iconMatch[1].split(',').map((icon) => icon.trim());
          icons.forEach((icon) => {
            if (AVAILABLE_ICONS.includes(icon)) {
              allIcons.add(icon);
            }
          });
        }
      });

      if (allIcons.size > 0) {
        // Replace direct imports with centralized import
        const iconList = Array.from(allIcons).join(', ')
const newImport = `import { ${iconList} } from '@/components/ui/icons';`;

        // Remove old imports and add new one
        content = content.replace(directImportPattern, '');
        content = content.replace(
          /import\s*.*\s*from\s*['"]@\/components\/ui\/icons['"];?\n?/g,
          '',
        );
        content = content.replace(
          /import\s*.*\s*from\s*['"]@\/components\/ui\/icons['"];?\n?/g,
          '',
        );

        // Add the new import at the top with other imports
        const importMatch = content.match(
          /import\s+.*\s+from\s+['"][^'"]+['"];?\n?/,
        );
        if (importMatch) {
          const lastImportIndex =
            content.lastIndexOf(importMatch[0]) + importMatch[0].length;
          content =
            content.slice(0, lastImportIndex) +
            newImport +
            '\n' +
            content.slice(lastImportIndex);
        } else {
          content = newImport + '\n' + content;
        }

        modified = true;
      }
    }

    // Pattern 2: Replace wildcard imports (if any)
    const wildcardPattern =
      /import\s*\*\s*as\s+(\w+)\s+from\s*['"]lucide-react['"];?/g;
    if (wildcardPattern.test(content)) {
      logger.warn(
        `⚠️  Wildcard import found in ${filePath} - manual review needed`,
      );
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (_error) {
    logger.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  logger.warn('🚀 Starting icon import optimization...\n');

  // Find all files to process
  const files = findFiles(SRC_DIR);
  logger.warn(`📁 Found ${files.length} files to process\n`);

  let optimizedCount = 0;
  let errorCount = 0;

  // Process each file
  for (const file of files) {
    try {
      const relativePath = path.relative(process.cwd(), file)
const wasOptimized = optimizeFile(file);

      if (wasOptimized) {
        logger.warn(`✅ Optimized: ${relativePath}`);
        optimizedCount++;
      }
    } catch (_error) {
      logger.error(`❌ Error: ${file}`, error.message);
      errorCount++;
    }
  }

  logger.warn('\n📊 Optimization Summary:');
  logger.warn(`✅ Files optimized: ${optimizedCount}`);
  logger.warn(`❌ Errors: ${errorCount}`);
  logger.warn(`📁 Total files processed: ${files.length}`);

  if (optimizedCount > 0) {
    logger.warn(
      '\n🎯 Expected bundle size reduction: 60-80% from lucide-react',
    );
    logger.warn(
      '💡 Run "npm run build:analyze" to verify bundle size improvements',
    );
  }

  logger.warn('\n✨ Icon import optimization complete!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { optimizeFile, findFiles };
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

