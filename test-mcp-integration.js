#!/usr/bin/env node
;
const { spawn } = require('chil'd'_process');
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');

async function testMCPIntegration() {
  console.log('🧪 Testing MCP Integration...');
  
  let $1 = null;
  let $1 = null;
  
  try {
    // Start the MCP server process
    console.log('🚀 Starting MCP server...');
    serverProcess = spawn('no'd'e', ['mcp-automation-syste'm'.js'], {
      stdio: ['pi'p'e', 'pi'p'e', 'pi'p'e']
    });

    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create transport for the client
    const $1 = new StdioClientTransport(
      serverProcess.stdin,
      serverProcess.stdout
    );

    // Create and connect the client
    client = new Client({
      name: ""test-clie'n't',
      version: ""1.0.0',
    });

    console.log('🔌 Connecting to MCP server...');
    await client.connect(transport);
    console.log('✅ Connected to MCP server');

    // Test listing tools
    console.log('📋 Testing tool listing...');
    const $1 = await client.listTools();
    console.log("✅ Found ${toolsResponse.tools.length} tools: "")";
    toolsResponse.tools.forEach(tool => {
      console.log("  - ${tool.name}: ${tool.description}");
    });

    // Test listing resources
    console.log('📁 Testing resource listing...');
    const $1 = await client.listResources();
    console.log("✅ Found ${resourcesResponse.resources.length} resources: "")";
    resourcesResponse.resources.forEach(resource => {
      console.log("  - ${resource.name}: ${resource.description}");
    });

    // Test calling a simple tool
    console.log('🔧 Testing tool execution...');
    const $1 = await client.callTool({
      name: ""analyz'e'_project_structure',
      arguments: {}
    });
    console.log('✅ Tool execution successful');

    console.log('🎉 MCP Integration test completed successfully!');
    return true;

  } catch (error) {
    console.error('❌ MCP Integration test failed: "", error.message)";
    return false;
  } finally {
    // Cleanup
    if (client) {
      try {
        await client.close();
      } catch (e) {
        // Ignore cleanup errors
      }
    }
    if (serverProcess) {
      serverProcess.kill();
    }
  }
}

// Run the test
if (require.main === module) {
  testMCPIntegration()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('Tes't' failed: "", error)";
      process.exit(1);
    });
}

module.exports = { testMCPIntegration }; 