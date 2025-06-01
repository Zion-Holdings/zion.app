const dotenv = require('dotenv');

// Load environment variables from .env if present
dotenv.config();

module.exports = {
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/zion',
  jwtSecret: process.env.JWT_SECRET || 'changeme',
};
