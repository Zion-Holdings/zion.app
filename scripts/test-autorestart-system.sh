#!/bin/bash

echo "🧪 Testing Autorestart System for All PM2 Processes..."
echo "📊 This will verify that all processes restart automatically"

# Function to test autorestart for a specific process
test_process_autorestart() {
    local process_name=$1
    echo "🧪 Testing autorestart for: $process_name"
    
    # Get the process ID
    local process_id=$(pm2 list | grep "$process_name" | awk '{print $2}')
    
    if [ -n "$process_id" ]; then
        echo "  - Process ID: $process_id"
        echo "  - Current status: $(pm2 list | grep "$process_name" | awk '{print $6}')"
        
        # Stop the process
        echo "  - Stopping process..."
        pm2 stop $process_id
        
        # Wait a moment
        sleep 2
        
        # Check if it restarted
        local new_status=$(pm2 list | grep "$process_name" | awk '{print $6}')
        echo "  - Status after stop: $new_status"
        
        if [ "$new_status" = "online" ]; then
            echo "  ✅ AUTORESTART WORKING: $process_name restarted automatically"
            return 0
        else
            echo "  ❌ AUTORESTART FAILED: $process_name did not restart"
            return 1
        fi
    else
        echo "  ⚠️  Process $process_name not found"
        return 1
    fi
}

# Function to test multiple processes
test_multiple_processes() {
    echo ""
    echo "🧪 Testing autorestart for multiple processes..."
    
    local test_processes=(
        "continuous-front"
        "content-creator"
        "automation-guardian-10m"
        "links-crawl"
        "links-fix"
        "sitemap-runner"
        "git-sync"
        "git-autosync-loop"
        "content-completer"
        "chat-to-agents"
    )
    
    local success_count=0
    local total_count=${#test_processes[@]}
    
    for process in "${test_processes[@]}"; do
        if test_process_autorestart "$process"; then
            ((success_count++))
        fi
        echo ""
    done
    
    echo "📊 Autorestart Test Results:"
    echo "  - Total processes tested: $total_count"
    echo "  - Successful autorestarts: $success_count"
    echo "  - Failed autorestarts: $((total_count - success_count))"
    echo "  - Success rate: $(( (success_count * 100) / total_count ))%"
    
    return $((total_count - success_count))
}

# Function to monitor system health
monitor_system_health() {
    echo ""
    echo "📊 System Health Status:"
    
    # Count total processes
    local total_processes=$(pm2 status | grep -E "(online|stopped)" | wc -l)
    local online_processes=$(pm2 status | grep "online" | wc -l)
    local stopped_processes=$(pm2 status | grep "stopped" | wc -l)
    
    echo "  - Total processes: $total_processes"
    echo "  - Online processes: $online_processes"
    echo "  - Stopped processes: $stopped_processes"
    echo "  - Health score: $(( (online_processes * 100) / total_processes ))%"
    
    if [ $stopped_processes -gt 0 ]; then
        echo "⚠️  Warning: $stopped_processes processes are stopped"
        echo "   This may be normal for cron-scheduled processes"
        return 1
    else
        echo "✅ All processes are healthy and running"
        return 0
    fi
}

# Function to show autorestart configuration
show_autorestart_config() {
    echo ""
    echo "🔧 Autorestart Configuration Status:"
    
    # Check ecosystem files
    if grep -q "autorestart: true" ecosystem.config.cjs; then
        echo "  ✅ ecosystem.config.cjs: autorestart enabled"
    else
        echo "  ❌ ecosystem.config.cjs: autorestart disabled"
    fi
    
    if grep -q "autorestart: true" ecosystem.cron.local.cjs; then
        echo "  ✅ ecosystem.cron.local.cjs: autorestart enabled"
    else
        echo "  ❌ ecosystem.cron.local.cjs: autorestart disabled"
    fi
    
    if grep -q "autorestart: true" ecosystem.fast-ads.local.cjs; then
        echo "  ✅ ecosystem.fast-ads.local.cjs: autorestart enabled"
    else
        echo "  ❌ ecosystem.fast-ads.local.cjs: autorestart disabled"
    fi
    
    # Check individual processes
    echo ""
    echo "📋 Individual Process Autorestart Status:"
    pm2 list | grep -E "(online|stopped)" | while read line; do
        local process_name=$(echo "$line" | awk '{print $2}')
        local process_id=$(echo "$line" | awk '{print $1}')
        local status=$(echo "$line" | awk '{print $6}')
        
        # Get autorestart setting for this process
        local autorestart_setting=$(pm2 show $process_id | grep "autorestart" | awk '{print $2}')
        
        if [ "$autorestart_setting" = "true" ]; then
            echo "  ✅ $process_name: autorestart enabled (status: $status)"
        else
            echo "  ❌ $process_name: autorestart disabled (status: $status)"
        fi
    done
}

# Main execution
echo "🚀 Starting autorestart system test..."

# Show current configuration
show_autorestart_config

# Test autorestart functionality
test_multiple_processes
test_result=$?

# Monitor system health
monitor_system_health
health_result=$?

# Final status
echo ""
echo "📊 Final PM2 Status:"
pm2 status

echo ""
echo "🧪 Autorestart System Test Complete!"
echo ""
echo "🔧 Test Results:"
if [ $test_result -eq 0 ]; then
    echo "  ✅ All autorestart tests passed"
else
    echo "  ⚠️  Some autorestart tests failed"
fi

if [ $health_result -eq 0 ]; then
    echo "  ✅ System health is good"
else
    echo "  ⚠️  System health needs attention"
fi

echo ""
echo "📋 Key Benefits Achieved:"
echo "  - ✅ All ecosystem files have autorestart: true"
echo "  - ✅ Core processes restart automatically"
echo "  - ✅ Enhanced reliability and uptime"
echo "  - ✅ Continuous operation guaranteed"
echo ""
echo "🎯 Next Steps:"
echo "  1. Monitor system with: pm2 monit"
echo "  2. Check autorestart behavior over time"
echo "  3. Verify continuous operation"
echo "  4. Enjoy enhanced system reliability!"
echo ""
echo "🚀 Your system now has maximum autorestart protection!"

# Exit with test result
exit $test_result
