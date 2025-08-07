#!/bin/bash

# ChatGPT Analysis System Setup Script

echo "🚀 Setting up ChatGPT Analysis System..."

# Set the working directory
cd "$(dirname "$0")"

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p chatgpt-analysis-reports
mkdir -p chatgpt-agents
mkdir -p chatgpt-logs
mkdir -p chatgpt-data
mkdir -p logs

# Check if package.json exists, if not create it
if [ ! -f "package.json" ]; then
    echo "📦 Creating package.json..."
    cat > package.json << EOF
{
  "name": "chatgpt-analysis-system",
  "version": "1.0.0",
  "description": "Autonomous ChatGPT Analysis and Project Development System",
  "main": "launch-chatgpt-analysis.js",
  "scripts": {
    "start": "node launch-chatgpt-analysis.js",
    "test": "node test-chatgpt-analysis.js",
    "monitor": "node monitor-chatgpt-analysis.js"
  },
  "dependencies": {
    "fs-extra": "^11.1.1",
    "axios": "^1.6.0",
    "puppeteer": "^21.5.0",
    "node-cron": "^3.0.3"
  },
  "keywords": ["chatgpt", "analysis", "automation", "agents"],
  "author": "Zion Tech Group",
  "license": "MIT"
}
EOF
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Make scripts executable
echo "🔧 Making scripts executable..."
chmod +x chatgpt-analysis-cron.sh
chmod +x setup-chatgpt-analysis.sh

# Setup cron job
echo "⏰ Setting up cron job..."
CRON_JOB="0 */4 * * * cd $(pwd) && ./chatgpt-analysis-cron.sh"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "chatgpt-analysis-cron.sh"; then
    echo "⚠️  Cron job already exists, skipping..."
else
    # Add cron job
    (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
    echo "✅ Cron job added successfully"
fi

# Create test script
echo "🧪 Creating test script..."
cat > test-chatgpt-analysis.js << 'EOF'
const fs = require('fs-extra');
const path = require('path');

async function testSystem() {
    console.log('🧪 Testing ChatGPT Analysis System...');
    
    try {
        // Test directory structure
        const requiredDirs = [
            'chatgpt-analysis-reports',
            'chatgpt-agents', 
            'chatgpt-logs',
            'chatgpt-data'
        ];
        
        for (const dir of requiredDirs) {
            if (fs.existsSync(dir)) {
                console.log(`✅ Directory exists: ${dir}`);
            } else {
                console.log(`❌ Directory missing: ${dir}`);
                return false;
            }
        }
        
        // Test required files
        const requiredFiles = [
            'chatgpt-analysis-agent-factory.js',
            'chatgpt-analysis-orchestrator.js',
            'launch-chatgpt-analysis.js'
        ];
        
        for (const file of requiredFiles) {
            if (fs.existsSync(file)) {
                console.log(`✅ File exists: ${file}`);
            } else {
                console.log(`❌ File missing: ${file}`);
                return false;
            }
        }
        
        console.log('✅ All tests passed!');
        return true;
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        return false;
    }
}

testSystem();
EOF

# Create monitoring script
echo "📊 Creating monitoring script..."
cat > monitor-chatgpt-analysis.js << 'EOF'
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
EOF

echo "✅ ChatGPT Analysis System setup completed!"
echo ""
echo "📋 Next steps:"
echo "  1. Run: node launch-chatgpt-analysis.js"
echo "  2. Monitor: node monitor-chatgpt-analysis.js"
echo "  3. Test: node test-chatgpt-analysis.js"
echo ""
echo "📝 Logs will be available in:"
echo "  - chatgpt-logs/"
echo "  - logs/"
echo ""
echo "📊 Reports will be available in:"
echo "  - chatgpt-analysis-reports/"
echo ""
echo "⏰ Cron job will run every 4 hours" 