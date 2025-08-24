import { run } from 'hardhat';

async function main() {
  const address = process.env.CONTRACT_ADDRESS;
  const owner = process.env.CONTRACT_OWNER;
  if (!address || !owner) {
    throw new Error('Set CONTRACT_ADDRESS and CONTRACT_OWNER in env');
    }
  await run('verify:verify', {
    address,
    constructorArguments: [owner],
  });
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});