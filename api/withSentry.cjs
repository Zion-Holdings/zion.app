const { captureException, Sentry } = require('../src/utils/sentry');

function withSentry(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      captureException(error && error.stack ? error.stack : error);
      if (!res.headersSent) {
        res.statusCode = 500;
        if (res.json) {
          res.json({ error: 'Internal server error' });
        } else {
          res.end('Internal server error');
        }
      }
    } finally {
      try {
        await Sentry.flush(2000);
      } catch {
        // ignore flush errors
      }
    }
  };
}

module.exports.withSentry = withSentry;
module.exports.withErrorLogging = withSentry; // backwards compatibility
