/* eslint-env webextensions */

const OPENAI_API_KEY = '';
// Base URL for opening Zion pages in a new tab
const BASE_URL = 'https://app.ziontechgroup.com';

async function askZionGPT(prompt) {
  if (!OPENAI_API_KEY) return { answer: 'Model key missing' };

  try {
    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 second timeout
    
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.error('OpenAI request failed', res.status, await res.text());
      return { answer: 'Error contacting model' };
    }

    const data = await res.json();
    return { answer: data.choices?.[0]?.message?.content || '' };
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('OpenAI request timed out');
      return { answer: 'Request timed out. Please try again.' };
    }
    console.error('OpenAI request error', error);
    return { answer: 'Error contacting model' };
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Validate sender to prevent unauthorized access
  if (sender.id !== chrome.runtime.id) {
    const errorMessage =
      `Receiving message from unauthorized sender. ` +
      `Sender ID: ${sender.id || 'N/A (sender.id is undefined, possibly a webpage)'}, ` +
      `Extension ID: ${chrome.runtime.id}`;
    console.error(errorMessage);
    try {
      sendResponse({ error: 'Unauthorized sender' });
    } catch (error) {
      console.error('Failed to send unauthorized response:', error);
    }
    return false; // Don't keep the message channel open
  }

  // Handle different message types
  if (message.type === 'ask') {
    // Handle async operation properly with error handling
    askZionGPT(message.prompt)
      .then(response => {
        try {
          sendResponse(response);
        } catch (error) {
          console.error('Error sending response:', error);
          // If sendResponse fails, we can't do much more
        }
      })
      .catch(error => {
        console.error('Ask ZionGPT error:', error);
        try {
          sendResponse({ error: error.message || 'Failed to process request' });
        } catch (sendError) {
          console.error('Error sending error response:', sendError);
        }
      });
    return true; // Keep the message channel open for async response
  }

  if (message.type === 'post-job') {
    try {
      chrome.tabs.create({ url: `${BASE_URL}/jobs/new` });
      sendResponse({ ok: true });
    } catch (error) {
      console.error('Post job error:', error);
      try {
        sendResponse({ error: 'Failed to open job posting page' });
      } catch (sendError) {
        console.error('Error sending post-job error response:', sendError);
      }
    }
    return false; // Synchronous response
  }
  
  if (message.type === 'resume-search') {
    try {
      chrome.tabs.create({ url: `${BASE_URL}/talent` });
      sendResponse({ ok: true });
    } catch (error) {
      console.error('Resume search error:', error);
      try {
        sendResponse({ error: 'Failed to open talent page' });
      } catch (sendError) {
        console.error('Error sending resume-search error response:', sendError);
      }
    }
    return false; // Synchronous response
  }
  
  if (message.type === 'view-notifications') {
    try {
      chrome.tabs.create({ url: `${BASE_URL}/notifications` });
      sendResponse({ ok: true });
    } catch (error) {
      console.error('View notifications error:', error);
      try {
        sendResponse({ error: 'Failed to open notifications page' });
      } catch (sendError) {
        console.error('Error sending view-notifications error response:', sendError);
      }
    }
    return false; // Synchronous response
  }

  // Unknown message type
  try {
    sendResponse({ error: 'Unknown message type' });
  } catch (error) {
    console.error('Error sending unknown message type response:', error);
  }
  return false; // Don't keep the message channel open
});
