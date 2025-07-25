#!/bin/bash

# Cursor Sync System Health Script
# Comprehensive system health check for cursor sync automation

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo "=== Cursor Sync System Health Check ==="
echo "Timestamp: $(date)"
echo ""

# Check git repository health
echo -e "${BLUE}🔍 Git Repository Health:${NC}"
if git status --porcelain > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Git repository is healthy${NC}"
else
    echo -e "${RED}❌ Git repository has issues${NC}"
fi

# Check remote connectivity
echo -e "${BLUE}🌐 Remote Connectivity:${NC}"
if git ls-remote origin > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Remote repository is accessible${NC}"
else
    echo -e "${RED}❌ Cannot access remote repository${NC}"
fi

# Check disk space
echo -e "${BLUE}💾 Disk Space:${NC}"
DISK_USAGE=$(df "$PROJECT_DIR" | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -lt 90 ]; then
    echo -e "${GREEN}✅ Disk usage: ${DISK_USAGE}%${NC}"
else
    echo -e "${RED}❌ Disk usage: ${DISK_USAGE}% (high)${NC}"
fi

# Check log file sizes
echo -e "${BLUE}📄 Log File Health:${NC}"
for log_file in "$AUTOMATION_DIR/logs"/cursor-sync*.log; do
    if [ -f "$log_file" ]; then
        size=$(du -h "$log_file" | cut -f1)
        filename=$(basename "$log_file")
        echo "  $filename: $size"
    fi
done

# Check for stuck processes
echo -e "${BLUE}🔄 Process Health:${NC}"
STUCK_PROCESSES=$(ps aux | grep "cursor-sync" | grep -v grep | wc -l)
if [ "$STUCK_PROCESSES" -eq 0 ]; then
    echo -e "${GREEN}✅ No stuck processes detected${NC}"
elif [ "$STUCK_PROCESSES" -eq 1 ]; then
    echo -e "${YELLOW}⚠️ 1 cursor sync process running${NC}"
else
    echo -e "${RED}❌ $STUCK_PROCESSES cursor sync processes detected${NC}"
fi

# Check cron jobs
echo -e "${BLUE}⏰ Cron Jobs:${NC}"
if crontab -l 2>/dev/null | grep -q "cursor-sync"; then
    echo -e "${GREEN}✅ Cursor sync cron jobs are active${NC}"
else
    echo -e "${RED}❌ No cursor sync cron jobs found${NC}"
fi

echo ""
echo "=== Health Check Complete ==="
