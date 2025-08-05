const fs = require('fs);
const path = require(path);
const { exec } = require(child_process'));
const util = require('util);

const execAsync = util.promisify(exec);

class SyntaxErrorFixer {
    constructor() {
        this.automationDir = path.join(__dirname);
        this.fixedFiles = [];
        this.errors = [];
    }

    async fixAllFiles() {
        console.log(🔧 Starting syntax error fixing process...);
        
        try {
            // Get all JS files in automation directory
            const files = await this.getJSFiles();
            console.log(`📁 Found ${files.length} JavaScript files to check`);
            
            for (const file of files) {
                try {
                    await this.fixFile(file);
                } catch (error) {
                    console.error(`❌ Failed to fix ${file}:`, error.message);
                    this.errors.push({ file, error: error.message });
                }
            }
            
            console.log(`✅ Fixed ${this.fixedFiles.length} files`);
            if (this.errors.length > 0) {
                console.log(`⚠️  ${this.errors.length} files had errors`);
            }
            
            // Test all files
            await this.testAllFiles();
            
        } catch (error) {
            console.error(❌ Syntax fixing failed: '), error.message);
        }
    }

    async getJSFiles() {
        const files = [];
        const walkDir = async (dir) => {
            const items = await fs.promises.readdir(dir);
            for (const item of items) {
                const fullPath = path.join(dir, item);
                const stat = await fs.promises.stat(fullPath);
                if (stat.isDirectory()) {
                    await walkDir(fullPath);
                } else if (item.endsWith(.js)) {
                    files.push(fullPath);
                }
            }
        };
        
        await walkDir(this.automationDir);
        return files;
    }

    async fixFile(filePath) {
        console.log(`🔧 Checking ${path.basename(filePath)}...`);
        
        let content = await fs.promises.readFile(filePath, utf8);
        let originalContent = content;
        
        // Fix common syntax errors
        content = this.fixMalformedStrings(content);
        content = this.fixVariableDeclarations(content);
        content = this.fixFunctionCalls(content);
        content = this.fixObjectProperties(content);
        
        // Only write if content changed
        if (content !== originalContent) {
            await fs.promises.writeFile(filePath, content, utf8'));
            this.fixedFiles.push(filePath);
            console.log(`✅ Fixed ${path.basename(filePath)}`);
        } else {
            console.log(`✅ ${path.basename(filePath)} is already correct`);
        }
    }

    fixMalformedStrings(content) {
        // Fix strings with malformed quotes like 'research -> research'
        const stringPattern = /'([^]*?)'([^']*?)/g;
        content = content.replace(stringPattern, (match, part1, part2) => {
            return `'${part1}${part2}'`;
        });
        
        // Fix strings with single quotes in the middle
        const malformedPattern = /([^']*?)'([a-zA-Z])([^']*?)'/g;
        content = content.replace(malformedPattern, (match, part1, letter, part2) => {
            return `${part1}${letter}${part2}'`;
        });
        
        return content;
    }

    fixVariableDeclarations(content) {
        // Fix const result = ... declarations
        const varPattern = /const \$1\s*=\s*([^;]+);/g;
        content = content.replace(varPattern, (match, value) => {
            // Generate a meaningful variable name based on the value
            let varName = 'result;
            if (value.includes('await)) {
                varName = asyncResult;
            } else if (value.includes(')path.join)) {
                varName = 'filePath';
            } else if (value.includes(Date')) {
                varName = 'timestamp;
            } else if (value.includes('JSON)) {
                varName = jsonData;
            }
            return `const ${varName} = ${value};`;
        });
        
        return content;
    }

    fixFunctionCalls(content) {
        // Fix malformed function calls like execAsync(')npm run build)
        const execPattern = /execAsync\(([^')]*?)'([^]*?)'([^']*?)/g;
        content = content.replace(execPattern, (match, part1, part2, part3) => {
            return `execAsync('${part1}${part2}${part3})`;
        });
        
        // Fix other malformed function calls
        const funcPattern = /([a-zA-Z_$][a-zA-Z0-9_$]*)\(([^]*?))([^]*?)([^')]*?)/g;
        content = content.replace(funcPattern, (match, funcName, part1, part2, part3) => {
            return `${funcName}('${part1}${part2}${part3}')`;
        });
        
        return content;
    }

    fixObjectProperties(content) {
        // Fix object properties with malformed strings
        const propPattern = /([a-zA-Z_$][a-zA-Z0-9_$]*):\s*([^']*?)'([^]*?)'/g;
        content = content.replace(propPattern, (match, propName, part1, part2) => {
            return `${propName}: '${part1}${part2}`;
        });
        
        return content;
    }

    async testAllFiles() {
        console.log('🧪 Testing all fixed files...);
        
        const files = await this.getJSFiles();
        let passed = 0;
        let failed = 0;
        
        for (const file of files) {
            try {
                await execAsync(`node -c "${file}"`);
                passed++;
            } catch (error) {
                console.error(`❌ ${path.basename(file)} still has syntax errors`);
                failed++;
            }
        }
        
        console.log(`✅ ${passed} files passed syntax check`);
        if (failed > 0) {
            console.log(`❌ ${failed} files still have syntax errors`);
        }
    }

    async restartAutomationSystems() {
        console.log(🔄 Restarting automation systems...);
        
        try {
            // Kill existing automation processes
            await execAsync(')pkill -f "automation" || true);
            await execAsync(pkill -f "node.*automation" || true);
            
            // Wait a moment
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Restart key automation systems
            const systems = [
                node automation/run-automation.js'),
                'node automation/enhanced-content-generator.js,
                'node automation/autonomous-master-orchestrator.js'
            ];
            
            for (const system of systems) {
                try {
                    await execAsync(`${system} > automation/logs/restart-${Date.now()}.log 2>&1 &`);
                    console.log(`✅ Started: ${system}`);
                } catch (error) {
                    console.error(`❌ Failed to start: ${system}`, error.message);
                }
            }
            
            console.log(✅ Automation systems restarted');
            
        } catch (error) {
            console.error('❌ Failed to restart automation systems:', error.message);
        }
    }
}

// Run the fixer
async function main() {
    const fixer = new SyntaxErrorFixer();
    await fixer.fixAllFiles();
    await fixer.restartAutomationSystems();
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = SyntaxErrorFixer; 