import winston from 'winston';
import path from 'path';

// Allow overriding the log directory via WATCHDOG_LOG_PATH so logging works
// in read-only environments.
const baseLogDir = process.env.WATCHDOG_LOG_PATH || path.join(__dirname, '..', '..', 'logs');
const logsDir = path.join(baseLogDir, 'perf');

// Determine log level from environment variable or default to 'info'
const logLevel = process.env.LOG_LEVEL || 'info';
// You might want to add validation here to ensure logLevel is a valid Winston level

// Main application logger
const logger = winston.createLogger({
  level: logLevel, // Use the configured log level
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      // Console level could also be controlled, or be more verbose than file log
      level: logLevel,
    }),
    new winston.transports.File({
      filename: path.join(logsDir, 'hourly.log'),
      level: 'info', // Log info and above to the main log file
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      tailable: true,
    }),
    new winston.transports.File({
      filename: path.join(logsDir, 'error.log'),
      level: 'error', // Log only errors to a separate file
      maxsize: 5242880, // 5MB
      maxFiles: 3,
      tailable: true,
    }),
  ],
});

export default logger;
