#!/usr/bin/env ts-node
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { addDirectory } from '../utils/offworld/ipfs';

function parseArgs() {
  const args = process.argv.slice(2);
  const flags: Record<string, string | boolean> = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith('--')) {
      const [k, v] = a.split('=');
      flags[k.replace(/^--/, '')] = v ?? true;
    }
  }
  return flags;
}

async function main() {
  const flags = parseArgs();
  const outDir = path.resolve(process.cwd(), 'out');

  console.log('Exporting site to out/...');
  try {
    execSync('npm run export', { stdio: 'inherit' });
  } catch (e) {
    execSync('next build && next export', { stdio: 'inherit' });
  }

  if (!fs.existsSync(outDir)) {
    console.error('Export failed: out/ not found');
    process.exit(1);
  }

  console.log('Uploading out/ to IPFS...');
  const { cid, provider } = await addDirectory(outDir);
  if (!cid) {
    console.error('IPFS upload failed');
    process.exit(2);
  }

  console.log('CID:', cid);
  console.log('Provider:', provider);

  if (flags.gateway) {
    const g = typeof flags.gateway === 'string' ? String(flags.gateway) : 'https://ipfs.io/ipfs/';
    const url = g.endsWith('/') ? g + cid : g + '/' + cid;
    console.log('Gateway URL:', url);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(3);
});