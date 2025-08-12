const express = require('express');
const { receiveSyncUpdate, getSyncState } = require('../controllers/syncController');

const router = express.Router();

// Fetch current sync state
router.get('/status', getSyncState);

// Receive updates from other instances
router.post('/hub', receiveSyncUpdate);

module.exports = router;
