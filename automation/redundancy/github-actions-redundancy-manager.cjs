#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class GitHubActionsRedundancyManager {
  constructor() {
    this.workflowsDir = path.join(process.cwd(), ".github", "workflows");
    this.backupDir = path.join(process.cwd(), "automation", "backups", "github-actions");
    this.redundancyDir = path.join(process.cwd(), "automation", "redundancy", "workflows");
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.backupDir, this.redundancyDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] GITHUB-ACTIONS-REDUNDANCY: ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(process.cwd(), "automation", "logs", "github-actions-redundancy.log");
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  runCommand(command, args = []) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 10
    });
    return {
      status: result.status,
      stdout: result.stdout || "",
      stderr: result.stderr || "",
      success: result.status === 0
    };
  }

  getWorkflowFiles() {
    if (!fs.existsSync(this.workflowsDir)) {
      this.log("Workflows directory not found");
      return [];
    }

    const files = fs.readdirSync(this.workflowsDir);
    return files.filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
  }

  backupWorkflows() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(this.backupDir, `workflows-backup-${timestamp}`);
    
    if (!fs.existsSync(backupPath)) {
      fs.mkdirSync(backupPath, { recursive: true });
    }

    const workflows = this.getWorkflowFiles();
    let backedUp = 0;

    workflows.forEach(workflow => {
      const sourcePath = path.join(this.workflowsDir, workflow);
      const destPath = path.join(backupPath, workflow);
      
      try {
        fs.copyFileSync(sourcePath, destPath);
        backedUp++;
        this.log(`Backed up workflow: ${workflow}`);
      } catch (error) {
        this.log(`Failed to backup workflow ${workflow}: ${error.message}`);
      }
    });

    this.log(`Workflow backup completed: ${backedUp} workflows backed up to ${backupPath}`);
    return backupPath;
  }

  createRedundancyWorkflows() {
    this.log("Creating redundancy workflows...");

    // Marketing Sync Redundancy
    const marketingSyncRedundancy = {
      name: "Marketing Sync Redundancy",
      on: {
        schedule: [{ cron: "30 */12 * * *" }], // 30 minutes after the original
        workflow_dispatch: null
      },
      permissions: { contents: "write" },
      jobs: {
        "run-marketing-sync-redundant": {
          runs_on: "ubuntu-latest",
          steps: [
            {
              name: "Checkout repository",
              uses: "actions/checkout@v4"
            },
            {
              name: "Setup Node.js",
              uses: "actions/setup-node@v4",
              with: { "node-version": "20" }
            },
            {
              name: "Run marketing-sync (redundant)",
              env: {
                LINKEDIN_ACCESS_TOKEN: "${{ secrets.LINKEDIN_ACCESS_TOKEN }}",
                LINKEDIN_URN: "${{ secrets.LINKEDIN_URN }}",
                IG_USER_ID: "${{ secrets.IG_USER_ID }}",
                IG_ACCESS_TOKEN: "${{ secrets.IG_ACCESS_TOKEN }}"
              },
              run: "node automation/marketing-sync.js"
            },
            {
              name: "Commit report if changed (redundant)",
              run: `git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "chore(marketing): update marketing-sync report (redundant)"
  git push origin HEAD:main
else
  echo "No changes to commit."
fi`
            }
          ]
        }
      }
    };

    // Sync Health Redundancy
    const syncHealthRedundancy = {
      name: "Sync Health Redundancy",
      on: {
        schedule: [{ cron: "*/20 * * * *" }], // Every 20 minutes (more frequent than original)
        workflow_dispatch: null
      },
      permissions: { contents: "write" },
      jobs: {
        "check-sync-redundant": {
          runs_on: "ubuntu-latest",
          steps: [
            {
              name: "Checkout repository",
              uses: "actions/checkout@v4",
              with: { "fetch-depth": 0 }
            },
            {
              name: "Setup Node.js",
              uses: "actions/setup-node@v4",
              with: { "node-version": "20" }
            },
            {
              name: "Run pm2-auto-sync (redundant safe mode)",
              env: {
                AUTO_SYNC_STRATEGY: "hardreset",
                AUTO_SYNC_CLEAN: "0"
              },
              run: "node automation/pm2-auto-sync.js || true"
            },
            {
              name: "Push if repository is ahead (redundant)",
              run: `git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
AHEAD=$(git rev-list --left-right --count HEAD...origin/main | awk '{print $1}')
if [ "$AHEAD" != "0" ]; then
  git push origin HEAD:main
else
  echo "No push needed."
fi`
            }
          ]
        }
      }
    };

    // Build Health Monitor Redundancy
    const buildHealthRedundancy = {
      name: "Build Health Monitor Redundancy",
      on: {
        schedule: [{ cron: "*/10 * * * *" }], // Every 10 minutes
        workflow_dispatch: null
      },
      permissions: { contents: "write" },
      jobs: {
        "monitor-build-health": {
          runs_on: "ubuntu-latest",
          steps: [
            {
              name: "Checkout repository",
              uses: "actions/checkout@v4"
            },
            {
              name: "Setup Node.js",
              uses: "actions/setup-node@v4",
              with: { "node-version": "20" }
            },
            {
              name: "Run build health check",
              run: "node automation/pre-build-health-check.cjs"
            },
            {
              name: "Run build failure recovery",
              run: "node automation/build-failure-recovery.cjs"
            },
            {
              name: "Commit any fixes",
              run: `git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "chore(build): apply build health fixes (redundant)"
  git push origin HEAD:main
fi`
            }
          ]
        }
      }
    };

    // Dependency Update Redundancy
    const dependencyUpdateRedundancy = {
      name: "Dependency Update Redundancy",
      on: {
        schedule: [{ cron: "0 2 * * *" }], // Daily at 2 AM
        workflow_dispatch: null
      },
      permissions: { contents: "write" },
      jobs: {
        "update-dependencies": {
          runs_on: "ubuntu-latest",
          steps: [
            {
              name: "Checkout repository",
              uses: "actions/checkout@v4"
            },
            {
              name: "Setup Node.js",
              uses: "actions/setup-node@v4",
              with: { "node-version": "20" }
            },
            {
              name: "Run dependency maintenance",
              run: "node automation/dependency-update-orchestrator.cjs"
            },
            {
              name: "Commit dependency updates",
              run: `git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "chore(deps): update dependencies (redundant)"
  git push origin HEAD:main
fi`
            }
          ]
        }
      }
    };

    // Content Quality Redundancy
    const contentQualityRedundancy = {
      name: "Content Quality Redundancy",
      on: {
        schedule: [{ cron: "0 */6 * * *" }], // Every 6 hours
        workflow_dispatch: null
      },
      permissions: { contents: "write" },
      jobs: {
        "fix-content-quality": {
          runs_on: "ubuntu-latest",
          steps: [
            {
              name: "Checkout repository",
              uses: "actions/checkout@v4"
            },
            {
              name: "Setup Node.js",
              uses: "actions/setup-node@v4",
              with: { "node-version": "20" }
            },
            {
              name: "Run content quality fixes",
              run: "node automation/content-quality-fixer.cjs && node automation/content-quality-analyzer.cjs"
            },
            {
              name: "Commit content fixes",
              run: `git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "chore(content): apply content quality fixes (redundant)"
  git push origin HEAD:main
fi`
            }
          ]
        }
      }
    };

    const redundancyWorkflows = [
      { name: "marketing-sync-redundancy.yml", content: marketingSyncRedundancy },
      { name: "sync-health-redundancy.yml", content: syncHealthRedundancy },
      { name: "build-health-redundancy.yml", content: buildHealthRedundancy },
      { name: "dependency-update-redundancy.yml", content: dependencyUpdateRedundancy },
      { name: "content-quality-redundancy.yml", content: contentQualityRedundancy }
    ];

    let created = 0;
    redundancyWorkflows.forEach(workflow => {
      const workflowPath = path.join(this.redundancyDir, workflow.name);
      try {
        const yamlContent = this.convertToYaml(workflow.content);
        fs.writeFileSync(workflowPath, yamlContent);
        created++;
        this.log(`Created redundancy workflow: ${workflow.name}`);
      } catch (error) {
        this.log(`Failed to create workflow ${workflow.name}: ${error.message}`);
      }
    });

    this.log(`Redundancy workflows created: ${created} workflows in ${this.redundancyDir}`);
    return created;
  }

  convertToYaml(obj, indent = 0) {
    const spaces = "  ".repeat(indent);
    let yaml = "";
    
    for (const [key, value] of Object.entries(obj)) {
      if (value === null) {
        yaml += `${spaces}${key}:\n`;
      } else if (typeof value === "object" && !Array.isArray(value)) {
        yaml += `${spaces}${key}:\n${this.convertToYaml(value, indent + 1)}`;
      } else if (Array.isArray(value)) {
        yaml += `${spaces}${key}:\n`;
        value.forEach(item => {
          if (typeof item === "object") {
            yaml += `${spaces}- ${this.convertToYaml(item, indent + 1).trim()}`;
          } else {
            yaml += `${spaces}- ${item}\n`;
          }
        });
      } else {
        yaml += `${spaces}${key}: ${value}\n`;
      }
    }
    
    return yaml;
  }

  deployRedundancyWorkflows() {
    this.log("Deploying redundancy workflows to .github/workflows...");
    
    const redundancyWorkflows = fs.readdirSync(this.redundancyDir);
    let deployed = 0;

    redundancyWorkflows.forEach(workflow => {
      if (workflow.endsWith('.yml') || workflow.endsWith('.yaml')) {
        const sourcePath = path.join(this.redundancyDir, workflow);
        const destPath = path.join(this.workflowsDir, workflow);
        
        try {
          fs.copyFileSync(sourcePath, destPath);
          deployed++;
          this.log(`Deployed redundancy workflow: ${workflow}`);
        } catch (error) {
          this.log(`Failed to deploy workflow ${workflow}: ${error.message}`);
        }
      }
    });

    this.log(`Redundancy workflows deployed: ${deployed} workflows to ${this.workflowsDir}`);
    return deployed;
  }

  createWorkflowOrchestrator() {
    const orchestratorContent = `#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class WorkflowOrchestrator {
  constructor() {
    this.workflowsDir = path.join(process.cwd(), ".github", "workflows");
    this.logsDir = path.join(process.cwd(), "automation", "logs");
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = \`[\${timestamp}] WORKFLOW-ORCHESTRATOR: \${message}\`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, "workflow-orchestrator.log");
    fs.appendFileSync(logFile, logMessage + "\\n");
  }

  runCommand(command, args = []) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 10
    });
    return {
      status: result.status,
      stdout: result.stdout || "",
      stderr: result.stderr || "",
      success: result.status === 0
    };
  }

  getWorkflowStatus() {
    // This would typically check GitHub API for workflow status
    // For now, we'll check local workflow files
    const workflows = fs.readdirSync(this.workflowsDir);
    return workflows.filter(w => w.endsWith('.yml') || w.endsWith('.yaml'));
  }

  triggerWorkflow(workflowName) {
    this.log(\`Triggering workflow: \${workflowName}\`);
    
    // This would typically use GitHub API to trigger workflows
    // For now, we'll simulate by running the automation scripts
    const workflowMap = {
      "marketing-sync-redundancy.yml": "automation/marketing-sync.js",
      "sync-health-redundancy.yml": "automation/pm2-auto-sync.js",
      "build-health-redundancy.yml": "automation/pre-build-health-check.cjs",
      "dependency-update-redundancy.yml": "automation/dependency-update-orchestrator.cjs",
      "content-quality-redundancy.yml": "automation/content-quality-fixer.cjs"
    };

    const scriptPath = workflowMap[workflowName];
    if (scriptPath && fs.existsSync(scriptPath)) {
      const result = this.runCommand("node", [scriptPath]);
      if (result.success) {
        this.log(\`Workflow \${workflowName} executed successfully\`);
        return true;
      } else {
        this.log(\`Workflow \${workflowName} failed: \${result.stderr}\`);
        return false;
      }
    } else {
      this.log(\`No script mapping found for workflow: \${workflowName}\`);
      return false;
    }
  }

  run() {
    const command = process.argv[2];
    
    switch (command) {
      case "status":
        const workflows = this.getWorkflowStatus();
        console.log("Available workflows:", workflows);
        break;
      case "trigger":
        const workflowName = process.argv[3];
        if (workflowName) {
          this.triggerWorkflow(workflowName);
        } else {
          this.log("Please specify workflow name");
        }
        break;
      default:
        this.log("Available commands: status, trigger <workflow>");
        this.log("Usage: node automation/redundancy/workflow-orchestrator.cjs <command>");
    }
  }
}

if (require.main === module) {
  const orchestrator = new WorkflowOrchestrator();
  orchestrator.run();
}

module.exports = WorkflowOrchestrator;
`;

    const orchestratorPath = path.join(this.redundancyDir, "workflow-orchestrator.cjs");
    try {
      fs.writeFileSync(orchestratorPath, orchestratorContent);
      this.log(`Created workflow orchestrator: ${orchestratorPath}`);
      return orchestratorPath;
    } catch (error) {
      this.log(`Failed to create workflow orchestrator: ${error.message}`);
      return null;
    }
  }

  run() {
    const command = process.argv[2];
    
    switch (command) {
      case "backup":
        this.backupWorkflows();
        break;
      case "create":
        this.createRedundancyWorkflows();
        break;
      case "deploy":
        this.deployRedundancyWorkflows();
        break;
      case "orchestrator":
        this.createWorkflowOrchestrator();
        break;
      case "full-setup":
        this.log("Running full redundancy setup...");
        this.backupWorkflows();
        this.createRedundancyWorkflows();
        this.createWorkflowOrchestrator();
        this.log("Full redundancy setup completed");
        break;
      default:
        this.log("Available commands: backup, create, deploy, orchestrator, full-setup");
        this.log("Usage: node automation/redundancy/github-actions-redundancy-manager.cjs <command>");
    }
  }
}

// Run if called directly
if (require.main === module) {
  const manager = new GitHubActionsRedundancyManager();
  manager.run();
}

module.exports = GitHubActionsRedundancyManager;