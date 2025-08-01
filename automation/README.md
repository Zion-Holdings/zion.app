# Zion Tech Group Website Automation System

This autonomous system continuously monitors, analyzes, and improves the Zion Tech Group website at https://ziontechgroup.netlify.app.

## 🚀 Features

### Automated Website Analysis
- **Comprehensive Crawling**: Visits all pages and sublinks
- **Content Analysis**: Identifies missing content, broken links, and SEO issues
- **Performance Monitoring**: Analyzes page load times and optimization opportunities
- **Error Detection**: Finds and reports broken links, missing meta descriptions, and other issues

### Content Generation
- **Missing Page Creation**: Automatically generates content for missing pages
- **SEO Optimization**: Creates meta descriptions, Open Graph tags, and Twitter Cards
- **Template-Based Content**: Uses intelligent templates for different page types

### Error Fixing
- **Broken Link Repair**: Automatically fixes broken links and redirects
- **SEO Enhancement**: Adds missing meta descriptions and social media tags
- **Performance Optimization**: Applies lazy loading, script optimization, and other improvements

### Continuous Monitoring
- **Automated Deployment**: Builds and deploys improvements automatically
- **Git Integration**: Commits and pushes changes to trigger Netlify builds
- **Scheduled Execution**: Runs every 6 hours via cron job

## 📁 System Architecture

```
automation/
├── website-analyzer-agent.js      # Analyzes website and identifies issues
├── content-generator-agent.js     # Generates missing content
├── error-fixer-agent.js          # Fixes identified errors
├── website-automation-orchestrator.js  # Main orchestrator
├── run-automation.js             # Entry point
├── cron-automation.sh            # Cron job script
├── setup-cron.sh                 # Cron setup script
├── package.json                  # Dependencies
├── reports/                      # Analysis and fix reports
├── generated-content/            # Generated content files
├── fixes/                        # Generated fix files
└── logs/                         # Execution logs
```

## 🛠️ Installation

1. **Install Dependencies**:
   ```bash
   cd automation
   npm install
   ```

2. **Setup Cron Job** (Optional):
   ```bash
   chmod +x setup-cron.sh
   ./setup-cron.sh
   ```

3. **Manual Execution**:
   ```bash
   node run-automation.js
   ```

## 🔧 Configuration

### Website URL
The system is configured to analyze `https://ziontechgroup.netlify.app`. To change this, edit the `baseUrl` in `website-analyzer-agent.js`.

### Execution Frequency
The cron job runs every 6 hours. To change this, edit the `getNextIterationDelay()` method in `website-automation-orchestrator.js`.

### Content Templates
Edit the `contentTemplates` object in `content-generator-agent.js` to customize generated content.

## 📊 Reports

The system generates several types of reports:

- **Website Analysis Report**: `reports/website-analysis-report.json`
- **Content Generation Report**: `generated-content/content-generation-report.json`
- **Error Fix Report**: `reports/error-fix-report.json`
- **Automation Summary**: `reports/automation-summary.json`

## 🔍 What the System Does

### 1. Website Analysis
- Crawls all pages starting from the homepage
- Analyzes content, SEO, and performance
- Identifies missing pages and broken links
- Generates comprehensive reports

### 2. Content Generation
- Creates missing pages with appropriate content
- Generates SEO-optimized meta descriptions
- Adds Open Graph and Twitter Card tags
- Creates page components with proper structure

### 3. Error Fixing
- Fixes broken links by redirecting to homepage
- Adds missing meta descriptions
- Optimizes images with lazy loading
- Improves script loading with defer attributes

### 4. Deployment
- Builds the project with `npm run build`
- Commits changes with descriptive messages
- Pushes to main branch to trigger Netlify deployment

## 📈 Monitoring

### Logs
All automation activities are logged to `logs/` directory with timestamps.

### Cron Job
The cron job runs every 6 hours and logs to `logs/automation-YYYYMMDD-HHMMSS.log`.

### Manual Monitoring
Check the reports directory for detailed analysis and fix reports.

## 🚨 Troubleshooting

### Common Issues

1. **Puppeteer Installation**:
   ```bash
   npm install puppeteer
   ```

2. **Permission Issues**:
   ```bash
   chmod +x cron-automation.sh
   chmod +x setup-cron.sh
   ```

3. **Git Issues**:
   Ensure git is configured with proper credentials for pushing.

### Debug Mode
Run with verbose logging:
```bash
DEBUG=* node run-automation.js
```

## 🔒 Security

- All credentials are handled by Netlify environment variables
- No sensitive data is stored in the automation system
- Git operations use existing repository configuration

## 📝 Customization

### Adding New Content Types
Edit `content-generator-agent.js` and add new templates to the `contentTemplates` object.

### Custom Error Fixes
Extend `error-fixer-agent.js` with new fix methods for specific issues.

### Performance Optimizations
Modify the performance analysis in `website-analyzer-agent.js` to include additional metrics.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

---

**Note**: This system is designed to run autonomously and continuously improve the website. It will commit and push changes automatically, so ensure the repository is properly configured for automated deployments. 