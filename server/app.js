const express = require('express');
const mongoose = require('mongoose');
const { mongoUri } = require('./config');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

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
