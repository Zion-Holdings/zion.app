const express = require('express');
const mongoose = require('mongoose');
const { mongoUri } = require('./config');
const authRoutes = require('./routes/auth');
const recommendationsRoutes = require('./routes/recommendations');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/recommendations', recommendationsRoutes);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = app;
