const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongooseMorgan = require('mongoose-morgan');
const { mongoUri } = require('./config');
const authRoutes = require('./routes/auth');

const app = express();
app.use(morgan('dev'));
app.use(mongooseMorgan({ connectionString: process.env.MONGO_URI }));
app.use(express.json());

// Log headers and body for all /auth/* requests
app.use('/auth', (req, res, next) => {
  console.log('Auth request:', req.method, req.originalUrl);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

app.use('/auth', authRoutes);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = app;
