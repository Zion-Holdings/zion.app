#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { createHelia } from 'helia';
import { unixfs } from '@helia/unixfs';
import { MemoryBlockstore } from 'blockstore-memory';
import { MemoryDatastore } from 'datastore-memory';
// Libp2p stack is needed for Helia to operate, even for local-only operations,
// though it can be minimal if not connecting to the broader network.
import { createLibp2p } from 'libp2p';
import { identify } from '@libp2p/identify';
import { tcp } from '@libp2p/tcp'; // Or another transport if more appropriate
import { noise } from '@chainsafe/libp2p-noise';
import { yamux } from '@chainsafe/libp2p-yamux';

const buildDir = process.argv[2] || 'dist'; // Default to 'dist'

async function deploy() {
  console.log('Initializing minimal Libp2p for Helia...');
  const libp2p = await createLibp2p({
    transports: [tcp()], // TCP transport for local operations
    connectionEncryption: [noise()],
    streamMuxers: [yamux()],
    services: {
      identify: identify(),
    },
    datastore: new MemoryDatastore(), // Ephemeral
  });

  console.log('Initializing Helia...');
  const helia = await createHelia({
    libp2p: libp2p,
    blockstore: new MemoryBlockstore(), // Ephemeral
    datastore: new MemoryDatastore(),   // Ephemeral
  });

  const fsHelia = unixfs(helia);
  console.log(`Gathering files from directory: ${buildDir}`);

  async function* streamFiles(dir, relativePathBase = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativeEntryPath = path.join(relativePathBase, entry.name);
      if (entry.isDirectory()) {
        yield* streamFiles(fullPath, relativeEntryPath);
      } else {
        yield {
          path: relativeEntryPath,
          content: fs.readFileSync(fullPath),
        };
      }
    }
  }

  console.log('Adding files to Helia (UnixFS)...');
  // The addAll method expects an iterable of objects with `path` and `content`.
  // If `wrapWithDirectory` behavior is desired, we add the top buildDir itself.
  // Helia's addDirectory or addBytes under a path might be more direct.
  // Let's try adding files individually and then creating a directory for them if `addAll` isn't direct.

  // Simpler approach: add the directory itself.
  // This will create a DAG structure representing the directory.
  // Note: Helia's unixfs `addDirectory` might not directly take a file system path
  // and recursively add. It's more for constructing a directory DAG programmatically.
  // We'll use `addAll` which is designed for this.

  const filesToAdd = [];
  for await (const file of streamFiles(buildDir)) {
    filesToAdd.push(file);
  }

  if (filesToAdd.length === 0) {
    console.log('No files found to deploy.');
    await helia.stop();
    await libp2p.stop();
    return;
  }

  // To wrap with a directory, Helia's addAll typically creates a root CID
  // if you add multiple files. If the files have paths that imply a directory
  // structure (e.g. 'css/style.css'), that structure is preserved.

  // The old client.addAll(files, { wrapWithDirectory: true }) implies a single root CID for the directory.
  // With Helia, if you provide paths, the structure is built.
  // The last CID returned by fsHelia.addAll should be the root CID of the generated DAG.

  let rootCid;
  // The `addAll` in Helia's UnixFS is different from ipfs-http-client.
  // We need to add files one by one, or construct a directory.
  // A common pattern is to add all files and get their CIDs, then create a directory linking to them.
  // However, `fs.addAll` (from `@helia/unixfs`) is for multiple files.
  // Let's try to use `fsHelia.addDirectory` after adding all files if needed, or see if `addAll` provides the top hash.

  // For { wrapWithDirectory: true } equivalent:
  // We add each file, then create a directory. The CID of this directory is the final one.
  // A more direct way: `unixfs.addAll` with paths *should* result in a single root CID for the common parent.
  // The CID of the *last* entry yielded by addAll when paths are structured and form a single root directory.
  // Let's adjust how files are added to ensure they are all under a common virtual root if `buildDir` is that root.

  // The key is that paths in `filesToAdd` are already relative to `buildDir`.
  // So `fsHelia.addAll(filesToAdd)` should produce a DAG with a single root.

  const results = [];
  for await (const result of fsHelia.addAll(filesToAdd)) {
    results.push(result);
  }

  if (results.length === 0) {
    throw new Error('Failed to add files to Helia.');
  }

  // The root CID is the CID of the last entry if files form a directory structure.
  // Specifically, it's the CID of the entry with path matching the base directory (often empty string for the root dir itself).
  // Or, if there are multiple top-level files/dirs, we might need to create one explicitly.
  // For `wrapWithDirectory: true` the expectation is a single root CID.
  // The `addAll` in Helia should provide this if paths are set up correctly (which they are, relative to buildDir).
  // The final entry in the `addAll` iterable is usually the root directory.
  rootCid = results[results.length - 1].cid;


  if (!rootCid) {
    throw new Error('Failed to deploy: No root CID obtained.');
  }
  console.log('IPFS CID:', rootCid.toString());
  console.log('Note: This CID is local to the Helia node run by this script.');
  console.log('For persistence, this content needs to be pinned on a public IPFS node or pinning service.');

  await helia.stop();
  await libp2p.stop();
  console.log('Helia and Libp2p stopped.');
}

deploy().catch(err => {
  console.error('Deployment failed:', err);
  process.exit(1);
});
