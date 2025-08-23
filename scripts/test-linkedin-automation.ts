#!/usr/bin/env node
// Auto-generated shim to satisfy missing script target.
(async () => {
  try {
    await import('./linkedin-automation.ts');
  } catch (e) {
    console.error('Shim target not found:', "scripts/linkedin-automation.ts", e.message);
    process.exit(1);
  }
})();
