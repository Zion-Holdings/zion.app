const fs = require('fs');
const path = require('path');

class EnhancedNetlifyFunctionsManifestGenerator {
    constructor() {
        this.functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
        this.outputFile = path.join(this.functionsDir, 'functions-manifest-enhanced.json');
        this.backupFile = path.join(this.functionsDir, 'functions-manifest-backup.json');
    }

    async generate() {
        try {
            console.log('🔄 Generating enhanced Netlify functions manifest...');
            
            // Read existing manifest
            const existingManifest = this.readExistingManifest();
            
            // Create enhanced manifest
            const enhancedManifest = {
                generatedAt: new Date().toISOString(),
                version: '2.0.0',
                redundancyLevel: 'ultimate',
                functions: existingManifest.functions || [],
                backupFunctions: this.generateBackupFunctions(existingManifest.functions || []),
                healthChecks: this.generateHealthChecks(),
                monitoring: this.generateMonitoringConfig(),
                recovery: this.generateRecoveryConfig()
            };
            
            // Write enhanced manifest
            fs.writeFileSync(this.outputFile, JSON.stringify(enhancedManifest, null, 2));
            
            // Create backup
            fs.writeFileSync(this.backupFile, JSON.stringify(existingManifest, null, 2));
            
            console.log('✅ Enhanced manifest generated successfully');
            console.log(`📁 Output: ${this.outputFile}`);
            console.log(`💾 Backup: ${this.backupFile}`);
            
            return enhancedManifest;
        } catch (error) {
            console.error('❌ Error generating enhanced manifest:', error);
            throw error;
        }
    }

    readExistingManifest() {
        try {
            const manifestPath = path.join(this.functionsDir, 'functions-manifest.json');
            if (fs.existsSync(manifestPath)) {
                return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            }
        } catch (error) {
            console.warn('⚠️ Could not read existing manifest:', error.message);
        }
        return { functions: [] };
    }

    generateBackupFunctions(functions) {
        return functions.map(func => ({
            name: `${func}-backup`,
            type: 'backup',
            status: 'active',
            lastBackup: new Date().toISOString()
        }));
    }

    generateHealthChecks() {
        return {
            enabled: true,
            interval: '5m',
            timeout: '30s',
            retries: 3,
            alertThreshold: 0.8
        };
    }

    generateMonitoringConfig() {
        return {
            enabled: true,
            metrics: ['response_time', 'error_rate', 'throughput'],
            alerts: ['error_rate_high', 'response_time_slow', 'function_down']
        };
    }

    generateRecoveryConfig() {
        return {
            enabled: true,
            autoRestart: true,
            maxRestarts: 5,
            restartDelay: '10s',
            fallbackStrategy: 'backup_function'
        };
    }
}

// Run if called directly
if (require.main === module) {
    const generator = new EnhancedNetlifyFunctionsManifestGenerator();
    generator.generate().catch(console.error);
}

module.exports = { EnhancedNetlifyFunctionsManifestGenerator };