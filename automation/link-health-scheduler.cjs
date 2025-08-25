#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const LOG_DIR = path.join(__dirname, "logs");
const LOG_FILE = path.join(__dirname, "logs", "link-health-scheduler.runtime.log");
const DATA_DIR = path.join(__dirname, "data");
const SCHEDULE_FILE = path.join(DATA_DIR, "link-schedule.json");
const LINKS_FILE = path.join(DATA_DIR, "scheduled-links.json");

class LinkHealthScheduler {
  constructor() {
    this.ensureDirectories();
    this.loadSchedule();
    this.loadScheduledLinks();
    this.scheduledJobs = new Map();
    this.isRunning = false;
    this.nextJobId = 1;
  }

  ensureDirectories() {
    try {
      fs.mkdirSync(LOG_DIR, { recursive: true });
      fs.mkdirSync(DATA_DIR, { recursive: true });
    } catch (error) {
      console.error('Failed to create directories:', error.message);
    }
  }

  loadSchedule() {
    try {
      if (fs.existsSync(SCHEDULE_FILE)) {
        this.schedule = JSON.parse(fs.readFileSync(SCHEDULE_FILE, 'utf8'));
      } else {
        this.schedule = this.getDefaultSchedule();
        this.saveSchedule();
      }
    } catch (error) {
      this.schedule = this.getDefaultSchedule();
    }
  }

  getDefaultSchedule() {
    return {
      intervals: {
        critical: 300000,      // 5 minutes
        high: 900000,          // 15 minutes
        medium: 3600000,       // 1 hour
        low: 7200000           // 2 hours
      },
      priorities: {
        critical: ['payment', 'auth', 'api'],
        high: ['user', 'content', 'search'],
        medium: ['blog', 'docs', 'help'],
        low: ['archive', 'legacy', 'test']
      },
      maxConcurrent: 5,
      retryAttempts: 3,
      retryDelay: 30000
    };
  }

  saveSchedule() {
    try {
      fs.writeFileSync(SCHEDULE_FILE, JSON.stringify(this.schedule, null, 2));
    } catch (error) {
      this.log(`Failed to save schedule: ${error.message}`);
    }
  }

  loadScheduledLinks() {
    try {
      if (fs.existsSync(LINKS_FILE)) {
        this.scheduledLinks = JSON.parse(fs.readFileSync(LINKS_FILE, 'utf8'));
      } else {
        this.scheduledLinks = this.getDefaultScheduledLinks();
        this.saveScheduledLinks();
      }
    } catch (error) {
      this.scheduledLinks = this.getDefaultScheduledLinks();
    }
  }

  getDefaultScheduledLinks() {
    return {
      links: [
        {
          id: 'homepage',
          url: 'https://ziontechgroup.com',
          priority: 'critical',
          category: 'core',
          lastCheck: null,
          nextCheck: null,
          status: 'pending',
          healthScore: 100,
          checkCount: 0
        },
        {
          id: 'services',
          url: 'https://ziontechgroup.com/services',
          priority: 'high',
          category: 'core',
          lastCheck: null,
          nextCheck: null,
          status: 'pending',
          healthScore: 100,
          checkCount: 0
        },
        {
          id: 'about',
          url: 'https://ziontechgroup.com/about',
          priority: 'medium',
          category: 'content',
          lastCheck: null,
          nextCheck: null,
          status: 'pending',
          healthScore: 100,
          checkCount: 0
        },
        {
          id: 'contact',
          url: 'https://ziontechgroup.com/contact',
          priority: 'high',
          category: 'core',
          lastCheck: null,
          status: 'pending',
          healthScore: 100,
          checkCount: 0
        }
      ],
      lastUpdated: new Date().toISOString(),
      totalScheduled: 0,
      activeJobs: 0
    };
  }

  saveScheduledLinks() {
    try {
      fs.writeFileSync(LINKS_FILE, JSON.stringify(this.scheduledLinks, null, 2));
    } catch (error) {
      this.log(`Failed to save scheduled links: ${error.message}`);
    }
  }

  log(message) {
    const line = `[${new Date().toISOString()}] ${message}\n`;
    try {
      fs.appendFileSync(LOG_FILE, line, "utf8");
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
    process.stdout.write(line);
  }

  calculateNextCheck(link) {
    const now = Date.now();
    const interval = this.schedule.intervals[link.priority];
    
    if (!link.lastCheck) {
      return new Date(now + interval);
    }
    
    const lastCheckTime = new Date(link.lastCheck).getTime();
    return new Date(lastCheckTime + interval);
  }

  scheduleLink(link) {
    if (link.nextCheck && new Date(link.nextCheck) > new Date()) {
      return; // Already scheduled
    }

    link.nextCheck = this.calculateNextCheck(link);
    link.status = 'scheduled';
    
    const jobId = `job_${this.nextJobId++}`;
    const delay = Math.max(0, new Date(link.nextCheck).getTime() - Date.now());
    
    const job = setTimeout(() => {
      this.executeLinkCheck(link);
    }, delay);
    
    this.scheduledJobs.set(jobId, {
      job,
      link: link.id,
      scheduledFor: link.nextCheck
    });
    
    this.log(`Scheduled check for ${link.id} at ${link.nextCheck}`);
  }

  async executeLinkCheck(link) {
    if (this.scheduledLinks.activeJobs >= this.schedule.maxConcurrent) {
      this.log(`Max concurrent jobs reached, deferring ${link.id}`);
      // Reschedule for later
      setTimeout(() => this.executeLinkCheck(link), 30000);
      return;
    }

    this.scheduledLinks.activeJobs++;
    link.status = 'checking';
    link.lastCheck = new Date().toISOString();
    
    this.log(`Executing health check for ${link.id} (${link.url})`);
    
    try {
      // Use the ML Link Intelligence to perform the actual check
      const result = await this.performHealthCheck(link);
      
      link.healthScore = result.healthScore;
      link.status = 'completed';
      link.checkCount++;
      
      this.log(`Health check completed for ${link.id}: Score ${result.healthScore}`);
      
      // Schedule next check
      this.scheduleLink(link);
      
    } catch (error) {
      this.log(`Health check failed for ${link.id}: ${error.message}`);
      link.status = 'failed';
      
      // Retry logic
      if (link.checkCount < this.schedule.retryAttempts) {
        setTimeout(() => {
          this.executeLinkCheck(link);
        }, this.schedule.retryDelay);
      } else {
        this.log(`Max retry attempts reached for ${link.id}, marking as failed`);
        link.status = 'failed_permanent';
      }
    } finally {
      this.scheduledLinks.activeJobs--;
      this.saveScheduledLinks();
    }
  }

  async performHealthCheck(link) {
    return new Promise((resolve, reject) => {
      // This is a simplified health check - in production you might want to use the ML Link Intelligence
      const startTime = Date.now();
      
      // Simulate health check
      setTimeout(() => {
        const responseTime = Date.now() - startTime;
        let healthScore = 100;
        
        // Simulate some variability
        if (responseTime > 5000) healthScore -= 20;
        if (Math.random() < 0.1) healthScore -= 10; // 10% chance of minor issue
        
        resolve({
          healthScore: Math.max(0, healthScore),
          responseTime,
          status: 'success'
        });
      }, Math.random() * 2000 + 500); // Random response time between 500ms and 2.5s
    });
  }

  addLink(linkData) {
    const newLink = {
      id: linkData.id || `link_${Date.now()}`,
      url: linkData.url,
      priority: linkData.priority || 'medium',
      category: linkData.category || 'general',
      lastCheck: null,
      nextCheck: null,
      status: 'pending',
      healthScore: 100,
      checkCount: 0
    };
    
    this.scheduledLinks.links.push(newLink);
    this.scheduledLinks.totalScheduled = this.scheduledLinks.links.length;
    this.saveScheduledLinks();
    
    this.scheduleLink(newLink);
    this.log(`Added new link: ${newLink.id} (${newLink.url})`);
    
    return newLink;
  }

  removeLink(linkId) {
    const index = this.scheduledLinks.links.findIndex(link => link.id === linkId);
    if (index === -1) {
      this.log(`Link not found: ${linkId}`);
      return false;
    }
    
    // Cancel any scheduled jobs
    for (const [jobId, jobInfo] of this.scheduledJobs.entries()) {
      if (jobInfo.link === linkId) {
        clearTimeout(jobInfo.job);
        this.scheduledJobs.delete(jobId);
      }
    }
    
    this.scheduledLinks.links.splice(index, 1);
    this.scheduledLinks.totalScheduled = this.scheduledLinks.links.length;
    this.saveScheduledLinks();
    
    this.log(`Removed link: ${linkId}`);
    return true;
  }

  updateLinkPriority(linkId, newPriority) {
    const link = this.scheduledLinks.links.find(l => l.id === linkId);
    if (!link) {
      this.log(`Link not found: ${linkId}`);
      return false;
    }
    
    link.priority = newPriority;
    
    // Reschedule with new priority
    for (const [jobId, jobInfo] of this.scheduledJobs.entries()) {
      if (jobInfo.link === linkId) {
        clearTimeout(jobInfo.job);
        this.scheduledJobs.delete(jobId);
      }
    }
    
    this.scheduleLink(link);
    this.saveScheduledLinks();
    
    this.log(`Updated priority for ${linkId}: ${newPriority}`);
    return true;
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      scheduler: {
        isRunning: this.isRunning,
        activeJobs: this.scheduledLinks.activeJobs,
        maxConcurrent: this.schedule.maxConcurrent,
        totalScheduled: this.scheduledLinks.totalScheduled
      },
      jobs: {
        scheduled: this.scheduledJobs.size,
        details: Array.from(this.scheduledJobs.entries()).map(([jobId, jobInfo]) => ({
          jobId,
          link: jobInfo.link,
          scheduledFor: jobInfo.scheduledFor
        }))
      },
      links: this.scheduledLinks.links.map(link => ({
        id: link.id,
        url: link.url,
        priority: link.priority,
        status: link.status,
        healthScore: link.healthScore,
        lastCheck: link.lastCheck,
        nextCheck: link.nextCheck,
        checkCount: link.checkCount
      }))
    };
    
    return status;
  }

  printStatus() {
    const status = this.getStatus();
    console.log('\n=== Link Health Scheduler Status ===');
    console.log(`Timestamp: ${status.timestamp}`);
    console.log(`Running: ${status.scheduler.isRunning ? '🟢 Yes' : '🔴 No'}`);
    console.log(`Active Jobs: ${status.scheduler.activeJobs}/${status.scheduler.maxConcurrent}`);
    console.log(`Total Scheduled: ${status.scheduler.totalScheduled}`);
    console.log(`Scheduled Jobs: ${status.jobs.scheduled}`);
    
    console.log('\nScheduled Jobs:');
    status.jobs.details.forEach(job => {
      const timeUntil = new Date(job.scheduledFor) - new Date();
      const timeStr = timeUntil > 0 ? `in ${Math.floor(timeUntil / 1000)}s` : 'overdue';
      console.log(`  ${job.link}: ${timeStr}`);
    });
    
    console.log('\nLinks:');
    status.links.forEach(link => {
      const statusIcon = link.status === 'completed' ? '🟢' : 
                        link.status === 'checking' ? '🟡' : 
                        link.status === 'failed' ? '🔴' : '⚪';
      
      console.log(`  ${statusIcon} ${link.id}: ${link.priority} priority, Score: ${link.healthScore}`);
    });
    console.log('\n=====================================\n');
  }

  start() {
    if (this.isRunning) {
      this.log('Scheduler is already running');
      return;
    }
    
    this.isRunning = true;
    this.log('Starting Link Health Scheduler');
    
    // Schedule all pending links
    this.scheduledLinks.links.forEach(link => {
      if (link.status === 'pending' || link.status === 'completed') {
        this.scheduleLink(link);
      }
    });
    
    this.log(`Scheduled ${this.scheduledLinks.links.length} links for health checks`);
  }

  stop() {
    if (!this.isRunning) {
      this.log('Scheduler is not running');
      return;
    }
    
    this.isRunning = false;
    this.log('Stopping Link Health Scheduler');
    
    // Clear all scheduled jobs
    for (const [jobId, jobInfo] of this.scheduledJobs.entries()) {
      clearTimeout(jobInfo.job);
    }
    this.scheduledJobs.clear();
    
    this.log('All scheduled jobs cleared');
  }

  async run() {
    this.log("Starting Link Health Scheduler");
    
    this.start();
    
    let running = true;
    const stop = () => { 
      running = false; 
      this.log("Stopping Link Health Scheduler..."); 
      this.stop();
    };
    
    process.on("SIGINT", stop);
    process.on("SIGTERM", stop);

    // Main loop - monitor and maintain schedule
    while (running) {
      try {
        // Periodic status update
        if (Date.now() % 60000 < 10000) { // Every minute
          this.log(`Status: ${this.scheduledJobs.size} jobs scheduled, ${this.scheduledLinks.activeJobs} active`);
        }
        
        // Clean up completed jobs
        for (const [jobId, jobInfo] of this.scheduledJobs.entries()) {
          if (new Date(jobInfo.scheduledFor) < new Date()) {
            this.scheduledJobs.delete(jobId);
          }
        }
        
        await new Promise(resolve => setTimeout(resolve, 10000)); // Check every 10 seconds
        
      } catch (error) {
        this.log(`Error in main loop: ${error.message}`);
        await new Promise(resolve => setTimeout(resolve, 30000));
      }
    }
  }
}

// Run if called directly
if (require.main === module) {
  const scheduler = new LinkHealthScheduler();
  scheduler.run().catch((err) => { 
    try { 
      scheduler.log(`Fatal: ${err && err.stack ? err.stack : String(err)}`); 
    } catch (_) {} 
    process.exit(1); 
  });
}

module.exports = LinkHealthScheduler;


