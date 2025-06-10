const { EventEmitter } = require('events');
// Increase the max listeners limit to avoid MaxListenersExceededWarning
// during server operations. The default value of 10 is often too low when
// multiple modules attach listeners. Raising it to 50 ensures we don't hit
// the limit under typical workloads.
EventEmitter.defaultMaxListeners = 50;

const app = require('./app');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
