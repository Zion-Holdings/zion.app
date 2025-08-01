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
