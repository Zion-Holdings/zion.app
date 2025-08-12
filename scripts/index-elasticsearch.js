import { Client } from '@elastic/elasticsearch';
import { NEW_PRODUCTS } from '../src/data/newProductsData.js';
import { NEW_SERVICES } from '../src/data/newServicesData.js';
import { MOCK_TALENTS } from '../src/data/mockTalents.js';

const { ELASTIC_CLOUD_ID, ELASTIC_API_KEY } = process.env;

if (!ELASTIC_CLOUD_ID || !ELASTIC_API_KEY) {
  console.error('Missing ELASTIC_CLOUD_ID or ELASTIC_API_KEY');
  process.exit(1);
}

const client = new Client({
  cloud: { id: ELASTIC_CLOUD_ID },
  auth: { apiKey: ELASTIC_API_KEY }
});

async function run() {
  const docs = [];
  for (const p of NEW_PRODUCTS) {
    docs.push({ id: `product-${p.id}`, title: p.title, description: p.description, type: 'product' });
  }
  for (const s of NEW_SERVICES) {
    docs.push({ id: `service-${s.id}`, title: s.title, description: s.description, type: 'service' });
  }
  for (const t of MOCK_TALENTS) {
    docs.push({ id: `talent-${t.id}`, title: t.name, description: t.title, type: 'talent' });
  }

  await client.indices.create({
    index: 'listings',
    mappings: {
      properties: {
        title: { type: 'text' },
        description: { type: 'text' },
        type: { type: 'keyword' },
        suggest: { type: 'completion' }
      }
    }
  }, { ignore: [400] });

  const body = docs.flatMap(doc => [
    { index: { _index: 'listings', _id: doc.id } },
    { ...doc, suggest: { input: [doc.title] } }
  ]);

  const resp = await client.bulk({ refresh: true, body });
  if (resp.errors) {
    console.error('Some documents failed to index');
  }
  console.log(`Indexed ${docs.length} documents`);
}

run().catch(err => {
  console.error('Indexing error', err);
  process.exit(1);
});
