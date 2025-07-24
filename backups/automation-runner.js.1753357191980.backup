
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

const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')
const SCRIPTS = [
  frontend-fix.js',
  backend-fix.py',
  dependency-update.js',
  dependency-update.py
]
const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR)
function runScript(script) {
  const ext = path.extname(script)
const cmd =
    ext === .js
      ? `node ${script}`
      : ext === .py
        ? `python3 ${script}`
        : null;
  if (!cmd) return
const logFile = path.join(LOG_DIR, `${script.replace(/\..+$/, )}.log`)
const out = fs.createWriteStream(logFile, { flags: 'a' })
const proc = exec(cmd, { cwd: __dirname });
  proc.stdout.pipe(out);
  proc.stderr.pipe(out);
  proc.on('exit', (code) => {
    out.write(
      `\n[${new Date().toISOString()}] Script ${script} exited with code ${code}\n`,
    );
    out.end();
  });
}

function runAll() {
  SCRIPTS.forEach(runScript);
}

// Run immediately
runAll();

// Schedule to run every hour
setInterval(runAll, 60 * 60 * 1000);

logger.info(
  Performance automation runner started. Logs in automation/performance/logs/',
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
