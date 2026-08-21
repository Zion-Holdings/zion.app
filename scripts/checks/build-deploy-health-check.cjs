const https = require('https');
const http = require('http');

const url = 'https://ziontechgroup.com/';

const protocol = url.startsWith('https') ? https : http;

const req = protocol.get(url, { timeout: 10000 }, (res) => {
  const { statusCode } = res;
  if (statusCode === 200) {
    console.log(`OK: ${url} returned ${statusCode}`);
    process.exit(0);
  } else {
    console.error(`FAIL: ${url} returned ${statusCode}`);
    process.exit(1);
  }
});

req.on('error', (e) => {
  console.error(`FAIL: ${url} error: ${e.message}`);
  process.exit(1);
});

req.on('timeout', () => {
  console.error(`FAIL: ${url} timed out`);
  req.destroy();
  process.exit(1);
});
