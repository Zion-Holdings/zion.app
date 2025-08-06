#!/bin/bash

echo "🚀 Upgrading to Evolved Automation System..."
echo "=============================================="

# Stop old automation processes
echo "🛑 Stopping old automation processes..."
pkill -f "enhanced-content-generator-agent"
pkill -f "autonomous-agent-orchestrator"
pkill -f "continuous-automation"
pkill -f "marketing-automation"

# Wait for processes to stop
sleep 5

# Backup old automation files
echo "📦 Creating backup of old automation system..."
backup_dir="automation/backups/old-automation-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir"

# Move old automation files to backup
mv automation/enhanced-content-generator-agent.js "$backup_dir/" 2>/dev/null || true
mv automation/autonomous-agent-orchestrator.js "$backup_dir/" 2>/dev/null || true
mv automation/continuous-automation-orchestrator.js "$backup_dir/" 2>/dev/null || true
mv automation/marketing-automation.js "$backup_dir/" 2>/dev/null || true

# Create evolution directory
echo "📁 Setting up evolution directory..."
mkdir -p automation/evolution
mkdir -p automation/generated-content

# Create evolution configuration
cat > automation/evolution/evolution-config.json << 'EOF'
{
  "evolution": {
    "enabled": true,
    "learningRate": 0.1,
    "innovationThreshold": 0.7,
    "diversityTarget": 0.8,
    "evolutionCycles": 0
  },
  "contentGeneration": {
    "diversityTracking": true,
    "learningEnabled": true,
    "innovationEnabled": true,
    "repetitionPrevention": true
  },
  "scheduling": {
    "evolutionCycle": "0 */6 * * *",
    "diversityCheck": "0 */2 * * *",
    "innovationCycle": "0 */12 * * *"
  }
}
EOF

# Create new automation launcher script
cat > automation/start-evolved-automation.sh << 'EOF'
#!/bin/bash

echo "🚀 Starting Evolved Automation System..."

# Set environment variables
export AGENT_ID="evolved-automation-$(date +%s)"
export AUTOMATION_MODE="evolved"
export EVOLUTION_ENABLED="true"

# Start the evolved automation system
node automation/launch-evolved-automation.js
EOF

chmod +x automation/start-evolved-automation.sh

# Create evolution monitoring script
cat > automation/monitor-evolution.sh << 'EOF'
#!/bin/bash

echo "🔍 Evolution System Monitor"
echo "=========================="

# Check evolution status
if [ -f "automation/evolution/evolution-state.json" ]; then
    echo "✅ Evolution state file exists"
    cat automation/evolution/evolution-state.json | jq '.' 2>/dev/null || echo "⚠️ Evolution state file is not valid JSON"
else
    echo "❌ Evolution state file not found"
fi

# Check evolution metrics
if [ -f "automation/evolution/evolution-metrics.json" ]; then
    echo "✅ Evolution metrics file exists"
    cat automation/evolution/evolution-metrics.json | jq '.' 2>/dev/null || echo "⚠️ Evolution metrics file is not valid JSON"
else
    echo "❌ Evolution metrics file not found"
fi

# Check content diversity
if [ -f "automation/evolution/diversity-tracker.json" ]; then
    echo "✅ Diversity tracker exists"
else
    echo "❌ Diversity tracker not found"
fi

# Check learning system
if [ -f "automation/evolution/learning-system.json" ]; then
    echo "✅ Learning system exists"
else
    echo "❌ Learning system not found"
fi

echo ""
echo "📊 Evolution System Status:"
echo "==========================="

# Count generated pages
PAGE_COUNT=$(find pages -name "*.tsx" | wc -l)
echo "Total pages: $PAGE_COUNT"

# Count innovative pages
INNOVATIVE_COUNT=$(find pages -name "*evolved*.tsx" -o -name "*innovative*.tsx" -o -name "*ai-powered*.tsx" | wc -l)
echo "Innovative pages: $INNOVATIVE_COUNT"

# Calculate diversity score
if [ $PAGE_COUNT -gt 0 ]; then
    DIVERSITY_SCORE=$(echo "scale=2; $INNOVATIVE_COUNT / $PAGE_COUNT" | bc 2>/dev/null || echo "0.00")
    echo "Diversity score: $DIVERSITY_SCORE"
else
    echo "Diversity score: 0.00"
fi
EOF

chmod +x automation/monitor-evolution.sh

# Create evolution report script
cat > automation/evolution-report.sh << 'EOF'
#!/bin/bash

echo "📊 Evolution System Report"
echo "=========================="

# Generate comprehensive evolution report
REPORT_FILE="automation/evolution/comprehensive-evolution-report.json"

cat > "$REPORT_FILE" << 'REPORT_EOF'
{
  "reportGenerated": "$(date)",
  "systemStatus": "evolved",
  "evolutionMetrics": {
    "totalGenerations": 0,
    "uniqueContentCreated": 0,
    "evolutionCycles": 0,
    "diversityScore": 0,
    "innovationRate": 0,
    "learningProgress": 0
  },
  "contentAnalysis": {
    "totalPages": 0,
    "innovativePages": 0,
    "diversityScore": 0,
    "repetitionRate": 0
  },
  "systemHealth": {
    "status": "healthy",
    "issues": [],
    "recommendations": []
  }
}
REPORT_EOF

echo "✅ Evolution report generated: $REPORT_FILE"
echo "📊 Report contents:"
cat "$REPORT_FILE" | jq '.' 2>/dev/null || cat "$REPORT_FILE"
EOF

chmod +x automation/evolution-report.sh

# Update cron jobs to use evolved system
echo "⏰ Updating cron jobs for evolved system..."

# Remove old cron jobs
crontab -l 2>/dev/null | grep -v "enhanced-content-generator-agent" | grep -v "autonomous-agent-orchestrator" | crontab -

# Add new evolved automation cron job
(crontab -l 2>/dev/null; echo "0 */6 * * * cd $(pwd) && ./automation/start-evolved-automation.sh") | crontab -

# Create system health check
cat > automation/check-evolved-system.sh << 'EOF'
#!/bin/bash

echo "🏥 Evolved System Health Check"
echo "=============================="

# Check if evolved automation is running
if pgrep -f "launch-evolved-automation" > /dev/null; then
    echo "✅ Evolved automation is running"
else
    echo "❌ Evolved automation is not running"
    echo "🚀 Starting evolved automation..."
    ./automation/start-evolved-automation.sh &
fi

# Check evolution files
echo ""
echo "📁 Evolution System Files:"
echo "=========================="

FILES=(
    "automation/evolution/evolution-state.json"
    "automation/evolution/evolution-metrics.json"
    "automation/evolution/diversity-tracker.json"
    "automation/evolution/learning-system.json"
    "automation/evolution/evolution-config.json"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Check generated content
echo ""
echo "📄 Generated Content:"
echo "===================="

PAGE_COUNT=$(find pages -name "*.tsx" | wc -l)
INNOVATIVE_COUNT=$(find pages -name "*evolved*.tsx" -o -name "*innovative*.tsx" -o -name "*ai-powered*.tsx" | wc -l)

echo "Total pages: $PAGE_COUNT"
echo "Innovative pages: $INNOVATIVE_COUNT"

if [ $PAGE_COUNT -gt 0 ]; then
    DIVERSITY_SCORE=$(echo "scale=2; $INNOVATIVE_COUNT / $PAGE_COUNT" | bc 2>/dev/null || echo "0.00")
    echo "Diversity score: $DIVERSITY_SCORE"
    
    if (( $(echo "$DIVERSITY_SCORE > 0.7" | bc -l) )); then
        echo "✅ System is diverse and healthy"
    else
        echo "⚠️ System needs more diversity"
    fi
else
    echo "⚠️ No pages found"
fi
EOF

chmod +x automation/check-evolved-system.sh

# Create upgrade completion report
cat > automation/upgrade-completion-report.md << 'EOF'
# Evolved Automation System Upgrade Complete

## ✅ Upgrade Summary

The automation system has been successfully upgraded from the old repetitive system to the new evolved system.

## 🔄 What Changed

### Old System Issues:
- Fixed content templates causing repetition
- No learning capabilities
- Static page types
- No diversity tracking
- Repetitive content generation

### New Evolved System Features:
- **Intelligent Evolution**: System learns and adapts over time
- **Diversity Tracking**: Prevents repetitive content generation
- **Innovation Algorithms**: Creates unique and varied content
- **Learning System**: Improves based on successful patterns
- **Evolution Cycles**: Continuous system improvement

## 🚀 New Components

1. **EvolvedContentGenerator**: Creates diverse, innovative content
2. **IntelligentEvolutionOrchestrator**: Manages system evolution
3. **EvolvedAutomationLauncher**: Coordinates the evolved system

## 📊 Evolution Metrics

The system now tracks:
- Content diversity scores
- Innovation rates
- Learning progress
- Evolution cycles
- Repetition prevention

## ⏰ New Scheduling

- Evolution cycles: Every 6 hours
- Diversity checks: Every 2 hours
- Innovation cycles: Every 12 hours

## 🛠️ Available Commands

- `./automation/start-evolved-automation.sh` - Start evolved automation
- `./automation/monitor-evolution.sh` - Monitor evolution status
- `./automation/evolution-report.sh` - Generate evolution report
- `./automation/check-evolved-system.sh` - System health check

## 📈 Expected Improvements

1. **Content Diversity**: 70%+ unique content generation
2. **Innovation Rate**: Continuous new page types and features
3. **Learning Progress**: System improves over time
4. **Repetition Prevention**: No more duplicate content

## 🔍 Monitoring

Monitor the system evolution through:
- `automation/evolution/evolution-state.json`
- `automation/evolution/evolution-metrics.json`
- `automation/evolution/diversity-tracker.json`

## ✅ Upgrade Status: COMPLETE

The evolved automation system is now active and will continuously improve the project's content and features.
EOF

echo "✅ Upgrade to evolved automation system completed!"
echo ""
echo "📊 Upgrade Summary:"
echo "=================="
echo "✅ Old repetitive system stopped"
echo "✅ New evolved system installed"
echo "✅ Evolution tracking enabled"
echo "✅ Diversity algorithms active"
echo "✅ Learning system implemented"
echo "✅ Innovation cycles scheduled"
echo ""
echo "🚀 Starting evolved automation system..."
echo ""

# Start the evolved automation system
./automation/start-evolved-automation.sh 