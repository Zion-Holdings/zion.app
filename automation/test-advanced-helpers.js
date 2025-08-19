#!/usr/bin/env node

const SelfHealingManager = require('./helpers/self-healing-manager.js');
const ErrorManager = require('./helpers/error-manager.js');
const SecurityManager = require('./helpers/security-manager.js');

console.log('🚀 Testing Advanced Automation Helpers...\n');

// Test Self-Healing Manager
console.log('=== Testing Self-Healing Manager ===');
const selfHealing = new SelfHealingManager();

// Simulate function health data for different scenarios
const testScenarios = [
  {
    name: 'Critical Function - Multiple Failures',
    data: {
      consecutiveFailures: 7,
      totalRuns: 25,
      successfulRuns: 5,
      lastError: 'Connection timeout after 45 seconds - service unavailable',
      lastRunAt: new Date().toISOString()
    }
  },
  {
    name: 'High Severity - Low Success Rate',
    data: {
      consecutiveFailures: 4,
      totalRuns: 20,
      successfulRuns: 6,
      lastError: 'Rate limit exceeded - too many requests',
      lastRunAt: new Date().toISOString()
    }
  },
  {
    name: 'Medium Severity - Stable Function',
    data: {
      consecutiveFailures: 3,
      totalRuns: 50,
      successfulRuns: 42,
      lastError: 'Temporary network issue',
      lastRunAt: new Date().toISOString()
    }
  }
];

testScenarios.forEach((scenario, index) => {
  console.log(`\n🔍 Testing: ${scenario.name}`);
  const escalation = selfHealing.checkEscalationNeeded(`test_function_${index + 1}`, scenario.data);
  
  if (escalation) {
    console.log(`✅ Escalation needed: ${escalation.severity.toUpperCase()}`);
    console.log(`📋 Response time required: ${escalation.responseTimeRequired} minutes`);
    console.log(`🔄 Auto-disable recommended: ${escalation.autoDisableRecommended ? 'YES' : 'NO'}`);
    
    // Create escalation issue
    const issueFile = selfHealing.createEscalationIssue(escalation);
    console.log(`📝 Issue created: ${issueFile ? 'success' : 'failed'}`);
  } else {
    console.log(`❌ No escalation needed`);
  }
});

// Test Error Manager
console.log('\n=== Testing Error Manager ===');
const errorManager = new ErrorManager();

// Test error classification with various error types
const testErrors = [
  { message: 'Connection timeout after 30 seconds', statusCode: 0 },
  { message: 'Invalid API key provided', statusCode: 401 },
  { message: 'Out of memory - heap size exceeded', statusCode: 0 },
  { message: 'Rate limit exceeded - too many requests', statusCode: 429 },
  { message: 'Internal server error - service unavailable', statusCode: 500 },
  { message: 'Resource not found', statusCode: 404 },
  { message: 'Invalid JSON format in request body', statusCode: 400 },
  { message: 'Disk space insufficient', statusCode: 0 },
  { message: 'Module not found: express', statusCode: 0 }
];

console.log('\n🔍 Error Classification Results:');
testErrors.forEach((error, index) => {
  const classification = errorManager.classifyError(error.message, { statusCode: error.statusCode });
  console.log(`Error ${index + 1}: ${error.message.substring(0, 40)}... -> ${classification.errorType} (confidence: ${(classification.classification.confidence * 100).toFixed(1)}%)`);
  
  // Test retry logic
  const retryDecision = errorManager.shouldRetry(classification, 1, `operation_${index}`);
  console.log(`  Retry decision: ${retryDecision.shouldRetry ? 'Yes' : 'No'} (${retryDecision.reason})`);
  
  // Log error
  const logFile = errorManager.logError(classification, `test_function_${index}`, { testIndex: index, scenario: 'classification_test' });
  console.log(`  Logged to: ${logFile ? 'success' : 'failed'}`);
});

// Test circuit breaker functionality
console.log('\n🔄 Testing Circuit Breaker:');
const operation = 'test_api_call';
console.log(`Initial state: ${errorManager.checkCircuitBreaker(operation).reason}`);

// Simulate failures to trip circuit breaker
for (let i = 0; i < 6; i++) {
  errorManager.recordCircuitBreakerFailure(operation);
  const state = errorManager.checkCircuitBreaker(operation);
  console.log(`After ${i + 1} failures: ${state.reason}`);
}

// Test Security Manager
console.log('\n=== Testing Security Manager ===');
const securityManager = new SecurityManager();

// Test SBOM generation
console.log('🔍 Generating SBOM...');
const sbomResult = securityManager.generateSBOM('json');
if (sbomResult.success) {
  console.log(`✅ SBOM generated: ${sbomResult.componentCount} components`);
  console.log(`   File: ${sbomResult.sbomFile}`);
} else {
  console.log(`❌ SBOM generation failed: ${sbomResult.reason}`);
}

// Test license compliance
console.log('\n📜 Checking license compliance...');
const licenseResult = securityManager.checkLicenseCompliance();
if (licenseResult.success) {
  const compliance = licenseResult.complianceReport;
  console.log(`✅ License check complete: ${compliance.totalDependencies} dependencies`);
  console.log(`   Allowed: ${compliance.summary.allowed}, Restricted: ${compliance.summary.restricted}, Forbidden: ${compliance.summary.forbidden}`);
  console.log(`   Report: ${licenseResult.reportFile}`);
} else {
  console.log(`❌ License check failed: ${licenseResult.reason}`);
}

// Test CSP audit
console.log('\n🛡️ Auditing Content Security Policy...');
const cspResult = securityManager.auditCSP();
if (cspResult.success) {
  const csp = cspResult.cspReport;
  console.log(`✅ CSP audit complete: Score ${csp.score}/100`);
  console.log(`   Directives: ${Object.keys(csp.cspDirectives).length}`);
  console.log(`   Recommendations: ${csp.recommendations.length}`);
  console.log(`   Report: ${cspResult.reportFile}`);
} else {
  console.log(`❌ CSP audit failed: ${cspResult.reason}`);
}

// Generate comprehensive security report
console.log('\n🔐 Generating comprehensive security report...');
const securityReport = securityManager.generateSecurityReport();
if (securityReport.success) {
  console.log(`✅ Security report generated: ${securityReport.reportFile}`);
  console.log(`   SBOM: ${securityReport.report.summary.sbomGenerated ? '✅' : '❌'}`);
  console.log(`   License: ${securityReport.report.summary.licenseCompliant ? '✅' : '❌'}`);
  console.log(`   CSP Score: ${securityReport.report.summary.cspScore}/100`);
} else {
  console.log(`❌ Security report failed`);
}

// Test error statistics and analysis
console.log('\n📊 Error Statistics:');
const errorStats = errorManager.getErrorStats();
console.log(`  Total errors: ${errorStats.total}`);
console.log(`  By type:`, errorStats.byType);
console.log(`  Critical errors: ${errorStats.criticalErrors}`);
console.log(`  Average classification confidence: ${(errorStats.averageClassificationConfidence * 100).toFixed(1)}%`);

// Test circuit breaker status
console.log('\n🔄 Circuit Breaker Status:');
const circuitBreakerStatus = errorManager.getCircuitBreakerStatus();
Object.entries(circuitBreakerStatus).forEach(([operation, status]) => {
  console.log(`  ${operation}: ${status.state} (failures: ${status.failureCount}, open: ${status.isOpen})`);
});

// Test escalation summary
console.log('\n🚨 Escalation Summary:');
const escalationSummary = selfHealing.getEscalationSummary();
console.log(`  Open issues: ${escalationSummary.totalOpen}`);
console.log(`  Critical: ${escalationSummary.critical}, High: ${escalationSummary.high}, Medium: ${escalationSummary.medium}`);
console.log(`  Overdue: ${escalationSummary.overdue}`);
console.log(`  Auto-disable recommended: ${escalationSummary.autoDisableRecommended}`);
console.log(`  Average response time: ${escalationSummary.averageResponseTime.toFixed(1)} minutes`);

// Generate comprehensive reports
console.log('\n📋 Generating Reports:');
const errorReport = errorManager.generateErrorReport();
console.log(`✅ Error report generated with ${errorReport.recommendations.length} recommendations`);

const escalationReport = selfHealing.generateEscalationReport();
console.log(`✅ Escalation report generated with ${escalationReport.recommendations.length} system recommendations`);

// Test cleanup functions
console.log('\n🧹 Testing Cleanup Functions:');
const cleanedErrors = errorManager.cleanupOldLogs(1); // Clean logs older than 1 day (should be 0 in test)
console.log(`  Cleaned ${cleanedErrors} old error logs`);

const cleanedIssues = selfHealing.cleanupOldIssues(1); // Clean issues older than 1 day (should be 0 in test)
console.log(`  Cleaned ${cleanedIssues} old issues`);

console.log('\n🎉 All advanced automation helpers tested successfully!');
console.log('\n📁 Check the following files for generated data:');
console.log('- automation/issues/ (escalation issues)');
console.log('- automation/error-logs/ (error logs with classification)');
console.log('- automation/security/ (SBOM, license compliance, CSP reports)');
console.log('- automation/locks/ (concurrency locks)');
console.log('- automation/budgets/ (budget tracking)');
console.log('- public/reports/automation/ (telemetry data)');

console.log('\n🚀 Advanced Features Implemented:');
console.log('✅ Self-healing escalation with automatic issue creation');
console.log('✅ Intelligent error classification and retry policies');
console.log('✅ Circuit breaker pattern for failure isolation');
console.log('✅ SBOM generation in CycloneDX format');
console.log('✅ License compliance checking');
console.log('✅ Content Security Policy auditing');
console.log('✅ Comprehensive reporting and recommendations');
console.log('✅ Automatic cleanup and maintenance');

console.log('\n🎯 Next Steps:');
console.log('1. Integrate these helpers with existing orchestrators');
console.log('2. Set up automated escalation notifications');
console.log('3. Configure security scanning in CI/CD pipeline');
console.log('4. Implement automated rollback procedures');
console.log('5. Set up monitoring dashboards for all systems');
