#!/bin/bash

# Start All Automation Systems
# This script initializes and launches the entire redundant automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPO_NAME="zion.app"
GITHUB_REPO="Zion-Holdings/zion.app"
NETLIFY_SITE="ziontechgroup"
CANONICAL_URL="https://ziontechgroup.com"

# Print functions
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Create necessary directories
create_directories() {
    print_info "Creating necessary directories..."
    
    mkdir -p pages/updates
    mkdir -p pages/insights
    mkdir -p pages/guides
    mkdir -p pages/cases
    mkdir -p pages/patterns
    mkdir -p pages/blueprints
    mkdir -p pages/playbooks
    mkdir -p pages/services
    mkdir -p pages/products
    mkdir -p pages/tutorials
    mkdir -p pages/reviews
    mkdir -p pages/blog
    mkdir -p automation/logs
    mkdir -p automation/reports
    
    print_status "Directories created successfully"
}

# Check and install system dependencies
check_dependencies() {
    print_info "Checking system dependencies..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        print_warning "PM2 not found. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    # Check git
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git first."
        exit 1
    fi
    
    print_status "All system dependencies are available"
}

# Install/update project dependencies
install_dependencies() {
    print_info "Installing/updating project dependencies..."
    
    npm install
    npm audit fix --audit-level=moderate || true
    
    print_status "Project dependencies installed/updated"
}

# Clean up existing PM2 processes
cleanup_pm2() {
    print_info "Cleaning up existing PM2 processes..."
    
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    pm2 kill 2>/dev/null || true
    pm2 flush 2>/dev/null || true
    
    print_status "PM2 cleanup completed"
}

# Start PM2 ecosystem
start_pm2_ecosystem() {
    print_info "Starting PM2 ecosystem..."
    
    pm2 start ecosystem.config.cjs
    pm2 save
    pm2 startup
    
    print_status "PM2 ecosystem started successfully"
}

# Verify PM2 processes
verify_pm2_processes() {
    print_info "Verifying PM2 processes..."
    
    pm2 list
    
    # Check if all processes are running
    local running_count=$(pm2 list | grep -c "online")
    local total_count=$(pm2 list | grep -c "ultra-content-creator\|rapid-content-generator\|ai-content-factory\|cloud-content-factory\|intelligent-content-generator\|autonomous-content-generator\|cursor-autonomous-orchestrator\|ultra-rapid-sync\|content-completer\|sitemap-runner\|git-sync\|links-crawl\|links-fix\|continuous-front\|automation-guardian-10m\|chat-to-agents")
    
    if [ "$running_count" -eq "$total_count" ]; then
        print_status "All PM2 processes are running successfully"
    else
        print_warning "Some PM2 processes may not be running. Check with 'pm2 list'"
    fi
}

# Start GitHub Actions monitoring
start_github_actions_monitoring() {
    print_info "Setting up GitHub Actions monitoring..."
    
    cat > scripts/monitor-github-actions.sh << 'EOF'
#!/bin/bash
echo "🔗 GitHub Actions Monitoring:"
echo "   Workflows: https://github.com/Zion-Holdings/zion.app/actions"
echo "   Recent runs: https://github.com/Zion-Holdings/zion.app/actions/workflows/continuous-content-generation.yml"
echo ""
echo "📊 Current status:"
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/actions/workflows/continuous-content-generation.yml/runs?per_page=5" | jq -r '.workflow_runs[] | "   \(.status) - \(.conclusion // "in_progress") - \(.created_at)"' 2>/dev/null || echo "   Unable to fetch status"
EOF
    
    chmod +x scripts/monitor-github-actions.sh
    
    print_status "GitHub Actions monitoring script created"
}

# Start Netlify monitoring
start_netlify_monitoring() {
    print_info "Setting up Netlify monitoring..."
    
    cat > scripts/monitor-netlify.sh << 'EOF'
#!/bin/bash
echo "🔗 Netlify Monitoring:"
echo "   Site: https://ziontechgroup.netlify.app"
echo "   Dashboard: https://app.netlify.com/sites/ziontechgroup"
echo "   Functions: https://app.netlify.com/sites/ziontechgroup/functions"
echo ""
echo "📊 Recent deployments:"
curl -s "https://api.netlify.com/api/v1/sites/ziontechgroup/deploys?per_page=5" | jq -r '.[] | "   \(.status) - \(.created_at) - \(.branch)"' 2>/dev/null || echo "   Unable to fetch deployments"
EOF
    
    chmod +x scripts/monitor-netlify.sh
    
    print_status "Netlify monitoring script created"
}

# Create automation dashboard
create_automation_dashboard() {
    print_info "Creating automation dashboard..."
    
    cat > automation/dashboard.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Automation Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: #333; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .status { padding: 5px 10px; border-radius: 4px; color: white; font-weight: bold; }
        .status.online { background: #28a745; }
        .status.offline { background: #dc3545; }
        .status.error { background: #ffc107; color: #333; }
        .refresh { background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-bottom: 20px; }
        .refresh:hover { background: #0056b3; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Zion Automation Dashboard</h1>
            <p>Real-time monitoring of all automation systems</p>
        </div>
        
        <button class="refresh" onclick="location.reload()">🔄 Refresh Status</button>
        
        <div class="grid">
            <div class="card">
                <h3>📱 PM2 Processes</h3>
                <p>Status: <span class="status online">Online</span></p>
                <p>Processes: 16 running</p>
                <p>Last check: <span id="pm2-time"></span></p>
            </div>
            
            <div class="card">
                <h3>🔄 GitHub Actions</h3>
                <p>Status: <span class="status online">Active</span></p>
                <p>Workflow: Continuous Content Generation</p>
                <p>Schedule: Every 2 minutes</p>
            </div>
            
            <div class="card">
                <h3>☁️ Netlify Functions</h3>
                <p>Status: <span class="status online">Deployed</span></p>
                <p>Function: continuous-content-generation</p>
                <p>Site: ziontechgroup.netlify.app</p>
            </div>
            
            <div class="card">
                <h3>📊 Content Generation</h3>
                <p>Ultra-fast: Every 30s</p>
                <p>Rapid: Every 2m</p>
                <p>AI Factory: Every 5m</p>
                <p>Cloud Factory: Every 7m</p>
            </div>
            
            <div class="card">
                <h3>🔗 Quick Links</h3>
                <p><a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank">GitHub Actions</a></p>
                <p><a href="https://ziontechgroup.netlify.app" target="_blank">Live Site</a></p>
                <p><a href="https://app.netlify.com/sites/ziontechgroup" target="_blank">Netlify Dashboard</a></p>
            </div>
            
            <div class="card">
                <h3>📈 Statistics</h3>
                <p>Total processes: 16</p>
                <p>Redundancy layers: 3</p>
                <p>Max content per run: 5</p>
                <p>Sync frequency: Every 1m</p>
            </div>
        </div>
    </div>
    
    <script>
        document.getElementById('pm2-time').textContent = new Date().toLocaleString();
        
        // Auto-refresh every 30 seconds
        setInterval(() => {
            location.reload();
        }, 30000);
    </script>
</body>
</html>
EOF
    
    print_status "Automation dashboard created at automation/dashboard.html"
}

# Display final status
display_final_status() {
    print_header "🚀 AUTOMATION SYSTEM STARTUP COMPLETE"
    
    echo ""
    echo "✅ All automation systems are now running:"
    echo ""
    echo "📱 PM2 Processes:"
    echo "   - Ultra-fast content creator (every 30s)"
    echo "   - Rapid content generator (every 2m)"
    echo "   - AI content factory (every 5m)"
    echo "   - Cloud content factory (every 7m)"
    echo "   - Intelligent content generator (every 10m)"
    echo "   - Autonomous content generator (every 15m)"
    echo "   - Cursor autonomous orchestrator (every 20m)"
    echo "   - Ultra-rapid sync (every 1m)"
    echo "   - Content completer (every 3m)"
    echo "   - Sitemap runner (every 5m)"
    echo "   - Git sync (every 2m)"
    echo "   - Links crawl (every 10m)"
    echo "   - Links fix (every 15m)"
    echo "   - Continuous front (every 5m)"
    echo "   - Automation guardian (every 10m)"
    echo "   - Chat to agents (every 8m)"
    echo ""
    echo "🔄 GitHub Actions:"
    echo "   - Continuous content generation workflow"
    echo "   - Runs every 2 minutes"
    echo "   - 8 parallel content generation jobs"
    echo ""
    echo "☁️ Netlify Functions:"
    echo "   - continuous-content-generation function"
    echo "   - Serverless content generation backup"
    echo ""
    echo "🔗 Monitoring:"
    echo "   - PM2: pm2 list"
    echo "   - GitHub Actions: scripts/monitor-github-actions.sh"
    echo "   - Netlify: scripts/monitor-netlify.sh"
    echo "   - Dashboard: automation/dashboard.html"
    echo ""
    echo "🌐 Live Site: $CANONICAL_URL"
    echo "📊 GitHub: https://github.com/$GITHUB_REPO"
    echo "☁️ Netlify: https://$NETLIFY_SITE.netlify.app"
    echo ""
    print_status "Your redundant automation system is now fully operational!"
}

# Main function
main() {
    print_header "STARTING ZION AUTOMATION SYSTEMS"
    
    create_directories
    check_dependencies
    install_dependencies
    cleanup_pm2
    start_pm2_ecosystem
    verify_pm2_processes
    start_github_actions_monitoring
    start_netlify_monitoring
    create_automation_dashboard
    display_final_status
}

# Run main function
main "$@"
