const fs = require('fs');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const logDir = path.resolve(__dirname, '..', 'logs');
// Daily log file for easier log rotation and analysis
function getLogFilePath() {
  const date = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
  return path.join(logDir, `errors-${date}.log`);
}
// Allow overriding alert recipient via environment variable
const alertEmail = process.env.ALERT_EMAIL || 'kleber@ziontechgroup.com';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

function logAndAlert(message) {
  const timestamp = new Date().toISOString();
  const fullMessage = `[${timestamp}] ${message}\n`;

  // Ensure log directory exists
  fs.mkdirSync(logDir, { recursive: true });
  // Use a daily log file for better organization
  const logFile = getLogFilePath();
  fs.appendFile(logFile, fullMessage, err => {
    if (err) console.error('Failed to write log file:', err);
  });

  if (process.env.SENDGRID_API_KEY) {
    const email = {
      to: alertEmail,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com',
      subject: 'Zion App Alert',
      text: message,
    };
    sgMail.send(email).catch(err => {
      console.error('Error sending alert email:', err.toString());
    });
  } else {
    console.error('SENDGRID_API_KEY not set. Alert email not sent.');
  }
}

module.exports = {
  logAndAlert,
};
