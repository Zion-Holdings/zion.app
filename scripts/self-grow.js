#!/usr/bin/env node
import { readFile } from 'fs/promises';
import fetch from 'node-fetch';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY environment variable');
  process.exit(1);
}

async function loadFeedback() {
  try {
    const data = await readFile('data/feedback.json', 'utf8');
    return JSON.parse(data);
  } catch (e) {
    console.error('Failed to read feedback.json:', e.message);
    return [];
  }
}

async function generateIdeas(feedback) {
  const prompt =
    'Based on this feedback, suggest three short feature improvements for the Zion platform:\n' +
    feedback.map(f => `- ${f.message || f}`).join('\n');

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.choices[0].message.content.trim();
}

async function run() {
  const feedback = await loadFeedback();
  if (feedback.length === 0) {
    console.log('No feedback data found.');
    return;
  }
  const ideas = await generateIdeas(feedback);
  console.log('Suggested Features:\n' + ideas);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
