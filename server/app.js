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
const helmet =require('helmet');
const rateLimit = require('express-rate-limit');
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
  beforeSend(event) {
    const span = tracer.scope().active();
    if (span) {
      const ctx = span.context();
      event.tags = {
        ...event.tags,
        dd_trace_id: ctx.toTraceId(),
        dd_span_id: ctx.toSpanId(),
      };
    }
    return event;
  },
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
  // Optional: You might want to log which route is causing this, if passed in body
  const { route } = req.body;
  let command = 'openai-operator run ./codex-pipeline.yaml';

  // Log the action
  console.log(`Received request to trigger Codex fix. Route: ${route || 'N/A'}`);
  // Potentially pass the route to the command if the pipeline can use it, e.g.:
  // if (route) {
  //   command = `openai-operator run ./codex-pipeline.yaml --route ${route}`;
  // }
  // For now, the command is fixed as per codexWebhookServer.js

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Codex execution error: ${error.message}`);
      // Use existing logAndAlert if appropriate
      // logAndAlert(`Codex execution failed for route ${route || 'N/A'}: ${error.message}`);
      return res.status(500).json({ error: 'Codex fix process failed to start or execute.' });
    }
    if (stderr) {
      console.warn(`Codex execution stderr: ${stderr}`);
    }
    console.log(`Codex execution stdout: ${stdout}`);
    res.status(200).json({ message: 'Codex fix process triggered successfully.' });
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
