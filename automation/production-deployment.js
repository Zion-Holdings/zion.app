#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

// Import deployment and optimization managers
const DeploymentManager = require('./helpers/deployment-manager.js');
const PerformanceOptimizer = require('./helpers/performance-optimizer.js');
const ControlGuard = require('./helpers/control-guard.js');
const Telemetry = require('./helpers/telemetry.js');

console.log('🚀 Zion Tech Group - Production Deployment of Enhanced Automation System');
console.log('================================================================\n');

// Production deployment configuration
const PRODUCTION_CONFIG = {
  enhancedOrchestrator: true,
  securityGates: true,
  notificationSystem: true,
  performanceOptimizer: true,
  deploymentMode: 'production',
  enableMonitoring: true,
  enableAutoRollback: true,
  enableHealthChecks: true
};

// Initialize managers
const deploymentManager = new DeploymentManager({
  deploymentEnabled: true,
  healthCheckEnabled: true,
  autoRollbackEnabled: true
});

const performanceOptimizer = new PerformanceOptimizer({
  optimizationEnabled: true,
  adaptiveScheduling: true,
  resourceOptimization: true,
  predictiveMaintenance: true
});

const controlGuard = new ControlGuard();
const telemetry = new Telemetry();

/**
 * Main production deployment function
 */
async function executeProductionDeployment() {
  const startTime = Date.now();
  console.log('📋 Starting production deployment process...\n');

  try {
    // Step 1: Pre-deployment validation
    console.log('🔍 Step 1: Pre-deployment validation');
    const validationResult = await validateProductionReadiness();
    if (!validationResult.success) {
      throw new Error(`Production validation failed: ${validationResult.reason}`);
    }
    console.log('✅ Production validation completed successfully\n');

    // Step 2: Create deployment backup
    console.log('💾 Step 2: Creating deployment backup');
    const backupResult = await createDeploymentBackup();
    if (!backupResult.success) {
      throw new Error(`Backup creation failed: ${backupResult.reason}`);
    }
    console.log('✅ Deployment backup created successfully\n');

    // Step 3: Execute production deployment
    console.log('🚀 Step 3: Executing production deployment');
    const deploymentResult = await deploymentManager.startProductionDeployment(PRODUCTION_CONFIG);
    if (!deploymentResult.success) {
      throw new Error(`Production deployment failed: ${deploymentResult.reason}`);
    }
    console.log('✅ Production deployment completed successfully\n');

    // Step 4: Post-deployment optimization
    console.log('⚡ Step 4: Post-deployment optimization');
    const optimizationResult = await executePostDeploymentOptimization();
    if (!optimizationResult.success) {
      console.warn('⚠️ Post-deployment optimization had issues, but deployment succeeded');
    } else {
      console.log('✅ Post-deployment optimization completed successfully\n');
    }

    // Step 5: Final validation and monitoring setup
    console.log('🔍 Step 5: Final validation and monitoring setup');
    const finalValidationResult = await executeFinalValidation();
    if (!finalValidationResult.success) {
      throw new Error(`Final validation failed: ${finalValidationResult.reason}`);
    }
    console.log('✅ Final validation completed successfully\n');

    const duration = Date.now() - startTime;
    
    // Record deployment telemetry
    telemetry.recordFunctionExecution('production_deployment', {
      durationMs: duration,
      exitCode: 0,
      commitsWritten: 0,
      errorMessage: null
    });

    console.log('🎉 PRODUCTION DEPLOYMENT COMPLETED SUCCESSFULLY!');
    console.log(`⏱️  Total deployment time: ${Math.round(duration / 1000)} seconds`);
    console.log(`🆔 Deployment ID: ${deploymentResult.deploymentId}`);
    console.log('\n🚀 Enhanced automation system is now live in production!');
    console.log('\n📊 Next steps:');
    console.log('   • Monitor system health and performance');
    console.log('   • Review automation logs and metrics');
    console.log('   • Configure alerting and notifications');
    console.log('   • Schedule regular maintenance windows');

    return {
      success: true,
      deploymentId: deploymentResult.deploymentId,
      duration,
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`\n❌ PRODUCTION DEPLOYMENT FAILED after ${Math.round(duration / 1000)} seconds`);
    console.error(`Error: ${error.message}`);
    
    // Record failure telemetry
    telemetry.recordFunctionExecution('production_deployment', {
      durationMs: duration,
      exitCode: 1,
      errorMessage: error.message
    });

    // Attempt emergency rollback
    console.log('\n🔄 Attempting emergency rollback...');
    try {
      const rollbackResult = await deploymentManager.executeRollback(PRODUCTION_CONFIG);
      if (rollbackResult.success) {
        console.log('✅ Emergency rollback completed successfully');
      } else {
        console.error('❌ Emergency rollback failed');
      }
    } catch (rollbackError) {
      console.error('❌ Emergency rollback error:', rollbackError.message);
    }

    return {
      success: false,
      error: error.message,
      duration,
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Validate production readiness
 */
async function validateProductionReadiness() {
  console.log('   • Checking system prerequisites...');
  
  try {
    // Check if all required files exist
    const requiredFiles = [
      'automation/helpers/notification-manager.js',
      'automation/helpers/performance-optimizer.js',
      'automation/helpers/deployment-manager.js',
      '.github/workflows/security-gates.yml',
      'pages/automation-dashboard.tsx'
    ];

    const missingFiles = [];
    for (const file of requiredFiles) {
      if (!fs.existsSync(path.join(process.cwd(), file))) {
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      return {
        success: false,
        reason: `Missing required files: ${missingFiles.join(', ')}`
      };
    }

    // Check control plane configuration
    if (!controlGuard.isFunctionEnabled('enhanced_orchestrator')) {
      return {
        success: false,
        reason: 'Enhanced orchestrator is disabled in control plane'
      };
    }

    // Check system resources
    const resourceCheck = await checkSystemResources();
    if (!resourceCheck.success) {
      return {
        success: false,
        reason: `System resource check failed: ${resourceCheck.reason}`
      };
    }

    console.log('   • All prerequisites validated successfully');
    return { success: true };

  } catch (error) {
    return {
      success: false,
      reason: `Validation error: ${error.message}`
    };
  }
}

/**
 * Create deployment backup
 */
async function createDeploymentBackup() {
  console.log('   • Creating system backup...');
  
  try {
    const backupDir = path.join(process.cwd(), 'automation', 'backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const timestamp = new Date().toISOString();
    const backupFile = path.join(backupDir, `pre-deployment-backup-${timestamp.split('T')[0]}.json`);

    // Create backup of current system state
    const backup = {
      timestamp,
      systemState: {
        controlPlane: await readControlPlane(),
        automationHealth: await readAutomationHealth(),
        securityStatus: await readSecurityStatus()
      },
      deploymentConfig: PRODUCTION_CONFIG
    };

    fs.writeFileSync(backupFile, JSON.stringify(backup, null, 2));
    console.log(`   • Backup created: ${backupFile}`);

    return { success: true, backupFile };

  } catch (error) {
    return {
      success: false,
      reason: `Backup creation failed: ${error.message}`
    };
  }
}

/**
 * Execute post-deployment optimization
 */
async function executePostDeploymentOptimization() {
  console.log('   • Running performance analysis...');
  
  try {
    // Read current performance data
    const performanceData = await readPerformanceData();
    
    // Analyze performance and generate recommendations
    const analysis = performanceOptimizer.analyzePerformance(performanceData);
    
    if (analysis.success) {
      console.log('   • Performance analysis completed');
      
      // Apply optimizations if any
      if (analysis.analysis.systemOptimizations.length > 0) {
        console.log(`   • Applying ${analysis.analysis.systemOptimizations.length} system optimizations...`);
        const optimizationResult = await performanceOptimizer.applyOptimizations(analysis.analysis.systemOptimizations);
        
        if (optimizationResult.success) {
          console.log(`   • Applied ${optimizationResult.results.applied} optimizations successfully`);
        }
      }
      
      return { success: true, analysis: analysis.analysis };
    } else {
      return {
        success: false,
        reason: `Performance analysis failed: ${analysis.reason}`
      };
    }

  } catch (error) {
    return {
      success: false,
      reason: `Post-deployment optimization failed: ${error.message}`
    };
  }
}

/**
 * Execute final validation
 */
async function executeFinalValidation() {
  console.log('   • Running final system validation...');
  
  try {
    // Check if all enhanced features are accessible
    const featureChecks = [
      checkEnhancedOrchestratorAccess(),
      checkSecurityGatesAccess(),
      checkNotificationSystemAccess(),
      checkPerformanceOptimizerAccess()
    ];

    const results = await Promise.all(featureChecks);
    const failedChecks = results.filter(result => !result.success);

    if (failedChecks.length > 0) {
      return {
        success: false,
        reason: `${failedChecks.length} feature validation checks failed`,
        failedChecks
      };
    }

    // Setup monitoring and alerting
    console.log('   • Setting up monitoring and alerting...');
    await setupMonitoringAndAlerting();

    console.log('   • All validation checks passed');
    return { success: true };

  } catch (error) {
    return {
      success: false,
      reason: `Final validation failed: ${error.message}`
    };
  }
}

/**
 * Check system resources
 */
async function checkSystemResources() {
  try {
    // Simulate resource check
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, you would check actual system resources
    return { success: true };

  } catch (error) {
    return {
      success: false,
      reason: `Resource check failed: ${error.message}`
    };
  }
}

/**
 * Read control plane configuration
 */
async function readControlPlane() {
  try {
    const controlFile = path.join(process.cwd(), 'automation', 'control.json');
    if (fs.existsSync(controlFile)) {
      return JSON.parse(fs.readFileSync(controlFile, 'utf8'));
    }
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Read automation health data
 */
async function readAutomationHealth() {
  try {
    const healthFile = path.join(process.cwd(), 'public', 'reports', 'automation', 'health.json');
    if (fs.existsSync(healthFile)) {
      return JSON.parse(fs.readFileSync(healthFile, 'utf8'));
    }
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Read security status
 */
async function readSecurityStatus() {
  try {
    const securityFile = path.join(process.cwd(), 'public', 'reports', 'automation', 'security-report.json');
    if (fs.existsSync(securityFile)) {
      return JSON.parse(fs.readFileSync(securityFile, 'utf8'));
    }
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Read performance data
 */
async function readPerformanceData() {
  try {
    const healthData = await readAutomationHealth();
    const securityData = await readSecurityStatus();
    
    return {
      functions: healthData?.functions || {},
      system: healthData?.system || {},
      security: securityData?.summary || {}
    };
  } catch (error) {
    return { functions: {}, system: {}, security: {} };
  }
}

/**
 * Check enhanced orchestrator access
 */
async function checkEnhancedOrchestratorAccess() {
  try {
    const orchestratorPath = path.join(process.cwd(), 'netlify', 'functions', 'enhanced-orchestrator.js');
    if (!fs.existsSync(orchestratorPath)) {
      return { success: false, reason: 'Enhanced orchestrator file not found' };
    }
    return { success: true };
  } catch (error) {
    return { success: false, reason: error.message };
  }
}

/**
 * Check security gates access
 */
async function checkSecurityGatesAccess() {
  try {
    const workflowPath = path.join(process.cwd(), '.github', 'workflows', 'security-gates.yml');
    if (!fs.existsSync(workflowPath)) {
      return { success: false, reason: 'Security gates workflow not found' };
    }
    return { success: true };
  } catch (error) {
    return { success: false, reason: error.message };
  }
}

/**
 * Check notification system access
 */
async function checkNotificationSystemAccess() {
  try {
    const notificationPath = path.join(process.cwd(), 'automation', 'helpers', 'notification-manager.js');
    if (!fs.existsSync(notificationPath)) {
      return { success: false, reason: 'Notification manager not found' };
    }
    return { success: true };
  } catch (error) {
    return { success: false, reason: error.message };
  }
}

/**
 * Check performance optimizer access
 */
async function checkPerformanceOptimizerAccess() {
  try {
    const optimizerPath = path.join(process.cwd(), 'automation', 'helpers', 'performance-optimizer.js');
    if (!fs.existsSync(optimifierPath)) {
      return { success: false, reason: 'Performance optimizer not found' };
    }
    return { success: true };
  } catch (error) {
    return { success: false, reason: error.message };
  }
}

/**
 * Setup monitoring and alerting
 */
async function setupMonitoringAndAlerting() {
  try {
    // Create monitoring configuration
    const monitoringConfig = {
      enabled: true,
      healthCheckInterval: 60000, // 1 minute
      alertThresholds: {
        critical: 0.7, // 70% success rate
        warning: 0.85, // 85% success rate
        info: 0.95 // 95% success rate
      },
      notificationChannels: ['email', 'slack', 'webhook'],
      quietHours: { start: '22:00', end: '08:00' }
    };

    const monitoringFile = path.join(process.cwd(), 'automation', 'monitoring-config.json');
    fs.writeFileSync(monitoringFile, JSON.stringify(monitoringConfig, null, 2));

    console.log('   • Monitoring configuration created');
    return { success: true };

  } catch (error) {
    console.warn(`   • Warning: Monitoring setup failed: ${error.message}`);
    return { success: false, reason: error.message };
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    const result = await executeProductionDeployment();
    
    if (result.success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  } catch (error) {
    console.error('Fatal error during production deployment:', error.message);
    process.exit(1);
  }
}

// Run production deployment
if (require.main === module) {
  main();
}

module.exports = {
  executeProductionDeployment,
  validateProductionReadiness,
  createDeploymentBackup,
  executePostDeploymentOptimization,
  executeFinalValidation
};
