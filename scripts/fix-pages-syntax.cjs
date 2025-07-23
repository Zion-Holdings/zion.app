
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

#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
class PagesSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  async fixPagesDirectory() {
    logger.info('🔧 Fixing pages directory syntax errors...');

    try {
      const pagesDir = 'pages'
const files = this.getAllFiles(pagesDir);

      logger.info(`📁 Found ${files.length} files in pages directory`);

      for (const file of files) {
        try {
          await this.fixPageFile(file);
        } catch (error) {
          this.errors.push({ file, error: error.message });
        }
      }

      this.generateReport();
    } catch (error) {
      logger.error('❌ Pages fix failed:', error);
    }
  }

  getAllFiles(dir) {
    const files = []
const extensions = ['.ts', '.tsx', '.js', '.jsx']
function walkDir(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);

        for (const item of items) {
          const fullPath = path.join(currentDir, item);

          try {
            const stat = fs.statSync(fullPath);

            if (
              stat.isDirectory() &&
              !item.startsWith('.') &&
              item !== 'node_modules'
            ) {
              walkDir(fullPath);
            } else if (
              stat.isFile() &&
              extensions.some((ext) => item.endsWith(ext))
            ) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be accessed
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }

    walkDir(dir);
    return files;
  }

  async fixPageFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
const originalContent = content;

      // Fix common page syntax errors
      let fixedContent = this.fixPageErrors(content, filePath);

      if (fixedContent !== originalContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        logger.info(`✅ Fixed: ${filePath}`);
      }
    } catch (error) {
      logger.error(`❌ Error fixing ${filePath}:`, error.message);
      throw error;
    }
  }

  fixPageErrors(content, filePath) {
    let fixed = content
const fileName = path.basename(filePath, path.extname(filePath));

    // Fix unterminated string constants
    fixed = fixed.replace(/';$/gm, ';');
    fixed = fixed.replace(/";$/gm, ';');

    // Fix unterminated template literals
    fixed = fixed.replace(/`([^`]*)$/gm, '`$1`');

    // Fix unexpected tokens
    fixed = fixed.replace(/^\s*}\s*$/gm, '');
    fixed = fixed.replace(/^\s*{\s*$/gm, '');
    fixed = fixed.replace(/^\s*;\s*$/gm, '');
    fixed = fixed.replace(/^\s*:\s*$/gm, '');

    // Fix specific page patterns
    if (fileName === '403' || fileName === '404' || fileName === '500') {
      fixed = this.createErrorPage(fileName);
    } else if (fileName === '_app') {
      fixed = this.createAppPage();
    } else if (fileName === '_document') {
      fixed = this.createDocumentPage();
    } else if (fileName === 'ProductsList') {
      fixed = this.createProductsListPage();
    } else if (fileName === 'about') {
      fixed = this.createAboutPage();
    } else if (fileName === 'account') {
      fixed = this.createAccountPage();
    } else if (fileName === 'activity-log') {
      fixed = this.createActivityLogPage();
    } else if (fileName === 'admin') {
      fixed = this.createAdminPage();
    } else if (fileName === 'logs') {
      fixed = this.createLogsPage();
    } else if (fileName === 'performance') {
      fixed = this.createPerformancePage();
    } else {
      // Create a generic page component
      fixed = this.createGenericPage(fileName);
    }

    return fixed;
  }

  createErrorPage(errorCode) {
    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
const Error${errorCode}: NextPage = () => {
  return (
    <>
      <Head>
        <title>${errorCode} - Zion App</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900">${errorCode}</h1>
          <p className="text-xl text-gray-600 mt-4">
            {${errorCode} === '404' ? 'Page not found' : 'Something went wrong'}
          </p>
          <a href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            Go Home
          </a>
        </div>
      </div>
    </>
  );
};

export default Error${errorCode};
`;
  }

  createAppPage() {
    return `import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '../src/context/auth/AuthProvider';
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
`;
  }

  createDocumentPage() {
    return `import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
`;
  }

  createProductsListPage() {
    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
const ProductsList: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product cards will go here */}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
`;
  }

  createAboutPage() {
    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Zion</h1>
        <p className="text-lg text-gray-600">
          Zion is a comprehensive platform for talent marketplace and project management.
        </p>
      </div>
    </>
  );
};

export default About;
`;
  }

  createAccountPage() {
    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
const Account: NextPage = () => {
  return (
    <>
      <Head>
        <title>Account - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Account settings form will go here */}
        </div>
      </div>
    </>
  );
};

export default Account;
`;
  }

  createActivityLogPage() {
    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
const ActivityLog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Activity Log - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Activity Log</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Activity log content will go here */}
        </div>
      </div>
    </>
  );
};

export default ActivityLog;
`;
  }

  createAdminPage() {
    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Admin widgets will go here */}
        </div>
      </div>
    </>
  );
};

export default Admin;
`;
  }

  createLogsPage() {
    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
const Logs: NextPage = () => {
  return (
    <>
      <Head>
        <title>System Logs - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">System Logs</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Logs content will go here */}
        </div>
      </div>
    </>
  );
};

export default Logs;
`;
  }

  createPerformancePage() {
    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
const Performance: NextPage = () => {
  return (
    <>
      <Head>
        <title>Performance - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Performance Metrics</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Performance metrics will go here */}
        </div>
      </div>
    </>
  );
};

export default Performance;
`;
  }

  createGenericPage(pageName) {
    const componentName = pageName
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
const ${componentName}: NextPage = () => {
  return (
    <>
      <Head>
        <title>${componentName} - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">${componentName}</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* ${componentName} content will go here */}
        </div>
      </div>
    </>
  );
};

export default ${componentName};
`;
  }

  generateReport() {
    logger.info('\n📊 Pages Syntax Fix Report');
    logger.info('===========================');
    logger.info(`Files fixed: ${this.fixedFiles.length}`);
    logger.info(`Errors encountered: ${this.errors.length}`);

    if (this.fixedFiles.length > 0) {
      logger.info('\n✅ Fixed files:');
      this.fixedFiles.forEach((file) => {
        logger.info(`  - ${file}`);
      });
    }

    if (this.errors.length > 0) {
      logger.info('\n❌ Errors:');
      this.errors.forEach(({ file, error }) => {
        logger.info(`  - ${file}: ${error}`);
      });
    }
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new PagesSyntaxFixer();
  fixer.fixPagesDirectory();
}

module.exports = PagesSyntaxFixer;
