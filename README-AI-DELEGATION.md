# Zion App - AI-Driven Continuous Improvement System

This system automatically delegates AI-powered improvements across multiple computers with Cursor installed, providing intelligent, continuous enhancement of your application.

## 🚀 Features

- **Multi-Computer Coordination**: Distribute AI tasks across multiple machines
- **Intelligent Task Delegation**: Automatically assign tasks based on node capabilities and load
- **Cursor AI Integration**: Leverage Cursor AI for code analysis and improvements
- **Continuous Monitoring**: Real-time monitoring of code quality, performance, and security
- **Automated Improvements**: Apply AI-suggested improvements automatically
- **Comprehensive Logging**: Detailed logs and reports for all activities

## 🏗️ Architecture

The system consists of three main components:

1. **AI Continuous Improvement System** (`ai-continuous-improvement.cjs`)
   - Monitors code quality, performance, security, and user experience
   - Generates AI suggestions for improvements
   - Applies improvements automatically

2. **Cursor AI Delegator** (`cursor-ai-delegator.cjs`)
   - Manages AI task distribution across multiple computers
   - Handles Cursor API integration
   - Processes and prioritizes improvement tasks

3. **Multi-Computer Coordinator** (`multi-computer-coordinator.cjs`)
   - Coordinates communication between nodes
   - Manages shared storage and task distribution
   - Handles node discovery and health monitoring

## 📋 Prerequisites

- Node.js 16+ installed on all computers
- Cursor installed on all computers
- Cursor API key and workspace ID
- Network connectivity between computers
- Git repository access

## 🛠️ Installation

### 1. Setup on Master Computer

```bash
# Install dependencies
npm install

# Setup the AI delegation system
npm run ai-delegate:setup

# Configure environment variables
cp .env.ai-delegation .env
# Edit .env with your Cursor API credentials
```

### 2. Configure Environment Variables

Create a `.env` file with the following variables:

```env
# Required: Cursor AI Configuration
CURSOR_API_KEY=your_cursor_api_key_here
CURSOR_WORKSPACE_ID=your_cursor_workspace_id_here

# Optional: Additional AI Services
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Node Configuration
NODE_ID=master-node
MASTER_NODE=true
IS_MASTER=true

# Network Configuration
MASTER_PORT=3002
NODE_PORT=3003
DISCOVERY_PORT=3004
TASK_PORT=3005

# Storage Configuration
SHARED_STORAGE_PATH=./ai-improvement-data
STORAGE_PATH=./cursor-ai-data

# API Configuration
CURSOR_API_ENDPOINT=https://api.cursor.sh

# Monitoring Configuration
ENABLE_PERFORMANCE_MONITORING=true
ENABLE_SLACK_COMMANDS=false
```

### 3. Setup on Worker Computers

```bash
# Install dependencies
npm install

# Setup the AI delegation system
npm run ai-delegate:setup

# Configure environment variables (different NODE_ID and MASTER_NODE=false)
cp .env.ai-delegation .env
# Edit .env with worker-specific configuration
```

## 🚀 Usage

### Starting the System

#### Master Computer
```bash
# Start as master node
npm run ai-delegate:master
```

#### Worker Computers
```bash
# Start as worker node
npm run ai-delegate:worker
```

### Monitoring the System

```bash
# Check system status
npm run ai-delegate:status

# Monitor in real-time
npm run ai-delegate:monitor

# View logs
npm run ai-delegate:logs
```

### Submitting Tasks

```bash
# Submit a code analysis task
curl -X POST http://localhost:3005/api/tasks/submit \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "code_analysis",
    "priority": "high",
    "data": {
      "files": ["src/components/Button.tsx"],
      "focus": "performance"
    }
  }'

# Submit a performance optimization task
curl -X POST http://localhost:3005/api/tasks/submit \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "performance_optimization",
    "priority": "high",
    "data": {
      "target": "bundle_size",
      "threshold": 500
    }
  }'
```

### Testing the System

```bash
# Run comprehensive tests
npm run ai-delegate:test

# Test specific components
npm run ai-improvement:test
npm run cursor-delegator:test
npm run multi-coordinator:test
```

## 📊 Task Types

The system supports the following task types:

### Code Analysis
- Analyzes code quality and structure
- Identifies potential improvements
- Detects code smells and anti-patterns

### Performance Optimization
- Identifies performance bottlenecks
- Suggests optimization strategies
- Focuses on Core Web Vitals

### Security Audit
- Identifies security vulnerabilities
- Reviews authentication and authorization
- Checks for common security issues

### Bug Fix
- Analyzes reported issues
- Identifies root causes
- Provides fixes with explanations

### Feature Implementation
- Designs feature architecture
- Implements features
- Includes proper error handling

### Refactoring
- Improves code structure
- Reduces complexity
- Enhances maintainability

## 🔧 Configuration

### AI Configuration

The system can be configured through `ai-delegation-config.json`:

```json
{
  "version": "1.0.0",
  "ai": {
    "cursor": {
      "maxConcurrentRequests": 5,
      "requestTimeout": 30000
    },
    "improvement": {
      "intervals": {
        "codeQuality": 900000,
        "performance": 600000,
        "security": 1800000,
        "userExperience": 1200000,
        "dependencies": 43200000,
        "aiAnalysis": 300000
      },
      "thresholds": {
        "performanceScore": 85,
        "securityVulnerabilities": 0,
        "codeCoverage": 75,
        "bundleSizeIncrease": 5,
        "errorRate": 0.005,
        "lighthouseScore": 90
      }
    }
  }
}
```

### Network Configuration

Configure network settings for multi-computer coordination:

```json
{
  "coordination": {
    "heartbeatInterval": 5000,
    "taskSyncInterval": 2000,
    "discoveryInterval": 30000
  }
}
```

## 📈 Monitoring and Logging

### Log Files

- `logs/ai-improvement.log` - AI improvement system logs
- `logs/cursor-delegator.log` - Cursor delegator logs
- `logs/multi-coordinator.log` - Multi-computer coordinator logs
- `logs/ai-delegation.log` - Combined system logs

### Reports

- `logs/setup-report.json` - System setup report
- `logs/test-report.json` - System test results
- `logs/cleanup-report.json` - System cleanup report

### API Endpoints

- `http://localhost:3001/health` - AI improvement system health
- `http://localhost:3005/api/status` - Cursor delegator status
- `http://localhost:3002/api/nodes/status` - Multi-coordinator status

## 🔍 Troubleshooting

### Common Issues

1. **Cursor API Connection Failed**
   - Verify your Cursor API key is correct
   - Check network connectivity
   - Ensure Cursor workspace ID is valid

2. **Node Communication Issues**
   - Verify all nodes are on the same network
   - Check firewall settings
   - Ensure ports are not blocked

3. **Task Processing Failures**
   - Check node capabilities
   - Verify AI API credentials
   - Review error logs

### Debug Commands

```bash
# Check system status
npm run ai-delegate:status

# View detailed logs
tail -f logs/ai-delegation.log

# Test individual components
npm run ai-improvement:test
npm run cursor-delegator:test
npm run multi-coordinator:test

# Check network connectivity
curl http://localhost:3001/health
curl http://localhost:3005/api/status
curl http://localhost:3002/api/nodes/status
```

## 🧹 Cleanup

To stop and clean up the system:

```bash
# Stop all services
npm run ai-delegate:stop

# Clean up files and directories
npm run ai-delegate:cleanup

# Verify cleanup
npm run ai-delegate:status
```

## 🔒 Security Considerations

- Store API keys securely
- Use environment variables for sensitive data
- Implement proper network security
- Monitor system access logs
- Regularly update dependencies

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

1. Check the troubleshooting section
2. Review the logs for error messages
3. Test individual components
4. Create an issue with detailed information

## 🔄 Updates

To update the system:

```bash
# Pull latest changes
git pull origin main

# Update dependencies
npm install

# Restart the system
npm run ai-delegate:stop
npm run ai-delegate:start
```

---

**Note**: This system is designed to work with Cursor AI and requires proper API credentials. Make sure to follow Cursor's terms of service and usage guidelines. 