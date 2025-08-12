const express = require('express');

const cache = require('../utils/cache');
const router = express.Router();

router.get('/', cache, (_req, res) =>
  res.json([
    { itemId: 'eq-001', score: 0.92 },
    { itemId: 'eq-002', score: 0.85 },
  ])
);

module.exports = router;
