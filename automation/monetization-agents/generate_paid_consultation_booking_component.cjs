#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const INPUT = path.join(ROOT, 'data', 'reports', 'monetization', 'monetization-actions.json');
const PROPOSALS_DIR = path.join(ROOT, 'data', 'reports', 'monetization', 'proposals');
if (!fs.existsSync(PROPOSALS_DIR)) fs.mkdirSync(PROPOSALS_DIR, { recursive: true });
function writeProposal(title, content) {
  const fp = path.join(PROPOSALS_DIR, title + '.md');
  const lines = ['# ' + title, '', content, ''];
  fs.writeFileSync(fp, lines.join('\n'));
  console.log('Proposal written:', fp);
}
const compDir = path.join(ROOT, 'components', 'monetization');
if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });
const compPath = path.join(compDir, 'PaidConsultation.tsx');
if (!fs.existsSync(compPath)) {
  fs.writeFileSync(compPath, "import React from 'react';\n\nexport default function PaidConsultation() {\n  return (\n    <section className=\"bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-8\">\n      <h3 className=\"text-xl font-semibold\">Book a paid consultation</h3>\n      <p className=\"mt-2\">Get expert guidance tailored to your needs.</p>\n      <a href=\"/contact\" className=\"btn btn-success mt-4\">Book now</a>\n    </section>\n  );\n}\n");
}
writeProposal('paid-consultation-component', 'Created components/monetization/PaidConsultation.tsx (idempotent). Include this on high-intent pages.');
