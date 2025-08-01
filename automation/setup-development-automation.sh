#!/bin/bash

# Development Automation System Setup Script
# This script sets up the development automation system with all necessary dependencies and configurations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Set the project directory
PROJECT_DIR="/Users/miami2/Documents/GitHub/bolt.new.zion.app"
AUTOMATION_DIR="$PROJECT_DIR/automation"

print_status "Setting up Development Automation System..."
print_status "Project Directory: $PROJECT_DIR"
print_status "Automation Directory: $AUTOMATION_DIR"

# Check if we're in the right directory
if [ ! -d "$PROJECT_DIR" ]; then
    print_error "Project directory not found: $PROJECT_DIR"
    exit 1
fi

# Navigate to project directory
cd "$PROJECT_DIR"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

NODE_VERSION=$(node --version)
print_status "Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

NPM_VERSION=$(npm --version)
print_status "npm version: $NPM_VERSION"

# Create automation directory if it doesn't exist
if [ ! -d "$AUTOMATION_DIR" ]; then
    print_status "Creating automation directory..."
    mkdir -p "$AUTOMATION_DIR"
fi

# Navigate to automation directory
cd "$AUTOMATION_DIR"

# Create necessary directories
print_status "Creating directory structure..."
mkdir -p {agents,reports,logs,backups,templates,schedules}
mkdir -p reports/{code-improvement,test-automation,deployment-automation,security-automation,performance-optimization,documentation-automation,code-review-automation,dependency-management,git-automation,monitoring-automation}
mkdir -p reports/code-improvement/{suggestions,analysis,refactoring}
mkdir -p reports/test-automation/{coverage,test-results,generated-tests}
mkdir -p reports/deployment-automation/{deployments,build-logs,deployment-logs,health-checks,rollbacks}
mkdir -p reports/security-automation/{vulnerabilities,security-scans,dependency-checks,security-patches,compliance-reports}
mkdir -p reports/performance-optimization/{performance-reports,bundle-analysis,optimization-suggestions}
mkdir -p reports/documentation-automation/{generated-docs,api-docs,readme-updates}
mkdir -p reports/code-review-automation/{review-reports,quality-checks,standards-enforcement}
mkdir -p reports/dependency-management/{dependency-reports,update-logs,security-patches}
mkdir -p reports/git-automation/{commit-logs,branch-management,merge-reports}
mkdir -p reports/monitoring-automation/{error-reports,performance-alerts,health-checks}

print_success "Directory structure created"

# Install automation dependencies
print_status "Installing automation dependencies..."

# Create package.json for automation if it doesn't exist
if [ ! -f "package.json" ]; then
    cat > package.json << EOF
{
  "name": "development-automation",
  "version": "1.0.0",
  "description": "Development Automation System",
  "main": "launch-development-automation.js",
  "scripts": {
    "start": "node launch-development-automation.js start",
    "stop": "node launch-development-automation.js stop",
    "status": "node launch-development-automation.js status",
    "report": "node launch-development-automation.js report"
  },
  "dependencies": {
    "chokidar": "^3.5.3",
    "uuid": "^9.0.0",
    "fs-extra": "^11.1.1",
    "glob": "^10.3.3",
    "commander": "^11.0.0",
    "ora": "^7.0.1",
    "chalk": "^5.2.0",
    "inquirer": "^9.2.5",
    "figlet": "^1.6.0"
  },
  "devDependencies": {
    "eslint": "^8.40.0",
    "prettier": "^2.8.8",
    "jest": "^29.5.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^5.16.5",
    "cypress": "^12.13.0"
  }
}
EOF
fi

# Install dependencies
npm install

print_success "Automation dependencies installed"

# Install project dependencies if needed
print_status "Checking project dependencies..."
cd "$PROJECT_DIR"

# Install development dependencies for testing and linting
print_status "Installing development dependencies..."
npm install --save-dev eslint prettier jest @testing-library/react @testing-library/jest-dom cypress

# Install security scanning tools
print_status "Installing security tools..."
npm install --save-dev snyk audit-ci

# Install performance monitoring tools
print_status "Installing performance tools..."
npm install --save-dev lighthouse webpack-bundle-analyzer next-bundle-analyzer

# Install documentation tools
print_status "Installing documentation tools..."
npm install --save-dev jsdoc typedoc swagger-jsdoc

print_success "Project dependencies installed"

# Create configuration files
print_status "Creating configuration files..."

# Create development automation config
cat > "$AUTOMATION_DIR/development-automation-config.json" << EOF
{
  "agents": {
    "code-improvement": {
      "enabled": true,
      "config": {
        "maxFileSize": 1000000,
        "analysisDepth": "deep",
        "autoFix": false,
        "suggestRefactoring": true
      }
    },
    "test-automation": {
      "enabled": true,
      "config": {
        "autoGenerateTests": true,
        "coverageThreshold": 80,
        "parallelExecution": true,
        "testRetries": 2
      }
    },
    "deployment-automation": {
      "enabled": true,
      "config": {
        "autoDeploy": true,
        "buildOptimization": true,
        "healthChecks": true,
        "rollbackOnFailure": true
      }
    },
    "security-automation": {
      "enabled": true,
      "config": {
        "autoScan": true,
        "vulnerabilityThreshold": "high",
        "autoPatch": false,
        "securityReports": true
      }
    },
    "performance-optimization": {
      "enabled": true,
      "config": {
        "performanceThreshold": 90,
        "autoOptimize": true,
        "bundleAnalysis": true,
        "performanceReports": true
      }
    },
    "documentation-automation": {
      "enabled": true,
      "config": {
        "autoGenerateDocs": true,
        "updateReadme": true,
        "apiDocumentation": true,
        "codeComments": true
      }
    },
    "code-review-automation": {
      "enabled": true,
      "config": {
        "autoReview": true,
        "qualityThreshold": 0.8,
        "enforceStandards": true,
        "prChecks": true
      }
    },
    "dependency-management": {
      "enabled": true,
      "config": {
        "autoUpdate": false,
        "securityPatches": true,
        "dependencyReports": true,
        "updateStrategy": "conservative"
      }
    },
    "git-automation": {
      "enabled": true,
      "config": {
        "autoCommit": false,
        "branchCleanup": true,
        "mergeStrategy": "squash",
        "commitConvention": "conventional"
      }
    },
    "monitoring-automation": {
      "enabled": true,
      "config": {
        "errorTracking": true,
        "performanceAlerts": true,
        "healthChecks": true,
        "alertThreshold": 0.1
      }
    }
  },
  "system": {
    "maxConcurrentAgents": 10,
    "healthCheckInterval": 30000,
    "logRetention": 7,
    "autoRestart": true
  }
}
EOF

# Create ESLint configuration
cat > "$PROJECT_DIR/.eslintrc.json" << EOF
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended"
  ],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "prefer-const": "error",
    "no-var": "error"
  }
}
EOF

# Create Prettier configuration
cat > "$PROJECT_DIR/.prettierrc" << EOF
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
EOF

# Create Jest configuration
cat > "$PROJECT_DIR/jest.config.js" << EOF
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1'
  }
};
EOF

# Create Jest setup file
cat > "$PROJECT_DIR/jest.setup.js" << EOF
import '@testing-library/jest-dom';
EOF

print_success "Configuration files created"

# Set up Git hooks
print_status "Setting up Git hooks..."

# Create .husky directory if it doesn't exist
mkdir -p "$PROJECT_DIR/.husky"

# Create pre-commit hook
cat > "$PROJECT_DIR/.husky/pre-commit" << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Run linting
npm run lint

# Run tests
npm test

# Run security audit
npm audit --audit-level=high
EOF

# Create pre-push hook
cat > "$PROJECT_DIR/.husky/pre-push" << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Run full test suite
npm test -- --coverage

# Run build check
npm run build
EOF

# Make hooks executable
chmod +x "$PROJECT_DIR/.husky/pre-commit"
chmod +x "$PROJECT_DIR/.husky/pre-push"

print_success "Git hooks configured"

# Set up cron jobs
print_status "Setting up cron jobs..."

# Make cron script executable
chmod +x "$AUTOMATION_DIR/cron-jobs/development-automation-cron.sh"

# Create cron configuration
cat > "$AUTOMATION_DIR/cron-config.txt" << EOF
# Development Automation Cron Jobs
# Add these to your crontab (crontab -e):

# Every 5 minutes - Health check
*/5 * * * * $AUTOMATION_DIR/cron-jobs/development-automation-cron.sh health

# Every 10 minutes - System monitoring
*/10 * * * * $AUTOMATION_DIR/cron-jobs/development-automation-cron.sh monitor

# Every hour - Dependency updates
0 * * * * $AUTOMATION_DIR/cron-jobs/development-automation-cron.sh dependencies

# Every 2 hours - Code quality checks
0 */2 * * * $AUTOMATION_DIR/cron-jobs/development-automation-cron.sh quality

# Every 6 hours - Build optimization
0 */6 * * * $AUTOMATION_DIR/cron-jobs/development-automation-cron.sh optimize

# Daily at 2 AM - Full maintenance cycle
0 2 * * * $AUTOMATION_DIR/cron-jobs/development-automation-cron.sh full

# Daily at 6 AM - Daily summary
0 6 * * * $AUTOMATION_DIR/cron-jobs/development-automation-cron.sh summary

# Weekly on Sunday at 3 AM - System backup
0 3 * * 0 $AUTOMATION_DIR/cron-jobs/development-automation-cron.sh backup
EOF

print_success "Cron jobs configured"

# Create startup script
print_status "Creating startup script..."

cat > "$AUTOMATION_DIR/start-development-automation.sh" << 'EOF'
#!/bin/bash

# Development Automation System Startup Script

PROJECT_DIR="/Users/miami2/Documents/GitHub/bolt.new.zion.app"
AUTOMATION_DIR="$PROJECT_DIR/automation"

echo "🚀 Starting Development Automation System..."

cd "$AUTOMATION_DIR"

# Check if system is already running
if pgrep -f "launch-development-automation.js" > /dev/null; then
    echo "⚠️  Development automation system is already running"
    exit 1
fi

# Start the system
node launch-development-automation.js start

echo "✅ Development Automation System started"
echo "📊 Check status with: node launch-development-automation.js status"
echo "📋 View logs in: $AUTOMATION_DIR/logs/"
EOF

chmod +x "$AUTOMATION_DIR/start-development-automation.sh"

# Create stop script
cat > "$AUTOMATION_DIR/stop-development-automation.sh" << 'EOF'
#!/bin/bash

# Development Automation System Stop Script

PROJECT_DIR="/Users/miami2/Documents/GitHub/bolt.new.zion.app"
AUTOMATION_DIR="$PROJECT_DIR/automation"

echo "🛑 Stopping Development Automation System..."

cd "$AUTOMATION_DIR"

# Stop the system
node launch-development-automation.js stop

echo "✅ Development Automation System stopped"
EOF

chmod +x "$AUTOMATION_DIR/stop-development-automation.sh"

print_success "Startup scripts created"

# Create README for the automation system
print_status "Creating documentation..."

cat > "$AUTOMATION_DIR/README.md" << 'EOF'
# Development Automation System

A comprehensive autonomous development automation system that continuously helps with project development.

## 🚀 Features

### Agents
- **Code Improvement Agent**: Analyzes code and suggests improvements
- **Test Automation Agent**: Generates and runs tests automatically
- **Deployment Automation Agent**: Handles CI/CD and deployment
- **Security Automation Agent**: Monitors for vulnerabilities
- **Performance Optimization Agent**: Optimizes build and performance
- **Documentation Automation Agent**: Auto-generates documentation
- **Code Review Automation Agent**: Automated code review
- **Dependency Management Agent**: Manages package updates
- **Git Automation Agent**: Handles Git operations
- **Monitoring Automation Agent**: Monitors system health

## 📋 Quick Start

### Start the System
```bash
cd automation
./start-development-automation.sh
```

### Stop the System
```bash
cd automation
./stop-development-automation.sh
```

### Check Status
```bash
cd automation
node launch-development-automation.js status
```

### Generate Report
```bash
cd automation
node launch-development-automation.js report
```

## 🔧 Configuration

Edit `development-automation-config.json` to configure agents and system settings.

## 📊 Monitoring

- Logs: `automation/logs/`
- Reports: `automation/reports/`
- Health checks: Every 5 minutes
- Full maintenance: Daily at 2 AM

## 🛠️ Cron Jobs

The system includes automated cron jobs for:
- Health monitoring (every 5 minutes)
- System monitoring (every 10 minutes)
- Dependency updates (hourly)
- Code quality checks (every 2 hours)
- Build optimization (every 6 hours)
- Full maintenance cycle (daily)
- Daily summaries (daily)
- System backups (weekly)

## 📁 Directory Structure

```
automation/
├── agents/                    # Agent scripts
├── reports/                   # Generated reports
├── logs/                      # System logs
├── backups/                   # System backups
├── templates/                 # Agent templates
├── schedules/                 # Scheduling configs
├── cron-jobs/                # Cron job scripts
└── launch-development-automation.js
```

## 🔍 Troubleshooting

### Check System Health
```bash
cd automation
node launch-development-automation.js status
```

### View Logs
```bash
tail -f automation/logs/development-automation-cron.log
```

### Restart System
```bash
cd automation
./stop-development-automation.sh
./start-development-automation.sh
```

## 📈 Performance

The system automatically:
- Monitors performance metrics
- Optimizes builds
- Manages dependencies
- Ensures code quality
- Maintains security standards

## 🔒 Security

- Automated vulnerability scanning
- Security patch management
- Code security analysis
- Compliance monitoring

## 📚 Documentation

- Auto-generated API documentation
- Code comment analysis
- README updates
- Technical documentation

## 🤝 Contributing

The system is designed to be autonomous but can be extended with:
- Custom agents
- Additional automation scripts
- Enhanced monitoring
- Integration with external tools
EOF

print_success "Documentation created"

# Final setup steps
print_status "Performing final setup steps..."

# Create initial agent registry
cat > "$AUTOMATION_DIR/development-agents-registry.json" << EOF
[]
EOF

# Create initial status file
cat > "$AUTOMATION_DIR/launcher-status.json" << EOF
{
  "status": "setup_complete",
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "version": "1.0.0"
}
EOF

print_success "Final setup completed"

# Display completion message
echo ""
print_success "🎉 Development Automation System setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Start the system: cd automation && ./start-development-automation.sh"
echo "2. Check status: node launch-development-automation.js status"
echo "3. View logs: tail -f logs/development-automation-cron.log"
echo "4. Set up cron jobs: crontab -e (see cron-config.txt for examples)"
echo ""
echo "📚 Documentation: automation/README.md"
echo "🔧 Configuration: automation/development-automation-config.json"
echo "📊 Reports: automation/reports/"
echo ""
print_status "The system is ready to help with continuous project development!" 