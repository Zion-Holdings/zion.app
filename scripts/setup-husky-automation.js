#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class HuskyAutomationSetup {
    constructor() {
        this.projectRoot = process.cwd();
        this.huskyDir = path.join(this.projectRoot, '.husky');
        this.automationDir = path.join(this.projectRoot, 'automation');
    }

    log(message) {
        console.log(`[Husky Setup] ${message}`);
    }

    async runCommand(command, args = []) {
        return new Promise((resolve, reject) => {
            const child = spawn(command, args, {
                stdio: 'inherit',
                shell: true,
                cwd: this.projectRoot
            });

            child.on('close', (code) => {
                if (code === 0) {
                    resolve();
                } else {
                    reject(new Error(`Command failed with code ${code}`));
                }
            });

            child.on('error', (error) => {
                reject(error);
            });
        });
    }

    async setupHusky() {
        this.log('🚀 Setting up Husky automation system...');

        try {
            // 1. Install Husky if not already installed
            this.log('📦 Installing Husky...');
            await this.runCommand('npm', ['install', 'husky', '--save-dev']);

            // 2. Initialize Husky
            this.log('🔧 Initializing Husky...');
            await this.runCommand('npx', ['husky', 'init']);

            // 3. Create enhanced hooks
            await this.createEnhancedHooks();

            // 4. Setup automation directories
            await this.setupAutomationDirectories();

            // 5. Create configuration files
            await this.createConfigurationFiles();

            // 6. Setup autonomous commit system
            await this.setupAutonomousCommitSystem();

            // 7. Test the setup
            await this.testSetup();

            this.log('✅ Husky automation system setup completed successfully!');
            this.log('🎉 Your project now has autonomous commit and push capabilities!');

        } catch (error) {
            this.log(`❌ Setup failed: ${error.message}`);
            throw error;
        }
    }

    async createEnhancedHooks() {
        this.log('🔗 Creating enhanced Git hooks...');

        const hooks = [
            {
                name: 'pre-commit',
                content: this.getPreCommitHook()
            },
            {
                name: 'pre-push',
                content: this.getPrePushHook()
            },
            {
                name: 'post-commit',
                content: this.getPostCommitHook()
            },
            {
                name: 'commit-msg',
                content: this.getCommitMsgHook()
            }
        ];

        for (const hook of hooks) {
            const hookPath = path.join(this.huskyDir, hook.name);
            fs.writeFileSync(hookPath, hook.content);
            fs.chmodSync(hookPath, '755');
            this.log(`✅ Created ${hook.name} hook`);
        }
    }

    getPreCommitHook() {
        return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🚀 Enhanced Pre-commit System Starting..."

# Set environment variables for autonomous operation
export AUTONOMOUS_MODE=true
export HUSKY_AUTOMATION=true
export AUTO_FIX_ENABLED=true

# Run comprehensive pre-commit checks
echo "📋 Running comprehensive pre-commit checks..."

# 1. Lint and auto-fix
echo "🔍 Linting and auto-fixing..."
npm run lint || {
    echo "⚠️  Linting issues found, attempting auto-fix..."
    npm run lint -- --fix || {
        echo "❌ Linting failed and could not be auto-fixed"
        exit 1
    }
}

# 2. Type checking
echo "🔍 Type checking..."
npm run type-check || {
    echo "❌ Type checking failed"
    exit 1
}

# 3. Format code
echo "🎨 Formatting code..."
npm run format || {
    echo "❌ Code formatting failed"
    exit 1
}

# 4. Run tests
echo "🧪 Running tests..."
npm test || {
    echo "❌ Tests failed"
    exit 1
}

# 5. Check for security vulnerabilities
echo "🔒 Security check..."
npm audit --audit-level=moderate || {
    echo "⚠️  Security vulnerabilities found, but continuing..."
}

# 6. Build check
echo "🏗️  Build check..."
npm run build || {
    echo "❌ Build failed"
    exit 1
}

# 7. Autonomous improvements
echo "🤖 Running autonomous improvements..."
node automation/enhanced-automation-system.js pre-commit || {
    echo "⚠️  Autonomous improvements failed, but continuing..."
}

echo "✅ Pre-commit checks completed successfully!"
`;
    }

    getPrePushHook() {
        return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🚀 Enhanced Pre-push System Starting..."

# Set environment variables for autonomous operation
export AUTONOMOUS_MODE=true
export HUSKY_AUTOMATION=true
export PRE_PUSH_MODE=true

# Run comprehensive pre-push checks
echo "📋 Running comprehensive pre-push checks..."

# 1. Final lint check
echo "🔍 Final lint check..."
npm run lint || {
    echo "❌ Linting issues found, please fix before pushing"
    exit 1
}

# 2. Final type check
echo "🔍 Final type check..."
npm run type-check || {
    echo "❌ Type errors found, please fix before pushing"
    exit 1
}

# 3. Run all tests with coverage
echo "🧪 Running comprehensive tests..."
npm run test:coverage || {
    echo "❌ Tests failed, please fix before pushing"
    exit 1
}

# 4. Check bundle size
echo "📦 Checking bundle size..."
npm run build && npx next-bundle-analyzer || {
    echo "⚠️  Bundle analysis failed, but continuing..."
}

# 5. Security audit
echo "🔒 Security audit..."
npm audit --audit-level=high || {
    echo "❌ High severity security vulnerabilities found"
    exit 1
}

# 6. Performance check
echo "⚡ Performance check..."
node automation/performance/performance-check.js || {
    echo "⚠️  Performance check failed, but continuing..."
}

# 7. Autonomous deployment preparation
echo "🤖 Preparing for autonomous deployment..."
node automation/enhanced-automation-system.js pre-push || {
    echo "⚠️  Deployment preparation failed, but continuing..."
}

# 8. Check for sensitive data
echo "🔐 Checking for sensitive data..."
node automation/security/check-sensitive-data.js || {
    echo "❌ Sensitive data detected, please remove before pushing"
    exit 1
}

echo "✅ Pre-push checks completed successfully!"
echo "🚀 Ready to push to repository!"
`;
    }

    getPostCommitHook() {
        return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🚀 Enhanced Post-commit System Starting..."

# Set environment variables for autonomous operation
export AUTONOMOUS_MODE=true
export HUSKY_AUTOMATION=true
export POST_COMMIT_MODE=true

# Get commit information
COMMIT_HASH=$(git rev-parse HEAD)
COMMIT_MESSAGE=$(git log -1 --pretty=%B)
BRANCH_NAME=$(git branch --show-current)

echo "📝 Commit: $COMMIT_HASH"
echo "💬 Message: $COMMIT_MESSAGE"
echo "🌿 Branch: $BRANCH_NAME"

# Run autonomous post-commit actions
echo "🤖 Running autonomous post-commit actions..."

# 1. Update commit metadata
echo "📊 Updating commit metadata..."
node automation/enhanced-automation-system.js update-commit-metadata "$COMMIT_HASH" "$COMMIT_MESSAGE" || {
    echo "⚠️  Failed to update commit metadata"
}

# 2. Trigger autonomous improvements
echo "🔄 Triggering autonomous improvements..."
node automation/enhanced-automation-system.js post-commit || {
    echo "⚠️  Autonomous improvements failed, but continuing..."
}

# 3. Auto-push if configured
if [ "$AUTO_PUSH_ENABLED" = "true" ]; then
    echo "🚀 Auto-pushing changes..."
    git push origin "$BRANCH_NAME" || {
        echo "⚠️  Auto-push failed, but continuing..."
    }
fi

echo "✅ Post-commit actions completed successfully!"
`;
    }

    getCommitMsgHook() {
        return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🚀 Enhanced Commit Message Validation..."

# Validate commit message format
COMMIT_MSG_FILE=$1
COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")

# Check for conventional commit format
if ! echo "$COMMIT_MSG" | grep -qE "^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\(.+\))?: .+"; then
    echo "❌ Commit message does not follow conventional commit format"
    echo "Expected format: type(scope): description"
    echo "Types: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert"
    echo "Example: feat(auth): add login functionality"
    exit 1
fi

# Check message length
MSG_LENGTH=$(echo "$COMMIT_MSG" | wc -c)
if [ "$MSG_LENGTH" -gt 72 ]; then
    echo "⚠️  Commit message is longer than 72 characters"
    echo "Consider using a shorter description"
fi

echo "✅ Commit message validation passed!"
`;
    }

    async setupAutomationDirectories() {
        this.log('📁 Setting up automation directories...');
        
        const dirs = [
            'automation/logs',
            'automation/reports',
            'automation/performance',
            'automation/security'
        ];

        for (const dir of dirs) {
            const fullPath = path.join(this.projectRoot, dir);
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath, { recursive: true });
                this.log(`✅ Created directory: ${dir}`);
            }
        }
    }

    async createConfigurationFiles() {
        this.log('⚙️  Creating configuration files...');
        
        // Create automation config
        const configPath = path.join(this.automationDir, 'config.json');
        const config = {
            maxCommitSize: 50,
            commitMessageTemplate: 'fix: {description}',
            branch: 'main',
            autoPush: true,
            enableLogging: true,
            autoFixEnabled: true,
            performanceThreshold: 80,
            securityLevel: 'high'
        };
        
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        this.log('✅ Created automation config');
    }

    async setupAutonomousCommitSystem() {
        this.log('🤖 Setting up autonomous commit system...');
        
        // Create enhanced autonomous commit script
        const scriptPath = path.join(this.automationDir, 'enhanced-autonomous-commit.js');
        const scriptContent = this.getEnhancedAutonomousCommitScript();
        
        fs.writeFileSync(scriptPath, scriptContent);
        fs.chmodSync(scriptPath, '755');
        this.log('✅ Created enhanced autonomous commit script');
    }

    getEnhancedAutonomousCommitScript() {
        return `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class EnhancedAutonomousCommit {
    constructor() {
        this.projectRoot = process.cwd();
        this.config = this.loadConfig();
        this.logFile = path.join(__dirname, 'logs', 'autonomous-commit.log');
        this.ensureLogDirectory();
    }

    loadConfig() {
        const configPath = path.join(__dirname, 'config.json');
        if (fs.existsSync(configPath)) {
            return JSON.parse(fs.readFileSync(configPath, 'utf8'));
        }
        return {
            maxCommitSize: 50,
            commitMessageTemplate: 'fix: {description}',
            branch: 'main',
            autoPush: true,
            enableLogging: true,
            autoFixEnabled: true
        };
    }

    ensureLogDirectory() {
        const logDir = path.dirname(this.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    log(message, level = 'info') {
        if (!this.config.enableLogging) return;
        
        const timestamp = new Date().toISOString();
        const logEntry = \`[\${timestamp}] [\${level.toUpperCase()}] \${message}\\n\`;
        
        try {
            fs.appendFileSync(this.logFile, logEntry);
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
        
        if (level === 'error') {
            console.error(message);
        } else if (level === 'warn') {
            console.warn(message);
        } else {
            console.log(message);
        }
    }

    async getGitStatus() {
        try {
            const status = execSync('git status --porcelain', { encoding: 'utf8' });
            return status.trim().split('\\n').filter(line => line.length > 0);
        } catch (error) {
            this.log(\`Error getting git status: \${error.message}\`, 'error');
            return [];
        }
    }

    async stageFiles(files) {
        try {
            if (files.length === 0) return true;
            
            const fileList = files.join(' ');
            execSync(\`git add \${fileList}\`, { stdio: 'pipe' });
            this.log(\`Staged \${files.length} files\`);
            return true;
        } catch (error) {
            this.log(\`Error staging files: \${error.message}\`, 'error');
            return false;
        }
    }

    generateCommitMessage(files) {
        const fileTypes = this.analyzeFileTypes(files);
        const description = this.generateDescription(fileTypes);
        return this.config.commitMessageTemplate.replace('{description}', description);
    }

    analyzeFileTypes(files) {
        const types = {};
        files.forEach(file => {
            const ext = path.extname(file);
            types[ext] = (types[ext] || 0) + 1;
        });
        return types;
    }

    generateDescription(fileTypes) {
        const descriptions = [];
        for (const [ext, count] of Object.entries(fileTypes)) {
            if (ext === '.ts' || ext === '.tsx') {
                descriptions.push(\`\${count} TypeScript file\${count > 1 ? 's' : ''}\`);
            } else if (ext === '.js' || ext === '.jsx') {
                descriptions.push(\`\${count} JavaScript file\${count > 1 ? 's' : ''}\`);
            } else if (ext === '.css' || ext === '.scss') {
                descriptions.push(\`\${count} style file\${count > 1 ? 's' : ''}\`);
            } else if (ext === '.json') {
                descriptions.push(\`\${count} config file\${count > 1 ? 's' : ''}\`);
            } else {
                descriptions.push(\`\${count} \${ext.slice(1)} file\${count > 1 ? 's' : ''}\`);
            }
        }
        return descriptions.join(', ');
    }

    async commit(message) {
        try {
            execSync(\`git commit -m "\${message}"\`, { stdio: 'pipe' });
            this.log(\`Committed: \${message}\`);
            return true;
        } catch (error) {
            this.log(\`Error committing: \${error.message}\`, 'error');
            return false;
        }
    }

    async push() {
        try {
            const branch = this.config.branch;
            execSync(\`git push origin \${branch}\`, { stdio: 'pipe' });
            this.log(\`Pushed to \${branch}\`);
            return true;
        } catch (error) {
            this.log(\`Error pushing: \${error.message}\`, 'error');
            return false;
        }
    }

    async autoFix() {
        if (!this.config.autoFixEnabled) return true;
        
        try {
            this.log('Running auto-fix...');
            execSync('npm run lint -- --fix', { stdio: 'pipe' });
            execSync('npm run format', { stdio: 'pipe' });
            this.log('Auto-fix completed');
            return true;
        } catch (error) {
            this.log(\`Auto-fix failed: \${error.message}\`, 'warn');
            return false;
        }
    }

    async execute() {
        this.log('🚀 Starting enhanced autonomous commit...');
        
        // Get git status
        const status = await this.getGitStatus();
        if (status.length === 0) {
            this.log('No changes to commit');
            return;
        }

        // Auto-fix if enabled
        await this.autoFix();

        // Stage all changes
        const files = status.map(line => line.split(' ').pop());
        await this.stageFiles(files);

        // Generate commit message
        const message = this.generateCommitMessage(files);
        
        // Commit
        const committed = await this.commit(message);
        if (!committed) {
            this.log('Failed to commit changes', 'error');
            return;
        }

        // Push if enabled
        if (this.config.autoPush) {
            await this.push();
        }

        this.log('✅ Enhanced autonomous commit completed successfully!');
    }
}

// Run the script
const autonomousCommit = new EnhancedAutonomousCommit();
autonomousCommit.execute().catch(error => {
    console.error('Autonomous commit failed:', error.message);
    process.exit(1);
});
`;
    }

    async testSetup() {
        this.log('🧪 Testing Husky setup...');
        
        try {
            // Test if hooks are executable
            const hooks = ['pre-commit', 'pre-push', 'post-commit', 'commit-msg'];
            for (const hook of hooks) {
                const hookPath = path.join(this.huskyDir, hook);
                if (!fs.existsSync(hookPath)) {
                    throw new Error(`Hook ${hook} not found`);
                }
                
                const stats = fs.statSync(hookPath);
                if (!(stats.mode & fs.constants.S_IXUSR)) {
                    throw new Error(`Hook ${hook} is not executable`);
                }
            }
            
            this.log('✅ All hooks are properly configured and executable');
            
            // Test autonomous commit script
            const scriptPath = path.join(this.automationDir, 'enhanced-autonomous-commit.js');
            if (!fs.existsSync(scriptPath)) {
                throw new Error('Autonomous commit script not found');
            }
            
            this.log('✅ Autonomous commit script is ready');
            
        } catch (error) {
            this.log(`❌ Test failed: ${error.message}`);
            throw error;
        }
    }

    async usage() {
        console.log(`
🚀 Enhanced Husky Automation Setup

Usage:
  node scripts/setup-husky-automation.js [command]

Commands:
  setup    - Setup complete Husky automation system
  test     - Test the current setup
  usage    - Show this help message

Features:
  ✅ Enhanced pre-commit hooks with comprehensive checks
  ✅ Enhanced pre-push hooks with security and performance checks
  ✅ Enhanced post-commit hooks with auto-push capability
  ✅ Enhanced commit message validation
  ✅ Autonomous commit and push system
  ✅ Auto-fix capabilities
  ✅ Comprehensive logging
  ✅ Performance and security monitoring

Examples:
  node scripts/setup-husky-automation.js setup
  node scripts/setup-husky-automation.js test
        `);
    }
}

// Main execution
const setup = new HuskyAutomationSetup();
const command = process.argv[2] || 'setup';

switch (command) {
    case 'setup':
        setup.setupHusky().catch(error => {
            console.error('Setup failed:', error.message);
            process.exit(1);
        });
        break;
    case 'test':
        setup.testSetup().catch(error => {
            console.error('Test failed:', error.message);
            process.exit(1);
        });
        break;
    case 'usage':
    case 'help':
        setup.usage();
        break;
    default:
        console.error('Unknown command:', command);
        setup.usage();
        process.exit(1);
}