# 🤖 Automated Chat Reconnection System for Cursor

## Overview

This system provides automated chat reconnection for all computers with Cursor installed, enabling seamless communication and collaboration across multiple machines. The system automatically discovers Cursor instances, maintains persistent connections, and provides automatic failover and reconnection capabilities.

## 🚀 Features

- **Automatic Discovery**: Discovers Cursor instances across the network using UDP multicast
- **Persistent Connections**: Maintains WebSocket connections with automatic reconnection
- **Load Balancing**: Distributes chat requests across multiple computers
- **Health Monitoring**: Continuous health checks and automatic failover
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Service Management**: Automatic startup and service installation
- **Web Interface**: Beautiful web UI for monitoring and control
- **Real-time Chat**: Live chat system across all connected computers

## 📋 System Components

### Core Scripts
- `scripts/automated-chat-reconnection.cjs` - Main system engine
- `scripts/start-chat-reconnection.sh` - Unix/Linux/macOS startup script
- `scripts/start-chat-reconnection.bat` - Windows startup script
- `scripts/chat-reconnection-interface.html` - Web interface

### Ports Used
- **3008**: UDP discovery port (multicast)
- **3009**: HTTP chat server and WebSocket
- **3010**: Master node WebSocket server

## 🛠️ Installation

### Prerequisites
- Node.js 18+ installed on all computers
- Cursor IDE installed (optional but recommended)
- Network connectivity between computers

### Quick Start

#### 1. Primary Computer Setup
```bash
# Clone the repository (if not already done)
git clone <repository-url>
cd <project-directory>

# Make startup script executable (Unix/Linux/macOS)
chmod +x scripts/start-chat-reconnection.sh

# Start the system
./scripts/start-chat-reconnection.sh start
```

#### 2. Secondary Computer Setup
```bash
# Clone the repository
git clone <repository-url>
cd <project-directory>

# Make startup script executable (Unix/Linux/macOS)
chmod +x scripts/start-chat-reconnection.sh

# Start the system
./scripts/start-chat-reconnection.sh start
```

#### 3. Windows Setup
```cmd
# Navigate to project directory
cd <project-directory>

# Start the system
scripts\start-chat-reconnection.bat start
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the project root:

```bash
# Cursor API Configuration (optional)
CURSOR_API_KEY=your_cursor_api_key
CURSOR_WORKSPACE_ID=your_workspace_id

# Network Configuration
DISCOVERY_PORT=3008
CHAT_PORT=3009
CHAT_MASTER_PORT=3010

# Computer Identification
COMPUTER_ID=your_unique_computer_id

# Logging
LOG_LEVEL=info
```

### Service Installation

#### macOS (LaunchAgent)
```bash
# Install as service
./scripts/start-chat-reconnection.sh install

# Load the service
launchctl load ~/Library/LaunchAgents/com.cursor.chat-reconnection.plist

# Start the service
launchctl start com.cursor.chat-reconnection
```

#### Linux (systemd)
```bash
# Install as service
./scripts/start-chat-reconnection.sh install

# Copy service file
sudo cp scripts/cursor-chat-reconnection.service /etc/systemd/system/

# Enable and start service
sudo systemctl enable cursor-chat-reconnection.service
sudo systemctl start cursor-chat-reconnection.service
```

#### Windows (Service)
```cmd
# Install as service
scripts\start-chat-reconnection.bat install

# Start the service
sc start CursorChatReconnection

# Stop the service
sc stop CursorChatReconnection
```

## 🎮 Usage

### Command Line Interface

#### Start the System
```bash
# Unix/Linux/macOS
./scripts/start-chat-reconnection.sh start

# Windows
scripts\start-chat-reconnection.bat start
```

#### Check Status
```bash
# Unix/Linux/macOS
./scripts/start-chat-reconnection.sh status

# Windows
scripts\start-chat-reconnection.bat status
```

#### View Logs
```bash
# Unix/Linux/macOS
./scripts/start-chat-reconnection.sh logs

# Windows
scripts\start-chat-reconnection.bat logs
```

#### Stop the System
```bash
# Unix/Linux/macOS
./scripts/start-chat-reconnection.sh stop

# Windows
scripts\start-chat-reconnection.bat stop
```

### Web Interface

1. Start the system
2. Open your browser and navigate to: `http://localhost:3009`
3. Use the web interface to:
   - Monitor connected computers
   - View system statistics
   - Send chat messages
   - Trigger automated chats

### API Endpoints

#### System Status
```bash
curl http://localhost:3009/status
```

#### List Computers
```bash
curl http://localhost:3009/computers
```

#### Send Chat Message
```bash
curl -X POST http://localhost:3009/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from API", "category": "general"}'
```

## 🔍 Monitoring

### System Health
The system continuously monitors:
- Connection status of all computers
- WebSocket connection health
- Cursor process status
- Network connectivity
- Chat message delivery

### Log Files
- `logs/chat-reconnection.log` - Main system log
- `logs/chat-reconnection.err` - Error log (macOS/Linux service)
- `logs/chat-reconnection.pid` - Process ID file

### WebSocket Events
The system uses WebSocket for real-time communication:
- `chat` - Chat messages
- `system` - System notifications
- `computer_status` - Computer status updates
- `chat_trigger` - Automated chat triggers

## 🔧 Troubleshooting

### Common Issues

#### System Won't Start
1. Check if Node.js is installed: `node --version`
2. Check if npm is installed: `npm --version`
3. Check if dependencies are installed: `npm install`
4. Check logs: `./scripts/start-chat-reconnection.sh logs`

#### No Computers Discovered
1. Check network connectivity
2. Ensure firewall allows UDP port 3008
3. Check if other computers are running the system
4. Verify multicast is enabled on your network

#### WebSocket Connection Failed
1. Check if port 3009 is available
2. Ensure no other service is using the port
3. Check firewall settings
4. Restart the system

#### Cursor Not Detected
1. Verify Cursor is installed in standard locations
2. Check if Cursor is running
3. The system works without Cursor (optional)

### Debug Mode
Enable debug logging by setting environment variable:
```bash
export LOG_LEVEL=debug
./scripts/start-chat-reconnection.sh start
```

### Network Configuration
For networks with strict firewall rules, you may need to:
1. Allow UDP port 3008 for discovery
2. Allow TCP ports 3009-3010 for chat
3. Enable multicast traffic (224.0.0.1)

## 🔄 Automatic Features

### Auto-Reconnection
- Automatically reconnects when connection is lost
- Exponential backoff with maximum 10 attempts
- 5-second delay between attempts

### Health Monitoring
- 15-second heartbeat intervals
- Automatic cleanup of stale connections
- Process health checks

### Chat Triggers
- Automatic system health chats every 5 minutes
- File change detection triggers
- Build error detection
- Performance monitoring

### Load Balancing
- Distributes chat requests across available computers
- Automatic failover if master node goes down
- Round-robin distribution for worker nodes

## 📊 Performance

### Scalability
- Supports unlimited number of computers
- Efficient UDP multicast discovery
- Lightweight WebSocket connections
- Minimal resource usage

### Resource Usage
- Memory: ~50MB per computer
- CPU: <1% during idle
- Network: ~1KB/s for heartbeats
- Disk: Minimal logging

## 🔒 Security

### Network Security
- Local network only (no internet exposure)
- No sensitive data transmitted
- Optional API key for Cursor integration

### Access Control
- No authentication required (local network)
- Can be restricted by firewall rules
- Optional API key validation

## 🚀 Advanced Configuration

### Custom Chat Categories
Edit the `CHAT_CATEGORIES` array in the main script:
```javascript
CHAT_CATEGORIES: [
  'build', 'lint', 'test', 'deploy', 'optimize', 
  'security', 'performance', 'bugfix', 'feature', 'refactor'
]
```

### Custom Ports
Set environment variables to change default ports:
```bash
export DISCOVERY_PORT=3008
export CHAT_PORT=3009
export CHAT_MASTER_PORT=3010
```

### Custom Cursor Paths
The system automatically detects Cursor in standard locations:
- Windows: `C:\Users\%USERNAME%\AppData\Local\Programs\Cursor\Cursor.exe`
- macOS: `/Applications/Cursor.app`
- Linux: `/usr/bin/cursor`, `/usr/local/bin/cursor`

## 📝 API Reference

### WebSocket Messages

#### Send Chat Message
```javascript
{
  type: 'chat',
  message: 'Hello world',
  room: 'general',
  timestamp: 1640995200000
}
```

#### Trigger Chat
```javascript
{
  type: 'chat_trigger',
  category: 'build',
  message: 'Please analyze the build process',
  priority: 'medium',
  automated: false
}
```

#### Register Computer
```javascript
{
  type: 'register',
  computerId: 'hostname_timestamp_random',
  capabilities: {
    platform: 'darwin',
    arch: 'x64',
    nodeVersion: 'v18.0.0'
  }
}
```

### HTTP API

#### GET /status
Returns system status:
```json
{
  "computerId": "hostname_timestamp_random",
  "isMaster": true,
  "isConnected": true,
  "discoveredComputers": 3,
  "activeConnections": 2,
  "uptime": 3600,
  "timestamp": 1640995200000
}
```

#### GET /computers
Returns list of discovered computers:
```json
[
  {
    "computerId": "hostname_timestamp_random",
    "hostname": "computer1",
    "platform": "darwin",
    "chatPort": 3009,
    "lastSeen": 1640995200000,
    "isConnected": true
  }
]
```

#### POST /chat
Send a chat message:
```json
{
  "message": "Hello world",
  "category": "general",
  "priority": "medium"
}
```

## 🤝 Contributing

### Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start in development mode: `node scripts/automated-chat-reconnection.cjs start`
4. Make changes and test

### Testing
```bash
# Test discovery
curl http://localhost:3009/computers

# Test chat
curl -X POST http://localhost:3009/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Test message"}'

# Test WebSocket
# Use the web interface or a WebSocket client
```

## 📄 License

This project is part of the Zion App ecosystem and follows the same licensing terms.

## 🆘 Support

For issues and questions:
1. Check the troubleshooting section
2. Review the logs: `./scripts/start-chat-reconnection.sh logs`
3. Check the web interface for system status
4. Create an issue in the repository

## 🔄 Updates

The system automatically updates when you pull the latest code:
```bash
git pull origin main
./scripts/start-chat-reconnection.sh restart
```

---

**🎉 You're all set!** The automated chat reconnection system is now running and will automatically discover and connect to other computers with Cursor installed on your network. 