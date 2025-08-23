const { EventEmitter } = require('events');
// Increase the max listeners limit to avoid MaxListenersExceededWarning
// during server operations. The default value of 10 is often too low when
// multiple modules attach listeners. Raising it to 50 ensures we don't hit
// the limit under typical workloads.
EventEmitter.defaultMaxListeners = 50;

const app = require('./app');
const PORT = process.env.PORT || 3001;

if (process.env.ENABLE_HTTP2 === 'true') {
  const fs = require('fs');
  const http2 = require('http2');

  const options = {};
  if (process.env.SSL_KEY_PATH && process.env.SSL_CERT_PATH) {
    options.key = fs.readFileSync(process.env.SSL_KEY_PATH);
    options.cert = fs.readFileSync(process.env.SSL_CERT_PATH);
  }

  const server =
    Object.keys(options).length > 0
      ? http2.createSecureServer({ ...options, allowHTTP1: true }, app)
      : http2.createServer({ allowHTTP1: true }, app);

  server.listen(PORT, () => {
    console.log(`HTTP/2 server listening on port ${PORT}`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
