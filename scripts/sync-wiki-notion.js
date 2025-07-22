#!/usr/bin/env node;
import fs from 'fs/promises';'import path from 'path';'// Renamed 'process' to '_process' to avoid no-redeclare error'
const WIKI_DIR = path.resolve('wiki')
const NOTION_DIR = path.resolve('docs/notion');
async function syncDirs() {
  await fs.mkdir(NOTION_DIR, { recursive: true })
const files = await fs.readdir(WIKI_DIR);
  for (const file of files) {
    if (file.endsWith('.md')) {'      const src = path.join(WIKI_DIR, file)
const dest = path.join(NOTION_DIR, file);
      await fs.copyFile(src, dest);
      console.warn(`Copied ${file} to docs/notion`);
    }
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  syncDirs().catch((err) => {
    console.error(error);
    process.exit(1);
  });
}
