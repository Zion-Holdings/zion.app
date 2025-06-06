#!/usr/bin/env node
import { DelayTolerantDAO } from '../../src/offworld/delayDao';
import { initOrbit } from '../../src/offworld/orbitdb';

async function main() {
  await initOrbit('./remote-dao-db');
  const dao = new DelayTolerantDAO();

  const proposal = await dao.submitProposal(
    'Deploy comms beacon to geosync orbit'
  );
  console.log('Queued proposal:', proposal.id);

  await dao.submitVote({
    proposalId: proposal.id,
    voter: 'groundstation1',
    support: true,
  });
  await dao.connect();
  console.log('Synced proposals and votes over satellite link');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
