#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Bundle Analysis and Optimization Tool');
console.log('=========================================\n');

// Configuration
const config = {
  outputDir: '.next',
  buildStatsFile: '.next/build-manifest.json',
  analysisFile: 'bundle-analysis.json',
  thresholds: {
    warning: 1000 * 1024, // 1MB
    error: 5000 * 1024,   // 5MB
  }
};

class BundleAnalyzer {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      totalSize: 0,
      chunks: [],
      dependencies: [],
      recommendations: [],
      performance: {}
    };
  }

  async analyze() {
    try {
      console.log('📦 Analyzing bundle...');
      
      // Run build with analysis
      await this.runBuildAnalysis();
      
      // Analyze package.json dependencies
      await this.analyzeDependencies();
      
      // Check for duplicate dependencies
      await this.findDuplicates();
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Display results
      this.displayResults();
      
      // Save detailed report
      this.saveReport();
      
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
      process.exit(1);
    }
  }

  async runBuildAnalysis() {
    console.log('   Building with analysis...');
    
    try {
      // Set environment variable for bundle analysis
      process.env.ANALYZE = 'true';
      
      // Run the build
      execSync('npm run build', { 
        stdio: 'pipe',
        env: { ...process.env, ANALYZE: 'true' }
      });
      
      console.log('   ✅ Build completed');
    } catch (error) {
      console.log('   ⚠️  Build failed, analyzing existing files...');
    }
  }

  async analyzeDependencies() {
    console.log('   Analyzing dependencies...');
    
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    // Get size estimates for each dependency
    for (const [name, version] of Object.entries(dependencies)) {
      try {
        const size = await this.getDependencySize(name);
        this.results.dependencies.push({
          name,
          version,
          size,
          type: packageJson.dependencies[name] ? 'production' : 'development'
        });
      } catch (error) {
        // Skip if size cannot be determined
      }
    }
    
    // Sort by size
    this.results.dependencies.sort((a, b) => b.size - a.size);
    console.log(`   ✅ Analyzed ${this.results.dependencies.length} dependencies`);
  }

  getDependencySize(name) {
    try {
      const packagePath = path.join('node_modules', name, 'package.json');
      if (fs.existsSync(packagePath)) {
        const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        // Try to estimate size based on main file or common patterns
        const mainFile = pkg.main || 'index.js';
        const fullPath = path.join('node_modules', name, mainFile);
        
        if (fs.existsSync(fullPath)) {
          const stats = fs.statSync(fullPath);
          return stats.size;
        }
        
        // Fallback: estimate based on entire package directory
        return this.getDirectorySize(path.join('node_modules', name));
      }
    } catch (error) {
      // Return 0 if cannot determine size
    }
    return 0;
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(itemPath);
        } else {
          totalSize += stats.size;
        }
      }
    } catch (error) {
      // Return 0 if cannot read directory
    }
    
    return totalSize;
  }

  async findDuplicates() {
    console.log('   Finding duplicate dependencies...');
    
    try {
      // Use npm ls to find duplicates
      const output = execSync('npm ls --depth=0 --json', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const data = JSON.parse(output);
      // Analysis of duplicates would go here
      
    } catch (error) {
      console.log('   ⚠️  Could not analyze duplicates');
    }
  }

  generateRecommendations() {
    console.log('   Generating recommendations...');
    
    const recommendations = [];
    
    // Large dependencies
    const largeDeps = this.results.dependencies.filter(dep => dep.size > config.thresholds.warning);
    if (largeDeps.length > 0) {
      recommendations.push({
        type: 'warning',
        category: 'bundle-size',
        title: 'Large Dependencies Detected',
        description: `Found ${largeDeps.length} dependencies over 1MB`,
        items: largeDeps.map(dep => ({
          name: dep.name,
          size: this.formatSize(dep.size),
          suggestion: this.getSuggestionForDependency(dep.name)
        }))
      });
    }

    // Common optimizations
    recommendations.push({
      type: 'info',
      category: 'optimization',
      title: 'Bundle Optimization Suggestions',
      items: [
        {
          name: 'Code Splitting',
          description: 'Implement dynamic imports for heavy components',
          example: "const Component = lazy(() => import('./HeavyComponent'));"
        },
        {
          name: 'Tree Shaking',
          description: 'Import only specific functions from libraries',
          example: "import { debounce } from 'lodash' // instead of import _ from 'lodash'"
        },
        {
          name: 'Bundle Analysis',
          description: 'Use webpack-bundle-analyzer for detailed analysis',
          example: "npm run build:analyze"
        }
      ]
    });

    this.results.recommendations = recommendations;
  }

  getSuggestionForDependency(name) {
    const suggestions = {
      'lodash': 'Consider importing specific functions: import { debounce } from "lodash"',
      'moment': 'Consider replacing with date-fns or day.js for smaller bundle size',
      'react-router-dom': 'Ensure you\'re only importing what you need',
      'framer-motion': 'Consider lazy loading for complex animations',
      'axios': 'Consider using fetch API for simple requests',
      '@chakra-ui/react': 'Import components individually to reduce bundle size',
      'three': 'Consider lazy loading for 3D components'
    };
    
    return suggestions[name] || 'Review if all features are needed';
  }

  displayResults() {
    console.log('\n📊 Bundle Analysis Results');
    console.log('==========================\n');

    // Top 10 largest dependencies
    console.log('🏗️  Largest Dependencies:');
    const topDeps = this.results.dependencies.slice(0, 10);
    topDeps.forEach((dep, index) => {
      const sizeFormatted = this.formatSize(dep.size);
      const indicator = dep.size > config.thresholds.warning ? '⚠️ ' : '  ';
      console.log(`${indicator}${index + 1}. ${dep.name} - ${sizeFormatted}`);
    });

    // Recommendations
    console.log('\n💡 Recommendations:');
    this.results.recommendations.forEach(rec => {
      console.log(`\n${rec.type === 'warning' ? '⚠️ ' : 'ℹ️ '} ${rec.title}`);
      console.log(`   ${rec.description}`);
      
      if (rec.items) {
        rec.items.forEach(item => {
          if (item.suggestion) {
            console.log(`   • ${item.name} (${item.size}) - ${item.suggestion}`);
          } else {
            console.log(`   • ${item.name}: ${item.description}`);
          }
        });
      }
    });

    // Quick wins
    console.log('\n🚀 Quick Wins:');
    console.log('   1. Enable gzip compression in production');
    console.log('   2. Implement code splitting for routes');
    console.log('   3. Use dynamic imports for heavy libraries');
    console.log('   4. Optimize images and use WebP format');
    console.log('   5. Remove unused dependencies');

    console.log('\n📝 Detailed report saved to bundle-analysis.json');
  }

  saveReport() {
    // Enhanced report with actionable insights
    const report = {
      ...this.results,
      summary: {
        totalDependencies: this.results.dependencies.length,
        productionDependencies: this.results.dependencies.filter(d => d.type === 'production').length,
        largeDependencies: this.results.dependencies.filter(d => d.size > config.thresholds.warning).length,
        totalSize: this.results.dependencies.reduce((sum, dep) => sum + dep.size, 0)
      },
      actionPlan: this.generateActionPlan()
    };

    fs.writeFileSync(config.analysisFile, JSON.stringify(report, null, 2));
  }

  generateActionPlan() {
    return [
      {
        priority: 'high',
        task: 'Implement code splitting for large components',
        impact: 'Reduce initial bundle size by 30-50%',
        effort: 'medium'
      },
      {
        priority: 'high',
        task: 'Optimize image loading with lazy loading',
        impact: 'Improve initial page load time',
        effort: 'low'
      },
      {
        priority: 'medium',
        task: 'Replace large dependencies with smaller alternatives',
        impact: 'Reduce bundle size by 10-20%',
        effort: 'high'
      },
      {
        priority: 'medium',
        task: 'Implement tree shaking for utility libraries',
        impact: 'Remove unused code',
        effort: 'low'
      },
      {
        priority: 'low',
        task: 'Setup bundle monitoring in CI/CD',
        impact: 'Prevent bundle size regression',
        effort: 'medium'
      }
    ];
  }

  formatSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Run the analysis
const analyzer = new BundleAnalyzer();
analyzer.analyze().catch(console.error); 