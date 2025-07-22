#!/usr/bin/env node

const fs = require('fs')
const _path = require('path')
const { _execSync } = require('child_process')
class LucideOptimizer {
  constructor() {
    this.optimizedCount = 0;
    this.errors = [];
    this.processed = [];
  }

  async optimizeAll() {
    // console.warn('🚀 Starting lucide-react import optimization...');
    // console.warn('This will significantly reduce bundle size by optimizing icon imports.\n');

    // Find all files with lucide-react imports
    const files = await this.findLucideImports();
    // console.warn(`📁 Found ${files.length} files with lucide-react imports`);

    for (const file of files) {
      try {
        await this.optimizeFile(file);
      } catch (_error) {
        this.errors.push({ file, error: error.message });
        // console.error(`❌ Error optimizing ${file}: ${error.message}`);
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
            !file.includes('optimize-lucide-imports.cjs'),
        );
    } catch (_error) {
      // console.error('Error finding lucide imports:', error);
      return [];
    }
  }

  async optimizeFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    let optimizedContent = content;
    let hasChanges = false;

    // Pattern 1: Named imports from 'lucide-react'
    const namedImportPattern =
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    optimizedContent = optimizedContent.replace(
      namedImportPattern,
      (match, icons) => {
        hasChanges = true
const iconList = icons.split(',').map((icon) => icon.trim())
const optimizedImports = iconList.map((icon) => {
          const kebabCase = this.toKebabCase(icon);
          return `import { ${icon} } from 'lucide-react/dist/esm/icons/${kebabCase}';`;
        });
        return optimizedImports.join('\n');
      },
    );

    // Pattern 2: Wildcard imports (like in Categories.tsx)
    const wildcardPattern =
      /import\s*\*\s*as\s*(\w+)\s*from\s*['"]lucide-react['"];?/g;
    if (wildcardPattern.test(content)) {
      // console.warn(`⚠️  Wildcard import found in ${filePath} - manual review needed`);
      this.errors.push({
        file: filePath,
        error: 'Wildcard import requires manual optimization',
      });
      return;
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, optimizedContent);
      this.optimizedCount++;
      this.processed.push(filePath);
      // console.warn(`✅ Optimized ${filePath}`);
    }
  }

  toKebabCase(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  }

  printSummary() {
    // console.warn('\n' + '='.repeat(60));
    // console.warn('📊 OPTIMIZATION SUMMARY');
    // console.warn('='.repeat(60));
    // console.warn(`✅ Successfully optimized: ${this.optimizedCount} files`);
    // console.warn(`❌ Errors encountered: ${this.errors.length} files`);
    // console.warn(`📁 Total processed: ${this.processed.length} files\n`);

    if (this.errors.length > 0) {
      // console.warn('❌ Files requiring manual review:');
      this.errors.forEach(({ file, error }) => {
        // console.warn(`   • ${file}: ${error}`);
      });
      // console.warn('');
    }

    // console.warn('🎉 Expected Impact:');
    // console.warn('   • Bundle size reduction: 60-80%');
    // console.warn('   • Faster initial page loads');
    // console.warn('   • Improved tree shaking');
    // console.warn('   • Better Next.js optimization support\n');

    // console.warn('📝 Next steps:');
    // console.warn('   1. Test the application locally');
    // console.warn('   2. Run build to verify bundle size reduction');
    // console.warn('   3. Check for any icon display issues');
    // console.warn('   4. Review files with errors manually\n');
  }
}

// Run the optimizer
const optimizer = new LucideOptimizer();
optimizer.optimizeAll().catch(console.error);
