#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { create } from 'ipfs-http-client';

const IPFS_API = process.env.IPFS_API || 'https://ipfs.infura.io:5001/api/v0';
const buildDir = process.argv[2] || 'dist';

const client = create({ url: IPFS_API });

function gatherFiles(dir, rootDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...gatherFiles(fullPath, rootDir));
    } else {
      files.push({ path: path.relative(rootDir, fullPath), content: fs.readFileSync(fullPath) });
    }
  }
  return files;
}

async function deploy() {
  const files = gatherFiles(buildDir);
  const results = client.addAll(files, { wrapWithDirectory: true });
  let cid;
  for await (const r of results) {
    cid = r.cid;
  }
  if (!cid) {
    throw new Error('Failed to deploy');
  }
  console.log('IPFS CID:', cid.toString());
}

deploy().catch(err => {
  console.error('Deployment failed:', err);
  process.exit(1);
});
