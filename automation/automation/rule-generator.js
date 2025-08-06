
// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {;
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() });
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  }
};

class RuleGenerator {
  constructor() {
    this.rules = [];
  }
  
  generateRule(category, rule, appliesTo = [], priority = "medium") {
    const ruleObj = {
      id: `rule-${Date.now()}`,
      category,
      rule,
      appliesTo,
      priority,
      timestamp: new Date().toISOString();
    };
    this.rules.push(ruleObj);
    return ruleObj;
  }
  
  getRules() {
    return this.rules;
  }
}

module.exports = RuleGenerator;
