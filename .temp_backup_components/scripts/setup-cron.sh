#!/bin/bash

# Setup Cron Job for Auto-Commit Automation
# This script sets up a cron job to start the auto-commit automation

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
START_SCRIPT="$SCRIPT_DIR/start-auto-commit.sh"

# Function to add cron job
add_cron_job() {
    local cron_job="* * * * * $START_SCRIPT start > /dev/null 2>&1"
    
    # Check if cron job already exists
    if crontab -l 2>/dev/null | grep -q "$START_SCRIPT"; then
        echo "Cron job already exists for auto-commit automation"
        return 1
    fi
    
    # Add the cron job
    (crontab -l 2>/dev/null; echo "$cron_job") | crontab -
    
    echo "Cron job added successfully:"
    echo "  $cron_job"
    echo ""
    echo "This will run the auto-commit automation every minute"
    echo "To view current cron jobs: crontab -l"
    echo "To remove cron job: $0 remove"
}

# Function to remove cron job
remove_cron_job() {
    # Remove the cron job
    crontab -l 2>/dev/null | grep -v "$START_SCRIPT" | crontab -
    
    echo "Cron job removed successfully"
    echo "To view current cron jobs: crontab -l"
}

# Function to show current cron jobs
show_cron_jobs() {
    echo "Current cron jobs:"
    crontab -l 2>/dev/null || echo "No cron jobs found"
}

# Function to check if cron is available
check_cron() {
    if ! command -v crontab &> /dev/null; then
        echo "Error: crontab command not found"
        echo "Please install cron on your system:"
        echo "  macOS: brew install cronie"
        echo "  Ubuntu/Debian: sudo apt-get install cron"
        echo "  CentOS/RHEL: sudo yum install cronie"
        exit 1
    fi
}

# Main script logic
case "${1:-add}" in
    add)
        check_cron
        add_cron_job
        ;;
    remove)
        check_cron
        remove_cron_job
        ;;
    show)
        check_cron
        show_cron_jobs
        ;;
    *)
        echo "Usage: $0 {add|remove|show}"
        echo ""
        echo "Commands:"
        echo "  add    - Add cron job to run auto-commit every minute"
        echo "  remove - Remove auto-commit cron job"
        echo "  show   - Show current cron jobs"
        echo ""
        echo "Note: This script requires cron to be installed on your system"
        exit 1
        ;;
esac 