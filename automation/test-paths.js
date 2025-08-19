const fs = require('fs');
const path = require('path');

console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);

const appRoot = process.cwd();
const configPath = path.join(appRoot, 'exponential-config.json');
const factoriesDir = path.join(appRoot, 'factories');
const agentsDir = path.join(appRoot, 'agents');
const reportsDir = path.join(appRoot, 'reports');

console.log('Config path:', configPath);
console.log('Factories dir:', factoriesDir);
console.log('Agents dir:', agentsDir);
console.log('Reports dir:', reportsDir);

// Test if directories exist
console.log('Config path exists:', fs.existsSync(configPath));
console.log('Factories dir exists:', fs.existsSync(factoriesDir));
console.log('Agents dir exists:', fs.existsSync(agentsDir));
console.log('Reports dir exists:', fs.existsSync(reportsDir));
