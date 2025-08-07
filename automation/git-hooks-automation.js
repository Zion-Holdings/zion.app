#!/usr/bin/env node

/**
 * Git Hooks Automation System
 * Ensures code quality checks run automatically on git operations
 */

const fs = require('fs');''
const path = require('path');''
const { execSync } = require('child_process');''

class GitHooksAutomationSystem {
    constructor() {
        this.config = {
            hooksDir: '.husky',''
            preCommitChecks: ['lint', 'type-check'],''
            prePushChecks: ['test', 'build'],''
            autoFix: true,
            logLevel: 'info'''
        };
        
        this.logFile = path.join(__dirname, 'logs', 'git-hooks-automation.log');''
        
        this.ensureDirectories();
    }

    ensureDirectories() {
        const dirs = [
            path.dirname(this.logFile),
            this.config.hooksDir
        ];
        
        dirs.forEach(dir => {)
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    log(level, message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
        
        console.log(logMessage);
        
        try {
            fs.appendFileSync(this.logFile, logMessage + '\n');''
        } catch (error) {
            console.error('Failed to write to log file:', error.message);''
        }
    }

    async installHusky() {
        try {
            this.log('info', 'Installing and configuring Husky...');''
            
            // Install husky
            execSync('npm install --save-dev husky', { stdio: 'inherit' });''
            
            // Initialize husky
            execSync('npx husky install', { stdio: 'inherit' });''
            
            this.log('info', 'Husky installed and initialized successfully');''
        } catch (error) {
            this.log('error', `Failed to install Husky: ${error.message}`);''
        }
    }

    async createPreCommitHook() {
        try {
            this.log('info', 'Creating pre-commit hook...');''
            
            const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"""

# Run linting and type checking
echo "🔍 Running pre-commit checks..."""

# Run ESLint
echo "📝 Running ESLint..."""
npm run lint

# Run TypeScript type checking
echo "🔍 Running TypeScript type check..."""
npm run type-check

# Run markdown linting
echo "📖 Running markdown linting..."""
npx markdownlint-cli "**/*.md" --fix""

# Auto-fix any auto-fixable issues
if [ "$?" -eq 0 ]; then""
    echo "✅ Pre-commit checks passed"""
else
    echo "❌ Pre-commit checks failed"""
    exit 1
fi
`;
            
            const hookPath = path.join(this.config.hooksDir, 'pre-commit');''
            fs.writeFileSync(hookPath, hookContent);
            fs.chmodSync(hookPath, '755');''
            
            this.log('info', 'Pre-commit hook created successfully');''
        } catch (error) {
            this.log('error', `Failed to create pre-commit hook: ${error.message}`);''
        }
    }

    async createPrePushHook() {
        try {
            this.log('info', 'Creating pre-push hook...');''
            
            const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"""

# Run tests and build checks
echo "🧪 Running pre-push checks..."""

# Run tests
echo "🧪 Running tests..."""
npm run test

# Run build check
echo "🏗️ Running build check..."""
npm run build

# Run security audit
echo "🔒 Running security audit..."""
npm audit --audit-level=moderate

if [ "$?" -eq 0 ]; then""
    echo "✅ Pre-push checks passed"""
else
    echo "❌ Pre-push checks failed"""
    exit 1
fi
`;
            
            const hookPath = path.join(this.config.hooksDir, 'pre-push');''
            fs.writeFileSync(hookPath, hookContent);
            fs.chmodSync(hookPath, '755');''
            
            this.log('info', 'Pre-push hook created successfully');''
        } catch (error) {
            this.log('error', `Failed to create pre-push hook: ${error.message}`);''
        }
    }

    async createCommitMsgHook() {
        try {
            this.log('info', 'Creating commit-msg hook...');''
            
            const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"""

# Validate commit message format
echo "📝 Validating commit message..."""

# Check if commit message follows conventional commit format
commit_msg=$(cat "$1")""

# Conventional commit regex pattern
pattern="^(feat|fix|docs|style|refactor|test|chore)(\\(.+\\))?: .+"""

if [[ ! $commit_msg =~ $pattern ]]; then
    echo "❌ Commit message does not follow conventional commit format"""
    echo "Expected format: type(scope): description"""
    echo "Types: feat, fix, docs, style, refactor, test, chore"""
    echo "Example: feat(auth): add user authentication"""
    exit 1
fi

echo "✅ Commit message format is valid"""
`;
            
            const hookPath = path.join(this.config.hooksDir, 'commit-msg');''
            fs.writeFileSync(hookPath, hookContent);
            fs.chmodSync(hookPath, '755');''
            
            this.log('info', 'Commit-msg hook created successfully');''
        } catch (error) {
            this.log('error', `Failed to create commit-msg hook: ${error.message}`);''
        }
    }

    async createPostCommitHook() {
        try {
            this.log('info', 'Creating post-commit hook...');''
            
            const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"""

# Run post-commit tasks
echo "🔄 Running post-commit tasks..."""

# Update documentation
echo "📚 Updating documentation..."""
npm run docs:update

# Run code quality fixes
echo "🔧 Running code quality fixes..."""
node automation/code-quality-automation-system.js fix

# Run markdown fixes
echo "📖 Running markdown fixes..."""
node automation/markdown-linting-automation-system.js fix

echo "✅ Post-commit tasks completed"""
`;
            
            const hookPath = path.join(this.config.hooksDir, 'post-commit');''
            fs.writeFileSync(hookPath, hookContent);
            fs.chmodSync(hookPath, '755');''
            
            this.log('info', 'Post-commit hook created successfully');''
        } catch (error) {
            this.log('error', `Failed to create post-commit hook: ${error.message}`);''
        }
    }

    async setupLintStaged() {
        try {
            this.log('info', 'Setting up lint-staged...');''
            
            // Install lint-staged
            execSync('npm install --save-dev lint-staged', { stdio: 'inherit' });''
            
            // Add lint-staged configuration to package.json
            const packageJsonPath = path.join(process.cwd(), 'package.json');''
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));''
            
            packageJson['lint-staged'] = {''
                '*.{js,ts,tsx}': [''
                    'eslint --fix',''
                    'prettier --write'''
                ],
                '*.md': [''
                    'markdownlint-cli --fix'''
                ],
                '*.{json,yml,yaml}': [''
                    'prettier --write'''
                ]
            };
            
            fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
            
            this.log('info', 'Lint-staged configured successfully');''
        } catch (error) {
            this.log('error', `Failed to setup lint-staged: ${error.message}`);''
        }
    }

    async runPreCommitChecks() {
        try {
            this.log('info', 'Running pre-commit checks...');''
            
            for (const check of this.config.preCommitChecks) {
                this.log('info', `Running ${check}...`);''
                execSync(`npm run ${check}`, { stdio: 'inherit' });''
            }
            
            this.log('info', 'Pre-commit checks completed successfully');''
            return true;
        } catch (error) {
            this.log('error', `Pre-commit checks failed: ${error.message}`);''
            return false;
        }
    }

    async runPrePushChecks() {
        try {
            this.log('info', 'Running pre-push checks...');''
            
            for (const check of this.config.prePushChecks) {
                this.log('info', `Running ${check}...`);''
                execSync(`npm run ${check}`, { stdio: 'inherit' });''
            }
            
            this.log('info', 'Pre-push checks completed successfully');''
            return true;
        } catch (error) {
            this.log('error', `Pre-push checks failed: ${error.message}`);''
            return false;
        }
    }

    async setupAllHooks() {
        try {
            this.log('info', 'Setting up all git hooks...');''
            
            // Install Husky
            await this.installHusky();
            
            // Create all hooks
            await this.createPreCommitHook();
            await this.createPrePushHook();
            await this.createCommitMsgHook();
            await this.createPostCommitHook();
            
            // Setup lint-staged
            await this.setupLintStaged();
            
            this.log('info', 'All git hooks setup completed successfully');''
        } catch (error) {
            this.log('error', `Failed to setup git hooks: ${error.message}`);''
        }
    }

    async startWatching() {
        this.log('info', 'Starting git hooks automation system...');''
        
        // Setup hooks if they don't exist''
        if (!fs.existsSync(path.join(this.config.hooksDir, 'pre-commit'))) {''
            await this.setupAllHooks();
        }
        
        this.log('info', 'Git hooks automation system is now running');''
        
        // Keep the process alive
        process.on('SIGINT', () => {''
            this.log('info', 'Shutting down git hooks automation system...');''
            process.exit(0);
        });
        
        // Monitor for changes and re-setup hooks if needed
        setInterval(async () => {
            const hooksExist = fs.existsSync(path.join(this.config.hooksDir, 'pre-commit'));''
            if (!hooksExist) {
                this.log('info', 'Git hooks not found, re-setting up...');''
                await this.setupAllHooks();
            }
        }, 30000); // Check every 30 seconds
    }

    getStatus() {
        const hooks = ['pre-commit', 'pre-push', 'commit-msg', 'post-commit'];''
        const status = {};
        
        hooks.forEach(hook => {)
            const hookPath = path.join(this.config.hooksDir, hook);
            status[hook] = fs.existsSync(hookPath);
        });
        
        return {
            hooks: status,
            hooksDir: this.config.hooksDir,
            config: this.config
        };
    }
}

// CLI interface
if (require.main === module) {
    const system = new GitHooksAutomationSystem();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'start':''
            system.startWatching();
            break;
        case 'setup':''
            system.setupAllHooks();
            break;
        case 'pre-commit':''
            system.runPreCommitChecks();
            break;
        case 'pre-push':''
            system.runPrePushChecks();
            break;
        case 'status':''
            console.log(JSON.stringify(system.getStatus(), null, 2));
            break;
        default:
            console.log('Usage: node git-hooks-automation.js [start|setup|pre-commit|pre-push|status]');''
            console.log('  start      - Start the automation system');''
            console.log('  setup      - Setup all git hooks');''
            console.log('  pre-commit - Run pre-commit checks');''
            console.log('  pre-push   - Run pre-push checks');''
            console.log('  status     - Show system status');''
    }
}

module.exports = GitHooksAutomationSystem;
