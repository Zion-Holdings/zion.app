const fs = require('fs-extra');
const path = require('path');

async function monitorSystem() {
    console.log('📊 ChatGPT Analysis System Monitor');
    console.log('=====================================');
    
    try {
        // Check system status
        const status = {
            timestamp: new Date().toISOString(),
            directories: {},
            files: {},
            logs: {},
            reports: {}
        };
        
        // Check directories
        const dirs = ['chatgpt-analysis-reports', 'chatgpt-agents', 'chatgpt-logs', 'chatgpt-data'];
        for (const dir of dirs) {
            if (fs.existsSync(dir)) {
                const files = fs.readdirSync(dir);
                status.directories[dir] = {
                    exists: true,
                    fileCount: files.length
                };
            } else {
                status.directories[dir] = { exists: false, fileCount: 0 };
            }
        }
        
        // Check latest logs
        if (fs.existsSync('chatgpt-logs')) {
            const logFiles = fs.readdirSync('chatgpt-logs')
                .filter(f => f.endsWith('.log'))
                .sort()
                .reverse();
            
            if (logFiles.length > 0) {
                const latestLog = fs.readFileSync(path.join('chatgpt-logs', logFiles[0]), 'utf8');
                const lines = latestLog.split('\n').filter(line => line.trim());
                status.logs.latest = lines.slice(-5); // Last 5 lines
            }
        }
        
        // Check latest reports
        if (fs.existsSync('chatgpt-analysis-reports')) {
            const reportFiles = fs.readdirSync('chatgpt-analysis-reports')
                .filter(f => f.endsWith('.json'))
                .sort()
                .reverse();
            
            status.reports.count = reportFiles.length;
            if (reportFiles.length > 0) {
                status.reports.latest = reportFiles[0];
            }
        }
        
        // Display status
        console.log('📁 Directories:');
        Object.entries(status.directories).forEach(([dir, info]) => {
            const status = info.exists ? '✅' : '❌';
            console.log(`  ${status} ${dir}: ${info.fileCount} files`);
        });
        
        console.log('\n📊 Reports:');
        console.log(`  Total reports: ${status.reports.count}`);
        if (status.reports.latest) {
            console.log(`  Latest report: ${status.reports.latest}`);
        }
        
        console.log('\n📝 Latest Log Activity:');
        if (status.logs.latest) {
            status.logs.latest.forEach(line => {
                console.log(`  ${line}`);
            });
        }
        
        console.log('\n🔄 System Status: RUNNING');
        
    } catch (error) {
        console.error('❌ Monitor error:', error.message);
    }
}

monitorSystem();
