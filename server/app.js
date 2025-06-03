const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongooseMorgan = require('mongoose-morgan');
const { mongoUri } = require('./config');
const authRoutes = require('./routes/auth');
const authSocialRoutes = require('./routes/authSocial');
const recommendationsRoutes = require('./routes/recommendations');

const app = express();
app.use(morgan('dev'));
app.use(mongooseMorgan({ connectionString: process.env.MONGO_URI }));
app.use(express.json());

// New middleware to log all incoming request bodies
app.use((req, res, next) => {
  console.log('Incoming request body:', req.body);
  next();
});

// Middleware to log request body for /api/talent and /api/talent/:id
app.use('/api/talent', (req, res, next) => {
  // Check if the path is exactly /api/talent or /api/talent/:id (dynamic segment)
  // For simplicity, this example logs for any sub-path of /api/talent.
  // A more precise regex might be needed for strict matching if there are other /api/talent sub-routes not to be logged.
  if (req.originalUrl.startsWith('/api/talent')) {
    console.log('Talent API request:', req.method, req.originalUrl);
    console.log('Body:', req.body);
  }
  next();
});

// Log headers and body for all /auth/* requests
app.use('/auth', (req, res, next) => {
  console.log('Auth request:', req.method, req.originalUrl);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

app.use('/auth', authRoutes);
app.use('/', authSocialRoutes);
app.use('/recommendations', recommendationsRoutes);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Central error handler to return structured errors
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ code: err.code, message: err.message });
});

module.exports = app;
