
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

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (sender.id !== chrome.runtime.id) {
    const errorMessage = `Receiving message from unauthorized sender. Sender ID: ${sender.id || 'N/A (sender.id is undefined, possibly a webpage)'}, Extension ID: ${chrome.runtime.id}`;
    console.error(errorMessage);
    // If a response is expected for this message type, send an error response.
    // For example, if message.type === 'ask' or any other type that uses sendResponse.
    // This example assumes 'ask' is the primary one needing a response back on auth failure.
    if (message.type === 'ask') {
      sendResponse({ error: "Unauthorized sender" });
    }
    return true; // Return true if sendResponse might be called, otherwise just return.
                 // Or simply `return;` if no response path is guaranteed for unauthorized messages.
                 // Given the original structure, returning true is safer if any path might call sendResponse.
  }
  if (message.type === 'ask') {
    askZionGPT(message.prompt).then(response => {
      try {
        sendResponse(response);
      } catch (e) {
        console.warn("Failed to send response to sender for 'ask' message. Channel likely closed.", e.message);
      }
    });
    return true;
  }
  if (message.type === 'post-job') {
    chrome.tabs.create({ url: `${BASE_URL}/jobs/new` });
  }
  if (message.type === 'resume-search') {
    chrome.tabs.create({ url: `${BASE_URL}/talent` });
  }
  if (message.type === 'view-notifications') {
    chrome.tabs.create({ url: `${BASE_URL}/notifications` });
  }
});
