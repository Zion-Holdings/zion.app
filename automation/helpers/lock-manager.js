const fs = require('fs');
const path = require('path');

class LockManager {
  constructor(lockDir = 'automation/locks') {
    this.lockDir = path.resolve(process.cwd(), lockDir);
    this.ensureLockDir();
  }

  ensureLockDir() {
    if (!fs.existsSync(this.lockDir)) {
      fs.mkdirSync(this.lockDir, { recursive: true });
    }
  }

  /**
   * Try to acquire a lock for a specific operation
   * @param {string} operation - Name of the operation (e.g., 'ultrafast_orchestrator')
   * @param {number} ttlMs - Time to live in milliseconds (default: 5 minutes)
   * @returns {boolean} - True if lock acquired, false if already locked
   */
  tryAcquireLock(operation, ttlMs = 5 * 60 * 1000) {
    const lockFile = path.join(this.lockDir, `${operation}.lock`);
    
    try {
      if (fs.existsSync(lockFile)) {
        const lockData = JSON.parse(fs.readFileSync(lockFile, 'utf8'));
        const now = Date.now();
        
        // Check if lock is expired
        if (now - lockData.timestamp > ttlMs) {
          // Lock expired, remove it and acquire new one
          fs.unlinkSync(lockFile);
        } else {
          // Lock still valid
          return false;
        }
      }
      
      // Acquire lock
      const lockData = {
        operation,
        timestamp: Date.now(),
        ttlMs,
        pid: process.pid,
        hostname: require('os').hostname()
      };
      
      fs.writeFileSync(lockFile, JSON.stringify(lockData, null, 2));
      return true;
      
    } catch (error) {
      console.warn(`Failed to acquire lock for ${operation}:`, error.message);
      return false;
    }
  }

  /**
   * Release a lock for a specific operation
   * @param {string} operation - Name of the operation
   * @returns {boolean} - True if lock released, false if error
   */
  releaseLock(operation) {
    const lockFile = path.join(this.lockDir, `${operation}.lock`);
    
    try {
      if (fs.existsSync(lockFile)) {
        fs.unlinkSync(lockFile);
        return true;
      }
      return true; // No lock to release
    } catch (error) {
      console.warn(`Failed to release lock for ${operation}:`, error.message);
      return false;
    }
  }

  /**
   * Check if an operation is currently locked
   * @param {string} operation - Name of the operation
   * @returns {boolean} - True if locked, false if not
   */
  isLocked(operation) {
    const lockFile = path.join(this.lockDir, `${operation}.lock`);
    
    try {
      if (!fs.existsSync(lockFile)) return false;
      
      const lockData = JSON.parse(fs.readFileSync(lockFile, 'utf8'));
      const now = Date.now();
      
      // Check if lock is expired
      if (now - lockData.timestamp > lockData.ttlMs) {
        // Lock expired, remove it
        fs.unlinkSync(lockFile);
        return false;
      }
      
      return true;
    } catch (error) {
      console.warn(`Failed to check lock for ${operation}:`, error.message);
      return false;
    }
  }

  /**
   * Get lock information for an operation
   * @param {string} operation - Name of the operation
   * @returns {object|null} - Lock data or null if not locked
   */
  getLockInfo(operation) {
    const lockFile = path.join(this.lockDir, `${operation}.lock`);
    
    try {
      if (!fs.existsSync(lockFile)) return null;
      
      const lockData = JSON.parse(fs.readFileSync(lockFile, 'utf8'));
      const now = Date.now();
      
      // Check if lock is expired
      if (now - lockData.timestamp > lockData.ttlMs) {
        // Lock expired, remove it
        fs.unlinkSync(lockFile);
        return null;
      }
      
      return {
        ...lockData,
        remainingMs: lockData.ttlMs - (now - lockData.timestamp)
      };
    } catch (error) {
      console.warn(`Failed to get lock info for ${operation}:`, error.message);
      return null;
    }
  }

  /**
   * Clean up expired locks
   * @returns {number} - Number of expired locks removed
   */
  cleanupExpiredLocks() {
    let removed = 0;
    
    try {
      const files = fs.readdirSync(this.lockDir);
      
      for (const file of files) {
        if (!file.endsWith('.lock')) continue;
        
        const lockFile = path.join(this.lockDir, file);
        const lockData = JSON.parse(fs.readFileSync(lockFile, 'utf8'));
        const now = Date.now();
        
        if (now - lockData.timestamp > lockData.ttlMs) {
          fs.unlinkSync(lockFile);
          removed++;
        }
      }
    } catch (error) {
      console.warn('Failed to cleanup expired locks:', error.message);
    }
    
    return removed;
  }

  /**
   * Get all active locks
   * @returns {object} - Map of operation names to lock info
   */
  getAllLocks() {
    const locks = {};
    
    try {
      const files = fs.readdirSync(this.lockDir);
      
      for (const file of files) {
        if (!file.endsWith('.lock')) continue;
        
        const operation = file.replace('.lock', '');
        const lockInfo = this.getLockInfo(operation);
        
        if (lockInfo) {
          locks[operation] = lockInfo;
        }
      }
    } catch (error) {
      console.warn('Failed to get all locks:', error.message);
    }
    
    return locks;
  }
}

module.exports = LockManager;
