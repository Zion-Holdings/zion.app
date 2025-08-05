#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

async function testMCPIntegration() {
  console.log('🧪 Testing MCP Integration...');
  
  try {
    // Check if MCP files exist
    const mcpFiles = [
      'mcp-automation-system.js',
      'mcp-client-integration.js',
      'automation/mcp-integration-orchestrator.js',
      'mcp-config.json',
      'test-mcp-integration.js'
    ];

    console.log('📁 Checking MCP files...');
    for (const file of mcpFiles) {
      if (fs.existsSync(file)) {
        console.log(`✅ ${file} exists`);
      } else {
        console.log(`❌ ${file} missing`);
        return false;
      }
    }

    // Check if MCP dependencies are installed
    console.log('📦 Checking MCP dependencies...');
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const mcpDependencies = [
      '@modelcontextprotocol/sdk',
      '@modelcontextprotocol/server-filesystem',
      '@modelcontextprotocol/server-memory',
      '@modelcontextprotocol/server-sequential-thinking',
      '@magneticwatermelon/mcp-toolkit'
    ];

    for (const dep of mcpDependencies) {
      if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
        console.log(`✅ ${dep} installed`);
      } else {
        console.log(`❌ ${dep} not installed`);
        return false;
      }
    }

    // Check if MCP scripts are added
    console.log('📝 Checking MCP scripts...');
    const mcpScripts = [
      'mcp:start',
      'mcp:client',
      'mcp:orchestrator',
      'mcp:enhance',
      'mcp:workflow',
      'mcp:report',
      'mcp:setup-cron',
      'mcp:daily',
      'mcp:weekly',
      'mcp:monitor',
      'mcp:status',
      'mcp:test'
    ];

    for (const script of mcpScripts) {
      if (packageJson.scripts[script]) {
        console.log(`✅ ${script} script added`);
      } else {
        console.log(`❌ ${script} script missing`);
        return false;
      }
    }

    // Check MCP configuration
    console.log('⚙️ Checking MCP configuration...');
    const mcpConfig = JSON.parse(fs.readFileSync('mcp-config.json', 'utf8'));
    
    if (mcpConfig.mcp && mcpConfig.mcp.name === 'bolt-automation-mcp') {
      console.log('✅ MCP configuration valid');
    } else {
      console.log('❌ MCP configuration invalid');
      return false;
    }

    // Check if tools are defined
    if (mcpConfig.tools && Object.keys(mcpConfig.tools).length > 0) {
      console.log(`✅ ${Object.keys(mcpConfig.tools).length} tool categories defined`);
    } else {
      console.log('❌ No tools defined');
      return false;
    }

    // Check if resources are defined
    if (mcpConfig.resources && Object.keys(mcpConfig.resources).length > 0) {
      console.log(`✅ ${Object.keys(mcpConfig.resources).length} resources defined`);
    } else {
      console.log('❌ No resources defined');
      return false;
    }

    console.log('🎉 MCP Integration test completed successfully!');
    console.log('');
    console.log('📋 MCP Integration Summary:');
    console.log('✅ All MCP files created');
    console.log('✅ All MCP dependencies installed');
    console.log('✅ All MCP scripts added to package.json');
    console.log('✅ MCP configuration is valid');
    console.log('✅ Tools and resources are defined');
    console.log('');
    console.log('🚀 Ready to use MCP integration!');
    console.log('   Run: npm run mcp:start');
    console.log('   Test: npm run mcp:test');
    console.log('   Enhance: npm run mcp:enhance');
    
    return true;

  } catch (error) {
    console.error('❌ MCP Integration test failed:', error.message);
    return false;
  }
}

// Run the test
if (require.main === module) {
  testMCPIntegration()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('Test failed:', error);
      process.exit(1);
    });
}

module.exports = { testMCPIntegration }; 