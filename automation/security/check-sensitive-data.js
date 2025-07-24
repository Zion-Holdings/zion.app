
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class SecurityChecker {
    constructor() {
        this.projectRoot = process.cwd();
        this.reportsDir = path.join(this.projectRoot, automation', 'reports');
        this.ensureDirectory(this.reportsDir);
        
        // Patterns to detect sensitive data
        this.sensitivePatterns = {
            apiKeys: [
                /api[_-]?key\s*[:=]\s*['"`][^'"`]{20}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /api[_-]?token\s*[:=]\s*['"`][^'"`]{20}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /access[_-]?token\s*[:=]\s*['"`][^'"`]{20}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /secret[_-]?key\s*[:=]\s*['"`][^'"`]{20}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /private[_-]?key\s*[:=]\s*['"`][^'"`]{20}['"`]/gi"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            ],
            passwords: [
                /password\s*[:=]\s*['"`][^'"`]{8}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /passwd\s*[:=]\s*['"`][^'"`]{8}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /pwd\s*[:=]\s*['"`][^'"`]{8}['"`]/gi"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            ],
            database: [
                /database[_-]?url\s*[:=]\s*['"`][^'"`]{20}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /db[_-]?url\s*[:=]\s*['"`][^'"`]{20}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /connection[_-]?string\s*[:=]\s*['"`][^'"`]{20}['"`]/gi"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            ],
            aws: [
                /aws[_-]?access[_-]?key[_-]?id\s*[:=]\s*['"`][^'"`]{20}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /aws[_-]?secret[_-]?access[_-]?key\s*[:=]\s*['"`][^'"`]{20}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /aws[_-]?session[_-]?token\s*[:=]\s*['"`][^'"`]{20}['"`]/gi"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            ],
            stripe: [
                /sk_live_[a-zA-Z0-9]{24}/g,
                /pk_live_[a-zA-Z0-9]{24}/g,
                /sk_test_[a-zA-Z0-9]{24}/g,
                /pk_test_[a-zA-Z0-9]{24}/g
            ],
            github: [
                /ghp_[a-zA-Z0-9]{36}/g,
                /gho_[a-zA-Z0-9]{36}/g,
                /ghu_[a-zA-Z0-9]{36}/g,
                /ghs_[a-zA-Z0-9]{36}/g,
                /ghr_[a-zA-Z0-9]{36}/g
            ],
            slack: [
                /xoxb-[a-zA-Z0-9-]+/g,
                /xoxp-[a-zA-Z0-9-]+/g,
                /xoxa-[a-zA-Z0-9-]+/g,
                /xoxr-[a-zA-Z0-9-]+/g
            ],
            email: [
                /email\s*[:=]\s*['"`][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}['"`]/gi"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            ],
            phone: [
                /phone\s*[:=]\s*['"`](\+?1[-.]?)?\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})['"`]/gi"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            ],
            ssn: [
                /ssn\s*[:=]\s*['"`]\d{3}-\d{2}-\d{4}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /social[_-]?security[_-]?number\s*[:=]\s*['"`]\d{3}-\d{2}-\d{4}['"`]/gi"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            ],
            creditCard: [
                /credit[_-]?card\s*[:=]\s*['"`]\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}['"`]/gi,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                /card[_-]?number\s*[:=]\s*['"`]\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}['"`]/gi"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            ]
        };

        // Files and directories to exclude
        this.excludePatterns = [
            /node_modules/,
            /\.git/,
            /\.next/,
            /dist/,
            /build/,
            /coverage/,
            /\.env\.example/,
            /package-lock\.json/,
            /yarn\.lock/,
            /\.log$/,
            /\.tmp$/,
            /\.temp$/,
            /\.cache$/,
            /\.DS_Store$/,
            /Thumbs\.db$/
        ];
    }

    ensureDirectory(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    log(message) {
        logger.info(`[Security Check] ${message}`);
    }

    shouldExcludeFile(filePath) {
        return this.excludePatterns.some(pattern => pattern.test(filePath));
    }

    async scanForSensitiveData() {
        this.log('🔒 Starting sensitive data scan...');

        const results = {
            timestamp: new Date().toISOString(),
            filesScanned: 0,
            issuesFound: 0,
            vulnerabilities: [],
            summary: {}
        };

        try {
            // Scan all files in the project
            await this.scanDirectory(this.projectRoot, results);
            
            // Generate summary
            results.summary = this.generateSummary(results.vulnerabilities);
            
            // Save results
            const reportFile = path.join(this.reportsDir, `security-scan-${Date.now()}.json`);
            fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));

            this.log(`✅ Security scan completed. Scanned ${results.filesScanned} files, found ${results.issuesFound} issues.`);
            return results;
        } catch (error) {
            this.log(`❌ Security scan failed: ${error.message}`);
            throw error;
        }
    }

    async scanDirectory(dir, results) {
        const items = fs.readdirSync(dir);

        for (const item of items) {
            const fullPath = path.join(dir, item);
            
            if (this.shouldExcludeFile(fullPath)) {
                continue;
            }

            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                await this.scanDirectory(fullPath, results);
            } else if (stat.isFile()) {
                await this.scanFile(fullPath, results);
            }
        }
    }

    async scanFile(filePath, results) {
        results.filesScanned++;

        try {
            // Only scan text files
            const ext = path.extname(filePath).toLowerCase();
            const textExtensions = ['.js', .jsx', .ts', .tsx', .json', .md', .txt', .yml', .yaml', .env', .config', .conf'];
            
            if (!textExtensions.includes(ext) && !this.isTextFile(filePath)) {
                return;
            }

            const content = fs.readFileSync(filePath, 'utf8');
            const relativePath = path.relative(this.projectRoot, filePath);

            // Check for sensitive patterns
            for (const [category, patterns] of Object.entries(this.sensitivePatterns)) {
                for (const pattern of patterns) {
                    const matches = content.match(pattern);
                    if (matches) {
                        results.issuesFound++;
                        results.vulnerabilities.push({
                            file: relativePath,
                            category: category,
                            pattern: pattern.source,
                            matches: matches.length,
                            severity: this.getSeverity(category),
                            recommendation: this.getRecommendation(category)
                        });
                    }
                }
            }

            // Check for hardcoded secrets
            const hardcodedSecrets = this.checkForHardcodedSecrets(content, relativePath);
            results.vulnerabilities.push(...hardcodedSecrets);
            results.issuesFound += hardcodedSecrets.length;

        } catch (error) {
            // Skip files that can't be read
            this.log(`⚠️  Could not scan file ${filePath}: ${error.message}`);
        }
    }

    isTextFile(filePath) {
        try {
            const buffer = fs.readFileSync(filePath, { encoding: null });
            const sample = buffer.slice(0, 1024);
            
            // Check if the file contains null bytes (binary file)
            return !sample.includes(0);
        } catch {
            return false;
        }
    }

    checkForHardcodedSecrets(content, filePath) {
        const secrets = [];
        
        // Check for common secret patterns
        const secretPatterns = [
            {
                pattern: /['"`](sk_live_|pk_live_|sk_test_|pk_test_)[a-zA-Z0-9]{24}['"`]/g,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                category: 'stripe_keys',
                severity: 'high',
                recommendation: Use environment variables for Stripe keys
            },
            {
                pattern: /['"`](ghp_|gho_|ghu_|ghs_|ghr_)[a-zA-Z0-9]{36}['"`]/g,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                category: 'github_tokens',
                severity: 'high',
                recommendation: Use environment variables for GitHub tokens
            },
            {
                pattern: /['"`](xoxb-|xoxp-|xoxa-|xoxr-)[a-zA-Z0-9-]+['"`]/g,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                category: 'slack_tokens',
                severity: 'high',
                recommendation: Use environment variables for Slack tokens
            },
            {
                pattern: /['"`]AIza[0-9A-Za-z-_]{35}['"`]/g,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                category: 'google_api_keys',
                severity: 'high',
                recommendation: Use environment variables for Google API keys
            }
        ];

        for (const secretPattern of secretPatterns) {
            const matches = content.match(secretPattern.pattern);
            if (matches) {
                secrets.push({
                    file: filePath,
                    category: secretPattern.category,
                    pattern: secretPattern.pattern.source,
                    matches: matches.length,
                    severity: secretPattern.severity,
                    recommendation: secretPattern.recommendation
                });
            }
        }

        return secrets;
    }

    getSeverity(category) {
        const severityMap = {
            apiKeys: 'high',
            passwords: 'high',
            database: 'high',
            aws: 'critical',
            stripe: 'critical',
            github: 'high',
            slack: 'high',
            email: 'medium',
            phone: 'medium',
            ssn: 'critical',
            creditCard: critical
        };
        
        return severityMap[category] || medium';
    }

    getRecommendation(category) {
        const recommendations = {
            apiKeys: Use environment variables for API keys',
            passwords: Use environment variables for passwords',
            database: Use environment variables for database connections',
            aws: Use AWS IAM roles or environment variables for AWS credentials',
            stripe: Use environment variables for Stripe keys',
            github: Use environment variables for GitHub tokens',
            slack: Use environment variables for Slack tokens',
            email: Consider using environment variables for email addresses',
            phone: Consider using environment variables for phone numbers',
            ssn: Never hardcode SSNs. Use secure storage solutions',
            creditCard: Never hardcode credit card numbers. Use secure payment processors
        };
        
        return recommendations[category] || Review and secure this sensitive data';
    }

    generateSummary(vulnerabilities) {
        const summary = {
            totalIssues: vulnerabilities.length,
            bySeverity: {},
            byCategory: {},
            criticalIssues: 0,
            highIssues: 0,
            mediumIssues: 0,
            lowIssues: 0
        };

        for (const vuln of vulnerabilities) {
            // Count by severity
            summary.bySeverity[vuln.severity] = (summary.bySeverity[vuln.severity] || 0) + 1;
            
            // Count by category
            summary.byCategory[vuln.category] = (summary.byCategory[vuln.category] || 0) + 1;
            
            // Count severity levels
            switch (vuln.severity) {
                case critical':
                    summary.criticalIssues++;
                    break;
                case high':
                    summary.highIssues++;
                    break;
                case medium':
                    summary.mediumIssues++;
                    break;
                case low':
                    summary.lowIssues++;
                    break;
            }
        }

        return summary;
    }
}

// Main execution
async function main() {
    const checker = new SecurityChecker();
    
    try {
        const results = await checker.scanForSensitiveData();
        
        // Log summary
        logger.info('\n🔒 Security Scan Summary:');
        logger.info(`Files Scanned: ${results.filesScanned}`);
        logger.info(`Issues Found: ${results.issuesFound}`);
        logger.info(`Critical Issues: ${results.summary.criticalIssues}`);
        logger.info(`High Issues: ${results.summary.highIssues}`);
        logger.info(`Medium Issues: ${results.summary.mediumIssues}`);
        logger.info(`Low Issues: ${results.summary.lowIssues}`);
        
        if (results.vulnerabilities.length > 0) {
            logger.info('\n🚨 Vulnerabilities Found:');
            results.vulnerabilities.forEach(vuln => {
                logger.info(`- ${vuln.file}: ${vuln.category} (${vuln.severity})`);
                logger.info(`  Recommendation: ${vuln.recommendation}`);
            });
            
            // Exit with error if critical or high issues found
            if (results.summary.criticalIssues > 0 || results.summary.highIssues > 0) {
                logger.info('\n❌ Critical or high severity issues found. Please fix before proceeding.');
                process.exit(1);
            }
        } else {
            logger.info('\n✅ No sensitive data issues found.');
        }
        
        process.exit(0);
    } catch (error) {
        logger.error('❌ Security check failed:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = SecurityChecker; 

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

