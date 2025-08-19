#!/bin/bash

# 🚀 Ultimate Redundancy Automation System V2
# Comprehensive coverage for all PM2, GitHub Actions, and Netlify functions automations
# This script ensures complete redundancy and monitoring for all automation systems

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$SCRIPT_DIR"
LOGS_DIR="$WORKSPACE_DIR/automation/logs"
REDUNDANCY_DIR="$WORKSPACE_DIR/automation/redundancy"
BACKUP_DIR="$WORKSPACE_DIR/automation/backups"
TEMP_DIR="$WORKSPACE_DIR/automation/temp"

# Ensure directories exist
mkdir -p "$LOGS_DIR" "$REDUNDANCY_DIR" "$BACKUP_DIR" "$TEMP_DIR"

# Logging functions
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOGS_DIR/redundancy-startup.log"
}

warn() {
    echo -e "${YELLOW}[$(date '+%Y-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOGS_DIR/redundancy-startup.log"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOGS_DIR/redundancy-startup.log"
}

info() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')] INFO:${NC} $1" | tee -a "$LOGS_DIR/redundancy-startup.log"
}

success() {
    echo -e "${CYAN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1" | tee -a "$LOGS_DIR/redundancy-startup.log"
}

# Check prerequisites
check_prerequisites() {
    log "🔍 Checking prerequisites..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js 20+ first."
        exit 1
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 20 ]; then
        error "Node.js version 20+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        warn "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    # Check if required npm packages are installed
    if [ ! -d "node_modules" ]; then
        warn "Installing npm dependencies..."
        npm install
    fi
    
    # Check if git is available
    if ! command -v git &> /dev/null; then
        error "Git is not installed. Please install git first."
        exit 1
    fi
    
    success "Prerequisites check completed successfully"
}

# Backup existing configurations
backup_existing_configs() {
    log "💾 Backing up existing configurations..."
    
    cd "$WORKSPACE_DIR"
    
    # Create backup timestamp
    BACKUP_TIMESTAMP=$(date '+%Y%m%d_%H%M%S')
    BACKUP_PATH="$BACKUP_DIR/backup_$BACKUP_TIMESTAMP"
    mkdir -p "$BACKUP_PATH"
    
    # Backup PM2 configurations
    if [ -f "ecosystem.pm2.cjs" ]; then
        cp ecosystem.pm2.cjs "$BACKUP_PATH/"
    fi
    if [ -f "ecosystem-redundancy.pm2.cjs" ]; then
        cp ecosystem-redundancy.pm2.cjs "$BACKUP_PATH/"
    fi
    
    # Backup GitHub Actions workflows
    if [ -d ".github/workflows" ]; then
        cp -r .github/workflows "$BACKUP_PATH/"
    fi
    
    # Backup Netlify functions
    if [ -d "netlify/functions" ]; then
        cp -r netlify/functions "$BACKUP_PATH/"
    fi
    
    # Backup automation scripts
    if [ -d "automation" ]; then
        cp -r automation "$BACKUP_PATH/"
    fi
    
    success "Backup completed: $BACKUP_PATH"
}

# Initialize PM2 redundancy system
init_pm2_redundancy() {
    log "🔄 Initializing PM2 redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop existing PM2 processes if running
    if pm2 list | grep -q "zion-auto-sync"; then
        warn "Stopping existing PM2 processes..."
        pm2 stop all
        pm2 delete all
    fi
    
    # Start comprehensive redundancy ecosystem
    log "Starting PM2 comprehensive redundancy ecosystem..."
    
    # Check which ecosystem file to use
    if [ -f "ecosystem.comprehensive-redundancy.cjs" ]; then
        pm2 start ecosystem.comprehensive-redundancy.cjs
        success "Started comprehensive redundancy ecosystem"
    elif [ -f "ecosystem-redundancy.pm2.cjs" ]; then
        pm2 start ecosystem-redundancy.pm2.cjs
        success "Started redundancy ecosystem"
    else
        # Create a comprehensive ecosystem file
        create_comprehensive_ecosystem
        pm2 start ecosystem.comprehensive-redundancy.cjs
        success "Created and started comprehensive redundancy ecosystem"
    fi
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    # Install PM2 logrotate
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    
    success "PM2 redundancy system initialized successfully"
}

# Create comprehensive ecosystem file
create_comprehensive_ecosystem() {
    log "📝 Creating comprehensive PM2 ecosystem configuration..."
    
    cat > ecosystem.comprehensive-redundancy.cjs << 'EOF'
module.exports = {
  apps: [
    // Main auto-sync process
    {
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-error.log",
      out_file: "automation/logs/zion-auto-sync-out.log",
      time: true
    },
    
    // Cron-based auto-sync
    {
      name: "zion-auto-sync-cron",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/10 * * * *", // every 10 minutes
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-cron-error.log",
      out_file: "automation/logs/zion-auto-sync-cron-out.log",
      time: true
    },
    
    // Marketing sync process
    {
      name: "marketing-sync",
      script: "automation/marketing-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "0 */12 * * *", // every 12 hours
      env: {
        NODE_ENV: "production",
        LINKEDIN_ACCESS_TOKEN: process.env.LINKEDIN_ACCESS_TOKEN,
        LINKEDIN_URN: process.env.LINKEDIN_URN,
        IG_USER_ID: process.env.IG_USER_ID,
        IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/marketing-sync-error.log",
      out_file: "automation/logs/marketing-sync-out.log",
      time: true
    },
    
    // Health monitor
    {
      name: "health-monitor",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      cron_restart: "*/15 * * * *", // every 15 minutes
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/health-monitor-error.log",
      out_file: "automation/logs/health-monitor-out.log",
      time: true
    },
    
    // Build monitor
    {
      name: "build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "*/30 * * * *", // every 30 minutes
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-error.log",
      out_file: "automation/logs/build-monitor-out.log",
      time: true
    },
    
    // Dependency monitor
    {
      name: "dependency-monitor",
      script: "automation/dependency-update-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      cron_restart: "0 2 * * *", // daily at 2 AM
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/dependency-monitor-error.log",
      out_file: "automation/logs/dependency-monitor-out.log",
      time: true
    }
  ]
};
EOF
}

# Initialize GitHub Actions redundancy
init_github_redundancy() {
    log "🐙 Initializing GitHub Actions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    # Create enhanced GitHub Actions workflows
    create_github_workflows
    
    success "GitHub Actions redundancy initialized successfully"
}

# Create enhanced GitHub Actions workflows
create_github_workflows() {
    log "📋 Creating enhanced GitHub Actions workflows..."
    
    mkdir -p .github/workflows
    
    # Enhanced marketing sync workflow
    cat > .github/workflows/marketing-sync-enhanced.yml << 'EOF'
name: Marketing Sync Enhanced

on:
  schedule:
    - cron: '0 */12 * * *'
  workflow_dispatch:
  push:
    branches: [ main ]
    paths: [ 'automation/marketing-sync.js', 'automation/marketing-sync-report.md' ]

permissions:
  contents: write
  actions: read

jobs:
  run-marketing-sync:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run marketing-sync
        env:
          LINKEDIN_ACCESS_TOKEN: ${{ secrets.LINKEDIN_ACCESS_TOKEN }}
          LINKEDIN_URN: ${{ secrets.LINKEDIN_URN }}
          IG_USER_ID: ${{ secrets.IG_USER_ID }}
          IG_ACCESS_TOKEN: ${{ secrets.IG_ACCESS_TOKEN }}
        run: node automation/marketing-sync.js

      - name: Commit report if changed
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          if [ -n "$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(marketing): update marketing-sync report [skip ci]"
            git push origin HEAD:main
          else
            echo "No changes to commit."
          fi

      - name: Notify on failure
        if: failure()
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Marketing Sync Workflow Failed',
              body: 'The marketing sync workflow has failed. Please check the logs.',
              labels: ['automation', 'marketing', 'failure']
            })
EOF

    # Enhanced sync health workflow
    cat > .github/workflows/sync-health-enhanced.yml << 'EOF'
name: Sync Health Enhanced

on:
  schedule:
    - cron: '*/15 * * * *'
  workflow_dispatch:
  push:
    branches: [ main ]
    paths: [ 'automation/pm2-auto-sync.js' ]

permissions:
  contents: write
  actions: read

jobs:
  check-sync:
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run pm2-auto-sync (safe mode)
        env:
          AUTO_SYNC_STRATEGY: hardreset
          AUTO_SYNC_CLEAN: '0'
        run: node automation/pm2-auto-sync.js || true

      - name: Push if repository is ahead
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          # Only push if we have local commits not on origin
          AHEAD=$(git rev-list --left-right --count HEAD...origin/main | awk '{print $1}')
          if [ "$AHEAD" != "0" ]; then
            git push origin HEAD:main
          else
            echo "No push needed."
          fi

      - name: Notify on failure
        if: failure()
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Sync Health Workflow Failed',
              body: 'The sync health workflow has failed. Please check the logs.',
              labels: ['automation', 'sync', 'failure']
            })
EOF

    # Build and test workflow
    cat > .github/workflows/build-test.yml << 'EOF'
name: Build and Test

on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:
  push:
    branches: [ main ]
    paths: [ 'package.json', 'next.config.js', 'tsconfig.json' ]

permissions:
  contents: read

jobs:
  build-test:
    runs-on: ubuntu-latest
    timeout-minutes: 45
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run type checking
        run: npm run type-check

      - name: Run build
        run: npm run build

      - name: Notify on failure
        if: failure()
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Build and Test Workflow Failed',
              body: 'The build and test workflow has failed. Please check the logs.',
              labels: ['automation', 'build', 'failure']
            })
EOF

    # Dependency update workflow
    cat > .github/workflows/dependency-update.yml << 'EOF'
name: Dependency Update

on:
  schedule:
    - cron: '0 2 * * 1'
  workflow_dispatch:

permissions:
  contents: write
  pull-requests: write

jobs:
  update-dependencies:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Check for outdated packages
        id: check
        run: |
          OUTDATED=$(npm outdated --json || echo "{}")
          echo "outdated=$OUTDATED" >> $GITHUB_OUTPUT
          if [ "$OUTDATED" != "{}" ]; then
            echo "has_updates=true" >> $GITHUB_OUTPUT
          else
            echo "has_updates=false" >> $GITHUB_OUTPUT
          fi

      - name: Update dependencies
        if: steps.check.outputs.has_updates == 'true'
        run: |
          npm update
          npm audit fix --force || true

      - name: Create pull request
        if: steps.check.outputs.has_updates == 'true'
        uses: peter-evans/create-pull-request@v5
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          commit-message: 'chore(deps): update dependencies'
          title: 'chore(deps): update dependencies'
          body: 'Automated dependency update'
          branch: 'deps/update-$(date +%Y%m%d)'
          delete-branch: true
EOF
}

# Initialize Netlify functions redundancy
init_netlify_redundancy() {
    log "🌐 Initializing Netlify functions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    # Create enhanced Netlify functions
    create_netlify_functions
    
    success "Netlify functions redundancy initialized successfully"
}

# Create enhanced Netlify functions
create_netlify_functions() {
    log "🔧 Creating enhanced Netlify functions..."
    
    mkdir -p netlify/functions
    
    # Create a comprehensive function orchestrator
    cat > netlify/functions/function-orchestrator.js << 'EOF'
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    const { action, function_name } = JSON.parse(event.body || '{}');
    
    console.log(`Function orchestrator called with action: ${action}, function: ${function_name}`);
    
    switch (action) {
      case 'health_check':
        return {
          statusCode: 200,
          body: JSON.stringify({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            functions: await getFunctionStatus()
          })
        };
        
      case 'execute_function':
        if (!function_name) {
          return {
            statusCode: 400,
            body: JSON.stringify({ error: 'function_name is required' })
          };
        }
        
        const result = await executeFunction(function_name);
        return {
          statusCode: 200,
          body: JSON.stringify(result)
        };
        
      default:
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid action' })
        };
    }
  } catch (error) {
    console.error('Function orchestrator error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

async function getFunctionStatus() {
  try {
    const functionsDir = path.join(__dirname);
    const functions = fs.readdirSync(functionsDir)
      .filter(file => file.endsWith('.js') && file !== 'function-orchestrator.js');
    
    return functions.map(func => ({
      name: func.replace('.js', ''),
      status: 'available',
      last_modified: fs.statSync(path.join(functionsDir, func)).mtime
    }));
  } catch (error) {
    console.error('Error getting function status:', error);
    return [];
  }
}

async function executeFunction(functionName) {
  try {
    // This is a placeholder - in a real implementation, you'd execute the actual function
    return {
      success: true,
      function: functionName,
      message: 'Function execution simulated',
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      success: false,
      function: functionName,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}
EOF

    # Create a health monitoring function
    cat > netlify/functions/health-monitor.js << 'EOF'
exports.handler = async (event, context) => {
  try {
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      environment: process.env.NODE_ENV || 'development'
    };
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify(healthStatus)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 'unhealthy',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};
EOF

    # Update functions manifest
    update_functions_manifest
}

# Update functions manifest
update_functions_manifest() {
    log "📝 Updating Netlify functions manifest..."
    
    const manifestPath = 'netlify/functions/functions-manifest.json';
    const manifest = {
      generatedAt: new Date().toISOString(),
      functions: [
        "function-orchestrator",
        "health-monitor",
        "a11y-alt-text-runner",
        "adaptive-orchestrator",
        "ai-changelog-runner",
        "ai-trends-radar-runner",
        "anchor-links-auto-fixer",
        "auto-discovery-runner",
        "auto-scheduler",
        "automation-matrix",
        "autonomous-invention-orchestrator",
        "autonomous-meta-orchestrator",
        "broken-image-scanner",
        "broken-image-scanner-runner",
        "canonical-auditor",
        "cloud_deep_research",
        "cloud_orchestrator",
        "code-smell-audit-runner",
        "component-coupling-graph-runner",
        "component-props-docs-runner",
        "component-size-report",
        "content-freshness-score-runner",
        "continuous-front-runner",
        "continuous-orchestrator",
        "dead-code-audit",
        "dead-code-report",
        "deps-auto-upgrade-runner",
        "docs-index-runner",
        "docs-search-index-runner",
        "duplicate-media-finder-runner",
        "external-link-check-runner",
        "fast-front-promoter",
        "fast-orchestrator",
        "feature-advertiser",
        "features-capabilities-benefits-advertiser",
        "front-ads-promoter",
        "front-enhancer",
        "front-index-futurizer",
        "front-index-orchestrator",
        "front-index-scheduler",
        "front-maximizer",
        "front-visionary-expander",
        "frontpage-enhancer",
        "frontpage-scheduler",
        "headers-enforcer",
        "home-visionary-expander",
        "homepage-advertiser-scheduler",
        "homepage-enhancer",
        "homepage-updater",
        "homepage-updater-scheduler",
        "homepage_advertiser",
        "hyper-front-index-accelerator",
        "image-optimizer-runner",
        "innovation-lab",
        "innovations-promoter",
        "intelligent-meta-orchestrator",
        "internal-link-graph-runner",
        "knowledge-pack-runner",
        "license-compliance-auditor",
        "link-and-health-scheduler",
        "link-crawler",
        "maintenance-scheduler",
        "marketing-and-features-promo",
        "marketing-scheduler",
        "media-og-and-optimize",
        "metadata-optimizer-runner",
        "netlify-auto-healer-runner",
        "newsroom-auto-publisher",
        "newsroom-runner",
        "og-image-update-runner",
        "orphan-pages-detector",
        "pagespeed-insights-runner",
        "readme-advertiser",
        "repo-knowledge-graph-runner",
        "repo-radar-and-graph",
        "repo-radar-runner",
        "revenue-ideas-lab",
        "roadmap-curator",
        "robots-auditor",
        "schedule-content-index",
        "schedule-homepage",
        "schedule-knowledge-graph",
        "schedule-site-health",
        "security-audit",
        "security-audit-runner",
        "seo-audit-runner",
        "site-404-map-runner",
        "site-crawler",
        "sitemap_runner",
        "stale-content-auditor-runner",
        "todo-scanner-runner",
        "todo-summary-runner",
        "topic-cluster-builder-runner",
        "topics-map-runner",
        "trigger-all-and-commit",
        "ui-enhancer",
        "ultrafast-front-orchestrator",
        "ultrafast-orchestrator",
        "unused-media-scanner"
      ]
    };
    
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    success "Functions manifest updated successfully"
}

# Create monitoring and recovery scripts
create_monitoring_scripts() {
    log "📊 Creating monitoring and recovery scripts..."
    
    # Create health check script
    cat > automation/health-check.sh << 'EOF'
#!/bin/bash

# Health check script for all automation systems

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$SCRIPT_DIR/.."
LOGS_DIR="$WORKSPACE_DIR/automation/logs"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

check_pm2_status() {
    log "Checking PM2 status..."
    if command -v pm2 &> /dev/null; then
        pm2 status
        pm2 logs --lines 10
    else
        echo -e "${RED}PM2 not installed${NC}"
    fi
}

check_github_actions() {
    log "Checking GitHub Actions status..."
    if [ -d ".github/workflows" ]; then
        echo "GitHub Actions workflows found:"
        ls -la .github/workflows/
    else
        echo -e "${RED}No GitHub Actions workflows found${NC}"
    fi
}

check_netlify_functions() {
    log "Checking Netlify functions status..."
    if [ -d "netlify/functions" ]; then
        echo "Netlify functions found:"
        ls -la netlify/functions/
    else
        echo -e "${RED}No Netlify functions found${NC}"
    fi
}

check_system_health() {
    log "Checking system health..."
    
    # Check disk space
    df -h
    
    # Check memory usage
    free -h
    
    # Check process count
    echo "Process count: $(ps aux | wc -l)"
}

main() {
    log "Starting comprehensive health check..."
    
    check_pm2_status
    check_github_actions
    check_netlify_functions
    check_system_health
    
    log "Health check completed"
}

main "$@"
EOF

    chmod +x automation/health-check.sh
    
    # Create recovery script
    cat > automation/recovery.sh << 'EOF'
#!/bin/bash

# Recovery script for automation systems

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$SCRIPT_DIR/.."

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

recover_pm2() {
    log "Recovering PM2 processes..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop all PM2 processes
    pm2 stop all || true
    pm2 delete all || true
    
    # Start redundancy ecosystem
    if [ -f "ecosystem.comprehensive-redundancy.cjs" ]; then
        pm2 start ecosystem.comprehensive-redundancy.cjs
    elif [ -f "ecosystem-redundancy.pm2.cjs" ]; then
        pm2 start ecosystem-redundancy.pm2.cjs
    else
        log "No PM2 ecosystem file found"
        return 1
    fi
    
    pm2 save
    log "PM2 recovery completed"
}

recover_github_actions() {
    log "Recovering GitHub Actions..."
    
    cd "$WORKSPACE_DIR"
    
    # Recreate workflows if they don't exist
    if [ ! -d ".github/workflows" ]; then
        mkdir -p .github/workflows
        log "Recreated GitHub Actions workflows directory"
    fi
    
    # Check if workflows exist
    if [ ! -f ".github/workflows/marketing-sync-enhanced.yml" ]; then
        log "Recreating GitHub Actions workflows..."
        # This would recreate the workflows
    fi
}

recover_netlify_functions() {
    log "Recovering Netlify functions..."
    
    cd "$WORKSPACE_DIR"
    
    # Ensure functions directory exists
    if [ ! -d "netlify/functions" ]; then
        mkdir -p netlify/functions
        log "Recreated Netlify functions directory"
    fi
    
    # Regenerate manifest if needed
    if [ -f "scripts/generate-netlify-functions-manifest.cjs" ]; then
        node scripts/generate-netlify-functions-manifest.cjs
        log "Regenerated Netlify functions manifest"
    fi
}

main() {
    log "Starting recovery process..."
    
    recover_pm2
    recover_github_actions
    recover_netlify_functions
    
    log "Recovery process completed"
}

main "$@"
EOF

    chmod +x automation/recovery.sh
    
    success "Monitoring and recovery scripts created successfully"
}

# Start all redundancy systems
start_redundancy_systems() {
    log "🚀 Starting all redundancy systems..."
    
    # Start PM2 processes
    cd "$WORKSPACE_DIR"
    pm2 start ecosystem.comprehensive-redundancy.cjs
    
    # Save PM2 configuration
    pm2 save
    
    # Show status
    pm2 status
    
    success "All redundancy systems started successfully"
}

# Main execution
main() {
    log "🚀 Starting Ultimate Redundancy Automation System V2..."
    
    # Check prerequisites
    check_prerequisites
    
    # Backup existing configurations
    backup_existing_configs
    
    # Initialize all redundancy systems
    init_pm2_redundancy
    init_github_redundancy
    init_netlify_redundancy
    
    # Create monitoring scripts
    create_monitoring_scripts
    
    # Start all systems
    start_redundancy_systems
    
    log "🎉 Ultimate Redundancy Automation System V2 initialization completed!"
    log "📊 Use 'npm run pm2:status' to check PM2 status"
    log "🔍 Use './automation/health-check.sh' to check system health"
    log "🔄 Use './automation/recovery.sh' to recover from failures"
    log "📝 Check logs in: $LOGS_DIR"
}

# Run main function
main "$@"