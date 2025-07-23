// Popup script for Cursor Automated Communication Extension

class CursorAutomatedPopup {
  constructor() {
    this.status = {
      isEnabled: false,
      connectionStatus: disconnected',
      computerId: -',
      activeTabs: 0,
      improvements: 0,
      lastSync: null
    };

    this.init();
  }

  async init() {
    console.log('🚀 Initializing Cursor Automated Popup');

    // Load current status
    await this.loadStatus();

    // Set up event listeners
    this.setupEventListeners();

    // Update UI
    this.updateUI();

    // Start periodic updates
    this.startPeriodicUpdates();

    console.log('✅ Popup initialized');
  }

  async loadStatus() {
    try {
      const response = await chrome.runtime.sendMessage({ type: GET_STATUS' });
      this.status = { ...this.status, ...response };
    } catch (error) {
      console.error('Failed to load status:', error);
    }
  }

  setupEventListeners() {
    // Automation toggle
    document
      .getElementById('automationToggle')
      .addEventListener('click', () => {
        this.toggleAutomation();
      });

    // File monitoring toggle
    document
      .getElementById('fileMonitoringToggle')
      .addEventListener('click', () => {
        this.toggleFileMonitoring();
      });

    // Performance tracking toggle
    document
      .getElementById('performanceToggle')
      .addEventListener('click', () => {
        this.togglePerformanceTracking();
      });
  }

  updateUI() {
    // Update status indicator
    const statusIndicator = document.getElementById('statusIndicator');
    if (this.status.connectionStatus === connected') {
      statusIndicator.className = status-indicator online';
    } else {
      statusIndicator.className = status-indicator offline';
    }

    // Update status values
    document.getElementById('connectionStatus').textContent =
      this.status.connectionStatus;
    document.getElementById('computerId').textContent = this.status.computerId;
    document.getElementById('activeTabs').textContent = this.status.activeTabs;

    // Update automation toggle
    const automationToggle = document.getElementById('automationToggle');
    if (this.status.isEnabled) {
      automationToggle.classList.add('active');
    } else {
      automationToggle.classList.remove('active');
    }

    // Update stats
    document.getElementById('improvementsCount').textContent =
      this.status.improvements;

    // Update last sync time
    if (this.status.lastSync) {
      const lastSync = new Date(this.status.lastSync);
      const now = new Date();
      const diff = Math.floor((now - lastSync) / 1000 / 60); // minutes

      if (diff < 1) {
        document.getElementById('lastSyncTime').textContent = Just now';
      } else if (diff < 60) {
        document.getElementById('lastSyncTime').textContent = `${diff}m ago`;
      } else {
        const hours = Math.floor(diff / 60);
        document.getElementById('lastSyncTime').textContent = `${hours}h ago`;
      }
    } else {
      document.getElementById('lastSyncTime').textContent = Never';
    }

    // Update performance score
    this.updatePerformanceScore();

    // Update improvements list
    this.updateImprovementsList();
  }

  updatePerformanceScore() {
    // Simulate performance score based on various metrics
    let score = 85; // Base score

    if (this.status.activeTabs > 20) {
      score -= 10;
    }

    if (this.status.improvements > 100) {
      score -= 5;
    }

    if (this.status.connectionStatus === disconnected') {
      score -= 20;
    }

    score = Math.max(0, Math.min(100, score));
    document.getElementById('performanceScore').textContent = `${score}%`;
  }

  async updateImprovementsList() {
    try {
      const response = await chrome.runtime.sendMessage({
        type: GET_IMPROVEMENTS
      });
      const improvements = response.improvements || [];

      const improvementsList = document.getElementById('improvementsList');
      improvementsList.innerHTML = ;

      // Show only the last 5 improvements
      const recentImprovements = improvements.slice(-5).reverse();

      if (recentImprovements.length === 0) {
        improvementsList.innerHTML =
          <div class="improvement-item">No improvements yet</div>;
        return;
      }

      recentImprovements.forEach((improvement) => {
        const item = document.createElement('div');
        item.className = improvement-item';

        const type = document.createElement('div');
        type.className = improvement-type';
        type.textContent = this.formatImprovementType(improvement.type);

        const time = document.createElement('div');
        time.className = improvement-time';
        time.textContent = this.formatTime(improvement.timestamp);

        item.appendChild(type);
        item.appendChild(time);
        improvementsList.appendChild(item);
      });
    } catch (error) {
      console.error('Failed to update improvements list:', error);
    }
  }

  formatImprovementType(type) {
    const typeMap = {
      development_activity: Development Activity',
      active_session: Active Session',
      navigation: Navigation',
      file_change: File Change',
      performance_issue: Performance Issue',
      quick_improvement: Quick Improvement',
      system_initialized: System Initialized
    };

    return (
      typeMap[type] ||
      type.replace(/_/g, ).replace(/\b\w/g, (l) => l.toUpperCase())
    );
  }

  formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // seconds

    if (diff < 60) {
      return Just now';
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes}m ago`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours}h ago`;
    } else {
      const days = Math.floor(diff / 86400);
      return `${days}d ago`;
    }
  }

  startPeriodicUpdates() {
    // Update status every 5 seconds
    setInterval(async () => {
      await this.loadStatus();
      this.updateUI();
    }, 5000);
  }

  async toggleAutomation() {
    try {
      const response = await chrome.runtime.sendMessage({
        type: TOGGLE_AUTOMATION
      });
      this.status.isEnabled = response.isEnabled;
      this.updateUI();

      // Show feedback
      this.showNotification(
        this.status.isEnabled ? Automation enabled' : Automation disabled',
      );
    } catch (error) {
      console.error('Failed to toggle automation:', error);
      this.showNotification('Failed to toggle automation', error');
    }
  }

  async toggleFileMonitoring() {
    // This would typically toggle file monitoring feature
    this.showNotification('File monitoring toggled');
  }

  async togglePerformanceTracking() {
    // This would typically toggle performance tracking feature
    this.showNotification('Performance tracking toggled');
  }

  async sendImprovement() {
    try {
      const improvement = {
        type: manual_improvement',
        message: User requested improvement',
        timestamp: Date.now()
      };

      await chrome.runtime.sendMessage({
        type: SEND_IMPROVEMENT',
        improvement: improvement
      });

      this.showNotification('Improvement sent successfully');

      // Reload status to update counts
      await this.loadStatus();
      this.updateUI();
    } catch (error) {
      console.error('Failed to send improvement:', error);
      this.showNotification('Failed to send improvement', error');
    }
  }

  async syncComputers() {
    try {
      await chrome.runtime.sendMessage({ type: SYNC_COMPUTERS' });
      this.showNotification('Syncing with other computers...');

      // Reload status after sync
      setTimeout(async () => {
        await this.loadStatus();
        this.updateUI();
      }, 1000);
    } catch (error) {
      console.error('Failed to sync computers:', error);
      this.showNotification('Failed to sync computers', error');
    }
  }

  openWebInterface() {
    // Open the web interface in a new tab
    chrome.tabs.create({
      url: http://localhost:3007
    });
  }

  async clearImprovements() {
    try {
      await chrome.runtime.sendMessage({ type: CLEAR_IMPROVEMENTS' });
      this.showNotification('Improvements cleared');

      // Reload status
      await this.loadStatus();
      this.updateUI();
    } catch (error) {
      console.error('Failed to clear improvements:', error);
      this.showNotification('Failed to clear improvements', error');
    }
  }

  showNotification(message, type = success') {
    // Create a temporary notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: ${type === error' ? #f44336' : #4CAF50'};
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            font-size: 0.8rem;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
    notification.textContent = message;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.remove();
      style.remove();
    }, 3000);
  }
}

// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const popup = new CursorAutomatedPopup();

  // Make functions globally available for onclick handlers
  window.sendImprovement = () => popup.sendImprovement();
  window.syncComputers = () => popup.syncComputers();
  window.openWebInterface = () => popup.openWebInterface();
  window.clearImprovements = () => popup.clearImprovements();
});

// Handle messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === AUTOMATION_TOGGLED') {
    // Update UI when automation is toggled from background
    location.reload();
  }
});
