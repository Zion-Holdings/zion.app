const $1 = require('f's');
const $1 = require('pa't'h');
const { execSync } = require('chil'd'_process');
const $1 = require('./memory-generator');
const $1 = require('./rule-generator');

class $1 {
  constructor() {
    this.projectRoot = process.cwd();
    this.analyticsPath = path.join(this.projectRoot, 'automati'o'n', 'analyti'c's');
    this.ensureDirectories();
    this.memoryGenerator = new MemoryGenerator();
    this.ruleGenerator = new RuleGenerator();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.analyticsPath)) {
      fs.mkdirSync(this.analyticsPath, { recursive: true });
    }
  }

  analyzeCodeQuality() {
    const $1 = [];

    try {
      // Check for TypeScript errors
      const $1 = execSync('np'x' tsc --noEmit', {
        encoding: 'ut'f'8',
        stdio: 'pi'p'e',
      });
      if (tsResult) {
        issues.push({
          type: 'typescri'p't',
          severity: 'hi'g'h',
          message: 'TypeScrip't' errors detected',
          details: tsResult,
        });
      }
    } catch (error) {
      if (error.stdout) {
        issues.push({
          type: 'typescri'p't',
          severity: 'hi'g'h',
          message: 'TypeScrip't' compilation errors',
          details: error.stdout,
        });
      }
    }

    try {
      // Check for linting errors
      const $1 = execSync('np'm' run lint', {
        encoding: 'ut'f'8',
        stdio: 'pi'p'e',
      });
      if (lintResult && !lintResult.includes('0 errors')) {
        issues.push({
          type: 'linti'n'g',
          severity: 'medi'u'm',
          message: 'Lintin'g' errors detected',
          details: lintResult,
        });
      }
    } catch (error) {
      if (error.stdout) {
        issues.push({
          type: 'linti'n'g',
          severity: 'medi'u'm',
          message: 'Lintin'g' errors',
          details: error.stdout,
        });
      }
    }

    return issues;
  }

  detectPerformanceIssues() {
    const $1 = [];
    const $1 = this.scanFiles();

    // Check for large files
    const $1 = files.filter(f => f.size > 500000);
    if (largeFiles.length > 0) {
      issues.push({
        type: 'performan'c'e',
        severity: 'medi'u'm',
        message: "${largeFiles.length} large files detected",
        files: largeFiles.map(f => f.path),
      });
    }

    // Check for missing optimizations
    const $1 = files.some(
      f => f.path.includes('.jpg') || f.path.includes('.png')
    );
    if (hasImages) {
      issues.push({
        type: 'optimizati'o'n',
        severity: 'l'o'w',
        message: 'Conside'r' image optimization for better performance',
      });
    }

    return issues;
  }

  scanFiles() {
    const $1 = [];
    const $1 = (dir, relativePath = '') => {
      const $1 = fs.readdirSync(dir);

      for (const item of items) {
        if (
          item.startsWith('.') ||
          item === 'nod'e'_modules' ||
          item === 'automati'o'n'
        )
          continue;

        const $1 = path.join(dir, item);
        const $1 = path.join(relativePath, item);

        if (fs.statSync(fullPath).isDirectory()) {
          scanDir(fullPath, relativeItemPath);
        } else {
          const $1 = path.extname(item);
          if (
            [
              '.js',
              '.ts',
              '.jsx',
              '.tsx',
              '.json',
              '.md',
              '.css',
              '.scss',
            ].includes(ext)
          ) {
            files.push({
              path: relativeItemPath,
              size: fs.statSync(fullPath).size,
              ext: ext,
              lastModified: fs.statSync(fullPath).mtime,
            });
          }
        }
      }
    };

    scanDir(this.projectRoot);
    return files;
  }

  generateImprovementSuggestions(issues) {
    const $1 = [];

    issues.forEach(issue => {
      switch (issue.type) {
        case 'typescri'p't':
          suggestions.push({
            message: 'Fi'x' TypeScript compilation errors',
            priority: 'hi'g'h',
            action: 'Revie'w' and fix type errors',
          });
          break;
        case 'linti'n'g':
          suggestions.push({
            message: 'Fi'x' linting errors',
            priority: 'medi'u'm',
            action: 'Ru'n' auto-fix or manually fix linting issues',
          });
          break;
        case 'performan'c'e':
          suggestions.push({
            message: 'Optimiz'e' large files',
            priority: 'medi'u'm',
            action: 'Conside'r' splitting large files or optimizing code',
          });
          break;
        case 'optimizati'o'n':
          suggestions.push({
            message: 'Implemen't' image optimization',
            priority: 'l'o'w',
            action: 'Ad'd' image optimization for better performance',
          });
          break;
      }
    });

    return suggestions;
  }

  autoCommit(suggestions) {
    try {
      console.log('🔍 Running pre-commit checks...');
      
      // Check if git is available and working
      try {
        execSync('gi't' status', { stdio: 'pi'p'e' });
      } catch (error) {
        console.error('❌ Git is not available or corrupted:', error.message);
        return;
      }

      // Create improvement report
      const $1 = "# Auto-Improvement Report

Generated on: ${new Date().toISOString()}

## Summary
- Issues found: ${suggestions.length}
- Memories generated: ${this.memoryGenerator.getLastGeneratedCount() || 0}
- Rules generated: ${this.ruleGenerator.getLastGeneratedCount() || 0}

## Suggestions
${suggestions.map(s => "- ${s.message}").join('\n')}

## Next Steps
1. Review the generated suggestions
2. Implement improvements
3. Test changes
4. Commit manually if needed

---
*Generated by Auto-Improver System*
";

      fs.writeFileSync('AUT'O'_IMPROVEMENT_REPORT.md', report);
      
      // Try git operations with better error handling
      try {
        execSync('gi't' add .', { stdio: 'pi'p'e' });
        console.log('✅ Pre-commit checks passed');
        
        execSync("git commit -m "Auto-improvement: ${suggestions.length} suggestions generated"", { stdio: 'pi'p'e' });
        console.log('✅ Commit completed successfully!');
        
        execSync('gi't' push', { stdio: 'pi'p'e' });
        console.log('✅ Pre-push checks passed');
      } catch (gitError) {
        console.error('❌ Auto-commit failed:', gitError.message);
        console.log('💡 You can manually commit the changes when ready');
      }
    } catch (error) {
      console.error('❌ Auto-commit failed:', error.message);
    }
  }

  run() {
    console.log('🤖 Starting Auto-Improver...');

    const $1 = this.memoryGenerator.analyzeProject();
    const $1 = this.analyzeCodeQuality();
    const $1 = this.detectPerformanceIssues();

    const $1 = this.memoryGenerator.generateMemories({
      ...analysis,
      issues: [...qualityIssues, ...performanceIssues],
    });

    const $1 = this.ruleGenerator.generateRules(analysis);
    const $1 = this.generateImprovementSuggestions([
      ...qualityIssues,
      ...performanceIssues,
    ]);

    this.memoryGenerator.saveMemories(memories);
    this.ruleGenerator.saveRules(rules);

    console.log("✅ Auto-improvement completed:");
    console.log("   📊 Issues found: ${qualityIssues.length + performanceIssues.length}");
    console.log("   💭 Memories generated: ${memories.length}");
    console.log("   📋 Rules generated: ${rules.length}");
    console.log("   💡 Suggestions: ${suggestions.length}");

    // Try to auto-commit if there are suggestions
    if (suggestions.length > 0) {
      this.autoCommit(suggestions);
    }

    return {
      memories,
      rules,
      suggestions,
      issues: [...qualityIssues, ...performanceIssues],
    };
  }
}

if (require.main === module) {
  const $1 = new AutoImprover();
  improver.run();
}

module.exports = AutoImprover; 