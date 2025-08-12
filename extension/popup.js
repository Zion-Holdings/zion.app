
async function ask() {
  const prompt = document.getElementById('prompt').value;
  if (!prompt.trim()) {
    document.getElementById('output').textContent = 'Please enter a prompt.';
    return;
  }
  
  // Show loading state
  const outputElement = document.getElementById('output');
  outputElement.textContent = 'Processing your request...';
  
  try {
    // Add timeout to prevent hanging message channels
    const messagePromise = chrome.runtime.sendMessage({ type: 'ask', prompt });
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 30000)
    );
    
    const res = await Promise.race([messagePromise, timeoutPromise]);
    
    if (res && res.answer) {
      outputElement.textContent = res.answer;
    } else if (res && res.error) {
      outputElement.textContent = `Error: ${res.error}`;
    } else {
      outputElement.textContent = 'No response from background script.';
    }
  } catch (err) {
    console.error('Failed to contact background script', err);
    if (err.message === 'Request timeout') {
      outputElement.textContent = 'Request timed out. Please try again.';
    } else if (err.message?.includes('message channel closed')) {
      outputElement.textContent = 'Connection lost. Please try again.';
    } else {
      outputElement.textContent = 'Error contacting background script.';
    }
  }
}

// Helper function to safely send messages to background script
async function safeMessageSend(message, action) {
  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 5000)
    );
    const messagePromise = chrome.runtime.sendMessage(message);
    
    const response = await Promise.race([messagePromise, timeoutPromise]);
    
    if (response && response.error) {
      console.error(`${action} failed:`, response.error);
    }
    return response;
  } catch (err) {
    console.error(`${action} message failed:`, err);
    return { error: err.message };
  }
}

// Attach handlers once the DOM is fully loaded to avoid null element errors
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ask')?.addEventListener('click', ask);

  document.getElementById('post-job')?.addEventListener('click', async () => {
    await safeMessageSend({ type: 'post-job' }, 'Post job');
  });
  
  document.getElementById('resume-search')?.addEventListener('click', async () => {
    await safeMessageSend({ type: 'resume-search' }, 'Resume search');
  });
  
  document.getElementById('view-notifications')?.addEventListener('click', async () => {
    await safeMessageSend({ type: 'view-notifications' }, 'View notifications');
  });
});
