const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'governance-pulse.json');
const SNAPSHOT_ENDPOINT = 'https://hub.snapshot.org/graphql';

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function gql(query, variables = {}) {
  const res = await fetch(SNAPSHOT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Snapshot failed ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

const SPACES = [
  'ens.eth',
  'gitcoin.eth',
  'optimism.eth',
  'aave.eth',
  'uniswapgovernance.eth',
];

const QUERY = `
  query Proposals($space_in: [String!], $first: Int!) {
    proposals(
      first: $first,
      where: { space_in: $space_in },
      orderBy: "created",
      orderDirection: desc
    ) {
      id
      title
      body
      choices
      start
      end
      state
      scores
      scores_total
      space { id name }
      author
      created
      link
    }
  }
`;

async function run() {
  let proposals = [];
  try {
    const data = await gql(QUERY, { space_in: SPACES, first: 80 });
    proposals = data.proposals || [];
  } catch (e) {
    console.warn('Snapshot query failed:', e.message);
  }

  const items = proposals.map((p) => ({
    id: p.id,
    title: p.title,
    url: p.link || `https://snapshot.org/#/${p.space?.id}/proposal/${p.id}`,
    space: p.space?.id,
    spaceName: p.space?.name,
    state: p.state,
    start: p.start,
    end: p.end,
    created: p.created,
    scores_total: p.scores_total,
    top_choice: p.choices?.[p.scores?.indexOf(Math.max(...(p.scores || [0])))] || null,
  })).slice(0, 80);

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'Recent Snapshot proposals across selected DAOs',
    total: items.length,
    items,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Governance Pulse written to ${OUTPUT_PATH} with ${items.length} items.`);
}

run().catch((err) => {
  console.error('Governance Pulse failed:', err);
  process.exit(0);
});