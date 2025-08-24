#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readJson(p) {
  try {
    const raw = fs.readFileSync(p, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function writeJson(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

function median(values) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function generate() {
  const root = process.cwd();
  const services = readJson(path.join(root, 'data/services/services.json')) || [];
  const equipment = readJson(path.join(root, 'data/equipment.json')) || [];
  let talent = [];
  try {
    const talentModulePath = path.join(root, 'data/talent.ts');
    const ts = fs.readFileSync(talentModulePath, 'utf8');
    const jsonish = ts
      .replace(/export type[\s\S]*?;\n/gs, '')
      .replace(/export const TALENT_PROFILES: TalentProfile\[] = /, '')
      .replace(/;\n$/, '');
    // naive parse for our simple literal
    // eslint-disable-next-line no-eval
    talent = eval(jsonish);
  } catch (e) {
    talent = [];
  }

  const servicePrices = services.flatMap((s) => (Array.isArray(s.priceRangeUSD) ? s.priceRangeUSD : [])).filter((n) => typeof n === 'number');
  const serviceMinMedian = median(services.map((s) => s.priceRangeUSD?.[0]).filter((n) => typeof n === 'number'));
  const serviceMaxMedian = median(services.map((s) => s.priceRangeUSD?.[1]).filter((n) => typeof n === 'number'));

  const equipmentRates = equipment.map((e) => e.dailyRateUsd).filter((n) => typeof n === 'number');
  const equipmentMedian = median(equipmentRates);

  const talentRates = talent.map((t) => t.hourlyRateUsd).filter((n) => typeof n === 'number');
  const talentMedian = median(talentRates);

  const serviceCategories = Object.entries(
    services.reduce((acc, s) => ((acc[s.category] = (acc[s.category] || 0) + 1), acc), {})
  ).sort((a, b) => b[1] - a[1]);

  const topSkills = Object.entries(
    talent.reduce((acc, t) => {
      (t.skills || []).forEach((sk) => (acc[sk] = (acc[sk] || 0) + 1));
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      numServices: services.length,
      numEquipment: equipment.length,
      numTalent: talent.length,
    },
    pricing: {
      servicesMedianMinUsd: serviceMinMedian,
      servicesMedianMaxUsd: serviceMaxMedian,
      equipmentMedianDailyUsd: equipmentMedian,
      talentMedianHourlyUsd: talentMedian,
    },
    serviceCategories: serviceCategories.map(([name, count]) => ({ name, count })),
    topSkills: topSkills.map(([name, count]) => ({ name, count })),
  };

  writeJson(path.join(root, 'data/reports/marketplace-insights.json'), report);

  const statusPath = path.join(root, 'data/reports/automation-status.json');
  const status = readJson(statusPath) || { automations: {} };
  status.automations = status.automations || {};
  status.automations['marketplace-insights'] = {
    name: 'Marketplace Insights Generator',
    lastRunAt: report.generatedAt,
    status: 'success',
    output: 'data/reports/marketplace-insights.json',
  };
  status.lastUpdatedAt = report.generatedAt;
  writeJson(statusPath, status);
}

if (require.main === module) {
  generate();
}

module.exports = { generate };