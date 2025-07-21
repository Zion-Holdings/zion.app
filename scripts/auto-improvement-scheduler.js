const EventEmitter = require('events');
const cron = require('node-cron');

class Scheduler extends EventEmitter {
  constructor() {
    super();
    this.start();
  }
  start() {
    // Cron-based (every 10 minutes)
    cron.schedule('*/10 * * * *', () => {
      this.emit('trigger', 'cron');
    });
    // Randomized interval (5-15 minutes)
    setInterval(() => {
      if (Math.random() > 0.5) {
        this.emit('trigger', 'random');
      }
    }, 1000 * 60 * (5 + Math.random() * 10));
  }
}

module.exports = new Scheduler(); 