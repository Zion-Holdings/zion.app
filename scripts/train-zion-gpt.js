#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises';
import { execSync } from 'child_process';
import path from 'path';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY environment variable');
  process.exit(1);
}

const VERSION = process.argv[2] || `v${new Date().toISOString()}`;

async function collectData() {
  const sources = [
    'data',
    'content',
    'public/reviews.json',
  ];
  let combined = '';
  for (const src of sources) {
    try {
      const data = await readFile(src, 'utf8');
      combined += `\n\n# Source: ${src}\n` + data;
    } catch (_err) {
      // ignore missing files during training data collection
    }
  }
  const datasetPath = path.join('reports', `zion-gpt-dataset-${Date.now()}.txt`);
  await writeFile(datasetPath, combined);
  return datasetPath;
}

async function fineTune(datasetPath) {
  console.log(`Starting fine-tune with dataset ${datasetPath}`);
  // Placeholder: call OpenAI fine-tuning API or other model training
  // execSync(`openai api fine_tunes.create -t ${datasetPath} -m gpt-3.5-turbo`);
}

async function writeSummary(datasetPath) {
  const summary = `ZionGPT-Core Training\nVersion: ${VERSION}\nDataset: ${datasetPath}\nDate: ${new Date().toISOString()}\n`;
  const summaryPath = path.join('reports', `zion-gpt-summary-${Date.now()}.md`);
  await writeFile(summaryPath, summary);
  console.log(`Summary written to ${summaryPath}`);
}

async function run() {
  const dataset = await collectData();
  await fineTune(dataset);
  await writeSummary(dataset);
}

run().catch((err) => {
  console.error('Training failed:', err);
  process.exit(1);
});
