const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongooseMorgan = require('mongoose-morgan');
const passport = require('passport');
const { mongoUri } = require('./config');
const authRoutes = require('./routes/auth');
const authSocialRoutes = require('./routes/authSocial');
const recommendationsRoutes = require('./routes/recommendations');
const syncRoutes = require('./routes/sync');
const { logAndAlert } = require('./utils/alertLogger');

const app = express();

// Use Helmet to apply various security headers
app.use(helmet());

// Enable CORS for all origins (default)
app.use(cors());

app.use(morgan('dev'));
app.use(mongooseMorgan({ connectionString: mongoUri }));
app.use(express.json());
app.use(passport.initialize());

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

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Central error handler to return structured errors
app.use((err, req, res, next) => {
  console.error(err);
  logAndAlert(err.stack || err.message);
  res
    .status(err.status || 500)
    .json({ code: err.code, message: err.message });
});

module.exports = app;
