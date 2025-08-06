#!/bin/bash

# Autonomous Agent System Restore Script

echo "🔄 Restoring Autonomous Agent System from backup..."

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Navigate to the automation directory
cd "$(dirname "$0")"

# Check if backup directory is provided
if [ -z "$1" ]; then
    print_error "Please provide backup directory path"
    echo "Usage: $0 <backup-directory>"
    exit 1
fi

backup_dir="$1"

if [ ! -d "$backup_dir" ]; then
    print_error "Backup directory does not exist: $backup_dir"
    exit 1
fi

print_status "Restoring from backup: $backup_dir"

# Stop the system before restore
print_status "Stopping autonomous system..."
./stop-autonomous-system.sh 2>/dev/null || true

# Restore directories
for dir in logs reports marketplace agents sales market-research solutions orchestrator master-orchestrator; do
    if [ -d "$backup_dir/$dir" ]; then
        print_status "Restoring $dir..."
        rm -rf "$dir" 2>/dev/null || true
        cp -r "$backup_dir/$dir" ./
        print_success "$dir restored"
    fi
done

# Restore configuration files
if [ -f "$backup_dir/config.json" ]; then
    print_status "Restoring config.json..."
    cp "$backup_dir/config.json" ./
    print_success "config.json restored"
fi

if [ -f "$backup_dir/cron-config.json" ]; then
    print_status "Restoring cron-config.json..."
    cp "$backup_dir/cron-config.json" ./
    print_success "cron-config.json restored"
fi

print_success "Restore completed successfully"
print_status "Use start-autonomous-system.sh to start the system"
