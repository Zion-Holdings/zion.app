const express = require('express');
const Item = require('../models/Item');
const cache = require('../utils/cache');

const router = express.Router();

router.get('/', cache, async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const items = await Item.find(query).lean();
    res
      .status(200)
      .set('Content-Type', 'application/json')
      .json({ items, total: items.length });
  } catch (err) {
    console.error('Items fetch error:', err);
    res.status(500).set('Content-Type', 'application/json').json({ error: 'Failed to fetch items' });
  }
});

module.exports = router;
