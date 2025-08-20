#!/usr/bin/env node

/**
 * Front Index Advertiser
 * Manages and updates the front page index content
 */

const fs = require('fs');
const path = require('path');

class FrontIndexAdvertiser {
  constructor() {
    this.indexFile = 'pages/index.tsx';
    this.reportsDir = 'pages/reports';
  }

  async advertise() {
    console.log('📢 Starting front index advertisement...');
    
    try {
      // Get latest reports
      const latestReports = await this.getLatestReports();
      
      // Update the index file
      await this.updateIndexFile(latestReports);
      
      console.log(`✅ Front index updated with ${latestReports.length} latest reports`);
      return { success: true, reportsCount: latestReports.length };
    } catch (error) {
      console.error('❌ Error during front index advertisement:', error.message);
      return { success: false, error: error.message };
    }
  }

  async getLatestReports() {
    const reports = [];
    
    try {
      if (fs.existsSync(this.reportsDir)) {
        const reportTypes = fs.readdirSync(this.reportsDir);
        
        for (const type of reportTypes) {
          const typePath = path.join(this.reportsDir, type);
          if (fs.statSync(typePath).isDirectory()) {
            const typeReports = fs.readdirSync(typePath)
              .filter(f => f.endsWith('.md'))
              .map(f => ({ type, name: f, path: path.join(type, f) }))
              .sort((a, b) => {
                const aStats = fs.statSync(path.join(this.reportsDir, a.path));
                const bStats = fs.statSync(path.join(this.reportsDir, b.path));
                return bStats.mtime.getTime() - aStats.mtime.getTime();
              })
              .slice(0, 3); // Get top 3 most recent
            
            reports.push(...typeReports);
          }
        }
      }
    } catch (error) {
      console.warn('Warning: Could not read reports directory:', error.message);
    }
    
    return reports;
  }

  async updateIndexFile(reports) {
    try {
      if (!fs.existsSync(this.indexFile)) {
        console.warn('Index file not found, skipping update');
        return;
      }
      
      let content = fs.readFileSync(this.indexFile, 'utf8');
      
      // Find the auto-generated content section
      const startMarker = '/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */';
      const endMarker = '/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */';
      
      const startIndex = content.indexOf(startMarker);
      const endIndex = content.indexOf(endMarker);
      
      if (startIndex === -1 || endIndex === -1) {
        console.warn('Auto-generated content markers not found in index file');
        return;
      }
      
      // Generate new content
      const newContent = this.generateLatestContent(reports);
      
      // Replace the content between markers
      const beforeContent = content.substring(0, startIndex + startMarker.length);
      const afterContent = content.substring(endIndex);
      
      content = beforeContent + '\n' + newContent + '\n          ' + afterContent;
      
      // Write back to file
      fs.writeFileSync(this.indexFile, content, 'utf8');
      
    } catch (error) {
      throw new Error(`Failed to update index file: ${error.message}`);
    }
  }

  generateLatestContent(reports) {
    if (reports.length === 0) {
      return `            <p className="text-center text-white/60">No recent reports available</p>`;
    }
    
    let content = '';
    
    for (const report of reports) {
      const reportName = report.name.replace('.md', '');
      const displayName = reportName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      content += `              <Link href="/reports/${report.path.replace('.md', '')}" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">${displayName}</h3>
                <p className="mt-1 text-sm text-white/75">Latest ${report.type} report.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>`;
      
      if (reports.indexOf(report) < reports.length - 1) {
        content += '\n              ';
      }
    }
    
    return content;
  }
}

// Run if called directly
if (require.main === module) {
  const advertiser = new FrontIndexAdvertiser();
  advertiser.advertise().then(result => {
    if (result.success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  });
}

module.exports = FrontIndexAdvertiser;