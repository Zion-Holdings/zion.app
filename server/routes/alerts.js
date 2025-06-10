const express = require('express');
const router = express.Router();
const { sendSlackAlert } = require('../../src/integrations/slack/bot'); // Adjust path as needed

router.post('/notify-slack', async (req, res) => {
  const { ip_address, route, reason, timestamp } = req.body;

  if (!ip_address || !route || !reason) {
    return res.status(400).json({ error: 'Missing required fields: ip_address, route, reason' });
  }

  const message = `🚨 IP Blocked Alert 🚨
  IP Address: ${ip_address}
  Route: ${route}
  Reason: ${reason}
  Timestamp: ${timestamp || new Date().toISOString()}`;

  try {
    await sendSlackAlert(message);
    res.status(200).json({ message: 'Slack alert sent successfully' });
  } catch (error) {
    console.error('Failed to send Slack alert:', error);
    // Use existing logAndAlert if appropriate, or just console.error for now
    // const { logAndAlert } = require('../utils/alertLogger');
    // logAndAlert(`Failed to send Slack alert for IP ${ip_address}: ${error.message}`);
    res.status(500).json({ error: 'Failed to send Slack alert' });
  }
});

module.exports = router;
