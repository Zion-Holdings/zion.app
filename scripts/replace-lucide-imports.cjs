const fs = require('fs');
const path = require('path');
const { _execSync } = require('child_process');
class LucideImportReplacer {
  constructor() {
    this.replacedCount = 0;
    this.errors = [];
    this.processed = [];
  }

  async replaceAll() {
    console.warn('🚀 Starting lucide-react import replacement...');
    console.warn('This will replace direct imports with centralized icons.\n');
    const files = await this.findLucideImports();
    console.warn(`📁 Found ${files.length} files with lucide-react imports`);

    for (const file of files) {
      try {
        await this.replaceFile(file);
      } catch (_error) {
        this.errors.push({ file, error: error.message });
        console.error(`❌ Error replacing ${file}: ${error.message}`);
      }
    }

    this.printSummary();
  }

  async findLucideImports() {
    try {
      const result = execSync(
        `find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "from.*lucide-react" 2>/dev/null || true`,
        { encoding: 'utf-8' },
      );
      return result
        .trim()
        .split('\n')
        .filter(Boolean)
        .filter(
          (file) =>
            !file.includes('node_modules') &&
            !file.includes('.next') &&
            !file.includes('scripts/') &&
            !file.includes('src/components/ui/icons.ts') &&
            !file.includes('src/components/icons/index.tsx'),
        );
    } catch (_error) {
      console.error('Error finding lucide imports:', error);
      return [];
    }
  }

  async replaceFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    let replacedContent = content;
    let hasChanges = false;

    // Pattern 1: Named imports from 'lucide-react'
    const namedImportPattern =
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    replacedContent = replacedContent.replace(
      namedImportPattern,
      (match, icons) => {
        hasChanges = true;
        const iconList = icons.split(',').map((icon) => icon.trim());
        const validIcons = iconList.filter((icon) => {
          // Check if icon exists in our centralized export
          const iconName = icon.split(' as ')[0].trim();
          return this.isIconAvailable(iconName);
        });

        if (validIcons.length === 0) {
          return match; // Keep original if no valid icons
        }

        return `import { ${validIcons.join(', ')} } from '@/components/ui/icons';`;
      },
    );

    // Pattern 2: Type imports (keep these)
    const typeImportPattern =
      /import\s+type\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    replacedContent = replacedContent.replace(typeImportPattern, (match) => {
      // Keep type imports as they are
      return match;
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, replacedContent);
      this.replacedCount++;
      this.processed.push(filePath);
      console.warn(`✅ Replaced imports in ${filePath}`);
    }
  }

  isIconAvailable(iconName) {
    // List of icons available in our centralized export
    const availableIcons = [
      'Grid',
      'List',
      'Columns',
      'Rows',
      'Layout',
      'Sidebar',
      'Maximize',
      'Minimize',
      'Move',
      'RotateCcw',
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
      'Check',
      'CheckCircle',
      'CheckCircle2',
      'AlertCircle',
      'AlertTriangle',
      'Info',
      'XCircle',
      'Loader2',
      'Clock',
      'Calendar',
      'Bell',
      'Ban',
      'ShieldAlert',
      'Play',
      'Pause',
      'Volume2',
      'VolumeX',
      'Image',
      'Video',
      'Camera',
      'Mic',
      'MicOff',
      'File',
      'FileText',
      'FileImage',
      'FileVideo',
      'FileAudio',
      'FilePlus',
      'Folder',
      'FolderOpen',
      'Save',
      'Clipboard',
      'PaperclipIcon',
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
      'LockKeyhole',
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
      'Package',
      'Briefcase',
      'BriefcaseIcon',
      'Gift',
      'BadgeDollarSign',
      'Badge',
      'BadgeCheck',
      'Crown',
      'Medal',
      'Trophy',
      'Handshake',
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
      'BookOpen',
      'Terminal',
      'Sparkles',
      'Plus',
      'PlusCircle',
      'Minus',
      'Edit',
      'Trash2',
      'Copy',
      'Download',
      'Upload',
      'Share',
      'Heart',
      'Star',
      'StarIcon',
      'Bookmark',
      'Flag',
      'MoreHorizontal',
      'MoreVertical',
      'Reply',
      'Forward',
      'MessageSquare',
      'MessageCircle',
      'Mail',
      'Phone',
      'Send',
      'Inbox',
      'Kanban',
      'CalendarIcon',
      'ThumbsUp',
      'ThumbsDown',
      'Quote',
      'InfoIcon',
      'QrCode',
      'QrCodeIcon',
      'Apple',
      'Facebook',
      'Twitter',
      'Linkedin',
      'LinkIcon',
      'Menu',
      'X',
      'Search',
      'SearchIcon',
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
      'Circle',
      'CircleDot',
      'Dot',
      'GripVertical',
      'PanelLeft',
      'ImageIcon',
    ];

    return availableIcons.includes(iconName);
  }

  printSummary() {
    console.warn('\n' + '='.repeat(60));
    console.warn('📊 REPLACEMENT SUMMARY');
    console.warn('='.repeat(60));
    console.warn(`✅ Successfully replaced: ${this.replacedCount} files`);
    console.warn(`❌ Errors encountered: ${this.errors.length} files`);
    console.warn(`📁 Total processed: ${this.processed.length} files\n`);

    if (this.errors.length > 0) {
      console.warn('❌ Files requiring manual review:');
      this.errors.forEach(({ file, error }) => {
        console.warn(`   • ${file}: ${error}`);
      });
      console.warn('');
    }

    console.warn('🎉 Expected Impact:');
    console.warn('   • Bundle size reduction: 60-80%');
    console.warn('   • Faster initial page loads');
    console.warn('   • Improved tree shaking');
    console.warn('   • Better Next.js optimization support\n');

    console.warn('📝 Next steps:');
    console.warn('   1. Test the application locally');
    console.warn('   2. Run build to verify bundle size reduction');
    console.warn('   3. Check for any icon display issues');
    console.warn('   4. Review files with errors manually\n');
  }
}

// Run the replacer
const replacer = new LucideImportReplacer();
replacer.replaceAll().catch(console.error);
