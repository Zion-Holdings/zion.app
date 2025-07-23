// Background service worker for Cursor Automated Communication Extension

class CursorAutomatedBackground {
  constructor() {
    this.isEnabled = false;
    this.computerId = this.generateComputerId();
    this.connectionStatus = 'disconnected';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    this.lastSync = null;
    this.improvements = [];
    this.activeTabs = new Set();
    this.fileChanges = [];
    this.performanceMetrics = {};

    this.config = {
      serverUrl: 'https://api.cursor.sh','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      localPort: 3008,
      coordinationPort: 3010,
      syncInterval: 30000, // 30 seconds
      heartbeatInterval: 15000, // 15 seconds
      fileWatchInterval: 5000, // 5 seconds
      maxFileChanges: 100,
      maxImprovements: 50,
    };

    this.init();
  }

  generateComputerId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return `cursor_${timestamp}_${random}`;
  }

  async init() {
    console.log('🚀 Initializing Cursor Automated Communication Background');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    // Load saved state
    await this.loadState();

    // Set up event listeners
    this.setupEventListeners();

    // Start monitoring
    this.startMonitoring();

    // Connect to local communication system
    this.connectToLocalSystem();

    console.log('✅ Background service initialized');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  }

  async loadState() {
    try {
      const result = await chrome.storage.local.get([
        'isEnabled','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        'computerId','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        'connectionStatus','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        'lastSync','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        'improvements','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        'fileChanges','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        'performanceMetrics','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      ]);

      this.isEnabled = result.isEnabled || false;
      this.computerId = result.computerId || this.computerId;
      this.connectionStatus = result.connectionStatus || 'disconnected';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.lastSync = result.lastSync || null;
      this.improvements = result.improvements || [];
      this.fileChanges = result.fileChanges || [];
      this.performanceMetrics = result.performanceMetrics || {};
    } catch (error) {
      console.error('Failed to load state:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  async saveState() {
    try {
      await chrome.storage.local.set({
        isEnabled: this.isEnabled,
        computerId: this.computerId,
        connectionStatus: this.connectionStatus,
        lastSync: this.lastSync,
        improvements: this.improvements,
        fileChanges: this.fileChanges,
        performanceMetrics: this.performanceMetrics,
      });
    } catch (error) {
      console.error('Failed to save state:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  setupEventListeners() {
    // Listen for tab updates
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.status === 'complete' && tab.url) {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        this.handleTabUpdate(tabId, tab);
      }
    });

    // Listen for tab activation
    chrome.tabs.onActivated.addListener((activeInfo) => {
      this.handleTabActivation(activeInfo.tabId);
    });

    // Listen for tab removal
    chrome.tabs.onRemoved.addListener((tabId) => {
      this.handleTabRemoval(tabId);
    });

    // Listen for web navigation
    chrome.webNavigation.onCompleted.addListener((details) => {
      this.handleNavigation(details);
    });

    // Listen for messages from content scripts and popup
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.handleMessage(message, sender, sendResponse);
      return true; // Keep message channel open for async response
    });

    // Listen for commands
    chrome.commands.onCommand.addListener((command) => {
      this.handleCommand(command);
    });

    // Listen for storage changes
    chrome.storage.onChanged.addListener((changes, namespace) => {
      this.handleStorageChange(changes, namespace);
    });
  }

  startMonitoring() {
    // Start heartbeat
    setInterval(() => {
      this.sendHeartbeat();
    }, this.config.heartbeatInterval);

    // Start sync with other computers
    setInterval(() => {
      this.syncWithOtherComputers();
    }, this.config.syncInterval);

    // Start file change monitoring
    setInterval(() => {
      this.monitorFileChanges();
    }, this.config.fileWatchInterval);

    // Start performance monitoring
    setInterval(() => {
      this.monitorPerformance();
    }, 60000); // Every minute

    console.log('👁️ Monitoring started');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  }

  async connectToLocalSystem() {
    try {
      const response = await fetch(
        `http://localhost:${this.config.localPort}/status`,
      );
      if (response.ok) {
        const data = await response.json();
        this.connectionStatus = 'connected';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        this.computerId = data.computerId || this.computerId;
        console.log('✅ Connected to local communication system');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      } else {
        this.connectionStatus = 'disconnected';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        console.log('❌ Local communication system not available');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      }
    } catch (error) {
      this.connectionStatus = 'disconnected';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      console.log('❌ Failed to connect to local system:', error.message);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    await this.saveState();
  }

  handleTabUpdate(tabId, tab) {
    if (this.isEnabled && tab.url) {
      this.activeTabs.add(tabId);

      // Check if this is a development-related tab
      if (this.isDevelopmentTab(tab.url)) {
        this.trackDevelopmentActivity(tabId, tab);
      }
    }
  }

  handleTabActivation(tabId) {
    if (this.isEnabled) {
      // Track active development session
      this.trackActiveSession(tabId);
    }
  }

  handleTabRemoval(tabId) {
    this.activeTabs.delete(tabId);
  }

  handleNavigation(details) {
    if (this.isEnabled && details.url) {
      // Track navigation patterns
      this.trackNavigation(details);
    }
  }

  async handleMessage(message, sender, sendResponse) {
    console.log('📨 Received message:', message);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    switch (message.type) {
      case 'GET_STATUS':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        sendResponse({
          isEnabled: this.isEnabled,
          connectionStatus: this.connectionStatus,
          computerId: this.computerId,
          activeTabs: this.activeTabs.size,
          improvements: this.improvements.length,
          lastSync: this.lastSync,
        });
        break;

      case 'TOGGLE_AUTOMATION':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        this.isEnabled = !this.isEnabled;
        await this.saveState();
        sendResponse({ isEnabled: this.isEnabled });
        break;

      case 'SEND_IMPROVEMENT':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        await this.sendImprovement(message.improvement);
        sendResponse({ status: 'sent' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        break;

      case 'SYNC_COMPUTERS':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        await this.syncWithOtherComputers();
        sendResponse({ status: 'synced' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        break;

      case 'GET_IMPROVEMENTS':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        sendResponse({ improvements: this.improvements });
        break;

      case 'CLEAR_IMPROVEMENTS':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        this.improvements = [];
        await this.saveState();
        sendResponse({ status: 'cleared' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        break;

      case 'GET_PERFORMANCE':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        sendResponse({ performance: this.performanceMetrics });
        break;

      default:
        sendResponse({ error: 'Unknown message type' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  handleCommand(command) {
    console.log('⌨️ Command received:', command);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    switch (command) {
      case 'toggle-automation':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        this.toggleAutomation();
        break;

      case 'send-improvement':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        this.sendQuickImprovement();
        break;

      case 'sync-computers':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        this.syncWithOtherComputers();
        break;
    }
  }

  handleStorageChange(changes, namespace) {
    console.log('💾 Storage changed:', changes);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    // Update local state based on storage changes
    if (changes.isEnabled) {
      this.isEnabled = changes.isEnabled.newValue;
    }
  }

  isDevelopmentTab(url) {
    const developmentPatterns = [
      'localhost','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      '127.0.0.1','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'github.com','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'gitlab.com','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'bitbucket.org','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'stackoverflow.com','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'developer.mozilla.org','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'docs.','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'api.','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'dev.','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'staging.','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'test.','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    ];

    return developmentPatterns.some((pattern) => url.includes(pattern));
  }

  trackDevelopmentActivity(tabId, tab) {
    const activity = {
      type: 'development_activity','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      tabId,
      url: tab.url,
      title: tab.title,
      timestamp: Date.now(),
      computerId: this.computerId,
    };

    this.addImprovement(activity);
  }

  trackActiveSession(tabId) {
    const session = {
      type: 'active_session','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      tabId,
      timestamp: Date.now(),
      computerId: this.computerId,
    };

    this.addImprovement(session);
  }

  trackNavigation(details) {
    const navigation = {
      type: 'navigation','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      url: details.url,
      tabId: details.tabId,
      timestamp: Date.now(),
      computerId: this.computerId,
    };

    this.addImprovement(navigation);
  }

  async sendHeartbeat() {
    if (!this.isEnabled) return;

    try {
      const heartbeat = {
        computerId: this.computerId,
        timestamp: Date.now(),
        activeTabs: this.activeTabs.size,
        improvements: this.improvements.length,
        connectionStatus: this.connectionStatus,
        performance: this.performanceMetrics,
      };

      // Send to local system
      await fetch(`http://localhost:${this.config.localPort}/heartbeat`, {
        method: 'POST','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        headers: { 'Content-Type': 'application/json' },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        body: JSON.stringify(heartbeat),
      });

      // Send to coordination server
      await fetch(
        `http://localhost:${this.config.coordinationPort}/heartbeat`,
        {
          method: 'POST','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          headers: { 'Content-Type': 'application/json' },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          body: JSON.stringify(heartbeat),
        },
      );
    } catch (error) {
      console.error('Heartbeat failed:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  async syncWithOtherComputers() {
    if (!this.isEnabled) return;

    try {
      const syncData = {
        computerId: this.computerId,
        timestamp: Date.now(),
        improvements: this.improvements,
        fileChanges: this.fileChanges,
        performance: this.performanceMetrics,
        activeTabs: Array.from(this.activeTabs),
      };

      // Send to coordination server
      const response = await fetch(
        `http://localhost:${this.config.coordinationPort}/sync`,
        {
          method: 'POST','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          headers: { 'Content-Type': 'application/json' },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          body: JSON.stringify(syncData),
        },
      );

      if (response.ok) {
        const data = await response.json();
        this.mergeSyncData(data);
        this.lastSync = Date.now();
        await this.saveState();
        console.log('🔄 Synced with other computers');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      }
    } catch (error) {
      console.error('Sync failed:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  mergeSyncData(data) {
    // Merge improvements from other computers
    if (data.improvements) {
      this.improvements.push(...data.improvements);

      // Keep only recent improvements
      if (this.improvements.length > this.config.maxImprovements) {
        this.improvements = this.improvements.slice(
          -this.config.maxImprovements,
        );
      }
    }

    // Merge file changes
    if (data.fileChanges) {
      this.fileChanges.push(...data.fileChanges);

      // Keep only recent file changes
      if (this.fileChanges.length > this.config.maxFileChanges) {
        this.fileChanges = this.fileChanges.slice(-this.config.maxFileChanges);
      }
    }
  }

  monitorFileChanges() {
    if (!this.isEnabled) return;

    // This would typically monitor file system changes
    // For now, we'll simulate file change detection'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    const simulatedChanges = [
      'src/components/Button.tsx','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'pages/index.tsx','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'utils/helpers.js','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      'styles/globals.css','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    ];

    if (Math.random() > 0.8) {
      // 20% chance of file change
      const randomFile =
        simulatedChanges[Math.floor(Math.random() * simulatedChanges.length)];
      this.trackFileChange(randomFile);
    }
  }

  trackFileChange(filename) {
    const fileChange = {
      type: 'file_change','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      filename,
      timestamp: Date.now(),
      computerId: this.computerId,
    };

    this.fileChanges.push(fileChange);
    this.addImprovement(fileChange);

    // Keep file changes list manageable
    if (this.fileChanges.length > this.config.maxFileChanges) {
      this.fileChanges = this.fileChanges.slice(-this.config.maxFileChanges);
    }
  }

  monitorPerformance() {
    if (!this.isEnabled) return;

    // Collect performance metrics
    this.performanceMetrics = {
      timestamp: Date.now(),
      activeTabs: this.activeTabs.size,
      improvements: this.improvements.length,
      fileChanges: this.fileChanges.length,
      memory: this.getMemoryUsage(),
      cpu: this.getCpuUsage(),
    };

    // Check for performance issues
    this.checkPerformanceIssues();
  }

  getMemoryUsage() {
    // Simulate memory usage
    return {
      used: Math.random() * 100,
      total: 100,
      percentage: Math.random() * 100,
    };
  }

  getCpuUsage() {
    // Simulate CPU usage
    return {
      user: Math.random() * 50,
      system: Math.random() * 30,
      total: Math.random() * 80,
    };
  }

  checkPerformanceIssues() {
    const issues = [];

    if (this.performanceMetrics.memory.percentage > 80) {
      issues.push('High memory usage detected');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    if (this.performanceMetrics.cpu.total > 70) {
      issues.push('High CPU usage detected');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    if (this.activeTabs.size > 20) {
      issues.push('Too many active tabs');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    if (issues.length > 0) {
      const performanceIssue = {
        type: 'performance_issue','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        issues,
        metrics: this.performanceMetrics,
        timestamp: Date.now(),
        computerId: this.computerId,
      };

      this.addImprovement(performanceIssue);
    }
  }

  async sendImprovement(improvement) {
    if (!this.isEnabled) return;

    // Add to local list
    this.addImprovement(improvement);

    try {
      // Send to local system
      await fetch(`http://localhost:${this.config.localPort}/improvement`, {
        method: 'POST','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        headers: { 'Content-Type': 'application/json' },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        body: JSON.stringify(improvement),
      });

      console.log('✅ Improvement sent:', improvement.type);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    } catch (error) {
      console.error('Failed to send improvement:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  addImprovement(improvement) {
    this.improvements.push(improvement);

    // Keep improvements list manageable
    if (this.improvements.length > this.config.maxImprovements) {
      this.improvements = this.improvements.slice(-this.config.maxImprovements);
    }

    // Save state
    this.saveState();
  }

  toggleAutomation() {
    this.isEnabled = !this.isEnabled;
    this.saveState();

    console.log(`Automation ${this.isEnabled ? 'enabled' : 'disabled'}`);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    // Notify all tabs
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs
          .sendMessage(tab.id, {
            type: 'AUTOMATION_TOGGLED','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
            isEnabled: this.isEnabled,
          })
          .catch(() => {
            // Ignore errors for tabs that don't have content scripts'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          });
      });
    });
  }

  sendQuickImprovement() {
    const quickImprovement = {
      type: 'quick_improvement','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      message: 'User requested quick improvement','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      timestamp: Date.now(),
      computerId: this.computerId,
    };

    this.sendImprovement(quickImprovement);
  }
}

// Initialize the background service
const background = new CursorAutomatedBackground();

// Handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details.reason);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

  if (details.reason === 'install') {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    // First time installation
    background.isEnabled = true;
    background.saveState();
    console.log('✅ Extension enabled by default');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  }
});

// Handle extension startup
chrome.runtime.onStartup.addListener(() => {
  console.log('Extension started');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  background.connectToLocalSystem();
});

// Handle extension update
chrome.runtime.onUpdateAvailable.addListener(() => {
  console.log('Extension update available');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  chrome.runtime.reload();
});
