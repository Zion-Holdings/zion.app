#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

let Web3Storage, getFilesFromPath;
let createIpfsClient;
let PinataSDK;

function env(name) {
  return process.env[name] || process.env[name.toLowerCase()];
}

async function lazyLoad() {
  try {
    const web3 = require('web3.storage');
    Web3Storage = web3.Web3Storage;
    getFilesFromPath = web3.getFilesFromPath;
  } catch {}
  try {
    const ipfsHttp = require('ipfs-http-client');
    createIpfsClient = ipfsHttp.create || ipfsHttp;
  } catch {}
  try {
    const pinata = require('@pinata/sdk');
    PinataSDK = pinata.default || pinata;
  } catch {}
}

function parseArgs() {
  const args = process.argv.slice(2);
  const flags = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith('--')) {
      const [k, v] = a.split('=');
      flags[k.replace(/^--/, '')] = v ?? true;
    }
  }
  return flags;
}

async function addDirectory(outDir) {
  await lazyLoad();

  const web3Token = env('WEB3_STORAGE_TOKEN');
  if (Web3Storage && web3Token) {
    const client = new Web3Storage({ token: web3Token });
    let files;
    if (getFilesFromPath) {
      files = await getFilesFromPath(outDir);
    } else {
      // Manual walk
      const list = [];
      function walk(dir, base = '') {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const full = path.join(dir, entry.name);
          const rel = path.posix.join(base, entry.name);
          if (entry.isDirectory()) walk(full, rel);
          else list.push(new File([fs.readFileSync(full)], rel));
        }
      }
      walk(outDir);
      files = list;
    }
    const cid = await client.put(files, { wrapWithDirectory: true });
    return { cid, provider: 'web3.storage' };
  }

  const pinataJwt = env('PINATA_JWT');
  const pinataApiKey = env('PINATA_API_KEY');
  const pinataSecret = env('PINATA_API_SECRET');
  if (PinataSDK && (pinataJwt || (pinataApiKey && pinataSecret))) {
    // Pinata prefers files streams; for simplicity, use local ipfs add then pin by hash if available
  }

  const ipfsUrl = env('IPFS_API') || 'http://127.0.0.1:5001';
  if (createIpfsClient) {
    const ipfs = createIpfsClient({ url: ipfsUrl });
    async function* walk(dir, base = '') {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        const rel = path.posix.join(base, entry.name);
        if (entry.isDirectory()) {
          yield* walk(full, rel);
        } else {
          yield { path: rel, content: fs.readFileSync(full) };
        }
      }
    }
    let rootCid = '';
    for await (const res of ipfs.addAll(walk(outDir), { wrapWithDirectory: true, pin: true })) {
      rootCid = res.cid?.toString?.() || rootCid;
    }
    if (rootCid) return { cid: rootCid, provider: 'local-ipfs' };
  }

  return { cid: '', provider: 'none' };
}

(async function main() {
  const flags = parseArgs();
  const outDir = path.resolve(process.cwd(), 'out');

  console.log('Exporting site to out/...');
  try {
    execSync('npm run export', { stdio: 'inherit' });
  } catch (e) {
    try {
      execSync('next build && next export', { stdio: 'inherit' });
    } catch (e2) {}
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
})().catch((e) => {
  console.error(e);
  process.exit(3);
});