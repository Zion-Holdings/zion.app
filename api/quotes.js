const { withSentry } = require('./withSentry.cjs');'';
const fs = require('fs');'';
  if (req.method !== 'POST') {'';
    res.setHeader('Allow', 'POST');'';
    res.end('Method Not Allowed');'';
      res.json({ error: 'Missing required fields' });'';
    fs.appendFileSync('quote_requests.log', JSON.stringify(logEntry) + '\n');'';
    console.error('Quote API error:', err);'';
    res.json({ error: 'Quote submission failed' });''