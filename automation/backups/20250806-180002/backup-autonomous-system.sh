#!/bin/bash

# Autonomous Agent System Backup Script

echo "💾 Creating backup of Autonomous Agent System..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Navigate to the automation directory
cd "$(dirname "$0")"

# Create backup directory with timestamp
backup_dir="backups/backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir"

print_status "Creating backup in $backup_dir..."

# Backup important files and directories
cp -r logs "$backup_dir/" 2>/dev/null || true
cp -r reports "$backup_dir/" 2>/dev/null || true
cp -r marketplace "$backup_dir/" 2>/dev/null || true
cp -r agents "$backup_dir/" 2>/dev/null || true
cp -r sales "$backup_dir/" 2>/dev/null || true
cp -r market-research "$backup_dir/" 2>/dev/null || true
cp -r solutions "$backup_dir/" 2>/dev/null || true
cp -r orchestrator "$backup_dir/" 2>/dev/null || true
cp -r master-orchestrator "$backup_dir/" 2>/dev/null || true

# Backup configuration files
cp config.json "$backup_dir/" 2>/dev/null || true
cp cron-config.json "$backup_dir/" 2>/dev/null || true

# Create backup manifest
cat > "$backup_dir/backup-manifest.txt" << MANIFEST
Autonomous Agent System Backup
Created: $(date)
Backup Directory: $backup_dir

Contents:
- logs/
- reports/
- marketplace/
- agents/
- sales/
- market-research/
- solutions/
- orchestrator/
- master-orchestrator/
- config.json
- cron-config.json

MANIFEST

print_success "Backup created successfully in $backup_dir"
print_status "Backup size: $(du -sh "$backup_dir" | cut -f1)"
