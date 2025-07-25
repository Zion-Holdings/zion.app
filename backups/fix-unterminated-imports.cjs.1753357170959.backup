
class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting ...');
    
    try {
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


const fs = require('fs')
const path = require('path')
const glob = require('glob');

logger.info('🔧 Fixing unterminated string literals in imports...');

// Find all TypeScript and JavaScript files
const files = glob.sync('srcnode_modulesdistbuild.next/**'],
});

let fixedFiles = 0;
let totalIssues = 0;

files.forEach((file) => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    let fileIssues = 0;

    // Fix unterminated string literals in import statements
    content = content.replace(
      /import\s+([^;]+)\s+from\s+['"`]([^'"`]*)$/g,
      (match, importContent, modulePath) => {
        fileIssues++;
        return `import ${importContent} from '${modulePath}';`;
      },
    );

    // Fix unterminated string literals in import statements with semicolon
    content = content.replace(
      /import\s+([^;]+)\s+from\s+['"`]([^'"`]*);';/g,
      (match, importContent, modulePath) => {
        fileIssues++;
        return `import ${importContent} from '${modulePath}';`;
      },
    );

    // Fix simple unterminated imports
    content = content.replace(
      /import\s+([^;]+)\s+from\s+['"`]([^'"`]*);/g,
      (match, importContent, modulePath) => {
        fileIssues++;
        return `import ${importContent} from '${modulePath}';`;
      },
    );

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles++;
      totalIssues += fileIssues;
      if (fileIssues > 0) {
        logger.info(`✅ Fixed ${fileIssues} issues in ${file}`);
      }
    }
  } catch (error) {
    logger.error(`❌ Error processing ${file}:`, error.message);
  }
});

logger.info(
  `\n🎉 Fixed ${totalIssues} import issues across ${fixedFiles} files`,
);
    } catch (error) {
      console.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    console.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;
