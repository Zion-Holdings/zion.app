const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'remote-roles.json');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Zion-Automation/1.0' } });
  if (!res.ok) throw new Error(`Request failed ${res.status} ${url}`);
  return res.json();
}

async function run() {
  const url = 'https://remoteok.com/api';
  let jobs = [];
  try {
    const data = await fetchJson(url);
    jobs = Array.isArray(data) ? data : [];
  } catch (e) {
    console.warn('RemoteOK fetch failed:', e.message);
  }

  const keywords = ['AI', 'ML', 'Agent', 'Agents', 'Web3', 'Solidity', 'DAO', 'LLM'];
  const items = jobs
    .filter((j) => j && j.position)
    .filter((j) => {
      const hay = `${j.position} ${j.company} ${(j.tags || []).join(' ')}`.toLowerCase();
      return keywords.some((k) => hay.includes(k.toLowerCase()));
    })
    .slice(0, 100)
    .map((j) => ({
      id: j.id,
      date: j.date,
      company: j.company,
      position: j.position,
      tags: j.tags || [],
      location: j.location || 'Remote',
      url: j.url || j.original || j.apply_url,
      logo: j.logo || null,
    }));

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'Remote roles relevant to AI/Agents/Web3 from RemoteOK',
    total: items.length,
    items,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Remote Roles written to ${OUTPUT_PATH} with ${items.length} items.`);
}

run().catch((err) => {
  console.error('Remote Roles failed:', err);
  process.exit(0);
});