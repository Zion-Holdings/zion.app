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

module.exports = app;
