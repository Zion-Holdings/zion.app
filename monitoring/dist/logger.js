"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
// Ensure logs directory exists (relative to project root)
const logsDir = path_1.default.join(__dirname, '..', '..', 'logs', 'perf');
// Determine log level from environment variable or default to 'info'
const logLevel = process.env.LOG_LEVEL || 'info';
// You might want to add validation here to ensure logLevel is a valid Winston level
// Main application logger
const logger = winston_1.default.createLogger({
    level: logLevel, // Use the configured log level
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
            // Console level could also be controlled, or be more verbose than file log
            level: logLevel,
        }),
        new winston_1.default.transports.File({
            filename: path_1.default.join(logsDir, 'hourly.log'),
            level: 'info', // Log info and above to the main log file
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            tailable: true,
        }),
        new winston_1.default.transports.File({
            filename: path_1.default.join(logsDir, 'error.log'),
            level: 'error', // Log only errors to a separate file
            maxsize: 5242880, // 5MB
            maxFiles: 3,
            tailable: true,
        }),
    ],
});
exports.default = logger;
