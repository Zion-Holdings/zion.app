#!/bin/bash

# Zion.App Backup Script
# Runs daily at 2 AM via cron

set -e

# Set environment
export NODE_ENV=production
export PATH="/Users/klebergarciaalcatrao/.nvm/versions/node/v22.16.0/bin:$PATH"
export NVM_DIR="/Users/klebergarciaalcatrao/.nvm"

# Source NVM
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Change to project directory
cd "/Users/klebergarciaalcatrao/Desktop/ZION_APP_AUG_25_25/zion.app"

# Log file
LOG_FILE="automation/logs/backup.log"
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting daily backup process..."

# Create backup directory
BACKUP_DIR="automation/backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

log "Backup directory created: $BACKUP_DIR"

# Backup automation data
log "Backing up automation data..."
if [ -d "automation/data" ]; then
    cp -r automation/data "$BACKUP_DIR/"
    log "Automation data backed up"
fi

# Backup automation logs
log "Backing up automation logs..."
if [ -d "automation/logs" ]; then
    cp -r automation/logs "$BACKUP_DIR/"
    log "Automation logs backed up"
fi

# Backup configuration files
log "Backing up configuration files..."
if [ -f "automation/autonomous-config.json" ]; then
    cp automation/autonomous-config.json "$BACKUP_DIR/"
    log "Configuration files backed up"
fi

# Backup package.json and package-lock.json
log "Backing up package files..."
if [ -f "package.json" ]; then
    cp package.json "$BACKUP_DIR/"
    log "package.json backed up"
fi

if [ -f "package-lock.json" ]; then
    cp package-lock.json "$BACKUP_DIR/"
    log "package-lock.json backed up"
fi

# Backup important source files
log "Backing up source files..."
mkdir -p "$BACKUP_DIR/src"
if [ -d "src" ]; then
    find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" | head -100 | xargs -I {} cp --parents {} "$BACKUP_DIR/"
    log "Source files backed up"
fi

# Backup components
log "Backing up components..."
mkdir -p "$BACKUP_DIR/components"
if [ -d "components" ]; then
    find components -name "*.tsx" -o -name "*.ts" -o -name "*.js" | head -100 | xargs -I {} cp --parents {} "$BACKUP_DIR/"
    log "Components backed up"
fi

# Create backup manifest
log "Creating backup manifest..."
cat > "$BACKUP_DIR/backup-manifest.txt" << EOF
Zion.App Backup Manifest
========================
Backup Date: $(date)
Backup Time: $(date +%H:%M:%S)
Backup Directory: $BACKUP_DIR

Contents:
- automation/data/
- automation/logs/
- automation/autonomous-config.json
- package.json
- package-lock.json
- src/ (first 100 files)
- components/ (first 100 files)

Backup completed successfully.
EOF

# Compress backup
log "Compressing backup..."
cd automation/backups
tar -czf "$(basename "$BACKUP_DIR").tar.gz" "$(basename "$BACKUP_DIR")"
rm -rf "$(basename "$BACKUP_DIR")"

# Clean up old backups (keep last 7 days)
log "Cleaning up old backups..."
find . -name "*.tar.gz" -mtime +7 -delete

log "Backup compressed and old backups cleaned up"

# Update backup log
echo "$(date): Daily backup completed - $(basename "$BACKUP_DIR").tar.gz" >> automation/logs/backup-history.log

log "Daily backup process completed successfully"
