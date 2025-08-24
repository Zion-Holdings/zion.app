#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function readLatestReport() {
  const reportDir = path.join(__dirname, '..', 'data', 'reports', 'venture');
  if (!fs.existsSync(reportDir)) return null;
  const files = fs
    .readdirSync(reportDir)
    .filter((f) => f.startsWith('venture-plan-') && f.endsWith('.json'))
    .sort((a, b) => b.localeCompare(a));
  if (files.length === 0) return null;
  const content = fs.readFileSync(path.join(reportDir, files[0]), 'utf8');
  return JSON.parse(content);
}

function writeServicePage(service) {
  const pagesDir = path.join(__dirname, '..', 'pages', 'services');
  ensureDir(pagesDir);
  const filePath = path.join(pagesDir, `${service.slug}.tsx`);
  if (fs.existsSync(filePath)) return false;

  const component = `import type { NextPage } from 'next';
import Head from 'next/head';

interface Props {}

const ServicePage: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>${service.name} | Services</title>
        <meta name="description" content="${service.description}" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">${service.name}</h1>
        <p className="text-lg text-gray-700 mb-6">${service.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Who is it for?</h2>
            <ul className="list-disc list-inside text-gray-700">
              ${(service.targetAudience || []).map((a) => `<li>${a}</li>`).join('\n              ')}
            </ul>
          </div>
          <div className="p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
            <p className="text-gray-700">From $${service.priceRangeUSD[0]} to $${service.priceRangeUSD[1]} (one-time/setup)</p>
          </div>
        </div>
        <a href="#contact" className="inline-block bg-black text-white px-6 py-3 rounded-md">${service.cta || 'Contact us'}</a>
      </div>
    </>
  );
};

export default ServicePage;
`;

  fs.writeFileSync(filePath, component);
  return true;
}

function updateRegistry(services) {
  const dataDir = path.join(__dirname, '..', 'data', 'services');
  ensureDir(dataDir);
  const registryPath = path.join(dataDir, 'services.json');
  let registry = [];
  if (fs.existsSync(registryPath)) {
    try {
      registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
    } catch {}
  }

  const bySlug = new Map(registry.map((s) => [s.slug, s]));
  let created = 0;

  for (const s of services) {
    if (!bySlug.has(s.slug)) {
      registry.push({
        slug: s.slug,
        name: s.name,
        description: s.description,
        priceRangeUSD: s.priceRangeUSD,
        category: s.category,
        createdAt: new Date().toISOString(),
      });
      created++;
    }
  }

  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
  return created;
}

function main() {
  const report = readLatestReport();
  if (!report) {
    console.error('No venture plan report found. Run venture-services-analyzer first.');
    process.exit(1);
  }
  let pagesCreated = 0;
  for (const service of report.services) {
    if (writeServicePage(service)) pagesCreated++;
  }
  const registryCreated = updateRegistry(report.services);
  console.log(`Service pages created: ${pagesCreated}, registry additions: ${registryCreated}`);
}

if (require.main === module) {
  main();
}