const fs = require('fs');
const path = require('path');

const LOG_FILE = path.resolve(__dirname, '..', 'logs', 'bug_log.json');

function logBug({
  errorMessage,
  stackTrace = null,
  severity = 'Medium',
  module = null,
  stepsToReproduce = null,
  expectedBehavior = null,
  actualBehavior = null,
  environment = null,
}) {
  const timestamp = new Date().toISOString();
  const bugReport = {
    timestamp,
    error_message: errorMessage,
    stack_trace: stackTrace,
    severity,
    module,
    steps_to_reproduce: stepsToReproduce,
    expected_behavior: expectedBehavior,
    actual_behavior: actualBehavior,
    environment,
  };

  try {
    const logs = fs.existsSync(LOG_FILE)
      ? JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'))
      : [];
    logs.push(bugReport);
    fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
  } catch (err) {
    console.error('Failed to write bug log:', err);
  }
}

module.exports = {
  logBug,
};
