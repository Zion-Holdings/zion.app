# Cursor Automated Communication System

A comprehensive automated chat communication system for continuous app improvement across all computers with Cursor installed.

## 🚀 Overview

The Cursor Automated Communication System enables seamless communication between all computers running Cursor, facilitating continuous app improvement through:

- **Automated Chat Communications**: Real-time messaging between Cursor installations
- **Multi-Computer Synchronization**: Coordinated improvements across all connected computers
- **Continuous App Improvement**: Automated analysis and optimization
- **Performance Monitoring**: Real-time performance tracking and optimization
- **File Change Detection**: Automatic detection and analysis of code changes
- **Error Tracking**: Comprehensive error detection and resolution

## 🏗️ Architecture

### Core Components

1. **Persistent Communication System** (`cursor-automated-communication.cjs`)
   - Maintains continuous connection with AI servers
   - Handles file watching and change detection
   - Manages improvement queue and processing
   - Coordinates with other computers

2. **Web Interface** (`cursor-automated-interface.html`)
   - Modern, responsive web interface
   - Real-time status monitoring
   - Chat interface for AI communication
   - Analytics and performance dashboards

3. **Cursor Extension** (`extension/cursor-automated-extension/`)
   - Browser extension for Cursor integration
   - Background service worker for continuous operation
   - Popup interface for quick access
   - Tab monitoring and activity tracking

4. **Coordination Server** (Port 3010)
   - Multi-computer synchronization
   - Improvement sharing and coordination
   - Network discovery and management

## 📦 Installation

### Quick Installation

```bash
# Run the installation script
./scripts/install-cursor-automated-communication.sh
```

### Manual Installation

1. **Make scripts executable**:

   ```bash
   chmod +x scripts/cursor-automated-communication.cjs
   chmod +x scripts/serve-interface.js
   chmod +x scripts/start-cursor-automated.sh
   ```

2. **Create necessary directories**:

   ```bash
   mkdir -p logs
   mkdir -p data/cursor-communication
   mkdir -p automation/cursor
   ```

3. **Configure the system**:

   ```bash
   ./scripts/configure-cursor-communication.sh
   ```

4. **Start the system**:
   ```bash
   ./scripts/start-cursor-automated.sh start
   ```

## 🔧 Configuration

### Environment Variables

```bash
# Cursor API Configuration
CURSOR_SERVER_URL=https://api.cursor.sh
CURSOR_API_KEY=your_api_key_here

# Local Server Ports
LOCAL_PORT=3008
MASTER_PORT=3009
COORDINATION_PORT=3010

# System Configuration
NODE_ENV=production
```

### Configuration File

The system uses `config/cursor-automated-communication.json` for configuration:

```json
{
  "computerId": "hostname_user_timestamp",
  "serverUrl": "https://api.cursor.sh",
  "localPort": 3008,
  "masterPort": 3009,
  "coordinationPort": 3010,
  "enableHeartbeat": true,
  "enableAutoReconnect": true,
  "enableActivityMonitoring": true,
  "enableFileWatching": true,
  "enableBuildMonitoring": true,
  "enableCursorIntegration": true,
  "enableMultiComputerSync": true,
  "enableContinuousImprovement": true,
  "enableAutoCommit": true,
  "enablePerformanceMonitoring": true,
  "enableErrorTracking": true,
  "enableCodeAnalysis": true,
  "watchPaths": [
    "src",
    "pages",
    "components",
    "utils",
    "scripts",
    "public",
    "styles",
    "tests"
  ],
  "excludePaths": ["node_modules", ".git", "dist", "build", "coverage", "logs"]
}
```

## 🚀 Usage

### Starting the System

```bash
# Start the complete system
./scripts/start-cursor-automated.sh start

# Start only the communication system
node scripts/cursor-automated-communication.cjs

# Start only the web interface
node scripts/serve-interface.js
```

### Managing the System

```bash
# Check system status
./scripts/start-cursor-automated.sh status

# View logs
./scripts/start-cursor-automated.sh logs

# Restart the system
./scripts/start-cursor-automated.sh restart

# Stop the system
./scripts/start-cursor-automated.sh stop

# Monitor mode (auto-restart on failure)
./scripts/start-cursor-automated.sh monitor
```

### Web Interface

Access the web interface at:

- **Main Interface**: http://localhost:3007
- **Communication API**: http://localhost:3008
- **Coordination API**: http://localhost:3010

### Cursor Extension

1. **Load the extension**:
   - Open Chrome/Edge
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select `extension/cursor-automated-extension/`

2. **Use the extension**:
   - Click the extension icon in the toolbar
   - Toggle automation features
   - Send improvements
   - Sync with other computers

## 🔄 Multi-Computer Synchronization

### Network Discovery

```bash
# Discover other Cursor computers on the network
./scripts/discover-cursor-computers.sh
```

### Manual Connection

```bash
# Connect to a specific computer
curl http://IP_ADDRESS:3008/status
curl http://IP_ADDRESS:3010/sync
```

### Automatic Sync

The system automatically syncs with other computers every 30 seconds, sharing:

- Improvement suggestions
- File changes
- Performance metrics
- Error reports

## 📊 Monitoring and Analytics

### Performance Metrics

The system tracks:

- Memory usage
- CPU usage
- Active tabs
- File changes
- Improvement queue size
- Connection status

### Real-time Dashboards

Access real-time analytics at:

- **Performance Dashboard**: http://localhost:3007/#analytics
- **Improvement Queue**: http://localhost:3008/improvements
- **System Logs**: http://localhost:3007/#logs

### Log Files

Logs are stored in:

- `logs/cursor-automated-communication.log` - Main system logs
- `logs/web-interface.log` - Web interface logs
- `data/cursor-communication/` - Persistent data

## 🤖 Automated Improvements

### Types of Improvements

1. **File Analysis**
   - Code quality assessment
   - Performance optimization suggestions
   - Security vulnerability detection
   - Best practice recommendations

2. **Performance Optimization**
   - Bundle size optimization
   - Memory usage optimization
   - CPU usage optimization
   - Network request optimization

3. **Error Detection**
   - Runtime error tracking
   - Build error detection
   - Test failure analysis
   - Dependency conflict resolution

4. **Code Quality**
   - Linting suggestions
   - Code formatting
   - Documentation improvements
   - Test coverage enhancement

### Improvement Queue

Improvements are queued and processed automatically:

- Maximum 100 improvements in queue
- Processed every 30 seconds
- Prioritized by impact and urgency
- Shared across all connected computers

## 🔧 Troubleshooting

### Common Issues

1. **Connection Failed**

   ```bash
   # Check if local server is running
   curl http://localhost:3008/status

   # Restart the system
   ./scripts/start-cursor-automated.sh restart
   ```

2. **Port Already in Use**

   ```bash
   # Find process using the port
   lsof -i :3008

   # Kill the process
   kill -9 PID
   ```

3. **Extension Not Working**
   - Check if extension is loaded in browser
   - Verify permissions are granted
   - Check browser console for errors

4. **Sync Issues**

   ```bash
   # Check coordination server
   curl http://localhost:3010/sync

   # Manual sync
   ./scripts/start-cursor-automated.sh restart
   ```

### Debug Mode

Enable debug logging:

```bash
# Set debug environment variable
export DEBUG=true

# Start with debug logging
DEBUG=true node scripts/cursor-automated-communication.cjs
```

### Log Analysis

```bash
# View recent logs
tail -f logs/cursor-automated-communication.log

# Search for errors
grep ERROR logs/cursor-automated-communication.log

# Search for specific computer
grep "computer_id" logs/cursor-automated-communication.log
```

## 🔒 Security

### Network Security

- All local communication uses HTTP (localhost only)
- External communication uses HTTPS
- API keys are stored securely
- No sensitive data is logged

### File Permissions

- System runs with minimal required permissions
- File watching respects user permissions
- No access to system files outside project

### Data Privacy

- All data is stored locally
- No personal information is transmitted
- Improvement data is anonymized
- User consent required for data sharing

## 📈 Performance Optimization

### System Requirements

- **Minimum**: 2GB RAM, 1 CPU core
- **Recommended**: 4GB RAM, 2 CPU cores
- **Optimal**: 8GB RAM, 4 CPU cores

### Optimization Tips

1. **Reduce File Watching**
   - Exclude unnecessary directories
   - Limit watch depth
   - Use file extensions filter

2. **Optimize Sync Frequency**
   - Increase sync interval for large networks
   - Reduce heartbeat frequency
   - Limit improvement queue size

3. **Memory Management**
   - Clear old improvements regularly
   - Limit log file size
   - Restart system periodically

## 🔄 Updates and Maintenance

### Updating the System

```bash
# Pull latest changes
git pull origin main

# Reinstall if needed
./scripts/install-cursor-automated-communication.sh

# Restart system
./scripts/start-cursor-automated.sh restart
```

### Backup and Restore

```bash
# Backup configuration and data
tar -czf cursor-automated-backup-$(date +%Y%m%d).tar.gz \
  config/cursor-automated-communication.json \
  data/cursor-communication/ \
  logs/

# Restore from backup
tar -xzf cursor-automated-backup-YYYYMMDD.tar.gz
```

### Cleanup

```bash
# Clear old logs
find logs/ -name "*.log" -mtime +7 -delete

# Clear old improvements
echo '[]' > data/cursor-communication/improvements.json

# Clear temporary files
rm -rf temp/
```

## 🤝 Contributing

### Development Setup

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Start development mode**: `npm run dev`
4. **Run tests**: `npm test`

### Code Style

- Use ES6+ features
- Follow JavaScript Standard Style
- Add JSDoc comments
- Write unit tests

### Testing

```bash
# Run all tests
npm test

# Run specific tests
npm test -- --grep "communication"

# Run with coverage
npm run test:coverage
```

## 📞 Support

### Getting Help

1. **Check the logs**: `./scripts/start-cursor-automated.sh logs`
2. **Review documentation**: This file and inline comments
3. **Search issues**: Check existing GitHub issues
4. **Create issue**: Report bugs or request features

### Community

- **Discussions**: GitHub Discussions
- **Issues**: GitHub Issues
- **Wiki**: Project Wiki
- **Releases**: GitHub Releases

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Cursor team for the excellent IDE
- Open source community for inspiration
- Contributors and testers
- Early adopters and feedback providers

---

**Version**: 2.0.0  
**Last Updated**: July 2024  
**Maintainer**: Cursor Automated Communication Team
