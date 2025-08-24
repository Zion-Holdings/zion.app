// child_process imported within handler to avoid top-level unused var lint

exports.config = {
  schedule: '*/10 * * * *', // every 10 minutes for faster iteration
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Update the front page auto-generated section using the markers present in pages/main/front/index.tsx
  logStep('front-index:auto-advertise', () => runNode('automation/front-index-auto-advertiser.cjs'));

  // Apply futuristic visual enhancements to the front
  logStep('front:futurize', () => runNode('automation/front-futurizer.cjs'));

  // Optional: feature marketing refresh
  logStep('feature-marketing:once', () => runNode('automation/feature-marketing-orchestrator.cjs', ['once']));

  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};
