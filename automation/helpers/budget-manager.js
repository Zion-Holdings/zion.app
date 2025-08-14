const fs = require('fs');
const path = require('path');

class BudgetManager {
  constructor(budgetDir = 'automation/budgets') {
    this.budgetDir = path.resolve(process.cwd(), budgetDir);
    this.ensureBudgetDir();
    this.budgets = this.loadBudgets();
  }

  ensureBudgetDir() {
    if (!fs.existsSync(this.budgetDir)) {
      fs.mkdirSync(this.budgetDir, { recursive: true });
    }
  }

  loadBudgets() {
    const budgets = {};
    
    try {
      const files = fs.readdirSync(this.budgetDir);
      
      for (const file of files) {
        if (!file.endsWith('.json')) continue;
        
        const service = file.replace('.json', '');
        const budgetFile = path.join(this.budgetDir, file);
        
        try {
          const budgetData = JSON.parse(fs.readFileSync(budgetFile, 'utf8'));
          budgets[service] = this.validateAndResetBudget(budgetData);
        } catch (error) {
          console.warn(`Failed to load budget for ${service}:`, error.message);
        }
      }
    } catch (error) {
      console.warn('Failed to read budget directory:', error.message);
    }
    
    return budgets;
  }

  validateAndResetBudget(budgetData) {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    
    // Check if we need to reset daily budget
    if (budgetData.date !== today) {
      budgetData.date = today;
      budgetData.dailySpent = 0;
      budgetData.dailyResetCount = (budgetData.dailyResetCount || 0) + 1;
    }
    
    // Check if we need to reset monthly budget
    const currentMonth = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
    if (budgetData.month !== currentMonth) {
      budgetData.month = currentMonth;
      budgetData.monthlySpent = 0;
      budgetData.monthlyResetCount = (budgetData.monthlyResetCount || 0) + 1;
    }
    
    return budgetData;
  }

  /**
   * Get budget for a specific service
   * @param {string} service - Service name (e.g., 'openai', 'github')
   * @returns {object|null} - Budget data or null if not found
   */
  getBudget(service) {
    return this.budgets[service] || null;
  }

  /**
   * Check if a service has exceeded its daily budget
   * @param {string} service - Service name
   * @returns {boolean} - True if daily budget exceeded
   */
  isDailyBudgetExceeded(service) {
    const budget = this.getBudget(service);
    if (!budget) return false;
    
    return budget.dailySpent >= budget.dailyLimit;
  }

  /**
   * Check if a service has exceeded its monthly budget
   * @param {string} service - Service name
   * @returns {boolean} - True if monthly budget exceeded
   */
  isMonthlyBudgetExceeded(service) {
    const budget = this.getBudget(service);
    if (!budget) return false;
    
    return budget.monthlySpent >= budget.monthlyLimit;
  }

  /**
   * Record spending for a service
   * @param {string} service - Service name
   * @param {number} amount - Amount spent (in USD for OpenAI, in actions for GitHub)
   * @param {string} description - Description of the spending
   * @returns {boolean} - True if spending recorded successfully
   */
  recordSpending(service, amount, description = '') {
    try {
      if (!this.budgets[service]) {
        // Initialize budget if it doesn't exist
        this.budgets[service] = {
          date: new Date().toISOString().split('T')[0],
          month: new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0'),
          dailyLimit: this.getDefaultDailyLimit(service),
          monthlyLimit: this.getDefaultMonthlyLimit(service),
          dailySpent: 0,
          monthlySpent: 0,
          dailyResetCount: 0,
          monthlyResetCount: 0,
          transactions: []
        };
      }
      
      const budget = this.budgets[service];
      
      // Validate and reset if needed
      this.validateAndResetBudget(budget);
      
      // Record spending
      budget.dailySpent += amount;
      budget.monthlySpent += amount;
      
      // Record transaction
      budget.transactions.push({
        timestamp: new Date().toISOString(),
        amount,
        description,
        dailySpent: budget.dailySpent,
        monthlySpent: budget.monthlySpent
      });
      
      // Keep only last 100 transactions
      if (budget.transactions.length > 100) {
        budget.transactions = budget.transactions.slice(-100);
      }
      
      // Save to file
      this.saveBudget(service);
      
      return true;
    } catch (error) {
      console.warn(`Failed to record spending for ${service}:`, error.message);
      return false;
    }
  }

  /**
   * Get default daily limit for a service
   * @param {string} service - Service name
   * @returns {number} - Default daily limit
   */
  getDefaultDailyLimit(service) {
    const defaults = {
      openai: 2.50,
      github: 2000
    };
    return defaults[service] || 100;
  }

  /**
   * Get default monthly limit for a service
   * @param {string} service - Service name
   * @returns {number} - Default monthly limit
   */
  getDefaultMonthlyLimit(service) {
    const defaults = {
      openai: 50.00,
      github: 50000
    };
    return defaults[service] || 1000;
  }

  /**
   * Save budget to file
   * @param {string} service - Service name
   */
  saveBudget(service) {
    try {
      const budgetFile = path.join(this.budgetDir, `${service}.json`);
      fs.writeFileSync(budgetFile, JSON.stringify(this.budgets[service], null, 2));
    } catch (error) {
      console.warn(`Failed to save budget for ${service}:`, error.message);
    }
  }

  /**
   * Get budget summary for all services
   * @returns {object} - Summary of all budgets
   */
  getBudgetSummary() {
    const summary = {};
    
    for (const [service, budget] of Object.entries(this.budgets)) {
      summary[service] = {
        dailySpent: budget.dailySpent,
        dailyLimit: budget.dailyLimit,
        dailyRemaining: Math.max(0, budget.dailyLimit - budget.dailySpent),
        dailyExceeded: budget.dailySpent >= budget.dailyLimit,
        monthlySpent: budget.monthlySpent,
        monthlyLimit: budget.monthlyLimit,
        monthlyRemaining: Math.max(0, budget.monthlyLimit - budget.monthlySpent),
        monthlyExceeded: budget.monthlySpent >= budget.monthlyLimit,
        lastReset: budget.date,
        resetCount: budget.dailyResetCount
      };
    }
    
    return summary;
  }

  /**
   * Check if any service has exceeded its budget
   * @returns {object} - Map of service names to exceeded status
   */
  getExceededBudgets() {
    const exceeded = {};
    
    for (const [service, budget] of Object.entries(this.budgets)) {
      exceeded[service] = {
        daily: budget.dailySpent >= budget.dailyLimit,
        monthly: budget.monthlySpent >= budget.monthlyLimit
      };
    }
    
    return exceeded;
  }

  /**
   * Reset budget for a specific service
   * @param {string} service - Service name
   * @param {boolean} force - Force reset even if not expired
   */
  resetBudget(service, force = false) {
    if (!this.budgets[service]) return;
    
    const budget = this.budgets[service];
    const now = new Date();
    
    if (force || budget.date !== now.toISOString().split('T')[0]) {
      budget.date = now.toISOString().split('T')[0];
      budget.dailySpent = 0;
      budget.dailyResetCount = (budget.dailyResetCount || 0) + 1;
      this.saveBudget(service);
    }
  }

  /**
   * Update budget limits for a service
   * @param {string} service - Service name
   * @param {number} dailyLimit - New daily limit
   * @param {number} monthlyLimit - New monthly limit
   */
  updateBudgetLimits(service, dailyLimit, monthlyLimit) {
    if (!this.budgets[service]) {
      this.budgets[service] = {
        date: new Date().toISOString().split('T')[0],
        month: new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0'),
        dailySpent: 0,
        monthlySpent: 0,
        dailyResetCount: 0,
        monthlyResetCount: 0,
        transactions: []
      };
    }
    
    this.budgets[service].dailyLimit = dailyLimit;
    this.budgets[service].monthlyLimit = monthlyLimit;
    
    this.saveBudget(service);
  }
}

module.exports = BudgetManager;
