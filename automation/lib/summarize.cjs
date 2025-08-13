#!/usr/bin/env node
'use strict';

const { OpenAI } = require('openai');

function heuristicSummary(text, maxSentences = 3) {
  const clean = (text || '').replace(/\s+/g, ' ').trim();
  if (!clean) return '';
  const sentences = clean.split(/(?<=[.!?])\s+/).slice(0, maxSentences);
  return sentences.join(' ');
}

async function summarizeWithOpenAI(text, opts = {}) {
  const apiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_KEY;
  if (!apiKey) return heuristicSummary(text, opts.maxSentences || 3);
  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize the following article into ${opts.bullets ? '3 concise bullet points' : 'a concise paragraph'} focusing on key facts and insights. Avoid hype and keep it factual.\n\n` +
      text.slice(0, 20000);
    const model = process.env.OPENAI_SUMMARY_MODEL || 'gpt-4o-mini';
    const resp = await client.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: 'You are a precise technical summarizer.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 300,
    });
    const out = resp.choices?.[0]?.message?.content?.trim();
    return out || heuristicSummary(text, opts.maxSentences || 3);
  } catch {
    return heuristicSummary(text, opts.maxSentences || 3);
  }
}

module.exports = {
  heuristicSummary,
  summarizeWithOpenAI,
};


