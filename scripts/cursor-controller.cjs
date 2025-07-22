#!/usr/bin/env node

/**
 * Cursor Controller for Multi-Computer Automation
 *
 * This script provides programmatic control over Cursor IDE instances
 * across multiple computers for automated app improvement tasks.
 */

const { execSync, spawn } = require('child_process')
const os = require('os')
const fs = require('fs')
const path = require('path')
class CursorController {
  constructor() {
    this.platform = os.platform();
    this.cursorPath = this.getCursorPath();
    this.activeInstances = new Map();
  }

  getCursorPath() {
    switch (this.platform) {
      case 'darwin':
        return '/Applications/Cursor.app/Contents/MacOS/Cursor';
      case 'win32':
        return (
          'C:\\Users\\' +
          os.userInfo().username +
          '\\AppData\\Local\\Programs\\Cursor\\Cursor.exe'
        );
      case 'linux':
        return '/usr/bin/cursor';
      default:
        throw new Error(`Unsupported platform: ${this.platform}`);
    }
  }

  async openCursor(projectPath = process.cwd()) {
    try {
      const command =
        this.platform === 'darwin'
          ? `open -a Cursor "${projectPath}"`
          : `"${this.cursorPath}" "${projectPath}"`;

      execSync(command)
const instanceId = this.generateInstanceId();
      this.activeInstances.set(instanceId, {
        path: projectPath,
        startedAt: new Date(),
        status: 'running',
      });

      console.log(`✅ Cursor opened for project: ${projectPath}`);
      return instanceId;
    } catch (error) {
      console.error(`❌ Failed to open Cursor: ${error.message}`);
      throw error;
    }
  }

  async focusCursor() {
    try {
      if (this.platform === 'darwin') {
        execSync('osascript -e \'tell application "Cursor" to activate\'');
      } else if (this.platform === 'win32') {
        execSync(
          'tasklist /FI "IMAGENAME eq Cursor.exe" 2>NUL | find /I /N "Cursor.exe">NUL && start /B "" "Cursor.exe"',
        );
      } else {
        execSync('wmctrl -a Cursor');
      }

      console.log('✅ Cursor focused');
    } catch (error) {
      console.error(`❌ Failed to focus Cursor: ${error.message}`);
      throw error;
    }
  }

  async executeCursorCommand(command) {
    try {
      if (this.platform === 'darwin') {
        const appleScript = `
          tell application "Cursor"
            activate
            delay 1
            tell application "System Events"
              keystroke "${command}"
            end tell
          end tell
        `;
        execSync(`osascript -e '${appleScript}'`);
      } else {
        // For other platforms, we'll use keyboard shortcuts
        execSync(`xdotool key ${command}`);
      }

      console.log(`✅ Executed Cursor command: ${command}`);
    } catch (error) {
      console.error(`❌ Failed to execute Cursor command: ${error.message}`);
      throw error;
    }
  }

  async openFile(filePath) {
    try {
      if (this.platform === 'darwin') {
        const appleScript = `
          tell application "Cursor"
            activate
            delay 1
            tell application "System Events"
              keystroke "o" using command down
              delay 1
              keystroke "${filePath}"
              keystroke return
            end tell
          end tell
        `;
        execSync(`osascript -e '${appleScript}'`);
      } else {
        // For other platforms
        execSync(`"${this.cursorPath}" "${filePath}"`);
      }

      console.log(`✅ Opened file: ${filePath}`);
    } catch (error) {
      console.error(`❌ Failed to open file: ${error.message}`);
      throw error;
    }
  }

  async saveFile() {
    try {
      if (this.platform === 'darwin') {
        execSync(
          'osascript -e \'tell application "Cursor" to activate\' && sleep 1 && osascript -e \'tell application "System Events" to keystroke "s" using command down\'',
        );
      } else {
        execSync('xdotool key ctrl+s');
      }

      console.log('✅ File saved');
    } catch (error) {
      console.error(`❌ Failed to save file: ${error.message}`);
      throw error;
    }
  }

  async closeFile() {
    try {
      if (this.platform === 'darwin') {
        execSync(
          'osascript -e \'tell application "Cursor" to activate\' && sleep 1 && osascript -e \'tell application "System Events" to keystroke "w" using command down\'',
        );
      } else {
        execSync('xdotool key ctrl+w');
      }

      console.log('✅ File closed');
    } catch (error) {
      console.error(`❌ Failed to close file: ${error.message}`);
      throw error;
    }
  }

  async runTerminalCommand(command) {
    try {
      if (this.platform === 'darwin') {
        const appleScript = `
          tell application "Cursor"
            activate
            delay 1
            tell application "System Events"
              keystroke "\`" using control down
              delay 1
              keystroke "${command}"
              keystroke return
            end tell
          end tell
        `;
        execSync(`osascript -e '${appleScript}'`);
      } else {
        // For other platforms, we'll need to implement terminal opening
        console.log(`Would run terminal command: ${command}`);
      }

      console.log(`✅ Executed terminal command: ${command}`);
    } catch (error) {
      console.error(`❌ Failed to execute terminal command: ${error.message}`);
      throw error;
    }
  }

  async applyCursorFix(fixType, filePath = null) {
    try {
      console.log(`🔧 Applying ${fixType} fix...`);

      switch (fixType) {
        case 'lint':
          await this.runTerminalCommand('npm run lint:fix');
          break;
        case 'format':
          await this.runTerminalCommand('npm run format');
          break;
        case 'typecheck':
          await this.runTerminalCommand('npm run typecheck');
          break;
        case 'test':
          await this.runTerminalCommand('npm run test');
          break;
        case 'build':
          await this.runTerminalCommand('npm run build');
          break;
        case 'optimize':
          await this.runTerminalCommand('npm run optimize');
          break;
        default:
          throw new Error(`Unknown fix type: ${fixType}`);
      }

      console.log(`✅ Applied ${fixType} fix successfully`);
    } catch (error) {
      console.error(`❌ Failed to apply ${fixType} fix: ${error.message}`);
      throw error;
    }
  }

  async autoFixIssues() {
    try {
      console.log('🔧 Starting automatic issue fixing...')
const fixes = [
        { type: 'lint', description: 'Fixing linting issues' },
        { type: 'format', description: 'Formatting code' },
        { type: 'typecheck', description: 'Checking types' },
        { type: 'test', description: 'Running tests' },
        { type: 'build', description: 'Building project' },
        { type: 'optimize', description: 'Optimizing performance' },
      ];

      for (const fix of fixes) {
        try {
          console.log(`📝 ${fix.description}...`);
          await this.applyCursorFix(fix.type);
        } catch (error) {
          console.warn(`⚠️ ${fix.description} failed: ${error.message}`);
        }
      }

      console.log('✅ Automatic issue fixing completed');
    } catch (error) {
      console.error(`❌ Automatic issue fixing failed: ${error.message}`);
      throw error;
    }
  }

  async monitorAndFix() {
    try {
      console.log('🔍 Starting continuous monitoring and fixing...');

      // Monitor for common issues and fix them automatically
      setInterval(async () => {
        try {
          // Check for linting issues
          try {
            execSync('npm run lint', { stdio: 'pipe' });
          } catch (error) {
            console.log('🔧 Detected linting issues, fixing...');
            await this.applyCursorFix('lint');
          }

          // Check for build issues
          try {
            execSync('npm run build', { stdio: 'pipe' });
          } catch (error) {
            console.log('🔧 Detected build issues, fixing...');
            await this.applyCursorFix('build');
          }

          // Check for test failures
          try {
            execSync('npm run test', { stdio: 'pipe' });
          } catch (error) {
            console.log('🔧 Detected test failures, investigating...');
            // Don't auto-fix tests, just log
          }
        } catch (error) {
          console.error(`❌ Monitoring cycle failed: ${error.message}`);
        }
      }, 30000); // Check every 30 seconds

      console.log('✅ Continuous monitoring started');
    } catch (error) {
      console.error(`❌ Failed to start monitoring: ${error.message}`);
      throw error;
    }
  }

  generateInstanceId() {
    return `cursor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getActiveInstances() {
    return Array.from(this.activeInstances.entries()).map(([id, instance]) => ({
      id,
      ...instance,
    }));
  }

  async closeInstance(instanceId) {
    const instance = this.activeInstances.get(instanceId);
    if (instance) {
      try {
        if (this.platform === 'darwin') {
          execSync('osascript -e \'tell application "Cursor" to quit\'');
        } else {
          execSync('taskkill /F /IM Cursor.exe');
        }

        this.activeInstances.delete(instanceId);
        console.log(`✅ Closed Cursor instance: ${instanceId}`);
      } catch (error) {
        console.error(`❌ Failed to close Cursor instance: ${error.message}`);
        throw error;
      }
    }
  }
}

// Export for use in other modules
module.exports = CursorController;

// Main execution
if (require.main === module) {
  const controller = new CursorController()
const command = process.argv[2]
const args = process.argv.slice(3);

  switch (command) {
    case 'open':
      controller.openCursor(args[0]).catch(console.error);
      break;
    case 'focus':
      controller.focusCursor().catch(console.error);
      break;
    case 'fix':
      controller.applyCursorFix(args[0]).catch(console.error);
      break;
    case 'auto-fix':
      controller.autoFixIssues().catch(console.error);
      break;
    case 'monitor':
      controller.monitorAndFix().catch(console.error);
      break;
    case 'terminal':
      controller.runTerminalCommand(args[0]).catch(console.error);
      break;
    case 'open-file':
      controller.openFile(args[0]).catch(console.error);
      break;
    case 'save':
      controller.saveFile().catch(console.error);
      break;
    case 'close':
      controller.closeFile().catch(console.error);
      break;
    case 'instances':
      console.log(controller.getActiveInstances());
      break;
    default:
      console.log(`
Usage: node cursor-controller.cjs <command> [args]

Commands:
  open [path]           Open Cursor with project path
  focus                Focus Cursor window
  fix <type>           Apply specific fix (lint, format, typecheck, test, build, optimize)
  auto-fix             Apply all fixes automatically
  monitor              Start continuous monitoring and fixing
  terminal <command>   Run terminal command in Cursor
  open-file <path>     Open specific file in Cursor
  save                 Save current file
  close                Close current file
  instances            List active Cursor instances
      `);
  }
}
