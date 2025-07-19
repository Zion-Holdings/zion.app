# Persistent AI Communication System

This system maintains continuous communication between your computer and the AI assistant, ensuring you can interact with AI at all times without manual intervention.

## 🚀 Features

- **Continuous Connection**: Maintains persistent connection with AI assistant
- **Automatic Startup**: Starts automatically on system boot/login
- **Heartbeat Monitoring**: Regular health checks and status updates
- **File Watching**: Monitors file changes and notifies AI
- **Build Monitoring**: Tracks build requirements and dependencies
- **Web Interface**: Beautiful web UI for easy interaction
- **Auto-reconnection**: Automatically reconnects if connection is lost
- **Activity Monitoring**: Tracks system activity and sends keepalive signals

## 📋 System Components

### 1. Core Communication System
- **File**: `scripts/persistent-ai-communication.cjs`
- **Port**: 3005 (local server), 3006 (master node)
- **Purpose**: Main communication engine

### 2. Web Interface
- **File**: `scripts/ai-communication-interface.html`
- **Server**: `scripts/serve-interface.js`
- **Port**: 3007
- **Purpose**: User-friendly web interface

### 3. Management Scripts
- **Start/Stop**: `scripts/start-persistent-communication.sh`
- **Status Check**: `scripts/check-status.sh`
- **Installation**: `scripts/install-persistent-communication.sh`

## 🛠️ Installation

### Automatic Installation
```bash
# Run the installation script
./scripts/install-persistent-communication.sh
```

This will:
- Install the system as a service (LaunchAgent on macOS, systemd on Linux)
- Set up automatic startup
- Create necessary directories and files
- Configure logging

### Manual Installation

#### macOS (LaunchAgent)
```bash
# Copy the plist file
cp scripts/com.ai.communication.plist ~/Library/LaunchAgents/

# Load the service
launchctl load ~/Library/LaunchAgents/com.ai.communication.plist
```

#### Linux (systemd)
```bash
# Copy the service file
sudo cp scripts/ai-communication.service /etc/systemd/system/

# Enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable ai-communication@$USER
sudo systemctl start ai-communication@$USER
```

## 🎯 Usage

### Starting the System
```bash
# Start manually
./scripts/start-persistent-communication.sh start

# Check status
./scripts/start-persistent-communication.sh status

# View logs
./scripts/start-persistent-communication.sh logs
```

### Web Interface
1. Start the web interface server:
   ```bash
   node scripts/serve-interface.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3007
   ```

3. Use the interface to:
   - Send messages to AI
   - Use quick action buttons
   - Monitor system status
   - View real-time logs

### API Endpoints

#### Status Check
```bash
curl http://localhost:3005/status
```

#### Send Message
```bash
curl -X POST http://localhost:3005/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Your message here"}'
```

## 🔧 Configuration

### Environment Variables
- `AI_SERVER_URL`: AI server URL (default: https://api.cursor.sh)
- `CURSOR_API_KEY`: Your Cursor API key
- `LOCAL_PORT`: Local server port (default: 3005)
- `MASTER_PORT`: Master node port (default: 3006)

### Configuration File
The system can be configured via environment variables or by modifying the configuration object in `persistent-ai-communication.cjs`:

```javascript
this.config = {
    serverUrl: process.env.AI_SERVER_URL || 'https://api.cursor.sh',
    apiKey: process.env.CURSOR_API_KEY || '',
    localPort: process.env.LOCAL_PORT || 3005,
    masterPort: process.env.MASTER_PORT || 3006,
    enableHeartbeat: true,
    enableAutoReconnect: true,
    enableActivityMonitoring: true,
    enableFileWatching: true,
    enableBuildMonitoring: true
};
```

## 📊 Monitoring

### Log Files
- **Main Log**: `logs/ai-communication.log`
- **Error Log**: `logs/ai-communication-error.log`

### Status Monitoring
```bash
# Quick status check
./scripts/check-status.sh

# Detailed status
./scripts/start-persistent-communication.sh status
```

### Health Checks
The system performs several health checks:
- **Heartbeat**: Every 30 seconds
- **Activity Monitoring**: Every 60 seconds
- **File Watching**: Real-time
- **Build Monitoring**: On package.json changes

## 🔄 Auto-recovery

The system includes automatic recovery mechanisms:

1. **Connection Loss**: Automatically attempts to reconnect
2. **Process Crash**: Service manager restarts the process
3. **Port Conflicts**: Automatically finds available ports
4. **File System Issues**: Graceful handling of file watching errors

## 🚨 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Check what's using the port
lsof -i :3005

# Stop conflicting process
./scripts/start-persistent-communication.sh stop
```

#### Service Not Starting
```bash
# Check service status
./scripts/start-persistent-communication.sh status

# View logs
./scripts/start-persistent-communication.sh logs

# Restart service
./scripts/start-persistent-communication.sh restart
```

#### Web Interface Not Loading
```bash
# Check if interface server is running
curl http://localhost:3007

# Start interface server
node scripts/serve-interface.js
```

### Debug Mode
To run in debug mode with verbose logging:
```bash
DEBUG=true node scripts/persistent-ai-communication.cjs
```

## 🔐 Security

### API Key Management
- Store your API key in environment variables
- Never commit API keys to version control
- Use `.env` files for local development

### Network Security
- The system only listens on localhost by default
- No external network access required
- All communication is encrypted when using HTTPS

## 📈 Performance

### Resource Usage
- **Memory**: ~50MB typical usage
- **CPU**: Minimal background usage
- **Network**: Only when sending messages or heartbeats

### Optimization
- Efficient file watching with debouncing
- Minimal heartbeat frequency
- Graceful error handling
- Automatic cleanup of resources

## 🔮 Future Enhancements

- [ ] Multi-computer synchronization
- [ ] Advanced file change detection
- [ ] Integration with more AI services
- [ ] Mobile app companion
- [ ] Advanced analytics dashboard
- [ ] Plugin system for custom integrations

## 📞 Support

For issues or questions:
1. Check the logs: `./scripts/start-persistent-communication.sh logs`
2. Verify status: `./scripts/check-status.sh`
3. Restart the system: `./scripts/start-persistent-communication.sh restart`

## 📄 License

This system is part of the bolt.new.zion.app project and follows the same licensing terms. 