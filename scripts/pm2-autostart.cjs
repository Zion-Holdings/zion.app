#!/usr/bin/env node

/**
 * PM2 Autostart
 * Manages PM2 startup configuration and autostart functionality
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PM2Autostart {
  constructor() {
    this.configDir = path.join(__dirname, '..', 'automation');
    this.ecosystemFiles = this.findEcosystemFiles();
  }

  findEcosystemFiles() {
    try {
      const files = fs.readdirSync(this.configDir)
        .filter(file => file.startsWith('ecosystem') && file.endsWith('.cjs'))
        .map(file => path.join(this.configDir, file));
      return files;
    } catch (error) {
      console.error('❌ Error reading automation directory:', error.message);
      return [];
    }
  }

  async setupAutostart() {
    console.log('🚀 Setting up PM2 autostart...');
    
    try {
      // Save current PM2 configuration
      execSync('pm2 save', { stdio: 'inherit' });
      console.log('✅ PM2 configuration saved');
      
      // Setup startup script
      execSync('pm2 startup', { stdio: 'inherit' });
      console.log('✅ PM2 startup script generated');
      
      // Save again after startup setup
      execSync('pm2 save', { stdio: 'inherit' });
      console.log('✅ PM2 configuration saved with startup');
      
      return true;
    } catch (error) {
      console.error('❌ Failed to setup autostart:', error.message);
      return false;
    }
  }

  async disableAutostart() {
    console.log('🛑 Disabling PM2 autostart...');
    
    try {
      // Uninstall startup script
      execSync('pm2 unstartup', { stdio: 'inherit' });
      console.log('✅ PM2 autostart disabled');
      
      return true;
    } catch (error) {
      console.error('❌ Failed to disable autostart:', error.message);
      return false;
    }
  }

  async getAutostartStatus() {
    try {
      const output = execSync('pm2 startup', { encoding: 'utf8' });
      return {
        enabled: !output.includes('You have to run this command as root'),
        output: output
      };
    } catch (error) {
      return {
        enabled: false,
        error: error.message
      };
    }
  }

  async listSavedProcesses() {
    try {
      const output = execSync('pm2 list', { encoding: 'utf8' });
      return output;
    } catch (error) {
      return `Error listing processes: ${error.message}`;
    }
  }

  async restoreProcesses() {
    console.log('🔄 Restoring PM2 processes...');
    
    try {
      execSync('pm2 resurrect', { stdio: 'inherit' });
      console.log('✅ PM2 processes restored');
      return true;
    } catch (error) {
      console.error('❌ Failed to restore processes:', error.message);
      return false;
    }
  }

  async saveCurrentState() {
    console.log('💾 Saving current PM2 state...');
    
    try {
      execSync('pm2 save', { stdio: 'inherit' });
      console.log('✅ Current state saved');
      return true;
    } catch (error) {
      console.error('❌ Failed to save state:', error.message);
      return false;
    }
  }

  async generateStartupScript() {
    console.log('📝 Generating startup script...');
    
    const scriptContent = `#!/bin/bash
# PM2 Startup Script for Zion Tech Group
# Generated on ${new Date().toISOString()}

# Set environment
export NODE_ENV=production
export PM2_HOME=/home/\$USER/.pm2

# Start PM2 daemon
pm2 resurrect

# Wait for processes to start
sleep 5

# Check status
pm2 status

echo "PM2 startup complete at \$(date)"
`;

    const scriptPath = path.join(__dirname, '..', 'start-pm2.sh');
    fs.writeFileSync(scriptPath, scriptContent);
    fs.chmodSync(scriptPath, '755');
    
    console.log(`✅ Startup script generated: ${scriptPath}`);
    return scriptPath;
  }

  async createSystemdService() {
    console.log('🔧 Creating systemd service...');
    
    const serviceContent = `[Unit]
Description=PM2 Process Manager for Zion Tech Group
After=network.target

[Service]
Type=forking
User=${process.env.USER || 'root'}
WorkingDirectory=${process.cwd()}
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
ExecStart=/usr/bin/pm2 resurrect
ExecReload=/usr/bin/pm2 reload all
ExecStop=/usr/bin/pm2 kill
Restart=on-failure

[Install]
WantedBy=multi-user.target
`;

    const servicePath = path.join(__dirname, '..', 'zion-pm2.service');
    fs.writeFileSync(servicePath, serviceContent);
    
    console.log(`✅ Systemd service file generated: ${servicePath}`);
    console.log('💡 To install: sudo cp zion-pm2.service /etc/systemd/system/ && sudo systemctl enable zion-pm2');
    
    return servicePath;
  }

  async showHelp() {
    console.log('PM2 Autostart Manager');
    console.log('=====================');
    console.log('');
    console.log('Available ecosystem files:');
    this.ecosystemFiles.forEach(file => {
      console.log(`  - ${path.basename(file)}`);
    });
    console.log('');
    console.log('Commands:');
    console.log('  setup        - Setup PM2 autostart');
    console.log('  disable      - Disable PM2 autostart');
    console.log('  status       - Show autostart status');
    console.log('  list         - List saved processes');
    console.log('  restore      - Restore saved processes');
    console.log('  save         - Save current state');
    console.log('  startup      - Generate startup script');
    console.log('  systemd      - Create systemd service');
    console.log('  help         - Show this help');
  }
}

// CLI execution
async function main() {
  const autostart = new PM2Autostart();
  const command = process.argv[2] || 'help';

  try {
    switch (command) {
      case 'setup':
        await autostart.setupAutostart();
        break;
        
      case 'disable':
        await autostart.disableAutostart();
        break;
        
      case 'status':
        const status = await autostart.getAutostartStatus();
        console.log('Autostart Status:', status.enabled ? 'Enabled' : 'Disabled');
        if (status.output) console.log(status.output);
        break;
        
      case 'list':
        const processes = await autostart.listSavedProcesses();
        console.log(processes);
        break;
        
      case 'restore':
        await autostart.restoreProcesses();
        break;
        
      case 'save':
        await autostart.saveCurrentState();
        break;
        
      case 'startup':
        await autostart.generateStartupScript();
        break;
        
      case 'systemd':
        await autostart.createSystemdService();
        break;
        
      case 'help':
      default:
        autostart.showHelp();
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = PM2Autostart;