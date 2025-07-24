
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
      #!/bin/bash

# Zion App - Continuous Improvement System Setup Script
# This script automates the installation and configuration of the continuous improvement system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check Node.js version
check_node_version() {
    if command_exists node; then
        NODE_VERSION=$(node --version | cut -d'v' -f2)
        NODE_MAJOR=$(echo $NODE_VERSION | cut -d'.' -f1)
        
        if [ "$NODE_MAJOR" -ge 18 ]; then
            print_success "Node.js version $NODE_VERSION is compatible"
            return 0
        else
            print_error "Node.js version $NODE_VERSION is too old. Please install Node.js 18 or higher."
            return 1
        fi
    else
        print_error "Node.js is not installed. Please install Node.js 18 or higher."
        return 1
    fi
}

# Function to check npm
check_npm() {
    if command_exists npm; then
        print_success "npm is available"
        return 0
    else
        print_error "npm is not installed. Please install npm."
        return 1
    fi
}

# Function to check git
check_git() {
    if command_exists git; then
        print_success "git is available"
        return 0
    else
        print_error "git is not installed. Please install git."
        return 1
    fi
}

# Function to create environment file
create_env_file() {
    print_status "Creating environment configuration file..."
    
    cat > .env << EOF
# Zion App - Continuous Improvement System Environment Variables

# Cursor AI Configuration (REQUIRED)
CURSOR_API_KEY=your_cursor_api_key_here
CURSOR_WORKSPACE_ID=your_workspace_id_here

# Cursor AI Configuration (Optional)
CURSOR_API_ENDPOINT=https://api.cursor.sh

# Monitoring Configuration (Optional)
LIGHTHOUSE_URL=http://localhost:3000
ERROR_TRACKING_URL=your_error_tracking_url_here
ANALYTICS_URL=your_analytics_url_here

# System Configuration (Optional)
DEBUG=false
LOG_LEVEL=info
EOF

    print_success "Environment file created: .env"
    print_warning "Please update the .env file with your actual API keys and configuration"
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    
    if [ -f "package.json" ]; then
        npm install
        print_success "Dependencies installed successfully"
    else
        print_error "package.json not found. Please run this script from the continuous-improvement directory."
        exit 1
    fi
}

# Function to create logs directory
create_logs_directory() {
    print_status "Creating logs directory..."
    
    mkdir -p logs
    print_success "Logs directory created"
}

# Function to create backup directory
create_backup_directory() {
    print_status "Creating backup directory..."
    
    mkdir -p backups
    print_success "Backup directory created"
}

# Function to setup git hooks
setup_git_hooks() {
    print_status "Setting up git hooks..."
    
    mkdir -p .git/hooks
    
    # Pre-commit hook to run tests
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "Running pre-commit checks..."
npm test
if [ $? -ne 0 ]; then
    echo "Tests failed. Commit aborted."
    exit 1
fi
echo "Pre-commit checks passed."
EOF

    chmod +x .git/hooks/pre-commit
    print_success "Git hooks configured"
}

# Function to create systemd service (Linux)
create_systemd_service() {
    if [ "$(uname)" = "Linux" ]; then
        print_status "Creating systemd service for automatic startup..."
        
        SERVICE_FILE="/etc/systemd/system/zion-continuous-improvement.service"
        
        cat > $SERVICE_FILE << EOF
[Unit]
Description=Zion App Continuous Improvement System
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$(pwd)
Environment=NODE_ENV=production
ExecStart=/usr/bin/node start.js
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

        sudo systemctl daemon-reload
        print_success "Systemd service created: $SERVICE_FILE"
        print_warning "To enable automatic startup, run: sudo systemctl enable zion-continuous-improvement"
    else
        print_warning "Systemd service creation skipped (not on Linux)"
    fi
}

# Function to create launchd plist (macOS)
create_launchd_plist() {
    if [ "$(uname)" = "Darwin" ]; then
        print_status "Creating launchd plist for automatic startup..."
        
        PLIST_FILE="$HOME/Library/LaunchAgents/com.zion.continuous-improvement.plist"
        
        cat > $PLIST_FILE << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.zion.continuous-improvement</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/node</string>
        <string>$(pwd)/start.js</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$(pwd)</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$(pwd)/logs/systemd-out.log</string>
    <key>StandardErrorPath</key>
    <string>$(pwd)/logs/systemd-error.log</string>
    <key>EnvironmentVariables</key>
    <dict>
        <key>NODE_ENV</key>
        <string>production</string>
    </dict>
</dict>
</plist>
EOF

        print_success "Launchd plist created: $PLIST_FILE"
        print_warning "To enable automatic startup, run: launchctl load $PLIST_FILE"
    else
        print_warning "Launchd plist creation skipped (not on macOS)"
    fi
}

# Function to create cron job
create_cron_job() {
    print_status "Setting up cron job for monitoring..."
    
    CRON_JOB="*/5 * * * * cd $(pwd) && /usr/bin/node monitor.js >> logs/cron.log 2>&1"
    
    # Check if cron job already exists
    if crontab -l 2>/dev/null | grep -q "monitor.js"; then
        print_warning "Cron job already exists"
    else
        (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
        print_success "Cron job created"
    fi
}

# Function to run initial tests
run_tests() {
    print_status "Running initial tests..."
    
    if npm test; then
        print_success "All tests passed"
    else
        print_error "Tests failed. Please fix the issues before continuing."
        exit 1
    fi
}

# Function to validate configuration
validate_configuration() {
    print_status "Validating configuration..."
    
    # Check if .env file exists
    if [ ! -f ".env" ]; then
        print_error ".env file not found. Please run the setup again."
        exit 1
    fi
    
    # Check if required environment variables are set
    if ! grep -q "CURSOR_API_KEY=your_cursor_api_key_here" .env; then
        print_success "Environment variables appear to be configured"
    else
        print_warning "Please update the .env file with your actual API keys"
    fi
    
    # Check if logs directory exists
    if [ ! -d "logs" ]; then
        print_error "Logs directory not found. Please run the setup again."
        exit 1
    fi
    
    print_success "Configuration validation completed"
}

# Function to display next steps
display_next_steps() {
    echo ""
    echo "🎉 Setup completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Update the .env file with your actual API keys:"
    echo "   - CURSOR_API_KEY: Your Cursor AI API key"
    echo "   - CURSOR_WORKSPACE_ID: Your Cursor workspace ID"
    echo ""
    echo "2. Start the system:"
    echo "   npm start"
    echo ""
    echo "3. Monitor the logs:"
    echo "   tail -f logs/system-combined.log"
    echo ""
    echo "4. Check system status:"
    echo "   npm run status"
    echo ""
    echo "5. For automatic startup:"
    if [ "$(uname)" = "Linux" ]; then
        echo "   sudo systemctl enable zion-continuous-improvement"
        echo "   sudo systemctl start zion-continuous-improvement"
    elif [ "$(uname)" = "Darwin" ]; then
        echo "   launchctl load ~/Library/LaunchAgents/com.zion.continuous-improvement.plist"
    fi
    echo ""
    echo "For more information, see README.md"
}

# Main setup function
main() {
    echo "🚀 Zion App - Continuous Improvement System Setup"
    echo "=================================================="
    echo ""
    
    # Check prerequisites
    print_status "Checking prerequisites..."
    
    if ! check_node_version; then
        exit 1
    fi
    
    if ! check_npm; then
        exit 1
    fi
    
    if ! check_git; then
        exit 1
    fi
    
    # Create directories
    create_logs_directory
    create_backup_directory
    
    # Install dependencies
    install_dependencies
    
    # Create environment file
    create_env_file
    
    # Setup git hooks
    setup_git_hooks
    
    # Create startup services
    create_systemd_service
    create_launchd_plist
    
    # Setup cron job
    create_cron_job
    
    # Run tests
    run_tests
    
    # Validate configuration
    validate_configuration
    
    # Display next steps
    display_next_steps
}

# Run main function
main "$@"
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
