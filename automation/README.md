# Cursor Chat Automation System

A comprehensive automation system that follows all instructions from Cursor past chats automatically.

## Overview

This automation system continuously monitors and improves the application by following patterns and instructions from previous Cursor chat sessions. It automatically:

- Fixes code quality and syntax issues
- Maintains the authentication system
- Optimizes performance
- Enhances security
- Improves UI/UX
- Manages content
- Runs tests and validation
- Builds and deploys changes

## Features

### 🔧 Code Quality & Syntax Fixes
- Automatic syntax error detection and fixing
- JSX syntax validation
- Import statement optimization
- ClassName error correction
- API import validation

### 🔐 Authentication System Maintenance
- Supabase authentication validation
- Environment variable checking
- Auth page completeness verification
- Session management validation

### ⚡ Performance Optimization
- Bundle size analysis
- Image optimization recommendations
- Linting and type checking
- Performance monitoring

### 🛡️ Security Enhancements
- Security audit automation
- Environment variable validation
- Hardcoded secret detection
- Dependency vulnerability checking

### 🎨 UI/UX Improvements
- Responsive design validation
- Accessibility compliance checking
- UI component optimization
- Design system validation

### 📝 Content Management
- Missing page detection
- Sitemap generation
- Content quality validation
- SEO optimization

### 🧪 Testing & Validation
- Unit test execution
- E2E test validation
- Build process testing
- Quality assurance

### 🚀 Build & Deployment
- Automated building
- Static file export
- Git commit and push
- Deployment triggering

## Installation

1. Ensure Node.js is installed
2. Navigate to the project root
3. The automation system is ready to use

## Usage

### Quick Start

```bash
# Run single execution
node automation/launch-cursor-automation.js --single

# Run continuous execution
node automation/launch-cursor-automation.js --continuous

# Check status
node automation/launch-cursor-automation.js --status

# Run health check
node automation/launch-cursor-automation.js --health
```

### Direct Script Execution

```bash
# Run the main automation system
node automation/cursor-chat-automation-system.js

# Run continuous mode
node automation/cursor-chat-automation-system.js --continuous
```

### Individual Scripts

```bash
# Check authentication system
node scripts/check-auth-system.js

# Security check
node scripts/security-check.js

# Validate environment variables
node scripts/validate-env-vars.js

# Optimize images
node scripts/optimize-images.js

# Optimize bundle
node scripts/optimize-bundle.js

# Check responsive design
node scripts/check-responsive-design.js

# Validate accessibility
node scripts/validate-accessibility.js

# Optimize UI components
node scripts/optimize-ui-components.js

# Generate sitemap
node scripts/generate-sitemap.js

# Validate content
node scripts/validate-content.js

# Test build
node scripts/test-build.js
```

## Cron Job Setup

To run the automation system automatically:

```bash
# Make the cron script executable
chmod +x automation/cron-jobs/cursor-automation-cron.sh

# Add to crontab (runs every 5 minutes)
crontab -e
# Add this line:
*/5 * * * * /path/to/project/automation/cron-jobs/cursor-automation-cron.sh
```

## Configuration

### Environment Variables

The system uses these environment variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `NEXT_PUBLIC_SITE_URL` - Site URL for sitemap generation

### Automation Settings

The automation system can be configured by modifying:
- `automation/cursor-automation-status.json` - Status tracking
- `automation/cursor-chat-logs/` - Log files
- `automation/cursor-instructions/` - Instruction files

## Monitoring

### Logs

Logs are stored in:
- `automation/cursor-chat-logs/` - Daily log files
- `automation/cursor-automation-status.json` - Status tracking
- `automation/health-check.json` - Health monitoring

### Reports

Reports are generated in:
- `automation/auth-system-report.json` - Authentication status
- `automation/security-report.json` - Security analysis
- `automation/bundle-optimization-report.json` - Performance analysis
- `automation/responsive-design-report.json` - UI analysis
- `automation/accessibility-report.json` - Accessibility status
- `automation/ui-components-report.json` - Component analysis
- `automation/sitemap-report.json` - SEO analysis
- `automation/content-validation-report.json` - Content analysis
- `automation/build-test-report.json` - Build status

## Architecture

### Core Components

1. **CursorChatAutomationSystem** - Main automation orchestrator
2. **ContinuousCursorAutomation** - Continuous monitoring system
3. **CursorAutomationLauncher** - Launcher and status management
4. **Individual Scripts** - Specialized validation and optimization scripts

### Workflow

1. **Initialization** - Load status and create directories
2. **Code Quality** - Fix syntax and import issues
3. **Authentication** - Validate auth system
4. **Performance** - Optimize bundle and images
5. **Security** - Run security checks
6. **UI/UX** - Validate responsive design and accessibility
7. **Content** - Manage pages and sitemap
8. **Testing** - Run tests and validation
9. **Deployment** - Build and deploy changes
10. **Reporting** - Generate comprehensive reports

## Troubleshooting

### Common Issues

1. **Node.js not found**
   - Ensure Node.js is installed and in PATH

2. **Script not found**
   - Check file permissions and paths

3. **Build failures**
   - Check for syntax errors in source code
   - Verify environment variables

4. **Authentication issues**
   - Verify Supabase configuration
   - Check environment variables

### Debug Mode

Enable debug logging:

```bash
DEBUG=true node automation/launch-cursor-automation.js --single
```

### Manual Recovery

If the automation system gets stuck:

```bash
# Stop any running processes
pkill -f "cursor-chat-automation"

# Reset status
rm automation/cursor-automation-status.json

# Restart
node automation/launch-cursor-automation.js --single
```

## Contributing

To extend the automation system:

1. Add new scripts to `scripts/` directory
2. Update the main automation system in `cursor-chat-automation-system.js`
3. Add corresponding validation in individual scripts
4. Update this README with new features

## License

This automation system is part of the bolt.new.zion.app project.

## Support

For issues or questions about the automation system, check the logs in `automation/cursor-chat-logs/` for detailed error information.
