#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'netlify-build-error-analyzer.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

class NetlifyBuildErrorAnalyzer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.errorPatterns = this.initializeErrorPatterns();
    this.solutions = this.initializeSolutions();
  }

  initializeErrorPatterns() {
    return {
      authentication: {
        patterns: [
          /Cannot destructure property 'auth' of 'e' as it is undefined/,
          /auth.*undefined/,
          /authentication.*error/,
          /supabase.*auth/,
          /getServerSideProps.*auth/
        ],
        category: 'authentication',
        severity: 'high'
      },
      prerender: {
        patterns: [
          /Error occurred prerendering page/,
          /prerender.*error/,
          /static.*generation.*error/
        ],
        category: 'prerender',
        severity: 'medium'
      },
      memory: {
        patterns: [
          /JavaScript heap out of memory/,
          /FATAL ERROR: Ineffective mark-compact near heap limit/,
          /max-old-space-size/
        ],
        category: 'memory',
        severity: 'high'
      },
      dependency: {
        patterns: [
          /Cannot find module/,
          /Module not found/,
          /Import.*error/,
          /require.*error/
        ],
        category: 'dependency',
        severity: 'medium'
      },
      typescript: {
        patterns: [
          /Type.*error/,
          /TS\d+/,
          /TypeScript.*error/,
          /type.*mismatch/
        ],
        category: 'typescript',
        severity: 'medium'
      },
      build: {
        patterns: [
          /Build.*error/,
          /Compilation.*error/,
          /Build.*failed/
        ],
        category: 'build',
        severity: 'high'
      }
    };
  }

  initializeSolutions() {
    return {
      authentication: {
        immediate: [
          'Check if authentication context is properly provided',
          'Verify Supabase environment variables are set',
          'Ensure auth hooks are wrapped in proper providers'
        ],
        code: [
          'Wrap problematic components in authentication providers',
          'Add null checks for auth objects before destructuring',
          'Use optional chaining for auth properties'
        ],
        files: [
          'Check pages with getServerSideProps',
          'Review authentication middleware',
          'Verify Supabase client configuration'
        ]
      },
      prerender: {
        immediate: [
          'Identify which pages are causing prerender errors',
          'Check for server-side only code in static pages',
          'Verify environment variables are available during build'
        ],
        code: [
          'Add dynamic imports for problematic components',
          'Use getServerSideProps instead of static generation for auth-dependent pages',
          'Add error boundaries around problematic sections'
        ],
        files: [
          'Review pages with authentication dependencies',
          'Check for browser-only APIs in static pages',
          'Verify all imports are available during build'
        ]
      },
      memory: {
        immediate: [
          'Increase Node.js memory limit',
          'Clean build cache and artifacts',
          'Restart build process'
        ],
        code: [
          'Set NODE_OPTIONS="--max-old-space-size=8192"',
          'Optimize bundle size and dependencies',
          'Use incremental builds'
        ],
        files: [
          'Update package.json scripts',
          'Check for memory leaks in components',
          'Review large dependencies'
        ]
      },
      dependency: {
        immediate: [
          'Clear node_modules and reinstall',
          'Check package.json for missing dependencies',
          'Verify import paths are correct'
        ],
        code: [
          'Run npm ci to clean install',
          'Check for circular dependencies',
          'Verify all imports exist'
        ],
        files: [
          'Review import statements',
          'Check package.json dependencies',
          'Verify file paths'
        ]
      },
      typescript: {
        immediate: [
          'Run TypeScript compiler to see detailed errors',
          'Check tsconfig.json configuration',
          'Review type definitions'
        ],
        code: [
          'Fix type mismatches',
          'Add proper type annotations',
          'Use type assertions where appropriate'
        ],
        files: [
          'Review TypeScript errors',
          'Check component prop types',
          'Verify API response types'
        ]
      },
      build: {
        immediate: [
          'Check build logs for specific error details',
          'Verify all required files exist',
          'Check build configuration'
        ],
        code: [
          'Fix compilation errors',
          'Resolve import issues',
          'Check for syntax errors'
        ],
        files: [
          'Review build configuration',
          'Check for missing files',
          'Verify build scripts'
        ]
      }
    };
  }

  async analyzeSpecificError(errorMessage) {
    log(`🔍 Analyzing specific error: ${errorMessage}`);
    
    const analysis = {
      error: errorMessage,
      category: 'unknown',
      severity: 'medium',
      patterns: [],
      solutions: [],
      files: []
    };

    // Find matching patterns
    for (const [category, pattern] of Object.entries(this.errorPatterns)) {
      for (const regex of pattern.patterns) {
        if (regex.test(errorMessage)) {
          analysis.category = pattern.category;
          analysis.severity = pattern.severity;
          analysis.patterns.push(regex.toString());
          
          // Get solutions for this category
          const solutions = this.solutions[pattern.category];
          if (solutions) {
            analysis.solutions = solutions;
          }
          break;
        }
      }
    }

    return analysis;
  }

  async runFullAnalysis() {
    log('🚀 Starting full build error analysis...');
    
    try {
      // Check for recent build logs
      const buildLogs = this.findBuildLogs();
      
      if (buildLogs.length === 0) {
        log('ℹ️ No recent build logs found. Run a build first to analyze errors.');
        return { message: 'No build logs found. Run a build first.' };
      }

      const analysis = await this.analyzeBuildLogs(buildLogs[0].content);
      const fixScript = await this.generateFixScript(analysis);

      const results = {
        analysis: analysis,
        fixScript: fixScript,
        summary: {
          errorsFound: analysis.summary.totalErrors,
          criticalIssues: analysis.summary.criticalErrors,
          recommendations: analysis.summary.recommendations.length
        }
      };

      // Save analysis report
      const reportPath = path.join(LOG_DIR, `build-error-analysis-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      log(`📄 Error analysis report saved to: ${reportPath}`);

      return results;

    } catch (error) {
      log(`❌ Build error analysis failed: ${error.message}`);
      throw error;
    }
  }

  findBuildLogs() {
    const logs = [];
    
    try {
      // Look for common log locations
      const logLocations = [
        path.join(this.projectRoot, '.next', 'build-manifest.json'),
        path.join(this.projectRoot, 'automation', 'logs'),
        path.join(this.projectRoot, 'logs')
      ];

      for (const location of logLocations) {
        if (fs.existsSync(location)) {
          if (fs.statSync(location).isDirectory()) {
            const files = fs.readdirSync(location).filter(f => f.endsWith('.log'));
            for (const file of files.slice(-3)) { // Last 3 log files
              const filePath = path.join(location, file);
              const content = fs.readFileSync(filePath, 'utf8');
              logs.push({ file, content, size: content.length });
            }
          }
        }
      }
    } catch (error) {
      log(`Warning: Could not read build logs: ${error.message}`);
    }

    return logs.sort((a, b) => b.size - a.size); // Sort by size (largest first)
  }

  async analyzeBuildLogs(logContent) {
    log('🔍 Analyzing build logs for errors...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      errors: [],
      categories: {},
      summary: {
        totalErrors: 0,
        criticalErrors: 0,
        warnings: 0,
        recommendations: []
      }
    };

    // Analyze each error pattern
    for (const [category, pattern] of Object.entries(this.errorPatterns)) {
      const matches = this.findPatternMatches(logContent, pattern.patterns);
      
      if (matches.length > 0) {
        analysis.errors.push(...matches.map(match => ({
          ...match,
          category: pattern.category,
          severity: pattern.severity
        })));

        if (!analysis.categories[pattern.category]) {
          analysis.categories[pattern.category] = [];
        }
        analysis.categories[pattern.category].push(...matches);
      }
    }

    // Generate summary
    analysis.summary.totalErrors = analysis.errors.length;
    analysis.summary.criticalErrors = analysis.errors.filter(e => e.severity === 'high').length;
    analysis.summary.warnings = analysis.errors.filter(e => e.severity === 'medium').length;

    // Generate recommendations
    analysis.summary.recommendations = this.generateRecommendations(analysis);

    return analysis;
  }

  findPatternMatches(content, patterns) {
    const matches = [];
    
    for (const pattern of patterns) {
      const regex = new RegExp(pattern, 'gi');
      let match;
      
      while ((match = regex.exec(content)) !== null) {
        const context = this.extractContext(content, match.index);
        matches.push({
          pattern: pattern.toString(),
          match: match[0],
          index: match.index,
          context: context,
          line: this.findLineNumber(content, match.index)
        });
      }
    }

    return matches;
  }

  extractContext(content, index, contextSize = 200) {
    const start = Math.max(0, index - contextSize);
    const end = Math.min(content.length, index + contextSize);
    return content.substring(start, end).replace(/\n/g, ' ').trim();
  }

  findLineNumber(content, index) {
    const beforeContent = content.substring(0, index);
    const lines = beforeContent.split('\n');
    return lines.length;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    const categories = Object.keys(analysis.categories);

    for (const category of categories) {
      const solutions = this.solutions[category];
      if (solutions) {
        recommendations.push({
          category: category,
          severity: analysis.categories[category][0]?.severity || 'medium',
          immediate: solutions.immediate,
          code: solutions.code,
          files: solutions.files
        });
      }
    }

    return recommendations;
  }

  async generateFixScript(analysis) {
    log('🔧 Generating fix script...');
    
    const fixScript = {
      timestamp: new Date().toISOString(),
      fixes: [],
      commands: [],
      files: []
    };

    for (const recommendation of analysis.summary.recommendations) {
      const category = recommendation.category;
      const solutions = this.solutions[category];

      if (solutions) {
        fixScript.fixes.push({
          category: category,
          severity: recommendation.severity,
          solutions: solutions
        });

        // Generate commands based on category
        switch (category) {
          case 'memory':
            fixScript.commands.push('npm run netlify:artifacts');
            fixScript.commands.push('export NODE_OPTIONS="--max-old-space-size=8192"');
            break;
          case 'dependency':
            fixScript.commands.push('rm -rf node_modules package-lock.json');
            fixScript.commands.push('npm ci');
            break;
          case 'authentication':
            fixScript.commands.push('npm run netlify:optimize');
            break;
          case 'build':
            fixScript.commands.push('npm run netlify:intelligent');
            break;
        }
      }
    }

    return fixScript;
  }
}

// CLI interface
if (require.main === module) {
  const analyzer = new NetlifyBuildErrorAnalyzer();
  
  const command = process.argv[2] || 'full';
  
  switch (command) {
    case 'analyze':
      analyzer.runFullAnalysis().then(console.log);
      break;
    case 'full':
    default:
      analyzer.runFullAnalysis().then(console.log);
      break;
  }
}

module.exports = NetlifyBuildErrorAnalyzer;
