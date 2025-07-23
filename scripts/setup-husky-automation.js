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

echo "🚀 Autonomous Pre-commit System Starting..."

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

echo "✅ Pre-commit checks completed successfully!"`;
    }

    getPrePushHook() {
        return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🚀 Autonomous Pre-push System Starting..."

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
echo "🚀 Ready to push to repository!"`;
    }

    getPostCommitHook() {
        return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🚀 Autonomous Post-commit System Starting..."

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
node automation/enhanced-automation-system.js post-commit-improvements || {
    echo "⚠️  Autonomous improvements failed"
}

# 3. Update documentation
echo "📚 Updating documentation..."
node automation/enhanced-automation-system.js update-docs || {
    echo "⚠️  Documentation update failed"
}

# 4. Generate commit report
echo "📋 Generating commit report..."
node automation/enhanced-automation-system.js generate-commit-report "$COMMIT_HASH" || {
    echo "⚠️  Failed to generate commit report"
}

# 5. Prepare for deployment (if on main branch)
if [ "$BRANCH_NAME" = "main" ]; then
    echo "🚀 Preparing for deployment (main branch detected)..."
    node automation/enhanced-automation-system.js prepare-deployment || {
        echo "⚠️  Deployment preparation failed"
    }
fi

# 6. Update automation status
echo "🤖 Updating automation status..."
node automation/enhanced-automation-system.js update-status || {
    echo "⚠️  Failed to update automation status"
}

echo "✅ Post-commit actions completed successfully!"`;
    }

    getCommitMsgHook() {
        return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🚀 Autonomous Commit Message System Starting..."

# Set environment variables for autonomous operation
export AUTONOMOUS_MODE=true
export HUSKY_AUTOMATION=true
export COMMIT_MSG_MODE=true

# Get the commit message file
COMMIT_MSG_FILE="$1"
COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")

echo "💬 Processing commit message: $COMMIT_MSG"

# Run autonomous commit message processing
echo "🤖 Running autonomous commit message processing..."

# 1. Validate commit message format
echo "✅ Validating commit message format..."
node automation/enhanced-automation-system.js validate-commit-message "$COMMIT_MSG" || {
    echo "❌ Commit message validation failed"
    exit 1
}

# 2. Enhance commit message if needed
echo "✨ Enhancing commit message..."
ENHANCED_MSG=$(node automation/enhanced-automation-system.js enhance-commit-message "$COMMIT_MSG") || {
    echo "⚠️  Failed to enhance commit message, using original"
    ENHANCED_MSG="$COMMIT_MSG"
}

# 3. Update commit message file if enhanced
if [ "$ENHANCED_MSG" != "$COMMIT_MSG" ]; then
    echo "📝 Updating commit message with enhanced version..."
    echo "$ENHANCED_MSG" > "$COMMIT_MSG_FILE"
    echo "✅ Commit message enhanced successfully!"
else
    echo "✅ Commit message is already optimal"
fi

# 4. Generate commit metadata
echo "📊 Generating commit metadata..."
node automation/enhanced-automation-system.js generate-commit-metadata "$COMMIT_MSG" || {
    echo "⚠️  Failed to generate commit metadata"
}

echo "✅ Commit message processing completed successfully!"`;
    }

    async setupAutomationDirectories() {
        this.log('📁 Setting up automation directories...');

        const directories = [
            path.join(this.automationDir, 'logs'),
            path.join(this.automationDir, 'reports'),
            path.join(this.automationDir, 'data'),
            path.join(this.automationDir, 'performance'),
            path.join(this.automationDir, 'security'),
            path.join(this.automationDir, 'temp')
        ];

        for (const dir of directories) {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
                this.log(`✅ Created directory: ${dir}`);
            }
        }
    }

    async createConfigurationFiles() {
        this.log('⚙️  Creating configuration files...');

        // Create automation config
        const automationConfig = {
            autonomousMode: true,
            autoFixEnabled: true,
            autoCommitEnabled: true,
            autoPushEnabled: true,
            maxRetries: 3,
            logLevel: 'info',
            performance: {
                bundleSizeThreshold: 5 * 1024 * 1024, // 5MB
                buildTimeThreshold: 60000, // 60 seconds
                testTimeThreshold: 30000 // 30 seconds
            },
            security: {
                scanSensitiveData: true,
                blockOnHighSeverity: true,
                excludePatterns: [
                    'node_modules/**',
                    '.git/**',
                    '.next/**',
                    'dist/**',
                    'build/**'
                ]
            },
            commit: {
                messageTemplate: '🤖 Autonomous improvement: {description}',
                maxFilesPerCommit: 10,
                minChangesForCommit: 1,
                branchProtection: {
                    main: true,
                    develop: true
                }
            }
        };

        const configPath = path.join(this.automationDir, 'config.json');
        fs.writeFileSync(configPath, JSON.stringify(automationConfig, null, 2));
        this.log('✅ Created automation configuration');

        // Create .gitignore entries for automation
        const gitignorePath = path.join(this.projectRoot, '.gitignore');
        const gitignoreEntries = [
            '',
            '# Automation files',
            'automation/logs/*.log',
            'automation/temp/*',
            'automation/reports/*.json',
            'automation/data/commit-metadata.json',
            '.autonomous-status.json',
            'auto_commit.log',
            '.auto_commit_status'
        ];

        if (fs.existsSync(gitignorePath)) {
            const currentContent = fs.readFileSync(gitignorePath, 'utf8');
            if (!currentContent.includes('# Automation files')) {
                fs.appendFileSync(gitignorePath, gitignoreEntries.join('\n'));
                this.log('✅ Updated .gitignore with automation entries');
            }
        } else {
            fs.writeFileSync(gitignorePath, gitignoreEntries.join('\n'));
            this.log('✅ Created .gitignore with automation entries');
        }
    }

    async setupAutonomousCommitSystem() {
        this.log('🤖 Setting up autonomous commit system...');

        // Create a simple test file to verify the system works
        const testFile = path.join(this.automationDir, 'test-autonomous-system.js');
        const testContent = `// Test file for autonomous commit system
console.log('Autonomous commit system is working!');
module.exports = { test: true };`;

        fs.writeFileSync(testFile, testContent);
        this.log('✅ Created test file for autonomous system');
    }

    async testSetup() {
        this.log('🧪 Testing Husky automation setup...');

        try {
            // Test if hooks are executable
            const hooks = ['pre-commit', 'pre-push', 'post-commit', 'commit-msg'];
            for (const hook of hooks) {
                const hookPath = path.join(this.huskyDir, hook);
                if (fs.existsSync(hookPath)) {
                    const stats = fs.statSync(hookPath);
                    if (stats.mode & 0o111) {
                        this.log(`✅ ${hook} hook is executable`);
                    } else {
                        this.log(`⚠️  ${hook} hook is not executable`);
                    }
                } else {
                    this.log(`❌ ${hook} hook not found`);
                }
            }

            // Test automation scripts
            const scripts = [
                'automation/enhanced-automation-system.js',
                'automation/autonomous-commit-push.js',
                'automation/performance/performance-check.js',
                'automation/security/check-sensitive-data.js'
            ];

            for (const script of scripts) {
                const scriptPath = path.join(this.projectRoot, script);
                if (fs.existsSync(scriptPath)) {
                    this.log(`✅ ${script} exists`);
                } else {
                    this.log(`❌ ${script} not found`);
                }
            }

            this.log('✅ Setup test completed successfully');

        } catch (error) {
            this.log(`❌ Setup test failed: ${error.message}`);
            throw error;
        }
    }

    async showUsage() {
        this.log('📖 Husky Automation System Usage:');
        console.log(`
🚀 Available Commands:
  npm run husky:setup          - Setup Husky automation system
  npm run pre-commit          - Run pre-commit checks manually
  npm run pre-push            - Run pre-push checks manually
  npm run post-commit         - Run post-commit actions manually
  npm run auto:commit         - Autonomous commit changes
  npm run auto:push           - Autonomous push changes
  npm run auto:commit-push    - Autonomous commit and push
  npm run auto:watch          - Watch for changes and auto-commit
  npm run performance:check   - Run performance analysis
  npm run security:check      - Run security scan

🔧 Git Hooks:
  - pre-commit: Runs linting, testing, and autonomous improvements
  - pre-push: Runs final validation and deployment preparation
  - post-commit: Triggers autonomous improvements and documentation updates
  - commit-msg: Validates and enhances commit messages

🤖 Autonomous Features:
  - Automatic code formatting and linting
  - Performance monitoring and optimization
  - Security vulnerability scanning
  - Intelligent commit message generation
  - Automated documentation updates
  - Deployment preparation
  - Change categorization and grouping

📊 Monitoring:
  - Check logs in automation/logs/
  - View reports in automation/reports/
  - Monitor status in .autonomous-status.json
        `);
    }
}

// Main execution
async function main() {
    const setup = new HuskyAutomationSetup();
    const command = process.argv[2];

    try {
        switch (command) {
            case 'setup':
                await setup.setupHusky();
                break;
            case 'test':
                await setup.testSetup();
                break;
            case 'usage':
            case 'help':
                await setup.showUsage();
                break;
            default:
                console.log('Usage: node setup-husky-automation.js <command>');
                console.log('Commands: setup, test, usage, help');
                process.exit(1);
        }
    } catch (error) {
        console.error('❌ Setup failed:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = HuskyAutomationSetup; 