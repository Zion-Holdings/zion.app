const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body || {};
    if (!email || !isValidEmail(email)) {
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
    } catch (error) {
      console.error('Failed to persist subscription:', error);
    }

    res.statusCode = 200;
    res.json({ success: true });
  } catch (error) {
    console.error('Subscribe API error:', error);
    res.statusCode = 500;
    res.json({ error: error.message || 'Subscription failed' });
  }
}

module.exports = handler;
