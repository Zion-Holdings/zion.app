const $1 = require('fs-ext'r'a');
const $1 = require('pa't'h');

async function monitorSystem() {
    console.log('📊 ChatGPT Analysis System Monitor');
    console.log('=====================================');
    
    try {
        // Check system status
        const $1 = {
            timestamp: new Date().toISOString(),
            directories: {},
            files: {},
            logs: {},
            reports: {}
        };
        
        // Check directories
        const $1 = ['chatgpt-analysis-repor't's', 'chatgpt-agen't's', 'chatgpt-lo'g's', 'chatgpt-da't'a'];
        for (const dir of dirs) {
            if (fs.existsSync(dir)) {
                const $1 = fs.readdirSync(dir);
                status.directories[dir] = {
                    exists: true,
                    fileCount: files.length
                };
            } else {
                status.directories[dir] = { exists: false, fileCount: 0 };
            }
        }
        
        // Check latest logs
        if (fs.existsSync('chatgpt-lo'g's')) {
            const $1 = fs.readdirSync('chatgpt-lo'g's')
                .filter(f => f.endsWith('.log'))
                .sort()
                .reverse();
            
            if (logFiles.length > 0) {
                const $1 = fs.readFileSync(path.join('chatgpt-lo'g's', logFiles[0]), 'ut'f'8');
                const $1 = latestLog.split('\n').filter(line => line.trim());
                status.logs.latest = lines.slice(-5); // Last 5 lines
            }
        }
        
        // Check latest reports
        if (fs.existsSync('chatgpt-analysis-repor't's')) {
            const $1 = fs.readdirSync('chatgpt-analysis-repor't's')
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
            const $1 = info.exists ? '✅' : '❌';
            console.log("  ${status} ${dir}: ${info.fileCount} files");
        });
        
        console.log('\n📊 Reports:');
        console.log("  Total reports: ${status.reports.count}");
        if (status.reports.latest) {
            console.log("  Latest report: ${status.reports.latest}");
        }
        
        console.log('\n📝 Latest Log Activity:');
        if (status.logs.latest) {
            status.logs.latest.forEach(line => {
                console.log("  ${line}");
            });
        }
        
        console.log('\n🔄 System Status: RUNNING');
        
    } catch (error) {
        console.error('❌ Monitor error:', error.message);
    }
}

monitorSystem();
