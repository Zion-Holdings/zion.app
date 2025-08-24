
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
const { glob } = require('glob');

class FinalSyntaxFixer {
    constructor() {
        this.projectRoot = process.cwd();
        this.fixedFiles = [];
        this.errors = [];
    }

    log(message) {
        logger.info(`[Final Syntax Fixer] ${message}`);
    }

    async fixRemainingSyntaxErrors() {
        this.log('🔧 Starting final syntax error fixing...');

        try {
            // Get all TypeScript and JavaScript files
            const files = await glob('src/**/*.{ts,tsx,js,jsx}, {
                ignore: ['node_modules/**', .next/**', dist/**', build/**']
            });

            this.log(`📁 Found ${files.length} files to check`);

            for (const file of files) {
                await this.fixFile(file);
            }

            this.log(`✅ Fixed ${this.fixedFiles.length} files`);
            if (this.errors.length > 0) {
                this.log(`⚠️  ${this.errors.length} files had errors that couldn't be auto-fixed`);
            }

            return {
                fixedFiles: this.fixedFiles,
                errors: this.errors
            };

        } catch (error) {
            this.log(`❌ Error fixing syntax: ${error.message}`);
            throw error;
        }
    }

    async fixFile(filePath) {
        try {
            const fullPath = path.join(this.projectRoot, filePath);
            const content = fs.readFileSync(fullPath, 'utf8');
            const originalContent = content;
            
            let fixedContent = content;

            // Check for specific problematic patterns and fix them
            if (this.hasUnterminatedString(content)) {
                fixedContent = this.fixUnterminatedStrings(fixedContent);
            }
            
            if (this.hasInvalidVariableName(content)) {
                fixedContent = this.fixInvalidVariableNames(fixedContent);
            }
            
            if (this.hasInvalidFunctionName(content)) {
                fixedContent = this.fixInvalidFunctionNames(fixedContent);
            }
            
            if (this.hasInvalidImportExport(content)) {
                fixedContent = this.fixInvalidImportExport(fixedContent);
            }

            // Only write if content changed
            if (fixedContent !== originalContent) {
                fs.writeFileSync(fullPath, fixedContent);
                this.fixedFiles.push(filePath);
                this.log(`✅ Fixed: ${filePath}`);
            }

        } catch (error) {
            this.errors.push({ file: filePath, error: error.message });
            this.log(`❌ Error fixing ${filePath}: ${error.message}`);
        }
    }

    hasUnterminatedString(content) {
        return //.test(content) || 
               /""""""""""""""""""/.test(content) || """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
               /``````````````````/.test(content) ||
               /import React from react';default function/.test(content);
    }

    hasInvalidVariableName(content) {
        return /const [^a-zA-Z_$][^a-zA-Z0-9_$]*? =/.test(content) ||
               /const [^a-zA-Z_$][^a-zA-Z0-9_$]*? =/.test(content);
    }

    hasInvalidFunctionName(content) {
        return /function [^a-zA-Z_$][^a-zA-Z0-9_$]*?\(/.test(content) ||
               /default function [^a-zA-Z_$][^a-zA-Z0-9_$]*?\(/.test(content);
    }

    hasInvalidImportExport(content) {
        return /import.*export/.test(content) || /export.*import/.test(content);
    }

    fixUnterminatedStrings(content) {
        return content
            // Remove multiple consecutive quotes
            .replace(/''+/g, "'")""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            .replace(/""+/g, "')
            .replace(/``+/g, `')
            // Fix import/patterns
            .replace(/import React from react';default function/g, "import React from react';\n\ndefault function")""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            .replace(/import React from react';function/g, "import React from react';\n\nfunction")""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            .replace(/import React from react';const/g, "import React from react';\n\nconst")""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            // Remove trailing quotes at end of lines
            .replace(/''+$/gm, )
            .replace(/""+$/gm, )
            .replace(/``+$/gm, );
    }

    fixInvalidVariableNames(content) {
        return content
            .replace(/const ([^a-zA-Z_$][^a-zA-Z0-9_$]*?) =/g, (match, varName) => {
                const validName = varName.replace(/[^a-zA-Z0-9_$]/g, _');
                return `const ${validName} =`;
            })
            .replace(/const ([^a-zA-Z_$][^a-zA-Z0-9_$]*?) =/g, (match, varName) => {
                const validName = varName.replace(/[^a-zA-Z0-9_$]/g, _');
                return `const ${validName} =`;
            });
    }

    fixInvalidFunctionNames(content) {
        return content
            .replace(/default function ([^a-zA-Z_$][^a-zA-Z0-9_$]*?)\(/g, (match, funcName) => {
                const validName = funcName.replace(/[^a-zA-Z0-9_$]/g, _');
                return `default function ${validName}(`;
            })
            .replace(/function ([^a-zA-Z_$][^a-zA-Z0-9_$]*?)\(/g, (match, funcName) => {
                const validName = funcName.replace(/[^a-zA-Z0-9_$]/g, _');
                return `function ${validName}(`;
            });
    }

    fixInvalidImportExport(content) {
        return content
            .replace(/import\s+([^'"]+?)export/g, "import $1\n\nexport")""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            .replace(/export\s+([^'"]+?)import/g, "$1\n\nimport");""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    }

    async generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            fixedFiles: this.fixedFiles,
            errors: this.errors,
            summary: {
                totalFixed: this.fixedFiles.length,
                totalErrors: this.errors.length,
                successRate: this.fixedFiles.length / (this.fixedFiles.length + this.errors.length) * 100
            }
        };

        const reportPath = path.join(this.projectRoot, automation', reports', `final-syntax-fix-${Date.now()}.json`);
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

        return report;
    }
}

// Main execution
async function main() {
    const fixer = new FinalSyntaxFixer();
    
    try {
        const result = await fixer.fixRemainingSyntaxErrors();
        const report = await fixer.generateReport();
        
        logger.info('\n📊 Final Syntax Fix Report:');
        logger.info(`Files Fixed: ${report.summary.totalFixed}`);
        logger.info(`Errors: ${report.summary.totalErrors}`);
        logger.info(`Success Rate: ${report.summary.successRate.toFixed(1)}%`);
        
        if (result.fixedFiles.length > 0) {
            logger.info('\n✅ Fixed Files:');
            result.fixedFiles.forEach(file => logger.info(`  - ${file}`));
        }
        
        if (result.errors.length > 0) {
            logger.info('\n❌ Files with Errors:');
            result.errors.forEach(({ file, error }) => logger.info(`  - ${file}: ${error}`));
        }
        
        process.exit(0);
    } catch (error) {
        logger.error('❌ Final syntax fixing failed:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = FinalSyntaxFixer; 

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

