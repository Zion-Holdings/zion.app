const NodeCache = require('node-cache');

// Create a cache instance with default TTL of 5 minutes
const cache = new NodeCache({ stdTTL: 300, checkperiod: 320 });

module.exports = function cacheMiddleware(req, res, next) {
  const key = req.originalUrl || req.url;
  const cachedBody = cache.get(key);
  if (cachedBody) {
    res.setHeader('X-Cache', 'HIT');
    return res.send(cachedBody);
  }

  res.sendResponse = res.send;
  res.send = (body) => {
    cache.set(key, body);
    res.setHeader('X-Cache', 'MISS');
    res.sendResponse(body);
  };
  next();
};
