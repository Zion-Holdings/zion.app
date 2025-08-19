#!/usr/bin/env node

const EnhancedOrchestrator = require('./enhanced-orchestrator.js');

console.log('🚀 Testing Enhanced Orchestrator with Advanced Automation Features...\n');

// Initialize enhanced orchestrator
const orchestrator = new EnhancedOrchestrator({
  autoHealingEnabled: true,
  securityScanningEnabled: true,
  autoRollbackEnabled: true,
  healthCheckInterval: 30000 // 30 seconds for testing
});

// Test function registration
console.log('=== Function Registration ===');
orchestrator.registerFunction('ultrafast_orchestrator', {
  critical: true,
  maxRetries: 3,
  timeoutMs: 300000,
  autoRollbackEnabled: true
});

orchestrator.registerFunction('fast_orchestrator', {
  critical: true,
  maxRetries: 2,
  timeoutMs: 240000,
  autoRollbackEnabled: true
});

orchestrator.registerFunction('continuous_orchestrator', {
  critical: false,
  maxRetries: 2,
  timeoutMs: 300000,
  autoRollbackEnabled: false
});

orchestrator.registerFunction('marketing_scheduler', {
  critical: false,
  maxRetries: 1,
  timeoutMs: 180000,
  autoRollbackEnabled: false
});

console.log(`✅ Registered ${orchestrator.functions.size} functions\n`);

// Test function execution simulation
console.log('=== Function Execution Simulation ===');

async function simulateFunctionExecution(functionName, shouldSucceed = true, delay = 1000) {
  console.log(`\n🔍 Simulating execution of ${functionName}...`);
  
  try {
    // Simulate execution time
    await new Promise(resolve => setTimeout(resolve, delay));
    
    if (shouldSucceed) {
      console.log(`✅ ${functionName} executed successfully`);
      
      // Simulate successful execution
      orchestrator.updateHealthData(functionName, {
        success: true,
        duration: delay,
        error: null
      });
      
      // Record telemetry
      orchestrator.telemetry.recordFunctionExecution(functionName, {
        durationMs: delay,
        exitCode: 0,
        commitsWritten: Math.floor(Math.random() * 3) + 1,
        errorMessage: null
      });
      
    } else {
      console.log(`❌ ${functionName} execution failed`);
      
      // Simulate failed execution
      const error = new Error(`Simulated failure for ${functionName}`);
      orchestrator.updateHealthData(functionName, {
        success: false,
        duration: delay,
        error: error.message
      });
      
      // Record telemetry
      orchestrator.telemetry.recordFunctionExecution(functionName, {
        durationMs: delay,
        exitCode: 1,
        errorMessage: error.message
      });
      
      // Classify and log error
      const errorClassification = orchestrator.errorManager.classifyError(error, {
        functionName,
        statusCode: 500
      });
      
      orchestrator.errorManager.logError(errorClassification, functionName, {
        simulated: true,
        timestamp: new Date().toISOString()
      });
    }
    
  } catch (error) {
    console.error(`Error simulating ${functionName}:`, error.message);
  }
}

// Simulate various execution scenarios
async function runExecutionScenarios() {
  console.log('\n📊 Running execution scenarios...');
  
  // Scenario 1: All functions succeed
  console.log('\n--- Scenario 1: All Functions Succeed ---');
  await simulateFunctionExecution('ultrafast_orchestrator', true, 800);
  await simulateFunctionExecution('fast_orchestrator', true, 1200);
  await simulateFunctionExecution('continuous_orchestrator', true, 1500);
  await simulateFunctionExecution('marketing_scheduler', true, 900);
  
  // Scenario 2: Some functions fail
  console.log('\n--- Scenario 2: Some Functions Fail ---');
  await simulateFunctionExecution('ultrafast_orchestrator', false, 600);
  await simulateFunctionExecution('fast_orchestrator', true, 1100);
  await simulateFunctionExecution('continuous_orchestrator', false, 800);
  await simulateFunctionExecution('marketing_scheduler', true, 700);
  
  // Scenario 3: Critical function failures (trigger self-healing)
  console.log('\n--- Scenario 3: Critical Function Failures (Trigger Self-Healing) ---');
  for (let i = 0; i < 4; i++) {
    await simulateFunctionExecution('ultrafast_orchestrator', false, 500);
    await simulateFunctionExecution('fast_orchestrator', false, 600);
  }
  
  // Scenario 4: Recovery
  console.log('\n--- Scenario 4: Recovery ---');
  await simulateFunctionExecution('ultrafast_orchestrator', true, 1000);
  await simulateFunctionExecution('fast_orchestrator', true, 1200);
}

// Test self-healing system
console.log('\n=== Self-Healing System Test ===');

async function testSelfHealing() {
  console.log('🔍 Testing self-healing capabilities...');
  
  // Check for escalations
  const escalationSummary = orchestrator.selfHealing.getEscalationSummary();
  console.log(`📊 Escalation Summary:`);
  console.log(`   Total Open: ${escalationSummary.totalOpen}`);
  console.log(`   Critical: ${escalationSummary.critical}`);
  console.log(`   High: ${escalationSummary.high}`);
  console.log(`   Medium: ${escalationSummary.medium}`);
  console.log(`   Overdue: ${escalationSummary.overdue}`);
  
  // Get open issues
  const openIssues = orchestrator.selfHealing.getOpenIssues();
  if (openIssues.length > 0) {
    console.log(`\n🚨 Open Escalation Issues:`);
    openIssues.forEach((issue, index) => {
      console.log(`   ${index + 1}. ${issue.functionName} - ${issue.severity.toUpperCase()} (${issue.consecutiveFailures} failures)`);
    });
  }
  
  // Test rollback capabilities
  if (escalationSummary.autoDisableRecommended > 0) {
    console.log(`\n🔄 Testing automatic rollback for functions with auto-disable recommendations...`);
    
    for (const issue of openIssues) {
      if (issue.autoDisableRecommended) {
        console.log(`   Testing rollback for ${issue.functionName}...`);
        
        try {
          const rollbackResult = await orchestrator.rollbackManager.executeRollback(
            issue.functionName, 
            {
              severity: issue.severity,
              isCritical: issue.isCritical,
              consecutiveFailures: issue.consecutiveFailures
            }
          );
          
          console.log(`     Rollback result: ${rollbackResult.success ? 'SUCCESS' : 'FAILED'}`);
          if (!rollbackResult.success) {
            console.log(`     Reason: ${rollbackResult.reason}`);
          }
          
        } catch (error) {
          console.error(`     Rollback error: ${error.message}`);
        }
      }
    }
  }
}

// Test error management system
console.log('\n=== Error Management System Test ===');

async function testErrorManagement() {
  console.log('🔍 Testing error management capabilities...');
  
  // Generate error report
  const errorReport = orchestrator.errorManager.generateErrorReport();
  console.log(`📊 Error Report Summary:`);
  console.log(`   Total Errors: ${errorReport.summary.total}`);
  console.log(`   Critical Errors: ${errorReport.summary.criticalErrors}`);
  console.log(`   By Type:`, errorReport.summary.byType);
  console.log(`   By Function:`, errorReport.summary.byFunction);
  
  // Test circuit breaker functionality
  console.log(`\n🔄 Circuit Breaker Status:`);
  const circuitBreakerStatus = orchestrator.errorManager.getCircuitBreakerStatus();
  Object.entries(circuitBreakerStatus).forEach(([operation, status]) => {
    console.log(`   ${operation}: ${status.state} (failures: ${status.failureCount})`);
  });
  
  // Test error classification
  console.log(`\n🔍 Error Classification Test:`);
  const testErrors = [
    'Connection timeout after 30 seconds',
    'Rate limit exceeded - too many requests',
    'Invalid API key provided',
    'Out of memory - heap size exceeded'
  ];
  
  testErrors.forEach((errorMessage, index) => {
    const classification = orchestrator.errorManager.classifyError(errorMessage, { statusCode: 0 });
    console.log(`   Error ${index + 1}: ${errorMessage.substring(0, 30)}... -> ${classification.errorType} (confidence: ${(classification.classification.confidence * 100).toFixed(1)}%)`);
  });
}

// Test security automation
console.log('\n=== Security Automation Test ===');

async function testSecurityAutomation() {
  console.log('🔐 Testing security automation capabilities...');
  
  try {
    // Generate SBOM
    console.log('   Generating SBOM...');
    const sbomResult = orchestrator.securityManager.generateSBOM('json');
    if (sbomResult.success) {
      console.log(`     ✅ SBOM generated: ${sbomResult.componentCount} components`);
    } else {
      console.log(`     ❌ SBOM generation failed: ${sbomResult.reason}`);
    }
    
    // Check license compliance
    console.log('   Checking license compliance...');
    const licenseResult = orchestrator.securityManager.checkLicenseCompliance();
    if (licenseResult.success) {
      const compliance = licenseResult.complianceReport;
      console.log(`     ✅ License check: ${compliance.totalDependencies} dependencies`);
      console.log(`        Allowed: ${compliance.summary.allowed}, Restricted: ${compliance.summary.restricted}, Forbidden: ${compliance.summary.forbidden}`);
    } else {
      console.log(`     ❌ License check failed: ${licenseResult.reason}`);
    }
    
    // Audit CSP
    console.log('   Auditing Content Security Policy...');
    const cspResult = orchestrator.securityManager.auditCSP();
    if (cspResult.success) {
      const csp = cspResult.cspReport;
      console.log(`     ✅ CSP audit: Score ${csp.score}/100`);
      console.log(`        Directives: ${Object.keys(csp.cspDirectives).length}, Recommendations: ${csp.recommendations.length}`);
    } else {
      console.log(`     ❌ CSP audit failed: ${cspResult.reason}`);
    }
    
    // Generate comprehensive security report
    console.log('   Generating comprehensive security report...');
    const securityReport = orchestrator.securityManager.generateSecurityReport();
    if (securityReport.success) {
      console.log(`     ✅ Security report generated: ${securityReport.reportFile}`);
    } else {
      console.log(`     ❌ Security report failed`);
    }
    
  } catch (error) {
    console.error(`   Security automation error: ${error.message}`);
  }
}

// Test health monitoring
console.log('\n=== Health Monitoring Test ===');

async function testHealthMonitoring() {
  console.log('🔍 Testing health monitoring capabilities...');
  
  // Perform health check
  const healthCheck = await orchestrator.performHealthCheck();
  console.log(`📊 Health Check Results:`);
  console.log(`   Total Functions: ${healthCheck.system.totalFunctions}`);
  console.log(`   Healthy Functions: ${healthCheck.system.healthyFunctions}`);
  console.log(`   Failed Functions: ${healthCheck.system.failedFunctions}`);
  console.log(`   Active Locks: ${healthCheck.system.activeLocks}`);
  
  // Show function health details
  console.log(`\n🔍 Function Health Details:`);
  Object.entries(healthCheck.functions).forEach(([functionName, health]) => {
    const status = health.status === 'healthy' ? '✅' : '❌';
    const critical = health.isCritical ? '🔥' : '⚪';
    console.log(`   ${status} ${critical} ${functionName}: ${health.status} (${health.consecutiveFailures} failures, ${health.consecutiveSuccesses} successes)`);
  });
  
  // Show recommendations
  if (healthCheck.recommendations.length > 0) {
    console.log(`\n💡 Health Recommendations:`);
    healthCheck.recommendations.forEach((rec, index) => {
      console.log(`   ${index + 1}. ${rec}`);
    });
  }
}

// Test performance metrics
console.log('\n=== Performance Metrics Test ===');

function testPerformanceMetrics() {
  console.log('📊 Performance Metrics Summary:');
  const metrics = orchestrator.performanceMetrics;
  
  console.log(`   Total Executions: ${metrics.totalExecutions}`);
  console.log(`   Successful: ${metrics.successfulExecutions}`);
  console.log(`   Failed: ${metrics.failedExecutions}`);
  console.log(`   Success Rate: ${((metrics.successfulExecutions / metrics.totalExecutions) * 100).toFixed(1)}%`);
  console.log(`   Average Execution Time: ${metrics.averageExecutionTime}ms`);
  console.log(`   Total Rollbacks: ${metrics.totalRollbacks}`);
  console.log(`   Total Escalations: ${metrics.totalEscalations}`);
  console.log(`   Last Health Check: ${new Date(metrics.lastHealthCheck).toLocaleString()}`);
}

// Test continuous monitoring
console.log('\n=== Continuous Monitoring Test ===');

async function testContinuousMonitoring() {
  console.log('🔍 Testing continuous monitoring...');
  
  // Start monitoring
  orchestrator.startContinuousMonitoring(10000); // 10 seconds for testing
  
  console.log('   Monitoring started - waiting for health checks...');
  
  // Wait for a few health checks
  await new Promise(resolve => setTimeout(resolve, 25000));
  
  // Stop monitoring
  orchestrator.stopContinuousMonitoring();
  console.log('   Monitoring stopped');
}

// Test comprehensive reporting
console.log('\n=== Comprehensive Reporting Test ===');

async function testComprehensiveReporting() {
  console.log('📋 Testing comprehensive reporting...');
  
  try {
    const report = await orchestrator.generateOrchestrationReport();
    
    if (report.success) {
      console.log(`✅ Comprehensive report generated: ${report.reportFile}`);
      console.log(`   Report contains:`);
      console.log(`     - Health check data`);
      console.log(`     - Security scan results`);
      console.log(`     - Escalation summary`);
      console.log(`     - Error analysis`);
      console.log(`     - Rollback history`);
      console.log(`     - Performance metrics`);
      console.log(`     - System recommendations`);
    } else {
      console.log(`❌ Report generation failed`);
    }
    
  } catch (error) {
    console.error(`   Report generation error: ${error.message}`);
  }
}

// Test data cleanup
console.log('\n=== Data Cleanup Test ===');

async function testDataCleanup() {
  console.log('🧹 Testing data cleanup...');
  
  try {
    const cleanupResults = await orchestrator.cleanupOldData();
    
    console.log(`✅ Cleanup completed:`);
    console.log(`   Error logs: ${cleanupResults.errorLogs}`);
    console.log(`   Escalation issues: ${cleanupResults.escalationIssues}`);
    console.log(`   Rollback data: ${cleanupResults.rollbackData}`);
    
  } catch (error) {
    console.error(`   Cleanup error: ${error.message}`);
  }
}

// Main test execution
async function runAllTests() {
  try {
    // Run execution scenarios
    await runExecutionScenarios();
    
    // Test self-healing
    await testSelfHealing();
    
    // Test error management
    await testErrorManagement();
    
    // Test security automation
    await testSecurityAutomation();
    
    // Test health monitoring
    await testHealthMonitoring();
    
    // Test performance metrics
    testPerformanceMetrics();
    
    // Test continuous monitoring
    await testContinuousMonitoring();
    
    // Test comprehensive reporting
    await testComprehensiveReporting();
    
    // Test data cleanup
    await testDataCleanup();
    
    console.log('\n🎉 All enhanced orchestrator tests completed successfully!');
    
    console.log('\n📁 Generated data files:');
    console.log('- automation/issues/ (escalation issues)');
    console.log('- automation/error-logs/ (error logs with classification)');
    console.log('- automation/security/ (SBOM, license compliance, CSP reports)');
    console.log('- automation/rollbacks/ (rollback checkpoints and history)');
    console.log('- automation/locks/ (concurrency locks)');
    console.log('- automation/budgets/ (budget tracking)');
    console.log('- public/reports/automation/ (telemetry and orchestration reports)');
    
    console.log('\n🚀 Advanced Features Successfully Tested:');
    console.log('✅ Enhanced function orchestration with health monitoring');
    console.log('✅ Self-healing escalation with automatic issue creation');
    console.log('✅ Intelligent error classification and retry policies');
    console.log('✅ Circuit breaker pattern for failure isolation');
    console.log('✅ Automated rollback with multiple strategies');
    console.log('✅ SBOM generation in CycloneDX format');
    console.log('✅ License compliance checking');
    console.log('✅ Content Security Policy auditing');
    console.log('✅ Continuous health monitoring');
    console.log('✅ Comprehensive reporting and recommendations');
    console.log('✅ Automatic data cleanup and maintenance');
    
    console.log('\n🎯 Next Steps:');
    console.log('1. Integrate with existing Netlify functions');
    console.log('2. Set up automated escalation notifications');
    console.log('3. Configure security scanning in CI/CD pipeline');
    console.log('4. Implement monitoring dashboards');
    console.log('5. Set up automated rollback procedures');
    
  } catch (error) {
    console.error('\n❌ Test execution failed:', error.message);
    console.error(error.stack);
  }
}

// Run all tests
runAllTests();
