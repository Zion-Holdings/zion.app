#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const OpenAI = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const DEFAULT_PROMPTS = [
  { prompt: 'AI Devs in Brazil', region: 'Brazil', service: 'AI' },
  { prompt: 'Rent Servers in Kabul', region: 'Kabul', service: 'servers' },
  { prompt: 'AI Product Managers in Nairobi', region: 'Nairobi', service: 'PM' },
  { prompt: 'LLM Evaluators in Toronto', region: 'Toronto', service: 'LLM' },
];

async function generateOne({ prompt, region, service }) {
  const system = `You generate conversion-focused, SEO-optimized landing pages in HTML. Include:
- A compelling H1
- 2-3 subsections with H2/H3
- Short paragraphs, bullet lists
- Strong call-to-action for Zion Marketplace
Do not include <html>, <body>, or scripts.`;
  const user = `Topic: ${prompt}\nRegion: ${region || 'global'}\nService: ${service || 'general'}\nAudience: buyers looking to hire talent or rent equipment`;
  const resp = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.7,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
  });
  const bodyHtml = resp.choices?.[0]?.message?.content || '';

  const faqResp = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.5,
    messages: [
      { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}] for the topic.' },
      { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` },
    ],
  });
  let faq = [];
  try { faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]'); } catch {}

  const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const payload = {
    title: `Zion Marketplace — ${prompt}`,
    h1: prompt,
    bodyHtml,
    region,
    service,
    faq,
  };
  return { slug, payload };
}

async function main() {
  const promptsPath = path.join(process.cwd(), 'data', 'page-metadata', 'seo-seeds.json');
  let items = DEFAULT_PROMPTS;
  if (fs.existsSync(promptsPath)) {
    try { items = JSON.parse(fs.readFileSync(promptsPath, 'utf8')); } catch {}
  }
  const outDir = path.join(process.cwd(), 'data', 'page-metadata', 'seo');
  fs.mkdirSync(outDir, { recursive: true });

  for (const it of items) {
    const { slug, payload } = await generateOne(it);
    const file = path.join(outDir, `${slug}.json`);
    fs.writeFileSync(file, JSON.stringify(payload, null, 2));
    console.log('Generated', file);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });