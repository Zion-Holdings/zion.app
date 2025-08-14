const fs = require('fs');
const path = require('path');

class ControlGuard {
  constructor() {
    this.controlPath = path.join(__dirname, '..', 'control.json');
    this.control = this.loadControl();
  }

  loadControl() {
    try {
      if (fs.existsSync(this.controlPath)) {
        return JSON.parse(fs.readFileSync(this.controlPath, 'utf8'));
      }
    } catch (error) {
      console.warn('Failed to load control.json:', error.message);
    }
    return {
      globalPause: false,
      functions: {},
      workflows: {}
    };
  }

  isGloballyPaused() {
    return this.control.globalPause === true;
  }

  isFunctionEnabled(functionName) {
    if (this.isGloballyPaused()) return false;
    return this.control.functions?.[functionName] !== false;
  }

  isWorkflowEnabled(workflowName) {
    if (this.isGloballyPaused()) return false;
    return this.control.workflows?.[workflowName] !== false;
  }

  getThrottle(key) {
    return this.control.throttles?.[key];
  }

  getBudget(service) {
    return this.control.budgets?.[service];
  }

  getSchedule(type) {
    return this.control.schedules?.[type];
  }

  getMarketingConfig(platform) {
    return this.control.marketing?.[platform];
  }

  shouldSkipMarketing(platform) {
    const config = this.getMarketingConfig(platform);
    if (!config?.enabled) return true;
    
    // Check quiet hours
    if (config.quietHours) {
      const now = new Date();
      const currentHour = now.getHours();
      const startHour = parseInt(config.quietHours.start.split(':')[0]);
      const endHour = parseInt(config.quietHours.end.split(':')[0]);
      
      if (startHour > endHour) {
        // Overnight quiet hours (e.g., 22:00 to 08:00)
        if (currentHour >= startHour || currentHour < endHour) return true;
      } else {
        // Same-day quiet hours
        if (currentHour >= startHour && currentHour < endHour) return true;
      }
    }
    
    return false;
  }

  // Early return helper for Netlify functions
  earlyReturnIfDisabled(functionName) {
    if (!this.isFunctionEnabled(functionName)) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: 'disabled',
          function: functionName,
          timestamp: new Date().toISOString()
        })
      };
    }
    return null;
  }

  // Early return helper for GitHub Actions
  shouldSkipWorkflow(workflowName) {
    return !this.isWorkflowEnabled(workflowName);
  }
}

module.exports = ControlGuard;
