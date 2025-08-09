require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8787;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (_req, res) => {
  res.json({ ok: true, uptimeSec: process.uptime() });
});

function buildSystemPrompt() {
  return [
    'You are Zion AI Marketplace Assistant. Your job is to greet users, answer FAQs, and guide them through features.',
    'Keep answers concise, friendly, and helpful. Use bullet points and short paragraphs.',
    'If you are unsure, say so briefly and suggest how to proceed.',
    '',
    'Zion AI Marketplace overview:',
    '- Discover, compare, and deploy AI models and tools in one place',
    '- Find curated agents, datasets, and integrations',
    '- Manage billing, usage, and teams',
    '',
    'Key features to guide:',
    '- Browse & search models: filters, categories, ratings, and pricing',
    '- Model pages: capabilities, input/output formats, limits, and examples',
    '- One-click try: run test prompts and view responses',
    '- Add to workspace or project: install SDKs and add API keys',
    '- Billing: plans, credits, usage caps, invoices',
    '- Vendor onboarding: submit models, pricing, and docs',
    '- Support: help center, status page, and contact options',
    '',
    'FAQs:',
    '- Accounts: Sign up with email/SSO; verify email to enable deployments',
    '- Pricing: Free tier with limits; paid plans with monthly credits',
    '- Billing: Card required for paid plans; invoices downloadable from Billing > Invoices',
    '- Usage limits: Rate and monthly credit caps; can be adjusted on paid plans',
    '- Security: API keys stored encrypted; role-based access for teams',
    '- Data privacy: Inputs may be logged for abuse prevention; disable logging in settings if available',
    '- Deployments: Use REST or SDK; find snippets on each model page',
    '- Refunds: Case-by-case; contact support with invoice and description',
    '- Vendor listing: Apply via Vendor Portal; review usually within 3–5 business days',
    '',
    'Tone: Warm, professional, encouraging. Proactively offer next steps and links (use descriptive placeholders if URLs are unknown).'
  ].join('\n');
}

app.post('/api/chat', async (req, res) => {
  try {
    if (!OPENAI_API_KEY) {
      return res.status(500).json({ error: 'Server missing OPENAI_API_KEY' });
    }

    const { messages } = req.body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'Missing messages array' });
    }

    const systemMessage = { role: 'system', content: buildSystemPrompt() };
    const requestBody = {
      model: OPENAI_MODEL,
      temperature: 0.3,
      messages: [systemMessage, ...messages].slice(-24),
    };

    const completion = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        timeout: 45000,
      }
    );

    const choice = completion?.data?.choices?.[0];
    const content = choice?.message?.content || '';

    res.json({ reply: content, model: completion?.data?.model });
  } catch (error) {
    const status = error.response?.status || 500;
    const data = error.response?.data;
    console.error('OpenAI proxy error:', status, data || error.message);
    res.status(status).json({ error: 'Upstream error', detail: data || error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Zion AI Assistant server listening on http://localhost:${PORT}`);
  console.log('Static widget available at /widget.js');
});