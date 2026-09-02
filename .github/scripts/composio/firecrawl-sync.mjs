import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = 'zion-master';

const connectionId = process.env.FIRECRAWL_CONNECTION_ID || process.env.COMPOSIO_FIRECRAWL_CONNECTION_ID;

async function main() {
  console.log('=== Firecrawl Sync ===');
  if (!connectionId) {
    console.log('[skip] no firecrawl connection id');
    return;
  }
  const tools = await composio.getTools({ connectionIds: [connectionId], userId });
  console.log(`[firecrawl] tools=${tools.length}`);

  const crawl = tools.find(t => (t.slug || t.name || '').includes('FIRECRAWL_CRAWL'));
  if (!crawl) {
    console.log('[skip] FIRECRAWL_CRAWL not available');
    return;
  }

  const targets = [
    'https://ziontechgroup.com',
    'https://ziontechgroup.com/pricing/',
    'https://ziontechgroup.com/monetization/',
  ];

  for (const url of targets) {
    try {
      const result = await composio.tools.execute(crawl.slug || crawl.name, {
        url,
        connection_id: connectionId,
        entity_id: userId,
      });
      console.log(`[firecrawl] crawled ${url}`);
    } catch (e) {
      console.log(`[error] firecrawl ${url}: ${e.message}`);
    }
  }

  console.log('=== Firecrawl Sync Done ===');
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
