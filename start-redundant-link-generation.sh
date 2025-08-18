#!/bin/bash

# Redundant Link Generation Startup Script
# This script starts all redundant link generation systems for maximum reliability

set -e

echo "🚀 Starting Redundant Link Generation System..."
echo "================================================"

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

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Please install PM2 first:"
    echo "npm install -g pm2"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

print_status "Setting up redundant link generation system..."

# Create necessary directories
print_status "Creating report directories..."
mkdir -p data/reports/link-generation
mkdir -p data/reports/redundant-links

# Stop any existing link generation processes
print_status "Stopping existing link generation processes..."
pm2 stop ultra-fast-links redundant-links nav-links-instance footer-links-instance content-links-instance social-links-instance business-links-instance 2>/dev/null || true

# Delete any existing processes
print_status "Cleaning up existing processes..."
pm2 delete ultra-fast-links redundant-links nav-links-instance footer-links-instance content-links-instance social-links-instance business-links-instance 2>/dev/null || true

# Start the redundant link generation ecosystem
print_status "Starting redundant link generation ecosystem..."
pm2 start ecosystem-redundant-links.config.cjs

# Wait a moment for processes to start
sleep 3

# Check status
print_status "Checking process status..."
pm2 status

# Show logs for verification
print_status "Recent logs from link generation processes:"
echo "================================================"

# Show logs from each process
for process in ultra-fast-links redundant-links nav-links-instance footer-links-instance content-links-instance social-links-instance business-links-instance; do
    if pm2 describe $process >/dev/null 2>&1; then
        print_status "Logs from $process:"
        pm2 logs $process --lines 5 --nostream
        echo "----------------------------------------"
    fi
done

# Start the original ecosystem as well for full redundancy
print_status "Starting original ecosystem for full redundancy..."
pm2 start ecosystem.config.cjs

# Show final status
print_status "Final system status:"
pm2 status

# Create a monitoring script
print_status "Creating monitoring script..."
cat > monitor-link-generation.sh << 'EOF'
#!/bin/bash
echo "🔍 Link Generation System Monitor"
echo "=================================="
echo "PM2 Status:"
pm2 status | grep -E "(ultra-fast|redundant|nav-links|footer-links|content-links|social-links|business-links)"
echo ""
echo "Recent Logs:"
pm2 logs --lines 20 --nostream | grep -E "(link|generation|cycle)" | tail -20
echo ""
echo "Report Files:"
ls -la data/reports/link-generation/ 2>/dev/null || echo "No link generation reports found"
ls -la data/reports/redundant-links/ 2>/dev/null || echo "No redundant links reports found"
EOF

chmod +x monitor-link-generation.sh

# Create a restart script
print_status "Creating restart script..."
cat > restart-link-generation.sh << 'EOF'
#!/bin/bash
echo "🔄 Restarting Link Generation System..."
pm2 restart ultra-fast-links redundant-links nav-links-instance footer-links-instance content-links-instance social-links-instance business-links-instance
echo "✅ All processes restarted"
EOF

chmod +x restart-link-generation.sh

# Create a stop script
print_status "Creating stop script..."
cat > stop-link-generation.sh << 'EOF'
#!/bin/bash
echo "🛑 Stopping Link Generation System..."
pm2 stop ultra-fast-links redundant-links nav-links-instance footer-links-instance content-links-instance social-links-instance business-links-instance
echo "✅ All processes stopped"
EOF

chmod +x stop-link-generation.sh

print_success "Redundant Link Generation System started successfully!"
echo ""
echo "📋 Available commands:"
echo "  ./monitor-link-generation.sh  - Monitor system status"
echo "  ./restart-link-generation.sh  - Restart all processes"
echo "  ./stop-link-generation.sh     - Stop all processes"
echo "  pm2 status                    - Show PM2 status"
echo "  pm2 logs                      - Show live logs"
echo ""
echo "🔗 The system will now continuously generate links every 30 seconds to 2.5 minutes"
echo "   across multiple redundant instances for maximum reliability."
echo ""
echo "📊 Check the reports in:"
echo "   - data/reports/link-generation/"
echo "   - data/reports/redundant-links/"
echo ""
print_status "System is now running autonomously! 🎉"
