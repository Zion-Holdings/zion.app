import { exec } from 'child_process';

function run(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, { maxBuffer: 10 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) return reject(err);
      resolve({ stdout, stderr });
    });
  });
}

async function main() {
  const title = process.env.PR_TITLE || 'Auto-generated test and fix suggestion';
  const body = process.env.PR_BODY || 'See attached failing test and fix suggestion.';
  await run(`gh pr create --fill -t ${JSON.stringify(title)} -b ${JSON.stringify(body)}`);
  console.log('PR opened');
}

main().catch((e) => { console.error(e); process.exit(1); });