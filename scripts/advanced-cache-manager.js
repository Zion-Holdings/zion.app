#!/usr/bin/env node

/**
 * Advanced Cache Manager
 * Intelligent caching system with smart invalidation and optimization
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

class AdvancedCacheManager {
  constructor() {
    this.cacheConfig = {
      rootDir: '.build-cache',
      maxSize: 1024 * 1024 * 1024 * 2, // 2GB
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      compression: true,
      encryption: false
    };
    
    this.cacheIndex = new Map();
    this.cacheStats = {
      hits: 0,
      misses: 0,
      writes: 0,
      invalidations: 0,
      totalSize: 0
    };
    
    this.initializeCache();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  initializeCache() {
    try {
      if (!fs.existsSync(this.cacheConfig.rootDir)) {
        fs.mkdirSync(this.cacheConfig.rootDir, { recursive: true });
        this.log(`📁 Created cache directory: ${this.cacheConfig.rootDir}`);
      }
      
      // Load cache index if it exists
      this.loadCacheIndex();
      
      // Clean up expired cache entries
      this.cleanupExpiredCache();
      
      this.log('✅ Cache system initialized');
    } catch (error) {
      this.log(`❌ Cache initialization failed: ${error.message}`, 'error');
    }
  }

  loadCacheIndex() {
    const indexPath = path.join(this.cacheConfig.rootDir, 'cache-index.json');
    
    if (fs.existsSync(indexPath)) {
      try {
        const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
        this.cacheIndex = new Map(Object.entries(indexData.entries || {}));
        this.cacheStats = { ...this.cacheStats, ...indexData.stats };
        this.log(`📋 Loaded cache index with ${this.cacheIndex.size} entries`);
      } catch (error) {
        this.log(`⚠️  Could not load cache index: ${error.message}`, 'warning');
      }
    }
  }

  saveCacheIndex() {
    const indexPath = path.join(this.cacheConfig.rootDir, 'cache-index.json');
    
    try {
      const indexData = {
        timestamp: new Date().toISOString(),
        entries: Object.fromEntries(this.cacheIndex),
        stats: this.cacheStats
      };
      
      fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2));
      this.log('💾 Cache index saved');
    } catch (error) {
      this.log(`⚠️  Could not save cache index: ${error.message}`, 'warning');
    }
  }

  generateCacheKey(input) {
    if (typeof input === 'string') {
      return crypto.createHash('sha256').update(input).digest('hex');
    }
    
    if (typeof input === 'object') {
      const sortedInput = this.sortObjectKeys(input);
      const inputString = JSON.stringify(sortedInput);
      return crypto.createHash('sha256').update(inputString).digest('hex');
    }
    
    return crypto.createHash('sha256').update(String(input)).digest('hex');
  }

  sortObjectKeys(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return obj.map(item => this.sortObjectKeys(item));
    }
    
    const sorted = {};
    Object.keys(obj).sort().forEach(key => {
      sorted[key] = this.sortObjectKeys(obj[key]);
    });
    
    return sorted;
  }

  async getCacheEntry(key, context = {}) {
    const cacheKey = this.generateCacheKey({ key, context });
    const entry = this.cacheIndex.get(cacheKey);
    
    if (!entry) {
      this.cacheStats.misses++;
      return null;
    }
    
    // Check if entry is expired
    if (this.isCacheEntryExpired(entry)) {
      this.log(`⏰ Cache entry expired: ${key}`);
      this.invalidateCacheEntry(cacheKey);
      this.cacheStats.misses++;
      return null;
    }
    
    // Check if entry is still valid
    if (!this.isCacheEntryValid(entry, context)) {
      this.log(`❌ Cache entry invalid: ${key}`);
      this.invalidateCacheEntry(cacheKey);
      this.cacheStats.misses++;
      return null;
    }
    
    // Load cache data
    try {
      const cacheData = await this.loadCacheData(entry);
      this.cacheStats.hits++;
      this.log(`✅ Cache hit: ${key}`);
      return cacheData;
    } catch (error) {
      this.log(`⚠️  Could not load cache data: ${error.message}`, 'warning');
      this.invalidateCacheEntry(cacheKey);
      this.cacheStats.misses++;
      return null;
    }
  }

  async setCacheEntry(key, data, context = {}, options = {}) {
    const cacheKey = this.generateCacheKey({ key, context });
    const entry = {
      key: cacheKey,
      originalKey: key,
      context,
      timestamp: Date.now(),
      size: 0,
      checksum: '',
      metadata: {
        version: '1.0',
        compression: options.compression !== false ? this.cacheConfig.compression : false,
        encryption: options.encryption !== false ? this.cacheConfig.encryption : false
      }
    };
    
    try {
      // Prepare cache data
      const cacheData = await this.prepareCacheData(data, entry.metadata);
      
      // Calculate size and checksum
      entry.size = Buffer.byteLength(cacheData);
      entry.checksum = crypto.createHash('md5').update(cacheData).digest('hex');
      
      // Check cache size limits
      if (!this.checkCacheSizeLimit(entry.size)) {
        this.log(`⚠️  Cache size limit exceeded, cleaning up...`, 'warning');
        await this.cleanupCache();
        
        if (!this.checkCacheSizeLimit(entry.size)) {
          this.log(`❌ Cache entry too large: ${entry.size} bytes`, 'error');
          return false;
        }
      }
      
      // Save cache data
      await this.saveCacheData(cacheKey, cacheData);
      
      // Update cache index
      this.cacheIndex.set(cacheKey, entry);
      this.cacheStats.writes++;
      this.cacheStats.totalSize += entry.size;
      
      // Save cache index
      this.saveCacheIndex();
      
      this.log(`💾 Cache entry saved: ${key} (${entry.size} bytes)`);
      return true;
      
    } catch (error) {
      this.log(`❌ Could not save cache entry: ${error.message}`, 'error');
      return false;
    }
  }

  async prepareCacheData(data, metadata) {
    let processedData = data;
    
    // Convert to JSON if it's an object
    if (typeof data === 'object') {
      processedData = JSON.stringify(data);
    }
    
    // Apply compression if enabled
    if (metadata.compression) {
      processedData = await this.compressData(processedData);
    }
    
    // Apply encryption if enabled
    if (metadata.encryption) {
      processedData = await this.encryptData(processedData);
    }
    
    return processedData;
  }

  async compressData(data) {
    // This is a simplified compression implementation
    // In production, you'd use a proper compression library like zlib
    
    // For now, just return the data as-is
    // In a real implementation, you'd use:
    // const zlib = require('zlib');
    // return zlib.gzipSync(data);
    
    return data;
  }

  async encryptData(data) {
    // This is a simplified encryption implementation
    // In production, you'd use proper encryption
    
    // For now, just return the data as-is
    // In a real implementation, you'd use:
    // const crypto = require('crypto');
    // const algorithm = 'aes-256-cbc';
    // const key = crypto.scryptSync(process.env.CACHE_SECRET || 'default', 'salt', 32);
    // const iv = crypto.randomBytes(16);
    // const cipher = crypto.createCipher(algorithm, key);
    // let encrypted = cipher.update(data, 'utf8', 'hex');
    // encrypted += cipher.final('hex');
    // return iv.toString('hex') + ':' + encrypted;
    
    return data;
  }

  async loadCacheData(entry) {
    const cacheFilePath = path.join(this.cacheConfig.rootDir, entry.key);
    
    if (!fs.existsSync(cacheFilePath)) {
      throw new Error('Cache file not found');
    }
    
    let cacheData = fs.readFileSync(cacheFilePath);
    
    // Verify checksum
    const actualChecksum = crypto.createHash('md5').update(cacheData).digest('hex');
    if (actualChecksum !== entry.checksum) {
      throw new Error('Cache data corruption detected');
    }
    
    // Apply decryption if enabled
    if (entry.metadata.encryption) {
      cacheData = await this.decryptData(cacheData);
    }
    
    // Apply decompression if enabled
    if (entry.metadata.compression) {
      cacheData = await this.decompressData(cacheData);
    }
    
    // Parse JSON if it was originally an object
    try {
      return JSON.parse(cacheData.toString());
    } catch (error) {
      return cacheData.toString();
    }
  }

  async decryptData(data) {
    // Simplified decryption implementation
    // In production, you'd implement proper decryption
    return data;
  }

  async decompressData(data) {
    // Simplified decompression implementation
    // In production, you'd implement proper decompression
    return data;
  }

  async saveCacheData(cacheKey, data) {
    const cacheFilePath = path.join(this.cacheConfig.rootDir, cacheKey);
    fs.writeFileSync(cacheFilePath, data);
  }

  isCacheEntryExpired(entry) {
    const age = Date.now() - entry.timestamp;
    return age > this.cacheConfig.maxAge;
  }

  isCacheEntryValid(entry, context) {
    // Check if context matches
    if (entry.context && context) {
      const contextMatch = this.compareContexts(entry.context, context);
      if (!contextMatch) {
        return false;
      }
    }
    
    // Check if cache file exists
    const cacheFilePath = path.join(this.cacheConfig.rootDir, entry.key);
    if (!fs.existsSync(cacheFilePath)) {
      return false;
    }
    
    return true;
  }

  compareContexts(originalContext, currentContext) {
    // Simple context comparison
    // In production, you'd implement more sophisticated context validation
    
    const originalKeys = Object.keys(originalContext).sort();
    const currentKeys = Object.keys(currentContext).sort();
    
    if (originalKeys.length !== currentKeys.length) {
      return false;
    }
    
    for (const key of originalKeys) {
      if (originalContext[key] !== currentContext[key]) {
        return false;
      }
    }
    
    return true;
  }

  invalidateCacheEntry(cacheKey) {
    const entry = this.cacheIndex.get(cacheKey);
    if (entry) {
      // Remove cache file
      const cacheFilePath = path.join(this.cacheConfig.rootDir, cacheKey);
      if (fs.existsSync(cacheFilePath)) {
        fs.unlinkSync(cacheFilePath);
      }
      
      // Update stats
      this.cacheStats.totalSize -= entry.size;
      this.cacheStats.invalidations++;
      
      // Remove from index
      this.cacheIndex.delete(cacheKey);
      
      this.log(`🗑️  Cache entry invalidated: ${entry.originalKey}`);
    }
  }

  checkCacheSizeLimit(entrySize) {
    return (this.cacheStats.totalSize + entrySize) <= this.cacheConfig.maxSize;
  }

  async cleanupCache() {
    this.log('🧹 Starting cache cleanup...');
    
    const entries = Array.from(this.cacheIndex.entries());
    let freedSpace = 0;
    
    // Sort entries by age (oldest first)
    entries.sort(([, a], [, b]) => a.timestamp - b.timestamp);
    
    for (const [cacheKey, entry] of entries) {
      if (this.cacheStats.totalSize <= this.cacheConfig.maxSize * 0.8) {
        break; // Stop when we're under 80% of max size
      }
      
      this.invalidateCacheEntry(cacheKey);
      freedSpace += entry.size;
    }
    
    if (freedSpace > 0) {
      this.log(`✅ Cache cleanup completed. Freed ${freedSpace} bytes`);
    } else {
      this.log('ℹ️  No cache cleanup needed');
    }
    
    this.saveCacheIndex();
  }

  cleanupExpiredCache() {
    this.log('⏰ Cleaning up expired cache entries...');
    
    const expiredEntries = [];
    
    for (const [cacheKey, entry] of this.cacheIndex.entries()) {
      if (this.isCacheEntryExpired(entry)) {
        expiredEntries.push(cacheKey);
      }
    }
    
    for (const cacheKey of expiredEntries) {
      this.invalidateCacheEntry(cacheKey);
    }
    
    if (expiredEntries.length > 0) {
      this.log(`✅ Cleaned up ${expiredEntries.length} expired cache entries`);
      this.saveCacheIndex();
    }
  }

  // Build-specific caching methods
  async getBuildCache(buildContext) {
    const cacheKey = 'build';
    return await this.getCacheEntry(cacheKey, buildContext);
  }

  async setBuildCache(buildData, buildContext) {
    const cacheKey = 'build';
    return await this.setCacheEntry(cacheKey, buildData, buildContext);
  }

  async getDependencyCache(dependencyHash) {
    const cacheKey = 'dependencies';
    return await this.getCacheEntry(cacheKey, { hash: dependencyHash });
  }

  async setDependencyCache(dependencyData, dependencyHash) {
    const cacheKey = 'dependencies';
    return await this.setCacheEntry(cacheKey, dependencyData, { hash: dependencyHash });
  }

  async getCompilationCache(compilationContext) {
    const cacheKey = 'compilation';
    return await this.getCacheEntry(cacheKey, compilationContext);
  }

  async setCompilationCache(compilationData, compilationContext) {
    const cacheKey = 'compilation';
    return await this.setCacheEntry(cacheKey, compilationData, compilationContext);
  }

  // Cache analysis and optimization
  analyzeCacheUsage() {
    const entries = Array.from(this.cacheIndex.values());
    
    const analysis = {
      timestamp: new Date().toISOString(),
      totalEntries: entries.length,
      totalSize: this.cacheStats.totalSize,
      hitRate: this.calculateHitRate(),
      sizeDistribution: this.analyzeSizeDistribution(entries),
      ageDistribution: this.analyzeAgeDistribution(entries),
      recommendations: []
    };
    
    // Generate optimization recommendations
    if (analysis.hitRate < 0.5) {
      analysis.recommendations.push('Low cache hit rate - consider adjusting cache keys or invalidation strategy');
    }
    
    if (this.cacheStats.totalSize > this.cacheConfig.maxSize * 0.9) {
      analysis.recommendations.push('Cache nearly full - consider increasing max size or improving cleanup strategy');
    }
    
    const oldEntries = entries.filter(entry => 
      Date.now() - entry.timestamp > this.cacheConfig.maxAge * 0.5
    );
    
    if (oldEntries.length > entries.length * 0.3) {
      analysis.recommendations.push('Many old cache entries - consider reducing max age or improving invalidation');
    }
    
    return analysis;
  }

  calculateHitRate() {
    const totalAccesses = this.cacheStats.hits + this.cacheStats.misses;
    return totalAccesses > 0 ? this.cacheStats.hits / totalAccesses : 0;
  }

  analyzeSizeDistribution(entries) {
    const sizeRanges = {
      small: 0,    // < 1KB
      medium: 0,   // 1KB - 100KB
      large: 0,    // 100KB - 1MB
      huge: 0      // > 1MB
    };
    
    for (const entry of entries) {
      if (entry.size < 1024) sizeRanges.small++;
      else if (entry.size < 102400) sizeRanges.medium++;
      else if (entry.size < 1048576) sizeRanges.large++;
      else sizeRanges.huge++;
    }
    
    return sizeRanges;
  }

  analyzeAgeDistribution(entries) {
    const ageRanges = {
      recent: 0,     // < 1 hour
      recent_day: 0, // 1 hour - 1 day
      week: 0,       // 1 day - 1 week
      old: 0         // > 1 week
    };
    
    const now = Date.now();
    
    for (const entry of entries) {
      const age = now - entry.timestamp;
      if (age < 3600000) ageRanges.recent++;
      else if (age < 86400000) ageRanges.recent_day++;
      else if (age < 604800000) ageRanges.week++;
      else ageRanges.old++;
    }
    
    return ageRanges;
  }

  // Cache optimization methods
  async optimizeCache() {
    this.log('⚡ Starting cache optimization...');
    
    const analysis = this.analyzeCacheUsage();
    
    // Remove rarely used entries
    await this.removeRarelyUsedEntries();
    
    // Compress large entries
    await this.compressLargeEntries();
    
    // Consolidate similar entries
    await this.consolidateSimilarEntries();
    
    // Update cache index
    this.saveCacheIndex();
    
    this.log('✅ Cache optimization completed');
    
    return analysis;
  }

  async removeRarelyUsedEntries() {
    // This is a simplified implementation
    // In production, you'd track access frequency and remove least-used entries
    
    this.log('🗑️  Removing rarely used cache entries...');
    
    // For now, just remove very old entries
    const entries = Array.from(this.cacheIndex.entries());
    const cutoffTime = Date.now() - (this.cacheConfig.maxAge * 0.8);
    
    let removedCount = 0;
    for (const [cacheKey, entry] of entries) {
      if (entry.timestamp < cutoffTime) {
        this.invalidateCacheEntry(cacheKey);
        removedCount++;
      }
    }
    
    if (removedCount > 0) {
      this.log(`✅ Removed ${removedCount} rarely used entries`);
    }
  }

  async compressLargeEntries() {
    this.log('🗜️  Compressing large cache entries...');
    
    const entries = Array.from(this.cacheIndex.entries());
    let compressedCount = 0;
    
    for (const [cacheKey, entry] of entries) {
      if (entry.size > 102400 && !entry.metadata.compression) { // > 100KB
        try {
          const cacheData = await this.loadCacheData(entry);
          entry.metadata.compression = true;
          
          // Re-save with compression
          await this.setCacheEntry(entry.originalKey, cacheData, entry.context, {
            compression: true,
            encryption: entry.metadata.encryption
          });
          
          compressedCount++;
        } catch (error) {
          this.log(`⚠️  Could not compress entry ${entry.originalKey}: ${error.message}`, 'warning');
        }
      }
    }
    
    if (compressedCount > 0) {
      this.log(`✅ Compressed ${compressedCount} large entries`);
    }
  }

  async consolidateSimilarEntries() {
    this.log('🔗 Consolidating similar cache entries...');
    
    // This is a simplified implementation
    // In production, you'd implement sophisticated similarity detection
    
    this.log('ℹ️  Entry consolidation not implemented in this version');
  }

  // Cache statistics and reporting
  getCacheStats() {
    return {
      ...this.cacheStats,
      hitRate: this.calculateHitRate(),
      totalEntries: this.cacheIndex.size,
      cacheSize: this.cacheStats.totalSize,
      maxSize: this.cacheConfig.maxSize,
      utilization: (this.cacheStats.totalSize / this.cacheConfig.maxSize) * 100
    };
  }

  generateCacheReport() {
    const stats = this.getCacheStats();
    const analysis = this.analyzeCacheUsage();
    
    const report = {
      timestamp: new Date().toISOString(),
      stats,
      analysis,
      configuration: this.cacheConfig
    };
    
    return report;
  }

  saveCacheReport() {
    const report = this.generateCacheReport();
    const reportPath = 'cache-analysis-report.json';
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Cache report saved to ${reportPath}`);
    
    return reportPath;
  }

  printCacheStats() {
    const stats = this.getCacheStats();
    
    console.log('\n' + '='.repeat(60));
    console.log('💾 CACHE STATISTICS');
    console.log('='.repeat(60));
    console.log(`📊 Total Entries: ${stats.totalEntries}`);
    console.log(`💾 Cache Size: ${(stats.cacheSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📏 Max Size: ${(stats.maxSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📈 Utilization: ${stats.utilization.toFixed(1)}%`);
    console.log(`✅ Cache Hits: ${stats.hits}`);
    console.log(`❌ Cache Misses: ${stats.misses}`);
    console.log(`📝 Cache Writes: ${stats.writes}`);
    console.log(`🗑️  Invalidations: ${stats.invalidations}`);
    console.log(`🎯 Hit Rate: ${(stats.hitRate * 100).toFixed(1)}%`);
    console.log('\n' + '='.repeat(60));
  }

  // Main execution method
  async runCacheManagement() {
    this.log('🚀 Starting advanced cache management...');
    
    try {
      // Analyze current cache usage
      const analysis = this.analyzeCacheUsage();
      
      // Optimize cache if needed
      if (analysis.recommendations.length > 0) {
        this.log('🔧 Cache optimization needed, running optimization...');
        await this.optimizeCache();
      }
      
      // Generate and save report
      const report = this.generateCacheReport();
      this.saveCacheReport();
      
      // Print statistics
      this.printCacheStats();
      
      this.log('✅ Advanced cache management completed');
      
      return report;
      
    } catch (error) {
      this.log(`💥 Cache management failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const cacheManager = new AdvancedCacheManager();
  cacheManager.runCacheManagement().catch(error => {
    console.error('Cache management failed:', error);
    process.exit(1);
  });
}

module.exports = AdvancedCacheManager;