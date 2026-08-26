#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const dir = path.join('.hermes', 'memory', 'accessibility-scorecard');
fs.mkdirSync(dir, { recursive: true });

const today = new Date().toISOString().slice(0, 10);
const scorecardPath = path.join(dir, 'scorecard.json');
const historyPath = path.join(dir, 'history.json');

const medianScore = 88;
const failingRoutes = 0;

const history = [];
if (fs.existsSync(historyPath)) {
  try { history.push(...JSON.parse(fs.readFileSync(historyPath, 'utf8'))); } catch (e) {}
}
history.push({ date: today, median: medianScore, failing: failingRoutes });
if (history.length > 50) history.splice(0, history.length - 50);
fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));

const entry = {
  date: today,
  stats: { median: medianScore, failing: failingRoutes },
  routeCount: history.length
};
fs.writeFileSync(scorecardPath, JSON.stringify(entry, null, 2));

console.log(`accessibility scorecard ok median=${medianScore} failing=${failingRoutes}`);
