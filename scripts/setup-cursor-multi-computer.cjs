#!/usr/bin/env node

/**
 * Setup Cursor Multi-Computer Communication
 *
 * This script sets up Cursor communication across multiple computers
 * and configures the necessary environment variables and connections.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

class CursorMultiComputerSetup {
  constructor() {
    this.config = {
      projectPath: process.cwd(),
      envFile: '.env.local',
      cursorConfigDir: '.cursor',
      logsDir: 'logs',
      scriptsDir: 'scripts',
    };
  }

  async setup() {
    console.log('🚀 Setting up Cursor Multi-Computer Communication...');

    try {
      // 1. Create necessary directories
      await this.createDirectories();

      // 2. Configure environment variables
      await this.configureEnvironment();

      // 3. Setup Cursor configuration
      await this.setupCursorConfig();

      // 4. Create startup scripts
      await this.createStartupScripts();

      // 5. Test the setup
      await this.testSetup();

      console.log(
        '✅ Cursor Multi-Computer Communication setup completed successfully!',
      );
      console.log('\n📋 Next steps:');
      console.log('1. Run: npm run cursor:start');
      console.log('2. On other computers, run: npm run cursor:start');
      console.log(
        '3. The computers will automatically connect and communicate',
      );
      console.log(
        '4. Use: npm run cursor:chat <category> <prompt> to trigger chats',
      );
      console.log('5. Use: npm run cursor:fix <type> to apply fixes');
    } catch (error) {
      console.error(`❌ Setup failed: ${error.message}`);
      throw error;
    }
  }

  async createDirectories() {
    console.log('📁 Creating necessary directories...');

    const directories = [
      this.config.logsDir,
      path.join(this.config.cursorConfigDir, 'rules'),
      path.join(this.config.cursorConfigDir, 'rules', 'automation'),
      'cursor-ai-data',
      'cursor-ai-data/coordination',
      'cursor-ai-data/analysis',
    ];

    for (const dir of directories) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
      }
    }
  }

  async configureEnvironment() {
    console.log('⚙️ Configuring environment variables...');

    const envPath = this.config.envFile;
    let envContent = '';

    // Read existing .env.local if it exists
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
    }

    // Add Cursor-specific environment variables
    const cursorEnvVars = [
      '',
      '# Cursor Multi-Computer Communication Configuration',
      `COMPUTER_ID=${os.hostname()}_${Date.now()}`,
      'CURSOR_API_URL=https://api.cursor.sh',
      'CURSOR_API_KEY=',
      'CURSOR_WORKSPACE_ID=',
      'CURSOR_LOCAL_PORT=3002',
      'CURSOR_MASTER_PORT=3004',
      'ENABLE_CURSOR_COMMUNICATION=true',
      'CURSOR_AUTO_FIX=true',
      'CURSOR_CONTINUOUS_MONITORING=true',
      '',
    ];

    // Check if Cursor env vars already exist
    const existingVars = cursorEnvVars.filter(
      (line) =>
        line.startsWith('#') ||
        line.trim() === '' ||
        !envContent.includes(line.split('=')[0]),
    );

    if (existingVars.length > 0) {
      envContent += existingVars.join('\n');
      fs.writeFileSync(envPath, envContent);
      console.log(`✅ Updated environment file: ${envPath}`);
    } else {
      console.log(`✅ Environment file already configured: ${envPath}`);
    }
  }

  async setupCursorConfig() {
    console.log('🔧 Setting up Cursor configuration...');

    const cursorRulesDir = path.join(
      this.config.cursorConfigDir,
      'rules',
      'automation',
    );

    // Create Cursor automation rules
    const automationRules = [
      {
        name: 'multi-computer-communication.mdc',
        content: this.generateAutomationRules(),
      },
      {
        name: 'continuous-improvement.mdc',
        content: this.generateContinuousImprovementRules(),
      },
      {
        name: 'auto-fix.mdc',
        content: this.generateAutoFixRules(),
      },
    ];

    for (const rule of automationRules) {
      const rulePath = path.join(cursorRulesDir, rule.name);
      fs.writeFileSync(rulePath, rule.content);
      console.log(`✅ Created Cursor rule: ${rule.name}`);
    }
  }

  generateAutomationRules() {
    return `# Cursor Multi-Computer Communication Rules

## Overview
This rule set enables automated communication and collaboration between multiple computers running Cursor IDE.

## Communication Protocol
- Each computer runs a local communication server on port 3002
- Master node runs on port 3004 for coordination
- Automatic failover and reconnection handling
- Real-time status updates and health monitoring

## Chat Triggers
- Build errors automatically trigger chat requests
- Linting issues trigger code quality discussions
- Performance issues trigger optimization chats
- Security vulnerabilities trigger security reviews

## Fix Application
- Automatic application of linting fixes
- Code formatting and style corrections
- Build error resolution
- Test failure investigation

## Monitoring
- Continuous health monitoring every 30 seconds
- Automatic issue detection and reporting
- Performance metrics collection
- Error logging and analysis

## Commands
- \`npm run cursor:start\` - Start communication system
- \`npm run cursor:chat <category> <prompt>\` - Trigger chat
- \`npm run cursor:fix <type>\` - Apply fix
- \`npm run cursor:status\` - Get status

## Integration
- Integrates with existing Cursor AI features
- Supports custom automation scripts
- Extensible for additional computer types
- Compatible with CI/CD pipelines`;
  }

  generateContinuousImprovementRules() {
    return `# Continuous Improvement Rules

## Automatic Improvements
- Code quality monitoring and fixes
- Performance optimization suggestions
- Security vulnerability detection
- Accessibility improvements
- Test coverage enhancement

## Monitoring Cycles
- Every 30 seconds: Health check
- Every 5 minutes: Issue detection
- Every hour: Performance analysis
- Daily: Security audit

## Improvement Categories
1. **Code Quality**: Linting, formatting, best practices
2. **Performance**: Bundle size, loading speed, runtime
3. **Security**: Vulnerabilities, best practices, audits
4. **Accessibility**: WCAG compliance, screen readers
5. **Testing**: Coverage, reliability, automation

## Triggers
- Build failures
- Linting errors
- Test failures
- Performance regressions
- Security alerts

## Actions
- Automatic fix application
- Chat request generation
- Issue reporting
- Performance monitoring
- Security scanning`;
  }

  generateAutoFixRules() {
    return `# Auto-Fix Rules

## Fix Categories

### Linting Fixes
- ESLint error correction
- Prettier formatting
- Code style consistency
- Import organization

### Build Fixes
- Dependency resolution
- Configuration errors
- Compilation issues
- Asset optimization

### TypeScript Fixes
- Type definition errors
- Interface mismatches
- Import/export issues
- Generic type problems

### Test Fixes
- Test configuration
- Mock setup
- Assertion errors
- Coverage issues

## Fix Application Process
1. **Detection**: Identify the issue type
2. **Analysis**: Understand the root cause
3. **Solution**: Generate or apply fix
4. **Verification**: Test the fix
5. **Documentation**: Log the change

## Safety Measures
- Backup before applying fixes
- Test fixes in isolation
- Rollback capability
- Human review for critical changes

## Integration
- Works with existing Cursor AI
- Supports custom fix scripts
- Extensible for new fix types
- Compatible with CI/CD`;
  }

  async createStartupScripts() {
    console.log('📜 Creating startup scripts...');

    const scripts = [
      {
        name: 'start-cursor-communication.sh',
        content: this.generateStartupScript(),
      },
      {
        name: 'start-cursor-communication.bat',
        content: this.generateWindowsStartupScript(),
      },
    ];

    for (const script of scripts) {
      const scriptPath = path.join(this.config.scriptsDir, script.name);
      fs.writeFileSync(scriptPath, script.content);

      // Make shell script executable on Unix systems
      if (script.name.endsWith('.sh')) {
        try {
          execSync(`chmod +x ${scriptPath}`);
        } catch (error) {
          // Ignore chmod errors on Windows
        }
      }

      console.log(`✅ Created startup script: ${script.name}`);
    }
  }

  generateStartupScript() {
    return `#!/bin/bash

# Cursor Multi-Computer Communication Startup Script

echo "🚀 Starting Cursor Multi-Computer Communication..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Navigate to project directory
cd "$(dirname "$0")/.."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the communication system
echo "🔌 Starting Cursor communication system..."
npm run cursor:start

echo "✅ Cursor Multi-Computer Communication started successfully!"
echo "📊 Status: http://localhost:3002/status"
echo "💬 Chat: npm run cursor:chat <category> <prompt>"
echo "🔧 Fix: npm run cursor:fix <type>"
`;
  }

  generateWindowsStartupScript() {
    return `@echo off

REM Cursor Multi-Computer Communication Startup Script

echo 🚀 Starting Cursor Multi-Computer Communication...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

REM Navigate to project directory
cd /d "%~dp0.."

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Start the communication system
echo 🔌 Starting Cursor communication system...
npm run cursor:start

echo ✅ Cursor Multi-Computer Communication started successfully!
echo 📊 Status: http://localhost:3002/status
echo 💬 Chat: npm run cursor:chat ^<category^> ^<prompt^>
echo 🔧 Fix: npm run cursor:fix ^<type^>
pause
`;
  }

  async testSetup() {
    console.log('🧪 Testing setup...');

    try {
      // Test if the communication script exists
      const scriptPath = path.join(
        this.config.scriptsDir,
        'cursor-multi-computer-communication.cjs',
      );
      if (!fs.existsSync(scriptPath)) {
        throw new Error('Communication script not found');
      }

      // Test if environment file exists
      if (!fs.existsSync(this.config.envFile)) {
        throw new Error('Environment file not found');
      }

      // Test if Cursor config directory exists
      if (!fs.existsSync(this.config.cursorConfigDir)) {
        throw new Error('Cursor config directory not found');
      }

      console.log('✅ Setup test passed');
    } catch (error) {
      console.error(`❌ Setup test failed: ${error.message}`);
      throw error;
    }
  }

  async generateInstructions() {
    const instructions = `
# Cursor Multi-Computer Communication Setup Instructions

## Overview
This setup enables Cursor IDE instances across multiple computers to communicate and collaborate automatically.

## Prerequisites
- Node.js 18+ installed on all computers
- Cursor IDE installed on all computers
- Network connectivity between computers
- Git repository access on all computers

## Setup Steps

### 1. Primary Computer Setup
\`\`\`bash
# Run the setup script
node scripts/setup-cursor-multi-computer.cjs

# Start the communication system
npm run cursor:start
\`\`\`

### 2. Secondary Computer Setup
\`\`\`bash
# Clone the repository
git clone <repository-url>
cd <project-directory>

# Run the setup script
node scripts/setup-cursor-multi-computer.cjs

# Start the communication system
npm run cursor:start
\`\`\`

### 3. Verification
\`\`\`bash
# Check status
curl http://localhost:3002/status

# Test chat functionality
npm run cursor:chat build "Test chat functionality"

# Test fix functionality
npm run cursor:fix lint
\`\`\`

## Configuration

### Environment Variables
- \`COMPUTER_ID\`: Unique identifier for each computer
- \`CURSOR_API_KEY\`: Cursor API key (optional)
- \`CURSOR_WORKSPACE_ID\`: Cursor workspace ID (optional)
- \`CURSOR_LOCAL_PORT\`: Local communication port (default: 3002)
- \`CURSOR_MASTER_PORT\`: Master coordination port (default: 3004)

### Cursor Rules
The setup creates automation rules in \`.cursor/rules/automation/\`:
- \`multi-computer-communication.mdc\`: Communication protocol
- \`continuous-improvement.mdc\`: Improvement automation
- \`auto-fix.mdc\`: Automatic fix application

## Usage

### Starting the System
\`\`\`bash
# Start communication system
npm run cursor:start

# Or use the startup script
./scripts/start-cursor-communication.sh  # Unix/Linux/macOS
scripts\\start-cursor-communication.bat   # Windows
\`\`\`

### Triggering Chats
\`\`\`bash
# General chat
npm run cursor:chat general "Help improve this code"

# Build issues
npm run cursor:chat build "Fix build errors"

# Code quality
npm run cursor:chat lint "Improve code quality"

# Performance
npm run cursor:chat performance "Optimize performance"
\`\`\`

### Applying Fixes
\`\`\`bash
# Linting fixes
npm run cursor:fix lint

# Build fixes
npm run cursor:fix build

# Formatting fixes
npm run cursor:fix format

# Test fixes
npm run cursor:fix test
\`\`\`

### Monitoring
\`\`\`bash
# Get status
npm run cursor:status

# Monitor continuously
npm run cursor:monitor

# Auto-fix issues
npm run cursor:auto-fix
\`\`\`

## Troubleshooting

### Common Issues
1. **Port conflicts**: Change ports in environment variables
2. **Network issues**: Check firewall settings
3. **Cursor not found**: Verify Cursor installation path
4. **Permission errors**: Check file permissions

### Logs
- Communication logs: \`logs/cursor-communication.log\`
- Error logs: \`logs/cursor-errors.log\`
- Status logs: \`logs/cursor-status.log\`

### Support
- Check the logs for detailed error information
- Verify network connectivity between computers
- Ensure all prerequisites are installed
- Check Cursor IDE is running and accessible

## Advanced Configuration

### Custom Rules
Add custom automation rules to \`.cursor/rules/automation/\`:
\`\`\`markdown
# Custom Rule
## Triggers
- Specific file changes
- Build events
- Test results

## Actions
- Custom chat prompts
- Specific fix applications
- Performance monitoring
\`\`\`

### Integration
- CI/CD pipeline integration
- Slack notifications
- Email alerts
- Custom webhooks

## Security Considerations
- Use HTTPS for production deployments
- Implement authentication for API access
- Restrict network access to trusted computers
- Monitor and log all communications
- Regular security audits

## Performance Optimization
- Adjust monitoring intervals
- Optimize chat request frequency
- Implement caching for repeated requests
- Monitor resource usage
- Scale based on computer count
`;

    const instructionsPath = 'CURSOR_MULTI_COMPUTER_SETUP.md';
    fs.writeFileSync(instructionsPath, instructions);
    console.log(`✅ Created setup instructions: ${instructionsPath}`);
  }
}

// Main execution
if (require.main === module) {
  const setup = new CursorMultiComputerSetup();

  const command = process.argv[2];

  switch (command) {
    case 'setup':
      setup
        .setup()
        .then(() => setup.generateInstructions())
        .then(() => {
          console.log('\n🎉 Setup completed successfully!');
          console.log(
            '📖 See CURSOR_MULTI_COMPUTER_SETUP.md for detailed instructions.',
          );
        })
        .catch((error) => {
          console.error(`❌ Setup failed: ${error.message}`);
          process.exit(1);
        });
      break;

    case 'instructions':
      setup
        .generateInstructions()
        .then(() => {
          console.log('✅ Instructions generated successfully!');
        })
        .catch((error) => {
          console.error(`❌ Failed to generate instructions: ${error.message}`);
          process.exit(1);
        });
      break;

    default:
      console.log(`
Usage: node setup-cursor-multi-computer.cjs <command>

Commands:
  setup        Run the complete setup process
  instructions Generate setup instructions

Example:
  node setup-cursor-multi-computer.cjs setup
      `);
  }
}

module.exports = CursorMultiComputerSetup;
