
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


class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');
    
    try {
      #!/usr/bin/env node

const fs = require('fs')
const _path = require('path');

// Files to fix
const filesToFix = [
  'src/components/community/ForumCategories.tsx',
  'src/components/community/PostCard.tsx',
  'src/components/enterprise/billing/BillingHeader.tsx',
  'src/components/interviews/UpcomingInterviewsCard.tsx',
  'src/components/jobs/JobsList.tsx'
]
function fixReactRouterImports() {
  filesToFix.forEach(filePath => {
    try {
      if (!fs.existsSync(filePath)) {
        logger.warn(`⚠️  File not found: ${filePath}`);
        return;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;

      // Replace React Router imports
      if (content.includes('import { Link } from "react-router-dom"')) {
        content = content.replace('import { Link } from 'react-router-dom';, 'import Link from 'next/link';);
        hasChanges = true;
      }

      if (content.includes("import { Link } from 'react-router-dom'")) {
        content = content.replace("import { Link } from 'react-router-dom';", "import Link from 'next/link';");
        hasChanges = true;
      }

      // Replace to= with href=
      if (content.includes('to=')) {
        content = content.replace(/to="/g, 'href="');
        content = content.replace(/to='/g, "href='");
        hasChanges = true;
      }

      if (hasChanges) {
        fs.writeFileSync(filePath, content);
        logger.warn(`✅ Fixed: ${filePath}`);
      } else {
        logger.warn(`ℹ️  No changes needed: ${filePath}`);
      }
    } catch (_error) {
      logger.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  });
}

if (require.main === module) {
  logger.warn('🔧 Fixing remaining React Router imports...\n');
  fixReactRouterImports();
  logger.warn('\n✨ Done!');
}

module.exports = { fixReactRouterImports };
    } catch (error) {
      logger.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    logger.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;


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

