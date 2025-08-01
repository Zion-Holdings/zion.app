const ChatGPTAnalysisOrchestrator = require('./chatgpt-analysis-orchestrator.js');
const fs = require('fs-extra');
const path = require('path');

async function main() {
    console.log('🚀 Starting ChatGPT Analysis System...');
    
    try {
        const orchestrator = new ChatGPTAnalysisOrchestrator();
        
        // Run initial analysis
        console.log('📊 Running initial ChatGPT analysis...');
        const analysisResult = await orchestrator.runAnalysis();
        
        // Generate development plan
        console.log('📋 Generating development plan...');
        const developmentPlan = await orchestrator.generateDevelopmentPlan();
        
        // Start continuous monitoring
        console.log('🔄 Starting continuous monitoring...');
        orchestrator.startContinuousMonitoring();
        
        // Get and display status
        const status = await orchestrator.getStatus();
        console.log('📈 System Status:', JSON.stringify(status, null, 2));
        
        console.log('✅ ChatGPT Analysis System is running...');
        console.log('📝 Check logs in: automation/chatgpt-logs/');
        console.log('📊 Check reports in: automation/chatgpt-analysis-reports/');
        
        // Keep the process running
        setInterval(async () => {
            const currentStatus = await orchestrator.getStatus();
            console.log(`[${new Date().toISOString()}] System Status: ${currentStatus.totalAgents} agents, ${currentStatus.activeAgents} active`);
        }, 300000); // Log status every 5 minutes
        
    } catch (error) {
        console.error('❌ Error starting ChatGPT Analysis System:', error.message);
        process.exit(1);
    }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down ChatGPT Analysis System...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down ChatGPT Analysis System...');
    process.exit(0);
});

main().catch(console.error); 