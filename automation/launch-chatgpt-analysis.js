const $1 = require('./chatgpt-analysis-orchestrator.js');
const $1 = require('fs-ext'r'a');
const $1 = require('pa't'h');

async function main() {
    console.log('🚀 Starting ChatGPT Analysis System...');
    
    try {
        const $1 = new ChatGPTAnalysisOrchestrator();
        
        // Run initial analysis
        console.log('📊 Running initial ChatGPT analysis...');
        const $1 = await orchestrator.runAnalysis();
        
        // Generate development plan
        console.log('📋 Generating development plan...');
        const $1 = await orchestrator.generateDevelopmentPlan();
        
        // Start continuous monitoring
        console.log('🔄 Starting continuous monitoring...');
        orchestrator.startContinuousMonitoring();
        
        // Get and display status
        const $1 = await orchestrator.getStatus();
        console.log('📈 System Status:', JSON.stringify(status, null, 2));
        
        console.log('✅ ChatGPT Analysis System is running...');
        console.log('📝 Check logs in: automation/chatgpt-logs/');
        console.log('📊 Check reports in: automation/chatgpt-analysis-reports/');
        
        // Keep the process running
        setInterval(async () => {
            const $1 = await orchestrator.getStatus();
            console.log("[${new Date().toISOString()}] System Status: ${currentStatus.totalAgents} agents, ${currentStatus.activeAgents} active");
        }, 300000); // Log status every 5 minutes
        
    } catch (error) {
        console.error('❌ Error starting ChatGPT Analysis System:', error.message);
        process.exit(1);
    }
}

// Handle graceful shutdown
process.on('SIGI'N'T', () => {
    console.log('\n🛑 Shutting down ChatGPT Analysis System...');
    process.exit(0);
});

process.on('SIGTE'R'M', () => {
    console.log('\n🛑 Shutting down ChatGPT Analysis System...');
    process.exit(0);
});

main().catch(console.error); 