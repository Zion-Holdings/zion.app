import { WriteStream, createWriteStream } from "node:fs";
import { inspect } from "node:util";
import { join } from "node:path";
import { mkdirSync } from "node:fs";
import { getProjectName } from "./utils";

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LoggerConfig {
  level?: LogLevel;
  output?: "stdout" | "stderr" | string; // string represents file path
  includeTimestamp?: boolean;
  includeLevel?: boolean;
  colorize?: boolean;
}

const DEFAULT_CONFIG: Required<LoggerConfig> = {
  level: LogLevel.INFO,
  output: "stdout",
  includeTimestamp: true,
  includeLevel: true,
  colorize: true,
};

const COLORS = {
  debug: "\x1b[36m", // cyan
  info: "\x1b[32m", // green
  warn: "\x1b[33m", // yellow
  error: "\x1b[31m", // red
  reset: "\x1b[0m",
};

const LEVEL_NAMES = {
  [LogLevel.DEBUG]: "DEBUG",
  [LogLevel.INFO]: "INFO",
  [LogLevel.WARN]: "WARN",
  [LogLevel.ERROR]: "ERROR",
};

/**
 * Generate a default log file path with timestamp
 * Creates logs directory if it doesn't exist
 * Uses system temp directory if running from root or project directory not accessible
 */
function getDefaultLogPath(): string {
  const projectName = getProjectName();
  const timestamp = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
  const logFileName = `${projectName}-${timestamp}.log`;

  // Check if MCP_LOG_DIR is explicitly set
  if (process.env.MCP_LOG_DIR) {
    const customDir = process.env.MCP_LOG_DIR;
    try {
      mkdirSync(customDir, { recursive: true });
      return join(customDir, logFileName);
    } catch (error) {
      // Fall through to other options if custom dir fails
    }
  }

  const cwd = process.cwd();

  // If running from root directory or system location, use temp directory
  if (
    cwd === "/" ||
    cwd.startsWith("/usr/") ||
    cwd.startsWith("/opt/") ||
    cwd.startsWith("/var/")
  ) {
    const tempLogDir = join("/tmp", "mcp-logs");
    try {
      mkdirSync(tempLogDir, { recursive: true });
      return join(tempLogDir, logFileName);
    } catch (error) {
      // Fallback to direct /tmp if subdirectory creation fails
      return join("/tmp", logFileName);
    }
  }

  // Try to use project logs directory
  const projectLogsDir = join(cwd, "logs");
  try {
    mkdirSync(projectLogsDir, { recursive: true });
    return join(projectLogsDir, logFileName);
  } catch (error) {
    // If project logs directory fails, use temp directory
    const tempLogDir = join("/tmp", "mcp-logs");
    try {
      mkdirSync(tempLogDir, { recursive: true });
      return join(tempLogDir, logFileName);
    } catch (tempError) {
      // Final fallback to direct /tmp
      return join("/tmp", logFileName);
    }
  }
}

export class Logger {
  private config: Required<LoggerConfig>;
  private fileStream?: WriteStream;

  constructor(config: LoggerConfig = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };

    // If output is a file path, create write stream
    if (
      typeof this.config.output === "string" &&
      this.config.output !== "stdout" &&
      this.config.output !== "stderr"
    ) {
      this.fileStream = createWriteStream(this.config.output, { flags: "a" });
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level;
  }

  private formatMessage(level: LogLevel, message: string): string {
    let formatted = "";

    if (this.config.includeTimestamp) {
      formatted += `[${new Date().toISOString()}] `;
    }

    if (this.config.includeLevel) {
      const levelName = LEVEL_NAMES[level];
      if (this.config.colorize && !this.fileStream) {
        const color = COLORS[levelName.toLowerCase() as keyof typeof COLORS];
        formatted += `${color}${levelName}${COLORS.reset}: `;
      } else {
        formatted += `${levelName}: `;
      }
    }

    formatted += message;
    return formatted;
  }

  private write(message: string): void {
    if (this.fileStream) {
      this.fileStream.write(message + "\n");
    } else if (this.config.output === "stderr") {
      process.stderr.write(message + "\n");
    } else {
      process.stdout.write(message + "\n");
    }
  }

  private log(level: LogLevel, ...args: any[]): void {
    if (!this.shouldLog(level)) {
      return;
    }

    const message = args
      .map((arg) =>
        typeof arg === "string"
          ? arg
          : inspect(arg, { depth: 2, colors: false })
      )
      .join(" ");

    const formatted = this.formatMessage(level, message);
    this.write(formatted);
  }

  debug(...args: any[]): void {
    this.log(LogLevel.DEBUG, ...args);
  }

  info(...args: any[]): void {
    this.log(LogLevel.INFO, ...args);
  }

  warn(...args: any[]): void {
    this.log(LogLevel.WARN, ...args);
  }

  error(...args: any[]): void {
    this.log(LogLevel.ERROR, ...args);
  }

  setLevel(level: LogLevel): void {
    this.config.level = level;
  }

  getLevel(): LogLevel {
    return this.config.level;
  }

  close(): void {
    if (this.fileStream) {
      this.fileStream.end();
    }
  }
}

// Create a default logger instance
export const logger = new Logger({
  level: LogLevel.DEBUG, // Enable debug logs for development
  output: process.env.MCP_LOG_FILE || "stdout", // Use file from env var if set
  includeTimestamp: true,
  includeLevel: true,
  colorize: process.env.MCP_LOG_FILE ? false : true, // Disable colors when logging to file
});

// Export convenience functions for direct use
export const debug = (...args: any[]) => logger.debug(...args);
export const info = (...args: any[]) => logger.info(...args);
export const warn = (...args: any[]) => logger.warn(...args);
export const error = (...args: any[]) => logger.error(...args);

// Factory function to create custom loggers
export function createLogger(config: LoggerConfig): Logger {
  return new Logger(config);
}

// Helper function to configure file logging
export function configureFileLogging(
  filePath?: string,
  level: LogLevel = LogLevel.DEBUG
): void {
  logger.close(); // Close any existing file stream

  const logPath = filePath || getDefaultLogPath();

  // Create new logger configuration
  const newLogger = new Logger({
    level,
    output: logPath,
    includeTimestamp: true,
    includeLevel: true,
    colorize: false, // Disable colors for file output
  });

  // Replace the logger's internal configuration
  (logger as any).config = (newLogger as any).config;
  (logger as any).fileStream = (newLogger as any).fileStream;

  logger.info(`Logging configured to write to file: ${logPath}`);
}

// Helper function to configure console logging
export function configureConsoleLogging(
  level: LogLevel = LogLevel.DEBUG,
  useStderr: boolean = false
): void {
  logger.close(); // Close any existing file stream

  // Create new logger configuration
  const newLogger = new Logger({
    level,
    output: useStderr ? "stderr" : "stdout",
    includeTimestamp: true,
    includeLevel: true,
    colorize: true, // Enable colors for console output
  });

  // Replace the logger's internal configuration
  (logger as any).config = (newLogger as any).config;
  (logger as any).fileStream = (newLogger as any).fileStream;

  logger.info(
    `Logging configured for ${useStderr ? "stderr" : "stdout"} output`
  );
}

// Helper function to automatically configure safe logging based on transport type
export function configureSafeLogging(
  transportType?: string,
  logFile?: string
): void {
  // If using STDIO transport, always log to file or stderr to avoid stdout pollution
  if (transportType === "stdio") {
    if (logFile || process.env.MCP_LOG_FILE) {
      configureFileLogging(logFile || process.env.MCP_LOG_FILE);
      console.warn(
        "⚠️  STDIO transport detected - logging redirected to file to prevent protocol interference"
      );
    } else {
      // Use default file path for STDIO transport when no file is specified
      const defaultPath = getDefaultLogPath();
      configureFileLogging(defaultPath);
      console.warn(
        `⚠️  STDIO transport detected - logging redirected to default file: ${defaultPath}`
      );
    }
  } else {
    // For HTTP transport, stdout is safe to use
    if (logFile || process.env.MCP_LOG_FILE) {
      configureFileLogging(logFile || process.env.MCP_LOG_FILE);
    } else {
      configureConsoleLogging();
    }
  }
}
