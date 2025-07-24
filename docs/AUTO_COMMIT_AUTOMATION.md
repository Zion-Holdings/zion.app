# Auto-Commit Automation System

This automation system automatically commits and pushes changes to your Git repository every minute, ensuring your work is continuously saved and synchronized.

## Features

- **Automatic Commits**: Detects changes and commits them automatically
- **Smart Filtering**: Excludes unnecessary files (node_modules, logs, etc.)
- **Retry Logic**: Handles network issues with automatic retries
- **Configurable**: Customizable commit messages, intervals, and exclusions
- **Logging**: Comprehensive logging for monitoring and debugging
- **Multiple Deployment Options**: Cron jobs, manual start, or background processes

## Quick Start

### Option 1: Manual Start (Recommended for Development)

```bash
# Start the automation
./scripts/start-auto-commit.sh start

# Check status
./scripts/start-auto-commit.sh status

# View logs
./scripts/start-auto-commit.sh logs

# Stop the automation
./scripts/start-auto-commit.sh stop
```

### Option 2: Cron Job (Recommended for Production)

```bash
# Set up cron job to run every minute
./scripts/setup-cron.sh add

# Check current cron jobs
./scripts/setup-cron.sh show

# Remove cron job
./scripts/setup-cron.sh remove
```

### Option 3: Direct Node.js Execution

```bash
# Start automation
node scripts/auto-commit-push-enhanced.cjs start

# Check status
node scripts/auto-commit-push-enhanced.cjs status

# Analyze current state
node scripts/auto-commit-push-enhanced.cjs analyze

# Stop automation
node scripts/auto-commit-push-enhanced.cjs stop
```

## Configuration

The automation uses a configuration file located at `config/auto-commit.json`:

```json
{
  "enabled": true,
  "commitMessage": "Auto-commit: {timestamp}",
  "excludePatterns": [
    "node_modules/**",
    "logs/**",
    "temp/**",
    "*.log",
    ".env.local",
    ".env.production"
  ],
  "maxRetries": 3,
  "retryDelay": 5000
}
```

### Configuration Options

- **enabled**: Enable/disable the automation
- **commitMessage**: Template for commit messages (use {timestamp} for current time)
- **excludePatterns**: Files and directories to exclude from commits
- **maxRetries**: Number of retry attempts for failed pushes
- **retryDelay**: Delay between retry attempts (milliseconds)

## File Structure

```
scripts/
├── auto-commit-push-enhanced.cjs    # Main automation script
├── start-auto-commit.sh             # Shell script for starting/stopping
└── setup-cron.sh                    # Cron job setup script

config/
└── auto-commit.json                 # Configuration file

logs/
├── auto-commit.log                  # Automation logs
└── auto-commit.pid                  # Process ID file
```

## How It Works

1. **Change Detection**: The script checks for uncommitted changes using `git status`
2. **File Filtering**: Excludes files based on patterns in the configuration
3. **Commit Creation**: Creates commits with timestamped messages
4. **Push to Remote**: Pushes changes to the current branch
5. **Retry Logic**: Automatically retries failed pushes
6. **Logging**: Records all activities for monitoring

## Monitoring

### View Logs

```bash
# View recent logs
tail -f logs/auto-commit.log

# View last 50 lines
tail -50 logs/auto-commit.log
```

### Check Status

```bash
# Check if automation is running
./scripts/start-auto-commit.sh status

# Analyze current git state
node scripts/auto-commit-push-enhanced.cjs analyze
```

## Troubleshooting

### Common Issues

1. **Permission Denied**
   ```bash
   chmod +x scripts/*.sh
   ```

2. **Git Not Configured**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Remote Repository Not Set**
   ```bash
   git remote add origin <your-repo-url>
   ```

4. **Cron Not Working**
   ```bash
   # Check if cron is running
   sudo systemctl status cron
   
   # Start cron service
   sudo systemctl start cron
   ```

### Debug Mode

To run with verbose logging:

```bash
# Set debug environment variable
export DEBUG=true
node scripts/auto-commit-push-enhanced.cjs start
```

## Security Considerations

- The automation only commits and pushes changes
- It does not modify or delete files
- Configuration file should not contain sensitive information
- Logs may contain file paths and commit messages

## Best Practices

1. **Review Configuration**: Customize exclude patterns for your project
2. **Monitor Logs**: Regularly check logs for any issues
3. **Test First**: Test the automation on a development branch
4. **Backup**: Keep regular backups of your repository
5. **Network**: Ensure stable internet connection for pushes

## Integration with CI/CD

The automation can be integrated with CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
name: Auto-Commit Check
on:
  schedule:
    - cron: '*/5 * * * *'  # Every 5 minutes

jobs:
  check-auto-commit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Check auto-commit logs
        run: |
          if [ -f "logs/auto-commit.log" ]; then
            tail -20 logs/auto-commit.log
          fi
```

## Support

For issues or questions:

1. Check the logs in `logs/auto-commit.log`
2. Run the analyze command to check current state
3. Review the configuration file
4. Check Git status and remote configuration

## License

This automation system is part of the Zion.App.Clone project and follows the same licensing terms. 