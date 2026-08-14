const fs = require('fs');
const f = 'content-loop/auto-deploy.cjs';
let s = fs.readFileSync(f, 'utf8');
s = s.replace('Authorization: token ***', 'Authorization: token ${token}');
fs.writeFileSync(f, s);
console.log('fixed');
