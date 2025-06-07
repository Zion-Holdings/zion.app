#!/usr/bin/env node
import process from 'process';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY environment variable');
  process.exit(1);
}

const prompt = process.argv.slice(2).join(' ');

if (!prompt) {
  console.error('Usage: node scripts/codex-bug-fix.js "<bug description>"');
  process.exit(1);
}

async function sendPrompt(message) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are Codex, an expert software engineer that fixes bugs in the Zion Tech Nexus application.' },
        { role: 'user', content: message }
      ],
      temperature: 0.3
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error: ${errorText}`);
  }

  const data = await response.json();
  console.log(data.choices[0].message.content);
}

sendPrompt(prompt).catch((err) => {
  console.error(err.message);
  process.exit(1);
});
