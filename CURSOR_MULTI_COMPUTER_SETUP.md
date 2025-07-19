
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
```bash
# Run the setup script
node scripts/setup-cursor-multi-computer.cjs

# Start the communication system
npm run cursor:start
```

### 2. Secondary Computer Setup
```bash
# Clone the repository
git clone <repository-url>
cd <project-directory>

# Run the setup script
node scripts/setup-cursor-multi-computer.cjs

# Start the communication system
npm run cursor:start
```

### 3. Verification
```bash
# Check status
curl http://localhost:3002/status

# Test chat functionality
npm run cursor:chat build "Test chat functionality"

# Test fix functionality
npm run cursor:fix lint
```

## Configuration

### Environment Variables
- `COMPUTER_ID`: Unique identifier for each computer
- `CURSOR_API_KEY`: Cursor API key (optional)
- `CURSOR_WORKSPACE_ID`: Cursor workspace ID (optional)
- `CURSOR_LOCAL_PORT`: Local communication port (default: 3002)
- `CURSOR_MASTER_PORT`: Master coordination port (default: 3004)

### Cursor Rules
The setup creates automation rules in `.cursor/rules/automation/`:
- `multi-computer-communication.mdc`: Communication protocol
- `continuous-improvement.mdc`: Improvement automation
- `auto-fix.mdc`: Automatic fix application

## Usage

### Starting the System
```bash
# Start communication system
npm run cursor:start

# Or use the startup script
./scripts/start-cursor-communication.sh  # Unix/Linux/macOS
scripts\start-cursor-communication.bat   # Windows
```

### Triggering Chats
```bash
# General chat
npm run cursor:chat general "Help improve this code"

# Build issues
npm run cursor:chat build "Fix build errors"

# Code quality
npm run cursor:chat lint "Improve code quality"

# Performance
npm run cursor:chat performance "Optimize performance"
```

### Applying Fixes
```bash
# Linting fixes
npm run cursor:fix lint

# Build fixes
npm run cursor:fix build

# Formatting fixes
npm run cursor:fix format

# Test fixes
npm run cursor:fix test
```

### Monitoring
```bash
# Get status
npm run cursor:status

# Monitor continuously
npm run cursor:monitor

# Auto-fix issues
npm run cursor:auto-fix
```

## Troubleshooting

### Common Issues
1. **Port conflicts**: Change ports in environment variables
2. **Network issues**: Check firewall settings
3. **Cursor not found**: Verify Cursor installation path
4. **Permission errors**: Check file permissions

### Logs
- Communication logs: `logs/cursor-communication.log`
- Error logs: `logs/cursor-errors.log`
- Status logs: `logs/cursor-status.log`

### Support
- Check the logs for detailed error information
- Verify network connectivity between computers
- Ensure all prerequisites are installed
- Check Cursor IDE is running and accessible

## Advanced Configuration

### Custom Rules
Add custom automation rules to `.cursor/rules/automation/`:
```markdown
# Custom Rule
## Triggers
- Specific file changes
- Build events
- Test results

## Actions
- Custom chat prompts
- Specific fix applications
- Performance monitoring
```

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
