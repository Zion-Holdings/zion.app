
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');
    
    try {
      import { Client } from @elastic/elasticsearch';import { NEW_PRODUCTS } from ../src/data/newProductsData.js';import { NEW_SERVICES } from ../src/data/newServicesData.js';import { MOCK_TALENTS } from ../src/data/mockTalents.js';
const { ELASTIC_CLOUD_ID, ELASTIC_API_KEY } = process.env;

if (!ELASTIC_CLOUD_ID || !ELASTIC_API_KEY) {
  logger.error('Missing ELASTIC_CLOUD_ID or ELASTIC_API_KEY');  process.exit(1);
}

const client = new Client({
  cloud: { id: ELASTIC_CLOUD_ID },
  auth: { apiKey: ELASTIC_API_KEY }
});

async function run() {
  const docs = [];
  for (const p of NEW_PRODUCTS) {
    docs.push({ id: `product-${p.id}`, title: p.title, description: p.description, type: 'product' });  }
  for (const s of NEW_SERVICES) {
    docs.push({ id: `service-${s.id}`, title: s.title, description: s.description, type: 'service' });  }
  for (const t of MOCK_TALENTS) {
    docs.push({ id: `talent-${t.id}`, title: t.name, description: t.title, type: 'talent' });  }

  await client.indices.create({
    index: 'listings',    mappings: {
      properties: {
        title: { type: 'text' },        description: { type: 'text' },        type: { type: 'keyword' },        suggest: { type: 'completion' }      }
    }
  }, { ignore: [400] })
const body = docs.flatMap(doc => [
    { index: { _index: 'listings', _id: doc.id } },    { ...doc, suggest: { input: [doc.title] } }
  ])
const resp = await client.bulk({ refresh: true, body });
  if (resp.errors) {
    logger.error('Some documents failed to index');  }
  logger.warn(`Indexed ${docs.length} documents`);
}

run().catch(err => {
  logger.error('Indexing error', err);  process.exit(1);
});


// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
    } catch (error) {
      logger.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    logger.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
