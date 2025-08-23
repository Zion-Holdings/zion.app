const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');
const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body || {};
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email' });
      return;
    }

    try {
      const subs = fs.existsSync(FILE_PATH)
        ? JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'))
        : [];
      if (!subs.includes(email)) subs.push(email);
      fs.writeFileSync(FILE_PATH, JSON.stringify(subs, null, 2));
    } catch (err) {
      console.error('Failed to persist subscription:', err);
    }

    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withSentry(handler);
