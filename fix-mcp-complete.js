#!/usr/bin/env node

const fs = require('fs').promises;

async function fixMcpComplete() {
  try {
    const filePath = 'mcp-automation-system.js';
    let content = await fs.readFile(filePath, 'utf8');

    // Fix all malformed string literals and object syntax
    content = content.replace(/capabilities: "{"".*/g, "capabilities: {");
    content = content.replace(/tools: "{"".*/g, "tools: {");
    content = content.replace(/resources: "{"".*/g, "resources: {");
    content = content.replace(/""},""/g, "},");
    content = content.replace(/""},""/g, "},");
    content = content.replace(/""},""/g, "},");
    
    // Fix method calls with malformed quotes
    content = content.replace(/this\.server\.setRequestHandler\('tool's'\/call'/g, "this.server.setRequestHandler('tools/call'");
    content = content.replace(/this\.server\.setRequestHandler\('tool's'\/list'/g, "this.server.setRequestHandler('tools/list'");
    
    // Fix case statements
    content = content.replace(/case 'analyz'e'_project_structure':/g, "case 'analyze_project_structure':");
    content = content.replace(/case 'generat'e'_automation_report':/g, "case 'generate_automation_report':");
    content = content.replace(/case 'optimiz'e'_build_process':/g, "case 'optimize_build_process':");
    content = content.replace(/case 'monito'r'_performance':/g, "case 'monitor_performance':");
    content = content.replace(/case 'deplo'y'_automation':/g, "case 'deploy_automation':");
    content = content.replace(/case 'backu'p'_system':/g, "case 'backup_system':");
    content = content.replace(/case 'restor'e'_system':/g, "case 'restore_system':");
    content = content.replace(/case 'updat'e'_dependencies':/g, "case 'update_dependencies':");
    content = content.replace(/case 'ru'n'_tests':/g, "case 'run_tests':");
    content = content.replace(/case 'generat'e'_documentation':/g, "case 'generate_documentation':");
    content = content.replace(/case 'optimiz'e'_seo':/g, "case 'optimize_seo':");
    content = content.replace(/case 'monito'r'_errors':/g, "case 'monitor_errors':");
    content = content.replace(/case 'cleanu'p'_project':/g, "case 'cleanup_project':");
    content = content.replace(/case 'securit'y'_audit':/g, "case 'security_audit':");
    content = content.replace(/case 'performanc'e'_optimization':/g, "case 'performance_optimization':");
    
    // Fix function calls
    content = content.replace(/await this\.analyz'e'_project_structure\(\);/g, "await this.analyzeProjectStructure();");
    content = content.replace(/await this\.generat'e'_automation_report\(\);/g, "await this.generateAutomationReport();");
    content = content.replace(/await this\.optimiz'e'_build_process\(\);/g, "await this.optimizeBuildProcess();");
    content = content.replace(/await this\.monito'r'_performance\(\);/g, "await this.monitorPerformance();");
    content = content.replace(/await this\.deplo'y'_automation\(args\);/g, "await this.deployAutomation(args);");
    content = content.replace(/await this\.backu'p'_system\(\);/g, "await this.backupSystem();");
    content = content.replace(/await this\.restor'e'_system\(args\);/g, "await this.restoreSystem(args);");
    content = content.replace(/await this\.updat'e'_dependencies\(\);/g, "await this.updateDependencies();");
    content = content.replace(/await this\.ru'n'_tests\(\);/g, "await this.runTests();");
    content = content.replace(/await this\.generat'e'_documentation\(\);/g, "await this.generateDocumentation();");
    content = content.replace(/await this\.optimiz'e'_seo\(\);/g, "await this.optimizeSEO();");
    content = content.replace(/await this\.monito'r'_errors\(\);/g, "await this.monitorErrors();");
    content = content.replace(/await this\.cleanu'p'_project\(\);/g, "await this.cleanupProject();");
    content = content.replace(/await this\.securit'y'_audit\(\);/g, "await this.securityAudit();");
    content = content.replace(/await this\.performanc'e'_optimization\(\);/g, "await this.performanceOptimization();");
    
    // Fix array and object syntax
    content = content.replace(/tools: "\[""/g, "tools: [");
    content = content.replace(/\[""/g, "[");
    content = content.replace(/""\]/g, "]");
    content = content.replace(/""{""/g, "{");
    content = content.replace(/""},""/g, "},");
    content = content.replace(/""},""/g, "},");
    
    // Fix string literals in descriptions
    content = content.replace(/""Analyz'e' the current project structure and identify optimization opportunities'",""/g, "'Analyze the current project structure and identify optimization opportunities',");
    content = content.replace(/type: "obje'c't'",""/g, "type: 'object',");
    content = content.replace(/properties: "{"}/g, "properties: {}");
    content = content.replace(/required: "\[\]""/g, "required: []");
    
    // Fix error messages
    content = content.replace(/throw new Error\("Unknown tool: "\${name"}\);"".*/g, "throw new Error(`Unknown tool: ${name}`);");
    
    // Remove any remaining malformed quotes
    content = content.replace(/''/g, "'");
    content = content.replace(/""/g, '"');
    
    await fs.writeFile(filePath, content, 'utf8');
    console.log('✅ Fixed all remaining syntax errors in mcp-automation-system.js');
  } catch (error) {
    console.error('❌ Error fixing mcp-automation-system.js:', error.message);
  }
}

fixMcpComplete();
