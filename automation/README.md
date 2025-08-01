# Autonomous Agent System

A comprehensive autonomous agent system for continuous website improvement, content generation, and error fixing. This system can analyze websites, generate missing content, fix errors, and continuously improve applications.

## 🚀 Features

### Core Capabilities
- **Website Analysis**: Comprehensive crawling and analysis of website structure
- **Content Generation**: AI-powered content creation for missing pages
- **Error Detection & Fixing**: Automated error identification and resolution
- **Continuous Improvement**: Ongoing optimization and enhancement
- **Content Integration**: Seamless integration of generated content
- **Health Monitoring**: Real-time system health and performance monitoring

### Agent Types
1. **Master Orchestrator**: Coordinates all agents and manages workload distribution
2. **Website Analyzer**: Crawls websites and identifies missing content/pages
3. **Content Generator**: Creates AI-generated content for missing pages
4. **Error Fixer**: Detects and fixes code errors and issues
5. **Improvement Agent**: Continuously improves application features
6. **Content Integrator**: Integrates generated content into the application

## 📋 Requirements

- Node.js 18+ 
- npm 8+
- Bash shell
- Internet connection for AI services

## 🛠️ Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd bolt.new.zion.app/automation
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables** (optional):
```bash
export GOOGLE_API_KEY="your-google-api-key"
export OPENAI_API_KEY="your-openai-api-key"
```

## 🚀 Quick Start

### Option 1: Interactive Launcher
```bash
node launch-autonomous-system.js
```

### Option 2: Direct Start
```bash
# Start master orchestrator
npm start

# Start specific agents
npm run start:analyzer
npm run start:generator
npm run start:fixer
npm run start:improvement
npm run start:integrator
```

### Option 3: Cron System
```bash
bash comprehensive-cron-system.sh
```

## 📊 System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Master        │    │   Website       │    │   Content       │
│   Orchestrator  │◄──►│   Analyzer      │◄──►│   Generator     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Error Fixer   │    │   Improvement   │    │   Content       │
│                 │    │   Agent         │    │   Integrator    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🔧 Configuration

### Master Orchestrator Configuration
The master orchestrator can be configured in `autonomous-master-orchestrator.js`:

```javascript
this.config = {
  maxConcurrentAgents: 10,
  agentTimeout: 300000, // 5 minutes
  retryAttempts: 3,
  baseUrl: 'https://ziontechgroup.netlify.app',
  targetUrl: 'https://chatgpt.com/share/688b6030-1aa0-800b-9b63-ec9a269ea62d'
};
```

### Agent Configuration
Each agent can be configured independently:

- **Website Analyzer**: Crawl depth, timeout settings, analysis parameters
- **Content Generator**: AI model settings, content templates, generation parameters
- **Error Fixer**: Error detection patterns, fix strategies
- **Improvement Agent**: Improvement criteria, optimization targets

## 📈 Monitoring & Analytics

### System Status
```bash
npm run status
```

### View Logs
```bash
npm run logs
```

### Health Check
```bash
npm run health
```

### Analytics Reports
The system generates comprehensive analytics reports in the `analytics/` directory:

- `comprehensive-report.json`: Overall system performance
- `master-analytics.json`: Master orchestrator analytics
- `content-generation-report.json`: Content generation metrics
- `website-analysis-report.json`: Website analysis results

## 🔄 Continuous Operation

### Cron Jobs
The system includes automated cron jobs for continuous operation:

```bash
# Set up cron jobs
npm run setup:cron

# Manual cron system
bash comprehensive-cron-system.sh
```

### PM2 Process Management
For production deployment, use PM2:

```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start autonomous-master-orchestrator.js --name "autonomous-system"

# Monitor processes
pm2 status
pm2 logs
```

## 📁 Directory Structure

```
automation/
├── autonomous-master-orchestrator.js    # Main orchestrator
├── enhanced-website-analyzer-agent.js   # Website analysis agent
├── enhanced-content-generator-agent.js  # Content generation agent
├── error-fixer-agent.js                # Error fixing agent
├── autonomous-improvement-agent.js      # Improvement agent
├── content-integration-agent.js         # Content integration agent
├── launch-autonomous-system.js         # Interactive launcher
├── comprehensive-cron-system.sh        # Cron system script
├── package.json                        # Dependencies
├── logs/                              # Log files
├── pids/                              # Process IDs
├── analytics/                          # Analytics reports
├── generated-content/                  # Generated content
├── analysis-results/                   # Analysis results
├── missing-content/                    # Missing content analysis
├── content-gaps/                       # Content gap analysis
└── backups/                           # System backups
```

## 🤖 Agent Details

### Master Orchestrator
- **Purpose**: Coordinates all agents and manages workload
- **Features**: 
  - Agent spawning and management
  - Task distribution
  - Health monitoring
  - Analytics collection
  - Continuous improvement loop

### Website Analyzer
- **Purpose**: Comprehensive website analysis and crawling
- **Features**:
  - Full website crawling
  - Missing page detection
  - Content gap analysis
  - SEO analysis
  - Performance monitoring

### Content Generator
- **Purpose**: AI-powered content creation
- **Features**:
  - Missing page content generation
  - Blog post creation
  - SEO content optimization
  - Product descriptions
  - Meta descriptions and titles

### Error Fixer
- **Purpose**: Automated error detection and fixing
- **Features**:
  - Code error detection
  - Automatic error fixing
  - Performance optimization
  - Security improvements
  - Code quality enhancement

### Improvement Agent
- **Purpose**: Continuous application improvement
- **Features**:
  - Feature enhancement
  - Performance optimization
  - User experience improvements
  - Code refactoring
  - Best practice implementation

### Content Integrator
- **Purpose**: Seamless content integration
- **Features**:
  - Content deployment
  - Version control integration
  - Backup management
  - Rollback capabilities
  - Content validation

## 🔍 Troubleshooting

### Common Issues

1. **Agent not starting**:
   ```bash
   # Check dependencies
   npm install
   
   # Check logs
   npm run logs
   
   # Restart system
   npm run restart
   ```

2. **AI services not working**:
   ```bash
   # Set API keys
   export GOOGLE_API_KEY="your-key"
   export OPENAI_API_KEY="your-key"
   ```

3. **High memory usage**:
   ```bash
   # Clean system
   npm run clean
   
   # Restart agents
   npm run restart
   ```

### Debug Mode
Enable debug logging by setting environment variables:

```bash
export DEBUG=true
export LOG_LEVEL=DEBUG
```

## 📊 Performance Metrics

The system tracks various performance metrics:

- **Pages Analyzed**: Number of pages crawled and analyzed
- **Content Generated**: Amount of content created
- **Errors Fixed**: Number of errors detected and resolved
- **Improvements Made**: Number of improvements implemented
- **Agent Uptime**: Agent availability and performance
- **System Health**: Overall system performance and stability

## 🔐 Security Considerations

- API keys are stored as environment variables
- No sensitive data is logged
- All generated content is validated
- Backup system ensures data safety
- Error handling prevents system crashes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For support and questions:
- Check the logs: `npm run logs`
- View system status: `npm run status`
- Review analytics: Check `analytics/` directory
- Create an issue on GitHub

## 🔄 Updates

The system automatically updates and improves itself through:
- Continuous learning from analysis results
- Adaptive agent behavior based on performance
- Self-optimizing algorithms
- Dynamic content generation strategies

---

**Note**: This system is designed for continuous operation and will automatically adapt to changing requirements and website needs. 