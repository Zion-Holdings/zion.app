const express = require('express');
const { exec } = require('child_process'); // Make sure this is imported
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongooseMorgan = require('mongoose-morgan');
const passport = require('passport');
const helmet = require('helmet');
const cors = require('cors');
const { mongoUri, allowedOrigins } = require('./config');
const authRoutes = require('./routes/auth');
const authSocialRoutes = require('./routes/authSocial');
const recommendationsRoutes = require('./routes/recommendations');
const syncRoutes = require('./routes/sync');
const alertsRoutes = require('./routes/alerts'); // Add this
const equipmentRoutes = require('./routes/items');
const { logAndAlert } = require('./utils/alertLogger');
const helmet =require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const path = require('path');

const app = express();

// Use Helmet to apply various security headers
app.use(helmet());

// Enable CORS for all origins (default)
app.use(cors());

app.use(morgan('dev'));
app.use(mongooseMorgan({ connectionString: mongoUri }));
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: allowedOrigins }));
app.use(passport.initialize());
app.use(helmet());
app.use(cors());
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

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Central error handler to return structured errors
app.use((err, req, res, next) => {
  console.error(err);
  logAndAlert(err.stack || err.message);
  res.status(err.status || 500).json({ code: err.code, message: err.message });
});

module.exports = app;
