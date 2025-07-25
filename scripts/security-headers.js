
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
      // Enhanced Security Headers for Production
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',    value: 'on'  },
  {
    key: 'Strict-Transport-Security',    value: max-age=63072000; includeSubDomains; preload'  },
  {
    key: 'X-XSS-Protection',    value: 1; mode=block'  },
  {
    key: 'X-Frame-Options',    value: 'DENY'  },
  {
    key: 'X-Content-Type-Options',    value: 'nosniff'  },
  {
    key: 'Referrer-Policy',    value: 'origin-when-cross-origin'  },
  {
    key: 'Content-Security-Policy',    value: "default-src self'; script-src self''unsafe-eval''unsafe-inline' *.sentry.io *.google.com *.googleapis.com; style-src self''unsafe-inline' fonts.googleapis.com; font-src self' fonts.gstatic.com; img-src self' data: blob: *.cloudinary.com; connect-src self' *.supabase.co *.sentry.io *.stripe.com;""  }"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
]
module.exports = { securityHeaders };
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

