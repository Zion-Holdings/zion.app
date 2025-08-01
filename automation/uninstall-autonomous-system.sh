#!/bin/bash

# Uninstall Autonomous Agent System

echo "🗑️ Uninstalling Autonomous Agent System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

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

# Navigate to the automation directory
cd "$(dirname "$0")"

# Stop the system
print_status "Stopping autonomous system..."
./stop-autonomous-system.sh 2>/dev/null || true

# Remove cron jobs
print_status "Removing cron jobs..."
crontab -l 2>/dev/null | grep -v "Autonomous Agent System" | crontab -

# Ask user what to remove
echo ""
print_warning "What would you like to remove?"
echo "1) Remove all files and directories (complete uninstall)"
echo "2) Remove only system files (keep data)"
echo "3) Remove only data files (keep system)"
echo "4) Cancel uninstall"

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        print_status "Removing all files and directories..."
        rm -rf logs reports backups temp pids marketplace social-media email-campaigns agents
        rm -f config.json cron-config.json package.json package-lock.json
        rm -f *.js *.sh
        print_success "Complete uninstall completed"
        ;;
    2)
        print_status "Removing system files only..."
        rm -f config.json cron-config.json package.json package-lock.json
        rm -f *.js *.sh
        print_success "System files removed"
        ;;
    3)
        print_status "Removing data files only..."
        rm -rf logs reports backups temp pids marketplace social-media email-campaigns agents
        print_success "Data files removed"
        ;;
    4)
        print_status "Uninstall cancelled"
        exit 0
        ;;
    *)
        print_error "Invalid choice"
        exit 1
        ;;
esac

print_success "Uninstall completed successfully"
