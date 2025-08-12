const { withSentry } = require('../withSentry.cjs');

const chains = {
  ethereum: 'Ethereum Mainnet',
  polygon: 'Polygon',
  base: 'Base',
  starknet: 'Starknet',
  arbitrum: 'Arbitrum',
};

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { chain } = req.body || {};
  if (!chain || !chains[chain]) {
    res.statusCode = 400;
    res.json({ error: 'Invalid chain selected' });
    return;
  }

  const metadata = {
    title: 'Zion Genesis Artifact #0001',
    description: 'This NFT marks the moment Zion OS was born.',
    theme: 'Sovereign AI Protocol',
    chain: chains[chain],
    links: {
      manifesto: 'ipfs://manifesto',
      genesisDAOHash: 'ipfs://genesis-dao-hash',
      bookCoverArt: 'ipfs://book-cover-art',
      firstFundingVote: 'ipfs://first-funding-vote',
      founderSignature: 'ipfs://founder-signature',
    },
    zionHash: 'ipfs://zion-dollar-hash',
    visuals: {
      svg: '<svg><!-- Glowing triangle/eye/multiverse --></svg>',
      revealAnimation: 'fadeInFromManifestoQuote',
    },
  };

  res.statusCode = 200;
  res.json({ metadata });
}

module.exports = withSentry(handler);
