const { captureException } = require('../src/utils/sentry');

module.exports.withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (err) {
      captureException(err && err.stack ? err.stack : err);
      if (!res.headersSent) {
        res.statusCode = 500;
        if (res.json) {
          res.json({ error: 'Internal server error' });
        } else {
          res.end('Internal server error');
        }
      }
    }
  };
};
