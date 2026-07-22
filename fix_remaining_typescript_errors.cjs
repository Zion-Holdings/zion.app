// Script to fix remaining TypeScript errors

const fs = require('fs');
const path = require('path');

// Fix phishing-analyzer/page.tsx - line 62 severity type issue
const phishingPath = '/c/Users/Zion/tmp/zion-clone-test2/app/tools/phishing-analyzer/page.tsx';
let phishingContent = fs.readFileSync(phishingPath, 'utf8');

// Fix the severity assignment - need to cast the type
phishingContent = phishingContent.replace(
  /const points = severity === 'high' \? 25 : severity === 'medium' \? 15 : 5;/,
  "const points = (severity === 'high' ? 25 : severity === 'medium' ? 15 : 5) as number;"
);

fs.writeFileSync(phishingPath, phishingContent);
console.log('Fixed phishing-analyzer/page.tsx');

// Fix the health-check-script/page.tsx PowerShell variable escaping
const healthPath = '/c/Users/Zion/tmp/zion-clone-test2/app/tools/health-check-script/page.tsx';
let healthContent = fs.readFileSync(healthPath, 'utf8');

// Fix PowerShell variables in template strings - escape $ as $$
healthContent = healthContent.replace(/\$\{total\}/g, '$${total}');
healthContent = healthContent.replace(/\$\{free\}/g, '$${free}');
healthContent = healthContent.replace(/\$\{used\}/g, '$${used}');
healthContent = healthContent.replace(/\$\{size\}/g, '$${size}');
healthContent = healthContent.replace(/\$\{pct\}/g, '$${pct}');

fs.writeFileSync(healthPath, healthContent);
console.log('Fixed health-check-script/page.tsx');

console.log('All TypeScript errors fixed!');