#!/bin/bash
# Backup trigger script for GitHub Actions workflows

cd "$(dirname "$0")/.."

# Trigger marketing sync backup
if [ -f "automation/backup-workflows/marketing-sync-backup.yml" ]; then
  echo "Triggering marketing sync backup workflow..."
  git add automation/backup-workflows/marketing-sync-backup.yml
  git commit -m "Trigger marketing sync backup workflow" || true
  git push origin main || true
fi

# Trigger sync health backup
if [ -f "automation/backup-workflows/sync-health-backup.yml" ]; then
  echo "Triggering sync health backup workflow..."
  git add automation/backup-workflows/sync-health-backup.yml
  git commit -m "Trigger sync health backup workflow" || true
  git push origin main || true
fi

echo "Backup triggers completed"
