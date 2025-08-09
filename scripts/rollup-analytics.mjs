#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const reportsDir = path.join(ROOT, 'data', 'reports');
const installLog = path.join(reportsDir, 'install-clicks.log');
const sharesLog = path.join(reportsDir, 'shares.log');
const outDir = path.join(reportsDir, 'daily-analytics');

function parseLines(filePath) {
  try {
    const txt = fs.readFileSync(filePath, 'utf8');
    return txt.split('\n').filter(Boolean).map((l) => {
      try { return JSON.parse(l); } catch { return null; }
    }).filter(Boolean);
  } catch {
    return [];
  }
}

function startOfUTCDate(d = new Date()) {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function formatYMD(d = new Date()) {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const da = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${da}`;
}

function withinDay(tsISO, dayStart) {
  const t = new Date(tsISO).getTime();
  const start = dayStart.getTime();
  const end = start + 24 * 60 * 60 * 1000;
  return t >= start && t < end;
}

function rollupForDay(dayDate = new Date()) {
  const dayStart = startOfUTCDate(dayDate);
  const dayStr = formatYMD(dayDate);
  const installs = parseLines(installLog).filter((e) => withinDay(e.timestampISO, dayStart));
  const shares = parseLines(sharesLog).filter((e) => withinDay(e.timestampISO, dayStart));

  const installByPlatform = installs.reduce((acc, e) => {
    const key = e.platform || 'unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const installByPath = installs.reduce((acc, e) => {
    const key = e.sourcePath || 'unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const shareByPlatform = shares.reduce((acc, e) => {
    const key = e.platform || 'unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const shareByUrl = shares.reduce((acc, e) => {
    const key = e.url || 'unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const summary = {
    dateUTC: dayStr,
    generatedAtISO: new Date().toISOString(),
    installs: {
      total: installs.length,
      byPlatform: installByPlatform,
      byPath: installByPath,
    },
    shares: {
      total: shares.length,
      byPlatform: shareByPlatform,
      byUrl: shareByUrl,
    },
  };

  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `${dayStr}.json`);
  fs.writeFileSync(outFile, JSON.stringify(summary, null, 2));
  console.log(`Wrote summary to ${outFile}`);
}

// default: roll up for previous UTC day
const now = new Date();
const prev = new Date(now.getTime() - 24 * 60 * 60 * 1000);
rollupForDay(prev);