const fs = require('fs');
const path = require('path');
const OpenAI = require('openai').default;

const PROJECTS = [
  { name: 'Zion AI Marketplace', industry: 'AI Marketplaces', roundType: 'Seed', pitch: 'Marketplace to match AI services and tools with enterprise buyers, with trust, verification, and usage-based pricing.', website: 'https://ziontechgroup.com' },
];

function getOutDir() {
  return path.join(__dirname, '..', '..', 'data', 'autonomy');
}

async function generateMatches(openai, project) {
  const system = 'You are a venture scout. Return strictly JSON {investors: Investor[]} where Investor has name, website, why_fit, relevance_score (0-100), notable_investments (string[]), type, stages, location_focus.';
  const user = `Suggest the top 5 venture capital firms or angel investors that fund early-stage ${project.industry} like ${project.name}.
Context:
- Round: ${project.roundType}
- Pitch: ${project.pitch}
- Website: ${project.website}\n`;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.2,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
    response_format: { type: 'json_object' },
  });
  const content = completion.choices?.[0]?.message?.content || '{}';
  try {
    const parsed = JSON.parse(content);
    if (!parsed || !Array.isArray(parsed.investors)) throw new Error('Bad JSON schema');
    return parsed.investors.slice(0, 5);
  } catch (e) {
    return [];
  }
}

async function run() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('Missing OPENAI_API_KEY');
  const openai = new OpenAI({ apiKey });

  const outDir = getOutDir();
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const outputs = [];
  for (const project of PROJECTS) {
    const investors = await generateMatches(openai, project);
    const file = path.join(outDir, `investor-matches-${project.name.replace(/\s+/g, '-').toLowerCase()}.json`);
    const payload = { project, generatedAt: new Date().toISOString(), investors };
    fs.writeFileSync(file, JSON.stringify(payload, null, 2));
    outputs.push({ project: project.name, file });
  }

  return { outputs };
}

module.exports = { run };