const express = require('express');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const tracer = require('dd-trace').init();
const { exec } = require('child_process'); // Make sure this is imported
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongooseMorgan = require('mongoose-morgan');
const passport = require('passport');
const { mongoUri, allowedOrigins } = require('./config');
const authRoutes = require('./routes/auth');
const authSocialRoutes = require('./routes/authSocial');
const recommendationsRoutes = require('./routes/recommendations');
const syncRoutes = require('./routes/sync');
const alertsRoutes = require('./routes/alerts'); // Add this
const equipmentRoutes = require('./routes/items');
const stripeRoutes = require('./routes/stripe'); // Add this for Stripe webhooks
const { logAndAlert } = require('./utils/alertLogger');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const OpenAI = require('openai');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Ensure server log directory exists
const logDir = path.join(__dirname, 'logs');
fs.mkdirSync(logDir, { recursive: true });
const accessLogStream = fs.createWriteStream(path.join(logDir, 'access.log'), { flags: 'a' });

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  // beforeSend(event) { // Datadog tracing might not be set up or needed for Sentry alone
  //   const span = tracer.scope().active();
  //   if (span) {
  //     const ctx = span.context();
  //     event.tags = {
  //       ...event.tags,
  //       dd_trace_id: ctx.toTraceId(),
  //       dd_span_id: ctx.toSpanId(),
  //     };
  //   }
  //   return event;
  // },
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// Use Helmet to apply various security headers
app.use(helmet());

// Enable CORS for allowed origins
app.use(cors({ origin: allowedOrigins }));

// Log HTTP requests to access.log in addition to console
app.use(morgan('combined', { stream: accessLogStream }));

app.use(morgan('dev'));
app.use(mongooseMorgan({ connectionString: mongoUri }));
app.use(express.json());
app.use(passport.initialize());
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// Health check endpoint
app.get('/healthz', (req, res) => {
  try {
    // Optional: Add more sophisticated checks here if needed (e.g., DB connection)
    res.status(200).json({
      status: 'UP',
      timestamp: new Date().toISOString(),
      // Add any other relevant info, like service name or version from package.json
      service: process.env.npm_package_name,
      version: process.env.npm_package_version
    });
  } catch (error) {
    // If any checks fail, respond with a 503 status
    res.status(503).json({
      status: 'DOWN',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

app.use('/auth', authRoutes);
// Provide /api/auth routes for frontend API consistency
app.use('/api/auth', authRoutes);
app.use('/', authSocialRoutes);
app.use('/recommendations', recommendationsRoutes);
app.use('/sync', syncRoutes);
app.use('/api/alerts', alertsRoutes); // Add this, choose a base path like /api/alerts
app.use('/api/equipment', equipmentRoutes);
app.use('/api/stripe', stripeRoutes); // Add this for Stripe webhooks
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/api/codex/suggest-fix', (req, res) => {
  let { filePath, errorLog, route } = req.body; // Added filePath and errorLog

  // -------------------------------------------------------------------------
  // Input validation & security
  // -------------------------------------------------------------------------
  // 1. Basic sanity check – we only allow relative paths that stay **inside**
  //    the project directory to prevent path-traversal ("../../etc/passwd").
  // 2. Restrict to a known subset of folders where source files live to avoid
  //    arbitrary file references. Adjust `ALLOWED_PREFIXES` if your layout
  //    changes.
  const ALLOWED_PREFIXES = ['src/', 'pages/', 'server/', 'backend/', 'public_api/'];

  if (filePath) {
    const normalizedPath = path.posix.normalize(filePath).replace(/^\/+/, ''); // Remove leading slash

    const isTraversal = normalizedPath.includes('..');
    const hasAllowedPrefix = ALLOWED_PREFIXES.some((prefix) => normalizedPath.startsWith(prefix));

    if (isTraversal || !hasAllowedPrefix) {
      return res.status(400).json({ error: 'Invalid file path provided.' });
    }

    // Use the sanitized path for downstream logic
    filePath = normalizedPath;
  }

  if (!filePath && !route) {
    // We need at least some context, filePath is preferred for targeted fixes.
    // Route could be a fallback if we want to analyze a general page issue,
    // but the current codex-pipeline.yaml is more file-focused with ESLint.
    return res.status(400).json({ error: 'Bad Request: filePath or route is required.' });
  }

  // Basic sanitization/validation for filePath if needed (e.g., prevent directory traversal)
  // For now, assume filePath is a relative path within the project context
  // e.g., "src/components/MyComponent.tsx"

  let command = 'openai-operator run ./codex-pipeline.yaml';
  const envVars = { ...process.env }; // Pass environment variables to the child process

  if (filePath) {
    // If filePath is provided, pass it as an environment variable to the operator
    // The pipeline YAML will need to be updated to use this.
    envVars.CODEX_TARGET_FILE_PATH = filePath;
    console.log(`Received request to trigger Codex fix for file: ${filePath}`);
  } else if (route) {
    // Fallback or alternative context if route is provided
    envVars.CODEX_TARGET_ROUTE = route; // Example, if pipeline handles routes
    console.log(`Received request to trigger Codex fix for route: ${route}`);
  }

  if (errorLog) {
    // Pass errorLog as an environment variable.
    // Pipelines can access env vars. This is often easier than complex CLI arg parsing.
    envVars.CODEX_ERROR_LOG_SNIPPET = errorLog;
    console.log(`Error log snippet provided: ${errorLog.substring(0, 100)}...`);
  }

  // Log the action with more details
  console.log(`Executing Codex command: ${command} with context - File: ${filePath || 'N/A'}, Route: ${route || 'N/A'}, ErrorLog: ${errorLog ? 'Provided' : 'N/A'}`);

  exec(command, { env: envVars }, (error, stdout, stderr) => { // Pass envVars here
    if (error) {
      console.error(`Codex execution error: ${error.message}`);
      logAndAlert(`Codex execution failed. File: ${filePath || route || 'N/A'}. Error: ${error.message}`);
      return res.status(500).json({ error: 'Codex fix process failed to start or execute.', details: error.message });
    }
    if (stderr) {
      console.warn(`Codex execution stderr: ${stderr}`);
    }
    console.log(`Codex execution stdout: ${stdout}`);
    res.status(200).json({ message: 'Codex fix process triggered successfully.', output: stdout });
  });
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Fallback for client-side routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Sentry error handler must come before any custom error middleware
app.use(Sentry.Handlers.errorHandler());

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Central error handler to return structured errors
app.use((err, req, res, next) => {
  console.error(err);
  logAndAlert(err.stack || err.message);
  if (err.status === 404 || err.status === 403) {
    Sentry.withScope(scope => {
      if (req.user) {
        scope.setUser({ id: req.user.id, email: req.user.email });
      }
      scope.setExtra('url', req.originalUrl);
      scope.setTag('status', err.status);
      Sentry.captureException(err);
    });
  }
  res.status(err.status || 500).json({ code: err.code, message: err.message });
});

// Global unhandled error logging
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  logAndAlert(`Unhandled Rejection: ${reason instanceof Error ? reason.stack || reason.message : reason}`);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  logAndAlert(`Uncaught Exception: ${error.stack || error.message}`);
});

module.exports = app;
