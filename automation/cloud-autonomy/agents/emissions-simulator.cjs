const fs = require('fs');
const path = require('path');

function simulate({ initialSupply, monthlyEmissionStart, decay, months }) {
  let supply = initialSupply;
  let emission = monthlyEmissionStart;
  const rows = [];
  for (let m = 1; m <= months; m++) {
    supply += emission;
    rows.push({ month: m, emission: Number(emission.toFixed(2)), cumulativeSupply: Number(supply.toFixed(2)) });
    emission = emission * (1 - decay);
  }
  return rows;
}

(function main() {
  const startedAt = new Date().toISOString();
  const params = { initialSupply: 100000000, monthlyEmissionStart: 1200000, decay: 0.02, months: 120 };
  const rows = simulate(params);

  const publicDir = path.resolve(__dirname, '../../../public/metrics');
  fs.mkdirSync(publicDir, { recursive: true });
  const csvPath = path.join(publicDir, 'emissions.csv');
  const jsonPath = path.join(publicDir, 'emissions.json');
  const csv = ['month,emission,cumulativeSupply', ...rows.map(r => `${r.month},${r.emission},${r.cumulativeSupply}`)].join('\n');
  fs.writeFileSync(csvPath, csv);
  fs.writeFileSync(jsonPath, JSON.stringify({ params, rows }, null, 2));

  const status = {
    name: 'Emissions Simulator',
    key: 'emissions-simulator',
    startedAt,
    finishedAt: new Date().toISOString(),
    success: true,
    metrics: { outputCsv: '/metrics/emissions.csv', outputJson: '/metrics/emissions.json', points: rows.length },
    error: null,
  };
  const outDir = path.resolve(__dirname, '../../../data/cloud-automations');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'emissions-simulator.json'), JSON.stringify(status, null, 2));
  console.log('[emissions-simulator] ok');
})();