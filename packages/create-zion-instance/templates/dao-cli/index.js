#!/usr/bin/env node
import { ZionClient } from '@zion/sdk';

const client = new ZionClient({ baseUrl: process.env.ZION_API_URL || 'https://api.zion.example', apiKey: process.env.ZION_API_KEY });

async function main() {
  const title = process.argv[2] || 'My Proposal';
  const description = process.argv[3] || 'Proposal description';
  const res = await client.dao.createProposal({
    id: '',
    title,
    description,
    milestones: [],
    status: 'draft',
    createdBy: 'cli-user'
  });
  console.log('Created proposal:', res.id);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});