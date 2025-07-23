
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
const { execSync } = require('child_process')
class AdvancedFileFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'file-fixer.log');
    this.ensureLogsDirectory();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString()
const logMessage = `[${timestamp}] [${level}] ${message}`;
    logger.info(logMessage)
const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  fixApiFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8')
const originalContent = content;

      // Check if the file is all on one line (corrupted)
      if (content.split('\n').length === 1 && content.length > 200) {
        this.log(`Fixing corrupted file: ${filePath}`);

        // Extract imports
        const importMatches = content.match(/import[^;]+;/g) || []
const imports = importMatches.join('\n');

        // Extract the main function
        const functionMatch = content.match(
          /export\s+default\s+.*?function\s+handler\s*\([^)]*\)\s*\{([\s\S]*)\}/,
        );

        if (functionMatch) {
          const functionBody = functionMatch[1];

          // Reconstruct the file with proper formatting
          content = `${imports}\n\nexport default async function handler(req, res) {\n${functionBody}\n}`;

          // Basic formatting
          content = content
            .replace(/\s+/g, ' ')
            .replace(/\{\s*/g, ' {\n  ')
            .replace(/\}\s*/g, '\n}\n')
            .replace(/;\s*/g, ';\n  ')
            .replace(/\n\s*\n/g, '\n')
            .replace(/\n\s*$/g, '\n');

          fs.writeFileSync(filePath, content);
          this.log(`Successfully fixed: ${filePath}`);
          return true;
        }
      }

      return false;
    } catch (error) {
      this.log(`Error fixing file ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  createBackupApiFiles() {
    this.log('Creating backup API files...')
const apiDir = path.join(this.projectRoot, 'pages', 'api');
    if (!fs.existsSync(apiDir)) {
      this.log('API directory not found');
      return;
    }

    const backupDir = path.join(this.projectRoot, 'pages', 'api_backup');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const processDirectory = (dir, backupPath) => {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item)
const backupFullPath = path.join(backupPath, item)
const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          if (!fs.existsSync(backupFullPath)) {
            fs.mkdirSync(backupFullPath, { recursive: true });
          }
          processDirectory(fullPath, backupFullPath);
        } else if (item.endsWith('.ts') || item.endsWith('.js')) {
          fs.copyFileSync(fullPath, backupFullPath);
        }
      }
    };

    processDirectory(apiDir, backupDir);
    this.log('Backup created successfully');
  }

  restoreApiFiles() {
    this.log('Restoring API files from backup...')
const apiDir = path.join(this.projectRoot, 'pages', 'api')
const backupDir = path.join(this.projectRoot, 'pages', 'api_backup');

    if (!fs.existsSync(backupDir)) {
      this.log('No backup found', 'ERROR');
      return false;
    }

    const processDirectory = (dir, restorePath) => {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item)
const restoreFullPath = path.join(restorePath, item)
const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          if (!fs.existsSync(restoreFullPath)) {
            fs.mkdirSync(restoreFullPath, { recursive: true });
          }
          processDirectory(fullPath, restoreFullPath);
        } else if (item.endsWith('.ts') || item.endsWith('.js')) {
          fs.copyFileSync(fullPath, restoreFullPath);
        }
      }
    };

    processDirectory(backupDir, apiDir);
    this.log('API files restored successfully');
    return true;
  }

  createCleanApiFiles() {
    this.log('Creating clean API files...')
const apiDir = path.join(this.projectRoot, 'pages', 'api');
    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
    }

    // Create a simple health check API
    const healthApi = `import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end();
  }

  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
}`;

    fs.writeFileSync(path.join(apiDir, 'health.ts'), healthApi);
    this.log('Created clean health API');

    // Create a simple auth API
    const authApi = `import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Mock authentication for development
    if (process.env.NODE_ENV === 'development') {
      if (email === 'dev@example.com' && password === 'dev123') {
        return res.status(200).json({
          user: {
            id: 'dev-user-1',
            email: 'dev@example.com',
            name: 'Dev User',
            email_verified: true
          },
          message: 'Development authentication successful'
        });
      }
    }

    return res.status(401).json({ error: 'Invalid credentials' });
  } catch (error) {
    logger.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}`
const authDir = path.join(apiDir, 'auth');
    if (!fs.existsSync(authDir)) {
      fs.mkdirSync(authDir, { recursive: true });
    }

    fs.writeFileSync(path.join(authDir, 'login.ts'), authApi);
    this.log('Created clean auth API');
  }

  async runFix() {
    this.log('Starting advanced file fix...');

    try {
      // Create backup first
      this.createBackupApiFiles();

      // Try to fix existing files
      const apiDir = path.join(this.projectRoot, 'pages', 'api');
      if (fs.existsSync(apiDir)) {
        const processDirectory = (dir) => {
          const items = fs.readdirSync(dir);
          let fixedCount = 0;

          for (const item of items) {
            const fullPath = path.join(dir, item)
const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
              fixedCount += processDirectory(fullPath);
            } else if (item.endsWith('.ts') || item.endsWith('.js')) {
              if (this.fixApiFile(fullPath)) {
                fixedCount++;
              }
            }
          }

          return fixedCount;
        }
const fixedCount = processDirectory(apiDir);
        this.log(`Fixed ${fixedCount} API files`);

        if (fixedCount === 0) {
          this.log('No files were fixed, creating clean API files...');
          this.createCleanApiFiles();
        }
      } else {
        this.log('API directory not found, creating clean structure...');
        this.createCleanApiFiles();
      }

      this.log('Advanced file fix completed');
      return true;
    } catch (error) {
      this.log(`Advanced file fix failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run if this script is executed directly
if (require.main === module) {
  const fixer = new AdvancedFileFixer();
  fixer
    .runFix()
    .then((success) => {
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      logger.error('Fix failed:', error);
      process.exit(1);
    });
}

module.exports = AdvancedFileFixer;


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

