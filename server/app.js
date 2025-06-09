const express = require('express');
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
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(mongooseMorgan({ connectionString: mongoUri }));
app.use(express.json());
app.use(passport.initialize());
app.use(helmet());
app.use(cors());
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

app.use('/auth', authRoutes);
// Provide /api/auth routes for frontend API consistency
app.use('/api/auth', authRoutes);
app.use('/', authSocialRoutes);
app.use('/recommendations', recommendationsRoutes);
app.use('/sync', syncRoutes);
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
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
