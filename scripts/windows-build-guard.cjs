const fs = require('fs');
const path = require('path');

function rmDirIfExists(dir) {
  if (!fs.existsSync(dir)) return;
  const walk = (p) => {
    const entries = fs.readdirSync(p, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(p, e.name);
      if (e.isDirectory()) { walk(full); fs.rmdirSync(full); }
      else fs.unlinkSync(full);
    }
  };
  walk(dir);
  fs.rmdirSync(dir);
}

if (process.platform === 'win32') {
  const target = path.join(process.cwd(), 'out');
  console.log(`Windows build guard: cleaning ${target}`);
  rmDirIfExists(target);
}
