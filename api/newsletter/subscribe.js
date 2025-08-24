
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body;

    if (!email || !isValidEmail(email)) {
      res.status(400).json({ error: 'Invalid email' });
      return;
    }

    const subscriptions = fs.existsSync(FILE_PATH)
      ? JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'))
      : [];

    if (subscriptions.includes(email)) {
      res.status(400).json({ error: 'Email already subscribed' });
      return;
    }

    subscriptions.push(email);

    try {
      fs.writeFileSync(FILE_PATH, JSON.stringify(subscriptions, null, 2));
    } catch (error) {
      console.error('Failed to persist subscription:', error);
      res.status(500).json({ error: 'Failed to save subscription' });
      return;
    }

    res.status(200).json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Subscribe API error:', error);
    res.status(500).json({ error: error.message || 'Subscription failed' });
  }
}