#!/usr/bin/env node

/**
 * Navigation Automation Master
 * Coordinates all navigation automation systems for continuous improvement
 */

const fs = require('fs');
const path = require('path');

// Import automation modules
const NavigationOrchestrator = require('./navigation-orchestrator.cjs');
const SmartNavigationAnalyzer = require('./smart-navigation-analyzer.cjs');
const DynamicSidebarGenerator = require('./dynamic-sidebar-generator.cjs');
const BreadcrumbAutomator = require('./breadcrumb-automator.cjs');
const NavigationHealthMonitor = require('./navigation-health-monitor.cjs');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data', 'navigation');
const AUTOMATION_DIR = path.join(ROOT, 'automation');

class NavigationAutomationMaster {
  constructor() {
    this.automations = {
      orchestrator: new NavigationOrchestrator(),
      analyzer: new SmartNavigationAnalyzer(),
      sidebarGenerator: new DynamicSidebarGenerator(),
      breadcrumbAutomator: new BreadcrumbAutomator(),
      healthMonitor: new NavigationHealthMonitor()
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  async run() {
    console.log('🚀 Navigation Automation Master: Starting comprehensive navigation automation...');
    
    try {
      // Phase 1: Core Navigation Analysis
      await this.runCoreAnalysis();
      
      // Phase 2: Component Generation
      await this.generateNavigationComponents();
      
      // Phase 3: Health Monitoring
      await this.monitorNavigationHealth();
      
      // Phase 4: Optimization
      await this.optimizeNavigation();
      
      // Phase 5: Integration
      await this.integrateNavigationSystems();
      
      console.log('✅ Navigation Automation Master: All systems completed successfully');
    } catch (error) {
      console.error('❌ Navigation Automation Master Error:', error);
    }
  }

  async runCoreAnalysis() {
    console.log('\n🔍 Phase 1: Running Core Navigation Analysis...');
    
    // Run navigation orchestrator
    console.log('🧭 Running Navigation Orchestrator...');
    await this.automations.orchestrator.run();
    
    // Run smart navigation analyzer
    console.log('🧠 Running Smart Navigation Analyzer...');
    await this.automations.analyzer.run();
    
    console.log('✅ Core analysis completed');
  }

  async generateNavigationComponents() {
    console.log('\n🔧 Phase 2: Generating Navigation Components...');
    
    // Generate dynamic sidebars
    console.log('📚 Generating Dynamic Sidebars...');
    await this.automations.sidebarGenerator.run();
    
    // Generate breadcrumbs
    console.log('🍞 Generating Breadcrumbs...');
    await this.automations.breadcrumbAutomator.run();
    
    console.log('✅ Navigation components generated');
  }

  async monitorNavigationHealth() {
    console.log('\n💚 Phase 3: Monitoring Navigation Health...');
    
    // Run health monitoring
    console.log('💚 Running Navigation Health Monitor...');
    await this.automations.healthMonitor.run();
    
    console.log('✅ Navigation health monitored');
  }

  async optimizeNavigation() {
    console.log('\n⚡ Phase 4: Optimizing Navigation...');
    
    // Read health data to identify optimization opportunities
    const healthPath = path.join(DATA_DIR, 'navigation-health-summary.json');
    if (fs.existsSync(healthPath)) {
      const healthData = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
      
      if (healthData.healthScore < 80) {
        console.log('⚠️ Navigation health score is low, applying optimizations...');
        await this.applyNavigationOptimizations(healthData);
      } else {
        console.log('✅ Navigation health is good, applying minor improvements...');
        await this.applyMinorImprovements(healthData);
      }
    }
    
    console.log('✅ Navigation optimization completed');
  }

  async applyNavigationOptimizations(healthData) {
    console.log('🔧 Applying navigation optimizations...');
    
    // Create optimization plan
    const optimizationPlan = {
      timestamp: new Date().toISOString(),
      healthScore: healthData.healthScore,
      optimizations: []
    };
    
    // Add optimizations based on health data
    if (healthData.metrics.orphanPages > 3) {
      optimizationPlan.optimizations.push({
        type: 'orphan-page-fix',
        description: 'Fix orphan pages by adding incoming links',
        priority: 'high',
        action: 'Add navigation links to orphan pages'
      });
    }
    
    if (healthData.metrics.brokenLinks > 0) {
      optimizationPlan.optimizations.push({
        type: 'broken-link-fix',
        description: 'Fix broken internal links',
        priority: 'critical',
        action: 'Remove or fix broken links'
      });
    }
    
    if (healthData.metrics.navigationDepth > 4) {
      optimizationPlan.optimizations.push({
        type: 'navigation-flattening',
        description: 'Flatten navigation structure',
        priority: 'medium',
        action: 'Reduce navigation depth to 3-4 levels'
      });
    }
    
    // Save optimization plan
    const planPath = path.join(DATA_DIR, 'optimization-plan.json');
    fs.writeFileSync(planPath, JSON.stringify(optimizationPlan, null, 2));
    
    console.log(`📋 Created optimization plan with ${optimizationPlan.optimizations.length} items`);
  }

  async applyMinorImprovements(healthData) {
    console.log('✨ Applying minor navigation improvements...');
    
    // Create improvement suggestions
    const improvements = {
      timestamp: new Date().toISOString(),
      healthScore: healthData.healthScore,
      improvements: []
    };
    
    // Suggest improvements
    if (healthData.metrics.crossLinks < 15) {
      improvements.improvements.push({
        type: 'cross-linking',
        description: 'Increase cross-category linking',
        benefit: 'Better content discovery',
        effort: 'low'
      });
    }
    
    if (healthData.metrics.totalPages > 100) {
      improvements.improvements.push({
        type: 'navigation-search',
        description: 'Add advanced search functionality',
        benefit: 'Easier content finding',
        effort: 'medium'
      });
    }
    
    // Save improvements
    const improvementsPath = path.join(DATA_DIR, 'improvement-suggestions.json');
    fs.writeFileSync(improvementsPath, JSON.stringify(improvements, null, 2));
    
    console.log(`💡 Created ${improvements.improvements.length} improvement suggestions`);
  }

  async integrateNavigationSystems() {
    console.log('\n🔗 Phase 5: Integrating Navigation Systems...');
    
    // Create integration guide
    await this.createIntegrationGuide();
    
    // Create automation dashboard
    await this.createAutomationDashboard();
    
    // Update package.json scripts
    await this.updatePackageScripts();
    
    console.log('✅ Navigation systems integrated');
  }

  async createIntegrationGuide() {
    console.log('📖 Creating integration guide...');
    
    const guide = `# Navigation Automation Integration Guide

## Overview
This guide explains how to integrate the automated navigation systems into your Zion app.

## Components Generated

### 1. Dynamic Navigation Components
- **DynamicHeader.tsx** - Auto-updating header with active states
- **DynamicFooter.tsx** - Smart footer with contextual links
- **DynamicSidebar.tsx** - Contextual sidebars for each page
- **DynamicBreadcrumbs.tsx** - Automatic breadcrumb generation

### 2. Category-Specific Components
- **ServicesSidebar.tsx** - Sidebar for services pages
- **ReportsSidebar.tsx** - Sidebar for reports pages
- **ExploreSidebar.tsx** - Sidebar for explore pages
- **AutomationSidebar.tsx** - Sidebar for automation pages
- **MainSidebar.tsx** - Sidebar for main pages

### 3. Breadcrumb Components
- **CategoryBreadcrumbs.tsx** - Breadcrumbs for each category
- **BreadcrumbWrapper.tsx** - Universal breadcrumb wrapper

## Integration Steps

### Step 1: Update Your Pages
\`\`\`tsx
import BreadcrumbWrapper from '../components/breadcrumbs/BreadcrumbWrapper';
import SidebarWrapper from '../components/sidebars/SidebarWrapper';
import { useBreadcrumbs } from '../components/breadcrumbs/useBreadcrumbs';
import { useSidebar } from '../components/sidebars/useSidebar';

export default function YourPage() {
  const { breadcrumbs } = useBreadcrumbs();
  const { sidebarData } = useSidebar();
  
  return (
    <SidebarWrapper route="/your-route" content={sidebarData}>
      <div className="p-6">
        <BreadcrumbWrapper route="/your-route" breadcrumbs={breadcrumbs} />
        {/* Your page content */}
      </div>
    </SidebarWrapper>
  );
}
\`\`\`

### Step 2: Run Automation Scripts
\`\`\`bash
# Run all navigation automation
npm run navigation:automate

# Run specific components
npm run navigation:orchestrator
npm run navigation:analyzer
npm run navigation:sidebars
npm run navigation:breadcrumbs
npm run navigation:health
\`\`\`

### Step 3: Monitor and Optimize
- Check \`data/navigation/\` for generated data
- Review health reports in \`data/navigation/navigation-health-report.md\`
- Implement optimization suggestions

## Automation Schedule
The navigation automation runs:
- **Every build** - Components are regenerated
- **Daily** - Health monitoring and analysis
- **Weekly** - Deep optimization and reporting

## Customization
- Edit JSON files in \`data/navigation/\` to customize navigation
- Modify component templates in \`components/navigation/\`
- Adjust automation logic in \`automation/\` scripts

## Troubleshooting
- Check \`data/navigation/\` for error logs
- Run individual automation scripts to isolate issues
- Review health reports for navigation problems
`;

    const guidePath = path.join(DATA_DIR, 'INTEGRATION_GUIDE.md');
    fs.writeFileSync(guidePath, guide);
    
    console.log('✅ Integration guide created');
  }

  async createAutomationDashboard() {
    console.log('📊 Creating automation dashboard...');
    
    const dashboard = `# Navigation Automation Dashboard

## Status: 🟢 ACTIVE
Last Updated: ${new Date().toISOString()}

## Automation Systems

### 🧭 Navigation Orchestrator
- **Status**: Active
- **Purpose**: Core navigation coordination
- **Last Run**: ${new Date().toISOString()}
- **Next Run**: On build

### 🧠 Smart Navigation Analyzer
- **Status**: Active
- **Purpose**: Navigation pattern analysis
- **Last Run**: ${new Date().toISOString()}
- **Next Run**: Daily

### 📚 Dynamic Sidebar Generator
- **Status**: Active
- **Purpose**: Contextual sidebar creation
- **Last Run**: ${new Date().toISOString()}
- **Next Run**: On build

### 🍞 Breadcrumb Automator
- **Status**: Active
- **Purpose**: Automatic breadcrumb generation
- **Last Run**: ${new Date().toISOString()}
- **Next Run**: On build

### 💚 Navigation Health Monitor
- **Status**: Active
- **Purpose**: Continuous health monitoring
- **Last Run**: ${new Date().toISOString()}
- **Next Run**: Daily

## Quick Actions
- **Run All**: \`npm run navigation:automate\`
- **Health Check**: \`npm run navigation:health\`
- **Generate Sidebars**: \`npm run navigation:sidebars\`
- **Generate Breadcrumbs**: \`npm run navigation:breadcrumbs\`

## Recent Activity
- Navigation components generated
- Health monitoring active
- Optimization suggestions created
- Integration guide updated

## Next Steps
1. Integrate components into your pages
2. Run health monitoring regularly
3. Implement optimization suggestions
4. Customize navigation as needed
`;

    const dashboardPath = path.join(DATA_DIR, 'AUTOMATION_DASHBOARD.md');
    fs.writeFileSync(dashboardPath, dashboard);
    
    console.log('✅ Automation dashboard created');
  }

  async updatePackageScripts() {
    console.log('📦 Updating package.json scripts...');
    
    const packagePath = path.join(ROOT, 'package.json');
    if (fs.existsSync(packagePath)) {
      const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Add navigation automation scripts
      const newScripts = {
        'navigation:automate': 'node automation/navigation-automation-master.cjs',
        'navigation:orchestrator': 'node automation/navigation-orchestrator.cjs',
        'navigation:analyzer': 'node automation/smart-navigation-analyzer.cjs',
        'navigation:sidebars': 'node automation/dynamic-sidebar-generator.cjs',
        'navigation:breadcrumbs': 'node automation/breadcrumb-automator.cjs',
        'navigation:health': 'node automation/navigation-health-monitor.cjs',
        'navigation:status': 'node automation/navigation-automation-master.cjs status'
      };
      
      // Merge with existing scripts
      packageData.scripts = { ...packageData.scripts, ...newScripts };
      
      // Write back to package.json
      fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2));
      
      console.log('✅ Package.json scripts updated');
    }
  }

  async runStatus() {
    console.log('📊 Navigation Automation Status Report');
    
    // Check if data files exist
    const dataFiles = [
      'navigation-sitemap.json',
      'navigation-analysis.json',
      'navigation-health-summary.json',
      'breadcrumb-index.json'
    ];
    
    for (const file of dataFiles) {
      const filePath = path.join(DATA_DIR, file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`✅ ${file} - Last updated: ${stats.mtime.toISOString()}`);
      } else {
        console.log(`❌ ${file} - Not found`);
      }
    }
    
    // Check component directories
    const componentDirs = [
      'components/navigation',
      'components/sidebars',
      'components/breadcrumbs'
    ];
    
    for (const dir of componentDirs) {
      const dirPath = path.join(ROOT, dir);
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        console.log(`✅ ${dir} - ${files.length} files`);
      } else {
        console.log(`❌ ${dir} - Not found`);
      }
    }
  }
}

// Run the master automation
if (require.main === module) {
  const master = new NavigationAutomationMaster();
  
  // Check command line arguments
  const args = process.argv.slice(2);
  if (args.includes('status')) {
    master.runStatus();
  } else {
    master.run();
  }
}

module.exports = NavigationAutomationMaster;