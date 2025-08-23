
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
      #!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const glob = require('glob');

console.log('🔧 Fixing final TypeScript errors...');

// List of files that need specific fixes
const filesToFix = [
  'pages/403.tsx',
  'src/utils/sentry.ts',
  'src/utils/productionLogger.ts',
];

let fixedFiles = 0;
let totalIssues = 0;

filesToFix.forEach((file) => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      let fileIssues = 0;

      // Fix captureException function calls
      if (file === 'pages/403.tsx') {
        content = content.replace(
          /captureException\(err,\s*\{([^}]+)\}\)/g,
          (match, options) => {
            fileIssues++;
            return `captureException(err)`;
          },
        );
      }

      // Fix sentry utility function
      if (file === 'src/utils/sentry.ts') {
        content = `import * as Sentry from '@sentry/nextjs';

export const captureException = (error: Error, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(error, context);
  } else {
    console.error('Sentry Error:', error, context);
  }
};

export const setUser = (user: any) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.setUser(user);
  }
};

export const setTag = (key: string, value: string) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.setTag(key, value);
  }
};`;
        fileIssues++;
      }

      // Fix production logger
      if (file === 'src/utils/productionLogger.ts') {
        content = `export const logErrorToProduction = (message: string, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.error(message, context);
  }
};

export const logInfo = (message: string, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.log(message, context);
  }
};

export const logWarn = (message: string, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.warn(message, context);
  }
};`;
        fileIssues++;
      }

      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        fixedFiles++;
        totalIssues += fileIssues;
        console.log(`✅ Fixed ${fileIssues} issues in ${file}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
});

console.log(
  `\n🎉 Fixed ${totalIssues} TypeScript issues across ${fixedFiles} files`,
);
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
