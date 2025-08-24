#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

async function main() {
  const root = process.cwd();
  const talentsFile = path.join(root, 'data', 'talents', 'talents.json');
  await fs.ensureDir(path.dirname(talentsFile));
  const talents = (await fs.pathExists(talentsFile)) ? await fs.readJSON(talentsFile) : [];

  const samples = [
    { name: 'Ava Nguyen', email: `ava.${Date.now()}@example.com`, skills: ['OpenAI', 'Next.js'], programTrack: 'AI Track', certificationStatus: 'pending' },
    { name: 'Liam Patel', email: `liam.${Date.now()}@example.com`, skills: ['LangChain', 'Python'], programTrack: 'AI Track', certificationStatus: 'pending' },
    { name: 'Sophia Kim', email: `sophia.${Date.now()}@example.com`, skills: ['React', 'Agents'], programTrack: 'AI Track', certificationStatus: 'pending' }
  ];

  const toAdd = samples[Math.floor(Math.random() * samples.length)];
  const now = new Date().toISOString();
  talents.push({ id: uuidv4(), ...toAdd, partnerId: 'autonomous-intake', createdAt: now });
  await fs.writeJSON(talentsFile, talents, { spaces: 2 });
  console.log(`[ai-talent-intake] Added ${toAdd.email}`);
}

main().catch(err => {
  console.error('[ai-talent-intake] Failed:', err);
  process.exit(1);
});