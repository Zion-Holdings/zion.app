#!/usr/bin/env node
const http = require('http');
const url = process.env.SMOKE_BASE_URL || 'http://localhost:3000';
const target = url.replace(//$/, '') + "/auto/auto-update-2025-08-09t08-30-00-023z";
http.get(target, (res) => {
  const { statusCode } = res;
  if (statusCode >= 200 && statusCode < 400) {
    console.log('OK', target, statusCode);
    process.exit(0);
  } else {
    console.error('FAIL', target, statusCode);
    process.exit(1);
  }
}).on('error', (e) => {
  console.error('ERROR', target, e.message);
  process.exit(1);
});

