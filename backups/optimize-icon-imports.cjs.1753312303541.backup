#!/usr/bin/env node

/**
 * Icon Import Optimization Script
 *
 * This script optimizes lucide-react imports across the codebase to reduce bundle size.
 * It replaces direct lucide-react imports with imports from the centralized icons file.
 *
 * Expected bundle size reduction: 60-80% from lucide-react
 */

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
      console.warn(
        `⚠️  Wildcard import found in ${filePath} - manual review needed`,
      );
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (_error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.warn('🚀 Starting icon import optimization...\n');

  // Find all files to process
  const files = findFiles(SRC_DIR);
  console.warn(`📁 Found ${files.length} files to process\n`);

  let optimizedCount = 0;
  let errorCount = 0;

  // Process each file
  for (const file of files) {
    try {
      const relativePath = path.relative(process.cwd(), file)
const wasOptimized = optimizeFile(file);

      if (wasOptimized) {
        console.warn(`✅ Optimized: ${relativePath}`);
        optimizedCount++;
      }
    } catch (_error) {
      console.error(`❌ Error: ${file}`, error.message);
      errorCount++;
    }
  }

  console.warn('\n📊 Optimization Summary:');
  console.warn(`✅ Files optimized: ${optimizedCount}`);
  console.warn(`❌ Errors: ${errorCount}`);
  console.warn(`📁 Total files processed: ${files.length}`);

  if (optimizedCount > 0) {
    console.warn(
      '\n🎯 Expected bundle size reduction: 60-80% from lucide-react',
    );
    console.warn(
      '💡 Run "npm run build:analyze" to verify bundle size improvements',
    );
  }

  console.warn('\n✨ Icon import optimization complete!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { optimizeFile, findFiles };
