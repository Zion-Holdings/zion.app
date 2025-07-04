/* eslint-env webextensions */

const OPENAI_API_KEY = '';
// Base URL for opening Zion pages in a new tab
const BASE_URL = 'https://app.ziontechgroup.com';

async function askZionGPT(prompt) {
  if (!OPENAI_API_KEY) return { answer: 'Model key missing' };

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!res.ok) {
      console.error('OpenAI request failed', res.status, await res.text());
      return { answer: 'Error contacting model' };
    }

    const data = await res.json();
    return { answer: data.choices?.[0]?.message?.content || '' };
  } catch (err) {
    console.error('OpenAI request error', err);
    return { answer: 'Error contacting model' };
  }
}

chrome.runtime.onMessage.addListener(async (message, sender) => {
  // Validate sender to prevent unauthorized access
  if (sender.id !== chrome.runtime.id) {
    const errorMessage =
      `Receiving message from unauthorized sender. ` +
      `Sender ID: ${sender.id || 'N/A (sender.id is undefined, possibly a webpage)'}, ` +
      `Extension ID: ${chrome.runtime.id}`;
    console.error(errorMessage);
    return { error: 'Unauthorized sender' };
  }

  try {
    if (message.type === 'ask') {
      return await askZionGPT(message.prompt);
    }

    if (message.type === 'post-job') {
      await chrome.tabs.create({ url: `${BASE_URL}/jobs/new` });
      return { ok: true };
    }

    if (message.type === 'resume-search') {
      await chrome.tabs.create({ url: `${BASE_URL}/talent` });
      return { ok: true };
    }

    if (message.type === 'view-notifications') {
      await chrome.tabs.create({ url: `${BASE_URL}/notifications` });
      return { ok: true };
    }

    // Unknown message type
    return { error: 'Unknown message type' };
  } catch (error) {
    console.error('Background script error:', error);
    return { error: error.message || 'Failed to process request' };
  }
});
