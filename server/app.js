const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongooseMorgan = require('mongoose-morgan');
const passport = require('passport');
const { mongoUri } = require('./config');
const authRoutes = require('./routes/auth');
const authSocialRoutes = require('./routes/authSocial');
const recommendationsRoutes = require('./routes/recommendations');
const { logAndAlert } = require('./utils/alertLogger');

const app = express();
app.use(morgan('dev'));
app.use(mongooseMorgan({ connectionString: mongoUri }));
app.use(express.json());
app.use(passport.initialize());

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
  logAndAlert(err.stack || err.message);
  res
    .status(err.status || 500)
    .json({ code: err.code, message: err.message });
});

module.exports = app;
