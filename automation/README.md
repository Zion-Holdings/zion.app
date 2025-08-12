# Optimization Automation System

A comprehensive automation system integrating Slack with Cursor agents for proactive performance monitoring, optimization triggers, and team notifications.

## 🎯 Overview

This system provides:
- **Real-time Performance Monitoring** with Slack notifications
- **Automated Optimization Triggers** via Cursor agents
- **Team Collaboration** through Slack workflows
- **Intelligent Decision Making** with AI-powered analysis
- **Proactive Issue Resolution** before users are affected

## 🏗️ System Architecture

```mermaid
graph TB
    subgraph "Performance Monitoring"
        PM[Performance Monitor] --> PD[Performance Data]
        PD --> TH[Threshold Check]
        TH --> AT[Alert Trigger]
    end
    
    subgraph "Slack Integration"
        AT --> SW[Slack Webhook]
        SW --> SB[Slack Bot]
        SB --> SC[Slack Commands]
        SC --> SW2[Outgoing Webhooks]
    end
    
    subgraph "Cursor Agents"
        SW2 --> CA[Cursor Agent]
        CA --> OR[Optimization Rules]
        OR --> OE[Optimization Execution]
        OE --> RF[Results Feedback]
    end
    
    subgraph "Automation Workflows"
        RF --> WF[Workflow Engine]
        WF --> CO[Continuous Optimization]
        CO --> PM
    end
```

## 🚀 Quick Start

### 1. Environment Setup
```bash
# Copy environment template
cp automation/.env.example .env

# Configure Slack settings
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
SLACK_CHANNEL=#optimization-alerts

# Configure Cursor settings
CURSOR_API_KEY=your-cursor-api-key
OPTIMIZATION_THRESHOLD=80
```

### 2. Install Dependencies
```bash
npm install @slack/bolt @slack/web-api axios
```

### 3. Start the System
```bash
# Start the automation system
npm run automation:start

# Monitor logs
npm run automation:logs
```

## 📊 Features

### Performance Monitoring
- **Bundle Size Tracking**: Monitors build size changes
- **Load Time Analysis**: Tracks page performance metrics
- **Core Web Vitals**: LCP, FID, CLS monitoring
- **Resource Usage**: CPU, memory, network monitoring

### Slack Integration
- **Real-time Alerts**: Instant notifications for performance issues
- **Interactive Commands**: `/optimize`, `/status`, `/report`
- **Team Collaboration**: Shared optimization workflows
- **Historical Reports**: Performance trend analysis

### Cursor Agents
- **Smart Optimization**: AI-powered performance improvements
- **Code Analysis**: Automated code quality checks
- **Dependency Management**: Package optimization suggestions
- **Build Optimization**: Intelligent build configuration

### Automation Workflows
- **Threshold-based Triggers**: Automatic optimization when metrics decline
- **Scheduled Optimization**: Regular performance audits
- **Issue Prevention**: Proactive problem detection
- **Continuous Improvement**: Learning from optimization history

## 🔧 Configuration

### Slack App Setup
1. Create a new Slack app at [api.slack.com](https://api.slack.com)
2. Enable Bot Token Scopes:
   - `chat:write`
   - `commands`
   - `incoming-webhook`
   - `channels:read`
3. Install app to workspace
4. Copy Bot Token to environment

### Cursor Agent Rules
The system includes specialized rules for:
- **Performance optimization**
- **Bundle analysis**
- **Code quality improvement**
- **Automated refactoring**

### Webhook Endpoints
- `/api/slack/events` - Slack event handling
- `/api/slack/commands` - Slash command processing
- `/api/optimization/trigger` - Manual optimization triggers
- `/api/performance/alert` - Performance threshold alerts

## 🤖 Available Commands

### Slack Commands
```bash
# Manual optimization trigger
/optimize [target] [options]

# Performance status check
/status [component]

# Generate performance report
/report [timeframe]

# List optimization suggestions
/suggestions

# Configure monitoring thresholds
/configure [setting] [value]
```

### Automation Scripts
```bash
# Start monitoring system
npm run automation:start

# Check system health
npm run automation:health

# View optimization logs
npm run automation:logs

# Manual performance check
npm run automation:check

# Generate reports
npm run automation:report
```

## 📈 Monitoring Dashboard

Access real-time metrics at:
- **Performance Dashboard**: `http://localhost:3001/dashboard`
- **Slack Integration Status**: `http://localhost:3001/slack-status`
- **Optimization History**: `http://localhost:3001/history`

## 🔔 Alert Types

### Critical Alerts
- Bundle size increase >20%
- Page load time >3 seconds
- Core Web Vitals below threshold
- Build failures

### Warning Alerts
- Performance degradation trends
- Dependency vulnerabilities
- Code quality issues
- Resource usage spikes

### Info Notifications
- Successful optimizations
- Performance improvements
- System health updates
- Scheduled maintenance

## 🛠️ Customization

### Custom Optimization Rules
Create custom Cursor rules in `.cursor/rules/optimization/`:
```markdown
---
description: Custom performance optimization rule
globs: src/**/*.{ts,tsx}
alwaysApply: false
---

# Custom Performance Rule

## Conditions
- Apply when bundle size > 5MB
- Target React components
- Focus on lazy loading opportunities

## Actions
- Implement dynamic imports
- Add code splitting
- Optimize image loading
```

### Slack Workflow Customization
Modify workflows in `automation/slack/workflows/`:
- Performance alerts
- Optimization suggestions
- Team notifications
- Report generation

## 🔍 Troubleshooting

### Common Issues
1. **Slack webhook not responding**
   - Check webhook URL configuration
   - Verify bot token permissions
   - Test with curl command

2. **Cursor agent not triggering**
   - Verify API key configuration
   - Check rule file syntax
   - Review agent logs

3. **Performance monitoring gaps**
   - Check monitoring script execution
   - Verify threshold configurations
   - Review log collection

### Debug Commands
```bash
# Test Slack connection
npm run automation:test-slack

# Validate Cursor configuration
npm run automation:test-cursor

# Check performance monitoring
npm run automation:test-monitoring

# Full system diagnostic
npm run automation:diagnose
```

## 📚 Documentation

- [Slack Integration Guide](./docs/slack-integration.md)
- [Cursor Agent Configuration](./docs/cursor-agents.md)
- [Performance Monitoring](./docs/performance-monitoring.md)
- [Troubleshooting Guide](./docs/troubleshooting.md)
- [API Reference](./docs/api-reference.md)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Add tests for new functionality
4. Submit pull request

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details