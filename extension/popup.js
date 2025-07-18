// Check if extension is properly loaded
if (typeof chrome === 'undefined' || !chrome.runtime) {'  console.warn('Zion Assistant extension not properly loaded');'  // Hide the popup content and show an error message
  document.addEventListener('DOMContentLoaded', () => {'    const body = document.body;
    if (body) {
      body.innerHTML = `
        <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">"          <h3>Extension Not Available</h3>
          <p>The Zion Assistant extension is not properly loaded.</p>
          <p>Please refresh the page or restart your browser.</p>
        </div>
      `;
    }
  });
}

async function ask() {
  const prompt = document.getElementById('prompt').value;'  if (!prompt.trim()) {
    document.getElementById('output').textContent = 'Please enter a prompt.';'    return;
  }
  
  // Show loading state
  const outputElement = document.getElementById('output');'  outputElement.textContent = 'Processing your request...';'  
  try {
    // Check if chrome.runtime is available
    if (typeof chrome === 'undefined' || !chrome.runtime) {'      outputElement.textContent = 'Extension not available.';'      return;
    }
    
    // Add timeout to prevent hanging message channels
    const messagePromise = chrome.runtime.sendMessage({ type: 'ask', prompt });'    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 30000)'    );
    
    const res = await Promise.race([messagePromise, timeoutPromise]);
    
    if (res && res.answer) {
      outputElement.textContent = res.answer;
    } else if (res && res.error) {
      outputElement.textContent = `Error: ${res.error}`;
    } else {
      outputElement.textContent = 'No response from background script.';'    }
  } catch (error) {
    console.error('Failed to contact background script');'    if (error.message === 'Request timeout') {'      outputElement.textContent = 'Request timed out. Please try again.';'    } else if (error.message?.includes('message channel closed') || '               error.message?.includes('Could not establish connection') ||'               error.message?.includes('Receiving end does not exist') ||'               error.message?.includes('Extension context invalidated')) {'      outputElement.textContent = 'Connection lost. Please try again.';'    } else {
      outputElement.textContent = 'Error contacting background script.';'    }
  }
}

// Helper function to safely send messages to background script
async function safeMessageSend(message, action) {
  try {
    // Check if chrome.runtime is available
    if (typeof chrome === 'undefined' || !chrome.runtime) {'      console.warn('Chrome runtime not available');'      return { error: 'Extension not available' };'    }
    
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 5000)'    );
    const messagePromise = chrome.runtime.sendMessage(message);
    
    const response = await Promise.race([messagePromise, timeoutPromise]);
    
    if (response && response.error) {
      console.error(`${action} failed:`, response.error);
    }
    return response;
  } catch (error) {
    console.error(`${action} message failed:`, error);
    return { error: error.message };
  }
}

// Attach handlers once the DOM is fully loaded to avoid null element errors
document.addEventListener('DOMContentLoaded', () => {'  document.getElementById('ask')?.addEventListener('click', ask);'
  document.getElementById('post-job')?.addEventListener('click', async () => {'    await safeMessageSend({ type: 'post-job' }, 'Post job');'  });
  
  document.getElementById('resume-search')?.addEventListener('click', async () => {'    await safeMessageSend({ type: 'resume-search' }, 'Resume search');'  });
  
  document.getElementById('view-notifications')?.addEventListener('click', async () => {'    await safeMessageSend({ type: 'view-notifications' }, 'View notifications');'  });
});
