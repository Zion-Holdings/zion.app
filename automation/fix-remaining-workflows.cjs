#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const WORKFLOWS_DIR = path.join(__dirname, '..', '.github', 'workflows');

// Manual fixes for specific workflows
const MANUAL_FIXES = {
  'accessibility-audit.yml': {
    name: 'Accessibility Audit',
    description: 'Automated accessibility testing and reporting'
  },
  'actionlint.yml': {
    name: 'Action Lint',
    description: 'GitHub Actions workflow validation and linting'
  },
  'actions-keepalive.yml': {
    name: 'Actions Keepalive',
    description: 'Keep GitHub Actions active and responsive'
  },
  'ai-changelog.yml': {
    name: 'AI Changelog Generator',
    description: 'AI-powered changelog generation and maintenance'
  },
  'ai-content-autonomy.yml': {
    name: 'AI Content Autonomy',
    description: 'Autonomous AI content creation and management'
  },
  'ai-content-factory.yml': {
    name: 'AI Content Factory',
    description: 'Automated AI content generation pipeline'
  },
  'ai-it-ads-sync.yml': {
    name: 'AI IT Ads Sync',
    description: 'AI-powered IT advertising synchronization'
  },
  'ai-it-innovations.yml': {
    name: 'AI IT Innovations',
    description: 'AI-driven IT innovation automation'
  },
  'ai-it-multi-factory.yml': {
    name: 'AI IT Multi Factory',
    description: 'Multi-factory AI IT automation system'
  },
  'ai-it-ultrafast-sync.yml': {
    name: 'AI IT Ultrafast Sync',
    description: 'Ultra-fast AI IT synchronization'
  },
  'ai-research-scout.yml': {
    name: 'AI Research Scout',
    description: 'AI-powered research scouting and discovery'
  },
  'ai-trends-radar.yml': {
    name: 'AI Trends Radar',
    description: 'AI trends monitoring and analysis'
  },
  'app-automation.yml': {
    name: 'App Automation',
    description: 'Application automation and orchestration'
  },
  'app-monitoring.yml': {
    name: 'App Monitoring',
    description: 'Application monitoring and alerting'
  },
  'auto-heal-workflows.yml': {
    name: 'Auto Heal Workflows',
    description: 'Automated workflow healing and recovery'
  },
  'auto-media-release.yml': {
    name: 'Auto Media Release',
    description: 'Automated media release management'
  },
  'auto-pr-automerge.yml': {
    name: 'Auto PR Automerge',
    description: 'Automated pull request merging'
  },
  'auto-pr-cursor-branches.yml': {
    name: 'Auto PR Cursor Branches',
    description: 'Automated PR cursor branch management'
  },
  'auto-semver-release.yml': {
    name: 'Auto Semver Release',
    description: 'Automated semantic versioning releases'
  },
  'cloud-agents-fast.yml': {
    name: 'Cloud Agents Fast',
    description: 'Fast cloud agent orchestration'
  },
  'cloud-agents.yml': {
    name: 'Cloud Agents',
    description: 'Cloud agent management and orchestration'
  },
  'cloud-autonomous-orchestrator.yml': {
    name: 'Cloud Autonomous Orchestrator',
    description: 'Autonomous cloud orchestration system'
  },
  'git-ultrafast-sync.yml': {
    name: 'Git Ultrafast Sync',
    description: 'Ultra-fast git synchronization'
  },
  'homepage-auto-advertiser.yml': {
    name: 'Homepage Auto Advertiser',
    description: 'Automated homepage advertising'
  },
  'homepage-auto-update.yml': {
    name: 'Homepage Auto Update',
    description: 'Automated homepage updates'
  },
  'instagram-marketing.yml': {
    name: 'Instagram Marketing',
    description: 'Instagram marketing automation'
  },
  'intelligent-content-generation.yml': {
    name: 'Intelligent Content Generation',
    description: 'AI-powered intelligent content creation'
  },
  'knowledge-graph-radar.yml': {
    name: 'Knowledge Graph Radar',
    description: 'Knowledge graph monitoring and analysis'
  },
  'lighthouse-budgets.yml': {
    name: 'Lighthouse Budgets',
    description: 'Lighthouse performance budget monitoring'
  },
  'lighthouse-live.yml': {
    name: 'Lighthouse Live',
    description: 'Live Lighthouse performance monitoring'
  },
  'link-auto-fix.yml': {
    name: 'Link Auto Fix',
    description: 'Automated link fixing and validation'
  },
  'link-scan-hourly.yml': {
    name: 'Link Scan Hourly',
    description: 'Hourly link scanning and validation'
  },
  'linkedin-marketing.yml': {
    name: 'LinkedIn Marketing',
    description: 'LinkedIn marketing automation'
  },
  'linkedin-pro.yml': {
    name: 'LinkedIn Pro',
    description: 'Professional LinkedIn automation'
  },
  'maintenance.yml': {
    name: 'Repository Maintenance',
    description: 'Automated repository maintenance tasks'
  },
  'marketing-sync.yml': {
    name: 'Marketing Sync',
    description: 'Marketing automation synchronization'
  },
  'media-optimizer.yml': {
    name: 'Media Optimizer',
    description: 'Media optimization and compression'
  },
  'netlify-auto-healer.yml': {
    name: 'Netlify Auto Healer',
    description: 'Automated Netlify deployment healing'
  },
  'netlify-automation.yml': {
    name: 'Netlify Automation',
    description: 'Netlify deployment automation'
  },
  'netlify-config.yml': {
    name: 'Netlify Configuration',
    description: 'Netlify configuration management'
  },
  'netlify-functions-trigger.yml': {
    name: 'Netlify Functions Trigger',
    description: 'Netlify functions deployment triggers'
  },
  'og-image-refresh.yml': {
    name: 'OG Image Refresh',
    description: 'Open Graph image refresh automation'
  },
  'og-image-update.yml': {
    name: 'OG Image Update',
    description: 'Open Graph image update automation'
  },
  'optimize-images.yml': {
    name: 'Optimize Images',
    description: 'Image optimization and compression'
  },
  'performance-audit.yml': {
    name: 'Performance Audit',
    description: 'Performance auditing and optimization'
  },
  'performance-monitoring.yml': {
    name: 'Performance Monitoring',
    description: 'Performance monitoring and alerting'
  },
  'pin-actions-weekly.yml': {
    name: 'Pin Actions Weekly',
    description: 'Weekly GitHub Actions version pinning'
  },
  'pr-auto-curator.yml': {
    name: 'PR Auto Curator',
    description: 'Automated PR curation and management'
  },
  'pr-quality-gate.yml': {
    name: 'PR Quality Gate',
    description: 'Pull request quality gate enforcement'
  },
  'pr-size-labeler.yml': {
    name: 'PR Size Labeler',
    description: 'Automated PR size labeling'
  },
  'pr-smoke.yml': {
    name: 'PR Smoke Test',
    description: 'Pull request smoke testing'
  },
  'pr-update-with-main.yml': {
    name: 'PR Update with Main',
    description: 'Automated PR updates with main branch'
  },
  'rapid-git-sync.yml': {
    name: 'Rapid Git Sync',
    description: 'Rapid git synchronization'
  },
  'readme-auto-advertiser.yml': {
    name: 'README Auto Advertiser',
    description: 'Automated README advertising'
  },
  'readme-autogen.yml': {
    name: 'README Auto Generator',
    description: 'Automated README generation'
  },
  'release-drafter.yml': {
    name: 'Release Drafter',
    description: 'Automated release drafting'
  },
  'repo-knowledge-graph.yml': {
    name: 'Repository Knowledge Graph',
    description: 'Repository knowledge graph generation'
  },
  'repo-radar.yml': {
    name: 'Repository Radar',
    description: 'Repository monitoring and analysis'
  },
  'responsive-content.yml': {
    name: 'Responsive Content',
    description: 'Responsive content optimization'
  },
  'self-healing-build.yml': {
    name: 'Self Healing Build',
    description: 'Self-healing build automation'
  },
  'self-replicating-factory-manager.yml': {
    name: 'Self Replicating Factory Manager',
    description: 'Self-replicating automation factory'
  },
  'seo-validator.yml': {
    name: 'SEO Validator',
    description: 'SEO validation and optimization'
  },
  'site-health-guardian.yml': {
    name: 'Site Health Guardian',
    description: 'Site health monitoring and protection'
  },
  'site-link.yml': {
    name: 'Site Link',
    description: 'Site link management and validation'
  },
  'sitemap-and-search.yml': {
    name: 'Sitemap and Search',
    description: 'Sitemap and search optimization'
  },
  'sitemap-daily.yml': {
    name: 'Sitemap Daily',
    description: 'Daily sitemap generation'
  },
  'test-auth.yml': {
    name: 'Test Authentication',
    description: 'Authentication testing automation'
  },
  'todo-issue-sync.yml': {
    name: 'TODO Issue Sync',
    description: 'TODO issue synchronization'
  },
  'topics-and-clusters.yml': {
    name: 'Topics and Clusters',
    description: 'Topic clustering and organization'
  },
  'ultra-rapid-sync.yml': {
    name: 'Ultra Rapid Sync',
    description: 'Ultra-rapid synchronization'
  },
  'unused-deps-cleaner.yml': {
    name: 'Unused Dependencies Cleaner',
    description: 'Unused dependency cleanup'
  },
  'unused-exports-report.yml': {
    name: 'Unused Exports Report',
    description: 'Unused exports reporting'
  },
  'variation.yml': {
    name: 'Variation Testing',
    description: 'A/B variation testing automation'
  },
  'venture.yml': {
    name: 'Venture Automation',
    description: 'Venture-related automation'
  },
  'workflow-auto-healer.yml': {
    name: 'Workflow Auto Healer',
    description: 'Automated workflow healing'
  },
  'workflow-health-monitor.yml': {
    name: 'Workflow Health Monitor',
    description: 'Workflow health monitoring'
  },
  'workflow-manager.yml': {
    name: 'Workflow Manager',
    description: 'Workflow management and orchestration'
  },
  'workflow-radar.yml': {
    name: 'Workflow Radar',
    description: 'Workflow monitoring and analysis'
  },
  'workflow-supervisor.yml': {
    name: 'Workflow Supervisor',
    description: 'Workflow supervision and control'
  },
  'workflow-watchdog.yml': {
    name: 'Workflow Watchdog',
    description: 'Workflow monitoring and alerting'
  },
  'yaml-auto-fixer-simple.yml': {
    name: 'YAML Auto Fixer Simple',
    description: 'Simple YAML auto-fixing'
  },
  'yaml-auto-fixer.yml': {
    name: 'YAML Auto Fixer',
    description: 'YAML auto-fixing and validation'
  },
  'yaml-validator.yml': {
    name: 'YAML Validator',
    description: 'YAML validation and linting'
  }
};

function fixRemainingWorkflows() {
  console.log('🔧 Fixing remaining workflow issues...\n');
  
  if (!fs.existsSync(WORKFLOWS_DIR)) {
    console.log('❌ Workflows directory not found');
    return;
  }
  
  let fixed = 0;
  let skipped = 0;
  
  for (const [filename, fix] of Object.entries(MANUAL_FIXES)) {
    const filePath = path.join(WORKFLOWS_DIR, filename);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filename}`);
      continue;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix generic workflow name
    if (content.includes('name: Workflow')) {
      content = content.replace('name: Workflow', `name: ${fix.name}`);
      modified = true;
    }
    
    // Fix generic job name
    if (content.includes('name: Main Job')) {
      content = content.replace('name: Main Job', `name: ${fix.name} Job`);
      modified = true;
    }
    
    // Fix generic step name
    if (content.includes('name: Run workflow')) {
      content = content.replace('name: Run workflow', `name: Run ${fix.name.toLowerCase()}`);
      modified = true;
    }
    
    // Fix generic echo message
    if (content.includes('echo "Workflow Workflow completed successfully"')) {
      content = content.replace('echo "Workflow Workflow completed successfully"', `echo "${fix.description} completed successfully"`);
      modified = true;
    }
    
    // Fix concurrency group
    if (content.includes('group: workflow-${{ github.ref }}')) {
      const groupName = filename.replace('.yml', '').replace('.yaml', '');
      content = content.replace('group: workflow-${{ github.ref }}', `group: ${groupName}`);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filename}`);
      fixed++;
    } else {
      skipped++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  Fixed: ${fixed} workflows`);
  console.log(`  Skipped: ${skipped} workflows`);
  console.log(`  Total: ${Object.keys(MANUAL_FIXES).length} workflows`);
  
  if (fixed > 0) {
    console.log('\n🎉 Remaining workflow fixes completed!');
  } else {
    console.log('\n✨ No additional fixes needed!');
  }
}

if (require.main === module) {
  fixRemainingWorkflows();
}

module.exports = { fixRemainingWorkflows };
