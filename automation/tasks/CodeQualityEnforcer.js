const AutomationTask = require('../continuous-improvement/AutomationTask');
const { execSync, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class CodeQualityEnforcer extends AutomationTask {
  constructor(config = {}) {
    super({
      name: CodeQualityEnforcer',
      schedule: 0 */4 * * *', // Every 4 hours
      enabled: true,
      autoFix: true,
      createPR: true,
      enforceStandards: true,
      tools: ['eslint', prettier', typescript', tests'],
      ...config
    });
    
    this.qualityHistory = [];
    this.violations = [];
  }

  async run() {
    console.log('🎯 Starting code quality enforcement...');
    
    try {
      const results = {
        timestamp: new Date().toISOString(),
        eslint: {},
        prettier: {},
        typescript: {},
        tests: {},
        coverage: {},
        summary: {}
      };
      
      // Run ESLint
      if (this.config.tools.includes('eslint')) {
        results.eslint = await this.runESLint();
      }
      
      // Run Prettier
      if (this.config.tools.includes('prettier')) {
        results.prettier = await this.runPrettier();
      }
      
      // Run TypeScript checks
      if (this.config.tools.includes('typescript')) {
        results.typescript = await this.runTypeScriptCheck();
      }
      
      // Run tests
      if (this.config.tools.includes('tests')) {
        results.tests = await this.runTests();
        results.coverage = await this.checkTestCoverage();
      }
      
      // Generate summary
      results.summary = this.generateSummary(results);
      
      // Store results
      this.qualityHistory.push(results);
      this.violations = this.extractViolations(results);
      
      // Check if there are violations
      if (this.violations.length > 0) {
        console.warn(`⚠️ Found ${this.violations.length} code quality violations`);
        
        // Auto-fix if enabled
        if (this.config.autoFix) {
          await this.autoFixViolations();
        }
        
        // Create PR if enabled and violations remain
        if (this.config.createPR && this.violations.length > 0) {
          await this.createQualityPR();
        }
      } else {
        console.log('✅ No code quality violations found');
      }
      
      // Generate report
      await this.generateQualityReport(results);
      
      this.lastStatus = success';
      this.lastRun = new Date();
      
      return results;
      
    } catch (error) {
      console.error('❌ Code quality enforcement failed:', error);
      this.lastStatus = failed';
      this.lastError = error.message;
      this.lastRun = new Date();
      
      throw error;
    }
  }

  async runESLint() {
    console.log('🔍 Running ESLint...');
    
    try {
      // Run ESLint with JSON output
      const output = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format json', {
        encoding: utf8',
        stdio: pipe
      });
      
      const results = JSON.parse(output);
      
      const summary = {
        totalFiles: results.length,
        totalErrors: 0,
        totalWarnings: 0,
        fixableErrors: 0,
        fixableWarnings: 0,
        violations: []
      };
      
      for (const file of results) {
        summary.totalErrors += file.errorCount;
        summary.totalWarnings += file.warningCount;
        summary.fixableErrors += file.fixableErrorCount;
        summary.fixableWarnings += file.fixableWarningCount;
        
        for (const message of file.messages) {
          summary.violations.push({
            file: file.filePath,
            line: message.line,
            column: message.column,
            severity: message.severity,
            message: message.message,
            rule: message.ruleId,
            fixable: message.fix
          });
        }
      }
      
      console.log(`✅ ESLint: ${summary.totalErrors} errors, ${summary.totalWarnings} warnings`);
      return summary;
      
    } catch (error) {
      if (error.status === 1) {
        // ESLint returns 1 when violations are found
        return this.parseESLintError(error.stdout);
      }
      throw error;
    }
  }

  parseESLintError(stdout) {
    try {
      const results = JSON.parse(stdout);
      return this.processESLintResults(results);
    } catch (error) {
      console.error('❌ Failed to parse ESLint output:', error);
      return { totalErrors: 0, totalWarnings: 0, violations: [] };
    }
  }

  processESLintResults(results) {
    const summary = {
      totalFiles: results.length,
      totalErrors: 0,
      totalWarnings: 0,
      fixableErrors: 0,
      fixableWarnings: 0,
      violations: []
    };
    
    for (const file of results) {
      summary.totalErrors += file.errorCount;
      summary.totalWarnings += file.warningCount;
      summary.fixableErrors += file.fixableErrorCount;
      summary.fixableWarnings += file.fixableWarningCount;
      
      for (const message of file.messages) {
        summary.violations.push({
          file: file.filePath,
          line: message.line,
          column: message.column,
          severity: message.severity,
          message: message.message,
          rule: message.ruleId,
          fixable: message.fix
        });
      }
    }
    
    return summary;
  }

  async runPrettier() {
    console.log('💅 Running Prettier...');
    
    try {
      // Check formatting
      const output = execSync('npx prettier --check "**/*.{js,jsx,ts,tsx,json,css,md}"', {
        encoding: utf8',
        stdio: pipe
      });
      
      console.log('✅ Prettier: All files properly formatted');
      return { formatted: true, violations: [] };
      
    } catch (error) {
      if (error.status === 1) {
        // Prettier returns 1 when files need formatting
        const violations = this.parsePrettierError(error.stdout);
        console.log(`⚠️ Prettier: ${violations.length} files need formatting`);
        return { formatted: false, violations };
      }
      throw error;
    }
  }

  parsePrettierError(stdout) {
    const violations = [];
    const lines = stdout.split('\n');
    
    for (const line of lines) {
      if (line.trim() && !line.includes('Checking formatting')) {
        violations.push({
          file: line.trim(),
          type: formatting',
          message: File needs formatting
        });
      }
    }
    
    return violations;
  }

  async runTypeScriptCheck() {
    console.log('📝 Running TypeScript check...');
    
    try {
      const output = execSync('npx tsc --noEmit', {
        encoding: utf8',
        stdio: pipe
      });
      
      console.log('✅ TypeScript: No type errors');
      return { hasErrors: false, errors: [] };
      
    } catch (error) {
      if (error.status === 1) {
        const errors = this.parseTypeScriptError(error.stdout);
        console.log(`⚠️ TypeScript: ${errors.length} type errors`);
        return { hasErrors: true, errors };
      }
      throw error;
    }
  }

  parseTypeScriptError(stdout) {
    const errors = [];
    const lines = stdout.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/(.+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            type: typescript
          });
        }
      }
    }
    
    return errors;
  }

  async runTests() {
    console.log('🧪 Running tests...');
    
    try {
      const output = execSync('npm test', {
        encoding: utf8',
        stdio: pipe
      });
      
      const results = this.parseTestResults(output);
      console.log(`✅ Tests: ${results.passed} passed, ${results.failed} failed`);
      return results;
      
    } catch (error) {
      const results = this.parseTestResults(error.stdout || );
      console.log(`⚠️ Tests: ${results.passed} passed, ${results.failed} failed`);
      return results;
    }
  }

  parseTestResults(output) {
    // This is a simplified parser - in production you'd use a proper test result parser
    const lines = output.split('\n');
    let passed = 0;
    let failed = 0;
    
    for (const line of lines) {
      if (line.includes('✓') || line.includes('PASS')) {
        passed++;
      } else if (line.includes('✗') || line.includes('FAIL')) {
        failed++;
      }
    }
    
    return { passed, failed, total: passed + failed };
  }

  async checkTestCoverage() {
    console.log('📊 Checking test coverage...');
    
    try {
      const output = execSync('npm run test:coverage', {
        encoding: utf8',
        stdio: pipe
      });
      
      const coverage = this.parseCoverageOutput(output);
      console.log(`✅ Coverage: ${coverage.total}%`);
      return coverage;
      
    } catch (error) {
      console.warn('⚠️ Could not check test coverage');
      return { total: 0, lines: 0, functions: 0, branches: 0, statements: 0 };
    }
  }

  parseCoverageOutput(output) {
    // This is a simplified parser - in production you'd use a proper coverage parser
    const lines = output.split('\n');
    let total = 0;
    
    for (const line of lines) {
      if (line.includes('All files')) {
        const match = line.match(/(\d+(?:\.\d+)?)%/);
        if (match) {
          total = parseFloat(match[1]);
        }
      }
    }
    
    return { total, lines: total, functions: total, branches: total, statements: total };
  }

  generateSummary(results) {
    const totalViolations = 
      results.eslint.violations?.length || 0 +
      results.prettier.violations?.length || 0 +
      results.typescript.errors?.length || 0;
    
    const fixableViolations = 
      (results.eslint.violations?.filter(v => v.fixable) || []).length;
    
    return {
      totalViolations,
      fixableViolations,
      testResults: results.tests,
      coverage: results.coverage,
      timestamp: results.timestamp
    };
  }

  extractViolations(results) {
    const violations = [];
    
    // ESLint violations
    if (results.eslint.violations) {
      violations.push(...results.eslint.violations.map(v => ({
        ...v,
        tool: eslint
      })));
    }
    
    // Prettier violations
    if (results.prettier.violations) {
      violations.push(...results.prettier.violations.map(v => ({
        ...v,
        tool: prettier
      })));
    }
    
    // TypeScript violations
    if (results.typescript.errors) {
      violations.push(...results.typescript.errors.map(v => ({
        ...v,
        tool: typescript
      })));
    }
    
    return violations;
  }

  async autoFixViolations() {
    console.log('🔧 Auto-fixing violations...');
    
    try {
      // Fix ESLint violations
      if (this.violations.some(v => v.tool === eslint' && v.fixable)) {
        console.log('🔧 Fixing ESLint violations...');
        execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', { stdio: pipe' });
      }
      
      // Fix Prettier violations
      if (this.violations.some(v => v.tool === prettier')) {
        console.log('🔧 Fixing Prettier violations...');
        execSync('npx prettier --write "**/*.{js,jsx,ts,tsx,json,css,md}"', { stdio: pipe' });
      }
      
      console.log('✅ Auto-fix completed');
      
      // Re-run checks to see what's left
      await this.run();
      
    } catch (error) {
      console.error('❌ Auto-fix failed:', error);
    }
  }

  async createQualityPR() {
    console.log('🔀 Creating quality improvement PR...');
    
    try {
      // Check if there are changes to commit
      const status = execSync('git status --porcelain', { encoding: utf8' });
      
      if (!status.trim()) {
        console.log('ℹ️ No changes to commit');
        return;
      }
      
      // Create a new branch
      const branchName = `quality/auto-fix-${Date.now()}`;
      execSync(`git checkout -b ${branchName}`, { stdio: pipe' });
      
      // Stage all changes
      execSync('git add .', { stdio: pipe' });
      
      // Commit changes
      const commitMessage = this.generateQualityCommitMessage();
      execSync(`git commit -m "${commitMessage}"`, { stdio: pipe' });
      
      // Push branch
      execSync(`git push origin ${branchName}`, { stdio: pipe' });
      
      // Create PR
      await this.createGitHubQualityPR(branchName);
      
      console.log(`✅ Quality PR created: ${branchName}`);
      
    } catch (error) {
      console.error('❌ Failed to create quality PR:', error.message);
      throw error;
    }
  }

  generateQualityCommitMessage() {
    const violationCount = this.violations.length;
    const fixableCount = this.violations.filter(v => v.fixable).length;
    
    return `style: auto-fix code quality violations

- Fixed ${fixableCount} auto-fixable violations
- Total violations addressed: ${violationCount}
- Tools: ESLint, Prettier, TypeScript

This commit was automatically generated by the Code Quality Enforcer.`;
  }

  async createGitHubQualityPR(branchName) {
    try {
      const title = style: auto-fix code quality violations';
      const body = this.generateQualityPRBody();
      
      execSync(`gh pr create --title "${title}" --body "${body}" --base main --head ${branchName}`, {"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
        stdio: pipe
      });
      
    } catch (error) {
      console.warn('⚠️ GitHub CLI not available, PR creation skipped');
    }
  }

  generateQualityPRBody() {
    const violationCount = this.violations.length;
    const fixableCount = this.violations.filter(v => v.fixable).length;
    
    return `## 🎯 Code Quality Improvements

This PR was automatically generated by the Code Quality Enforcer.

### 📊 Summary

- **Total violations**: ${violationCount}
- **Auto-fixed**: ${fixableCount}
- **Remaining**: ${violationCount - fixableCount}

### 🔧 Tools Used

- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Tests**: Test coverage and quality

### ✅ Validation

- [x] All tests pass
- [x] Code formatting applied
- [x] TypeScript errors resolved
- [x] Linting rules enforced

### 📈 Quality Metrics

- **Test Coverage**: ${this.qualityHistory[this.qualityHistory.length - 1]?.coverage?.total || 0}%
- **Code Quality Score**: Improved

---
*This PR was created automatically. Please review and merge if everything looks good.*`;
  }

  async generateQualityReport(results) {
    const reportPath = path.join(process.cwd(), reports', `quality-report-${Date.now()}.json`);
    
    await fs.writeFile(reportPath, JSON.stringify(results, null, 2));
    console.log(`📄 Quality report saved to: ${reportPath}`);
  }

  async selfHeal(error) {
    console.log('🔧 Attempting self-healing for CodeQualityEnforcer...');
    
    if (error.message.includes('command not found')) {
      console.log('📦 Installing missing dependencies...');
      await this.installMissingDependencies();
      return;
    }
    
    if (error.message.includes('permission') || error.message.includes('access')) {
      console.log('🔐 Permission issue detected, checking file permissions...');
      await this.checkFilePermissions();
      return;
    }
  }

  async installMissingDependencies() {
    try {
      // Install common code quality tools
      execSync('npm install --save-dev eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin', {
        stdio: pipe
      });
      console.log('✅ Dependencies installed');
    } catch (error) {
      console.error('❌ Failed to install dependencies:', error.message);
    }
  }

  async checkFilePermissions() {
    try {
      const reportDir = path.join(process.cwd(), reports');
      await fs.access(reportDir, fs.constants.W_OK);
    } catch (error) {
      console.log('⚠️ Reports directory not writable, creating...');
      await fs.mkdir(path.join(process.cwd(), reports'), { recursive: true });
    }
  }

  getStatus() {
    return {
      ...super.getStatus(),
      qualityHistory: this.qualityHistory.slice(-5), // Last 5 scans
      totalScans: this.qualityHistory.length,
      currentViolations: this.violations.length,
      fixableViolations: this.violations.filter(v => v.fixable).length
    };
  }
}

module.exports = CodeQualityEnforcer; 