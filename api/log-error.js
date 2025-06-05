const { withErrorLogging } = require('./withErrorLogging.cjs');
const { captureException } = require('../src/utils/sentry');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { message, filename, lineno, colno, stack } = req.body || {};
    const error = new Error(message || 'Client error');
    if (stack) error.stack = stack;
    if (filename) error.filename = filename;
    if (lineno) error.lineno = lineno;
    if (colno) error.colno = colno;

    captureException(error);

    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('log-error API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Logging failed' });
  }
}

module.exports = withErrorLogging(handler);
