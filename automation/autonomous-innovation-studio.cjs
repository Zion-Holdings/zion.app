const { execSync } = require('child_process');

function run(command) {
  try {
    execSync(command, { stdio: 'inherit', shell: true });
  } catch (error) {
    console.error(`[autonomous-innovation-studio] Command failed: ${command}`);
    console.error(String(error && error.message ? error.message : error));
  }
}

async function main() {
  const tasks = [
    'node automation/auto-discovery-runner.cjs || true',
    'node automation/front-index-directory-builder.cjs || true',
    'node automation/front-index-advertiser.cjs || true',
    'node automation/homepage-updater.cjs || true',
    'node automation/docs-pages-indexer.cjs || true',
    'node automation/dead-code-scanner.cjs || true',
    'node automation/broken-image-scanner.cjs || true',
    'node automation/external-link-check.cjs || true',
    'node automation/ai-changelog-generator.cjs || true',
    'node automation/newsroom-generator.cjs || true',
    'node automation/repo-knowledge-graph.cjs || true'
  ];

  for (const task of tasks) {
    run(task);
  }

  // Fast sync to repository
  run('node automation/git-sync.cjs || true');
}

if (require.main === module) {
  main().catch((e) => {
    console.error('[autonomous-innovation-studio] Fatal error:', e);
    process.exit(0);
  });
}