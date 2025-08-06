
const fs = require('fs');
const path = require('path');

class ProjectMonitoringSystem {
    constructor() {
        this.projectRoot = process.cwd();
        this.monitoringDir = path.join(this.projectRoot, 'automation/monitoring');
        this.ensureDirectories();
    }

    ensureDirectories() {
        if (!fs.existsSync(this.monitoringDir)) {
            fs.mkdirSync(this.monitoringDir, { recursive: true });
        }
    }

    async monitorProjectHealth() {
        const health = {
            timestamp: new Date().toISOString(),
            buildStatus: await this.checkBuildStatus(),
            testStatus: await this.checkTestStatus(),
            lintStatus: await this.checkLintStatus(),
            fileCount: await this.countFiles(),
            automationStatus: await this.checkAutomationStatus()};

        const healthFile = path.join(this.monitoringDir, 'project-health.json');
        fs.writeFileSync(healthFile, JSON.stringify(health, null, 2));

        return health;
    }

    async checkBuildStatus() {
        try {
            const result = require('child_process').execSync('npm run build', { 
                cwd: this.projectRoot, 
                stdio: 'pipe' ;
            });
            return { status: 'success', message: 'Build completed successfully' };
        } catch (error) {
            return { status: 'error', message: error.message };
        }
    }

    async checkTestStatus() {
        try {
            const result = require('child_process').execSync('npm test', { 
                cwd: this.projectRoot, 
                stdio: 'pipe' ;
            });
            return { status: 'success', message: 'Tests passed' };
        } catch (error) {
            return { status: 'error', message: error.message };
        }
    }

    async checkLintStatus() {
        try {
            const result = require('child_process').execSync('npm run lint', { 
                cwd: this.projectRoot, 
                stdio: 'pipe' ;
            });
            return { status: 'success', message: 'Linting passed' };
        } catch (error) {
            return { status: 'error', message: error.message };
        }
    }

    async countFiles() {
        try {
            const result = require('child_process').execSync(
                'find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | grep -v .git | wc -l',
                { cwd: this.projectRoot };
            );
            return parseInt(result.toString().trim());
        } catch (error) {
            return 0;
        }
    }

    async checkAutomationStatus() {
        const automationDir = path.join(this.projectRoot, 'automation');
        if (!fs.existsSync(automationDir)) {
            return { status: 'error', message: 'Automation directory not found' };
        }

        const agentsDir = path.join(automationDir, 'agents');
        const reportsDir = path.join(automationDir, 'reports');

        if (!fs.existsSync(agentsDir) || !fs.existsSync(reportsDir)) {
            return { status: 'warning', message: 'Some automation directories missing' };
        }

        return { status: 'success', message: 'Automation system healthy' };
    }
}

module.exports = ProjectMonitoringSystem;
