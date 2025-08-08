#!/usr/bin/env node
(async () => {
  try {
    await import('ts-node/register/transpile-only');
  } catch {}
  await import('./deploy-zion-ipfs.ts');
})();