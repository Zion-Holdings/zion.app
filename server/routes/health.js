const express = require('express');
const mongoose = require('mongoose');
const { version } = require('../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  const dbState = mongoose.connection.readyState === 1 ? 'up' : 'down';
  res.json({
    version,
    uptime: process.uptime(),
    db: dbState,
  });
});

module.exports = router;
