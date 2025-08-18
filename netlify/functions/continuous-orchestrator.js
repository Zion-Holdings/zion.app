const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🚀 continuous-orchestrator function triggered');
    
    // Run continuous monitoring tasks
    const monitoringTasks = [];
    
    // Task 1: Check system health
    const systemHealth = {
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      platform: process.platform,
      nodeVersion: process.version
    };
    monitoringTasks.push({
      name: 'System Health Check',
      success: true,
      result: systemHealth
    });
    
    // Task 2: Check automation logs
    const logsDir = path.join(process.cwd(), 'automation', 'logs');
    if (fs.existsSync(logsDir)) {
      const logFiles = fs.readdirSync(logsDir)
        .filter(f => f.endsWith('.json'))
        .slice(-5); // Last 5 log files
      
      monitoringTasks.push({
        name: 'Log Analysis',
        success: true,
        result: {
          logFiles: logFiles,
          totalLogs: fs.readdirSync(logsDir).length
        }
      });
    }
    
    // Task 3: Check recent reports
    const reportsDir = path.join(process.cwd(), 'automation', 'reports');
    if (fs.existsSync(reportsDir)) {
      const reportFiles = fs.readdirSync(reportsDir)
        .filter(f => f.endsWith('.json'))
        .slice(-3); // Last 3 reports
      
      monitoringTasks.push({
        name: 'Report Analysis',
        success: true,
        result: {
          reportFiles: reportFiles,
          totalReports: fs.readdirSync(reportsDir).length
        }
      });
    }
    
    // Save monitoring report
    const monitoringReport = {
      timestamp: new Date().toISOString(),
      tasks: monitoringTasks,
      summary: {
        total: monitoringTasks.length,
        successful: monitoringTasks.filter(t => t.success).length,
        failed: monitoringTasks.filter(t => !t.success).length
      }
    };
    
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    const reportPath = path.join(reportsDir, `continuous-monitoring-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(monitoringReport, null, 2));
    
    console.log('✅ continuous-orchestrator completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Continuous orchestrator completed successfully',
        monitoring: monitoringReport,
        reportPath: reportPath,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ continuous-orchestrator failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};