
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
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

#!/usr/bin/env node

const fs = require('fs')
const path = require('path');

logger.info('🔧 Fixing final syntax errors...');

// List of files that need specific fixes
const filesToFix = ['pages/404.tsx', 'pages/500.tsx'];

let fixedFiles = 0;
let totalIssues = 0;

filesToFix.forEach((file) => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      let fileIssues = 0;

      // Fix 404.tsx
      if (file === 'pages/404.tsx') {
        content = `import React from 'react';
import { Center, Button, VStack, Heading, Text } from '@chakra-ui/react';
import { NextSeo } from '@/components/NextSeo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { Home, Search, Users, ArrowLeft, ExternalLink } from '@/components/ui/icons';
import { ShoppingCart } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';

export default function Custom404() {
  const router = useRouter()
const { user } = useAuth();

  useEffect(() => {
    const err = new Error('404 - Page Not Found');
    captureException(err);
    logInfo('404 page accessed', { path: router.asPath });
  }, [router.asPath]);

  return (
    <>
      <NextSeo title="404 - Page Not Found" description="Page not found" />
      <Center minH="100vh" flexDirection="column">
        <VStack spacing={6}>
          <Heading size="2xl">404 - Page Not Found</Heading>
          <Text>Sorry, the page you are looking for does not exist.</Text>
          <Button onClick={() => router.push('/')} leftIcon={<Home />}>
            Go Home
          </Button>
        </VStack>
      </Center>
    </>
  );
}`;
        fileIssues++;
      }

      // Fix 500.tsx
      if (file === 'pages/500.tsx') {
        content = `import React from 'react';
import { Center, Button, VStack, Heading, Text } from '@chakra-ui/react';
import { NextSeo } from '@/components/NextSeo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { logInfo } from '@/utils/productionLogger';

export default function Custom500() {
  const router = useRouter()
const { user } = useAuth();

  useEffect(() => {
    const err = new Error('500 - Internal Server Error');
    captureException(err);
    logInfo('500 page accessed', { path: router.asPath });
  }, [router.asPath]);

  return (
    <>
      <NextSeo title="500 - Internal Server Error" description="Server error" />
      <Center minH="100vh" flexDirection="column">
        <VStack spacing={6}>
          <Heading size="2xl">500 - Internal Server Error</Heading>
          <Text>Sorry, something went wrong on our end.</Text>
          <Button onClick={() => router.push('/')}>
            Go Home
          </Button>
        </VStack>
      </Center>
    </>
  );
}`;
        fileIssues++;
      }

      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        fixedFiles++;
        totalIssues += fileIssues;
        logger.info(`✅ Fixed ${fileIssues} issues in ${file}`);
      }
    }
  } catch (error) {
    logger.error(`❌ Error processing ${file}:`, error.message);
  }
});

logger.info(
  `\n🎉 Fixed ${totalIssues} syntax issues across ${fixedFiles} files`,
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
