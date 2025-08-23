# Optimization Automation Setup Guide

This guide will help you set up the Slack and Cursor agents optimization automation system from scratch.

## 🚀 Quick Setup

For the fastest setup, run the automated setup script:

```bash
chmod +x automation/scripts/setup.sh
./automation/scripts/setup.sh
```

## 📋 Prerequisites

- **Node.js 18+** (check with `node -v`)
- **npm or yarn**
- **Slack workspace** (with admin permissions)
- **Cursor IDE** (optional but recommended)

## 🔧 Manual Setup Steps

### 1. Install Dependencies

```bash
# Navigate to automation directory
cd automation

# Install Node.js dependencies
npm install

# Return to project root
cd ..
```

### 2. Environment Configuration

Create a `.env` file in your project root:

```bash
# Copy the template
cp automation/.env.example .env
```

Edit `.env` with your configuration:

```env
# Slack Configuration
SLACK_BOT_TOKEN=xoxb-your-bot-token-here
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
SLACK_SIGNING_SECRET=your-slack-signing-secret
SLACK_CHANNEL=#optimization-alerts

# Cursor Agent Configuration  
CURSOR_API_KEY=your-cursor-api-key
CURSOR_PROJECT_ID=your-project-id

# Performance Monitoring
OPTIMIZATION_THRESHOLD=80
BUNDLE_SIZE_THRESHOLD=5242880
PAGE_LOAD_THRESHOLD=3000

# Feature Flags
ENABLE_AUTO_OPTIMIZATION=true
ENABLE_SLACK_COMMANDS=true
ENABLE_PERFORMANCE_MONITORING=true
```

### 3. Slack App Setup

#### Create Slack App
1. Go to [api.slack.com](https://api.slack.com/apps)
2. Click **"Create New App"** → **"From scratch"**
3. Choose app name and workspace

#### Configure Bot Token Scopes
In **OAuth & Permissions**, add these scopes:
- `chat:write`
- `commands` 
- `incoming-webhook`
- `channels:read`
- `users:read`

#### Create Slash Commands
In **Slash Commands**, create:

| Command | Request URL | Description |
|---------|-------------|-------------|
| `/optimize` | `https://your-domain.com/api/slack/commands` | Trigger optimization |
| `/status` | `https://your-domain.com/api/slack/commands` | Check performance status |
| `/report` | `https://your-domain.com/api/slack/commands` | Generate performance report |
| `/suggestions` | `https://your-domain.com/api/slack/commands` | Get optimization suggestions |

#### Install App to Workspace
1. In **Install App**, click **"Install to Workspace"**
2. Copy the **Bot User OAuth Token** to your `.env` file

#### Create Incoming Webhook
1. In **Incoming Webhooks**, toggle **"Activate Incoming Webhooks"**
2. Click **"Add New Webhook to Workspace"**
3. Select your target channel
4. Copy the webhook URL to your `.env` file

### 4. Cursor Agent Configuration

#### Install Cursor Rules
The automation system includes specialized Cursor rules:
- `.cursor/rules/optimization/performance-optimization-agent.mdc`
- `.cursor/rules/automation/slack-cursor-integration-agent.mdc`

These are automatically created during setup.

#### Configure Cursor API (Optional)
If you have Cursor API access:
1. Get your API key from Cursor dashboard
2. Add it to your `.env` file as `CURSOR_API_KEY`

### 5. Add Automation Scripts

Add these scripts to your main `package.json`:

```json
{
  "scripts": {
    "automation:start": "node automation/index.js",
    "automation:dev": "nodemon automation/index.js",
    "automation:stop": "pkill -f \"node automation/index.js\"",
    "automation:logs": "tail -f logs/automation.log",
    "automation:health": "curl http://localhost:3001/health",
    "automation:test": "cd automation && npm test",
    "automation:diagnose": "node automation/tests/system-diagnostic.js"
  }
}
```

## 🧪 Testing the Setup

### 1. Run System Diagnostic

```bash
npm run automation:diagnose
```

This will check:
- ✅ Environment variables
- ✅ Dependencies
- ✅ Required files
- ✅ Connections

### 2. Test Individual Components

```bash
# Test Slack connection
npm run automation:test-slack

# Test performance monitoring
npm run automation:test-monitoring

# Test system health
npm run automation:health
```

### 3. Start the System

```bash
# Start in development mode
npm run automation:dev

# Or start in production mode
npm run automation:start
```

### 4. Verify Slack Integration

In your Slack workspace, try these commands:
- `/status` - Check if bot responds
- `/optimize bundle` - Test optimization trigger
- `/suggestions` - Get optimization suggestions

## 📊 Monitoring and Dashboards

Once running, access these URLs:

| URL | Description |
|-----|-------------|
| `http://localhost:3001/health` | System health check |
| `http://localhost:3001/dashboard` | Performance dashboard |
| `http://localhost:3001/slack-status` | Slack integration status |
| `http://localhost:3001/api/performance/metrics` | Performance metrics API |

## 🛠️ Troubleshooting

### Common Issues

#### 1. Slack Bot Not Responding
```bash
# Check if bot token is valid
curl -X POST -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
  -H "Content-Type: application/json" \
  https://slack.com/api/auth.test
```

**Solutions:**
- Verify `SLACK_BOT_TOKEN` in `.env`
- Check bot scopes in Slack app settings
- Ensure bot is invited to target channel

#### 2. Performance Monitoring Not Working
```bash
# Check if monitoring is enabled
npm run automation:test-monitoring
```

**Solutions:**
- Verify `ENABLE_PERFORMANCE_MONITORING=true`
- Check if build directory exists (`.next`)
- Ensure proper file permissions

#### 3. Cursor Agent Not Triggering
**Solutions:**
- Verify Cursor rules are in correct location
- Check rule file syntax (YAML frontmatter)
- Ensure agent is configured for target file types

#### 4. Port Already in Use
```bash
# Find process using port 3001
lsof -i :3001

# Kill the process
kill -9 <PID>
```

### Debug Mode

Enable debug logging:

```bash
# Set debug environment variable
DEBUG=* npm run automation:start

# Or set log level
LOG_LEVEL=debug npm run automation:start
```

### Log Analysis

```bash
# View real-time logs
npm run automation:logs

# Search for errors
grep -i error logs/automation.log

# View performance history
cat logs/performance-history.jsonl | jq .
```

## 🔧 Advanced Configuration

### Custom Performance Thresholds

```env
# Bundle size limit (bytes)
BUNDLE_SIZE_THRESHOLD=5242880

# Page load time limit (ms)
PAGE_LOAD_THRESHOLD=3000

# Core Web Vitals LCP threshold (seconds)
CORE_WEB_VITALS_THRESHOLD=2.5

# Alert cooldown (minutes)
ALERT_COOLDOWN_MINUTES=15
```

### Custom Slack Channels

```env
# Main alerts channel
SLACK_CHANNEL=#optimization-alerts

# Admin notifications
SLACK_ADMIN_CHANNEL=#dev-team

# Debug notifications (optional)
SLACK_DEBUG_CHANNEL=#automation-debug
```

### External Integrations

```env
# Lighthouse API for performance testing
LIGHTHOUSE_API_KEY=your-lighthouse-key

# Datadog for metrics collection
DATADOG_API_KEY=your-datadog-key

# Sentry for error tracking
SENTRY_DSN=your-sentry-dsn
```

## 🎯 Next Steps

After successful setup:

1. **Configure Performance Thresholds**: Adjust limits based on your project needs
2. **Customize Slack Notifications**: Modify message templates and channels
3. **Add Custom Optimization Rules**: Create project-specific Cursor rules
4. **Set Up Continuous Integration**: Integrate with your CI/CD pipeline
5. **Monitor and Iterate**: Use analytics to improve optimization effectiveness

## 📚 Additional Resources

- [Slack API Documentation](https://api.slack.com/)
- [Cursor AI Documentation](https://cursor.com/docs)
- [Performance Optimization Guide](./performance-optimization-implementation.md)
- [Troubleshooting Guide](./docs/troubleshooting.md)

## 🤝 Support

If you encounter issues:

1. Run the diagnostic tool: `npm run automation:diagnose`
2. Check the troubleshooting section above
3. Review logs: `npm run automation:logs`
4. Open an issue with diagnostic results and error logs