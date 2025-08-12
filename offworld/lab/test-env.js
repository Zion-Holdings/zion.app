#!/usr/bin/env node
import { DelayTolerantDAO } from '../../src/offworld/delayDao';
import { initOrbit } from '../../src/offworld/orbitdb';

async function main() {
  await initOrbit('./offworld-db');
  const dao = new DelayTolerantDAO();

  // Submit a proposal while offline
  const proposal = await dao.submitProposal('Research supply drop to lunar base');
  console.log('Queued proposal:', proposal.id);

  // Queue a vote
  await dao.submitVote({ proposalId: proposal.id, voter: 'astronaut1', support: true });

  // When connectivity is restored, sync with OrbitDB
  await dao.connect();
  console.log('Synced proposals and votes with OrbitDB');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
