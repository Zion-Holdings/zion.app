const express = require('express');
const Item = require('../models/Item');

const router = express.Router();

router.get('/items', async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const items = await Item.find(query).lean();
    res.set('Content-Type', 'application/json');
    res.json(items);
  } catch (err) {
    console.error('Items fetch error:', err);
    res.status(500).set('Content-Type', 'application/json').json({ error: 'Failed to fetch items' });
  }
});

module.exports = router;
