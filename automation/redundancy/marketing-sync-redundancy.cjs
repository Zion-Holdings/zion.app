#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class MarketingSyncRedundancy {
  constructor() {
    this.config = {
      platforms: {
        linkedin: {
          enabled: true,
          accessToken: process.env.LINKEDIN_ACCESS_TOKEN,
          authorUrn: process.env.LINKEDIN_URN,
          apiUrl: "https://api.linkedin.com/v2/ugcPosts"
        },
        instagram: {
          enabled: true,
          userId: process.env.IG_USER_ID,
          accessToken: process.env.IG_ACCESS_TOKEN,
          apiUrl: "https://graph.facebook.com/v19.0"
        },
        twitter: {
          enabled: false, // Placeholder for future implementation
          apiKey: process.env.TWITTER_API_KEY,
          apiSecret: process.env.TWITTER_API_SECRET
        }
      },
      content: {
        canonicalUrl: "https://ziontechgroup.com",
        defaultMessage: "🚀 Sync update: New improvements shipped to our app. Explore what changed →",
        hashtags: "#ZionTech #Innovation #TechUpdates"
      },
      logDir: path.join(__dirname, "../logs"),
      reportDir: path.join(__dirname, "reports"),
      backupDir: path.join(__dirname, "backups")
    };
    
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.config.logDir, this.config.reportDir, this.config.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.log = (message, level = "INFO") => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      
      console.log(logMessage);
      
      // Write to log file
      const logFile = path.join(this.config.logDir, "marketing-sync-redundancy.log");
      try {
        fs.appendFileSync(logFile, logMessage + "\n");
      } catch (error) {
        console.error(`Failed to write to log file: ${error.message}`);
      }
    };
  }

  async postLinkedInUpdate() {
    const platform = this.config.platforms.linkedin;
    
    if (!platform.enabled) {
      this.log("LinkedIn is disabled, skipping");
      return { ok: false, skipped: true, platform: "linkedin" };
    }

    if (!platform.accessToken || !platform.authorUrn) {
      this.log("LinkedIn credentials missing, skipping LinkedIn post", "WARN");
      return { ok: false, skipped: true, platform: "linkedin", reason: "missing_credentials" };
    }

    const message = `${this.config.content.defaultMessage} ${this.config.content.canonicalUrl} ${this.config.content.hashtags}`;
    
    const body = {
      author: platform.authorUrn,
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: {
            text: message
          },
          shareMediaCategory: "ARTICLE",
          media: [
            {
              status: "READY",
              originalUrl: this.config.content.canonicalUrl,
              title: { text: "Zion Tech Group - Innovation Updates" }
            }
          ]
        }
      },
      visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" }
    };

    try {
      this.log("Posting to LinkedIn...");
      
      const response = await fetch(platform.apiUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${platform.accessToken}`,
          "X-Restli-Protocol-Version": "2.0.0",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorText = await response.text();
        this.log(`LinkedIn post failed (${response.status}): ${errorText}`, "ERROR");
        return { 
          ok: false, 
          platform: "linkedin", 
          status: response.status, 
          error: errorText 
        };
      }

      const result = await response.json();
      this.log("LinkedIn post published successfully");
      
      return { 
        ok: true, 
        platform: "linkedin", 
        postId: result.id,
        message: message
      };

    } catch (error) {
      this.log(`LinkedIn post error: ${error.message}`, "ERROR");
      return { 
        ok: false, 
        platform: "linkedin", 
        error: error.message 
      };
    }
  }

  async postInstagramUpdate() {
    const platform = this.config.platforms.instagram;
    
    if (!platform.enabled) {
      this.log("Instagram is disabled, skipping");
      return { ok: false, skipped: true, platform: "instagram" };
    }

    if (!platform.userId || !platform.accessToken) {
      this.log("Instagram credentials missing, skipping Instagram post", "WARN");
      return { ok: false, skipped: true, platform: "instagram", reason: "missing_credentials" };
    }

    const caption = `${this.config.content.defaultMessage} ${this.config.content.canonicalUrl} ${this.config.content.hashtags}`;

    try {
      this.log("Creating Instagram media...");
      
      // Step 1: Create media
      const createResponse = await fetch(
        `${platform.apiUrl}/${encodeURIComponent(platform.userId)}/media?access_token=${encodeURIComponent(platform.accessToken)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ caption })
        }
      );

      if (!createResponse.ok) {
        const errorJson = await createResponse.json();
        this.log(`Instagram media creation failed (${createResponse.status}): ${JSON.stringify(errorJson)}`, "ERROR");
        return { 
          ok: false, 
          platform: "instagram", 
          status: createResponse.status, 
          error: errorJson 
        };
      }

      const createResult = await createResponse.json();
      
      if (!createResult.id) {
        this.log("Instagram media creation failed: no media ID returned", "ERROR");
        return { 
          ok: false, 
          platform: "instagram", 
          error: "No media ID returned" 
        };
      }

      this.log("Instagram media created, publishing...");

      // Step 2: Publish media
      const publishResponse = await fetch(
        `${platform.apiUrl}/${encodeURIComponent(platform.userId)}/media_publish?access_token=${encodeURIComponent(platform.accessToken)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ creation_id: createResult.id })
        }
      );

      if (!publishResponse.ok) {
        const errorJson = await publishResponse.json();
        this.log(`Instagram media publish failed (${publishResponse.status}): ${JSON.stringify(errorJson)}`, "ERROR");
        return { 
          ok: false, 
          platform: "instagram", 
          status: publishResponse.status, 
          error: errorJson 
        };
      }

      const publishResult = await publishResponse.json();
      this.log("Instagram post published successfully");
      
      return { 
        ok: true, 
        platform: "instagram", 
        mediaId: createResult.id,
        postId: publishResult.id,
        caption: caption
      };

    } catch (error) {
      this.log(`Instagram post error: ${error.message}`, "ERROR");
      return { 
        ok: false, 
        platform: "instagram", 
        error: error.message 
      };
    }
  }

  async postTwitterUpdate() {
    const platform = this.config.platforms.twitter;
    
    if (!platform.enabled) {
      this.log("Twitter is disabled, skipping");
      return { ok: false, skipped: true, platform: "twitter" };
    }

    // Placeholder for Twitter API v2 implementation
    this.log("Twitter posting not yet implemented", "INFO");
    return { 
      ok: false, 
      skipped: true, 
      platform: "twitter", 
      reason: "not_implemented" 
    };
  }

  async generateContentVariations() {
    const variations = [
      "🚀 New features deployed! Check out the latest improvements →",
      "✨ Fresh updates are live! Discover what's new →",
      "🔥 Hot off the press: Latest enhancements are here →",
      "⚡ Speed improvements and new capabilities deployed →",
      "🎯 Performance optimizations and new features live →"
    ];

    const randomVariation = variations[Math.floor(Math.random() * variations.length)];
    return `${randomVariation} ${this.config.content.canonicalUrl} ${this.config.content.hashtags}`;
  }

  async backupCurrentState() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(this.config.backupDir, `marketing-backup-${timestamp}`);
    
    try {
      fs.mkdirSync(backupPath, { recursive: true });
      
      // Backup current marketing reports
      const reportsDir = path.join(process.cwd(), "pages");
      if (fs.existsSync(reportsDir)) {
        const reports = fs.readdirSync(reportsDir).filter(file => 
          file.includes("marketing") || file.includes("report")
        );
        
        reports.forEach(report => {
          const sourcePath = path.join(reportsDir, report);
          const targetPath = path.join(backupPath, report);
          fs.copyFileSync(sourcePath, targetPath);
        });
        
        this.log(`Backed up ${reports.length} marketing reports to: ${backupPath}`);
      }
      
      return backupPath;
    } catch (error) {
      this.log(`Backup creation failed: ${error.message}`, "WARN");
      return null;
    }
  }

  async generateMarketingReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      redundancyMode: true,
      summary: {
        totalPlatforms: Object.keys(this.config.platforms).length,
        enabledPlatforms: Object.values(this.config.platforms).filter(p => p.enabled).length,
        successfulPosts: results.filter(r => r.ok).length,
        failedPosts: results.filter(r => !r.ok && !r.skipped).length,
        skippedPosts: results.filter(r => r.skipped).length
      },
      results: results,
      content: {
        message: this.config.content.defaultMessage,
        url: this.config.content.canonicalUrl,
        hashtags: this.config.content.hashtags
      },
      environment: {
        nodeVersion: process.version,
        platform: process.platform,
        timestamp: new Date().toISOString()
      }
    };

    // Write detailed report
    const reportPath = path.join(this.config.reportDir, `marketing-sync-${Date.now()}.json`);
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Marketing report generated: ${reportPath}`);
    } catch (error) {
      this.log(`Failed to generate report: ${error.message}`, "WARN");
    }

    // Write markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = path.join(process.cwd(), "marketing-sync-redundancy-report.md");
    try {
      fs.writeFileSync(markdownPath, markdownReport);
      this.log(`Markdown report generated: ${markdownPath}`);
    } catch (error) {
      this.log(`Failed to generate markdown report: ${error.message}`, "WARN");
    }

    return report;
  }

  generateMarkdownReport(report) {
    const { summary, results, content } = report;
    
    return `# Marketing Sync Redundancy Report

**Generated:** ${report.timestamp}
**Redundancy Mode:** ${report.redundancyMode ? "Active" : "Inactive"}

## Summary

- **Total Platforms:** ${summary.totalPlatforms}
- **Enabled Platforms:** ${summary.enabledPlatforms}
- **Successful Posts:** ${summary.successfulPosts}
- **Failed Posts:** ${summary.failedPosts}
- **Skipped Posts:** ${summary.skippedPosts}

## Platform Results

${results.map(result => `
### ${result.platform.charAt(0).toUpperCase() + result.platform.slice(1)}
- **Status:** ${result.ok ? "✅ Success" : result.skipped ? "⏭️ Skipped" : "❌ Failed"}
- **Details:** ${result.error || result.reason || "Posted successfully"}
${result.postId ? `- **Post ID:** ${result.postId}` : ""}
${result.message ? `- **Message:** ${result.message}` : ""}
`).join("")}

## Content

- **Message:** ${content.message}
- **URL:** ${content.url}
- **Hashtags:** ${content.hashtags}

## Environment

- **Node Version:** ${report.environment.nodeVersion}
- **Platform:** ${report.environment.platform}
- **Generated:** ${report.environment.timestamp}
`;
  }

  async runMarketingSync() {
    this.log("Starting Marketing Sync Redundancy...");
    
    try {
      // Create backup
      const backupPath = await this.backupCurrentState();
      
      // Generate content variation
      const contentVariation = await this.generateContentVariations();
      this.config.content.defaultMessage = contentVariation;
      
      // Post to all platforms
      const results = await Promise.all([
        this.postLinkedInUpdate(),
        this.postInstagramUpdate(),
        this.postTwitterUpdate()
      ]);
      
      // Generate report
      const report = await this.generateMarketingReport(results);
      
      this.log("Marketing Sync Redundancy completed successfully");
      
      return {
        success: true,
        results,
        report,
        backupPath
      };
      
    } catch (error) {
      this.log(`Marketing Sync Redundancy failed: ${error.message}`, "ERROR");
      
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// CLI interface
if (require.main === module) {
  const syncer = new MarketingSyncRedundancy();
  
  syncer.runMarketingSync().then(result => {
    if (result.success) {
      console.log("Marketing sync completed successfully");
      process.exit(0);
    } else {
      console.error(`Marketing sync failed: ${result.error}`);
      process.exit(1);
    }
  }).catch(error => {
    console.error(`Fatal error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = MarketingSyncRedundancy;