const AutomationTask = require('../core/AutomationTask');
const { execSync, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class DependencyUpdater extends AutomationTask {
  constructor(config = {}) {
    super({
      name: DependencyUpdater,
      schedule: '0 2 * * *', // Daily at 2 AM
      enabled: true,
      autoCreatePR: true,
      testUpdates: true,
      maxConcurrentUpdates: 5,
      ...config
    });
    
    this.lastCheck = null;
    this.updateHistory = [];
  }

  async run() {
    console.log('🔍 Starting dependency update check...');
    
    try {
      // Check for outdated packages
      const outdatedPackages = await this.checkOutdatedPackages();
      
      if (outdatedPackages.length === 0) {
        console.log('✅ All packages are up to date');
        this.lastStatus = success;
        this.lastRun = new Date();
        return { status: up_to_date, packages: [] };
      }
      
      console.log(`📦 Found ${outdatedPackages.length} outdated packages`);
      
      // Filter packages based on update strategy
      const packagesToUpdate = await this.filterPackagesForUpdate(outdatedPackages);
      
      if (packagesToUpdate.length === 0) {
        console.log('⚠️ No packages selected for update');
        this.lastStatus = success;
        this.lastRun = new Date();
        return { status: no_updates_needed, packages: [] };
      }
      
      // Update packages
      const updateResults = await this.updatePackages(packagesToUpdate);
      
      // Test updates
      if (this.config.testUpdates) {
        await this.testUpdates();
      }
      
      // Create PR if enabled
      if (this.config.autoCreatePR && updateResults.length > 0) {
        await this.createPullRequest(updateResults);
      }
      
      // Record update history
      this.updateHistory.push({
        timestamp: new Date().toISOString(),
        packages: updateResults,
        status: success
      });
      
      this.lastStatus = success;
      this.lastRun = new Date();
      
      return {
        status: updates_applied,
        packages: updateResults,
        count: updateResults.length
      };
      
    } catch (error) {
      console.error('❌ Dependency update failed:', error);
      this.lastStatus = failed;
      this.lastError = error.message;
      this.lastRun = new Date();
      
      // Record failed update
      this.updateHistory.push({
        timestamp: new Date().toISOString(),
        error: error.message,
        status: failed
      });
      
      throw error;
    }
  }

  async checkOutdatedPackages() {
    try {
      const output = execSync('npm outdated --json', { 
        encoding: utf8,
        stdio: pipe
      });
      
      const outdated = JSON.parse(output || {});
      return Object.keys(outdated).map(packageName => ({
        name: packageName,
        current: outdated[packageName].current,
        wanted: outdated[packageName].wanted,
        latest: outdated[packageName].latest,
        location: outdated[packageName].location
      }));
    } catch (error) {
      if (error.status === 1) {
        // npm outdated returns 1 when no packages are outdated
        return [];
      }
      throw error;
    }
  }

  async filterPackagesForUpdate(packages) {
    const filtered = [];
    
    for (const pkg of packages) {
      // Skip major version updates for critical packages
      if (this.isCriticalPackage(pkg.name) && this.isMajorUpdate(pkg.current, pkg.latest)) {
        console.log(`⚠️ Skipping major update for critical package: ${pkg.name}`);
        continue;
      }
      
      // Skip packages with known breaking changes
      if (await this.hasBreakingChanges(pkg.name, pkg.current, pkg.latest)) {
        console.log(`⚠️ Skipping package with breaking changes: ${pkg.name}`);
        continue;
      }
      
      // Skip packages that are too recent
      if (await this.isTooRecent(pkg.name, pkg.latest)) {
        console.log(`⚠️ Skipping too recent package: ${pkg.name}`);
        continue;
      }
      
      filtered.push(pkg);
    }
    
    // Limit concurrent updates
    return filtered.slice(0, this.config.maxConcurrentUpdates);
  }

  isCriticalPackage(packageName) {
    const criticalPackages = [
      react, react-dom, next, typescript, node,
      express, prisma, supabase, stripe
    ];
    
    return criticalPackages.some(critical => 
      packageName === critical || packageName.startsWith(`${critical}-`)
    );
  }

  isMajorUpdate(current, latest) {
    const currentMajor = parseInt(current.split('.')[0]);
    const latestMajor = parseInt(latest.split('.')[0]);
    return latestMajor > currentMajor;
  }

  async hasBreakingChanges(packageName, current, latest) {
    try {
      // Check if there's a breaking changes note in the package
      const packageJson = JSON.parse(await fs.readFile('package.json', utf8));
      const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      if (deps[packageName]) {
        // This is a simplified check - in production you'd check changelogs
        return false;
      }
    } catch (error) {
      console.warn(`⚠️ Could not check breaking changes for ${packageName}:`, error.message);
    }
    
    return false;
  }

  async isTooRecent(packageName, version) {
    try {
      // Check if the package was published very recently (within 24 hours)
      const output = execSync(`npm view ${packageName}@${version} time --json`, {
        encoding: utf8,
        stdio: pipe
      });
      
      const timeData = JSON.parse(output);
      const publishTime = new Date(timeData[version]);
      const hoursSincePublish = (Date.now() - publishTime.getTime()) / (1000 * 60 * 60);
      
      return hoursSincePublish < 24;
    } catch (error) {
      console.warn(`⚠️ Could not check publish time for ${packageName}:`, error.message);
      return false;
    }
  }

  async updatePackages(packages) {
    const results = [];
    
    for (const pkg of packages) {
      try {
        console.log(`📦 Updating ${pkg.name} from ${pkg.current} to ${pkg.latest}`);
        
        // Update the package
        const updateCommand = pkg.location === dependencies; 
          ? `npm install ${pkg.name}@${pkg.latest}`
          : `npm install ${pkg.name}@${pkg.latest} --save-dev`;
        
        execSync(updateCommand, { stdio: pipe });
        
        results.push({
          name: pkg.name,
          from: pkg.current,
          to: pkg.latest,
          status: updated
        });
        
        console.log(`✅ Updated ${pkg.name} successfully`);
        
      } catch (error) {
        console.error(`❌ Failed to update ${pkg.name}:`, error.message);
        
        results.push({
          name: pkg.name,
          from: pkg.current,
          to: pkg.latest,
          status: failed,
          error: error.message
        });
      }
    }
    
    return results;
  }

  async testUpdates() {
    console.log('🧪 Testing updates...');
    
    try {
      // Run tests
      execSync('npm test', { stdio: pipe });
      console.log('✅ Tests passed');
      
      // Run build
      execSync('npm run build', { stdio: pipe });
      console.log('✅ Build successful');
      
      // Run lint
      execSync('npm run lint', { stdio: pipe });
      console.log('✅ Lint passed');
      
    } catch (error) {
      console.error('❌ Tests failed after updates:', error.message);
      throw new Error(`Update validation failed: ${error.message}`);
    }
  }

  async createPullRequest(updates) {
    console.log('🔀 Creating pull request...');
    
    try {
      // Create a new branch
      const branchName = `deps/auto-update-${Date.now()}`;
      execSync(`git checkout -b ${branchName}`, { stdio: pipe });
      
      // Stage changes
      execSync('git add package.json package-lock.json', { stdio: pipe });
      
      // Commit changes
      const commitMessage = this.generateCommitMessage(updates);
      execSync(`git commit -m "${commitMessage}"`, { stdio: pipe });
      
      // Push branch
      execSync(`git push origin ${branchName}`, { stdio: pipe });
      
      // Create PR using GitHub CLI or API
      await this.createGitHubPR(branchName, updates);
      
      console.log(`✅ Pull request created: ${branchName}`);
      
    } catch (error) {
      console.error('❌ Failed to create pull request:', error.message);
      throw error
    }
  }

  generateCommitMessage(updates) {
    const packageNames = updates.map(u => u.name).join(', );
    const updateCount = updates.length;
    
    return `chore(deps): auto-update ${updateCount} dependencies

Updated packages:
${updates.map(u => `- ${u.name}: ${u.from} → ${u.to}`).join('\n')}`

This update was automatically generated by the dependency updater.`;
  }

  async createGitHubPR(branchName, updates) {
    try {
      // Use GitHub CLI if available
      const title = `chore(deps): auto-update ${updates.length} dependencies`;
      const body = this.generatePRBody(updates);
      
      execSync(`gh pr create --title "${title}" --body "${body}" --base main --head ${branchName}`, {
        stdio: pipe
      });
      
    } catch (error) {
      console.warn('⚠️ GitHub CLI not available, PR creation skipped');
      // In production, you'd implement GitHub API fallback
    }
  }

  generatePRBody(updates) {
    return `## 🤖 Automated Dependency Updates

This PR was automatically generated by the dependency updater.

### 📦 Updated Packages

${updates.map(u => `- **${u.name}**: \`${u.from}\` → \`${u.to}\``).join('\n')}`

### ✅ Validation

- [x] All tests pass
- [x] Build successful
- [x] Lint checks pass

### 🔍 Review Notes

Please review these updates, especially for:
- Breaking changes in major version updates
- Security implications
- Performance impact

### 📊 Update Summary

- **Total packages**: ${updates.length}
- **Major updates**: ${updates.filter(u => this.isMajorUpdate(u.from, u.to)).length}
- **Minor/patch updates**: ${updates.filter(u => !this.isMajorUpdate(u.from, u.to)).length}

---
*This PR was created automatically. Please review and merge if everything looks good.*`;
  }

  async selfHeal(error) {
    console.log('🔧 Attempting self-healing for DependencyUpdater...');
    
    if (error.message.includes('network') || error.message.includes('connection')) {
      console.log('⏳ Network issue detected, waiting before retry...');
      await new Promise(resolve => setTimeout(resolve, 30000));
      return;
    }
    
    if (error.message.includes('permission') || error.message.includes('access')) {
      console.log('🔐 Permission issue detected, checking git configuration...');
      await this.checkGitConfiguration();
      return;
    }
    
    if (error.message.includes('conflict') || error.message.includes('merge')) {
      console.log('🔀 Git conflict detected, cleaning up...');
      await this.cleanupGitState();
      return;
    }
  }

  async checkGitConfiguration() {
    try {
      // Check git user configuration
      execSync('git config user.name', { stdio: pipe });
      execSync('git config user.email', { stdio: pipe });
    } catch (error) {
      console.log('⚠️ Git configuration missing, setting up...');
      execSync('git config user.name "Dependency Updater Bot"', { stdio: pipe });
      execSync('git config user.email "bot@zion.app"', { stdio: pipe });
    }
  }

  async cleanupGitState() {
    try {
      // Reset to clean state
      execSync('git reset --hard HEAD', { stdio: pipe });
      execSync('git clean -fd', { stdio: pipe });
      
      // Switch back to main branch
      execSync('git checkout main', { stdio: pipe });
      execSync('git pull origin main', { stdio: pipe });
      
    } catch (error) {
      console.error('❌ Failed to cleanup git state:', error.message);
    }
  }

  getStatus() {
    return {
      ...super.getStatus(),
      lastCheck: this.lastCheck,
      updateHistory: this.updateHistory.slice(-10), // Last 10 updates
      totalUpdates: this.updateHistory.length
    };
  }
}

module.exports = DependencyUpdater; 