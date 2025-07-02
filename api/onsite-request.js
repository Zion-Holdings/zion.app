const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { name, email, phone: _phone, company: _company, location, details: _details } = req.body || {};
  if (!name || !email || !location) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields' });
    return;
  }

  const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
  let existing = [];
  try {
    existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(existing)) existing = [];
  } catch {
    // File doesn't exist or is invalid, use empty array
  }
  existing.push({
    name,
    email,
    phone: _phone,
    company: _company,
    location,
    details: _details,
    createdAt: new Date().toISOString(),
  });
  fs.writeFileSync(file, JSON.stringify(existing, null, 2));

  res.statusCode = 200;
  res.json({ success: true });
}

module.exports = withSentry(handler);
