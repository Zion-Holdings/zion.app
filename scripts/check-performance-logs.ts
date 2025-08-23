#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const LOG_FILE: string = process.env.PERFORMANCE_LOG_FILE || path.join('logs', 'performance.log');
const THRESHOLD_MS: number = parseInt(process.env.PERFORMANCE_THRESHOLD_MS || '500', 10);

function parseTimes(file: string): number[] {
  if (!fs.existsSync(file)) return [];
  const lines = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean);
  return lines
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      try {
        const obj = JSON.parse(trimmed);
        if (typeof obj.response_time_ms === 'number') return obj.response_time_ms as number;
      } catch (_err) {
        /* ignore parsing errors for invalid JSON */
      }
      const match = trimmed.match(/([0-9.]+)ms/);
      return match ? parseFloat(match[1]) : null;
    })
    .filter((n): n is number => typeof n === 'number');
}

function average(list: number[]): number {
  if (!list.length) return 0;
  return list.reduce((a, b) => a + b, 0) / list.length;
}

function createPR(avg: number): void {
  const branch = `perf-monitor-${Date.now()}`;
  const filePath = path.join('infra', 'scale-request.md');
  const message = `Average response time exceeded ${THRESHOLD_MS}ms: ${avg.toFixed(2)}ms\n` +
    'Consider scaling infrastructure or enabling profiling/tracing.';

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, message);

  execSync(`git checkout -b ${branch}`);
  execSync(`git add ${filePath}`);
  execSync(`git commit -m "chore: request infrastructure scaling"`);
  execSync(`git push -u origin ${branch}`);
  execSync(`gh pr create --title "chore: scale infrastructure" --body "Automated request from performance monitor."`, { stdio: 'inherit' });
}

function main() {
  const times = parseTimes(LOG_FILE);
  if (!times.length) {
    console.log('No log entries found');
    return;
  }
  const avg = average(times);
  console.log(`Average response time: ${avg.toFixed(2)}ms`);
  if (avg > THRESHOLD_MS) {
    console.log('Threshold exceeded. Opening PR...');
    createPR(avg);
  } else {
    console.log('Performance within threshold');
  }
}

main();

