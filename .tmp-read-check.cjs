const fs = require('fs');
const path = require('path');
const outDir = path.join(process.cwd(), 'out');

(async () => {
  async function listUnreadable(dir) {
    async function walk(d) {
      const entries = await fs.promises.readdir(d, { withFileTypes: true, recursive: true });
      const results = [];
      for (const e of entries) {
        if (!e.isFile()) continue;
        const full = path.join(e.parentPath || d, e.name);
        try {
          await fs.promises.readFile(full);
        } catch (err) {
          const rel = path.relative(outDir, full).replace(/\\/g, '/');
          results.push({ rel, code: err.code, msg: err.message });
        }
      }
      return results;
    }
    return walk(dir);
  }
  const bad = await listUnreadable(outDir);
  if (bad.length) {
    console.log('UNREADABLE files:', bad.length);
    for (const x of bad.slice(0, 50)) console.log(JSON.stringify(x));
    process.exit(1);
  } else {
    console.log('All out files readable');
    process.exit(0);
  }
})().catch(e => { console.error(e); process.exit(1); });
