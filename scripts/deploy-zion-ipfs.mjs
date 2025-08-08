#!/usr/bin/env node
import('ts-node/esm').then(async () => {
  await import('./deploy-zion-ipfs.ts');
}).catch(async () => {
  await import('./deploy-zion-ipfs.ts');
});