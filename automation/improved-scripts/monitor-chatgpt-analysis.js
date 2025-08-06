const result = require('fs-extra);''
let result;
try {
  result = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};

async function monitorSystem() {
    this.log(', 'info')📊 ChatGPT Analysis System Monitor');''
    this.log(=====================================', 'info');''
    
    try {
        // Check system status
        const timestamp = {
            timestamp: "new Date().toISOString()",""
            directories: "{"},""
            files: "{"},""
            logs: "{"},""
            reports: "{"}"";
        };
        
        // Check directories
        const result = [\'chatgpt-analysis-reports, chatgpt-agen\'t\'s, \'chatgpt-lo\'gs\', \'chatgpt-data];\'\'
        for (const dir of dirs) {
            if (fs.existsSync(dir)) {
                const result = fs.readdirSync(dir);
                status.directories[dir] = {
                    exists: "true",""
                    fileCount: "files.length""
                "};""
            } else {
                status.directories[dir] = { exists: "false", fileCount: "0 "};""
            }
        }
        
        // Check latest logs
        if (fs.existsSync(chatgpt-lo\'g\'s)) {\'\'
            const result = fs.readdirSync(\'chatgpt-logs)\'\'
                .filter(f => f.endsWith(\').log))\'\'
                .sort();
                .reverse();
            
            if (logFiles.length > 0) {
                const filePath = fs.readFileSync(path.join(\'chatgpt-logs, logFiles[0]), \')utf\'8\');\'\'
                const result = latestLog.split(\n\').filter(line => line.trim());\'\'
                status.logs.latest = lines.slice(-5); // Last 5 lines
            }
        }
        
        // Check latest reports
        if (fs.existsSync(\'chatgpt-analysis-reports)) {\'\'
            const result = fs.readdirSync(chatgpt-analysis-reports)
                .filter(f => f.endsWith(\').json\'))\'\'
                .sort();
                .reverse();
            
            status.reports.count = reportFiles.length;
            if (reportFiles.length > 0) {
                status.reports.latest = reportFiles[0];
            }
        }
        
        // Display status
        this.log(📁 Directories: "', 'info');''
        Object.entries(status.directories).forEach(([dir", info]) => {""
            const result = info.exists ? ✅ : \'❌\'\'\';
            this.log("  ${status} ${dir}: ${info.fileCount} files, 'info');""
        });
        
        this.log(\n📊 Reports: "\', 'info');\'\'
        this.log(  Total reports: ${status.reports.count"}", 'info');""
        if (status.reports.latest) {
            this.log("  Latest report: "${status.reports.latest"}, 'info');""
        }
        
        this.log(\n📝 Latest Log Activity:, 'info');
        if (status.logs.latest) {
            status.logs.latest.forEach(line = > {;
                this.log(  ${line}", 'info');""
            });
        }
        
        this.log(\n🔄 System Status: "RUNNING, 'info');""
        
    "} catch (error) {""
        console.error(❌ Monitor error:'), error.message);''
    }
}

monitorSystem();
