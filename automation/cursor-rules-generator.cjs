#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class CursorRulesGenerator {
  constructor() {
    this.rulesDir = path.join(__dirname, 'cursor-rules');
    this.rulesFile = path.join(this.rulesDir, 'automation-rules.json');
    this.ensureRulesDirectory();
  }

  ensureRulesDirectory() {
    if (!fs.existsSync(this.rulesDir)) {
      fs.mkdirSync(this.rulesDir, { recursive: true });
    }
  }

  async generate() {
    console.log('⚙️ Generating Cursor Automation Rules...');
    
    try {
      const rules = await this.analyzeProjectAndGenerateRules();
      
      // Save rules to file
      this.saveRules(rules);
      
      console.log('✅ Cursor Rules Generation completed');
      console.log(`📊 Rules saved to: ${this.rulesFile}`);
      
      return rules;
    } catch (error) {
      console.error('❌ Cursor Rules Generation failed:', error.message);
      throw error;
    }
  }

  async analyzeProjectAndGenerateRules() {
    const rules = {
      timestamp: new Date().toISOString(),
      project: 'zion.app',
      totalRules: 0,
      categories: {},
      rules: []
    };

    // Generate automation rules based on project patterns
    const automationRules = [
      {
        id: 'rule_001',
        category: 'code-quality',
        name: 'TypeScript Strict Mode',
        description: 'Enforce strict TypeScript compilation',
        pattern: 'tsconfig.json',
        action: 'Ensure strict mode is enabled',
        priority: 'high',
        enabled: true
      },
      {
        id: 'rule_002',
        category: 'testing',
        name: 'Test Coverage',
        description: 'Maintain minimum test coverage thresholds',
        pattern: 'jest.config.cjs',
        action: 'Ensure coverage thresholds are met',
        priority: 'medium',
        enabled: true
      },
      {
        id: 'rule_003',
        category: 'security',
        name: 'Dependency Scanning',
        description: 'Regular security audits of dependencies',
        pattern: 'package.json',
        action: 'Run npm audit regularly',
        priority: 'high',
        enabled: true
      },
      {
        id: 'rule_004',
        category: 'performance',
        name: 'Bundle Optimization',
        description: 'Monitor and optimize bundle sizes',
        pattern: 'dist/',
        action: 'Analyze bundle size trends',
        priority: 'medium',
        enabled: true
      },
      {
        id: 'rule_005',
        category: 'automation',
        name: 'Husky Hooks',
        description: 'Ensure git hooks are properly configured',
        pattern: '.husky/',
        action: 'Validate hook configurations',
        priority: 'high',
        enabled: true
      },
      {
        id: 'rule_006',
        category: 'documentation',
        name: 'README Maintenance',
        description: 'Keep documentation up to date',
        pattern: 'README.md',
        action: 'Check for outdated information',
        priority: 'low',
        enabled: true
      },
      {
        id: 'rule_007',
        category: 'linting',
        name: 'ESLint Enforcement',
        description: 'Maintain code quality standards',
        pattern: 'src/**/*.{ts,tsx}',
        action: 'Run linting on all source files',
        priority: 'high',
        enabled: true
      },
      {
        id: 'rule_008',
        category: 'build',
        name: 'Build Validation',
        description: 'Ensure builds complete successfully',
        pattern: 'dist/',
        action: 'Validate build output',
        priority: 'high',
        enabled: true
      }
    ];

    rules.rules = automationRules;
    rules.totalRules = automationRules.length;
    
    // Categorize rules
    rules.categories = automationRules.reduce((acc, rule) => {
      if (!acc[rule.category]) {
        acc[rule.category] = 0;
      }
      acc[rule.category]++;
      return acc;
    }, {});

    return rules;
  }

  saveRules(rules) {
    try {
      fs.writeFileSync(this.rulesFile, JSON.stringify(rules, null, 2));
    } catch (error) {
      throw new Error(`Failed to save rules: ${error.message}`);
    }
  }

  getStatus() {
    try {
      if (fs.existsSync(this.rulesFile)) {
        const data = JSON.parse(fs.readFileSync(this.rulesFile, 'utf8'));
        return {
          status: 'active',
          totalRules: data.totalRules,
          lastUpdated: data.timestamp,
          rulesFile: this.rulesFile
        };
      } else {
        return {
          status: 'inactive',
          message: 'No rules file found'
        };
      }
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }
}

// CLI handling
async function main() {
  const generator = new CursorRulesGenerator();
  const command = process.argv[2] || 'generate';

  try {
    switch (command) {
      case 'generate':
        await generator.generate();
        break;
      case 'status':
        console.log('📊 Cursor Rules Status:', generator.getStatus());
        break;
      default:
        console.log('Usage: node cursor-rules-generator.cjs [generate|status]');
        process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = CursorRulesGenerator;
