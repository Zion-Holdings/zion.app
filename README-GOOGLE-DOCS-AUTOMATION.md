# Google Docs Automation System

This system automatically monitors and executes instructions from Google Docs documents, providing a comprehensive automation framework for following document-based instructions.

## 🚀 Features

- **Real-time Monitoring**: Continuously monitors Google Docs for new instructions
- **Intelligent Parsing**: Automatically parses and categorizes instructions by type
- **Specialized Agents**: Dedicated agents for different task types (content, development, deployment, marketing)
- **Comprehensive Reporting**: Detailed reports on system performance and instruction execution
- **Health Monitoring**: Continuous health checks and system status monitoring
- **Automated Testing**: Built-in test suite for system validation
- **Cron Integration**: Scheduled execution and maintenance routines

## 📋 System Components

### Core Components

1. **GoogleDocsInstructionAgent** (`automation/agents/google-docs-instruction-agent.js`)
   - Monitors Google Docs documents for new instructions
   - Parses and categorizes instructions
   - Executes instructions based on type

2. **InstructionExecutionOrchestrator** (`automation/agents/instruction-execution-orchestrator.js`)
   - Manages task execution and coordination
   - Handles concurrent task processing
   - Provides health monitoring and reporting

3. **GoogleDocsAutomationLauncher** (`automation/launch-google-docs-automation.js`)
   - Main system launcher and coordinator
   - Manages system lifecycle and metrics
   - Provides status monitoring and reporting

### Specialized Agents

1. **ContentGenerationAgent** (`automation/agents/specialized-task-agents.js`)
   - Creates blog posts and content
   - Updates service pages
   - Generates SEO-optimized content

2. **DevelopmentAgent** (`automation/agents/specialized-task-agents.js`)
   - Implements new features
   - Fixes bugs and issues
   - Optimizes performance

3. **DeploymentAgent** (`automation/agents/specialized-task-agents.js`)
   - Deploys to staging and production
   - Runs tests and validations
   - Monitors application health

4. **MarketingAgent** (`automation/agents/specialized-task-agents.js`)
   - Creates social media content
   - Runs email campaigns
   - Analyzes user engagement

## 🛠️ Installation & Setup

### Prerequisites

- Node.js >= 20.18.1
- npm >= 10.0.0
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd bolt.new.zion.app
```

1. Install dependencies:

```bash
npm install
```

1. Configure the Google Docs URL:
   - Update the `googleDocsUrl` in `automation/launch-google-docs-automation.js`
   - Or set it via environment variable: `GOOGLE_DOCS_URL`

## 🚀 Usage

### Quick Start

Start the automation system:

```bash
npm run google-docs:start
```

### Development Mode

Run with auto-restart on file changes:

```bash
npm run google-docs:dev
```

### Check Status

View system status and health:

```bash
npm run google-docs:status
```

### Generate Reports

Create comprehensive system reports:

```bash
npm run google-docs:report
```

### Run Tests

Execute the test suite:

```bash
npm run google-docs:test
```

### Cron Integration

Use the cron script for scheduled execution:

```bash

# Start the system

./automation/cron/google-docs-automation-cron.sh start

# Check status

./automation/cron/google-docs-automation-cron.sh status

# Generate report

./automation/cron/google-docs-automation-cron.sh report

# Run tests

./automation/cron/google-docs-automation-cron.sh test

# Daily maintenance

./automation/cron/google-docs-automation-cron.sh daily

# Weekly maintenance
./automation/cron/google-docs-automation-cron.sh weekly
```

## 📊 Monitoring & Reporting

### System Metrics

The system tracks various metrics:

- **Uptime**: System running time
- **Total Instructions**: Number of instructions processed
- **Success Rate**: Percentage of successful executions
- **Average Task Time**: Mean execution time per task
- **System Health**: Overall system status

### Reports

Reports are generated in the following locations:

- **System Reports**: `automation/reports/google-docs-automation/system-report.json`
- **Health Reports**: `automation/logs/google-docs-automation/health.json`
- **Test Reports**: `automation/reports/google-docs-automation/test-report.json`
- **Comprehensive Reports**: `automation/reports/google-docs-automation/comprehensive-report.json`

### Logs

Log files are stored in:

- **System Logs**: `automation/logs/google-docs-automation/system.log`
- **Cron Logs**: `automation/logs/google-docs-automation/cron.log`
- **Health Logs**: `automation/logs/google-docs-automation/health.json`

## 🔧 Configuration

### Environment Variables

- `GOOGLE_DOCS_URL`: URL of the Google Docs document to monitor
- `CHECK_INTERVAL`: Interval between instruction checks (default: 60000ms)
- `MAX_RETRIES`: Maximum retry attempts for failed tasks (default: 3)
- `LOG_LEVEL`: Logging level (default: 'info')

### Configuration Files

- **System Config**: `automation/config/google-docs-automation.json`
- **Agent Configs**: `automation/agents/config/`

## 📝 Instruction Format

The system expects Google Docs documents with the following format:

```markdown

# Automation Instructions

## Content Management

- Create new blog posts weekly
- Update service pages monthly
- Generate SEO-optimized content

## Development Tasks

- Implement new features
- Fix reported bugs
- Optimize performance

## Deployment

- Deploy to staging before production
- Run tests before deployment
- Monitor application health

## Marketing
- Create social media content
- Run email campaigns
- Analyze user engagement
```

## 🔄 Workflow

1. **Monitoring**: System continuously monitors the Google Docs document
2. **Detection**: New instructions are detected and parsed
3. **Categorization**: Instructions are categorized by type
4. **Execution**: Specialized agents execute the instructions
5. **Reporting**: Results are logged and reported
6. **Health Check**: System health is monitored continuously

## 🧪 Testing

### Test Suite

The system includes comprehensive tests:

- System initialization
- Status checking
- Instruction processing
- Specialized agents
- Agent functionality
- Report generation
- Instruction history
- System cleanup

### Running Tests

```bash

# Run all tests
npm run google-docs:test

# Run specific test components
node automation/test-google-docs-automation.js
```

## 🔍 Troubleshooting

### Common Issues

1. **System not starting**
   - Check Node.js version: `node --version`
   - Verify dependencies: `npm install`
   - Check logs: `tail -f automation/logs/google-docs-automation/system.log`

2. **Instructions not being processed**
   - Verify Google Docs URL is correct
   - Check document permissions
   - Review instruction format

3. **Tasks failing**
   - Check agent logs
   - Verify agent configurations
   - Review error messages in reports

### Debug Mode

Enable debug logging:

```bash
LOG_LEVEL=debug npm run google-docs:start
```

### Health Checks

Run health checks:

```bash
./automation/cron/google-docs-automation-cron.sh status
```

## 📈 Performance Optimization

### Best Practices

1. **Regular Maintenance**: Run daily and weekly maintenance routines
2. **Log Rotation**: Clean old logs regularly
3. **Backup Data**: Create regular backups of instruction history
4. **Monitor Resources**: Watch system resource usage
5. **Update Dependencies**: Keep dependencies up to date

### Scaling

For high-volume scenarios:

- Increase `maxConcurrentTasks` in orchestrator config
- Adjust `checkInterval` for more frequent monitoring
- Implement load balancing for multiple instances

## 🔐 Security

### Security Considerations

1. **Google Docs Permissions**: Ensure proper document access permissions
2. **API Keys**: Secure storage of API credentials
3. **Log Security**: Avoid logging sensitive information
4. **Network Security**: Use HTTPS for all external communications

### Access Control

- Restrict access to automation directories
- Use environment variables for sensitive configuration
- Implement proper error handling to avoid information leakage

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

### Code Standards

- Follow existing code style
- Add comprehensive comments
- Include error handling
- Write unit tests for new features

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Check the troubleshooting section
- Review the logs and reports
- Create an issue in the repository
- Contact the development team

## 🔄 Changelog

### Version 1.0.0

- Initial release
- Google Docs instruction monitoring
- Specialized task agents
- Comprehensive reporting system
- Cron integration
- Test suite
- Health monitoring

---

**Note**: This system is designed to work autonomously and continuously monitor Google Docs for instructions. Ensure proper permissions and access controls are in place before deployment.

