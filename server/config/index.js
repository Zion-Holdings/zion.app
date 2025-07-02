/* eslint-disable @typescript-eslint/no-require-imports */
const dotenv = require('dotenv');

// Load environment variables from .env if present
dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/zion';
const jwtSecret = process.env.JWT_SECRET;
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:5173'];

if (!jwtSecret) {
  throw new Error('JWT_SECRET not defined in environment');
}

module.exports = {
  mongoUri,
  jwtSecret,
  allowedOrigins,
};
